// Računanje orijentacije uređaja.
let orientationAlpha = 0;
let orientationBeta = 0;
let orientationGamma = 0;
window.addEventListener('deviceorientation', onDeviceOrientationChangeEvent, false);
function onDeviceOrientationChangeEvent(event) {
    //scope.deviceOrientation = event;
    if (event.alpha) orientationAlpha = event.alpha; // rotating the phone
    if (event.beta) orientationBeta = event.beta; // left and right [-90,90]
    if (event.gamma) orientationGamma = event.gamma; // up and down [-180,180]

    console.log(orientationAlpha, orientationBeta, orientationGamma);
  }