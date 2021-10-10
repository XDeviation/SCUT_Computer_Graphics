<template>
  <div>
    <button @click="randColor()">randColor</button>
    <div id="container"></div>
  </div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

let vertexShader = `
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); 
}
`;

let fragmentShader = `
uniform vec3 color; 
void main() {
    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}
`;

class CustomMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
      },
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
  }

  randColor() {
    var colorArray = new Float32Array([
      Math.random(),
      Math.random(),
      Math.random(),
    ]);
    this.uniforms.color.value.fromArray(colorArray);
  }

  update() {
    this.randColor();
  }
}

export default {
  data() {
    return {
      publicPath: "https://vr.josh.earth/assets/models/duck/duck.gltf",
      mesh: null,
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      material: new CustomMaterial(),
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.createScene();
      this.loadGLTF();
      this.createCamera();
      this.createRender();
      this.createControls();
      this.render();
    },

    randColor() {
      this.material.randColor();
    },

    createScene() {
      this.scene = new THREE.Scene();
    },

    loadGLTF() {
      const loader = new GLTFLoader();
      loader.load(`${this.publicPath}`, (gitf) => {
        let model = gitf.scene;
        model.traverse((obj) => {
          if (obj.isMesh) {
            obj.material = this.material;
          }
        });
        model.scale.set(20, 20, 20);
        this.scene.add(model);
      });
    },

    createLight() {
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
      this.scene.add(ambientLight);
      const spotLight = new THREE.SpotLight(0xffffff);
      spotLight.position.set(150, 150, 150);
      spotLight.castShadow = true;
      this.scene.add(spotLight);
    },

    createCamera() {
      const element = document.getElementById("container");
      const width = element.clientWidth;
      const height = element.clientHeight;
      const k = width / height;
      this.camera = new THREE.PerspectiveCamera(35, k, 0.1, 1000);
      this.camera.position.set(150, 150, 150);
      this.camera.lookAt(new THREE.Vector3(10, 40, 0));
      this.scene.add(this.camera);
    },

    createRender() {
      const element = document.getElementById("container");
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(element.clientWidth, element.clientHeight);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.setClearColor(0x3f3f3f, 1);
      element.appendChild(this.renderer.domElement);
    },

    render() {
      if (this.mesh) {
        this.mesh.rotation.z += 0.006;
      }
      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.render);
      //   this.material.update();
    },

    createControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },
  },
};
</script>
<style>
#container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>