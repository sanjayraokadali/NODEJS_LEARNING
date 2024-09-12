const db = require('mysql2');

const pool = db.createPool({
    host: 'localhost',
    user: 'root',
    database: 'Mysql',
    password: 'Password@123'
});

module.exports = pool.promise();