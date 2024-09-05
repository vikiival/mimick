// import { create } from '@kodadot1/metasquid/entity'
// import md5 from 'md5'
// import { NFTEntity } from '../../model'
// import { createEvent } from '../shared/event'
// import { contractOf, toBaseEvent } from '../utils/extract'
// import { Action, ItemStateUpdate, Log, createTokenId, eventFrom } from '../utils/types'
// import { Transfer } from './utils'
// import { tokenName, tokenUri } from '../utils/evm'
import { CollectionEntity as CE, NFTEntity as NE } from '../../model'

import { create, getOptional } from "@kodadot1/metasquid/entity"
import md5 from 'md5'
import { Event as Log, Process, } from "../../processor"
import { createEvent } from '../shared/event'
import { handleMetadata } from '../shared/metadata'
import { contractOf, toBaseEvent } from "../utils/extract"
import { addressOf, tokenName, tokenUri } from '../utils/helper'
import { decodeEvent } from "../utils/ink"
import { pending, success, warn } from "../utils/logger"
import { createTokenId, Interaction } from "../utils/types"

const OPERATION = Interaction.MINT

export async function handleTokenCreate(log: Log, context: Process): Promise<void> {
  pending(OPERATION, log.block.height.toString())
  const event = decodeEvent(log.args.data, log.topics)
  if (event.__kind !== 'Transfer') {
    return
  }

  const contract = contractOf(log)
  const id = createTokenId(contract, event.id.toString())
  const base = toBaseEvent(log)

  const collection = await getOptional<CE>(context.store, CE, contract)
  if (!collection) {
    warn(OPERATION, `collection ${contract} not found`)
    return
  }

  const final = create(NE, id, {})

  final.id = id
  final.hash = md5(id)
  final.issuer = base.caller
  final.currentOwner = addressOf(event.to)
  final.blockNumber = BigInt(base.blockNumber)
  final.collection = collection
  final.sn = event.id.toString();
  final.metadata = tokenUri(collection.baseUri, final.sn) || collection.metadata
  final.price = BigInt(0)
  final.burned = false
  final.createdAt = base.timestamp
  final.updatedAt = base.timestamp
  final.version = 721
  final.name = tokenName(collection.name, final.sn)
  // final.recipient = collection.recipient
  // final.royalty = collection.royalty

  collection.updatedAt = base.timestamp
  collection.nftCount += 1
  collection.supply += 1

  if (final.metadata) {
    const metadata = await handleMetadata(final.metadata, context.store)
    final.meta = metadata
    final.name = metadata?.name || final.name
    final.image = metadata?.image || final.image
    final.media = metadata?.animationUrl || final.media
  }

  success(OPERATION, `${final.id}`)
  await context.store.save(final)
  await context.store.save(collection)
  
  await createEvent(
    final,
    OPERATION,
    base,
    final.currentOwner,
    context.store,
    final.issuer !== final.currentOwner ? final.issuer : undefined
  )

}

// export function handleTokenCreate({ to, tokenId }: Transfer, context: Log): ItemStateUpdate {
//   const contract = contractOf(context)
//   const base = toBaseEvent(context)
//   const id = createTokenId(contract, tokenId)
//   return {
//     id,
//     contract,
//     state: {
//       currentOwner: to,
//       updatedAt: base.timestamp,
//       createdAt: base.timestamp,
//       blockNumber: BigInt(base.blockNumber),
//       hash: md5(id),
//       sn: tokenId.toString(),
//       price: 0n,
//       burned: false,
//       lewd: false,
//       version: 721
//     },
//     interaction: OPERATION,
//     event: createEvent(id, eventFrom(OPERATION, base, '', to)),
//     applyTo(item): NFTEntity {
//       const final = create(NFTEntity, id, { ...item, ...this.state })
//       this.event.nft = final
//       return final
//     },
//     applyFrom(collection) {
//       this.state = {
//         ...this.state,
//         collection,
//         issuer: collection.issuer,
//         name: tokenName(collection.name, this.state.sn),
//         metadata: tokenUri(collection.baseUri, this.state.sn)
//       }

//       // update collection
//       collection.nftCount += 1;
//       collection.supply += 1;

//       return collection
//     }
//   }
// }
