const server = require('./app.js')

const port = 3333

server.listen(port, () => {
  console.log(`Server listening port: ${port}`)
})
