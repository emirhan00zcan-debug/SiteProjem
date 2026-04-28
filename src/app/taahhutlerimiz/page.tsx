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
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-bl-full pointer-events-none"></div>
                        
                        <div className="prose prose-lg md:prose-xl max-w-none text-gray-700">
                            <p className="lead text-2xl text-dark font-medium mb-6">
                                2004 yılı itibariyle imalat sürecimiz başlamış olup 18 yılı aşkın süredir taahhüt ettiğimiz işleri en kaliteli bir şekilde yapmaktayız.
                            </p>
                            
                            <p className="mb-6">
                                Mobilya imalat ve tadilat işlerinde Sinop'ta lider olmamızın en önemli sebebi işini seven ve özverili çalışan mutlu takım arkadaşlarımızla müşterilerimize sunduğumuz kaliteli hizmetlerimizdir.
                            </p>
                            
                            <p className="mb-6">
                                Mobilya üretimi, mutfak, yatak odası, giyinme odası gibi evinizin ihtiyacı tüm ürünleri hayal ettiğiniz tasarımlarla hazırlayan firmamız kendi alanında daha bir çok faaliyetler ve taahhütler yapmaktadır. Bu faaliyetlerin arasında çocuk odası, portmanto, çalışma masası, kütüphane imalatları da bulunmaktadır. 2004 yılında başlayan imalat sürecinde bugün deneyimli çalışanları bünyesinde barındırarak müşterilerine zengin olanaklar sunabilen bir firma durumundadır. Kalite standartları uygulanan üretim süreçlerinden sonra müşteri ile hatasız buluşturulan ürünlerle müşteri memnuniyeti daima en üst düzeyde tutulmaktadır.
                            </p>

                            <div className="bg-gold/10 border-l-4 border-gold p-6 my-8 rounded-r-lg">
                                <p className="m-0 text-dark font-medium">
                                    Ürünlerimizde kullanılan malzemelerin çeşitleri ve tüm detaylarını öğrenmek için satış ve pazarlama ekibimizden destek alabilirsiniz. Ev ihtiyaçlarından olan tadilat ve onarım işlerinde bizi tercih edebilirsiniz.
                                </p>
                            </div>

                            <h3 className="text-2xl font-bold text-dark mt-10 mb-6">Tasarımını ve üretimini yaptığımız mobilya ürünleri;</h3>
                            
                            <div className="flex flex-wrap gap-4 mb-10">
                                {categories.filter(c => c.slug !== 'su-ve-tesisat' && c.slug !== 'fayans-uygulama').map((cat, index) => (
                                    <Link key={index} href={`/taahhutlerimiz/${cat.slug}`} className="bg-white border border-gray-200 px-5 py-3 rounded-full text-dark hover:border-gold hover:text-gold hover:shadow-md transition-all flex items-center gap-3 font-medium">
                                        <i className={`${cat.icon} text-gold`}></i>
                                        {cat.name}
                                    </Link>
                                ))}
                                <span className="bg-gray-100 border border-gray-200 px-5 py-3 rounded-full text-gray-600 flex items-center font-medium">
                                    ...ve hayal ettiğiniz daha birçok mobilya ürünü.
                                </span>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 bg-gold text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-dark hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                                Teklif Formu İçin Tıklayınız
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-wider uppercase text-sm mb-2 block">TÜM HİZMETLERİMİZ</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark">Detaylı Hizmet Alanlarımız</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <Link key={index} href={`/taahhutlerimiz/${category.slug}`} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-72">
                                <img 
                                    src={category.image} 
                                    alt={category.name} 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-gold/90 transition-colors duration-500"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-gold transition-colors">
                                        <i className={`${category.icon} text-xl`}></i>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center gap-2">
                                        Detayları İncele <i className="fas fa-chevron-right text-xs"></i>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
