import React from 'react';

const PaymentSection = () => {
    return (
        <section id="payments" className="payments-section">
            <div className="section-title">
                <h2>Ödeme Seçenekleri</h2>
                <p>Size en uygun ödeme yöntemini seçerek hayallerinizdeki mobilyaya kavuşun.</p>
            </div>
            <div className="payment-grid">
                <div className="payment-card">
                    <i className="fas fa-credit-card"></i>
                    <h3>Kredi Kartı</h3>
                    <p>Tüm banka kartlarına peşin fiyatına 9 taksit imkanı.</p>
                </div>
                <div className="payment-card">
                    <i className="fas fa-handshake"></i>
                    <h3>Elden Taksit</h3>
                    <p>Mağazamızda yüz yüze görüşerek kişiye özel ödeme planları.</p>
                </div>
                <div className="payment-card">
                    <i className="fas fa-university"></i>
                    <h3>Havale / EFT</h3>
                    <p>Nakit ödemelerde özel indirim fırsatları.</p>
                </div>
            </div>
        </section>
    );
};

export default PaymentSection;
