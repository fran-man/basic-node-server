const express = require('express')
const winston = require('winston')
const app = express()

var port

if(process.argv[2] == undefined || process.argv[2] == null) {
	port = port = 1234
}
else {
	port = process.argv[2]
}

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

app.get('/healthcheck', function(req, res) {
	res.send('success')
})

app.listen(port, function() {
	logger.info('Listening on port: ' + port)
})
