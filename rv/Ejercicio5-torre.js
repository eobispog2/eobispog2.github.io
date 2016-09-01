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

var torreForma2 = new THREE.BoxGeometry( 8, 2, 8 );
torreForma2.translate(0,12,0);
var torreMalla2 = new THREE.Mesh(torreForma2);

var torreForma3 = new THREE.BoxGeometry( 2, 2, 2 );
torreForma3.translate(4,14,0);
var torreMalla3 = new THREE.Mesh(torreForma3);

var torreForma4 = new THREE.BoxGeometry( 2, 1, 2 );
torreForma4.translate(-4,14,0);
var torreMalla4 = new THREE.Mesh(torreForma4);

// JUNTAR MALLAS:
var torreForma = new THREE.Geometry();
torreForma.merge(torreMalla1.geometry, torreMalla1.matrix);
torreForma.merge(torreMalla2.geometry, torreMalla2.matrix);
torreForma.merge(torreMalla3.geometry, torreMalla3.matrix);
torreForma.merge(torreMalla4.geometry, torreMalla4.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.Mesh(torreForma, material);
torreMalla.rotateX(Math.PI*3/2);
torreMalla.rotateY(Math.PI/2);

var escena = new THREE.Scene();
escena.add(torreMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 80;
camara.position.y = 0;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
