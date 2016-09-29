// TORRE
var puntos = [];
puntos.push( new THREE.Vector2( 0, 0 ) );
puntos.push( new THREE.Vector2( 4.5, 0 ) );
puntos.push( new THREE.Vector2( 4.5, 2 ) );
puntos.push( new THREE.Vector2( 3.5, 2 ) );
puntos.push( new THREE.Vector2( 3.5, 4 ) );
puntos.push( new THREE.Vector2( 2.5, 6 ) );
puntos.push( new THREE.Vector2( 2.5, 10 ) );
puntos.push( new THREE.Vector2( 3.5, 12 ) );
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

var gris = new THREE.MeshLambertMaterial( { color: 0x151515 } );
var blanco = new THREE.MeshLambertMaterial( { color: 0xFFFFFF });
var torre1 = new THREE.Mesh(torreForma, gris);
torre1.position.y=2;
var torre2 = new THREE.Mesh(torreForma, gris);
torre2.position.x=70;
torre2.position.y=2;
var torre3 = new THREE.Mesh(torreForma, blanco);
torre3.position.x=70;
torre3.position.y=2;
torre3.position.z=70;
var torre4 = new THREE.Mesh(torreForma, blanco);
torre4.position.y=2;
torre4.position.z=70;

var escena = new THREE.Scene();
escena.add(torre1);
escena.add(torre2);
escena.add(torre3);
escena.add(torre4);

// Formar tablero:
//var verdeOscuro = new THREE.MeshLambertMaterial( { color: 0x3C9823 } );
//var verdeClaro = new THREE.MeshLambertMaterial( { color: 0xB1FB9C } );
var cuadros = [new THREE.BoxGeometry( 10, 2, 10 ) ];
var cuadroMallas = [new THREE.Mesh(cuadros[0],gris)];
var counter = 0;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    cuadros[counter] = new THREE.BoxGeometry( 10, 2, 10 );
    cuadros[counter].translate(j*10,0,i*10);
    if((counter+i) % 2 == 0){
      cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],gris);
    }
    else {
      cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],blanco);
    }
    escena.add(cuadroMallas[counter]);
    counter++;
  }
}

//Marco Tablero

var marco1 = new THREE.BoxGeometry( 80, 5, 5);
var marco2 = new THREE.BoxGeometry( 80, 5, 5);
var marco3 = new THREE.BoxGeometry( 5, 5, 90);
var marco4 = new THREE.BoxGeometry( 5, 5, 90);
var cafe = new THREE.MeshLambertMaterial( { color: 0x653909 } );
var marcomalla1 = new THREE.Mesh(marco1, cafe);
marcomalla1.position.x=35;
marcomalla1.position.y=3;
marcomalla1.position.z=80;
escena.add(marcomalla1);
var marcomalla2 = new THREE.Mesh(marco2, cafe);
marcomalla2.position.x=35;
marcomalla2.position.y=3;
marcomalla2.position.z=-5;
escena.add(marcomalla2);
var marcomalla3 = new THREE.Mesh(marco3, cafe);
marcomalla3.position.x=-7;
marcomalla3.position.y=3;
marcomalla3.position.z=37.5;
escena.add(marcomalla3);
var marcomalla4 = new THREE.Mesh(marco4, cafe);
marcomalla4.position.x=77;
marcomalla4.position.y=3;
marcomalla4.position.z=37.5;
escena.add(marcomalla4);

//Camara
var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var centro = new THREE.Vector3(40, 0, 40);
var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.set(40, 80, 150);
camara.lookAt(centro);

// Luces
var luz = new THREE.PointLight( 0xffffff, 1, 150, 1.5 );
luz.position.set(35, 70, 35);
escena.add( luz );
var l1 = new THREE.DirectionalLight( 0xffffff, 0.45 );
l1.position.set( -10, 25, -10 )
var l2 = new THREE.DirectionalLight( 0xffffff, 0.45 );
l2.position.set( 90, 25, -10 )
var l3 = new THREE.DirectionalLight( 0xffffff, 0.45 );
l3.position.set( -10, 25, 90 )
var l4 = new THREE.DirectionalLight( 0xffffff, 0.45 );
l4.position.set( 90, 25, 90 )
escena.add( l1 );
escena.add( l2 );
escena.add( l3 );
escena.add( l4 );

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(  window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
