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
   
};

module.exports = nextConfig
