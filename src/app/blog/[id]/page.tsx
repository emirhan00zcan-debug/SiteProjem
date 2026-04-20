'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const blogPosts: any = {
    'dekorasyon-trendleri-2026': {
        title: '2026 Dekorasyon Trendleri: Minimalizm ve Renk Uyumu',
        date: '24 Şubat 2026',
        category: 'Trendler',
        image: '/assets/images/premium-living.png',
        content: `
            <p>2026 yılı, iç mekan tasarımında köklü değişimlerin yaşandığı bir yıl olmaya aday. Minimalizm, artık sadece "az eşya" demek değil, aynı zamanda "doğru eşya" ve "ruhsal dinginlik" anlamına geliyor.</p>
            <h3>Doğal Malzemelerin Yükselişi</h3>
            <p>Ahşap, taş ve mermer gibi doğal malzemeler, bu yılın başrol oyuncuları. Dokunulduğunda doğayı hissettiren yüzeyler, evlerimize sadece şıklık değil, aynı zamanda sıcaklık katıyor.</p>
            <p>Özcan Mobilya olarak biz de tasarımlarımızda bu doğal dokuları, modern çizgilerle buluşturuyoruz. Özellikle mutfak ve yatak odası takımlarımızda kullandığımız doğal meşe kaplamalar, 2026'nın en çok tercih edilenleri arasında yer alıyor.</p>
            <h3>Renk Paletinde Dinginlik</h3>
            <p>Ada çayı yeşili, yumuşak terakota ve fildişi tonları, bu yılın favori renkleri. Bu renkler, mekanlara derinlik katarken aynı zamanda gözü yormayan bir atmosfer yaratıyor.</p>
        `
    },
    'mutfak-bakim-rehberi': {
        title: 'Mutfak Dolaplarınız İçin Uzun Ömürlü Bakım Rehberi',
        date: '20 Şubat 2026',
        category: 'Bakım',
        image: '/assets/images/premium-kitchen.png',
        content: `
            <p>Mutfak dolapları, evimizin en çok kullanılan ve kirlenmeye en müsait alanlarıdır. Kaliteli bir mutfağa sahip olmak kadar, ona doğru bakmak da ömrünü uzatmak için kritiktir.</p>
            <h3>Lake Yüzey Temizliği</h3>
            <p>Lake kapaklar, şıklıkları kadar hassasiyetleri ile de bilinir. Temizlerken kesinlikle aşındırıcı kimyasallar ve sert süngerler kullanmamalısınız. Mikrofiber bir bez ve hafif nemli bir su yeterli olacaktır.</p>
            <h3>Menteşe ve Ray Bakımı</h3>
            <p>Mutfak dolaplarının sessiz kahramanları olan menteşeler, zamanla tozlanabilir veya yağlanma gerektirebilir. Altı ayda bir kontrol ederek, gerekirse ince bir makine yağı ile yağlamak, kapakların her zaman ilk günkü gibi sessiz kapanmasını sağlar.</p>
        `
    },
    'kucuk-evler-icin-cozumler': {
        title: 'Küçük Mekanlar İçin Akıllı Mobilya Çözümleri',
        date: '15 Şubat 2026',
        category: 'Tasarım',
        image: '/assets/images/d6_pro_1769532959772.png',
        content: `
            <p>Şehir hayatının bir getirisi olan küçük daireler, doğru mobilya seçimi ile saray gibi ferah alanlara dönüşebilir.</p>
            <h3>Modüler Sistemlerin Gücü</h3>
            <p>İhtiyaca göre şekil değiştiren, saklama alanı sunan yataklar veya çalışma masası olabilen konsollar, dar alanların kurtarıcısıdır. Çok fonksiyonlu mobilyalar, tek bir alanı gün içinde farklı amaçlarla kullanmanıza olanak tanır.</p>
            <h3>Ayna ve Işık Oyunları</h3>
            <p>Aynalı vestiyerler ve doğru aydınlatma konumlandırması, mekanı olduğundan iki kat daha geniş gösterir. Özcan Mobilya'nın ayna detaylı gardırop tasarımları, bu konuda en estetik çözümleri sunuyor.</p>
        `
    }
};

const BlogDetail = () => {
    const params = useParams();
    const id = params.id as string;
    const post = blogPosts[id];

    if (!post) {
        return (
            <>
                <Navbar />
                <div style={{ textAlign: 'center', padding: '10rem 0' }}>
                    <h1>Yazı Bulunamadı</h1>
                    <Link href="/blog" className="btn-primary">Blog'a Dön</Link>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <div className="blog-detail-header" style={{ backgroundImage: `url('${post.image}')` }}>
                <div className="blog-detail-overlay"></div>
                <div className="blog-detail-content">
                    <span className="blog-meta-tag">{post.category}</span>
                    <h1 className="blog-detail-title">{post.title}</h1>
                    <span className="blog-detail-date"><i className="far fa-calendar-alt"></i> {post.date}</span>
                </div>
            </div>

            <div className="article-container">
                <Link href="/blog" className="back-link"><i className="fas fa-arrow-left"></i> Blog'a Dön</Link>
                <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>

            <Footer />
        </>
    );
};

export default BlogDetail;
