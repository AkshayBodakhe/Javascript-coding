// x with come to the top

// console.log(x) // undefined

var x = 10;

// fun() // function is hoisted completely

function fun () {
    console.log('i am a function')
}

// fun2() // Cannot access 'fun2' before initialization

const fun2 = () => console.log('i am arrow function')


function square (num) { // params
    console.log(num * num)
}

// square(2)  // arguments

// spread , rest

function multiply (...nums) {  // rest
    console.log(nums[0])
}

var arr = [5,6]

//multiply(...arr)  // spread

//A rest parameter must be last in a parameter list.
const fun3 = (a ,x,y , ...numbers) => {
  console.log(a,x,y,numbers) // 1 2 3 [ 4, 5, 6, 7 ]
  console.log(a,x,y,...numbers) // 1 2 3 4 5 6 7
} 

// fun3(1,2,3,4,5,6,7)