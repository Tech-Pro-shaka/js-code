class parent{
    Shkawat(){
        console.log("NO");
    }
    Shkawat2(){
        console.log("NO");
    }
}

class Ami extends parent{
    // MyAssets(){
    //     super.Shkawat();
    //     super.Shkawat2();
    // }
}
let MyAssets = new Ami();
MyAssets.Shkawat();
MyAssets.Shkawat2();