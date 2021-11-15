/*
All const have been changed to var

TODO: Figure out why var and not let
*/

var TSbutton = document.querySelector("button");
var TSinput1 = document.getElementById("num1");
var TSinput2 = document.getElementById("num2");

function TSadd(num1, num2) {
  return num1 + num2;
}

/*
The variables are now explitive numbers and not Strings
*/

TSbutton.addEventListener("click", function () {
  console.log(TSadd(+TSinput1.value, +TSinput2.value));
});
