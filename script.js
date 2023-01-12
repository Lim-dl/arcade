/* Паралакс фон на старте */
let fog1 = document.querySelector('.mouse-parallax-fog-1');
let fog2 = document.querySelector('.mouse-parallax-fog-2');

function moveBGstarts(e){
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    fog1.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
    fog2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)'; 
}

window.addEventListener('mousemove', function(e) {
    moveBGstarts(e);
});

window.addEventListener('touchmove', function(e) {
    moveBGstarts(e);
});


/* Движение объекта за курсором */
 let spacecraft = document.querySelector('#spasecraft');
let field = document.querySelector('.pg-game__playfield');
field.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    spacecraft.style.transform = 'translate(+' + x * 1100 + 'px, +' + y * 600 + 'px)';
    console.log(x, y);
});