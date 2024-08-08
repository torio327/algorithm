

const list=[5,9,3,1,2,8,4,7,6]
 const sorting=(list)=>{
    for (let i=0;i<list.length;i++){
        for(let j=i;j<list.length+1;j++){
        if(list[j]>list[j+1]){
            list[j]=list[j+1]
        }
        }
    }
    return list
}



module.exports={
    sorting
}