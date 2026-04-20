import React from 'react';
import prisma from '@/lib/prisma';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
    // Fetch data from Prisma
    let posts = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    });

    // Fallback data if database is empty (maintaining current content)
    if (posts.length === 0) {
        posts = [
            {
                id: 'dekorasyon-trendleri-2026',
                title: '2026 Dekorasyon Trendleri: Minimalizm ve Renk Uyumu',
                excerpt: 'Yeni yılda evinizi yenilerken dikkat etmeniz gereken en önemli tasarım ipuçları ve renk paletleri.',
                image: '/assets/images/premium-living.png',
                dateText: '24 Şub',
                category: 'Trendler',
                slug: 'dekorasyon-trendleri-2026'
            } as any,
            {
                id: 'mutfak-bakim-rehberi',
                title: 'Mutfak Dolaplarınız İçin Uzun Ömürlü Bakım Rehberi',
                excerpt: 'Lake ve ahşap yüzeylerin temizliği ve bakımı hakkında bilmeniz gereken profesyonel tavsiyeler.',
                image: '/assets/images/premium-kitchen.png',
                dateText: '20 Şub',
                category: 'Bakım',
                slug: 'mutfak-bakim-rehberi'
            } as any,
            {
                id: 'kucuk-evler-icin-cozumler',
                title: 'Küçük Mekanlar İçin Akıllı Mobilya Çözümleri',
                excerpt: 'Dar alanlarda ferahlık yaratacak fonksiyonel mobilya tasarımları ve yerleşim önerileri.',
                image: '/assets/images/d6_pro_1769532959772.png',
                dateText: '15 Şub',
                category: 'Tasarım',
                slug: 'kucuk-evler-icin-cozumler'
            } as any
        ];
    }

    return (
        <>
            <Navbar />

            <div className="page-header"
                style={{
                    backgroundImage: "url('/assets/images/premium-living.png')",
                    height: '40vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                }}>
                <div className="overlay"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)'
                    }}></div>
                <div className="header-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                    <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem' }}>Blog & Makaleler</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Dekorasyon trendleri, bakım ipuçları ve Özcan Mobilya dünyasından haberler.</p>
                </div>
            </div >

            <section className="blog-section">
                <div className="blog-container">
                    {posts.map((post) => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image || '/assets/images/placeholder.png'} alt={post.title} />
                                <div className="blog-date">
                                    <span className="day">{(post as any).dateText?.split(' ')[0] || (post as any).date?.split(' ')[0]}</span>
                                    <span className="month">{(post as any).dateText?.split(' ')[1] || (post as any).date?.split(' ')[1]}</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <span className="blog-category">{post.category.toUpperCase()}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <Link href={`/blog/${(post as any).slug || post.id}`} className="read-more">Devamını Oku <i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="pagination">
                    <Link href="#" className="page-link active">1</Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
