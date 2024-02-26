let check = document.querySelector('.d_check input');
let checkedOption = document.querySelector('.check_option ul');

    check.addEventListener('click', function(){
        
        if(check.checked){
        let checkValue = check.value;
        let newLi = document.createElement('li');
        let txt = document.createTextNode(checkValue);
        let newBtn = document.createElement('a');
        let newClose = document.createTextNode('X'); 

        checkedOption.appendChild(newLi);
        newLi.classList.add('newCheck');
        newLi.appendChild(txt);
        newLi.appendChild(newBtn);
        newBtn.appendChild(newClose);
        
        newBtn.addEventListener('click', function(){
            newLi.remove();}
        )
        }

});

