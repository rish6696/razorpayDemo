



//var data = db.projects.find({},{publisher:1})
const array=[ObjectId("5adf1e431a41ef8a0d8cb24f"),ObjectId("5adf1e431a41ef8a0d8cb24f")];
var data=db.publishers.find({_id :{$in:[ObjectId("5adf1e431a41ef8a0d8cb24f"),ObjectId("5adf1e431a41ef8a0d8cb24f")]}})
//5d0221968fb1cc39a9fd7f0f

while (data.hasNext()) {
  printjson(data.next())
}


// GET hjwyvrdvqhjevkes_vq/logs/_search
// {
  
//     "aggs": {
//         "aggregated_users": {
//             "terms": {
//                 "field": "entityId.keyword"
//                 , "size": 1
//             },
//             "aggs": {
//                 "top_sales_hits": {
//                     "top_hits": {
//                         "sort": [
//                             {
//                                 "@timestamp": {
//                                     "order": "desc"
//                                 }
//                             }
//                         ],
//                         "size" : 2
//                     }
//                 }
//             }
//         }
//     }
// }


// "name": "My Application",
//           "hostname": "ankit-notation",
//           "pid": 8592,
//           "level": "info",
//           "entityType": "user",
//           "entityId": "ankit@notationtech.com",
//           "targetEntityType": "product",
//           "targetEntityId": "3000000341",
//           "projectHash": "HJwYVrdVQHJevKES_VQ",
//           "event": "addToWishlist",
//           "v": 0,
//           "@timestamp": "2019-07-08T05:52:01.542Z",
//           "message": ""


//correct code final
// GET hjwyvrdvqhjevkes_vq/logs/_search
// {
  
//     "aggs": {
//         "aggregated_users": {
//             "terms": {
//                 "field": "entityId.keyword",
//                 "order": {
//                   "sort_date": "desc"
//                 }
                
//             },
//             "aggs": {
//               "sort_date":{
//                 "max": {
//                   "field": "@timestamp"
//                 }
                
                
//               },
//                 "top_events_of_users": {
//                     "top_hits": {
//                         "sort": [
//                             {
//                                 "@timestamp": {
//                                     "order": "desc"
//                                 }
//                             }
//                         ]
//                     }
//                 }
//             }
//         }
//     }
// }


