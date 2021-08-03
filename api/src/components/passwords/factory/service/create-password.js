const { Crypto } = require('../../../../infra/adapters/crypter/crypto/crypto')
const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')
const { CreatePassword } = require('../../services/create-password')

exports.createPasswordService = () => {
  const crypto = new Crypto()
  const repository = new PasswordRepository()
  return CreatePassword(crypto, repository)
}
