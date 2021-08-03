const { CreateUser } = require('../../controllers/create/create-user')
const { Bcrypt } = require('../../../../infra/adapters/anonymizer/bcrypt/bcrypt')
const { UserRepository } = require('../../../../infra/database/mysql/repository/user-repository')
const { createUserValidationFactory } = require('../validation/create-user-validation')

exports.createUserFactory = () => {
  const anonymize = new Bcrypt()
  const repository = new UserRepository()
  return CreateUser(createUserValidationFactory(), anonymize, repository)
}
