let murs_toggle = true;
let liteaux_toggle = true;
let tuiles_toggle = true;
let isol_toggle = true;
let open_toggle = true;
let accessory_toggle = true;
let lucarnes_toggle = true;

function murs_active() {
	if (murs_toggle) {
		murs_toggle = false;
		model.visible = false;
		plafonds.visible = false;
		plafonds2.visible = false;
		joues1.visible = false;
		joues2.visible = false;
	} else {
		murs_toggle = true;
		model.visible = true;
		plafonds.visible = true;
		plafonds2.visible = true;
		joues1.visible = true;
		joues2.visible = true;
	}
}

function liteaux_active() {
	if (liteaux_toggle) {
		liteaux_toggle = false;
		liteaux.visible = false;
		liteaux1.visible = false;
		liteaux2.visible = false;
	} else {
		liteaux_toggle = true;
		liteaux.visible = true;
		liteaux1.visible = true;
		liteaux2.visible = true;
	}
}

function tuiles_active() {
	if (tuiles_toggle) {
		tuiles_toggle = false;
		tuilesL.visible = false;
		faitieres.visible = false;
		tuiles1.visible = false;
		faitieres1.visible = false;
		ciment1.visible = false;
		tuiles2.visible = false;
		faitieres2.visible = false;
		ciment2.visible = false;

	} else {
		tuiles_toggle = true;
		tuilesL.visible = true;
		faitieres.visible = true;
		tuiles1.visible = true;
		faitieres1.visible = true;
		ciment1.visible = true;
		tuiles2.visible = true;
		faitieres2.visible = true;
		ciment2.visible = true;
	}
}

function isolation_active() {
	if (isol_toggle) {
		isol_toggle = false;
		iso.visible = false;
		iso2.visible = false;
	} else {
		isol_toggle = true;
		iso.visible = true;
		iso2.visible = true;
	}
}


function ouvertures_active() {
	if (open_toggle) {
		open_toggle = false;
		bati1.visible = false;
		vantail1.visible = false;
		vantail2.visible = false;
		vitre1.visible = false;
		vitre2.visible = false;
		volet3.visible = false;
		volet4.visible = false;
		bati2.visible = false;
		vantail3.visible = false;
		vantail4.visible = false;
		vitre3.visible = false;
		vitre4.visible = false;
		volet1.visible = false;
		volet2.visible = false;
		bati3.visible = false;
		vantail5.visible = false;
		vantail6.visible = false;
		vitre5.visible = false;
		vitre6.visible = false;
		volet5.visible = false;
		volet6.visible = false;
		bati4.visible = false;
		vantail7.visible = false;
		vantail8.visible = false;
		vitre7.visible = false;
		vitre8.visible = false;
		volet7.visible = false;
		volet8.visible = false;
		fenetre1.visible = false;
		fenetre2.visible = false;
		bati.visible = false;
		seuil.visible = false;
		sonnette.visible = false;
		porte.visible = false;

	} else {
		open_toggle = true;
		bati1.visible = true;
		vantail1.visible = true;
		vantail2.visible = true;
		vitre1.visible = true;
		vitre2.visible = true;
		volet3.visible = true;
		volet4.visible = true;
		bati2.visible = true;
		vantail3.visible = true;
		vantail4.visible = true;
		vitre3.visible = true;
		vitre4.visible = true;
		volet1.visible = true;
		volet2.visible = true;
		bati3.visible = true;
		vantail5.visible = true;
		vantail6.visible = true;
		vitre5.visible = true;
		vitre6.visible = true;
		volet5.visible = true;
		volet6.visible = true;
		bati4.visible = true;
		vantail7.visible = true;
		vantail8.visible = true;
		vitre7.visible = true;
		vitre8.visible = true;
		volet7.visible = true;
		volet8.visible = true;
		fenetre1.visible = true;
		fenetre2.visible = true;
		bati.visible = true;
		seuil.visible = true;
		sonnette.visible = true;
		porte.visible = true;
	}
}

function accessoires_active() {
	if (accessory_toggle) {
		accessory_toggle = false;
		noues1.visible = false;
		noues2.visible = false;
		ciment1.visible = false;
		ciment2.visible = false;
		boisseau.visible = false;
		chapeau.visible = false;
		bavette.visible = false;
		solin.visible = false;

	} else {
		accessory_toggle = true;
		noues1.visible = true;
		noues2.visible = true;
		ciment1.visible = true;
		ciment2.visible = true;
		boisseau.visible = true;
		chapeau.visible = true;
		bavette.visible = true;
		solin.visible = true;
	}
}

