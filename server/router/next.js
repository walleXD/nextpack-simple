import express from 'express'
import next from 'next'

import conf from '../../client/next.config'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: './client', conf})
const handle = app.getRequestHandler()
const nextRouter = express.Router()

nextRouter.get('*', (req, res) => {
  return handle(req, res)
})

export {
  app,
  nextRouter
}