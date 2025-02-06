/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
export default {
  images: {
    domains: ['cdn.sanity.io'],
  },
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

