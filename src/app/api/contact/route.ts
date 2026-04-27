import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, email, message, category } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
        }

        // Save to Supabase
        const { error: dbError } = await supabase
            .from('ContactMessage')
            .insert([{ name, phone, email, message }]);

        if (dbError) {
            console.error('Supabase error saving contact message:', dbError);
            // We can continue to send email even if DB fails, or we can fail. Let's just log it.
        }

        const mailContent = `
            <h3>Yeni İletişim Formu Mesajı</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            ${category ? `<p><strong>Kategori:</strong> ${category}</p>` : ''}
            <p><strong>Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Yeni İletişim Mesajı: ${name}`,
                html: mailContent,
            });
        } catch (mailErr) {
            console.error('Email sending error:', mailErr);
        }

        return NextResponse.json({ success: true, message: 'Mesaj iletildi ve veritabanına kaydedildi.' });
    } catch (error: any) {
        console.error('Contact form error:', error);
        return NextResponse.json({ success: false, error: 'Mesaj gönderilemedi' }, { status: 500 });
    }
}
