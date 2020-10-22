
const app = require("express").Router();
const db = require("../model/books");

app.get("/api/books", function(req, res){
    db.find().then(function(records){
        console.log("GET", records);
        res.json(records);
    })
});

app.post("/api/books", function(req, res){
    db.create(req.body).then(function(records){
        console.log("POST", records);
        res.json(records);
    })
});

app.delete("/api/books/:id", function(req, res){
    db.findByIdAndRemove(req.params.id).then(function(records){
        console.log("DELETE", records);
        res.json(records);
    })
});

// app.get("/google/books/:search", function(req, res){
//     axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}`)
//     .then(function(records){
//         for(var i = 0; i < records.items.length; i++){
//             db.find({apiId: records.items[i].id}).then(function(result){
//                 console.log(result);
                
//             }).catch(err => {
//                 console.log(err);
//             })
//         }
//     });
// })

module.exports = app;