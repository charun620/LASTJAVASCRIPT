function addname(obj,name,value) {
    obj[name]=value
    return obj;
}

console.log(addname({},"brutus",300));
console.log(addname({piano:500},"brutus",400));