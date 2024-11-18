// console.log("shakwat1")
// console.log("shakwat2")
// console.log("shakwat3")

let fun1 = () => {
    console.log("fun1")
}

let fun3 = () => {
    console.log("fun3")
}
let LoadingTime = () => {
    console.log("fun2");
}

let fun2 = () => {
    setTimeout(LoadingTime, 2000)
}

fun1()
fun2()
fun3()