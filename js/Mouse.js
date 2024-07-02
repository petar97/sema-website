// Računanje pozicije miša na ekranu.
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let mouseX;
let mouseY;

window.addEventListener( 'mousemove', onMouseMove, false );
function onMouseMove( event ) {
event.preventDefault();
mouseX = ( event.clientX - windowHalfX );
mouseY = ( event.clientY - windowHalfY );
}