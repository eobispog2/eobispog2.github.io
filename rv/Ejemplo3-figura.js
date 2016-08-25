var figura = new THREE.Shape();   // Una figura es un objeto bidimensional. Una forma es tridimensional
                                  // Las figuras se realizan sobre el plano XY
figura.moveTo(10, 10);   // Salta
figura.lineTo(10, 40);   // Hace línea
figura.lineTo(40, 40);
figura.lineTo(10, 10);

var forma = new THREE.ShapeGeometry(figura);
var malla = new THREE.Mesh(forma);   // Como no se indicó material, se agrega por defecto

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
                      window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
