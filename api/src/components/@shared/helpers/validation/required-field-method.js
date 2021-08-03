const { MissingParamError } = require('../../../../core/errors/missing-param-error.js')

exports.RequiredFields = class RequiredFields {
  constructor (fieldName) {
    this.fieldName = fieldName
  }

  validate (input) {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
