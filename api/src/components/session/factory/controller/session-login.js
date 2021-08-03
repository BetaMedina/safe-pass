const { LoginSession } = require('../../controllers/login/login-session')
const { Bcrypt } = require('../../../../infra/adapters/anonymizer/bcrypt/bcrypt')

const { JsonWebTokenAdapter } = require('../../../../infra/adapters/token/jwt/jwt-adapter')
const { UserRepository } = require('../../../../infra/database/mysql/repository/user-repository')
const { tokenValidationFactory } = require('../validation/login-session-validation')

exports.generateTokenFactory = () => {
  const token = new JsonWebTokenAdapter()
  const bcrypt = new Bcrypt()
  const repository = new UserRepository()
  return LoginSession(tokenValidationFactory(), repository, bcrypt, token)
}
