// Scene Camera & Renderer

const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.75;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xcce0ff);
scene.fog = new THREE.Fog(0xcce0ff, 1, 100);

scene.position.x += 0.6;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);

camera.position.set(0, 9, 15);
camera.rotation.set(-0.4, 0, 0);

let domEvents = new THREEx.DomEvents(camera, renderer.domElement);
let cloudParticles = [], rain, rainGeo, rainCount = 300000;

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const rgbl = new THREE.RGBELoader();
rgbl.setDataType(THREE.UnsignedByteType)
rgbl.setPath('/static/3D/assets/textures/')
rgbl.load('greenwich_park_03_1k.hdr', function (texture) {

	const envMap = pmremGenerator.fromEquirectangular(texture).texture;

	scene.background = envMap;
	scene.environment = envMap;
})

// Sounds

const listener = new THREE.AudioListener();
camera.add(listener);

const sound = new THREE.Audio(listener);
const sound1 = new THREE.Audio(listener);
const sound2 = new THREE.Audio(listener);
const sound3 = new THREE.Audio(listener);
const sound4 = new THREE.Audio(listener);
const sound5 = new THREE.Audio(listener);
const sound6 = new THREE.Audio(listener);
const sound7 = new THREE.Audio(listener);
const sound8 = new THREE.Audio(listener);
const sound9 = new THREE.Audio(listener);

const audioLoader1 = new THREE.AudioLoader();
audioLoader1.load('/static/3D/assets/sounds/ambiant.mp3', function (buffer) {
	sound1.setBuffer(buffer);
	sound1.setLoop(true);
	sound1.setVolume(0.5);
	sound1.play();
});

const audioLoader9 = new THREE.AudioLoader();
audioLoader9.load('/static/3D/assets/sounds/rain.mp3', function (buffer) {
	sound9.setBuffer(buffer);
	sound9.setLoop(true);
	sound9.setVolume(0.5);
});

// Loading screen

const loadingManager = new THREE.LoadingManager(() => {

	const loadingScreen = document.getElementById('loading-screen');
	loadingScreen.classList.add('fade-out');
	loadingScreen.addEventListener('transitionend', onTransitionEnd);
});

// Materials

glassSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/glassS.jpg');
glassSpec.wrapS = glassSpec.wrapT = THREE.RepeatWrapping;
glassSpec.repeat.set(10, 10);

//glassNorm = new THREE.TextureLoader().load( '/static/3D/assets/textures/glassN.jpg' );
/*glassNorm.wrapS = glassNorm.wrapT = THREE.RepeatWrapping;
glassNorm.repeat.set(20, 20);*/

const plaf_material = new THREE.MeshStandardMaterial({ color: 0xFFFFF0 });
const charpente_material = new THREE.MeshPhongMaterial();
const tuiles_material = new THREE.MeshStandardMaterial({ color: 0x48382c });
const tuiles2_material = new THREE.MeshPhongMaterial();
const basic_material = new THREE.MeshStandardMaterial({ color: 0x808080 });
const house_material = new THREE.MeshStandardMaterial({ color: 0xaca89f });
const house2_material = new THREE.MeshStandardMaterial({ color: 0xaca89f });
const house3_material = new THREE.MeshStandardMaterial({ color: 0xaca89f });
const isol_material = new THREE.MeshStandardMaterial({ color: 0xaca89f });
const isol2_material = new THREE.MeshStandardMaterial({ color: 0xaca89f });
const glass_material = new THREE.MeshPhysicalMaterial({
	color: 0xffffff,
	metalness: 0.25,
	roughness: 0.1,
	reflectivity: 1.0,
	transmission: 0.2,
	transparent: true,
	roughnessMap: glassSpec,
});

const wood_material = new THREE.MeshPhongMaterial();
const wood_material2 = new THREE.MeshPhongMaterial();
const stairs_material = new THREE.MeshPhongMaterial();
const clouds_material = new THREE.MeshStandardMaterial({ fog: true });
const pavement_material = new THREE.MeshPhongMaterial();
const shutter_material = new THREE.MeshPhongMaterial();
const door_material = new THREE.MeshPhongMaterial();
const sky_material = new THREE.MeshBasicMaterial({ fog: true });
const groundMaterial = new THREE.MeshStandardMaterial();
const groundMaterial2 = new THREE.MeshStandardMaterial({ color: 0x808080 });
const gravel_material = new THREE.MeshPhongMaterial();
const mud_material = new THREE.MeshPhongMaterial();
const hedge_material = new THREE.MeshPhongMaterial();
const tarp_material = new THREE.MeshPhysicalMaterial();
const pwood_material = new THREE.MeshPhysicalMaterial({ color: 0xd9ccae });
const pwood2_material = new THREE.MeshPhysicalMaterial({ color: 0xd9ccae });
const steel_material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const water_material = new THREE.MeshPhysicalMaterial();

const params = {
	color: '#ffffff',
	scale: 1,
	flowX: 0.75,
	flowY: 0.75
};

const loader = new THREE.OBJLoader(loadingManager);

const quaternion = new THREE.Quaternion();
const euler = new THREE.Euler(0, -1.6, 0, 'XYZ');
const targetQuaternion = new THREE.Quaternion();
targetQuaternion.setFromEuler(euler);

const euler2 = new THREE.Euler(0, -0, 0, 'XYZ');
const targetQuaternion2 = new THREE.Quaternion();
targetQuaternion2.setFromEuler(euler2);

const euler3 = new THREE.Euler(0, 1.6, 0, 'XYZ');
const targetQuaternion3 = new THREE.Quaternion();
targetQuaternion3.setFromEuler(euler3);

const euler4 = new THREE.Euler(0, -6.28, 0, 'XYZ');
const targetQuaternion4 = new THREE.Quaternion();
targetQuaternion4.setFromEuler(euler4);

const euler5 = new THREE.Euler(0, 6.28, 0, 'XYZ');
const targetQuaternion5 = new THREE.Quaternion();
targetQuaternion5.setFromEuler(euler5);

const euler6 = new THREE.Euler(0, -3.14, 0, 'XYZ');
const targetQuaternion6 = new THREE.Quaternion();
targetQuaternion6.setFromEuler(euler6);

const euler7 = new THREE.Euler(0, 3.14, 0, 'XYZ');
const targetQuaternion7 = new THREE.Quaternion();
targetQuaternion7.setFromEuler(euler7);

//scene.overrideMaterial = new THREE.MeshStandardMaterial( { color: 0xaca89f } );

// objects

loader.load(
	'/static/3D/assets/obj/terrasse.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		terrTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/terrasseD.jpg');
		terrTexture.wrapS = terrTexture.wrapT = THREE.RepeatWrapping;
		terrTexture.repeat.set(10, 10);

		terrSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/terrasseS.jpg');
		terrSpec.wrapS = terrSpec.wrapT = THREE.RepeatWrapping;
		terrSpec.repeat.set(10, 10);

		terrNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/terrasseN.jpg');
		terrNorm.wrapS = terrNorm.wrapT = THREE.RepeatWrapping;
		terrNorm.repeat.set(10, 10);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = pavement_material;
				child.material.map = terrTexture;
				child.material.specularMap = terrSpec;
				child.material.normalMap = terrNorm;
				child.material.side = THREE.FrontSide;

				child.material.shininess = 20;
				child.material.reflectivity = 1;
				child.material.normalScale = new THREE.Vector2(2, 2);
			}
		});

		terrasse = object;
		scene.add(terrasse);
		terrasse.visible = true;

		domEvents.addEventListener(terrasse, 'click', function (event) {

			const audioLoader3 = new THREE.AudioLoader();
			audioLoader3.load('/static/3D/assets/sounds/steps.mp3', function (buffer) {
				sound3.setBuffer(buffer);
				sound3.setLoop(false);
				sound3.setVolume(0.3);
				sound3.playbackRate = 1.5;
				sound3.play();
			});
		}, false)
	});

loader.load(
	'/static/3D/assets/obj/house.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		house2Norm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		house2Norm.wrapS = house2Norm.wrapT = THREE.RepeatWrapping;
		house2Norm.repeat.set(50, 50);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = house2_material;


				child.material.normalMap = house2Norm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		model = object;
		scene.add(model);
		model.visible = true;

		domEvents.addEventListener(model, 'click', function (event) {

			const audioLoader3 = new THREE.AudioLoader();
			audioLoader3.load('/static/3D/assets/sounds/click.wav', function (buffer) {
				sound3.setBuffer(buffer);
				sound3.setLoop(false);
				sound3.setVolume(0.3);
				sound3.playbackRate = 0.75;
				sound3.play();
			});
		}, false)
	});

