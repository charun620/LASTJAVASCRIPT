function simplepair(arr,num) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (num==arr[index]) {
            return element,arr[index];
            
        }
        
    }
}


console.log(simplepair([1,2,3],3));