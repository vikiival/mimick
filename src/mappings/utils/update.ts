import { RealEvent } from './ink';
import { NFTEntity } from '../../model'

type Updater<T> = (entity: T, transition: Partial<T>) => T
type ItemUpdater = Updater<NFTEntity>

export function getUpdater({ __kind: kind }: RealEvent): ItemUpdater | undefined {
  switch (kind) {
    case 'Transfer':
      return undefined
    case 'Approval':
      return undefined
    case 'ChildAdded':
      return undefined
    case 'ChildAccepted':
      return undefined
    case 'ChildRemoved':
      return undefined
    case 'ChildRejected':
      return undefined
    case 'AssetSet':
      return undefined
    case 'AssetAddedToToken':
      return undefined
    case 'AssetAccepted':
      return undefined
    case 'AssetRejected':
      return undefined
    case 'AssetRemoved':
      return undefined
    case 'AssetPrioritySet':
      return undefined
    default:
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-explicit-any
      throw new Error(`Unknown event kind: ${kind}`)
  }
}

// export function create(item: NFTEntity, state: Partial<NFTEntity>): Updater<NFTEntity> {

// }

// export function send(item: NFTEntity, state: Partial<NFTEntity>): Updater<NFTEntity> {
  
// }

// export function burn(item: NFTEntity, state: Partial<NFTEntity>): Updater<NFTEntity> {

// }