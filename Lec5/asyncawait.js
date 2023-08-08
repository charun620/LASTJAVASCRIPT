function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Start!!");
  //try take of await and compare
  await promiseTimeout(2000);
  console.log("Stop!!");
}

 console.log("before run");
run();
console.log("after run");
