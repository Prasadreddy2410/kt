module.exports = (()=>{
    global.app.post('/customer',(req, res) =>{
        var theaterid = req.body.theaterid;
        var movieid = req.body.movieid;
        var moviename = req.body.moviename;
        var movielanguage = req.body.movielanguage;
        var upperclass = req.body.seatupno;
        var lowerclass = req.body.seatlowno;
        var user = req.body.name;
        var show = req.body.show;
        global.db_con.query("SELECT * FROM manager", function (err, result){
            global.db_con.query("SELECT * FROM movies", function (err, result1){
                global.db_con.query("SELECT * FROM theater", function(err,result2){
                    global.db_con.query("SELECT * FROM tickets", function(err, result3){
                        global.db_con.query("SELECT * FROM hall_seats", function(err, result4){
                            let obj = result.filter(user => user);
                            let obj1 = result1.filter(user => user.movieid == movieid);
                            let obj2 = result2.filter(user => user.theaterid == theaterid);
                            let obj3 = result3.filter(user => user);
                            let obj4 = result4.filter(seats => seats);
                            let uclass = result4.filter(seats => seats.upperclass == upperclass);
                            let l_class = result4.filter(seats => seats.lowerclass == lowerclass);
                            if (theaterid != ""){
                                if(movieid != ""){
                                    if(moviename != ""){
                                        if(movielanguage != ""){
                                            if(show !=""){
                                                 global.db_con.query("SELECT * FROM costmerup", function(err,result5){
                                                    global.db_con.query("SELECT * FROM costmerlow",function(err,result6){
                                                        global.db_con.query("SELECT * FROM userdata1",function(err, uresult1){
                                                            let up = result5.find(user =>user.upperclass == upperclass);
                                                            let low = result6.find(user =>user.lowerclass == lowerclass);
                                                            if (upperclass == "" && lowerclass == "") {
                                                                 res.render('customer',{alert:'uplow', movie: obj1, theater: obj2, tickets : obj3,seat: obj4});
                                                            }else if (lowerclass == ""){
                                                                 if (result5 == ""){
                                                                    var t_num = "11";
                                                                    var ticketno = "23" +t_num;
                                                                    var sql = `insert into costmerup (theaterid,movieid,moviename,language,upperclass)values("${theaterid}","${movieid}","${moviename}","${movielanguage}","${upperclass}")`;
                                                                    var usersql = `insert into userdata1 (ticketno,showid,username,seatno)values("${ticketno}","${show}","${user}","${upperclass})`;
                                                                    global.db_con.query(usersql,(err, userresult) =>{
                                                                        if(err) throw err.sqlMessage;
                                                                        console.log(userresult);
                                                                    });
                                                                    global.db_con.query(sql, (err,upresult) => {
                                                                        if(err) throw err.sqlMessage;
                                                                        console.log(upresult);
                                                                    })
                                                                    global.db_con.query("SELECT * from costmerup",function(err, ucresult){
                                                                        global.db_con.query("SELECT * FROM userdata1",function(err, urresult){
                                                                            let up1 = ucresult.find(user => user.upperclass == upperclass);
                                                                            let user1 = urresult.find(user => user.seatno == upperclass);
                                                                            res.render('recepit',{alert:'s1',customer: up1, user: user1});
                                                                        })
                                                                    })
                                                                }else {
                                                                    if (typeof up !== "undefined"){
                                                                        res.render('customer',{alert:'e1',movie: obj1, theater: obj2,seat: obj4, name: user});
                                                                    }else{
                                                                        var lastelement = uresult1.slice(-1);
                                                                        var lastelement1 = lastelement.map(({ticketno}) => ticketno)
                                                                        ticketno = Number(lastelement1) +1;
                                                                        var sql = `insert into costmerup (theaterid,movieid,moviename,language,upperclass) values ("${theaterid}","${movieid}","${moviename}","${movielanguage}","${upperclass}")`;
                                                                        var usersql =`insert into userdata1(ticketno,showid,username,seatno) values("${ticketno}","${show}","${user}","${upperclass}")`;
                                                                        global.db_con.query(sql, (err, upresult) => {
                                                                            if(err) throw err.sqlMessage;
                                                                            console.log(upresult);
                                                                        })
                                                                        global.db_con.query(usersql, (err, userresult)=> {
                                                                            if(err) throw err.sqlMessage;
                                                                            console.log(userresult);
                                                                        });
                                                                        global.db_con.query("select * from costmerup", function (err, ucresult){
                                                                            global.db_con.query("select * from userdata1",function(err, urresult){
                                                                                let up1 =ucresult.find(user => user.upperclass == upperclass);
                                                                                let user1 = urresult.find(user => user.seatno == upperclass);
                                                                                res.render('recepit',{alert:'s1',customer: up1, user: user1});
                                                                            })
                                                                        })
                                                                    }
                                                                }
                                                            }else if (upperclass == ""){
                                                                if(result6 == ""){
                                                                    var t_num = '11';
                                                                    var ticketno = "22" + t_num;
                                                                    var sql = `insert into costmerlow (theaterid,movieid,moviename,language,lowerclass) values ("${theaterid}","${movieid}","${moviename}","${movielanguage}","${lowerclass}")`;
                                                                    var usersql =`insert into userdata1(ticketno,showid,username,seatno) values("${ticketno}","${show}","${user}","${lowerclass}")`;
                                                                    global.db_con.query(usersql,(err,userresult) => {
                                                                        if(err) throw err.sqlMessage;
                                                                        console.log(userresult);
                                                                    });
                                                                    global.db_con.query(sql,(err, upresult) =>{
                                                                        if(err) throw err.sqlMessage;
                                                                        console.log(userresult);
                                                                    })
                                                                    global.db_con.query("select * from costmerlow", function(err, ucresult){
                                                                        global.db_con.query("select * from userdata1", function(err,userresult){
                                                                            let up1 = ucresult.find(user => user.lowerclass == lowerclass);
                                                                            let user1 = userresult.find(user => user.seatno == lowerclass);
                                                                            res.render('recepit',{alert:'s1',customer: up1, user: user1});
                                                                        })
                                                                    })


                                                                }else {
                                                                    if(typeof low !== "undefined"){
                                                                        res.render('customer',{alert:'e2',movie: obj1, theater: obj2,seat: obj4, name: user});
                                                                    }else{
                                                                        var lastelement = uresult1.slice(-1);
                                                                        var lastelement1 = lastelement.map(({ticketno}) => ticketno)
                                                                        ticketno = Number(lastelement1) +1;
                                                                        var sql = `insert into costmerlow (theaterid,movieid,moviename,language,lowerclass) values ("${theaterid}","${movieid}","${moviename}","${movielanguage}","${lowerclass}")`;
                                                                        var usersql =`insert into userdata1(ticketno,showid,username,seatno) values("${ticketno}","${show}","${user}","${lowerclass}")`;
                                                                        global.db_con.query(sql,(err, result) => {
                                                                            if(err) throw err.sqlMessage;
                                                                            console.log(result);
                                                                        })
                                                                        global.db_con.query(usersql, (err, userresult) => {
                                                                            if(err) throw err.sqlMessage;
                                                                            console.log(userresult);
                                                                        });
                                                                        global.db_con.query("select * from costmerlow", function(err, ucresult){
                                                                            global.db_con.query("select * from userdata1", function(err,userresult){
                                                                                let up1 = ucresult.find(user => user.lowerclass == lowerclass);
                                                                                let user1 = userresult.find(user => user.seatno == lowerclass);
                                                                                res.render('recepit',{alert:'s1',customer: up1, user: user1});
                                                                            })
                                                                        })

                                                                    }
                                                                }
                                                                 
                                                    } else if(upperclass !== "" && lowerclass != ""){
                                                        res.render('customer',{alert: 'uplow_er',movie: obj1, theater: obj2, tickets : obj3, seat: obj4, name: user });
                                                    }
                                                })
                                            })
                                        })
                                    }else{
                                        res.render('customer',{alert:'show',movie: obj1, theater: obj2, tickets : obj3, seat: obj4, name: user});
                                    }
                                        }else{
                                            res.render('customer',{alert: 'lang1',movie: obj1, theater: obj2, tickets : obj3, seat: obj4,name: user });
                                        }
                                    }else {
                                        res.render('customer',{alert: 'mn1',movie: obj1, theater: obj2, tickets : obj3, seat: obj4,name: user});
                                    }
                                }else{
                                    res.render('customer',{alert:'m1id',movie: obj1, theater: obj2, tickets : obj3, seat: obj4,name: user});
                                }
                            }else{
                                res.render('customer',{alert:'t1id',movie: obj1, theater: obj2, tickets : obj3, seat: obj4,name: user});
                            }
                        console.log(result4);})
                        })
                    })
                })
            })
        })
    })
                                
                                   