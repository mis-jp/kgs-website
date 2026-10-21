import Header from '../components/Header';
import Link from 'next/link';
import '../products/products.css';

export const metadata = {
    title: 'All Machines & Equipment | Kelin Graphics System',
    description: 'Browse all printing machines, cutting plotters, UV printers, laser machines, heat press, laminators, sublimation, DTF, and embroidery equipment from Kelin Graphics System.',
};

const machineGroups = [
    {
        category: 'Eco-Solvent Printers',
        machines: [
            { id: 'smart-rj24', name: 'SMART RJ24-2004-i3200', description: 'High-resolution eco-solvent printer with i3200 printhead for durable indoor and outdoor graphics.', image: '/eco-solvent-machines/SMART.webp', features: ['i3200 Printhead', 'Eco-Solvent Ink', 'Large Format'], href: '/smart-rj24-2004-i3200-eco-solvent' },
            { id: 'xline-eco', name: 'XLINE Eco-Solvent', description: 'Wide-format eco-solvent printer designed for sustainable, high-volume outdoor printing applications.', image: '/eco-solvent-machines/Apollo.webp', features: ['Wide Format', 'High Volume', 'Outdoor Durable'], href: '/xline-eco-solvent' },
        ]
    },
    {
        category: 'Solvent Printers',
        machines: [
            { id: 'apollomax', name: 'ApolloMax Plus II PZG3208-KV', description: 'Heavy-duty solvent printer built for continuous high-volume production and long-lasting outdoor applications.', image: '/ApolloMax Plus II PZG3208-KV.webp', features: ['Industrial Output', 'High Speed', 'Weather Resistant'], href: '/apollomax-plus-II' },
        ]
    },
    {
        category: 'Cutting Machines',
        machines: [
            { id: 'iecho-pk', name: 'iEcho PK', description: 'Automated digital cutting solution tailored for the packaging and graphics industry.', image: '/cutting-machines/PK1209 (1).webp', features: ['Automated Cutting', 'Multi-Tool', 'Packaging Ready'], href: '/iecho-pk' },
            { id: 'iecho-pk4', name: 'iEcho PK4', description: 'Advanced routing and cutting technologies integrated into the iEcho PK4 ecosystem.', image: '/cutting-machines/PK4 (2).webp', features: ['Advanced Routing', 'Precision Cut', 'High Speed'], href: '/iecho-pk4' },
            { id: 'iecho-bk3', name: 'iEcho BK3', description: 'High-speed single-ply cutting system for versatile industrial applications.', image: '/cutting-machines/bk3.webp', features: ['Single-Ply', 'High Speed', 'Industrial'], href: '/iecho-bk3' },
            { id: 'iecho-bk4', name: 'iEcho BK4', description: 'Next-generation digital cutter with intelligent cutting and processing modules.', image: '/cutting-machines/BK4 (1).webp', features: ['Intelligent Cut', 'Automation', 'Versatile'], href: '/iecho-bk4' },
            { id: 'iecho-tk4s', name: 'iEcho TK4S', description: 'Large-format cutting system designed for heavy-duty, continuous operation.', image: '/cutting-machines/TK4S Large format cutting system.webp', features: ['Large Format', 'Heavy-Duty', 'Continuous Op'], href: '/iecho-tk4s' },
            { id: 'gcc-ar24', name: 'GCC AR-24 Desktop', description: 'Compact desktop vinyl cutter for precise contour cutting and sign making.', image: '/cutting-machines/GCC AR-24 Desktop (1).webp', features: ['Desktop', 'Vinyl Cutting', 'Contour Cut'], href: '/gcc-ar24-desktop' },
            { id: 'gcc-expert-24lx', name: 'GCC Expert 24 LX', description: 'Professional 24-inch cutter with AAS II contour cutting system for intricate designs.', image: '/cutting-machines/GCC Expert LX  EX-24LX  Without Stand (1).webp', features: ['AAS II System', '24-inch', 'Precision'], href: '/gcc-expert-24lx' },
            { id: 'gcc-expert-52lx', name: 'GCC Expert 52 LX', description: 'Wide-format 52-inch cutter scaling up your cutting operations with precision.', image: '/cutting-machines/GCC Expert LX  EX-24LX  Without Stand (1).webp', features: ['52-inch', 'Wide Format', 'High Volume'], href: '/gcc-expert-52lx' },
            { id: 'gcc-puma-iv', name: 'GCC Puma IV', description: 'Enhanced tracking and precise contour cutting plotter for professional sign making.', image: '/cutting-machines/GCC PUMA IV.webp', features: ['Enhanced Tracking', 'Contour Cut', 'Professional'], href: '/gcc-puma-iv' },
        ]
    },
    {
        category: 'Sublimation & DTF',
        machines: [
            { id: 'sublimation-fd6198e', name: 'Sublimation Printer FD6198E', description: 'Industrial sublimation printer with high-performance printheads for flawless textile transfers.', image: '/sublimation_dtf/SUBL Sublimation Printer FD6198E (1).webp', features: ['Industrial', 'Textile Transfer', 'High Resolution'], href: '/sublimation-printer-fd6198e' },
            { id: 'kirin', name: 'Kirin DA182T Plus', description: 'Next-generation dye-sublimation printer tailored for sportswear and soft signage.', image: '/sublimation_dtf/SUBL Kirin DA182T Plus Sublimation Printer (1).webp', features: ['Sportswear', 'Soft Signage', 'High Speed'], href: '/kirin' },
            { id: 'smart-sublimation', name: 'Smart Sublimation', description: 'Streamlined smart sublimation printing system for apparel and promotional items.', image: '/sublimation_dtf/SUBL Smart Sublimation (1).webp', features: ['Smart System', 'Apparel', 'Vibrant Colors'], href: '/smart-sublimation' },
            { id: 'r2000-roller', name: 'R2000 Roller Type Sublimation GS 1200', description: 'Continuous rotary heat transfer for seamless, high-volume fabric printing.', image: '/sublimation_dtf/SUBL R2000 Roller Type Sublimation Machine GS 1200 (1).webp', features: ['Rotary Transfer', 'Continuous Feed', 'Fabric Print'], href: '/r2000-roller' },
            { id: 'smart-dtf', name: 'SMART DTF Machine', description: 'Reliable DTF printer for vibrant and consistent direct-to-film textile transfers.', image: '/sublimation_dtf/DTF SMART DTF Machine (1).webp', features: ['DTF', 'Textile Transfer', 'Consistent Output'], href: '/smart-dtf-machine' },
            { id: 'smart-dtf-shaker', name: 'Smart DTF Powder Shaker W650-4C', description: 'Automated powder curing and adhesive application for Direct-to-Film printing.', image: '/sublimation_dtf/DTF Smart DTF Powder Shaker W650-4C (1).webp', features: ['Automated', 'Powder Curing', 'DTF Workflow'], href: '/smart-dtf-powder-shaker' },
            { id: 'dtf-sf303', name: 'DTF UV Printer SF303-i3200 2ft', description: 'Compact UV-DTF solutions for hard-surface transfers and promotional items.', image: '/sublimation_dtf/DTF UV Printer SF303-i3200 2ft (1).webp', features: ['UV-DTF', '2ft Width', 'Hard Surface'], href: '/dtf-uv-printer-sf303-f1080' },
            { id: 'dtf-sf604', name: 'DTF UV Printer SF604-i3200 2ft', description: 'Ultra-high resolution UV-DTF printer for premium branding and transfers.', image: '/sublimation_dtf/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp', features: ['High Resolution', 'UV-DTF', 'Premium Output'], href: '/dtf-uv-printer-sf604-i3200' },
        ]
    },
    {
        category: 'UV Printers',
        machines: [
            { id: 'smart-uv', name: 'SMART UV Printer', description: 'Entry-level industrial UV flatbed printer for custom promotional merchandise.', image: '/uv-machines/SMART UV Printer.webp', features: ['UV Flatbed', 'Promotional', 'Instant Cure'], href: '/smart-uv-printer' },
            { id: 'liyu-dqs', name: 'Liyu X-Line DQS UV Hybrid', description: 'Hybrid UV printer bridging flatbed and roll-to-roll for maximum versatility.', image: '/liyuxline.png', features: ['Hybrid', 'Flatbed + Roll', 'UV Ink'], href: '/liyu-x-line-dqs-uv-hybrid-printer' },
            { id: 'luxor-rtr', name: 'Luxor RTR UV System', description: 'Roll-to-roll UV printing system for backlit displays and flexible substrates.', image: '/uv-machines/Luxor RTR (1).webp', features: ['Roll-to-Roll', 'Backlit', 'Flexible Media'], href: '/luxor-rtr-uv' },
            { id: 'auto-uv-crystal', name: 'Automatic UV Crystal Flat Pasting', description: 'Automated UV crystal flat pasting machine for high-gloss finishing and decoration.', image: '/uv-machines/Automatic UV Crystal Flat Pasting Machine 3.82m x 1.72m (1).webp', features: ['Automated', 'UV Crystal', 'High-Gloss'], href: '/automatic-uv-crystal-flat-pasting' },
        ]
    },
    {
        category: 'Heat Press',
        machines: [
            { id: 'sapphire', name: 'Sapphire Heat Press', description: 'Consistent temperature distribution for reliable garment decoration and transfers.', image: '/heatpress/Sapphire Heatpress (2).webp', features: ['Even Heat', '60×90 cm', 'Garment Deco'], href: '/sapphire-heat-press' },
            { id: 'subli-mate', name: 'Subli-Mate Manual 80×100 cm', description: 'Large-format manual heat press for custom apparel and wide substrate transfers.', image: '/heatpress/Subli-Mate Manual Heat Press 80cm x 100cm (1).webp', features: ['80×100 cm', 'Manual', 'Large Format'], href: '/subli-mate-manual-heat-press' },
            { id: 'dual-pneumatic', name: 'Dual Pneumatic Sublimation 80×100 cm', description: 'Dual-station pneumatic press for increased operator efficiency and throughput.', image: '/sublimation_dtf/SUBL Dual Pneumatic Sublimation Machine 80cm x 100cm (1).webp', features: ['Dual Station', 'Pneumatic', 'High Throughput'], href: '/dual-pneumatic' },
        ]
    },
    {
        category: 'Laminator',
        machines: [
            { id: 'cold-laminator', name: 'Cold Laminator', description: 'Cold laminating machine that protects wide-format graphics without thermal degradation.', image: '/laminator/Cold Laminator (1).webp', features: ['Cold Process', 'Wide Format', 'No Heat'], href: '/cold-laminator' },
            { id: 'fulei-flatbed', name: 'Fulei BU-1425FA Flatbed Laminator', description: 'Precision flatbed laminator for mounting and laminating on rigid substrates.', image: '/laminator/Fulei BU-1425FA Flatbed Laminator (1).webp', features: ['Flatbed', 'Rigid Substrates', 'Precision Mount'], href: '/fulei-bu-1425fa-flatbed-laminator' },
            { id: 'fulei-warm', name: 'Fulei BU-1600E Warm Auto Laminator', description: 'Automated warm lamination that eliminates silvering for a flawless finish.', image: '/laminator/Fulei BU-1600E Warm Auto Laminator (1).webp', features: ['Warm Auto', 'Anti-Silvering', '1600mm Width'], href: '/fulei-bu-1600e-warm-auto-laminator' },
        ]
    },
    {
        category: 'Laser Machines',
        machines: [
            { id: 'handheld-fiber', name: 'Handheld Fiber Laser', description: 'Portable high-precision fiber laser for on-site marking, engraving, and cutting.', image: '/laser-machines/Handheld Fiber Laser.webp', features: ['Portable', 'Fiber Laser', 'On-Site'], href: '/handheld-fiber-laser' },
            { id: 'reci-welding', name: 'Reci Handheld Fiber Laser Welding R-A80', description: 'High-power 800W handheld fiber laser welding machine for industrial fabrication.', image: '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.webp', features: ['800W', 'Welding', 'Handheld'], href: '/reci-handheld-fiber-laser-welding' },
            { id: 'hanniu-150w', name: 'Hanniu K1390 CO2 Laser 150W CCD', description: 'CO2 laser cutter with CCD camera for perfectly registered contour cutting.', image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp', features: ['150W CO2', 'CCD Camera', 'Contour Cut'], href: '/hanniu-k1390-co2-laser-150w-ccd' },
            { id: 'hanniu-300w', name: 'Hanniu K1390 CO2 Laser 300W', description: 'High-power 300W CO2 laser for cutting thick acrylic, wood, and signage materials.', image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp', features: ['300W CO2', 'Thick Material', 'High Power'], href: '/hanniu-k1390-co2-laser-300w' },
            { id: 'k-sign-b330', name: 'K-Sign Desktop Laser B330', description: 'Compact desktop laser for engraving personalized items and small signage.', image: '/laser-machines/K-Sign Desktop Laser B330.webp', features: ['Desktop', 'Engraving', 'Compact'], href: '/k-sign-desktop-laser-b330' },
            { id: 'k-sign-ks1916', name: 'K-Sign KS-1916 Laser Fabric Cutting', description: 'Automated laser fabric cutter that seals edges and prevents fraying in textiles.', image: '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp', features: ['Fabric Cutting', 'Edge Seal', 'Automated'], href: '/k-sign-ks-1916-laser-fabric-cutting' },
            { id: 'k-sign-marking', name: 'K-Sign Desktop Laser Marking', description: 'High-speed desktop laser marking machine for industrial part tracking and metal marking.', image: '/laser-machines/K-sign_Desktop Laser Marking.webp', features: ['Laser Marking', 'High Speed', 'Metal & Plastic'], href: '/k-sign-desktop-laser-marking' },
            { id: 'yueming-cma1325', name: 'Yueming Fiber Laser CMA-1325C-G-G 1000W', description: 'Industrial 1000W fiber laser for sheet metal processing and precision cutting at scale.', image: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp', features: ['1000W', 'Sheet Metal', 'Industrial'], href: '/yueming-fiber-laser-cma-1325c-g-g' },
            { id: 'yueming-hl1530', name: 'Yueming Fiber Laser HL1530C-G-E 1500W IPG', description: 'Heavy-duty 1500W IPG fiber laser maximizing throughput in metal fabrication.', image: '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500W IPG.webp', features: ['1500W IPG', 'Heavy-Duty', 'High Throughput'], href: '/yueming-fiber-laser-hl1530c-g-e' },
        ]
    },
    {
        category: 'Embroidery & Knitting',
        machines: [
            { id: 'promaker-1201', name: 'Promaker Embroidery 1201', description: 'Single-head industrial embroidery machine for boutique production up to 1200 RPM.', image: '/embroidery_knitting/Promaker Embroidery 1201.webp', features: ['Single Head', '1200 RPM', 'Japanese Hook'], href: '/promaker-embroidery-1201' },
            { id: 'promaker-1202', name: 'Promaker Embroidery 1202', description: 'Dual-head embroidery machine doubling your output with precision and consistency.', image: '/embroidery_knitting/Promaker Embroidery 1202.webp', features: ['Dual Head', '1200 RPM', 'Precision'], href: '/promaker-embroidery-1202' },
            { id: 'promaker-1204', name: 'Promaker Embroidery 1204', description: '4-head industrial embroidery system for high-volume garment decoration at full speed.', image: '/embroidery_knitting/Promaker Embroidery 1204.webp', features: ['4 Heads', 'High Volume', 'Industrial'], href: '/promaker-embroidery-1204' },
            { id: 'smartex', name: 'Smartex Knitting Machine GS-CE152', description: 'Advanced circular knitting machine for superior fabric quality and automated pattern production.', image: '/embroidery_knitting/Smartex Knitting Machine GSCE-1-52.webp', features: ['Circular Knit', 'Automated', 'Superior Fabric'], href: '/smartex-knitting-gsce-1-52' },
        ]
    },
    {
        category: '3D Printer',
        machines: [
            { id: 'k-sign-3d', name: 'K-Sign Letter Shell 3D Printer', description: 'Specialized 3D printer revolutionizing channel letter fabrication for signage production.', image: '/3D Printer (1).webp', features: ['Channel Letters', 'Signage', '3D Printing'], href: '/k-sign-letter-shell-3d-printer' },
        ]
    },
];

export default function Machine() {
    return (
        <div>
            <Header />
            <main className="products-container machine-page">
                <div className="page-header">
                    <div className="header-content">
                        <h1 className="products-title">Machines & Equipment</h1>
                        <p className="products-description">
                            Professional printing machines and equipment for all your production needs.
                            From high-performance digital printers to precision cutting machines.
                        </p>
                    </div>
                    <div className="header-stats">
                        <div className="stat">
                            <span className="stat-number">10</span>
                            <span className="stat-label">Categories</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Models Available</span>
                        </div>
                    </div>
                </div>

                {machineGroups.map((group) => (
                    <section key={group.category} className="machine-category-section">
                        <h2 className="machine-category-title">{group.category}</h2>
                        <div className="machines-grid">
                            {group.machines.map((machine) => (
                                <div key={machine.id} className="machine-card">
                                    <div className="machine-image-container">
                                        <img src={machine.image} alt={machine.name} className="machine-image" />
                                    </div>
                                    <div className="machine-content">
                                        <h3 className="machine-title">{machine.name}</h3>
                                        <p className="machine-description">{machine.description}</p>
                                        <div className="machine-features">
                                            {machine.features.map((feature, index) => (
                                                <span key={index} className="feature-tag">{feature}</span>
                                            ))}
                                        </div>
                                        <Link href={machine.href} className="machine-link">
                                            <span>View {machine.name}</span>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="7" y1="17" x2="17" y2="7" />
                                                <polyline points="7,7 17,7 17,17" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                <div className="cta-section">
                    <h3>Need Help Choosing?</h3>
                    <p>Our experts can help you select the right equipment for your specific needs.</p>
                    <Link href="/contact" className="cta-button">Contact Our Experts</Link>
                </div>
            </main>
        </div>
    );
}
