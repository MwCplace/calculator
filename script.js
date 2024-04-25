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
