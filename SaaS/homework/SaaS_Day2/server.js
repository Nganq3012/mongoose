const express = require('express')
const fs=require('fs')
let app = express();

var data = fs.readFileSync('file.txt');
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/menu.html")
});
app.use(express.static(__dirname));
app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/menu.css');
});
app.get('/readfile', (req, res) => {

    res.send(`<html>
    <head> <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="menu.css">
    <link rel="stylesheet" type="text/css" href="responsive.css">
    <link rel="stylesheet" type="text/css" href="styles.css">
   </head>
   <body>
    <nav class="menu">
    <span onclick="location='menu.html'">Trang Chủ</span>
    <span onclick="location='index.html'">About</span>
    <span onclick="location='readfile'">Đọc File</span>
    </nav>
    <h1> ${data} </h1>
    </body>
    </html>`);
});
app.listen(6966, () => {
    console.log('server is up')
})
