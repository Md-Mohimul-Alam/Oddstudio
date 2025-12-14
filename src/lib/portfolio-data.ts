
export type PortfolioItem = { 
  slug: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  hint: string;
  description: string;
  client: string;
  year: number;
};

export const portfolioItems: PortfolioItem[] = [
    { 
      slug: 'project-ventro-cgi',
      title: 'Project Ventro CGI', 
      category: 'Videography', 
      image: '/ventro banner.jpg',
      video: 'oddstudio/Ventro_CGI_kvgxdh',
      hint: 'cgi animation',
      description: 'A stunning CGI video for Project Ventro, showcasing their futuristic technology.',
      client: 'Ventro Inc.',
      year: 2024
    },
    { 
      slug: 'booktionary-com-bd',
      title: 'Booktionary.com.bd', 
      category: 'Branding', 
      image: '/booktionary banner.png', 
      video: 'oddstudio/booktionary-short_alozuw',
      hint: 'website design',
      description: 'A complete branding and website design for the online bookstore, Booktionary.com.bd.',
      client: 'Booktionary',
      year: 2023
    },
    { 
      slug: 'event-hsbc-bank',
      title: 'Event HSBC Bank', 
      category: 'Photography', 
      image: '/hsbc banner.jpg',
      video: 'oddstudio/hsbc-short_gqwwzy', 
      hint: 'corporate event',
      description: 'Event photography for a major corporate event hosted by HSBC Bank.',
      client: 'HSBC Bank',
      year: 2024
    },
    { 
      slug: 'odd-signature-album-art',
      title: 'Odd Signature Album Art', 
      category: 'Branding', 
      image: '/odd-sign-banner.png',
      video: 'oddstudio/odd-signature-short_n1pvi0', 
      hint: 'album cover',
      description: 'Creative album art design for the band Odd Signature\'s latest release.',
      client: 'Odd Signature',
      year: 2023
    },
    { 
      slug: 'project-tasa',
      title: 'Project TASA', 
      category: 'Videography', 
      image: '/tasa-banner.png', 
      video: 'oddstudio/TASA_Shoot-short_dqohc3',
      hint: 'documentary film',
      description: 'A documentary-style video for Project TASA, highlighting their social impact.',
      client: 'TASA Initiative',
      year: 2023
    },
];
