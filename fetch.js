const data=db.getCollection('HJwYVrdVQHJevKES_VQ-sessions').find()
while (data.hasNext()) {
    printjson(data.next())
   }