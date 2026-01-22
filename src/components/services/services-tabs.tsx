'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Camera, Clapperboard, PenTool, Rocket, Megaphone } from "lucide-react";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect, useState } from 'react';

const servicesData = {
  videography: {
    label: "Videography",
    icon: Clapperboard,
    description: "From concept to final cut, we produce high-quality videos that engage, entertain, and inspire action. Our team handles everything from scripting and storyboarding to shooting, editing, and color grading.",
    subServices: [
      { 
        title: "Content",
        subServices: [
            { title: "Model-Led Video Promotions", video: "/videos/ContentPresentationLR.mp4", hint: "video promotion" },
            { title: "Reels and Promo", video: "/videos/reel-promo.mp4", hint: "social media reel" }
        ]
      },
      { 
        title: "Beyond Branding",
        subServices: [
            { title: "Online Video Commercial", video: "/videos/OVCLR.mp4", hint: "online commercial" }
        ]
      },
      {
        title: "Creatives",
        subServices: [
            { title: "Motion Graphics", video: "/videos/motion-graphics.mp4", hint: "motion graphics" },
            { title: "Carousel Creatives", video: "/videos/carousel.mp4", hint: "carousel video" },
            { title: "Product Videography", video: "/videos/product-video.mp4", hint: "product video" }
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
    video: "/videos/copywriting.mp4",
    hint: "creative writing"
  },
  strategy: {
    label: "Strategy & Branding",
    icon: Rocket,
    description: "We offer a unified approach to growth, combining business development, branding, and strategic planning to build a cohesive and powerful brand presence.",
    subServices: [
      { title: "Business Development, Branding, and Strategic Planning", video: "/videos/strategy.mp4", hint: "business strategy" },
    ]
  },
  onlineMarketing: {
    label: "Online Marketing",
    icon: Megaphone,
    description: "Data-driven online campaigns to boost your reach, engagement, and conversions.",
    video: "/videos/marketing.mp4",
    hint: "digital marketing"
  },
};

interface VideoPlaceholderProps {
  src: string;
  title: string;
  hint: string;
  isActive: boolean;
}

const VideoPlaceholder = ({ src, title, hint, isActive }: VideoPlaceholderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = async () => {
      try {
        if (isActive) {
          video.currentTime = 0;
          video.muted = true;
          video.loop = true;
          
          const playPromise = video.play();
          if (playPromise !== undefined) {
            await playPromise;
            setIsPlaying(true);
            setHasError(false);
          }
        } else {
          video.pause();
          video.currentTime = 0;
          setIsPlaying(false);
        }
      } catch (error) {
        console.log("Video playback error:", error);
        setHasError(true);
        setIsPlaying(false);
      }
    };

    handlePlay();

    // Add event listeners
    const playHandler = () => setIsPlaying(true);
    const pauseHandler = () => setIsPlaying(false);
    
    video.addEventListener('play', playHandler);
    video.addEventListener('pause', pauseHandler);
    video.addEventListener('ended', pauseHandler);

    return () => {
      video.removeEventListener('play', playHandler);
      video.removeEventListener('pause', pauseHandler);
      video.removeEventListener('ended', pauseHandler);
    };
  }, [isActive]);

  return (
    <div className="space-y-4">
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
        <video 
          ref={videoRef}
          src={src} 
          className="w-full h-full object-cover"
          controls={isPlaying}
          data-ai-hint={hint}
          title={title}
          preload="metadata"
          muted
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {!isPlaying && !hasError && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white p-4 text-center">
            <div className="w-16 h-16 bg-red-500/30 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <p className="text-sm">Video failed to load. Click to play manually.</p>
          </div>
        )}
      </div>
      <Button asChild variant="secondary" className="w-full">
        <Link href="/portfolio">View Full Work</Link>
      </Button>
    </div>
  );
};

