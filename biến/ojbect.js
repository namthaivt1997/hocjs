// cu phap {property : value}

var myObj = {
  name: "Thai",
  sayHello: function sayHello(params) {
    return "hi thai";
  }
};

console.log(typeof myObj);
// cach 1
console.log(myObj.name);
// cach 2
console.log(myObj["name"]);
// call method
console.log(myObj.sayHello());

// tao so ngau nhien
var random = Math.floor(Math.random() * 10);
console.log(random);

// ojbect global
