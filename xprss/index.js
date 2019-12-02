// imports
let express = require('express')
let morgan = require('morgan')
// path to JSON file with datas
let data = require('./dane.json')

// for every express app...
const app = express()

// fix for CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

// run Morgan with minimal predefined format
app.use(morgan('tiny'))

// return mocked JSON on GET request
app.get('/datas', (req, res) => {
	res.json(data)
})

// starting server
app.listen('1337')