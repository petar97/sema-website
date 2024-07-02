// Variables
let container;
let camera;
let scene;
let controls;
let geometry;
let sphere;
let renderer;
let light = [];

/*
let material = new THREE.MeshLambertMaterial( { color: new THREE.Color( 0xff0000 ) } );
material.emissive.set ( colorRed );
*/

container = document.querySelector('.three-container');

scene = new THREE.Scene();
scene.background = new THREE.Color( 'red' );

camera = new THREE.PerspectiveCamera(400, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.lookAt(scene.position);

light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

renderer = new THREE.WebGLRenderer({antialias: true, powerPreference: "high-performance"});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = false;
renderer.alpha = true;
renderer.stencil = false;
renderer.depth = false;
renderer.gammaFactor = 2.2;
renderer.gammaOutput = true;
container.appendChild(renderer.domElement);


let loader = new THREE.GLTFLoader();
var dracoLoader = new THREE.DRACOLoader();
loader.setDRACOLoader( dracoLoader );
loader.load('models/default.gltf', loadScene);
    
/*
    let loader = new THREE.GLTFLoader();
    loader.load('models/scene-desktop.glb', loadScene);
*/

function loadScene(gltf) {
    scene.add(gltf.scene);
}

function animate() {
    window.requestAnimationFrame( animate );
}

animate();

window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    windowHalf.set( window.innerWidth / 2, window.innerHeight / 2 );
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}