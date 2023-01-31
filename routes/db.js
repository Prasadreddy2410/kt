module.exports = (() => {
    var mysql = require('mysql');

global.db_con = mysql.createConnection({
    host: 'localhost', // Define host name2
    user: 'root2', // Define database username
    password: 'Abhi@0014', // Define database password
    database: 'kt'
})

global.db_con.connect((err) => {
    if (err) {
        console.log("Database Connection Failed !!!", err);
    } else {
        console.log("connected to Database");
    }

}); 
global.db_con.query('USE kt');
global.db_con.query('desc users',function(result){
    console.log(result);
});

})