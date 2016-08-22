var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, (window.innerWidth*.95) / (window.innerHeight*.95) );

camera.position.z = 100;
camera.position.x = 25;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.CylinderGeometry( 3, 3, 50, 30, 5 );
var material = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

var geometry2 = new THREE.SphereGeometry( 8, 50, 50 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var sphere = new THREE.Mesh( geometry2, material2 );
scene.add( sphere );

sphere.position.y = 25;

var geometry3 = new THREE.CylinderGeometry( 3, 3, 25, 30, 5 );
var material3 = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder2 = new THREE.Mesh( geometry3, material3 );
scene.add( cylinder2 );

var geometry4 = new THREE.ConeGeometry( 15, 40, 50 );
var material4 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var cone = new THREE.Mesh( geometry4, material4 );
scene.add( cone );

cylinder2.position.x = 50;
cylinder2.position.y = -13;
cone.position.x = 50;
cone.position.y = 13;

renderer.render( scene, camera );
