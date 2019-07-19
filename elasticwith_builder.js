const elasticsearch=require('elasticsearch');
const esb=require('elastic-builder');
const client=new elasticsearch.Client({
    host:'localhost:9200'

})


const requestBody=esb.requestBodySearch()
.size(5)
.sort(esb.sort('@timestamp','desc'))
.query(esb.matchQuery("entityId.keyword","ankit@notationtech.com"))

// const requestBody=esb.requestBodySearch()
// .agg(
//     esb.termsAggregation('aggregated_users', 'entityId.keyword')
//     .order("sort_date")
//     .agg(esb.maxAggregation('sort_date','@timestamp'))
//     .agg(esb.topHitsAggregation('top_events_of_users')
//     .sort(esb.sort({"@timestamp":{order:"desc"}}))
    
//     )
// )
// const bodyStructure={
//           "name": "My Application",
//           "hostname": "ankit-notation",
//           "pid": 8592,
//           "level": "info",
//           "entityType": "user",
//           "entityId": "latest@notationtech.com",
//           "targetEntityType": "product",
//           "targetEntityId": "3000000341",
//           "projectHash": "HJwYVrdVQHJevKES_VQ",
//           "event": "addToWishlist",
//           "v": 0,
//           "@timestamp": "2019-07-18T09:52:01.542Z",
//           "message": "",
//           "ip":"68.183.152.14"
// }

// client.index({
//     index:'hjwyvrdvqhjevkes_vq',
//     type:'logs',
//     id:"122",
//     body:bodyStructure,
//     pipeline:'geoip'
// }).then(resp=>{
//     console.log(resp)
// }).catch(err=>{
//     console.log(err)
// })

client.search({
    index:'hjwyvrdvqhjevkes_vq',
    type:'logs',
    body:requestBody.toJSON()
})
.then((data)=>{
    console.log(data)
})
.catch(err=>{
    console.trace(err)
})