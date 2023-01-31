module.exports = (() => {
    global.app.post("/login_api", (req, res) => {
        var username = req.body.Abhi;
        var psw = req.body.Password;
        //var Email = req.body.Email;
        global.db_con.query("SELECT * FROM users",function (err, rows){
            let user_arr = rows.find(user => user.Username == username);
            if (username == user_arr.Username && psw == user_arr.Password) {
                console.log("login successful");
                res.send("login succesfull");
              } else {
            res.render('login', { alert: 'login failed' });
        }

    });
   
})
 // global.app.post("/login_api",(req,res) => {
    //     var username = req.body.gopi;
    //     var password = req.body.hii;
    //     var mailid = req.body.Mailid;
    //     var obj = { username,password,mailid}
    //     res.send(obj.username); 
    //     //res.render('login.ejs');
    //     console.log("this is username",obj.username);
    //     console.log(obj.mailid);
    
     })