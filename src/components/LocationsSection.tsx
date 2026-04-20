import React from 'react';

const LocationsSection = () => {
    return (
        <section className="locations-section reveal-up">
            <div className="section-title">
                <span className="subtitle">Bizi Ziyaret Edin</span>
                <h2>Lokasyonlarımız</h2>
            </div>
            <div className="locations-grid">
                <div className="location-card">
                    <div className="location-info">
                        <h3><i className="fas fa-industry"></i> Atölye / Fabrika</h3>
                        <p>Özel üretim tesisimiz ve imalat merkezimiz.</p>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://maps.google.com/maps?q=41.997012,35.090392&hl=tr&z=15&output=embed"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                    <div className="location-actions">
                        <a href="https://www.google.com/maps/search/?api=1&query=41.997012,35.090392" target="_blank" rel="noopener noreferrer" className="btn-location">Yol Tarifi Al</a>
                    </div>
                </div>

                <div className="location-card">
                    <div className="location-info">
                        <h3><i className="fas fa-store"></i> Showroom / Mağaza</h3>
                        <p>En yeni koleksiyonlarımızı yakından inceleyin.</p>
                    </div>
                    <div className="map-container">
                        <iframe
                            src="https://maps.google.com/maps?q=42.026272,35.147301&hl=tr&z=15&output=embed"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                    <div className="location-actions">
                        <a href="https://www.google.com/maps/search/?api=1&query=42.026272,35.147301" target="_blank" rel="noopener noreferrer" className="btn-location">Yol Tarifi Al</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationsSection;
