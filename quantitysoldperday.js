

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    // {
    //     $match:{
    //         createdAt:{
    //             $gte:new Date("2019-04-18T04:00:00Z"), 
    //             $lt: new Date("2019-07-02T04:00:00Z") 
    //            }

    //     }
    // },
    {
        $unwind:"$items"

    },
    {
        $group:{
            _id:{ $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
            TotalQuantity:{$sum:"$items.quantity"}
        }
    }
])

while (data.hasNext()) {
 printjson(data.next())
}