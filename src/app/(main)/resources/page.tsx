import HeroSection from '@/components/shared/hero-section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Reveal from '@/components/shared/reveal';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const resources = [
  { title: 'The Ultimate Guide to Video Marketing', date: 'May 20, 2024', description: 'Learn how to leverage video to boost engagement and conversions. A comprehensive deep dive into modern video strategies.', category: 'Strategy' },
  { title: '5 Branding Mistakes to Avoid in 2024', date: 'May 15, 2024', description: 'Is your brand identity working for you? Here are common pitfalls and how to fix them before they hurt your business.', category: 'Branding' },
  { title: 'How to Write Copy That Sells', date: 'May 10, 2024', description: 'Master the art of persuasive writing that connects with your audience. Tips from our lead copywriter.', category: 'Copywriting' },
  { title: 'Strategic Business Growth Frameworks', date: 'May 5, 2024', description: 'Explore frameworks and tactics for sustainable business development in a competitive landscape.', category: 'Business' },
];

export default function ResourcesPage() {
  return (
    <>
      <HeroSection
        title="INSIGHTS"
        subtitle="Knowledge is power. Stay ahead of the curve with our latest articles, guides, and industry deep dives."
        className="bg-background"
        scrollingText="READ • LEARN • GROW • "
      />
      <section className="container pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {resources.map((resource, i) => (
            <Reveal key={resource.title} delay={i * 0.1}>
                <Card className="flex flex-col h-full border-2 hover:border-primary transition-colors group overflow-hidden hover:shadow-xl">
                <div className="h-2 bg-secondary group-hover:bg-primary transition-colors w-full" />
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                         <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{resource.category}</span>
                         <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-2" />
                            {resource.date}
                         </div>
                    </div>
                    <CardTitle className="font-headline text-3xl leading-tight group-hover:text-primary transition-colors">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-lg leading-relaxed">{resource.description}</p>
                </CardContent>
                <CardFooter className="pt-6 border-t bg-secondary/20">
                    <Button asChild variant="ghost" className="w-full justify-between hover:bg-transparent hover:text-primary p-0 text-base font-bold">
                        <Link href="#">
                            <span>Read Full Article</span>
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Button>
                </CardFooter>
                </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
