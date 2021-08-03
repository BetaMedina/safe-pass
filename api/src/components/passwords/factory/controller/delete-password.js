const { DeletePassword } = require('../../controllers/delete/delete-password')
const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')

exports.deletePasswordFactory = () => {
  const repository = new PasswordRepository()
  return DeletePassword(repository)
}
