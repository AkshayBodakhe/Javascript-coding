// event propagation in JS
// what is event bubbling ?

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    alert("div");
  },
//   { capture: true } 
);

button.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    alert("button");
  },
//   { capture: true }
);

form.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    alert("form");
  },
//   { capture: true }
);
