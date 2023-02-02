module.exports = (() => {
    global.app.post("/theater",(req, res) => {
        var Hallid = req.body.H;
        var Class = req.body.Class;
        var Seats = req.body.Seats;
        if (Hallid != "" || Hallid != null){
            if(Class != "" || Class != null){
                if(Seats != "" || Seats != null){
                    var sql = `insert into theater (theaterid,class_type,no_of_seats) values ("${Hallid}","${Class}","${Seats}")`;
                    global.db_con.query(sql,(err, result) => {
                        if (err) throw err
                        console.log(result);
                        res.render('theater',{ alert1: 's1'});
                    })
                } else {
                    res.render('theater',{alert1: 'e1'});
                }
            } else {
                res.render('theater',{alert1: 'e2' });
            }
        } else {
            res.render('theater', {alert1: 'e3'});
        }
        
        
    })
})