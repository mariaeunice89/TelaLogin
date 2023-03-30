let  labelEmail = document.getElementById('labelEmail');
let  labelPassword = document.getElementById('labelPassword');
let inputs = document.getElementsByClassName('input');
let buton = document.getElementById('button');

//estados inputs
 function state1(obj){
  obj.style.transform = "translateY(2rem)";
  obj.style.color = "var(--color5)";
}

 function state2(obj){
  obj.style.transform = "translateY(0)";
  obj.style.color = "var(--color4)";
}

//estados Botao 
function stateButton1(obj){
  obj.style.boxShadow = " 0 0 1rem 0.5rem var(--color4)"
}

function stateButton2(obj){
  obj.style.boxShadow = "none"
}
// verificaçao ao carregar a pagina 
if(email.value != ''){
  state2(labelEmail);
}

if(password.value != ''){
  state2(labelPassword);
}
//eventos 
 for(let i of inputs) {
   // ao clicar
  i.addEventListener("click" , (event) => {
    if(event.target.id == "email") {
    state2(labelEmail);
    }else{
      state2(labelPassword);
    }
  });
// ao dar foco
   i.addEventListener("focusin" , (event) => {
    if(event.target.id == "email") {
    state2(labelEmail);
    }else{
      state2(labelPassword);
    }
  });
   //ao retirar o foco 
   i.addEventListener("focusout" , (event) => {
     if(event.target.id == "email"){
    if(email.value == ""){
      state1(labelEmail);
    }else{
      state2(labelEmail);
    }
   }else{
       if(password.value == ""){
         state1(labelPassword);
       }else{
         state2(labelPassword);
       }
   }
   })
}

button.addEventListener('focusin', (event) =>{
  stateButton1(event.target.parentNode)
});

button.addEventListener('focusout', (event) =>{
  stateButton1(event.target.parentNode)
});