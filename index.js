const express = require('express')
const app = express()

process.argv.forEach(function(val, index, array){
	app2 = express()
	if(index > 1) {
		app2.get('/', function(req, res) {
			console.log('Root hit on port: ' + val)
			res.send('Hello!')
		})

		app2.get('/:param', function(req, res) {
			console.log(req.params.param + ' endpoint hit!')
			res.send('Hello from ' +req.params.param+ '!\nServer: ' + val)
		})
		
		app2.listen(val, function() {
			console.log('Listening on port: ' + val)
		})
	}
})