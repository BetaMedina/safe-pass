exports.adaptAuthMiddleware = (middleware) => {
  return async (req, res, next) => {
    const httpRequest = {
      headers: req.headers,
      profile: req.profile,
      accountId: req.accountId
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.status !== 200) {
      return res.status(httpResponse.status).json({ ...httpResponse.body, date: (new Date()).toString() })
    }
    Object.assign(req, httpResponse.body)
    next()
  }
}
