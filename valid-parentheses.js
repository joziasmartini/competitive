/*
Valid Parentheses

Given a string `s` containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid.

A input string is valid if 1) open brackets must be closed by the same type of brackets 2) open brackets must be closed in the correct order.

Examples:

"()"      valid
"()[]{}"  valid
"(]"      invalid
"([)]"    invalid
"{[]}"    valid
*/

var input1 = "()"; // valid
var input2 = "()[]{}"; // valid
var input3 = "(]"; // invalid
var input4 = "([)]"; // invalid
var input5 = "{[]}"; // valid

function verify(input) {
  let characters = Array.from(input);
  let valid = [];

  characters.map((char) => {
    if (char == "(" || char == "[" || char == "{") {
      valid.push(char);
    } else if (char == ")" && valid.slice(-1) == "(") {
      valid.pop();
    } else if (char == "]" && valid.slice(-1) == "[") {
      valid.pop();
    } else if (char == "}" && valid.slice(-1) == "{") {
      valid.pop();
    } else {
      valid.push("invalid");
    }
  });

  const result = valid.length === 0;
  console.log(result);
}

verify(input1);
verify(input2);
verify(input3);
verify(input4);
verify(input5);
