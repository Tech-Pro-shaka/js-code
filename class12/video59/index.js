let Display = (Someting) => {
    console.log(Someting)
}

let HigherOrderFun = (Name, Class, CallBackFun) => {
    const Details = `My Name is ${Name} & I Read In class ${Class}`;
    CallBackFun(Details)
}
HigherOrderFun("Shakwat", "8" , Display)