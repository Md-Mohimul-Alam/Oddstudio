'use client';

import type { PortfolioItem } from '@/lib/portfolio-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Reveal from '@/components/shared/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Layers, ArrowUpRight } from 'lucide-react';
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PortfolioDetailProps {
    item: PortfolioItem;
}

export default function PortfolioDetail({ item }: PortfolioDetailProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
        {/* Immersive Hero Section with Parallax */}
        <div className="relative h-[70vh] lg:h-[85vh] w-full overflow-hidden bg-black" ref={ref}>
            <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
                 <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover opacity-80" 
                    priority
                    data-ai-hint={item.hint}
                />
                {/* Gradient overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            </motion.div>
            
            <div className="absolute top-0 left-0 w-full p-6 z-20">
                 <Button variant="outline" size="sm" asChild className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black rounded-full transition-all border">
                    <Link href="/portfolio"><ArrowLeft className="mr-2 h-4 w-4" /> All Projects</Link>
                </Button>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
                <div className="container mx-auto">
                    <Reveal>
                        <div className="flex flex-wrap gap-3 mb-6">
                             <Badge variant="secondary" className="text-sm md:text-base py-1.5 px-5 bg-primary text-white hover:bg-primary/80 border-none rounded-full uppercase tracking-widest">{item.category}</Badge>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-headline text-white tracking-tighter mb-4 drop-shadow-2xl leading-[0.9]">
                            {item.title}
                        </h1>
                    </Reveal>
                </div>
            </div>
        </div>

        <div className="container mx-auto py-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Project Meta (Sticky Sidebar) */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32 space-y-12">
                        <Reveal delay={0.1}>
                            <div className="space-y-8 border-t-2 border-primary/20 pt-8">
                                <div className="group">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Client</h3>
                                    <p className="text-xl font-medium font-headline group-hover:text-primary transition-colors">{item.client}</p>
                                </div>
                                <div className="group">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> Year</h3>
                                    <p className="text-xl font-medium font-headline group-hover:text-primary transition-colors">{item.year}</p>
                                </div>
                                <div className="group">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 flex items-center gap-2"><Layers className="w-4 h-4 text-primary" /> Role</h3>
                                    <p className="text-xl font-medium font-headline group-hover:text-primary transition-colors">{item.category}, Creative Direction</p>
                                </div>
                            </div>
                        </Reveal>
                        
                        <Reveal delay={0.2}>
                            <Button size="lg" className="w-full rounded-full h-16 text-lg gap-2 shadow-xl hover:shadow-primary/25 transition-all bg-foreground text-background hover:bg-primary hover:text-white">
                                Visit Live Project <ArrowUpRight className="w-5 h-5" />
                            </Button>
                        </Reveal>
                    </div>
                </div>

                {/* Main Content Article */}
                <article className="lg:col-span-8">
                    <Reveal delay={0.3}>
                         <div className="prose prose-xl prose-gray dark:prose-invert max-w-none">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground mb-16 first-letter:text-7xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                                {item.description} This project represents a pivotal moment in brand storytelling, where we merged traditional aesthetics with modern digital interactivity.
                            </p>
                            
                            <div className="mb-16">
                                <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary block rounded-full"></span>
                                    The Challenge
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Every project starts with a unique set of challenges. For <span className="text-foreground font-medium">{item.title}</span>, we needed to push the boundaries of {item.category.toLowerCase()} to create something that truly stands out in a crowded market. The goal was not just to create, but to innovate and disrupt the current visual landscape.
                                </p>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-primary block rounded-full"></span>
                                    The Solution
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    We approached this project with a strategy-first mindset. By understanding the core audience and the brand's unique value proposition, we crafted a visual language that speaks volumes. Our team focused on high-fidelity visuals, seamless interactions, and a narrative-driven approach.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {item.video && (
                      <Reveal delay={0.4} className="my-20">
                         <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-card bg-black group">
                           <div className="absolute top-6 left-6 z-10 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide shadow-lg">
                                WATCH REEL
                           </div>
                           <div className="aspect-video">
                            <CldVideoPlayer
                                width="1920"
                                height="1080"
                                src={item.video}
                                colors={{
                                  accent: '#E63946',
                                  base: '#000000',
                                  text: '#FFFFFF'
                                }}
                                fontFace="Space Grotesk"
                            />
                           </div>
                        </div>
                      </Reveal>
                    )}
                    
                    {/* Staggered Image Grid */}
                    <Reveal delay={0.5}>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-20">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-lg group">
                                <Image 
                                    src={item.image} 
                                    alt="Detail shot 1" 
                                    fill 
                                    className="object-cover hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                                />
                                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-medium">Visual Detail 01</p>
                                </div>
                            </div>
                             <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary shadow-lg md:mt-20 group">
                                <Image 
                                    src={item.image} 
                                    alt="Detail shot 2" 
                                    fill 
                                    className="object-cover hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                                />
                                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                                    <p className="text-white font-medium">Visual Detail 02</p>
                                </div>
                            </div>
                         </div>
                    </Reveal>

                     <Reveal delay={0.6}>
                        <div className="bg-gradient-to-br from-secondary to-background p-10 md:p-16 rounded-[2.5rem] border border-border mt-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                            
                            <h3 className="text-3xl md:text-5xl font-bold font-headline mb-6">Ready to create impact?</h3>
                            <p className="text-muted-foreground text-xl mb-10 max-w-lg mx-auto">
                                Like what you see? Let's discuss how we can bring your vision to life with the same level of passion and precision.
                            </p>
                             <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                <Link href="/contact">Start Your Project</Link>
                            </Button>
                        </div>
                    </Reveal>
                </article>
            </div>
        </div>
    </div>
  );
}
