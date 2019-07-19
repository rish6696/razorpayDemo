var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = {
 "description" : "Add geoip info using the GeoLite2 country database",
 "processors" : [
   {
     "geoip" : {
       "field" : "ip",
       "target_field" : "geo",
       "database_file" : "GeoLite2-Country.mmdb.gz",
       "properties": [ "country_iso_code", "country_name", "continent_name" ]
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
    console.log(error)
    console.log(body)
    console.log(response)
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
