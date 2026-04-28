'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const quickLinks = [
    { name: 'Mutfak Modelleri', href: '/projeler?category=mutfak', keywords: ['mutfak', 'dolap', 'kitchen'] },
    { name: 'Banyo Projeleri', href: '/projeler?category=banyo', keywords: ['banyo', 'dolap', 'bathroom'] },
    { name: 'Yatak Odası - Gardırop', href: '/projeler?category=gardirop', keywords: ['yatak', 'gardrop', 'gardirop', 'dolap', 'giyinme'] },
    { name: 'Çocuk Odası Tasarımları', href: '/projeler?category=cocuk', keywords: ['çocuk', 'cocuk', 'bebek', 'genç'] },
    { name: 'TV Ünitesi Tasaımları', href: '/projeler?category=tv', keywords: ['tv', 'televizyon', 'ünite', 'salona'] },
    { name: 'Antre ve Portmanto', href: '/projeler?category=vestiyer', keywords: ['antre', 'portmanto', 'vestiyer', 'ayakkabılık'] },
    { name: 'Çalışma Masası', href: '/projeler?category=calisma', keywords: ['çalışma', 'calisma', 'masa', 'ofis'] },
    { name: 'Kitaplık ve Kütüphane', href: '/projeler?category=kutuphane', keywords: ['kütüphane', 'kutuphane', 'kitaplık'] }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const filteredResults = searchQuery.trim() === '' ? [] : quickLinks.filter(link => 
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        link.keywords.some(kw => kw.includes(searchQuery.toLowerCase()))
    );

    const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchQuery.trim() !== '') {
             if (filteredResults.length > 0) {
                  router.push(filteredResults[0].href);
             } else {
                  router.push(`/projeler?search=${encodeURIComponent(searchQuery)}`);
             }
             setSearchOpen(false);
             setSearchQuery('');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <div className="top-bar">
                <div className="top-bar-content">
                    <div className="top-contact">
                        <span><i className="fas fa-phone"></i> <a href="tel:+903682604885" style={{ color: 'inherit', textDecoration: 'none' }}>+90 368 260 48 85</a></span>
                        <span><i className="fas fa-envelope"></i> info@ozcanmobilya.com</span>
                    </div>
                    <div className="top-social">
                        <a href="https://www.instagram.com/sinop_ozcan_mobilya/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="https://wa.me/905458985757" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            <header>
                <nav className="navbar">
                    <div className="logo-container">
                        <img src="/assets/images/ozcan-logo.png" alt="Özcan Mobilya Logo" className="logo" />
                        <div className="brand-info">
                            <span className="brand-name">ÖZCAN MOBİLYA</span>
                            <span className="slogan">Hayallerinizi Tasarlar</span>
                        </div>
                    </div>
                    <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><Link href="/">Ana Sayfa</Link></li>
                        
                        <li className="has-mega-menu" style={{ position: 'relative' }}>
                            <Link href="/kurumsal">Kurumsal <i className="fas fa-chevron-down"></i></Link>
                            <div className="mega-menu" style={{ padding: '1.5rem', width: '250px', left: '0' }}>
                                <div className="mega-menu-content" style={{ gridTemplateColumns: '1fr', gap: '10px' }}>
                                    <div className="mega-column">
                                        <div className="mega-category-item" style={{ marginBottom: 0 }}>
                                            <ul>
                                                <li><Link href="/hakkimizda"><i className="fas fa-building"></i> Hakkımızda</Link></li>
                                                <li><Link href="/kariyer"><i className="fas fa-briefcase"></i> İş Başvurusu</Link></li>
                                                <li><Link href="/kariyer"><i className="fas fa-id-card"></i> Staj Başvurusu</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="has-mega-menu" style={{ position: 'relative' }}>
                            <Link href="/taahhutlerimiz">Taahhütlerimiz <i className="fas fa-chevron-down"></i></Link>
                            <div className="mega-menu" style={{ padding: '2rem', width: '500px', left: '-150px' }}>
                                <div className="mega-menu-content" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div className="mega-column">
                                        <div className="mega-category-item" style={{ marginBottom: 0 }}>
                                            <ul>
                                                <li><Link href="/taahhutlerimiz/mobilya"><i className="fas fa-couch"></i> Mobilya</Link></li>
                                                <li><Link href="/taahhutlerimiz/mutfak"><i className="fas fa-utensils"></i> Mutfak</Link></li>
                                                <li><Link href="/taahhutlerimiz/yatak-odasi"><i className="fas fa-bed"></i> Yatak Odası</Link></li>
                                                <li><Link href="/taahhutlerimiz/cocuk-odasi"><i className="fas fa-child"></i> Çocuk Odası</Link></li>
                                                <li><Link href="/taahhutlerimiz/giyinme-odasi"><i className="fas fa-tshirt"></i> Giyinme Odası</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-column">
                                         <div className="mega-category-item" style={{ marginBottom: 0 }}>
                                            <ul>
                                                <li><Link href="/taahhutlerimiz/portmanto"><i className="fas fa-door-closed"></i> Portmanto</Link></li>
                                                <li><Link href="/taahhutlerimiz/tv-unitesi"><i className="fas fa-tv"></i> TV Ünitesi</Link></li>
                                                <li><Link href="/taahhutlerimiz/dresuar-ayna"><i className="fas fa-border-all"></i> Dresuar & Ayna</Link></li>
                                                <li><Link href="/taahhutlerimiz/fayans-uygulama"><i className="fas fa-hammer"></i> Fayans Uygulama</Link></li>
                                                <li><Link href="/taahhutlerimiz/elektrik-su-tamirat"><i className="fas fa-tools"></i> Elektrik, Su</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="has-mega-menu">
                            <Link href="/projeler">Projelerimiz <i className="fas fa-chevron-down"></i></Link>
                            <div className="mega-menu">
                                <div className="mega-menu-content">
                                    <div className="mega-column">
                                        <div className="mega-category-item">
                                            <h3>Yaşam Alanları</h3>
                                            <ul>
                                                <li><Link href="/projeler?category=mutfak"><i className="fas fa-utensils"></i> Mutfak</Link></li>
                                                <li><Link href="/projeler?category=banyo"><i className="fas fa-bath"></i> Banyo</Link></li>
                                                <li><Link href="/projeler?category=gardirop"><i className="fas fa-bed"></i> Yatak Odası</Link></li>
                                                <li><Link href="/projeler?category=cocuk"><i className="fas fa-child"></i> Çocuk Odası</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-column">
                                        <div className="mega-category-item">
                                            <h3>Mobilya & Detay</h3>
                                            <ul>
                                                <li><Link href="/projeler?category=tv"><i className="fas fa-tv"></i> TV Ünitesi</Link></li>
                                                <li><Link href="/projeler?category=giyim"><i className="fas fa-tshirt"></i> Giyinme Odası</Link></li>
                                                <li><Link href="/projeler?category=vestiyer"><i className="fas fa-door-open"></i> Antre & Portmanto</Link></li>
                                                <li><Link href="/projeler?category=calisma"><i className="fas fa-laptop-code"></i> Çalışma Masası</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-column">
                                        <div className="mega-category-item">
                                            <h3>Özel Tasarımlar</h3>
                                            <ul>
                                                <li><Link href="/projeler?category=kutuphane"><i className="fas fa-book"></i> Kütüphane</Link></li>
                                                <li><Link href="/projeler?category=ray"><i className="fas fa-columns"></i> Ray Dolap</Link></li>
                                                <li><Link href="/projeler"><i className="fas fa-th"></i> Tüm Projelerimiz</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mega-image-card">
                                        <img src="/assets/images/mockups/modern_projects_cover.png" alt="Öne Çıkan Ürün" />
                                        <div className="mega-image-overlay">
                                            <span>Modern Tasarımlar</span>
                                            <p>Yeni Sezon Koleksiyonu</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li><Link href="/koleksiyon">Hazır Mobilyalar</Link></li>
                        <li><Link href="/uygulamalar">Uygulamalar</Link></li>
                        <li><Link href="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link href="/iletisim">İletişim</Link></li>
                    </ul>
                    <div className="nav-icons">
                        <div className="search-wrapper" style={{ position: 'relative' }}>
                            <input 
                                type="text" 
                                placeholder="Örn: mutfak, gardrop..." 
                                className={`search-slide-input ${searchOpen ? 'open' : ''}`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                            />
                            <i className="fas fa-search" onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(''); }}></i>
                            
                            {searchOpen && searchQuery.trim() !== '' && (
                                <div style={{
                                    position: 'absolute', top: '100%', right: '0', background: '#fff', 
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '12px', 
                                    padding: '10px', minWidth: '220px', zIndex: 1000, marginTop: '20px', overflow: 'hidden'
                                }}>
                                    {filteredResults.length > 0 ? (
                                        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                                            {filteredResults.map((res, i) => (
                                                <li key={i} style={{ borderBottom: i < filteredResults.length - 1 ? '1px solid #f9f9f9' : 'none' }}>
                                                    <Link href={res.href} onClick={() => { setSearchOpen(false); setSearchQuery(''); }} style={{ color: '#1A1A1A', textDecoration: 'none', display: 'flex', alignItems: 'center', fontSize: '0.9rem', padding: '10px 12px', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f4f4f4'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                                                        <i className="fas fa-chevron-right" style={{ marginRight: '10px', color: '#005A64', fontSize: '0.7rem' }}></i> {res.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p style={{ margin: 0, padding: '15px', fontSize: '0.9rem', color: '#888', textAlign: 'center' }}>Sonuç bulunamadı</p>
                                    )}
                                </div>
                            )}
                        </div>
                        <Link href="/favoriler" style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}><i className="far fa-heart"></i></Link>
                        <i className="fas fa-shopping-bag"></i>
                        <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <i className="fas fa-bars"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
