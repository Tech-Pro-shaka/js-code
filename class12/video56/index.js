// let shakwat = [2,4,6,10];
// let shakwat1 = [];

// shakwat.forEach (MyFun)

// function MyFun(x){
//     shakwat1.push(x*2)
// }

// console.log(shakwat1)


let shakwat = [2,4,6,10];
let shakwat1 = shakwat.map(myFun)

function myFun(x){
    return x
}
console.log(shakwat1)