"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TaahhutlerimizPage() {
    const categories = [
        { name: 'Mobilya', slug: 'mobilya', icon: 'fas fa-couch', image: '/assets/images/temiz/1.jpeg' },
        { name: 'Mutfak', slug: 'mutfak', icon: 'fas fa-utensils', image: '/assets/images/temiz/8.jpeg' },
        { name: 'TV Ünitesi', slug: 'tv-unitesi', icon: 'fas fa-tv', image: '/assets/images/temiz/16.jpeg' },
        { name: 'Yatak Odası', slug: 'yatak-odasi', icon: 'fas fa-bed', image: '/assets/images/temiz/26.jpeg' },
        { name: 'Giyinme Odası', slug: 'giyinme-odasi', icon: 'fas fa-tshirt', image: '/assets/images/temiz/18.jpeg' },
        { name: 'Çocuk Odası', slug: 'cocuk-odasi', icon: 'fas fa-child', image: '/assets/images/temiz/11.jpeg' },
        { name: 'Dolaplar', slug: 'dolaplar', icon: 'fas fa-door-closed', image: '/assets/images/temiz/4.jpeg' },
        { name: 'Dresuar ve Ayna', slug: 'dresuar-ayna', icon: 'fas fa-border-all', image: '/assets/images/temiz/3.jpeg' },
        { name: 'Portmanto', slug: 'portmanto', icon: 'fas fa-door-open', image: '/assets/images/temiz/15.jpeg' },
        { name: 'Su ve Tesisat', slug: 'su-ve-tesisat', icon: 'fas fa-tools', image: '/assets/images/temiz/10.jpeg' },
        { name: 'Fayans Uygulama', slug: 'fayans-uygulama', icon: 'fas fa-hammer', image: '/assets/images/temiz/12.jpeg' },
    ];

    return (
        <main className="bg-background">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-dark text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <img src="/assets/images/temiz/8.jpeg" alt="Özcan Mobilya Taahhütlerimiz" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gold">Taahhütlerimiz</h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        Hayallerinizi gerçeğe dönüştüren kaliteli ve güvenilir hizmetlerimiz.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-3xl p-10 md:p-16 shadow-xl border border-gold/20 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-bl-full pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <p className="text-2xl text-dark font-bold mb-6 leading-relaxed">
                                2004 yılı itibariyle imalat sürecimiz başlamış olup 20 yılı aşkın süredir taahhüt ettiğimiz işleri en kaliteli bir şekilde yapmaktayız.
                            </p>
                            
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Mobilya imalat ve tadilat işlerinde Sinop'ta lider olmamızın en önemli sebebi işini seven ve özverili çalışan mutlu takım arkadaşlarımızla müşterilerimize sunduğumuz kaliteli hizmetlerimizdir.
                            </p>
                            
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Mobilya üretimi, mutfak, yatak odası, giyinme odası gibi evinizin ihtiyacı tüm ürünleri hayal ettiğiniz tasarımlarla hazırlayan firmamız kendi alanında daha bir çok faaliyetler ve taahhütler yapmaktadır. Kalite standartları uygulanan üretim süreçlerinden sonra müşteri ile hatasız buluşturulan ürünlerle müşteri memnuniyeti daima en üst düzeyde tutulmaktadır.
                            </p>

                            <div className="bg-white border-l-4 border-gold p-6 rounded-r-lg mb-8 backdrop-blur-sm">
                                <p className="m-0 text-dark font-medium text-lg">
                                    <i className="fas fa-lightbulb text-gold mr-3"></i>
                                    Ürünlerimizde kullanılan malzemelerin çeşitleri ve tüm detaylarını öğrenmek için satış ve pazarlama ekibimizden destek alabilirsiniz.
                                </p>
                            </div>

                            <h3 className="text-3xl font-bold text-dark mt-12 mb-8">Hizmet Kategorilerimiz</h3>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
                                {categories.filter(c => c.slug !== 'su-ve-tesisat' && c.slug !== 'elektrik-su-tamirat').map((cat, index) => (
                                    <Link key={index} href={`/taahhutlerimiz/${cat.slug}`} className="group bg-gradient-to-br from-gold/5 to-transparent border-2 border-gold/30 hover:border-gold px-4 py-3 rounded-xl text-dark hover:text-gold hover:shadow-lg transition-all flex items-center gap-3 font-semibold">
                                        <i className={`${cat.icon} text-gold group-hover:scale-125 transition-transform`}></i>
                                        <span className="text-sm">{cat.name}</span>
                                    </Link>
                                ))}
                                <span className="bg-gray-100 border-2 border-gray-200 px-4 py-3 rounded-xl text-gray-600 flex items-center font-semibold text-sm">
                                    <i className="fas fa-plus text-gold mr-2"></i> Daha Fazla
                                </span>
                            </div>

                            <div className="text-center">
                                <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold/80 text-dark px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-gold/50 transition-all hover:scale-105">
                                    Teklif Formu İçin Tıklayınız
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
                </div>
                
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold/10 backdrop-blur-sm rounded-full text-gold font-semibold mb-6 border border-gold/30">
                            <i className="fas fa-star text-lg"></i>
                            <span>TÜM HİZMETLERİMİZ</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Detaylı Hizmet Alanlarımız</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Her kategorinin detaylarını öğrenmek için aşağıdaki hizmet alanlarımızı keşfedin
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <Link 
                                key={index} 
                                href={`/taahhutlerimiz/${category.slug}`} 
                                className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-80 border-2 border-gray-200 hover:border-gold"
                            >
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent group-hover:from-gold/90 group-hover:via-gold/60 group-hover:to-dark/20 transition-all duration-500"></div>
                                
                                <div className="absolute inset-0 flex flex-col items-end justify-between p-6">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-gold transition-all transform group-hover:scale-125">
                                        <i className={`${category.icon} text-xl`}></i>
                                    </div>
                                    
                                    <div className="w-full">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{category.name}</h3>
                                        <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center gap-2">
                                            <i className="fas fa-arrow-right text-xs"></i>
                                            Detayları İncele
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Hover badge */}
                                <div className="absolute top-4 left-4 bg-gold/90 text-dark px-4 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Sayfayı Aç
                                </div>
                            </Link>
                        ))}
                    </div>
                    
                    <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gold/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="group">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all">
                                    <i className="fas fa-award text-3xl text-gold"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-2">20+ Yıl</h3>
                                <p className="text-gray-600">Güvenilir Hizmet Sunumu</p>
                            </div>
                            <div className="group">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all">
                                    <i className="fas fa-users text-3xl text-gold"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-2">1000+</h3>
                                <p className="text-gray-600">Mutlu Müşteri</p>
                            </div>
                            <div className="group">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-all">
                                    <i className="fas fa-star text-3xl text-gold"></i>
                                </div>
                                <h3 className="text-2xl font-bold text-dark mb-2">%100</h3>
                                <p className="text-gray-600">Kalite Garantisi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
