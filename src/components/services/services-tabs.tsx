'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Clapperboard, PenTool, Rocket, Megaphone } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const servicesData = {
  videography: {
    label: "Videography",
    icon: Clapperboard,
    description: "From concept to final cut, we produce high-quality videos that engage, entertain, and inspire action. Our team handles everything from scripting and storyboarding to shooting, editing, and color grading.",
    subServices: [
      { 
        title: "Content",
        subServices: [
            { title: "Model-Led Video Promotions", video: "https://placehold.co/1280x720.png", hint: "video promotion" },
            { title: "Reels and Promo", video: "https://placehold.co/1280x720.png", hint: "social media reel" }
        ]
      },
      { 
        title: "Beyond Branding",
        subServices: [
            { title: "Online Video Commercial", video: "https://placehold.co/1280x720.png", hint: "online commercial" }
        ]
      },
      {
        title: "Creatives",
        subServices: [
            { title: "Motion Graphics", video: "https://placehold.co/1280x720.png", hint: "motion graphics" },
            { title: "Carousel Creatives", video: "https://placehold.co/1280x720.png", hint: "carousel video" },
            { title: "Product Videography", video: "https://placehold.co/1280x720.png", hint: "product video" }
        ]
      }
    ]
  },
  photography: {
    label: "Photography",
    icon: Camera,
    description: "We capture stunning, professional images that showcase your brand in the best light. Our services cover product photography, corporate headshots, event photography, and more.",
    subServices: [
      { 
        title: "Content",
        items: [
            { title: "Model-Led Static Poster", image: "/model-led-static-poster.png", hint: "model promotion" },
        ]
      },
      { 
        title: "Brainstorming",
        items: [
            { title: "Static Commercial Poster", image: "/static-commercial-poster.png", hint: "commercial poster" }
        ]
      },
      {
        title: "Creation",
        items: [
            { title: "Logo Design", image: "/logo-design.png", hint: "logo design" },
            { title: "Product Photography", image: "/product-photography.png", hint: "product shoot" }
        ]
      }
    ]
  },
  copywriting: {
    label: "Copywriting",
    icon: PenTool,
    description: "Words have power. Our expert copywriters craft compelling narratives, catchy taglines, and persuasive content for websites, ads, and marketing materials that convert readers into customers.",
    video: "https://placehold.co/1280x720.png",
    hint: "creative writing"
  },
  strategy: {
    label: "Strategy & Branding",
    icon: Rocket,
    description: "We offer a unified approach to growth, combining business development, branding, and strategic planning to build a cohesive and powerful brand presence.",
    subServices: [
      { title: "Business Development, Branding, and Strategic Planning", video: "https://placehold.co/1280x720.png", hint: "business strategy" },
    ]
  },
  onlineMarketing: {
    label: "Online Marketing",
    icon: Megaphone,
    description: "Data-driven online campaigns to boost your reach, engagement, and conversions.",
    video: "https://placehold.co/1280x720.png",
    hint: "digital marketing"
  },
};

const VideoPlaceholder = ({ src, title, hint }: { src: string; title: string; hint: string }) => (
    <div className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
            <Image src={src} alt={`Video placeholder for ${title}`} fill className="object-cover" data-ai-hint={hint} />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
            </div>
        </div>
        <Button asChild variant="secondary" className="w-full">
            <Link href="/portfolio">View Full Work</Link>
        </Button>
    </div>
);


export default function ServicesTabs() {
  return (
    <Tabs defaultValue="videography" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto -mx-1">
        {Object.entries(servicesData).map(([key, { label, icon: Icon }]) => (
          <TabsTrigger key={key} value={key} className="flex flex-col sm:flex-row gap-2 h-auto py-3 text-xs sm:text-sm">
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(servicesData).map(([key, service]) => (
        <TabsContent key={key} value={key} className="py-8">
            {key === 'photography' ? (
                 <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold font-headline mb-2">{service.label}</h3>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{service.description}</p>
                    </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(service.subServices as {title: string, items: {title: string, image: string, hint: string}[]}[]).map(category => (
                            category.items.map(item => (
                                <Card key={item.title} className="overflow-hidden group">
                                    <CardContent className="p-0">
                                        <div className="aspect-[4/3] relative">
                                            <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" data-ai-hint={item.hint} />
                                            <Badge variant="secondary" className="absolute top-3 right-3">{category.title}</Badge>
                                        </div>
                                        <div className="p-4">
                                            <h5 className="font-bold">{item.title}</h5>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-3xl font-bold font-headline mb-4">{service.label}</h3>
                        <p className="text-muted-foreground text-lg">{service.description}</p>
                    </div>
                    <div className="order-1 md:order-2">
                        {(service.subServices && 'subServices' in service.subServices[0]) ? (
                            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                            {service.subServices.map((sub, index) => (
                                <AccordionItem value={`item-${index}`} key={sub.title}>
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">{sub.title}</AccordionTrigger>
                                    <AccordionContent>
                                      {'subServices' in sub && sub.subServices ? (
                                          <Accordion type="single" collapsible defaultValue="nested-item-0" className="w-full pl-4 border-l">
                                              {(sub.subServices as {title: string, video?: string, hint?: string}[]).map((nestedSub, nestedIndex) => (
                                                  <AccordionItem value={`nested-item-${nestedIndex}`} key={nestedSub.title} className="border-b-0">
                                                      <AccordionTrigger>{nestedSub.title}</AccordionTrigger>
                                                      <AccordionContent className="pl-4">
                                                          {nestedSub.video && <VideoPlaceholder src={nestedSub.video} title={nestedSub.title} hint={nestedSub.hint || ''} />}
                                                      </AccordionContent>
                                                  </AccordionItem>
                                              ))}
                                          </Accordion>
                                      ) : (
                                          (sub as {video?: string, title: string, hint?: string}).video && <VideoPlaceholder src={sub.video!} title={sub.title} hint={sub.hint || ''} />
                                      )}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                          </Accordion>
                        ) : (service.subServices && 'video' in service.subServices[0]) ? (
                             <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                                {(service.subServices as {title: string, video: string, hint: string}[]).map((sub, index) => (
                                    <AccordionItem value={`item-${index}`} key={sub.title}>
                                        <AccordionTrigger className="text-lg font-semibold hover:no-underline">{sub.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <VideoPlaceholder src={sub.video} title={sub.title} hint={sub.hint || ''} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                             </Accordion>
                        )
                        
                        : (
                            (service as {video?: string, label: string, hint?: string}).video && <VideoPlaceholder src={(service as {video: string}).video} title={service.label} hint={service.hint || ''}/>
                        )}
                    </div>
                </div>
            )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
