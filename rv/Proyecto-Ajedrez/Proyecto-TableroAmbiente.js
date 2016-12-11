var cargador = new THREE.TextureLoader();
var texture1_b = cargador.load('marmol_blanco.jpg');
var texture2_n = cargador.load('marmol_negro.jpg');
var madera = cargador.load('madera.jpg');

// MARCO
function Marco(size,x,y,madera){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/2,size), new THREE.MeshPhongMaterial({map: madera}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
Marco.prototype= new THREE.Mesh();

// TABLERO
function Cuadro(size,x,y,tex){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/5,size), new THREE.MeshPhongMaterial({map: tex}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
Cuadro.prototype= new THREE.Mesh();

// MAPA
Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var j=0; j<91; j++)
  for(var i=0; i<91; i++){
    if (map[i][j]==="x")
      this.add(new Marco(10,j-_offset,(i-_offset),madera));
    else if (map[i][j]==="n")
      this.add(new Cuadro(10,j-_offset,(i-_offset),texture2_n));
    else if (map[i][j]==="b")
      this.add(new Cuadro(10,j-_offset,(i-_offset),texture1_b));
    else if (map[i][j]==="t")
      this.add(new Torre_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="y")
      this.add(new Torre_b(j-_offset,(i-_offset+1)));
    else if (map[i][j]==="p")
      this.add(new Peon_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="o")
      this.add(new Peon_b(j-_offset,(i-_offset+1)));
    else if (map[i][j]==="a")
      this.add(new Alfil_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="s")
      this.add(new Alfil_b(j-_offset,(i-_offset+1)));
    else if (map[i][j]==="r")
      this.add(new Reina_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="e")
      this.add(new Reina_b(j-_offset,(i-_offset+1)));
    else if (map[i][j]==="R")
      this.add(new Rey_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="E")
      this.add(new Rey_b(j-_offset,(i-_offset+1))); 
    else if (map[i][j]==="c")
      this.add(new Caballo_n(j-_offset,(i-_offset-1)));
    else if (map[i][j]==="v")
      this.add(new Caballo_b(j-_offset,(i-_offset+1)));
  }
}

