const express = require('express');
const app = express();

const volleyball = require('volleyball')

app.use(volleyball)



app.use('/:id', function (req, res, next) {
console.log(req.method, ("/"+req.params.id));
console.log(res.statusCode)
next();
});

app.use('/special/', function (req, res, next) {
console.log(req.method, ("/"+req.params.id));
console.log(res.statusCode)
console.log("You reached a special area")
next();
});


app.get('/', function (req, res) {
    res.send("Welcome to our server")

});

app.get('/news', function (req, res) {
    res.send("this is the news")

});

app.get('/special/', function (req, res) {
    res.send("specialspecial")

});

var PORT = 3000
app.listen(PORT, function() {
    console.log(`Servers listening on port ${PORT}`);
});
