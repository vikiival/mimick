import { SubstrateExtrinsic } from '@subsquid/substrate-processor'
import { addressOf } from './helper';
import {
  BaseCall, CallWith, Context, MetaContext, UnwrapFunc,
} from './types';


// function toBaseCall(extrinsic: ExtrinsicHandlerContext): BaseCall {
//   const caller = extrinsic.extrinsic.signer.toString();
//   const blockNumber = extrinsic.block.height.toString();
//   const timestamp = new Date(extrinsic.block.timestamp);

//   return { caller, blockNumber, timestamp };
// }

// function toBaseEvent(ctx: MetaContext): BaseCall {}
function toBaseCall(ctx: Context): BaseCall {
  return toBase(ctx, ctx.extrinsic);
}

function toBase(ctx: MetaContext, extrinsic: SubstrateExtrinsic): BaseCall {
  const caller = addressOf(extrinsic?.signature?.address.value);
  const blockNumber = ctx.block.height.toString();
  const timestamp = new Date(ctx.block.timestamp);

  return { caller, blockNumber, timestamp };
}

export function unwrap<T>(ctx: Context, unwrapFn: UnwrapFunc<T>): CallWith<T> {
  const baseCall = toBaseCall(ctx);
  const unwrapped = unwrapFn(ctx);
  return { ...baseCall, ...unwrapped };
}
