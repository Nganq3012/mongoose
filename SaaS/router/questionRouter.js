const express = require('express')
const Router = express.Router();
Router.get('/', (req, res) => {
    res.send('Router');
})
Router.get('/addQuestion', (req, res) => {
    res.send('Add question');
});
Router.get('/ask', (req, res) => {
    res.render('ask');
});
Router.post('/ask', (req, res) => {
    console.log(req.body)
    const fs = require('fs');
    const filename = "question.txt"
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
            body['id']=arr.length;
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