const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbnode',
});
db.connect((err) => {
    if (err) throw err;
    console.log('conectado');
});
app.get('/api/users',(req, res) =>{
    db.query('select *from posts', (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
app.listen(port, () =>{
    console.log("server corriendo");
});