import { isEvent } from '@kodadot1/metasquid/is'
import {
  BatchBlock,
  ContractsContractEmittedEvent
} from '@subsquid/substrate-processor'

import { BaseBlock } from '@kodadot1/metasquid/types'
import { CONTRACT_ADDRESS } from '../../constants'
import { addressOf } from './helper'
import { decodeEvent, RealEvent } from './ink'
import logger from './logger'
import { matchNFTEvent } from './matcher'
import { BaseCall, Context, Processor, WithBlock } from './types'

type BaseEvent = BaseCall & RealEvent
type MagicItem = Processor & WithBlock

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
    .map(enhanceWithBlock)
    .map(toBaseEvent)
    .filter(notEmpty)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .map((e) => ({ ...baseBlock, ...e }))
}

function addBlock<T = Processor>(block: BaseBlock): (item: T) => T & WithBlock {
  return (item: T) => ({ ...item, block })
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function toBase(ctx: BatchBlock<Processor>): BaseBlock {
  const blockNumber = ctx.header.height.toString()
  const timestamp = new Date(ctx.header.timestamp)

  return { blockNumber, timestamp }
}

function toBaseEvent(ctx: MagicItem): any {
  logger.info(`[BASE EVENT]`, ctx)
  if (ctx.name === 'Contracts.ContractEmitted') {
    logger.info(
      `[CONTRACT]`,
      ctx.event.args.contract,
      ctx.event.args.contract === CONTRACT_ADDRESS
    )
  }
  if (
    ctx.name === 'Contracts.ContractEmitted' &&
    ctx.event.args.contract === CONTRACT_ADDRESS
  ) {
    const item = ctx.event as ContractsContractEmittedEvent
    const mayCaller = ctx.event.extrinsic?.signature?.address.value
    const caller = addressOf(mayCaller);
    const event = decodeEvent(item)
    const contract = addressOf(ctx.event.args.contract)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return matchNFTEvent({ event, contract, block: ctx.block, caller })
  }

  return null
}



// export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
//   const baseCall = toBaseCall(ctx);
//   const unwrapped = unwrapFn(ctx);
//   return { ...baseCall, ...unwrapped };
// }
