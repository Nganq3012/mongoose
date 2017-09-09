'use strict'
const express = require('express')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const viewRouter = require('./router/questionRouter')
let app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.get('/question', (req, res) => {
    res.render('addQuestion')
});
app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/styles.css');
});
app.get('/responsive.css', (req, res) => {
    res.sendFile(__dirname + '/responsive.css');
});
app.get('/menu.css', (req, res) => {
    res.sendFile(__dirname + '/menu.css');
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/question', viewRouter);
app.listen(6969, () => {
    console.log('server is up')
});
