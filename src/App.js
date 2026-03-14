import { Canvas } from "@react-three/fiber";

function MemorySphere({ position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <MemorySphere position={[0, 0, 0]} />
      <MemorySphere position={[0, -5, -10]} />
      <MemorySphere position={[0, -10, -20]} />
    </Canvas>
  );
}