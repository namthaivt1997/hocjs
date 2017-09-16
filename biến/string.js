// cú pháp khai báo
// es5
var myString1;
myString1 = "thai";
console.log(typeof myString1);

// noi cac string
var myString2 = "Hoc js";
var myString3 = myString1 + " " + myString2;

console.log(myString3);

// es6
var stringEs6 = `Thai`;
var stringEs6_2 = `hoc js`;
var stringEs6_3 = `${stringEs6} ${stringEs6_2}`;
console.log(stringEs6_3);

// *so dang string
var number_string = "6";
var number_string2 = "4";
var number = 10;
//+ - * /
// +nb_str + nb_str||number = string
console.log(number_string + number_string2);
console.log(number_string + number);
console.log(number + number_string);

//-,*,/ nb_str - nb_str = number
console.log(number_string - number_string2);
