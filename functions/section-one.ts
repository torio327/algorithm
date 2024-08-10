

const list=[5,9,3,1,2,8,4,7,6]
 const sorting=(list:[number])=>{
    for (let i=0;i<list.length;i++){
        for(let j=0;j<list.length+1;j++){
        if(list[j]>list[j+1]){
            [list[j],list[j+1]]=[list[j+1],list[j]]
        }
        }
    }
    return list
}

const bubbleSort=()=>{

}

module.exports={
    sorting
}