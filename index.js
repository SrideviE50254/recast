const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
var request = require('request');
const requestify = require('requestify');
express().use(bodyParser.json()).get('/', (req, res) => {
    res.send({
        replies: [{
            type: 'text'
            , content: 'Welcome to Itelli Botttt'
    }]
    })
}).post('/CreateSO', (req, res) => {
    let materialNo = req.body.conversation.memory.MatNo.value.toString().toUpperCase()
    let qty = req.body.conversation.memory.Qty.value;
    res.send({
        replies: [{
            type: 'text'
            , content: 'Created Order for Material ' + materialNo + 'with Qty ' + qty
    }]
        , conversation: {
            memory: {
                key: 'value'
            }
        }
    })
}).post('/getStatus', function (req, res) {
    // Call the backend service 
    var data = {
        "order": 2823
    };
    Request.post({"url": "https://j4ia5972ceee.hana.ondemand.com/ChatBotProject/services/sample.xsjs"
    ,formData: data}, (error, response, body) => {
        if (error) {
            res.send(error)
        }
        res.send(response)
    });
    /*requestify.post('https://j4ia5972ceee.hana.ondemand.com/ChatBotProject/services/sample.xsjs',data)
	.then(function(response) {
        res.send(response)
	}, function(error)   {
		  res.send(error)
			
		}
	);*/
}).post('/orderStatus', function(req, res) {
    // Call the backend service 
 var data = {
			"order": 2823
			};
	requestify.post('https://j4ia5972ceee.hana.ondemand.com/ChatBotProject/services/sample.xsjs',data)
	.then(function(response) {
        res.send(response)
	}, function(error)   {
		  res.send(error)	
			
		}
	);
}).listen(PORT, () => console.log(`Listening on ${ PORT }`))