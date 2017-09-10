const express=require('express')
const  Router=express.Router();
Router.get('/',(req,res)=>{
    res.send('hihi');
})
Router.post('/question',(req,res)=>{
    console.log(req.body);
})

module.exports=Router