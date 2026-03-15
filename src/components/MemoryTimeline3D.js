import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PhotoMemory from "./PhotoMemory";

export default function MemoryTimeline3D({ memories }) {

  return (

    <div
      style={{
        height: "600px",
        width: "100%",
        background:
          "radial-gradient(circle at center, #1e293b, #020617)"
      }}
    >

      <Canvas camera={{ position: [0, 0, 12] }}>

        {/* lighting */}

        <ambientLight intensity={0.6} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
        />

        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
        />

        {/* render memories */}

        {memories.map((m, i) => (

          <PhotoMemory
            key={m.id}
            memory={m}
            position={[i * 4 - 6, -i * 2, -i * 5]}
          />

        ))}

        {/* camera controls */}

        <OrbitControls />

      </Canvas>

    </div>

  );

}