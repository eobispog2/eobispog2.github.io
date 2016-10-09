var TEXTURA1 = new Object();
TEXTURA1.retrollamada = function( textura ) {
  TEXTURA1.material = new THREE.MeshBasicMaterial( {map: textura} );
}

var TEXTURA2 = new Object();
TEXTURA2.retrollamada = function( textura ) {
  TEXTURA2.material = new THREE.MeshBasicMaterial( {map: textura} );
}

var TEXTURA3 = new Object();
TEXTURA3.retrollamada = function( textura ) {
  TEXTURA3.material = new THREE.MeshBasicMaterial( {map: textura} );
}

var TEXTURA4 = new Object();
TEXTURA4.retrollamada = function( textura ) {
  TEXTURA4.material = new THREE.MeshBasicMaterial( {map: textura} );
}

function setup1() {
  escena = new THREE.Scene();
  var cargador = new THREE.TextureLoader();
  cargador.load("marmol_blanco.jpg", TEXTURA1.retrollamada);
  cargador.load("madera_blanca.jpg", TEXTURA2.retrollamada);
  cargador.load("marmol_negro.jpg", TEXTURA3.retrollamada);
  cargador.load("madera_negra.jpg", TEXTURA4.retrollamada);
}
  
function setup2() {
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

  // Juntar mallas de torre:
  var torreForma = new THREE.Geometry();
  torreForma.merge(torreMalla1.geometry, torreMalla1.matrix);
  torreForma.merge(torreMalla2.geometry, torreMalla2.matrix);
  torreForma.merge(torreMalla3.geometry, torreMalla3.matrix);
  torreForma.merge(torreMalla4.geometry, torreMalla4.matrix);
  torreForma.merge(torreMalla5.geometry, torreMalla5.matrix);
  torreForma.merge(torreMalla6.geometry, torreMalla6.matrix);
  
  // Crear torres:
  var torre1 = new THREE.Mesh( torreForma, TEXTURA1.material );
  torre1.position.y=2;
  escena.add(torre1);
  
  var torre2 = new THREE.Mesh( torreForma, TEXTURA2.material );
  torre2.position.x=70;
  torre2.position.y=2;
  escena.add(torre2);
  
  var torre3 = new THREE.Mesh( torreForma, TEXTURA3.material );
  torre3.position.x=70;
  torre3.position.y=2;
  torre3.position.z=70;
  escena.add(torre3);
  
  var torre4 = new THREE.Mesh( torreForma, TEXTURA4.material );
  torre4.position.y=2;
  torre4.position.z=70;
  escena.add(torre4);
  
  // PEÓN
  var puntosPeon = [];
  puntosPeon.push( new THREE.Vector2( 0, 0 ) );
  puntosPeon.push( new THREE.Vector2( 4.5, 0 ) );
  puntosPeon.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosPeon.push( new THREE.Vector2( 4, 1.5 ) );
  puntosPeon.push( new THREE.Vector2( 4, 3.5 ) );
  puntosPeon.push( new THREE.Vector2( 3, 4.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 8 ) );
  puntosPeon.push( new THREE.Vector2( 2.5, 8 ) );
  puntosPeon.push( new THREE.Vector2( 2.5, 9.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 9.5 ) );
  puntosPeon.push( new THREE.Vector2( 2, 11 ) );
  puntosPeon.push( new THREE.Vector2( 0, 11 ) );
  var peonForma1 = new THREE.LatheGeometry(puntosPeon);
  var peonMalla1 = new THREE.Mesh(peonForma1);
  
  var peonForma2 = new THREE.SphereGeometry( 3 );
  peonForma2.translate(0,12,0);
  var peonMalla2 = new THREE.Mesh(peonForma2);

  // Juntar mallas de peon:
  var peonForma = new THREE.Geometry();
  peonForma.merge(peonMalla1.geometry, peonMalla1.matrix);
  peonForma.merge(peonMalla2.geometry, peonMalla2.matrix);
  
  // Crear peones:
  var blanco = new THREE.MeshLambertMaterial( { color: 0xFFFFFF });
  var peon14 = new THREE.Mesh( peonForma, blanco );
  peon14.position.x=20;
  peon14.position.y=2;
  peon14.position.z=60;
  escena.add(peon14);
  
  // ALFIL
  var puntosAlfil = [];
  puntosAlfil.push( new THREE.Vector2( 0, 0 ) );
  puntosAlfil.push( new THREE.Vector2( 4.5, 0 ) );
  puntosAlfil.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosAlfil.push( new THREE.Vector2( 4, 1.5 ) );
  puntosAlfil.push( new THREE.Vector2( 4, 3.5 ) );
  puntosAlfil.push( new THREE.Vector2( 3, 4.5 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 10 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 10 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 12 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 12 ) );
  puntosAlfil.push( new THREE.Vector2( 2, 13.5 ) );
  puntosAlfil.push( new THREE.Vector2( 1.5, 13.5 ) );
  puntosAlfil.push( new THREE.Vector2( 2.5, 15 ) );
  puntosAlfil.push( new THREE.Vector2( 0, 15 ) );
  var alfilForma1 = new THREE.LatheGeometry(puntosAlfil);
  var alfilMalla1 = new THREE.Mesh(alfilForma1);
  
  var alfilForma2 = new THREE.ConeGeometry( 2.5, 4 );
  alfilForma2.translate(0,17,0);
  var alfilMalla2 = new THREE.Mesh(alfilForma2);
  
  var alfilForma3= new THREE.SphereGeometry( 1 );
  alfilForma3.translate(0,18.75,0);
  var alfilMalla3 = new THREE.Mesh(alfilForma3);

  // Juntar mallas de alfil:
  var alfilForma = new THREE.Geometry();
  alfilForma.merge(alfilMalla1.geometry, alfilMalla1.matrix);
  alfilForma.merge(alfilMalla2.geometry, alfilMalla2.matrix);
  alfilForma.merge(alfilMalla3.geometry, alfilMalla3.matrix);
  
  // Crear alfil:
  var alfil3 = new THREE.Mesh( alfilForma, blanco );
  alfil3.position.x=50;
  alfil3.position.y=2;
  alfil3.position.z=70;
  escena.add(alfil3);

  // TABLERO:
  var gris = new THREE.MeshLambertMaterial( { color: 0x151515} );
  var blanco = new THREE.MeshLambertMaterial( { color: 0xFFFFFF} );
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

  // MARCO DE TABLERO
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

  // CÁMARA
  var campoVision = 45; //grados
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  var centro = new THREE.Vector3(35, 20, 45);
  camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.set(35, 20, 130);
  camara.lookAt(centro);

  // LUCES
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
  renderizador.render(escena, camara);
  
  setupDone = true;
}

function loop(){
  requestAnimationFrame(loop);
  if (TEXTURA1.material !== undefined && TEXTURA2.material !== undefined  && TEXTURA3.material !== undefined  && TEXTURA4.material !== undefined && !setupDone){
    setup2();
  }
}

var setupDone = false;
var escena, camara, renderizador;
setup1();
loop();
