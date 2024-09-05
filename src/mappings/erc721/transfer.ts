import { NFTEntity as NE } from '../../model'

import { getWith } from "@kodadot1/metasquid/entity"
import { Event as Log, Process, } from "../../processor"
import { createEvent } from '../shared/event'
import { contractOf, toBaseEvent } from "../utils/extract"
import { addressOf } from '../utils/helper'
import { decodeEvent } from "../utils/ink"
import { pending, success } from "../utils/logger"
import { createTokenId, Interaction } from "../utils/types"

const OPERATION = Interaction.SEND

export async function handleTokenTransfer(log: Log, context: Process): Promise<void> {
  pending(OPERATION, log.block.height.toString())
  const event = decodeEvent(log.args.data, log.topics)
  if (event.__kind !== 'Transfer') {
    return
  }

  const contract = contractOf(log)
  const id = createTokenId(contract, event.id.toString())
  const base = toBaseEvent(log)
  const entity = await getWith(context.store, NE, id, { collection: true })

  const oldOwner = entity.currentOwner
  entity.currentOwner = addressOf(event.to)
  entity.updatedAt = base.timestamp
  entity.price = 0n

  success(OPERATION, `${id} from ${base.caller} to ${event.to}`)
  await context.store.save(entity)
  await context.store.save(entity.collection)
  await createEvent(entity, OPERATION, base, entity.currentOwner, context.store, oldOwner)
}
