// Disable eslint for in state of development
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { eventFrom } from '@kodadot1/metasquid'
import { BaseBlock } from '@kodadot1/metasquid/types'
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
import { ChildSupport, whatIsThisTransfer, SuperEvent as Super } from './ink'
import { EventExtra, Interaction, tokenIdOf, TransferTokenEvent, WithId } from './types'


// Every Getter should return object that contains: event, and data 

export function getTokenTransferEvent(event: Event_Transfer, { block, caller, contract }: EventExtra) {
  const from = event.from ? addressOf(event.from) : '';
  const to = event.to ? addressOf(event.to) : '';
  const sn = idOf(event.id)

  const kind = whatIsThisTransfer(event)
  const meta = to
  const currentOwner = from
  

  return {
    __kind: event.__kind,
    interaction: {
      id: tokenIdOf({ collectionId: contract, sn }),
      from, to, sn
    },
    event: eventFrom<Interaction>(kind, { ...block, caller }, meta, currentOwner),
    contract,
    block,
    caller,
    update: () => {}
  }

}

// function getCreateTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra) {
//   const transfer = transferOf(event, contract)
// }

// function getTransferTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra) {
//   const transfer = transferOf(event, contract)
// }

// function getBurnTokenEvent(event: Event_Transfer, { block, caller, contract }: EventExtra) {
//   const transfer = transferOf(event, contract)
// }

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