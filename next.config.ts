import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  // These were both previously set to skip validation, which is how a
  // component importing three non-existent modules stayed in the tree
  // without ever failing a build. `npm run typecheck` and `npm run lint`
  // are both clean, so the gates are back on.
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    // Serve modern formats to browsers that advertise support.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Trims the icon barrel import down to only the icons actually used
  // instead of pulling the whole module graph in development.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  allowedDevOrigins: ["*.cloudworkstations.dev"],

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Defence-in-depth defaults; none of these change how the site
          // renders, they just close off things it never does.
          {key: 'X-Content-Type-Options', value: 'nosniff'},
          {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
          {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
      {
        // The service worker must never be served from a stale cache, or a
        // fix to it cannot roll out.
        source: '/sw.js',
        headers: [
          {key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate'},
        ],
      },
    ];
  },
};

export default nextConfig;
