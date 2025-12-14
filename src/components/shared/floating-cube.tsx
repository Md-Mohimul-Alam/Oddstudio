'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function FloatingObject() {
  // Shared aesthetic styles for the wireframe elements
  const borderStyle = "absolute inset-0 border border-primary/60 bg-primary/5 backdrop-blur-[2px] shadow-[0_0_15px_rgba(230,57,70,0.1)] box-border";
  const circleStyle = "absolute border-2 border-primary/80 rounded-full bg-primary/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_rgba(230,57,70,0.3)]";

  return (
    // Responsive container size: smaller on mobile (300px), larger on desktop (500px)
    <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] relative flex items-center justify-center" style={{ perspective: '1500px' }}>
      <motion.div
        className="relative w-40 h-24"
        // Use a CSS variable or responsive class logic for scale if needed, 
        // but 'scale' in style applies to the element. 
        // We'll use a className to handle responsive scaling via Tailwind's arbitrary values or standard transforms.
        // Since framer-motion 'style' prop overrides class transforms for independent values, 
        // we can use a wrapper or media queries. 
        // Here, we'll stick to a safe base scale that works, or adjust the container's perspective origin.
        // Better yet, we use a responsive class for the scale transform.
        animate={{ 
            rotateX: [0, 360], 
            rotateY: [0, 360],
        }}
        transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
        }}
        // Mobile: scale-75 (0.75), Tablet: scale-100 (1.0), Desktop: scale-[2.2]
        // Note: We need to apply this scale to the *rendering* of the 3D object. 
        // Framer motion handles rotateX/Y. We can add scale to the style prop, 
        // but responsiveness is tricky in inline styles without window listeners.
        // A CSS class is the most robust way.
        className="preserve-3d scale-[0.8] sm:scale-125 lg:scale-[2.2]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* --- CAMERA BODY (Rectangular Prism) --- */}
        {/* Front Face */}
        <div className={cn(borderStyle, "w-40 h-24")} style={{ transform: 'translateZ(30px)' }}>
             {/* Lens Mount Detail */}
             <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        {/* Back Face */}
        <div className={cn(borderStyle, "w-40 h-24")} style={{ transform: 'rotateY(180deg) translateZ(30px)' }}>
            {/* Viewfinder Detail */}
            <div className="absolute top-2 right-2 w-8 h-6 border border-primary/50 bg-primary/10" />
        </div>
        {/* Right Face */}
        <div className={cn(borderStyle, "w-12 h-24")} style={{ transform: 'rotateY(90deg) translateZ(140px)', width: '60px', left: '-30px' }} />
        {/* Left Face */}
        <div className={cn(borderStyle, "w-12 h-24")} style={{ transform: 'rotateY(-90deg) translateZ(100px)', width: '60px', left: '130px' }} />
        {/* Top Face */}
        <div className={cn(borderStyle, "w-40 h-12")} style={{ transform: 'rotateX(90deg) translateZ(30px)', height: '60px', top: '-30px' }} />
        {/* Bottom Face */}
        <div className={cn(borderStyle, "w-40 h-12")} style={{ transform: 'rotateX(-90deg) translateZ(54px)', height: '60px', top: '54px' }} />


        {/* --- LENS ASSEMBLY (Floating Rings in Front) --- */}
        <div style={{ transformStyle: 'preserve-3d', transform: 'translateZ(40px)' }}>
            <div className={cn(circleStyle, "w-16 h-16 top-4 left-12")} style={{ transform: 'translateZ(10px)' }} />
            <div className={cn(circleStyle, "w-14 h-14 top-5 left-[52px]")} style={{ transform: 'translateZ(30px)' }} />
            <div className={cn(circleStyle, "w-12 h-12 top-6 left-[56px]")} style={{ transform: 'translateZ(50px)' }}>
                {/* Glass Reflection Element */}
                 <div className="w-8 h-8 bg-gradient-to-tr from-primary/40 to-transparent rounded-full blur-[2px]" />
            </div>
        </div>

        {/* --- FILM REELS (Floating on Top) --- */}
        <div style={{ transformStyle: 'preserve-3d', transform: 'translateY(-50px)' }}>
             {/* Left Reel */}
             <motion.div 
                className={cn(circleStyle, "w-20 h-20 -top-6 left-2")} 
                style={{ transform: 'rotateY(90deg)' }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-16 h-16 border border-dashed border-primary/50 rounded-full absolute" />
             </motion.div>
             
             {/* Right Reel */}
             <motion.div 
                className={cn(circleStyle, "w-20 h-20 -top-6 right-2")} 
                style={{ transform: 'rotateY(90deg)' }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-16 h-16 border border-dashed border-primary/50 rounded-full absolute" />
             </motion.div>
        </div>

        {/* --- GLOW CORE --- */}
        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-primary/5 blur-xl rounded-full" />
      </motion.div>
    </div>
  );
}
