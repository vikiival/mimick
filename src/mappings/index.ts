import { toUniqueSet } from '@kodadot1/metasquid'
import { findByIdListAsMap } from '@kodadot1/metasquid/entity'
// import { unwrap } from '../utils/extract'
import { metaHandler } from './utils/extract'
import logger from './utils/logger'
import { serializer } from './utils/serializer'
import { Context } from './utils/types'
import { NFTEntity } from '../model'

export async function mainFrame(context: Context): Promise<void> {
  const events = metaHandler(context)

  const idSet = toUniqueSet(events)
  const entities = await findByIdListAsMap(context.store, NFTEntity, idSet)

  

  await new Promise(resolve => setTimeout(resolve, 10))
  for (const e of events) {
    logger.info(`[EVENT]: ${JSON.stringify(e, serializer, 2)}`)
  }
}