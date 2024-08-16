
async function makeCake(){
    //  console.log("start")
    // bakeCake();
    //  console.log("end")
    //  addToppings()
    const cakeOne=bakeCake();
    const cakeTwo= bakeCakeThree();
    const cakeThree=bakeCakeTwo();

    await Promise.all([bakeCake(),cakeTwo,cakeThree])
    console.log("end all cakes")
    //  bakeCake();
    //  bakeCakeThree();
    // bakeCakeTwo();
    //  console.log("end all cakes")
}
function bakeCakeTwo(){
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log("bakCake Two")
        },1000)
    })
    // setTimeout(()=>{
    //
    //     console.log("bakCake Two")
    // },1000)
}
function bakeCakeThree(){
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log("bakCake Three")
        },2000)
    })
    // setTimeout(()=>{
    //
    //     console.log("bakCake Three")
    // },2000)
}

function bakeCake(){
    return new Promise((resolve)=>{
        setTimeout(()=>{

            console.log("bakeCake now")
        },7000)
    })
    // setTimeout(()=>{
    //
    //     console.log("bakeCake now")
    // },7000)
}
function addToppings(){
    bakeCake()
    bakeCakeTwo()
    bakeCakeThree()
    console.log('ee')
}


module.exports={
  makeCake
}