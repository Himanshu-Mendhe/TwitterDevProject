const express = require('express');
const app = express();
const connect = require('./config/database');

app.listen (3100, async() => {
    console.log("server started on port ----3100----")
    await connect();
    console.log("mongoose connection made");
})