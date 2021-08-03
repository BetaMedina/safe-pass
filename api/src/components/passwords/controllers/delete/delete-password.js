const { acceptedResponse, badRequest } = require('../../../@shared/helpers/http/http-helper')
const { CONSTANTS } = require('../../constants')

exports.DeletePassword = (repositoryPassword) => ({
  async handler (httpRequest) {
    const userPassword = await repositoryPassword.read({ user: httpRequest.accountId, passwordId: httpRequest.params.passwordId })
    if (!userPassword) {
      return badRequest({ err: CONSTANTS.PASSWORD_NOT_FOUND })
    }

    await repositoryPassword.delete({ user: httpRequest.accountId, passwordId: httpRequest.params.passwordId })
    return acceptedResponse({ msg: CONSTANTS.ERROR_ON_DELETE })
  }
})
