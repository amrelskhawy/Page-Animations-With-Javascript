const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const headline = document.querySelector(".headline");
const burger = document.querySelector(".burger");

const tl = new TimelineMax()

tl.fromTo(
    hero,
    1,
    {height: "2%",},
    {height: "80%",ease: Power2.easeInOut}
).fromTo(
    hero,
    1.2,
    {width: '100%'},
    {width: '80%',ease: Power2.easeInOut}
).fromTo(
        slider,
        1.2,
        {
            x: '-100%',
        },
        {
            x: '0%',
            ease: Power2.easeInOut
        },
        "-=1.2"
).fromTo(
    headline,
    1,
    {
        left: '-100%',
    },
    {
        left: '5%',
        ease: Power2.easeInOut
    }, "-=1"
).fromTo(
    logo,
    1,
    {
        opacity: '0',
        x: '30'
    },
    {
        opacity: '1',
        x: '0',
        ease: Power2.easeInOut
    }, "-=1"
).fromTo(
    burger,
    1,
    {
        opacity: '0',
        x: '30'
    },
    {
        opacity: '1',
        x: '0',
        ease: Power2.easeInOut
    }, "-=1"
)