loader.load(
	'/static/3D/assets/obj/parquet.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		woodTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetD.jpg');
		woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
		woodTexture.repeat.set(5, 5);

		woodSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetS.jpg');
		woodSpec.wrapS = woodSpec.wrapT = THREE.RepeatWrapping;
		woodSpec.repeat.set(5, 5);

		woodNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetN.jpg');
		woodNorm.wrapS = woodNorm.wrapT = THREE.RepeatWrapping;
		woodNorm.repeat.set(5, 5);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = wood_material;
				child.material.map = woodTexture;
				child.material.specularMap = woodSpec;
				child.material.normalMap = woodNorm;

				child.material.shininess = 75;
				child.material.reflectivity = 1;
				child.material.normalScale = new THREE.Vector2(2, 2);
			}
		});

		parquet = object;
		scene.add(parquet);
		parquet.visible = true;

		domEvents.addEventListener(parquet, 'click', function (event) {

			const audioLoader3 = new THREE.AudioLoader();
			audioLoader3.load('/static/3D/assets/sounds/click.wav', function (buffer) {
				sound3.setBuffer(buffer);
				sound3.setLoop(false);
				sound3.setVolume(0.3);
				sound3.playbackRate = 0.75;
				sound3.play();
			});
		}, false)
	});

loader.load(
	'/static/3D/assets/obj/parquet2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		woodTexture2 = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetD.jpg');
		woodTexture2.wrapS = woodTexture2.wrapT = THREE.RepeatWrapping;
		woodTexture2.repeat.set(5, 5);

		woodSpec2 = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetS.jpg');
		woodSpec2.wrapS = woodSpec2.wrapT = THREE.RepeatWrapping;
		woodSpec2.repeat.set(5, 5);

		woodNorm2 = new THREE.TextureLoader().load('/static/3D/assets/textures/parquetN.jpg');
		woodNorm2.wrapS = woodNorm2.wrapT = THREE.RepeatWrapping;
		woodNorm2.repeat.set(5, 5);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = wood_material2;
				child.material.side = THREE.BackSide;
				child.material.map = woodTexture2;
				child.material.specularMap = woodSpec2;
				child.material.normalMap = woodNorm2;

				child.material.shininess = 75;
				child.material.reflectivity = 1;
				child.material.normalScale = new THREE.Vector2(2, 2);
			}
		});

		parquet2 = object;
		scene.add(parquet2);
		parquet2.visible = true;

		domEvents.addEventListener(parquet, 'click', function (event) {

			const audioLoader3 = new THREE.AudioLoader();
			audioLoader3.load('/static/3D/assets/sounds/click.wav', function (buffer) {
				sound3.setBuffer(buffer);
				sound3.setLoop(false);
				sound3.setVolume(0.3);
				sound3.playbackRate = 0.75;
				sound3.play();
			});
		}, false)
	});

const Bati1 = new THREE.OBJLoader();
Bati1.load(
	'/static/3D/assets/obj/porte/bati.obj', function (object) {

		object.scale.x = 1.01;
		object.scale.y = 1.01;
		object.scale.z = 1.01;
		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = door_material;
			}
		});

		bati = object;
		bati.visible = true;
	});

const Seuil1 = new THREE.OBJLoader();
Seuil1.load(
	'/static/3D/assets/obj/porte/seuil.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = door_material;
			}
		});

		seuil = object;
		seuil.visible = true;
	});

const Sonnette1 = new THREE.OBJLoader();
Seuil1.load(
	'/static/3D/assets/obj/porte/sonnette.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		sonnette = object;
		sonnette.visible = true;

		domEvents.addEventListener(sonnette, 'click', function (event) {


			const audioLoader8 = new THREE.AudioLoader();
			audioLoader8.load('/static/3D/assets/sounds/ding.wav', function (buffer) {
				sound8.setBuffer(buffer);
				sound8.setLoop(false);
				sound8.setVolume(0.3);
				sound8.playbackRate = 0.75;
				sound8.play();
			});
		}, false)
	});

const Porte1 = new THREE.OBJLoader();
Porte1.load(
	'/static/3D/assets/obj/porte/porte.obj', function (object) {

		object.position.x = 0.548;
		object.position.z = 1.554;
		object.rotation.y = 0;

		doorTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/porteD.jpg');


		doorSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/porteS.jpg');


		doorNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/porteN.jpg');

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = door_material;
				child.material.map = doorTexture;
				child.material.specularMap = doorSpec;
				child.material.normalMap = doorNorm;

				child.material.shininess = 150;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);

			}
		});
		porte = object;
		porte.visible = true;

		domEvents.addEventListener(porte, 'click', function (event) {

			const animate4 = () => {

				if (porte.quaternion.angleTo(targetQuaternion2) > 0.05) {
					requestAnimationFrame(animate4);
				}
				porte.quaternion.slerp(targetQuaternion2, 0.2);
			}
			animate4();

			const audioLoader = new THREE.AudioLoader();
			audioLoader.load('/static/3D/assets/sounds/knock.wav', function (buffer) {
				sound.setBuffer(buffer);
				sound.setLoop(false);
				sound.setVolume(0.3);
				sound.playbackRate = 0.5;
				sound.play();
			});
		}, false)

		domEvents.addEventListener(porte, 'dblclick', function (event) {

			const animate3 = () => {

				if (porte.quaternion.angleTo(targetQuaternion) > 0.05) {
					requestAnimationFrame(animate3);
				}
				porte.quaternion.slerp(targetQuaternion, 0.05);
			}
			animate3();

			const audioLoader5 = new THREE.AudioLoader();
			audioLoader5.load('/static/3D/assets/sounds/porte2.mp3', function (buffer) {
				sound5.setBuffer(buffer);
				sound5.setLoop(false);
				sound5.setVolume(0.5);
				sound5.play();
			});

		}, false)

		const group4 = new THREE.Group();
		group4.add(bati);
		group4.add(seuil);
		group4.add(porte);
		group4.add(sonnette);
		scene.add(group4);
		group4.visible = true;
	});

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

cube.scale.x = 0.1;
cube.scale.y = 0.1;
cube.scale.z = 0.1;

cube.position.z = -4;
cube.position.y = 1;
cube.position.x = 0.4;

scene.add(cube);

cube.visible = false;

loader.load(
	'/static/3D/assets/obj/escalier.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		stairsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/escalierD.jpg');
		stairsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/escalierS.jpg');
		stairsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/escalierN.jpg');


		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = stairs_material;
				child.material.map = stairsTexture;
				child.material.specularMap = stairsSpec;
				child.material.normalMap = stairsNorm;

				child.material.shininess = 200;
				child.material.normalScale = new THREE.Vector2(0.1, 0.1);
			}
		});

		escalier = object;
		scene.add(escalier);
		escalier.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/charpente.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 20;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		charpente = object;
		scene.add(charpente);
		charpente.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/chevrons.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 20;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		chevrons = object;
		scene.add(chevrons);
		chevrons.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/liteaux.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 20;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		liteaux = object;
		scene.add(liteaux);
		liteaux.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/tuiles-low.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		tuilesTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/tuilesD.jpg');
		tuilesTexture.wrapS = tuilesTexture.wrapT = THREE.RepeatWrapping;
		tuilesTexture.repeat.set(10, 10);

		tuilesSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/tuilesS.jpg');
		tuilesSpec.wrapS = tuilesSpec.wrapT = THREE.RepeatWrapping;
		tuilesSpec.repeat.set(10, 10);

		tuilesNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/tuilesN.jpg');
		tuilesNorm.wrapS = tuilesNorm.wrapT = THREE.RepeatWrapping;
		tuilesNorm.repeat.set(10, 10);

		tuilesNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/tuilesN.jpg');
		tuilesNorm.wrapS = tuilesNorm.wrapT = THREE.RepeatWrapping;
		tuilesNorm.repeat.set(10, 10);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles2_material;
				child.material.map = tuilesTexture;
				child.material.roughnessMap = tuilesSpec;
				child.material.normalMap = tuilesNorm;

				child.material.side = THREE.DoubleSide;
				child.material.shininess = 20;
			}
		});

		tuilesL = object;
		scene.add(tuilesL);
		tuilesL.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/faitieres.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles_material;
			}
		});

		faitieres = object;
		scene.add(faitieres);
		faitieres.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/plafonds.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = plaf_material;
			}
		});

		plafonds = object;
		scene.add(plafonds);
		plafonds.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/plafonds2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = plaf_material;
			}
		});

		plafonds2 = object;
		scene.add(plafonds2);
		plafonds2.visible = true;
	});

// Isolation

