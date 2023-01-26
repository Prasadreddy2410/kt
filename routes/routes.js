module.exports = (() => {


    global.app.get('/prasad',function(req, res){
        res.render('login',{ abhi: 'gopi' });
    })
}) 