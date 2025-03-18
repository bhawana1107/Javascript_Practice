// IN Higher Order Function we Pass third argument as a function
function add (a, b, cb){
    let result = a + b ;
    cb(result);
    return () => console.log(result);
}

let result_function  = add(4, 6, () =>{
    console.log("Hello");
});
result_function();
