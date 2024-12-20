const nextConfig = {
  images: {
    domains: [], // Add external domains if using remote images
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset",
    });
    return config;
  },
};

module.exports = nextConfig;
