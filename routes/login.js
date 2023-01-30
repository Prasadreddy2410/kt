module.exports = (() => {
    global.app.post("/login_api", (req, res) => {
        var username = req.body.Abhi;
        var psw = req.body.Password;
        var mailid = req.body.Mailid;
        if (username == "Abhi" && psw == 123456 && mailid == "a@gmail.com") {
            console.log("my name is :", username);
            res.render('login.ejs',{alert: 'login succesflly'});
            console.log("password :", psw);
            console.log("mailid:",mailid);
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
    
    // })