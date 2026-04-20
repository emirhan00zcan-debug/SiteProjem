import React from 'react';
import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import ProjectGallery from '@/components/ProjectGallery';
import { Ruler, Layers, Settings, ShieldCheck, ChevronRight, Phone } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define the shape of our page props for Next.js 15
export interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) return { title: 'Proje Bulunamadı' };

  const project = projectsData.find(p => p.id === String(slug) || p.slug === String(slug));

  if (!project) return { title: 'Proje Bulunamadı' };

  return {
    title: `${project.title} | Özcan Mobilya`,
    description: project.desc || `${project.title} - Özcan Mobilya proje detayları.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    notFound();
  }

  const project = projectsData.find(p => p.id === String(slug) || p.slug === String(slug));

  if (!project) {
    notFound();
  }

  // Varsayılan mock veriler (Özellik eksikse doldurmak için)
  const defaultDesc = "Bu özel üretim proje, mekanınızın ruhuna uygun, modern ve fonksiyonel bir yaklaşım ile tasarlanmıştır. Her detayı özenle düşünülmüş, kaliteli işçilik ön planda tutulmuştur.";
  const fallbackMaterials = "1. Kalite MDF lam, Akrilik/Lake Kapak, Blum Menteşe Sistemleri";
  const fallbackCnc = "Hassas milimetrik CNC kesim, 3D desen işleme ve kusursuz kenar bantlama (PVC)";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--light-bg)] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-[var(--accent-grey)] mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--primary-teal)] transition-colors font-medium">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <Link href="/projeler" className="hover:text-[var(--primary-teal)] transition-colors font-medium">Projeler</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-[var(--secondary-black)] font-semibold">{project.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Sol Kolon: Galeri (Trendyol Layout) */}
            <div className="lg:col-span-7 h-full">
              <ProjectGallery images={project.images} title={project.title} />
            </div>

            {/* Sağ Kolon: Proje Bilgi Paneli */}
            <div className="lg:col-span-5 flex flex-col space-y-8">

              <div className="border-b border-gray-200 pb-6 relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--primary-teal)] opacity-5 rounded-full blur-2xl z-0"></div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[var(--secondary-black)] tracking-tight mb-4 relative z-10 font-serif">
                  {project.title}
                </h1>
                <p className="text-[var(--accent-grey)] leading-relaxed text-base sm:text-lg relative z-10">
                  {project.desc || defaultDesc}
                </p>
              </div>

              {/* Fiyat Alanı */}
              <div className="bg-white p-6 rounded-2xl flex flex-col space-y-5" style={{ boxShadow: 'var(--shadow-soft)' }}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* Birim Fiyat */}
                  <div>
                    <p className="text-sm text-[var(--accent-grey)] font-bold tracking-widest uppercase mb-2">M² Birim Fiyatı</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[var(--secondary-black)]">
                        {project.m2Price ? `₺${project.m2Price.toLocaleString('tr-TR')}` : 'Fiyat Sorunuz'}
                      </span>
                      {project.m2Price && <span className="text-[var(--accent-grey)] font-medium">/ m²</span>}
                    </div>
                  </div>

                  {/* Örnek Hesaplama */}
                  {project.m2Price ? (
                    <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100/80 w-full sm:w-auto relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--primary-teal)] opacity-5 rounded-bl-full transition-transform group-hover:scale-150"></div>
                      <p className="text-xs text-[var(--accent-grey)] font-bold tracking-wide uppercase mb-1">Görseldeki Proje (~12 m²)</p>
                      <div className="flex items-baseline gap-2 pb-1">
                        <span className="text-2xl font-bold text-[var(--primary-teal)]">
                          ₺{(project.m2Price * 12).toLocaleString('tr-TR')}
                        </span>
                        <span className="text-xs text-[var(--accent-grey)] font-medium">örnek fiyat</span>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[var(--primary-teal)] text-white bg-opacity-10 text-[var(--primary-teal)] p-4 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(0, 90, 100, 0.1)', color: 'var(--primary-teal)' }}>
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                  )}
                </div>

                {/* Özel Ölçü Vurgusu */}
                <div className="bg-gradient-to-r from-[rgba(0,90,100,0.03)] to-transparent border-l-4 border-[var(--primary-teal)] p-4 rounded-r-xl flex items-start gap-4">
                  <div className="mt-0.5 text-[var(--primary-teal)]">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--secondary-black)] mb-1">Evinizin Ölçülerine Özel Üretim</h4>
                    <p className="text-xs text-[var(--accent-grey)] leading-relaxed">
                      Değerlendirdiğiniz model, mekana özel olarak milimetrik hesaplanmaktadır.
                      <strong className="text-[var(--primary-teal)] font-medium ml-1">Kendi ölçülerinize göre en doğru fiyatı almak için bizimle iletişime geçin.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Teknik Özellikler Kartı */}
              <div className="bg-white p-8 rounded-2xl border-t-4" style={{ borderColor: 'var(--primary-teal)', boxShadow: 'var(--shadow-soft)' }}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--secondary-black)] mb-6">
                  Teknik Spesifikasyonlar
                </h3>

                <ul className="space-y-6">
                  <li className="flex gap-5 group">
                    <div className="mt-1 bg-opacity-10 transition-colors p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 90, 100, 0.05)', color: 'var(--primary-teal)' }}>
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--secondary-black)] text-lg">Kullanılan Malzeme</h4>
                      <p className="text-sm text-[var(--accent-grey)] mt-1.5 leading-relaxed">
                        {project.material || fallbackMaterials}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 group">
                    <div className="mt-1 bg-opacity-10 transition-colors p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 90, 100, 0.05)', color: 'var(--primary-teal)' }}>
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--secondary-black)] text-lg">Üretim & Kesim Tekniği</h4>
                      <p className="text-sm text-[var(--accent-grey)] mt-1.5 leading-relaxed">
                        {project.cncTechnique || fallbackCnc}
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-5 group">
                    <div className="mt-1 bg-opacity-10 transition-colors p-3 rounded-xl" style={{ backgroundColor: 'rgba(0, 90, 100, 0.05)', color: 'var(--primary-teal)' }}>
                      <Ruler className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--secondary-black)] text-lg">Ölçülendirme</h4>
                      <p className="text-sm text-[var(--accent-grey)] mt-1.5 leading-relaxed">
                        Lazer ölçümlendirme ile milimetrik hata payı olmadan tasarlanan modüler sistem.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* CTA Butonları */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/iletisim"
                  className="flex-1 text-white text-center py-[1.15rem] rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                  style={{ backgroundColor: 'var(--primary-teal)', boxShadow: '0 10px 20px rgba(0, 90, 100, 0.2)' }}
                >
                  <Phone className="w-5 h-5" />
                  <span>Ücretsiz Keşif & Teklif Alın</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
