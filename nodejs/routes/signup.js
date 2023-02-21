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
                if(Password !="" && Password == confirmpassword){
                    global.db_con.query("SELECT * FROM users",function (err,result){
                        if(result !== ""){
                            var sql = `insert into users(Username, Email, Password, confirmpassword) values ("${Username}","${Email}","${Password}","${confirmpassword}")`;
                            global.db_con.query(sql,function (err,result){
                                if(err) throw err
                                console.log(result);
                            })
                        }
                    })
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