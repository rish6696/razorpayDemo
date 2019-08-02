

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-products').find({}).limit(1)

while (data.hasNext()) {
printjson(data.next())
}