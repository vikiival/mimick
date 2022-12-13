
// import * as psp34 from '../../abi/psp34'
// import { Context, EvmLogHandlerOptions, Interaction } from './types'
// import { EvmLog, getEvmLog } from '@subsquid/ink-abi'

// export type RealTransferEvent = psp34.Event_Transfer


// export const isMint = (addrOne: string, addrTwo: string) => {
//   return addrOne === EMPTY_ADDRESS && addrTwo !== EMPTY_ADDRESS
// }

// export const isBurn = (addrOne: string, addrTwo: string) => {
//   return addrTwo === EMPTY_ADDRESS && addrOne !== EMPTY_ADDRESS
// }

// export const isTransfer = (addrOne: string, addrTwo: string) => {
//   return !(isMint(addrOne, addrTwo) || isBurn(addrOne, addrTwo))
// }

// export const whatIsThisTransfer = (transfer: RealTransferEvent): Interaction => {
//   const { from, to } = transfer
//   if (isMint(from, to)) {
//     return Interaction.MINTNFT
//   }
//   if (isBurn(from, to)) {
//     return Interaction.CONSUME
//   }

//   return Interaction.SEND
// }

// export function decode721Transfer(ctx: Context): psp34.Transfer0Event {
//   const log = getEvmLog(ctx, ctx.event.)
//   return psp34.events["Transfer(address,address,uint256)"].decode(log)
// }

// export function decode1155SingleTransfer(ctx: Context): erc1155.TransferSingle0Event {
//   const log = getEvmLog(ctx, ctx.event)
//   return erc1155.events["TransferSingle(address,address,address,uint256,uint256)"].decode(log)
// }

// export function decode1155MultiTransfer(ctx: Context): erc1155.TransferBatch0Event {
//   const log = getEvmLog(ctx, ctx.event)
//   return erc1155.events["TransferBatch(address,address,address,uint256[],uint256[])"].decode(log)
// }



// export const transferFilter: EvmLogHandlerOptions = {
//   filter: [psp34.e["Transfer(address,address,uint256)"].topic],
// }

