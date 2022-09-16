/** @type {import('next').NextConfig} */
import UnoCSS from "@unocss/webpack";
import { presetUno } from "@unocss/preset-uno";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, context) {
    config.plugins.push(UnoCSS({ presets: [presetUno()] }));
    if (context.buildId !== "development") {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
