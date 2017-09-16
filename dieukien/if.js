var x = "";

if (x === "") {
  console.log(`k rong`);
} else {
  console.log("rong");
}

switch (x) {
  case "1":
    console.log("string !");
    break;
  case 1:
    console.log("number !");
  default:
    console.log("default");
    break;
}

// Ep kieu
String(); // -> String
Number(); // -> Number
Boolean(); // -> Boolean
