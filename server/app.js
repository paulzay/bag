const express = require('express');
const userRouter = require('./router/userRouter')
require('./db/mongoose')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(userRouter)

module.exports = app;