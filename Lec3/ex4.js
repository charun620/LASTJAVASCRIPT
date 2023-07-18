function numsum(arr) {
    let num=0;
    for (let index = 0; index < arr.length; index++) {
        if (typeof arr[index]==num) {
            console.log(typeof arr[index]);
            num =num+arr[index]
        }
        
    }
    return num;
    
}
console.log(numsum([1,2,"13","4","165"]));