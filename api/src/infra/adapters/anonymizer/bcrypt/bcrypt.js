const bcrypt = require('bcrypt')

class Bcrypt {
  constructor () {
    this.salt = 10
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
