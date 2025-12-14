import HeroSection from '@/components/shared/hero-section';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/shared/reveal';

const teamMembers = [
  { name: 'Johir Parves', role: 'Founder & CEO', image: 'https://placehold.co/400x400.png', hint: 'professional headshot' },
  { name: 'Jane Smith', role: 'Creative Director', image: 'https://placehold.co/400x400.png', hint: 'creative headshot' },
  { name: 'Sam Wilson', role: 'Lead Strategist', image: 'https://placehold.co/400x400.png', hint: 'corporate headshot' },
  { name: 'Emily White', role: 'Head of Production', image: 'https://placehold.co/400x400.png', hint: 'person smiling' },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title={
            <span className="block">
                WE ARE <br/>
                <span className="text-primary">ODD</span> STUDIO
            </span>
        }
        subtitle="We are creators, dreamers, and doers. A team obsessed with making the internet a more interesting place."
        className="bg-background"
        align="left"
        scrollingText="CREATIVE • BOLD • UNIQUE • "
        size="large"
      />
      
      <section className="container py-24 -mt-20 relative z-10">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
            <div className="lg:col-span-5 relative">
                 <div className="sticky top-32">
                    <h2 className="text-6xl md:text-8xl font-bold font-headline leading-[0.8] mb-8">
                        WHO <br/> WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">ARE</span>
                    </h2>
                    <div className="w-20 h-2 bg-primary rounded-full" />
                 </div>
            </div>
            <div className="lg:col-span-7">
                <div className="prose prose-xl prose-gray dark:prose-invert max-w-none">
                    <p className="text-2xl md:text-3xl leading-relaxed font-light text-foreground mb-10">
                    Odd Studio is a Dhaka, Bangladesh-based creative advertising agency dedicated to crafting bold, effective,
                    and memorable campaigns. 
                    </p>
                    <p className="text-xl text-muted-foreground mb-8">
                    From strategic media buying to full scale digital marketing, we deliver tailored solutions that connect brands with their audiences. Driven by insight and fueled by innovation, we help businesses stand out through impactful storytelling. 
                    </p>
                    <p className="text-xl text-muted-foreground">
                    Whether you're building a brand from the ground up or amplifying an existing voice, Odd Studio brings creative excellence to every project.
                    </p>
                </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
            <div className="grid md:grid-cols-2 gap-8 mb-32">
                <div className="bg-card border p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:rotate-12">
                        <Image src="/vision.png" alt="icon" width={150} height={150} className="grayscale" />
                    </div>
                    <h3 className="text-4xl font-bold font-headline mb-6">Our Vision</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        To capture the essence of life's moments, turning them into timeless visual stories that inspire, connect, and preserve memories for generations.
                    </p>
                </div>
                <div className="bg-card border p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:-rotate-12">
                        <Image src="/mission.png" alt="icon" width={150} height={150} className="grayscale" />
                    </div>
                    <h3 className="text-4xl font-bold font-headline mb-6">Our Mission</h3>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Provide exceptional marketing services that blend creativity, emotion, and authenticity. Collaborate with clients to bring their vision to brand.
                    </p>
                </div>
            </div>
        </Reveal>
      </section>

      <section className="py-32 bg-foreground text-background overflow-hidden relative">
         <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120%] h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />
        
        <div className="container relative z-10">
          <Reveal className="mb-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold font-headline">THE SQUAD</h2>
            <p className="text-2xl opacity-70 mt-4 font-light">The odd ones who make the magic happen.</p>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {teamMembers.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                    <div className="relative overflow-hidden rounded-full mx-auto mb-8 w-48 h-48 md:w-56 md:h-56 border-4 border-background/20 group-hover:border-primary transition-colors duration-300">
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            data-ai-hint={member.hint}
                        />
                    </div>
                    <h3 className="text-2xl font-bold font-headline">{member.name}</h3>
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mt-2">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
