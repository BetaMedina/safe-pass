const { badRequest, successResponse } = require('../../../@shared/helpers/http/http-helper')
const { CONSTANTS } = require('../../constants')

exports.updatePasswords = (validateParameters, repositoryPassword, updatePasswordService) => ({
  async handler (httpRequest) {
    const isInvalidParameters = validateParameters.validate(httpRequest.body)
    if (isInvalidParameters) {
      return badRequest({ err: isInvalidParameters })
    }

    const userPasswords = await repositoryPassword.read({ user: httpRequest.accountId, passwordId: httpRequest.params.passwordId })
    if (!userPasswords) {
      return badRequest({ err: CONSTANTS.PASSWORD_NOT_FOUND })
    }

    const isUpdated = await updatePasswordService.handler(httpRequest.body, userPasswords.password, httpRequest.params.passwordId)
    if (!isUpdated) {
      return badRequest({ err: CONSTANTS.CANT_UPDATE_PASSWORD })
    }

    return successResponse({ msg: CONSTANTS.SUCCESS })
  }
})
