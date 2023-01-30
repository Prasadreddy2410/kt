module.exports = (() => {
    global.app.post("/signup", (req, res) => {
        var Username = req.body.Username;
        var Password = req.body.Password;
        var Email = req.body.Email;
        var confirmpassword = req.body.confirmpassword;
        var obj = {
            Username,Password,Email,confirmpassword
        } ;
        if(Username != "") {
            if(Email != ""){
                if(Password == confirmpassword && Password !=""){
                    res.render('login',{alert:""});
                }
                else{
                    res.send("password doesnot match");
                }
            }
            else{
                res.send("Email is empty");
            }
        }
        else {
            res.send("username is empty");
        }
    

    })
})