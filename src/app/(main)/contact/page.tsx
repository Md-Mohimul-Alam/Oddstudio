import HeroSection from '@/components/shared/hero-section';
import { ContactForm } from '@/components/contact/contact-form';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/shared/reveal';

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title={
            <span>
                LET'S <span className="text-primary">COLLABORATE</span>
            </span>
        }
        subtitle="Ready to start your next project? We're ready to listen. Drop us a line, and let's create something impactful together."
        className="bg-background"
        scrollingText="HELLO • HOLA • BONJOUR • "
        size="large"
      />
      
      <section className="container pb-24 -mt-20 relative z-10">
        <Reveal>
            <div className="grid lg:grid-cols-12 gap-0 bg-card border rounded-[2.5rem] overflow-hidden shadow-2xl">
                {/* Left Info Side */}
                <div className="lg:col-span-5 bg-foreground text-background p-10 md:p-16 flex flex-col justify-between relative overflow-hidden">
                    {/* Abstract Pattern */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border-[40px] border-white/20 blur-3xl" />
                        <div className="absolute -left-20 bottom-20 w-40 h-40 rounded-full bg-primary blur-2xl" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-headline mb-12">Get in Touch</h2>
                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Mail className="h-5 w-5" />
                                    <span className="text-sm uppercase tracking-widest">Email</span>
                                </div>
                                <p className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">contact@oddstudiovision.com</p>
                            </div>
                            
                            <div className="group">
                                <div className="flex items-center gap-4 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Phone className="h-5 w-5" />
                                    <span className="text-sm uppercase tracking-widest">Phone</span>
                                </div>
                                <p className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">+88 01984-597890</p>
                            </div>
                            
                             <div className="group">
                                <div className="flex items-center gap-4 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <MapPin className="h-5 w-5" />
                                    <span className="text-sm uppercase tracking-widest">Office</span>
                                </div>
                                <p className="text-xl font-bold leading-relaxed">Bashundhara R/A, Dhaka,<br/> Bangladesh, 1229</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 mt-12">
                         <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                            <Image 
                                src="/map.png" 
                                alt="Map to Odd Studio"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                                data-ai-hint="city map"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Form Side */}
                <div className="lg:col-span-7 p-10 md:p-16 bg-background flex flex-col justify-center">
                    <div className="max-w-lg mx-auto w-full">
                        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4">Send a Message</h2>
                        <p className="text-muted-foreground mb-12 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Reveal>
      </section>
    </>
  );
}
