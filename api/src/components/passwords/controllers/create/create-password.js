const { successResponse, badRequest } = require('../../../@shared/helpers/http/http-helper')
const { CONSTANTS } = require('../../constants')

exports.CreatePassword = (validateParameters, createPassword) => ({
  async handler (httpRequest) {
    const isInvalidParameters = validateParameters.validate(httpRequest.body)
    if (isInvalidParameters) {
      return badRequest({ err: isInvalidParameters })
    }

    const createPass = await createPassword.handler({ ...httpRequest.body, user: httpRequest.accountId })
    if (!createPass) {
      return badRequest({ err: CONSTANTS.CANT_CREATE_PASSWORD })
    }

    return successResponse({ msg: CONSTANTS.SUCCESS })
  }
})
