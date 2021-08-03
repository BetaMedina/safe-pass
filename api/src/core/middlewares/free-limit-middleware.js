const { unauthorized, serverError, successResponse } = require('../../components/@shared/helpers/http/http-helper')

class FreeLimitMiddleware {
  constructor (repository) {
    this.repository = repository
  }

  async handle (httpRequest) {
    try {
      if (httpRequest.profile === 'free-user') {
        const quantityPasswords = await this.repository.quantityPasswords({ user: httpRequest.accountId })
        if (quantityPasswords.quantity > 15) {
          return unauthorized({ err: 'Your limit has been reached' })
        }
      }
      return successResponse()
    } catch (error) {
      return serverError(error)
    }
  }
}

exports.FreeLimitMiddleware = FreeLimitMiddleware
