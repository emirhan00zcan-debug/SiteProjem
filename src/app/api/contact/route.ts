import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, email, message, category } = data;

        if (!name || !email || !message) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
        }

        const mailContent = `
            <h3>Yeni İletişim Formu Mesajı</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            ${category ? `<p><strong>Kategori:</strong> ${category}</p>` : ''}
            <p><strong>Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `;

        await transporter.sendMail({
            ...mailOptions,
            subject: `Yeni İletişim Mesajı: ${name}`,
            html: mailContent,
        });

        return NextResponse.json({ success: true, message: 'Mesaj iletildi' });
    } catch (error: any) {
        console.error('Contact form error:', error);
        return NextResponse.json({ success: false, error: 'Mesaj gönderilemedi' }, { status: 500 });
    }
}
