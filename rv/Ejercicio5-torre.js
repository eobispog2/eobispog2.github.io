var puntos = [];

puntos.push( new THREE.Vector2( 0, 0 ) );
puntos.push( new THREE.Vector2( 5, 0 ) );
puntos.push( new THREE.Vector2( 5, 2 ) );
puntos.push( new THREE.Vector2( 4, 2 ) );
puntos.push( new THREE.Vector2( 4, 4 ) );
puntos.push( new THREE.Vector2( 3, 6 ) );
puntos.push( new THREE.Vector2( 3, 10 ) );
puntos.push( new THREE.Vector2( 4, 12 ) );
puntos.push( new THREE.Vector2( 4, 14 ) );
puntos.push( new THREE.Vector2( 2, 14 ) );
puntos.push( new THREE.Vector2( 2, 12 ) );
puntos.push( new THREE.Vector2( 0, 12 ) );

var torreForma1 = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var torreMalla = new THREE.Mesh(torreForma1, material);
torreMalla.rotateX( Math.PI/6 );
torreMalla.rotateY( Math.PI/6 );

var escena = new THREE.Scene();
escena.add(torreMalla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 50;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
