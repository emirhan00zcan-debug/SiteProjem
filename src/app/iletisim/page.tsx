'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IletisimPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                <div className="page-header" style={{ backgroundImage: "url('/assets/images/premium-living.png')", height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}></div>
                    <div className="header-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem' }}>İletişim</h1>
                        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Hayallerinizi Birlikte Tasarlayalım</p>
                    </div>
                </div>

                <section className="py-20 px-4 md:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <span className="section-subtitle" style={{ color: 'var(--primary-teal)', fontWeight: 600, letterSpacing: '2px' }}>BİZE ULAŞIN</span>
                                <h2 className="text-4xl md:text-5xl font-playfair mb-8" style={{ color: 'var(--secondary-black)', marginTop: '10px' }}>Sinop Özcan Mobilya</h2>
                                <p className="text-gray-600 mb-12 text-lg">
                                    Bölgenin en kapsamlı mobilya üretim ve tasarım merkezi olarak, her türlü sorunuz ve randevu talepleriniz için uzman ekibimizle yanınızdayız.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: 'var(--primary-teal)' }}>
                                            <i className="fas fa-location-dot text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--secondary-black)' }}>Merkez Mağaza & Showroom</h3>
                                            <p className="text-gray-500">Kefevi Mah. İstiklal Cad. No:42, Sinop</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: 'var(--primary-teal)' }}>
                                            <i className="fas fa-industry text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--secondary-black)' }}>Üretim Tesisi & Atölye</h3>
                                            <p className="text-gray-500">Sinop Küçük Sanayi Sitesi, 1. Blok No:15-18</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: 'var(--primary-teal)' }}>
                                            <i className="fas fa-phone text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--secondary-black)' }}>Müşteri Hizmetleri</h3>
                                            <p className="text-gray-500">+90 368 261 41 41</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: '#25D366' }}>
                                            <i className="fab fa-whatsapp text-xl"></i>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--secondary-black)' }}>WhatsApp Destek</h3>
                                            <p className="text-gray-500">+90 545 898 57 57</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 bg-white">
                                <h3 className="text-2xl font-playfair mb-8" style={{ color: 'var(--primary-teal)' }}>İletişim Formu</h3>
                                <form className="space-y-6" onSubmit={async (e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const data = {
                                        name: formData.get('name'),
                                        phone: formData.get('phone'),
                                        email: formData.get('email'),
                                        message: formData.get('message'),
                                    };

                                    try {
                                        const res = await fetch('/api/contact', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify(data),
                                        });
                                        const result = await res.json();
                                        if (result.success) {
                                            alert('Mesajınız başarıyla iletildi. Teşekkür ederiz.');
                                            (e.target as HTMLFormElement).reset();
                                        } else {
                                            alert('Bir hata oluştu: ' + result.error);
                                        }
                                    } catch (err) {
                                        alert('Bir bağlantı hatası oluştu.');
                                    }
                                }}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 opacity-70">Ad Soyad</label>
                                            <input name="name" type="text" required className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#005A64] outline-none transition-all" placeholder="Ahmet Yılmaz" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 opacity-70">Telefon</label>
                                            <input name="phone" type="tel" required className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#005A64] outline-none transition-all" placeholder="0555 --- -- --" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 opacity-70">E-posta</label>
                                        <input name="email" type="email" required className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#005A64] outline-none transition-all" placeholder="ahmet@example.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 opacity-70">Mesajınız</label>
                                        <textarea name="message" rows={4} required className="w-full px-4 py-4 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-[#005A64] outline-none transition-all" placeholder="Projeniz hakkında kısa bir bilgi verin..."></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-5 bg-[#005A64] text-white rounded-xl font-bold hover:bg-[#00474F] transition-all transform hover:-translate-y-1 shadow-lg shadow-teal-900/20">
                                        Mesajı Gönder <i className="fas fa-paper-plane ml-2"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-1000">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.0!2d35.15!3d42.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAxJzM2LjEiTiAzNcKwMDgnNDQuOSJF!5e0!3m2!1str!2str!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </main>

            <Footer />
        </>
    );
}
