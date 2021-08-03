const { ListPasswords } = require('../../controllers/list/list-passwords')
const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')
const { decipherPasswordFactory } = require('../service/decipher-passwords')

exports.listPasswordsFactory = () => {
  const repository = new PasswordRepository()
  return ListPasswords(repository, decipherPasswordFactory())
}
