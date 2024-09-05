import { NFTEntity as NE } from '../../model'

import { getWith } from "@kodadot1/metasquid/entity"
import { Event as Log, Process, } from "../../processor"
import { createEvent } from '../shared/event'
import { contractOf, toBaseEvent } from "../utils/extract"
import { decodeEvent } from "../utils/ink"
import { pending, success } from "../utils/logger"
import { createTokenId, Interaction } from "../utils/types"

const OPERATION = Interaction.BURN

export async function handleTokenBurn(log: Log, context: Process): Promise<void> {
  pending(OPERATION, log.block.height.toString())
  const event = decodeEvent(log.args.data, log.topics)
  if (event.__kind !== 'Transfer') {
    return
  }

  const contract = contractOf(log)
  const id = createTokenId(contract, event.id.toString())
  const base = toBaseEvent(log)
  const entity = await getWith(context.store, NE, id, { collection: true })

  entity.burned = true
  entity.updatedAt = base.timestamp
  entity.price = 0n

  entity.collection.supply -= 1
  entity.collection.updatedAt = base.timestamp
  const meta = entity.name ?? ''
  success(OPERATION, `${id} (${meta}) by ${base.caller}`)
  await context.store.save(entity)
  await context.store.save(entity.collection)
  await createEvent(entity, OPERATION, base, meta, context.store)
}
