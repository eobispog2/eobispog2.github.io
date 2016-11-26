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

function setup1() {
  escena = new THREE.Scene();
  var cargador = new THREE.TextureLoader();
  cargador.load("marmol_negro.jpg", TEXTURA1.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmol_blanco.jpg", TEXTURA2.retrollamada);
  var cargador3 = new THREE.TextureLoader();
  cargador3.load("madera.jpg", TEXTURA3.retrollamada);
}

TORRE = new Object();

TORRE.TorreGeometry = function(){
  THREE.Geometry.call(this);
  
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
  this.merge(torreMalla1.geometry, torreMalla1.matrix);
  this.merge(torreMalla2.geometry, torreMalla2.matrix);
  this.merge(torreMalla3.geometry, torreMalla3.matrix);
  this.merge(torreMalla4.geometry, torreMalla4.matrix);
  this.merge(torreMalla5.geometry, torreMalla5.matrix);
  this.merge(torreMalla6.geometry, torreMalla6.matrix);
  }
  
  TORRE.TorreGeometry.prototype = new THREE.Geometry();
  
  TORRE.setup = function(){
     torre1 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.material);
     torre2 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA1.material);
     torre3 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.material);
     torre4 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA2.material);
    
    torre1.position.y=2;
    
    torre2.position.x=70;
    torre2.position.y=2;
    
    torre3.position.x=70;
    torre3.position.y=2;
    torre3.position.z=70;
    
    torre4.position.y=2;
    torre4.position.z=70;
  }

PEON = new Object();

PEON.PeonGeometry = function(){
  THREE.Geometry.call(this);

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
  peonForma2.translate(0,12.5,0);
  var peonMalla2 = new THREE.Mesh(peonForma2);

  // Juntar mallas de peon:
  var peonForma = new THREE.Geometry();
  this.merge(peonMalla1.geometry, peonMalla1.matrix);
  this.merge(peonMalla2.geometry, peonMalla2.matrix);
}

PEON.PeonGeometry.prototype = new THREE.Geometry();

PEON.setup = function(){
  peon1 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon2 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon3 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon4 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon5 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon6 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon7 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon8 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA2.material);
  peon9 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon10 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon11 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon12 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon13 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon14 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon15 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  peon16 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA1.material);
  
  peon1.position.x=0;
  peon1.position.y=2;
  peon1.position.z=60;
  peon2.position.x=10;
  peon2.position.y=2;
  peon2.position.z=60;
  peon3.position.x=20;
  peon3.position.y=2;
  peon3.position.z=60;
  peon4.position.x=30;
  peon4.position.y=2;
  peon4.position.z=60;  
  peon5.position.x=40;
  peon5.position.y=2;
  peon5.position.z=60;
  peon6.position.x=50;
  peon6.position.y=2;
  peon6.position.z=60;
  peon7.position.x=60;
  peon7.position.y=2;
  peon7.position.z=60;
  peon8.position.x=70;
  peon8.position.y=2;
  peon8.position.z=60;
  peon9.position.x=0;
  peon9.position.y=2;
  peon9.position.z=10;
  peon10.position.x=10;
  peon10.position.y=2;
  peon10.position.z=10;
  peon11.position.x=20;
  peon11.position.y=2;
  peon11.position.z=10;
  peon12.position.x=30;
  peon12.position.y=2;
  peon12.position.z=10;  
  peon13.position.x=40;
  peon13.position.y=2;
  peon13.position.z=10;
  peon14.position.x=50;
  peon14.position.y=2;
  peon14.position.z=10;
  peon15.position.x=60;
  peon15.position.y=2;
  peon15.position.z=10;
  peon16.position.x=70;
  peon16.position.y=2;
  peon16.position.z=10;
}

ALFIL = new Object();

ALFIL.AlfilGeometry = function(){
  THREE.Geometry.call(this);

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
  this.merge(alfilMalla1.geometry, alfilMalla1.matrix);
  this.merge(alfilMalla2.geometry, alfilMalla2.matrix);
  this.merge(alfilMalla3.geometry, alfilMalla3.matrix);
}

ALFIL.AlfilGeometry.prototype = new THREE.Geometry();

