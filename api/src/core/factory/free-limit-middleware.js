const { FreeLimitMiddleware } = require('../middlewares/free-limit-middleware')
const { PasswordRepository } = require('../../infra/database/mysql/repository/password-repository')

exports.freeLimit = () => {
  return new FreeLimitMiddleware(new PasswordRepository())
}
