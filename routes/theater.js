module.exports = (() => {
    global.app.post("/theater",(req, res) => {
        var Hallid = req.body.H;
        var Class = req.body.Class;
        var Seats = req.body.Seats;
        if (Hallid != "" || Hallid != null){
            if(Class != "" || Class != null){
                if(Seats != "" || Seats != null){
                    global.db_con.query("select * from theater",(err,result) =>{
                        if(result == null || result == "" ){
                            var sql = `insert into theater (theaterid,class_type,no_of_seats) values ("${Hallid}","${Class}","${Seats}")`;
                            global.db_con.query(sql,(err, result) => {
                                if (err) throw err
                                console.log(result);
                                res.render('theater',{ alert1: 's1'});
                    })
                        }else{
                            let user_arr = result.find(user => user.theaterid == Hallid);
                            if(typeof user_arr !== "undefined" ){
                                res.render('theater',{alert1: 'r1'});
                            }else{
                                var sql =`insert into theater(theaterid,class_type,no_of_seats) values ("${Hallid}","${Class}","${Seats}")`;
                                global.db_con.query(sql,(err,result)=> {
                                    if (err) throw err
                                    console.log(result);
                                    res.render('theater',{alert1: 's1'});
                                });
                               }
                            } 
                
                        })
                } else {
                    res.render('theater',{alert1: 'e1'});
                }
            } else {
                res.render('theater',{alert1: 'e2' });
            }
         
    }  else {
        res.render('theater', {alert1: 'e3'});
    } 
        
    })
})