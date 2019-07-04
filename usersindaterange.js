

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-accounts').aggregate([
    {
        $match:{
            created_date:{
                $gte:new Date("2019-06-20T04:00:00Z"), 
                $lt: new Date("2019-07-24T04:00:00Z") 
               }

        }
    },
    {
        $group:{
            _id:{ $dateToString: { format: "%d-%m-%Y", date: "$created_date" } },
            count:{$sum:1}
        }
    }
])

while (data.hasNext()) {
 printjson(data.next())
}