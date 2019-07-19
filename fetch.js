const data=db.getCollection('HJwYVrdVQHJevKES_VQ-products').find({},{_id:1}).limit(1)
while (data.hasNext()) {
    printjson(data.next())
   }