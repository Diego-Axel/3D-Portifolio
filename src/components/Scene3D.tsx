import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ScrollControls, useScroll, Float, MeshTransmissionMaterial, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

// --- Geometrias Orgânicas usando Float & Parallax de Scroll ---

/**
 * Componente de Cubo Flutuante.
 * Move-se verticalmente com base no scroll e rotaciona continuamente.
 */
function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      // Offset de scroll multiplicado para efeito de parallax
      const scrollOffset = scroll.offset * 8;
      meshRef.current.position.y = initialY + scrollOffset;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={2} speed={1.5}>
      <mesh ref={meshRef} position={position} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#00ff88" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
}

/**
 * Componente de Esfera Flutuante.
 * Reage ao scroll com um movimento vertical suave.
 */
function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      const scrollOffset = scroll.offset * 12;
      meshRef.current.position.y = initialY + scrollOffset;
    }
  });

  return (
    <Float floatIntensity={1.5} rotationIntensity={1} speed={2}>
      <mesh ref={meshRef} position={position} castShadow>
        {/* Otimizado: Reduzido segmentos de 64 para 32 para ganho de FPS */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#0088ff" roughness={0.2} metalness={0.9} />
      </mesh>
    </Float>
  );
}

/**
 * Componente de Torus (Rosca) Flutuante.
 * Possui um material emissivo que brilha.
 */
function FloatingTorus({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      const scrollOffset = scroll.offset * 15;
      meshRef.current.position.y = initialY + scrollOffset;
    }
  });

  return (
    <Float floatIntensity={3} rotationIntensity={3} speed={1}>
      <mesh ref={meshRef} position={position} castShadow>
        {/* Otimizado: Reduzido segmentos de 100 para 48 */}
        <torusGeometry args={[1, 0.4, 16, 48]} />
        <meshBasicMaterial color={[2, 0, 2]} toneMapped={false} />
      </mesh>
    </Float>
  );
}

/**
 * Componente de Dodecaedro de Vidro.
 * Utiliza MeshTransmissionMaterial para efeito de refração realista.
 */
function GlassDodecahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      const scrollOffset = scroll.offset * 6;
      meshRef.current.position.y = initialY + scrollOffset;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float floatIntensity={1} rotationIntensity={2} speed={1.2}>
      <mesh ref={meshRef} position={position} castShadow>
        <dodecahedronGeometry args={[1.2, 0]} />
        {/* Vidro Otimizado + Aberração Cromática Restaurada */}
        <MeshTransmissionMaterial 
          backside 
          samples={2} 
          resolution={128}
          thickness={0.5} 
          chromaticAberration={1}
          anisotropy={0.1} 
          distortion={0.2} 
          distortionScale={0.2} 
          temporalDistortion={0.0} 
          iridescence={0}
          clearcoat={0.5}
          color="#ffaa00"
        />
      </mesh>
    </Float>
  );
}

/**
 * Componente de Icosaedro de Vidro.
 * Efeito de vidro ciano com refração leve.
 */
function GlassIcosahedron({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];
  const scroll = useScroll();

  useFrame(() => {
    if (meshRef.current) {
      const scrollOffset = scroll.offset * 10;
      meshRef.current.position.y = initialY + scrollOffset;
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={4} speed={2}>
      <mesh ref={meshRef} position={position} castShadow>
        <icosahedronGeometry args={[0.9, 0]} />
        {/* Aberração Cromática Restaurada */}
        <MeshTransmissionMaterial 
          backside 
          samples={2} 
          resolution={128}
          thickness={0.2} 
          chromaticAberration={0.5}
          color="#00ffff"
          clearcoat={0.5}
        />
      </mesh>
    </Float>
  );
}

// --- Interação Dinâmica de Câmera e Mouse ---

/**
 * Gerencia a posição da câmera com base no scroll e na posição do mouse.
 * Cria um efeito de profundidade e interatividade.
 */
function InteractiveCameraRig() {
  const scroll = useScroll();
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();
  
  useFrame(() => {
    const scrollOffset = scroll.offset * 2;
    // Interpola a posição da câmera para os movimentos serem suaves (lerp)
    vec.set(pointer.x * 2, -scrollOffset + (pointer.y * 2), 5);
    camera.position.lerp(vec, 0.05);
    camera.lookAt(0, -scrollOffset, 0);
  });
  return null;
}

// --- Assembleia da Cena Principal ---

/**
 * Componente principal da cena 3D.
 * Configura o Canvas do Three.js, luzes, controles de scroll e efeitos de pós-processamento.
 */
export function Scene3D() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        shadows={true} // Sombras realistas habilitadas
        dpr={[1, 1.5]} 
        scene={{ background: new THREE.Color('#040814'), fog: new THREE.Fog('#040814', 5, 20) }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        {/* Ambiente de iluminação urbana para reflexos melhores */}
        <Environment preset="city" />
        
        {/* Gerenciador de scroll com 3 páginas de altura */}
        <ScrollControls pages={3} damping={0.1}>
          <ambientLight intensity={0.2} />
          
          {/* Luzes direcionais coloridas para estética neon */}
          <directionalLight position={[10, 10, 10]} intensity={2} color="#00ff88" castShadow />
          <directionalLight position={[-10, -10, -10]} intensity={2} color="#0088ff" />
          <spotLight position={[0, -5, 5]} intensity={5} color="#ff00ff" penumbra={1} />

          {/* Controle dinâmico da câmera */}
          <InteractiveCameraRig />

          {/* Elementos geométricos distribuídos na cena */}
          <FloatingCube position={[-3, 2, -2]} />
          <FloatingSphere position={[3, 1, -1]} />
          <FloatingTorus position={[0, -2, -3]} />
          
          <GlassDodecahedron position={[-1.5, -1, 1]} />
          <GlassIcosahedron position={[1.5, 0, 2]} />
          
        </ScrollControls>

        {/* Efeito de Bloom para brilho neon intenso */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur={true} intensity={1.5} />
        </EffectComposer>
        
      </Canvas>
    </div>
  );
}

