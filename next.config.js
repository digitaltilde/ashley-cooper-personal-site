/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'res.cloudinary.com'
        ],
    },
    
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/recentwork',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
