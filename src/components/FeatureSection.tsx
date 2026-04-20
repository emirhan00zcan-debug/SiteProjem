import React from 'react';
import Link from 'next/link';

const FeatureSection = () => {
    return (
        <>
            <section className="feature-section-full bg-light">
                <div className="feature-container">
                    <div className="feature-text-col reveal-left">
                        <div className="feature-text-content">
                            <span className="section-subtitle">ZAMANSIZ ESTETİK</span>
                            <h2 className="section-heading">Modern Minimalizm & <br />Gizli İşlevsellik</h2>
                            <p className="text-rich">
                                Eviniz, karmaşadan uzak, ruhunuzu dinlendiren bir sığınak olmalı. Özcan Mobilya olarak,
                                <strong> modern minimalizm</strong> felsefesini benimsiyor; sadeliği en yüksek işlevsellik ile
                                birleştiriyoruz. Gereksiz detaylardan arındırılmış net çizgiler, gözü yormayan renk paletleri
                                ve dokunma hissi uyandıran premium yüzeyler tasarımlarımızın temelini oluşturuyor.
                            </p>
                            <p className="text-rich">
                                Her bir mobilya parçası, sadece güzel görünmekle kalmaz, aynı zamanda yaşamınızı kolaylaştırır.
                                Akıllı depolama çözümleri, yumuşak kapanan kapaklar ve ergonomik detaylar, günlük kullanımda
                                size konfor sunar.
                            </p>
                            <Link href="/koleksiyon" className="btn-primary mt-4">Koleksiyonu İncele</Link>
                        </div>
                    </div>
                    <div className="feature-img-col reveal-right">
                        <img src="/assets/images/d11_pro_1769533038807.png" alt="Modern Minimalist Salon Tasarımı" className="feature-image" />
                    </div>
                </div>
            </section>

            <section className="feature-section-full bg-dark text-white">
                <div className="feature-container reverse-mobile">
                    <div className="feature-img-col reveal-left">
                        <img src="/assets/images/d12_pro_1769533056001.png" alt="Özcan Mobilya Atölye ve İşçilik" className="feature-image" />
                    </div>
                    <div className="feature-text-col reveal-right">
                        <div className="feature-text-content">
                            <span className="section-subtitle text-accent">SİZE ÖZEL ÜRETİM</span>
                            <h2 className="section-heading">Hayallerinizden <br />Gerçeğe Yolculuk</h2>
                            <p className="text-rich">
                                Standart ölçülere ve sınırlı seçeneklere sıkışıp kalmayın. Bizim için her ev, içinde yaşayanların
                                karakterini yansıtan bir tuvaldir. <strong>"Kişiye Özel Üretim"</strong> anlayışımızla,
                                mekanınızın mimari özelliklerine ve sizin kişisel zevklerinize tam uyum sağlayan mobilyalar
                                üretiyoruz.
                            </p>
                            <ul className="feature-list">
                                <li><i className="fas fa-ruler-combined"></i> Mekanınıza birebir ölçü ve projelendirme</li>
                                <li><i className="fas fa-swatchbook"></i> Sınırsız renk ve malzeme seçenekleri (Lake, Ahşap, MDF)</li>
                                <li><i className="fas fa-pencil-ruler"></i> Ücretsiz iç mimari danışmanlık ve 3D çizim</li>
                            </ul>
                            <Link href="/iletisim" className="btn-outline-light mt-4">Bizimle İletişime Geçin</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureSection;
