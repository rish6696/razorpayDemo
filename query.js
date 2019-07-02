
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
function myfun() {
    //   var data= db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    //     {
    //         $match:{
    //             $or: [
    //                 { $and: [{ paymentRecieved: true, "billing.paymentMethod.type": { $in: constant.PAYMENT_GATEWAYS } }] },
    //                 { "billing.paymentMethod.type": "cash" }
    //              ],
    //             createdAt :{
    //                   $gte:new Date('2019-05-01T04:00:00Z'), 
    //                   $lt: new Date('2019-06-22T04:00:00Z') 
    //               }
    //           }
    //     }




//// total orders,totalcost,totalquantiy
    // ])

    // var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    //    {
    //       $match:{
    //         $or: [
    //             { $and: [{ paymentRecieved: true, "billing.paymentMethod.type": { $in: constant.PAYMENT_GATEWAYS } }] },
    //             { "billing.paymentMethod.type": "cash" }
    //          ],
    //         createdAt :{
    //               $gte:new Date('2019-05-01T04:00:00Z'), 
    //               $lt: new Date('2019-06-22T04:00:00Z') 
    //           }
    //       }

    //     },
    //     {

    //         $facet:{
    //             "TotalQuantity":[
    //                 {
    //                     $unwind: "$items"
    //                 },
    //                 {
    //                     $group: {
    //                         _id: null,
    //                         totalquantity: { $sum: "$items.quantity" }
    //                     }
    //                 }
    //             ],
    //             "Total Orders":[
    //                 {
    //                     $count:"TotalOrders"
    //                 }
    //             ],
    //             "TotalValueoforders":[
    //                 {
    //                     $group: {
    //                         _id: null,
    //                         totalvalue: { $sum: "$billing.invoice.total" }
    //                     }
    //                 }

    //             ]


    //         }
    //     }
    // ])
/// get all quantity for specific categories
  


    // var data = db.getCollection('ryJHbl4P4BkeJH-lEv4-orders').aggregate([
    //     {
    //         $unwind:"$items"
    //     },
    //     {
    //         $facet:{
    //             "TotalConfirmed":[
    //                 {
    //                     $match:{
    //                         "items.isConfirmed":true,
    //                         "items.isShipped":false,
    //                         "items.isDelivered":false,
    //                         "items.isReturned":false,
    //                         "items.isCancelled":false

    //                     }
    //                 },
    //                 { 
    //                       $count:"TotalConfirmed"
    //                 }
    //             ],
    //             "TotalShipped":[
    //                 {
    //                     $match:{
    //                         "items.isConfirmed":true,
    //                         "items.isShipped":true,
    //                         "items.isDelivered":false,
    //                         "items.isReturned":false,
    //                         "items.isCancelled":false

    //                     }
    //                 },
    //                 { 
    //                       $count:"TotalShipped"
    //                 }
    //             ],
    //             "TotalDelivered":[
    //                 {
    //                     $match:{
    //                         "items.isConfirmed":true,
    //                         "items.isShipped":true,
    //                         "items.isDelivered":true,
    //                         "items.isReturned":false,
    //                         "items.isCancelled":false

    //                     }
    //                 },
    //                 { 
    //                       $count:"TotalDelivered"
    //                 }

    //              ],
    //             "TotalCancelled":[
    //                 {
    //                     $match:{
                            
    //                         "items.isCancelled":true

    //                     }
    //                 },
    //                 { 
    //                       $count:"TotalCancelled"
    //                 }

    //             ]
    //         }
    //     }

    // ])
  while (data.hasNext()) {
        printjson(data.next())
    }
}
myfun();


