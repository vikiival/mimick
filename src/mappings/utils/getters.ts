// Disable eslint for in state of development
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { eventFrom } from '@kodadot1/metasquid'
import md5 from 'md5'
import {
  Event_Transfer,
  Event_Approval,
  Event_ChildAdded,
  Event_ChildAccepted,
  Event_ChildRemoved,
  Event_ChildRejected,
  // TODO: uncomment when PSP34 is updated
  // Event_AssetSet,
  // Event_AssetAddedToToken,
  // Event_AssetAccepted,
  // Event_AssetRejected,
  // Event_AssetRemoved,
  // Event_AssetPrioritySet,
} from '../../abi/psp34'
import { addressOf, idOf } from './helper'
import { ChildSupport, whatIsThisTransfer } from './ink'
import { EventExtra, Interaction, MetaEvent, tokenIdOf, TransferTokenEvent, WithId } from './types'


// Every Getter should return object that contains: event, and data 

export function getTokenTransferEvent(event: Event_Transfer, extra: EventExtra): MetaEvent {
  const kind = whatIsThisTransfer(event)

  switch (kind) {
    case Interaction.MINTNFT:
      return getCreateTokenEvent(event, extra)
    case Interaction.SEND:
      return getTransferTokenEvent(event, extra)
    case Interaction.CONSUME:
      return getBurnTokenEvent(event, extra)
    default:
      throw new Error(`Unknown transfer kind: ${kind}`)
  }
}

function getCreateTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra): MetaEvent {
  const { id, caller: from, to, sn, collectionId } = transferOf(event, contract)

  return {
    id,
    block,
    contract,
    interaction: Interaction.MINTNFT,
    event: eventFrom(Interaction.MINTNFT, { ...block, caller }, '', to),
    state: {
      id,
      hash: md5(id),
      issuer: caller,
      currentOwner: caller,
      blockNumber: BigInt(block.blockNumber),
      sn,
      price: BigInt(0),
      burned: false,
      createdAt: block.timestamp,
      updatedAt: block.timestamp
    },
  }
}

function getTransferTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra): MetaEvent {
  const { id, caller: from, to, sn, collectionId } = transferOf(event, contract)

  return {
    id,
    block,
    contract,
    interaction: Interaction.SEND,
    event: eventFrom(Interaction.SEND, { ...block, caller }, to, from),
    state: {
      currentOwner: to,
      updatedAt: block.timestamp
    },
  }
}

function getBurnTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra): MetaEvent {
  const { id, caller: from, to, sn, collectionId } = transferOf(event, contract)

  return {
    id,
    block,
    contract,
    interaction: Interaction.CONSUME,
    event: eventFrom(Interaction.CONSUME, { ...block, caller }, '', from),
    state: {
      burned: true,
      updatedAt: block.timestamp
    },
  }
}

function transferOf(event: Event_Transfer, collectionId: string): TransferTokenEvent & WithId {
  const from = event.from ? addressOf(event.from) : '';
  const to = event.to ? addressOf(event.to) : '';
  const sn = idOf(event.id)
  const id = tokenIdOf({ collectionId, sn })

  return { id, caller: from, to, sn, collectionId }
}

export function getTokenApprovalEvent(event: Event_Approval) {
  return {
    from: addressOf(event.from),
    to: addressOf(event.to),
    sn: event.id ? idOf(event.id) : null,
    approved: event.approved,
    __kind: event.__kind,
  }
}

function childOf(event: ChildSupport) {
  const collection = 'childCollection' in event ? event.childCollection : event.collection
  const token = 'childTokenId' in event ? event.childTokenId : event.child
  const parent = 'to' in event ? event.to : event.parent

  return {
    parent: idOf(parent),
    collection: addressOf(collection),
    child: idOf(token),
    __kind: event.__kind,
  }
}

// TODO: mark what operstiation should be performed

export function getChildAddedEvent(event: Event_ChildAdded) {
  return {
    ...childOf(event),
  }
}

export function getChildAcceptedEvent(event: Event_ChildAccepted) {
  return {
    ...childOf(event),
  }
}

export function getChildRemovedEvent(event: Event_ChildRemoved) {
  return {
    ...childOf(event),
  }
}

export function getChildRejectedEvent(event: Event_ChildRejected) {
  return {
    ...childOf(event),
  }
}