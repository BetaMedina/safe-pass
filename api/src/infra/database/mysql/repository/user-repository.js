const { Mysql } = require('../utils/mysql-config')

class UserRepository extends Mysql {
  constructor () {
    super('users')
  }

  async create (user) {
    const values = [
      user.name,
      user.email,
      user.password,
      user.profile || 'free-user'
    ]

    return this.query(`INSERT INTO ${this.table} (name,email,password,profile) VALUES (?,?,?,?)`, values)
  }

  async find (email) {
    const [response] = await this.query(`SELECT * FROM  ${this.table} WHERE email = ?`, [email])
    return response
  }
}
exports.UserRepository = UserRepository
