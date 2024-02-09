/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
            {
                protocol : "https",
                hostname: "cdn.grofers.com",
            },
            {
                protocol : "https",
                hostname: "example.com",
            },
            {
                protocol : "https",
                hostname: "www.thespruceeats.com",
            },
        ],
    }
};

export default nextConfig;
