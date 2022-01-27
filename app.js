let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let subTitle = document.querySelector('.sub-title');
let subLink = document.querySelector(".sub a")

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

setTimeout(function(){
    subLink.style.visibility = 'visible'; 
}, 4200);
 
//  Hamburger menu

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');


    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
        navLinks.forEach((link, idx)=>{
            link.style.animation = `navLinkFade 1s ease forwards ${idx/ 7 + 1}s`
        })
    });
}

navSlide()

// hamburger.addEventListener('click', () =>{
//     navUL.classList('.nav-active')
// });
