import { withNextVideo } from "next-video/process";
import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
                port: "",
            }
        ]
    }
};

export default withNextVideo(nextConfig);