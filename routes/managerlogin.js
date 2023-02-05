module.exports = (() => {
    global.app.post("/managerlogin",(req, res) => {
        var loginid = req.body.login;
        var Password = req.body.Password;
        if(loginid == "manager" && Password == "1234") {
            res.render('manager', {alert:''})
        }else{
            res.render('managerlogin',{alert:'login failed'})
        }
    })
})