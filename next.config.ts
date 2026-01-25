import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
        port: '',
        pathname: '/**',
      },
      // Add your own domain for images
      {
        protocol: 'https',
        hostname: 'oddstudiovision.com',
        port: '',
        pathname: '/**',
      },
      // Add Cloudinary domain for next-cloudinary
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }
    ],
    // Optional: Add if using next-cloudinary
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dhbyx1flu',
    NEXT_PUBLIC_SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://oddstudiovision.com' 
      : 'http://localhost:9002',
  },
  
  // 🔽 DOMAIN CONFIGURATION 🔽
  
  // For Next.js 15, use this approach
  trailingSlash: false,
  
  // Enable experimental features if needed (optional)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Redirects - Crucial for domain setup
  async redirects() {
    const isProduction = process.env.NODE_ENV === 'production';
    
    const redirects = [];
    
    if (isProduction) {
      // Redirect from Netlify subdomain to custom domain
      redirects.push({
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'oddstudiovision.netlify.app',
          },
        ],
        destination: 'https://oddstudiovision.com/:path*',
        permanent: true,
      });
      
      // Redirect www to non-www
      redirects.push({
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.oddstudiovision.com',
          },
        ],
        destination: 'https://oddstudiovision.com/:path*',
        permanent: true,
      });
      
      // Redirect HTTP to HTTPS
      redirects.push({
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://oddstudiovision.com/:path*',
        permanent: true,
      });
    }
    
    return redirects;
  },
  
  // Headers for security
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;