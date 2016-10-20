function Pieza(){
  THREE.Object3D.call(this);
  this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.add(this.piernaIzq, this.piernaDer, cuerpo);
  this.piernaIzq.position.z = -2;
  this.piernaIzq.position.y = -2.5;
  this.piernaDer.position.z = 2;
  this.piernaDer.position.y = -2.5;
  cuerpo.position.z = 2.5;
}

Pieza.prototype = new THREE.Object3D();
var pieza = new Pieza();

Pieza.setup = function() {
  pieza.camara = new THREE.PerspectiveCamera();
  pieza.camara.position.z = 20;
  
  var lienzo = document.getElementById("Ejemplo19");
  pieza.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  pieza.renderizador.setSize( 600, 600 );
  
  pieza.escena = new THREE.Scene();
  pieza.escena.add(arbol1);
  pieza.escena.add(arbol2);
  
}

Pieza.loop = function(){
  requestAnimationFrame(Pieza.loop);
  pieza.rotateY = 0.1;
  pieza.renderizador.render( pieza.escena, pieza.camara );
}
