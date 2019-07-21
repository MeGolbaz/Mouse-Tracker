

var juje = document.querySelector("i");
var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight;


function mousetracker(evt) {
    var x = ( WIDTH - evt.clientX );
    var y = ( HEIGHT - evt.clientY );

    var move = `translate(${x}px, ${y}px)`;
    juje.style.transform = move ;
    console.log("hey");

} 

window.addEventListener("mousemove",mousetracker);