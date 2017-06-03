const express = require('express')

process.argv.forEach(function(val, index, array){
	app = express()
	if(index > 1) {
		app.get('/', function(req, res) {
			console.log('Root hit on port: ' + val)
			res.send('Hello!')
		})

		app.get('/:param', function(req, res) {
			console.log(req.params.param + ' endpoint hit!')
			res.send('Hello from ' +req.params.param+ '!\nServer: ' + val)
		})
		
		app.listen(val, function() {
			console.log('Listening on port: ' + val)
		})
	}
})