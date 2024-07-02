// Use THREE.JS to load a 3d model.

let container, scene, camera, renderer, loader;
let hemiLight, dirLight, pointLightCursor;
let cameraTargetVector;

init();
animate();

function init() {

    container = document.querySelector('.three-container');
    
    //

    scene = new THREE.Scene();
    
    //

    camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
    camera.aspect = container.clientWidth/ container.clientHeight;
    cameraTargetVector = new THREE.Vector3 (0,0,0);
    
    //

    renderer = new THREE.WebGLRenderer( {
        antialias: true,
        autoClear: false,
        alpha: true,
        gammaFactor: 2.2,
        gammaOutput: true
    });

    renderer.setSize( container.clientWidth, container.clientHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild(renderer.domElement);

    //
    
    loader = new THREE.GLTFLoader();
    loader.load('models/default.glb', function(gltf) {
        scene.add(gltf.scene);
        scene.traverse ( function (obj) {    
            switch (obj.name) {        
                case "blackLogo" :
                    let materialWhite = new THREE.MeshStandardMaterial( {
                        color: new THREE.Color( 0xEEF0F2 ),
                        emissive: new THREE.Color( 0xEEF0F2 ),
                        emissiveIntensity: 0.5,
                        metalness: 1,
                        roughness: 1    
                    } );
                    materialWhite.color.convertSRGBToLinear();
                    materialWhite.emissive.convertSRGBToLinear();
                    obj.material = materialWhite;
                    break;
                case "blackLogoHandle" :
                    let materialRed = new THREE.MeshStandardMaterial( {
                        color: new THREE.Color( 0xFF2C32 ),
                        emissive: new THREE.Color( 0xFF2C32 ),
                        emissiveIntensity: 0.5,
                        metalness: 1,
                        roughness: 1    
                    } );
                    materialRed.color.convertSRGBToLinear();
                    materialRed.emissive.convertSRGBToLinear();
                    obj.material = materialRed;
                    break;
            }
        } );
    });

    //
    
    
    hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444, 10000 );
    hemiLight.position.set( 0, 10, 0 );
    scene.add( hemiLight );
    
    dirLight = new THREE.DirectionalLight( 0xffffff, 1.7 );
    dirLight.position.set( 0, 0, 1 );
    scene.add( dirLight );

}

// Render loop.

function animate() {
    
    calculateCamera();

    //

    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}

function calculateCamera() {
    
    if (mouseX)
        camera.position.x = -2 * mouseX / windowHalfX;
    else
        camera.position.x = 0;

    if (mouseY)
        camera.position.y = 2 * mouseY / windowHalfY;
    else
        camera.position.y = 0;

    camera.position.z = 14;

    //

    if (orientationBeta != 0)
        camera.position.x += 2 * orientationBeta / 90;
    if (orientationGamma != 0)
        camera.position.y += 2 * orientationGamma / 180;
    
    //

    camera.lookAt( cameraTargetVector );

}

// When the window resizes, the renderer and camera need to be updated.

window.addEventListener('resize', onWindowResize);
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = container.clientWidth/ container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    //renderer.setPixelRatio( window.devicePixelRatio );
}
