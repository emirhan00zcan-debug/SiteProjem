import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, email, applicationType, desiredPosition, portfolioLink, message } = data;

        if (!name || !phone || !email || !applicationType || !message) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
        }

        const mailContent = `
            <h3>Yeni İş/Staj Başvurusu</h3>
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>Telefon:</strong> ${phone}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Başvuru Türü:</strong> ${applicationType === 'job' ? 'İş Başvurusu' : 'Staj Başvurusu'}</p>
            <p><strong>İlgilenilen Pozisyon:</strong> ${desiredPosition || 'Belirtilmedi'}</p>
            <p><strong>Portfolyo Linki:</strong> ${portfolioLink || 'Belirtilmedi'}</p>
            <p><strong>Ön Yazı / Mesaj:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        `;

        await transporter.sendMail({
            ...mailOptions,
            subject: `Yeni İş/Staj Başvurusu: ${name}`,
            html: mailContent,
        });

        return NextResponse.json({ success: true, message: 'Başvuru başarıyla alındı.' });
    } catch (error: any) {
        console.error('Job application error:', error);
        return NextResponse.json({ success: false, error: 'Başvuru gönderilemedi' }, { status: 500 });
    }
}
