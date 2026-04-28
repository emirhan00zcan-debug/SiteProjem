export interface Project {
  id: string;
  slug: string;
  title: string;
  desc: string;
  category: string;
  img: string;
  imgHover: string;
  images: string[];
  m2Price: number;
  material?: string;       // Soru işareti: opsiyonel demek
  style?: string;
  cncTechnique?: string;   // Aradığımız o meşhur teknik özellik!
}
export const allCategories = ['Mutfak', 'Yatak Odası', 'Banyo', 'Portmanto / Antre', 'TV & Yaşam Ünitesi', 'Özel Tasarım', 'Gardırop & Dolap'];
export const allMaterials = ['Masif Ahşap', 'Lake', 'MDF Lam', 'High Gloss', 'Akrilik'];
export const allStyles = ['Modern', 'Klasik', 'Avangard', 'Minimalist', 'Endüstriyel'];

export const projectsData: Project[] = [
  // MUTFAK PROJELERİ
  {
    id: 'pro-m1', slug: 'ada-mutfak-konsepti', title: 'Ada Mutfak Konsepti', desc: 'Şık ve ferah ada mutfak tasarımı.', category: 'Mutfak', material: 'Lake', style: 'Modern',
    img: '/assets/images/temiz/pro-m1-sag.png', imgHover: '/assets/images/temiz/pro-m1-sol.png',
    images: ['/assets/images/temiz/pro-m1-sag.png', '/assets/images/temiz/pro-m1-sol.png', '/assets/images/temiz/pro-m1-acik.png'], m2Price: 8500
  },
  {
    id: 'pro-m3', slug: 'klasik-mutfak-tasarimi', title: 'Klasik Mutfak Tasarımı 3', desc: 'Zamansız klasik detaylarla mutfak ahşap şıklığı.', category: 'Mutfak', material: 'MDF Lam', style: 'Klasik',
    img: '/assets/images/temiz/pro-mutfak-3.png', imgHover: '/assets/images/temiz/pro-mutfak-3.png',
    images: ['/assets/images/temiz/pro-mutfak-3.png'], m2Price: 7200
  },
  {
    id: 'pro-m6', slug: 'modern-mutfak-6', title: 'Modern Mutfak 6', desc: 'Açık renklerin ferahlık katan etkisi.', category: 'Mutfak', material: 'Lake', style: 'Minimalist',
    img: '/assets/images/temiz/pro-mutfak-6.png', imgHover: '/assets/images/temiz/pro-mutfak-6.png',
    images: ['/assets/images/temiz/pro-mutfak-6.png'], m2Price: 7800
  },
  {
    id: 'pro-m7', slug: 'luks-mutfak-7', title: 'Lüks Mutfak Tasarımı 7', desc: 'Premium dolap ve tezgah kombinasyonu.', category: 'Mutfak', material: 'High Gloss', style: 'Modern',
    img: '/assets/images/temiz/pro-mutfak-7.png', imgHover: '/assets/images/temiz/pro-mutfak-7.png',
    images: ['/assets/images/temiz/pro-mutfak-7.png'], m2Price: 9500
  },
  {
    id: 'pro-m11', slug: 'genis-mutfak-11', title: 'Geniş İç Hacimli Mutfak 11', desc: 'Bol depolama alanı.', category: 'Mutfak', material: 'Akrilik', style: 'Modern',
    img: '/assets/images/temiz/pro-mutfak-11.png', imgHover: '/assets/images/temiz/pro-mutfak-11.png',
    images: ['/assets/images/temiz/pro-mutfak-11.png'], m2Price: 8900
  },
  { id: 'pro-mockup-1', slug: 'elegance-mutfak', title: 'Elegance Mutfak Tasarımı', desc: 'Sade ve elegan mutfak tasarımı.', category: 'Mutfak', material: 'Lake', style: 'Modern', img: '/assets/images/mockups/elegance_kitchen.png', imgHover: '/assets/images/mockups/elegance_kitchen.png', images: ['/assets/images/mockups/elegance_kitchen.png'], m2Price: 7500 },
  { id: 'pro-mockup-2', slug: 'grey-soft-mutfak', title: 'Gri Soft Mutfak', desc: 'Yumuşak gri tonlarında modern mutfak.', category: 'Mutfak', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/mockups/grey_soft_kitchen.png', imgHover: '/assets/images/mockups/grey_soft_kitchen.png', images: ['/assets/images/mockups/grey_soft_kitchen.png'], m2Price: 6500 },
  { id: 'pro-mockup-3', slug: 'l-shape-mutfak', title: 'L Şeklinde Fonksiyonel Mutfak', desc: 'Dar alanlar için L şeklinde pratik tasarım.', category: 'Mutfak', material: 'Masif Ahşap', style: 'Modern', img: '/assets/images/mockups/l_shape_kitchen.png', imgHover: '/assets/images/mockups/l_shape_kitchen.png', images: ['/assets/images/mockups/l_shape_kitchen.png'], m2Price: 7000 },
  { id: 'pro-mockup-4', slug: 'minimalist-mutfak', title: 'Minimalist Mutfak Çözümleri', desc: 'Minimal ve ferah mekanlar için ideal mutfak.', category: 'Mutfak', material: 'Akrilik', style: 'Minimalist', img: '/assets/images/mockups/minimalist_kitchen.png', imgHover: '/assets/images/mockups/minimalist_kitchen.png', images: ['/assets/images/mockups/minimalist_kitchen.png'], m2Price: 7200 },
  { id: 'pro-mockup-5', slug: 'navy-blue-mutfak', title: 'Lacivert Modern Mutfak', desc: 'Göz alıcı lacivert tonlarıyla cesur mutfak tasarımı.', category: 'Mutfak', material: 'Lake', style: 'Modern', img: '/assets/images/mockups/navy_blue_kitchen.png', imgHover: '/assets/images/mockups/navy_blue_kitchen.png', images: ['/assets/images/mockups/navy_blue_kitchen.png'], m2Price: 8500 },

  // MULTI-VIEW MUTFAK/DOLAP PROJELERİ
  {
    id: 'pro-rek3', slug: 'ledli-kose-mutfak', title: 'Gömme Ledli Köşe Tasarım', desc: 'Özel aydınlatmalı ve kullanışlı köşe tasarımı.', category: 'Mutfak', material: 'Lake', style: 'Modern',
    img: '/assets/images/temiz/reklam3_karsidan_cekim.png', imgHover: '/assets/images/temiz/reklam3_duzeltilmis_isik.png',
    images: ['/assets/images/temiz/reklam3_karsidan_cekim.png', '/assets/images/temiz/reklam3_duzeltilmis_isik.png'], m2Price: 7400
  },
  {
    id: 'pro-rek4', slug: 'genis-tezgahli-mutfak', title: 'Geniş Tezgahlı Endüstriyel Mutfak', desc: 'Geniş çalışma alanına sahip koyu/açık tonlu sistem.', category: 'Mutfak', material: 'Mat MDF', style: 'Endüstriyel',
    img: '/assets/images/temiz/reklam_4_bos_tezgah - Kopya.png', imgHover: '/assets/images/temiz/reklam_4_sagdan_bos.png',
    images: ['/assets/images/temiz/reklam_4_bos_tezgah - Kopya.png', '/assets/images/temiz/reklam_4_sagdan_bos.png'], m2Price: 8100
  },
  {
    id: 'pro-rek-acisi', slug: 'yan-ada-mutfak', title: 'Açılı Özel Tasarım Mutfak', desc: 'Ergonomik açılı yapı ve şık tezgah.', category: 'Mutfak', material: 'Lake', style: 'Modern',
    img: '/assets/images/temiz/reklam_acisi_sag.png', imgHover: '/assets/images/temiz/reklam_acisi_sol.png',
    images: ['/assets/images/temiz/reklam_acisi_sag.png', '/assets/images/temiz/reklam_acisi_sol.png'], m2Price: 8800
  },

  // BANYO PROJELERİ
  { id: 'pro-b1', slug: 'mermer-detayli-banyo', title: 'Mermer Detaylı Modern Banyo', desc: 'Doğal taş şıklığıyla banyonuza zarafet katın.', category: 'Banyo', material: 'Akrilik', style: 'Modern', img: '/assets/images/vanity-marble.jpg', imgHover: '/assets/images/vanity-marble.jpg', images: ['/assets/images/vanity-marble.jpg'], m2Price: 6000 },
  { id: 'pro-b2', slug: 'premium-banyo', title: 'Premium Banyo Tasarımı', desc: 'Ferah ve şık çözümler sunan banyo dolapları.', category: 'Banyo', material: 'Lake', style: 'Minimalist', img: '/assets/images/premium-bathroom.png', imgHover: '/assets/images/premium-bathroom.png', images: ['/assets/images/premium-bathroom.png'], m2Price: 6500 },

  // DOLAPLAR (WARDROBE, REFRIGERATOR MOCKUPS)
  {
    id: 'pro-ward5', slug: 'sik-gardirop-model-5', title: 'Şık Gardırop Model 5', desc: '3 farklı açıdan: Kapalı, açılı ve iç modül beyaz pürüzsüz görünüm.', category: 'Gardırop & Dolap', material: 'Lake', style: 'Avangard',
    img: '/assets/images/temiz/5_wardrobe_straight_closed.png', imgHover: '/assets/images/temiz/5_wardrobe_straight_open.png',
    images: ['/assets/images/temiz/5_wardrobe_straight_closed.png', '/assets/images/temiz/5_wardrobe_angled_closed.png', '/assets/images/temiz/5_wardrobe_straight_open.png'], m2Price: 7800
  },
  {
    id: 'pro-ward1', slug: 'minimalist-beyaz-gardirop', title: 'Minimalist Beyaz Gardırop', desc: 'Tamamı beyaz, pürüzsüz yüzey ve beyaz iç tasarımlı dolap.', category: 'Gardırop & Dolap', material: 'MDF Lam', style: 'Minimalist',
    img: '/assets/images/temiz/wardrobe_front_closed_1776678972128.png', imgHover: '/assets/images/temiz/wardrobe_front_open_white_1776679002782.png',
    images: ['/assets/images/temiz/wardrobe_front_closed_1776678972128.png', '/assets/images/temiz/wardrobe_angled_closed_1776678986831.png', '/assets/images/temiz/wardrobe_front_open_white_1776679002782.png'], m2Price: 5900
  },
  {
    id: 'pro-dolap6', slug: 'ozel-buzdolabi-gardirop-6', title: 'Özel Tasarım Dolap Serisi 6', desc: 'Boy dolap formu, gizli kulp ve aydınlık iç hacim.', category: 'Gardırop & Dolap', material: 'Lake', style: 'Modern',
    img: '/assets/images/temiz/6_karsi.png', imgHover: '/assets/images/temiz/6_karsi_ic_beyaz.png',
    images: ['/assets/images/temiz/6_karsi.png', '/assets/images/temiz/6_farkli_aci.png', '/assets/images/temiz/6_karsi_ic_beyaz.png'], m2Price: 6500
  },
  {
    id: 'pro-rek2', slug: 'boy-aydali-gardirop', title: 'Aynalı Kompakt Dolap', desc: 'Geniş ayna kapaklı ve ferah iç depolama.', category: 'Gardırop & Dolap', material: 'High Gloss', style: 'Minimalist',
    img: '/assets/images/temiz/reklam2_temiz_ayna.png', imgHover: '/assets/images/temiz/reklam2_kapaklar_acik_ayni_dolap.png',
    images: ['/assets/images/temiz/reklam2_temiz_ayna.png', '/assets/images/temiz/reklam2_kapaklar_acik_ayni_dolap.png'], m2Price: 6200
  },

  // YATAK ODASI PROJELERİ
  { id: 'pro-y1', slug: 'safir-yatak-odasi', title: 'Safir Yatak Odası', desc: 'Huzurlu uykular için konforlu ve modern çizgiler.', category: 'Yatak Odası', material: 'Lake', style: 'Modern', img: '/assets/images/temiz/y1_pro_1769511645588.png', imgHover: '/assets/images/temiz/y1_pro_1769511645588.png', images: ['/assets/images/temiz/y1_pro_1769511645588.png'], m2Price: 7000 },
  { id: 'pro-y2', slug: 'yatak-odasi-y2', title: 'Minimalist Yatak Odası', desc: 'Sade ve ferah yatak odası tasarımı.', category: 'Yatak Odası', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/y2_pro_1769513058876.png', imgHover: '/assets/images/y2_pro_1769513058876.png', images: ['/assets/images/y2_pro_1769513058876.png'], m2Price: 5500 },
  { id: 'pro-y3', slug: 'yatak-odasi-y3', title: 'Konforlu Yatak Odası', desc: 'Sıcak ve konforlu bir yatak odası.', category: 'Yatak Odası', material: 'Lake', style: 'Modern', img: '/assets/images/y3_pro_1769512065820.png', imgHover: '/assets/images/y3_pro_1769512065820.png', images: ['/assets/images/y3_pro_1769512065820.png'], m2Price: 6000 },
  { id: 'pro-y4', slug: 'loft-yatak-odasi', title: 'Loft Yatak Odası', desc: 'Geniş giyinme modüllü maskülen tasarım.', category: 'Yatak Odası', material: 'Akrilik', style: 'Modern', img: '/assets/images/temiz/y4_pro_1769512186282.png', imgHover: '/assets/images/temiz/y4_pro_1769512186282.png', images: ['/assets/images/temiz/y4_pro_1769512186282.png'], m2Price: 6500 },
  { id: 'pro-y5', slug: 'urban-yatak-odasi', title: 'Urban Çizgili Yatak Odası', desc: 'Farklı tekstürlerin ve çizgilerin dinamizmi.', category: 'Yatak Odası', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/temiz/y5_pro_1769512354644.png', imgHover: '/assets/images/temiz/y5_pro_1769512354644.png', images: ['/assets/images/temiz/y5_pro_1769512354644.png'], m2Price: 5800 },
  { id: 'pro-y6', slug: 'yatak-odasi-y6', title: 'Modern Çizgili Yatak Odası', desc: 'Modern çizgilerin birleşimiyle zarif görünüm.', category: 'Yatak Odası', material: 'High Gloss', style: 'Modern', img: '/assets/images/y6_pro_1769512574851.png', imgHover: '/assets/images/y6_pro_1769512574851.png', images: ['/assets/images/y6_pro_1769512574851.png'], m2Price: 6500 },
  { id: 'pro-y7', slug: 'yatak-odasi-y7', title: 'Ahşap Yatak Odası', desc: 'Ahşap dokusunun huzur veren yansıması.', category: 'Yatak Odası', material: 'Masif Ahşap', style: 'Klasik', img: '/assets/images/y7_pro_1769512723497.png', imgHover: '/assets/images/y7_pro_1769512723497.png', images: ['/assets/images/y7_pro_1769512723497.png'], m2Price: 8000 },
  { id: 'pro-y8', slug: 'dogal-mese-yatak-odasi', title: 'Doğal Meşe Yatak Odası', desc: 'Ahşabın sıcaklığını yansıtan dinlendirici konsept.', category: 'Yatak Odası', material: 'Masif Ahşap', style: 'Doğal', img: '/assets/images/temiz/y8_pro_1769512921054.png', imgHover: '/assets/images/temiz/y8_pro_1769512921054.png', images: ['/assets/images/temiz/y8_pro_1769512921054.png'], m2Price: 9000 },
  { id: 'pro-y9', slug: 'prestij-yatak-odasi', title: 'Prestij Yatak Odası', desc: 'İhtişamı sevenler için klasik oymalı form.', category: 'Yatak Odası', material: 'Lake', style: 'Klasik', img: '/assets/images/temiz/y9_pro_1769513120062.png', imgHover: '/assets/images/temiz/y9_pro_1769513120062.png', images: ['/assets/images/temiz/y9_pro_1769513120062.png'], m2Price: 11000 },
  { id: 'pro-y10', slug: 'elegant-yatak-odasi', title: 'Elegant Yatak Odası Serisi', desc: 'Şık ve ferah, elit bir alan yaratmak isteyenlere.', category: 'Yatak Odası', material: 'High Gloss', style: 'Klasik', img: '/assets/images/temiz/y10_pro_1769513275050.png', imgHover: '/assets/images/temiz/y10_pro_1769513275050.png', images: ['/assets/images/temiz/y10_pro_1769513275050.png'], m2Price: 12500 },

  // DRESUAR / ÖZEL TASARIM PROJELERİ
  { id: 'pro-d1', slug: 'ozel-tasarim-d1', title: 'Özel Tasarım D1', desc: 'Sıra dışı formları ve işlevsel yapısı ile özel tasarım.', category: 'Özel Tasarım', material: 'Lake', style: 'Avangard', img: '/assets/images/d1_pro_1769513348376.png', imgHover: '/assets/images/d1_pro_1769513348376.png', images: ['/assets/images/d1_pro_1769513348376.png'], m2Price: 7000 },
  { id: 'pro-d2', slug: 'minimalist-dresuar-d2', title: 'Minimalist Dresuar Serisi D2', desc: 'Dar alanlarda hayat kurtaran fonksiyonel dresuar.', category: 'Özel Tasarım', material: 'Lake', style: 'Minimalist', img: '/assets/images/temiz/d2_pro_1769513413217.png', imgHover: '/assets/images/temiz/d2_pro_1769513413217.png', images: ['/assets/images/temiz/d2_pro_1769513413217.png'], m2Price: 4000 },
  { id: 'pro-d3', slug: 'ozel-tasarim-d3', title: 'Özel Tasarım D3', desc: 'Minimal ve fonksiyonel özelliklere sahip özel üretim.', category: 'Özel Tasarım', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/d3_pro_1769513486447.png', imgHover: '/assets/images/d3_pro_1769513486447.png', images: ['/assets/images/d3_pro_1769513486447.png'], m2Price: 5000 },
  { id: 'pro-d4', slug: 'ozel-tasarim-d4', title: 'Özel Tasarım D4', desc: 'Evinize şıklık katacak özel tasarım dolap modülü.', category: 'Özel Tasarım', material: 'Akrilik', style: 'Modern', img: '/assets/images/d4_pro_1769532928933.png', imgHover: '/assets/images/d4_pro_1769532928933.png', images: ['/assets/images/d4_pro_1769532928933.png'], m2Price: 5500 },
  { id: 'pro-d5', slug: 'ozel-tasarim-konsol-d5', title: 'Özel Tasarım Ahşap Konsol D5', desc: 'Kalın tabya ve organik formuyla ahşap şıklığı.', category: 'Özel Tasarım', material: 'Masif Ahşap', style: 'Modern', img: '/assets/images/temiz/d5_pro_1769532944723.png', imgHover: '/assets/images/temiz/d5_pro_1769532944723.png', images: ['/assets/images/temiz/d5_pro_1769532944723.png'], m2Price: 5500 },
  { id: 'pro-d6', slug: 'lake-giris-konsolu-d6', title: 'Lake Giriş Konsolu D6', desc: 'Evinizin girişine yakışan asil lake tarz.', category: 'Özel Tasarım', material: 'Lake', style: 'Modern', img: '/assets/images/temiz/d6_pro_1769532959772.png', imgHover: '/assets/images/temiz/d6_pro_1769532959772.png', images: ['/assets/images/temiz/d6_pro_1769532959772.png'], m2Price: 6200 },
  { id: 'pro-d7', slug: 'ozel-tasarim-d7', title: 'Özel Tasarım D7', desc: 'Göz alıcı detaylarıyla farklılık yaratın.', category: 'Özel Tasarım', material: 'High Gloss', style: 'Modern', img: '/assets/images/d7_pro_1769532976156.png', imgHover: '/assets/images/d7_pro_1769532976156.png', images: ['/assets/images/d7_pro_1769532976156.png'], m2Price: 6000 },
  { id: 'pro-d8', slug: 'ozel-tasarim-d8', title: 'Özel Tasarım D8', desc: 'Kaliteli ve ince işçilik eseri özel tasarım.', category: 'Özel Tasarım', material: 'Masif Ahşap', style: 'Klasik', img: '/assets/images/d8_pro_1769532992816.png', imgHover: '/assets/images/d8_pro_1769532992816.png', images: ['/assets/images/d8_pro_1769532992816.png'], m2Price: 8000 },
  { id: 'pro-d9', slug: 'beyaz-akrilik-dresuar-d9', title: 'Beyaz Akrilik Dresuar D9', desc: 'Işığı mükemmel yansıtan pürüzsüz yüzey.', category: 'Özel Tasarım', material: 'Akrilik', style: 'Modern', img: '/assets/images/temiz/d9_pro_1769533007384.png', imgHover: '/assets/images/temiz/d9_pro_1769533007384.png', images: ['/assets/images/temiz/d9_pro_1769533007384.png'], m2Price: 5000 },
  { id: 'pro-d10', slug: 'ozel-tasarim-d10', title: 'Özel Tasarım D10', desc: 'Evinizin her köşesine uyum sağlayan pratik tasarım.', category: 'Özel Tasarım', material: 'MDF Lam', style: 'Modern', img: '/assets/images/d10_pro_1769533023694.png', imgHover: '/assets/images/d10_pro_1769533023694.png', images: ['/assets/images/d10_pro_1769533023694.png'], m2Price: 4800 },
  { id: 'pro-d11', slug: 'ozel-tasarim-d11', title: 'Özel Tasarım D11', desc: 'Fonksiyonel iç dizayn ve dış zarafet.', category: 'Özel Tasarım', material: 'Lake', style: 'Minimalist', img: '/assets/images/d11_pro_1769533038807.png', imgHover: '/assets/images/d11_pro_1769533038807.png', images: ['/assets/images/d11_pro_1769533038807.png'], m2Price: 5200 },
  { id: 'pro-d12', slug: 'ozel-tasarim-d12', title: 'Özel Tasarım D12', desc: 'Eşsiz ve özgün çizgilere sahip harika bir detay.', category: 'Özel Tasarım', material: 'Akrilik', style: 'Avangard', img: '/assets/images/d12_pro_1769533056001.png', imgHover: '/assets/images/d12_pro_1769533056001.png', images: ['/assets/images/d12_pro_1769533056001.png'], m2Price: 6500 },

  // PORTMANTO / ANTRE
  { id: 'pro-p1', slug: 'fonksiyonel-portmanto-p1', title: 'Fonksiyonel Portmanto P1', desc: 'Gizli kulplu ve estetik modern vestiyer.', category: 'Portmanto / Antre', material: 'MDF Lam', style: 'Modern', img: '/assets/images/temiz/p1_pro_1769533135296.png', imgHover: '/assets/images/temiz/p1_pro_1769533135296.png', images: ['/assets/images/temiz/p1_pro_1769533135296.png'], m2Price: 7000 },
  { id: 'pro-p2', slug: 'portmanto-p2', title: 'Geniş Portmanto', desc: 'Geniş depolama hacimli modern antre dolabı.', category: 'Portmanto / Antre', material: 'Lake', style: 'Modern', img: '/assets/images/p2_pro_1769533152904.png', imgHover: '/assets/images/p2_pro_1769533152904.png', images: ['/assets/images/p2_pro_1769533152904.png'], m2Price: 6000 },
  { id: 'pro-p3', slug: 'portmanto-p3', title: 'Ahşap Vestiyer', desc: 'Doğal ahşap detaylı vestiyer çözümü.', category: 'Portmanto / Antre', material: 'Masif Ahşap', style: 'Klasik', img: '/assets/images/p3_pro_1769533168676.png', imgHover: '/assets/images/p3_pro_1769533168676.png', images: ['/assets/images/p3_pro_1769533168676.png'], m2Price: 6500 },
  { id: 'pro-p4', slug: 'aynali-vestiyer-p4', title: 'Aynalı Vestiyer P4', desc: 'Duvar boyunca uzanan geniş hacimli antre dolabı.', category: 'Portmanto / Antre', material: 'Lake', style: 'Minimalist', img: '/assets/images/temiz/p4_pro_1769533184096.png', imgHover: '/assets/images/temiz/p4_pro_1769533184096.png', images: ['/assets/images/temiz/p4_pro_1769533184096.png'], m2Price: 8200 },
  { id: 'pro-t5', slug: 'dresuar-white-mirror', title: 'Aynalı Beyaz Dresuar', desc: 'Geniş bir görünüm katan aynalı ve fonksiyonel beyaz dresuar.', category: 'Portmanto / Antre', material: 'Lake', style: 'Klasik', img: '/assets/images/dresuar-white-mirror.jpg', imgHover: '/assets/images/dresuar-white-mirror.jpg', images: ['/assets/images/dresuar-white-mirror.jpg'], m2Price: 4200 },
  { id: 'pro-t6', slug: 'dresuar-long-white', title: 'Uzun Beyaz Dresuar', desc: 'Antrenizde şıklığı yansıtacak geniş dresuar modeli.', category: 'Portmanto / Antre', material: 'Lake', style: 'Modern', img: '/assets/images/dresuar-long-white.jpg', imgHover: '/assets/images/dresuar-long-white.jpg', images: ['/assets/images/dresuar-long-white.jpg'], m2Price: 4800 },

  // TV & YAŞAM ÜNİTESİ
  { id: 'pro-t1', slug: 'minimal-tv-unitesi-t1', title: 'Minimal TV Ünitesi T1', desc: 'Televizyon ve dekor asmak için sade panel.', category: 'TV & Yaşam Ünitesi', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/temiz/t1_pro_1769533091788.png', imgHover: '/assets/images/temiz/t1_pro_1769533091788.png', images: ['/assets/images/temiz/t1_pro_1769533091788.png'], m2Price: 4500 },
  { id: 'pro-t2', slug: 'dogal-ceviz-tv-t2', title: 'Doğal Ceviz TV Masası T2', desc: 'Raflı ve kapaklı zengin tv ünitesi varyasyonu.', category: 'TV & Yaşam Ünitesi', material: 'Masif Ahşap', style: 'Modern', img: '/assets/images/temiz/t2_pro_1769533106502.png', imgHover: '/assets/images/temiz/t2_pro_1769533106502.png', images: ['/assets/images/temiz/t2_pro_1769533106502.png'], m2Price: 6500 },
  { id: 'pro-t3', slug: 'modern-yasam-duvari-t3', title: 'Modern Yaşam Duvarı T3', desc: 'Kitaplık dahil geniş duvar yaşam konsepti.', category: 'TV & Yaşam Ünitesi', material: 'Lake', style: 'Avangard', img: '/assets/images/temiz/t3_pro_1769533120140.png', imgHover: '/assets/images/temiz/t3_pro_1769533120140.png', images: ['/assets/images/temiz/t3_pro_1769533120140.png'], m2Price: 10500 },
  { id: 'pro-t4', slug: 'siyah-calisma-masasi', title: 'Siyah Çalışma Masası', desc: 'Modern ve verimli bir çalışma alanı sağlayan siyah konsept.', category: 'Özel Tasarım', material: 'MDF Lam', style: 'Minimalist', img: '/assets/images/desk-black.jpg', imgHover: '/assets/images/desk-black.jpg', images: ['/assets/images/desk-black.jpg'], m2Price: 3500 },
];
