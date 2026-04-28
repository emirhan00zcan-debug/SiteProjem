'use client';

import React, { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  // Şimdilik sadece ana resmi alıyoruz (diğer ürünlerdeki kopya resimlerin görünmemesi için)
  const mainImage = images && images.length > 0 ? images[0] : '/assets/images/placeholder.jpg';

  return (
    <div className="pd-gallery-wrapper">
      {/* 
        İLERİSİ İÇİN NOT: 3 fotoğraflı sisteme geçildiğinde buradaki thumbnail 
        listesi aktif edilecek ve sağ panel ile bağlantısı kurulacak.
        Şu an kullanıcı talebiyle tek resim modunda çalışıyor.
      */}
      
      {/* Büyük Resim Container */}
      <div className="pd-main-img" style={{ width: '100%', height: '100%' }}>
        <img 
          src={mainImage} 
          alt={`${title}`} 
        />
      </div>
    </div>
  );
};

export default ProjectGallery;
