module.exports = (()=>{
    global.app.post('/customer',(req, res) =>{
        var theaterid = req.body.theaterid;
        var movieid = req.body.movieid;
        var moviename = req.body.moviename;
        var movielanguage = req.body.movielanguage;
        var upperclass = req.body.seatupno;
        var lowerclass = req.body.seatlowno;
        global.db_con.query("SELECT * FROM manager", function (err, result){
            global.db_con.query("SELECT * FROM movies", function (err, result1){
                global.db_con.query("SELECT * FROM theater", function(err,result2){
                    global.db_con.query("SELECT * FROM tickets", function(err, result3){
                        global.db_con.query("SELECT * FROM hall_seats", function(err, result4){
                            let obj = result.filter(user => user);
                            let obj1 = result1.filter(user => user);
                            let obj2 = result2.filter(user => user);
                            let obj3 = result3.filter(user => user);
                            let obj4 = result4.filter(user => user);
                            if (theaterid != ""){
                                if(movieid != ""){
                                    if(moviename != ""){
                                        if(movielanguage != ""){
                                                 global.db_con.query("SELECT * FROM costmerup", function(err,result5){
                                                     global.db_con.query("SELECT * FROM costmerlow",function(err,result6){
                                                    let up = result5.find(user =>user.upperclass == upperclass);
                                                    let low = result6.find(user =>user.lowerclass == lowerclass);
                                                    if (upperclass == "" && lowerclass == "") {
                                                    res.render('customer',{alert:'uplow', movie: obj1, theater: obj2, seat: obj4});
                                                    }else if (lowerclass == ""){
                                                        if(typeof up !== 'undefined'){
                                                        res.render('customer',{alert: 'e1', movie: obj1, theater: obj2, seat: obj4});
                                                    } else {
                                                        var sql = `insert into costmerup (theaterid,movieid,moviename,language,upperclass)values("${theaterid}","${movieid}","${moviename}","${movielanguage}","${upperclass}")`;
                                                        global.db_con.query(sql,(err,result) =>{
                                                            if(err) throw  err.sqlMessage;
                                                            console.log(result);
                                                            res.render('customer',{alert: 's1',movie: obj1, theater: obj2, seat: obj4});
                                                        })
                                                    }
                                                    }else if(upperclass == ""){
                                                        if(typeof low !== 'undefined') {
                                                            res.render('customer',{alert: 'e2',movie: obj1, theater: obj2, seat: obj4 })
                                                        } else {
                                                            var sql = `insert into costmerlow (theaterid,movieid,moviename,language,lowerclass)values("${theaterid}","${movieid}","${moviename}","${movielanguage}","${lowerclass}")`;
                                                            global.db_con.query(sql,(err,result) =>{
                                                                if(err) throw err.sqlMessage;
                                                                console.log(result);
                                                                res.render('customer',{alert: 's1',movie: obj1, theater: obj2, seat: obj4 });
                                                            })
                                                        }
                                                    } else if(upperclass !== "" && lowerclass != ""){
                                                        res.render('customer',{alert: 'uplow_er',movie: obj1, theater: obj2, seat: obj4 });
                                                    }
                                                })
                                            })
                                        }else{
                                            res.render('customer',{alert: 'lang1',movie: obj1, theater: obj2, seat: obj4 });
                                        }
                                    }else {
                                        res.render('customer',{alert: 'mn1',movie: obj1, theater: obj2, seat: obj4});
                                    }
                                }else{
                                    res.render('customer',{alert:'m1id',movie: obj1, theater: obj2, seat: obj4});
                                }
                            }else{
                                res.render('customer',{alert:'t1id',movie: obj1, theater: obj2, seat: obj4});
                            }
                        })
                    })
                })
            })
        })
    })
})
                                
                                   