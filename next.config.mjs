/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/', // The path to redirect from
        destination: '/home', // The path to redirect to
        permanent: true, // Optional: Set to true for a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
