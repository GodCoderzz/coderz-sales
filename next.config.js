/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  env: {
    NEXT_PUBLIC_PROD_URL: 'https://coderz-sales.vercel.app',
    MONGO_URI: 'mongodb+srv://coderzsales:coderzsalespass@cluster0.gabfr.mongodb.net/?retryWrites=true&w=majority'

  },
}
module.exports = nextConfig
