module.exports = (() => {
    global.app.post("/login_api", (req, res) => {
        var username = req.body.name;
        var psw = req.body.Password;
        if (username == "Abhi" && psw == 123456) {
            console.log("my name is :", username);
            console.log("password :", psw);
            res.send('login complete');
        } else {
            res.render('login', { alert: 'login failed' });
        }

    });
})