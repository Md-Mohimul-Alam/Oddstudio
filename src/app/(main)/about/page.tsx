import HeroSection from '@/components/shared/hero-section';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Reveal from '@/components/shared/reveal';


const teamMembers = [
  { 
    name: 'Aniqa Ana Pushan', 
    role: 'CEO', 
    image: '/profile/Aniqa.png',  // Use string path
    hint: 'corporate headshot' 
  },
  { 
    name: 'Mohammed Johirul Islam Perves Khan', 
    role: 'Creative Director', 
    image: '/profile/Johir.png',   // Use string path (note capital J)
    hint: 'creative headshot' 
  },
  { 
    name: 'Akber Hossain', 
    role: 'Business Development Executive', 
    image: '/profile/Akber.png',   // Use string path
    hint: 'professional headshot' 
  },
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
        subtitle="Every business has a story.
          Not every story is told with honesty and clarity.
          If you believe your product deserves to be understood, not just seen,
          we should talk.
          Let’s start with a conversation.
          "
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
                    <p className="text-xl text-justify md:text-xl leading-relaxed font-light text-foreground mb-6">
                      Hi there, so good to know that you wanted to learn about us. 
                    </p>
                    <p className="text-xl text-justify md:text-xl leading-relaxed font-light text-foreground mb-6">
                      We are a creative studio based in Dhaka driven by a bunch of storytellers. But what truly drives us is being dedicated listeners first, ensuring we understand your story before we craft it.
                    </p>
                    <p className="text-xl text-justify md:text-xl leading-relaxed font-light text-foreground mb-6">
                      We work with founders and entrepreneurs who believe one simple thing, “When people understand you clearly, they trust you”. 
                      And when they trust you, your business grows”. 
                    </p>
                    <p className="text-xl text-justify md:text-xl leading-relaxed font-light text-foreground mb-6">
                      We do not start with cameras, scripts, or campaigns. We start by understanding the problem your product solves and the people it exists for.
                      Over the last few years, we have worked across 20+ brands, multiple industries across both local and global markets, helping businesses communicate with honesty, purpose, and intent.
                      We believe stories are not decoration.
                      They are business tools.
                    </p>
                </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
            <div className="grid md:grid-cols-1 gap-8 mb-32">
                <div className="bg-card border p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:-rotate-12">
                        <Image src="/mission.png" alt="icon" width={150} height={150} className="grayscale" />
                    </div>
                    <h3 className="text-4xl font-bold font-headline mb-6">Wondering How We Are Different?</h3>
                    <p className="text-xl text-justify text-muted-foreground leading-relaxed">
                      Before we create a single video or post, we take time to truly understand you and your business.We ask simple but important questions:
                    </p>
                    <ul className="list-disc list-inside ml-2 pl-2 mt-4 text-xl text-justify text-muted-foreground leading-relaxed">
                      <li>What problem are you really solving !</li>
                      <li>Why should people care about it !</li>
                      <li>Where is trust missing in your communication !</li>
                    </ul>
                    <p className="text-xl text-justify text-muted-foreground leading-relaxed mt-6">
                      Only after we understand these do we start telling your story.
                      We don’t believe in creating content just to follow trends or fill social media calendars.
                      We believe in storytelling that feels human, honest, and clear.
                      That is why our work helps our clients:
                    </p>
                    <ul className="list-disc list-inside mt-4 ml-2 pl-2 text-xl text-justify text-muted-foreground leading-relaxed">
                      <li>Connect with the right audience, not just more people.</li>
                      <li>Be remembered, not just seen.</li>
                      <li>Build trust and credibility that lasts, instead of short term noise.</li>
                    </ul>
                    <p className="text-xl text-justify text-muted-foreground leading-relaxed mt-6">
                      At Odd Studio Vision, we don’t focus on how much content we produce.
                      We focus on what that content actually does for your business.
                      That is what makes us a little odd. And intentionally so.
                    </p>

                </div>
            </div>
        </Reveal>

        <Reveal>
            <div className="grid md:grid-cols-2 gap-8 mb-32">
              <div className="bg-card border p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:-rotate-12">
                        <Image src="/mission.png" alt="icon" width={150} height={150} className="grayscale" />
                    </div>
                    <p className="mb-6 text-2xl text-justify text-muted-foreground leading-relaxed">
                     We are on a<span className="text-4xl text-black font-bold font-headline mb-6"> MISSION!</span>
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        We turn real purpose into stories that build trust and drive meaningful growth.
                    </p>
                    <h4 className="text-2xl font-semibold font-headline mt-6 mb-4">What this means in practice</h4>
                    <ul className="list-disc list-inside ml-2 pl-2 mt-4 text-xl text-muted-foreground leading-relaxed">
                      <li>We simplify complex ideas so people can understand them easily.</li>
                      <li>We humanize products and services so they feel real, not salesy.</li>
                      <li>We help businesses clearly articulate their “why” before they scale.</li>
                    </ul>
                </div>
                <div className="bg-card border p-12 rounded-[2.5rem] relative overflow-hidden group hover:border-primary/50 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform group-hover:rotate-12">
                        <Image src="/vision.png" alt="icon" width={150} height={150} className="grayscale" />
                    </div>
                    <p className="mb-6 text-2xl text-justify text-muted-foreground leading-relaxed">
                      Responsibility, clarity and trust <span className="text-4xl text-black font-bold font-headline mb-6">OUR VISION!</span>
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      To capture the essence of life's moments, turning them into timeless visual stories that inspire, connect, and preserve memories for generations.
                    </p>
                    <h4 className="text-2xl font-semibold font-headline mt-6 mb-4">HOW WE WORK</h4>
                    <p className="text-xl text-muted-foreground leading-relaxed">Our process is intentionally simple and thoughtful.</p>
                    <h5 className="text-xl font-semibold font-headline mt-4 mb-2">Understand → Clarify → Create → Measure</h5>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      We understand your business, clarify your story, create with intention, and measure what actually builds trust.
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
            <p className="text-xl text-center opacity-70 mt-2 font-light">We are a small, focused team of strategists, storytellers, creators, and problem solvers.
              Each member brings hands on experience across branding, content creation, marketing, and business development
              We believe small teams think deeper, move faster, and care more.
            </p>
            <h3 className="text-3xl opacity-70 mt-4 font-medium">Our strength is not size.
              Our strength is alignment.
            </h3>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
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
