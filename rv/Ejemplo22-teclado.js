arbolForma.merge(baseAbajomalla.geometry, baseAbajomalla.matrix);
arbolForma.merge(baseeMalla.geometry, baseeMalla.matrix);
arbolForma.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material = new THREE.MeshNormalMaterial();
arbolMalla = new THREE.Mesh(arbolForma, material);

arbolMalla.rotateX( Math.PI/4 );

escena = new THREE.Scene();
escena.add( arbolMalla );

camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,
			window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
	
	
	
	
	/////////////////////
}

function loop(){
	if (keyboard.pressed("D")) {///////////////keyboard.pressed("D")
	if (letrad==0) {
arbolMalla.rotateY( Math.PI/32 );
	letrad=1;
}
}
	else{
		letrad=0;}
/*else
{
arbolMalla.rotateY( -(Math.PI/32) );
}*/
requestAnimationFrame(loop);
renderizador.render( escena, camara );
}

var arbolMalla, renderizador, escena, camara,letrad=0;
setup();
loop();
