function criticalCode() {
  throw "throwing an exception";
}

function logError(theException) {
  console.log(theException);
}

console.log("\n******Try...Catch*******\n");

try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

console.log("\n********Throw...Try...Catch*********\n");

try {
  throw "An exception !!!!!";
} catch (ex) {
  console.log("Got an error");
  logError(ex);
}

// try chach critical error
try {
  criticalCode();
} catch (ex) {
  console.log("Got an error");
  logError(ex);
} finally {
  console.log("cod that always will run");
}

function hello() {
  console.log("\n******Throwing Exceptions*******\n");
}
