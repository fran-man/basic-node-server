const express = require('express')
const winston = require('winston')

function startServer(port) {
	var app = express()
	var logger = new (winston.Logger)({
	    transports: [
	      new (winston.transports.File)({ label: port, filename: 'logs/' + port + '.log' })
	    ]
	  });

	app.get('/', function(req, res) {
		logger.info('Root hit on port: ' + port)
		res.send('Hello from instance running on port ' + port + '!')
	})

	app.get('/:param', function(req, res) {
		logger.info(req.params.param + ' endpoint hit on server port ' +port+ '!')
		res.send('Hello from ' + req.params.param + '!\nServer: ' + port)
	})

	app.listen(port, function() {
		logger.info('Listening on port: ' + port)
	})
}

startServer(1234)
startServer(1334)
startServer(1434)
startServer(1534)
