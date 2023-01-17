import { RealEvent } from './ink';
import * as g from './getters'

export const matchNFTEvent = (event: RealEvent): any => {
  switch (event.__kind) {
    case 'Transfer':
      return g.getTokenTransferEvent(event)
    case 'Approval':
      return g.getTokenApprovalEvent(event)
    case 'ChildAdded':
      return g.getChildAddedEvent(event)
    case 'ChildAccepted':
      return g.getChildAcceptedEvent(event)
    case 'ChildRemoved':
      return g.getChildRemovedEvent(event)
    case 'ChildRejected':
      return g.getChildRejectedEvent(event)
    case 'AssetSet':
      return event
    case 'AssetAddedToToken':
      return event
    case 'AssetAccepted':
      return event
    case 'AssetRejected':
      return event
    case 'AssetRemoved':
      return event
    case 'AssetPrioritySet':
      return event
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-explicit-any
      throw new Error(`Unknown event kind: ${(event as any).__kind}`)
  }
}


