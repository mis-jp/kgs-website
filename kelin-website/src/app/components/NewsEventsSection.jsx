"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./news-events.css";

export default function NewsEventsSection() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const newsEvents = [
        {
            id: 1,
            title: "PhilConstruct Mindanao",
            date: "September 3-5, 2026",
            category: "Exhibition",
            image: "/News Landing Page/PhilConstruct Mindanao 2026.png",
            coverImage: "/News Landing Page/PhilConstruct Mindanao 2026.png",
            description: "Meet us at SMX Convention Center Davao, SM Lanang Premier for PhilConstruct Mindanao.",
            fullDescription: "Join Kelin Graphics System at PhilConstruct Mindanao, taking place on September 3-5, 2026 at SMX Convention Center Davao, SM Lanang Premier. This regional construction and building exhibition is a key venue for signage, architectural graphics, and industrial printing solutions serving Mindanao.",
            location: "SMX Convention Center Davao, SM Lanang Premier",
            time: "Exhibition hours as posted on-site",
            highlights: [
                "Construction and building industry showcase",
                "Signage and architectural graphics solutions",
                "Live product demonstrations",
                "Technical consultations with Kelin specialists",
                "Networking with contractors and industry partners"
            ],
            contact: {
                email: "info@kelinph.com",
                telephone: "(02) 8711-1888",
                mobile: "0917 678 0608 | 0908 196 0836",
                website: "www.kelingraphics.com/events/"
            }
        },
        {
            id: 2,
            title: "Pack Print Plas (Manila)",
            date: "October 8-10, 2026",
            category: "Exhibition",
            image: "/News Landing Page/PPP Expo.webp",
            coverImage: "/News Landing Page/PPP Expo - Cover.webp",
            description: "Don't miss our participation at SMX Manila (MOA) for the main packaging, printing, and plastics exhibition in the Philippines.",
            fullDescription: "Don't miss our participation at SMX Manila (MOA) for the main packaging, printing, and plastics exhibition in the Philippines. This comprehensive trade show covers the entire spectrum of packaging, printing, and plastics industries with innovative solutions and technologies.",
            location: "SMX Manila (MOA), Pasay City, Philippines",
            time: "9:30 AM - 6:30 PM daily",
            highlights: [
                "Packaging Innovation Showcase",
                "Sustainable Solutions Focus",
                "Advanced Printing Technologies",
                "Plastics Industry Trends",
                "Supply Chain Solutions",
                "Business Matching Sessions"
            ],
            contact: {
                email: "info@kelinph.com",
                telephone: "(02) 8711-1888",
                mobile: "0917 678 0608 | 0908 196 0836",
                website: "www.kelingraphics.com/events/"
            }
        },
        {
            id: 3,
            title: "VisMin Printing, Packaging & Plastics Show",
            date: "November 26-28, 2026",
            category: "Exhibition",
            image: "/News Landing Page/VisMin PPP 2026.png",
            coverImage: "/News Landing Page/VisMin PPP 2026.png",
            description: "Visit us at SMX Convention Center Seaside Cebu for the Visayas Printing, Packaging & Plastics Show 2026.",
            fullDescription: "Kelin Graphics System will join the Visayas Printing, Packaging & Plastics Show 2026 on November 26-28, 2026 at SMX Convention Center Seaside Cebu. Organized by Global-Link MP and exclusively endorsed by PIAP, this VisMin trade show brings together printing, packaging, and plastics professionals across the Visayas and Mindanao.",
            location: "SMX Convention Center Seaside Cebu",
            time: "Exhibition hours as posted on-site",
            highlights: [
                "Printing, packaging, and plastics showcase",
                "Regional VisMin industry networking",
                "Live equipment demonstrations",
                "Endorsed by PIAP (Printing Industries Association of the Philippines)",
                "Organized by Global-Link MP"
            ],
            contact: {
                email: "info@kelinph.com",
                telephone: "(02) 8711-1888",
                mobile: "0917 678 0608 | 0908 196 0836",
                website: "www.kelingraphics.com/events/"
            }
        }
    ];

    const openModal = (event) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEvent(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="news-events-section">
            <div className="news-events-container">
                <div className="news-events-header">
                    <h2 className="news-events-title">News & Events</h2>
                    <p className="news-events-subtitle">Stay updated with our latest announcements and upcoming events</p>
                </div>

                <div className="news-events-grid">
                    {newsEvents.map((event) => (
                        <div key={event.id} className="news-event-card">
                            <div className="event-image-container">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    width={300}
                                    height={200}
                                    className="event-image"
                                />
                                <div className="event-category">{event.category}</div>
                            </div>
                            <div className="event-content">
                                <div className="event-date">{event.date}</div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                <button
                                    onClick={() => openModal(event)}
                                    className="event-link"
                                >
                                    Read More
                                    <svg className="event-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7" />
                                        <path d="M7 7H17V17" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="view-all-container">
                    <Link href="/events" className="view-all-button">
                        <span>View All News & Events</span>
                        <div className="view-all-arrow">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12H19" />
                                <path d="M12 5L19 12L12 19" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isModalOpen && selectedEvent && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="events-image-banner"></div>
                        <div className="modal-header">
                            <button onClick={closeModal} className="modal-close">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18" />
                                    <path d="M6 6L18 18" />
                                </svg>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="modal-image-container">
                                <Image
                                    src={selectedEvent.coverImage || selectedEvent.image}
                                    alt={selectedEvent.title}
                                    width={500}
                                    height={300}
                                    className="modal-image"
                                />
                                <div className="modal-category">{selectedEvent.category}</div>
                            </div>

                            <div className="modal-details">
                                <div className="modal-date">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="date-icon">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {selectedEvent.date}
                                </div>
                                <h2 className="modal-title">{selectedEvent.title}</h2>
                                <p className="modal-description">{selectedEvent.fullDescription}</p>

                                <div className="modal-info-grid">
                                    <div className="modal-info-item">
                                        <h4>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="info-icon">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            Location
                                        </h4>
                                        <p>{selectedEvent.location}</p>
                                    </div>
                                    <div className="modal-info-item">
                                        <h4>
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="info-icon">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12,6 12,12 16,14" />
                                            </svg>
                                            Time
                                        </h4>
                                        <p>{selectedEvent.time}</p>
                                    </div>
                                </div>

                                <div className="modal-highlights">
                                    <h4>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="highlights-icon">
                                            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                        </svg>
                                        Event Highlights
                                    </h4>
                                    <ul className="highlights-list">
                                        {selectedEvent.highlights.map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-contact">
                                    <h4>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-icon">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        Contact Information
                                    </h4>
                                    <div className="contact-details">
                                        <p><strong>Email:</strong> {selectedEvent.contact.email}</p>
                                        <p><strong>Telephone:</strong> {selectedEvent.contact.telephone}</p>
                                        <p><strong>Mobile:</strong> {selectedEvent.contact.mobile}</p>
                                        <div className="modal-connect-wrapper">
                                            <Link href="/contact#inquiry-form" className="modal-connect-button" onClick={closeModal}>
                                                Connect with Us
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}