"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Favoriler() {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: '80vh', padding: '150px 5%', background: '#f9f9f9', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', fontFamily: "'Playfair Display', serif", color: '#1A1A1A', marginBottom: '10px' }}>Favorileriniz</h1>
                    <p style={{ color: '#4D4D4D', marginBottom: '3rem' }}>Beğendiğiniz ürünler ve projeler burada listelenir.</p>

                    <div style={{
                        background: '#fff',
                        borderRadius: '20px',
                        padding: '4rem 2rem',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '400px'
                    }}>
                        <i className="far fa-heart" style={{ fontSize: '4rem', color: '#ddd', marginBottom: '1.5rem' }}></i>
                        <h2 style={{ fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '1rem' }}>Henüz favori eklemediniz</h2>
                        <p style={{ color: '#4D4D4D', marginBottom: '2rem' }}>Koleksiyonlarımızdaki birbirinden şık tasarımları keşfederek favorilerinize ekleyebilirsiniz.</p>
                        
                        <Link href="/koleksiyon" style={{
                            padding: '1rem 2.5rem',
                            background: '#005A64',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s ease'
                        }}>
                            Koleksiyonlara Göz At
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
