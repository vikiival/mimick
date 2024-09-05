import { ArchiveCallWithOptionalValue } from "@kodadot1/metasquid/types"
import { Event } from "../../processor"
import { addressOf, onlyValue } from "./helper"
import { BaseCall } from "./types"

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
  return value;
}

// // export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
// //   const baseCall = toBaseCall(ctx);
// //   const unwrapped = unwrapFn(ctx);
// //   return { ...baseCall, ...unwrapped };
// // }
