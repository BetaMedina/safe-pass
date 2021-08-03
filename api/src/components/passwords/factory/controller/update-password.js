const { PasswordRepository } = require('../../../../infra/database/mysql/repository/password-repository')
const { updatePasswords } = require('../../controllers/update/update-password')
const { updatePasswordService } = require('../service/update-password')
const { passwordBodyValidation } = require('../validation/password-body-validation')

exports.updatePassword = () => {
  const repository = new PasswordRepository()
  return updatePasswords(passwordBodyValidation(), repository, updatePasswordService())
}
