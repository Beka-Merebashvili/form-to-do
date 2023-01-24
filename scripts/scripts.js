let input = document.querySelector('.inpt') ;
let damateba = document.querySelector('.addbtn') ;
let chamonatvali = document.querySelector('.ul-list') ;
let delateBtn = document.querySelector('.clearbn')
let form = document.querySelector('.form-container') ;

form.addEventListener('submit', function(x) {
  x.preventDefault() ;
    let inputText = input.value;
    if (inputText == ' ') {
      return ;
    } 
  let li = document.createElement('li') ;
  li.classList.add('liItems')
  let btnDelate = document.createElement('i') ;
  btnDelate.classList.add('fa-solid', 'fa-ban');
  btnDelate.addEventListener('click', function(){
    li.remove();
  })
  li.textContent = inputText ; 
  li.appendChild(btnDelate) ;
  chamonatvali.appendChild(li) ;
  input.value = ' ' ;
}) ;

delateBtn.addEventListener('click', function() {
    chamonatvali.innerHTML = ' '
})