function reset() {
	cameraActive = true;
	camera2Active = false;
	controls.reset();
	controls.autoRotate = false;
	porte.rotation.y = 0;
}

function pause() {
	controls.autoRotate = false;
	sound1.stop();
}

function playback() {
	controls.autoRotate = true;
	sound1.play();
}

function rewind() {
	location.reload();
}

function lucarnes_active() {
	if (lucarnes_toggle) {
		lucarnes_toggle = false;
		Charpente1.visible = false;
		liteaux1.visible = false;
		tuiles1.visible = false;
		faitieres1.visible = false;
		joues1.visible = false;
		noues1.visible = false;
		ciment1.visible = false;
		fenetre1.visible = false;
		Charpente2.visible = false;
		liteaux2.visible = false;
		tuiles2.visible = false;
		faitieres2.visible = false;
		joues2.visible = false;
		noues2.visible = false;
		ciment2.visible = false;
		fenetre2.visible = false;

	} else {
		lucarnes_toggle = true;
		Charpente1.visible = true;
		liteaux1.visible = true;
		tuiles1.visible = true;
		faitieres1.visible = true;
		joues1.visible = true;
		noues1.visible = true;
		ciment1.visible = true;
		fenetre1.visible = true;
		Charpente2.visible = true;
		liteaux2.visible = true;
		tuiles2.visible = true;
		faitieres2.visible = true;
		joues2.visible = true;
		noues2.visible = true;
		ciment2.visible = true;
		fenetre2.visible = true;
	}
}

function animate2() {
	//controls.reset ();
	camera.position.set(0, 4, 15);
	const animate2 = () => {
		if (camera.position.z > -3) {
			requestAnimationFrame(animate2);
		}
		setTimeout(ouverture, 250)
		camera.position.lerp(cube.position, 0.015);
	}
	animate2();
}

function ouverture() {
	const animate3 = () => {
		if (porte.quaternion.angleTo(targetQuaternion) > 0.05) {
			requestAnimationFrame(animate3);
		}
		porte.quaternion.slerp(targetQuaternion, 0.0005);
	}
	animate3();
}

function cam1() {
	scene.background = new THREE.Color(0xcce0ff);
	scene.fog = new THREE.Fog(0xcce0ff, 1, 100);
	rain.visible = false;
	lensflare.visible = true;
	light.intensity = 1.8;
	light.shadow.focus = 0.065;
	light.shadow.bias = 0.000001;
	light.shadow.normalBias = 0.02;
	tuiles2_material.shininess = 20;
	pavement_material.shininess = 20;
	sound1.play();
	sound9.stop();
	/*controls.reset ();
	cameraActive = true;
	camera2Active = false;*/
}

function cam2() {
	scene.background = new THREE.Color(0xa0a8b5);
	scene.fog = new THREE.Fog(0xa0a8b5, 1, 100);
	rain.visible = true;
	lensflare.visible = false;
	light.intensity = 0.5;
	light.shadow.focus = 2.065;
	light.shadow.bias = 0.000001;
	light.shadow.normalBias = 0.35;
	tuiles2_material.shininess = 95;
	tuiles2_material.reflectivity = 95;
	pavement_material.shininess = 145;
	sound1.stop();
	sound9.play();
	/*camera2.position.set( 0, 1, 5 );
	cameraActive = false;
	camera2Active = true;*/
}

function raval_1() {
	house3_material.color = new THREE.Color(0xaca89f);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xaca89f);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xaca89f);
	house_material.needsUpdate = true;
}

function raval_2() {
	house3_material.color = new THREE.Color(0xc1bdb3);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xc1bdb3);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xc1bdb3);
	house_material.needsUpdate = true;
}

function raval_3() {
	house3_material.color = new THREE.Color(0xb4a596);
	house3_material.needsUpdate = true;
	house2_material.color = new THREE.Color(0xb4a596);
	house2_material.needsUpdate = true;
	house_material.color = new THREE.Color(0xb4a596);
	house_material.needsUpdate = true;
}

function teinte_1() {
	tuiles_material.color = new THREE.Color(0x48382c);
	tuiles_material.needsUpdate = true;
}

function teinte_2() {
	tuiles_material.color = new THREE.Color(0x96533d);
	tuiles_material.needsUpdate = true;
}

function teinte_3() {
	tuiles_material.color = new THREE.Color(0xbd7245);
	tuiles_material.needsUpdate = true;
}

function clickEffect(e) {
	var d = document.createElement("div");
	d.className = "clickEffect";
	d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
	document.body.appendChild(d);
	d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}

document.addEventListener('click', clickEffect);