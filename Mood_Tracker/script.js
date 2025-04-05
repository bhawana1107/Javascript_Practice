// let id = document.getElementById("mast");
//  let click = id.onclick = function() {
//     console.log(id.innerHTML);
//   }

// function icon(element){
//     element.onclick = function() {
//         value = element.innerHTML;
//         document.getElementById("show").innerHTML = value ;
//     }
// }

let val = document.querySelectorAll(".mood-icon");
let arr = [];
val.forEach(element => {
    element.addEventListener("click",function(){
       let result =  document.getElementById("show").innerHTML = element.innerHTML ;
       
        arr.push(result);
        console.log(arr);
        document.getElementById("day").addEventListener("click",function(){
            document.getElementById("day").innerHTML = arr;
            displayArray();
        })
    })
});

// icon(document.getElementById("mast"));
// icon(document.getElementById("sad"));
// icon(document.getElementById("happy"));
// icon(document.getElementById("neutral"));



// get all the items in variables

// let mast = document.getElementById("mast");
// let sad = document.getElementById("sad");
// let happy = document.getElementById("happy");
// let neutral = document.getElementById("neutral");
