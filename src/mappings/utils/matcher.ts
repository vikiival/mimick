import { Optional } from '@kodadot1/metasquid/types'
import * as g from './getters'
import { SuperEvent, SuperMarketEvent } from './ink'
import { MetaEvent } from './types'

export const matchNFTEvent = ({ event, ...rest }: SuperEvent): Optional<MetaEvent> => {
  switch (event.__kind) {
    case 'Transfer':
      return g.getTokenTransferEvent(event, rest)
    // case 'Approval':
    //   return g.getTokenApprovalEvent(event)
    // case 'ChildAdded':
    //   return g.getChildAddedEvent(event)
    // case 'ChildAccepted':
    //   return g.getChildAcceptedEvent(event)
    // case 'ChildRemoved':
    //   return g.getChildRemovedEvent(event)
    // case 'ChildRejected':
    //   return g.getChildRejectedEvent(event)
    // case 'AssetSet':
    //   return event
    // case 'AssetAddedToToken':
    //   return event
    // case 'AssetAccepted':
    //   return event
    // case 'AssetRejected':
    //   return event
    // case 'AssetRemoved':
    //   return event
    // case 'AssetPrioritySet':
    //   return event
    default:
      return null
  }
}

export const matchMarketEvent = ({ event, ...rest }: SuperMarketEvent): Optional<MetaEvent> => {
  switch (event.__kind) {
    case 'CollectionRegistered':
    case 'TokenListed':
    case 'TokenBought':
    default:
      return null
  }

}