ALFIL.setup = function(){
  alfil1 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA2.material);
  alfil2 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA2.material);
  alfil3 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.material);
  alfil4 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA1.material);
  
  alfil1.position.x=50;
  alfil1.position.y=2;
  alfil1.position.z=70;
  alfil2.position.x=20;
  alfil2.position.y=2;
  alfil2.position.z=70;
  alfil3.position.x=50;
  alfil3.position.y=2;
  alfil3.position.z=0;
  alfil4.position.x=20;
  alfil4.position.y=2;
  alfil4.position.z=0;
}

REINA = new Object();

REINA.ReinaGeometry = function(){
  THREE.Geometry.call(this);

  var puntosReina = [];
  puntosReina.push( new THREE.Vector2( 0, 0 ) );
  puntosReina.push( new THREE.Vector2( 4.5, 0 ) );
  puntosReina.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosReina.push( new THREE.Vector2( 4, 1.5 ) );
  puntosReina.push( new THREE.Vector2( 4, 3.5 ) );
  puntosReina.push( new THREE.Vector2( 3, 4.5 ) );
  puntosReina.push( new THREE.Vector2( 2, 12 ) );
  puntosReina.push( new THREE.Vector2( 2.5, 12 ) );
  puntosReina.push( new THREE.Vector2( 2.5, 14 ) );
  puntosReina.push( new THREE.Vector2( 2, 14 ) );
  puntosReina.push( new THREE.Vector2( 2, 15 ) );
  puntosReina.push( new THREE.Vector2( 3.5, 17.5 ) );
  puntosReina.push( new THREE.Vector2( 1.5, 17 ) );
  puntosReina.push( new THREE.Vector2( 0, 17 ) );  
  var reinaForma1 = new THREE.LatheGeometry(puntosReina);
  var reinaMalla1 = new THREE.Mesh(reinaForma1);
  
  var reinaForma2 = new THREE.SphereGeometry( 2 );
  reinaForma2.translate(0,17,0);
  var reinaMalla2 = new THREE.Mesh(reinaForma2);
  
  var reinaForma3= new THREE.SphereGeometry( 1 );
  reinaForma3.translate(0,19,0);
  var reinaMalla3 = new THREE.Mesh(reinaForma3);

  // Juntar mallas de la reina:
  var reinaForma = new THREE.Geometry();
  this.merge(reinaMalla1.geometry, reinaMalla1.matrix);
  this.merge(reinaMalla2.geometry, reinaMalla2.matrix);
  this.merge(reinaMalla3.geometry, reinaMalla3.matrix);
}

REINA.ReinaGeometry.prototype = new THREE.Geometry();

REINA.setup = function(){
  reina1 = new THREE.Mesh(new REINA.ReinaGeometry(), TEXTURA2.material);
  reina2 = new THREE.Mesh(new REINA.ReinaGeometry(), TEXTURA1.material);
  
  reina1.position.x=30;
  reina1.position.y=2;
  reina1.position.z=70;
  reina2.position.x=30;
  reina2.position.y=2;
  reina2.position.z=0;
}


REY = new Object();

REY.ReyGeometry = function(){
  THREE.Geometry.call(this);

  var puntosRey = [];
  puntosRey.push( new THREE.Vector2( 0, 0 ) );
  puntosRey.push( new THREE.Vector2( 4.5, 0 ) );
  puntosRey.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosRey.push( new THREE.Vector2( 4, 1.5 ) );
  puntosRey.push( new THREE.Vector2( 4, 3.5 ) );
  puntosRey.push( new THREE.Vector2( 3, 4.5 ) );
  puntosRey.push( new THREE.Vector2( 2, 12 ) );
  puntosRey.push( new THREE.Vector2( 2.5, 12 ) );
  puntosRey.push( new THREE.Vector2( 2.5, 14 ) );
  puntosRey.push( new THREE.Vector2( 2, 14 ) );
  puntosRey.push( new THREE.Vector2( 2, 15 ) );
  puntosRey.push( new THREE.Vector2( 3.5, 17.5 ) );
  puntosRey.push( new THREE.Vector2( 0, 18.5 ) );
  var reyForma1 = new THREE.LatheGeometry(puntosRey);
  var reyMalla1 = new THREE.Mesh(reyForma1);
  
  var reyForma2 = new THREE.SphereGeometry( 1 );
  reyForma2.translate(0,19,0);
  var reyMalla2 = new THREE.Mesh(reyForma2);
  
  var reyForma3= new THREE.CylinderGeometry( 0.4, 0.4, 2.5 );
  reyForma3.translate(0,20.5,0);
  var reyMalla3 = new THREE.Mesh(reyForma3);
  
  var reyForma4= new THREE.CylinderGeometry( 0.4, 0.4, 2.25 );
  reyForma4.translate(21,0,0);
  reyForma4.rotateZ(Math.PI/2);
  var reyMalla4 = new THREE.Mesh(reyForma4);

  // Juntar mallas de la rey:
  var reyForma = new THREE.Geometry();
  this.merge(reyMalla1.geometry, reyMalla1.matrix);
  this.merge(reyMalla2.geometry, reyMalla2.matrix);
  this.merge(reyMalla3.geometry, reyMalla3.matrix);
  this.merge(reyMalla4.geometry, reyMalla4.matrix);
}

