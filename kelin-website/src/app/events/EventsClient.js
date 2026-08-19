"use client";
import { useState } from 'react';
import Header from '../components/Header';
import './events-grayscale.css';

export default function NewsAndEvents() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample news data with images
  const newsData = [
    {
      id: 1,
      type: 'news',
      category: 'Product Launch',
      date: 'December 1, 2025',
      title: 'New Product Launch - Advanced UV Printers',
      shortDescription: "We're excited to announce the launch of our new line of advanced UV printers, offering enhanced productivity and print quality for professional applications.",
      fullContent: `We are thrilled to announce the launch of our revolutionary new line of Advanced UV Printers, marking a significant milestone in digital printing technology. These cutting-edge machines represent months of intensive research, development, and testing to deliver unparalleled performance for professional printing applications.

Our new UV printers feature state-of-the-art LED UV curing technology, ensuring instant drying and superior adhesion on a wide variety of substrates including rigid materials, flexible films, and specialty media. With enhanced resolution capabilities up to 2400 DPI, these printers deliver exceptional print quality with vibrant colors and sharp details.

Key features include automated maintenance systems, advanced color management, variable dot technology, and energy-efficient operation. The printers are designed for high-volume production environments while maintaining consistent quality output.

This launch reinforces our commitment to innovation and providing our customers with the most advanced printing solutions available in the market today.`,
      images: [
        '/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp',
        '/DTF UV Printer SF303-i3200 2ft (1).webp',
        '/LUXOR UV-A3 RTR.webp',
        '/ApolloMax Plus II PZG3208-KV.webp'
      ]
    },
    {
      id: 2,
      type: 'news',
      category: 'Trade Show',
      date: 'November 15, 2025',
      title: 'Trade Show Participation - SGIA Expo 2025',
      shortDescription: 'Visit us at booth #1234 during SGIA Expo to see our latest products and technologies in action. Experience live demonstrations and meet our expert team.',
      fullContent: `Join us at the prestigious SGIA Expo 2025, where Kelin Graphics System will showcase our latest innovations in digital printing technology. Located at booth #1234, our exhibition space will feature live demonstrations of our newest equipment and interactive displays highlighting our comprehensive product portfolio.

Visitors can experience hands-on demonstrations of our advanced UV printers, eco-solvent systems, and cutting-edge finishing equipment. Our technical experts will be available throughout the show to discuss custom solutions, answer technical questions, and provide insights into industry trends.

Special show promotions will be available exclusively for expo attendees, including competitive pricing on selected equipment and extended warranty options. This is an excellent opportunity to see our technology in action and connect with industry professionals.

Don't miss our daily presentations at 2 PM covering "Future Trends in Digital Printing" and networking sessions with industry leaders. We look forward to meeting you at SGIA Expo 2025!`,
      images: [
        '/SMART Eco-Solvent Machine.png',
        '/Machine V2 (1).png',
        '/Apollo Xline (1).png'
      ]
    },
    {
      id: 3,
      type: 'news',
      category: 'Partnership',
      date: 'October 28, 2025',
      title: 'Industry Partnership Announcement',
      shortDescription: 'Strategic partnership with leading technology providers to enhance our digital printing solutions and expand market reach globally.',
      fullContent: `We are pleased to announce our strategic partnership with leading technology providers in the digital printing industry. This collaboration will significantly enhance our ability to deliver comprehensive solutions and expand our global market presence.

The partnership brings together complementary technologies and expertise, enabling us to offer more integrated solutions to our customers. Through this alliance, we will have access to advanced software platforms, enhanced technical support capabilities, and expanded distribution networks.

Key benefits include improved product integration, faster technical support response times, enhanced training programs, and access to emerging technologies. This partnership aligns with our growth strategy and commitment to providing world-class printing solutions.

The collaboration will also focus on joint research and development initiatives, ensuring that our customers benefit from the latest innovations in digital printing technology. We anticipate this partnership will drive significant value for our customers and strengthen our position in the global market.`,
      images: [
        '/K-Sign Letter Shell 3D Printer.png',
        '/GCC Expert LX  EX-52LX  With Stand (1).png',
        '/CMA AL160 Multi-function Channel Letter Bending  Machine (1).png'
      ]
    }
  ];

  // Sample events data with images - Official Exhibition Information
  const eventsData = [
    {
      id: 4,
      type: 'event',
      category: 'Exhibition',
      date: 'July 16-18, 2026',
      title: 'Graphic Expo',
      cardImage: '/News Landing Page/Graphic Expo.webp',
      shortDescription: 'Join us at SMX Manila (MOA) for the premier graphics and printing exhibition showcasing the latest in digital printing technology.',
      fullContent: `Join us at Graphic Expo, the Philippines' premier graphics and printing exhibition, taking place at SMX Manila (MOA) from July 16-18, 2026. This three-day event brings together industry professionals, suppliers, and technology providers from across the region.

Kelin Graphics System will showcase our complete range of printing solutions including the latest UV printers, eco-solvent systems, cutting equipment, and finishing solutions. Our booth will feature live demonstrations, product samples, and interactive displays highlighting our capabilities.

Event highlights include technical seminars, product launches, networking sessions, and exclusive show pricing on selected equipment. Our technical team will be available for consultations and to discuss custom solutions for your specific requirements.

Visit us to explore our latest innovations and discover how our solutions can enhance your printing capabilities.`,
      images: [
        '/DTF UV Printer SF604-i3200 2ft. - High Res (1).webp',
        '/LUXOR UV-A3 RTR.webp',
        '/DTF UV Printer SF303-i3200 2ft (1).webp'
      ],
      location: 'SMX Manila (MOA)'
    },
    {
      id: 5,
      type: 'event',
      category: 'Exhibition',
      date: 'November 26-28, 2026',
      title: 'VisMin Printing, Packaging & Plastics Show',
      cardImage: '/News Landing Page/VisMin PPP 2026.png',
      shortDescription: 'Visit us at SMX Convention Center Seaside Cebu for the Visayas Printing, Packaging & Plastics Show 2026.',
      fullContent: `Kelin Graphics System will join the Visayas Printing, Packaging & Plastics Show 2026 on November 26-28, 2026 at SMX Convention Center Seaside Cebu.

Organized by Global-Link MP and exclusively endorsed by PIAP (Printing Industries Association of the Philippines), this VisMin trade show brings together printing, packaging, and plastics professionals across the Visayas and Mindanao.

Our participation reinforces our commitment to serving customers throughout the Philippines. We will showcase equipment suited for regional applications including packaging solutions, promotional materials, and commercial printing systems.

This event is an excellent opportunity to connect with industry professionals in the region, see live demonstrations, and explore partnerships with local businesses.`,
      images: [
        '/News Landing Page/VisMin PPP 2026.png',
        '/ApolloMax Plus II PZG3208-KV.webp',
        '/SMART Eco-Solvent Machine.png'
      ],
      location: 'SMX Convention Center Seaside Cebu'
    },
    {
      id: 6,
      type: 'event',
      category: 'Exhibition',
      date: 'July 2-4, 2026',
      title: 'Print Philippines (PrintCon)',
      cardImage: '/News Landing Page/Print Philippines 2026.webp',
      shortDescription: 'Visit our booth at SMX Manila (MOA) during the Philippines\' leading print technology exhibition and conference.',
      fullContent: `Print Philippines (PrintCon) is the country's leading print technology exhibition and conference, taking place at SMX Manila (MOA) from July 2-4, 2026. This premier event showcases the latest innovations in printing technology and brings together industry leaders from across the Philippines.

Kelin Graphics System will present our comprehensive portfolio of printing solutions, from industrial-grade printers to cutting-edge finishing equipment. Our display will feature hands-on demonstrations and expert consultations to help you find the perfect solutions for your business needs.

The event offers valuable networking opportunities with industry professionals, educational seminars on the latest printing technologies, and exclusive exhibition pricing on selected equipment.

Join us to discover how our advanced printing solutions can help grow your business and stay ahead of industry trends.`,
      images: [
        '/Apollo Xline (1).png',
        '/K-Sign Letter Shell 3D Printer.png',
        '/GCC Expert LX  EX-52LX  With Stand (1).png'
      ],
      location: 'SMX Manila (MOA)'
    },
    {
      id: 7,
      type: 'event',
      category: 'Exhibition',
      date: 'September 3-5, 2026',
      title: 'PhilConstruct Mindanao',
      cardImage: '/News Landing Page/PhilConstruct Mindanao 2026.png',
      shortDescription: 'Meet us at SMX Convention Center Davao, SM Lanang Premier for PhilConstruct Mindanao.',
      fullContent: `Join Kelin Graphics System at PhilConstruct Mindanao on September 3-5, 2026 at SMX Convention Center Davao, SM Lanang Premier.

This is the premier construction and building exhibition for the Mindanao region. We will showcase signage systems, architectural graphics, and specialized printing applications for construction and building projects.

The exhibition is an excellent platform to connect with construction professionals, architects, and contractors throughout Mindanao. Our team will be available for technical consultations and live product demonstrations.

This event represents our commitment to serving diverse industries across all regions of the Philippines.`,
      images: [
        '/News Landing Page/PhilConstruct Mindanao 2026.png',
        '/CMA AL160 Multi-function Channel Letter Bending  Machine (1).png',
        '/3D Printer (1).webp'
      ],
      location: 'SMX Convention Center Davao, SM Lanang Premier'
    },
    {
      id: 8,
      type: 'event',
      category: 'Exhibition',
      date: 'October 8-10, 2026',
      title: 'Pack Print Plas (Manila)',
      cardImage: '/News Landing Page/PPP Expo.webp',
      shortDescription: 'Don\'t miss our participation at SMX Manila (MOA) for the main packaging, printing, and plastics exhibition in the Philippines.',
      fullContent: `Pack Print Plas Manila is the Philippines' flagship packaging, printing, and plastics exhibition, taking place at SMX Manila (MOA) from October 8-10, 2026. This is the premier trade show for the packaging and printing industry in the country.

As a major participant, Kelin Graphics System will present our complete range of packaging and printing solutions, including specialized equipment for flexible packaging, label printing, and industrial packaging applications.

This exhibition serves as the industry's primary networking and business development platform, attracting thousands of professionals from across Southeast Asia. Our comprehensive display will feature the latest innovations in packaging technology and printing solutions.

Join us at this flagship event to discover cutting-edge solutions and connect with industry leaders who are shaping the future of packaging and printing in the Philippines and beyond.`,
      images: [
        '/DTF UV Printer SF303-i3200 2ft (1).webp',
        '/ApolloMax Plus II PZG3208-KV.webp',
        '/SMART Eco-Solvent Machine.png'
      ],
      location: 'SMX Manila (MOA)'
    }
  ];

  const allItems = [...newsData, ...eventsData];

  const openLightbox = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedItem.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedItem && selectedItem.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <div>
      <Header />
      <main className="events-main">
        {/* Hero Section */}
        <section className="events-hero">
          <div className="hero-page-content">
            <div className="hero-page-text">
              <h1 className="hero-page-title">News & Events</h1>
              <p className="hero-page-subtitle">
                Stay connected with the latest innovations, industry updates, and exciting developments from Kelin Graphics System.
              </p>
              <div className="hero-page-stats">
                <div className="events-stat">
                  <span className="events-stat-number">8+</span>
                  <span className="events-stat-label">Upcoming Events</span>
                </div>
                <div className="events-stat">
                  <span className="events-stat-number">2026</span>
                  <span className="events-stat-label">Exhibition Year</span>
                </div>
              </div>
            </div>
            <div className="hero-page-visual">
              <div className="events-floating-element events-element-1">
                <img src="/messages.png" alt="News Updates" />
              </div>
              <div className="events-floating-element events-element-2">
                <img src="/calendar.png" alt="Industry Events" />
              </div>
              <div className="events-floating-element events-element-3">
                <img src="/office-building.png" alt="Community" />
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="events-news-section">
          <div className="events-section-header">
            <h2>Latest News</h2>
            <p>Stay updated with our latest announcements and product releases</p>
          </div>
          <div className="events-news-grid">
            {newsData.map((news) => (
              <div key={news.id} className="events-news-card" onClick={() => openLightbox(news)}>
                <div className="events-news-header">
                  <span className="events-news-category">{news.category}</span>
                  <span className="events-news-date">{news.date}</span>
                </div>
                <h3>{news.title}</h3>
                <p>{news.shortDescription}</p>
                <div className="events-card-overlay">
                  <span className="events-click-to-view">Click to view details</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Events Section */}
        <section className="events-section">
          <div className="events-section-header">
            <h2>Upcoming Events</h2>
            <p>Visit us at these exciting exhibitions and trade shows</p>
          </div>
          <div className="events-events-grid">
            {eventsData.map((event) => (
              <div key={event.id} className="events-event-card" onClick={() => openLightbox(event)}>
                <div className="events-event-header">
                  <span className="events-event-type">{event.category}</span>
                  <span className="events-event-date">{event.date}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.shortDescription}</p>
                {event.location && (
                  <div className="events-event-location">
                    <strong>Location:</strong> {event.location}
                  </div>
                )}
                <div className="events-card-overlay">
                  <span className="events-click-to-view">Click to view details</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div className="events-lightbox-overlay" onClick={closeLightbox}>
            <div className="events-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="events-lightbox-close" onClick={closeLightbox}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="events-lightbox-body">
                {/* Image Slideshow */}
                {selectedItem.images && selectedItem.images.length > 0 && (
                  <div className="events-lightbox-slideshow">
                    <div className="events-slideshow-container">
                      <img
                        src={selectedItem.cardImage || selectedItem.images[currentImageIndex]}
                        alt={selectedItem.title}
                        className="events-slideshow-image"
                      />

                      {selectedItem.images.length > 1 && (
                        <>
                          <button className="events-slideshow-btn events-prev-btn" onClick={prevImage}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button className="events-slideshow-btn events-next-btn" onClick={nextImage}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>

                          {/* Dot indicators */}
                          <div className="events-slideshow-dots">
                            {selectedItem.images.map((_, index) => (
                              <button
                                key={index}
                                className={`events-dot ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => goToImage(index)}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="events-lightbox-details">
                  <div className="events-lightbox-header">
                    <span className="events-lightbox-category">{selectedItem.category}</span>
                    <span className="events-lightbox-date">{selectedItem.date}</span>
                  </div>

                  <h2 className="events-lightbox-title">{selectedItem.title}</h2>

                  {selectedItem.location && (
                    <div className="events-lightbox-location">
                      <strong>Location:</strong> {selectedItem.location}
                    </div>
                  )}

                  <div className="events-lightbox-content-text">
                    {selectedItem.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}