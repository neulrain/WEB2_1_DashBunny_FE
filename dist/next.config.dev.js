"use strict";

var path = require('path');

var nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: ['localhost'],
    remotePatterns: [{
      protocol: 'https',
      hostname: 'cdn.discordapp.com',
      pathname: '/**'
    }]
  }
};
module.exports = nextConfig;