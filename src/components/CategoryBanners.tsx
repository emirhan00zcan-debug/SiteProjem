import React from 'react';
import Link from 'next/link';

const CategoryBanners = () => {
    const categories = [
        { name: 'MUTFAK', desc: 'Modern ve Klasik Tasarımlar', img: '/assets/images/premium-kitchen.png', link: '/projeler?category=mutfak' },
        { name: 'YATAK ODASI', desc: 'Konfor ve Şıklık', img: '/assets/images/premium-bedroom.png', link: '/projeler?category=yatak-odasi' },
        { name: 'YAŞAM ALANI', desc: 'TV Ünitesi ve Detaylar', img: '/assets/images/premium-living.png', link: '/projeler?category=yasam-alani' },
        { name: 'BANYO', desc: 'Ferah ve Şık Çözümler', img: '/assets/images/premium-bathroom.png', link: '/projeler?category=banyo' },
        { name: 'ANTRE & PORTMANTO', desc: 'İlk İzlenim Şıklığı', img: '/assets/images/premium-vestiyer.png', link: '/projeler?category=vestiyer' },
        { name: 'ÖZEL TASARIM', desc: 'Size Özel Detaylar', img: '/assets/images/premium-dresuar.png', link: '/projeler?category=ozel-tasarim' }
    ];

    return (
        <section id="category-banners" className="category-banners-section">
            <div className="banner-grid">
                {categories.map((cat, index) => (
                    <div key={index} className="banner-item reveal-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                        <div className="banner-image">
                            <img src={cat.img} alt={cat.name} />
                        </div>
                        <div className="banner-content">
                            <h3>{cat.name}</h3>
                            <p>{cat.desc}</p>
                            <Link href={cat.link} className="btn-banner">İncele</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryBanners;
