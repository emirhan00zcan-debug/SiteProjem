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
                                        <p><a href="tel:+903682604885" style={{ color: 'inherit', textDecoration: 'none' }}>+90 368 260 48 85</a></p>
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
                            <div className="glass-form-card" style={{ padding: '3.5rem' }}>
                                <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Proje Talep Formu</h3>
                                <p style={{ opacity: 0.8, marginBottom: '2.5rem', fontSize: '0.95rem' }}>
                                    Hayalinizdeki alanı yaratmak için ilk adımı atın. Bize detaylardan bahsedin, en kısa sürede size özel bir planla geri dönelim.
                                </p>
                                <form onSubmit={async (e) => {
                                    e.preventDefault();
                                    const form = e.currentTarget;
                                    const formData = new FormData(form);
                                    const data = {
                                        name: formData.get('name'),
                                        phone: formData.get('phone'),
                                        email: formData.get('email'),
                                        category: formData.get('category'),
                                        contactMethod: formData.get('contactMethod'),
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
                                            alert('Proje talebiniz başarıyla iletildi. En kısa sürede sizinle iletişime geçeceğiz.');
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
                                        <input name="phone" type="tel" placeholder="Telefon Numaranız" required style={{ flex: 1, minWidth: '0' }} />
                                        <input name="email" type="email" placeholder="E-Posta Adresiniz" required style={{ flex: 1, minWidth: '0' }} />
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', gap: '1rem', flexDirection: 'row' }}>
                                        <select name="category" required style={{ flex: 1, minWidth: '0', appearance: 'none', cursor: 'pointer' }}>
                                            <option value="" disabled selected>İlgilendiğiniz Kategori</option>
                                            <option value="Mutfak">Modern Mutfak</option>
                                            <option value="Banyo">Lüks Banyo</option>
                                            <option value="Gardırop">Giyinme Odası / Gardırop</option>
                                            <option value="Ofis">Ofis Mobilyaları</option>
                                            <option value="Tüm Ev">Komple Ev Projesi</option>
                                            <option value="Diğer">Diğer Özel Tasarım</option>
                                        </select>
                                        <select name="contactMethod" required style={{ flex: 1, minWidth: '0', appearance: 'none', cursor: 'pointer' }}>
                                            <option value="" disabled selected>Tercih Edilen İletişim</option>
                                            <option value="Telefon">Telefon ile Aranmak</option>
                                            <option value="WhatsApp">WhatsApp Üzerinden</option>
                                            <option value="E-Posta">E-Posta ile</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" placeholder="Projeniz hakkında detaylı bilgi verin (Ölçüler, tarz tercihleri, özel istekleriniz...)" rows={5} required></textarea>
                                    </div>
                                    <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', opacity: 0.8 }}>
                                        <input type="checkbox" required id="kvkk" style={{ width: 'auto', padding: '0', margin: '0' }} />
                                        <label htmlFor="kvkk" style={{ cursor: 'pointer' }}>Kişisel Verilerin Korunması (KVKK) metnini okudum ve kabul ediyorum.</label>
                                    </div>
                                    <button type="submit" className="btn-gold-submit" style={{ marginTop: '0.5rem' }}>
                                        PROJE TALEBİNİ GÖNDER <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
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
