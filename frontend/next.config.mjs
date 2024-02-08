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
            }
        ],
    }
};

export default nextConfig;
