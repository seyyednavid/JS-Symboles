//  Create a symbol
const sym1 = Symbol();
const sym2 = Symbol("sym2");

console.log(sym1);
console.log(sym2);
console.log(typeof sym2);

// symbols are not equal
console.log(Symbol() === Symbol());
console.log(Symbol("123") === Symbol("123"));

console.log(`hello ${String(sym1)}`);
console.log(`hello ${sym1.toString()}`);
console.log("--------------");
// -------------------------------------------

//  unique object keys
const KEY1 = Symbol();
const KEY2 = Symbol("sym10");

const myObj = {};
myObj[KEY1] = "prop1";
myObj[KEY2] = "prop2";
myObj.key3 = "prob3";
myObj.key4 = "prob4";
console.log(myObj);
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);
console.log("--------------");

// --------------------------------------------

// symbols are not enumerable in for...in -> key1 and key2 are not considered in loop

for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
  //  prob1 and prob2 do not consider because of having symbol keys
}

console.log("--------------");

// symbols are ignored by JSON.Stringify
console.log(JSON.stringify({ key: "prob" }));
console.log(JSON.stringify({ [Symbol("sym15")]: "prob" }));
console.log("--------------");

// ------------------------------------------------
/*
The Symbol Type
A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.

It represents a unique "hidden" identifier that no other code can accidentally access.

For instance, if different coders want to add a person.id property to a person object belonging to a third-party code, they could mix each others values.
*/
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let id = Symbol("id");
person[id] = 140353;

console.log(person[id] + " " + person.id);
// Now person[id] = 140353
// but person.id is still undefined
