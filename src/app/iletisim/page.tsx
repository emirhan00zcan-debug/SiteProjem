'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationsSection from '@/components/LocationsSection';

export default function IletisimPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                <div className="page-header" style={{ backgroundImage: "url('/assets/images/premium-living.png')", height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}></div>
                    <div className="header-content reveal-up" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', fontWeight: 'bold' }}>İletişim</h1>
                        <p style={{ fontSize: '1.2rem', marginTop: '10px', letterSpacing: '1px' }}>Hayallerinizi Birlikte Tasarlayalım</p>
                    </div>
                </div>

                <LocationsSection />

                <section id="contact" className="contact-premium" style={{ paddingTop: '5rem', paddingBottom: '10rem' }}>
                    <div className="contact-glass-container">
                        <div className="contact-info-col reveal-left">
                            <span className="section-subtitle text-accent">BİZE ULAŞIN</span>
                            <h2 className="section-heading text-white">Bir Kahve İçmeye <br /> Bekleriz</h2>
                            <p className="contact-desc">
                                Hayallerinizdeki projeyi konuşmak için sizi showroomumuza davet ediyoruz.
                                Profesyonel ekibimizle size en uygun çözümleri birlikte üretelim.
                            </p>

                            <div className="contact-methods">
                                <div className="method-item">
                                    <div className="method-icon"><i className="fas fa-location-dot"></i></div>
                                    <div className="method-text">
                                        <h4>Merkez Mağaza & Showroom</h4>
                                        <p>Camikebir Mahallesi tütüncü sokak no 6/A, Merkez/Sinop</p>
                                    </div>
                                </div>
                                <div className="method-item">
                                    <div className="method-icon"><i className="fas fa-phone"></i></div>
                                    <div className="method-text">
                                        <h4>Müşteri Hizmetleri</h4>
                                        <p>+90 545 898 57 57</p>
                                    </div>
                                </div>
                                <div className="method-item">
                                    <div className="method-icon"><i className="fab fa-whatsapp"></i></div>
                                    <div className="method-text">
                                        <h4>WhatsApp Destek</h4>
                                        <p>+90 545 898 57 57</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links-premium">
                                <a href="https://www.instagram.com/sinop_ozcan_mobilya/" target="_blank" rel="noopener noreferrer" className="social-pill">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                                <a href="https://wa.me/905458985757" target="_blank" rel="noopener noreferrer" className="social-pill">
                                    <i className="fab fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-col reveal-right">
                            <div className="glass-form-card">
                                <h3>İletişim Formu</h3>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget;
                                    const formData = new FormData(form);
                                    const data = {
                                        name: formData.get('name'),
                                        phone: formData.get('phone'),
                                        email: formData.get('email'),
                                        message: formData.get('message'),
                                    };

                                    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                                    const originalText = submitBtn.innerHTML;
                                    submitBtn.innerHTML = 'GÖNDERİLİYOR...';
                                    submitBtn.disabled = true;

                                    try {
                                        const res = await fetch('/api/contact', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(data),
                                        });
                                        const result = await res.json();
                                        if (result.success) {
                                            alert('Mesajınız başarıyla iletildi. Teşekkür ederiz.');
                                            form.reset();
                                        } else {
                                            alert('Bir hata oluştu: ' + result.error);
                                        }
                                    } catch (err) {
                                        alert('Bağlantı hatası.');
                                    } finally {
                                        submitBtn.innerHTML = originalText;
                                        submitBtn.disabled = false;
                                    }
                                }}>
                                    <div className="form-group">
                                        <input name="name" type="text" placeholder="Adınız Soyadınız" required />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
                                        <input name="phone" type="tel" placeholder="Telefon" required style={{ flex: 1, minWidth: '0' }} />
                                        <input name="email" type="email" placeholder="E-Posta" required style={{ flex: 1, minWidth: '0' }} />
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Projeniz hakkında kısa bir bilgi verin..." rows={5} required></textarea>
                                    </div>
                                    <button type="submit" className="btn-gold-submit">
                                        MESAJI GÖNDER <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
