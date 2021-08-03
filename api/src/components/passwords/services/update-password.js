exports.updatePassword = (hashPassword, repository) => ({
  async handler (userUpdatePayload, oldPassword, id) {
    const hidePassword = oldPassword !== userUpdatePayload.password ? hashPassword.hide(userUpdatePayload.password) : oldPassword
    if (!hidePassword) return false

    const updatePassword = await repository.update({ name: userUpdatePayload.name, description: userUpdatePayload.description, password: hidePassword }, id)
    if (updatePassword) return true
  }
})
