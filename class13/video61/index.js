let massage = true;

let promise = new Promise((reslove, reject) => {
  if (massage) {
    reslove([
        {username:"shakwat", email:"shakwathossain1245@gmail.com"},
        {username:"shuvo", email:"golamkibriya32@gmail.com"}
    ])
  }else{
    reject("no")
  }
});
promise.then((s)=>{
   console.log(s)
})
promise.catch((error)=>{
    console.log(error)
})