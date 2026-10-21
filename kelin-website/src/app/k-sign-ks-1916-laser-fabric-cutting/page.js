// =============================================================
// STATIC SITE GENERATION (SSG)
// -------------------------------------------------------------
// This file is a Next.js Server Component (no "use client" at
// the top). Because next.config.mjs sets output: 'export',
// Next.js pre-renders this entire page to a static HTML file
// at build time (next build). No JavaScript server is needed
// at runtime -- the page is served as plain HTML/CSS/JS from
// any static host or CDN.
//
// Two things make SSG work here:
//  1. No "use client" directive  -- keeps this a Server Component
//  2. export const metadata      -- Next.js reads this at build
//     time to inject <title>, <meta>, and OpenGraph tags into
//     the static HTML <head> automatically.
// =============================================================

import KSignKs1916LaserFabricCuttingClient from "./KSignKs1916LaserFabricCuttingClient";

export const metadata = {
    title: "K-Sign KS-1916 Laser Fabric Cutting Machine | Kelin Graphics System Philippines",
    description: "The K-Sign KS-1916 is a CCD laser fabric cutting machine for precise automated cutting of textiles, sublimation fabric, and soft signage. Available at Kelin Philippines.",
    keywords: "K-Sign KS-1916 laser fabric cutting Philippines, CCD laser fabric cutter, textile laser cutting, sublimation fabric cutter, Kelin Graphics System",
    openGraph: {
        title: "K-Sign KS-1916 Laser Fabric Cutting Machine | Kelin Graphics System Philippines",
        description: "The K-Sign KS-1916 is a CCD laser fabric cutting machine for precise automated cutting of textiles, sublimation fabric, and soft signage. Available at Kelin Philippines.",
        images: [{ url: "/laser-machines/k-sign-b330.webp", width: 1200, height: 630, alt: "K-Sign KS-1916 Laser Fabric Cutting Machine | Kelin Graphics System Philippines" }],
        type: "website",
    },
    alternates: {
        canonical: "https://www.kelingraphics.com/k-sign-ks-1916-laser-fabric-cutting",
    },
};

export default function Page() {
    return <KSignKs1916LaserFabricCuttingClient />;
}
