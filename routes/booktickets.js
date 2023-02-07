module.exports = (() => {
    global.app.post('/bookticket', (req, res) => {
        var ticketno = req.body.ticketno;
        var showid = req.body.showid;
        var seatno = req.body.seatno;
        if (ticketno != "") {
            if (showid != "") {
                if (seatno != "") {
                    global.db_con.query("select * from tickets", (err, result) => {
                        if (result == null || result == "") {
                            var sql = `insert into tickets(ticketnumber,movieid,seatno) values ("${ticketno}","${showid}","${seatno}")`;
                            global.db_con.query(sql, (err, result) => {
                                if (err == null) {
                                    console.log(result);
                                    res.render('bookedtickets', { alert: 's1' });
                                } else {
                                    console.log(err.sqlMessage);
                                    res.render('bookedtickets', { alert: 'ei' })
                                }
                            })
                        } else {
                            let user_arr = result.find(user => user.ticketno == ticketno);
                            if(typeof user_arr !== "undefined"){
                                if (user_arr.seatno != seatno) {
                                    var sql = `insert into tickets(ticketnumber,movieid,seatno) values ("${ticketno}","${showid}","${seatno}")`;
                                    global.db_con.query(sql, (err, result) => {
                                        if (err == null) {
                                            console.log(result);
                                            res.render('bookedtickets', { alert: 's1' });
                                        } else {
                                            console.log(err.sqlMessage);
                                            res.render('bookedtickets', { alert: 'ei' })
                                        }
                                    })
                                 }else{
                                    res.render('bookedtickets', { alert1: 'r2' });
                                    }
                            
                            } else {
                                var sql = `insert into tickets(ticketnumber,movieid,seatno) values ("${ticketno}","${showid}","${seatno}")`;
                                 global.db_con.query(sql, (err, result) => {
                                if (err == null) {
                                    console.log(result);
                                    res.render('bookedtickets', { alert: 's1' });
                                } else {
                                    console.log(err.sqlMessage);
                                    res.render('bookedtickets', { alert: 'ei' })
                                }
                            })
                                // res.render('bookedtickets', { alert1: 'r1' });
                            }
                        }
                    })

                } else {
                    res.render('bookedtickets', { alert: 'e1' })
                }
            } else {
                res.render('bookedtickets', { alert: 'e2' })
            }
        } else {
            res.render('bookedtickets', { alert: 'e3' })
        }
    })
})