exports.ValidateMock = class ValidateMock {
  validate (parameters) {
    this.parameter = parameters
    return false
  }
}
