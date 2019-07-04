

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    {
        $match:{
            createdAt:{
                $gte:new Date("2019-06-18T04:00:00Z"), 
                $lt: new Date("2019-07-02T04:00:00Z") 
               }

        }
    },
    {
        $group:{
            _id:{ $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
            count:{$sum:1}
        }
    }
])

while (data.hasNext()) {
printjson(data.next())
}