REY.ReyGeometry.prototype = new THREE.Geometry();

REY.setup = function(){
  rey1 = new THREE.Mesh(new REY.ReyGeometry(), TEXTURA2.material);
  rey2 = new THREE.Mesh(new REY.ReyGeometry(), TEXTURA1.material);
  
  rey1.position.x=40;
  rey1.position.y=2;
  rey1.position.z=70;
  rey2.position.x=40;
  rey2.position.y=2;
  rey2.position.z=0;
}


CABALLO = new Object();

CABALLO.CaballoGeometry = function(){
  THREE.Geometry.call(this);

  var puntosCaballo = [];
  puntosCaballo.push( new THREE.Vector2( 0, 0 ) );
  puntosCaballo.push( new THREE.Vector2( 4.5, 0 ) );
  puntosCaballo.push( new THREE.Vector2( 4.5, 1.5 ) );
  puntosCaballo.push( new THREE.Vector2( 4, 1.5 ) );
  puntosCaballo.push( new THREE.Vector2( 4, 3.5 ) );
  puntosCaballo.push( new THREE.Vector2( 3.75, 5 ) );
  puntosCaballo.push( new THREE.Vector2( 0, 5 ) );
  var caballoForma1 = new THREE.LatheGeometry(puntosCaballo);
  var caballoMalla1 = new THREE.Mesh(caballoForma1);
  
  var caballoFigura = new THREE.Shape();
  caballoFigura.moveTo(3, 5);
  caballoFigura.lineTo(3.75, 7);
  caballoFigura.lineTo(4.25, 10);
  caballoFigura.lineTo(3.5, 13);
  caballoFigura.lineTo(2, 16);
  caballoFigura.lineTo(0, 17.5);
  caballoFigura.lineTo(0, 16);
  caballoFigura.lineTo(-2, 15);
  caballoFigura.lineTo(-2.5, 13.5);
  caballoFigura.lineTo(-4.25, 10);
  caballoFigura.lineTo(-3.25, 9.5);
  caballoFigura.lineTo(-2.5, 10);
  caballoFigura.lineTo(-1, 10.75);
  caballoFigura.lineTo(0, 11);
  caballoFigura.lineTo(-0.25, 10.5);
  caballoFigura.lineTo(-2.75, 6.5);
  caballoFigura.lineTo(-3, 5);
  caballoFigura.moveTo(3, 5);
  
  var caballoForma2 = new THREE.ExtrudeGeometry( caballoFigura, {amount: 3, bevelEnabled: false} );
  caballoForma2.translate(0,0,-1.5);
  caballoForma2.rotateY(Math.PI*3/2);
  var caballoMalla2 = new THREE.Mesh(caballoForma2);

  // Juntar mallas de la caballo:
  var caballoForma = new THREE.Geometry();
  this.merge(caballoMalla1.geometry, caballoMalla1.matrix);
  this.merge(caballoMalla2.geometry, caballoMalla2.matrix);
}

CABALLO.CaballoGeometry.prototype = new THREE.Geometry();

CABALLO.setup = function(){
  caballo1 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA2.material);
  caballo2 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA2.material);
  caballo3 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA1.material);
  caballo4 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA1.material);
  
  caballo1.position.x=10;
  caballo1.position.y=2;
  caballo1.position.z=70;
  caballo2.position.x=60;
  caballo2.position.y=2;
  caballo2.position.z=70;
  caballo3.position.x=10;
  caballo3.position.y=2;
  caballo3.position.z=0;
  caballo3.rotateY(Math.PI);
  caballo4.position.x=60;
  caballo4.position.y=2;
  caballo4.position.z=0;
  caballo4.rotateY(Math.PI);
}
  
