var cargador = new THREE.TextureLoader();

// MARCO
function Marco(size,x,y){
  //var madera = THREE.ImageUtils.loadTexture('madera.jpg');
  var madera = cargador.load('madera.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/2,size), new THREE.MeshPhongMaterial({map: madera}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
Marco.prototype= new THREE.Mesh();


// TABLERO
function CuadroNegro(size,x,y){
  //var marmol_negro = THREE.ImageUtils.loadTexture('marmol_negro.jpg');
  var marmol_negro = cargador.load('marmol_negro.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/5,size), new THREE.MeshPhongMaterial({map: marmol_negro}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
CuadroNegro.prototype= new THREE.Mesh();

function CuadroBlanco(size,x,y){
  //var marmol_blanco = THREE.ImageUtils.loadTexture('marmol_blanco.jpg');
  var marmol_blanco = cargador.load('marmol_blanco.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/5,size), new THREE.MeshPhongMaterial({map: marmol_blanco}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
CuadroBlanco.prototype= new THREE.Mesh();


Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var j=0; j<91; j++)
  for(var i=0; i<91; i++){
    if (map[i][j]==="x")
      this.add(new Marco(10,j-_offset,(i-_offset)));
    else if (map[i][j]==="n")
      this.add(new CuadroNegro(10,j-_offset,(i-_offset)));
    else if (map[i][j]==="b")
      this.add(new CuadroBlanco(10,j-_offset,(i-_offset)));
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
  mapa[11]="                                                                                           ";
  mapa[12]="                                                                                           ";
  mapa[13]="                                                                                           ";
  mapa[14]="                                                                                           ";
  mapa[15]="                                                                                           ";
  mapa[16]="                                                                                           ";
  mapa[17]="                                                                                           ";
  mapa[18]="                                                                                           ";
  mapa[19]="                                                                                           ";
  mapa[20]="x         n         b         n         b         n         b         n         b         x";
  mapa[21]="                                                                                           ";
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
  mapa[69]="                                                                                           ";
  mapa[70]="x         b         n         b         n         b         n         b         n         x";
  mapa[71]="                                                                                           ";
  mapa[72]="                                                                                           ";
  mapa[73]="                                                                                           ";
  mapa[74]="                                                                                           ";
  mapa[75]="                                                                                           ";
  mapa[76]="                                                                                           ";
  mapa[77]="                                                                                           ";
  mapa[78]="                                                                                           ";
  mapa[79]="                                                                                           ";
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
  camera.position.set(0, 90, 120);
  camera.lookAt(centro);
  
   // LUCES
  /*var luz = new THREE.PointLight( 0xffffff, 1, 150, 1.5 );
  luz.position.set(35, 70, 35);
  var l1 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l1.position.set( -10, 25, -10 )
  var l2 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l2.position.set( 90, 25, -10 )
  var l3 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l3.position.set( -10, 25, 90 )
  var l4 = new THREE.DirectionalLight( 0xffffff, 0.45 );
  l4.position.set( 90, 25, 90 ) 
  environment.add( luz );
  environment.add( l1 );
  environment.add( l2 );
  environment.add( l3 );
  environment.add( l4 );*/
  
  var light = new THREE.AmbientLight( 0xffffff ); // soft white light
  environment.add( light );
  
  // RENDERIZADOR
  var lienzo = document.getElementById("ProyectoFinal-Ajedrez2");
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderer.setSize( window.innerWidth*.98, window.innerHeight*.98);
  environment.add(camera);
  
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
var raycaster = new THREE.Raycaster(); // create once
var mouse = new THREE.Vector2(); // create once
var INTERSECTED;

setup();
loop();
