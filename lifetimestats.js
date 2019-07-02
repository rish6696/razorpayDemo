
let workerRunningStatus = {
    running: 'running',
    failed: 'failed',
    completed: 'completed',
    neverRun: 'neverRun'
};

let jobQueueStatus = {
    pending: 'pending',
    completed: 'completed',
    processing: 'processing',
    failed: 'failed'
};

let status = {
    inactive: 'inactive',
    active: 'active'
};

let loggerType = {
    worker: 'worker',
    publisher: 'publisher',
    admin: 'admin',
};

let jobQueueTypes = {
    'image-process': 'image-process'
};

let notificationStatus = {
    pending: 'pending',
    completed: 'completed',
    error: 'error'
};

let importerType = ['csv:remote', 'shop:magento', 'csv:local', 'csv:google'];

let orderStatus = {
    pending: 'pending',
    payment_awaited: 'payment_awaited',
    payment_failed: 'payment_failed',
    confirmed: 'confirmed',
    ready_to_ship: 'ready_to_ship',
    shipped: 'shipped',
    delivered: 'delivered',
    completed: 'completed',
    canceled: 'canceled',
    refunded: 'refunded',
    verification_required: 'verification_required'
};

let sellonStatus = {
    unpub: "unpub",
    ready: "ready",
    pending: "pending",
    success: "success",
    error: "error",
}

let productSelectFields = "-selectedOptions -attributes -smallImg -smallImgOriginal -underProcess -amazon -facebook -google -flipkart -hasParent -dataSource";
let unselectAccountFields = "-password -verificationToken -dataSource";

let CREDIT_PRICING = {
    "sms": -0.2,
    "campaign": function (startDate, endDate, costPerDay) {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(endDate);
        var secondDate = new Date(startDate);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

        return diffDays * costPerDay
    }
}

let PAYMENT_GATEWAYS = ["payu", "paytm", "rzp", "ccae"];

let ALL_PAYMENTS = ["cash", ...PAYMENT_GATEWAYS];

let constant = {
    workerRunningStatus,
    status,
    jobQueueStatus,
    jobQueueTypes,
    notificationStatus,
    importerType,
    orderStatus,
    productSelectFields,
    sellonStatus,
    unselectAccountFields,
    PAYMENT_GATEWAYS,
    CREDIT_PRICING,
    ALL_PAYMENTS
}



var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-products').aggregate([
        
    {
        $facet:{
            "TotalProducts":[
                {
                    $count:"TotalProducts"
                }
            ],
            "TotalProductsByCategory":[
                {
                    $unwind:"$categories"
                },
                {
                    $group:{
                        _id:"$categories.name",
                        count:{$sum:1}
                    }
                },
                {
                    $sort:{count:-1}
                },{
                    $limit:20
                }
            ],
            "TotalQuantityOfProducts":[
                {
                    $group:{
                        _id:null,
                        TotalQuantity:{$sum:"$quantity"}
                    }
                }
            ],
            "TotalQuantityByCategory":[
                {
                    $unwind:"$categories"
                },
                {
                    $group:{
                        _id:"$categories.name",
                        count:{$sum:"$quantity"}
                    }
                },
                {
                    $sort:{count:-1}
                },
                {
                    $limit:20
                }
            ]

        }
    }
 ])

 while (data.hasNext()) {
    printjson(data.next())
}