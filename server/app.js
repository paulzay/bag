const express = require('express');
const cors = require("cors")
const userRouter = require('./router/userRouter')
require('./db/mongoose')

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(userRouter)

const whitelist = ["http://localhost:3001"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

module.exports = app;