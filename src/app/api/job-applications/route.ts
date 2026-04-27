import { NextResponse } from 'next/server';
import { transporter, mailOptions } from '@/utils/mailer';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, phone, email, applicationType, desiredPosition, portfolioLink, message } = data;

        if (!name || !phone || !email || !applicationType || !message) {
            return NextResponse.json({ success: false, error: 'Eksik bilgi' }, { status: 400 });
        }

        // Save to Supabase
        const { error: dbError } = await supabase
            .from('JobApplication')
            .insert([{ 
                id: crypto.randomUUID(),
                name, 
                phone, 
                email, 
                applicationType, 
                desiredPosition, 
                portfolioLink, 
                message 
            }]);

        if (dbError) {
            console.error('Supabase error saving job application:', dbError);
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

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: `Yeni İş/Staj Başvurusu: ${name}`,
                html: mailContent,
            });
        } catch (mailErr) {
            console.error('Email sending error:', mailErr);
        }

        return NextResponse.json({ success: true, message: 'Başvuru başarıyla alındı ve veritabanına kaydedildi.' });
    } catch (error: any) {
        console.error('Job application error:', error);
        return NextResponse.json({ success: false, error: 'Başvuru gönderilemedi' }, { status: 500 });
    }
}
