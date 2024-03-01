import express from 'express';
import {connect} from './config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
import User from './models/users.js';
import passport from 'passport';
import {passportAuth} from './config/jwt-middleware.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', apiRoutes);

app.listen(3100, async() => {
    console.log("server started on port ----3100----")
    await connect();
    console.log("mongoose connection made");
})