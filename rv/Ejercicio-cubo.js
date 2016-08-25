var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( -1, -1 , -1 ) );   // Push empuja elementos al arreglo, este es el elemento 0
forma.vertices.push( new THREE.Vector3( 1, -1 , -1 ) );   // Elemento 1
forma.vertices.push( new THREE.Vector3( 1, 1 , -1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1 , 1 ) );
forma.vertices.push( new THREE.Vector3( -1, -1 , 1 ) );
forma.vertices.push( new THREE.Vector3( 1, -1 , 1 ) );
forma.vertices.push( new THREE.Vector3( 1, 1 , 1 ) );
forma.vertices.push( new THREE.Vector3( -1, 1 , 1 ) );   // Elemento 7

forma.faces.push( new THREE.Face3( 3, 2, 1 ) );   // Cara 0
forma.faces.push( new THREE.Face3( 3, 1, 0 ) );   // Cara 1
forma.faces.push( new THREE.Face3( 0, 1, 5 ) );   // Cara 2
forma.faces.push( new THREE.Face3( 0, 5, 4 ) );   // Cara 3
forma.faces.push( new THREE.Face3( 3, 2, 6 ) );   // Cara 4
forma.faces.push( new THREE.Face3( 3, 6, 7 ) );   // Cara 5
forma.faces.push( new THREE.Face3( 1, 2, 6 ) );   // Cara 6
forma.faces.push( new THREE.Face3( 1, 6, 5 ) );   // Cara 7
forma.faces.push( new THREE.Face3( 3, 0, 4 ) );   // Cara 8
forma.faces.push( new THREE.Face3( 3, 4, 7 ) );   // Cara 9
forma.faces.push( new THREE.Face3( 7, 4, 5 ) );   // Cara 10
forma.faces.push( new THREE.Face3( 7, 5, 6 ) );   // Cara 11

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
malla.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add( malla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
