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

var gris = new THREE.MeshBasicMaterial( { color: 0x848484 } );
var blanco = new THREE.MeshBasicMaterial( { color: 0xFFFFFF });
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
var verdeOscuro = new THREE.MeshBasicMaterial( { color: 0x3C9823 } );
var verdeClaro = new THREE.MeshBasicMaterial( { color: 0xB1FB9C } );
var cuadros = [new THREE.BoxGeometry( 10, 2, 10 ) ];
var cuadroMallas = [new THREE.Mesh(cuadros[0],verdeOscuro)];
var counter = 0;
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    cuadros[counter] = new THREE.BoxGeometry( 10, 2, 10 );
    cuadros[counter].translate(j*10,0,i*10);
    if((counter+i) % 2 == 0){
      cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],verdeOscuro);
    }
    else {
      cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],verdeClaro);
    }
    escena.add(cuadroMallas[counter]);
    counter++;
  }
}

var campoVision = 45; //grados
var relacionAspecto = window.innerWidth / window.innerHeight;
var planoCercano = 1;
var planoLejano = 1000;
var centro = new THREE.Vector3(40, 0, 40);
var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.set(40, 80, 150);
camara.lookAt(centro);

// Luces
var ambientLight = new THREE.AmbientLight( 0xffffff );
escena.add( ambientLight );

renderizador = new THREE.WebGLRenderer();
renderizador.setSize(  window.innerWidth*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
