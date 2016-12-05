
// MARCO
function Marco(size,x,y){
  var madera = THREE.ImageUtils.loadTexture('madera.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size*5,size), new THREE.MeshPhongMaterial({map: madera}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
Marco.prototype= new THREE.Mesh();


// TABLERO
function CuadroNegro(size,x,y){
  var marmol_negro = THREE.ImageUtils.loadTexture('marmol_negro.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size), new THREE.MeshPhongMaterial({map: marmol_negro}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
CuadroNegro.prototype= new THREE.Mesh();

function CuadroBlanco(size,x,y){
  var marmol_blanco = THREE.ImageUtils.loadTexture('marmol_blanco.jpg');
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size), new THREE.MeshPhongMaterial({map: marmol_blanco}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}
CuadroBlanco.prototype= new THREE.Mesh();


Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var i=0; i< map.length; i++)
  for(var j=0; j< map.length; j++){
    if (map[i][j]==="x")
      this.add(new Marco(1,j-_offset,(i-_offset)));
    else if (map[i][j]==="n")
      this.add(new CuadroNegro(1,j-_offset,(i-_offset)));
    else if (map[i][j]==="b")
      this.add(new CuadroBlanco(1,j-_offset,(i-_offset)));
  }
}

function setup(){
  THREE.ImageUtils.crossOrigin='';
  var mapa=new Array();
  mapa[0] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[2] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[3] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[4] ="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[5] ="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[6] ="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[7] ="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[8] ="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[9] ="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[10]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[11]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[12]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[13]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[14]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[15]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[16]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[17]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[18]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[19]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[20]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[21]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[22]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[23]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[24]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[25]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[26]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[27]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[28]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[29]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[30]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[31]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[32]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[33]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[34]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[35]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[36]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[37]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[38]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[39]="xxxxxbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnxxxxx";
  mapa[40]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[41]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[42]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[43]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[44]="xxxxxnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbnnnnnnnnnnbbbbbbbbbbxxxxx";
  mapa[45]="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[46]="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[47]="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[48]="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[49]="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  environment.setMap(mapa);
  
  // CÁMARA
  var campoVision = 45; //grados
  var relacionAspecto = window.innerWidth / window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 1000;
  var centro = new THREE.Vector3(35, 2, 35);
  camera = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  camera.position.set(35, 80, 140);
  camera.lookAt(centro);
  
   // LUCES
  var luz = new THREE.PointLight( 0xffffff, 1, 150, 1.5 );
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
  environment.add( l4 );
  
  // RENDERIZADOR
  var lienzo = document.getElementById("ProyectoFinal-Ajedrez2");
  renderer = new THREE.WebGLRenderer({canvas: lienzo, antialias: true})
  renderer.setSize( window.innerWidth*.98, window.innerHeight*.98);
  environment.add(camera);
  
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
