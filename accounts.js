

var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-accounts').aggregate([
    {
        $facet:{
            Local:[
                {
                    $match:{
                        source:'local'
                        
                    }
                },
                {
                    $count:"Total"
                }
            ],
            Facebook:[
                {
                    $match:{
                        source:'facebook'
                        
                    }
                },
                {
                    $count:"Total"
                }
            ],
            Google:[
                {
                    $match:{
                        source:'google'
                        
                    }
                },
                {
                    $count:"Total"
                }

            ]

        }
    }
])

while (data.hasNext()) {
printjson(data.next())

}