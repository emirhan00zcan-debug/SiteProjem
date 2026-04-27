import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { author, email, location, text, subscribeNewsletter } = data;

        if (!author || !email || !text) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
        }

        // Save to Supabase
        const { error: dbError } = await supabase
            .from('CustomerReview')
            .insert([{ 
                id: crypto.randomUUID(),
                author, 
                email, 
                location, 
                text, 
                subscribeNewsletter: Boolean(subscribeNewsletter),
                isApproved: false
            }]);

        if (dbError) {
            console.error('Supabase error saving customer review:', dbError);
        }

        // If they also want to subscribe to newsletter, add them there
        if (subscribeNewsletter) {
            const { error: newsletterError } = await supabase
                .from('NewsletterSubscriber')
                .insert([{ id: crypto.randomUUID(), email }]);
                
            if (newsletterError) {
                console.error('Supabase error saving newsletter subscriber from review:', newsletterError);
            }
        }

        const mailContent = `
            <h3>Yeni Müşteri Yorumu</h3>
            <p><strong>Ad Soyad:</strong> ${author}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Konum:</strong> ${location || 'Belirtilmedi'}</p>
            <p><strong>E-bülten Aboneliği:</strong> ${subscribeNewsletter ? 'Evet' : 'Hayır'}</p>
            <p><strong>Yorum:</strong><br/>${text.replace(/\n/g, '<br/>')}</p>
            <br />
            <p>Yorum onaylandıktan sonra veritabanınıza ekleyebilirsiniz.</p>
        `;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Yeni Müşteri Yorumu: ${author}`,
                html: mailContent,
            });
        } catch (mailErr) {
            console.error('Email sending error:', mailErr);
        }

        return NextResponse.json({ success: true, message: 'Yorum iletildi ve veritabanına kaydedildi.' });
    } catch (error: any) {
        console.error('Reviews API error:', error);
        return NextResponse.json({ success: false, error: 'Yorum gönderilemedi.' }, { status: 500 });
    }
}
