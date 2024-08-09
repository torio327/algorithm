

const list=[5,9,3,1,2,8,4,7,6]
 const sorting=(list)=>{
    let a=list
    for (let i=0;i<a.length;i++){
        for(let j=0;j<a.length+1;j++){
        if(a[j]>a[j+1]){
           kari=a[j]
            c=a[j+1]
            a[j]=c
            a[j+1]=kari
        }

        }
    }
    return a
}

console.log('hello')

module.exports={
    sorting
}