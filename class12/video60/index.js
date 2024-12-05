//  console.log("hello shakwat");
//  console.log(num);
//  console.log("hello me");

 try{
    console.log("hello shakwat");
    // console.log(num);
   let age = 19;
   if(age < 17){
    throw "no"
   }
   else if(age > 18) {
    throw "yes"
   }
 }catch(meError){
    console.log(meError)
 }finally{
    console.log("hello me");
 }