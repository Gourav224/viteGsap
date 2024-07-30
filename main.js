import "./style.css";
import { gsap, Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();
function homepageAnimation() {
    gsap.set(".slidesm", {
        scale: 5,
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom botom",
            scrub: 1.5,
        },
    });

    tl.to(
        ".vdodiv",
        {
            "--clip": "0%",
            ease: Power2,
        },
        "a"
    )
        .to(
            ".slidesm",
            {
                scale: 1,
                ease: Power2,
            },
            "a"
        )
        .to(
            ".lft",
            {
                xPercent: -10,
                stagger: 0.03,
                ease: Power4,
            },
            "b"
        )
        .to(
            ".rgt",
            {
                xPercent: 10,
                stagger: 0.03,
                ease: Power4,
            },
            "b"
        );
}

function realPageAnimation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        },
        xPercent: -200,
        ease: Power4,
    });
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(
                    0,
                    window.innerWidth,
                    -300,
                    300,
                    dets.clientX
                ),
                ease: Power4,
                duration: 0.5,
            });
        });
        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power4,
                duration: 0.5,
            });
        });
    });
}

function paraAnimation() {
    var clutter = "";
    document
        .querySelector(".textPara")
        .textContent.split("")
        .forEach(function (e) {
            clutter += `<span >${e}</span>`;
        });
    document.querySelector(".textPara").innerHTML = clutter;

    gsap.set(".textPara span", {
        opacity: 0.1,
    });
    gsap.to(".textPara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            scrub: 2,
        },
        opacity: 1,
        stagger: 0.03,
        ease: Power4,
    });
}

function capsulesAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: -100,
        ease: Power4,
    });
}

document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
        trigger: e,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
        onEnter: function () {
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function () {
            document.body.setAttribute("theme", e.dataset.color);
        },
    });
});

homepageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();
