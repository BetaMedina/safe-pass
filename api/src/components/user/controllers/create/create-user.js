const { successResponse, badRequest } = require('../../../@shared/helpers/http/http-helper')
const { CONSTANTS } = require('../../constants')
exports.CreateUser = (validateParameters, hashingPass, userRepository) => ({
  async handler (httpRequest) {
    const isInvalidParameters = validateParameters.validate(httpRequest.body)
    if (isInvalidParameters) {
      return badRequest({ err: isInvalidParameters.message })
    }

    const verifyMail = await userRepository.find(httpRequest.body.email)
    if (verifyMail) {
      return badRequest({ err: CONSTANTS.DUPLICATE_MAIL })
    }

    const hashed = await hashingPass.crypt(httpRequest.body.password)
    if (!hashed) {
      return badRequest({ err: CONSTANTS.PASSWORD_ERROR })
    }

    const createdUser = await userRepository.create({ ...httpRequest.body, password: hashed })
    if (!createdUser) {
      return badRequest({ err: CONSTANTS.USER_ERROR })
    }

    return successResponse({ msg: CONSTANTS.SUCCESS })
  }
})