loader.load(
	'/static/3D/assets/obj/iso.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		isolTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/cotonD.jpg');
		isolTexture.wrapS = isolTexture.wrapT = THREE.RepeatWrapping;
		isolTexture.repeat.set(10, 10);
		isolNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/cotonN.jpg');
		isolNorm.wrapS = isolNorm.wrapT = THREE.RepeatWrapping;
		isolNorm.repeat.set(10, 10);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = isol_material;

				child.material.map = isolTexture;
				child.material.normalMap = isolNorm;
				child.material.normalScale = new THREE.Vector2(1, 1);
			}
		});

		iso = object;
		scene.add(iso);
		iso.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/iso2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		isol2Texture = new THREE.TextureLoader().load('/static/3D/assets/textures/isoD.jpg');
		isol2Norm = new THREE.TextureLoader().load('/static/3D/assets/textures/isoN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = isol2_material;

				child.material.map = isol2Texture;
				child.material.normalMap = isol2Norm;
				child.material.normalScale = new THREE.Vector2(1, 1);
			}
		});

		iso2 = object;
		scene.add(iso2);
		iso2.visible = true;
	});

// fenêtres

// fenêtre 1

const Bati = new THREE.OBJLoader();
Bati.load(
	'/static/3D/assets/obj/fenetre/bati.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		bati1 = object;
		scene.add(bati1);
		bati1.visible = true;
	});

const Vantail1 = new THREE.OBJLoader();
Vantail1.load(
	'/static/3D/assets/obj/fenetre/vantail1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail1 = object;
		vantail1.visible = true;
	});

const Vantail2 = new THREE.OBJLoader();
Vantail2.load(
	'/static/3D/assets/obj/fenetre/vantail2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail2 = object;
		vantail2.visible = true;

		const group5 = new THREE.Group();

		group5.add(vantail1);
		group5.add(vitre1);

		group5.position.x = 4.096;
		group5.position.z = 1.605;

		const group6 = new THREE.Group();

		group6.add(vantail2);
		group6.add(vitre2);

		group6.position.x = 5.234;
		group6.position.z = 1.605;

		const group7 = new THREE.Group();
		group7.add(bati1);
		group7.add(group5);
		group7.add(group6);

		scene.add(group7);
		group7.visible = true;

		domEvents.addEventListener(group7, 'click', function (event) {

			const animate4 = () => {

				if (group5.quaternion.angleTo(targetQuaternion2) > 0.05) {
					requestAnimationFrame(animate4);
				}
				group5.quaternion.slerp(targetQuaternion2, 0.1);
				group6.quaternion.slerp(targetQuaternion2, 0.1);

			}
			animate4();

			const audioLoader = new THREE.AudioLoader();
			audioLoader.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound.setBuffer(buffer);
				sound.setLoop(false);
				sound.setVolume(0.5);
				sound.playbackRate = 1;
				sound.play();
			});

		}, false)

		domEvents.addEventListener(group7, 'dblclick', function (event) {

			const animate3 = () => {

				if (group5.quaternion.angleTo(targetQuaternion) < 3.10) {
					requestAnimationFrame(animate3);
				}
				group5.quaternion.slerp(targetQuaternion3, 0.05);
				group6.quaternion.slerp(targetQuaternion, 0.05);
			}
			animate3();

			const audioLoader2 = new THREE.AudioLoader();
			audioLoader2.load('/static/3D/assets/sounds/porte2.mp3', function (buffer) {
				sound2.setBuffer(buffer);
				sound2.setLoop(false);
				sound2.setVolume(0.5);
				sound2.playbackRate = 0.75;
				sound2.play();
			});
		}, false)
	});

const Vitre1 = new THREE.OBJLoader();
Vitre1.load(
	'/static/3D/assets/obj/fenetre/vitre1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		vitre1 = object;
		vitre1.visible = true;
	});

const Vitre2 = new THREE.OBJLoader();
Vitre2.load(
	'/static/3D/assets/obj/fenetre/vitre2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
			}
		});

		vitre2 = object;
		vitre2.visible = true;
	});

// volet 1

loader.load(
	'/static/3D/assets/obj/fenetre/volet1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet3 = object;
		volet3.visible = true;
		volet3.position.set(-5.285, 0, 4.79);
		volet3.rotation.y = 3.14;

	});

loader.load(
	'/static/3D/assets/obj/fenetre/volet2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet4 = object;
		volet4.visible = true;
		volet4.position.set(-4.042, 0, 4.79);
		volet4.rotation.y = -3.14;

		const group18 = new THREE.Group();
		group18.add(volet3);
		group18.add(volet4);
		scene.add(group18);

		group18.position.set(9.45, -0.08, -3);
		group18.scale.x = 1.025;
		group18.scale.y = 1.055,
			group18.scale.z = 1;

		domEvents.addEventListener(group18, 'click', function (event) {

			const animate4 = () => {

				if (volet3.quaternion.angleTo(targetQuaternion2) < 3.12) {
					requestAnimationFrame(animate4);
				}
				volet3.quaternion.slerp(targetQuaternion6, 0.05);
				volet4.quaternion.slerp(targetQuaternion7, 0.05);

			}
			animate4();

			const audioLoader6 = new THREE.AudioLoader();
			audioLoader6.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound6.setBuffer(buffer);
				sound6.setLoop(false);
				sound6.setVolume(0.4);
				sound6.playbackRate = 1;
				sound6.play();
			});
		}, false)

		domEvents.addEventListener(group18, 'dblclick', function (event) {

			const animate3 = () => {

				if (volet3.quaternion.angleTo(targetQuaternion6) < 3.13) {
					requestAnimationFrame(animate3);
				}
				volet3.quaternion.slerp(targetQuaternion5, 0.05);
				volet4.quaternion.slerp(targetQuaternion4, 0.05);
			}
			animate3();

			const audioLoader7 = new THREE.AudioLoader();
			audioLoader7.load('/static/3D/assets/sounds/volet1.mp3', function (buffer) {
				sound7.setBuffer(buffer);
				sound7.setLoop(false);
				sound7.setVolume(0.4);
				sound7.playbackRate = 1;
				sound7.play();
			});
		}, false)
	});

// fenêtre 2

const Bati2 = new THREE.OBJLoader();
Bati2.load(
	'/static/3D/assets/obj/fenetre/bati.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		bati2 = object;
		scene.add(bati2);
		bati2.visible = true;
	});

const Vantail3 = new THREE.OBJLoader();
Vantail3.load(
	'/static/3D/assets/obj/fenetre/vantail1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail3 = object;
		vantail3.visible = true;
	});

const Vantail4 = new THREE.OBJLoader();
Vantail4.load(
	'/static/3D/assets/obj/fenetre/vantail2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail4 = object;
		vantail4.visible = true;

		const group8 = new THREE.Group();

		group8.add(vantail3);
		group8.add(vitre3);

		group8.position.x = 4.096;
		group8.position.z = 1.605;

		const group9 = new THREE.Group();

		group9.add(vantail4);
		group9.add(vitre4);

		group9.position.x = 5.234;
		group9.position.z = 1.605;

		const group10 = new THREE.Group();
		group10.add(bati2);
		group10.add(group8);
		group10.add(group9);

		group10.position.x = -9.33;
		group10.position.z = 3;

		group10.visible = true;

		scene.add(group10);

		domEvents.addEventListener(group10, 'click', function (event) {

			const animate4 = () => {

				if (group8.quaternion.angleTo(targetQuaternion2) > 0.01) {
					requestAnimationFrame(animate4);
				}
				group8.quaternion.slerp(targetQuaternion2, 0.1);
				group9.quaternion.slerp(targetQuaternion2, 0.1);

			}
			animate4();

			const audioLoader = new THREE.AudioLoader();
			audioLoader.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound.setBuffer(buffer);
				sound.setLoop(false);
				sound.setVolume(0.5);
				sound.playbackRate = 1;
				sound.play();
			});

		}, false)

		domEvents.addEventListener(group10, 'dblclick', function (event) {

			const animate3 = () => {

				if (group8.quaternion.angleTo(targetQuaternion) < 3.10) {
					requestAnimationFrame(animate3);
				}
				group8.quaternion.slerp(targetQuaternion3, 0.05);
				group9.quaternion.slerp(targetQuaternion, 0.05);
			}
			animate3();

			const audioLoader2 = new THREE.AudioLoader();
			audioLoader2.load('/static/3D/assets/sounds/porte2.mp3', function (buffer) {
				sound2.setBuffer(buffer);
				sound2.setLoop(false);
				sound2.setVolume(0.5);
				sound2.playbackRate = 0.75;
				sound2.play();
			});
		}, false)
	});

const Vitre3 = new THREE.OBJLoader();
Vitre3.load(
	'/static/3D/assets/obj/fenetre/vitre1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		vitre3 = object;
		vitre3.visible = true;
	});

