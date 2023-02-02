module.exports = (() => {
    global.app.post('/forget',(req, res) => {
        var Email = res.body.Email;
        var Password = res.body.Password;
        var confirmpassword = res.body.confirmpassword;
        global.db_con.query("SELECT * FROM users", function (err,result){
            var arr = result.find(user => user.Email == Email);
            if (typeof arr !== "undefined"){
                if(Password == confirmpassword){
                    var update ="update users set Password = ?, confirmpassword = ? where Email = ?";
                    global.db_con.query(update,[Password,confirmpassword,Email]);
                    res.render('login',{alert:'msg'})
                } else{
                    res.render('forget',{alert: 'Password'});
                }
            }else{
                res.render('forget', {alert: 'err'})
            }
        })  
    })
})