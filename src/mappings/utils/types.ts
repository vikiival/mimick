import {
  BatchContext,
  CallHandlerContext,
  EventHandlerContext,
  ContractsContractEmittedHandlerContext,
} from '@subsquid/substrate-processor'
import { EntityManager } from 'typeorm'
import type {
  BatchProcessorItem,
  SubstrateBatchProcessor,
} from '@subsquid/substrate-processor'
import {
  AddEventItem,
  CallItem,
  EventItem,
} from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
// import { Interaction } from '../../model/generated/_interaction';
// import { Attribute } from '../../model/generated/_attribute';

export type BaseCall = {
  caller: string
  blockNumber: string
  timestamp: Date
}

// export { Interaction };

// export type CollectionInteraction = Interaction.MINT | Interaction.DESTROY;

// type OneOfInteraction = Interaction;

// export function collectionEventFrom(interaction: CollectionInteraction, basecall: BaseCall, meta: string): IEvent<CollectionInteraction> {
//   return eventFrom<CollectionInteraction>(interaction, basecall, meta);
// }

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
    {
      readonly event: {
        readonly args: true
      }
    }
  >
>
export type Store = EntityManager
export type Context = BatchContext<
  Store,
  BatchProcessorItem<SubstrateBatchProcessor<Processor>>
>
export type MetaContext = Context

// export type Optional<T> = T | null;

// export interface IEvent<T = OneOfInteraction> {
//   interaction: T;
//   blockNumber: bigint,
//   caller: string,
//   currentOwner: string,
//   timestamp: Date,
//   meta: string;
// }

export type NftId = `${number}-${number}`

export type BaseCollectionEvent = {
  id: string
  caller: string
}

export type BaseTokenEvent = {
  collectionId: string
  sn: string
}

export type OptionalMeta = {
  metadata?: string
}

// export type CreateCollectionEvent = BaseCollectionEvent & OptionalMeta & {
//   type: string | CollectionType;
// };

export type CreateTokenEvent = BaseTokenEvent & {
  caller: string
  metadata?: string
}

export type TransferTokenEvent = BaseTokenEvent & {
  caller: string
  to: string
}

export type ListTokenEvent = BaseTokenEvent & {
  caller: string
  price?: bigint
}

export type BuyTokenEvent = ListTokenEvent & {
  currentOwner: string
}

export type BurnTokenEvent = CreateTokenEvent

export type DestroyCollectionEvent = BaseCollectionEvent

export type AddRoyaltyEvent = BaseTokenEvent & {
  recipient: string
  royalty: number
}

export type PayRoyaltyEvent = AddRoyaltyEvent & WithAmount

export type BaseOfferEvent = BaseTokenEvent & WithCaller

export type OfferWithAmountEvent = BaseOfferEvent & WithAmount

export type AcceptOfferEvent = OfferWithAmountEvent & {
  maker: string
}

export type MakeOfferEvent = OfferWithAmountEvent & {
  expiresAt: bigint
}

export type CallWith<T> = BaseCall & T

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

export type UnwrapFunc<T> = (ctx: Context) => T
export type SanitizerFunc = (url: string) => string

export function ensure<T>(value: unknown): T {
  return value as T
}

export const createTokenId = (collection: string, id: string): string =>
  `${collection}-${id}`

// export const eventId = (id: string, event: Interaction): string => `${id}-${event}-${nanoid()}`;

export const createOfferId = (id: string, caller: string): string =>
  `${id}-${caller}`

const offerIdFrom = (collectionId: string, id: string, caller: string) =>
  createOfferId(createTokenId(collectionId, id), caller)

export const offerIdOf = (call: CallWith<BaseOfferEvent>): string =>
  offerIdFrom(call.collectionId, call.sn, call.caller)

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
