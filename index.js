import express from 'express'

import {
  apiRouter,
  nextRouter,
  app
} from './server/router'

const start = async () => {
  await app.prepare()
  const server = express()

  server.use('/api', apiRouter)

  server.use('*', nextRouter)

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}

start()
