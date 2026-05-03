"use client";

import { useState, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function VoxelRoom() {
  const { scene } = useGLTF("/kamar.glb");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { setCursor } = useThree((state) => ({ setCursor: (c: string) => state.gl.domElement.style.cursor = c }));

  // Debugging: Log ALL scene nodes to find the unwanted text
  useEffect(() => {
    console.log("--- FULL SCENE TRAVERSAL START ---");
    scene.traverse((child) => {
      console.log(`NAME: "${child.name}" | TYPE: ${child.type}`);
    });
    console.log("--- FULL SCENE TRAVERSAL END ---");
  }, [scene]);

  return (
    <group scale={0.4}>
      {/* Main Model */}
      <primitive object={scene} />

      {/* Hitbox 1: Desk / Monitor (Projects) - Centered */}
      <group position={[0, 1.5, -2]}>
        <mesh 
          onClick={(e) => { e.stopPropagation(); setActiveSection('projects'); }}
          onPointerOver={() => setCursor('pointer')}
          onPointerOut={() => setCursor('auto')}
        >
          <boxGeometry args={[4, 2, 2]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        {!activeSection && (
          <Html center distanceFactor={15}>
            <div 
              onClick={() => setActiveSection('projects')}
              className="bg-black/80 border-2 border-[#00d4ff] text-[#00d4ff] px-6 py-3 rounded-2xl text-4xl font-black uppercase tracking-widest animate-pulse whitespace-nowrap shadow-[0_0_30px_rgba(0,212,255,0.4)] backdrop-blur-md cursor-pointer"
            >
              PROJECTS
            </div>
          </Html>
        )}
      </group>

      {/* Hitbox 2: Bookshelf (Skills) - Moved MUCH further left */}
      <group position={[-12, 2.5, -4]}>
        <mesh 
          onClick={(e) => { e.stopPropagation(); setActiveSection('skills'); }}
          onPointerOver={() => setCursor('pointer')}
          onPointerOut={() => setCursor('auto')}
        >
          <boxGeometry args={[4, 4, 3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        {!activeSection && (
          <Html center distanceFactor={15}>
            <div 
              onClick={() => setActiveSection('skills')}
              className="bg-black/80 border-2 border-[#10b981] text-[#10b981] px-6 py-3 rounded-2xl text-4xl font-black uppercase tracking-widest animate-pulse whitespace-nowrap shadow-[0_0_30px_rgba(16,185,129,0.4)] backdrop-blur-md cursor-pointer"
            >
              SKILLS
            </div>
          </Html>
        )}
      </group>

      {/* Hitbox 3: Character (Contact) - Moved MUCH further right */}
      <group position={[12, 2, -4]}>
        <mesh 
          onClick={(e) => { e.stopPropagation(); setActiveSection('contact'); }}
          onPointerOver={() => setCursor('pointer')}
          onPointerOut={() => setCursor('auto')}
        >
          <boxGeometry args={[4, 4, 3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
        {!activeSection && (
          <Html center distanceFactor={15}>
            <div 
              onClick={() => setActiveSection('contact')}
              className="bg-black/80 border-2 border-[#7c6af7] text-[#7c6af7] px-6 py-3 rounded-2xl text-4xl font-black uppercase tracking-widest animate-pulse whitespace-nowrap shadow-[0_0_30px_rgba(124,106,247,0.4)] backdrop-blur-md cursor-pointer"
            >
              CONTACT
            </div>
          </Html>
        )}
      </group>

      {/* UI Overlay Card */}
      {activeSection && (
        <Html center position={[0, 6, 0]} distanceFactor={15} className="z-50">
          <div className="glass-card p-10 rounded-[2.5rem] border border-white/10 w-[32rem] shadow-2xl backdrop-blur-3xl bg-black/95 text-white relative">
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveSection(null); }}
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all text-xl"
            >
              ✕
            </button>
            
            {activeSection === 'projects' && (
              <div className="space-y-8">
                <h3 className="text-[#00d4ff] font-black text-4xl uppercase tracking-tighter">PROJECT_LOG</h3>
                <div className="space-y-4">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-xl font-bold">HOMI Residential App</p>
                    <p className="text-sm text-white/40 mt-1">Property management system.</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                    <p className="text-xl font-bold">PowerSync Platform</p>
                    <p className="text-sm text-white/40 mt-1">EV charging optimization.</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-8">
                <h3 className="text-[#10b981] font-black text-4xl uppercase tracking-tighter">TECH_STACK</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Kotlin", "Laravel", "MySQL", "Docker", "React", "Three.js"].map(skill => (
                    <span key={skill} className="px-4 py-3 bg-[#10b981]/10 border border-[#10b981]/20 rounded-2xl text-sm text-[#10b981] font-mono">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-8">
                <h3 className="text-[#7c6af7] font-black text-4xl uppercase tracking-tighter">CONNECTION</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase text-white/30 font-bold mb-2">Primary Node</p>
                    <p className="text-xl font-mono">hanipabyad79@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/30 font-bold mb-2">Git Repository</p>
                    <p className="text-xl font-mono">github.com/hanifabyad</p>
                  </div>
                </div>
                <a href="mailto:hanipabyad79@gmail.com" className="block w-full py-5 bg-[#7c6af7] text-black text-center rounded-2xl font-black text-sm uppercase tracking-widest mt-4">
                  Initialize Comm
                </a>
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}
