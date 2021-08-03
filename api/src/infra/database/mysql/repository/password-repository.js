const { Mysql } = require('../utils/mysql-config')

class PasswordRepository extends Mysql {
  constructor () {
    super('passwords')
  }

  async create (user) {
    const values = [
      user.name,
      user.description,
      user.password,
      user.user
    ]
    return this.query(`INSERT INTO ${this.table}  (name,description,password,userId) VALUES (?,?,?,?)`, values)
  }

  async list (data) {
    const values = [
      data.user
    ]
    return this.query(`SELECT * FROM ${this.table} WHERE userId = ?`, values)
  }

  async read (data) {
    const values = [
      data.user,
      data.passwordId
    ]
    const [response] = await this.query(`SELECT * FROM ${this.table} WHERE userId = ? AND id = ?`, values)
    return response
  }

  async delete (data) {
    const values = [
      data.user,
      data.passwordId
    ]
    return this.query(`DELETE FROM ${this.table} WHERE userId = ? AND id = ?`, values)
  }

  async update (user, id) {
    const values = [
      user.name,
      user.description,
      user.password,
      id
    ]
    return this.query(`UPDATE  ${this.table} set  name = ?, description = ?, password = ? where id = ?`, values)
  }

  async quantityPasswords (data) {
    const values = [
      data.user
    ]
    const [response] = await this.query(`SELECT COUNT(*) as quantity FROM ${this.table} WHERE userId = ?`, values)
    return response
  }
}

exports.PasswordRepository = PasswordRepository
