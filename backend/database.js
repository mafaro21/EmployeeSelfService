const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',     // Your MySQL host
    user: 'root',          // Your MySQL user
    password: '',  // Your MySQL password
    database: 'ESS' // Your MySQL database name
});

conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + conn.threadId);
});

module.exports = conn
