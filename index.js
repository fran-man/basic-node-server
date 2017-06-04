const express = require('express')
const app = express()
var instancePort

if(process.argv[2] == undefined || process.argv[2] == null) {
	instancePort = instancePort = 1234
}
else {
	instancePort = process.argv[2]
}

app.get('/', function(req, res) {
	console.log('Root hit on port: ' + instancePort)
	res.send('Hello from instance running on port ' + instancePort + '!')
})

app.get('/:param', function(req, res) {
	console.log(req.params.param + ' endpoint hit on server port ' +instancePort+ '!')
	res.send('Hello from ' + req.params.param + '!\nServer: ' + instancePort)
})

app.listen(instancePort, function() {
	console.log('Listening on port: ' + instancePort)
})
