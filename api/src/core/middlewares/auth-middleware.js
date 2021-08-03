const { successResponse, unauthorized, serverError } = require('../../components/@shared/helpers/http/http-helper')

class AuthMiddleware {
  constructor (VerifyToken) {
    this.verifyToken = VerifyToken
  }

  async handle (httpRequest) {
    try {
      const accessToken = httpRequest.headers['x-access-token']
      if (accessToken) {
        const account = await this.verifyToken.decrypt(accessToken, this.admin)
        if (account) {
          return successResponse({ accountId: account.id, profile: account.profile })
        }
      }
      return unauthorized({ err: 'User unauthorized' })
    } catch (error) {
      return serverError(error)
    }
  }
}

exports.AuthMiddleware = AuthMiddleware
