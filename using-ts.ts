/*
Every constant has to be unique. Since "button", "input1", "input2"
and the add-function are already used in the js-file they will throw
an error. Deleting the js-file would also solve the problem
*/

const TSbutton = document.querySelector("button");

/*
"!" means that this value will never be null
"as HTMLInputElement" is typecasting which tells TS which type of
element this will be
*/

const TSinput1 = document.getElementById("num1")! as HTMLInputElement;
const TSinput2 = document.getElementById("num2")! as HTMLInputElement;

/*
": number" means that TS can be sure what type this variable will be.
Without it it would throw a warning:

Parameter 'num1' implicitly has an 'any' type,
but a better type may be inferred from usage.
*/

function TSadd(num1: number, num2: number) {
  return num1 + num2;
}

TSbutton.addEventListener("click", function () {
  /*
TSinput1.value will still return a String here,
but a String is not able to be used
in a function which explicitely wants a number.
Compiling like this with "tsc using-ts.ts" will fail
because of this.

Adding + in front of the variables will change thr type into a number
*/
  console.log(TSadd(+TSinput1.value, +TSinput2.value));
});
