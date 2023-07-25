function TuckIn(Arr1, Arr2) {
    
 /* for (let index = 0; index < Arr1.length; index++) {
    const element1 = Arr1[index];
    for (let i = 0; i < Arr2.length; i++) {
      const element2 = Arr2[i];
      if (Arr1[index] > Arr2[i]) {
        element1.splice(i,index,element2);
       

      } else if (Arr1[index] < Arr2[i]) {
      }
    }
  }*/
 /* const tuckIn = (arr1, arr2) => {
    let a = [arr1.shift()];
    let b = [arr1.pop()];
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    };
      arr1.push(b[0]);
    for (let n = 0; n < arr1.length; n++) {
      a.push(arr1[n]);
    };
    return a;
  };
  console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(tuckIn([15,150], [45, 75, 35]));
  console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));*/
/*function insertInMiddle(arr1, arr2) {
    // calculate middle index
    let midIndex = Math.floor(arr1.length / 2);
    let newArr = [];
   
    // populate the new array with the first half of arr1
    for(let i = 0; i < midIndex; i++) {
        newArr.push(arr1[i]);
    }
   
    // insert all elements from arr2
    for(let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i]);
    }
   
    // insert the rest of the elements from arr1
    for(let i = midIndex; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }

    return newArr;
}

let arr1 = [1, 7];
let arr2 = [4, 5, 6];

console.log(insertInMiddle(arr1, arr2)); // [1, 4, 5, 6, 7]*/
  return all;
}

console.log(TuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(TuckIn([15, 150], [45, 75, 35]));
console.log(TuckIn([5, 15, 150, 170], [45, 75, 35]));
