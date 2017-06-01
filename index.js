const express = require('express')
const app = express()

app.get('/', function(req, res) {
	console.log('Root hit!')
	res.send('Hello!')
})

app.get('/:param', function(req, res) {
	console.log(req.params.param + ' endpoint hit!')
	res.send('Hello from ' +req.params.param+ '!')
})

app.listen(1234, function() {
	console.log('test')
})