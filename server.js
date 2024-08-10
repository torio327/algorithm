const{sorting}=require('./functions/section-one')
const {hey} = require("./functions/two");

const list=[5,9,3,1,2,8,4,7,6,11,13,10,15,14,12]
// for (let i=0;i<list.length;i++){
//     for(let j=i;j<list.length+1;j++){
//         if(list[j]>list[j+1]){
//             list[j]=list[j+1]
//         }
//         console.log(a)
//     }
// }

hey(1)

console.log(sorting(list))