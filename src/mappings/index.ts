// import { unwrap } from '../utils/extract'
import { metaHandler } from './utils/extract'
import logger from './utils/logger'
import { serializer } from './utils/serializer'
import { Context } from './utils/types'

export async function mainFrame(context: Context): Promise<void> {
  const event = metaHandler(context)
  // sleep for 1 second to avoid rate limit
  await new Promise(resolve => setTimeout(resolve, 10))
  for (const e of event) {
    logger.info(`[EVENT]: ${JSON.stringify(e, serializer, 2)}`)
  }
}