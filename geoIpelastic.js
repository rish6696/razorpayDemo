var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = {
 "description" : "Add geoip information to the given IP address",
 "processors" : [
   {
     "geoip" : {
       "field" : "ip"
     }
   }
 ]
}

var options = {
    url: 'http://localhost:9200/_ingest/pipeline/geoip?pretty',
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(dataString)
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
