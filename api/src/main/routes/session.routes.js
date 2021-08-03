const { generateTokenFactory } = require('../../components/session/factory/controller/session-login')
const { adaptRoute } = require('../../core/adapters/express-route-adapter')

module.exports = (route) => {
  route.post('/login', adaptRoute(generateTokenFactory()))
}
