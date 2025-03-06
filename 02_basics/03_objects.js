// singleton

// Object.create

// Object Literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Hitesh",
    "full name" : "Hitesh Choudary ",
    // to access as a symbol use bracket
    [mySym] : "mykey1" ,
    age:18,
    location:"Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email)
// Right way to check through key because key is by default a key 
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@microsoft.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());