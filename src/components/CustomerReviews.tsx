import React, { useState } from 'react';

interface Review {
    id: string | number;
    image: string;
    location: string;
    text: string;
    author: string;
    initials: string;
    date: string;
}

interface CustomerReviewsProps {
    reviews: Review[];
    title?: string;
    subtitle?: string;
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews, title = "Sizden Gelenler", subtitle = "Müşterilerimizin evlerinden en doğal kareler ve yorumlar." }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        author: '',
        email: '',
        location: '',
        text: '',
        rating: 5,
        subscribeNewsletter: false
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const res = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'Yorumunuz başarıyla iletildi. Onaylandıktan sonra yayına alınacaktır.' });
                setFormData({ author: '', email: '', location: '', text: '', rating: 5, subscribeNewsletter: false });
                setTimeout(() => setIsFormOpen(false), 3000);
            } else {
                setStatus({ type: 'error', message: data.error || 'Bir hata oluştu.' });
            }
        } catch (err) {
            setStatus({ type: 'error', message: 'Bağlantı hatası oluştu.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="customer-photos-section reveal-up">
            <div className="customer-photos-title">
                <div className="verified-badge"><i className="fas fa-check-circle"></i> %100 Gerçek Müşteri Deneyimi</div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <button
                    className="btn-secondary"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                    style={{ marginTop: '20px' }}
                >
                    {isFormOpen ? 'Vazgeç' : 'Deneyimini Paylaş'}
                </button>
            </div>

            {isFormOpen && (
                <div className="review-form-container" style={{
                    maxWidth: '600px',
                    margin: '30px auto',
                    padding: '30px',
                    background: '#fff',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}>
                    <h3>Deneyimini Paylaş</h3>
                    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px', marginTop: '20px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                            <input
                                type="text"
                                placeholder="Adınız Soyadınız *"
                                required
                                value={formData.author}
                                onChange={e => setFormData({ ...formData, author: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #eee' }}
                            />
                            <input
                                type="email"
                                placeholder="E-posta Adresiniz *"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #eee' }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Konum (Örn: İstanbul, Beşiktaş)"
                            value={formData.location}
                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #eee' }}
                        />
                        <textarea
                            placeholder="Yorumunuz *"
                            required
                            rows={4}
                            value={formData.text}
                            onChange={e => setFormData({ ...formData, text: e.target.value })}
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #eee', resize: 'none' }}
                        ></textarea>

                        <label className="checkbox-container" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={formData.subscribeNewsletter}
                                onChange={e => setFormData({ ...formData, subscribeNewsletter: e.target.checked })}
                            />
                            <span>E-bültene kaydol ve kampanyalardan haberdar ol</span>
                        </label>

                        {status.message && (
                            <div style={{
                                padding: '10px',
                                borderRadius: '8px',
                                backgroundColor: status.type === 'success' ? '#e6fffa' : '#fff5f5',
                                color: status.type === 'success' ? '#2c7a7b' : '#c53030',
                                fontSize: '0.9rem'
                            }}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isSubmitting}
                            style={{ width: '100%' }}
                        >
                            {isSubmitting ? 'Gönderiliyor...' : 'Yorumu Gönder'}
                        </button>
                    </form>
                </div>
            )}

            <div className="customer-photos-grid">
                {reviews.map((review) => (
                    <div key={review.id} className="customer-photo-card">
                        <div className="customer-photo-wrapper">
                            <img src={review.image} alt="Müşteri Fotoğrafı" />
                            <div className="photo-label">{review.location}</div>
                        </div>
                        <div className="customer-review-content">
                            <div className="review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="customer-info">
                                <div className="customer-avatar">{review.initials}</div>
                                <div className="customer-meta">
                                    <span className="customer-name">{review.author}</span>
                                    <span className="review-date">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
