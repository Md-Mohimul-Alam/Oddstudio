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
      }
    ],
  },
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dhbyx1flu',
  },
  
  // 🔽 ADD THESE CONFIGURATIONS FOR YOUR DOMAIN 🔽
  
  // Set your production URL
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Ensure trailing slash behavior (optional)
  trailingSlash: false,
  
  // Redirects configuration
  async redirects() {
    return [
      // Redirect from Netlify subdomain to your custom domain
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
      // Optional: Redirect www to non-www
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
      // Optional: Redirect HTTP to HTTPS
      {
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
      },
    ];
  },
  
  // Headers configuration for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
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
        ],
      },
    ];
  },
};

export default nextConfig;