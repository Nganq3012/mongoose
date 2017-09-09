const express=require('express')
const  Router=express.Router();
Router.get('/',(req,res)=>{
    res.send('Router');
})
Router.get('/addQuestion',(req,res)=>{
    res.send('Add question');
});
Router.post('/',(req,res)=>{
    console.log('post',req.body);
    //TODO: save question
})
Router.get('/getQuestion',(req,res)=>{
    res.send('Get question');
})
module.exports=Router