import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,

  
  typescript: {
    
    ignoreBuildErrors: false,
  },
  
  
transpilePackages: ['bootstrap'],

};

export default config;
