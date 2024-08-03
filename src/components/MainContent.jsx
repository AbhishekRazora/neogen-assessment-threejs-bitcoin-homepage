
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three-stdlib';

function MainContent() {
  const mountRef = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true ,alpha:true});

    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const loader = new FBXLoader();
    loader.load('/coin.fbx', (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.material=child.material ||new THREE.MeshStandardMaterial();
        }
      })

      object.scale.set(0.7, 0.7, 0.7);
      object.position.set(0,-6,0);
      scene.add(object)


    

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        object.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();
    },
    (xhr)=>{
      console.log((xhr.loaded/xhr.total)*100 +'% loaded')
    },
    (error)=>{
      console.log("An error happened",error);
    }

  
  );

    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    const ambientLight=new THREE.AmbientLight(0xffffff,0.5);
    scene.add(ambientLight)

const resizeHandler=()=>{
  const width=mountRef.current.clientWidth;
  const height=mountRef.current.clientHeight;
  renderer.setSize(width,height);
  camera.aspect=width/height;
  camera.updateProjectionMatrix()
}
window.addEventListener('resize',resizeHandler)

    return () => {
      window.removeEventListener('resize',resizeHandler)
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <main className="bg-black text-white pt-10 flex h-screen  leading-6">
      <div className="w-1/2 space-y-8 text-center m-8">
        <h2 className="text-6xl font-bold tracking-wide">
          Improve your digital <br />
          <span className="text-yellow-500">coin </span> experience & <br />
          <span className="text-yellow-500">easyexchanges</span> with <br />
          easycoin
        </h2>
        <p className="text-gray-400 text-3xl pt-12 mb-5 font-bold">
          We get solutions for all your digital currency storage and exchange needs
        </p>
        <div className="space-x-4 mt-5">
          <button className="bg-gray-700 hover:bg-white text-white hover:text-black py-2 px-4 rounded">Exchange rate</button>
          <button className="bg-gray-700 hover:bg-white text-white hover:text-black py-2 px-4 rounded">Calculator</button>
          <button className="bg-gray-700 hover:bg-white text-white hover:text-black py-2 px-4 rounded">Alerts</button>
          <button className="bg-gray-700 hover:bg-white text-white hover:text-black py-2 px-4 rounded">Double exchange</button>
        </div>
      </div>
      <div className="w-1/2" ref={mountRef}></div>
    </main>
  );
}

export default MainContent;
