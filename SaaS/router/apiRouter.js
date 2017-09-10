const express=require('express')
const  Router=express.Router();
const fs = require('fs');
const filename = "question.txt";
Router.get('/',(req,res)=>{
    res.send('hihi');
})
Router.post('/question/:id',(req,res)=>{
    const id=req.params.id;
    let obj=JSON.parse(fs.readFileSync(filename,{encoding:'utf-8'}));
    let question=obj.data[id];
    console.log('truoc',question)
    if (req.body.yes==='1'){
        question.yes=question.yes+1;
    }else
        question.no=question.no-1;
    console.log('sau',question)
    obj.data[id]=question;
    fs.writeFile(filename, JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.redirect(`/question/${id}`)
});

Router.post('/question',(req,res)=>{
    let id=0;
    console.log('cc',req.body)

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
})

module.exports=Router