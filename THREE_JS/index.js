var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 100 );
/*
1. FOV-> field of view-> bidang pandang kamera
2. aspect ratio-> menyesuaikan ke layar yg kita pakai
3. near clip-> seberapa dekat yg bisa dilihat oleh kamera
4. far clip-> seberapa jauh yg dapat dilihat oleh kamera
*/
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var bentuk = new THREE.BoxBufferGeometry( 2, 2, 2 ); //PLT
// var material = new THREE.MeshBasicMaterial( { color:0x07e5ed } ); //rgba
// var kotak = new THREE.Mesh( bentuk,material );
var edges = new THREE.EdgesGeometry( bentuk );
var line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );


// scene.add ( kotak );
scene.add( line );

camera.position.z = 5;

var animasi = function () {
    requestAnimationFrame( animasi );
    line.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    // kotak.rotation.z += 0.01;
    // kotak.rotation.x += 0.01;
    // kotak.rotation.y += 0.01;

    renderer.render( scene,camera );
}
animasi();
