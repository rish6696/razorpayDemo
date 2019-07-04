function graphControl(req,res,next){
    Promise.all([graphAccounts(),graphOrders(),graphProducts()])
    .then(data=>console.log(data))


}
function graphOrders(){
    return new Promise((resolve,reject)=>{
        resolve(10)
    })

}
function graphProducts(){
    return new Promise((resolve,reject)=>{
        resolve(20)
    })

}
function graphAccounts(){
    return new Promise((resolve,reject)=>{
        resolve(30)
    })

}

graphControl();