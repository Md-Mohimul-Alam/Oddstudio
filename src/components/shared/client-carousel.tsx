'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const clients: { name: string; logo: string }[] = [
    { name: 'Astrocade', logo: '/clients/astrocade-logo.png' },
    { name: 'Booktionary', logo: '/clients/booktionary-logo.png' },
    { name: 'Fly Koro', logo: '/clients/flykoro-logo.png' },
    { name: 'Rice n Spice', logo: '/clients/ricenspice-logo.png' },
    { name: 'Tasa', logo: '/clients/tasa-logo.png' },
    { name: 'Zesor', logo: '/clients/zesor-logo.png' },
    { name: 'Import Park', logo: '/clients/importpark-logo.png' },
];

export default function ClientCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <p className="text-center text-sm font-semibold uppercase text-muted-foreground tracking-wider mb-8">
          Trusted by the world's most innovative companies
        </p>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map(({ name, logo }, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-1">
                    <div className="flex h-24 items-center justify-center p-6 text-muted-foreground hover:text-foreground transition-colors" title={name}>
                        <Image
                            src={logo}
                            alt={`${name} logo`}
                            width={120}
                            height={40}
                            className="h-8 w-auto grayscale contrast-0 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-300"
                        />
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
