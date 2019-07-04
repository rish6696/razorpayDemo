

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
        {
            $match:{
                paymentRecieved:false,
                "billing.paymentMethod.type":{$ne:"cash"},
                createdAt:{
                    $gte:new Date("2019-01-20T04:00:00Z"), 
                    $lt: new Date("2019-07-24T04:00:00Z") 
                   }

            }
        },
        {
            $count:"Total"
        }
 ])

 while (data.hasNext()) {
    printjson(data.next())
}