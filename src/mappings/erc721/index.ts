import { Event as Log, Process } from '../../processor'

import { decodeEvent, Transfer, whatIsThisTransfer } from "../utils/ink"
import { debug } from '../utils/logger'
import { Interaction } from "../utils/types"
import { handleTokenBurn } from './burn'
import { handleTokenCreate } from './mint'
import { handleTokenTransfer } from './transfer'

function unwrapLog(log: Log): Transfer | null {
  const event = decodeEvent(log.args.data, log.topics)
  return event.__kind === 'Transfer' ? event : null
 }

export async function handler<B = null>(log: Log, ctx: Process): Promise<void> {
  const transfer = unwrapLog(log)

  if (!transfer) {
    return void 0
  }

  const kind = whatIsThisTransfer(transfer)

  debug('DEBUUUG' as any, {kind, transfer}, true)

  switch (kind) {
    case Interaction.MINT:
      await handleTokenCreate(log, ctx)
      break;
    case Interaction.BURN:
      await handleTokenBurn(log, ctx)
      break;
    case Interaction.SEND:
      await handleTokenTransfer(log, ctx)
      break;
  }
}