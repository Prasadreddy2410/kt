module.exports = (() => {


    global.app.get('/',function(req, res){
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
    global.app.get('/managerlogin',function(req,res){
        res.render('managerlogin',{ alert:''});
    })
    global.app.get('/manager',function(req,res){
        res.render('manager',{ alert :''});
    })
    global.app.get('/bookedtickets',function(req,res){
        res.render('bookedtickets',{ alert : '' });
    })
    global.app.get('/customer',function(req,res){
        res.render('customer',{ movie: '', theater: '', seat: '' , alert: '',name: '',tickets : ''});
    })
    global.app.get('/recepit',function(req,res){
        res.render('recepit',{ ticketnumber: '', movieid:'', seatno:'' });
    })
}) 