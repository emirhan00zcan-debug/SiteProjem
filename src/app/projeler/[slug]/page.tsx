import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import Link from 'next/link';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectPriceCalculator from '@/components/ProjectPriceCalculator';
import './project.css';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.id, // Kullanıcının URL yapısı ID (örn: pro-m1) üzerinden çalışıyor
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  // Hem ID'yi hem de Slug'u arayarak olası Link uyumsuzluklarını önlüyoruz
  const project = projectsData.find(p => p.id === resolvedParams.slug || p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const defaultDesc = "Bu özel üretim proje, mekanınızın ruhuna uygun, modern ve fonksiyonel bir yaklaşım ile tasarlanmıştır. Her detayı özenle düşünülmüş, kaliteli işçilik ön planda tutulmuştur.";
  const fallbackMaterial = project.category === 'mutfak' ? 'MDF Lam gövde, Akrilik/Lake kapak, Çimstone tezgah' : '1. Sınıf MDF, Hafele donanım, gizli aydınlatma detayları';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ozcanmobilya.com';
  const projectUrl = `${siteUrl}/projeler/${project.slug || project.id}`;
  const inquiryMessage = `Merhaba, bu modelinizle ilgili fiyat almak istiyorum. Model linki: ${projectUrl}`;
  const encodedInquiryMessage = encodeURIComponent(inquiryMessage);
  const whatsappUrl = `https://wa.me/905458985757?text=${encodedInquiryMessage}`;
  const instagramUrl = `https://ig.me/m/sinop_ozcan_mobilya?text=${encodedInquiryMessage}`;

  return (
    <>
      <Navbar />
      <main className="pd-wrapper">
        <div className="pd-container">
          
          {/* Sol Kolon: Galeri */}
          <div className="pd-left">
            <div className="pd-breadcrumb">
              <Link href="/">Ana Sayfa</Link>
              <i className="fas fa-chevron-right"></i>
              <Link href={`/projeler?category=${project.category}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)} Projeleri
              </Link>
              <i className="fas fa-chevron-right"></i>
              <span>{project.title}</span>
            </div>

            <ProjectGallery images={project.images} title={project.title} />
          </div>

          {/* Sağ Kolon: Bilgi Paneli */}
          <div className="pd-right">
            <div>
              <h1 className="pd-title">{project.title}</h1>
              <div className="pd-code">Kod: {project.id}</div>
              <p className="pd-desc">{project.desc || defaultDesc}</p>
              
              <ProjectPriceCalculator m2Price={project.m2Price} />
            </div>

            {/* Özellikler */}
            <div className="pd-specs">
              <div className="pd-specs-title">Proje Detayları</div>
              
              <div className="pd-spec-item">
                <div className="pd-spec-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <div className="pd-spec-content">
                  <h4>Kullanılan Malzeme</h4>
                  <p>{project.material || fallbackMaterial}</p>
                </div>
              </div>

              <div className="pd-spec-item">
                <div className="pd-spec-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="pd-spec-content">
                  <h4>Donanım & Aksesuar</h4>
                  <p>Yavaşlatıcılı menteşeler, gizli ray sistemleri, kulpsuz bas-aç kapaklar.</p>
                </div>
              </div>

              <div className="pd-spec-item">
                <div className="pd-spec-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="pd-spec-content">
                  <h4>Garanti & Kurulum</h4>
                  <p>Özcan Mobilya güvencesiyle 5 yıl garanti ve ücretsiz profesyonel kurulum.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pd-cta-group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn-whatsapp">
                <i className="fab fa-whatsapp"></i> WhatsApp'tan Ücretsiz Teklif Al
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="pd-btn pd-btn-instagram">
                <i className="fab fa-instagram"></i> Instagram'dan Ücretsiz Teklif Al
              </a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
