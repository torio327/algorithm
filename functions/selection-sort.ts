const selection=(list:[number])=>{
    for(let i=0;i<list.length;i++){
        let min=i
        for (let j=i+1;j<list.length;j++){
            if(list[min]>list[j]){
                min=j
            }
        }
        [list[i],list[min]]=[list[min],list[i]]
    }
    return list;
}

module.exports={
    selection
}