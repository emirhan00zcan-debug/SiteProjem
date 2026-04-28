"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryBanners from '@/components/CategoryBanners';
import FeatureSection from '@/components/FeatureSection';
import PaymentSection from '@/components/PaymentSection';
import PromotionsSection from '@/components/PromotionsSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <CategoryBanners />
            <FeatureSection />
            <section id="about" className="about-modern">
                <div className="about-overlay-wrapper">
                    <div className="about-image-main reveal-left">
                        <img src="/assets/images/img.png" alt="Özcan Mobilya Atölye" />
                        <div className="experience-badge">
                            <span className="years">20+</span>
                            <span className="text">Yıllık <br /> Tecrübe</span>
                        </div>
                    </div>
                    <div className="about-content-card reveal-right">
                        <span className="section-subtitle">HİKAYEMİZ</span>
                        <h2 className="section-heading">Sanat ve Ustalığın <br /> Buluşma Noktası</h2>
                        <p className="text-premium">
                            2004 yılından bu yana Sinop'ta, sadece mobilya değil, yaşam alanlarınıza ruh katan hikayeler tasarlıyoruz.
                            <strong> Özcan Mobilya</strong> olarak, geleneksel ustalığı modern tasarım vizyonuyla harmanlıyoruz.
                        </p>
                        <p className="text-premium">
                            Her detayda kaliteyi, her çizgide estetiği arayanlar için; mutfaktan banyoya, yatak odasından özel projelere
                            kadar geniş bir yelpazede butik hizmet sunuyoruz. Eviniz bizim tuvalimiz, hayalleriniz ise ilham kaynağımız.
                        </p>
                        <div className="about-stats-modern">
                            <div className="stat-box">
                                <span className="count">1000+</span>
                                <p>Mutlu Yuva</p>
                            </div>
                            <div className="stat-box separator"></div>
                            <div className="stat-box">
                                <span className="count">Sinop</span>
                                <p>Merkez Şube</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PaymentSection />
            <PromotionsSection />
            <section id="contact" className="contact-premium">
                <div className="contact-glass-container">
                    <div className="contact-info-col">
                        <span className="section-subtitle text-accent">İLETİŞİM</span>
                        <h2 className="section-heading text-white">Bir Kahve İçmeye <br /> Bekleriz</h2>
                        <p className="contact-desc">
                            Hayallerinizdeki projeyi konuşmak için sizi showroomumuza davet ediyoruz.
                            Profesyonel ekibimizle size en uygun çözümleri birlikte üretelim.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><i className="fas fa-location-dot"></i></div>
                                <div className="method-text">
                                    <h4>Adres</h4>
                                    <p>Camikebir mahallesi tütüncü Sokak no 6/A, 57000 Sinop Merkez/Sinop/Turkiye</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><i className="fas fa-phone"></i></div>
                                <div className="method-text">
                                    <h4>Telefon</h4>
                                    <p>+90 545 898 57 57</p>
                                </div>
                            </div>
                            <div className="method-item">
                                <div className="method-icon"><i className="fas fa-envelope"></i></div>
                                <div className="method-text">
                                    <h4>E-Posta</h4>
                                    <p>ozcan.mobilya.sinop@gmail.com</p>
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

                    <div className="contact-form-col">
                        <div className="glass-form-card">
                            <h3>Hızlı İletişim Formu</h3>
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const formData = new FormData(form);
                                const data = {
                                    name: formData.get('name'),
                                    email: formData.get('email'),
                                    category: formData.get('category'),
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
                                    if (res.ok) {
                                        alert('Mesajınız başarıyla iletildi.');
                                        form.reset();
                                    } else {
                                        alert('Bir hata oluştu, lütfen tekrar deneyin.');
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
                                <div className="form-group">
                                    <input name="email" type="email" placeholder="E-Posta Adresiniz" required />
                                </div>
                                <div className="form-group">
                                    <select name="category" required>
                                        <option value="">İlgilendiğiniz Kategori</option>
                                        <option value="mutfak">Mutfak</option>
                                        <option value="banyo">Banyo</option>
                                        <option value="gardirop">Yatak Odası / Gardırop</option>
                                        <option value="ozel">Özel Proje</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" placeholder="Mesajınız" rows={4} required></textarea>
                                </div>
                                <button type="submit" className="btn-gold-submit">
                                    GÖNDER <i className="fas fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <NewsletterSection />
            <Footer />
        </>
    );
}
