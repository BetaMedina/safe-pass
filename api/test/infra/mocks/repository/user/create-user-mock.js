exports.UserRepository = class UserRepository {
  async create (user) {
    this.user = user
    return {
      _id: 'teste',
      name: 'any',
      password: 'any@mail.com'
    }
  }
}
