"use client";
import { buildInquiryPayload, submitInquiry } from '../../lib/submitInquiry';

import Header from '../components/Header';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import './k-sign-ks-1916-laser-fabric-cutting.css';

export default function KSignKs1916LaserFabricCutting() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp');
    const scrollRef = useRef(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationFrameRef = useRef(null);
    const lastTimestampRef = useRef(0);

    const applicationItems = [
        { image: '/application/k-sign-ks-1916-laser-fabric-cutting/1.jpg', label: 'Carpet' },
        { image: '/application/k-sign-ks-1916-laser-fabric-cutting/2.jpg', label: 'Handbag' },
        { image: '/application/k-sign-ks-1916-laser-fabric-cutting/3.jpg', label: 'T-shirt' },
        { image: '/application/k-sign-ks-1916-laser-fabric-cutting/4.jpg', label: 'Throw Pillow' },
        { image: '/application/k-sign-ks-1916-laser-fabric-cutting/5.jpg', label: 'Swim Wear' },
    ];

    const loopedApplicationItems = [...applicationItems, ...applicationItems, ...applicationItems];

    const normalizeInfiniteScroll = () => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const segmentWidth = scrollElement.scrollWidth / 3;
        const boundaryOffset = 4;
        if (scrollElement.scrollLeft <= boundaryOffset) {
            scrollElement.scrollLeft += segmentWidth;
        } else if (scrollElement.scrollLeft >= segmentWidth * 2 - boundaryOffset) {
            scrollElement.scrollLeft -= segmentWidth;
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const initializeLoopPosition = () => {
            const segmentWidth = scrollElement.scrollWidth / 3;
            scrollElement.scrollLeft = segmentWidth;
        };
        initializeLoopPosition();
        window.addEventListener('resize', initializeLoopPosition);
        return () => window.removeEventListener('resize', initializeLoopPosition);
    }, []);

    useEffect(() => {
        const speedPixelsPerMs = 0.05;
        const animate = (timestamp) => {
            if (lastTimestampRef.current === 0) lastTimestampRef.current = timestamp;
            const delta = timestamp - lastTimestampRef.current;
            lastTimestampRef.current = timestamp;
            if (!isDraggingRef.current && scrollRef.current) {
                scrollRef.current.scrollLeft += delta * speedPixelsPerMs;
                normalizeInfiniteScroll();
            }
            animationFrameRef.current = window.requestAnimationFrame(animate);
        };
        animationFrameRef.current = window.requestAnimationFrame(animate);
        return () => {
            if (animationFrameRef.current) window.cancelAnimationFrame(animationFrameRef.current);
            lastTimestampRef.current = 0;
        };
    }, []);

    const handleMouseDown = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        isDraggingRef.current = true;
        startXRef.current = e.pageX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleMouseMove = (e) => {
        if (!isDraggingRef.current) return;
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        e.preventDefault();
        const x = e.pageX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleMouseUp = () => { isDraggingRef.current = false; };
    const handleMouseLeave = () => { isDraggingRef.current = false; };

    const handleTouchStart = (e) => {
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        isDraggingRef.current = true;
        startXRef.current = e.touches[0].pageX - scrollElement.offsetLeft;
        scrollLeftRef.current = scrollElement.scrollLeft;
    };

    const handleTouchMove = (e) => {
        if (!isDraggingRef.current) return;
        const scrollElement = scrollRef.current;
        if (!scrollElement) return;
        const x = e.touches[0].pageX - scrollElement.offsetLeft;
        const walk = (x - startXRef.current) * 2;
        scrollElement.scrollLeft = scrollLeftRef.current - walk;
        normalizeInfiniteScroll();
    };

    const handleTouchEnd = () => { isDraggingRef.current = false; };

    const machineDetails = {
        name: 'K-Sign KS-1916 Laser Fabric Cutting',
        model: 'LASER MACHINE KS-1916',
        images: [
            '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp',
            '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp',
        ],
        shortDescription: 'Smart laser precision for fast flexible cutting - KS-1916 150-180W Laser Machine: a high-precision, high-speed CO2 laser cutter with an 1800×2200mm working area. Featuring intelligent vision and automatic identification, it delivers ultra-precise shape cutting for diverse flexible materials from textiles to leather, ensuring efficiency across industries.',
        detailedDescription: 'KS-1916 150-180W Laser Machine: a high-precision, high-speed CO2 laser cutter with an 1800×2200mm working area. Featuring intelligent vision and automatic identification, it delivers ultra-precise shape cutting for diverse flexible materials from textiles to leather, ensuring efficiency across industries. With maximum cutting speed up to 6000mm/s, Canon camera brand for precision, water cooling system, and support for multiple image formats including DXF, DWG, JPEG, BMP, and GIF.',
        features: [
            {
                title: 'Intelligent Vision & Auto-ID',
                description: 'The machine "sees" and identifies materials/patterns automatically for foolproof, autonomous cutting.',
                icon: 'vision'
            },
            {
                title: 'Ultra-High Precision & Arc-Shape Cutting',
                description: 'Excels at highly accurate and intricate cuts, including complex curved designs.',
                icon: 'precision'
            },
            {
                title: 'Large-Scale High-Speed Production',
                description: 'Combines a large working area with rapid cutting for efficient high-volume manufacturing.',
                icon: 'production'
            },
            {
                title: 'Broad Material Versatility',
                description: 'Applicable across a wide range of soft materials from textiles to leather goods.',
                icon: 'versatility'
            }
        ],
        specifications: [
            { label: 'Machine Model', value: 'KS-1916' },
            { label: 'Working Size', value: '1900*1600' },
            { label: 'Laser Power (Unit: W)', value: '150-180W' },
            { label: 'Gross Power (Unit: W)', value: '±3500' },
            { label: 'Support Image Format', value: 'DXF/DWG/JPEG/BMP/GIF' },
            { label: 'Cooling Mode', value: 'Water Cooling' },
            { label: 'Camera Brand', value: 'Canon' },
            { label: 'Transmission Mode', value: 'Stepper/Servo Motor' },
            { label: 'Voltage', value: 'AC220V' },
            { label: 'Maximum Cutting Speed', value: '0-6000 mm/s' }
        ],
        applications: [
            'Carpet cutting',
            'Handbag manufacturing',
            'T-shirt production',
            'Throw pillow cutting',
            'Swim wear fabrication',
            'Textile cutting',
            'Leather goods',
            'Flexible materials',
            'Soft fabric cutting',
            'Apparel industry',
            'Home textiles',
            'Fashion accessories'
        ],
        advantages: [
            'High-speed cutting up to 6000mm/s',
            '1900×1600mm large working area',
            '150-180W powerful laser',
            'Intelligent vision system',
            'Automatic material identification',
            'Canon camera for precision',
            'Water cooling system',
            'Multiple image format support',
            'Ultra-precise shape cutting',
            'Arc and complex curve capability',
            'Stepper/Servo motor transmission',
            'Efficient for diverse flexible materials'
        ]
    };

    const openInquiryModal = () => {
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
    };

    const [inquiryStatus, setInquiryStatus] = useState(null); // null | 'success' | 'error' | 'loading'
    const handleSubmitInquiry = async (e) => {
        e.preventDefault();
        setInquiryStatus('loading');
        const form = e.target;
        const formData = new FormData(form);
        // Combine country code and phone
        const countryCode = formData.get('countryCode') || '';
        const phone = formData.get('phone') || '';
        formData.set('phone', `${countryCode} ${phone}`);
        formData.delete('countryCode');
        formData.append('_cc', 'info@kelinph.com');
        formData.append('Page Source', 'K-Sign KS-1916 Laser Fabric Cutting');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', 'Inquiry: K-Sign KS-1916 Laser Fabric Cutting');
        formData.append('Page URL', typeof window !== 'undefined' ? window.location.href : '');
        formData.append('Submitted At', new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' }));
        formData.append('name', `${formData.get('firstName') || ''} ${formData.get('lastName') || ''}`.trim());
        formData.append('inquiryType', 'product-inquiry');
        try {
            const res = await fetch('/api/inquiries/', {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData,
            });
            if (res.ok) {
                setInquiryStatus('success');
                form.reset();
                setTimeout(() => {
                    setInquiryStatus(null);
                    closeInquiryModal();
                }, 2000);
            } else {
                setInquiryStatus('error');
            }
        } catch (err) {
            setInquiryStatus('error');
        }
    };

    return (
        <div>
            <Header />
            <main className="ksign-ks1916-main">
                {/* Product Hero Section */}
                <section className="ksign-ks1916-hero product-hero">
                    <div className="ksign-ks1916-hero-layout">
                        <div className="ksign-ks1916-hero-left">
                            <h1 className="ksign-ks1916-hero-title product-title">
                                {machineDetails.name}
                            </h1>
                            <p className="ksign-ks1916-hero-subtitle product-subtitle">
                                {machineDetails.shortDescription}
                            </p>
                            <div className="ksign-ks1916-button-group">
                                <button
                                    onClick={openInquiryModal}
                                    className="ksign-ks1916-view-btn large">
                                    Get Quote
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m9 18 6-6-6-6" />
                                    </svg>
                                </button>
                                <Link
                                    href="/contact"
                                    className="ksign-ks1916-btn-secondary large">
                                    Contact Sales
                                </Link>
                            </div>
                            <div className="ksign-ks1916-hero-stats product-stats">
                                <div className="ksign-ks1916-stat">
                                    <span className="ksign-ks1916-stat-number">6000</span>
                                    <span className="ksign-ks1916-stat-label">mm/s</span>
                                </div>
                                <div className="ksign-ks1916-stat">
                                    <span className="ksign-ks1916-stat-number">180W</span>
                                    <span className="ksign-ks1916-stat-label">Power</span>
                                </div>
                                <div className="ksign-ks1916-stat">
                                    <span className="ksign-ks1916-stat-number">1900×1600</span>
                                    <span className="ksign-ks1916-stat-label">Area</span>
                                </div>
                            </div>
                        </div>
                        <div className="ksign-ks1916-hero-right">
                            <img
                                src={selectedImage}
                                alt={machineDetails.name}
                                className="ksign-ks1916-hero-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Detailed Description */}
                <section className="ksign-ks1916-overview-section">
                    <div className="ksign-ks1916-overview-container">
                        <h2 className="ksign-ks1916-section-title">Product Overview</h2>
                        <p className="ksign-ks1916-overview-text">
                            {machineDetails.detailedDescription}
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section className="ksign-ks1916-features-section">
                    <div className="ksign-ks1916-features-container">
                        <div className="ksign-ks1916-features-header">
                            <h2 className="ksign-ks1916-features-title">Key Features</h2>
                            <p className="ksign-ks1916-features-subtitle">
                                Smart laser precision for fast flexible cutting
                            </p>
                        </div>

                        <div className="ksign-ks1916-features-grid">
                            {machineDetails.features.map((feature, index) => (
                                <div key={index} className="ksign-ks1916-feature-card">
                                    <div className="ksign-ks1916-feature-icon">
                                        {index === 0 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Intelligent vision/auto-ID: eye with scan lines */}
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                                <line x1="9" y1="9" x2="6" y2="6" />
                                                <line x1="15" y1="9" x2="18" y2="6" />
                                            </svg>
                                        )}
                                        {index === 1 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Precision arc cutting: crosshair with arc */}
                                                <circle cx="12" cy="12" r="10" />
                                                <circle cx="12" cy="12" r="3" />
                                                <line x1="12" y1="2" x2="12" y2="5" />
                                                <line x1="12" y1="19" x2="12" y2="22" />
                                                <line x1="2" y1="12" x2="5" y2="12" />
                                                <line x1="19" y1="12" x2="22" y2="12" />
                                            </svg>
                                        )}
                                        {index === 2 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* High-speed production: speedometer */}
                                                <path d="M12 2a10 10 0 1 0 10 10" />
                                                <path d="M12 12 L17 7" />
                                                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                                            </svg>
                                        )}
                                        {index === 3 && (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                {/* Broad material versatility: layers */}
                                                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                                                <line x1="12" y1="22" x2="12" y2="15.5" />
                                                <polyline points="22 8.5 12 15.5 2 8.5" />
                                            </svg>
                                        )}
                                    </div>
                                    <h3 className="ksign-ks1916-feature-title">{feature.title}</h3>
                                    <p className="ksign-ks1916-feature-text">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Technical Specifications */}
                <section className="ksign-ks1916-specs-section">
                    <div className="ksign-ks1916-specs-container">
                        <h2 className="ksign-ks1916-section-title">Technical Specifications</h2>
                        <p className="ksign-ks1916-section-subtitle">
                            Complete technical details for K-Sign KS-1916 Laser Fabric Cutting Machine
                        </p>
                        <div className="ksign-ks1916-specs-grid">
                            <div className="ksign-ks1916-spec-card">
                                <h3 className="ksign-ks1916-spec-card-title">
                                    Machine Specifications
                                </h3>
                                <div className="ksign-ks1916-spec-card-body">
                                    {machineDetails.specifications.map((spec, index) => (
                                        <div key={index} className="ksign-ks1916-spec-item">
                                            <div className="ksign-ks1916-spec-label">
                                                {spec.label}
                                            </div>
                                            <div className="ksign-ks1916-spec-value">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Applications */}
                <section className="ksign-ks1916-applications-section">
                    <div className="ksign-ks1916-applications-container">
                        <h2 className="ksign-ks1916-section-title">Application Materials</h2>
                        <p className="ksign-ks1916-applications-subtitle">
                            Professional laser cutting for textiles, leather, and flexible materials
                        </p>
                        <div
                            ref={scrollRef}
                            className="ksign-ks1916-applications-scroll"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            onScroll={normalizeInfiniteScroll}
                        >
                            <div className="ksign-ks1916-applications-image-grid">
                                {loopedApplicationItems.map((item, index) => (
                                    <div key={`${item.label}-${index}`} className="ksign-ks1916-application-image-item">
                                        <img src={item.image} alt={item.label} />
                                        <p>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Advantages */}
                <section className="ksign-ks1916-advantages-section">
                    <div className="ksign-ks1916-advantages-container">
                        <h2 className="ksign-ks1916-section-title">Why Choose K-Sign KS-1916 Laser Fabric Cutting?</h2>
                        <div className="ksign-ks1916-advantages-grid">
                            {machineDetails.advantages.map((advantage, index) => (
                                <div key={index} className="ksign-ks1916-advantage-item">
                                    <div className="ksign-ks1916-advantage-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M9 12l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <p className="ksign-ks1916-advantage-text">{advantage}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="ksign-ks1916-modal-overlay" onClick={closeInquiryModal}>
                    <div className="ksign-ks1916-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="ksign-ks1916-inquiry-header">
                            <h2>Request Quote - {machineDetails.model}</h2>
                            <button onClick={closeInquiryModal} className="ksign-ks1916-close-btn">×</button>
                        </div>

                        <form onSubmit={handleSubmitInquiry} className="ksign-ks1916-inquiry-form">
                            <div className="ksign-ks1916-form-row">
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="k-sign-ks1916-form-row">
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="company">Company Name *</label>
                                    <input type="text" id="company" name="company" required />
                                </div>
                            </div>

                            <div className="k-sign-ks1916-form-row">
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="address">Complete Address *</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" required />
                                </div>
                                <div className="ksign-ks1916-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="ksign-ks1916-phone-input">
                                        <select className="ksign-ks1916-country-select" name="countryCode" defaultValue="+63" required>
                                            <option value="+63">🇵🇭 +63</option>
                                            <option value="+1">🇺🇸 +1</option>
                                            <option value="+1">🇨🇦 +1</option>
                                            <option value="+52">🇲🇽 +52</option>
                                            <option value="+54">🇦🇷 +54</option>
                                            <option value="+55">🇧🇷 +55</option>
                                            <option value="+56">🇨🇱 +56</option>
                                            <option value="+57">🇨🇴 +57</option>
                                            <option value="+58">🇻🇪 +58</option>
                                            <option value="+51">🇵🇪 +51</option>
                                            <option value="+593">🇪🇨 +593</option>
                                            <option value="+595">🇵🇾 +595</option>
                                            <option value="+598">🇺🇾 +598</option>
                                            <option value="+591">🇧🇴 +591</option>
                                            <option value="+592">🇬🇾 +592</option>
                                            <option value="+597">🇸🇷 +597</option>
                                            <option value="+44">🇬🇧 +44</option>
                                            <option value="+353">🇮🇪 +353</option>
                                            <option value="+33">🇫🇷 +33</option>
                                            <option value="+49">🇩🇪 +49</option>
                                            <option value="+34">🇪🇸 +34</option>
                                            <option value="+39">🇮🇹 +39</option>
                                            <option value="+31">🇳🇱 +31</option>
                                            <option value="+32">🇧🇪 +32</option>
                                            <option value="+41">🇨🇭 +41</option>
                                            <option value="+43">🇦🇹 +43</option>
                                            <option value="+45">🇩🇰 +45</option>
                                            <option value="+46">🇸🇪 +46</option>
                                            <option value="+47">🇳🇴 +47</option>
                                            <option value="+48">🇵🇱 +48</option>
                                            <option value="+420">🇨🇿 +420</option>
                                            <option value="+421">🇸🇰 +421</option>
                                            <option value="+36">🇭🇺 +36</option>
                                            <option value="+40">🇷🇴 +40</option>
                                            <option value="+359">🇧🇬 +359</option>
                                            <option value="+30">🇬🇷 +30</option>
                                            <option value="+351">🇵🇹 +351</option>
                                            <option value="+354">🇮🇸 +354</option>
                                            <option value="+356">🇲🇹 +356</option>
                                            <option value="+357">🇨🇾 +357</option>
                                            <option value="+372">🇪🇪 +372</option>
                                            <option value="+371">🇱🇻 +371</option>
                                            <option value="+370">🇱🇹 +370</option>
                                            <option value="+386">🇸🇮 +386</option>
                                            <option value="+385">🇭🇷 +385</option>
                                            <option value="+381">🇷🇸 +381</option>
                                            <option value="+382">🇲🇪 +382</option>
                                            <option value="+387">🇧🇦 +387</option>
                                            <option value="+389">🇲🇰 +389</option>
                                            <option value="+355">🇦🇱 +355</option>
                                            <option value="+373">🇲🇩 +373</option>
                                            <option value="+380">🇺🇦 +380</option>
                                            <option value="+375">🇧🇾 +375</option>
                                            <option value="+7">🇷🇺 +7</option>
                                            <option value="+86">🇨🇳 +86</option>
                                            <option value="+81">🇯🇵 +81</option>
                                            <option value="+82">🇰🇷 +82</option>
                                            <option value="+852">🇭🇰 +852</option>
                                            <option value="+853">🇲🇴 +853</option>
                                            <option value="+886">🇹🇼 +886</option>
                                            <option value="+65">🇸🇬 +65</option>
                                            <option value="+60">🇲🇾 +60</option>
                                            <option value="+66">🇹🇭 +66</option>
                                            <option value="+84">🇻🇳 +84</option>
                                            <option value="+62">🇮🇩 +62</option>
                                            <option value="+673">🇧🇳 +673</option>
                                            <option value="+856">🇱🇦 +856</option>
                                            <option value="+855">🇰🇭 +855</option>
                                            <option value="+95">🇲🇲 +95</option>
                                            <option value="+91">🇮🇳 +91</option>
                                            <option value="+92">🇵🇰 +92</option>
                                            <option value="+880">🇧🇩 +880</option>
                                            <option value="+94">🇱🇰 +94</option>
                                            <option value="+977">🇳🇵 +977</option>
                                            <option value="+975">🇧🇹 +975</option>
                                            <option value="+960">🇲🇻 +960</option>
                                            <option value="+93">🇦🇫 +93</option>
                                            <option value="+98">🇮🇷 +98</option>
                                            <option value="+964">🇮🇶 +964</option>
                                            <option value="+962">🇯🇴 +962</option>
                                            <option value="+966">🇸🇦 +966</option>
                                            <option value="+971">🇦🇪 +971</option>
                                            <option value="+968">🇴🇲 +968</option>
                                            <option value="+974">🇶🇦 +974</option>
                                            <option value="+973">🇧🇭 +973</option>
                                            <option value="+965">🇰🇼 +965</option>
                                            <option value="+90">🇹🇷 +90</option>
                                            <option value="+972">🇮🇱 +972</option>
                                            <option value="+20">🇪🇬 +20</option>
                                            <option value="+27">🇿🇦 +27</option>
                                            <option value="+234">🇳🇬 +234</option>
                                            <option value="+254">🇰🇪 +254</option>
                                            <option value="+255">🇹🇿 +255</option>
                                            <option value="+256">🇺🇬 +256</option>
                                            <option value="+251">🇪🇹 +251</option>
                                            <option value="+212">🇲🇦 +212</option>
                                            <option value="+213">🇩🇿 +213</option>
                                            <option value="+216">🇹🇳 +216</option>
                                            <option value="+218">🇱🇾 +218</option>
                                            <option value="+233">🇬🇭 +233</option>
                                            <option value="+221">🇸🇳 +221</option>
                                            <option value="+225">🇨🇮 +225</option>
                                            <option value="+237">🇨🇲 +237</option>
                                            <option value="+243">🇨🇩 +243</option>
                                            <option value="+242">🇨🇬 +242</option>
                                            <option value="+240">🇬🇶 +240</option>
                                            <option value="+241">🇬🇦 +241</option>
                                            <option value="+250">🇷🇼 +250</option>
                                            <option value="+257">🇧🇮 +257</option>
                                            <option value="+260">🇿🇲 +260</option>
                                            <option value="+263">🇿🇼 +263</option>
                                            <option value="+258">🇲🇿 +258</option>
                                            <option value="+264">🇳🇦 +264</option>
                                            <option value="+267">🇧🇼 +267</option>
                                            <option value="+266">🇱🇸 +266</option>
                                            <option value="+268">🇸🇿 +268</option>
                                            <option value="+261">🇲🇬 +261</option>
                                            <option value="+230">🇲🇺 +230</option>
                                            <option value="+248">🇸🇨 +248</option>
                                            <option value="+61">🇦🇺 +61</option>
                                            <option value="+64">🇳🇿 +64</option>
                                            <option value="+675">🇵🇬 +675</option>
                                            <option value="+679">🇫🇯 +679</option>
                                            <option value="+685">🇼🇸 +685</option>
                                            <option value="+676">🇹🇴 +676</option>
                                            <option value="+678">🇻🇺 +678</option>
                                            <option value="+691">🇫🇲 +691</option>
                                            <option value="+692">🇲🇭 +692</option>
                                            <option value="+680">🇵🇼 +680</option>
                                            <option value="+688">🇹🇻 +688</option>
                                            <option value="+682">🇨🇰 +682</option>
                                            <option value="+683">🇳🇺 +683</option>
                                        </select>
                                        <input type="tel" name="phone" placeholder="Enter phone number" required />
                                    </div>
                                </div>
                            </div>

                            <div className="ksign-ks1916-form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about your laser cutting needs, materials, and any specific requirements..."
                                    rows="4"
                                ></textarea>
                            </div>

                            <div className="ksign-ks1916-form-actions">
                                <button type="submit" className="ksign-ks1916-btn-primary" disabled={inquiryStatus === 'loading'}>
                                    {inquiryStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="ksign-ks1916-btn-secondary" disabled={inquiryStatus === 'loading'}>Cancel</button>
                            </div>
                            {inquiryStatus === 'success' && (
                                <div style={{ color: 'green', marginTop: 10 }}>Thank you for your inquiry! We will contact you soon.</div>
                            )}
                            {inquiryStatus === 'error' && (
                                <div style={{ color: 'red', marginTop: 10 }}>There was an error sending your inquiry. Please try again later.</div>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
