var cargador = new THREE.TextureLoader();
var texture3_g_c = cargador.load('marmol_gris_claro.jpg');
var texture4_g_o = cargador.load('marmol_gris_oscuro.jpg');

var keyboard = new THREEx.KeyboardState();

function Sensor(position, direction){
  THREE.Raycaster.call(this,position,direction);
  this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();


// TORRE
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

  // Juntar mallas:
  var torreForma = new THREE.Geometry();
  this.merge(torreMalla1.geometry, torreMalla1.matrix);
  this.merge(torreMalla2.geometry, torreMalla2.matrix);
  this.merge(torreMalla3.geometry, torreMalla3.matrix);
  this.merge(torreMalla4.geometry, torreMalla4.matrix);
  this.merge(torreMalla5.geometry, torreMalla5.matrix);
  this.merge(torreMalla6.geometry, torreMalla6.matrix);
}
TORRE.TorreGeometry.prototype = new THREE.Geometry();

function Torre_n(x,y){  
  Agent.call(this, x, y);  
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new TORRE.TorreGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}
Torre_n.prototype = new Agent();

function Torre_b(x,y){  
  Agent.call(this, x, y);  
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new TORRE.TorreGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}
Torre_b.prototype = new Agent();


// PEON
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

function Peon_n(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new PEON.PeonGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Peon_n.prototype = new Agent();

function Peon_b(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new PEON.PeonGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Peon_b.prototype = new Agent();

function Peon_b1(x,y){
  Agent.call(this, x, y); 
  this.sensor_f = new Sensor();
  this.sensor_a = new Sensor();
  this.sensor_i = new Sensor();
  this.sensor_d = new Sensor();
  this.actuator = new THREE.Mesh(new PEON.PeonGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Peon_b1.prototype = new Agent();


// ALFIL
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

function Alfil_n(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new ALFIL.AlfilGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Alfil_n.prototype = new Agent();

function Alfil_b(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new ALFIL.AlfilGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Alfil_b.prototype = new Agent();


// REINA
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

function Reina_n(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new REINA.ReinaGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Reina_n.prototype = new Agent();

function Reina_b(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new REINA.ReinaGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Reina_b.prototype = new Agent();


// REY
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

function Rey_n(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new REY.ReyGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Rey_n.prototype = new Agent();

function Rey_b(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new REY.ReyGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Rey_b.prototype = new Agent();


// CABALLO
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
  caballoForma2.rotateY(Math.PI*5/2);
  var caballoMalla2 = new THREE.Mesh(caballoForma2);

  // Juntar mallas de la caballo:
  var caballoForma = new THREE.Geometry();
  this.merge(caballoMalla1.geometry, caballoMalla1.matrix);
  this.merge(caballoMalla2.geometry, caballoMalla2.matrix);
}
CABALLO.CaballoGeometry.prototype = new THREE.Geometry();

function Caballo_n(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new CABALLO.CaballoGeometry(), new THREE.MeshPhongMaterial({map: texture4_g_o}));
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Caballo_n.prototype = new Agent();

function Caballo_b(x,y){
  Agent.call(this, x, y); 
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new CABALLO.CaballoGeometry(), new THREE.MeshPhongMaterial({map: texture3_g_c}));
  this.rotateY(Math.PI);
  this.position.x=x;
  this.position.z=y;
  this.position.y=1;
  this.actuator.commands = [];
  this.add(this.actuator);
}  
Caballo_b.prototype = new Agent();



Peon_b1.prototype.sense = function(environment) {
  this.sensor_f.set(this.position, new THREE.Vector3(Math.sin(this.rotation.y), 0, -Math.cos(this.rotation.y)));
  this.sensor_a.set(this.position, new THREE.Vector3(-Math.sin(this.rotation.y), 0, Math.cos(this.rotation.y)));
  this.sensor_i.set(this.position, new THREE.Vector3(Math.cos(this.rotation.y), 0, -Math.sin(this.rotation.y)));
  this.sensor_d.set(this.position, new THREE.Vector3(-Math.cos(this.rotation.y), 0, Math.sin(this.rotation.y)));
  
  var obstaculo_f = this.sensor_f.intersectObjects(environment.children, true);
  var obstaculo_a = this.sensor_a.intersectObjects(environment.children, true);
  var obstaculo_i = this.sensor_i.intersectObjects(environment.children, true);
  var obstaculo_d = this.sensor_d.intersectObjects(environment.children, true);
  
  if ((obstaculo_f.length > 0 && (obstaculo_f[0].distance <= 0.01)))
    this.sensor_f.colision = true;
  else
    this.sensor_f.colision = false;
}

Peon_b1.prototype.plan = function(environment) {
  this.actuator.commands = [];
  if (this.sensor_f.colision == true)
    this.actuator.commands.push('goRight');
  else
    this.actuator.commands.push('goStraight');
}

Peon_b1.prototype.act = function(environment) {
  var command = this.actuator.commands.pop();
  if (command === undefined)
    console.log('Undefined command');
  else if (command in this.operations)
    this.operations[command](this);
  else
    console.log('Unknown command');  
}

Peon_b1.prototype.operations = {};

Peon_b1.prototype.operations.goStraight = function(robot, distance) {
  if (distance === undefined)
    distance = .05;
    robot.position.x += distance*Math.sin(robot.rotation.y);
    robot.position.z -= distance*Math.cos(robot.rotation.y);
}

Peon_b1.prototype.operations.goRight = function(robot, distance) {
  if (distance === undefined)
    distance = .05;
    robot.position.x += distance*Math.cos(robot.rotation.y);
    robot.position.z -= distance*Math.sin(robot.rotation.y);
}
