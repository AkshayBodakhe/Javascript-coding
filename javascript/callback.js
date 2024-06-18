// Example of a function with a callback
function fetchData(url, callback) {
    // Simulating an asynchronous operation such as fetching data from a server
    setTimeout(() => {
        const data = { id: 1, name: 'John Doe' };
        callback(data); // Calling the callback function with the retrieved data
    }, 1000); // Simulating a delay of 1 second
}

// Callback function to handle the retrieved data
function handleData(data) {
    console.log('Received data:', data);
}

// Calling the fetchData function with the handleData callback
// fetchData('https://example.com/api/data', handleData);


// arrow function 

const square = (num) => num * num

// console.log(square(3))


function fun () {
    console.log(arguments) // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    console.log(...arguments) // 1 2 3 4
}

// fun(1,2,3,4)

let user = {
    username : "Roadside Coder",
    rc1: () => {
        console.log('Subscribe to ', + this.username)
    },
    rc2() {
        console.log('Subscribe to ', + this.username)
    }
}

user.rc1()
user.rc2()