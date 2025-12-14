
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clapperboard, Camera, PenTool, Rocket, Megaphone, Video, ArrowRight, Zap } from 'lucide-react';
import ClientCarousel from '@/components/shared/client-carousel';
import Reveal from '@/components/shared/reveal';
import AutoAnimatedIcon from '@/components/shared/auto-animated-icon';
import FloatingCube from '@/components/shared/floating-cube';
import Marquee from '@/components/ui/marquee';

const services = [
  { title: 'Videography', description: 'Compelling visual narratives that captivate and convert.', icon: Clapperboard },
  { title: 'Photography', description: 'High-impact imagery that defines your brand aesthetic.', icon: Camera },
  { title: 'Copywriting', description: 'Persuasive words that resonate and drive action.', icon: PenTool },
  { title: 'Strategy & Branding', description: 'Holistic roadmaps for sustainable growth and identity.', icon: Rocket },
  { title: 'Online Marketing', description: 'Data-driven campaigns to dominate your market.', icon: Megaphone },
];

export default function HomePage() {
  return (
    <>
      {/* Creative Homepage Hero */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-background">
        {/* Dynamic Background Marquee */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full -z-10 opacity-[0.03] rotate-[-5deg] scale-110 pointer-events-none">
             <Marquee duration="40s">
                 <span className="text-[20vh] font-black font-headline uppercase mx-4">CREATE</span>
                 <span className="text-[20vh] font-black font-headline uppercase mx-4 text-stroke">INSPIRE</span>
                 <span className="text-[20vh] font-black font-headline uppercase mx-4">DISRUPT</span>
                 <span className="text-[20vh] font-black font-headline uppercase mx-4 text-stroke">GROW</span>
             </Marquee>
        </div>

        <div className="container relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Redefining Digital Experiences</span>
                    </div>
                    <h1 className="text-7xl sm:text-7xl md:text-8xl font-bold font-headline leading-[0.85] tracking-tighter mb-8">
                        Reflection of your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-600">THOUGHTS.</span>
                    </h1>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                        We are <b>Odd Studio</b>. We blend creative rebellion with strategic precision to build brands that dominate culture.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <Button asChild size="lg" className="text-lg px-10 h-16 rounded-full shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                            <Link href="/portfolio">View Selected Work</Link>
                        </Button>
                        <Button asChild size="lg" variant="ghost" className="text-lg px-8 h-16 rounded-full hover:bg-secondary/50 transition-all border-2 border-transparent hover:border-border">
                            <Link href="/contact">Book a Service</Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
            
             <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end relative h-[400px] lg:h-auto">
                 <div className="relative w-full h-full flex items-center justify-center">
                    <FloatingCube />
                    {/* Glowing backing */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-[80px] -z-10" />
                 </div>
            </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </section>

      <Reveal>
        <ClientCarousel />
      </Reveal>

      {/* Brutalist Services Section */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <div className="container">
          <Reveal className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h2 className="text-5xl md:text-7xl font-bold font-headline leading-none tracking-tight">
                  OUR <span className="text-primary">CRAFT</span>
                </h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-md">We don't do "everything". We do these things exceptionally well.</p>
            </div>
            <Button variant="link" asChild className="text-primary text-xl p-0 h-auto underline decoration-2 underline-offset-8 hover:text-foreground transition-colors">
                <Link href="/services">Explore All Services</Link>
            </Button>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={0.1 * i} className="h-full">
                <Link href="/services" className="block h-full group">
                    <Card className="h-full bg-card border-2 border-transparent hover:border-primary group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden shadow-sm hover:shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] -mr-8 -mt-8 transition-transform group-hover:scale-125 group-hover:bg-primary/10" />
                        
                        <div className="p-10 flex flex-col h-full relative z-10">
                            <service.icon className="w-12 h-12 text-primary mb-8 stroke-1" />
                            <CardTitle className="font-headline text-3xl mb-4">{service.title}</CardTitle>
                            <p className="text-muted-foreground leading-relaxed flex-grow text-lg">
                                {service.description}
                            </p>
                            <div className="mt-8 flex items-center text-sm font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                                View Details
                            </div>
                        </div>
                    </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Odd Section */}
      <section className="container py-32">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
                <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-50" />
                    
                    <AutoAnimatedIcon>
                        <Video className="w-32 h-32 md:w-48 md:h-48 text-background/80" strokeWidth={0.5} />
                    </AutoAnimatedIcon>
                    <div className="mt-12 relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold font-headline mb-2">Visual Alchemists</h3>
                        <p className="text-background/70 text-lg">Turning complex ideas into pure visual gold.</p>
                    </div>
                </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-bold font-headline mb-10 leading-[0.9]">
                THE <span className="text-primary outline-text-thick">ODD</span> WAY
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light">
                We don't follow trends; we set them. Our approach combines data-driven insights with raw creative power to deliver results that matter.
              </p>
              
              <div className="space-y-8">
                {[
                    { title: "Strategy First", desc: "We diagnose before we prescribe. Every pixel has a purpose." },
                    { title: "Radical Transparency", desc: "No hidden fees, no jargon. Just clear, honest communication." },
                    { title: "Obsessive Quality", desc: "Good enough is not in our vocabulary. We aim for perfection." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-6 group border-b border-border/50 pb-8 last:border-0">
                        <div className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all shrink-0 shadow-lg shadow-primary/5">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-2xl font-headline mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-muted-foreground text-lg">{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>
      
      {/* Creative CTA */}
      <section className="py-40 bg-foreground text-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>
            <div className="container relative z-10 text-center">
                <Reveal>
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-headline mb-10 tracking-tighter leading-none">
                        LET'S GET <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">LOUD</span>
                    </h2>
                    <p className="text-xl md:text-3xl opacity-80 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
                        Silence is safe, but loud is legendary. Ready to make some noise in your industry?
                    </p>
                    <Button asChild size="lg" className="bg-background text-foreground hover:bg-primary hover:text-white font-bold h-24 px-16 text-2xl rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(230,57,70,0.4)]">
                        <Link href="/contact">Ignite Your Brand</Link>
                    </Button>
                </Reveal>
            </div>
      </section>
    </>
  );
}
