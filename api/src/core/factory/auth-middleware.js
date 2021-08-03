const { AuthMiddleware } = require('../middlewares/auth-middleware')
const { JsonWebTokenAdapter } = require('../../infra/adapters/token/jwt/jwt-adapter')

exports.verifyToken = () => {
  return new AuthMiddleware(new JsonWebTokenAdapter())
}
