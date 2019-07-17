var request = require('request');

var headers = {
    'Content-Type': 'application/json'
};

var dataString = 
{
  
    "aggs": {
        "aggregated_users": {
            "terms": {
                "field": "entityId.keyword",
                "order": {
                  "sort_date": "desc"
                }
                
            },
            "aggs": {
              "sort_date":{
                "max": {
                  "field": "@timestamp"
                }
                
                
              },
                "top_events_of_users": {
                    "top_hits": {
                        "sort": [
                            {
                                "@timestamp": {
                                    "order": "desc"
                                }
                            }
                        ]
                    }
                }
            }
        }
    }
}

var options = {
    url: 'http://localhost:9200/hjwyvrdvqhjevkes_vq/logs/_search',
    method: 'POST',
    headers: headers,
    body: JSON.stringify(dataString)
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
