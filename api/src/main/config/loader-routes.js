/* eslint-disable node/no-path-concat */
const { Router } = require('express')
const { readdirSync } = require('fs')

module.exports = (app) => {
  const router = Router()

  app.use('/api', router)

  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (file.endsWith('.routes.js')) {
      (await import(`file:///${__dirname}/../routes/${file}`)).default(router)
    }
  })
}
