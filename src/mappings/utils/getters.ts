// Disable eslint for in state of development
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
import { ChildSupport } from './ink'
import { TransferTokenEvent } from './types'

export function getTokenTransferEvent(event: Event_Transfer) {
  return {
    from: event.from ? addressOf(event.from) : null,
    to: event.to ? addressOf(event.to) : null,
    sn: idOf(event.id),
    __kind: event.__kind,
  }
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