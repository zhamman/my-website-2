let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let subTitle = document.querySelector('.sub-title');
const hamburger = document.querySelector('#hamburger');
const navUL = document.querySelector('#nav');


// Opening page animation 
window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx) => {
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
           
        setTimeout(()=>{
            logoSpan.forEach((span,idx) => {    

                setTimeout(() => {
                span.classList.remove('active')
                span.classList.add('fade')
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2000)
    })
})

// Front page Animations

setTimeout(function(){
    subTitle.style.visibility = 'visible'; 
}, 4200);
 
//  Hamburger menu

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
});