

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').find({},{'billing.paymentMethod':1})

while (data.hasNext()) {
printjson(data.next())
}