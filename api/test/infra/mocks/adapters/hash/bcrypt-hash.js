exports.HashPassMock = class HashPassMock {
  async hash (pass) {
    this.pass = pass
    return 'hashedPass'
  }
}
