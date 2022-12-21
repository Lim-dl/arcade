let fog1 = document.querySelector('.mouse-parallax-fog-1');
let fog2 = document.querySelector('.mouse-parallax-fog-2');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    fog1.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
    fog2.style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)'; 
});