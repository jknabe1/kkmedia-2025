const { hostname } = require("os");

module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        },
        {
          hostname: 'picsum.photos',
        }
      ],
    },
  }