const Vitre4 = new THREE.OBJLoader();
Vitre4.load(
	'/static/3D/assets/obj/fenetre/vitre2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
			}
		});

		vitre4 = object;
		vitre4.visible = true;
	});

// volet 2

loader.load(
	'/static/3D/assets/obj/fenetre/volet1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet1 = object;
		volet1.visible = true;
		volet1.position.set(-5.285, 0, 4.79);
		volet1.rotation.y = 3.14;

	});

loader.load(
	'/static/3D/assets/obj/fenetre/volet2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet2 = object;
		volet2.visible = true;
		volet2.position.set(-4.042, 0, 4.79);
		volet2.rotation.y = -3.14;

		const group17 = new THREE.Group();
		group17.add(volet1);
		group17.add(volet2);
		scene.add(group17);

		domEvents.addEventListener(group17, 'click', function (event) {

			const animate4 = () => {

				if (volet1.quaternion.angleTo(targetQuaternion2) < 3.12) {
					requestAnimationFrame(animate4);
				}
				volet1.quaternion.slerp(targetQuaternion6, 0.05);
				volet2.quaternion.slerp(targetQuaternion7, 0.05);

			}
			animate4();

			const audioLoader6 = new THREE.AudioLoader();
			audioLoader6.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound6.setBuffer(buffer);
				sound6.setLoop(false);
				sound6.setVolume(0.4);
				sound6.playbackRate = 1;
				sound6.play();
			});
		}, false)

		domEvents.addEventListener(group17, 'dblclick', function (event) {

			const animate3 = () => {

				if (volet1.quaternion.angleTo(targetQuaternion6) < 3.13) {
					requestAnimationFrame(animate3);
				}
				volet1.quaternion.slerp(targetQuaternion5, 0.05);
				volet2.quaternion.slerp(targetQuaternion4, 0.05);
			}
			animate3();

			const audioLoader7 = new THREE.AudioLoader();
			audioLoader7.load('/static/3D/assets/sounds/volet1.mp3', function (buffer) {
				sound7.setBuffer(buffer);
				sound7.setLoop(false);
				sound7.setVolume(0.4);
				sound7.playbackRate = 1;
				sound7.play();
			});
		}, false)
	});

// fenêtre 3

const Bati3 = new THREE.OBJLoader();
Bati3.load(
	'/static/3D/assets/obj/fenetre/bati.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		bati3 = object;
		scene.add(bati3);
		bati3.visible = true;
	});

const Vantail5 = new THREE.OBJLoader();
Vantail5.load(
	'/static/3D/assets/obj/fenetre/vantail1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail5 = object;
		vantail5.visible = true;
	});

const Vantail6 = new THREE.OBJLoader();
Vantail6.load(
	'/static/3D/assets/obj/fenetre/vantail2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail6 = object;
		vantail6.visible = true;

		const group11 = new THREE.Group();

		group11.add(vantail5);
		group11.add(vitre5);

		group11.position.x = 4.096;
		group11.position.z = 1.605;

		const group12 = new THREE.Group();

		group12.add(vantail6);
		group12.add(vitre6);

		group12.position.x = 5.234;
		group12.position.z = 1.605;

		const group13 = new THREE.Group();
		group13.add(bati3);
		group13.add(group11);
		group13.add(group12);

		group13.position.z = -3;
		group13.rotation.y = 3.14;

		group13.visible = true;
		scene.add(group13);

		domEvents.addEventListener(group13, 'click', function (event) {

			const animate4 = () => {

				if (group12.quaternion.angleTo(targetQuaternion2) > 0.05) {
					requestAnimationFrame(animate4);
				}
				group11.quaternion.slerp(targetQuaternion2, 0.1);
				group12.quaternion.slerp(targetQuaternion2, 0.1);

			}
			animate4();

			const audioLoader = new THREE.AudioLoader();
			audioLoader.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound.setBuffer(buffer);
				sound.setLoop(false);
				sound.setVolume(0.5);
				sound.playbackRate = 1;
				sound.play();
			});

		}, false)

		domEvents.addEventListener(group13, 'dblclick', function (event) {

			const animate3 = () => {

				if (group12.quaternion.angleTo(targetQuaternion) > 0.14) {
					requestAnimationFrame(animate3);
				}
				group11.quaternion.slerp(targetQuaternion3, 0.05);
				group12.quaternion.slerp(targetQuaternion, 0.05);
			}
			animate3();

			const audioLoader2 = new THREE.AudioLoader();
			audioLoader2.load('/static/3D/assets/sounds/porte2.mp3', function (buffer) {
				sound2.setBuffer(buffer);
				sound2.setLoop(false);
				sound2.setVolume(0.5);
				sound2.playbackRate = 0.75;
				sound2.play();
			});
		}, false)
	});

const Vitre5 = new THREE.OBJLoader();
Vitre5.load(
	'/static/3D/assets/obj/fenetre/vitre1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		vitre5 = object;
		vitre5.visible = true;
	});

const Vitre6 = new THREE.OBJLoader();
Vitre6.load(
	'/static/3D/assets/obj/fenetre/vitre2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
			}
		});

		vitre6 = object;
		vitre6.visible = true;
	});

// volet 3

loader.load(
	'/static/3D/assets/obj/fenetre/volet4.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet5 = object;
		volet5.visible = true;
		volet5.position.set(-5.285, 0, 4.79);
		volet5.rotation.y = 3.14;

	});

loader.load(
	'/static/3D/assets/obj/fenetre/volet3.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet6 = object;
		volet6.visible = true;
		volet6.position.set(-4.042, 0, 4.79);
		volet6.rotation.y = -3.14;

		const group19 = new THREE.Group();
		group19.add(volet5);
		group19.add(volet6);
		scene.add(group19);
		group19.position.set(-0.005, 0, -9.6);
		//group19.rotation.y = 3.14;

		domEvents.addEventListener(group19, 'click', function (event) {

			const animate4 = () => {

				if (volet5.quaternion.angleTo(targetQuaternion2) < 3.12) {
					requestAnimationFrame(animate4);
				}
				volet5.quaternion.slerp(targetQuaternion6, 0.05);
				volet6.quaternion.slerp(targetQuaternion7, 0.05);

			}
			animate4();

			const audioLoader6 = new THREE.AudioLoader();
			audioLoader6.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound6.setBuffer(buffer);
				sound6.setLoop(false);
				sound6.setVolume(0.4);
				sound6.playbackRate = 1;
				sound6.play();
			});
		}, false)

		domEvents.addEventListener(group19, 'dblclick', function (event) {

			const animate3 = () => {

				if (volet5.quaternion.angleTo(targetQuaternion6) < 3.13) {
					requestAnimationFrame(animate3);
				}
				volet5.quaternion.slerp(targetQuaternion4, 0.05);
				volet6.quaternion.slerp(targetQuaternion5, 0.05);
			}
			animate3();

			const audioLoader7 = new THREE.AudioLoader();
			audioLoader7.load('/static/3D/assets/sounds/volet1.mp3', function (buffer) {
				sound7.setBuffer(buffer);
				sound7.setLoop(false);
				sound7.setVolume(0.4);
				sound7.playbackRate = 1;
				sound7.play();
			});
		}, false)
	});

// fenêtre 4

const Bati4 = new THREE.OBJLoader();
Bati4.load(
	'/static/3D/assets/obj/fenetre/bati.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		bati4 = object;
		scene.add(bati4);
		bati4.visible = true;
	});

const Vantail7 = new THREE.OBJLoader();
Vantail7.load(
	'/static/3D/assets/obj/fenetre/vantail1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail7 = object;
		vantail7.visible = true;
	});

