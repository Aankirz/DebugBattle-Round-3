const bg=document.querySelector('.bg');
const outer=document.querySelector('.outer');
const inner=document.querySelector('.inner');
const middle=document.querySelector('.middle');

let theme='light';

bg.addEventListener('click',function(){
  
    if(theme=="light"){
        outer.style.backgroundColor='black';
        inner.style.backgroundColor='black';
        middle.style.backgroundColor='white';
        theme='dark';
    }
    else{
        outer.style.backgroundColor='white';
        inner.style.backgroundColor='white';
        middle.style.backgroundColor='black';
        theme='light';
    }

})