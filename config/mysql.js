const mysql = require("mysql")
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loginregister_api',
    multipleStatements: true
})
db.connect((err) => {
    if (err) throw err
    else {
        console.log('Database Terkoneksi!')
    }
})
module.exports = db