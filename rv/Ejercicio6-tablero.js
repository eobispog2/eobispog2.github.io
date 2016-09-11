// TORRE
var puntos = [];
puntos.push( new THREE.Vector2( 0, 0 ) );
puntos.push( new THREE.Vector2( 5, 0 ) );
puntos.push( new THREE.Vector2( 5, 2 ) );
puntos.push( new THREE.Vector2( 4, 2 ) );
puntos.push( new THREE.Vector2( 4, 4 ) );
puntos.push( new THREE.Vector2( 3, 6 ) );
puntos.push( new THREE.Vector2( 3, 10 ) );
puntos.push( new THREE.Vector2( 4, 12 ) );
puntos.push( new THREE.Vector2( 0, 12 ) );
var torreForma1 = new THREE.LatheGeometry(puntos);
var torreMalla1 = new THREE.Mesh(torreForma1);

var torreForma2 = new THREE.BoxGeometry( 7.5, 2, 7.5 );
torreForma2.translate(0,13,0);
var torreMalla2 = new THREE.Mesh(torreForma2);

var torreForma3 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma3.translate(2.75,14.5,2.75);
var torreMalla3 = new THREE.Mesh(torreForma3);

var torreForma4 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma4.translate(-2.75,14.5,2.75);
var torreMalla4 = new THREE.Mesh(torreForma4);

var torreForma5 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma5.translate(2.75,14.5,-2.75);
var torreMalla5 = new THREE.Mesh(torreForma5);

var torreForma6 = new THREE.BoxGeometry( 2, 1.5, 2 );
torreForma6.translate(-2.75,14.5,-2.75);
var torreMalla6 = new THREE.Mesh(torreForma6);

//JUNTAR MALLAS:
var torreForma = new THREE.Geometry();
torreForma.merge(torreMalla1.geometry, torreMalla1.matrix);
torreForma.merge(torreMalla2.geometry, torreMalla2.matrix);
torreForma.merge(torreMalla3.geometry, torreMalla3.matrix);
torreForma.merge(torreMalla4.geometry, torreMalla4.matrix);
torreForma.merge(torreMalla5.geometry, torreMalla5.matrix);
torreForma.merge(torreMalla6.geometry, torreMalla6.matrix);

var gris = new THREE.MeshBasicMaterial( { color: 0x848484 } );
var blanco = new THREE.MeshStandardMaterial( { color: 0xFFFFFF, roughness: 0.1, metalness: 1.0 });
var torre1 = new THREE.Mesh(torreForma, gris);
var torre2 = new THREE.Mesh(torreForma, gris);
torre2.position.x=80;
var torre3 = new THREE.Mesh(torreForma, blanco);
torre3.position.x=80;
torre3.position.z=80;
var torre4 = new THREE.Mesh(torreForma, blanco);
torre4.position.z=80;


var escena = new THREE.Scene();
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre4);

var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var centro = new THREE.Vector3(40, 0, 40);
var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.set(40, 80, 200);
camara.lookAt(centro);

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(  window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
