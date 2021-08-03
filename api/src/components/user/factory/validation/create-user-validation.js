const { ValidationComposite } = require('../../../@shared/helpers/validation/validation-composite')
const { RequiredFields } = require('../../../@shared/helpers/validation/required-field-method')
const { InvalidField } = require('../../../@shared/helpers/validation/invalid-field-method')

exports.createUserValidationFactory = () => {
  const validations = []
  const fields = ['name', 'email', 'password']

  validations.push(new InvalidField(fields))
  for (const field of fields) {
    validations.push(new RequiredFields(field))
  }

  return new ValidationComposite(validations)
}
