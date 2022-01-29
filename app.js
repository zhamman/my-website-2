let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');
let subTitle = document.querySelector('.sub-title');
let subLink = document.querySelector(".sub a");

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
 
//  Hamburger menu fade in

const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');
    const line2 = document.querySelector(".hamburger .line2");

    burger.addEventListener('click', () =>{
        line2.classList.toggle("turn")
        burger.classList.toggle("rotate");
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, idx)=>{
            link.style.animation = `navLinkFade 0.3s ease forwards ${idx/ 7 + 0.3}s`
        });
    });
}

navSlide()



// function moveImg(e) {
//     const x = e.clientX;
//     const y = e.clientY;
//     const img = document.querySelector(".project-img");
//     const content = document.querySelector(".content");

//     content.addEventListener('mouseover', () =>{
//     img.style.left = x+'px';
//     img.style.top = y+'px';

//     console.log(e.clientX)
//     });
// }


