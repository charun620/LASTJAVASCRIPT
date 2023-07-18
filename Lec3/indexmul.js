function IndexMul(arr) { 
   let sum=0 ;
    for (let index = 0; index < arr.length; index++) {
       sum =sum+(arr[index]*index);
      
    }
      return sum;
}

console.log(IndexMul([1,2,3,4,5]));
console.log(IndexMul([-3,0,8,-6]));