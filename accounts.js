

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

            ],
            signUp:[
                {
                   $match:{
                       source:"local",
                       $or:[{
                          fromGuest:{$exists:false}
                       },
                       {
                           fromGuest:false
                       }]
                   }
                },{
                    $count:"count"
                }
                
            ],
            registeredViaGuest:[
                {
                   $match:{
                       source:"local",
                       fromGuest:true
                   }
                },{
                    $count:"count"
                }
                
            ],
            guest:[
                {
                    $match:{
                        source:'guest'
                    }
                },{
                    $count:"count"
                }
            ]

        }
    }
])

while (data.hasNext()) {
printjson(data.next())

}