exports.adaptRoute = (controller) => {
  return async (req, res) => {
    try {
      const httpRequest = {
        body: req.body,
        params: req.params,
        headers: req.headers,
        query: req.query,
        accountId: req.accountId
      }
      const httpResponse = await controller.handler(httpRequest)
      return res.status(httpResponse.status).json({ ...httpResponse.body, date: (new Date()).toString() })
    } catch (err) {
      return res.status(500).json({ error: 'Internal server error', date: (new Date()).toString() })
    }
  }
}
