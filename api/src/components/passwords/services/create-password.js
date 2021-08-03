exports.CreatePassword = (hashPassword, repository) => ({
  async handler (safePassword) {
    const hidePassword = hashPassword.hide(safePassword.password)
    if (!hidePassword) {
      return false
    }

    const createPassword = await repository.create({ name: safePassword.name, description: safePassword.description, user: safePassword.user, password: hidePassword })
    if (createPassword) {
      return true
    }
  }
})
