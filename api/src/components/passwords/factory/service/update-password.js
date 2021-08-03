const { Crypto } = require('../../../../infra/adapters/crypter/crypto/crypto')
const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')
const { updatePassword } = require('../../services/update-password')

exports.updatePasswordService = () => {
  const crypto = new Crypto()
  const repository = new PasswordRepository()
  return updatePassword(crypto, repository)
}
