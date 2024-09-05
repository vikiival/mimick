import { CONTRACT_ADDRESS, STARTING_BLOCK } from '../constants'
import { CollectionEntity as CE } from '../model'
import { Process } from '../processor'
import { handler } from './erc721'
import { contractList, forceCollectionCreate } from './registry/add'
import logger from './utils/logger'

export async function mainFrame(ctx: Process): Promise<void> {
  logger.info(`Processing ${ctx.blocks.length} blocks from ${ctx.blocks[0].header.height} to ${ctx.blocks[ctx.blocks.length - 1].header.height}`)

  if (ctx.blocks[0].header.height === STARTING_BLOCK) {
    const cached = contractList.map(forceCollectionCreate).filter(Boolean) as CE[]
    await ctx.store.save(cached)
    console.log(`Cached ${cached.length} collections`)
  }

  for (const block of ctx.blocks) {
    for (const event of block.events) {
      logger.info(`[EVENT]: ${event.name}, ${event.args.contract}`)
      if (event.name === 'Contracts.ContractEmitted' && event.args.contract === CONTRACT_ADDRESS) {
        await handler(event, ctx)
      }
    }
  }
}
