import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Box({ position, rotation, scale }: { position: [number, number, number], rotation: [number, number, number], scale: [number, number, number] }) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1
    mesh.current.rotation.y += delta * 0.15
  })

  return (
    <mesh position={position} rotation={rotation} scale={scale} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}

function Background() {
  const { camera } = useThree()
  const group = useRef<THREE.Group>(null!)

  useEffect(() => {
    if (group.current) {
      gsap.to(group.current.rotation, {
        y: Math.PI * 2,
        duration: 40,
        ease: 'none',
        repeat: -1,
      })

      gsap.to(camera.position, {
        z: 5,
        duration: 2,
        scrollTrigger: {
          trigger: '#content',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    }
  }, [camera])

  return (
    <group ref={group}>
      {Array.from({ length: 100 }).map((_, i) => (
        <Box 
          key={i} 
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ]}
          scale={[
            Math.random() * 0.5 + 0.1,
            Math.random() * 0.5 + 0.1,
            Math.random() * 0.5 + 0.1
          ]}
        />
      ))}
    </group>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Canvas className="fixed inset-0 z-0">
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Background />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <div id="content" className="relative z-10">
        {children}
      </div>
    </div>
  )
}

