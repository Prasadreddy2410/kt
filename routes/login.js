module.exports = (() => {
    global.app.post("/login_api", (req, res) => {
        var username = req.body.Abhi;
        var psw = req.body.Password;
        var user = "user";
        //var Email = req.body.Email;
        global.db_con.query("SELECT * FROM manager",function(err, result){
            global.db_con.query("SELECT * FROM movies",function(err, result1){
                global.db_con.query("SELECT * FROM theater",function(err, result2){
                        global.db_con.query("SELECT * FROM hall_seats",function(err,result4){
                        let obj = result.filter(user => user);
                        let obj1 = result1.filter(user => user);
                        let obj2 = result2.filter(user => user);
                        let obj4 = result4.filter(user => user);
                        global.db_con.query("SELECT * FROM users",function (err, result5){
                            let user_arr = result5.find(user => user.Username == username);
                            if(typeof user_arr !== "undefined"){
                                if (username == user_arr.Username && psw == user_arr.Password) {
                                    console.log("login successful");
                                    res.render('customer', { movie: obj1, theater: obj2, seat: obj4 , alert: '',name: username});
                                }else{
                                    res.render('login', { alert: 'login failed' });
                                    }
                                }
                            });
                        });
                    });

    });
   
});

})
})