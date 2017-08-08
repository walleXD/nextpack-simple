import express from 'express'
import next from 'next'

import { apiRouter, nextRouter, app } from './server/router'
// import conf from './client/next.config'

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev, dir: './client', conf})
// const handle = app.getRequestHandler()

const start = async () => {
  const server = express()
  await app.prepare()

  server.use('/api', apiRouter)

  server.use('*', nextRouter)

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}

start()
// app
//   .prepare()
//   .then(() => {
//     const server = express()
//
//     server.use('/api', apiRouter)
//
//     server.get('*', (req, res) => {
//       return handle(req, res)
//     })
//
//     server.listen(3000, (err) => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:3000')
//     })
//   })
