const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    formats:['image/avif','image/webp'],
    remotePatterns:[
        {
        protocol:"https",
        hostname:"**",
        port:"3000",
        pathname:"./images/**"
        },
    ],

},
};
