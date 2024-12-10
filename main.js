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