const mysql = require('mysql2');

const pool = mysql.createPoolCluster({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mywebdb'
});

module.exports = pool.promise();