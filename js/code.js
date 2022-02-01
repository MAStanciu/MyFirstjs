
//alert("Hello World");
var table = true;
let chair = "One chair";
console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean);

let testNumber = 10;
console.log(testNumber);

let testString="Hola";
console.log(testString);

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject);

let testNumberObject = new Number(10);
console.log(testNumberObject);

let testStringObject = new String("Hola");
console.log(testStringObject);

let nombre = "Mihai";
let surname = "Stanciu";
let question = "Who are you "+nombre+" "+surname+"?";
console.log(question);

let nombre1 = "Mihai";
let surname2 = "Stanciu";
let age = 23;
let question2 = `How old is ${nombre1} ${surname2}?`;
let answer =  "He is"+age+"years old";
console.log(question);
console.log(answer);

let operator_a = 5;
let operator_b = 2;
let sum = operator_a+operator_b;
let rest = operator_a-operator_b;
let mult = operator_a*operator_b;
let division = operator_a/operator_b;
let espo = operator_a**operator_b;
let incr = ++operator_a;
let decr = --operator_a;
console.log(sum);
console.log(rest);
console.log(mult);
console.log(division);
console.log(espo);
console.log(incr);
console.log(decr);

let x = 5;
let y = 6;
console.log(x+=5);
console.log(x-=5);
console.log(x*=3);
console.log(y/=2);

console.log(typeof(testBoolean));
console.log(typeof(testNumber));
console.log(typeof(testStringObject));

let testNull = null;
console.log(typeof(testNull));

let variable;
console.log(variable);

var first_array = [];
var second_array = new Array(3);
var third_array = new Array(3,5);
var fourth_array = new Array(3,5,"Sevilla",true,third_array);
console.log(first_array);
console.log(second_array);
console.log(third_array);
console.log(fourth_array);

console.log(third_array[1]);
console.log(fourth_array[4][0]);

console.log(fourth_array.length);

console.log(fourth_array.push("Spain"));
console.log(fourth_array);

fourth_array.unshift(1);
console.log(fourth_array);

for(var i=0;i<fourth_array.length;i++){
    console.log("Entramos en la iteracion de"+fourth_array[i]);
}

for(var i=fourth_array.length;i>=0;i--){
    console.log("Entramos en la iteracion de"+fourth_array[i]);
}
var i=fourth_array.length;
for(;i>=0;i--){
    console.log("Entramos en la iteracion de"+fourth_array[i]);
}


fourth_array.forEach(function(element){
    console.log("Fourth iteration "+element);
})

let today = new Date();
let first_october = new Date(2019,10,1);
console.log(today);
console.log(first_october);
console.log(today.getDay());