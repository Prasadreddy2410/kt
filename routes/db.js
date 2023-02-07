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
//global.db_con.query('drop table users');
global.db_con.query('select * from users',function(result,row){
    console.log(row);
});
global.db_con.query('select * from theater',function(result,row){
    console.log(row);
});
global.db_con.query('select * from movies',function(result,row){
    console.log(row);
});
global.db_con.query('select * from tickets',function(result,row){
    console.log(row);
});
global.db_con.query('select * from manager',function(result,row){
    console.log(row);

});
})