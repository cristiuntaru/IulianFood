//      OBTINE O OFERTA JS CODE          //

let offer = document.getElementById("offer-box");
let offer2 = document.getElementById("offer-box-2");
let section = document.getElementById("section");
let close = document.getElementById("x-div");


offer.addEventListener('click', function(){
   section.style.cssText = "opacity: 1; pointer-events: all;"
})

offer2.addEventListener('click', function(){
    section.style.cssText = "opacity: 1; pointer-events: all;"
})

close.addEventListener('click', function(){
    section.style.cssText = "opacity: 0; pointer-events: none;"
})


//          MORE COMMENTS JS CODE      //

let a = document.getElementById("more-comments-box");
let b = document.getElementById("more-comments-box2");
let c = document.getElementById("more-comments-box3");

let clicked = document.getElementById("clicked-box");
let clicked2 = document.getElementById("clicked-box2");
let clicked3 = document.getElementById("clicked-box3");


a.addEventListener('click', function(){
    clicked.style.cssText = "opacity: 1;"
    a.style.cssText = "background-color: lightgray;"
})

b.addEventListener('click', function(){
    clicked2.style.cssText = "opacity: 1;"
    b.style.cssText = "background-color: lightgray;"
})

c.addEventListener('click', function(){
    clicked3.style.cssText = "opacity: 1;"
    c.style.cssText = "background-color: lightgray;"
})

//              HAMBURGER CODE       //


let hBox = document.getElementById("hamburger-box");
let topHam = document.getElementById("hamburger1");
let middleHam = document.getElementById("hamburger2");
let bottomHam = document.getElementById("hamburger3");
let sidebar = document.getElementById("sidebar");

hBox.addEventListener( 'click', function () {
    middleHam.style.cssText = "opacity: 0;"
    topHam.style.cssText = "transform: rotate(45deg) translateY(245%);"
    bottomHam.style.cssText = "transform: rotate(-45deg) translateY(-245%);"
    sidebar.style.cssText = "transform: translateX(0);"
})

