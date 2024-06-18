// Promise
// synchronous vs asynchronous code

/*
console.log('start')

function importantAction(username,cb) {
    setTimeout(() => {
        cb(`Hello ${username}`)
    }, 1000);
}

const message = importantAction('Akshay', function (message) {
    console.log(message)
})

console.log('stop')
*/

// Promises

/*

console.log('start')

const sub = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const result = true
        if(result) resolve('hii')
        else reject('bye')
    }, 2000);
})

sub.then((res)=>{
    console.log(res)
}).catch((error)=>{
    console.log(error)
})

console.log('stop')

*/

// promise chaining

// methods of promise all , cace , allSettled, any

// async await

// What is output

console.log('start')

const promise1 = new Promise((resolve,reject)=> {
    console.log(1)
    resolve(2) // if here is not resolve it won't go .then
    console.log(3)

})

promise1.then((res)=>{
    console.log(res)
})

console.log('end')
