module.exports = (() => {
    global.app.post('/bookticket', (req, res) => {
        var showid = req.body.showid;
        var seatno = req.body.seatno;
            if (showid != "") {
                if (seatno != "") {
                    global.db_con.query("select * from tickets", (err, result) => {
                        if(result == null || result == ""){
                            var t_num = '11';
                            var ticketId = "30" + t_num; 
                            var sql = `insert into tickets(ticketnumber,movieid,seatno) values ("${ticketId}","${showid}","${seatno}")`;
                            global.db_con.query(sql, (err, result) => {
                                if (err == null) {
                                    console.log(result);
                                    res.render('bookedtickets', { alert: 's1' });
                                } else {
                                    console.log(err.sqlMessage);
                                    res.render('bookedtickets', { alert: 'ei' })
                                }
                            })
                        }  else {
                            let user_arr = result.find(user => user.seatno == seatno)
                            if(typeof user_arr !== "undefined"){
                                res.render('bookedtickets',{alert : 'r1'});
                            }else {
                                var lastelement = result.slice(-1);
                                var lastelement1 = lastelement.map(({ticketnumber}) => ticketnumber)
                                ticketno1 = Number(lastelement1) + 1;
                                var sql = `insert into tickets(ticketnumber,movieid,seatno) values ("${ticketno1}","${showid}","${seatno}")`;
                                 global.db_con.query(sql, (err, result) => {
                                if (err == null) {
                                    console.log(result);
                                    res.render('bookedtickets', { alert: 's1' });
                                } else {
                                    console.log(err.sqlMessage);
                                    res.render('bookedtickets', { alert: 'ei' })
                                }
                            })
                        }
                    }
                                // res.render('bookedtickets', { alert1: 'r1' });
                            
                })
            }else {
                    res.render('bookedtickets', { alert: 'e1' })
                }
        }
             else {
                res.render('bookedtickets', { alert: 'e2' })
             }
            
        })
    })
