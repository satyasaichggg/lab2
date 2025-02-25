const express=require('express')
const ejs=require('ejs')
const jwt=require('jsonwebtoken')
const app=express()
const users=require('./users.json')

// function middle(req,res,next){
    
//     next();
// }
// app.use(middle);
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         message:'jwt Home Page'
//     })
// })
// app.get('/users',(req,res)=>{
//     res.status(200).json({
//         name:'satya',
//         age:24
//     })
// })
// app.post('/login',(req,res)=>{
//     const user={id:1,username:'satya'}
//     jwt.sign(user,"secretkey",(err,token)=>{
//         res.json({
//             token:token
//         })
//     })
//     console.log('login page'); })


app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('index',{users:users})
})
app.get('/about',(req,res)=>{
    res.render('about')
})








app.listen(3000,()=>{
    console.log('Server is running on 3000');
})

