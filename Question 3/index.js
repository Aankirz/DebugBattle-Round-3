const password = "123456";

const body= document.querySelector("body");

const passwordInput=document.querySelector('#password');

const submitButton=document.querySelector('#submit');


passwordInput.addEventListener('change',function(){
console.log(passwordInput.value);
    
    if(passwordInput.value==password){
       
        body.style.backgroundColor='red';
        submitButton.style.backgroundColor='green';
    }
   
    
})

submitButton.addEventListener('mouseover',function(){
    console.log("hover");
    if(passwordInput.value!=password){
        submitButton.style.transform+='translateX(100px)';
    }

    
})