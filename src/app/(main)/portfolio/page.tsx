import HeroSection from '@/components/shared/hero-section';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/shared/reveal';
import { portfolioItems } from '@/lib/portfolio-data';
import { ArrowUpRight } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
      title={
        <span>
          SELECTED <span className="text-primary">WORKS</span>
        </span>
      }
        subtitle="A showcase of passion, precision, and creativity. Explore how we've helped brands tell their stories and achieve the extraordinary."
        className="bg-background"
        scrollingText="PORTFOLIO • CASES • WORK • "
        size="large"
      />
      
      <section className="container pb-32 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-24">
          {portfolioItems.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1} className={i % 2 !== 0 ? "md:mt-24" : ""}>
              <Link href={`/portfolio/${item.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-[2rem] mb-8 shadow-lg bg-secondary">
                    {/* Creative overlay on hover */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 z-10 transition-opacity duration-500 mix-blend-multiply" />
                    
                    <Image 
                        src={item.image} 
                        alt={item.title} 
                        width={1200} 
                        height={900} 
                        className="object-cover w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                        data-ai-hint={item.hint}
                    />
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                         <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <ArrowUpRight className="w-10 h-10 text-black" />
                         </div>
                    </div>
                </div>
                
                <div className="px-2">
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary border border-primary/30 px-3 py-1 rounded-full bg-primary/5">{item.category}</span>
                        <span className="h-px flex-grow bg-border group-hover:bg-primary/50 transition-colors" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold font-headline group-hover:text-primary transition-colors mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-lg line-clamp-2 max-w-md">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
