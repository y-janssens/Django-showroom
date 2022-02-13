// Scene Camera & Renderer

const renderer = new THREE.WebGLRenderer({
    antialias: false,
    preserveDrawingBuffer: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  document.body.appendChild(renderer.domElement);
  
  scene = new THREE.Scene();  
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  
  camera.position.set(0, 0, 2);
      
// Lights

scene.add( new THREE.AmbientLight( 0xffffff, 0.5 ) );
        
const light = new THREE.SpotLight( 0xffffff, 1.5 );
light.position.set( 100, 150, 50 );   
scene.add( light );

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.35);
directionalLight.position.set (-5, -5, 5);
scene.add(directionalLight);

// Objects

const geometry = new THREE.SphereGeometry( 1, 10, 10 );
const material = new THREE.MeshStandardMaterial({ color: 0x5a5a5a, flatShading: true });
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
  
// Controls		
     
const controls = new THREE.OrbitControls( camera, renderer.domElement );
     
controls.enableDamping = false;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = false;
controls.rotateSpeed = 0.5;

// Animation & render

function animate() {

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);

requestAnimationFrame(animate);
controls.update();

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;
        

if (resizeRendererToDisplaySize(renderer)) {
const canvas = renderer.domElement;
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix(); }	
}

animate();

function resizeRendererToDisplaySize(renderer) {
const canvas = renderer.domElement;
var width = window.innerWidth;
var height = window.innerHeight;
var canvasPixelWidth = canvas.width / window.devicePixelRatio;
var canvasPixelHeight = canvas.height / window.devicePixelRatio;

const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
if (needResize) {

renderer.setSize(width, height, true);
    }
    return needResize;
}