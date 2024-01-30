gsap.from("#page-1 h1",{
    y: 100,
    opacity:0,
    delay: 0.5,
    duration: 0.5,
    stagger:0.2
})

var h4all = document.querySelectorAll("#right a")
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave',function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid white"
        crsr.style.backgroundColor = "white"
    })
})

var timerDate = new Date("Feb 2, 2024 00:00:00").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = timerDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// gsap.from("#page-1 #event-dates",{
//     y: 100,
//     opacity:0,
//     delay: 0.5,
//     duration: 0.9,
//     stagger:0.2
// })

// gsap.from("#page-1 #tagline",{
//     y: 100,
//     opacity:0,
//     delay: 0.5,
//     duration: 0.9,
//     stagger:0.2
// })