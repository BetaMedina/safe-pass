const { successResponse, badRequest } = require('../../../@shared/helpers/http/http-helper')
const { CONSTANTS } = require('../../constants')
exports.LoginSession = (validateParameters, userRepository, hashPassword, tokenGenerator) => ({
  async handler (httpRequest) {
    const isInvalidParameters = validateParameters.validate(httpRequest.body)
    if (isInvalidParameters) {
      return badRequest({ err: isInvalidParameters })
    }

    const user = await userRepository.find(httpRequest.body.email)
    if (!user) {
      return badRequest({ err: CONSTANTS.USER_NOT_FOUND })
    }

    const validPass = await hashPassword.compare(httpRequest.body.password, user.password)
    if (!validPass) {
      return badRequest({ err: CONSTANTS.PASSWORD_ERROR })
    }

    const token = await tokenGenerator.hashGenerate({ id: user.id.toString(), profile: user.profile })
    if (!token) {
      return badRequest({ err: CONSTANTS.TOKEN_ERROR })
    }

    return successResponse({ token })
  }
})
