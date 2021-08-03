const { ReadPasswords } = require('../../controllers/read/read-password')
const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')

exports.readPasswordsFactory = () => {
  const repository = new PasswordRepository()
  return ReadPasswords(repository)
}
