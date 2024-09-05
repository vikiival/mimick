import { TypeormDatabase as Database } from '@subsquid/typeorm-store'
import { mainFrame } from './mappings'
import { processor } from './processor'

const database = new Database()

processor.run(database, mainFrame)