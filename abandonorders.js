

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
        {
            $match:{
                paymentRecieved:false,
                "billing.paymentMethod.type":{$ne:"cash"}

            }
        },
        {
            $count:"Total"
        }
 ])

 while (data.hasNext()) {
    printjson(data.next())
}