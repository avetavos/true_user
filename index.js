const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routers = require('./route')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect('mongodb://localhost:27017/true_test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Test"));

app.use('/users', routers)

app.listen(5000, () => console.log('Application running on port: 5000'))