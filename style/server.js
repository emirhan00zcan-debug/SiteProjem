const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve Static Files from 'main' directory (current directory for now, or 'public' if we move them)
// For now, serving from current directory to avoid moving files and breaking paths immediately.
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/status', (req, res) => {
    res.json({ status: 'active', message: 'Backend is running' });
});

// Mock Database
const posts = [
    {
        id: 1,
        title: "2026 Mutfak Dekorasyon Trendleri",
        category: "Mutfak",
        date: "15 ŞUB",
        image: "assets/images/pro-mutfak-3.png",
        excerpt: "Modern mutfaklarda bu yıl öne çıkan renkler, malzemeler ve teknolojik entegrasyonlar neler?",
        content: `
            <p>2026 mutfak trendlerinde doğallık ve teknoloji iç içe geçiyor. Mat yüzeyler, parmak izi bırakmayan nanoteknolojik kaplamalar ve gizli aydınlatmalar ön planda.</p>
            <h3>1. Sürdürülebilir Malzemeler</h3>
            <p>Geri dönüştürülmüş ahşap ve kompozit tezgahlar, çevre dostu ev sahiplerinin ilk tercihi.</p>
            <h3>2. Akıllı Depolama</h3>
            <p>Görünmeyen kiler sistemleri ve köşe dolap çözümleri ile her santimetrekare değerlendiriliyor.</p>
            <p>Özcan Mobilya olarak, bu trendleri kişiye özel tasarımlarımızla buluşturuyoruz.</p>
        `
    },
    {
        id: 2,
        title: "Küçük Alanlar İçin Akıllı Çözümler",
        category: "Dekorasyon",
        date: "02 ŞUB",
        image: "assets/images/d4_pro_1769532928933.png",
        excerpt: "Dar antreler ve küçük yaşam alanları için fonksiyonel mobilya önerileri.",
        content: `
            <p>Küçük evlerde yaşamak, konfordan ödün vermek anlamına gelmez. Doğru mobilya seçimi ile alanınızı maksimum verimle kullanabilirsiniz.</p>
            <ul>
                <li><strong>Çok Amaçlı Mobilyalar:</strong> Yatak olan kanepeler veya çalışma masasına dönüşen konsollar.</li>
                <li><strong>Duvarları Kullanın:</strong> Dikey depolama alanları zemin alanından tasarruf sağlar.</li>
                <li><strong>Aynaların Gücü:</strong> Büyük aynalar mekanı olduğundan daha geniş ve ferah gösterir.</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Neden Özel Üretim Mobilya?",
        category: "İmalat",
        date: "20 OCA",
        image: "assets/images/img.png",
        excerpt: "Seri üretim mobilyalar ile özel tasarım mobilyalar arasındaki farklar.",
        content: `
            <p>Eviniz sizin parmak iziniz gibidir, benzersiz olmalıdır. Özel üretim mobilya, standart ölçülere sıkışıp kalmadan mekanın potansiyelini ortaya çıkarır.</p>
            <p>Özcan Mobilya atölyelerinde, seçtiğiniz ağaç türünden kulp detayına kadar her aşamada söz sahibisiniz. Kaliteli işçilik ve uzun ömürlü kullanım garantisi ile hayallerinizi gerçeğe dönüştürüyoruz.</p>
        `
    },
    {
        id: 4,
        title: "Sağlıklı Uyku İçin Yatak Odası Dizaynı",
        category: "Yatak Odası",
        date: "10 OCA",
        image: "assets/images/premium-bedroom.png",
        excerpt: "Renk seçiminden aydınlatmaya, yatak odasında huzurlu bir atmosfer yaratmanın püf noktaları.",
        content: `
            <p>Yatak odası dekorasyonu doğrudan uyku kalitenizi etkiler. Sakinleştirici renk paletleri (mavi, yeşil, bej) ve doğal dokular tercih edilmelidir.</p>
            <p>Giyinme odası çözümlerimizle dağınıklığı ortadan kaldırarak zihninizi dinlendiren bir ortam yaratıyoruz.</p>
        `
    }
];

// Routes
app.get('/api/blog', (req, res) => {
    res.json(posts.map(({ content, ...meta }) => meta)); // Send metadata only for list
});

app.get('/api/blog/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
