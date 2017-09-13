const express = require('express')
const Router = express.Router();
const fs = require('fs');
const filename = "question.txt";


Router.get('/addQuestion', (req, res) => {
    res.send('Add question');
});
Router.get('/:id', (req, res) => {
    let id=req.params.id;
    console.log('aabb',fs.readFileSync(filename,{encoding:'utf-8'})+']}')
    let obj=JSON.parse(fs.readFileSync(filename,{encoding:'utf-8'})+']}');
    let question=obj.data[id];
    res.render('question', {
        question: question.question,
        Yes: question.yes,
        No: question.no
    });
});

Router.post('/ask', (req, res) => {


});

Router.post('/', (req, res) => {
    console.log('post', req.body);
    //TODO: save question
})
Router.get('/getQuestion', (req, res) => {
    res.send('Get question');
})
module.exports = Router