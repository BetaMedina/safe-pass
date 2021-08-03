const bcrypt = require('bcrypt')

class Bcrypt {
  constructor () {
    this.salt = process.env.BCRYPT_HASH
  }

  async crypt (password) {
    const salt = await bcrypt.genSaltSync(this.salt)
    return bcrypt.hashSync(password.toString(), salt)
  }

  compare (password, passwordEncrypted) {
    return bcrypt.compare(password.toString(), passwordEncrypted)
  }
}
exports.Bcrypt = Bcrypt
