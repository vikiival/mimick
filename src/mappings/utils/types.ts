import type {
  BlockHeader,
  DataHandlerContext,
  SubstrateBatchProcessor,
  SubstrateBatchProcessorFields,
  Block as _Block,
  Call as _Call,
  Event as _Event,
  Extrinsic as _Extrinsic
} from '@subsquid/substrate-processor'
import { Store as SquidStore } from '@subsquid/typeorm-store'
import { nanoid } from 'nanoid'
import { EntityManager } from 'typeorm'

import { Interaction } from '../../model/generated/_interaction'
import { IEvent } from '@kodadot1/metasquid/types'

export type BaseCall = {
  caller: string
  blockNumber: string
  timestamp: Date
}
export { Interaction }

export function eventFrom<T>(interaction: T, { blockNumber, caller, timestamp }: BaseCall, meta: string, currentOwner?: string): IEvent<T> {
  return {
    interaction,
    blockNumber: BigInt(blockNumber),
    caller,
    currentOwner: currentOwner ?? caller,
    timestamp,
    meta,
  };
}

// export function attributeFrom(attribute: MetadataAttribute): Attribute {
//   return new Attribute({}, {
//     display: String(attribute.display_type),
//     trait: String(attribute.trait_type),
//     value: String(attribute.value),
//   });
// }

export const fieldSelection = {
  block: {
    timestamp: true
  },
  extrinsic: {
    signature: true,
  },
  call: {
      name: true,
      args: true,
      origin: true
  },
  event: {
      topics: true,
      name: true,
      args: true,
  }
} as const

export type SelectedFields = typeof fieldSelection

type Fields = SubstrateBatchProcessorFields<SubstrateBatchProcessor<SelectedFields>>
export type Block = _Block<Fields>
export type Event = _Event<Fields>
export type Call = _Call<Fields>
export type Extrinsic = _Extrinsic<Fields>
export type ManagedStore = SquidStore & { em: () => EntityManager }
export type Store =  SquidStore // & { em: () => EntityManager }
export type BatchContext<S = Store> = DataHandlerContext<Store, Fields>
// export type Context = BatchContext<
//   Store,
//   BatchProcessorItem<SubstrateBatchProcessor<Processor>>
// >

// export type Context<Store> = DataHandlerContext<Store, Fields>

export type MetaContext = Context
export type SelectedBlock = BlockHeader<Fields>
export type SelectedEvent = Event
export type SelectedExtrinsic = Extrinsic
export type SelectedCall = Call

export type Context<S = Store>  = {
  store: S
  block: SelectedBlock
  event: SelectedEvent
  extrinsic: SelectedExtrinsic | undefined
  call: SelectedCall | undefined
  // log: Logger
}

// export type Optional<T> = T | null;

// export interface IEvent<T = OneOfInteraction> {
//   interaction: T;
//   blockNumber: bigint,
//   caller: string,
//   currentOwner: string,
//   timestamp: Date,
//   meta: string;
// }

export type BaseCollectionEvent = WithCaller & {
  id: string
}

export type BaseTokenEvent = CollectionId & {
  sn: string
}

export type OptionalMeta = {
  metadata?: string
}

export type CreateCollectionEvent = BaseCollectionEvent &
  OptionalMeta & {
    type: string
  }

export type CreateTokenEvent = BaseTokenEvent &
  WithCount &
  WithCaller & {
    metadata: Promise<string>
  }

export type TransferTokenEvent = BaseTokenEvent & WithCaller & TransferTo

export type BurnTokenEvent = BaseTokenEvent & WithCaller

export type CallWith<T> = BaseCall & T

type TransferTo = {
  to: string
}

type CollectionId = {
  collectionId: string
}

export type EntityConstructor<T> = {
  new (...args: any[]): T
}

export type WithAmount = {
  amount: bigint
}

export type WithCaller = {
  caller: string
}

export type SomethingWithMeta = {
  metadata: string
}

export type SomethingWithOptionalMeta = {
  metadata?: string
}

export type WithCount = {
  count: bigint
}

export type UnwrapFunc<T> = (ctx: Context) => T
export type SanitizerFunc = (url: string) => string

export function ensure<T>(value: unknown): T {
  return value as T
}

export function createTokenId(collection: string, id: string): string {
  return `${collection}-${id}`
}

export const eventId = (id: string, event: Interaction): string =>
  `${id}-${event}-${nanoid()}`

export const createOfferId = (id: string, caller: string): string =>
  `${id}-${caller}`

export const tokenIdOf = (base: BaseTokenEvent): string =>
  createTokenId(base.collectionId, base.sn)

export type TokenMetadata = {
  name?: string
  description: string
  external_url?: string
  image: string
  animation_url?: string
  attributes?: MetadataAttribute[]
}

export type MetadataAttribute = {
  display_type?: DisplayType
  trait_type?: string
  value: number | string
}

export enum DisplayType {
  null,
  'boost_number',
  'number',
  'boost_percentage',
}
