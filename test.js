// const millitoadd=2*60*60*1000
// console.log(Date.now())
// const a=Date.now()+10
// console.log(a)




// function getfromDateAndtoDate(duration){
//     return {
//         toDate:new Date(new Date().setDate(new Date().getDate()+duration)),
//         fromDate:new Date()
//     }
// }

// const m=1565461800000;     //current end
// console.log(new Date(m))

function createDate(intDate){
    return new Date(parseInt(intDate.toString()+"000"))
  }

  console.log(createDate(1565548200))

