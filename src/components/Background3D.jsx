import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera } from '@react-three/drei';

function AnimatedStars() {
    const ref = useRef();
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Stars ref={ref} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
}

const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            backgroundColor: '#0f172a', // Dark background for stars
        }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <AnimatedStars />
                </Float>
            </Canvas>
        </div>
    );
};

export default Background3D;
