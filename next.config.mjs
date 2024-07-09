
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'pbs.twimg.com'
            },
            {
                hostname: 'abs.twimg.com'
            }
        ]
    }
};

export default nextConfig;
