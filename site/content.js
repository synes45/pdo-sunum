// Content contract: window.TOPICS = [{ id, group, title, slides: [{ heading, html }], faq: [{ q, a }] }]
// Sources: Akdeniz Tip Drive (D2 Komite 1 & 5 lecture PDFs), Serdar Akgun "Lokositler" playlist (titles only), textbooks where marked.
window.TOPICS = [
  {
    id: "lokosit-yapi",
    group: "Lökositler ve Kan",
    title: "Lökositlerin Yapı ve Fonksiyonu",
    slides: [
      {
        heading: "Genel bakış: lökosit nedir?",
        html: `
<ul>
<li>Lökositler (akyuvar, WBC) <strong>çekirdekli, tam hücrelerdir</strong>; eritrositten büyük ama sayıca çok azdır.</li>
<li>Kanı yalnızca <strong>taşıma aracı</strong> olarak kullanır; asıl işlerini <strong>dokuda</strong> yaparlar (diyapedez ile damar dışına çıkarlar). Eritrositlerden temel farkı budur.</li>
<li>Hareketlidirler: <strong>ameboid hareket, diyapedez, kemotaksis</strong>.</li>
<li>Normal sayı: <strong>4.000–10.000/mm³</strong>. &lt;4.000 lökopeni, &gt;10.000 lökositoz.</li>
<li>Kanın santrifüjünde plazma ile eritrositler arasında kalan ince <strong>"buffy coat"</strong> tabakasında (kanın &lt;%1'i) lökosit ve trombositler bulunur.</li>
</ul>
<h3>Sınıflama: granül varlığı ve çekirdek şekli</h3>
<ul>
<li><strong>Granülositler (polimorfonükleer, PMN):</strong> nötrofil, eozinofil, bazofil. Çekirdek loblu, spesifik granül var.</li>
<li><strong>Agranülositler (mononükleer):</strong> lenfosit, monosit. Çekirdek loblu değil, spesifik granül yok (yalnızca azurofilik granül).</li>
</ul>
<div class="key"><p>Tüm lökositlerde iki tip granül olabilir: <strong>azurofilik (primer)</strong> granüller lizozom niteliğindedir; <strong>spesifik (sekonder)</strong> granüller yalnızca granülositlerde vardır ve hücreye adını verir.</p></div>
<figure class="slide-img"><img src="img/lokosit-yapi-1.jpg" alt="Lökositlerin granülosit ve agranülosit olarak sınıflandırılması ve oranları" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 19 — lökositlerin granüllü/granülsüz sınıflaması ve oranları</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci: Lökositler… -1" (Doç. Dr. Özlem Özsoy) s. 16–20, 44; Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi" (Prof. Dr. E. T. Korgun); Biyokimya 5 "Lökosit trombosit biyokimyası"</p>`
      },
      {
        heading: "Özet tablo: 5 lökosit tipi",
        html: `
<table><caption>Lökositlerin karşılaştırmalı özeti</caption>
<thead><tr><th>Hücre</th><th>Oran (sayı/mm³)</th><th>Çap</th><th>Çekirdek</th><th>Granül / boyanma</th><th>Ömür (kan → doku)</th><th>Ana fonksiyon</th><th>Arttığı durumlar</th></tr></thead>
<tbody>
<tr><td><strong>Nötrofil</strong></td><td>%60–70 (3.500–7.000)</td><td>12–14 µm</td><td>2–5 lob, ince kromatin iplikçikleriyle bağlı; genç formu çomak (stab/band)</td><td>Nötr boyalarla pembe ince granüller: proteazlar (elastaz, kollajenaz, metalloproteinaz), MPO, defensinler</td><td>4–8 saat → 4–5 gün</td><td>En güçlü ve ilk gelen fagosit; 3–20 bakteri yutar, solunum patlaması, degranülasyon</td><td>Enfeksiyon (özellikle bakteriyel), akut inflamasyon; kemik iliğinde yapımı ve salınımı uyarılır</td></tr>
<tr><td><strong>Eozinofil</strong></td><td>%2–4 (150–400)</td><td>~12 µm</td><td>Genellikle 2 lob</td><td>Asidik boyalarla kırmızı iri granüller: sitotoksik granül proteinleri (majör bazik protein vb.)</td><td>Kanda kısa → çoğu dokuda (GİS, üriner, solunum mukozası)</td><td>Parazit öldürme; mast/bazofil mediatörlerini ve antijen-antikor komplekslerini fagosite eder; T hücreye antijen sunar; zayıf fagosit</td><td>Paraziter enfeksiyon, astım ve alerjik hastalıklar, bazı solunum ve GİS hastalıkları</td></tr>
<tr><td><strong>Bazofil</strong></td><td>%0,5–1 (40–100)</td><td>10–12 µm</td><td>2–3 lob, granüllerle örtülü</td><td>Bazik boyalarla mor granüller: histamin, heparin; yüzeyde IgE reseptörü</td><td>Kanda; gerektiğinde dokuya geçer</td><td>Erken tip aşırı duyarlılık (ürtiker, rinit, anafilaksi); mast hücresinin kandaki benzeri; zayıf fagosit</td><td>Alerjik inflamasyon, parazit enfeksiyonu</td></tr>
<tr><td><strong>Monosit</strong></td><td>%3–8 (80–800)</td><td>12–20 µm (en büyük)</td><td>Böbrek / at nalı, eksantrik</td><td>Gri-mavi geniş sitoplazma, ince azurofilik granül</td><td>10–20 saat → makrofaj olarak 1–3 yıl</td><td>Makrofaja dönüşür: ~100 bakteri fagositozu, antijen sunumu, IL-1/TNF</td><td>Kronik enfeksiyon ve kronik inflamasyon (ör. tüberküloz)</td></tr>
<tr><td><strong>Lenfosit</strong></td><td>%20–30 (1.000–3.500)</td><td>Küçük 6–8, büyük 10–12 µm</td><td>Yuvarlak, sitoplazmayı neredeyse doldurur</td><td>İnce bazofilik halka; granül yok (NK'da iri azurofilik granül)</td><td>Kanda saatler (lenf–kan dolaşımı) → haftalar–yıllar (bellek)</td><td>Özgül bağışıklık: T (hücresel), B (antikor); NK doğal öldürücü</td><td>Viral enfeksiyonlar (lenfositoz)</td></tr>
</tbody></table>
<div class="note"><p>Kaynaklar arası fark: Fizyoloji 6 sunumu nötrofil çekirdeği için 2–5 lob, eozinofil için %2–4, bazofil için %0,5–1 verir; Histoloji 1 nötrofil 3–5 lob, eozinofil %1–4, bazofil %0–1 verir. Sağlıklı bireyde ortalama dağılım (Fizyoloji 6, s. 20): nötrofil %62, lenfosit %30, monosit %5,3, eozinofil %2,3, bazofil %0,4.</p></div>
<div class="note"><p>Toplam lökosit düşüklüğü (lökopeni) tifo, bazı viral enfeksiyonlar ve kanserde görülebilir; çok yüksek lökositoz lösemiyi taklit edebilir (lökomoid reaksiyon).</p></div>
<figure class="slide-img"><img src="img/lokosit-yapi-2.jpg" alt="Periferik yaymada nötrofil, eozinofil, bazofil, lenfosit ve monosit mikroskopi görüntüleri" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 38 — granülosit ve agranülositlerin mikroskopik görünümü</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci: Lökositler, granülositler, monosit-makrofaj sistemi ve enfeksiyon -1" s. 20, 27, 34–35, 43–54 (esas kaynak); Histoloji 1 (çaplar, mutlak sayılar); Biyokimya 5 (monosit: kronik enfeksiyon); Patoloji (K5) 8 (viral enfeksiyonda lenfosit artışı; s. 91 lökomoid reaksiyon, lökopeni nedenleri)</p>`
      },
      {
        heading: "Granülositler: yapım ve yaşam süresi",
        html: `
<ul>
<li><strong>Granülosit</strong> = nötrofil, eozinofil, bazofil. Çekirdekleri <strong>2–5 lobludur</strong>; loblar ince kromatin iplikçikleriyle bağlıdır. Bu yüzden <strong>polimorfonükleer lökosit (PMN)</strong> da denir.</li>
<li>Sitoplazmalarında <strong>biyolojik açıdan aktif madde içeren granüller</strong> bulunur; hücre adını bu granüllerin boyanmasından alır.</li>
<li>Kemik iliğindeki ortak öncül <strong>CFU-GM</strong>'den (granülosit-monosit koloni oluşturan ünite) gelişirler.</li>
</ul>
<h3>Farklılaşma basamakları</h3>
<ol>
<li><strong>Mitotik (bölünebilen) evre:</strong> miyeloblast → promiyelosit → miyelosit</li>
<li><strong>Postmitotik (bölünmeyen, olgunlaşan) evre:</strong> metamiyelosit → çomak/stab (band, genç hücre) → segmentli (olgun) nötrofil</li>
</ol>
<h3>Yaşam üç ayrı ortamda geçer</h3>
<table><caption>Granülositlerin yaşam süresi</caption>
<thead><tr><th>Ortam</th><th>Süre</th><th>Anlamı</th></tr></thead>
<tbody>
<tr><td>Kemik iliği – mitotik havuz</td><td>3–5 gün</td><td>Bölünerek çoğalma</td></tr>
<tr><td>Kemik iliği – postmitotik havuz</td><td>5–6 gün</td><td>Olgunlaşma ve depo; iliktaki granülosit sayısı kandakinin ~20 katı, enfeksiyonda hızla kana verilir</td></tr>
<tr><td>Kan</td><td>4–8 saat</td><td>Yalnızca taşınma</td></tr>
<tr><td>Doku</td><td>4–5 gün</td><td>Asıl görev yeri; geri dolaşıma dönmezler</td></tr>
</tbody></table>
<ul>
<li><strong>Monosit:</strong> monoblast → promonosit → monosit (iliğe ~6 gün); kanda 10–20 saat; dokuda makrofaj olarak 1–3 yıl.</li>
<li><strong>Lenfosit:</strong> B ve NK hücreleri kemik iliğinde, T lenfositler <strong>timusta</strong> olgunlaşır; büyük kısmı lenfoid dokuda depolanır, kana kısa süreli geçer.</li>
</ul>
<div class="note"><p>Histoloji 1 sunumu nötrofil için kanda 6–7 saat, dokuda 1–4 gün verir. Burada Fizyoloji 6 değerleri (4–8 saat / 4–5 gün) esas alındı; Biyokimya 5 de aynı değerleri verir.</p></div>
<figure class="slide-img"><img src="img/lokosit-yapi-3.jpg" alt="Granülosit farklılaşması: kök hücre, CFU-GM, miyeloblast, promiyelosit, miyelosit, metamiyelosit, çomak ve segmentli nötrofil" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 46 — granülosit farklılaşması (mitotik ve postmitotik evreler)</figcaption></figure>
<figure class="slide-img"><img src="img/lokosit-yapi-6.jpg" alt="Granülositlerin kemik iliği, kan ve dokudaki yaşam süreleri şeması" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 45 — granülositlerin yaşamı üç ortamda geçer</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci -1" s. 25–27, 34, 44–46; Histoloji 1. Playlist: "Lökositler, 1, Granulopoez" (yalnızca başlık)</p>`
      },
      {
        heading: "Nötrofil: ilk savunma hattı",
        html: `
<h3>Yapı</h3>
<ul>
<li><strong>En fazla bulunan lökosit</strong> (%60–70); çekirdeği çok parçalı (2–5 lob); granülleri <strong>nötr boyalarla pembeye</strong> boyanır.</li>
<li>Terminal hücredir, bölünmez. Genç formu çomak (band) nötrofildir; artışı "sola kayma" demektir.</li>
</ul>
<h3>Fonksiyon</h3>
<ul>
<li>Kanda bulunur ama <strong>inflamasyonda kapillerleri terk edip dokuya girer</strong>; akut inflamasyonda ilk gelen hücredir (6–24 saat).</li>
<li><strong>Dokuya geçer geçmez fagositoza başlar:</strong> patojene tutunma → yalancı ayaklarla sarma → fagositik vezikül (fagozom).</li>
<li>Bir nötrofil <strong>3–20 bakteri</strong> yutar; fagositozdan sonra büyük kısmı ölür (irin = ölü nötrofil + debris).</li>
<li><strong>Degranülasyon:</strong> granül içerikleri hem fagositik vakuole hem interstisyel aralığa boşaltılır: proteazlar (elastaz, kollajenaz, metalloproteinaz), miyeloperoksidaz (MPO), defensinler (antimikrobiyal peptitler).</li>
<li><strong>Solunum patlaması:</strong> fagositozdan sonra metabolizma ve oksijen tüketimi ciddi biçimde artar. Fagozom zarındaki <strong>NADPH oksidaz</strong> süperoksit (O<sub>2</sub><sup>−</sup>) üretir; reaksiyon şelalesiyle H<sub>2</sub>O<sub>2</sub>, OH<sup>−</sup>, MPO ile <strong>HOCl</strong>, NOS ile <strong>NO</strong> oluşur. Bu okside edici ajanların <strong>az miktarı bile öldürücüdür</strong>.</li>
<li><strong>NET (nötrofil hücre dışı tuzakları):</strong> kromatin + histon + MPO/elastaz ağı; mikrobu yakalar, yayılımı önler.</li>
</ul>
<h3>Klinik bağlantı</h3>
<ul>
<li>Enfeksiyonda kemik iliğinde yapımı ve salınımı büyük oranda uyarılır → <strong>nötrofili</strong> ve sola kayma.</li>
<li><strong>Kronik granülomatöz hastalık:</strong> NADPH oksidaz defekti → bakteri yutulur ama öldürülemez; katalaz (+) mikroplarla (S. aureus, Aspergillus) tekrarlayan enfeksiyon ve granülom. <strong>G6PD eksikliğinde</strong> NADPH azaldığı için benzer tablo görülebilir.</li>
<li><strong>Chediak-Higashi:</strong> fagolizozom oluşamaz, nötrofillerde dev granüller.</li>
<li>Granül enzimleri dokuya da salındığı için kontrolsüz nötrofil aktivasyonu doku hasarı yapar (ör. ARDS); α1-antitripsin elastazı dengeler.</li>
</ul>
<figure class="slide-img"><img src="img/lokosit-yapi-7.jpg" alt="Nötrofilde fagositoz: patojene tutunma, yalancı ayaklar ve fagozom oluşumu" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 48 — nötrofillerde fagositoz</figcaption></figure>
<figure class="slide-img"><img src="img/lokosit-yapi-8.jpg" alt="Nötrofil granül içeriklerinin fagositik vakuole ve interstisyel aralığa degranülasyonu" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 49 — nötrofil granülleri ve degranülasyon</figcaption></figure>
<figure class="slide-img"><img src="img/lokosit-yapi-5.jpg" alt="Nötrofilde solunum patlaması ve oksitleyici ajanların oluşumu şeması" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 50 — nötrofillerde solunum patlaması</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci -1" s. 47–50 (esas kaynak); Biyokimya 5 (NET, G6PD, Chediak-Higashi); Patoloji (K5) 8 "Akut ve kronik yangı" (6–24 saat, ARDS, α1-antitripsin). Playlist: "Lökositler, 2, Nötrofiller"</p>`
      },
      {
        heading: "Eozinofil",
        html: `
<h3>Yapı ve yerleşim</h3>
<ul>
<li>Çekirdek genellikle <strong>2 parçalı</strong>; granülleri <strong>asidik boyalarla (eozin) kırmızıya</strong> boyanır.</li>
<li>Kanda azdır; asıl olarak <strong>GİS, üriner kanallar ve solunum mukozasında</strong> bulunur.</li>
<li>Normalde timusta korteks-medulla arasında, alt GİS'te, over, uterus, dalak ve lenf nodlarında yerleşir; <strong>akciğer, deri ve özofagusta normal koşullarda düşük</strong> düzeydedir (bu organlarda artışı patolojiktir, ör. astım, eozinofilik özofajit).</li>
</ul>
<h3>Aktifleşince salgıladıkları</h3>
<ol>
<li>Doku harabiyetine neden olan <strong>sitotoksik granül proteinleri</strong> (majör bazik protein, eozinofil katyonik protein, eozinofil peroksidaz)</li>
<li>Reaktif oksijen ürünleri (süperoksit, peroksit)</li>
<li>Lipid mediatörleri (lökotrienler, eikozanoidler)</li>
<li>Büyüme faktörleri (VEGF, FGF, TGF-β)</li>
<li>Elastaz gibi enzimler</li>
<li>Sitokinler (IL-1, IL-2, IL-4, IL-5, TNF-α)</li>
</ol>
<h3>Fonksiyon</h3>
<ul>
<li><strong>Zayıf fagosittir</strong>; asıl gücü salgıladığı toksik proteinlerdir.</li>
<li>Bazofil ve mast hücreleriyle birlikte <strong>parazitik enfeksiyon ve alerjik durumlarda</strong> görev alır; mast hücresi ve bazofillerin salgıladığı inflamasyon yapıcı maddeleri ve bölgedeki <strong>antijen-antikor komplekslerini fagosite eder</strong>.</li>
<li>T lenfositlere <strong>antijen sunan hücre</strong> olarak davranabilir.</li>
<li>Postpubertal meme bezi gelişimi, östral döngü ve neoplazi gelişiminde rol oynar.</li>
</ul>
<h3>Klinik bağlantı</h3>
<ul>
<li><strong>Eozinofili:</strong> paraziter enfeksiyonlar, astım gibi alerjik hastalıklar, çeşitli solunum ve GİS hastalıkları.</li>
<li>Astımda bronş duvarına göç eden eozinofillerin sitotoksik proteinleri epitel hasarı yapar.</li>
<li>Kortikosteroidler eozinofil sayısını düşürür.</li>
</ul>
<div class="note"><p>Biyokimya 5 sunumu eozinofillerin dokularda kandakinin 100 katı bulunduğunu ve akciğer, GİS, deride yoğunlaştığını söyler. Fizyoloji 6 ise akciğer, deri ve özofagusta normalde düşük düzeyde olduklarını vurgular. Sunumda Fizyoloji 6 ifadesi esas alındı.</p></div>
<figure class="slide-img"><img src="img/lokosit-yapi-9.jpg" alt="Eozinofilin yerleşim yerleri, salgıladığı moleküller ve fonksiyonları" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 52 — eozinofil: özellikler ve fonksiyonlar</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci -1" s. 51–52 (esas kaynak); Histoloji 1 (granül proteinleri, kortikosteroid etkisi); Biyokimya 5. Playlist: "Lökositler, 3, Eozinofiller"</p>`
      },
      {
        heading: "Bazofil ve mast hücresi",
        html: `
<h3>Bazofil</h3>
<ul>
<li>Çekirdek <strong>2–3 parçalı</strong>; granülleri <strong>bazik boyalarla mora</strong> boyanır ve çekirdeği örter. En az bulunan lökosittir.</li>
<li>Özellikleri:
<ol>
<li><strong>Histamin</strong> içerir (vazodilatör)</li>
<li><strong>Heparin</strong> içerir (antikoagülan)</li>
<li>Hücre yüzeyinde <strong>IgE bağlayan reseptörler</strong> vardır</li>
<li>Gerektiğinde kandan dokuya geçer</li>
<li><strong>Eozinofilik kemotaktik faktör</strong> salgılar (eozinofilleri bölgeye çeker)</li>
</ol></li>
<li><strong>Erken tip aşırı duyarlılık</strong> reaksiyonları için gereklidir: hafif ürtiker, rinit, <strong>anafilaktik şok</strong>. Alerjik reaksiyonlarda görülen vasküler ve doku yanıtlarının çoğundan sorumludur.</li>
<li>Zayıf fagosittir. <strong>Arttığı durumlar:</strong> alerjik nedenlere bağlı inflamasyon, parazitik enfeksiyonlar.</li>
</ul>
<h3>Mast hücresi</h3>
<ul>
<li>Bağ dokusunun ve mukozal epitelin <strong>yoğun granüllü</strong> hücresidir; dış ortamla temas eden dokularda (deri, solunum ve sindirim mukozası) boldur.</li>
<li>Bazofile benzer ama <strong>daha büyük ve daha granüllüdür</strong>; kemik iliğinden <strong>olgunlaşmamış olarak ayrılır, dokuda olgunlaşır</strong>.</li>
<li>Granüllerinde histamin, heparin, serotonin, ATP, proteoglikanlar ve proteazlar; hücre içinde lizozomal enzimler ve eikozanoidler bulunur; çeşitli sitokinler (TNF vb.) salgılar.</li>
<li>Görevleri: parazitik enfeksiyonlarda yerel inflamasyonu başlatmak, <strong>yara iyileşmesi</strong>, <strong>anjiyogenez</strong> ve <strong>kan-beyin bariyeri</strong> işlevi. Zayıf fagosittir, antijen işler.</li>
<li><strong>Alerji ve anafilakside</strong> rol oynar.</li>
</ul>
<table><caption>Bazofil ve mast hücresi karşılaştırması</caption>
<thead><tr><th>Özellik</th><th>Bazofil</th><th>Mast hücresi</th></tr></thead>
<tbody>
<tr><td>Yeri</td><td>Kan (gerektiğinde dokuya geçer)</td><td>Bağ dokusu ve mukoza (dokuda yerleşik)</td></tr>
<tr><td>Olgunlaşma</td><td>Kemik iliğinde olgunlaşır</td><td>Kemik iliğinden olgunlaşmamış çıkar, dokuda olgunlaşır</td></tr>
<tr><td>Boyut / granül</td><td>Daha küçük, daha az granül</td><td>Daha büyük, daha granüllü</td></tr>
<tr><td>Ortak özellik</td><td colspan="2">Histamin ve heparin içerir; yüzeyde IgE reseptörü; erken tip aşırı duyarlılık ve anafilaksi</td></tr>
<tr><td>Ek görev</td><td>Eozinofilik kemotaktik faktör salgılar</td><td>Yara iyileşmesi, anjiyogenez, kan-beyin bariyeri</td></tr>
</tbody></table>
<figure class="slide-img"><img src="img/lokosit-yapi-10.jpg" alt="Bazofilin özellikleri ve arttığı durumlar" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 54 — bazofil: özellikler ve arttığı durumlar</figcaption></figure>
<figure class="slide-img"><img src="img/lokosit-yapi-11.jpg" alt="Mast hücrelerinin granül içerikleri ve görevleri" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 56 — mast hücreleri: özellikler ve görevler</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci -1" s. 53–56 (esas kaynak); Histoloji 1 (metakromazi, mast hücresinden ayrı hücre olması). Playlist: "Lökositler, 4, Bazofiller"</p>`
      },
      {
        heading: "Monosit–makrofaj sistemi",
        html: `
<h3>Yapı</h3>
<ul>
<li>En büyük lökosit (12–20 µm); çekirdek böbrek/at nalı şeklinde, sitoplazma geniş ve gri-mavi.</li>
<li>Granülositlerle aynı öncülden (<strong>CFU-GM</strong>) gelişir: monoblast → promonosit → monosit (bölünme biter). Kemik iliğinde ~6 gün, kanda 10–20 saat kalır; dokuya geçince geri dönmez.</li>
<li>Kandaki monositin savaşma yeteneği kısıtlıdır. Dokuya geçince <strong>makrofaja</strong> dönüşür: çapı ~5 kat artar, kemotaktik uyaranlarla göç eder, <strong>bölünerek çoğalabilir</strong>, T lenfositlerden salınan sitokinlerle aktive olur; dokuda 1–3 yıl yaşar.</li>
<li><strong>Mononükleer fagosit sistemi (retiküloendotelyal sistem):</strong> hareketli makrofajlar ve yerel doku makrofajları: histiyosit (deri ve deri altı), Kupffer (karaciğer), alveoler makrofaj, mikroglia (beyin), osteoklast (kemik), dalak ve kemik iliği makrofajları, plevral ve peritoneal makrofajlar, eklemde sinovyal hücreler.</li>
</ul>
<h3>Fonksiyon</h3>
<ol>
<li><strong>Fagositoz:</strong> mikroorganizmalar, ölü hücreler, bozulmuş matriks, denatüre proteinler ve yaşlı eritrositler. Nötrofilden güçlüdür: <strong>~100 bakteri</strong>, büyük partiküller (eritrosit, sıtma paraziti, ölü nötrofil); fagositozdan sonra <strong>yaşamaya devam eder</strong>. Lizozomları tüberküloz basilinin kalın lipit zarını sindiren <strong>lipazlar</strong> içerir.</li>
<li><strong>Antijen sunumu:</strong> antijen parçalarını yüzeyinde MHC sınıf II ile CD4+ T lenfositlere sunar; artıkları ekzositozla atar.</li>
<li><strong>Sitokin salgısı:</strong> multifonksiyonel <strong>IL-1</strong> ve <strong>TNF</strong> → ateş, akut faz yanıtı, T hücre aktivasyonu.</li>
</ol>
<h3>Klinik bağlantı</h3>
<ul>
<li>Akut inflamasyonda önce nötrofil (6–24 saat), sonra monosit/makrofaj (24–48 saat) gelir; <strong>kronik inflamasyon ve granülomun</strong> ana hücresi makrofajdır (epiteloid hücre, dev hücre).</li>
<li>Monositoz: kronik enfeksiyonlar (ör. tüberküloz).</li>
</ul>
<figure class="slide-img"><img src="img/lokosit-yapi-12.jpg" alt="Monositin dokuya geçerek makrofaja dönüşmesi ve özelliklerinin değişmesi" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 35 — monositten makrofaja dönüşüm</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 6 "Vücudun enfeksiyona direnci -1" s. 34–37, 43 (esas kaynak); Histoloji 1; Biyokimya 5; Patoloji (K5) 8 "Akut ve kronik yangı" (zamanlama, kronik yangı). Playlist: "Lökositler, 5, Monositler"</p>`
      },
      {
        heading: "Lenfositler ve CD belirteçleri",
        html: `
<ul>
<li>Fagositoz yapmazlar; <strong>özgül (edinsel) bağışıklığın</strong> hücreleridir. Antijene özgül reseptör taşıyan tek hücre grubudur.</li>
<li>Antijenle uyarılınca blast hâline geçer, çoğalır → <strong>efektör</strong> ve <strong>bellek</strong> hücreleri.</li>
</ul>
<table><caption>Lenfosit alt grupları</caption>
<thead><tr><th>Hücre</th><th>Belirteç</th><th>Görev</th></tr></thead>
<tbody>
<tr><td>T lenfosit (periferik lenfositlerin %60–70'i)</td><td>CD2, CD3, CD7; TCR</td><td>Hücresel bağışıklık</td></tr>
<tr><td>Yardımcı T (Th)</td><td>CD4 (MHC II ile)</td><td>Sitokinlerle B, CD8 ve makrofajı yönetir</td></tr>
<tr><td>Sitotoksik T (CTL)</td><td>CD8 (MHC I ile)</td><td>Virüslü/tümör hücresini perforin-granzim ile öldürür</td></tr>
<tr><td>Düzenleyici T (Treg)</td><td>CD4+CD25+Foxp3+</td><td>Bağışıklığı baskılar, otoimmüniteyi önler</td></tr>
<tr><td>B lenfosit (%10–20)</td><td>CD19, CD20; yüzey IgM/IgD</td><td>Plazma hücresine dönüşüp antikor üretir</td></tr>
<tr><td>NK hücresi</td><td>CD16, CD56 (CD3–)</td><td>Virüslü ve kanser hücrelerini antijene özgül olmadan öldürür</td></tr>
</tbody></table>
<p>Normalde <strong>CD4/CD8 oranı ≈ 2</strong>.</p>
<div class="hoca"><p>Granülositler ve monositler dokuya geçtikten sonra tekrar kana dönmezler demiştim. Oysa B ve T lenfositler kan ile doku arasında sürekli sirkülasyon yaparlar. B ve T lenfositlerin olgunlaştığı yerler primer lenfoid organlar: B lenfositler kemik iliğinde, T lenfositler timusta olgunlaşır. Olgunlaşan hücreler kanla sekonder lenfoid organlara (mukozayla ilişkili lenfoid dokular, tonsiller, adenoid, bağırsaktaki lenfoid doku, apandis; vücuda istasyonlar şeklinde dağılmış lenfoid dokular) gelir ve kendilerine özgü antijenin vücuda girmesini bekler. Bu "olgunlaşma" sırasında hangi antijene cevap vereceği de belirlenir.</p><p>T lenfositler üç gruba ayrılır: sitotoksik (öldürücü) T lenfositler CD8 proteini taşıdığı için T8 de denir; yardımcı T lenfositler CD4 taşıdığı için T4 denir; düzenleyici (regülatör) T lenfositler de diğer iki grubu baskılayarak aşırı yanıtı engeller. B lenfositler yüzeyindeki antijen reseptörüyle antijeni tanır, aktive olunca plazma hücresine dönüşüp antikor salgılar; buna humoral bağışıklık diyoruz. T lenfositler ise yabancı hücreyi doğrudan öldürür; bu da hücresel bağışıklıktır. Doğal öldürücü (NK) hücreleri ise yüzeylerinde antijen reseptörü yoktur, spesifik olmayan şekilde etki ederler; o yüzden doğal bağışıklığın elemanı sayılırlar. Perforin ve granzim ile kanser hücresine, virüsle enfekte hücreye ve nakledilen hücreye etki ederler.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 1 (15.09.2023) · ~07:11</p></div>
<p class="src">Kaynak: Drive – Histoloji 1; Patoloji (K5) 10 "İmmünopatolojiye giriş"; Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli"; Biyokimya 5. Playlist: "Lenfositler, 2"</p>`
      },
      {
        heading: "Lökositlerin dokuya geçişi (ekstravazasyon)",
        html: `
<ol>
<li><strong>Marjinasyon:</strong> damar genişler, sıvı kaçar, kan akımı yavaşlar (staz) → lökositler damar duvarına yaklaşır.</li>
<li><strong>Yuvarlanma (rolling):</strong> <strong>selektinler</strong> (E-selektin endotel, P-selektin endotel/trombosit, L-selektin lökosit) ile gevşek bağlanma.</li>
<li><strong>Aktivasyon ve sıkı yapışma (adezyon):</strong> kemokinler lökosit <strong>integrinlerini</strong> (LFA-1, Mac-1) aktive eder; endoteldeki ICAM-1/VCAM-1'e bağlanır. TNF ve IL-1 bu ligandların ekspresyonunu artırır.</li>
<li><strong>Diyapedez (transmigrasyon):</strong> endotel hücreleri arasından, <strong>PECAM-1 (CD31)</strong> aracılığıyla geçiş; bazal membranı kollajenazla aşar.</li>
<li><strong>Kemotaksis:</strong> bakteri ürünleri, C5a, LTB4, IL-8 gibi kemoatraktanlara doğru göç.</li>
<li><strong>Fagositoz:</strong> opsoninler (IgG, C3b, CRP, MBL) tanımayı kolaylaştırır.</li>
</ol>
<div class="note"><p><strong>Lökosit adezyon defekti:</strong> integrin bozukluğunda lökositler dokuya geçemez; kanda lökositoz olmasına rağmen tekrarlayan bakteriyel enfeksiyon ve irin oluşmaması görülür.</p></div>
<figure class="slide-img"><img src="img/lokosit-yapi-4.jpg" alt="Lökositlerin damardan dokuya geçiş basamakları: marjinasyon, yuvarlanma, adezyon, diyapedez, kemotaksis" loading="lazy"><figcaption>Fizyoloji 6 "Vücudun enfeksiyona direnci -1", s. 32 — diyapedez basamakları</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 7 "Vücudun enfeksiyona direnci… -2"; Patoloji (K5) 8 "Akut ve kronik yangı"; Biyokimya 5</p>`
      }
    ],
    faq: [
      { q: "Nötrofil ile makrofajın fagositozu nasıl farklıdır?", a: "<p>Nötrofil hızlı gelir, 3–20 bakteri yutar ve genellikle ölür (irin oluşur). Makrofaj daha geç gelir, ~100 bakteri ve büyük partikülleri (eritrosit, ölü nötrofil) yutar, fagositozdan sonra yaşar, antijen sunar ve IL-1/TNF salgılar.</p>" },
      { q: "Monosit ile lenfositi yaymada nasıl ayırırsınız?", a: "<p>Monosit daha büyüktür (12–20 µm), çekirdeği böbrek/at nalı şeklinde ve kenara itilmiştir, etrafında geniş gri-mavi sitoplazma görülür. Lenfositte yuvarlak çekirdek sitoplazmayı neredeyse tamamen doldurur, yalnızca ince bir bazofilik halka kalır.</p>" },
      { q: "Opsonizasyon nedir, neden gereklidir?", a: "<p>Mikrobun yüzeyinin antikor (IgG), kompleman (C3b), CRP veya MBL ile kaplanmasıdır. Fagositlerdeki Fc ve C3b reseptörleri bu kaplamayı tanır; böylece kapsül gibi koruyucu yapısı olan mikroplar da yutulabilir. Normal hücreler düzgün yüzeyleri ve koruyucu protein kılıfları nedeniyle fagosite edilmez.</p>" },
      { q: "Solunum patlaması nedir? Bozulursa ne olur?", a: "<p>Fagositozdan sonra oksijen tüketiminin artmasıdır: NADPH oksidaz süperoksit üretir, H₂O₂ ve MPO ile HOCl oluşur. NADPH oksidaz defektinde (kronik granülomatöz hastalık) mikrop yutulur ama öldürülemez; katalaz (+) mikroplarla tekrarlayan enfeksiyon ve granülom gelişir. G6PD eksikliğinde NADPH azaldığı için benzer tablo görülebilir.</p>" },
      { q: "Eozinofil hangi durumlarda artar ve orada ne yapar?", a: "<p>Paraziter enfeksiyonlar, astım gibi alerjik hastalıklar ve çeşitli solunum/GİS hastalıklarında artar. Zayıf fagosittir; asıl etkisini sitotoksik granül proteinleri, reaktif oksijen ürünleri ve lipid mediatörleriyle gösterir. Mast hücresi ve bazofilin salgıladığı mediatörleri ve antijen-antikor komplekslerini fagosite eder. Kortikosteroidler eozinofil sayısını düşürür.</p>" },
      { q: "Bazofil ile mast hücresi arasındaki fark nedir?", a: "<p>İkisi de histamin ve heparin içerir, yüzeylerinde IgE reseptörü taşır ve erken tip aşırı duyarlılıktan (ürtiker, rinit, anafilaksi) sorumludur. Bazofil kanda dolaşır ve gerektiğinde dokuya geçer. Mast hücresi kemik iliğinden olgunlaşmamış çıkar, bağ dokusunda ve mukozada olgunlaşıp yerleşir; daha büyük ve daha granüllüdür. Mast hücresi ayrıca yara iyileşmesi, anjiyogenez ve kan-beyin bariyerinde görevlidir.</p>" },
      { q: "Granülositlerin çoğu neden kemik iliğinde bekler?", a: "<p>Granülositler kemik iliğinde 3–5 gün mitotik, 5–6 gün postmitotik havuzda kalır; ilikteki sayı kandakinin ~20 katıdır. Kanda yalnızca 4–8 saat kaldıkları için bu depo, enfeksiyonda saatler içinde kana çok sayıda nötrofil verilmesini sağlar (nötrofili, sola kayma).</p>" },
      { q: "CD4 ve CD8 T hücreleri antijeni nasıl tanır?", a: "<p>CD4+ yardımcı T hücreleri antijeni antijen sunan hücrelerdeki MHC sınıf II ile, CD8+ sitotoksik T hücreleri ise tüm çekirdekli hücrelerdeki MHC sınıf I ile birlikte tanır. Normalde CD4/CD8 oranı yaklaşık 2'dir.</p>" }
    ]
  },
  {
    id: "kan-normal-degerler",
    group: "Lökositler ve Kan",
    title: "Kan Ölçümlerinde Normal Değerler",
    slides: [
      {
        heading: "Kanın genel özellikleri",
        html: `
<table><caption>Kanın genel özellikleri</caption>
<thead><tr><th>Parametre</th><th>Normal değer</th></tr></thead>
<tbody>
<tr><td>Vücut ağırlığına oranı</td><td>%8 (80–85 mL/kg)</td></tr>
<tr><td>Kan hacmi</td><td>Erkek 5–6 L, Kadın 4–5 L</td></tr>
<tr><td>Plazma / şekilli eleman</td><td>~%55 / ~%45</td></tr>
<tr><td>pH</td><td>7,35–7,45</td></tr>
<tr><td>Ozmolarite</td><td>280–296 mOsm/L</td></tr>
<tr><td>Viskozite (suya göre)</td><td>Tam kan 4,5–5,5; plazma 2</td></tr>
<tr><td>Total plazma proteini</td><td>~7 g/dL (albümin %60, globulin %36, fibrinojen %4)</td></tr>
<tr><td>Albümin</td><td>3,5–5 g/dL</td></tr>
</tbody></table>
<div class="key"><p><strong>Plazma</strong> = antikoagülanlı kanın sıvı kısmı (fibrinojen içerir). <strong>Serum</strong> = pıhtılaşmış kanın sıvı kısmı (fibrinojen içermez).</p></div>
<div class="note"><p>Albümin &lt;2 g/dL olursa kolloid ozmotik basınç düşer ve ödem gelişir (nefrotik sendrom, karaciğer hastalığı, malnütrisyon, yanık).</p></div>
<figure class="slide-img"><img src="img/kan-normal-degerler-3.jpg" alt="Santrifüj edilmiş kanda plazma, trombosit-lökosit tabakası ve eritrositlerin oranları" loading="lazy"><figcaption>Fizyoloji 1 "Kan fizyolojisine giriş", s. 5 — kanın bileşenleri ve hematokrit</figcaption></figure>
<figure class="slide-img"><img src="img/kan-normal-degerler-1.jpg" alt="Kanın genel özellikleri tablosu: hacim, pH, viskozite, hematokrit, hemoglobin, hücre sayıları" loading="lazy"><figcaption>Fizyoloji 1 "Kan fizyolojisine giriş", s. 31 — kanın genel özellikleri tablosu (sunumda esas alınan değerler)</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 1 "Kan fizyolojisine giriş, kanın yapısı ve fonksiyonel özellikleri" (Doç. Dr. Özlem Özsoy); Histoloji 1 (albümin 3,5–5 g/dL)</p>`
      },
      {
        heading: "Hemogram: eritrosit parametreleri",
        html: `
<table><caption>Eritrosit serisi (erişkin)</caption>
<thead><tr><th>Parametre</th><th>Erkek</th><th>Kadın</th></tr></thead>
<tbody>
<tr><td>Hemoglobin (Hb)</td><td>16 ± 2 g/dL</td><td>14 ± 2 g/dL</td></tr>
<tr><td>Anemi eşiği (DSÖ)</td><td>Hb &lt;13 g/dL</td><td>Hb &lt;12 g/dL</td></tr>
<tr><td>Hematokrit (Htc)</td><td>%42–48</td><td>%38–45</td></tr>
<tr><td>Eritrosit sayısı (RBC)</td><td>5,2 ± 0,3 milyon/mm³</td><td>4,7 ± 0,3 milyon/mm³</td></tr>
<tr><td>MCV (ortalama eritrosit hacmi)</td><td colspan="2">80–100 fL (&lt;80 mikrositer, &gt;100 makrositer)</td></tr>
<tr><td>MCH*</td><td colspan="2">27–33 pg</td></tr>
<tr><td>MCHC*</td><td colspan="2">32–36 g/dL</td></tr>
<tr><td>RDW*</td><td colspan="2">%11,5–14,5 (artışı anizositozu gösterir)</td></tr>
<tr><td>Retikülosit*</td><td colspan="2">%0,5–2</td></tr>
<tr><td>Eritrosit çapı / ömrü</td><td colspan="2">7–8 µm (normosit) / 120 gün</td></tr>
</tbody></table>
<p>* Drive'da bulunamadı; standart klinik referans aralığı (laboratuvara göre değişir).</p>
<div class="note"><p>Histoloji sunumu farklı aralık verir: Htc erkek %40–45, kadın %35–45; RBC erkek 4–6, kadın 3,9–5,5 milyon/µL. Burada Fizyoloji değerleri esas alındı. Laboratuvar raporundaki kendi referans aralığı her zaman önceliklidir.</p></div>
<p class="src">Kaynak: Drive – Fizyoloji 1; Klinik (K1) "Anemi" (Prof. Dr. Erkan Çoban; DSÖ kriteri, MCV sınıflaması); Histoloji 1. Dış kaynak: MCH/MCHC/RDW/retikülosit standart klinik referans aralıkları</p>`
      },
      {
        heading: "Lökosit ve trombosit değerleri",
        html: `
<table><caption>Lökosit formülü (diferansiyel sayım)</caption>
<thead><tr><th>Hücre</th><th>Oran</th><th>Mutlak sayı (/mm³)</th></tr></thead>
<tbody>
<tr><td>Toplam lökosit</td><td>%100</td><td>4.000–10.000</td></tr>
<tr><td>Nötrofil</td><td>%60–70</td><td>3.500–7.000</td></tr>
<tr><td>Lenfosit</td><td>%20–30</td><td>1.000–3.500</td></tr>
<tr><td>Monosit</td><td>%3–8</td><td>80–800</td></tr>
<tr><td>Eozinofil</td><td>%1–4</td><td>150–400</td></tr>
<tr><td>Bazofil</td><td>%0–1</td><td>40–100</td></tr>
</tbody></table>
<table><caption>Trombosit</caption>
<thead><tr><th>Parametre</th><th>Değer</th></tr></thead>
<tbody>
<tr><td>Trombosit sayısı</td><td>150.000–300.000/mm³ (Fizyoloji)</td></tr>
<tr><td>Çap / ömür</td><td>2–4 µm / 8–10 gün (Biyokimya: 5–9 gün); 1/3'ü dalakta depolanır</td></tr>
</tbody></table>
<div class="note"><p>Kaynak farkı: üst sınır Fizyoloji'de lökosit 10.000 ve trombosit 300.000; Biyokimya'da lökosit 11.000 ve trombosit 400.000; Histoloji'de trombosit 200.000–400.000. Çoğu klinik laboratuvar trombosit için 150.000–400.000 kullanır.</p></div>
<figure class="slide-img"><img src="img/kan-normal-degerler-2.jpg" alt="Lökosit formülü tablosu: yüzde oranları ve mm küpteki sayılar" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 60 — lökosit formülü</figcaption></figure>
<p class="src">Kaynak: Drive – Histoloji 1 (lökosit formülü tablosu); Fizyoloji 1; Biyokimya 5 "Lökosit trombosit biyokimyası"</p>`
      },
      {
        heading: "Anormal sayımların tanımları",
        html: `
<table><caption>Sık kullanılan eşikler</caption>
<thead><tr><th>Terim</th><th>Tanım</th><th>Örnek neden</th></tr></thead>
<tbody>
<tr><td>Lökopeni</td><td>Lökosit &lt;4.000/mm³</td><td>En sık neden nötropeni</td></tr>
<tr><td>Nötropeni</td><td>Mutlak nötrofil sayısı &lt;1.500/mm³ (&gt;1 yaş)</td><td>Kemoterapi, viral enfeksiyon, kemik iliği yetmezliği</td></tr>
<tr><td>Lökositoz</td><td>Lökosit &gt;10.000–11.000/mm³</td><td>En sık nötrofili: bakteriyel enfeksiyon (apandisit, pnömonide 20.000–40.000)</td></tr>
<tr><td>Trombositopeni</td><td>Trombosit &lt;150.000/mm³</td><td>&lt;50.000 olmadıkça kanama genellikle olmaz; &lt;20.000'de spontan kanama, peteşi</td></tr>
<tr><td>Trombositoz</td><td>Normalin üstü</td><td>Akut/kronik enfeksiyon, miyeloproliferatif hastalık, malignite</td></tr>
</tbody></table>
<div class="key"><p>Lökositoz görünce önce <strong>hangi alt tipin</strong> arttığına bakılır: nötrofili (bakteri), lenfositoz (virüs), eozinofili (parazit/alerji).</p></div>
<div class="hoca"><p>Lökositlerin normal değerini, 4.000-10.000/mm³ aralığını, ezberlememiz gerekiyor. İlk derste bir tablo vermiştim, bu değerler orada yazıyordu. Normal değerin altına düşerse buna lökopeni diyoruz; peni "az" demek. Bu durumda kişide enfeksiyonlar başlar. Bunun tam tersi, lökositlerin fazla üretilmesidir.</p><p>Fazla üretim lenfoid kaynaklı da olabilir, miyeloid kaynaklı da. Sayısı çok olması neden zararlı? Fazla üretilen bu hücreler, normal lökositlerin gösterdiği fonksiyonları göstermiyor. Yani sayı çok ama fonksiyon yok. Lösemi dediğimiz hastalık ortaya çıkıyor. Metastaz da yapabilir ve vücudun metabolik dengesini bozar.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 2 (15.09.2023) · ~10:40</p></div>
<p class="src">Kaynak: Drive – Biyokimya 5 "Lökosit trombosit biyokimyası"; Histoloji 1; Patoloji (K5) 8 "Akut ve kronik yangı"</p>`
      },
      {
        heading: "İnflamasyon ve bağışıklık ile ilgili değerler",
        html: `
<table><caption>Diğer önemli değerler</caption>
<thead><tr><th>Parametre</th><th>Normal</th><th>Not</th></tr></thead>
<tbody>
<tr><td>Eritrosit sedimentasyon hızı (ESH)</td><td>Erkek 2–8 mm/saat, Kadın 2–10 mm/saat</td><td>Westergren yöntemi; fibrinojen artınca rulo oluşur, ESH artar</td></tr>
<tr><td>CRP*</td><td>&lt;5 mg/L (bazı laboratuvarlarda &lt;10)</td><td>Akut fazda saatler içinde yükselir</td></tr>
<tr><td>CD4+ T lenfosit*</td><td>~500–1.500 hücre/mm³</td><td>&lt;200 = AIDS tanımı</td></tr>
<tr><td>CD4/CD8 oranı</td><td>~2 (&gt;1)</td><td>HIV'de &lt;1'e düşer (tersine döner)</td></tr>
</tbody></table>
<p>* Drive'da sayısal değer bulunamadı; standart klinik referans (laboratuvara göre değişir).</p>
<h3>ESH'yi etkileyenler</h3>
<ul>
<li><strong>Artırır:</strong> enfeksiyon, inflamatuvar hastalıklar (fibrinojen ve immünglobulin artışı).</li>
<li><strong>Azaltır:</strong> polisitemi, orak hücre anemisi, hiperglisemi.</li>
</ul>
<p class="src">Kaynak: Drive – Fizyoloji 1 (ESH); Patoloji (K5) 10 ve Biyokimya 5 (CD4/CD8 oranı); Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (CD4 &lt;200). Dış kaynak: CRP ve CD4 referans aralıkları</p>`
      },
      {
        heading: "Özet tablo: değer, birim, artış ve azalma nedenleri",
        html: `
<table><caption>Sık istenen kan parametreleri: normal aralık ve sapma nedenleri</caption>
<thead><tr><th>Parametre</th><th>Erkek</th><th>Kadın</th><th>Birim</th><th>Artış (↑) nedenleri</th><th>Azalma (↓) nedenleri</th></tr></thead>
<tbody>
<tr><td>Hemoglobin</td><td>16 ± 2</td><td>14 ± 2</td><td>g/dL</td><td>Polisitemi, dehidratasyon*, yükseklik*</td><td>Anemi (DSÖ: E &lt;13, K &lt;12): demir eksikliği, kan kaybı, hemoliz, B12/folat eksikliği</td></tr>
<tr><td>Hematokrit</td><td>%42–48</td><td>%38–45</td><td>%</td><td>Polisitemi, dehidratasyon*</td><td>Anemi, sıvı yüklenmesi*</td></tr>
<tr><td>Eritrosit (RBC)</td><td>5,2 ± 0,3</td><td>4,7 ± 0,3</td><td>milyon/mm³</td><td>Polisitemi</td><td>Anemi</td></tr>
<tr><td>MCV</td><td colspan="2">80–100</td><td>fL</td><td>Makrositoz: B12/folat eksikliği, alkol, karaciğer hastalığı, MDS</td><td>Mikrositoz: demir eksikliği, talasemi, kronik hastalık anemisi, sideroblastik anemi</td></tr>
<tr><td>Lökosit (WBC)</td><td colspan="2">4.000–10.000</td><td>/mm³</td><td>Enfeksiyon (özellikle bakteriyel), inflamasyon, lösemi, lökomoid reaksiyon</td><td>Tifo, bazı viral enfeksiyonlar, kanser/kemik iliği tutulumu, kemoterapi</td></tr>
<tr><td>Nötrofil (mutlak)</td><td colspan="2">3.500–7.000</td><td>/mm³</td><td>Bakteriyel enfeksiyon, akut inflamasyon</td><td>Nötropeni &lt;1.500: kemoterapi, viral enfeksiyon, kemik iliği yetmezliği</td></tr>
<tr><td>Lenfosit (mutlak)</td><td colspan="2">1.000–3.500</td><td>/mm³</td><td>Viral enfeksiyonlar</td><td>HIV (CD4 kaybı), kortikosteroid*, immünsüpresyon</td></tr>
<tr><td>Eozinofil (mutlak)</td><td colspan="2">150–400</td><td>/mm³</td><td>Parazit, alerji, astım</td><td>Kortikosteroidler</td></tr>
<tr><td>Trombosit</td><td colspan="2">150.000–300.000 (lab: 150–400 bin)</td><td>/mm³</td><td>Enfeksiyon, inflamasyon, miyeloproliferatif hastalık, malignite</td><td>Üretim azalması (kemik iliği), yıkım artışı (ITP); &lt;50.000 kanama riski</td></tr>
<tr><td>ESH</td><td>2–8</td><td>2–10</td><td>mm/saat</td><td>Enfeksiyon, inflamatuvar hastalık (fibrinojen ↑)</td><td>Polisitemi, orak hücre anemisi, hiperglisemi</td></tr>
<tr><td>Albümin</td><td colspan="2">3,5–5</td><td>g/dL</td><td>Dehidratasyon*</td><td>Karaciğer hastalığı, nefrotik sendrom, malnütrisyon, yanık, inflamasyon</td></tr>
<tr><td>CRP*</td><td colspan="2">&lt;5 (lab'a göre &lt;10)</td><td>mg/L</td><td>Bakteriyel enfeksiyon, doku hasarı, otoimmün hastalık</td><td>—</td></tr>
</tbody></table>
<p>* Drive'da yer almıyor; standart klinik bilgi.</p>
<p class="src">Kaynak: Drive – Fizyoloji 1 (Hb, Htc, RBC, WBC, trombosit, ESH ve albümin değerleri ve nedenleri); Klinik (K1) "Anemi" (DSÖ eşiği, MCV sınıflaması); Histoloji 1 (lökosit formülü, trombositopeni nedenleri); Biyokimya 5 (nötropeni, trombositoz); Patoloji (K5) 8 s. 91 (lökopeni: tifo, virüs, kanser). Dış kaynak: * işaretli satırlar</p>`
      }
    ],
    faq: [
      { q: "Plazma ile serum arasındaki fark nedir?", a: "<p>Plazma antikoagülanlı kanın sıvı kısmıdır ve fibrinojen içerir. Serum pıhtılaşmış kanın sıvı kısmıdır; fibrinojen pıhtıda tükendiği için serumda yoktur.</p>" },
      { q: "MCV'ye göre anemiler nasıl sınıflanır?", a: "<p>MCV &lt;80 fL mikrositer (demir eksikliği, kronik hastalık anemisi, talasemi), 80–100 normositer (akut kan kaybı, hemoliz, kronik hastalık), &gt;100 makrositer (B12/folat eksikliği, yani megaloblastik; alkol, karaciğer hastalığı).</p>" },
      { q: "Lökosit sayısı normal olan bir hastada enfeksiyon olabilir mi?", a: "<p>Evet. Toplam sayı normal olsa da formülde kayma olabilir (ör. nötrofil oranı artmış, çomak artmış). Bu yüzden toplam sayı tek başına yetmez; formül lökosit ve gerekirse periferik yayma değerlendirilir.</p>" },
      { q: "Neden kaynaklarda farklı referans aralıkları var?", a: "<p>Referans aralıkları ölçüm yöntemine, cihaza ve çalışılan topluluğa göre değişir. Klinikte her zaman raporu veren laboratuvarın kendi aralığı esas alınır.</p>" },
      { q: "Trombosit sayısı kaçın altında kanama riski ortaya çıkar?", a: "<p>50.000/mm³'ün altına inmedikçe kanama genellikle görülmez. 20.000'in altında spontan kanama, peteşi ve ekimoz, 10.000–15.000'in altında hayatı tehdit eden kanama riski vardır.</p>" }
    ]
  },
  {
    id: "periferik-yayma",
    group: "Lökositler ve Kan",
    title: "Periferik Yayma Nasıl Yapılır?",
    slides: [
      {
        heading: "Periferik yayma nedir, neden yapılır?",
        html: `
<ul>
<li>Kanın bir lam üzerine <strong>ince bir film</strong> hâlinde yayılıp boyanmasıyla hazırlanan preparattır (froti, sürme, kan yayması).</li>
<li>Otomatik cihazların veremediği <strong>morfolojik</strong> bilgiyi verir: hücre şekli, boyut, renk, olgunluk, anormal hücre (blast) varlığı.</li>
<li>Anemisi saptanan hastada <strong>ilk yapılacak işlemlerden biri</strong> periferik yaymanın değerlendirilmesidir.</li>
<li>Kullanım: anemi tipini belirleme, enfeksiyonda sola kayma, lösemi şüphesi, trombosit kümelenmesinin (yalancı trombositopeni) ayırt edilmesi, sıtma paraziti arama.</li>
</ul>
<figure class="slide-img"><img src="img/periferik-yayma-1.jpg" alt="Lam üzerinde kan damlasının ikinci lamla yayılması" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 10 — periferik yayma (froti) hazırlanması</figcaption></figure>
<p class="src">Kaynak: Drive – Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi" (tanım); Klinik (K1) "Anemi" (anemide ilk adım periferik yayma)</p>`
      },
      {
        heading: "Yayma tekniği adım adım (lam–lam / kama yöntemi)",
        html: `
<ol>
<li><strong>Örnek:</strong> EDTA'lı venöz kan (birkaç saat içinde) ya da parmak ucu kanı. Temiz, yağsız lam kullanılır.</li>
<li><strong>Damla:</strong> Lamın bir ucundan ~1–2 cm içeri, 2–3 mm çapında küçük bir damla konur.</li>
<li><strong>Yayıcı lam:</strong> İkinci lam damlanın önüne <strong>30–45° açıyla</strong> konur, geriye çekilerek damlaya değdirilir; kan kenar boyunca yayılır.</li>
<li><strong>Yayma:</strong> Yayıcı lam tek, hızlı ve düzgün bir hareketle ileri itilir. Kan, yayıcının <strong>arkasından çekilir</strong>, önünden itilmez.</li>
<li><strong>Kurutma:</strong> Havada hızla kurutulur (sallanabilir, ısıtılmaz).</li>
<li><strong>Tespit:</strong> Metil alkol (metanol) ile fikse edilir.</li>
<li><strong>Boyama:</strong> Romanovsky tipi boyalar: Wright, Giemsa veya May-Grünwald-Giemsa (metilen mavisi + eozin karışımı). Yıkanır, kurutulur.</li>
</ol>
<div class="key"><p>İyi bir yayma lamın ~2/3'ünü kaplar, kalından inceye doğru düzgün geçer ve <strong>tüy (feathered) kenarla</strong> biter. Açı büyüdükçe ya da itme hızlandıkça yayma kalınlaşır.</p></div>
<div class="note"><p>Hatalar: çok büyük damla veya geniş açı → kalın yayma; yavaş kuruma → hücre büzüşmesi; EDTA'lı kanın uzun bekletilmesi → nötrofilde vakuol, çekirdek bozulması gibi artefaktlar.</p></div>
<p class="src">Dış kaynak: standart hematoloji laboratuvar uygulaması (adımlar Drive'da yer almıyor). Drive – Histoloji 1: boyanın Romanovsky tipi (metilen mavisi + eozin) olduğu</p>`
      },
      {
        heading: "Boyanma mantığı (Romanovsky)",
        html: `
<ul>
<li><strong>Metilen mavisi</strong> (bazik boya) asidik yapıları boyar: DNA, RNA'dan zengin sitoplazma → <strong>mavi-mor (bazofili)</strong>.</li>
<li><strong>Eozin</strong> (asidik boya) bazik yapıları boyar: hemoglobin, eozinofil granülündeki majör bazik protein → <strong>pembe-turuncu (eozinofili / asidofili)</strong>.</li>
<li><strong>Nötrofili:</strong> boya kompleksine ilgi; pembe ile eflatun arası (nötrofil granülleri).</li>
<li><strong>Azürofili:</strong> oksitlenmiş metilen mavisine (azur) ilgi; kırmızı-mor (azurofilik granüller).</li>
</ul>
<h3>Hücre tanıma algoritması</h3>
<ol>
<li>Çekirdek yok → eritrosit (veya trombosit, küçük parça).</li>
<li>Çekirdek loblu ve spesifik granül var → granülosit; granül rengine göre nötrofil / eozinofil / bazofil.</li>
<li>Çekirdek loblu değil → lenfosit (dar sitoplazma) veya monosit (geniş sitoplazma, böbrek şekilli çekirdek).</li>
</ol>
<div class="note"><p>Histoloji pratik notunda preparat adı "Periferik kan yayması (HE)" olarak geçer. Klinik laboratuvarda yayma rutin olarak Romanovsky tipi boyalarla (Wright/Giemsa) boyanır; HE doku kesitleri için kullanılır.</p></div>
<figure class="slide-img"><img src="img/periferik-yayma-2.jpg" alt="Romanovsky boyası ile boyanmış kan hücreleri ve dört boyanma özelliği" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 12 — Romanovsky tipi boyanma özellikleri</figcaption></figure>
<p class="src">Kaynak: Drive – Histoloji 1 (boyanma özellikleri, ayırt etme kriterleri); "Kan hücreleri histoloji pratik notu" (K1 Histoloji Pratik)</p>`
      },
      {
        heading: "Yayma nasıl incelenir?",
        html: `
<ol>
<li><strong>Küçük büyütme (10×):</strong> yaymanın genel kalitesi, lökositlerin dağılımı, kenarlarda kümelenme, trombosit kümeleri ve büyük anormal hücreler taranır.</li>
<li><strong>İnceleme alanı:</strong> eritrositlerin <strong>birbirine değmeden yan yana durduğu tek katlı (monolayer) bölge</strong>, yani gövde ile tüy kenar arasındaki geçiş. Kalın kısımda hücreler üst üste biner, en uçta ise şekilleri bozulur.</li>
<li><strong>İmmersiyon (100×):</strong> hücre morfolojisi incelenir.</li>
<li><strong>Formül lökosit:</strong> zikzak çizilerek <strong>100 lökosit</strong> sayılır ve her tipin yüzdesi verilir. Mutlak sayı = toplam lökosit × yüzde.</li>
<li><strong>Trombosit tahmini:</strong> immersiyonda alan başına ortalama trombosit sayısı ile cihaz sonucu kabaca kontrol edilir.</li>
</ol>
<p class="src">Dış kaynak: standart hematoloji laboratuvar uygulaması. Drive – Klinik (K1) "Anemi" (yaymada hipersegmentasyon, makroovalosit, Howell-Jolly bulguları)</p>`
      },
      {
        heading: "Normal yaymada ne görmeliyiz?",
        html: `
<h3>Eritrositler (en baskın hücre)</h3>
<ul>
<li>Pembe, <strong>bikonkav disk</strong>, çekirdeksiz; çap 7–8 µm (küçük lenfosit çekirdeği kadar).</li>
<li>Ortada <strong>santral solukluk</strong> (çapın yaklaşık 1/3'ü) var: orta kısım ince, çekirdek yok.</li>
<li><strong>Normokrom, normositer</strong>; belirgin anizositoz (boyut farkı) ve poikilositoz (şekil farkı) yok.</li>
<li>Çekirdekli eritrosit, inklüzyon (Howell-Jolly vb.) ve parazit yok; rulo formasyonu ve aglütinasyon yok.</li>
</ul>
<h3>Lökositler</h3>
<ul>
<li>Formül normal dağılımda: nötrofil %60–70 &gt; lenfosit %20–30 &gt; monosit %3–8 &gt; eozinofil %1–4 &gt; bazofil %0–1.</li>
<li>Nötrofillerin çoğu <strong>3–5 loblu</strong> segmentli; az sayıda çomak (band) form olabilir.</li>
<li><strong>Hipersegmente nötrofil yok</strong> (5'ten fazla lob, megaloblastik anemi düşündürür).</li>
<li><strong>Blast ve olgunlaşmamış miyeloid hücre</strong> (miyelosit, metamiyelosit) <strong>yok</strong>; atipik lenfosit yok.</li>
</ul>
<h3>Trombositler</h3>
<ul>
<li>Küçük (2–4 µm), çekirdeksiz, mor granüllü parçacıklar; tek tek dağılmış, belirgin küme yok, dev trombosit yok.</li>
</ul>
<div class="note"><p>Kadın bireylerin nötrofillerinde <strong>Barr cisimciği</strong> (davul tokmağı) görülebilir; bu inaktif X kromozomudur, patolojik değildir.</p></div>
<figure class="slide-img"><img src="img/periferik-yayma-3.jpg" alt="Normal periferik yayma mikroskopi görüntüleri: eritrositler arasında lökositler" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 14 — periferik yayma görüntüleri</figcaption></figure>
<figure class="slide-img"><img src="img/periferik-yayma-4.jpg" alt="Histoloji pratiğinde periferik yaymada eozinofil, lenfosit, monosit, nötrofil ve kemik iliğinde megakaryosit" loading="lazy"><figcaption>Histoloji pratik notu "Kan hücreleri", s. 4 — pratik preparatlarında hücrelerin işaretli görüntüleri (üst ve alt sağ: kemik iliği)</figcaption></figure>
<p class="src">Kaynak: Drive – "Kan hücreleri histoloji pratik notu" (eritrosit, nötrofil, eozinofil, monosit, lenfosit tanımları); Histoloji 1 (eritrosit çapı, Barr cisimciği, lob sayısı); Klinik (K1) "Anemi". Dış kaynak: santral solukluk oranı, çomak/blast yokluğu ifadeleri (standart hematoloji)</p>`
      },
      {
        heading: "Yaymada sık görülen anormal bulgular",
        html: `
<table><caption>Bulgu ve düşündürdüğü durum</caption>
<thead><tr><th>Bulgu</th><th>Düşündüren</th></tr></thead>
<tbody>
<tr><td>Hipokrom mikrositer eritrositler</td><td>Demir eksikliği anemisi, talasemi</td></tr>
<tr><td>Makroovalosit, hipersegmente nötrofil, Howell-Jolly cisimciği</td><td>Megaloblastik anemi (B12/folat eksikliği)</td></tr>
<tr><td>Orak hücre</td><td>Orak hücreli anemi (HbS)</td></tr>
<tr><td>Sferosit</td><td>Herediter sferositoz (spektrin eksikliği)</td></tr>
<tr><td>Çomak artışı, toksik granülasyon (sola kayma)</td><td>Bakteriyel enfeksiyon</td></tr>
<tr><td>Atipik (reaktif) lenfositler</td><td>Viral enfeksiyon (ör. EBV)</td></tr>
<tr><td>Blastlar</td><td>Akut lösemi</td></tr>
<tr><td>Rulo formasyonu</td><td>Fibrinojen veya immünglobulin artışı</td></tr>
</tbody></table>
<figure class="slide-img"><img src="img/periferik-yayma-5.jpg" alt="Periferik yaymada hipersegmente nötrofil" loading="lazy"><figcaption>Klinik (K1) "Anemi", s. 47 — hipersegmente nötrofil (megaloblastik anemi)</figcaption></figure>
<p class="src">Kaynak: Drive – Klinik (K1) "Anemi"; Histoloji 1 (orak hücre, sferositoz); Fizyoloji 1 (rulo formasyonu). Dış kaynak: sola kayma, atipik lenfosit, blast (standart hematoloji)</p>`
      },
      {
        heading: "Özet tablo: normal yaymadaki hücreleri ayırt etme",
        html: `
<table><caption>Normal periferik yaymada hücrelerin ayırt edici özellikleri</caption>
<thead><tr><th>Hücre</th><th>Boyut</th><th>Çekirdek</th><th>Sitoplazma / granül</th><th>Oran</th><th>Ayırt ettiren ipucu</th></tr></thead>
<tbody>
<tr><td><strong>Eritrosit</strong></td><td>7–8 µm</td><td>Yok</td><td>Pembe, ortası soluk (bikonkav disk)</td><td>En baskın hücre</td><td>Çekirdeksiz, santral solukluk</td></tr>
<tr><td><strong>Trombosit</strong></td><td>2–4 µm</td><td>Yok</td><td>Küçük mor granüllü parçacık</td><td>150–300 bin/mm³</td><td>Eritrositlerin arasında küçük mor noktalar; hücre değil, sitoplazma parçası</td></tr>
<tr><td><strong>Nötrofil</strong></td><td>12–14 µm</td><td>3–5 lob, ince kromatin köprüleri</td><td>Soluk pembe-eflatun ince granül</td><td>%60–70</td><td>Çok loblu çekirdek, belirgin granül rengi yok</td></tr>
<tr><td><strong>Eozinofil</strong></td><td>~12 µm</td><td>Genellikle 2 lob ("gözlük")</td><td>İri, parlak turuncu-kırmızı granüller</td><td>%1–4</td><td>Kırmızı iri granüller</td></tr>
<tr><td><strong>Bazofil</strong></td><td>10–12 µm</td><td>2–3 lob, granüllerin altında seçilmez</td><td>İri, koyu mor-siyah granüller</td><td>%0–1</td><td>Çekirdeği örten koyu mor granüller; nadir bulunur</td></tr>
<tr><td><strong>Lenfosit</strong></td><td>Küçük 6–8, büyük 10–12 µm</td><td>Yuvarlak, koyu, hücreyi neredeyse doldurur</td><td>İnce bazofilik (mavi) halka</td><td>%20–30</td><td>Sitoplazma neredeyse görülmez; küçük lenfosit eritrosit boyutunda</td></tr>
<tr><td><strong>Monosit</strong></td><td>12–20 µm (en büyük)</td><td>Böbrek / at nalı, kenara itilmiş</td><td>Geniş, gri-mavi, ince azurofilik granül</td><td>%3–8</td><td>En büyük hücre; belirgin sitoplazma sınırı görülür</td></tr>
</tbody></table>
<div class="key"><p>Pratikte en sık karışan çift: <strong>monosit ve lenfosit</strong>. Monositte sitoplazma geniş ve net görülür; lenfositte çekirdek sitoplazmayı neredeyse tamamen doldurur.</p></div>
<p class="src">Kaynak: Drive – "Kan hücreleri histoloji pratik notu" (oranlar, lob sayısı, monosit-lenfosit ayrımı); Histoloji 1 (boyutlar, granül içerikleri, lökosit formülü); Fizyoloji 1 (trombosit sayısı)</p>`
      }
    ],
    faq: [
      { q: "Yaymayı neden tek katlı (monolayer) bölgede inceleriz?", a: "<p>Kalın bölgede hücreler üst üste bindiği için morfoloji görülemez; en uçtaki tüy kenarda ise hücreler yassılaşır ve şekilleri bozulur. Eritrositlerin yan yana, birbirine değmeden durduğu bölgede hücreler doğru boyut ve şekliyle görülür.</p>" },
      { q: "Hemogram cihazı varken yaymaya neden hâlâ ihtiyaç var?", a: "<p>Cihaz sayı ve hacim verir ama şekli göremez. Blast, hipersegmentasyon, orak hücre, sferosit, parazit, trombosit kümesi (yalancı trombositopeni) gibi bulgular yalnızca yaymada görülür. Cihazın uyarı verdiği durumlarda yayma ile doğrulama yapılır.</p>" },
      { q: "Yayma kalın oluyorsa ne değiştirilir?", a: "<p>Damla küçültülür, yayıcı lamın açısı küçültülür (30°'ye doğru) ve itme hızı yavaşlatılır. Büyük damla, geniş açı ve hızlı itme kalın yayma yapar.</p>" },
      { q: "Sola kayma ne demektir?", a: "<p>Periferik kanda çomak (band) gibi genç nötrofillerin oranının artmasıdır. Kemik iliği, bakteriyel enfeksiyonda rezerv havuzundan genç hücreleri de kana verir. Akut bakteriyel enfeksiyonun göstergesidir.</p>" },
      { q: "Normal yaymada çekirdekli eritrosit veya blast görülür mü?", a: "<p>Erişkinde görülmez. Çekirdekli eritrosit ciddi hemoliz, kemik iliği infiltrasyonu veya stres eritropoezini; blast ise akut lösemiyi düşündürür.</p>" }
    ]
  },
  {
    id: "akut-faz",
    group: "Akut Faz Reaktanları",
    title: "Akut Faz Reaktanları ve Arttıkları Durumlar",
    slides: [
      {
        heading: "Akut faz yanıtı nedir?",
        html: `
<ul>
<li><strong>Akut faz yanıtı:</strong> doku hasarı, enfeksiyon veya inflamasyona karşı vücudun verdiği <strong>sistemik</strong> yanıttır (ateş, lökositoz, plazma protein değişiklikleri).</li>
<li><strong>Akut faz reaktanları (proteinleri):</strong> inflamasyonda plazma düzeyi belirgin değişen proteinlerdir. Büyük çoğunluğu <strong>karaciğerde (hepatosit)</strong> sentezlenir.</li>
<li>Değişim yönüne göre ikiye ayrılır: <strong>pozitif</strong> (artanlar) ve <strong>negatif</strong> (azalanlar).</li>
</ul>
<h3>Akış</h3>
<ol>
<li>Doku hasarı / mikrop → <strong>aktive makrofaj</strong> (ve endotel, diğer hücreler).</li>
<li>Sitokin salınımı: <strong>IL-1, TNF</strong> ve özellikle <strong>IL-6</strong>.</li>
<li>Karaciğer: akut faz proteinlerinin sentezi ↑, albümin sentezi ↓.</li>
<li>Hipotalamus: PGE<sub>2</sub> aracılığıyla <strong>ateş</strong>; kemik iliği: <strong>lökositoz</strong>.</li>
</ol>
<div class="key"><p>Akut faz yanıtı <strong>özgül değildir</strong>: inflamasyonun varlığını ve şiddetini gösterir, nedenini göstermez.</p></div>
<figure class="slide-img"><img src="img/akut-faz-1.jpg" alt="Doku hasarı ve inflamasyondan aktive makrofaj, IL-1 ve TNF ile akut faz proteinlerinin artışı ve albümin azalması şeması" loading="lazy"><figcaption>Fizyoloji 1 "Kan fizyolojisine giriş", s. 29 — akut faz proteinleri ve akut faz cevabı</figcaption></figure>
<p class="src">Kaynak: Drive – Fizyoloji 1 "Kan fizyolojisine giriş…" (akut faz proteinleri, IL-1/TNF, ateş, albümin ↓); Patoloji (K5) 8 "Akut ve kronik yangı" s. 91 (IL-1, TNF, IL-6 sorumlu). Dış kaynak: IL-6'nın en güçlü uyarıcı olması (Robbins Temel Patoloji; Abbas Temel İmmünoloji)</p>`
      },
      {
        heading: "Pozitif ve negatif akut faz reaktanları",
        html: `
<table><caption>Pozitif akut faz reaktanları (inflamasyonda artar)</caption>
<thead><tr><th>Protein</th><th>Görev / önemi</th></tr></thead>
<tbody>
<tr><td><strong>C-reaktif protein (CRP)</strong></td><td>Bakteri yüzeyindeki fosfokoline bağlanır; <strong>opsonin</strong>, klasik kompleman yolunu aktive eder</td></tr>
<tr><td>Serum amiloid A (SAA)</td><td>CRP gibi hızlı ve büyük artış; kronik yükseklikte AA amiloidozu</td></tr>
<tr><td><strong>Fibrinojen</strong></td><td>Pıhtılaşma (hemostatik faktör); eritrositlerde rulo yaparak <strong>ESH'yi artırır</strong></td></tr>
<tr><td><strong>Haptoglobin</strong></td><td>Serbest hemoglobini bağlar, demir kaybını ve böbrek hasarını önler</td></tr>
<tr><td><strong>Seruloplazmin</strong></td><td>Bakır taşır; ferroksidaz etkisi</td></tr>
<tr><td><strong>Kompleman proteinleri</strong> (C3, C4)</td><td>Opsonizasyon, kemotaksis, membran atak kompleksi</td></tr>
<tr><td><strong>Proteaz inhibitörleri</strong> (α1-antitripsin, α2-makroglobulin)</td><td>Nötrofil elastazı gibi enzimlerin doku hasarını sınırlar</td></tr>
<tr><td>Ferritin*, hepsidin*</td><td>Demiri depolar/hücre içinde tutar → mikroplardan demiri saklar</td></tr>
</tbody></table>
<table><caption>Negatif akut faz reaktanları (inflamasyonda azalır)</caption>
<thead><tr><th>Protein</th><th>Neden azalır</th></tr></thead>
<tbody>
<tr><td><strong>Albümin</strong></td><td>Karaciğer sentezi pozitif reaktanlara kayar</td></tr>
<tr><td><strong>Transferrin</strong></td><td>İnflamasyon ve kronik hastalıkta sentez azalır</td></tr>
<tr><td>Prealbümin (transtiretin)*</td><td>Aynı mekanizma</td></tr>
</tbody></table>
<p>* Drive'da yer almıyor; dış kaynak.</p>
<p class="src">Kaynak: Drive – Fizyoloji 1 (akut faz proteinleri listesi: hemostatik faktörler, kompleman, proteaz inhibitörleri, haptoglobulin, seruloplazmin, CRP; albümin ve transferrin ↓); Fizyoloji 7 (CRP bir opsonin); Patoloji (K5) 8 s. 91 (CRP, serum amiloid A, kompleman, koagülasyon proteinleri). Dış kaynak: ferritin, hepsidin, prealbümin; SAA ve amiloidoz ilişkisi (Robbins; Gabay &amp; Kushner, NEJM 1999)</p>`
      },
      {
        heading: "Özet tablo: zaman seyri ve klinik kullanım",
        html: `
<table><caption>Akut faz belirteçlerinin karşılaştırması</caption>
<thead><tr><th>Belirteç</th><th>Yön</th><th>Yükselme başlangıcı / pik</th><th>Yarı ömür / normale dönüş</th><th>Artış miktarı</th><th>Klinik kullanım ve tuzaklar</th></tr></thead>
<tbody>
<tr><td><strong>CRP</strong></td><td>↑</td><td>6–8 saat / ~48 saat</td><td>~19 saat; inflamasyon geçince hızla düşer</td><td>Yüzlerce–1000 kata kadar</td><td>Bakteriyel enfeksiyon, tedavi yanıtını izleme; SLE alevlenmesinde genellikle belirgin yükselmez</td></tr>
<tr><td><strong>Serum amiloid A</strong></td><td>↑</td><td>CRP'ye benzer</td><td>Hızlı düşer</td><td>Çok büyük (CRP düzeyinde)</td><td>Rutinde az kullanılır; uzun süre yüksek kalırsa AA amiloidozu</td></tr>
<tr><td><strong>Fibrinojen</strong></td><td>↑</td><td>24–48 saat / günler</td><td>Günler (yavaş)</td><td>2–4 kat</td><td>Pıhtılaşma; ESH yüksekliğinin ana nedeni</td></tr>
<tr><td><strong>Haptoglobin</strong></td><td>↑</td><td>24–48 saat</td><td>Günler</td><td>2–4 kat</td><td>İnflamasyonda artar; <strong>intravasküler hemolizde düşer</strong> (Hb'ye bağlanıp tükenir)</td></tr>
<tr><td><strong>Seruloplazmin</strong></td><td>↑</td><td>Günler</td><td>Günler</td><td>~1,5 kat</td><td>Östrojenle de artar; Wilson hastalığında düşük</td></tr>
<tr><td><strong>Kompleman (C3, C4)</strong></td><td>↑</td><td>Günler</td><td>Günler</td><td>~1,5 kat</td><td>İmmün kompleks hastalıklarında tüketimle düşebilir</td></tr>
<tr><td><strong>Ferritin</strong></td><td>↑</td><td>Günler</td><td>Günler–haftalar</td><td>Değişken</td><td>Demir deposu göstergesi; inflamasyonda yalancı normal/yüksek → demir eksikliğini gizler</td></tr>
<tr><td><strong>Albümin</strong></td><td>↓</td><td>Günler–haftalar</td><td>~20 gün (yavaş)</td><td>Azalır</td><td>Kronik inflamasyon, beslenme ve prognoz göstergesi</td></tr>
<tr><td><strong>Transferrin</strong></td><td>↓</td><td>Günler</td><td>~8 gün</td><td>Azalır</td><td>Demir bağlama kapasitesi düşer (kronik hastalık anemisi)</td></tr>
<tr><td><strong>ESH</strong> (dolaylı)</td><td>↑</td><td>Yavaş, günler</td><td>Haftalarca yüksek kalabilir</td><td>—</td><td>Kronik inflamasyon izlemi; anemi, gebelik, yaş, polisitemiden etkilenir</td></tr>
<tr><td>Prokalsitonin*</td><td>↑</td><td>2–6 saat / 12–24 saat</td><td>~24 saat</td><td>Bakteriyelde çok</td><td>Klasik akut faz proteini sayılmaz; bakteriyel enfeksiyon ve sepsiste viralden ayırmada daha özgül</td></tr>
</tbody></table>
<p>Kinetik süreleri, artış miktarları ve prokalsitonin Drive'da yer almıyor; dış kaynaktan alındı (Gabay &amp; Kushner, NEJM 1999; Robbins; klinik biyokimya kaynakları). Değerler yaklaşık ve kaynaklara göre değişebilir.</p>
<div class="key"><p>Akut durum ve tedavi yanıtını izlemek için <strong>CRP</strong>, kronik inflamasyon için <strong>ESH</strong> daha kullanışlıdır. ESH dolaylı bir ölçümdür; anemi, gebelik, ileri yaş gibi inflamasyon dışı nedenlerden de etkilenir.</p></div>
<figure class="slide-img"><img src="img/akut-faz-3.jpg" alt="Westergren pipeti ile eritrosit sedimentasyon hızı ölçümü ve rulo formasyonu" loading="lazy"><figcaption>Fizyoloji 1 "Kan fizyolojisine giriş", s. 36 — eritrosit sedimentasyon hızı (Westergren) ve rulo formasyonu</figcaption></figure>
<p class="src">Dış kaynak: Gabay C, Kushner I. Acute-phase proteins and other systemic responses to inflammation. NEJM 1999; Robbins Temel Patoloji. Drive – Fizyoloji 1 (ESH ve fibrinojen ilişkisi; haptoglobin ve hemoliz; seruloplazmin, östrojen, Wilson; transferrin inflamasyonda ↓)</p>`
      },
      {
        heading: "Hangi durumlarda artarlar?",
        html: `
<ul>
<li><strong>Enfeksiyonlar:</strong> özellikle <strong>bakteriyel</strong> enfeksiyon ve sepsiste CRP çok yükselir; viral enfeksiyonlarda artış genellikle daha sınırlıdır.</li>
<li><strong>Doku hasarı / nekroz:</strong> travma, cerrahi, yanık, <strong>miyokard infarktüsü</strong>, akut pankreatit.</li>
<li><strong>Otoimmün / inflamatuvar hastalıklar:</strong> romatoid artrit, vaskülitler, polimiyaljia romatika, inflamatuvar barsak hastalığı, <strong>akut romatizmal ateş</strong> (CRP ve ESH yüksekliği minör kriterdir).</li>
<li><strong>Malignite:</strong> lenfoma, metastatik kanserler (özellikle ESH ve CRP).</li>
<li><strong>Kronik inflamasyon:</strong> tüberküloz, kronik enfeksiyonlar.</li>
</ul>
<div class="note"><p><strong>SLE'de klasik tuzak:</strong> ESH genellikle yüksektir ama CRP çoğu zaman normal ya da hafif yüksektir. SLE'li hastada CRP belirgin yükselirse eklenmiş <strong>enfeksiyon</strong> veya serözit düşünülür.</p></div>
<div class="note"><p><strong>Ferritin tuzağı:</strong> Ferritin akut faz reaktanı olduğu için inflamasyonda yalancı normal/yüksek çıkabilir ve demir eksikliğini gizleyebilir. Demir eksikliğinde ferritin &lt;12 µg/L tanı koydurucudur.</p></div>
<p class="src">Kaynak: Drive – Patoloji (K5) 8 (akut yangı uyaranları: enfeksiyon, nekroz, yabancı cisim, immün reaksiyonlar); Fizyoloji 1 (ESH artış nedenleri); Klinik (K1) "Anemi" (ferritin &lt;12 µg/L); Klinik (K5) "Akut romatizmal ateş" (dosya adı). Dış kaynak: SLE'de CRP, bakteriyel-viral farkı (Robbins; klinik kaynaklar)</p>`
      },
      {
        heading: "Akut faz yanıtının sistemik etkileri",
        html: `
<ul>
<li><strong>Ateş:</strong> IL-1 ve TNF (endojen pirojenler) hipotalamusta COX → PGE<sub>2</sub> üretimini artırır, ısı ayar noktası yükselir.</li>
<li><strong>Lökositoz:</strong> kemik iliği rezervinden salınım ve yapım artışı; bakteride nötrofili ve sola kayma; çok yüksekse lösemiyi taklit eden <strong>lökomoid reaksiyon</strong>. Parazit/alerjide eozinofili. Bazı enfeksiyonlarda ise <strong>lökopeni</strong> olur (tifo, virüsler, kanser).</li>
<li><strong>Genel belirtiler:</strong> uyku hâli, iştah azalması, kalp hızı ve kan basıncında artış.</li>
<li><strong>Kronik hastalık anemisi:</strong> hepsidin artar → demir makrofajlarda tutulur, emilim azalır (serum demiri ↓, ferritin ↑, transferrin ↓).</li>
<li><strong>Hipoalbüminemi:</strong> ödeme ve ilaç bağlanmasının değişmesine katkı.</li>
<li><strong>Diğer:</strong> halsizlik, iştahsızlık, kas yıkımı; ağır olguda (sepsis) yaygın damar içi pıhtılaşma ve septik şok.</li>
</ul>
<div class="key"><p>Akut faz proteinlerinin ortak amacı: mikrobu işaretlemek (CRP, kompleman), demiri mikroptan saklamak (ferritin, hepsidin, haptoglobin), hasarı sınırlamak (proteaz inhibitörleri) ve onarımı başlatmak (fibrinojen).</p></div>
<figure class="slide-img"><img src="img/akut-faz-2.jpg" alt="Yangının sistemik etkileri slaytı: IL-1, TNF, IL-6, ateş, akut faz reaksiyonları, lökositoz ve lökopeni" loading="lazy"><figcaption>Patoloji (K5) 8 "Akut ve kronik yangı", s. 91 — yangının sistemik etkileri</figcaption></figure>
<figure class="slide-img"><img src="img/akut-faz-4.jpg" alt="Yangıdaki işlevlere göre mediatörler tablosu: vazodilatasyon, geçirgenlik, kemotaksis, ateş, ağrı, doku hasarı" loading="lazy"><figcaption>Patoloji (K5) 8 "Akut ve kronik yangı", s. 129 — işlevlerine göre yangı mediatörleri (ateş: IL-1, TNF, prostaglandinler)</figcaption></figure>
<div class="hoca"><p>Vücuda bir enfeksiyon etkeni girdiğinde TNF, interlökin-1 ve interlökin-6 gibi sitokinler üretilir. Bunlar plazmada dolaşıp bazı organlara geçerek değişikliklere yol açar. Beyne geçip ateşe neden olur; hasta olduğumuzda yaşadığımız iştahsızlık ve halsizlik de bu sitokinlerin beyin üzerindeki etkisiyle olur. Lökosit sayısı artar; bu zaten olması gereken bir cevap, çünkü savunma hücrelerini artırmış oluyoruz. Lipoliz ve kas yıkımı artar; daha fazla enerji sağlanır. Ayrıca beyinde hipofiz uyarılır, ACTH salınır ve stres hormonu kortizol yükselir. Kortizolün yükselmesi vücutta bir alarm durumudur.</p><p>Ateşte biraz duralım. Ateş yapan maddelere pirojen diyoruz. Dışarıdan giren bakteri proteinleri, lipopolisakkaritler gibi ekzojen pirojenler de, vücutta oluşan sitokinler (endojen pirojenler) de ateş yapabilir. Hipotalamus ısı ayar merkezidir; pirojenler orada prostaglandin E2 üretimine neden olur. Ateşin belli bir miktar yükselmesi iyidir; hastalıklardan korunmaya yarar, çünkü bakteri ve virüslerin replikasyonunu engeller, metabolik hızı artırır, sabah anlattığım interferonların etkisini de artırır. O yüzden çocuklara bile belli bir dereceye kadar ateş düşürücü vermiyoruz; 38-39 dolaylarına yaklaşınca tehlikeli olabiliyor ve o dönemde ateş düşürücü verebilirsiniz.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 2 (15.09.2023) · ~00:57</p></div>
<p class="src">Kaynak: Drive – Patoloji (K5) 8 s. 91 "Yangının sistemik etkileri" (IL-1, TNF, IL-6; ekzojen/endojen pirojenler ve hipotalamusta PGE2; uyku, iştah azalması, kalp hızı ve tansiyon artışı; lökositoz, lökomoid reaksiyon, nötrofili, eozinofili; lökopeni: tifo, virüs, kanser); Fizyoloji 1 (albümin ↓); Fizyoloji 6 (makrofaj IL-1/TNF salgısı). Dış kaynak: hepsidin ve kronik hastalık anemisi mekanizması (Robbins)</p>`
      }
    ],
    faq: [
      { q: "Akut faz proteinlerini kim, hangi sinyalle üretir?", a: "<p>Çoğunu karaciğerdeki hepatositler üretir. Ana uyarı aktive makrofajlardan salınan sitokinlerdir: en güçlü uyarıcı IL-6'dır, IL-1 ve TNF de katkıda bulunur.</p>" },
      { q: "CRP neden ESH'den daha hızlı değişir?", a: "<p>CRP doğrudan ölçülen bir proteindir; saatler içinde yükselir ve yarı ömrü kısa olduğu için inflamasyon geçince hızla düşer. ESH dolaylı bir ölçümdür: fibrinojen ve immünglobulin artışıyla eritrositlerin rulo yapmasına bağlıdır; fibrinojenin yarı ömrü uzun olduğu için ESH geç yükselir, geç düşer.</p>" },
      { q: "Albümin neden negatif akut faz reaktanıdır?", a: "<p>İnflamasyonda karaciğer sentez kapasitesini pozitif akut faz proteinlerine (CRP, fibrinojen vb.) kaydırır; albümin ve transferrin sentezi azalır. Ayrıca kapiller geçirgenlik artışıyla albümin damar dışına kaçar.</p>" },
      { q: "CRP'nin biyolojik görevi nedir?", a: "<p>Bakteri ve hasarlı hücre yüzeyindeki fosfokoline bağlanır; opsonin olarak fagositozu kolaylaştırır ve klasik kompleman yolunu aktive eder.</p>" },
      { q: "SLE'li bir hastada CRP çok yüksek çıktı; ne düşünürsünüz?", a: "<p>SLE alevlenmesinde CRP genellikle belirgin yükselmez (ESH yükselir). Belirgin CRP yüksekliği eklenmiş bakteriyel enfeksiyon veya serözit açısından uyarıcıdır.</p>" },
      { q: "İnflamasyonu olan hastada demir eksikliği neden atlanabilir?", a: "<p>Ferritin hem demir deposunu hem de akut fazı yansıtır; inflamasyonda yükselir. Bu nedenle demir eksikliği olan hastada ferritin yalancı olarak normal çıkabilir. Değerlendirmede transferrin satürasyonu ve klinik birlikte yorumlanır.</p>" }
    ]
  },
  {
    id: "hiv-bulas",
    group: "HIV / AIDS",
    title: "HIV Enfeksiyonu Nasıl Bulaşır?",
    slides: [
      {
        heading: "Bulaş yolları: genel bakış",
        html: `
<ul>
<li>HIV üç ana yolla bulaşır:
<ol>
<li><strong>Cinsel temas</strong></li>
<li><strong>Kan ve kan ürünleri</strong></li>
<li><strong>Anneden bebeğe (vertikal)</strong></li>
</ol></li>
<li>Bulaştırıcı vücut sıvıları: <strong>kan, semen ve preseminal sıvı, vajinal sıvı, rektal sıvı, anne sütü</strong>.</li>
<li>Bulaşma için virüsün mukoza (genital, rektal, ağız), hasarlı deri veya doğrudan kan yoluyla alıcıya ulaşması gerekir.</li>
</ul>
<div class="key"><p>Bulaş riski kaynak kişinin <strong>viral yüküyle</strong> orantılıdır. Akut HIV enfeksiyonunda viral yük çok yüksek olduğu için <strong>bulaştırıcılık en yüksektir</strong>.</p></div>
<div class="hoca"><p>Üç ana bulaş yolu var: cinsel temas, kan ve kan ürünleri, bir de anneden bebeğe geçiş. Tüm dünyada en sık yol cinsel temas. Bizim hastalarımızda bu oran çok daha yüksek; yüzde doksan beşin de üzerinde. Cinsel yol da iki şekilde oluyor: kadın-erkek arasındaki heteroseksüel temas ya da erkek-erkek arasındaki temas.</p><p>Bu üç yolun dışında başka bir bulaş ihtimali yok.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~26:19</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (Prof. Dr. Dilara İnan). Dış kaynak: bulaştırıcı vücut sıvıları listesi (CDC)</p>`
      },
      {
        heading: "Cinsel temasla bulaş",
        html: `
<ul>
<li>Dünyada en sık yol: olguların <strong>%85'inden fazlası</strong>; heteroseksüel ve homoseksüel temas.</li>
<li>Korunmasız vajinal temasta ilişki başına risk: <strong>on binde 5 – binde 2</strong> (0,0005–0,002).</li>
<li>Reseptif anal ilişki en riskli cinsel temas biçimidir (tek kat epitel, mikrotravma); ilişki başına riski yaklaşık %1,4 kadardır*.</li>
<li><strong>Kondom</strong> en riskli ilişkide bile bulaşı <strong>en az 20 kat</strong> azaltır.</li>
<li><strong>Sünnet</strong> erkekte edinme riskini azaltır: sünnetsiz erkekte genital ülser riski yüksektir, mikrotravma sıktır ve sünnet derisi katlantısı virüs için uygun ortam oluşturur.</li>
</ul>
<h3>Riski artıran durumlar</h3>
<ul>
<li>Çok sayıda cinsel eş, para karşılığı seks, cinsel yolla bulaşan enfeksiyon öyküsü.</li>
<li><strong>Genital ülseri</strong> olan kişiyle temas (sifiliz, herpes: mukoza bütünlüğü bozulur, hedef hücreler bölgede toplanır).</li>
<li>HIV pozitif olduğu bilinen ve tedavi almayan kişiyle korunmasız temas.</li>
</ul>
<p>* Dış kaynak (CDC ilişki başına risk tahmini).</p>
<div class="hoca"><p>Her temasta bulaş olmuyor. HIV pozitif olduğunu bildiğimiz biriyle korunmasız bir vajinal temasta bulaş riski on binde beş ile binde iki arasında. Ama kondom bunu çok ciddi oranda engelliyor; bulaşı en az yirmi kat azaltıyor. Gençler arasında farkındalığın en önemli noktası bu olmalı: cinsel temas sırasında kondom kullanmak bulaşı neredeyse yok denecek kadar düşürüyor. Üstelik kondom yalnızca HIV'e karşı değil, sifiliz, belsoğukluğu gibi cinsel yolla bulaşan diğer hastalıklara karşı da koruyor.</p><p>Sünnet de cinsel eşe bulaş riskini azaltıyor. Tek eşlilik ve korunmalı cinsel temas en önemli yaklaşımlar. En riskli davranışlar ise karşılığında para ya da uyuşturucu ile yapılan cinsel temas, uyuşturucu etkisi altında yapılan temas, genital bölgesinde yara olan kişilerle temas ve birden fazla cinsel eşi olduğu bilinen kişilerle temas. HIV pozitif olduğu bilinen ve tedavi almayan biriyle korunmasız temas da riskli bir davranış.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~26:46</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler". Dış kaynak: reseptif anal ilişki riski (CDC)</p>`
      },
      {
        heading: "Kan yoluyla ve anneden bebeğe bulaş",
        html: `
<h3>Kan ve kan ürünleri</h3>
<ul>
<li><strong>Damar içi madde kullanımı:</strong> ortak iğne/enjektör kullanımı riski artırır (paylaşım başına ~%0,6*).</li>
<li><strong>Kan transfüzyonu:</strong> HIV ile enfekte kanın transfüzyonunda bulaş riski <strong>%90–100</strong>. Günümüzde donör taraması ile bu yol çok nadirdir.</li>
<li><strong>Mesleki (iğne batması):</strong> HIV pozitif kaynaktan perkütan yaralanmada risk ~%0,3*.</li>
</ul>
<h3>Anneden bebeğe</h3>
<ul>
<li>Olguların <strong>%90'ı perinatal dönemde</strong> olur; en sık <strong>doğum sırasında (%50–70)</strong>.</li>
<li>Gebelikte (transplasental), doğumda ve <strong>emzirme</strong> ile bulaşabilir.</li>
<li>Tedavi edilmeyen anneden bulaş riski çok daha yüksektir; anneye antiretroviral tedavi, bebeğe doğum sonrası profilaksi ve gerekirse elektif sezaryen ile risk büyük ölçüde azalır.</li>
<li>Anne sütüyle geçiş gösterildiğinden <strong>emzirme önerilmez</strong>.</li>
</ul>
<p>* Dış kaynak (CDC).</p>
<div class="hoca"><p>Kan yoluyla bulaşta iki ana başlık var. Biri damar içi madde bağımlıları; ortak iğne kullanılırsa risk artıyor. Diğeri kan transfüzyonu. Kan bağışında ilk eleme kişinin beyanına dayanıyor; riskli temas yok mu diye sorulan formu doğru doldurması gerekiyor. Sonra hepatit B, hepatit C ve HIV için testler yapılıyor. Ama kişi HIV aldıktan sonra ilk on, on beş gün hangi testi yaparsanız yapın, moleküler testler dahil, pozitifleşmediği bir pencere dönemi var. Bu dönemde alınmış kan verilirse yüze yakın oranda bulaş oluyor.</p><p>Anneden bebeğe bulaş gebelikte, doğum sırasında ve sonrasında olabiliyor; en sık doğum sırasında. Anne tedavi edilmiyorsa risk çok yüksek. Ama tedavi alıyor ve HIV RNA'sı baskılanmışsa, yani viral yük negatifse, anneden bebeğe geçiş neredeyse hiç olmuyor. Kendi takip ettiğim hastaların en az otuz, otuz beş bebeği oldu, hiçbiri pozitifleşmedi. Çünkü anneyi gebelik boyunca takip ediyoruz, tedavisini veriyoruz, doğum sırasında da ilaçla viral yükü negatif tutuyoruz.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~28:28</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler"; Klinik (K1) "Kan ve ürünlerinin transfüzyonu ve komplikasyonları" (dosya adı). Dış kaynak: iğne batması ve iğne paylaşımı riskleri (CDC)</p>`
      },
      {
        heading: "HIV nasıl bulaşmaz?",
        html: `
<ul>
<li>Tokalaşma, sarılma, öpüşme (sosyal), aynı ortamda bulunma.</li>
<li>Ortak kullanılan bardak, çatal-kaşık, havlu, tuvalet, havuz.</li>
<li>Öksürük, hapşırık, ter, gözyaşı, tükürük.</li>
<li><strong>Sivrisinek ve diğer böcek ısırıkları.</strong></li>
<li>Kan bağışı yapmak (steril, tek kullanımlık malzeme ile).</li>
</ul>
<div class="key"><p>HIV dış ortamda dayanıksız, zarflı bir virüstür; günlük sosyal temasla bulaşmaz. Bu bilgi damgalanmayı (stigma) azaltmak için önemlidir.</p></div>
<figure class="slide-img"><img src="img/hiv-bulas-2.jpg" alt="HIV'in bulaşmadığı durumları gösteren ikonlar: sarılma, tokalaşma, öksürük, ortak eşya, sivrisinek" loading="lazy"><figcaption>Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler", s. 42 — HIV nasıl bulaşMAZ</figcaption></figure>
<div class="hoca"><p>HIV; öpüşmekle, sarılmakla, aynı ortamda bulunmakla, aynı kaptan yemek yemekle ya da su içmekle bulaşmaz. Kapı kolundan, sivrisinek ısırmasıyla, tuvaletten, havuzdan, denizden de bulaşmaz. HIV çok dayanıksız bir virüs, dış ortam şartlarında hemen inaktif oluyor. Saydığım üç yol dışında herhangi bir bulaş ihtimali yok.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~31:02</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" ("HIV nasıl bulaşMAZ" görselli slaytlar; görsellerin içeriği metne aktarılmamış, liste standart kaynaklarla tamamlandı – CDC/DSÖ)</p>`
      },
      {
        heading: "Korunma ve B=B",
        html: `
<ul>
<li><strong>Cinsel yol:</strong> kondom kullanımı, tek eşlilik ve güvenli cinsel eş seçimi, diğer cinsel yolla bulaşan enfeksiyonların tedavisi.</li>
<li><strong>Kan yolu:</strong> gereksiz transfüzyondan kaçınma, damar içi madde kullanımının önlenmesi ve tedavisi, steril enjektör, eğitim.</li>
<li><strong>Anneden bebeğe:</strong> tüm gebelere HIV testi, anneye ART, bebeğe profilaksi, gerekirse sezaryen, emzirmeme.</li>
<li><strong>Belirlenemeyen = Bulaştırmayan (B=B; U=U):</strong> ART ile kanda virüs saptanamayan düzeyde olan kişinin cinsel yolla bulaştırma ihtimali yok denecek kadar azdır.</li>
<li>Maruziyet sonrası profilaksi (PEP; ilk 72 saat içinde başlanmalı) ve maruziyet öncesi profilaksi (PrEP)*.</li>
</ul>
<p>* Dış kaynak (CDC/DSÖ kılavuzları).</p>
<figure class="slide-img"><img src="img/hiv-bulas-3.jpg" alt="U=U, Belirlenemeyen eşittir Bulaştırmayan kampanya görselleri" loading="lazy"><figcaption>Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler", s. 54 — B=B (U=U)</figcaption></figure>
<div class="hoca"><p>Tedavide çok önemli bir gelişme var: hastaya tanı konur konmaz tedavi başlıyoruz ve hasta tedaviye uyumlu olursa HIV RNA'yı saptanamayacak düzeye kadar baskılayabiliyoruz. Bu durumda kişinin cinsel yolla bulaştırma ihtimali artık yok kabul ediliyor. İngilizcesi "undetectable equals untransmissible", yani U=U; bizde de B=B diye biliniyor: belirlenemiyorsa bulaştırmaz. Bu yüzden tanı alan kişilere hemen tedavi başlamak çok önemli. Kişi hem kendi sağlığını kazanıyor hem de başkaları için risk oluşturmuyor.</p><p>Korunmada cinsel yol için kondom kullanımını öneriyoruz, diğer cinsel yolla bulaşan hastalıkları tedavi ediyoruz, güvenli cinsel temas tercih ediyoruz. Kan yoluyla bulaşta transfüzyona karar veren hekimsiniz; gereksiz transfüzyon yapmamak lazım, çünkü testlerin yakalayamadığı bir dönem var. Damar içi madde kullananlarda önce alışkanlığın tedavisi, olmuyorsa eğitim ve ortak enjektör kullanımının engellenmesi önemli.</p><p>Anneden bebeğe geçişte HIV pozitif kadına doğum kontrol yöntemlerini öğretiyoruz; bebek sahibi olmak istiyorsa uygun tedaviyle olabiliyor. Gebelik boyunca tedavi veriyoruz, doğar doğmaz bebeğe yaklaşık altı hafta koruyucu ilaç veriyoruz. Anne sütü konusu tartışmalı: ben kendi hastalarıma emzirmeyi önermiyorum, ama bazı rehberler son dönemde tek başına emzirmenin bulaştırmayabileceğini savunuyor; bu kısım ileride değişebilir.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~40:25</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (korunma, B=B). Dış kaynak: PEP/PrEP</p>`
      },
      {
        heading: "Türkiye ve dünyada durum",
        html: `
<ul>
<li>Dünyada 2022'de <strong>39 milyon</strong> kişi HIV ile yaşıyordu; yılda 1,3 milyon yeni enfeksiyon, 630.000 HIV ilişkili ölüm (UNAIDS/DSÖ).</li>
<li>Türkiye'de ilk AIDS olgusu <strong>1985</strong>; bildirimi zorunlu hastalıktır.</li>
<li>Türkiye'de HIV ile yaşayanların sayısı 2010'dan bu yana yaklaşık <strong>9 kat</strong> arttı (2010'da 4.432, grafikte son değer 39.437). 8 Kasım 2023 itibarıyla toplam <strong>41.732</strong> doğrulanmış olgu bildirilmiştir.</li>
<li>Olguların yarıdan fazlası <strong>20–39 yaş</strong> grubunda; en sık 25–29 yaş.</li>
<li>Bildirilen olgularda bulaş yolu en sık heteroseksüel ilişki (%28,8); ancak olguların <strong>%57'sinde bulaş yolu bilinmiyor</strong>.</li>
</ul>
<figure class="slide-img"><img src="img/hiv-bulas-4.jpg" alt="Türkiye'de 2010'dan bu yana HIV ile yaşayanların sayısındaki artış grafiği" loading="lazy"><figcaption>Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler", s. 33 — Türkiye'de HIV ile yaşayan sayısı (yaklaşık 9 kat artış)</figcaption></figure>
<div class="hoca"><p>Dünya Sağlık Örgütü 2022 verilerine göre dünyada yaklaşık 39 milyon kişi HIV ile yaşıyor, yılda yaklaşık 1,3 milyon yeni enfeksiyon oluyor. 2010 ile karşılaştırınca HIV ile yaşayan sayısı yüzde 24 artmış ama yeni enfeksiyonlar yüzde 38 azalmış. Bu nasıl mümkün? Çünkü ölümler azaldı; çok etkin ilaçlar var, artık insanlar ölmüyor. Dünya Sağlık Örgütü HIV/AIDS'i ölümcül hastalıklar listesinden çıkarıp kronik viral enfeksiyonlar listesine aldı. Biz de hastalarımıza bunun ölümcül bir hastalık olmadığını, ilacını ömür boyu düzenli alırsa herkesle aynı süre yaşayabileceğini söylüyoruz. Tek şartımız ömür boyu ilaç kullanması.</p><p>Türkiye'de ilk vaka 1985'te saptandı ve hastalık bildirimi zorunlu hastalıklar listesinde. Son yıllarda çok ciddi bir artış var; yüzde dört yüzün üzerinde bir artıştan söz ediyoruz, 2010'dan bu yana yaklaşık dokuz kat. Orta Avrupa verilerinde bu artıştan üç ülke sorumlu: Polonya, Türkiye ve Romanya. Yani Avrupa'nın istatistiğini de Türkiye belirliyor. Hastaların büyük kısmı 25-29 yaş aralığında; 20-39 yaş toplam vakaların yarısından fazlasını oluşturuyor. Yani sizin yaşınızdaki kişiler bize hasta olarak geliyor.</p><p>Sağlık Bakanlığı kayıtlarında bulaş yolunun yaklaşık yüzde 56'sı bilinmiyor görünüyor; yüzde 28 heteroseksüel, yüzde 13 homoseksüel temas. Bilinenlerin yaklaşık yüzde 95'i cinsel yoldan, bunların üçte ikisi heteroseksüel, üçte biri erkekle seks yapan erkekler arasında. Bildirimde bulaş yolunu hasta yeni tanı almış, şoku atlatamamışken soruyoruz; zamanla hasta yollarını anlatmaya başlıyor. Benim polikliniğimde bulaş yolu bilinmeyenlerin oranı yüzde beşi geçmez ve neredeyse tamamı cinsel yoldan.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~20:13</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (UNAIDS/WHO 2023, TC Sağlık Bakanlığı HIV/AIDS Kontrol Programı 2023 verileri)</p>`
      },
      {
        heading: "Özet tablo: bulaş yolları ve risk oranları",
        html: `
<table><caption>Maruziyet başına tahmini bulaş riski ve korunma</caption>
<thead><tr><th>Bulaş yolu</th><th>Tahmini risk (kaynak HIV+, tedavisiz)</th><th>Riski artıranlar</th><th>Riski azaltanlar</th></tr></thead>
<tbody>
<tr><td>HIV'li kan transfüzyonu</td><td><strong>%90–100</strong></td><td>Taranmamış kan</td><td>Donör taraması, gereksiz transfüzyondan kaçınma</td></tr>
<tr><td>Reseptif anal ilişki</td><td>~%1,4*</td><td>Mukoza hasarı, genital ülser</td><td>Kondom, PrEP, kaynağın ART alması</td></tr>
<tr><td>Ortak iğne/enjektör (damar içi madde)</td><td>~%0,6*</td><td>Tekrarlayan paylaşım</td><td>Steril enjektör, bağımlılık tedavisi</td></tr>
<tr><td>Perkütan yaralanma (iğne batması)</td><td>~%0,3*</td><td>Derin yaralanma, görünür kan, yüksek viral yük</td><td>PEP (ilk 72 saat, mümkünse ilk saatler)</td></tr>
<tr><td>Korunmasız vajinal ilişki</td><td><strong>%0,05–0,2</strong> (on binde 5 – binde 2)</td><td>Genital ülser, çok eş, CYBE</td><td>Kondom (en az 20 kat azaltır), erkek sünneti, tek eşlilik</td></tr>
<tr><td>Anneden bebeğe (gebelik, doğum, emzirme)</td><td>Tedavisiz ~%15–45*; ART ile &lt;%1–2*</td><td>Yüksek viral yük, emzirme</td><td>Gebelikte ART, bebeğe profilaksi, gerekirse sezaryen, emzirmeme</td></tr>
<tr><td>Kaynak kişi ART ile saptanamayan viral yükte</td><td>Cinsel yolla ~0 (B=B)</td><td>—</td><td>Düzenli tedavi</td></tr>
</tbody></table>
<table><caption>Türkiye'de bildirilen HIV/AIDS olgularının olası bulaş yolu (1985 – 8 Kasım 2023)</caption>
<thead><tr><th>Olası bulaş yolu</th><th>Olgu</th><th>%</th></tr></thead>
<tbody>
<tr><td>Heteroseksüel ilişki</td><td>12.030</td><td>28,83</td></tr>
<tr><td>Homoseksüel / biseksüel ilişki</td><td>5.523</td><td>13,24</td></tr>
<tr><td>Damar içi madde</td><td>365</td><td>0,87</td></tr>
<tr><td>Anneden bebeğe</td><td>226</td><td>0,54</td></tr>
<tr><td>Enfekte kan transfüzyonu (hemofili hariç)</td><td>112</td><td>0,27</td></tr>
<tr><td>Nozokomiyal</td><td>91</td><td>0,22</td></tr>
<tr><td>Hemofili hastası</td><td>24</td><td>0,06</td></tr>
<tr><td>Çoklu bulaş</td><td>397</td><td>0,95</td></tr>
<tr><td>Bilinmiyor</td><td>23.768</td><td>56,95</td></tr>
<tr><td><strong>Toplam</strong></td><td><strong>41.732</strong></td><td>100</td></tr>
</tbody></table>
<p>* Dış kaynak (CDC ilişki başına risk tahminleri; DSÖ anneden bebeğe bulaş verileri).</p>
<figure class="slide-img"><img src="img/hiv-bulas-1.jpg" alt="Türkiye'de HIV/AIDS olgularının olası bulaş yollarına göre dağılımı tablosu" loading="lazy"><figcaption>Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler", s. 35 — Türkiye'de olası bulaş yolu dağılımı (TC Sağlık Bakanlığı 2023)</figcaption></figure>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (transfüzyon %90–100, vajinal ilişki riski, kondom ve sünnet etkisi, Türkiye bulaş yolu tablosu, B=B). Dış kaynak: * işaretli oranlar</p>`
      }
    ],
    faq: [
      { q: "HIV'in en sık bulaş yolu nedir?", a: "<p>Cinsel temas; dünyada olguların %85'inden fazlası bu yolla olur.</p>" },
      { q: "Anneden bebeğe bulaş en çok ne zaman olur ve nasıl önlenir?", a: "<p>Olguların %90'ı perinatal dönemde, en sık doğum sırasında (%50–70) olur. Anneye gebelikte antiretroviral tedavi, bebeğe doğum sonrası profilaksi, gerekirse elektif sezaryen ve emzirmeme ile risk büyük ölçüde azalır.</p>" },
      { q: "Neden akut HIV enfeksiyonu döneminde bulaştırıcılık en yüksektir?", a: "<p>Bu dönemde virüs hızla çoğalır ve henüz etkili bağışıklık yanıtı yoktur; plazma viral yükü çok yüksektir. Kişi çoğu zaman enfekte olduğunu bilmez ve antikor testleri henüz negatif olabilir.</p>" },
      { q: "B=B (U=U) ne anlama gelir?", a: "<p>Belirlenemeyen = Bulaştırmayan: Etkili ART ile kanda viral yükü saptanamayan düzeyde tutulan kişinin cinsel yolla HIV bulaştırma ihtimali yok denecek kadar azdır. Tedavinin aynı zamanda korunma yöntemi olduğunu gösterir.</p>" },
      { q: "Genital ülser HIV bulaşını neden artırır?", a: "<p>Mukoza bütünlüğü bozulur ve ülser bölgesinde HIV'in hedef hücreleri olan aktive CD4+ T hücreleri ile makrofajlar toplanır; hem virüsün girişi hem de enfekte hücre bulunması kolaylaşır.</p>" }
    ]
  },
  {
    id: "hiv-mekanizma",
    group: "HIV / AIDS",
    title: "HIV Nasıl Oluşur, Mekanizmaları",
    slides: [
      {
        heading: "Etken ve kökeni",
        html: `
<ul>
<li><strong>HIV (Human Immunodeficiency Virus):</strong> 1983–1984'te Fransa ve ABD'de izole edildi.</li>
<li><strong>Retrovirus</strong> ailesinin <strong>lentivirus</strong> alt grubu üyesidir (lenti = yavaş: uzun klinik latent dönem).</li>
<li><strong>HIV-1:</strong> tüm dünyada yaygın tip. <strong>HIV-2:</strong> büyük ölçüde Batı Afrika ile sınırlı (1986'da izole edildi), daha yavaş seyirli.</li>
<li><strong>Köken (zoonoz):</strong> HIV-1 şempanzelerdeki SIV'e (Simian Immunodeficiency Virus), HIV-2 ise sooty mangabey (Cercocebus atys) maymunlarındaki SIV'e benzer. Virüs maymundan insana geçerek insana uyum sağlamıştır.</li>
</ul>
<div class="hoca"><p>HIV virüsü 1983'te saptandı; önce Fransa'da, ertesi yıl Amerika'da; kimin önce bulduğuyla ilgili bir çekişme de vardır. Yani çok eski bir hastalık değil. 1986'da Afrika'da çok benzeyen ikinci bir virüs izole edildi, buna HIV-2 dendi. Sonraki çalışmalarda HIV-1'in şempanzelerdeki, HIV-2'nin de maymunlarda saptanan bir virüsle benzerlik gösterdiği ortaya kondu.</p><p>HIV-1 ile HIV-2 yaklaşık yüzde kırk oranında benziyor. HIV-1 tüm dünyada yaygın; HIV-2 büyük ölçüde Batı Afrika'da. Bizim ülkemizdeki vakaların tümü HIV-1; HIV-2 saptarsak yurt dışından almış oluyor. Ben bundan sonra HIV dediğimde HIV-1'i anlatıyorum.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~17:01</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (tarihçe, etken, SIV kökeni)</p>`
      },
      {
        heading: "Virüsün yapısı",
        html: `
<ul>
<li><strong>Zarf:</strong> konak hücreden alınmış çift katlı lipoprotein membran. İçinde zarf glikoproteinleri:
<ul>
<li><strong>gp120</strong> (dış): CD4'e ve ko-reseptöre bağlanır.</li>
<li><strong>gp41</strong> (transmembran): membran füzyonunu sağlar.</li>
<li>İkisi de öncül <strong>gp160</strong>'ın kesilmesiyle oluşur.</li>
</ul></li>
<li><strong>Matriks:</strong> p17.</li>
<li><strong>Kapsid (çekirdek):</strong> <strong>p24</strong>; tanıda 4. kuşak ELISA'nın aradığı antijen.</li>
<li><strong>Genom:</strong> iki kopya, tek zincirli (+) RNA.</li>
<li><strong>Enzimler:</strong> <strong>ters transkriptaz</strong> (RNA → DNA), <strong>integraz</strong>, <strong>proteaz</strong>.</li>
</ul>
<p>Genler ve ilaç hedefleri için bu bölümün sonundaki özet tabloya bakın.</p>
<figure class="slide-img"><img src="img/hiv-mekanizma-1.jpg" alt="HIV-1 virionunun yapısı: lipid zarf, gp120 ve gp41 glikoproteinleri, kapsid ve RNA" loading="lazy"><figcaption>Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler", s. 23 — HIV-1 yapısı (çift katlı lipoprotein zarf, gp120/gp41)</figcaption></figure>
<div class="hoca"><p>HIV, retrovirüslerin lentivirüs alt grubundan bir virüs. Çift katlı lipoprotein bir zarfı var, üzerinde glikoproteinler duruyor. Bunların bir kısmı tamamen dışta duruyor, buna eksternal glikoprotein, gp120 diyoruz. Bir kısmı zarı geçerek içeri uzanıyor, yani transmembran; buna da gp41 deniyor. İkisinin enfeksiyonun patogenezinde farklı rolleri var, o yüzden bahsediyorum.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~18:28</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (zarf, gp120/gp41, p24 antijeni); Mikrobiyoloji (K5) 19a/19b (EIA/immünblot dosya adları). Dış kaynak: genom ve genler (Robbins Temel Patoloji; Abbas Temel İmmünoloji)</p>`
      },
      {
        heading: "Hücreye giriş: bağlanma ve füzyon",
        html: `
<ol>
<li><strong>Bağlanma:</strong> gp120, hedef hücredeki <strong>CD4</strong> molekülüne bağlanır (HIV'in primer reseptörü).</li>
<li><strong>Konformasyon değişikliği:</strong> gp120'de yeni bir bölge açığa çıkar ve <strong>ko-reseptöre</strong> bağlanır:
<ul>
<li><strong>CCR5</strong>: makrofaj ve bellek T hücrelerinde; <strong>R5 virüsler</strong> bulaşta ve erken dönemde baskındır.</li>
<li><strong>CXCR4</strong>: T hücrelerinde; <strong>X4 virüsler</strong> hastalık ilerledikçe ortaya çıkar, daha sitopatiktir.</li>
</ul></li>
<li><strong>Füzyon:</strong> gp41 açılıp füzyon peptidini hücre zarına sokar; viral zarf ile hücre zarı kaynaşır, kapsid sitoplazmaya girer.</li>
</ol>
<div class="key"><p>Hedef hücreler = yüzeyinde CD4 taşıyanlar: <strong>CD4+ T hücreleri, monosit/makrofajlar, dendritik hücreler</strong>, beyinde <strong>mikroglia</strong>.</p></div>
<div class="note"><p><strong>CCR5Δ32</strong> mutasyonu için homozigot kişiler R5 virüslerle enfeksiyona büyük ölçüde dirençlidir. Bu bulgu, CCR5 antagonisti ilaçların (maravirok) geliştirilmesine yol açmıştır.</p></div>
<div class="hoca"><p>Dıştaki gp120 insanda nereye tutunacak? Reseptörü CD4 molekülü. CD4 reseptörü T hücrelerinde, monositlerde ve makrofajlarda var; HIV buraya tutunduktan sonra hücrenin içine giriyor. Dikkat edin: bunlar T hücre aracılı bağışıklığın hücreleri, B hücre aracılığının değil. Yani antikorlar üzerinden değil, T hücreler üzerinden bağışıklığı bozuyor ve bağışıklık sistemini çökertip kişiyi birçok hastalığa açık hale getiriyor.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~19:10</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (gp120 → CD4; T hücresi, monosit, makrofaj); Mikrobiyoloji (K5) 22 "İmmünyetmezlik". Dış kaynak: ko-reseptörler, R5/X4, CCR5Δ32 (Robbins; Abbas)</p>`
      },
      {
        heading: "Replikasyon döngüsü",
        html: `
<ol>
<li><strong>Kabuk soyma (uncoating):</strong> viral RNA ve enzimler sitoplazmaya açılır.</li>
<li><strong>Ters transkripsiyon:</strong> ters transkriptaz RNA'dan çift zincirli DNA yapar. Enzim <strong>düzeltme (proofreading) yapmaz</strong> → çok sık mutasyon → ilaç direnci ve bağışıklıktan kaçış.</li>
<li><strong>Çekirdeğe giriş ve entegrasyon:</strong> <strong>integraz</strong> viral DNA'yı konak genomuna yerleştirir → <strong>provirus</strong>. Artık hücre bölündükçe kopyalanır; vücuttan atılamaz.</li>
<li><strong>Latent dönem veya aktif üretim:</strong> Dinlenen hücrede provirus sessiz kalabilir. T hücresi antijen veya sitokinle <strong>aktive olunca</strong> (NF-κB) provirus transkripsiyonu başlar; <strong>Tat</strong> bunu çok artırır.</li>
<li><strong>Protein sentezi ve birleşme:</strong> Rev viral mRNA'ların çekirdekten çıkışını sağlar; Gag/Gag-Pol öncül proteinleri hücre zarında birleşir.</li>
<li><strong>Tomurcuklanma ve olgunlaşma:</strong> virüs zarfını hücre zarından alarak çıkar; <strong>proteaz</strong> öncül proteinleri keser → bulaştırıcı olgun virion.</li>
</ol>
<div class="key"><p>Paradoks: HIV'i çoğaltan şey bağışıklık aktivasyonudur. Başka bir enfeksiyon T hücrelerini aktive ettiğinde virüs üretimi de artar.</p></div>
<p class="src">Dış kaynak: Robbins Temel Patoloji (İmmün sistem hastalıkları – AIDS); Abbas Temel İmmünoloji (Konjenital ve edinsel immün yetmezlikler). Drive'da replikasyon döngüsü ayrıntısı bulunamadı.</p>`
      },
      {
        heading: "İlaçlar döngünün hangi basamağına etki eder?",
        html: `
<table><caption>Antiretroviral tedavi (ART) hedefleri</caption>
<thead><tr><th>Basamak</th><th>İlaç grubu</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>Ko-reseptöre bağlanma</td><td>CCR5 antagonisti</td><td>Maravirok</td></tr>
<tr><td>Füzyon</td><td>Füzyon inhibitörü (gp41)</td><td>Enfuvirtid</td></tr>
<tr><td>Ters transkripsiyon</td><td>NRTİ / NNRTİ</td><td>Tenofovir, emtrisitabin / efavirenz</td></tr>
<tr><td>Entegrasyon</td><td>İntegraz inhibitörü</td><td>Dolutegravir</td></tr>
<tr><td>Olgunlaşma</td><td>Proteaz inhibitörü</td><td>Darunavir</td></tr>
</tbody></table>
<div class="note"><p>Ters transkriptaz çok hata yaptığı için tek ilaca hızla direnç gelişir; bu yüzden tedavi en az iki-üç farklı etkili ilacın kombinasyonudur. ART virüsü baskılar ama latent provirus rezervuarını yok edemez; tedavi kesilirse virüs geri döner.</p></div>
<p class="src">Dış kaynak: farmakoloji kaynakları, güncel ART kılavuzları. Drive'da ilaç ayrıntısı bulunamadı (Klinik K5 sunumunda yalnızca antiretroviral tedavi/profilaksi geçer).</p>`
      },
      {
        heading: "Tanı: virüsü veya antikoru nasıl yakalarız?",
        html: `
<ul>
<li><strong>Tarama:</strong> ELISA (EIA). <strong>4. kuşak ELISA</strong> hem anti-HIV antikoru hem <strong>p24 antijenini</strong> saptar (kombo test), böylece pencere dönemini kısaltır.</li>
<li><strong>Doğrulama:</strong> Western blot, line-immunoassay, indirekt immünfloresan antikor testi (IFA), HIV-1/2 antikor ayırt edici hızlı doğrulama testleri.</li>
<li><strong>İzlem:</strong> plazma HIV RNA (viral yük, PCR) ve <strong>CD4 sayısı</strong>.</li>
</ul>
<h3>Kimlere test önerilir?</h3>
<ul>
<li>Akut retroviral sendrom bulgusu olanlar, tüberküloz tedavisine başlanan tüm hastalar, cinsel yolla bulaşan enfeksiyon öyküsü olanlar.</li>
<li>Risk faktöründen bağımsız <strong>tüm gebeler</strong>; HIV'li annenin bebeği; HIV'li kişinin cinsel eşleri.</li>
<li>İğne paylaşan madde kullanıcıları, iğne batması yaşayanlar, cinsel istismar öyküsü olanlar, isteyen herkes.</li>
</ul>
<div class="hoca"><p>HIV testini şu durumlarda mutlaka isteriz: akut retroviral sendromla uyumlu bulgular varsa (boğaz ağrısı, ateş, döküntü, ağızda yaralar), tüberküloz tanısı konduğunda herkeste, cinsel yolla bulaşan başka bir hastalık tanısı alanlarda, HIV pozitif kişilerin cinsel eşlerinde, ve tüm gebelerde. Gebe takibinde mutlaka bakılması lazım; doğum sancısıyla geldiği anda tanı alan hastalar oluyor ve o noktada viral yükü negatif hale getirmek mümkün değil, bebeğe bulaş gerçekleşebiliyor.</p><p>Ayrıca korunmasız cinsel ilişki öyküsü, birden fazla eş, seks çalışanlığı, madde kullanımı (özellikle ortak enjektör), erkekle seks yapan erkekler ve mahkumlarda isteriz. Hastanede iğne batması ya da kesici alet yaralanması yaşayan çalışanlara, öğrencilere, internlere, cinsel istismar ve tecavüz mağdurlarına, ve test olmak isteyen herkese bakılır.</p><p>Tarama testi olarak ELISA, yani EIA bakıyoruz. Birinci, ikinci, üçüncü kuşak diye gelişti, şimdi dördüncü kuşak var ve mutlaka dördüncü kuşak ELISA ile bakmak lazım; çünkü hem antikoru hem antijeni birlikte test ediyor, saptama ihtimali daha yüksek. ELISA pozitif çıkarsa hemen tanı koyamıyoruz, mutlaka doğrulama testi yapmak gerekiyor, çünkü ELISA'nın yalancı pozitifliği olabiliyor. Testin yalancı pozitifliği olması, yalancı negatifliği olmasından iyidir; yalancı negatif olursa hastalığı kaçırırız, pozitifse ileri testle doğrularız.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~37:03</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (tanı ve test endikasyonları); Mikrobiyoloji (K5) 19a/19b "İmmünolojik tanı testleri" ve 20 "Moleküler testler" (dosya adları)</p>`
      },
      {
        heading: "Özet tablo: yapı – gen – görev – ilaç hedefi",
        html: `
<table><caption>HIV bileşenleri, kodlayan genler ve klinik karşılıkları</caption>
<thead><tr><th>Bileşen</th><th>Gen</th><th>Görev</th><th>Klinik / ilaç karşılığı</th></tr></thead>
<tbody>
<tr><td><strong>gp120</strong> (zarf, dış)</td><td>env (gp160'tan kesilir)</td><td>CD4'e, sonra CCR5/CXCR4'e bağlanma</td><td>Tropizm (R5/X4); CCR5 antagonisti maravirok ko-reseptör tarafını bloke eder</td></tr>
<tr><td><strong>gp41</strong> (transmembran)</td><td>env</td><td>Viral zarf ile hücre zarının füzyonu</td><td>Füzyon inhibitörü enfuvirtid</td></tr>
<tr><td><strong>p24</strong> (kapsid)</td><td>gag</td><td>Genomu ve enzimleri saran çekirdek</td><td>4. kuşak ELISA'nın aradığı antijen (erken tanı)</td></tr>
<tr><td><strong>p17</strong> (matriks)</td><td>gag</td><td>Zarfın iç yüzünü döşer, birleşmede rol</td><td>—</td></tr>
<tr><td><strong>Ters transkriptaz</strong></td><td>pol</td><td>RNA → çift zincirli DNA; düzeltme yapmaz → yüksek mutasyon</td><td>NRTİ (tenofovir, emtrisitabin), NNRTİ (efavirenz); tek ilaçla hızlı direnç</td></tr>
<tr><td><strong>İntegraz</strong></td><td>pol</td><td>Viral DNA'yı konak genomuna yerleştirir (provirus)</td><td>İntegraz inhibitörleri (dolutegravir)</td></tr>
<tr><td><strong>Proteaz</strong></td><td>pol</td><td>Gag/Gag-Pol öncüllerini keser → olgun, bulaştırıcı virion</td><td>Proteaz inhibitörleri (darunavir)</td></tr>
<tr><td>Tat</td><td>tat</td><td>Provirus transkripsiyonunu çok artırır</td><td>—</td></tr>
<tr><td>Rev</td><td>rev</td><td>Viral mRNA'ların çekirdekten çıkışı</td><td>—</td></tr>
<tr><td>Nef</td><td>nef</td><td>CD4 ve MHC I'i hücre yüzeyinden azaltır → CTL'den kaçış</td><td>Nef defektli virüsle enfekte kişilerde yavaş ilerleme bildirilmiştir</td></tr>
<tr><td>Vif</td><td>vif</td><td>Konak antiviral enzimi APOBEC3G'yi yıkar</td><td>—</td></tr>
<tr><td>Vpu, Vpr</td><td>vpu, vpr</td><td>Virion salınımı (Vpu), çekirdeğe giriş ve hücre döngüsü (Vpr)</td><td>—</td></tr>
</tbody></table>
<div class="key"><p>Üç yapısal gen (gag, pol, env) tüm retrovirüslerde vardır; HIV'i farklı kılan düzenleyici ve aksesuar genlerdir (tat, rev, nef, vif, vpu, vpr).</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (gp120/gp41, CD4 bağlanması, p24 antijeni ve 4. kuşak ELISA). Dış kaynak: gen–ürün eşleşmeleri, aksesuar proteinler ve ilaç grupları (Robbins Temel Patoloji; Abbas Temel İmmünoloji; farmakoloji kaynakları)</p>`
      }
    ],
    faq: [
      { q: "HIV'e neden retrovirüs denir?", a: "<p>Genetik bilgi akışı tersine işler: viral RNA, ters transkriptaz ile DNA'ya çevrilir ve bu DNA integraz ile konak genomuna yerleştirilir (provirus).</p>" },
      { q: "CD4 tek başına HIV girişi için yeterli midir?", a: "<p>Hayır. gp120 önce CD4'e bağlanır, sonra açığa çıkan bölgesiyle bir ko-reseptöre (CCR5 veya CXCR4) bağlanmalıdır. Ancak bundan sonra gp41 füzyonu başlatabilir.</p>" },
      { q: "HIV neden aşı ve ilaçlardan bu kadar kolay kaçar?", a: "<p>Ters transkriptaz düzeltme yapmadığı için her replikasyonda mutasyon olur ve virüs hızla çeşitlenir. Ayrıca provirus olarak dinlenen hücrelerde gizlenir (latent rezervuar); bu hücreler bağışıklık sistemine ve ilaçlara görünmez.</p>" },
      { q: "R5 ve X4 virüslerin farkı nedir?", a: "<p>R5 virüsler CCR5 ko-reseptörünü kullanır; bulaşta ve erken dönemde baskındır, makrofaj ve bellek T hücrelerini enfekte eder. X4 virüsler CXCR4 kullanır, hastalık ilerledikçe ortaya çıkar ve daha hızlı CD4 kaybıyla ilişkilidir.</p>" },
      { q: "4. kuşak ELISA'nın üstünlüğü nedir?", a: "<p>Antikorla birlikte p24 antijenini de saptar. p24 antikorlardan önce kanda belirdiği için pencere dönemi kısalır ve akut enfeksiyon daha erken yakalanır.</p>" }
    ]
  },
  {
    id: "aids-hucresel",
    group: "HIV / AIDS",
    title: "AIDS Gelişimine Neden Olan Hücresel Olaylar",
    slides: [
      {
        heading: "Doğal seyir: üç evre",
        html: `
<table><caption>HIV enfeksiyonunun evreleri: karşılaştırmalı özet</caption>
<thead><tr><th>Evre</th><th>Süre</th><th>CD4 (hücre/mm³)</th><th>Viral yük*</th><th>Hücresel olay</th><th>Klinik</th></tr></thead>
<tbody>
<tr><td><strong>Akut (primer) HIV enfeksiyonu / akut retroviral sendrom</strong></td><td>Temastan 2–4 hafta sonra başlar; birkaç günden 10 haftaya kadar, genellikle &lt;14 gün</td><td>Ani, geçici düşüş; sonra kısmen toparlanır</td><td>Çok yüksek (çoğu zaman milyonlarca kopya/mL); bulaştırıcılık en yüksek</td><td>Hızlı replikasyon, GALT'ta bellek CD4 hücrelerinin kitlesel kaybı, CD8 CTL yanıtıyla "set point"</td><td>%40–90'da ateş, boğaz ağrısı, döküntü, lenfadenopati, ağrılı oral/genital ülser; antikor testi henüz negatif olabilir</td></tr>
<tr><td><strong>Kronik (klinik latent) dönem</strong></td><td>Ortalama 8–10 yıl</td><td>Yavaş ve sürekli azalma (&gt;500'den 200'e doğru)</td><td>"Set point" düzeyinde görece sabit; set point ne kadar yüksekse ilerleme o kadar hızlı</td><td>Plazmada sakin görünür ama <strong>lenfoid dokuda replikasyon hızla sürer</strong>; kronik bağışıklık aktivasyonu</td><td>Çoğu asemptomatik; persistan jeneralize lenfadenopati; yorgunluk, terleme, kilo kaybı olabilir</td></tr>
<tr><td><strong>AIDS</strong></td><td>Tedavisizse 2–3 yılda ölüm</td><td><strong>&lt;200</strong> ve/veya AIDS tanımlayan durum</td><td>Yeniden yükselir</td><td>CD4 deposu tükenir, X4 virüsler artabilir, bağışıklık çöker</td><td>Fırsatçı enfeksiyonlar (PCP, toksoplazmoz, TB, MAC), Kaposi sarkomu, lenfoma, erime sendromu</td></tr>
<tr><td><strong>İleri evre HIV enfeksiyonu</strong></td><td>AIDS'in son dönemi</td><td><strong>&lt;50</strong></td><td>Yüksek</td><td>Derin immünsüpresyon</td><td>HIV tükenmişlik (wasting) sendromu, CMV, dissemine MAC</td></tr>
</tbody></table>
<p>* Viral yük ifadeleri ve "set point" kavramı dış kaynaktan (Robbins; Abbas); süreler, CD4 eşikleri ve klinik bulgular Drive'dan.</p>
<div class="note"><p><strong>Persistan jeneralize lenfadenopati:</strong> inguinal bölge dışında en az iki bölgede, 3 aydan uzun süren lenf bezi büyümesi. CD4 &lt;50/mm³ ise "ileri evre HIV enfeksiyonu" olarak tanımlanır.</p></div>
<div class="hoca"><p>Klinik olarak üç dönem var: primer (akut) enfeksiyon, kronik enfeksiyon, en sonunda AIDS. Hastalığın adı AIDS diye bilinse de AIDS aslında hastalığın son dönemi; çok ilerlemiş immün yetmezlik halidir.</p><p>Akut dönemde virüs alındıktan iki ila dört hafta sonra ateş, boğaz ağrısı, halsizlik, kas ağrısı gibi bulgular olabiliyor; bazılarında döküntü, ağızda ve genital bölgede ülser benzeri lezyonlar görülür. Buna akut retroviral sendrom diyoruz. Virüsü alanların hepsinde görülmüyor; tamamen asemptomatik geçirebilir, grip oldu sanıp evde nane limon içer, doktora gitmez. Bu dönemde kandaki virüs miktarı çok yüksek. Tablo kendi kendine düzelir ve kronik döneme geçilir.</p><p>Kronik (asemptomatik) dönem ortalama 8-10 yıl sürer. Hastanın pek şikayeti yoktur. Kandaki virüs çoğalma hızı azalır, ama gerçekte lenfoid dokuda çoğalma hızla devam eder; bağışıklık hücreleri biraz toparlar ve dengeli bir seyir olur. Şikayet olmadığı için test yapılmaz; genellikle kan bağışında ya da ameliyat öncesi testlerde saptanır. Bazılarında yorgunluk, terleme ya da üç aydan uzun süren, en az iki bölgede yaygın lenf bezi büyümesi (jeneralize lenfadenopati) olabilir. Tedavi verilmezse 8-10 yıl sonra son döneme, AIDS'e geliriz ve ölüm bu aşamada gerçekleşir.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~31:31</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (klinik evreleme, süreler, bulgular)</p>`
      },
      {
        heading: "Akut evrede hücresel olaylar",
        html: `
<ol>
<li><strong>Mukozada giriş:</strong> virüs mukozadaki CCR5+ bellek CD4 T hücrelerini, makrofaj ve dendritik hücreleri enfekte eder.</li>
<li><strong>Lenf bezine taşınma:</strong> dendritik hücreler virüsü bölgesel lenf bezlerine taşır ve orada CD4 T hücrelerine aktarır.</li>
<li><strong>Yayılım ve viremi:</strong> virüs kana ve tüm lenfoid dokulara yayılır; plazma viral yükü zirve yapar.</li>
<li><strong>Bağırsak lenfoid dokusunda (GALT) kitlesel kayıp:</strong> vücuttaki lenfositlerin büyük kısmı mukozadadır ve buradaki aktive, CCR5+ bellek CD4 hücreleri ilk haftalarda büyük ölçüde yok olur.</li>
<li><strong>Kısmi kontrol:</strong> HIV'e özgü <strong>CD8+ CTL</strong> yanıtı ve antikorlar gelişir → viremi düşer ve bir "set point" düzeyine oturur. Bu düzey hastalığın ne kadar hızlı ilerleyeceğini öngörür.</li>
</ol>
<div class="key"><p>Bağırsak mukozasında CD4 kaybı mukozal bariyeri bozar; bakteri ürünleri (LPS) kana geçer (<strong>mikrobiyal translokasyon</strong>) ve kronik bağışıklık aktivasyonunu besler.</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (akut infeksiyonda hızlı çoğalma ve CD4 azalması); Mikrobiyoloji (K5) 14 (GALT ve mukozal lenfositlerin oranı). Dış kaynak: dendritik hücre taşıması, GALT CD4 kaybı, set point, mikrobiyal translokasyon (Robbins; Abbas)</p>`
      },
      {
        heading: "CD4 T hücreleri neden ölür?",
        html: `
<ul>
<li><strong>Doğrudan sitopatik etki:</strong> çok sayıda virionun tomurcuklanması hücre zarını bozar; viral DNA ve proteinlerin birikimi hücreyi öldürür.</li>
<li><strong>Piroptoz:</strong> enfeksiyonu tamamlanamayan (abortif) dinlenen hücrelerde biriken viral DNA kaspaz-1'i aktive eder; inflamatuvar hücre ölümü ve IL-1β salınımı olur. Ölen hücrelerin büyük kısmı bu yolla kaybolduğu düşünülmektedir.</li>
<li><strong>CTL ile öldürülme:</strong> HIV'e özgü CD8+ T hücreleri enfekte CD4 hücrelerini öldürür.</li>
<li><strong>Kronik aktivasyona bağlı apoptoz:</strong> sürekli uyarılan enfekte olmayan hücreler de aktivasyonla indüklenen apoptozla ölür.</li>
<li><strong>Sinsityum:</strong> gp120 eksprese eden enfekte hücre komşu CD4 hücreleriyle kaynaşarak dev çok çekirdekli hücreler oluşturur (özellikle X4 virüslerde).</li>
<li><strong>Yapımın azalması:</strong> timus ve kemik iliğindeki öncüllerin etkilenmesi, lenf bezi mimarisinin bozulmasıyla yenilenme yetersiz kalır.</li>
</ul>
<div class="key"><p>Kaybın büyük kısmı enfekte olmayan "masum" hücrelerdedir; kronik bağışıklık aktivasyonu AIDS'e gidişin ana motorudur.</p></div>
<figure class="slide-img"><img src="img/aids-hucresel-1.jpg" alt="CD8 sitotoksik T hücresinin perforin, granzim ve Fas ligandı ile hedef hücreyi öldürme mekanizması" loading="lazy"><figcaption>Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli", s. 29 — CD8+ CTL'nin hedef hücreyi öldürme mekanizması (HIV'li CD4 hücreleri de bu yolla ölür)</figcaption></figure>
<p class="src">Dış kaynak: Robbins Temel Patoloji (AIDS patogenezi: T hücre kaybı mekanizmaları); Abbas Temel İmmünoloji. Drive – Mikrobiyoloji (K5) 22 "İmmünyetmezlik": virüs CD4 taşıyan hücreleri özgül olarak enfekte eder ve öldürür; sürekli ilerleyen harabiyet</p>`
      },
      {
        heading: "Makrofaj, dendritik hücre ve rezervuarlar",
        html: `
<ul>
<li><strong>Makrofajlar:</strong> enfekte olur ama çoğu ölmez; virüsü uzun süre üreten bir <strong>depo</strong> ve vücutta yayan bir "Truva atı" gibi davranır. Fagositoz, antijen sunumu ve sitokin üretimi bozulur.</li>
<li><strong>Foliküler dendritik hücreler:</strong> lenf bezi germinal merkezlerinde antikorla kaplı virüsleri yüzeylerinde tutar; yakındaki CD4 hücreleri sürekli enfekte olur.</li>
<li><strong>Mikroglia (beyin):</strong> HIV ilişkili nörobilişsel bozukluk ve ensefalopatiden sorumlu.</li>
<li><strong>Latent rezervuar:</strong> dinlenen bellek CD4 T hücrelerinde entegre ama sessiz provirus. Yıllarca yaşar, ART ile yok edilemez; tedavi kesilince virüs geri gelir.</li>
</ul>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (monosit ve makrofajların CD4 taşıyan hedef hücre olması). Dış kaynak: makrofaj deposu, foliküler dendritik hücre, latent rezervuar (Robbins; Abbas)</p>`
      },
      {
        heading: "Bağışıklık sistemindeki çok yönlü bozulma",
        html: `
<ul>
<li><strong>Yardımcı T kaybı → orkestra şefi yok:</strong> Th1 kaybıyla <strong>IFN-γ ↓</strong> → makrofaj aktive edilemez → hücre içi mikroplar (mikobakteriler, Pneumocystis, toksoplazma, mantarlar) kontrol edilemez.</li>
<li><strong>CD8+ CTL işlev kaybı:</strong> CD4 yardımı olmadan CTL yanıtı sürdürülemez, hücreler tükenir → virüs ve onkojenik virüsler (EBV, HHV-8) kontrol edilemez.</li>
<li><strong>B hücre bozukluğu:</strong> poliklonal aktivasyon ve <strong>hipergamaglobulinemi</strong> vardır ama yeni antijenlere ve aşılara <strong>özgül antikor yanıtı zayıftır</strong> → kapsüllü bakterilerle enfeksiyon.</li>
<li><strong>Doğal bağışıklıkta bozulma:</strong> makrofaj, dendritik hücre ve NK işlevleri azalır.</li>
<li><strong>CD4/CD8 oranı tersine döner:</strong> normalde ~2 iken &lt;1'e düşer.</li>
</ul>
<div class="key"><p>Hücresel immünite defekti → virüs ve hücre içi organizmalarla tekrarlayan enfeksiyon; T hücre yetmezliğinde kanser insidansı artar.</p></div>
<p class="src">Kaynak: Drive – Mikrobiyoloji (K5) 22 "İmmünyetmezlik" (hücresel immünite defektinde hücre içi organizmalar, T hücre yetmezliğinde kanser artışı); Mikrobiyoloji (K5) 16 (Th1, IFN-γ, makrofaj aktivasyonu); Patoloji (K5) 10. Dış kaynak: hipergamaglobulinemi ve zayıf özgül antikor yanıtı (Robbins)</p>`
      },
      {
        heading: "AIDS tablosu: fırsatçı enfeksiyonlar ve kanserler",
        html: `
<ul>
<li><strong>AIDS tanımı:</strong> CD4 &lt;200 hücre/mm³ <strong>ve/veya</strong> AIDS tanımlayan bir durumun bulunması.</li>
</ul>
<table><caption>AIDS fazında en sık görülenler</caption>
<thead><tr><th>Grup</th><th>Örnek</th></tr></thead>
<tbody>
<tr><td>Fırsatçı enfeksiyon</td><td>Pneumocystis jirovecii pnömonisi (PCP), toksoplazmoz, M. tuberculosis, Mycobacterium avium kompleksi (MAC)</td></tr>
<tr><td>Malignite</td><td>Kaposi sarkomu (HHV-8), lenfoma (EBV ilişkili)</td></tr>
<tr><td>Sistemik</td><td>Erime (wasting) sendromu</td></tr>
</tbody></table>
<h3>CD4 eşiğine göre tipik riskler*</h3>
<ul>
<li><strong>&lt;200:</strong> PCP</li>
<li><strong>&lt;100:</strong> serebral toksoplazmoz, kriptokok menenjiti</li>
<li><strong>&lt;50:</strong> CMV retiniti, dissemine MAC</li>
<li>Tüberküloz her CD4 düzeyinde görülebilir.</li>
</ul>
<p>* Eşik listesi dış kaynak (güncel fırsatçı enfeksiyon kılavuzları).</p>
<div class="hoca"><p>AIDS döneminde CD4 hücreleri çok düştüğü için hasta genellikle bir fırsatçı enfeksiyonla ya da kanserle geliyor: Pneumocystis pnömonisi, lenfoma, Kaposi sarkomu, tüberküloz gibi. Bu tabloları gördüğümüzde hemen HIV testini istememiz gerekiyor. Daha ileri evrede aşırı kilo kaybıyla, yani erime (wasting) tablosuyla da başvurabiliyor.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~36:18</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (AIDS tanımı, en sık fırsatçı enfeksiyon ve kanserler); Mikrobiyoloji (K5) 22. Dış kaynak: CD4 eşikleri</p>`
      }
    ],
    faq: [
      { q: "Klinik latent dönemde virüs gerçekten uyuyor mu?", a: "<p>Hayır. Plazmada viral yük görece düşük ve sabit görünse de lenfoid dokularda replikasyon hızla sürer; CD4 T hücreleri her gün yıkılıp yeniden yapılır. Yapım yıkıma yetişemedikçe CD4 sayısı yıllar içinde azalır.</p>" },
      { q: "Enfekte olmayan CD4 hücreleri neden ölür?", a: "<p>Kronik bağışıklık aktivasyonu nedeniyle aktivasyona bağlı apoptoz, abortif enfeksiyonda piroptoz ve gp120 aracılı sinsityum oluşumu nedeniyle ölürler. Mikrobiyal translokasyon da bu aktivasyonu sürekli besler.</p>" },
      { q: "Neden en sık fırsatçı enfeksiyonlar hücre içi mikroplardır?", a: "<p>Bu mikropların kontrolü Th1 hücrelerinin IFN-γ ile makrofajları aktive etmesine ve CD8 CTL'lere bağlıdır. CD4 kaybında bu eksen çöker; Pneumocystis, toksoplazma, mikobakteriler ve mantarlar kontrol edilemez.</p>" },
      { q: "AIDS'te antikor düzeyi neden yüksek olduğu hâlde enfeksiyon olur?", a: "<p>B hücreleri poliklonal olarak uyarılır ve hipergamaglobulinemi oluşur, ancak CD4 yardımı olmadığı için yeni antijenlere karşı özgül ve işlevsel antikor yanıtı zayıftır. Aşı yanıtları da zayıflar.</p>" },
      { q: "AIDS tanısı nasıl konur?", a: "<p>HIV enfeksiyonu olan kişide CD4 sayısının &lt;200 hücre/mm³ olması ve/veya AIDS tanımlayan bir fırsatçı enfeksiyon veya malignitenin (ör. PCP, Kaposi sarkomu) bulunmasıyla konur.</p>" },
      { q: "ART neden HIV'i tamamen yok edemez?", a: "<p>ART yalnızca aktif replikasyonu durdurur. Dinlenen bellek CD4 T hücrelerine entegre olmuş sessiz provirus (latent rezervuar) ilaçlardan ve bağışıklık sisteminden etkilenmez; tedavi kesilince yeniden aktive olur.</p>" }
    ]
  },
  {
    id: "cd4-hiv",
    group: "HIV / AIDS",
    title: "CD4+ Hücrelerin HIV'deki Yeri ve İlişkisi",
    slides: [
      {
        heading: "CD4 molekülü ve CD4 taşıyan hücreler",
        html: `
<ul>
<li><strong>CD (cluster of differentiation):</strong> hücre yüzeyindeki farklılaşma antijenleri; hücre tiplerini tanımlamada kullanılır.</li>
<li><strong>CD4:</strong> yardımcı T hücresinin eş-reseptörüdür. T hücre reseptörü antijeni tanırken CD4, antijen sunan hücredeki <strong>MHC sınıf II</strong> molekülüne bağlanır ve aktivasyon sinyalini güçlendirir.</li>
<li><strong>CD4 taşıyan hücreler:</strong> yardımcı T hücreleri (en yoğun), monosit/makrofajlar, dendritik hücreler, beyinde mikroglia.</li>
<li>T lenfositlerin yaklaşık <strong>%60'ı CD4+</strong>, %30'u CD8+'dir; <strong>CD4/CD8 ≈ 2</strong>.</li>
</ul>
<div class="key"><p>HIV için CD4 <strong>birincil reseptördür</strong>: gp120 doğrudan CD4'e bağlanır. Virüs bağışıklık sisteminin tam merkezindeki hücreyi hedef alır.</p></div>
<figure class="slide-img"><img src="img/cd4-hiv-2.jpg" alt="Antijen sunan hücrede MHC sınıf II ile CD4 ve MHC sınıf I ile CD8 etkileşimi şeması" loading="lazy"><figcaption>Patoloji (K5) 10 "İmmünopatolojiye giriş", s. 20 — MHC sınıf I/II ile CD8/CD4 T hücre etkileşimi (Robbins'ten)</figcaption></figure>
<div class="hoca"><p>CD4 taşıyan yardımcı T lenfositler ancak MHC sınıf II ile sunulan antijenleri tanıyabilir. CD8 taşıyan sitotoksik T lenfositler ise ancak MHC sınıf I ile sunulan antijenleri tanır. Akılda tutmak için şöyle bir yol var: CD4 ile MHC 2 çarpılınca 8 eder, CD8 ile MHC 1 çarpılınca da 8 eder. Antijen sunan hücreler makrofajlar, dendritik hücreler ve B lenfositlerdir.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 1 (15.09.2023) · ~39:26</p></div>
<p class="src">Kaynak: Drive – Patoloji (K5) 10 "İmmünopatolojiye giriş" (CD4 %60, CD8 %30, MHC II; "AIDS'te enfekte olan hücreler"); Biyokimya 5 (CD tanımı, CD4/CD8 &gt;2); Klinik (K5) "HIV enfeksiyonu…" (gp120–CD4)</p>`
      },
      {
        heading: "CD4+ yardımcı T hücrelerinin normal görevi",
        html: `
<ul>
<li>Antijen sunan hücreden 3 sinyal alır: <strong>antijen + MHC II</strong> (sinyal 1), <strong>eş-uyarıcı</strong> (sinyal 2), <strong>yönlendirici sitokin</strong> (sinyal 3) → çoğalır ve alt gruplara farklılaşır.</li>
</ul>
<table><caption>CD4+ T hücre alt grupları</caption>
<thead><tr><th>Alt grup</th><th>Sitokin</th><th>Görev</th></tr></thead>
<tbody>
<tr><td>Th1</td><td>IFN-γ, IL-2, TNF</td><td>Makrofaj aktivasyonu, hücresel immünite, gecikmiş tip aşırı duyarlılık; M. tuberculosis'e karşı</td></tr>
<tr><td>Th2</td><td>IL-4, IL-5, IL-13</td><td>Antikor yanıtı, eozinofil, helmint ve alerji</td></tr>
<tr><td>Th17</td><td>IL-17, IL-22</td><td>Nötrofil çağırma; bakteri ve mantar; mukozal bariyer</td></tr>
<tr><td>Tfh</td><td>IL-21</td><td>Germinal merkezde B hücresine yardım, yüksek afiniteli antikor</td></tr>
<tr><td>Treg</td><td>TGF-β, IL-10</td><td>İnflamasyonu ve otoimmüniteyi baskılama</td></tr>
</tbody></table>
<div class="key"><p>CD4 hücresi; B hücresini (antikor), CD8 CTL'yi (virüslü hücre öldürme) ve makrofajı (hücre içi mikrop öldürme) yöneten <strong>orkestra şefidir</strong>. Şef kaybolunca hem hücresel hem hümoral bağışıklık çöker.</p></div>
<figure class="slide-img"><img src="img/cd4-hiv-1.jpg" alt="Antijen sunan hücre ile CD4 yardımcı T hücresi etkileşimi ve hücresel ile hümoral yanıtın başlaması" loading="lazy"><figcaption>Histoloji 1 "Kan hücreleri gelişmesi ve histolojisi", s. 56 — yardımcı T hücresi (CD4+) ile CD8 ve B lenfosit uyarımı</figcaption></figure>
<figure class="slide-img"><img src="img/cd4-hiv-3.jpg" alt="Naif CD4 T hücresinin antijen, eş-reseptör ve sitokin sinyalleriyle yardımcı T hücresine dönüşmesi" loading="lazy"><figcaption>Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli", s. 19 — CD4+ naif hücrenin 3 sinyalle aktivasyonu</figcaption></figure>
<figure class="slide-img"><img src="img/cd4-hiv-4.jpg" alt="T yardımcı alt grupları: Th1, Th2, Th17, Treg, Tfh, Th9, Th22" loading="lazy"><figcaption>Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli", s. 20 — T helper alt grupları</figcaption></figure>
<div class="hoca"><p>Yardımcı T lenfositler "herkese yardımcı" demiştim. Salgıladıkları sitokinlerle hem sitotoksik T lenfositlerin hem B lenfositlerin hem de doğal öldürücü hücrelerin daha çok aktive olmasını sağlarlar. B lenfosit yardımcı T sitokini olmadan da aktive olabilir, ama bu sitokinlerle aktivasyon daha da artar.</p><p>Yardımcı T lenfositin aktive olması için yalnızca reseptörünün antijen sunan hücredeki antijene bağlanması yetmez. İki şey daha gerekir: antijen sunan hücrenin salgıladığı sitokinler ve antijenik olmayan yapılar arasındaki bir etkileşim (ko-stimülasyon). Hepsi birlikte olursa yardımcı T aktive olur. Düzenleyici T lenfositler ise hem yardımcı hem sitotoksik T lenfositler üzerine baskılayıcı etki gösterir.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 1 (15.09.2023) · ~30:15</p></div>
<p class="src">Kaynak: Drive – Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli" (sinyal I-II-III, Th alt grupları); Histoloji 1 (CD4–ASH etkileşimi, CD8 ve B uyarımı); Patoloji (K5) 10 (Th1/Th2 sitokinleri). Tfh'de IL-21: dış kaynak (Abbas)</p>`
      },
      {
        heading: "HIV CD4 hücresini neden seçer?",
        html: `
<ul>
<li><strong>Giriş kapısı:</strong> gp120 CD4'e, ardından CCR5 veya CXCR4'e bağlanır; ikisini birlikte taşıyan hücre hedef olur.</li>
<li><strong>Aktive CD4 hücresi ideal fabrikadır:</strong> virüs transkripsiyonu için NF-κB gibi aktivasyon faktörlerine ihtiyaç duyar. Bağışıklık yanıtı verdikçe CD4 hücresi aktive olur ve daha çok virüs üretir.</li>
<li><strong>Bellek CD4 hücreleri</strong> (özellikle CCR5+ mukozal olanlar) ilk ve en ağır etkilenen gruptur.</li>
<li><strong>Dinlenen bellek CD4 hücreleri</strong> latent rezervuarı oluşturur.</li>
<li>Virüs <strong>Nef</strong> ile CD4'ü hücre yüzeyinden azaltır (süperenfeksiyonu önler, yeni virionların salınımını kolaylaştırır)*.</li>
</ul>
<div class="key"><p>Kısır döngü: Enfeksiyon → bağışıklık aktivasyonu → daha çok aktive CD4 hücresi → daha çok virüs → daha çok CD4 kaybı.</p></div>
<p>* Dış kaynak.</p>
<div class="hoca"><p>AIDS'e neden olan virüs konak hücrenin ölümüne neden olur; bağışıklık sistemi çöker ve kişi yaklaşık on yıl gibi bir sürede ölebilir. Etkilediği hücreler yardımcı T lenfositlerdir. Yardımcı T lenfositin ne yaptığını hatırlayın: sitotoksik T lenfositleri, B lenfositleri ve doğal öldürücü hücreleri aktive ediyordu. Dolayısıyla yardımcı T hücresi etkilenince neredeyse bütün kazanılmış bağışıklık ve doğal bağışıklık elemanları etkilenir ve bağışıklık sistemi baskılanmış olur.</p><p>İlk beş yıl çok fazla belirti vermiyor ama ikinci beş yılda enfeksiyonlar başlıyor, çünkü bağışıklık sistemi baskılanmış durumda. Kilo kaybı ve kanser gelişebiliyor. İlk derste anlatmıştım: bağışıklık sistemi sürekli tarama yapar, kanser hücresini bulup öldürür. Bağışıklığı baskılanmış kişide kansere yakalanma ihtimali de çok artar.</p><p class="src">Hoca: Doç. Dr. Özlem Özsoy · Vücudun enfeksiyona direnci Bölüm II Kısım 2 (15.09.2023) · ~05:40</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu…" (gp120 primer reseptör CD4); Mikrobiyoloji (K5) 22 (CD4 Th hücrelerinde sürekli ilerleyen harabiyet; latent virüsün yıllar sonra etkinleşmesi). Dış kaynak: aktivasyon bağımlılığı, Nef (Robbins; Abbas)</p>`
      },
      {
        heading: "CD4 sayısı: evreleme, prognoz ve izlem",
        html: `
<table><caption>CD4 sayısının klinik anlamı</caption>
<thead><tr><th>CD4 (hücre/mm³)</th><th>Anlamı</th></tr></thead>
<tbody>
<tr><td>~500–1.500*</td><td>Normal erişkin</td></tr>
<tr><td>≥500</td><td>Bağışıklık görece korunmuş (CDC evre 1)*</td></tr>
<tr><td>200–499</td><td>Orta düzey immünsüpresyon (CDC evre 2)*</td></tr>
<tr><td><strong>&lt;200</strong></td><td><strong>AIDS</strong> (CDC evre 3); PCP profilaksisi gerekir</td></tr>
<tr><td><strong>&lt;50</strong></td><td><strong>İleri evre HIV enfeksiyonu</strong>; CMV, MAC riski</td></tr>
</tbody></table>
<ul>
<li><strong>CD4 sayısı:</strong> bağışıklık sisteminin <strong>şu anki hasarını</strong> gösterir → evreleme, fırsatçı enfeksiyon riski, profilaksi kararı.</li>
<li><strong>Viral yük (HIV RNA):</strong> virüsün <strong>çoğalma hızını</strong> gösterir → CD4'ün ne kadar hızlı düşeceğini öngörür, tedavi yanıtını izler.</li>
<li><strong>CD4/CD8 oranı:</strong> normalde ~2; HIV'de &lt;1'e düşer.</li>
</ul>
<div class="note"><p>Benzetme: viral yük "trenin hızı", CD4 sayısı "trenin uçuruma uzaklığı"dır.</p></div>
<p>* Dış kaynak (CDC 2014 HIV evreleme tanımı; standart referans aralığı).</p>
<div class="hoca"><p>CD4 sayısı bağışıklığı gösteren hücre sayısı olarak karşımıza çıkıyor. Normalde 1.400-1.500 civarında. Bazı hastalarda bu sayı 200'ün altına düşer; ya da AIDS tanımlayan durumlardan biri varsa, o zaman AIDS dönemine geldiğini söylüyoruz. Çok aşırı kilo kaybı ve zayıflığın olduğu ileri evrede buna tükenmişlik de denebilir.</p><p class="src">Hoca: Prof. Dr. Dilara İnan · HIV ve Hepatit (Klinik) · ~35:44</p></div>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (CD4 &lt;200 AIDS, &lt;50 ileri evre); Patoloji (K5) 10 ve Biyokimya 5 (CD4/CD8 ≈ 2). Dış kaynak: normal aralık ve CDC evreleri</p>`
      },
      {
        heading: "CD4 kaybından fırsatçı enfeksiyona: bağlantı haritası",
        html: `
<table><caption>Hangi CD4 işlevi kaybolunca ne olur?</caption>
<thead><tr><th>Kaybolan işlev</th><th>Sonuç</th><th>Örnek hastalık</th></tr></thead>
<tbody>
<tr><td>Th1 / IFN-γ ile makrofaj aktivasyonu</td><td>Hücre içi mikrop öldürülemez</td><td>Tüberküloz, MAC, toksoplazmoz, PCP</td></tr>
<tr><td>CD8 CTL'ye yardım</td><td>Virüslü hücre ve onkojenik virüsler kontrol edilemez</td><td>CMV, Kaposi sarkomu (HHV-8), EBV ilişkili lenfoma</td></tr>
<tr><td>B hücresine yardım (Tfh)</td><td>Özgül antikor ve aşı yanıtı zayıf</td><td>Kapsüllü bakteri enfeksiyonları (pnömokok)</td></tr>
<tr><td>Th17 ve mukozal bariyer</td><td>Bağırsak bariyeri bozulur, mantar kontrolü zayıflar</td><td>Mikrobiyal translokasyon, oral/özofageal kandidiyaz</td></tr>
</tbody></table>
<div class="note"><p>ART başlandığında CD4 sayısı yükselir ve fırsatçı enfeksiyon riski azalır. Bu yükselme bağışıklığın kısmen geri kazanıldığını gösterir; ancak çok düşük CD4 ile başlanan tedavide bağışıklık yeniden yapılanma inflamatuvar sendromu (IRIS) gelişebilir*.</p></div>
<p>* Dış kaynak.</p>
<p class="src">Kaynak: Drive – Mikrobiyoloji (K5) 16 (Th1, Th17, CTL görevleri); Mikrobiyoloji (K5) 22 (hücresel defekt → hücre içi organizmalar, T hücre yetmezliğinde kanser); Klinik (K5) "HIV…" (fırsatçı enfeksiyon listesi). Dış kaynak: Th17/kandida ve IRIS (Abbas; klinik kılavuzlar)</p>`
      },
      {
        heading: "Özet tablo: CD4 eşiklerine göre fırsatçı enfeksiyonlar ve profilaksi",
        html: `
<table><caption>CD4 sayısına göre beklenen hastalıklar ve birincil profilaksi</caption>
<thead><tr><th>CD4 (hücre/mm³)</th><th>Bağışıklık durumu</th><th>Tipik enfeksiyon / hastalık</th><th>Birincil profilaksi*</th></tr></thead>
<tbody>
<tr><td><strong>&gt;500</strong></td><td>Görece korunmuş</td><td>Akut retroviral sendrom, persistan jeneralize lenfadenopati; bakteriyel pnömoni, tüberküloz (her düzeyde)</td><td>Latent tüberküloz taraması ve tedavisi; aşılar</td></tr>
<tr><td><strong>200–500</strong></td><td>Orta immünsüpresyon</td><td>Tüberküloz, oral kandidiyaz (pamukçuk), herpes zoster, tekrarlayan bakteriyel pnömoni, Kaposi sarkomu</td><td>—</td></tr>
<tr><td><strong>&lt;200</strong> (AIDS)</td><td>Ağır</td><td><strong>Pneumocystis jirovecii pnömonisi (PCP)</strong>, özofageal kandidiyaz, AIDS tanımlayan lenfoma</td><td><strong>TMP-SMX</strong> (PCP için)</td></tr>
<tr><td><strong>&lt;100</strong></td><td>Çok ağır</td><td><strong>Serebral toksoplazmoz</strong>, kriptokok menenjiti</td><td>Toksoplazma IgG (+) ise TMP-SMX (aynı ilaç iki hastalığı da önler)</td></tr>
<tr><td><strong>&lt;50</strong> (ileri evre)</td><td>Derin</td><td><strong>CMV retiniti</strong>, <strong>dissemine MAC</strong>, primer SSS lenfoması, erime sendromu</td><td>MAC için azitromisin: güncel kılavuzlarda yalnızca ART hemen başlanamıyorsa</td></tr>
</tbody></table>
<div class="key"><p>Tüm profilaksilerin asıl amacı geçicidir: ART ile CD4 sayısı eşiğin üstüne çıkıp kalıcı olarak orada kalırsa profilaksi kesilebilir. Asıl "profilaksi" etkili ART'dir.</p></div>
<p>* Eşik ve profilaksi ayrıntıları Drive'da yok; dış kaynak (NIH/CDC/IDSA erişkin fırsatçı enfeksiyon kılavuzları).</p>
<p class="src">Kaynak: Drive – Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler" (CD4 &lt;200 AIDS, &lt;50 ileri evre; AIDS fazında PCP, toksoplazmoz, TB, MAC, lenfoma, Kaposi sarkomu, wasting; persistan jeneralize lenfadenopati). Dış kaynak: * işaretli kısımlar</p>`
      }
    ],
    faq: [
      { q: "HIV neden özellikle CD4+ hücreleri enfekte eder?", a: "<p>Zarf glikoproteini gp120, CD4 molekülüne özgül olarak bağlanır; CD4 virüsün birincil reseptörüdür. Hücreye girebilmesi için ayrıca CCR5 veya CXCR4 ko-reseptörü gerekir. Bu nedenle CD4 ve ko-reseptör taşıyan yardımcı T hücreleri, makrofajlar ve dendritik hücreler hedeftir.</p>" },
      { q: "CD4 sayısı ile viral yük arasındaki fark nedir?", a: "<p>CD4 sayısı bağışıklık sistemindeki mevcut hasarı gösterir; evreleme ve profilaksi kararında kullanılır. Viral yük virüsün çoğalma hızını gösterir; hastalığın ilerleme hızını öngörür ve tedavinin etkinliğini izler.</p>" },
      { q: "CD4 kaybı neden hem hücresel hem hümoral bağışıklığı bozar?", a: "<p>CD4 hücreleri sitokinleriyle makrofajları (Th1), CD8 CTL'leri ve B hücrelerini (Tfh/Th2) yönetir. Yardımcı T hücreleri azalınca makrofaj aktivasyonu, CTL yanıtı ve özgül antikor üretimi birlikte zayıflar.</p>" },
      { q: "CD4/CD8 oranı HIV'de neden tersine döner?", a: "<p>CD4 hücreleri virüs ve aktivasyona bağlı ölümle azalırken, kronik aktivasyon ve virüse karşı yanıt nedeniyle CD8 hücreleri çoğu zaman artar. Normalde ~2 olan oran 1'in altına düşer.</p>" },
      { q: "CD4 sayısı 150/mm³ olan hasta için ne söylersiniz?", a: "<p>CD4 &lt;200 olduğu için bu hasta AIDS evresindedir. Pneumocystis pnömonisi riski yüksektir ve profilaksi gerekir; antiretroviral tedavi hemen başlanmalı, eşlik eden fırsatçı enfeksiyonlar araştırılmalıdır.</p>" }
    ]
  }
];
