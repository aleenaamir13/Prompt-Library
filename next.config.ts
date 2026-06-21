import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {remotePatterns:[
          {protocol:'https', hostname:'covers.openlibrary.org'},
          {protocol:'https', hostname:'vnprlqgfq09h2tpv.public.blob.vercel-storage.com'}
      ]

  }
};
export default nextConfig;
