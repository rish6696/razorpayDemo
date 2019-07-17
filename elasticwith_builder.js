const elasticsearch=require('elasticsearch');
const esb=require('elastic-builder');
const client=new elasticsearch.Client({
    host:'localhost:9200',
    log:'trace'

})

const requestBody=esb.requestBodySearch()
.agg(
    esb.termsAggregation('aggregated_users', 'entityId.keyword')
    .order("sort_date")
    .agg(esb.maxAggregation('sort_date','@timestamp'))
    .agg(esb.topHitsAggregation('top_events_of_users')
    .sort(esb.sort({"@timestamp":{order:"desc"}}))
    
    )
)

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