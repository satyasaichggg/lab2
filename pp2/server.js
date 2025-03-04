// const express=require('express')
// const ejs=require('ejs')
// const jwt=require('jsonwebtoken')
// const app=express()
// const users=require('./registereduser.json')

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

const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public")); // Serve static files
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(express.json()); // Parse JSON data

app.set("view engine", "ejs");

let users = [];
const usersFile = path.join(__dirname, "registereduser.json");

if (fs.existsSync(usersFile)) {
    const data = fs.readFileSync(usersFile);
    users = JSON.parse(data);
}

app.get("/", (req, res) => {
    res.render("index", { users });
});

app.get("/about", (req, res) => {
    res.render("about");
});


app.post("/register", (req, res) => {
    const { uname, password } = req.body;

    if (!uname || !password) {
        return res.status(400).json({ message: "Username and password required!" });
    }

    const newUser = { name: uname, password };
    users.push(newUser);
    fs.writeFile(usersFile, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ message: "Error saving user!" });
        }
        console.log("User registered successfully!");
        
        res.redirect("/");
    });
});


app.post("/login", (req, res) => {
    const { uname, password } = req.body;

    if (!uname || !password) {
        return res.status(400).json({ message: "Username and password required!" });
    }

    const checkUser = users.find((user) => user.name === uname && user.password === password);

    if (!checkUser) {
        return res.status(401).json({ message: "Invalid username or password!" });
    }

    console.log("User found:", checkUser);
    res.status(200).json({ message: "Login successful!", user: checkUser });
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
