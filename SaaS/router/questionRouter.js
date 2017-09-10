const express = require('express')
const Router = express.Router();
const fs = require('fs');
const filename = "question.txt";


Router.get('/addQuestion', (req, res) => {
    res.send('Add question');
});
Router.get('/:id', (req, res) => {
    let id=req.params.id
    let obj=JSON.parse(fs.readFileSync(filename,{encoding:'utf-8'}));
    let question=obj.data[id];
    res.render('question', {
        question: question.question,
        Yes: question.yes,
        No: question.no
    });
});

Router.post('/ask', (req, res) => {
    let id=0;
    console.log(req.body)


    let body=req.body;
    body['yes']=0;
    body['no']=0;
    fs.exists(filename, function (exists) {
        if (!exists) {
            let obj={};
            let arr=[];
            body['id']=0;
            arr.push(body)
            obj['data']=arr;
            console.log(obj)
            fs.writeFile(filename, JSON.stringify(obj));
        }
        else {
            let obj=JSON.parse(fs.readFileSync(filename,{encoding:'utf-8'}));
            let arr=obj['data'];
            id=body['id']=arr.length;
            arr.push(body);
            obj['data']=arr;
            // fs.appendFile(filename, JSON.stringify(obj), function (err) {
            //     if (err) throw err;
            //     console.log('Saved!');
            // });
            fs.writeFile(filename, JSON.stringify(obj), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            res.redirect(`/question/${id}`)
        }

    });

});

Router.post('/', (req, res) => {
    console.log('post', req.body);
    //TODO: save question
})
Router.get('/getQuestion', (req, res) => {
    res.send('Get question');
})
module.exports = Router