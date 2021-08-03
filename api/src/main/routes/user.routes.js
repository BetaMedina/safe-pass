const { createUserFactory } = require('../../components/user/factory/controller/create-user')
const { adaptRoute } = require('../../core/adapters/express-route-adapter')

module.exports = (route) => {
  route.post('/register', adaptRoute(createUserFactory()))
}
