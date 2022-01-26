const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav li');


    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
    });

    navLinks.forEach((link, index)=>{
        link.style.animation = `navLinkFade 2s ease forwards ${index/ 7 + 2}s`
    })
}

navSlide()

// hamburger.addEventListener('click', () =>{
//     navUL.classList('.nav-active')
// });
