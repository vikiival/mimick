import { isEvent } from '@kodadot1/metasquid/is'
import {
  BatchBlock,
  ContractsContractEmittedEvent
} from '@subsquid/substrate-processor'

import { BaseBlock, Optional } from '@kodadot1/metasquid/types'
import { CONTRACT_ADDRESS, MARKETPLACE_ADDRESS } from '../../constants'
import { addressOf } from './helper'
import { decodeEvent, decodeMarketEvent } from './ink'
import logger from './logger'
import { matchMarketEvent, matchNFTEvent } from './matcher'
import { Context, ContractEvent, MetaEvent, Processor, WithBlock } from './types'

type BaseEvent = MetaEvent
type MagicItem = Processor & WithBlock
type ItemWithName = { name: '*' | 'Contracts.ContractEmitted' }

export function metaHandler(ctx: Context): BaseEvent[] {
  return ctx.blocks
    .map((block) => {
      const baseBlock = toBase(block)
      const events = enhanceItems(block.items, baseBlock)
      return events
    })
    .flat()
}

function enhanceItems(items: Processor[], baseBlock: BaseBlock): BaseEvent[] {
  const enhanceWithBlock = addBlock(baseBlock)
  // eslint-disable-next-line id-length, @typescript-eslint/no-unsafe-return
  return items
    .filter(isEvent)
    .filter(isContractEvent)
    .map(enhanceWithBlock)
    .map(toBaseEvent)
    .filter(notEmpty)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    // .map((e) => ({ ...baseBlock, ...e }))
}

function addBlock<T = Processor>(block: BaseBlock): (item: T) => T & WithBlock {
  return (item: T) => ({ ...item, block })
}

function isContractEvent(ctx: ItemWithName): boolean {
  return ctx.name === 'Contracts.ContractEmitted'
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function toBase(ctx: BatchBlock<Processor>): BaseBlock {
  const blockNumber = ctx.header.height.toString()
  const timestamp = new Date(ctx.header.timestamp)

  return { blockNumber, timestamp }
}

function toBaseEvent(ctx: MagicItem): Optional<MetaEvent> {
  if (ctx.name !== 'Contracts.ContractEmitted') {
    return null
  }

  const contractPublicKey = ctx.event.args.contract

  const { item, caller, contract } = universalEvent(ctx.event)

  switch (contractPublicKey) {
    case MARKETPLACE_ADDRESS:
      const marketEvent = decodeMarketEvent(item)
      return matchMarketEvent({ event: marketEvent, contract, block: ctx.block, caller })
    case CONTRACT_ADDRESS:
      const event = decodeEvent(item)
      return matchNFTEvent({ event, contract, block: ctx.block, caller })
    default:
      return null
  }
}


function universalEvent<T>(event: ContractEvent) {
  const item = event as ContractsContractEmittedEvent
  const mayCaller = event.extrinsic?.signature?.address.value
  const caller = addressOf(mayCaller);
  const contract = addressOf(event.args.contract)

  return {
    item,
    caller,
    contract,
  }
}



// export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
//   const baseCall = toBaseCall(ctx);
//   const unwrapped = unwrapFn(ctx);
//   return { ...baseCall, ...unwrapped };
// }
