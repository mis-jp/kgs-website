// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "./blogs.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "SMART RJ24-2004-i3200": "/blogs-smart-eco-solvent-printer",
        "XLINE Eco-Solvent": "/blogs-xline-eco-solvent",
        "ApolloMax Plus II PZG3208-KV": "/blogs-apolloMax-plus-II",
        "iEcho PK": "/blogs-iecho-pk",
        "iEcho PK4": "/blogs-iecho-pk4",
        "iEcho BK3": "/blogs-iecho-bk3",
        "iEcho BK4": "/blogs-iecho-bk4",
        "iEcho TK4S": "/blogs-iecho-tk4s",
        "GCC AR-24 DESKTOP": "/blogs-gcc-ar24-desktop",
        "GCC PUMA IV": "/blogs-gcc-puma-IV",
        "GCC EXPERT 24 LX": "/blogs-gcc-expert-24lx",
        "Sublimation Printer FD6198E": "/blogs-sublimation-printer-FD6198E",
        "Kirin DA182T Plus": "/blogs-kirin-DA182T-plus",
        "Smart Sublimation": "/blogs-smart-sublimation",
        "Smart DTF Powder Shaker W650-4C": "/blogs-smart-DTF-powder-shaker-w650-4C",
        "SMART DTF Machine": "/blogs-smart-DTF-machine/",
        "DTF UV Printer SF303-i3200 2ft": "/blogs-DTF-UV-printer-SF303-i3200",
        "DTF UV Printer SF604-i3200 2ft - High Res": "/blogs-DTF-UV-printer-SF604-i3200",
        "Luxor RTR UV System": "/blogs-luxor-rtr-uv-system",
        "Automatic UV Crystal Flat Pasting Machine": "/blogs-automatic-UV-crystal-flat-pasting-machine",
        "Liyu X-Line DQS UV Hybrid Printer": "/blogs-liyu-x-line-DQS-UV-hybrid-printer",
        "SMART UV Printer": "/blogs-smart-uv-printer",
        "R2000 Roller Type Sublimation GS 1200": "/blogs-r2000-roller-type-sublimation/",
        "Dual Pneumatic Sublimation 80cm x 100cm": "/blogs-dual-pneumatic-sublimation",
        "Sapphire Heat Press": "/blogs-sapphire-heat-press",
        "Subli-Mate Manual 80cm x 100cm": "/blogs-subli-mate-manual",
        "Cold Laminator": "/blogs-cold-laminator",
        "Fulei BU-1425FA Flatbed Laminator": "/blogs-flatbed-laminator",
        "Fulei BU-1600E Warm Auto Laminator": "/blogs-auto-warm-laminator",
        "Handheld Fiber Laser": "/blogs-handheld-fiber-laser",
        "Hanniu K1390 CO2 Laser 150W with CCD": "/blogs-hanniu-k1390-CO2laser-150W",
        "Hanniu K1390 CO2 Laser 300W": "/blogs-hanniu-k1390-CO2-laser-300W",
        "K-Sign Desktop Laser B330": "/blogs-k-sign-desktop-laser-b330",
        "K-Sign KS-1916 Laser Fabric Cutting": "/blogs-k-sign-ks-1916-laser-fabric-cutting",
        "K-Sign Desktop Laser Marking": "/blogs-k-sign-desktop-laser-marking",
        "Reci Handheld Fiber Laser Welding R-A80 800W": "/blogs-reci-handheld-fiber-laser-welding",
        "Yueming Fiber Laser CMA-1325C-G-G 1000W": "/blogs-yueming-fiber-laser-CMA-1325C-G-G",
        "Yueming Fiber Laser HL1530C-G-E 1500W IPG": "/blogs-yueming-fiber-laser-HL1530C-G-E",
        "Promaker Embroidery Series (1201 / 1202 / 1804)": "/blogs-promaker-embroidery-series",
        "Smartex Knitting Machine GS-CE152": "/blogs-smartex-knitting-machine-GS-CE152",
        "K-Sign Letter Shell 3D Printer": "/blogs-k-sign-letter-shell-3D-printer"
    };

    const blogPosts = [
        // Eco Solvent Printer Machines
        { id: 1, title: "SMART RJ24-2004-i3200", category: "Eco Solvent", excerpt: "Discover the precision and efficiency of the SMART RJ24-2004-i3200 for high-resolution graphics.", date: "March 2026", image: '/eco-solvent-machines/SMART.webp' },
        { id: 2, title: "XLINE Eco-Solvent", category: "Eco Solvent", excerpt: "A deep dive into the XLINE Eco-Solvent's capabilities for sustainable, high-volume outdoor printing.", date: "March 2026", image: '/eco-solvent-machines/Apollo.webp' },

        // Solvent Printer Machines
        { id: 3, title: "ApolloMax Plus II PZG3208-KV", category: "Solvent", excerpt: "Exploring the robust architecture and continuous production capabilities of the ApolloMax Plus II.", date: "February 2026", image: '/ApolloMax Plus II PZG3208-KV.webp' },

        // Cutting Machines
        { id: 4, title: "iEcho PK", category: "Cutting Machines", excerpt: "Automated digital cutting solutions tailored for the packaging and graphics industry.", date: "February 2026", image: '/cutting-machines/PK1209 (1).webp' },
        { id: 5, title: "iEcho PK4", category: "Cutting Machines", excerpt: "Advanced routing and cutting technologies integrated into the iEcho PK4 ecosystem.", date: "February 2026", image: '/cutting-machines/PK4 (2).webp' },
        { id: 6, title: "iEcho BK3", category: "Cutting Machines", excerpt: "High-speed single-ply cutting systems for versatile industrial applications.", date: "January 2026", image: '/cutting-machines/bk3.webp' },
        { id: 7, title: "iEcho BK4", category: "Cutting Machines", excerpt: "Optimizing workflow with the BK4's intelligent cutting and processing modules.", date: "January 2026", image: '/cutting-machines/BK4 (1).webp' },
        { id: 8, title: "iEcho TK4S", category: "Cutting Machines", excerpt: "Large format cutting system designed for heavy-duty, continuous operation.", date: "January 2026", image: '/cutting-machines/TK4S Large format cutting system.webp' },
        { id: 9, title: "GCC AR-24 DESKTOP", category: "Cutting Machines", excerpt: "The definitive guide to setting up and calibrating your desktop vinyl cutter.", date: "December 2025", image: '/cutting-machines/GCC AR-24 Desktop (1).webp' },
        { id: 10, title: "GCC PUMA IV", category: "Cutting Machines", excerpt: "Enhanced tracking and precise contour cutting with the GCC Puma IV series.", date: "December 2025", image: '/cutting-machines/GCC PUMA IV.webp' },
        { id: 11, title: "GCC EXPERT 24 LX", category: "Cutting Machines", excerpt: "Maximizing the AAS II contour cutting system for intricate design work.", date: "December 2025", image: '/cutting-machines/GCC Expert LX  EX-24LX  Without Stand (1).webp' },
        // { id: 12, title: "GCC EXPERT 52 LX", category: "Cutting Machines", excerpt: "Scaling up your cutting operations with the 52-inch wide Expert LX.", date: "November 2025", image: '/cutting-machines/gcc-expert-lx.webp' },

        // Sublimation and DTF Machines
        { id: 13, title: "Sublimation Printer FD6198E", category: "Sublimation & DTF", excerpt: "Achieving flawless textile transfers with the FD6198E industrial printheads.", date: "November 2025", image: '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).webp' },
        { id: 14, title: "Kirin DA182T Plus", category: "Sublimation & DTF", excerpt: "Next-generation dye-sublimation tailored for sportswear and soft signage.", date: "November 2025", image: '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).webp' },
        { id: 15, title: "Smart Sublimation", category: "Sublimation & DTF", excerpt: "Streamlining your apparel printing workflow with our smart sublimation line.", date: "October 2025", image: '/sublimation_dtf/SUBL Smart Sublimation (1).webp' },
        { id: 16, title: "Smart DTF Powder Shaker W650-4C", category: "Sublimation & DTF", excerpt: "Automating the curing and adhesive application process for Direct-to-Film printing.", date: "October 2025", image: '/sublimation_dtf/DTF Smart DTF Powder Shaker W650-4C (1).webp' },
        { id: 17, title: "SMART DTF Machine", category: "Sublimation & DTF", excerpt: "A complete guide to maintenance and operation for continuous DTF output.", date: "October 2025", image: '/sublimation_dtf/DTF SMART DTF Machine (1).webp' },
        // UV Printers
        { id: 18, title: "DTF UV Printer SF303-i3200 2ft", category: "UV Printers", excerpt: "Compact UV-DTF solutions for hard-surface transfers and promotional items.", date: "September 2025", image: '/uv-machines/DTF UV Printer SF303-i3200 2ft (1).webp' },
        { id: 19, title: "DTF UV Printer SF604-i3200 2ft - High Res", category: "UV Printers", excerpt: "Unlocking ultra-high resolution UV transfers for premium branding.", date: "September 2025", image: '/uv-machines/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp' },
        { id: 20, title: "Luxor RTR UV System", category: "UV Printers", excerpt: "Roll-to-roll UV printing techniques for backlit displays and flexible substrates.", date: "September 2025", image: '/uv-machines/Luxor RTR (1).webp' },
        { id: 21, title: "Automatic UV Crystal Flat Pasting Machine", category: "UV Printers", excerpt: "Improving finishing speeds with automated UV crystal flat pasting.", date: "August 2025", image: '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).webp' },
        { id: 22, title: "Liyu X-Line DQS UV Hybrid Printer", category: "UV Printers", excerpt: "Bridging the gap between flatbed and roll-to-roll with hybrid UV technology.", date: "August 2025", image: '/uv-machines/Photo (3).webp' },
        { id: 23, title: "SMART UV Printer", category: "UV Printers", excerpt: "Entry-level industrial UV printing for custom promotional merchandise.", date: "August 2025", image: '/uv-machines/SMART UV Printer.webp' },
        // Heatpress
        { id: 24, title: "R2000 Roller Type Sublimation GS 1200", category: "Heatpress", excerpt: "Mastering rotary heat transfer for seamless, continuous fabric printing.", date: "July 2025", image: '/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).webp' },
        { id: 25, title: "Dual Pneumatic Sublimation 80cm x 100cm", category: "Heatpress", excerpt: "Increasing operator efficiency with dual-station pneumatic pressing.", date: "July 2025", image: '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).webp' },
        { id: 26, title: "Sapphire Heat Press", category: "Heatpress", excerpt: "Consistent temperature distribution for reliable garment decoration.", date: "July 2025", image: '/heatpress/Sapphire Heatpress (2).webp' },
        { id: 27, title: "Subli-Mate Manual 80cm x 100cm", category: "Heatpress", excerpt: "Large format manual pressing strategies for custom apparel.", date: "June 2025", image: '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).webp' },

        // Laminator
        { id: 28, title: "Cold Laminator", category: "Laminator", excerpt: "Protecting wide-format graphics without thermal degradation.", date: "June 2025", image: '/laminator/Cold Laminator (1).webp' },
        { id: 29, title: "Fulei BU-1425FA Flatbed Laminator", category: "Laminator", excerpt: "Precision mounting and laminating on rigid substrates.", date: "June 2025", image: '/laminator/Fulei BU-1425FA Flatbed Laminator (1).webp' },
        { id: 30, title: "Fulei BU-1600E Warm Auto Laminator", category: "Laminator", excerpt: "Eliminating silvering with automated warm lamination techniques.", date: "May 2025", image: '/laminator/Fulei BU-1600E Warm Auto Laminator (1).webp' },

        // Laser Machines
        { id: 31, title: "Handheld Fiber Laser", category: "Laser Machines", excerpt: "Portable, high-precision fiber laser solutions for on-site marking.", date: "May 2025", image: '/laser-machines/Handheld Fiber Laser.webp' },
        { id: 32, title: "Hanniu K1390 CO2 Laser 150W with CCD", category: "Laser Machines", excerpt: "Utilizing CCD camera systems for perfectly registered contour cutting.", date: "May 2025", image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp' },
        { id: 33, title: "Hanniu K1390 CO2 Laser 300W", category: "Laser Machines", excerpt: "Power and precision: Cutting thick acrylic and wood with 300W CO2 tubes.", date: "April 2025", image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp' },
        { id: 34, title: "K-Sign Desktop Laser B330", category: "Laser Machines", excerpt: "Compact engraving solutions for personalized items and small signage.", date: "April 2025", image: '/laser-machines/K-Sign Desktop Laser B330.webp' },
        { id: 35, title: "K-Sign KS-1916 Laser Fabric Cutting", category: "Laser Machines", excerpt: "Sealing edges and preventing fray in automated textile cutting.", date: "April 2025", image: '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp' },
        { id: 36, title: "K-Sign Desktop Laser Marking", category: "Laser Machines", excerpt: "High-speed part tracking and metal marking for industrial components.", date: "March 2025", image: '/laser-machines/K-sign_Desktop Laser Marking.webp' },
        { id: 37, title: "Reci Handheld Fiber Laser Welding R-A80 800W", category: "Laser Machines", excerpt: "The future of industrial fabrication: Handheld fiber laser welding.", date: "March 2025", image: '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.webp' },
        { id: 38, title: "Yueming Fiber Laser CMA-1325C-G-G 1000W", category: "Laser Machines", excerpt: "Sheet metal processing at scale with 1000W fiber laser cutting.", date: "March 2025", image: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp' },
        { id: 39, title: "Yueming Fiber Laser HL1530C-G-E 1500W IPG", category: "Laser Machines", excerpt: "Maximizing throughput with IPG power sources in heavy metal fabrication.", date: "February 2025", image: '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500W IPG.webp' },

        // Embroidery and Knitting Machines
        { id: 40, title: "Promaker Embroidery Series (1201 / 1202 / 1804)", category: "Embroidery", excerpt: "Industrial computerized embroidery machines in 1-head, 2-head, and 4-head configurations — up to 1200 RPM with Japanese hook technology.", date: "February 2025", image: '/embroidery_knitting/Promaker Embroidery 1201.webp' },
        { id: 43, title: "Smartex Knitting Machine GS-CE152", category: "Embroidery", excerpt: "Automating complex knit patterns for modern garment manufacturing.", date: "January 2025", image: '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.webp' },

        // 3D Machines
        { id: 44, title: "K-Sign Letter Shell 3D Printer", category: "3D Machines", excerpt: "Revolutionizing channel letter fabrication with specialized 3D printing.", date: "January 2025", image: '/3D Printer (1).webp' }
    ];

    // Data for the 'You Might Also Like' section
    const suggestedPosts = [
        {
            id: 's1',
            title: "Printable Media & Substrates Guide",
            category: "Materials",
            excerpt: "Explore guides on vinyl stickers, tarpaulins, sublimation papers, and specialty films for your printing projects.",
            image: "/materials.png",
            link: "/blogs-1-materials"
        },
        {
            id: 's2',
            title: "Accessories & Maintenance Kits",
            category: "Accessories",
            excerpt: "Find the right cleaning kits, spare parts, and accessories to keep your machines running at peak performance.",
            image: "/accessories.png",
            link: "/blogs-2-accessories"
        },
        {
            id: 's3',
            title: "Ink Guides: Eco-Solvent, UV, Sublimation & DTF",
            category: "Inks",
            excerpt: "Compare ink types, understand compatibility, and choose the right ink solution for your printing business.",
            image: "/inks.png",
            link: "/blogs-3-inks"
        },
        {
            id: 's4',
            title: "Promotional Display Solutions for Events & Trade Shows",
            category: "Promotional Display",
            excerpt: "Explore roll-up banners, pop-up booths, feather banners, and more to make your brand stand out at any event.",
            image: "/display.png",
            link: "/blogs-4-promotional-display"
        },
        {
            id: 's5',
            title: "Machine Guides & Operational Tips",
            category: "Machines",
            excerpt: "Browse technical guides and operational insights for all Kelin printing machines, cutters, laser systems, and more.",
            image: "/machines.png",
            link: "/blogs"
        }
    ];

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
    const pathname = usePathname();
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Machines</h1>
                <p>Technical insights, operational guides, and industry updates for all Kelin printing machines, cutters, and laser systems.</p>
            </header>

            {/* --- Suggested Section (top) --- */}
            <section className="suggested-section">
                <div className="suggested-header">
                    <div className="suggested-header-left">
                        <span className="suggested-eyebrow">EXPLORE</span>
                        <h2 className="suggested-title">You Might Also Like</h2>
                    </div>
                    <p className="suggested-subtitle">Discover related guides on materials, accessories, and inks to get the most from your machines.</p>
                </div>
                <div className="suggested-cards">
                    {suggestedPosts.map((post, i) => (
                        <Link key={post.id} href={post.link} className={`suggested-card${post.link === pathname ? ' suggested-card--active' : ''}`}>
                            <div className="suggested-card-img-wrap">
                                <img src={post.image || '/dummy-image-square.jpg'} alt={post.title} className="suggested-card-img" loading="lazy" />
                                <div className="suggested-card-overlay" />
                            </div>
                            <div className="suggested-card-body">
                                <span className="suggested-card-pill">{post.category}</span>
                                <h3 className="suggested-card-title">{post.title}</h3>
                                <p className="suggested-card-excerpt">{post.excerpt}</p>
                                <span className="suggested-card-cta">Read More <span aria-hidden="true">→</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <nav className="category-filter">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <section className="luxor-grid">
                {filteredPosts.map((post) => (
                    <article key={post.id} className="luxor-card">
                        <div className="card-image-container">
                            <img
                                src={post.image || '/dummy-image-square.jpg'}
                                alt={post.title}
                                className="card-img"
                            />
                        </div>
                        <div className="card-content">
                            <span className="category-pill">{post.category}</span>
                            <h3>{post.title}</h3>
                            <p className="post-excerpt">{post.excerpt}</p>
                            <Link
                                href={guideLinks[post.title] || `/blogs/${post.id}`}
                                className="read-guide-link"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}