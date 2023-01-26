module.exports = (() => {
    var mysql = require('mysql');

global.db_con = mysql.createConnection({
    host: '127.0.0.1', // Define host name
    user: 'root2', // Define database username
    password: 'Abhi@0014', // Define database password
})

global.db_con.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }
}); });