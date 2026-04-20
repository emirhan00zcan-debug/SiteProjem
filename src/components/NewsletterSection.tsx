import React, { useState } from 'react';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus({ type: 'success', message: 'E-bültene başarıyla kayıt oldunuz!' });
                setEmail('');
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
        <section className="newsletter-section">
            <div className="newsletter-content reveal-up">
                <h3>Katalog ve Yeniliklerden Haberdar Olun</h3>
                <p>E-bültenimize abone olarak en yeni tasarımlarımızdan ve kampanyalarımızdan ilk siz haberdar olun.</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-posta adresiniz"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? '...' : 'Kayıt Ol'}
                    </button>
                </form>
                {status.message && (
                    <p style={{
                        marginTop: '15px',
                        color: status.type === 'success' ? '#fff' : '#ffcaca',
                        fontSize: '0.9rem',
                        background: status.type === 'success' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                        padding: '5px 15px',
                        borderRadius: '20px'
                    }}>
                        {status.message}
                    </p>
                )}
            </div>
        </section>
    );
};

export default NewsletterSection;
