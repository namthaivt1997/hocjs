// cu phap
// Es5

function myFunc(ts1, ts2) {
  console.log(`kieu du lieu cua tham so 1: ${typeof ts1}
                 kieu du lieu cau tham so 2: ${typeof ts2}`);
  return ts1 + ts2;
}

var a = myFunc(1, "thai");
console.log(a);
// Es6
// Arrow function

var es6_fn = (ts1, ts2) => {
  return "load ok";
};
// flat arrow function
var es6_flat_fn = x => x * 3;
console.log(es6_flat_fn(9));

//this