const Vantail8 = new THREE.OBJLoader();
Vantail8.load(
	'/static/3D/assets/obj/fenetre/vantail2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		vantail8 = object;
		vantail8.visible = true;

		const group14 = new THREE.Group();

		group14.add(vantail7);
		group14.add(vitre7);

		group14.position.x = 4.096;
		group14.position.z = 1.605;

		const group15 = new THREE.Group();

		group15.add(vantail8);
		group15.add(vitre8);

		group15.position.x = 5.234;
		group15.position.z = 1.605;

		const group16 = new THREE.Group();
		group16.add(bati4);
		group16.add(group14);
		group16.add(group15);

		group16.position.z = -3;
		group16.position.x = 9.325;
		group16.rotation.y = 3.14;

		group16.visible = true;
		scene.add(group16);

		domEvents.addEventListener(group16, 'click', function (event) {

			const animate4 = () => {

				if (group14.quaternion.angleTo(targetQuaternion2) > 0.05) {
					requestAnimationFrame(animate4);
				}
				group14.quaternion.slerp(targetQuaternion2, 0.1);
				group15.quaternion.slerp(targetQuaternion2, 0.1);

			}
			animate4();

			const audioLoader = new THREE.AudioLoader();
			audioLoader.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound.setBuffer(buffer);
				sound.setLoop(false);
				sound.setVolume(0.5);
				sound.playbackRate = 1;
				sound.play();
			});

		}, false)

		domEvents.addEventListener(group16, 'dblclick', function (event) {

			const animate3 = () => {

				if (group14.quaternion.angleTo(targetQuaternion) < 3.14) {
					requestAnimationFrame(animate3);
				}
				group14.quaternion.slerp(targetQuaternion3, 0.05);
				group15.quaternion.slerp(targetQuaternion, 0.05);
			}
			animate3();

			const audioLoader2 = new THREE.AudioLoader();
			audioLoader2.load('/static/3D/assets/sounds/porte2.mp3', function (buffer) {
				sound2.setBuffer(buffer);
				sound2.setLoop(false);
				sound2.setVolume(0.5);
				sound2.playbackRate = 0.75;
				sound2.play();
			});
		}, false)
	});

const Vitre7 = new THREE.OBJLoader();
Vitre7.load(
	'/static/3D/assets/obj/fenetre/vitre1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		vitre7 = object;
		vitre7.visible = true;
	});

const Vitre8 = new THREE.OBJLoader();
Vitre8.load(
	'/static/3D/assets/obj/fenetre/vitre2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
			}
		});

		vitre8 = object;
		vitre8.visible = true;
	});

// volet 4

loader.load(
	'/static/3D/assets/obj/fenetre/volet4.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet7 = object;
		volet7.visible = true;
		volet7.position.set(-5.285, 0, 4.79);
		volet7.rotation.y = 3.14;

	});

loader.load(
	'/static/3D/assets/obj/fenetre/volet3.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		voletsTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsD.jpg');
		voletsSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsS.jpg');
		voletsNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/voletsN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = shutter_material;
				child.material.map = voletsTexture;
				child.material.specularMap = voletsSpec;
				child.material.normalMap = voletsNorm;

				child.material.shininess = 175;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		volet8 = object;
		volet8.visible = true;
		volet8.position.set(-4.042, 0, 4.79);
		volet8.rotation.y = -3.14;

		const group20 = new THREE.Group();
		group20.add(volet7);
		group20.add(volet8);
		scene.add(group20);

		group20.position.set(9.445, -0.08, -9.575);
		group20.scale.x = 1.025;
		group20.scale.y = 1.055,
			group20.scale.z = 1;

		domEvents.addEventListener(group20, 'click', function (event) {

			const animate4 = () => {

				if (volet7.quaternion.angleTo(targetQuaternion2) < 3.12) {
					requestAnimationFrame(animate4);
				}
				volet7.quaternion.slerp(targetQuaternion6, 0.05);
				volet8.quaternion.slerp(targetQuaternion7, 0.05);

			}
			animate4();

			const audioLoader6 = new THREE.AudioLoader();
			audioLoader6.load('/static/3D/assets/sounds/knock.mp3', function (buffer) {
				sound6.setBuffer(buffer);
				sound6.setLoop(false);
				sound6.setVolume(0.4);
				sound6.playbackRate = 1;
				sound6.play();
			});
		}, false)

		domEvents.addEventListener(group20, 'dblclick', function (event) {

			const animate3 = () => {

				if (volet7.quaternion.angleTo(targetQuaternion6) < 3.13) {
					requestAnimationFrame(animate3);
				}
				volet7.quaternion.slerp(targetQuaternion4, 0.05);
				volet8.quaternion.slerp(targetQuaternion5, 0.05);
			}
			animate3();

			const audioLoader7 = new THREE.AudioLoader();
			audioLoader7.load('/static/3D/assets/sounds/volet1.mp3', function (buffer) {
				sound7.setBuffer(buffer);
				sound7.setLoop(false);
				sound7.setVolume(0.4);
				sound7.playbackRate = 1;
				sound7.play();
			});
		}, false)
	});

// Lucarne 1

const Lcharpente1 = new THREE.OBJLoader();
Lcharpente1.load(
	'/static/3D/assets/obj/lucarnes/1/Lcharpente1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 30;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		Charpente1 = object;
		Charpente1.visible = true;
	});

const Lliteaux1 = new THREE.OBJLoader();
Lliteaux1.load(
	'/static/3D/assets/obj/lucarnes/1/Lliteaux1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 30;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		liteaux1 = object;
		liteaux1.visible = true;
	});

const Ltuiles1 = new THREE.OBJLoader();
Ltuiles1.load(
	'/static/3D/assets/obj/lucarnes/1/Ltuiles1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles_material;
			}
		});

		tuiles1 = object;
		tuiles1.visible = true;

		const group = new THREE.Group();
		group.add(Charpente1);
		group.add(liteaux1);
		group.add(tuiles1);
		group.add(faitieres1);
		group.add(joues1);
		group.add(noues1);
		group.add(ciment1);
		group.add(fenetre1);
		scene.add(group);

		objects.push(group);
		group.visible = true;
	});

const Lfaitieres1 = new THREE.OBJLoader();
Lfaitieres1.load(
	'/static/3D/assets/obj/lucarnes/1/Lfaitieres1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles_material;
			}
		});

		faitieres1 = object;
		faitieres1.visible = true;
	});

const Ljoues1 = new THREE.OBJLoader();
Ljoues1.load(
	'/static/3D/assets/obj/lucarnes/1/Ljoues1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = house_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		joues1 = object;
		joues1.visible = true;
	});

const Lnoues1 = new THREE.OBJLoader();
Lnoues1.load(
	'/static/3D/assets/obj/lucarnes/1/Lnoues1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		noues1 = object;
		noues1.visible = true;
	});

const Lciment1 = new THREE.OBJLoader();
Lciment1.load(
	'/static/3D/assets/obj/lucarnes/1/Lciment1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		const cement_material = new THREE.MeshStandardMaterial({ color: 0xababab });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = cement_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		ciment1 = object;
		ciment1.visible = true;
	});

const Lfenetre1 = new THREE.OBJLoader();
Lfenetre1.load(
	'/static/3D/assets/obj/lucarnes/1/Lfenetre1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		fenetre1 = object;
		fenetre1.visible = true;
	});

// Lucarne 2

const Lcharpente2 = new THREE.OBJLoader();
Lcharpente2.load(
	'/static/3D/assets/obj/lucarnes/2/Lcharpente2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 30;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		Charpente2 = object;
		Charpente2.visible = true;
	});

const Lliteaux2 = new THREE.OBJLoader();
Lliteaux2.load(
	'/static/3D/assets/obj/lucarnes/2/Lliteaux2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		charpenteTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteD.jpg');
		charpenteSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteS.jpg');
		charpenteNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/charpenteN.jpg');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = charpente_material;
				child.material.map = charpenteTexture;
				child.material.roughnessMap = charpenteSpec;
				child.material.normalMap = charpenteNorm;

				child.material.shininess = 30;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		liteaux2 = object;
		liteaux2.visible = true;
	});

const Ltuiles2 = new THREE.OBJLoader();
Ltuiles2.load(
	'/static/3D/assets/obj/lucarnes/2/Ltuiles2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles_material;
			}
		});

		tuiles2 = object;
		tuiles2.visible = true;

		const group2 = new THREE.Group();
		group2.add(Charpente2);
		group2.add(liteaux2);
		group2.add(tuiles2);
		group2.add(faitieres2);
		group2.add(joues2);
		group2.add(noues2);
		group2.add(ciment2);
		group2.add(fenetre2);
		scene.add(group2);

		objects2.push(group2);
		group2.visible = true;
	});

const Lfaitieres2 = new THREE.OBJLoader();
Lfaitieres2.load(
	'/static/3D/assets/obj/lucarnes/2/Lfaitieres2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = tuiles_material;
			}
		});

		faitieres2 = object;
		faitieres2.visible = true;
	});

const Ljoues2 = new THREE.OBJLoader();
Ljoues2.load(
	'/static/3D/assets/obj/lucarnes/2/Ljoues2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = house_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		joues2 = object;
		joues2.visible = true;
	});

const Lnoues2 = new THREE.OBJLoader();
Lnoues2.load(
	'/static/3D/assets/obj/lucarnes/2/Lnoues2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		noues2 = object;
		noues2.visible = true;
	});

const Lciment2 = new THREE.OBJLoader();
Lciment2.load(
	'/static/3D/assets/obj/lucarnes/2/Lciment2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		const cement_material = new THREE.MeshStandardMaterial({ color: 0xababab });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = cement_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		ciment2 = object;
		ciment2.visible = true;
	});

