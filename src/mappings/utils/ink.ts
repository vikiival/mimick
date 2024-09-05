import * as erc721 from '../../abi/erc721'
import { Interaction } from '../../model'
import { addressOf } from './helper'
import { debug } from 'console'

const EMPTY_ADDRESS = '6nfFzYQPHsjA4QTuXt2NuGReV9J4BdXBwZ8cgeJTrbVHShE'
export type RealEvent = erc721.Event
export type Transfer = erc721.Event_Transfer
export type Approval = erc721.Event_Approval

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
  const from = addressOf(transfer.from)
  const to = addressOf(transfer.to)

  debug('whatIsThisTransfer' as any, { from, to })

  if (isMint(from, to)) {
    return Interaction.MINT
  }
  if (isBurn(from, to)) {
    return Interaction.BURN
  }

  return Interaction.SEND
}

export function decodeEvent(item: any, topics: any): erc721.Event {
  return erc721.decodeEvent(item, topics)
}

