import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-brand">
                    <h2>ÖZCAN MOBİLYA</h2>
                    <p>Hayallerinizi Tasarlar</p>
                </div>
                <div className="footer-links">
                    <h4>Kategoriler</h4>
                    <ul>
                        <li>Mutfak Dolapları</li>
                        <li>Oturma Grupları</li>
                        <li>Yatak Odası</li>
                        <li>Antre Ürünleri</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>İletişim</h4>
                    <p><i className="fas fa-location-dot"></i> Sinop, Türkiye</p>
                    <p><i className="fas fa-phone"></i> <a href="tel:+903682604885" style={{ color: 'inherit', textDecoration: 'none' }}>+90 368 260 48 85</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Özcan Mobilya. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
