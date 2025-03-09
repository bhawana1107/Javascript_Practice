// {} With function & Condition its called Scopes

// if (true) {
//     let a = 10
// const b  = 20 
// var c = 30 // wrong format
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username = "Bhawana"

    function two (){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " Youtube"
     //   console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


//++++++++++++++ Interesting ++++++++++++

console.log (addOne(5))

function addOne (num1) {
    return num1 + 1
}


// Sometime this called Expressions

addTwo(6)
const addTwo = function (num) {
    return num + 2
}
