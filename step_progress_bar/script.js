function handleClick(el) {
   let steps = document.querySelectorAll('.step');

    for (let i= 1; i < steps.length; i++){
        if (!steps[i].classList.contains('checked')) {
            steps[i].classList.add('checked');
            break; 
            if (i === steps.length - 1) {
                el.disabled = true;
              }  
            }
        
    }
}


