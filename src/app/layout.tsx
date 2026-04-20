import type { Metadata } from 'next'
import './globals.css'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
    title: 'Özcan Mobilya',
    description: 'Sinop Özcan Mobilya - Kaliteli ve Modern Mobilyalar',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </head>
            <body>
                <ScrollReveal />
                {children}
            </body>
        </html>
    )
}