const Lfenetre2 = new THREE.OBJLoader();
Lfenetre2.load(
	'/static/3D/assets/obj/lucarnes/2/Lfenetre2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		fenetre2 = object;
		fenetre2.visible = true;
	});

// Cheminée

const boisseau1 = new THREE.OBJLoader();
boisseau1.load(
	'/static/3D/assets/obj/cheminee/boisseau.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });
		house3Norm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		house3Norm.wrapS = house3Norm.wrapT = THREE.RepeatWrapping;
		house3Norm.repeat.set(8, 8);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = house3_material;

				child.material.normalMap = house3Norm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		boisseau = object;
		boisseau.visible = true;
	});

const chapeau1 = new THREE.OBJLoader();
chapeau1.load(
	'/static/3D/assets/obj/cheminee/chapeau.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		const cement_material = new THREE.MeshStandardMaterial({ color: 0x747474 });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = cement_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.35, 0.35);
			}
		});

		chapeau = object;
		chapeau.visible = true;

		const group3 = new THREE.Group();
		group3.add(boisseau);
		group3.add(chapeau);
		group3.add(solin);
		group3.add(bavette);

		scene.add(group3);
		objects3.push(group3);
		group3.visible = true;
	});

const bavette1 = new THREE.OBJLoader();
bavette1.load(
	'/static/3D/assets/obj/cheminee/bavette.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		bavette = object;
		bavette.visible = true;

	});

const solin1 = new THREE.OBJLoader();
solin1.load(
	'/static/3D/assets/obj/cheminee/solin.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		houseNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/houseN2.jpg');
		houseNorm.wrapS = houseNorm.wrapT = THREE.RepeatWrapping;
		houseNorm.repeat.set(3, 3);

		const cement_material = new THREE.MeshStandardMaterial({ color: 0x747474 });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = cement_material;

				child.material.normalMap = houseNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		solin = object;
		solin.visible = true;
	});

const Perg1 = new THREE.OBJLoader();
Perg1.load(
	'/static/3D/assets/obj/pergola.obj', function (object) {

		object.rotation.y = 1.57;
		object.position.z = -4.835;

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;
			}
		});

		pergola = object;
		scene.add(pergola);
		objects4.push(pergola);
		pergola.visible = true;
	});

// Pool

/* const waterGeometry = new THREE.CircleGeometry(2.6, 8);

water = new THREE.Water(waterGeometry, {
	color: params.color,
	scale: params.scale,
	flowDirection: new THREE.Vector2(params.flowX, params.flowY),
	textureWidth: 1024,
	textureHeight: 1024
});

water.position.y = 1;
water.rotation.z = 0.392699;
water.position.y = 1.1;
water.rotation.x = Math.PI * - 0.5;

const cyl_fog = new THREE.CylinderGeometry(0.5, 0.5, 0.85, 8);
const material2 = new THREE.RawShaderMaterial({
	glslVersion: THREE.GLSL3,
	uniforms: {
		base: { value: new THREE.Color(0x6699cc) },
		map: { value: texture },
		cameraPos: { value: new THREE.Vector3() },
		threshold: { value: 0.05 },
		opacity: { value: 0.005 },
		range: { value: 0.1 },
		steps: { value: 200 },
		frame: { value: 0 }
	},
	vertexShader,
	fragmentShader,
	side: THREE.DoubleSide,
	transparent: true,
});

cloud = new THREE.Mesh(cyl_fog, material2);
cloud.position.y += 0.58;
cloud.rotation.y = 0.392699;
cloud.scale.set(5, 1.2, 5);

loader.load(
	'/static/3D/assets/obj/pool/tarp2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		tarpTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/tarpD.jpg');
		tarpTexture.wrapS = tarpTexture.wrapT = THREE.RepeatWrapping;
		tarpTexture.repeat.set(4, 4);

		tarpNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/tarpN.jpg');
		tarpNorm.wrapS = tarpNorm.wrapT = THREE.RepeatWrapping;
		tarpNorm.repeat.set(4, 4);

		tarpSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/tarpS.jpg');
		tarpSpec.wrapS = tarpSpec.wrapT = THREE.RepeatWrapping;
		tarpSpec.repeat.set(4, 4);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {

				child.material = tarp_material;
				child.material.map = tarpTexture;
				child.material.roughnessMap = tarpSpec;
				child.material.normalMap = tarpNorm;
				child.material.envMapIntensity = 0.25;
				child.material.normalScale = new THREE.Vector2(2, 2);

				child.material.roughness = 0.75;
				child.material.ior = 1;
			}
		});

		tarp = object;
	});

loader.load(
	'/static/3D/assets/obj/pool/pool.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		poolTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolD.jpg');
		poolTexture.wrapS = poolTexture.wrapT = THREE.RepeatWrapping;
		poolTexture.repeat.set(5, 5);

		poolNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolN.jpg');
		poolNorm.wrapS = poolNorm.wrapT = THREE.RepeatWrapping;
		poolNorm.repeat.set(5, 5);

		poolSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolS.jpg');
		poolSpec.wrapS = poolSpec.wrapT = THREE.RepeatWrapping;
		poolSpec.repeat.set(5, 5);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {

				child.material = pwood_material;
				child.material.map = poolTexture;
				child.material.roughnessMap = poolSpec;
				child.material.normalMap = poolNorm;
				child.material.envMapIntensity = 0.25;
				child.material.side = THREE.DoubleSide;
				child.material.roughness = 0.8;
			}
		});

		pool = object;
	});

loader.load(
	'/static/3D/assets/obj/pool/ladder.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		ladderNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/ladderN.jpg');
		ladderNorm.wrapS = ladderNorm.wrapT = THREE.RepeatWrapping;
		ladderNorm.repeat.set(40, 40);

		ladderSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/ladderS.jpg');
		ladderSpec.wrapS = ladderSpec.wrapT = THREE.RepeatWrapping;
		ladderSpec.repeat.set(40, 40);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {

				child.material = steel_material;
				child.material.roughnessMap = ladderSpec;
				child.material.normalMap = ladderNorm;
				child.material.envMapIntensity = 0.5;

				child.material.roughness = 0.85;
				child.material.metalness = 0.95;
				child.material.reflectivity = 2.95;
			}
		});

		ladder = object;

		const Pool = new THREE.Group();
		pool.add(water);
		pool.add(tarp);
		Pool.add(pool);
		pool.add(ladder);
		pool.add(ladder2);
		pool.add(cloud);

		scene.add(Pool);

		pool.position.z -= 13;
		pool.position.y -= 0.035;
		pool.position.x += 6;
	});

loader.load(
	'/static/3D/assets/obj/pool/ladder2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		pool2Texture = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolD.jpg');
		pool2Texture.wrapS = pool2Texture.wrapT = THREE.RepeatWrapping;
		pool2Texture.repeat.set(2, 2);

		pool2Norm = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolN.jpg');
		pool2Norm.wrapS = pool2Norm.wrapT = THREE.RepeatWrapping;
		pool2Norm.repeat.set(2, 2);

		pool2Spec = new THREE.TextureLoader().load('/static/3D/assets/textures/pool/poolS.jpg');
		pool2Spec.wrapS = pool2Spec.wrapT = THREE.RepeatWrapping;
		pool2Spec.repeat.set(2, 2);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {

				child.material = pwood2_material;
				child.material.map = pool2Texture;
				child.material.roughnessMap = pool2Spec;
				child.material.normalMap = pool2Norm;
				child.material.envMapIntensity = 0.25;
				child.material.side = THREE.DoubleSide;

				child.material.roughness = 0.8;
			}
		});

		ladder2 = object;
	}); */

