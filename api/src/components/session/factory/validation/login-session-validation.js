const { ValidationComposite } = require('../../../@shared/helpers/validation/validation-composite')
const { RequiredFields } = require('../../../@shared/helpers/validation/required-field-method')

exports.tokenValidationFactory = () => {
  const validations = []

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFields(field))
  }

  return new ValidationComposite(validations)
}
