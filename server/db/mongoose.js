const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017/bag'

mongoose.connect(connectionURL, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