loader.load(
	'/static/3D/assets/obj/sol.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		floorTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/GrassD.jpg');
		floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
		floorTexture.repeat.set(10, 10);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = groundMaterial;
				child.material.map = floorTexture;

			}
		});

		sol = object;
		scene.add(sol);
		sol.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/mud.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		mudTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/mudD.jpg');
		mudTexture.wrapS = mudTexture.wrapT = THREE.RepeatWrapping;
		mudTexture.repeat.set(10, 10);

		mudNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/mudN.jpg');
		mudNorm.wrapS = mudNorm.wrapT = THREE.RepeatWrapping;
		mudNorm.repeat.set(10, 10);

		mudSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/mudD.jpg');
		mudSpec.wrapS = mudSpec.wrapT = THREE.RepeatWrapping;
		mudSpec.repeat.set(10, 10);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = mud_material;
				child.material.map = mudTexture;
				child.material.normalMap = mudNorm;
				child.material.roughnessMap = mudSpec;

				child.material.shininess = 50;

			}
		});

		mud = object;
		scene.add(mud);
		mud.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/path.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		gravelTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/gravelD.jpg');
		gravelTexture.wrapS = gravelTexture.wrapT = THREE.RepeatWrapping;
		gravelTexture.repeat.set(4, 4);

		gravelNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/gravelN.jpg');
		gravelNorm.wrapS = gravelNorm.wrapT = THREE.RepeatWrapping;
		gravelNorm.repeat.set(4, 4);

		gravelSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/gravelS.jpg');
		gravelSpec.wrapS = gravelSpec.wrapT = THREE.RepeatWrapping;
		gravelSpec.repeat.set(4, 4);

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = gravel_material;
				child.material.map = gravelTexture;
				child.material.normalMap = gravelNorm;
				child.material.roughnessMap = gravelSpec;

				child.material.shininess = 15;

			}
		});

		path = object;
		scene.add(path);
		path.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/hedges.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		hedgeTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/hedgeD.jpg');
		hedgeNorm = new THREE.TextureLoader().load('/static/3D/assets/textures/hedgeN.jpg');
		hedgeSpec = new THREE.TextureLoader().load('/static/3D/assets/textures/hedgeS.jpg');


		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = hedge_material;
				child.material.map = hedgeTexture;
				child.material.normalMap = hedgeNorm;
				child.material.roughnessMap = hedgeSpec;

				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
				child.material.shininess = 10;
			}
		});

		hedges = object;
		hedges.position.y -= 0.1;
		scene.add(hedges);
		hedges.visible = true;
	});

// Lights

scene.add(new THREE.AmbientLight(0xffffff, 0.15));

const light = new THREE.SpotLight(0xffffff, 1.8);
light.position.set(100, 100, 100);
light.castShadow = true;
light.angle = 2.5;

light.shadow.mapSize = new THREE.Vector2(2048, 2048);
light.shadow.camera.near = 15;
light.shadow.camera.far = 1000;
light.shadow.focus = 0.065;
light.shadow.radius = 1;
light.shadow.bias = 0.000001;
light.shadow.normalBias = 0.02;

scene.add(light);

const textureLoader = new THREE.TextureLoader();

const textureFlare0 = textureLoader.load("/static/3D/assets/textures/lensflare/lensflare0.png");
const textureFlare1 = textureLoader.load("/static/3D/assets/textures/lensflare/lensflare2.png");
const textureFlare2 = textureLoader.load("/static/3D/assets/textures/lensflare/lensflare3.png");

const lensflare = new THREE.Lensflare();

lensflare.addElement(new THREE.LensflareElement(textureFlare0, 1024, 0));
lensflare.addElement(new THREE.LensflareElement(textureFlare1, 1024, 0));
lensflare.addElement(new THREE.LensflareElement(textureFlare2, 120, 0.6));

light.add(lensflare);
lensflare.visible = true;

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.25);
directionalLight.position.y = 3;
directionalLight.position.x = -5;
directionalLight.position.z = -5;

scene.add(directionalLight);

// Lampes Rdc	

const bulbGeometry = new THREE.SphereBufferGeometry(0.02, 16, 8);

bulbLight = new THREE.PointLight(0xfbf2be, 3, 6, 2);

bulbMat = new THREE.MeshPhysicalMaterial({
	emissive: 0xfbf2be,
	emissiveIntensity: 10,
	color: 0xffffff,
	roughness: 0.2,
	transmission: 0.075,
	transparent: true,
	reflectivity: 0.5
});

loader.load(
	'/static/3D/assets/obj/lampe-bloc.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;

			}
		});

		lampe_bloc1 = object;
		scene.add(lampe_bloc1);
		lampe_bloc1.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/lampe-globe.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = bulbMat;

			}
		});

		lampe_globe1 = object;
		scene.add(lampe_globe1);
		lampe_globe1.visible = true;

		domEvents.addEventListener(lampe_globe1, 'click', function (event) {
			console.log('you clicked on the mesh')
			bulbMat.emissiveIntensity = 0.1;
			bulbLight.visible = false;
		}, false)

		domEvents.addEventListener(lampe_globe1, 'dblclick', function (event) {
			console.log('you clicked again on the mesh')
			bulbMat.emissiveIntensity = 10;
			bulbLight.visible = true;
		}, false)
	});

//bulbLight.add( new THREE.Mesh( bulbGeometry, bulbMat ) );
bulbLight.shadow.mapSize = new THREE.Vector2(2048, 2048);
bulbLight.position.set(-5, 3.2, 0);
bulbLight.castShadow = true;
bulbLight.physicallyCorrectLights = true;
bulbLight.shadow.camera.near = 0.1;
bulbLight.shadow.camera.far = 1000;
bulbLight.shadow.focus = 0.065;
bulbLight.shadow.radius = 1;
bulbLight.shadow.bias = 0.00001;
bulbLight.shadow.normalBias = 0.02;
scene.add(bulbLight);

bulbLight.visible = true;

// Lampe 2

bulbLight2 = new THREE.PointLight(0xfbf2be, 3, 6, 2);

bulbMat2 = new THREE.MeshPhysicalMaterial({
	emissive: 0xfbf2be,
	emissiveIntensity: 10,
	color: 0xffffff,
	roughness: 0.2,
	transmission: 0.075,
	transparent: true,
	reflectivity: 0.5
});

loader.load(
	'/static/3D/assets/obj/lampe-bloc2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = true; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = basic_material;

			}
		});

		lampe_bloc2 = object;
		scene.add(lampe_bloc2);
		lampe_bloc2.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/lampe-globe2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = true; });

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = bulbMat2;

			}
		});

		lampe_globe2 = object;
		scene.add(lampe_globe2);
		lampe_globe2.visible = true;

		domEvents.addEventListener(lampe_globe2, 'click', function (event) {
			console.log('you clicked on the mesh')
			bulbMat2.emissiveIntensity = 0.1;
			bulbLight2.visible = false;
		}, false)

		domEvents.addEventListener(lampe_globe2, 'dblclick', function (event) {
			console.log('you clicked again on the mesh')
			bulbMat2.emissiveIntensity = 10;
			bulbLight2.visible = true;
		}, false)
	});

bulbLight2.add(new THREE.Mesh(bulbGeometry, bulbMat2));
bulbLight2.shadow.mapSize = new THREE.Vector2(2048, 2048);
bulbLight2.position.set(3, 3.15, -1.5);
bulbLight2.castShadow = true;
bulbLight2.physicallyCorrectLights = true;
bulbLight2.shadow.camera.near = 0.1;
bulbLight2.shadow.camera.far = 1000;
bulbLight2.shadow.focus = 0.075;
bulbLight2.shadow.radius = 1;
bulbLight.shadow.bias = 0.00001;
bulbLight.shadow.normalBias = 0.02;
scene.add(bulbLight2);

bulbLight2.visible = true;

// Grid

const gridHelper = new THREE.GridHelper(20, 40, 0xf29131, 0xA9A9A9);
scene.add(gridHelper);
gridHelper.position.y -= 0.03;

// Floor

const ground = new THREE.PlaneGeometry(1000, 1000, 10, 10);

mesh = new THREE.Mesh(ground, groundMaterial2);
scene.add(mesh);

mesh.position.y -= 0.275;
mesh.rotateX(- Math.PI / 2);
mesh.receiveShadow = true;
mesh.castShadow = true;

domEvents.addEventListener(mesh, 'click', function (event) {

	const audioLoader4 = new THREE.AudioLoader();
	audioLoader4.load('/static/3D/assets/sounds/ground.wav', function (buffer) {
		sound4.setBuffer(buffer);
		sound4.setLoop(false);
		sound4.setVolume(0.3);
		sound4.playbackRate = 1;
		sound4.play();
	});
}, false)

// Sky

loader.load(
	'/static/3D/assets/obj/nuages1.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = false; });

		cloudTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/clouds.png');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = clouds_material;
				child.material.map = cloudTexture;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		nuages1 = object;
		nuages1.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/nuages2.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = false; });

		cloudTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/clouds.png');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = clouds_material;
				child.material.map = cloudTexture;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		nuages2 = object;
		nuages2.visible = true;
	});

loader.load(
	'/static/3D/assets/obj/nuages3.obj', function (object) {

		object.traverse(function (child) { child.castShadow = false; });
		object.traverse(function (child) { child.receiveShadow = false; });

		cloudTexture = new THREE.TextureLoader().load('/static/3D/assets/textures/clouds.png');

		object.traverse(function (child) {
			if (child instanceof THREE.Mesh) {
				child.material = clouds_material;
				child.material.map = cloudTexture;
				child.material.transparent = true;
				child.material.side = THREE.BackSide;
			}
		});

		nuages3 = object;
		nuages3.visible = true;

		group_nuages = new THREE.Group;
		group_nuages.add(nuages1);
		group_nuages.add(nuages2);
		group_nuages.add(nuages3);

		scene.add(group_nuages);
		group_nuages.scale.x = 0.7;
		group_nuages.scale.y = 0.5;
		group_nuages.scale.z = 0.7;
	});

