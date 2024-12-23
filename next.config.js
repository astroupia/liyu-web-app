const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["images.unsplash.com", "example-cdn.com"], // Add external domains if using remote images
  },
};

module.exports = nextConfig;
