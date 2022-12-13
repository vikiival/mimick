
// import * as psp34 from '../../abi/psp34'
// import { Context, EvmLogHandlerOptions, Interaction } from './types'
// import { EvmLog, getEvmLog } from '@subsquid/ink-abi'

import { DataSelection } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'

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

export const contractFilter: DataSelection<{event: {args: boolean}}> = {
  data: {
    event: {args: true}
  }
}