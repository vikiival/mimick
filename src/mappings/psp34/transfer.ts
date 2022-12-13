import { unwrap } from '../utils/extract'
import logger from '../utils/logger'
import { serializer } from '../utils/serializer'
import { Context } from '../utils/types'

export async function handleTokenTransfer(context: Context): Promise<void> {
  logger.pending(`[SEND]: ${context.block.height}`)
  const event = unwrap(context, () => ({}))
  await new Promise((resolve) => setTimeout(resolve, 10))
  logger.info(`[SEND]: ${JSON.stringify(event, serializer, 2)}`)
}