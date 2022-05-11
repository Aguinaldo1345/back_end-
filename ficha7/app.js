const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("exemple app listening at http://%s:%s", host, port);
});

//server


//SQL connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('./users', function (req, res) {
    connection.query("select * from person", function (err, rows, fields) {
        res.send(rows)
    })
});


app.get('./users/:id', function (req, res) {
    var id = request.params.id;
    connection.query("select * from person where id = ?", [id], function (err, rows, fields) {
        res.send(rows)
    })
});

app.post('./persons', function (req, res) {
    var id = request.params.id;
    connection.query("select * from persons", [id], function (err, rows, fields) {
        res.send(rows)
    })
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

