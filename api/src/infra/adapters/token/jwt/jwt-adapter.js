const { ENUM } = require('./enum')
const jwt = require('jsonwebtoken')

class JsonWebTokenAdapter {
  async hashGenerate (payload) {
    return jwt.sign(payload, ENUM.JWT_SECRET, { expiresIn: ENUM.JWT_TIME })
  }

  async decrypt (ciphertext) {
    return jwt.verify(ciphertext, ENUM.JWT_SECRET)
  }
}
exports.JsonWebTokenAdapter = JsonWebTokenAdapter
