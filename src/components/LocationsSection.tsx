import React from 'react';
import './LocationsSection.css';

export default function LocationsSection() {
    return (
        <section className="locations-section">
            <div className="locations-container">
                <div className="locations-header reveal-up">
                    <span className="locations-subtitle">BİZİ ZİYARET EDİN</span>
                    <h2 className="locations-title">Lokasyonlarımız</h2>
                    <div className="locations-divider"></div>
                </div>

                <div className="locations-grid">
                    {/* Factory Location */}
                    <div className="location-card reveal-up">
                        <div className="location-info">
                            <h3 className="location-name">
                                <i className="fas fa-industry"></i> Atölye / Fabrika
                            </h3>
                            <p className="location-desc">Özel üretim tesisimiz ve imalat merkezimiz.</p>
                        </div>
                        <div className="location-map">
                            <iframe
                                src="https://maps.google.com/maps?q=41.997033,35.090294&hl=tr&z=15&output=embed"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="location-action">
                            <a href="https://maps.google.com/?q=41.997033,35.090294" target="_blank" rel="noopener noreferrer" className="btn-location">
                                Yol Tarifi Al
                            </a>
                        </div>
                    </div>

                    {/* Showroom Location */}
                    <div className="location-card reveal-up" style={{ transitionDelay: '0.2s' }}>
                        <div className="location-info">
                            <h3 className="location-name">
                                <i className="fas fa-store"></i> Showroom / Mağaza
                            </h3>
                            <p className="location-desc">En yeni koleksiyonlarımızı yakından inceleyin.</p>
                        </div>
                        <div className="location-map">
                            <iframe
                                src="https://maps.google.com/maps?q=42.026278,35.147333&hl=tr&z=15&output=embed"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="location-action">
                            <a href="https://maps.google.com/?q=42.026278,35.147333" target="_blank" rel="noopener noreferrer" className="btn-location">
                                Yol Tarifi Al
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
