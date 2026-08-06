import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   compress: true,

   images: {
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
   },

   turbopack: {
      rules: {
         "*.svg": {
            loaders: ["@svgr/webpack"],
            as: "*.js",
         },
      },
   },

   async headers() {
      return [
         {
            source: "/_next/static/(.*)",
            headers: [
               {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
               },
            ],
         },
         {
            source: "/(.*)\\.(png|jpg|jpeg|webp|avif|ico|svg|woff2|woff|pdf)",
            headers: [
               {
                  key: "Cache-Control",
                  value: "public, max-age=86400, stale-while-revalidate=604800",
               },
            ],
         },
         {
            source: "/(.*)",
            headers: [
               {
                  key: "Content-Security-Policy",
                  value: [
                     "default-src 'self'",
                     "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
                     "style-src 'self' 'unsafe-inline'",
                     "img-src 'self' data: blob: https:",
                     "font-src 'self' data:",
                     "connect-src 'self' https:",
                     "frame-ancestors 'none'",
                     "base-uri 'self'",
                     "form-action 'self'",
                  ].join("; "),
               },
               {
                  key: "X-Frame-Options",
                  value: "DENY",
               },
               {
                  key: "X-Content-Type-Options",
                  value: "nosniff",
               },
               {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
               },
               {
                  key: "Permissions-Policy",
                  value: "camera=(), microphone=(), geolocation=()",
               },
            ],
         },
      ];
   },
};

export default nextConfig;
