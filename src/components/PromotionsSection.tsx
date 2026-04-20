import React from 'react';

const PromotionsSection = () => {
    return (
        <section id="social-contact" className="promotions">
            <div className="promo-banner reveal-up">
                <div className="promo-text">
                    <h3>Ücretsiz Mimari Destek</h3>
                    <p>Evinize özel çözümler için profesyonel mimari ekibimiz hizmetinizde.</p>
                    <div className="social-actions">
                        <a href="https://wa.me/905458985757" target="_blank" rel="noopener noreferrer" className="btn-social btn-whatsapp">
                            <i className="fab fa-whatsapp"></i> WhatsApp
                        </a>
                        <a href="https://www.instagram.com/sinop_ozcan_mobilya/" target="_blank" rel="noopener noreferrer" className="btn-social btn-instagram">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromotionsSection;
