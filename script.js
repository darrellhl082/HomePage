$(document).ready(function () {
    gsap.to('.jumbotron img', {
        duration: 2,
        rotateY: 360,
        opacity: 1
    });


    gsap.registerPlugin(TextPlugin);
    gsap.to('.title', {
        duration: 2,
        delay: 1,
        text: 'DARRELL HAMMMAM'
    })
    gsap.to('.projectbtn', {
        opacity: 1,
        duration: 1,
        delay: 3,
        y: 15
    })

    gsap.to('.navbar', {
        delay: 1,
        duration: 1.5,
        y: 14,
        opacity: 1,
        ease: 'bounce'
    })
});