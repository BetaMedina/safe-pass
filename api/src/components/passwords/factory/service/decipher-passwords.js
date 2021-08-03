const { Crypto } = require('../../../../infra/adapters/crypter/crypto/crypto')
const { DecodePasswords } = require('../../services/decypher-password')

exports.decipherPasswordFactory = () => {
  const crypto = new Crypto()
  return DecodePasswords(crypto)
}
