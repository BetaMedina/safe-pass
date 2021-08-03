const mysql = require('mysql2')
const { CONSTANTS } = require('./constants')

class Mysql {
  constructor (table) {
    this.connection = mysql.createConnection({
      host: CONSTANTS.HOST,
      user: CONSTANTS.USERNAME,
      password: CONSTANTS.PASSWORD,
      database: CONSTANTS.DATABASE
    })
    this.table = table
  }

  query (sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (err, result) => {
        if (err) throw err
        return resolve(result)
      })
    })
  }
}

exports.Mysql = Mysql
