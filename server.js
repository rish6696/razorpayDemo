
const express=require('express');
const app=express();
const request=require('request');

app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}))

const Razorpay=require('razorpay');
const instance =new Razorpay({
    key_id: 'rzp_test_Tt0oK4OzD1hgTr',
    key_secret: '9dY1a2l54yTkTQ6KFIRQisZx'
})




app.use('/createpayment',async (req,res)=>{


    try {

        const data=await instance.orders.create(
            {
             amount:2000, 
             currency:'INR',
             receipt:'_id7838389193'
            }
        )

        res.render('enterdetails',{
            id:data.id

        })
        
    } catch (error) {
        res.send("There  is an error while creating an order id")
        
    }
    
    
    

})

app.post('/success',(req,res)=>{
    console.log('payment done capturing process started');
    instance.payments.capture(req.body.razorpay_payment_id,2000)
    .then((data)=>{
        console.log(data)
        res.send('succeessfuly captured payment !! check your logs');
        
    }).catch((eer)=>{
        console.log('error occured while capturing',eer);
    })
    
})

app.get('/fail',(req,res)=>{
    res.send("Payment Failed")
})


app.use('/createsubscription',(req,res)=>{

    instance.subscriptions.create({
        "plan_id": "plan_CkRWxZtXTksNit",
    "customer_notify": 1,
    "total_count": 6,
    "start_at": 1561852800,
    "addons": []
    }).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })

})



app.listen(4569,()=>{
    console.log('server started')
})