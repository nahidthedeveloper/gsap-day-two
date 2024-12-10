let path = "M 10 100 Q 550 100 1190 100"
const finalPath = "M 10 100 Q 550 100 1190 100";

const pathArea = document.querySelector("svg")
const body = document.querySelector('body')

body.addEventListener('mousemove', function (event) {
    gsap.to("#cursor", {
        x: event.clientX,
        y: event.clientY,
        autoAlpha: 1,
        duration: 0.5,
        ease: 'back.out'
    });
});

body.addEventListener('mouseleave', function () {
    gsap.to("#cursor", {
        autoAlpha: 0,
        duration: 0.5,
        ease: 'back.out'
    });
});


pathArea.addEventListener('mousemove', function (event) {
    const rect = pathArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    path = `M 10 100 Q ${x} ${y} 1190 100`;
    gsap.to('svg path', {
        attr: {d: path},
        duration: 0.3,
        ease: "power3.out"
    });
});

pathArea.addEventListener('mouseleave', function () {
    gsap.to('svg path', {
        attr: {d: finalPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })
})

gsap.from('#page1 h1', {
    scale: 0.6,
    scrollTrigger: {
        trigger: '#page1',
        scroller: 'body',
        // markers: true,
        start: 'top 0%',
        end: 'top -50%',
        scrub: 2,
        pin: true
    }
})

gsap.to('#page2 h1', {
    transform: "translateX(-190%)",
    scrollTrigger: {
        trigger: '#page2',
        scroller: 'body',
        // markers: true,
        start: 'top 0%',
        end: 'top -150%',
        scrub: 2,
        pin: true
    }
})

const timeline_one = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
        pin: true
    }
});

timeline_one
    .to("#image-one", {
        top: "40%",
    }, 'a')
    .to("#image-two", {
        top: "130%"
    }, 'a')
    .to("#image-two", {
        top: "45%"
    }, 'b')
    .to("#image-one", {
        width: "68%", height: "65vh"
    }, 'b')
    .to("#image-three", {
        top: "220%"
    }, 'b')
    .to("#image-three", {
        top: "53%"
    }, 'c')
    .to("#image-two", {
        width: "74%", height: "70vh"
    }, 'c')