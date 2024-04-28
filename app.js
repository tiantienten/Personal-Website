//Type.js animation
var typed = new Typed(".texts",{
    strings: ["COLLEGE STUDENT", "BEGINNER CIVIL ENGINEER", "RESEARCH ASSISTANT", "UX/UI Learner"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks  = document.querySelectorAll('header navigation a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navigation a[href*=' + id + ']').classList.add('active');
            });
        }
    });

}