/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dgwl8k0sn/image/upload/**',
      },
      // Agrega aquí otros patrones si necesitas más dominios
    ],
  },
  // Otras configuraciones de Next.js si las necesitas
}

module.exports = nextConfig


