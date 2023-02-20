module.exports = (() => {
    global.app.post("/managerlogin",(req, res) => {
        var loginid = req.body.login;
        var Password = req.body.Password;
        var user = "user";
            global.db_con.query("SELECT * FROM movies", function (err, result1) {
                global.db_con.query("SELECT * FROM theater", function (err, result2) {
                        let obj1 = result1.filter(user => user);
                        let obj2 = result2.filter(user => user);
        if(loginid == "manager" && Password == "1234") {
            res.render('manager', {alert:'',movie:obj1,theater:obj2})
        }else{
            res.render('managerlogin',{alert:'login failed'})
        }
})
        })
    })
})