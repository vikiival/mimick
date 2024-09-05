// import {
//   BatchBlock,
//   ContractsContractEmittedEvent,
// } from '@subsquid/substrate-processor'
// import { CONTRACT_ADDRESS } from '../../constants'
// import { decodeEvent, RealEvent } from './ink'
// import logger from './logger'
// import { BaseCall, BatchContext, Context, Processor, SelectedEvent } from './types'
// import { Store } from '@subsquid/typeorm-store'

import { ArchiveCallWithOptionalValue, Optional } from "@kodadot1/metasquid/types"
import { Event } from "../../processor"
import { addressOf, onlyValue } from "./helper"
import { BaseCall } from "./types"

// // function toBaseCall(extrinsic: ExtrinsicHandlerContext): BaseCall {
// //   const caller = extrinsic.extrinsic.signer.toString();
// //   const blockNumber = extrinsic.block.height.toString();
// //   const timestamp = new Date(extrinsic.block.timestamp);

// //   return { caller, blockNumber, timestamp };
// // }

// type BaseEvent = BaseCall & RealEvent

// export function metaHandler(ctx: BatchContext<Store>): BaseEvent[] {
//   return ctx.blocks
//     .map((block) => {
//       const baseBlock = toBase(block)
//       const events = enhanceItems(block.events, baseBlock)
//       return events
//     })
//     .flat()
// }

// function enhanceItems(items: SelectedEvent[], baseBlock: BaseCall): BaseEvent[] {
//   // eslint-disable-next-line id-length
//   return items
//     .map(toBaseEvent)
//     .filter(notEmpty)
//     .map((e) => ({ ...baseBlock, ...e }))
// }

// function notEmpty<T>(value: T | null | undefined): value is T {
//   return value !== null && value !== undefined
// }

// function toBase(ctx: BatchBlock<Processor>): BaseCall {
//   // const caller = addressOf(event.extrinsic?.signature?.address.value);
//   const caller = ''
//   const blockNumber = ctx.header.height.toString()
//   const timestamp = new Date(ctx.header.timestamp)

//   return { caller, blockNumber, timestamp }
// }

// function toBaseEvent(ctx: Processor): RealEvent | null {
//   logger.info(`[EVENT]`, ctx.name)
//   if (ctx.name === 'Contracts.ContractEmitted') {
//     logger.info(
//       `[CONTRACT]`,
//       ctx.event.args.contract,
//       ctx.event.args.contract === CONTRACT_ADDRESS
//     )
//   }
//   if (
//     ctx.name === 'Contracts.ContractEmitted' &&
//     ctx.event.args.contract === CONTRACT_ADDRESS
//   ) {
//     const item = ctx.event as ContractsContractEmittedEvent
//     const event = decodeEvent(item)
//     return event
//   }

//   return null
// }

export function toBaseEvent(ctx: Event): BaseCall {
  const address = onlyValue(ctx.extrinsic?.signature?.address as ArchiveCallWithOptionalValue)
  const caller = addressOf(address)
  const blockNumber = ctx.block.height.toString()
  const timestamp = ctx.block.timestamp ? new Date(ctx.block.timestamp) : new Date()
  // const name = ctx.call?.name

  return { caller, blockNumber, timestamp }
}

export function contractOf(event: string): string
export function contractOf(event: Event): string
export function contractOf(event: Event | string): string {
  const value = typeof event === 'string' ? event : event.args.contract;
  return value//.toLowerCase();
}



// // export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
// //   const baseCall = toBaseCall(ctx);
// //   const unwrapped = unwrapFn(ctx);
// //   return { ...baseCall, ...unwrapped };
// // }