function setup(){
  THREE.ImageUtils.crossOrigin='';
  var mapa=new Array();
  mapa[0] ="x         x         x         x         x         x         x         x         x         x";
  mapa[1] ="                                                                                           ";
  mapa[2] ="                                                                                           ";
  mapa[3] ="                                                                                           ";
  mapa[4] ="                                                                                           ";
  mapa[5] ="                                                                                           ";
  mapa[6] ="                                                                                           ";
  mapa[7] ="                                                                                           ";
  mapa[8] ="                                                                                           ";
  mapa[9] ="                                                                                           ";
  mapa[10]="x         b         n         b         n         b         n         b         n         x";
  mapa[11]="          t         c         a         r         R         a         c         t          ";
  mapa[12]="                                                                                           ";
  mapa[13]="                                                                                           ";
  mapa[14]="                                                                                           ";
  mapa[15]="                                                                                           ";
  mapa[16]="                                                                                           ";
  mapa[17]="                                                                                           ";
  mapa[18]="                                                                                           ";
  mapa[19]="                                                                                           ";
  mapa[20]="x         n         b         n         b         n         b         n         b         x";
  mapa[21]="          p         p         p         p         p         p         p         p          ";
  mapa[22]="                                                                                           ";
  mapa[23]="                                                                                           ";
  mapa[24]="                                                                                           ";
  mapa[25]="                                                                                           ";
  mapa[26]="                                                                                           ";
  mapa[27]="                                                                                           ";
  mapa[28]="                                                                                           ";
  mapa[29]="                                                                                           ";
  mapa[30]="x         b         n         b         n         b         n         b         n         x";
  mapa[31]="                                                                                           ";
  mapa[32]="                                                                                           ";
  mapa[33]="                                                                                           ";
  mapa[34]="                                                                                           ";
  mapa[35]="                                                                                           ";
  mapa[36]="                                                                                           ";
  mapa[37]="                                                                                           ";
  mapa[38]="                                                                                           ";
  mapa[39]="                                                                                           ";
  mapa[40]="x         n         b         n         b         n         b         n         b         x";
  mapa[41]="                                                                                           ";
  mapa[42]="                                                                                           ";
  mapa[43]="                                                                                           ";
  mapa[44]="                                                                                           ";
  mapa[45]="                                                                                           ";
  mapa[46]="                                                                                           ";
  mapa[47]="                                                                                           ";
  mapa[48]="                                                                                           ";
  mapa[49]="                                                                                           ";
  mapa[50]="x         b         n         b         n         b         n         b         n         x";
  mapa[51]="                                                                                           ";
  mapa[52]="                                                                                           ";
  mapa[53]="                                                                                           ";
  mapa[54]="                                                                                           ";
  mapa[55]="                                                                                           ";
  mapa[56]="                                                                                           ";
  mapa[57]="                                                                                           ";
  mapa[58]="                                                                                           ";
  mapa[59]="                                                                                           ";
  mapa[60]="x         n         b         n         b         n         b         n         b         x";
  mapa[61]="                                                                                           ";
  mapa[62]="                                                                                           ";
  mapa[63]="                                                                                           ";
  mapa[64]="                                                                                           ";
  mapa[65]="                                                                                           ";
  mapa[66]="                                                                                           ";
  mapa[67]="                                                                                           ";
  mapa[68]="                                                                                           ";
  mapa[69]="          o         o         o         o         o         o         o         o          ";
  mapa[70]="x         b         n         b         n         b         n         b         n         x";
  mapa[71]="                                                                                           ";
  mapa[72]="                                                                                           ";
  mapa[73]="                                                                                           ";
  mapa[74]="                                                                                           ";
  mapa[75]="                                                                                           ";
  mapa[76]="                                                                                           ";
  mapa[77]="                                                                                           ";
  mapa[78]="                                                                                           ";
  mapa[79]="          y         v         s         e         E         s         v         y          ";
  mapa[80]="x         n         b         n         b         n         b         n         b         x";
  mapa[81]="                                                                                           ";
  mapa[82]="                                                                                           ";
  mapa[83]="                                                                                           ";
  mapa[84]="                                                                                           ";
  mapa[85]="                                                                                           ";
  mapa[86]="                                                                                           ";
  mapa[87]="                                                                                           ";
  mapa[88]="                                                                                           ";
  mapa[89]="                                                                                           ";
  mapa[90]="x         x         x         x         x         x         x         x         x         x";
  
  environment = new Environment();
  environment.setMap(mapa);
  
  // CÁMARA
  var campoVision = 45; //grados
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  var centro = new THREE.Vector3(0, 0, 0);
  camera = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  camera.position.set(0, 90, 110);
  camera.lookAt(centro);
  
   // LUCES  
  var light = new THREE.AmbientLight( 0xffffff ); // soft white light
  environment.add( light );
  
  // TEXTO
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  var info = document.createElement( 'div' );
  info.style.position = 'absolute';
  info.style.top = '10px';
  info.style.width = '100%';
  info.style.fontSize = 'large';
  info.style.textAlign = 'center';
  info.style.color = "blue";
  info.innerHTML = '<br>Introduzca el código del movimiento<br>Por ejemplo: Peón negro 1 a D5 --> nP1D5';
  container.appendChild( info );
  
  container2 = document.createElement( 'div2' );
  document.body.appendChild( container2 );
  var info2 = document.createElement( 'div2' );
  info2.style.position = 'absolute';
  info2.style.left = '35px';
  info2.style.top = '100px';
  info2.style.width = '100%';
  info2.style.textAlign = 'left';
  info2.style.color = "blue";
  info2.innerHTML = 'Código:<br>Pieza negra: n<br>Pieza blanca: b<br>Rey: R<br>Reina: D';
  container2.appendChild( info2 );
  
  container3 = document.createElement( 'div3' );
  document.body.appendChild( container3 );
  var info3 = document.createElement( 'div3' );
  info3.style.position = 'absolute';
  info3.style.left = '35px';
  info3.style.bottom = '20px';
  info3.style.width = '100%';
  info3.style.textAlign = 'left';
  info3.style.color = "blue";
  info3.innerHTML = 'Puede rotar y/o subir el tablero con las flechas';
  container3.appendChild( info3 );
  
  // RENDERIZADOR
  var lienzo = document.getElementById("ProyectoFinal-Ajedrez");
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderer.setSize( window.innerWidth*.90, window.innerHeight*.9);
  environment.add(camera);
  
  window.addEventListener('resize', onWindowResize, false);
  
  setupDone = true;
}


function checkRotation(){
  var x = camera.position.x;
  var y = camera.position.y;
  var z = camera.position.z;

  if (keyboard.pressed("left")){
    camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
    camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
  } else if (keyboard.pressed("right")){
    camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
    camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
  }
  if (keyboard.pressed("up")){
    camera.position.y = y + 1;
  } else if (keyboard.pressed("down")){
    camera.position.y = y - 1;
  }
  var centro = new THREE.Vector3(0, 0, 0);
  camera.lookAt(centro);
}


function onDocumentMouseDown( event ) { 
  mouse.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
  mouse.y = - ( event.clientY / renderer.domElement.height ) * 2 + 1;
  mouse.z = 0.5;
	
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );	

  // calculate objects intersecting the picking ray
  var intersects = raycaster.intersectObjects( environment.children );
  
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


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth*.97, window.innerHeight*.97);
}


function render() {
  renderer.render( environment, camera );
}


loop = function(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  
  if (setupDone){
    document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    render();
    checkRotation();
  }
}


var keyboard = new THREEx.KeyboardState();

var setupDone = false;
var environment, camera, renderer;

// Para rotación de cámara:
var rotSpeed = .02;

// Para seleeción de pieza
var objects = [];
var recursiveFlag;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var INTERSECTED;

setup();
loop();
