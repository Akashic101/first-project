const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  /*
  Returning +num1 and +num2 would change the String into a number but
  would add more unneeded stuff
  */
  return num1 + num2;
}

button.addEventListener("click", function() {
  /*
  Accessing the value of something will always return a String,
  which is why the result shown in the console would be a concatenaed
  instead of added together
  */
  console.log(add(input1.value, input2.value));
});
