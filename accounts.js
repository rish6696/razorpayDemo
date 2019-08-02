

 var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-accounts').find({}).limit(1)

while (data.hasNext()) {
printjson(data.next())

}