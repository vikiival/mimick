import { RealEvent } from './ink';

export const matchNFTEvent = (event: RealEvent): RealEvent => {
  switch (event.__kind) {
    case 'Transfer':
      return event
    case 'Approval':
      return event
    case 'ChildAdded':
      return event
    case 'ChildAccepted':
      return event
    case 'ChildRemoved':
      return event
    case 'ChildRejected':
      return event
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


