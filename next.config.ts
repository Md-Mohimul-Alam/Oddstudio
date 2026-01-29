import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Correct Turbopack configuration
  experimental: {
    turbo: {
      // Optional: Add specific rules if needed
      // rules: {
      //   '*.svg': {
      //     loaders: ['@svgr/webpack'],
      //     as: '*.js',
      //   },
      // },
    },
  },
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      },
      {
        protocol: 'https',
        hostname: 'oddstudiovision.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ],
    formats: ['image/avif', 'image/webp'],
  },
  
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dhbyx1flu',
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://oddstudiovision.com' 
      : 'http://localhost:9002',
  },
  
  trailingSlash: false,
  
  // Redirects - Only apply in production
  async redirects() {
    // Only apply redirects in production
    if (process.env.NODE_ENV !== 'production') {
      return [];
    }
    
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'oddstudiovision.netlify.app',
          },
        ],
        destination: 'https://oddstudiovision.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.oddstudiovision.com',
          },
        ],
        destination: 'https://oddstudiovision.com/:path*',
        permanent: true,
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Add Referrer-Policy for security
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;