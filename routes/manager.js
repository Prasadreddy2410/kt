module.exports = (() => {
    global.app.post("/manager",(req, res) => {
        var movieid = require.body.movieid;
        var movie_name = require.body.movie_name;
        var price = require.body.price;
        var start_time = req.body.start_time;
        var end_time = req.body.end_time;
        var st = new Date(start_time);
        var et = new Date(end_time);
        if(movieid != "" || movieid !=null){
            if(movie_name != "" || movie_name !=null){
                if(price != "" || price !=null){
                    if(st !="" || st !=null){
                        if(et !="" || et !=null){
                            var sql = `insert into `
                }
            }
        }
    }
}
})
})