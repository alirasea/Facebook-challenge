//mongodb+srv://alirasea12345:<password>@demo.fp8o0hw.mongodb.net/

/* const mongoose = require('mongoose');
require("dotenv").config()
mongoose.connect(process.env.URL_DB)
.then(()=> console.log("db is conected"))
.catch(err => console.log(err)) */




const  mongoose = require ("mongoose")
require(`dotenv`).config()
mongoose.connect(process.env.URL_DB)
.then (() => console.log("Db is conneted "))
.catch (err => console.log(err))