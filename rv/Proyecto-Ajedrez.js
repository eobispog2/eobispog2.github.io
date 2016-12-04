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
var TEXTURA5 = new Object();
TEXTURA5.retrollamada = function( textura ) {
  TEXTURA5.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA6 = new Object();
TEXTURA6.retrollamada = function( textura ) {
  TEXTURA6.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA7 = new Object();
TEXTURA7.retrollamada = function( textura ) {
  TEXTURA7.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA8 = new Object();
TEXTURA8.retrollamada = function( textura ) {
  TEXTURA8.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA9 = new Object();
TEXTURA9.retrollamada = function( textura ) {
  TEXTURA9.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA10 = new Object();
TEXTURA10.retrollamada = function( textura ) {
  TEXTURA10.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA11 = new Object();
TEXTURA11.retrollamada = function( textura ) {
  TEXTURA11.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA12 = new Object();
TEXTURA12.retrollamada = function( textura ) {
  TEXTURA12.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA13 = new Object();
TEXTURA13.retrollamada = function( textura ) {
  TEXTURA13.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA14 = new Object();
TEXTURA14.retrollamada = function( textura ) {
  TEXTURA14.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA15 = new Object();
TEXTURA15.retrollamada = function( textura ) {
  TEXTURA15.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA16 = new Object();
TEXTURA16.retrollamada = function( textura ) {
  TEXTURA16.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA17 = new Object();
TEXTURA17.retrollamada = function( textura ) {
  TEXTURA17.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA18 = new Object();
TEXTURA18.retrollamada = function( textura ) {
  TEXTURA18.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA19 = new Object();
TEXTURA19.retrollamada = function( textura ) {
  TEXTURA19.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA20 = new Object();
TEXTURA20.retrollamada = function( textura ) {
  TEXTURA20.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA21 = new Object();
TEXTURA21.retrollamada = function( textura ) {
  TEXTURA21.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA22 = new Object();
TEXTURA22.retrollamada = function( textura ) {
  TEXTURA22.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA23 = new Object();
TEXTURA23.retrollamada = function( textura ) {
  TEXTURA23.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA24 = new Object();
TEXTURA24.retrollamada = function( textura ) {
  TEXTURA24.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA25 = new Object();
TEXTURA25.retrollamada = function( textura ) {
  TEXTURA25.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA26 = new Object();
TEXTURA26.retrollamada = function( textura ) {
  TEXTURA26.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA27 = new Object();
TEXTURA27.retrollamada = function( textura ) {
  TEXTURA27.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA28 = new Object();
TEXTURA28.retrollamada = function( textura ) {
  TEXTURA28.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA29 = new Object();
TEXTURA29.retrollamada = function( textura ) {
  TEXTURA29.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA30 = new Object();
TEXTURA30.retrollamada = function( textura ) {
  TEXTURA30.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA31 = new Object();
TEXTURA31.retrollamada = function( textura ) {
  TEXTURA31.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA32 = new Object();
TEXTURA32.retrollamada = function( textura ) {
  TEXTURA32.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA33 = new Object();
TEXTURA33.retrollamada = function( textura ) {
  TEXTURA33.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA34 = new Object();
TEXTURA34.retrollamada = function( textura ) {
  TEXTURA34.material = new THREE.MeshBasicMaterial( {map: textura} );
}
var TEXTURA35 = new Object();
TEXTURA35.retrollamada = function( textura ) {
  TEXTURA35.material = new THREE.MeshBasicMaterial( {map: textura} );
}


function setup1() {
  scene = new THREE.Scene();
  var cargador1 = new THREE.TextureLoader();
  cargador1.load("marmol_negro.jpg", TEXTURA1.retrollamada);
  var cargador2 = new THREE.TextureLoader();
  cargador2.load("marmol_blanco.jpg", TEXTURA2.retrollamada);
  var cargador3 = new THREE.TextureLoader();
  cargador3.load("madera.jpg", TEXTURA3.retrollamada);
  
  var cargador4 = new THREE.TextureLoader();
  cargador4.load("marmol_negro.jpg", TEXTURA4.retrollamada);
  var cargador5 = new THREE.TextureLoader();
  cargador5.load("marmol_negro.jpg", TEXTURA5.retrollamada);
  var cargador6 = new THREE.TextureLoader();
  cargador6.load("marmol_negro.jpg", TEXTURA6.retrollamada);
  var cargador7 = new THREE.TextureLoader();
  cargador7.load("marmol_negro.jpg", TEXTURA7.retrollamada);
  var cargador8 = new THREE.TextureLoader();
  cargador8.load("marmol_negro.jpg", TEXTURA8.retrollamada);
  var cargador9 = new THREE.TextureLoader();
  cargador9.load("marmol_negro.jpg", TEXTURA9.retrollamada);
  var cargador10 = new THREE.TextureLoader();
  cargador10.load("marmol_negro.jpg", TEXTURA10.retrollamada);
  var cargador11 = new THREE.TextureLoader();
  cargador11.load("marmol_negro.jpg", TEXTURA11.retrollamada);
  var cargador12 = new THREE.TextureLoader();
  cargador12.load("marmol_negro.jpg", TEXTURA12.retrollamada);
  var cargador13 = new THREE.TextureLoader();
  cargador13.load("marmol_negro.jpg", TEXTURA13.retrollamada);
  var cargador14 = new THREE.TextureLoader();
  cargador14.load("marmol_negro.jpg", TEXTURA14.retrollamada);
  var cargador15 = new THREE.TextureLoader();
  cargador15.load("marmol_negro.jpg", TEXTURA15.retrollamada);
  var cargador16 = new THREE.TextureLoader();
  cargador16.load("marmol_negro.jpg", TEXTURA16.retrollamada);
  var cargador17 = new THREE.TextureLoader();
  cargador17.load("marmol_negro.jpg", TEXTURA17.retrollamada);
  var cargador18 = new THREE.TextureLoader();
  cargador18.load("marmol_negro.jpg", TEXTURA18.retrollamada);
  var cargador19 = new THREE.TextureLoader();
  cargador19.load("marmol_negro.jpg", TEXTURA19.retrollamada);
  
  var cargador20 = new THREE.TextureLoader();
  cargador20.load("marmol_blanco.jpg", TEXTURA20.retrollamada);
  var cargador21 = new THREE.TextureLoader();
  cargador21.load("marmol_blanco.jpg", TEXTURA21.retrollamada);
  var cargador22 = new THREE.TextureLoader();
  cargador22.load("marmol_blanco.jpg", TEXTURA22.retrollamada);
  var cargador23 = new THREE.TextureLoader();
  cargador23.load("marmol_blanco.jpg", TEXTURA23.retrollamada);
  var cargador24 = new THREE.TextureLoader();
  cargador24.load("marmol_blanco.jpg", TEXTURA24.retrollamada);
  var cargador25 = new THREE.TextureLoader();
  cargador25.load("marmol_blanco.jpg", TEXTURA25.retrollamada);
  var cargador26 = new THREE.TextureLoader();
  cargador26.load("marmol_blanco.jpg", TEXTURA26.retrollamada);
  var cargador27 = new THREE.TextureLoader();
  cargador27.load("marmol_blanco.jpg", TEXTURA27.retrollamada);
  var cargador28 = new THREE.TextureLoader();
  cargador28.load("marmol_blanco.jpg", TEXTURA28.retrollamada);
  var cargador29 = new THREE.TextureLoader();
  cargador29.load("marmol_blanco.jpg", TEXTURA29.retrollamada);
  var cargador30 = new THREE.TextureLoader();
  cargador30.load("marmol_blanco.jpg", TEXTURA30.retrollamada);
  var cargador31 = new THREE.TextureLoader();
  cargador31.load("marmol_blanco.jpg", TEXTURA31.retrollamada);
  var cargador32 = new THREE.TextureLoader();
  cargador32.load("marmol_blanco.jpg", TEXTURA32.retrollamada);
  var cargador33 = new THREE.TextureLoader();
  cargador33.load("marmol_blanco.jpg", TEXTURA33.retrollamada);
  var cargador34 = new THREE.TextureLoader();
  cargador34.load("marmol_blanco.jpg", TEXTURA34.retrollamada);
  var cargador35 = new THREE.TextureLoader();
  cargador35.load("marmol_blanco.jpg", TEXTURA35.retrollamada);
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
torre1 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA4.material);
torre2 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA5.material);
torre3 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA20.material);
torre4 = new THREE.Mesh(new TORRE.TorreGeometry(), TEXTURA21.material);

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
  peon1 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA22.material);
  peon2 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA23.material);
  peon3 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA24.material);
  peon4 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA25.material);
  peon5 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA26.material);
  peon6 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA27.material);
  peon7 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA28.material);
  peon8 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA29.material);
  peon9 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA6.material);
  peon10 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA7.material);
  peon11 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA8.material);
  peon12 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA9.material);
  peon13 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA10.material);
  peon14 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA11.material);
  peon15 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA12.material);
  peon16 = new THREE.Mesh(new PEON.PeonGeometry(), TEXTURA13.material);
  
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
  alfil1 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA30.material);
  alfil2 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA31.material);
  alfil3 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA14.material);
  alfil4 = new THREE.Mesh(new ALFIL.AlfilGeometry(), TEXTURA15.material);
  
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
  reina1 = new THREE.Mesh(new REINA.ReinaGeometry(), TEXTURA32.material);
  reina2 = new THREE.Mesh(new REINA.ReinaGeometry(), TEXTURA16.material);
  
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
  rey1 = new THREE.Mesh(new REY.ReyGeometry(), TEXTURA33.material);
  rey2 = new THREE.Mesh(new REY.ReyGeometry(), TEXTURA17.material);
  
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
  puntosCaballo.push( new THREE.Vector2( 3.75, 5.1 ) );
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

  // Juntar mallas del caballo:
  var caballoForma = new THREE.Geometry();
  this.merge(caballoMalla1.geometry, caballoMalla1.matrix);
  this.merge(caballoMalla2.geometry, caballoMalla2.matrix);
}

CABALLO.CaballoGeometry.prototype = new THREE.Geometry();

CABALLO.setup = function(){
  caballo1 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA34.material);
  caballo2 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA35.material);
  caballo3 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA18.material);
  caballo4 = new THREE.Mesh(new CABALLO.CaballoGeometry(), TEXTURA19.material);
  
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
  scene = new THREE.Scene();
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
      scene.add(cuadroMallas[counter]);
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
  marcomalla1.position.z=77.5;
  scene.add(marcomalla1);
  var marcomalla2 = new THREE.Mesh(marco2, TEXTURA3.material);
  marcomalla2.position.x=35;
  marcomalla2.position.y=3;
  marcomalla2.position.z=-7.5;
  scene.add(marcomalla2);
  var marcomalla3 = new THREE.Mesh(marco3, TEXTURA3.material);
  marcomalla3.position.x=-7;
  marcomalla3.position.y=3;
  marcomalla3.position.z=35;
  scene.add(marcomalla3);
  var marcomalla4 = new THREE.Mesh(marco4, TEXTURA3.material);
  marcomalla4.position.x=77;
  marcomalla4.position.y=3;
  marcomalla4.position.z=35;
  scene.add(marcomalla4);
  
   // LUCES
  var luz = new THREE.PointLight( 0xffffff, 1, 150, 1.5 );
  luz.position.set(35, 70, 35);
  scene.add( luz );
  var l1 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l1.position.set( -10, 25, -10 )
  var l2 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l2.position.set( 90, 25, -10 )
  var l3 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l3.position.set( -10, 25, 90 )
  var l4 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l4.position.set( 90, 25, 90 )
  scene.add( l1 );
  scene.add( l2 );
  scene.add( l3 );
  scene.add( l4 );
  
  // CÁMARA
  var campoVision = 45; //grados
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  var centro = new THREE.Vector3(35, 2, 35);
  camera = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  camera.position.set(35, 80, 140);
  camera.lookAt(centro);
   
  scene.add(torre1);
  scene.add(torre2);
  scene.add(torre3);
  scene.add(torre4);
  scene.add(peon1);
  scene.add(peon2);
  scene.add(peon3);
  scene.add(peon4);
  scene.add(peon5);
  scene.add(peon6);
  scene.add(peon7);
  scene.add(peon8);
  scene.add(peon9);
  scene.add(peon10);
  scene.add(peon11);
  scene.add(peon12);
  scene.add(peon13);
  scene.add(peon14);
  scene.add(peon15);
  scene.add(peon16);
  scene.add(alfil1);
  scene.add(alfil2);
  scene.add(alfil3);
  scene.add(alfil4);
  scene.add(reina1);
  scene.add(reina2);
  scene.add(rey1);
  scene.add(rey2);
  scene.add(caballo1);
  scene.add(caballo2);
  scene.add(caballo3);
  scene.add(caballo4);
  
  var lienzo = document.getElementById("Proyecto-Ajedrez");
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderer.setSize( window.innerWidth*.98, window.innerHeight*.98);
  
  setupDone = true;
}


function checkRotation(){
  var x = camera.position.x-35;
  var y = camera.position.y;
  var z = camera.position.z-35;

  if (keyboard.pressed("left")){
    camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed) + 35;
    camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed) + 35;
  } else if (keyboard.pressed("right")){
    camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed) + 35;
    camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed) + 35;
  }
  if (keyboard.pressed("up")){
    camera.position.y = y + 1;
  } else if (keyboard.pressed("down")){
    camera.position.y = y - 1;
  }
  var centro = new THREE.Vector3(35, 2, 35);
  camera.lookAt(centro);
}


function onDocumentMouseDown( event ) { 
  mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
  mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
  mouse.z = 0.5;
	
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );	

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( scene.children );
  
  // INTERSECTED = the object in the scene currently closest to the camera 
  //      and intersected by the Ray projected from the mouse position    
  
  // if there is one (or more) intersections
  if ( intersects.length > 0 )
  {
    // if the closest object intersected is not the currently stored intersection object
    if ( intersects[ 0 ].object != INTERSECTED )
    {
       // restore previous intersection object (if it exists) to its original color
       if ( INTERSECTED )
         INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
       // store reference to closest object as current intersection object
       INTERSECTED = intersects[ 0 ].object;
       // store color of closest object (for later restoration)
       INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
       // set a new color for closest object
       INTERSECTED.material.color.setHex( 0xffff00 );
     }
  }
  else // there are no intersections
  {
    // restore previous intersection object (if it exists) to its original color
    if ( INTERSECTED )
      INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
    // remove previous intersection object reference
    //     by setting current intersection object to "nothing"
    INTERSECTED = null;
  }
}



