//call checklist 
let checkboxes = document.querySelectorAll('.inbox input[type ="checkbox"]')
let lastChecked;
// addEventListener
function handleCheck(e){
    //check if they had the shift key down
    //and check that they are checking it
    let inBetween = false;
    if(e.shiftKey && this.checked){
        //go ahead and do what we please 
        //loop over every single checkbox
        checkboxes.forEach(checkbox =>{
            console.log(checkbox);
            if(checkbox ===this || checkbox === lastChecked){
                inBetween = !inBetween;
            }

           if(inBetween){
               checkbox.checked = true;
           } 
        });
    }
    lastChecked = this;
}
checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));

//
//index1 = index of checked item from node list (array)
