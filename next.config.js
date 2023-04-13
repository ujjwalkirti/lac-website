/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.lifestyleasia.com",
      "api.time.com",
      "imgs.search.brave.com",
      "links.papareact.com"
    ],
  },
};

module.exports = nextConfig;
