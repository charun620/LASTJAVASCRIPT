const promise = new Promise((resolve,rejects)=>{
    const res = true;
    //An asynchronus operation.
    if (res) {
        resolve("Resolved!");

        
    } else {
        rejects(Error("Fatal Error"));
    }
});


promise.then(
    (res)=> console.log(res),
    (err)=> console.log(err)
);
