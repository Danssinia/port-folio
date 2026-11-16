import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {

  //to make it available on github pages, we need to set the basePath to the repository name and set the output to export
  output: 'export',
  basePath: '/port-folio',
  images: {
    unoptimized: true,
  },


  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
