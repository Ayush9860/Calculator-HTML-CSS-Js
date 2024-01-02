let btnGroup = document.querySelectorAll(".buttons");
let inputTag = document.querySelector("input");

console.log(btnGroup);
console.log(inputTag);

let str = "";

btnGroup.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      str = inputTag.value;
      inputTag.value = eval(str);
      console.log(str);
    } else if (e.target.innerHTML == "AC") {
      str = "";
      inputTag.value = str;
      console.log(str);
    } else if (e.target.innerHTML == "DEL") {
      str = str.substring(0, str.length - 1);
      inputTag.value = str;
    } else {
      str += e.target.innerHTML;
      inputTag.value = str;
      console.log(str);
    }
  });
});
