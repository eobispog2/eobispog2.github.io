function init(p){
malla = new THREE.Mesh(new THREE.BoxGeometry(p, p, p), new THREE.MeshNormalMaterial());
escena = new THREE.Scene();
escena.add(malla);
camara = new THREE.PerspectiveCamera();
camara.position.z = 10*p;
step=0.01;
renderizador = new THREE.WebGLRenderer();
renderizador.setSize(700,700);
document.body.appendChild(renderizador.domElement);
}

var loop = function(){
requestAnimationFrame(loop);
renderizador.render(escena, camara);
malla.translateX(step);
if(Math.abs(malla.position.x)>=2)
step=-step;
malla.position.x+=step;
}

var escena, camara, renderizador, malla, step;

init(1);
loop();
