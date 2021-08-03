const { successResponse, emptyResponse } = require('../../../@shared/helpers/http/http-helper')

exports.ReadPasswords = (repositoryPassword) => ({
  async handler (httpRequest) {
    const userPassword = await repositoryPassword.read({ user: httpRequest.accountId, passwordId: httpRequest.params.passwordId })
    if (!userPassword) {
      return emptyResponse()
    }
    return successResponse({ result: userPassword })
  }
})
