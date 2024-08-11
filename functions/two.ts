

const bubbleTwo=(list:[number])=>{
    for(let i=list.length-1;i>-1;i--){
        for(let j=list.length-1;j>list.length-1-i;j=j-1){
            console.log(j)
            if(list[j]<list[j-1]){
                [list[j-1],list[j]]=[list[j],list[j-1]]
            }
        }
    }
    return list
}


module.exports={
    bubbleTwo
}