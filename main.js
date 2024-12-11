let path = "M 10 100 Q 550 100 1190 100"
const finalPath = "M 10 100 Q 550 100 1190 100";

const body = document.querySelector('body')

function cursorAnimation() {
    const cursor = document.querySelector("#cursor");
    const pos = {x: window.innerWidth / 2, y: window.innerHeight / 2}; // Current cursor position
    const mouse = {x: pos.x, y: pos.y}; // Mouse position
    let lastSpeed = 0; // Speed at the last frame
    let skewX = 0; // Current skew value

    gsap.to({}, 0.01, {
        repeat: -1,
        onUpdate: () => {
            const prevX = pos.x;
            const prevY = pos.y;

            pos.x += (mouse.x - pos.x) * 0.15; // Smooth following
            pos.y += (mouse.y - pos.y) * 0.15;

            const dx = mouse.x - pos.x;
            const dy = mouse.y - pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy); // Distance between cursor and mouse
            const speed = Math.sqrt((pos.x - prevX) ** 2 + (pos.y - prevY) ** 2); // Current speed
            const reverse = speed < lastSpeed; // Reverse motion check

            // Smooth skew transition
            const targetSkew = reverse ? -distance * 0.2 : distance * 0.2;
            skewX += (targetSkew - skewX) * 0.1; // Eased skew transition

            gsap.set(cursor, {
                x: pos.x,
                y: pos.y,
                skewX: skewX,
                scale: 1, // Uniform scale
            });

            // Update last speed
            lastSpeed = speed;
        },
    });

// Track mouse position
    body.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        gsap.to(cursor, {
            autoAlpha: 1,
            duration: 0.5,
            ease: 'back.out'
        });
    });

    body.addEventListener('mouseleave', function () {
        gsap.to(cursor, {
            autoAlpha: 0,
            duration: 0.5,
            ease: 'back.out'
        });
    });
}

cursorAnimation()

function appNameAnimation() {
    const h1 = document.querySelector('.nav h1')
    const appName = h1.textContent.split("")
    const halfText = Math.floor(appName.length / 2)
    let appNameToSpan = ""

    appName.forEach(function (text, index) {
        if (index < halfText) {
            appNameToSpan += `<span class="firstHalf">${text}</span>`
        } else {
            appNameToSpan += `<span class="secondHalf">${text}</span>`
        }
    })
    h1.innerHTML = appNameToSpan
}

appNameAnimation()

gsap.from('.firstHalf', {
    y: 50,
    duration: 0.3,
    delay: 1,
    stagger: 0.15,
    opacity: 0
})

gsap.from('.secondHalf', {
    y: 50,
    duration: 0.3,
    delay: 1,
    stagger: -0.15,
    opacity: 0
})


const openMenu = document.querySelector('.nav i')
const closeMenu = document.querySelector('.sidebar i')

const menuTimeline = gsap.timeline()

menuTimeline
    .to('.sidebar', {
        right: '0%',
        duration: 0.5
    })
    .from('.sidebar h4', {
        x: 150,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
    })
    .from('.sidebar i', {
        opacity: 0
    })

menuTimeline.pause()

openMenu.addEventListener('click', function () {
    menuTimeline.play()
})

closeMenu.addEventListener('click', function () {
    menuTimeline.reverse()
})


const pathArea = document.querySelector("svg")

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

window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        gsap.to('.marque', {
            transform: 'translateX(-200%)',
            duration: 5,
            ease: 'none',
            repeat: -1
        })
        gsap.to('.marque i', {
            rotate: 180
        })
    } else {
        gsap.to('.marque', {
            transform: 'translateX(0%)',
            duration: 5,
            ease: 'none',
            repeat: -1
        })
        gsap.to('.marque i', {
            rotate: 0
        })
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