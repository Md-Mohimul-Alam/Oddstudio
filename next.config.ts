import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 🔽 REMOVE Turbopack for Netlify deployment
  // Netlify doesn't support Turbopack in production
  // experimental: {
  //   turbo: {},
  // },
  
  // 🔽 ADD this for Netlify static export
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  
  // 🔽 ADD for trailingSlash handling
  trailingSlash: false,
  
  // 🔽 ADD for static optimization
  images: {
    unoptimized: true, // Required for static export
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
    NEXT_PUBLIC_SITE_URL: 'https://oddstudiovision.com',
  },
  
  // 🔽 FIX redirects - Netlify handles these differently
  // Remove or modify these redirects - they'll cause infinite loops
  async redirects() {
    // Since you're using Netlify, handle redirects in netlify.toml instead
    return [
      // Remove the netlify.app redirect - it will cause infinite loop
      // Keep only this if you want to force www to non-www
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