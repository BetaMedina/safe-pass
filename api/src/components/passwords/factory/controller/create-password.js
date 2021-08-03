const { CreatePassword } = require('../../controllers/create/create-password')
const { createPasswordService } = require('../service/create-password')
const { passwordBodyValidation } = require('../validation/password-body-validation')

exports.createPassword = () => {
  return CreatePassword(passwordBodyValidation(), createPasswordService())
}
