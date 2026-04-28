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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.8967666497127!2d35.141706!3d42.0253456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087b22d14cb2f57%3A0xc3b53e7784fb41b7!2sK%C3%BC%C3%A7%C3%BCk%20Sanayi%20Sitesi!5e0!3m2!1str!2str!4v1714290000000!5m2!1str!2str"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="location-action">
                            <a href="https://maps.google.com/?q=42.0253456,35.141706" target="_blank" rel="noopener noreferrer" className="btn-location">
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5367666497127!2d35.152706!3d42.0273456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087b22d14cb2f57%3A0xc3b53e7784fb41b7!2sSinop%20Merkez!5e0!3m2!1str!2str!4v1714290000000!5m2!1str!2str"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="location-action">
                            <a href="https://maps.google.com/?q=42.0273456,35.152706" target="_blank" rel="noopener noreferrer" className="btn-location">
                                Yol Tarifi Al
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
