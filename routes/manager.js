module.exports = (() => {
    global.app.post("/manager",(req, res) => {
        var theaterid = req.body.theaterid;
        var ticketno = req.body.ticketno;
        var movieid = req.body.movieid;
        var movie_name = req.body.movie_name;
        var price = req.body.price;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;
        var st = new Date(start_time);
        var et = new Date(end_time);
        if(theaterid != ""){
            if(ticketno != ""){
                if(movieid != ""){
                    if(movie_name != ""){
                        if(price != ""){
                            if(st !=""){
                                if(et !=""){
                                    global.db_con.query("select * from theater", (err, result) => {
                                        let obj = result.find(user => user.theaterid == theaterid);
                                        if(typeof obj !== "undefined"){
                                            global.db_con.query("select * from tickets", (err, result1) => {
                                                let obj1 = result1.find(user => user.ticketnumber == ticketno);
                                                if (typeof obj1 !== "undefined"){
                                                    global.db_con.query("select * from movies", (err, result2) => {
                                                        let obj2 = result2.find(user => user.movieid == movieid);
                                                        if (typeof obj2 !== "undefined"){
                                                             if(obj2.moviename == movie_name) {
                                                                global.db_con.query("select * from manager",(err ,result3)=> {
                                                                if (result3 == null || result3 == ""){
                                                                    var sql = `insert into manager(movieid,moviename,price,start_time,end_time,theaterid,ticketno) values("${movieid}","${movie_name}","${price}","${st}","${et}","${theaterid}","${ticketno}")`;
                                                                    global.db_con.query(sql, (err, row) =>{
                                                                        if (err) throw err
                                                                        console.log(row);
                                                                        res.render('manager', {alert: 's1'});
                                                                    })
                                                                }else{
                                                                    let obj3 = result3.find(user => user.theaterid == theaterid);
                                                                    if(typeof obj3 !== "undefined") {
                                                                        if (obj3.ticketno == ticketno){
                                                                            res.render('manager', { alert: 't1' });
                                                                        }else{
                                                                            var sql = `insert into manager(movieid,moviename,price,start_time,end_time,theaterid,ticketno) values("${movieid}","${movie_name}","${price}","${st}","${et}","${theaterid}","${ticketno}")`;
                                                                            global.db_con.query(sql, (err, result5) =>{
                                                                                if (err) throw err
                                                                                console.log(result5);
                                                                                res.render('manager',{ alert: 's1'});
                                                                            })

                                                                        }
                                                                            
                                                                        
                                                                       
                                                                    }  else{
                                                                        var sql = `insert into manager(movieid,moviename,price,start_time,end_time,theaterid,ticketno) values("${movieid}","${movie_name}","${price}","${st}","${et}","${theaterid}","${ticketno}")`;
                                                                            global.db_con.query(sql, (err, result6) =>{
                                                                                if (err) throw err
                                                                                console.log(result6);
                                                                                res.render('manager',{ alert: 's1' });
                                                                            })
                                                                        }
                                                                }
                                                                

                                                        })
                                                             }else{
                                                                    res.render('manager', { alert: 'm1'});
                                                                        }
                                                        } else {
                                                            res.render('manager', { alert: 'ei1' });
                                                        }
                                                    })
                                                }else {
                                                        res.render('manager', { alert: 'ei2' });
                                                    }
                                            })
                                        } else {
                                            res.render('manager', { alert: 'ei3' });
                                        }
                                    })
                                } else {
                                    res.render('manager', { alert: 'e1' });
                                }
                            } else {
                                res.render('manager', { alert: 'e2' });
                            }
                        } else {
                            res.render('manager', { alert: 'e3' });
                        }
                    } else {
                        res.render('manager', { alert: 'e7' });
                    }
                } else {
                    res.render('manager', { alert: 'e6' });
                }
            } else {
                res.render('manager', { alert: 'e4' });
            }
        } else {
            res.render('manager', { alert: 'e5' });
        }
    })
})