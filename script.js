let namexx = prompt('Type here');


let taskobj={};
let count=1;
for(let i=0;i<namexx.length;i++){
    if(taskobj.hasOwnProperty(namexx[i])){
        taskobj[namexx[i]]++;
    }else{
        taskobj[namexx[i]]=count;
    }
}
console.log(taskobj);
for(let i=0;i<namexx.length;i++){
    if(taskobj[namexx[i]]===1){
        console.log(namexx[i]);
        let bar = confirm(namexx[i]);
		
     break;
    }
}
console.log(namexx, bar);
