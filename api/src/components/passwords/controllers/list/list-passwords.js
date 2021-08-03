const { successResponse, emptyResponse } = require('../../../@shared/helpers/http/http-helper')

exports.ListPasswords = (repositoryPassword, decipherPasswords) => ({
  async handler (httpRequest) {
    const userPasswords = await repositoryPassword.list({ user: httpRequest.accountId })
    if (!userPasswords.length) {
      return emptyResponse()
    }
    const payloadWithDecodePass = await decipherPasswords.decodePasswords(userPasswords)
    return successResponse({ result: payloadWithDecodePass })
  }
})
