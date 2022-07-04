let increse =  document.querySelector('.increse');
let decrease = document.querySelector('.dicrease');
let reset =  document.querySelector('.reset');

 let count = 0;
 decrease.addEventListener('click',function(){
    count-= 1;
    document.querySelector('.zerocount').innerHTML=count;
    document.querySelector('.zerocount').style.color ='red';
});
   
increse.addEventListener('click',function(){
    count++;
    document.querySelector('.zerocount').innerHTML=count;
    document.querySelector('.zerocount').style.color ='black';
});
reset.addEventListener('click',function(){
    count=0;
    document.querySelector(".zerocount").innerHTML=count;
    document.querySelector('.zerocount').style.color ='black';
})

   
