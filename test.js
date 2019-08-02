
// function createData(fromDate,toDate,data){
//   let hashMap=genHashMap(data);
//   hashMap=generateEmptydate(fromDate,toDate,hashMap)
//   return sortDate(hashMap)
  

// }

// function genHashMap(data){
//   const hashMap={}
//   data.forEach((ele)=>{
//     hashMap[ele.date]=ele.count
//   })
//   return hashMap

// }
// function generateEmptydate(fromDate,toDate,hashMap){
  
//   const iterator=new Date(fromDate)
//    toDate=new Date(toDate)

//   while(iterator<=toDate){
//     const strdate=iterator.toISOString()
//     if(!hashMap[strdate]){
//       hashMap[strdate]=0
//     }
//     iterator.setDate(iterator.getDate()+1)   
//   }
//   return hashMap
// }
// function sortDate(hashMap){

//   const keys=Object.keys(hashMap).sort((a,b)=>{
//     return new Date(a)-new Date(b)
//   })
//   const data=[]
//   keys.forEach((ele)=>{
//     data.push({
//       _id:ele,
//       count:hashMap[ele]

//     })
//   })
//   return data
// }

// const data=[
//   {
//       "count": 3,
//       "date": "2019-06-25T00:00:00.000Z"
//   },
//   {
//       "count": 2,
//       "date": "2019-06-24T00:00:00.000Z"
//   }
// ]

// const ans=createData("2019-06-20T00:00:00.000Z","2019-06-26T00:00:00.000Z",data)
// console.log(ans)


const current=new Date()
console.log(current)
current.setDate(3)
console.log(current)
current.setHours(0,0,0,0)
console.log(current)
