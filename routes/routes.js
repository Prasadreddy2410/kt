module.exports = (() => {


    global.app.get('/prasad',function(req, res){
        res.render('login',{ alert: '' });
    })
    global.app.get('/signup',function(req, res){
        res.render('signup',{ alert: ''});
    })
}) 