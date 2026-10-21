// app/blogs/page.js
"use client";
import React, { useState } from 'react';
import "./textile-apparel.css";
import Header from '../components/Header';

export default function BlogsPage() {
    // Map blog post titles to their custom guide URLs
    const guideLinks = {
        "Handheld Fiber Laser": "/handheld-fiber-laser",
        "Hanniu K1390 CO2 Laser 150W with CCD": "/hanniu-k1390-co2-laser-150w-ccd",
        "Hanniu K1390 CO2 Laser 300W": "/hanniu-k1390-co2-laser-300w",
        "K-Sign Desktop Laser B330": "/k-sign-desktop-laser-b330",
        "K-Sign KS-1916 Laser Fabric Cutting": "/k-sign-ks-1916-laser-fabric-cutting",
        "K-Sign Desktop Laser Marking": "/k-sign-desktop-laser-marking",
        "Reci Handheld Fiber Laser Welding R-A80 800W": "/reci-handheld-fiber-laser-welding",
        "Yueming Fiber Laser CMA-1325C-G-G 1000W": "/yueming-fiber-laser-cma-1325c-g-g",
        "Yueming Fiber Laser HL1530C-G-E 1500W IPG": "/yueming-fiber-laser-hl1530c-g-e",
    };
    const blogPosts = [
        { id: 1, title: "Handheld Fiber Laser", category: "Fiber Laser", excerpt: "The TFZ-S 1500W significantly reduces production time with high-speed laser welding, enabling rapid joint formation while maintaining superior accuracy and consistency.", date: "March 2026", image: '/laser-machines/Handheld Fiber Laser.webp' },
        { id: 2, title: "Hanniu K1390 CO2 Laser 150W with CCD", category: "CO2 Laser", excerpt: "Industrial-grade CO2 laser cutting machine with CCD vision system for precision cutting at 64000 mm/min engraving speed, delivering accurate border detection and contour recognition.", date: "March 2026", image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp' },
        { id: 3, title: "Hanniu K1390 CO2 Laser 300W", category: "CO2 Laser", excerpt: "Advanced CO2 laser cutting machine excels at demanding creations, precisely cutting and engraving diverse non-metals (1300×900mm, up to 300W), ensuring stable, accurate results with DSP control.", date: "March 2026", image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp' },
        { id: 4, title: "K-Sign Desktop Laser B330", category: "Desktop Laser", excerpt: "Ultra-fast 44-seconds engraving desktop laser machine — engrave an 80×90mm design in just 44 seconds with 0.01mm precision, featuring industrial-grade 600mm/s speed and comprehensive safety features.", date: "March 2026", image: '/laser-machines/K-Sign Desktop Laser B330.webp' },
        { id: 5, title: "K-Sign KS-1916 Laser Fabric Cutting", category: "Fabric Laser", excerpt: "Smart laser precision for fast flexible cutting — 1800×2200mm working area CO2 laser cutter with intelligent vision and automatic identification for ultra-precise shape cutting across textiles and leather.", date: "March 2026", image: '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp' },
        { id: 6, title: "K-Sign Desktop Laser Marking", category: "Desktop Laser", excerpt: "Instantly increase production with reliable offline engraving function — efficiency by 5-10 times. No professional technician needed, learn within 10 minutes. Available with rotary for cylindrical marking.", date: "March 2026", image: '/laser-machines/K-sign_Desktop Laser Marking.webp' },
        { id: 7, title: "Reci Handheld Fiber Laser Welding R-A80 800W", category: "Fiber Laser", excerpt: "Air-cooled handheld laser welder — 10X faster than TIG welding. Compact integrated welding and wire feeding system with quiet multi-level speed control. No external chiller required.", date: "March 2026", image: '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.webp' },
        { id: 8, title: "Yueming Fiber Laser CMA-1325C-G-G 1000W", category: "Fiber Laser", excerpt: "Industrial grading speed 60m/min with auto-focus cutting head and Sprint piercing — cuts piercing time by up to 80%, excels at thick and reflective metals with superior optic protection.", date: "March 2026", image: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp' },
        { id: 9, title: "Yueming Fiber Laser HL1530C-G-E 1500W IPG", category: "Fiber Laser", excerpt: "Industrial grading speed 60m/min with smart leapfrog motion — parabolic frog jump system auto-adjusts height for faster contour switching and improved cutting efficiency.", date: "March 2026", image: '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.webp' },
    ];

    const categories = ["All", ...new Set(blogPosts.map(post => post.category))];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <main className="luxor-page-container">
            <Header />

            <header className="luxor-header">
                <h1>Laser Machine Solutions</h1>
                <p>Explore our full range of laser machine solutions — from CO2 and fiber lasers to desktop engravers and fabric cutters — engineered for precision, speed, and professional-grade results.</p>
            </header>

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
                            <a
                                href={guideLinks[post.title] || `/blogs/${post.id}`}
                                className="read-more-link"
                            >
                                Read Guide &rarr;
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}