const express = require('express')
const app = express()
const logger = require('winston')
var instancePort

if(process.argv[2] == undefined || process.argv[2] == null) {
	instancePort = instancePort = 1234
}
else {
	instancePort = process.argv[2]
}

logger.configure({
    transports: [
      new (logger.transports.File)({ filename: 'logs/' + instancePort + '.log' })
    ]
  });

app.get('/', function(req, res) {
	logger.info('Root hit on port: ' + instancePort)
	res.send('Hello from instance running on port ' + instancePort + '!')
})

app.get('/:param', function(req, res) {
	logger.info(req.params.param + ' endpoint hit on server port ' +instancePort+ '!')
	res.send('Hello from ' + req.params.param + '!\nServer: ' + instancePort)
})

app.listen(instancePort, function() {
	logger.info('Listening on port: ' + instancePort)
})
