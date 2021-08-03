const sinon = require('sinon')
const chai = require('chai')
const { MissingParamError } = require('../../../../src/core/errors/missing-param-error.js')
const { CreateUser } = require('../../../../src/components/user/controller/create-user.js')
const { ValidateMock } = require('../../@shared/mocks/validation/require-field-mock.js')
const { HashPassMock } = require('../../../infra/mocks/adapters/hash/bcrypt-hash.js')
const { UserRepository } = require('../../../infra/mocks/repository/user/create-user-mock.js')

const makeSut = () => {
  const validateSut = new ValidateMock()
  const passSut = new HashPassMock()
  const userRepositorySut = new UserRepository()
  const sut = CreateUser(validateSut, passSut, userRepositorySut)
  return {
    passSut,
    validateSut,
    userRepositorySut,
    sut
  }
}

let makePayload
describe('Create user controller', () => {
  beforeEach(() => {
    makePayload = {
      body: {
        user: 'any@mail.com',
        password: 'any',
        name: 'any'
      }
    }
  })
  it('Should expected return error when parameters is not valid', async () => {
    const { sut, validateSut } = makeSut()
    const error = new MissingParamError('Invalid user')

    sinon.stub(validateSut, 'validate').returns(error)

    const response = await sut.handler(makePayload)
    chai.expect(response).to.equal(error)
  })
  it('Should expected return error when password is not hashed', async () => {
    const { sut, passSut } = makeSut()
    await sinon.stub(passSut, 'hash').returns(false)

    const response = await sut.handler(makePayload)
    chai.expect(response).to.equal(false)
  })
  it('Should expected return error when user is not created', async () => {
    const { sut, userRepositorySut } = makeSut()
    await sinon.stub(userRepositorySut, 'create').returns(false)

    const response = await sut.handler(makePayload)
    chai.expect(response).to.equal(false)
  })
  it('Should expected return true', async () => {
    const { sut } = makeSut()

    const response = await sut.handler(makePayload)
    chai.expect(response).to.equal(true)
  })
})
