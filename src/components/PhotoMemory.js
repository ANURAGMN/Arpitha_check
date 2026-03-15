import { useTexture } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PhotoMemory({ memory, position }) {

  const texture = useTexture(memory.image);
  const navigate = useNavigate();
  const ref = useRef();

  // floating animation
  useFrame(({ clock }) => {
    ref.current.position.y =
      position[1] + Math.sin(clock.elapsedTime) * 0.2;
  });

  return (

    <mesh
      ref={ref}
      position={position}
      onClick={() => navigate("/memory/" + memory.id)}
      onPointerOver={(e)=> e.object.scale.set(1.1,1.1,1)}
      onPointerOut={(e)=> e.object.scale.set(1,1,1)}
    >

      <planeGeometry args={[3.5, 2.3]} />

      <meshStandardMaterial
        map={texture}
        metalness={0.2}
        roughness={0.8}
      />

    </mesh>

  );
}