// Skydome

const sky = new THREE.SphereGeometry(75, 32, 32);
skyMap = new THREE.TextureLoader().load('/static/3D/assets/textures/envmap.jpg');
const sphere = new THREE.Mesh(sky, sky_material);

sky_material.side = THREE.BackSide;
sky_material.map = skyMap;

sphere.position.y += 15;
sphere.visible = true;

scene.add(sphere);

// Rain

rainGeo = new THREE.Geometry();
for (let i = 0; i < rainCount; i++) {
	rainDrop = new THREE.Vector3(
		Math.random() * 400 - 200,
		Math.random() * 500 - 250,
		Math.random() * 400 - 200
	);
	rainDrop.velocity = {};
	rainDrop.velocity = 0;
	rainGeo.vertices.push(rainDrop);
}
alphaDrop = new THREE.TextureLoader().load('/static/3D/assets/textures/dropB.jpg')
rainMaterial = new THREE.PointsMaterial({

	color: 0x464646,
	size: 0.2,
	transparent: true,
	alphaMap: alphaDrop,
	sizeAttenuation: true,
	fog: false

});
rain = new THREE.Points(rainGeo, rainMaterial);
scene.add(rain);
rain.visible = false;

// PostProcessing

const width = window.innerWidth;
const height = window.innerHeight;

const composer = new THREE.EffectComposer(renderer);
composer.setSize(window.innerWidth, window.innerHeight);

const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

// SAO		

/*const saoPass = new THREE.SAOPass( scene, camera, width, height );
composer.addPass( saoPass );
	
saoPass.params = {
output: 0,
saoBias: 0.5,
saoIntensity: 0.58,
saoScale: 400,
saoKernelRadius: 100,
saoMinResolution: 0,
saoBlur: true,
saoBlurRadius: 8,
saoBlurStdDev: 4,
saoBlurDepthCutoff: 0.01
};*/

// BLOOM		

const paramsB = {
	exposure: 1,
	bloomStrength: 0.15,
	bloomThreshold: 0.99,
	bloomRadius: 0
};

const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = paramsB.bloomThreshold;
bloomPass.strength = paramsB.bloomStrength;
bloomPass.radius = paramsB.bloomRadius;

composer.addPass(bloomPass);

// SMAA

const pass = new THREE.SMAAPass(window.innerWidth * renderer.getPixelRatio(), window.innerHeight * renderer.getPixelRatio());
composer.addPass(pass);


// Controls		

const controls = new THREE.OrbitControls(camera, renderer.domElement);

//controls.maxPolarAngle = Math.PI / 2.25;
//controls.minPolarAngle = Math.PI / 5;
controls.enableDamping = true;
controls.enablePan = true;
controls.dampingFactor = 0.1;
controls.autoRotate = false;
controls.autoRotateSpeed = 1;
controls.maxDistance = 60;
controls.minDistance = 3;
controls.zoomSpeed = 0.5;
controls.panSpeed = 0.5;
controls.rotateSpeed = 0.5;

const objects = [];

dragControls = new THREE.DragControls(objects, camera, renderer.domElement);
dragControls.transformGroup = true;

dragControls.addEventListener("hoveron", function () {
	controls.enabled = false;
	controls.autoRotate = false;
});
dragControls.addEventListener("hoveroff", function () {
	controls.enabled = true;
});
dragControls.addEventListener('dragstart', function (event) {
	controls.enabled = false;
	controls.touches.enabled = false;
	controls.autoRotate = false;
})
dragControls.addEventListener('dragend', function (event) {
	controls.enabled = true;
	controls.touches.enabled = true;
})
dragControls.addEventListener('drag', function (event) {
	event.object.position.z = 0;
})
dragControls.addEventListener('drag', function (event) {
	event.object.position.y = 0;
})

var min = new THREE.Vector3(-6, 0, 0);
var max = new THREE.Vector3(0.7, 0, 0);

dragControls.addEventListener('drag', function (event) {
	event.object.position.clamp(min, max);
})

const objects2 = [];

dragControls2 = new THREE.DragControls(objects2, camera, renderer.domElement);
dragControls2.transformGroup = true;

dragControls2.addEventListener("hoveron", function () {
	controls.enabled = false;
	controls.autoRotate = false;
});
dragControls2.addEventListener("hoveroff", function () {
	controls.enabled = true;
});
dragControls2.addEventListener('dragstart', function (event) {
	controls.enabled = false;
	controls.touches.enabled = false;
	controls.autoRotate = false;
})
dragControls2.addEventListener('dragend', function (event) {
	controls.enabled = true;
	controls.touches.enabled = true;
})
dragControls2.addEventListener('drag', function (event) {
	event.object.position.z = 0;
})
dragControls2.addEventListener('drag', function (event) {
	event.object.position.y = 0;
})

dragControls2.addEventListener('drag', function (event) {
	event.object.position.clamp(min, max);
})

const objects3 = [];

dragControls3 = new THREE.DragControls(objects3, camera, renderer.domElement);
dragControls3.transformGroup = true;

dragControls3.addEventListener("hoveron", function () {
	controls.enabled = false;
	controls.autoRotate = false;
});
dragControls3.addEventListener("hoveroff", function () {
	controls.enabled = true;
});
dragControls3.addEventListener('dragstart', function (event) {
	controls.enabled = false;
	controls.touches.enabled = false;
	controls.autoRotate = false;
})
dragControls3.addEventListener('dragend', function (event) {
	controls.enabled = true;
	controls.touches.enabled = true;
})
dragControls3.addEventListener('drag', function (event) {
	event.object.position.x = 0;
})
dragControls3.addEventListener('drag', function (event) {
	event.object.position.y = 0;
})

var min2 = new THREE.Vector3(0, 0, -0.45);
var max2 = new THREE.Vector3(0, 0, 8);

dragControls3.addEventListener('drag', function (event) {
	event.object.position.clamp(min2, max2);
})

const objects4 = [];

dragControls4 = new THREE.DragControls(objects4, camera, renderer.domElement);

dragControls4.addEventListener("hoveron", function () {
	controls.enabled = false;
	controls.autoRotate = false;
});
dragControls4.addEventListener("hoveroff", function () {
	controls.enabled = true;
});
dragControls4.addEventListener('dragstart', function (event) {
	controls.enabled = false;
	controls.touches.enabled = false;
	controls.autoRotate = false;
})
dragControls4.addEventListener('dragend', function (event) {
	controls.enabled = true;
	controls.touches.enabled = true;
})
dragControls4.addEventListener('drag', function (event) {
	event.object.position.x = 0;
})
dragControls4.addEventListener('drag', function (event) {
	event.object.position.y = 0;
})

var min3 = new THREE.Vector3(0, 0, -4.5);
var max3 = new THREE.Vector3(0, 0, 4.5);

dragControls4.addEventListener('drag', function (event) {
	event.object.position.clamp(min3, max3);
})

// Animation & render

function animate() {

	renderer.render(scene, camera); // PostProcessing OFF
	//composer.render(scene, camera); // PostProcessing ON  

	renderer.setPixelRatio(window.devicePixelRatio);
	//composer.setPixelRatio(window.devicePixelRatio);

	requestAnimationFrame(animate);

	/*nuages1.rotation.y += 0.0005;
	nuages2.rotation.y -= 0.0005;
	nuages3.rotation.y += 0.0005;*/

	rainGeo.vertices.forEach(p => {
		p.velocity -= 0.0001 + Math.random() * 0.01;
		p.y += p.velocity;
		if (p.y < -200) {
			p.y = 200;
			p.velocity = 0;
		}
	});
	rainGeo.verticesNeedUpdate = true;
	rain.rotation.y += 0.002;

	controls.update();

	if (resizeRendererToDisplaySize(renderer, composer)) {
		const canvas = renderer.domElement;
		camera.aspect = canvas.clientWidth / canvas.clientHeight;
		camera.updateProjectionMatrix();
	}

}

animate();

function resizeRendererToDisplaySize(renderer, composer) {
	const canvas = renderer.domElement;
	var width = window.innerWidth;
	var height = window.innerHeight;
	var canvasPixelWidth = canvas.width / window.devicePixelRatio;
	var canvasPixelHeight = canvas.height / window.devicePixelRatio;

	const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
	if (needResize) {

		renderer.setSize(width, height, true);
	}
	return needResize;
}

function onTransitionEnd(event) {

	const element = event.target;
	element.remove();

}