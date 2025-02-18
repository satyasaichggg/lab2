const express = require('express');
const users = require('./users.json'); 
const app = express();
const fs = require('fs');
 app.use(express.json());
function middle(req,res,next){
    next();
}
app.use(middle)


// app.get('/api/users', (req, res) => {
//     res.json(users);
// });

app.get('/api/users/:id', (req, res) => {
    const user=users.find(user=>user.id===Number(req.params.id))
    if(user) {
        console.log(user);
        res.status(200).json(user);
    }
  else{
    res.status(404).json({ message : `user given id ${req.params.id} is not found`});
  }

});

app.get('/api/users/all', (req, res) => {
  
        console.log(users);
        res.status(200).json(users);

});
app.post('/api/users',middle,(req,res)=>{
   console.log(req.body);
   users.push(req.body);
   fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
   res.json({message: `user created`});

})



app.get('/api', (req, res) => {
    res.send('hi');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
