'use client';

import HeroSection from '@/components/shared/hero-section';
import ServicesTabs from '@/components/services/services-tabs';
import Reveal from '@/components/shared/reveal';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title={
          <span>
            OUR <span className="text-primary">CRAFT</span>
          </span>
        }
        subtitle="We don't just provide services; we provide solutions. A comprehensive suite of creative and strategic tools designed to build, grow, and elevate your brand."
        className="bg-background"
        scrollingText="STRATEGY • CREATIVE • PRODUCTION • DIGITAL • "
        size="large"
      />
      
      {/* Floating decorative elements */}
      <div className="fixed top-1/3 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="fixed bottom-1/3 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <section className="container pb-32 -mt-20 relative z-20">
        <Reveal>
            <div className="relative bg-card/50 backdrop-blur-sm border rounded-3xl p-4 md:p-8 shadow-2xl">
                <ServicesTabs />
            </div>
        </Reveal>
      </section>
      
      <section className="py-32 bg-foreground text-background relative overflow-hidden">
         <div className="absolute -right-20 top-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="container text-center relative z-10">
            <Reveal>
                <h2 className="text-4xl md:text-6xl font-bold font-headline mb-8">Not seeing what you need?</h2>
                <p className="text-xl opacity-80 mb-12 max-w-2xl mx-auto font-light">
                    We customize our solutions to fit unique challenges. If you have a specific requirement, let's talk about it.
                </p>
                <motion.a 
                    href="/contact" 
                    className="inline-flex items-center gap-3 text-3xl font-bold hover:text-primary transition-colors group"
                    whileHover={{ x: 10 }}
                >
                    <span>Contact Custom Support</span>
                    <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </motion.a>
            </Reveal>
        </div>
      </section>
    </>
  );
}
