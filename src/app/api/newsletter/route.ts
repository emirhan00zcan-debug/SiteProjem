import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { email } = data;

        if (!email) {
            return NextResponse.json({ success: false, error: 'E-posta eksik' }, { status: 400 });
        }

        const mailContent = `
            <h3>Yeni E-Bülten Aboneliği</h3>
            <p>Yeni bir e-posta adresi bülteninize abone oldu:</p>
            <p><strong>E-posta:</strong> ${email}</p>
        `;

        await transporter.sendMail({
            ...mailOptions,
            subject: `Yeni E-Bülten Kaydı: ${email}`,
            html: mailContent,
        });

        return NextResponse.json({ success: true, message: 'Kayıt başarıyla alındı.' });
    } catch (error: any) {
        console.error('Newsletter application error:', error);
        return NextResponse.json({ success: false, error: 'Kayıt işlemi başarısız.' }, { status: 500 });
    }
}
