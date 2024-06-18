// anonymous function / function expression

const square = function (num) {
  return num * num;
};

// IIFE - immediate invoked function

// (function printSquare(num){
//   console.log(num * num)
// })(10);

// (function (num){
//     (function (num){
//        console.log(x)
//     })(1);
//   })(1);

// var prints 5 , 5 times and let prints 0 to 4
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
