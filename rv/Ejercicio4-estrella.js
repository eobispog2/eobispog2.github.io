var figura = new THREE.Shape();   // Una figura es un objeto bidimensional. Una forma es tridimensional
                                  // Las figuras se realizan sobre el plano XY
figura.moveTo(0,50);
figura.lineTo(10,55);
figura.lineTo(15,65);
figura.lineTo(20,55);
figura.lineTo(30,50);
figura.lineTo(20,45);
figura.lineTo(15,35);
figura.lineTo(10,45);
figura.lineTo(0,50);

var forma = new THREE.ShapeGeometry(figura);
var material = new THREE.MeshBasicMaterial({color:0x00FF00});
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 80;
camara.position.x = 15;
camara.position.y = 50;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
