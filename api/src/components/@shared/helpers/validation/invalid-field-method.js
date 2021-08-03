const { InvalidParamError } = require('../../../../core/errors/invalid-param-error')

exports.InvalidField = class InvalidField {
  constructor (fieldName) {
    this.objectValidate = fieldName
  }

  validate (input) {
    const inputKeys = Object.keys(input).sort()
    const difference = inputKeys
      .filter(inptKey => !this.objectValidate.includes(inptKey))
      .concat(this.objectValidate.filter(inptKey => !inputKeys.includes(inptKey)))

    if (difference.length) {
      return new InvalidParamError(difference.join(','))
    }
  }
}
