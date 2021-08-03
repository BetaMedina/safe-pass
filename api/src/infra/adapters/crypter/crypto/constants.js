exports.CONSTANTS = {
  ALGO: 'aes-256-cbc',
  KEY: process.env.CRYPT_SECRET || '419336459035a6d4f8d1a6964e8a0d752fe696d4eba72debdfbc5e22040add95',
  IV: process.env.IV || '6b84e425ee0875a3e203b4ff291b3e06',
  METHOD: 'hex'
}
