const express = require('express');
const app = express();




app.get('/', function (req, res) {
    res.send("Welcome to our server")

});

app.get('/news', function (req, res) {
    res.send("this is the news")

});

var PORT = 3000
app.listen(PORT, function() {
    console.log(`Servers listening on port ${PORT}`);
});
