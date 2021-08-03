const crypto = require('crypto')
const { CONSTANTS } = require('./constants')

class Crypto {
  constructor () {
    this.algo = CONSTANTS.ALGO
    this.method = CONSTANTS.METHOD
    this.key = Buffer.from(CONSTANTS.KEY, this.method)
    this.iv = Buffer.from(CONSTANTS.IV, this.method)
  }

  hide (password) {
    const cipher = crypto.createCipheriv(this.algo, this.key, this.iv)
    const encrypted = cipher.update(password.toString())
    return Buffer.concat([encrypted, cipher.final()]).toString(this.method)
  }

  decode (passwordEncrypted) {
    const encryptedText = Buffer.from(passwordEncrypted, this.method)
    const decipher = crypto.createDecipheriv(this.algo, this.key, this.iv)
    const decrypted = decipher.update(encryptedText)
    return Buffer.concat([decrypted, decipher.final()]).toString()
  }
}
exports.Crypto = Crypto
