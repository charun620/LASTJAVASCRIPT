function fillarray(A1) {
    let Anew= new Array();
    
    for (let index = 0; index <A1.length; index++) {
        if (typeof A1[index]=='number') {
         Anew.push(A1[index]);
        }
}
return Anew;
}

console.log(fillarray([1,2,"a","b"]));
console.log(fillarray([1,"a","b",0,15]));
console.log(fillarray([1,2,"aasf","1","123",123]));