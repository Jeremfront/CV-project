// animations

gsap.fromTo(
    "svg circle",
    { strokeDasharray: 500, strokeDashoffset: 500 },
    { strokeDashoffset: 0, duration: 1, ease: "power3.inOut" }
);

gsap.fromTo(
    "svg line, svg polygon, svg rect",
    { opacity: 0, scale: 0.8, transformOrigin: "center" },
    { opacity: 1, scale: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
);

gsap.from(".profile-img", {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "bounce.out",
});

gsap.from("header h1, header p", {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power1.out",
});

gsap.utils.toArray("section").forEach((section) => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        ease: "power1.out",
    });
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('confirmation').style.display = 'block';
        this.reset();
    }
    
});
