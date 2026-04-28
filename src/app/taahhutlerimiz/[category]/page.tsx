"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const categoryData: Record<string, { name: string, icon: string, image: string, title: string, description: string[], features: string[] }> = {
    'mobilya': {
        name: 'Mobilya',
        icon: 'fas fa-couch',
        image: '/assets/images/temiz/1.jpeg',
        title: 'Özel Tasarım Mobilya Üretimi',
        description: [
            "2004 yılından bu yana edindiğimiz tecrübeyle, yaşam alanlarınıza değer katan özel mobilya tasarımları ve üretimleri gerçekleştiriyoruz.",
            "Her detayı özenle düşünülmüş, kaliteli malzemeler ve usta ellerde şekillenen mobilyalarımız, uzun yıllar boyunca estetik ve konforu bir arada sunar.",
            "Evinizin tarzına ve kişisel zevklerinize en uygun tasarımlar için bizimle iletişime geçebilirsiniz."
        ],
        features: ['Özel Ölçü Üretim', '1. Sınıf Malzeme', 'Modern ve Klasik Tasarımlar', 'Uzman Montaj Ekibi']
    },
    'mutfak': {
        name: 'Mutfak',
        icon: 'fas fa-utensils',
        image: '/assets/images/temiz/8.jpeg',
        title: 'Hayalinizdeki Mutfak Tasarımları',
        description: [
            "Evinizin kalbi mutfaklarınızı, fonksiyonelliği ve estetiği buluşturan tasarımlarla yeniliyoruz.",
            "Akrilik, lake, membran ve masif gibi çeşitli kapak seçenekleri ile dayanıklı ve şık mutfak dolapları üretiyoruz.",
            "Mekanınıza özel projeler hazırlayarak, kullanım alanını en verimli şekilde değerlendirmenizi sağlıyoruz."
        ],
        features: ['Ergonomik Tasarım', 'Geniş Renk ve Malzeme Seçeneği', 'Akıllı Depolama Çözümleri', 'Dayanıklı Tezgah Seçenekleri']
    },
    'tv-unitesi': {
        name: 'TV Ünitesi',
        icon: 'fas fa-tv',
        image: '/assets/images/temiz/16.jpeg',
        title: 'Modern ve Şık TV Üniteleri',
        description: [
            "Salonunuzun odak noktası olacak, dekorasyonunuza uygun TV ünitesi tasarımları ile yaşam alanlarınızı zenginleştiriyoruz.",
            "Geniş depolama alanları ve estetik raflarla zenginleştirilmiş ünitelerimiz, kablo karmaşasını da ortadan kaldırır.",
            "Modern, minimalist veya klasik tarzda, tamamen size özel ölçülerde üretim yapmaktayız."
        ],
        features: ['Gizli Kablo Yönetimi', 'Kişiselleştirilebilir Raf Sistemleri', 'LED Aydınlatma Seçenekleri', 'Mekana Özel Ölçülendirme']
    },
    'yatak-odasi': {
        name: 'Yatak Odası',
        icon: 'fas fa-bed',
        image: '/assets/images/temiz/26.jpeg',
        title: 'Huzur Veren Yatak Odası Takımları',
        description: [
            "Günün yorgunluğunu atacağınız yatak odalarınızı, konforlu ve huzur veren tasarımlarla baştan yaratıyoruz.",
            "Gardırop, karyola, şifonyer ve komodinlerden oluşan takımlarımız, ihtiyaçlarınıza göre özel olarak tasarlanır.",
            "Kaliteli uyku ve şık bir görünüm için en iyi malzemeleri kullanıyoruz."
        ],
        features: ['Ergonomik Yatak Başlıkları', 'Geniş ve İşlevsel Gardıroplar', 'Sessiz Ray Sistemleri', 'Kişiye Özel İç Dizayn']
    },
    'giyinme-odasi': {
        name: 'Giyinme Odası',
        icon: 'fas fa-tshirt',
        image: '/assets/images/temiz/18.jpeg',
        title: 'Fonksiyonel Giyinme Odası Sistemleri',
        description: [
            "Kıyafetlerinizi ve aksesuarlarınızı düzenli bir şekilde muhafaza edebileceğiniz, şık ve fonksiyonel giyinme odaları tasarlıyoruz.",
            "Mekanınızın büyüklüğüne ve şekline en uygun dolap, raf ve çekmece sistemleri ile alanı maksimum verimle kullanmanızı sağlıyoruz.",
            "Aydınlatma detayları ve özel aksesuarlarla giyinme deneyiminizi keyifli hale getiriyoruz."
        ],
        features: ['Modüler Sistemler', 'Sensörlü Aydınlatmalar', 'Özel Aksesuar Çekmeceleri', 'Açık veya Kapaklı Tasarımlar']
    },
    'cocuk-odasi': {
        name: 'Çocuk Odası',
        icon: 'fas fa-child',
        image: '/assets/images/temiz/11.jpeg',
        title: 'Güvenli ve Eğlenceli Çocuk Odaları',
        description: [
            "Çocuklarınızın sağlığına zararsız malzemelerle, onların hayal dünyasına hitap eden odalar tasarlıyoruz.",
            "Çalışma masası, kitaplık ve ranzalardan oluşan fonksiyonel takımlarımız, çocuklarınızın büyüme süreçlerine uyum sağlar.",
            "Canlı renkler ve ergonomik tasarımlarla çocuklarınızın odasında keyifle vakit geçirmesini amaçlıyoruz."
        ],
        features: ['E1 Standartlarında Malzeme', 'Güvenli Kenar ve Köşe İşlemleri', 'Eğlenceli ve Renkli Tasarımlar', 'Çok Amaçlı Depolama']
    },
    'dolaplar': {
        name: 'Dolaplar',
        icon: 'fas fa-door-closed',
        image: '/assets/images/temiz/4.jpeg',
        title: 'Özel Üretim Dolap Çözümleri',
        description: [
            "Evinizin her köşesinde ihtiyaç duyduğunuz depolama alanları için özel ölçü dolap üretimleri yapıyoruz.",
            "Balkon dolapları, kiler dolapları, banyo dolapları ve çok amaçlı dolaplarla mekanlarınızı düzenliyoruz.",
            "Kullanım amacınıza uygun raf sistemleri ve kaliteli kapak seçenekleri ile uzun ömürlü çözümler sunuyoruz."
        ],
        features: ['Mekana Tam Uyum', 'Farklı Kapak Seçenekleri (Sürgülü/Menteşeli)', 'Dayanıklı Donanım', 'Neme Dayanıklı Malzeme Seçenekleri']
    },
    'dresuar-ayna': {
        name: 'Dresuar ve Ayna',
        icon: 'fas fa-border-all',
        image: '/assets/images/temiz/3.jpeg',
        title: 'Zarif Dresuar ve Ayna Modelleri',
        description: [
            "Antrelerinizi veya salonlarınızı zenginleştirecek, şık tasarımlı dresuar ve ayna kombinasyonları üretiyoruz.",
            "Mekanınıza derinlik katacak aynalar ve estetik depolama alanı sunan dresuarlarla dekorasyonunuzu tamamlıyoruz.",
            "Farklı malzeme ve renk seçenekleriyle evinize en uygun modeli tasarlıyoruz."
        ],
        features: ['Özel Kesim Aynalar', 'Şık Çekmece Detayları', 'Metal ve Ahşap Kombinasyonları', 'Dekoratif Ayak Tasarımları']
    },
    'portmanto': {
        name: 'Portmanto',
        icon: 'fas fa-door-open',
        image: '/assets/images/temiz/15.jpeg',
        title: 'Girişinize Şıklık Katan Portmantolar',
        description: [
            "Evinizin girişini düzenli ve şık gösterecek, fonksiyonel portmanto tasarımları ile ilk izlenimi güçlü kılıyoruz.",
            "Ayakkabılık, askılık ve oturma alanlarını bir araya getiren tasarımlarımız, antrenizin boyutlarına göre özel olarak üretilir.",
            "Aynalı veya aynasız, açık veya kapalı raf seçenekleriyle ihtiyaçlarınıza en uygun çözümleri sunuyoruz."
        ],
        features: ['Geniş Ayakkabılık Kapasitesi', 'Oturma Pufu Entegrasyonu', 'Aynalı Kapak Seçenekleri', 'Ergonomik Askılık Tasarımları']
    },
    'su-ve-tesisat': {
        name: 'Su ve Tesisat',
        icon: 'fas fa-tools',
        image: '/assets/images/temiz/10.jpeg',
        title: 'Profesyonel Su ve Tesisat Hizmetleri',
        description: [
            "Sadece mobilya değil, evinizin su ve tesisat ihtiyaçlarında da profesyonel ekibimizle yanınızdayız.",
            "Mutfak ve banyo yenileme projelerimizde tesisat altyapısını en baştan güvenli bir şekilde oluşturuyoruz.",
            "Sızıntı, tıkanıklık ve tesisat çekimi gibi konularda garantili hizmet sunmaktayız."
        ],
        features: ['Eksiksiz Altyapı Çözümleri', 'Kaliteli Boru ve Ek Parça Kullanımı', 'Garantili İşçilik', 'Hızlı ve Temiz Çözüm']
    },
    'fayans-uygulama': {
        name: 'Fayans Uygulama',
        icon: 'fas fa-hammer',
        image: '/assets/images/temiz/12.jpeg',
        title: 'Kusursuz Fayans ve Seramik Uygulamaları',
        description: [
            "Banyo, mutfak ve zeminleriniz için profesyonel fayans ve seramik döşeme hizmeti sunuyoruz.",
            "Mekanınızın estetiğine uygun fayans seçiminden, milimetrik hesaplarla yapılan uygulamaya kadar her aşamada titizlikle çalışıyoruz.",
            "Mobilya tasarımlarınızla bütünleşen, kusursuz işçilikle döşenmiş fayanslarla mekanlarınızı yeniliyoruz."
        ],
        features: ['Lazerli Gönye ve Terazi Kullanımı', 'Derz Dolgu Seçenekleri', 'Özel Desen ve Motif Uygulamaları', 'Su Yalıtımı ve İzolasyon']
    },
    'elektrik-su-tamirat': {
        name: 'Elektrik, Su ve Tamirat',
        icon: 'fas fa-tools',
        image: '/assets/images/temiz/10.jpeg',
        title: 'Kapsamlı Ev Tamirat ve Altyapı Çözümleri',
        description: [
            "Mobilya projelerinizin ayrılmaz bir parçası olan elektrik ve su tesisatı işlerini anahtar teslim olarak yürütüyoruz.",
            "Aydınlatma sistemlerinden priz yerleşimlerine, su tesisatından küçük tamirat işlerine kadar tüm ihtiyaçlarınızı karşılıyoruz.",
            "Usta ekibimizle yaşam alanlarınızı güvenli ve kullanışlı hale getiriyoruz."
        ],
        features: ['Proje Odaklı Elektrik Tesisatı', 'Güvenli Altyapı', 'Tam Kapsamlı Ev Yenileme', 'Hızlı Müdahale ve Çözüm']
    }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
    const slug = params.category;
    const data = categoryData[slug];

    if (!data) {
        notFound();
    }

    return (
        <main className="bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-dark text-white overflow-hidden min-h-[40vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-md rounded-full text-gold font-medium mb-6">
                            <i className={data.icon}></i>
                            <span>Taahhütlerimiz / {data.name}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{data.title}</h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="lg:w-2/3">
                            <div className="prose prose-lg max-w-none text-gray-700">
                                {data.description.map((paragraph, idx) => (
                                    <p key={idx} className={idx === 0 ? "lead text-2xl text-dark font-medium mb-6" : "mb-6"}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-dark mt-12 mb-6">Neden Bizi Tercih Etmelisiniz?</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {data.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                                            <i className="fas fa-check"></i>
                                        </div>
                                        <span className="font-medium text-dark">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/3 w-full sticky top-32">
                            <div className="bg-gray-50 rounded-3xl p-8 shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-dark mb-4">Projenizi Başlatalım</h3>
                                <p className="text-gray-600 mb-8">
                                    {data.name} alanındaki ihtiyaçlarınız için ücretsiz keşif ve fiyat teklifi alın.
                                </p>
                                <Link href={`/iletisim?kategori=${slug}`} className="block w-full text-center bg-gold text-white px-6 py-4 rounded-xl text-lg font-bold hover:bg-dark transition-all shadow-lg hover:shadow-xl">
                                    Teklif Formu İçin Tıklayınız
                                </Link>
                                
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-bold">DİĞER HİZMETLERİMİZ</p>
                                    <div className="flex flex-col gap-3">
                                        {Object.entries(categoryData)
                                            .filter(([k]) => k !== slug)
                                            .slice(0, 4)
                                            .map(([k, v]) => (
                                                <Link key={k} href={`/taahhutlerimiz/${k}`} className="flex items-center justify-between group">
                                                    <span className="text-gray-700 group-hover:text-gold transition-colors">{v.name}</span>
                                                    <i className="fas fa-arrow-right text-gray-300 group-hover:text-gold transition-transform group-hover:translate-x-1"></i>
                                                </Link>
                                            ))}
                                        <Link href="/taahhutlerimiz" className="text-gold font-medium mt-2 hover:underline">
                                            Tümünü Gör
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
