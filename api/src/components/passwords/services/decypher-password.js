exports.DecodePasswords = (hashPassword) => ({
  async decodePasswords (passwords) {
    return passwords.map(res => {
      const correctPassword = hashPassword.decode(res.password)
      return { ...res, password: correctPassword }
    })
  }
})
