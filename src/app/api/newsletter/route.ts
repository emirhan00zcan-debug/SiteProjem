import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { email } = data;

        if (!email) {
            return NextResponse.json({ success: false, error: 'E-posta eksik' }, { status: 400 });
        }

        // Save to Supabase
        const { error: dbError } = await supabase
            .from('NewsletterSubscriber')
            .insert([{ id: crypto.randomUUID(), email }]);

        if (dbError) {
            console.error('Supabase error saving newsletter subscriber:', dbError);
        }

        const mailContent = `
            <h3>Yeni E-Bülten Aboneliği</h3>
            <p>Yeni bir e-posta adresi bülteninize abone oldu:</p>
            <p><strong>E-posta:</strong> ${email}</p>
        `;

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Yeni E-Bülten Kaydı: ${email}`,
                html: mailContent,
            });
        } catch (mailErr) {
            console.error('Email sending error:', mailErr);
        }

        return NextResponse.json({ success: true, message: 'Kayıt başarıyla alındı ve veritabanına kaydedildi.' });
    } catch (error: any) {
        console.error('Newsletter application error:', error);
        return NextResponse.json({ success: false, error: 'Kayıt işlemi başarısız.' }, { status: 500 });
    }
}
