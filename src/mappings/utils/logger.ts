import { logger } from '@kodadot1/metasquid/logger'

type ErrorCallback = (error: Error) => void

export const logError = (e: Error | unknown, cb: ErrorCallback): void => {
  if (e instanceof Error) {
    cb(e)
  }
}

// eslint-disable-next-line import/no-default-export
export default logger