function setup(){
  escena = new THREE.Scene();
  // TABLERO:
  gris = new THREE.MeshLambertMaterial( { color: 0x151515} );
  blanco = new THREE.MeshLambertMaterial( { color: 0xFFFFFF} );
  var cuadros = [new THREE.BoxGeometry( 10, 2, 10 ) ];
  var cuadroMallas = [new THREE.Mesh(cuadros[0],gris)];
  var counter = 0;
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      cuadros[counter] = new THREE.BoxGeometry( 10, 2, 10 );
      cuadros[counter].translate(j*10,0,i*10);
      if((counter+i) % 2 == 0){
        cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],TEXTURA2.material);
      }
      else {
        cuadroMallas[counter] = new THREE.Mesh(cuadros[counter],TEXTURA1.material);
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
  var marcomalla1 = new THREE.Mesh(marco1, TEXTURA3.material);
  marcomalla1.position.x=35;
  marcomalla1.position.y=3;
  marcomalla1.position.z=80;
  escena.add(marcomalla1);
  var marcomalla2 = new THREE.Mesh(marco2, TEXTURA3.material);
  marcomalla2.position.x=35;
  marcomalla2.position.y=3;
  marcomalla2.position.z=-5;
  escena.add(marcomalla2);
  var marcomalla3 = new THREE.Mesh(marco3, TEXTURA3.material);
  marcomalla3.position.x=-7;
  marcomalla3.position.y=3;
  marcomalla3.position.z=37.5;
  escena.add(marcomalla3);
  var marcomalla4 = new THREE.Mesh(marco4, TEXTURA3.material);
  marcomalla4.position.x=77;
  marcomalla4.position.y=3;
  marcomalla4.position.z=37.5;
  escena.add(marcomalla4);
  
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
  
  // CÁMARA
  var campoVision = 45; //grados
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  var centro = new THREE.Vector3(35, 0, 45);
  camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  camara.position.set(35, 90, 130);
  camara.lookAt(centro);
   
  escena.add(torre1);
  escena.add(torre2);
  escena.add(torre3);
  escena.add(torre4);
  escena.add(peon1);
  escena.add(peon2);
  escena.add(peon3);
  escena.add(peon4);
  escena.add(peon5);
  escena.add(peon6);
  escena.add(peon7);
  escena.add(peon8);
  escena.add(peon9);
  escena.add(peon10);
  escena.add(peon11);
  escena.add(peon12);
  escena.add(peon13);
  escena.add(peon14);
  escena.add(peon15);
  escena.add(peon16);
  escena.add(alfil1);
  escena.add(alfil2);
  escena.add(alfil3);
  escena.add(alfil4);
  escena.add(reina1);
  escena.add(reina2);
  escena.add(rey1);
  escena.add(rey2);
  escena.add(caballo1);
  escena.add(caballo2);
  escena.add(caballo3);
  escena.add(caballo4);

  var lienzo = document.getElementById("ProyectoFinal-Ajedrez");
  renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderizador.setSize( window.innerWidth*.95, window.innerHeight*.95);
  renderizador.render( escena, camara );

  setupDone = true;
}

loop = function(){
  requestAnimationFrame(loop);
  if (TEXTURA1.material !== undefined && TEXTURA2.material !== undefined && TEXTURA3.material !== undefined && !setupDone){
  ALFIL.setup();
  PEON.setup();
  TORRE.setup();
  REINA.setup();
  REY.setup();
  CABALLO.setup();
  setup();
  }
}

var setupDone = false;
var escena, camara, renderizador, gris, blanco;
var torre1, torre2, torre3, torre4;
var peon1, peon2, peon3, peon4, peon5, peon6, peon7, peon8, peon9, peon10, peon11, peon12, peon13, peon14, peon15, peon16;
var alfil1, alfil2, alfil3, alfil4;
var reina1, reina2;
var rey1, rey2;
var caballo1, caballo2, caballo3, caballo4;

setup1();
loop(); 
