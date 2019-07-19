var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = {
 "ip": "8.8.0.0"
}

var options = {
    url: 'http://localhost:9200/test_index/test_type/test_id?pipeline=geoip&pretty',
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(dataString)
};

function callback(error, response, body) {
    console.log(error)
    console.log(response)
    console.log(body)
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
