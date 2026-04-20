'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function KariyerPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            applicationType: formData.get('applicationType'),
            desiredPosition: formData.get('desiredPosition'),
            portfolioLink: formData.get('portfolioLink'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/job-applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const result = await res.json();
            
            if (result.success) {
                setSubmitStatus({ success: true, message: 'Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.' });
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus({ success: false, message: result.error || 'Bir hata oluştu.' });
            }
        } catch (err) {
            setSubmitStatus({ success: false, message: 'Bağlantı hatası oluştu. Lütfen tekrar deneyin.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '1.2rem 1.5rem',
        borderRadius: '12px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef',
        outline: 'none',
        fontSize: '1rem',
        fontFamily: "'Montserrat', sans-serif",
        color: 'var(--secondary-black)',
        transition: 'var(--transition)',
        marginBottom: '1.5rem'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--accent-grey)',
        marginBottom: '0.5rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '1px'
    };

    return (
        <div style={{ backgroundColor: 'var(--white)', minHeight: '100vh' }}>
            <Navbar />

            <main>
                {/* Premium Hero Section */}
                <div className="page-header" style={{
                    backgroundImage: "url('/assets/images/premium-living.png')",
                    height: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7))' }}></div>
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white', padding: '0 20px' }}>
                        <span className="section-label" style={{ color: 'var(--white)', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(5px)', border: '1px solid rgba(255,255,255,0.3)' }}>
                            Özcan Mobilya Ailesi
                        </span>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4.5rem', marginTop: '1rem', marginBottom: '1.5rem', textShadow: '0 5px 15px rgba(0,0,0,0.3)' }}>
                            Kariyer & Staj
                        </h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', opacity: 0.9, lineHeight: '1.8' }}>
                            Sanata dönüşen ahşabın yolculuğunda, yenilikçi fikirleriniz ve yeteneğinizle ekibimize değer katın. Geleceğin tasarımlarını birlikte inşa edelim.
                        </p>
                    </div>
                </div>

                {/* Culture and Values Section (Using existing globals.css classes) */}
                <section className="about-values-section" style={{ position: 'relative', zIndex: 10, marginTop: '-3rem', paddingTop: '3rem', WebkitMaskImage: 'none' }}>
                    <div className="container" style={{ padding: '0 5%' }}>
                        <div className="values-grid">
                            <div className="value-card" style={{ backgroundColor: 'var(--white)' }}>
                                <div className="value-icon"><i className="fas fa-hammer"></i></div>
                                <h3>Usta-Çırak Geleneği</h3>
                                <p>Deneyimli ustalarımızın bilgi birikimini genç yeteneklerle buluşturuyor, zanaat kültürümüzü modern tasarımla harmanlıyoruz.</p>
                            </div>
                            <div className="value-card" style={{ backgroundColor: 'var(--white)' }}>
                                <div className="value-icon"><i className="fas fa-lightbulb"></i></div>
                                <h3>Yaratıcı Vizyon</h3>
                                <p>Mimarlarımız ve tasarımcılarımız için sınırları zorlayabilecekleri, yenilikçi fikirlere açık, özgür bir çalışma ortamı sunuyoruz.</p>
                            </div>
                            <div className="value-card" style={{ backgroundColor: 'var(--white)' }}>
                                <div className="value-icon"><i className="fas fa-users-cog"></i></div>
                                <h3>Sürdürülebilir Kariyer</h3>
                                <p>Ahşaba saygı duyan yaklaşımımızla hem doğayı hem de çalışanlarımızın kariyer gelişimini uzun vadeli olarak destekliyoruz.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Application Section */}
                <section style={{ padding: '6rem 5%', backgroundColor: 'var(--light-bg)' }}>
                    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                        <div className="split-screen-row" style={{ alignItems: 'flex-start' }}>
                            
                            {/* HR Info Side */}
                            <div className="split-screen-col" style={{ flex: '1' }}>
                                <span className="section-label">DÜNYAMIZA KATILIN</span>
                                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3.5rem', color: 'var(--secondary-black)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                                    İş ve Staj<br/><span style={{ color: 'var(--primary-teal)' }}>Başvurusu</span>
                                </h2>
                                <p style={{ fontSize: '1.2rem', color: 'var(--accent-grey)', lineHeight: '1.8', marginBottom: '3rem' }}>
                                    Ayrıcalıklı ve kaliteli mobilya üretiminin öncüsü olan Özcan Mobilya'da kariyer yapmak veya staj programımıza katılmak için yandaki formu doldurabilirsiniz.
                                </p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--white)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--primary-teal)', boxShadow: 'var(--shadow-soft)' }}>
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary-black)', marginBottom: '5px' }}>İnsan Kaynakları</h4>
                                            <p style={{ color: 'var(--accent-grey)' }}>ik@ozcanmobilya.com</p>
                                        </div>
                                    </div>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--white)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--primary-teal)', boxShadow: 'var(--shadow-soft)' }}>
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary-black)', marginBottom: '5px' }}>Ön Görüşme ve Bilgi</h4>
                                            <p style={{ color: 'var(--accent-grey)' }}>+90 368 261 41 41</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ 
                                    marginTop: '4rem', 
                                    padding: '3rem', 
                                    backgroundColor: 'var(--primary-teal)', 
                                    borderRadius: '20px', 
                                    color: 'var(--white)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0, 90, 100, 0.2)'
                                }}>
                                    <i className="fas fa-quote-right" style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '10rem', opacity: 0.1 }}></i>
                                    <p style={{ fontSize: '1.3rem', fontStyle: 'italic', lineHeight: '1.8', position: 'relative', zIndex: 2, margin: 0, color: 'var(--white)' }}>
                                        "İyi bir mobilya, sadece kaliteli malzemeyle değil, o malzemeye ruh katan ustaların tutkusuyla doğar."
                                    </p>
                                </div>
                            </div>

                            {/* Application Form Side */}
                            <div className="split-screen-col" style={{ flex: '1.3' }}>
                                <div style={{ 
                                    backgroundColor: 'var(--white)', 
                                    padding: '4rem 3rem', 
                                    borderRadius: '24px', 
                                    boxShadow: 'var(--shadow-bold)',
                                    border: '1px solid rgba(0,0,0,0.03)'
                                }}>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--secondary-black)', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '2px solid var(--light-bg)' }}>
                                        Başvuru Formu
                                    </h3>
                                    
                                    {submitStatus && (
                                        <div style={{ 
                                            padding: '1.5rem', 
                                            marginBottom: '2rem', 
                                            borderRadius: '12px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '15px',
                                            backgroundColor: submitStatus.success ? '#f0fdf4' : '#fef2f2',
                                            color: submitStatus.success ? '#15803d' : '#b91c1c',
                                            border: `1px solid ${submitStatus.success ? '#bbf7d0' : '#fecaca'}`
                                        }}>
                                            <i className={`fas ${submitStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`} style={{ fontSize: '1.5rem' }}></i>
                                            <p style={{ margin: 0, fontWeight: 500, lineHeight: 1.5 }}>{submitStatus.message}</p>
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                            <div>
                                                <label style={labelStyle}>Ad Soyad *</label>
                                                <input name="name" type="text" required style={inputStyle} placeholder="Adınız ve Soyadınız" />
                                            </div>
                                            <div>
                                                <label style={labelStyle}>Cep Telefonu *</label>
                                                <input name="phone" type="tel" required style={inputStyle} placeholder="05XX XXX XX XX" />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <label style={labelStyle}>E-posta Adresi *</label>
                                            <input name="email" type="email" required style={inputStyle} placeholder="ornek@email.com" />
                                        </div>

                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                            <div>
                                                <label style={labelStyle}>Başvuru Türü *</label>
                                                <div style={{ position: 'relative' }}>
                                                    <select name="applicationType" required style={{...inputStyle, appearance: 'none', cursor: 'pointer'}}>
                                                        <option value="" disabled selected>Seçiniz</option>
                                                        <option value="job">İş Başvurusu</option>
                                                        <option value="internship">Staj Başvurusu</option>
                                                    </select>
                                                    <i className="fas fa-chevron-down" style={{ position: 'absolute', right: '1.5rem', top: '40%', transform: 'translateY(-50%)', color: 'var(--accent-grey)', pointerEvents: 'none' }}></i>
                                                </div>
                                            </div>
                                            <div>
                                                <label style={labelStyle}>İlgilendiğiniz Pozisyon</label>
                                                <input name="desiredPosition" type="text" style={inputStyle} placeholder="Örn: İç Mimar, CNC Operatörü" />
                                            </div>
                                        </div>

                                        <div>
                                            <label style={labelStyle}>Portfolyo Linki (Varsa)</label>
                                            <input name="portfolioLink" type="url" style={inputStyle} placeholder="Behance, LinkedIn, Drive vb." />
                                        </div>

                                        <div>
                                            <label style={labelStyle}>Ön Yazı / Mesajınız *</label>
                                            <textarea name="message" rows={5} required style={{...inputStyle, resize: 'vertical', minHeight: '150px'}} placeholder="Deneyimlerinizden ve neden bizimle çalışmak istediğinizden kısaca bahsedin..."></textarea>
                                        </div>

                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            style={{
                                                width: '100%',
                                                padding: '1.2rem',
                                                backgroundColor: 'var(--primary-teal)',
                                                color: 'var(--white)',
                                                border: 'none',
                                                borderRadius: '12px',
                                                fontSize: '1.1rem',
                                                fontWeight: 700,
                                                letterSpacing: '1px',
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '10px',
                                                transition: 'var(--transition)',
                                                boxShadow: '0 10px 20px rgba(0, 90, 100, 0.2)',
                                                opacity: isSubmitting ? 0.7 : 1,
                                                marginTop: '1rem'
                                            }}
                                            onMouseOver={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 90, 100, 0.3)';
                                                    e.currentTarget.style.backgroundColor = '#00474F';
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.transform = 'translateY(0)';
                                                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 90, 100, 0.2)';
                                                    e.currentTarget.style.backgroundColor = 'var(--primary-teal)';
                                                }
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <><i className="fas fa-circle-notch fa-spin"></i> Gönderiliyor...</>
                                            ) : (
                                                <><i className="fas fa-paper-plane"></i> Başvuruyu Gönder</>
                                            )}
                                        </button>
                                        <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#9ca3af', marginTop: '1.5rem' }}>
                                            Başvurunuz gizlilik ilkelerimiz kapsamında değerlendirilecek ve üçüncü şahıslarla paylaşılmayacaktır.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
