const express = require("express");
const app = express();
const bodyparser = require('body-parser')

const {register} = require("../controller/register");
const {login} = require("../Controller/login");

const{getAllUsers} = require("../Controller/getAllUsers");
const{getOneUser} = require("../Controller/getOneUser");
const{updateUser} = require("../Controller/updateUsers");
const{updatePassword} = require("../Controller/updatePassword");
const{deleteUser} = require("../Controller/deleteUser");

app.post("/register", register);  // Post request to register the users
app.post("/login", login); //Post to login users

app.get('/users',getAllUsers) // get all existing users
app.get('/users/:id',getOneUser); //get single user

app.put('/users/:id',updateUser) // update all details of user
app.put('/users/:id', updatePassword);

app.delete('/users/:id',deleteUser) // delete a user

module.exports = app;