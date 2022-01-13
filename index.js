window.addEventListener('load' , function() {
    
var h1 = document.querySelector('h1');

h1.addEventListener('mouseover' , function(){
   
   h1.style.color = 'pink';
})

h1.onmouseout = function() {
    h1.style.color = 'skyblue';
}
})