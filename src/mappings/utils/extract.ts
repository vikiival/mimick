import {
  BatchBlock,
  ContractsContractEmittedEvent,
} from '@subsquid/substrate-processor'
import { CONTRACT_ADDRESS } from '../../constants'
import { decodeEvent, RealEvent } from './ink'
import logger from './logger'
import { BaseCall, Context, Processor } from './types'

// function toBaseCall(extrinsic: ExtrinsicHandlerContext): BaseCall {
//   const caller = extrinsic.extrinsic.signer.toString();
//   const blockNumber = extrinsic.block.height.toString();
//   const timestamp = new Date(extrinsic.block.timestamp);

//   return { caller, blockNumber, timestamp };
// }

type BaseEvent = BaseCall & RealEvent

export function metaHandler(ctx: Context): BaseEvent[] {
  return ctx.blocks
    .map((block) => {
      const baseBlock = toBase(block)
      const events = enhanceItems(block.items, baseBlock)
      return events
    })
    .flat()
}

function enhanceItems(items: Processor[], baseBlock: BaseCall): BaseEvent[] {
  // eslint-disable-next-line id-length
  return items
    .map(toBaseEvent)
    .filter(notEmpty)
    .map((e) => ({ ...baseBlock, ...e }))
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function toBase(ctx: BatchBlock<Processor>): BaseCall {
  // const caller = addressOf(event.extrinsic?.signature?.address.value);
  const caller = ''
  const blockNumber = ctx.header.height.toString()
  const timestamp = new Date(ctx.header.timestamp)

  return { caller, blockNumber, timestamp }
}

function toBaseEvent(ctx: Processor): RealEvent | null {
  logger.info(`[EVENT]`, ctx.name)
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
    const event = decodeEvent(item)
    return event
  }

  return null
}

// export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
//   const baseCall = toBaseCall(ctx);
//   const unwrapped = unwrapFn(ctx);
//   return { ...baseCall, ...unwrapped };
// }
