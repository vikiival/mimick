import type {
  BatchProcessorItem,
  ContractsContractEmittedEvent,
  SubstrateBatchProcessor
} from '@subsquid/substrate-processor'
import { BatchContext } from '@subsquid/substrate-processor'
import {
  AddEventItem,
  CallItem,
  EventItem
} from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { nanoid } from 'nanoid'
import { EntityManager } from 'typeorm'

import { BaseBlock, IEvent } from '@kodadot1/metasquid/types'
import { Interaction } from '../../model/generated/_interaction'
import { CollectionEntity, NFTEntity } from '../../model'

export type BaseCall = {
  caller: string
  blockNumber: string
  timestamp: Date
}

export { Interaction }

// export function eventFrom<T>(interaction: T, { blockNumber, caller, timestamp }: BaseCall, meta: string, currentOwner?: string): IEvent<T> {
//   return {
//     interaction,
//     blockNumber: BigInt(blockNumber),
//     caller,
//     currentOwner: currentOwner ?? caller,
//     timestamp,
//     meta,
//   };
// }

// export function attributeFrom(attribute: MetadataAttribute): Attribute {
//   return new Attribute({}, {
//     display: String(attribute.display_type),
//     trait: String(attribute.trait_type),
//     value: String(attribute.value),
//   });
// }

export type Processor = AddEventItem<
  EventItem<'*', false> | CallItem<'*', false>,
  EventItem<
    'Contracts.ContractEmitted',
    true
  >
>
export type Store = EntityManager
export type Context = BatchContext<
  Store,
  BatchProcessorItem<SubstrateBatchProcessor<Processor>>
>
export type MetaContext = Context


export type ContractEvent = Omit<ContractsContractEmittedEvent, "name"> & {
  name: "Contracts.ContractEmitted";
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

export type WithId = {
  id: string
}

export type BaseCollectionEvent = WithCaller & WithId

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

export type WithBlock = {
  block: BaseBlock
}

export type WithContract = {
  contract: string
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

export interface StateMapKey {
  [Interaction.MINT]: MetaEvent<CollectionEntity>[]
  [Interaction.MINTNFT]: MetaEvent<NFTEntity>[]
  REST: MetaEvent<NFTEntity>[]
}

export class StateMap<T extends keyof StateMapKey> extends Map<
  string,
  StateMapKey[T]
> {}


export type MetaEvent<T = NFTEntity> = {
  state: Partial<T>
  event: IEvent<Interaction>
  block: BaseBlock
  // caller: string,
  id: string,
  contract: string,
  interaction: Interaction
}

export type WithHooks = {
  before?: (ctx: Context) => void | Promise<void>
  after?: (ctx: Context) => void | Promise<void>
}

export type EventExtra = WithBlock & WithCaller & WithContract

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
