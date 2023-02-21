module.exports = (() => {
    global.app.post("/manager",(req, res) => {
        var theaterid = req.body.theaterid;
        var movieid = req.body.movieid;
        var movie_name = req.body.movie_name;
        var class_type = req.body.class;
        var price = req.body.price;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;
        var st = new Date(start_time);
        var et = new Date(end_time);
        global.db_con.query("select * from theater", (err, result) => {
            let obj = result.filter(user => user);
            global.db_con.query("select * from movies",(err, result3) =>{
                let obj2 = result3.filter(user => user);
                    if(theaterid != ""){
                        if(movieid != ""){
                            if(movie_name != ""){
                                if(class_type !=""){
                                    if(price != ""){
                                        if(st !=""){
                                            if(et !=""){
                                                var obj3 =obj2.find(user => user.movieid == movieid)
                                                    if (typeof obj3 !== "undefined"){
                                                     if(obj3.moviename == movie_name){
                                                        global.db_con.query("select * from manager", (err, result2) => {
                                                        if(result2 == null || result2 == ""){
                                                                var sql = `insert into manager(movieid,moviename,classtype,price,start_time,end_time,theaterid) values("${movieid}","${movie_name}","${class_type}","${price}","${st}","${et}","${theaterid}")`;
                                                                    global.db_con.query(sql, (err, row) =>{
                                                                        if (err) throw err
                                                                        console.log(row);
                                                                        res.render('manager', {alert: 's1',movie: obj2, theater: obj});
                                                                    })
                                                                
                                                            
                                                                }else{
                                                                    let obj3 = result.find(user => user.theaterid == theaterid);
                                                                    let movie = result.find(user => user.movieid == movieid);
                                                                    if(typeof obj3 !== "undefined" && typeof movie !== "undefined") {
                                                                        if(obj3.classtype == class_type && obj3.price == price){
                                                                            res.render('manager', { alert: 'cl1',movie: obj2, theater: obj });   
                                                                    }else{
                                                                        var sql = `insert into manager(movieid,moviename,classtype,price,start_time,end_time,theaterid) values("${movieid}","${movie_name}","${class_type}","${price}","${st}","${et}","${theaterid}")`;
                                                                            global.db_con.query(sql, (err, result6) =>{
                                                                                if (err) throw err
                                                                                console.log(result6);
                                                                                res.render('manager',{ alert: 's1',movie: obj2, theater: obj });
                                                                            })
                                                                        }
                                                                }
                                                                else{
                                                                    var sql =`insert into manager(movieid,moviename,classtype,price,start_time,end_time,theaterid) values("${movieid}","${movie_name}","${class_type}","${price}","${st}","${et}","${theaterid}")`;
                                                                    global.db_con.query(sql, (err, result) =>{
                                                                        if (err) throw err
                                                                        console.log(result);
                                                                        res.render('manager',{ alert: 's1',movie: obj2, theater: obj });
                                                                    })
                                                                }
                                                            }
                                                            
                                                                })
                                                        }else{
                                                            res.render('manager', { alert: 'm1',movie: obj2, theater: obj });
                                                         }
                                                    }
                                                        } else {
                                                            res.render('manager', { alert: 'e1',movie: obj2, theater: obj  });
                                                        }
                                                    
                                                }else {
                                                        res.render('manager', { alert: 'e2',movie: obj2, theater: obj  });
                                                    }
                                        } else {
                                            res.render('manager', { alert: 'e3',movie: obj2, theater: obj  });
                                        }
                                }
                                 else {
                                    res.render('manager', { alert: 'c1',movie: obj2, theater: obj  });
                                }
                            } else {
                                res.render('manager', { alert: 'e6',movie: obj2, theater: obj  });
                            }
                        } else {
                            res.render('manager', { alert: 'e4',movie: obj2, theater: obj  });
                        }
                } else {
                    res.render('manager', { alert: 'e5',movie: obj2, theater: obj  });
                }
        })

    })
})
})
