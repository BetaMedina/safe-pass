
/** User errors Range */

exports.badRequest = (error) => ({
  status: 400,
  body: { status: 'error', ...error }

})

exports.unauthorized = (error) => ({
  status: 401,
  body: { status: 'error', ...error }
})

/** Server error range */
exports.serverError = (error) => ({
  status: 500,
  body: { status: 'error', ...error }

})

/** Success Range */
exports.successResponse = (body) => ({
  status: 200,
  body: { status: 'success', ...body }
})
exports.acceptedResponse = (body) => ({
  status: 202,
  body: { status: 'success', ...body }
})
exports.emptyResponse = () => ({
  status: 204,
  body: { status: 'error', msg: 'emptyResponse' }
})
