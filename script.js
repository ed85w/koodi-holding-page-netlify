// delay start of video by 1.7s 
setTimeout(function(){
    document.getElementById("background-video").play();
}, 1700);

// gsap timeline to animate logo 
var tl = gsap.timeline({})
tl.from("#logo-k-line", {duration:1, height: 0, ease: Power3.easeOut }, 0.7)
tl.from("#logo-i-line", {duration:1, scaleY:0, transformOrigin:"center bottom",ease: Power3.easeOut} , 0.7)
tl.from("#logo-k-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.2)
tl.from("#logo-i-circle", {duration: 1, scale: 0, transformOrigin: "center center", ease:Back.easeOut.config(1.7)}, 1.5)