'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

import { allCategories, allMaterials, allStyles, projectsData } from '@/data/projectsData';

export default function LeadGenProjelerPage() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectForLead, setSelectedProjectForLead] = useState<any>(null);

  // Filter Logic
  useEffect(() => {
    let result = [...projectsData];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }
    if (selectedMaterials.length > 0) {
      result = result.filter(p => selectedMaterials.includes(p.material));
    }
    if (selectedStyles.length > 0) {
      result = result.filter(p => selectedStyles.includes(p.style));
    }

    if (sortOption === 'name-asc') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === 'name-desc') {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProjects(result);
  }, [selectedCategories, selectedMaterials, selectedStyles, sortOption]);

  const toggleFilter = (value: string, currentSelections: string[], setSelections: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentSelections.includes(value)) {
      setSelections(currentSelections.filter(item => item !== value));
    } else {
      setSelections([...currentSelections, value]);
    }
  };

  const openLeadModal = (project: any) => {
    setSelectedProjectForLead(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      
      <main className="lead-projects-page">
        {/* Top Breadcrumb & Hero */}
        <section className="projects-hero-banner">
          <div className="projects-hero-content">
            <div className="projects-breadcrumb">
              <Link href="/">Ana Sayfa</Link>
              <i className="fas fa-chevron-right separator"></i>
              <span className="current">Projelerimiz</span>
            </div>
            <h1>Hayallerinizi Tasarlıyoruz.</h1>
            <p>Evlerinize özel dokunuşlarla hayat verdiğimiz premium projelerimizi inceleyin, size özel teklifimizi hemen hazırlayalım.</p>
          </div>
        </section>

        <section className="projects-main-container">
          {/* Mobile Filter Toggle */}
          <div className="mobile-filter-bar">
            <button className="mobile-filter-toggle" onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}>
              <i className="fas fa-filter"></i> Filtreler {(selectedCategories.length + selectedMaterials.length + selectedStyles.length) > 0 && `(${(selectedCategories.length + selectedMaterials.length + selectedStyles.length)})`}
            </button>
            <select className="mobile-sort-select" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="newest">En Yeniler</option>
              <option value="name-asc">İsme Göre (A-Z)</option>
              <option value="name-desc">İsme Göre (Z-A)</option>
            </select>
          </div>

          {/* LEFT PANEL: Filters */}
          <aside className={`projects-sidebar ${isMobileFilterOpen ? 'active' : ''}`}>
            <div className="sidebar-inner">
              <div className="sidebar-header-mobile">
                <h3>Filtreler</h3>
                <button onClick={() => setIsMobileFilterOpen(false)}><i className="fas fa-times"></i></button>
              </div>

              {/* Category Filter */}
              <div className="filter-group">
                <h3>Kategoriler</h3>
                <div className="filter-options">
                  {allCategories.map(cat => (
                    <label key={cat} className="custom-checkbox">
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                      />
                      <span className="checkmark"></span>
                      <span className="label-text">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="filter-group">
                <h3>Malzeme Türü</h3>
                <div className="filter-options">
                  {allMaterials.map(mat => (
                    <label key={mat} className="custom-checkbox">
                      <input 
                        type="checkbox" 
                        checked={selectedMaterials.includes(mat)}
                        onChange={() => toggleFilter(mat, selectedMaterials, setSelectedMaterials)}
                      />
                      <span className="checkmark"></span>
                      <span className="label-text">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Style Filter */}
              <div className="filter-group">
                <h3>Tasarım Stili</h3>
                <div className="filter-options">
                  {allStyles.map(st => (
                    <label key={st} className="custom-checkbox">
                      <input 
                        type="checkbox" 
                        checked={selectedStyles.includes(st)}
                        onChange={() => toggleFilter(st, selectedStyles, setSelectedStyles)}
                      />
                      <span className="checkmark"></span>
                      <span className="label-text">{st}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT PANEL: Product Grid */}
          <div className="projects-content">
            {/* Top Bar (Desktop) */}
            <div className="projects-top-bar">
              <p className="results-count"><strong>{filteredProjects.length}</strong> proje bulundu</p>
              <div className="sort-wrapper">
                <span>Sırala:</span>
                <div className="sort-select-box">
                  <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="newest">En Yeniler</option>
                    <option value="name-asc">İsme Göre (A-Z)</option>
                    <option value="name-desc">İsme Göre (Z-A)</option>
                  </select>
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProjects.length > 0 ? (
              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-grid-card">
                    <Link href={`/projeler/${project.id}`} className="project-image-wrapper">
                      <img src={project.img} alt={project.title} className="img-main" />
                      <img src={project.imgHover} alt={`${project.title} alternatif`} className="img-hover" />
                      <div className="project-category-badge">{project.category}</div>
                    </Link>

                    <div className="project-details">
                      <Link href={`/projeler/${project.id}`}>
                        <h2 className="project-title">{project.title}</h2>
                      </Link>
                      <p className="project-desc">{project.desc}</p>
                      
                      <div className="project-tags">
                        <span>{project.material}</span>
                        <span>{project.style}</span>
                      </div>

                      <div className="project-actions">
                        <button className="btn-lead" onClick={() => openLeadModal(project)}>
                          <i className="far fa-envelope"></i> Teklif Al
                        </button>
                        <Link 
                          href={`https://wa.me/905555555555?text=Merhaba, "${project.title}" projeniz hakkında detaylı bilgi almak ve görüntülü görüşme ayarlamak istiyorum.`}
                          target="_blank"
                          className="btn-meeting"
                        >
                          <i className="fas fa-video"></i> Görüşme
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
                <div className="no-results-state">
                  <i className="fas fa-filter no-results-icon"></i>
                  <h3>Sonuç Bulunamadı</h3>
                  <p>Seçtiğiniz filtrelere uygun bir tasarım bulunmuyor. Lütfen filtreleri değiştirerek tekrar deneyin.</p>
                  <button className="clear-filters-btn" onClick={() => { setSelectedCategories([]); setSelectedMaterials([]); setSelectedStyles([]); }}>
                    Tüm Filtreleri Temizle
                  </button>
                </div>
            )}
          </div>
        </section>
      </main>

      {/* LEAD GENERATION MODAL */}
      {isModalOpen && selectedProjectForLead && (
        <div className="lead-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="lead-modal-content" onClick={e => e.stopPropagation()}>
            <button className="lead-modal-close" onClick={() => setIsModalOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="lead-modal-header">
              <img src={selectedProjectForLead.img} alt={selectedProjectForLead.title} />
              <div className="lead-modal-header-text">
                <span className="badge">Özel Teklif</span>
                <h3>{selectedProjectForLead.title}</h3>
              </div>
            </div>
            
            <div className="lead-modal-body">
              <p className="lead-modal-intro">Bu tasarım ilginizi çektiyse, mekan ölçülerinize ve tercihlerinize özel fiyat teklifimizi hazırlamak için formu doldurun.</p>
              
              <form className="lead-form" onSubmit={(e) => { e.preventDefault(); alert('Teklif talebiniz başarıyla alınmıştır. Size en kısa sürede dönüş yapacağız.'); setIsModalOpen(false); }}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Adınız Soyadınız *</label>
                    <input type="text" required placeholder="Örn: Ahmet Yılmaz" />
                  </div>
                  <div className="form-group">
                    <label>Telefon Numaranız *</label>
                    <input type="tel" required placeholder="05XX XXX XX XX" />
                  </div>
                </div>

                <div className="form-group">
                  <label>E-posta Adresiniz</label>
                  <input type="email" placeholder="ornek@email.com" />
                </div>

                <div className="form-group">
                  <label>Mesajınız / Ek İstekleriniz</label>
                  <textarea rows={3} placeholder="Ölçülerinizi veya özel tasarım taleplerinizi belirtebilirsiniz..."></textarea>
                </div>

                <button type="submit" className="btn-submit-lead">
                  Teklif İste <i className="fas fa-chevron-right"></i>
                </button>
                <div className="kvkk-text">Kişisel verileriniz KVKK kapsamında korunmaktadır.</div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
