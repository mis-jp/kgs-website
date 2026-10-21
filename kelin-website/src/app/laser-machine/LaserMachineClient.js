"use client";
import { buildInquiryPayload, submitInquiry } from '../../lib/submitInquiry';

import Header from '../components/Header';
import Link from 'next/link';
import { useState } from 'react';
import './laser-machines.css';

export default function LaserMachine() {
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [selectedMachine, setSelectedMachine] = useState(null);

    const laserMachines = [
        {
            id: 'handheld-fiber-laser',
            name: 'Handheld Fiber Laser',
            image: '/laser-machines/Handheld Fiber Laser.webp',
            description: 'PORTABLE LASER POWER - Professional handheld fiber laser for precision cleaning, welding, and cutting applications with advanced safety features and ergonomic design.',
            specs: [
                'Type: Handheld fiber laser',
                'Application: Cleaning & welding',
                'Safety: Advanced protection',
                'Design: Ergonomic handheld'
            ],
            badge: 'Portable',
            price: 'Contact us for more details',
            link: '/handheld-fiber-laser'
        },
        {
            id: 'hanniu-k1390-150w',
            name: 'Hanniu K1390 CO2 Laser 150W with CCD',
            image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 150w with CCD.webp',
            description: 'PRECISION CO2 CUTTING - Advanced CO2 laser cutting machine with 150W power and CCD camera system for precise positioning and automated cutting operations.',
            specs: [
                'Power: 150W CO2 laser',
                'Model: K1390',
                'Feature: CCD camera system',
                'Application: Precision cutting'
            ],
            badge: 'CCD System',
            price: 'Contact us for more details',
            link: '/hanniu-k1390-co2-laser-150w-ccd'
        },
        {
            id: 'hanniu-k1390-300w',
            name: 'Hanniu K1390 CO2 Laser 300W',
            image: '/laser-machines/Hanniu K1390 CO2 Laser Cutting Machine 300w.webp',
            description: 'HIGH-POWER CO2 LASER - Professional 300W CO2 laser cutting machine with enhanced power for thick materials and high-speed cutting applications.',
            specs: [
                'Power: 300W CO2 laser',
                'Model: K1390',
                'Capability: High-power cutting',
                'Speed: Enhanced cutting speed'
            ],
            badge: 'High Power',
            price: 'Contact us for more details',
            link: '/hanniu-k1390-co2-laser-300w'
        },
        {
            id: 'k-sign-desktop-b330',
            name: 'K-Sign Desktop Laser B330',
            image: '/laser-machines/K-Sign Desktop Laser B330.webp',
            description: 'COMPACT DESKTOP LASER - Professional desktop laser engraving and cutting system with precision control for small to medium-scale operations.',
            specs: [
                'Type: Desktop laser system',
                'Model: B330',
                'Application: Engraving & cutting',
                'Size: Compact desktop'
            ],
            badge: 'Desktop',
            price: 'Contact us for more details',
            link: '/k-sign-desktop-laser-b330'
        },
        {
            id: 'k-sign-fabric-ks1916',
            name: 'K-Sign KS-1916 Laser Fabric Cutting',
            image: '/laser-machines/K-Sign KS-1916 Laser Fabric Cutting.webp',
            description: 'FABRIC CUTTING SPECIALIST - Advanced laser system specifically designed for fabric cutting with clean edges and precision for textile industry applications.',
            specs: [
                'Specialization: Fabric cutting',
                'Model: KS-1916',
                'Feature: Clean edge cutting',
                'Industry: Textile applications'
            ],
            badge: 'Fabric Specialist',
            price: 'Contact us for more details',
            link: '/k-sign-ks-1916-laser-fabric-cutting'
        },
        {
            id: 'k-sign-desktop-marking',
            name: 'K-Sign Desktop Laser Marking',
            image: '/laser-machines/K-sign_Desktop Laser Marking.webp',
            description: 'PRECISION LASER MARKING - Professional desktop laser marking system for permanent marking, engraving, and etching on various materials.',
            specs: [
                'Function: Laser marking',
                'Type: Desktop system',
                'Application: Permanent marking',
                'Materials: Various compatible'
            ],
            badge: 'Marking',
            price: 'Contact us for more details',
            link: '/k-sign-desktop-laser-marking'
        },
        {
            id: 'reci-handheld-welding',
            name: 'Reci Handheld Fiber Laser Welding R-A80 800W',
            image: '/laser-machines/Reci Handheld Fiber Laser Welding Machine R-A80 800W 1.webp',
            description: 'PROFESSIONAL LASER WELDING - High-power 800W handheld fiber laser welding system with advanced beam quality for industrial welding applications.',
            specs: [
                'Power: 800W fiber laser',
                'Model: R-A80',
                'Type: Handheld welding',
                'Application: Industrial welding'
            ],
            badge: 'Welding Pro',
            price: 'Contact us for more details',
            link: '/reci-handheld-fiber-laser-welding'
        },
        {
            id: 'yueming-fiber-1000w',
            name: 'Yueming Fiber Laser CMA-1325C-G-G 1000W',
            image: '/laser-machines/Yueming Fiber Laser  CMA-1325C-G-G 1000w.webp',
            description: 'INDUSTRIAL FIBER LASER - Professional 1000W fiber laser cutting system with large format capability for industrial metal cutting applications.',
            specs: [
                'Power: 1000W fiber laser',
                'Model: CMA-1325C-G-G',
                'Format: Large cutting area',
                'Application: Metal cutting'
            ],
            badge: 'Industrial',
            price: 'Contact us for more details',
            link: '/yueming-fiber-laser-cma-1325c-g-g'
        },
        {
            id: 'yueming-fiber-1500w',
            name: 'Yueming Fiber Laser HL1530C-G-E 1500W IPG',
            image: '/laser-machines/Yueming Fiber Laser HL1530C-G-E 1500w IPG.webp',
            description: 'ULTIMATE FIBER LASER - Premium 1500W IPG fiber laser cutting system with superior beam quality and maximum cutting capability for heavy-duty applications.',
            specs: [
                'Power: 1500W IPG fiber',
                'Model: HL1530C-G-E',
                'Feature: IPG laser source',
                'Capability: Heavy-duty cutting'
            ],
            badge: 'Premium',
            price: 'Contact us for more details',
            link: '/yueming-fiber-laser-hl1530c-g-e'
        }
    ];

    const openInquiryModal = (machine) => {
        setSelectedMachine(machine);
        setInquiryModalOpen(true);
    };

    const closeInquiryModal = () => {
        setInquiryModalOpen(false);
        setSelectedMachine(null);
    };

    const [inquiryStatus, setInquiryStatus] = useState(null); // null | 'success' | 'error' | 'loading'
    const handleInquirySubmit = async (e) => {
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
        formData.append('Page Source', selectedMachine ? selectedMachine.name : 'Laser Machines');
        formData.append('_replyto', formData.get('email') || '');
        formData.append('_subject', `Inquiry: ${selectedMachine ? selectedMachine.name : 'Laser Machines'}`);
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
            <main className="laser-main">
                {/* Hero Section */}
                <section className="laser-hero">
                    <div className="laser-hero-content">
                        <h1 className="laser-hero-title">
                            Professional Laser Machines
                        </h1>
                        <p className="laser-hero-subtitle">
                            Advanced laser cutting, welding, marking, and engraving solutions with precision power control and professional results for industrial applications.
                        </p>
                    </div>
                </section>

                {/* Machines Section */}
                <section className="laser-machines-section">
                    <div className="laser-section-header">
                        <h2 className="laser-section-title">Laser Machine Collection</h2>
                        <p className="laser-section-subtitle">
                            Professional laser solutions for every application
                        </p>
                    </div>

                    <div className="laser-machines-grid">
                        {laserMachines.map((machine, index) => (
                            <div key={machine.id} className="laser-machine-card">
                                <div className="laser-machine-image">
                                    <img
                                        src={machine.image}
                                        alt={machine.name}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    <div className="laser-machine-badge">
                                        {machine.badge}
                                    </div>
                                </div>
                                <div className="laser-machine-content">
                                    <h3 className="laser-machine-title">{machine.name}</h3>
                                    <p className="laser-machine-description">
                                        {machine.description}
                                    </p>
                                    <div className="laser-machine-specs">
                                        {machine.specs.map((spec, specIndex) => (
                                            <div key={specIndex} className="laser-spec-item">
                                                <div className="laser-spec-icon"></div>
                                                <span>{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="laser-machine-action">
                                        <Link
                                            href={machine.link}
                                            className="laser-view-btn"
                                        >
                                            Read More
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                        <span
                                            className="laser-machine-price laser-clickable-price"
                                            onClick={() => openInquiryModal(machine)}
                                        >
                                            {machine.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="laser-features-section">
                    <div className="laser-features-container">
                        <div className="laser-features-header">
                            <h2 className="laser-features-title">Advanced Laser Technology</h2>
                            <p className="laser-section-subtitle">
                                Cutting-edge laser technology for superior precision and performance
                            </p>
                        </div>

                        <div className="laser-features-grid">
                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h3>Precision Laser Control</h3>
                                <p>Advanced fiber and CO2 laser technology with precise beam control for exceptional cutting accuracy and professional results.</p>
                            </div>

                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                    </svg>
                                </div>
                                <h3>High-Power Performance</h3>
                                <p>From 150W to 1500W laser power options delivering superior performance for various materials and thicknesses.</p>
                            </div>

                            <div className="laser-feature-card">
                                <div className="laser-feature-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                </div>
                                <h3>Versatile Applications</h3>
                                <p>Cutting, welding, marking, and engraving capabilities for metals, fabrics, plastics, and various industrial materials.</p>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            {/* Inquiry Modal */}
            {inquiryModalOpen && (
                <div className="laser-modal-overlay" onClick={closeInquiryModal}>
                    <div className="laser-inquiry-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="laser-inquiry-header">
                            <h2>Machine Inquiry - {selectedMachine?.name}</h2>
                            <button
                                className="laser-close-btn"
                                onClick={closeInquiryModal}
                            >
                                ×
                            </button>
                        </div>

                        <form onSubmit={handleInquirySubmit} className="laser-inquiry-form">
                            <div className="laser-form-row">
                                <div className="laser-form-group">
                                    <label htmlFor="firstName">First Name *</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                                <div className="laser-form-group">
                                    <label htmlFor="lastName">Last Name *</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="laser-form-row">
                                <div className="laser-form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"
                                        title="Please enter a valid email address (e.g., name@domain.com)"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div className="laser-form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <div className="laser-phone-input">
                                        <select name="countryCode" className="laser-country-select" defaultValue="+63" required>
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
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="123 456 7890"
                                            pattern="[0-9\\s\\-\\(\\)]{7,15}"
                                            title="Please enter a valid phone number"
                                        required />
                                    </div>
                                </div>
                            </div>

                            <div className="laser-machine-form-row">
                                <div className="laser-form-group">
                                    <label htmlFor="company">Company Name *</label>
                                    <input type="text" id="company" name="company" required />
                                </div>
                                <div className="laser-form-group">
                                    <label htmlFor="address">Complete Address *</label>
                                    <input type="text" id="address" name="address" placeholder="Street, City, State/Province, Country" required />
                                </div>
                            </div>

                            <div className="laser-form-group">
                                <label htmlFor="message">Message / Requirements *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Please describe your laser machine requirements and any specific questions about this machine..."
                                    required
                                ></textarea>
                            </div>

                            <div className="laser-form-actions">
                                <button type="submit" className="laser-btn-primary" disabled={inquiryStatus === 'loading'}>
                                    {inquiryStatus === 'loading' ? 'Sending...' : 'Send Inquiry'}
                                </button>
                                <button type="button" onClick={closeInquiryModal} className="laser-btn-secondary" disabled={inquiryStatus === 'loading'}>
                                    Cancel
                                </button>
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