function render() {
  renderer.render( scene, camera );
}


loop = function(){
  requestAnimationFrame(loop);
  if (TEXTURA1.material !== undefined && TEXTURA2.material !== undefined && TEXTURA3.material !== undefined &&
      TEXTURA4.material !== undefined && TEXTURA5.material !== undefined && TEXTURA6.material !== undefined &&
      TEXTURA7.material !== undefined && TEXTURA8.material !== undefined && TEXTURA9.material !== undefined &&
      TEXTURA10.material !== undefined && TEXTURA11.material !== undefined && TEXTURA12.material !== undefined &&
      TEXTURA13.material !== undefined && TEXTURA14.material !== undefined && TEXTURA15.material !== undefined &&
      TEXTURA16.material !== undefined && TEXTURA17.material !== undefined && TEXTURA18.material !== undefined &&
      TEXTURA19.material !== undefined && TEXTURA20.material !== undefined && TEXTURA21.material !== undefined &&
      TEXTURA22.material !== undefined && TEXTURA23.material !== undefined && TEXTURA24.material !== undefined &&
      TEXTURA25.material !== undefined && TEXTURA26.material !== undefined && TEXTURA27.material !== undefined &&
      TEXTURA28.material !== undefined && TEXTURA29.material !== undefined && TEXTURA30.material !== undefined &&
      TEXTURA31.material !== undefined && TEXTURA32.material !== undefined && TEXTURA33.material !== undefined &&
      TEXTURA34.material !== undefined && TEXTURA35.material !== undefined && !setupDone){
    ALFIL.setup();
    PEON.setup();
    TORRE.setup();
    REINA.setup();
    REY.setup();
    CABALLO.setup();
    setup();
  }
  if (setupDone){
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    render();
    checkRotation();
  }
}


var keyboard = new THREEx.KeyboardState();

var setupDone = false;
var scene, camera, renderer, gris, blanco;
var torre1, torre2, torre3, torre4;
var peon1, peon2, peon3, peon4, peon5, peon6, peon7, peon8, peon9, peon10, peon11, peon12, peon13, peon14, peon15, peon16;
var alfil1, alfil2, alfil3, alfil4;
var reina1, reina2;
var rey1, rey2;
var caballo1, caballo2, caballo3, caballo4;

// Para rotación de cámara:
var rotSpeed = .02;

// Para seleeción de pieza
var objects = [];
var recursiveFlag;
var raycaster = new THREE.Raycaster(); // create once
var mouse = new THREE.Vector2(); // create once
var INTERSECTED;

setup1();
loop();
