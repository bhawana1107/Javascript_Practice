function sayMyName () {
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("W");
    console.log("U");
}

sayMyName //Reference
//sayMyName() //Call or execution

// function addTwonumbers (number1 ,number2) { //Parameter
//     console.log (number1 + number2) ;
// }


function addTwonumbers (number1 ,number2) { //Parameter
    // let result  = number1 + number2
    // return result 

    return number1 + number2   
}

const result =  addTwonumbers(3, 5) //arguments

//console.log("Result:", result) ;


function loginUserMessage (username = "sammy") {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Bhawu'))
//console.log(loginUserMessage()) //undefined


function calculatecart (...num1) {
    return num1
}

// console.log(calculatecart (200,500,2000,5000));


const user  = {
    username: "Bhawu",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}
        and  price is ${anyobject.price}`);
}

// handleObject(user);
handleObject ({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 1000, 2000]

function returnSecondValue (getArray){
    return getArray[1] 
}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([300 ,400, 600]));

