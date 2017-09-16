var tinBMI = (c, n) => {
  return n / (c * c);
};

var a = Math.floor(tinBMI(1.9, 70));
console.log(a);

switch (true) {
  case a < 18:
    console.log("gay");
    break;
  case a > 18 && a < 25:
    console.log("vua");
    break;
  case a > 25:
    console.log("map");
    break;
  default:
    console.log("k xac dinh");
    break;
}

a < 18 && console.log(`gay`);
a > 18 && a < 25 && console.log(`vua`);
a > 30 && console.log(`map`);