// Function to find the first existing video segment
const findFirstVideoSegment = (service: any) => {
  if (!service.subServices) return null;
  
  for (let i = 0; i < service.subServices.length; i++) {
    const subService = service.subServices[i];
    
    // Check if this subService has a direct video
    if ('video' in subService && subService.video) {
      return { type: 'parent', index: i };
    }
    
    // Check if this subService has nested subServices with videos
    if ('subServices' in subService && subService.subServices) {
      for (let j = 0; j < subService.subServices.length; j++) {
        const nestedSub = subService.subServices[j];
        if (nestedSub.video) {
          return { type: 'nested', parentIndex: i, nestedIndex: j };
        }
      }
    }
  }
  
  return null;
};

export default function ServicesTabs() {
  // Initialize state to open the first video segment
  const getInitialOpenItems = () => {
    const videographyService = servicesData.videography;
    const firstVideoSegment = findFirstVideoSegment(videographyService);
    const openItems = new Set<string>();
    
    if (firstVideoSegment) {
      if (firstVideoSegment.type === 'parent') {
        openItems.add(`item-${firstVideoSegment.index}`);
      } else if (firstVideoSegment.type === 'nested') {
        openItems.add(`item-${firstVideoSegment.parentIndex}`);
        openItems.add(`nested-item-${firstVideoSegment.parentIndex}-${firstVideoSegment.nestedIndex}`);
      }
    }
    
    return openItems;
  };

  const [openItems, setOpenItems] = useState<Set<string>>(getInitialOpenItems());
  const [activeVideo, setActiveVideo] = useState<string | null>(() => {
    const videographyService = servicesData.videography;
    const firstVideoSegment = findFirstVideoSegment(videographyService);
    
    if (firstVideoSegment) {
      if (firstVideoSegment.type === 'parent') {
        return `item-${firstVideoSegment.index}`;
      } else if (firstVideoSegment.type === 'nested') {
        return `nested-item-${firstVideoSegment.parentIndex}-${firstVideoSegment.nestedIndex}`;
      }
    }
    
    return null;
  });

  const handleAccordionChange = (value: string) => {
    const newOpenItems = new Set(openItems);
    
    // Check if this is a top-level item
    if (value.startsWith('item-') && !value.includes('nested-item')) {
      const index = parseInt(value.split('-')[1]);
      
      if (newOpenItems.has(value)) {
        // Close the item
        newOpenItems.delete(value);
        setActiveVideo(null);
        
        // Also close all nested items of this parent
        const nestedItems = Array.from(newOpenItems).filter(item => 
          item.startsWith(`nested-item-${index}`)
        );
        nestedItems.forEach(item => newOpenItems.delete(item));
      } else {
        // Close other top-level items
        const topLevelItems = Array.from(newOpenItems).filter(item => 
          item.startsWith('item-') && !item.includes('nested-item')
        );
        topLevelItems.forEach(item => {
          newOpenItems.delete(item);
          // Close nested items of closed parent
          const parentIndex = item.split('-')[1];
          const nestedItems = Array.from(newOpenItems).filter(nested => 
            nested.startsWith(`nested-item-${parentIndex}`)
          );
          nestedItems.forEach(nested => newOpenItems.delete(nested));
        });
        
        // Open the new item
        newOpenItems.add(value);
        
        // Check if this item has subServices with videos
        const serviceKey = Object.keys(servicesData).find(key => 
          servicesData[key as keyof typeof servicesData].subServices
        );
        
        if (serviceKey) {
          const service = servicesData[serviceKey as keyof typeof servicesData];
          if (service.subServices && service.subServices[index]) {
            const subService = service.subServices[index];
            
            // Check if this subService has nested subServices with videos
            if ('subServices' in subService && subService.subServices && subService.subServices.length > 0) {
              // Find the first video in the nested subServices
              for (let i = 0; i < subService.subServices.length; i++) {
                if (subService.subServices[i].video) {
                  const nestedValue = `nested-item-${index}-${i}`;
                  // Auto-open the first video subsegment
                  newOpenItems.add(nestedValue);
                  setActiveVideo(nestedValue);
                  break;
                }
              }
            } 
            // Check if the subService itself has a video
            else if ('video' in subService && subService.video) {
              setActiveVideo(value);
            }
          }
        }
      }
    }
    // Check if this is a nested item
    else if (value.includes('nested-item')) {
      const parts = value.split('-');
      const parentIndex = parts[2];
      const nestedIndex = parts[3];
      
      // Make sure parent is open
      newOpenItems.add(`item-${parentIndex}`);
      
      // Close other nested items in the same parent
      const sameParentItems = Array.from(newOpenItems).filter(item => 
        item.startsWith(`nested-item-${parentIndex}`) && item !== value
      );
      sameParentItems.forEach(item => newOpenItems.delete(item));
      
      // Open the clicked nested item
      newOpenItems.add(value);
      setActiveVideo(value);
    }
    
    setOpenItems(newOpenItems);
  };

  const isItemOpen = (value: string) => openItems.has(value);
  const isVideoActive = (value: string) => activeVideo === value;

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
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill 
                            className="object-cover transition-transform duration-300 group-hover:scale-105" 
                            data-ai-hint={item.hint} 
                          />
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
                  <Accordion 
                    type="single" 
                    collapsible 
                    value={Array.from(openItems).find(item => item.startsWith('item-') && !item.includes('nested-item')) || ''}
                    onValueChange={handleAccordionChange}
                    className="w-full"
                  >
                    {(service.subServices as any[]).map((sub, index) => {
                      const parentValue = `item-${index}`;
                      const isParentOpen = isItemOpen(parentValue);
                      const parentIsActive = isVideoActive(parentValue);
                      
                      // Check if this parent has nested subServices
                      const hasNestedSubServices = 'subServices' in sub && sub.subServices && sub.subServices.length > 0;
                      
                      return (
                        <AccordionItem value={parentValue} key={sub.title}>
                          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            {sub.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            {hasNestedSubServices ? (
                              <Accordion 
                                type="single" 
                                collapsible 
                                className="w-full pl-4 border-l"
                                value={Array.from(openItems).find(item => item.startsWith(`nested-item-${index}`)) || ''}
                                onValueChange={handleAccordionChange}
                              >
                                {(sub.subServices as {title: string, video?: string, hint?: string}[]).map((nestedSub, nestedIndex) => {
                                  const nestedValue = `nested-item-${index}-${nestedIndex}`;
                                  const isNestedOpen = isItemOpen(nestedValue);
                                  const nestedIsActive = isVideoActive(nestedValue);
                                  
                                  return (
                                    <AccordionItem value={nestedValue} key={nestedSub.title} className="border-b-0">
                                      <AccordionTrigger>{nestedSub.title}</AccordionTrigger>
                                      <AccordionContent className="pl-4">
                                        {nestedSub.video && (
                                          <VideoPlaceholder 
                                            src={nestedSub.video} 
                                            title={nestedSub.title} 
                                            hint={nestedSub.hint || ''} 
                                            isActive={nestedIsActive || false}
                                          />
                                        )}
                                      </AccordionContent>
                                    </AccordionItem>
                                  );
                                })}
                              </Accordion>
                            ) : (
                              (sub as {video?: string, title: string, hint?: string}).video && (
                                <VideoPlaceholder 
                                  src={sub.video!} 
                                  title={sub.title} 
                                  hint={sub.hint || ''} 
                                  isActive={parentIsActive || false}
                                />
                              )
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (service.subServices && 'video' in service.subServices[0]) ? (
                  <Accordion 
                    type="single" 
                    collapsible 
                    value={Array.from(openItems).find(item => item.startsWith('item-')) || ''}
                    onValueChange={handleAccordionChange}
                    className="w-full"
                  >
                    {(service.subServices as {title: string, video: string, hint: string}[]).map((sub, index) => {
                      const value = `item-${index}`;
                      return (
                        <AccordionItem value={value} key={sub.title}>
                          <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                            {sub.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <VideoPlaceholder 
                              src={sub.video} 
                              title={sub.title} 
                              hint={sub.hint || ''} 
                              isActive={isVideoActive(value) || false}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                ) : (service as {video?: string}).video && (
                  <VideoPlaceholder 
                    src={(service as {video: string}).video} 
                    title={service.label} 
                    hint={service.hint || ''}
                    isActive={true}
                  />
                )}
              </div>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}