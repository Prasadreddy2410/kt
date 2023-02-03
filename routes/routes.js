module.exports = (() => {


    global.app.get('/prasad',function(req, res){
        res.render('login',{ alert: '' });
    })
    global.app.get('/signup',function(req, res){
        res.render('signup',{ alert: '' });
    })
    global.app.get('/forget',function(req, res){
        res.render('forget',{ alert: '' });
    })
    global.app.get('/theater', function (req, res) {
        res.render('theater', { alert1: '' });
    })
    global.app.get('/movies',function(req,res){
        res.render('movies', { alert: ''});
    })
}) 