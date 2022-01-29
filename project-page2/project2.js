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
