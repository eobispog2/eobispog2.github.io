var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, (window.innerWidth*.95) / (window.innerHeight*.95) );

camera.position.z = 100;
camera.position.x = 35;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderer.domElement );

var geometry1 = new THREE.CylinderGeometry( 2, 2, 22, 30, 10 );
var material1 = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder1 = new THREE.Mesh(geometry1, material1);
scene.add(cylinder1);
cylinder1.position.y = -13;

var geometry2 = new THREE.SphereGeometry( 8, 50, 50 );
var material2 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var sphere1 = new THREE.Mesh(geometry2, material2);
scene.add(sphere1);
sphere1.position.y = 5;

var geometry3 = new THREE.CylinderGeometry( 3, 3, 22, 30, 5 );
var material3 = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder2 = new THREE.Mesh(geometry3, material3);
scene.add(cylinder2);
cylinder2.position.x = 35;
cylinder2.position.y = -13;

var geometry4 = new THREE.ConeGeometry( 15, 40, 50 );
var material4 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var cone1 = new THREE.Mesh(geometry4, material4);
scene.add(cone1);
cone1.position.x = 35;
cone1.position.y = 13;

var geometry5 = new THREE.CylinderGeometry( 2, 2, 15, 30, 10 );
var material5 = new THREE.MeshBasicMaterial( { color: 0x7A4B0D } );
var cylinder3 = new THREE.Mesh(geometry5, material5);
scene.add(cylinder3);
cylinder3.position.x = 70;
cylinder3.position.y = -16;

var geometry6 = new THREE.SphereGeometry( 10, 50, 50 );
var material6 = new THREE.MeshBasicMaterial( { color: 0x32720D } );
var sphere2 = new THREE.Mesh(geometry6, material6);
scene.add(sphere2);
sphere2.position.x = 70;
sphere2.position.y = -5;

renderer.render( scene, camera );
