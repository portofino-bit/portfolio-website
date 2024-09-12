/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"upcdn.io",
            },
        ],
    },
    experimental:{
        serverActions:true,
    }
};

module.exports = nextConfig
