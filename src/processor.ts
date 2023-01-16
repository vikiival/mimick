import { lookupArchive } from '@subsquid/archive-registry'
import { SubstrateBatchProcessor } from '@subsquid/substrate-processor'
import { FullTypeormDatabase as Database } from '@subsquid/typeorm-store'
import 'dotenv/config'
import {  STARTING_BLOCK, RMRK_CONTRACT_ADDRESS } from './constants'

import { mainFrame } from './mappings'

const database = new Database()
const processor = new SubstrateBatchProcessor()

processor.setBlockRange({ from: STARTING_BLOCK })
processor.addContractsContractEmitted(RMRK_CONTRACT_ADDRESS, {
  data: {
    event: { args: true },
  },
} as const)

const archive = lookupArchive('shibuya', { release: 'FireSquid' })

processor.setDataSource({
  archive,
})

processor.run(database, mainFrame)

// processor.run(new TypeormDatabase(), async ctx => {
//     const txs = extractTransferRecords(ctx)

//     const ownerIds = new Set<string>()
//     txs.forEach(tx => {
//         if (tx.from) {
//             ownerIds.add(tx.from)
//         }
//         if (tx.to) {
//             ownerIds.add(tx.to)
//         }
//     })

//     const ownersMap = await ctx.store.findBy(Owner, {
//         id: In([...ownerIds])
//     }).then(owners => {
//         return new Map(owners.map(owner => [owner.id, owner]))
//     })

//     const transfers = txs.map(tx => {
//         const transfer = new Transfer({
//             id: tx.id,
//             amount: tx.amount,
//             block: tx.block,
//             timestamp: tx.timestamp
//         })

//         if (tx.from) {
//             transfer.from = ownersMap.get(tx.from)
//             if (transfer.from == null) {
//                 transfer.from = new Owner({id: tx.from, balance: 0n})
//                 ownersMap.set(tx.from, transfer.from)
//             }
//             transfer.from.balance -= tx.amount
//         }

//         if (tx.to) {
//             transfer.to = ownersMap.get(tx.to)
//             if (transfer.to == null) {
//                 transfer.to = new Owner({id: tx.to, balance: 0n})
//                 ownersMap.set(tx.to, transfer.to)
//             }
//             transfer.to.balance += tx.amount
//         }

//         return transfer
//     })

//     await ctx.store.save([...ownersMap.values()])
//     await ctx.store.insert(transfers)
// })

// interface TransferRecord {
//     id: string
//     from?: string
//     to?: string
//     amount: bigint
//     block: number
//     timestamp: Date
// }

// function extractTransferRecords(ctx: Ctx): TransferRecord[] {
//     const records: TransferRecord[] = []
//     for (const block of ctx.blocks) {
//         for (const item of block.items) {
//             if (item.name === 'Contracts.ContractEmitted' && item.event.args.contract === CONTRACT_ADDRESS) {
//                 const event = erc20.decodeEvent(item.event.args.data)
//                 if (event.__kind === 'Transfer') {
//                     records.push({
//                         id: item.event.id,
//                         from: event.from && ss58.codec(5).encode(event.from),
//                         to: event.to && ss58.codec(5).encode(event.to),
//                         amount: event.value,
//                         block: block.header.height,
//                         timestamp: new Date(block.header.timestamp)
//                     })
//                 }
//             }
//         }
//     }
//     return records
// }
