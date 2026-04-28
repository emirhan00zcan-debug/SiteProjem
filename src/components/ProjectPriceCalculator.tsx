'use client';

import React, { useState } from 'react';

interface Props {
  m2Price: number | undefined;
}

export default function ProjectPriceCalculator({ m2Price }: Props) {
  const [width, setWidth] = useState<number | ''>('');
  const [depth, setDepth] = useState<number | ''>('');
  const [height, setHeight] = useState<number | ''>('');

  // Tahmini m2 hesaplama (Genişlik x Yükseklik üzerinden)
  const calculatePrice = () => {
    if (!m2Price || !width || !height) return null;
    const m2 = Number(width) * Number(height);
    return Math.round(m2 * m2Price);
  };

  const estimatedPrice = calculatePrice();
  const calculatedM2 = Number(width || 0) * Number(height || 0);

  return (
    <>
      <div className="pd-measurements-interactive">
        <div className="measurement-header">
           <i className="fas fa-ruler-combined"></i>
           <span>Kendi Ölçülerinizi Girin (Metre)</span>
        </div>
        <div className="measurement-inputs">
           <div className="input-group">
             <label>Genişlik (G)</label>
             <input type="number" step="0.1" placeholder="Örn: 3.5" value={width} onChange={e => setWidth(e.target.value ? Number(e.target.value) : '')} />
           </div>
           <div className="input-group">
             <label>Derinlik (D)</label>
             <input type="number" step="0.1" placeholder="Örn: 0.6" value={depth} onChange={e => setDepth(e.target.value ? Number(e.target.value) : '')} />
           </div>
           <div className="input-group">
             <label>Yükseklik (Y)</label>
             <input type="number" step="0.1" placeholder="Örn: 2.5" value={height} onChange={e => setHeight(e.target.value ? Number(e.target.value) : '')} />
           </div>
        </div>
      </div>

      {/* Fiyat Bilgisi */}
      <div className="pd-price-box">
        <div className="pd-price-title">M² Birim Fiyatı</div>
        <div className="pd-price-val">
          {m2Price ? `₺${m2Price}` : 'Fiyat Sorunuz'}
          {m2Price && <span>/ m²</span>}
        </div>

        {m2Price && (
          <div className="pd-price-example">
            <div className="pd-price-example-title">
              {estimatedPrice ? `Tahmini Tutar (~${calculatedM2.toFixed(1)} m²)` : 'Görseldeki Proje (~12 m²)'}
            </div>
            <div className="pd-price-example-val">
              ₺{estimatedPrice ? estimatedPrice : (m2Price * 12)} 
              <span style={{fontSize: '0.8rem', color: '#666', fontWeight: 500, marginLeft: '8px'}}>
                {estimatedPrice ? 'hesaplanan fiyat' : 'örnek fiyat'}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
