'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    { id: 'pro-siena', category: 'mutfak', title: 'Siena Klasik Mutfak', detail: '32 m² | 95.000 TL', image: '/assets/images/premium-kitchen.png' },
    { id: 'pro-ada', category: 'mutfak', title: 'Modern Ada Mutfak', detail: '40 m² | 125.000 TL', image: '/assets/images/premium-kitchen-2.png' },
    { id: 'pro-venedik', category: 'yatak', title: 'Venedik Gardırop', detail: 'Glass Edition | 52.000 TL', image: '/assets/images/premium-bedroom.png' },
    { id: 'pro-mermer', category: 'banyo', title: 'Mermer Hilton Banyo', detail: 'Twin Set | 34.000 TL', image: '/assets/images/premium-bathroom.png' },
    { id: 'pro-smart', category: 'antre', title: 'Smart Vestiyer', detail: 'Entegre Puf | 22.000 TL', image: '/assets/images/premium-vestiyer.png' },
    { id: 'pro-nero', category: 'tv', title: 'Nero TV Ünitesi', detail: 'Modern Stil | 38.000 TL', image: '/assets/images/premium-living.png' },
    { id: 'pro-lake', category: 'projeler', title: 'Zarif Lake Dresuar', detail: 'Modern Stil | 14.500 TL', image: '/assets/images/premium-dresuar.png' },
    { id: 'pro-a1', category: 'mutfak', title: 'Pro Model A1', detail: '48.000 TL', image: '/assets/images/pro-mutfak-6.png' },
    { id: 'pro-b2', category: 'mutfak', title: 'Pro Model B2', detail: '52.000 TL', image: '/assets/images/pro-mutfak-7.png' },
    { id: 'pro-c3', category: 'mutfak', title: 'Pro Model C3', detail: '56.000 TL', image: '/assets/images/pro-mutfak-11.png' },
    { id: 'pro-d4', category: 'mutfak', title: 'Pro Model D4', detail: '44.000 TL', image: '/assets/images/pro-mutfak-3.png' },
];

const categories = [
    { id: 'all', title: 'Tümü' },
    { id: 'mutfak', title: 'Mutfak' },
    { id: 'yatak', title: 'Yatak Odası' },
    { id: 'banyo', title: 'Banyo' },
    { id: 'tv', title: 'TV Ünitesi' },
    { id: 'antre', title: 'Antre & Portmanto' },
    { id: 'projeler', title: 'Özel Projeler' }
];

export default function KoleksiyonPage() {
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash && categories.some(cat => cat.id === hash)) {
            setFilter(hash);
        }
    }, []);

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <>
            <Navbar />

            <div className="page-header" style={{ backgroundImage: "url('/assets/images/premium-living.png')", height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}></div>
                <div className="header-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem' }}>Özel Koleksiyon</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Sanat ve Zanaatın Buluşma Noktası</p>
                </div>
            </div>

            <section id="products" className="products-section">
                <div className="section-title">
                    <h2>Koleksiyonlarımız</h2>
                    <div className="filter-buttons">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="product-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.title} />
                                <div className="overlay">
                                    <Link href={`/projeler?id=${product.id}`} className="quick-view">İncele</Link>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category.toUpperCase()}</span>
                                <h3>{product.title}</h3>
                                <p>{product.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
