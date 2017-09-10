'use strict'
const express = require('express')
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const viewRouter = require('./router/questionRouter');
const apiRouter = require('./router/apiRouter')
let app = express();
const fs = require('fs');
const filename = "question.txt"
app.use(bodyParser.urlencoded({extended:true}))
app.get('/question', (req, res) => {
    res.render('home')
});

app.get('/', (req, res) => {
    let obj=JSON.parse(fs.readFileSync(filename,{encoding:'utf-8'}));
    let id=parseInt(getRandomArbitrary(0,obj.data.length-1));
    console.log(id)
    let question=obj.data[id];
    res.render('questionAction', {
        question: question.question,
        Yes: question.yes,
        No: question.no,
        id:question.id
    });
})
app.get('/ask', (req, res) => {
    res.render('ask')
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
app.use('/api', apiRouter);
app.listen(6969, () => {
    console.log('server is up')
});
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
