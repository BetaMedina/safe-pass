const { createPassword } = require('../../components/passwords/factory/controller/create-password')
const { verifyToken } = require('../../core/factory/auth-middleware')
const { adaptRoute } = require('../../core/adapters/express-route-adapter')
const { adaptAuthMiddleware } = require('../../core/adapters/auth-middleware-adapter')
const { listPasswordsFactory } = require('../../components/passwords/factory/controller/list-passwords')
const { readPasswordsFactory } = require('../../components/passwords/factory/controller/read-password')
const { deletePasswordFactory } = require('../../components/passwords/factory/controller/delete-password')
const { updatePassword } = require('../../components/passwords/factory/controller/update-password')
const { freeLimit } = require('../../core/factory/free-limit-middleware')

module.exports = (route) => {
  route.post('/password', adaptAuthMiddleware(verifyToken()), adaptAuthMiddleware(freeLimit()), adaptRoute(createPassword()))
  route.get('/passwords', adaptAuthMiddleware(verifyToken()), adaptRoute(listPasswordsFactory()))
  route.get('/password/:passwordId', adaptAuthMiddleware(verifyToken()), adaptRoute(readPasswordsFactory()))
  route.delete('/password/:passwordId', adaptAuthMiddleware(verifyToken()), adaptRoute(deletePasswordFactory()))
  route.put('/password/:passwordId', adaptAuthMiddleware(verifyToken()), adaptRoute(updatePassword()))
}
