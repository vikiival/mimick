import { ContractsContractEmittedEvent } from '@subsquid/substrate-processor'
import { DataSelection } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import * as psp34 from '../../abi/psp34'
import { Interaction } from '../../model'
import { possibleAddress } from './helper'
// import { Context, EvmLogHandlerOptions, Interaction } from './types'
// import { EvmLog, getEvmLog } from '@subsquid/ink-abi'

const EMPTY_ADDRESS = ''
export type RealEvent = psp34.Event
export type Transfer = psp34.Event_Transfer
export type Approval = psp34.Event_Approval
export type ChildSupport = psp34.Event_ChildAdded | psp34.Event_ChildAccepted | psp34.Event_ChildRemoved | psp34.Event_ChildRejected

export const isMint = (addrOne: string, addrTwo: string): boolean => {
  return addrOne === EMPTY_ADDRESS && addrTwo !== EMPTY_ADDRESS
}

export const isBurn = (addrOne: string, addrTwo: string): boolean => {
  return addrTwo === EMPTY_ADDRESS && addrOne !== EMPTY_ADDRESS
}

export const isTransfer = (addrOne: string, addrTwo: string): boolean => {
  return !(isMint(addrOne, addrTwo) || isBurn(addrOne, addrTwo))
}

export const whatIsThisTransfer = (transfer: Transfer): Interaction => {
  const from = possibleAddress(transfer.from)
  const to = possibleAddress(transfer.to)

  if (isMint(from, to)) {
    return Interaction.MINTNFT
  }
  if (isBurn(from, to)) {
    return Interaction.CONSUME
  }

  return Interaction.SEND
}

export function decodeEvent(item: ContractsContractEmittedEvent): psp34.Event {
  return psp34.decodeEvent(item.args.data)
}

// Experimental: Do not know how to use it
export function decodeConstructor(item: string): psp34.Constructor {
  return psp34.decodeConstructor(item)
}

export const contractFilter: DataSelection<{ event: { args: boolean } }> = {
  data: {
    event: { args: true },
  },
}
