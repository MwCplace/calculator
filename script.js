let output = document.querySelector("#output");
let buttons = document.querySelectorAll("button");
let str = '';

buttons.forEach(button => {
  button.addEventListener("click", function() {
    switch (this.innerHTML) {
      case 'CE':
        str = '';
        break;
      case '=':
        str = result(str);
        break;
      default:
        str += this.innerHTML;
        break;
    }
    output.innerHTML = str;
  });
});

function result(str) {
  if (str !== '') {
    try {
      return Math.round(Function(`'use strict'; return (${str})`)() * 1000) / 1000;
    } catch (error) {
      return 'Error';
    }
  }
  return 0;
}

// let output = $("#output");
// let str = '';

// $("button").click(function() {
//   switch (this.innerHTML) {
//     case 'CE':
//       str = '';
//       break;
//     case '=':
//       str = result(str);
//       break;
//     default:
//       str += this.innerHTML
//       break;
//   }
//   output.innerHTML = str;
// });

// function result(str) {
//   if (str == '') {
//     return 0;
//   }
//   else {
//   //https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
//     return Math.round(eval(str)*1000)/1000;
//   }
//   return 0;
// }
