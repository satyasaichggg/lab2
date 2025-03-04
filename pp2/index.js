const express = require("express");
const app = express();
const fs = require("fs");
const users = require("./users.json");


app.use(express.json());

const port = 2000;

function middleware(req, res, next) {
  console.log("Middleware executed");
  next();
}

app.use(middleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.send(user);
  }
});

app.post("/users/adduser", (req, res) => {
  if (req.body) {
    users.push(req.body);
    fs.writeFileSync("./users.json", JSON.stringify(users));

    res.status(200).send("users");
  } else {
    res.status(400).send("Invalid request");
  }
});

app.patch("/users/modify/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    user.name = req.body.name;
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.status(200).send("User modified");
  } else {
    res.status(404).send("User not found");
  }
});
 
app.delete("/users/delete/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    const index = users.indexOf(user);

    users.splice(index, 1);
    fs.writeFileSync("./users.json", JSON.stringify(users));
    res.status(200).send("User deleted");
  } else {
    res.status(404).send("User not found");
  }
});
app.put('/users/modifyput/:id', (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const user = users.find(u=> u.id == id);
    user.name = name;
    writeFiles();
    res.json(`ID ${id} updated successfully!`);

});
app.listen(2000, () => {
  console.log("Server is running on 2000");
});