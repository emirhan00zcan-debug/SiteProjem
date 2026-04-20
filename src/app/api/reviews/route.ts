import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { author, email, location, text, subscribeNewsletter } = data;

        if (!author || !email || !text) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
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

        await transporter.sendMail({
            ...mailOptions,
            subject: `Yeni Müşteri Yorumu: ${author}`,
            html: mailContent,
        });

        return NextResponse.json({ success: true, message: 'Yorum iletildi.' });
    } catch (error: any) {
        console.error('Reviews API error:', error);
        return NextResponse.json({ success: false, error: 'Yorum gönderilemedi.' }, { status: 500 });
    }
}
