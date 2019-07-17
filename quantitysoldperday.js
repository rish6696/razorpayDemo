

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    {
        $unwind:"$items"

    },
    {
        $group:{
            _id:{ $dateToString: { format: "%d-%m-%Y", date: "$createdAt" } },
            TotalQuantity:{$sum:"$items.quantity"}
        }
    },
    {
        $project:{
            date: {
                $dateFromString: {
                   dateString: '$_id'
                }
             },
             TotalQuantity:1
        }
    },{
        $sort:{
            date:-1
        }
    },
    {
        $project:{
            _id:0
        }
    }
])

while (data.hasNext()) {
 printjson(data.next())
}