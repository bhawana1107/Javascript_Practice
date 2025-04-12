// function handleClick(el) {
//    let steps = document.querySelectorAll('.step');

//     for (let i= 1; i < steps.length; i++){
//         if (!(steps[i].classList.contains('checked'))) {
//             steps[i].classList.add('checked');
//             break; 
        
//         }
//         else{
//            console.log("okk");
            
//         }
//     }
//    console.log(el.id);
//    console.log(steps);
// }

function handleClick(el) {
    let steps = document.querySelectorAll('.step');

    for (let i = 0; i < steps.length; i++) {
        // Find the first step that is NOT checked
        if (!steps[i].classList.contains('checked')) {
            steps[i].classList.add('checked');
            console.log("Checked added to:", steps[i].textContent);
            break;
        }
    }

    console.log("Button ID:", el.id);
}
