const { ValidationComposite } = require('../../../@shared/helpers/validation/validation-composite')
const { RequiredFields } = require('../../../@shared/helpers/validation/required-field-method')

exports.passwordBodyValidation = () => {
  const validations = []

  for (const field of ['name', 'description', 'password']) {
    validations.push(new RequiredFields(field))
  }

  return new ValidationComposite(validations)
}
