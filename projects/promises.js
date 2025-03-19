let a = 10;
let b = 20;

async function myData() {
    let resultFromServer = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(await resultFromServer.json());
}

myData();

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {console.log(data)})
    .catch( (error) => { console.log(error)});


console.log(a + b);
