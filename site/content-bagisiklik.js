// Extra topic "bagisiklik" kept in its own file so content.js can be edited in parallel.
// Inserted into window.TOPICS right after "akut-faz"; app.js derives groups/numbering from the array order.
(function () {
  var V8 = "Ders videosu: 8-Vücudun enfeksiyona direnci, Bölüm II Kısım 1 (15.09.2023)";
  var V9 = "Ders videosu: 9-Vücudun enfeksiyona direnci, Bölüm II Kısım 2 (15.09.2023)";
  function hoca(text, video, time) {
    return '<div class="hoca">' + text + '<p class="src">Hoca: Doç. Dr. Özlem Özsoy · ' + video + ' · ' + time + '</p></div>';
  }
  var F8 = 'Fizyoloji 8 "Vücudun enfeksiyona direnci: Kazanılmış bağışıklık ve allerji -1"';
  var F9 = 'Fizyoloji 9 "Vücudun enfeksiyona direnci: Kazanılmış bağışıklık ve allerji -2"';

  var topic = {
    id: "bagisiklik",
    group: "Bağışıklık Sistemi",
    title: "Bağışıklık Sisteminin Yapısı ve İşleyişi",
    slides: [
      {
        heading: "Doğal ve kazanılmış bağışıklık",
        html:
'<ul>' +
'<li><strong>Bağışıklık sistemi:</strong> birbiriyle anatomik bağlantısı olmayan, kana ve tüm dokulara yayılmış hücreler, bu hücrelerin iletişimini sağlayan sitokinler ve lenfoid organlardan oluşan savunma sistemi.</li>' +
'<li>Görevleri: mikroorganizmaları yok etmek, yaşlanmış hücreleri ortadan kaldırmak, <strong>kanser hücrelerini taramak ve yok etmek</strong>, diğer yabancı maddeleri temizlemek.</li>' +
'<li>İki kol <strong>birbirini izleyerek ve birlikte</strong> çalışır. Sağlıklı bir bağışıklık sistemi yalnızca yabancı/zararlı yapılara saldırır.</li>' +
'</ul>' +
'<table><caption>Doğal ve kazanılmış (özgül) bağışıklığın karşılaştırması</caption>' +
'<thead><tr><th>Özellik</th><th>Doğal (doğuştan, nonspesifik, innate)</th><th>Kazanılmış (özgül, adaptif)</th></tr></thead><tbody>' +
'<tr><td>Ne zaman var?</td><td>Doğumdan itibaren</td><td>Antijenle karşılaştıkça sonradan kazanılır</td></tr>' +
'<tr><td>Hız</td><td>Hızlı (dakikalar–saatler)</td><td>Yavaş (ilk karşılaşmada günler; yanıt ~2–3 haftada tamamlanır)</td></tr>' +
'<tr><td>Tanıma</td><td>Mikrop gruplarında ortak <strong>karbonhidrat ve lipit</strong> yapılar (PAMP); patern tanıyan reseptörler (Toll benzeri reseptörler vb.)</td><td>Her mikroba <strong>özgül protein antijen</strong>; B ve T hücre reseptörleri</td></tr>' +
'<tr><td>Reseptör çeşitliliği</td><td>Sınırlı, kalıtsal olarak sabit</td><td>Çok büyük (~100 milyon farklı reseptör); V(D)J rekombinasyonu ile oluşur</td></tr>' +
'<tr><td>Bellek</td><td>Yok</td><td>Var: ikinci karşılaşmada daha hızlı ve güçlü yanıt</td></tr>' +
'<tr><td>Hücreler</td><td>Nötrofil, monosit/makrofaj, dendritik hücre, eozinofil, bazofil/mast, <strong>NK hücresi</strong></td><td>B ve T lenfositler (ve ürünleri: antikorlar, sitokinler)</td></tr>' +
'<tr><td>Hümoral elemanlar</td><td>Kompleman, akut faz proteinleri (CRP), interferonlar, lizozim</td><td>Antikorlar (immünglobulinler)</td></tr>' +
'<tr><td>Engeller</td><td>Deri, mukoza, mukus, mide asidi, normal flora, öksürük-hapşırık refleksi</td><td>—</td></tr>' +
'</tbody></table>' +
'<div class="key"><p>İki kol iç içedir: antikorlar doğal bağışıklığın fagositlerini (opsonizasyon), komplemanını ve NK hücrelerini güçlendirir; makrofaj ve dendritik hücreler ise antijeni lenfositlere sunarak kazanılmış yanıtı başlatır. Hocanın vurgusu: özgül sistem yabancı ajanın <strong>yüzeyindeki özgül proteinleri</strong> tanıyan B ve T lenfositlerin aktive olup <strong>sayılarını artırmasıyla</strong> çalışır ve iki sistem de vücudun kendi hücrelerine zarar vermez.</p></div>' +
hoca('<p>"Doğal bağışıklık yabancı yapıları yüzeylerindeki özgül proteinlerden değil, karbonhidrat ve lipit yapılarından tanır. Özgül bağışıklık ise ancak yabancı ajanla karşılaştıktan sonra devreye girer; daha geç ve daha yavaş etkilidir. İkisi beraber çalışır ve vücudun kendi hücrelerine zarar vermez."</p>', V8, '00:52–01:42') +
'<figure class="slide-img"><img src="img/bagisiklik-11.jpg" alt="Doğal ve özgül bağışıklığın karşılaştırıldığı slayt" loading="lazy"><figcaption>' + F8 + ', s. 3 — doğal ve özgül (kazanılmış) bağışıklık</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 3, 18; Fizyoloji 6 s. 5–12, 28–30 ve Fizyoloji 7 (doğal bağışıklık mekanizmaları); Mikrobiyoloji (K5) 14 "Doğal immün yanıt, antijen tanıyan molekülleri ve mukozal immünite" (PAMP, Toll benzeri reseptörler); Patoloji (K5) 10 "İmmünopatolojiye giriş"</p>' +
'<p class="src">Video: ' + V8 + ' · 00:52–01:42</p>'
      },
      {
        heading: "Lenfoid organlar ve lenfosit trafiği",
        html:
'<table><caption>Primer ve sekonder lenfoid organlar</caption>' +
'<thead><tr><th></th><th>Primer (merkezi) lenfoid organlar</th><th>Sekonder (periferik) lenfoid organlar</th></tr></thead><tbody>' +
'<tr><td>Organlar</td><td><strong>Kemik iliği</strong> (B lenfosit), <strong>timus</strong> (T lenfosit)</td><td>Lenf düğümleri, dalak, mukoza ile ilişkili lenfoid doku (MALT): adenoidler, tonsiller, Peyer plakları, apendiks</td></tr>' +
'<tr><td>Görev</td><td><strong>Olgunlaşma</strong>: reseptör organizasyonu, hangi antijene yanıt verileceği burada belirlenir</td><td><strong>Etkinleşme</strong>: yabancı antijenle karşılaşma, klonal çoğalma, antikor ve efektör hücre üretimi</td></tr>' +
'</tbody></table>' +
'<ul>' +
'<li>Lenfositlerin büyük çoğunluğu herhangi bir anda lenfoid organlardadır; kanda yalnızca küçük bir kısmı bulunur.</li>' +
'<li>Kandaki lenfositler: (1) kemik iliği veya timustan çıkıp sekonder organlara giden yeni lenfositler, (2) sekonder organlar–lenf–kan–dokular arasında dolaşan hücreler.</li>' +
'<li><strong>Lenfositler lenf, doku ve kan arasında sürekli dolaşır.</strong> Granülosit ve monositler ise bir kez dokuya geçince geri dönmez (orada kalır veya ölür).</li>' +
'<li>GALT (bağırsak ilişkili lenfoid doku) vücudun en büyük lenfoid dokusudur; lenfositlerin yaklaşık 3/4\'ü mukozal bölgelerdedir. HIV\'in ilk haftalarda en ağır hasarı burada yapmasının nedeni budur.</li>' +
'</ul>' +
'<div class="note"><p>"Lenfatik sistem" (lenf sıvısı, lenf damarları, lenf düğümleri) ile "lenfoid organ" farklı kavramlardır; ortak noktaları yalnızca lenf düğümleridir.</p></div>' +
hoca('<p>"Primer lenfoid organlarda, yani kemik iliği ve timusta B ve T lenfositler olgunlaşır; hangi ajana cevap verecekleri aslında bu sırada belirlenmiş olur. Sonra sekonder lenfoid organlara gelirler ve tamamen kendilerine özgü antijenin vücuda alınacağı günü beklerler. Granülositler ve monositler dokuya geçtikten sonra tekrar kana dönemez; oysa lenfositler kan ve doku arasında sürekli dolaşır."</p>', V8, '04:38–08:26') +
'<figure class="slide-img"><img src="img/bagisiklik-1.jpg" alt="Primer ve sekonder lenfoid organların vücuttaki yerleri" loading="lazy"><figcaption>' + F8 + ', s. 7 — lenfoid organlar</figcaption></figure>' +
'<figure class="slide-img"><img src="img/bagisiklik-2.jpg" alt="Kemik iliği ve timusta olgunlaşma, sekonder lenfoid organlarda antijenle aktivasyon şeması" loading="lazy"><figcaption>' + F8 + ', s. 10 — lenfoid organlar ve lenfopoez: olgunlaşma ve aktivasyon</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 6–10; Mikrobiyoloji (K5) 14 (MALT, GALT, mukozal lenfositlerin oranı); Patoloji (K5) 10 (ilgili organlar)</p>' +
'<p class="src">Video: ' + V8 + ' · 04:38–08:26</p>'
      },
      {
        heading: "Antijen, klon ve reseptör çeşitliliği",
        html:
'<ul>' +
'<li><strong>Antijen (immünojen = "antikor jeneratörü"):</strong> konağın kendisinden kabul etmediği ve kendisine ya da taşıyan hücreye karşı özgül bağışıklık yanıtı başlatan molekül. Genellikle proteindir.</li>' +
'<li>Örnekler: polenler, toksinler, virüslerin protein kılıfları, yabancı hücre yüzeyindeki özgül proteinler, kanser hücreleri, transplant hücreleri.</li>' +
'<li>Ders anlatımındaki örnekler: bahar nezlesi olan kişide <strong>polen</strong> antijen gibi davranır ve antikor üretimini başlatır (hapşırma, burun akıntısı). <strong>Kanser hücreleri</strong> de antijenik yapı gösterir ve özellikle T lenfositler bunları yok etmeye çalışır. <strong>Nakil</strong> için en uyumlu doku bulunsa bile vücut onu yine dışarıdan alınmış bir yapı olarak tanıyabilir ve reddedebilir.</li>' +
'<li><strong>Lenfosit klonu:</strong> tek bir lenfositten köken alan, aynı reseptörü taşıyan ve aynı antijene yanıt veren hücre topluluğu. Vücutta milyonlarca farklı klon vardır; özgül antijenle karşılaşana kadar lenfoid dokuda sessiz kalırlar.</li>' +
'<li><strong>Klonal seçilim:</strong> antijen yalnızca kendi reseptörüne uyan klonu aktive eder; o klon çoğalır (klonal genişleme).</li>' +
'<li><strong>Çeşitlilik nasıl oluşur?</strong> İnsan genomunda Ig kodlayan yalnızca ~200 gen bulunur. B lenfositlerde kemik iliğinde, T lenfositlerde timusta DNA küçük segmentlere kesilir, yeniden düzenlenir ve birleştirilir (<strong>V(D)J rekombinasyonu</strong>). Böylece ~100 milyon farklı reseptör oluşur.</li>' +
'</ul>' +
'<table><caption>B ve T hücre reseptörlerinin karşılaştırması</caption>' +
'<thead><tr><th>Özellik</th><th>B hücre reseptörü (BCR)</th><th>T hücre reseptörü (TCR)</th></tr></thead><tbody>' +
'<tr><td>Yapı</td><td>İmmünglobulin (membrana bağlı antikor)</td><td>Protein (kök kısmı zara sıkıca bağlı)</td></tr>' +
'<tr><td>Oluştuğu yer</td><td>Kemik iliği</td><td>Timus</td></tr>' +
'<tr><td>Antijene bağlanma</td><td><strong>Doğrudan</strong> (serbest antijeni tanır)</td><td><strong>Aracı yüzey proteinleri ile</strong>: yalnızca MHC ile sunulan peptidi tanır</td></tr>' +
'<tr><td>Bağlama kapasitesi</td><td>Aynı tip 2 antijen</td><td>Tek antijen</td></tr>' +
'</tbody></table>' +
hoca('<p>"Klon, aynı tipteki hücre topluluğu demek; o topluluğun hepsi aynı antijene cevap verir. Vücuda yuvarlak şekilli bir antijen girdiyse yalnızca o antijene uyan reseptörü taşıyan klon aktive olur ve sayısını artırır."</p>', V8, '09:28–09:43, 17:13–17:51') +
hoca('<p>"İnsan genomunda Ig kodlayan gen sayısı sınırlı; milyonlarca farklı antijeni tanıyabilmemizin mekanizması V(D)J rekombinasyonu. B ve T lenfositlerin olgunlaşması dediğim aslında bu: DNA\'ları parçalara ayrılıyor ve milyonlarca farklı kombinasyonla birleştiriliyor."</p>', V8, '18:12–19:23') +
'<figure class="slide-img"><img src="img/bagisiklik-4.jpg" alt="Farklı reseptörlü lenfosit klonları ve antijenle seçilen klonun çoğalması" loading="lazy"><figcaption>' + F8 + ', s. 15 — milyonlarca değişik lenfosit klonu ve klonal seçilim</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 5, 15–20, 39; Mikrobiyoloji (K5) 18 "Antijen, antijen sunumu ve HLA" (dosya adı)</p>' +
'<p class="src">Video: ' + V8 + ' · 01:52–04:33 (antijen ve örnekleri), 09:28–09:43 (klon), 17:13–17:51 (klonal seçilim), 18:12–19:23 (V(D)J rekombinasyonu), 21:27–22:37 (BCR ve TCR farkı)</p>'
      },
      {
        heading: "Antijen sunumu ve MHC",
        html:
'<ul>' +
'<li>T lenfosit reseptörü antijene <strong>doğrudan bağlanamaz</strong>. Antijen, <strong>antijen sunan hücre (APC)</strong> tarafından parçalanır ve peptitleri <strong>MHC proteinleriyle</strong> hücre yüzeyine taşınır ("paketleme").</li>' +
'<li><strong>Profesyonel APC\'ler:</strong> makrofajlar, dendritik hücreler, B lenfositler. B lenfosit, yuttuğu yabancı ajanı küçük parçalara ayırıp MHC ile yüzeyine çıkararak yardımcı T hücresine sunabilir.</li>' +
'<li><strong>MHC (major histocompatibility complex) = insanda HLA:</strong> 6. kromozomun kısa kolundaki çok polimorfik gen bölgesi; kişiye özgüdür, doku reddinden sorumlu en önemli antijen sistemidir.</li>' +
'</ul>' +
'<table><caption>MHC sınıf I ve sınıf II</caption>' +
'<thead><tr><th>Özellik</th><th>MHC sınıf I (HLA-A, -B, -C)</th><th>MHC sınıf II (HLA-DR, -DP, -DQ)</th></tr></thead><tbody>' +
'<tr><td>Bulunduğu hücre</td><td>Çekirdekli tüm hücreler ve trombositler (eritrositlerde yok)</td><td>APC\'ler: B lenfosit, makrofaj, dendritik hücre (IFN-γ etkisiyle bazı diğer hücreler)</td></tr>' +
'<tr><td>Sunduğu antijen</td><td>Hücre içinde üretilen proteinler (virüs, tümör)*</td><td>Hücre dışından alınıp parçalanan proteinler (bakteri, toksin)*</td></tr>' +
'<tr><td>Tanıyan T hücresi</td><td><strong>CD8+</strong> sitotoksik T</td><td><strong>CD4+</strong> yardımcı T</td></tr>' +
'<tr><td>Sonuç</td><td>Hücre öldürülür</td><td>Th aktive olur, sitokin salgılar</td></tr>' +
'</tbody></table>' +
'<p>* Endojen/ekzojen antijen ayrımı Drive slaytlarında yok; dış kaynak (Abbas Temel İmmünoloji).</p>' +
'<h3>Yardımcı T hücresinin aktivasyonu için üç sinyal</h3>' +
'<ol><li><strong>Sinyal 1:</strong> MHC II + antijen peptidi ↔ TCR (CD4 eş-reseptörü ile)</li>' +
'<li><strong>Sinyal 2 (eş-uyarı, kostimülasyon):</strong> antijen olmayan yüzey proteinleri arasında etkileşim (APC\'de B7 ↔ T hücresinde CD28)</li>' +
'<li><strong>Sinyal 3:</strong> APC\'nin salgıladığı sitokinler (IL-1, TNF-α)</li></ol>' +
hoca('<p>"CD4 taşıyan yardımcı T hücreleri yalnızca MHC II ile sunulan antijeni, CD8 taşıyan sitotoksik T hücreleri yalnızca MHC I ile sunulanı tanıyabilir. Şöyle aklınızda tutun: ikisinin de çarpımı 8 yapıyor; 4 × 2 = 8, 8 × 1 = 8."</p>', V8, '39:35–40:08') +
hoca('<p>"Yardımcı T hücresinin aktive olması için sunulan antijenle kendi reseptörünün eşleşmesi yetmiyor. Bir de antijen sunan hücrenin salgıladığı sitokinler, bir de antijen olmayan yapılar arasındaki etkileşim gerekiyor. Ancak bunlarla birlikte yardımcı T hücresi aktive oluyor."</p>', V8, '31:13–31:46') +
'<figure class="slide-img"><img src="img/bagisiklik-9.jpg" alt="Antijen sunan hücre ile T hücresi arasında üç sinyal: MHC-TCR, B7-CD28 ve sitokinler" loading="lazy"><figcaption>' + F8 + ', s. 46 — Th hücrelerinin aktivasyonu için gerekli üç uyaran</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 40–46; ' + F9 + ' s. 18 (HLA); Patoloji (K5) 10 "İmmünopatolojiye giriş" (MHC sınıfları, 6. kromozom); Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli" (sinyal I–III)</p>' +
'<p class="src">Video: ' + V8 + ' · 29:22–30:33 (B lenfositin antijen sunması, MHC), 31:13–31:46 ve 32:30–32:48 (Th aktivasyonu için üç koşul), 39:11–39:20 (APC\'ler), 39:35–40:08 (CD4–MHC II, CD8–MHC I)</p>'
      },
      {
        heading: "T lenfositler ve NK hücreleri",
        html:
'<ul>' +
'<li>Timusta ön işlemden geçip sekonder lenfoid organlara yerleşir; <strong>hücresel bağışıklıktan</strong> sorumludur. Antijene yanıtı <strong>hücrenin kendisi</strong> verir; klon ve bellek T hücreleri oluşturur.</li>' +
'<li><strong>CD4+ yardımcı T (T4, Th):</strong> MHC II ile sunulan antijenle aktifleşir; salgıladığı sitokinlerle B lenfositleri, sitotoksik T hücrelerini ve doğal bağışıklık hücrelerini (NK, makrofaj) aktive eder.</li>' +
'<li><strong>CD8+ sitotoksik T (T8, CTL):</strong> MHC I ile sunulan antijenle aktifleşir; <strong>doğrudan öldürücü</strong> hücredir: <strong>perforin</strong> hedef hücre zarında delik açar, <strong>granzimler</strong> bu delikten girip apoptozu başlatır. Hedefler: kanser hücreleri, virüsle enfekte hücreler, nakil hücreleri. Hocanın anlatımıyla: önce yabancı hücrenin üzerinde delik açar, sonra bu deliğin içine enzimlerini bırakarak patojeni öldürür.</li>' +
'<li>Yardımcı T sitokinleri olmadan da B lenfositler aktive olabilir; ancak bu sitokinler sayesinde aktivasyon çok daha güçlü olur.</li>' +
'<li><strong>Düzenleyici (regülatör, supresör) T (Treg):</strong> CD4+CD25+Foxp3+; hem yardımcı hem sitotoksik T hücrelerini baskılar, aşırı reaksiyonu ve otoimmüniteyi önler.</li>' +
'<li><strong>NK hücresi:</strong> TCR veya Ig reseptörü <strong>yoktur</strong>; kendine özgü yüzey proteinleri taşır (<strong>CD16, CD56</strong>). Antijene özgül olmadan, CTL gibi perforin-granzimle kanserli ve virüslü hücreleri öldürür. Th ve makrofajlardan gelen IL-2 ve IFN-γ ile aktive olur; antikorla kaplı hedefleri Fc reseptörü (CD16) ile tanır (ADCC).</li>' +
'</ul>' +
'<table><caption>CD4+ yardımcı T hücre alt grupları</caption>' +
'<thead><tr><th>Alt grup</th><th>Yönlendiren sitokin</th><th>Salgıladığı</th><th>Görev</th><th>HIV\'de kaybı ne yapar?</th></tr></thead><tbody>' +
'<tr><td><strong>Th1</strong></td><td>IL-12, IL-18</td><td>IFN-γ, IL-2, TNF</td><td>Makrofaj aktivasyonu, hücresel immünite, gecikmiş tip aşırı duyarlılık; M. tuberculosis</td><td>Hücre içi mikroplar (TB, Pneumocystis, toksoplazma) kontrol edilemez</td></tr>' +
'<tr><td><strong>Th2</strong></td><td>IL-4</td><td>IL-4, IL-5, IL-13</td><td>Antikor yanıtı, eozinofil olgunlaşması, alerji, helmintlere karşı yanıt</td><td>Özgül antikor yanıtı zayıflar</td></tr>' +
'<tr><td><strong>Th17</strong></td><td>IL-1, IL-6, IL-23, TGF-β</td><td>IL-17, IL-22</td><td>Nötrofil kemotaksisi; bakteri ve mantar enfeksiyonları; mukozal bariyer; otoimmünitede doku hasarı</td><td>Mukozal bariyer bozulur, kandida enfeksiyonları</td></tr>' +
'<tr><td><strong>Treg</strong></td><td>IL-2, TGF-β</td><td>TGF-β, IL-10, IL-35</td><td>İmmün regülasyon, inflamasyonun baskılanması</td><td>Denge bozulur, kronik bağışıklık aktivasyonuna katkı</td></tr>' +
'<tr><td><strong>Tfh</strong>*</td><td>IL-6, IL-21</td><td>IL-21</td><td>Germinal merkezde B hücresine yardım, yüksek afiniteli antikor</td><td>Aşı yanıtları zayıflar</td></tr>' +
'</tbody></table>' +
'<p>* Tfh satırının sitokin bilgisi dış kaynak (Abbas); Mikrobiyoloji 16 slaytında yalnızca adı geçer.</p>' +
hoca('<p>"T lenfositler üçe ayrılır: sitotoksik yani öldürücü T lenfositler, yardımcı T lenfositler ve düzenleyici, diğer adıyla regülatör ya da supresör T lenfositler. Sitotoksikler CD8 eksprese ettikleri için T8, yardımcılar CD4 eksprese ettikleri için T4 diye de adlandırılır. Yardımcı T lenfosit herkese yardımcı oluyor: salgıladığı sitokinlerle hem sitotoksik T lenfositlerin, hem B lenfositlerin, hem doğal katil hücrelerin daha fazla aktive olmasını sağlıyor. Düzenleyiciler ise diğer ikisini baskılıyor ki aşırı bir etki ortaya çıkmasın."</p>', V8, '14:24–15:45') +
hoca('<p>"Doğal katil hücrelerin yüzeyinde antijen reseptörü yok; nonspesifik cevap veriyorlar, zaten bu yüzden doğal bağışıklık elemanı sayılıyorlar. Yüzeylerinde CD16, CD56 gibi proteinler var. Sitotoksik T hücreleri gibi enzimlerini yabancı hücrenin üzerine boşaltıp onu yok ediyorlar."</p>', V8, '13:37–14:16, 41:44–42:23') +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 13, 38–51; Mikrobiyoloji (K5) 16 "Kazanılmış immün yanıtın hücresel temeli" (Th alt grupları, CTL öldürme mekanizması); Patoloji (K5) 10 (CD4 %60, CD8 %30, NK belirteçleri). CD4 hücreleri ayrıntısı için "CD4+ Hücrelerin HIV\'deki Yeri" bölümüne bakın.</p>' +
'<p class="src">Video: ' + V8 + ' · 13:37–14:16 (NK hücreleri), 14:24–15:45 (T lenfosit tipleri), 30:59–31:10 (Th sitokinleri ve B aktivasyonu), 40:54–41:17 (CTL\'nin öldürme şekli ve hedefleri), 41:44–42:23 (NK yüzey proteinleri, perforin-granzim)</p>'
      },
      {
        heading: "B lenfositler ve antikorlar",
        html:
'<ul>' +
'<li>Kemik iliğindeki ön işlemden sonra sekonder lenfoid organlara yerleşir; <strong>hümoral bağışıklıktan</strong> sorumludur. Antijene yanıtı <strong>hücrenin kendisi değil, salgıladığı antikorlar</strong> verir.</li>' +
'<li>Antijenle aktive olan B klonu çoğalır, <strong>plazma hücresine</strong> dönüşür ve <strong>ana hücrenin reseptörüyle aynı yapıdaki</strong> antikoru salgılar; bir kısmı <strong>bellek B hücresi</strong> olarak kalır. B hücreleri aynı zamanda APC\'dir.</li>' +
'<li><strong>Antikor yapısı:</strong> 2 ağır + 2 hafif zincir. <strong>Fv / Fab (değişken)</strong> kısım antijeni bağlar ve her antikor için farklıdır; <strong>Fc (sabit, "kök")</strong> kısım aynı sınıfta aynıdır, fagosit ve NK reseptörlerine ve komplemana bağlanır. Membrana yerleşirse <strong>reseptör</strong>, hücreden salgılanırsa <strong>antikor</strong> adını alır.</li>' +
'</ul>' +
'<table><caption>İmmünglobulin sınıfları</caption>' +
'<thead><tr><th>Sınıf</th><th>Yapı</th><th>Yer</th><th>Öne çıkan özellik</th></tr></thead><tbody>' +
'<tr><td><strong>IgG</strong></td><td>Monomer</td><td>Plazma (antikorların %75–85\'i)</td><td><strong>Plasentayı geçer</strong> (yenidoğanın geçici bağışıklığı); <strong>sekonder yanıtın</strong> ana antikoru; komplemanı bağlar; Rh sistemindeki anti-D IgG\'dir (yenidoğanın hemolitik hastalığı)</td></tr>' +
'<tr><td><strong>IgM</strong></td><td>Monomer (B hücre reseptörü) veya pentamer (plazma)</td><td>Plazma, B hücre zarı</td><td><strong>Primer yanıtın</strong> ilk antikoru; en büyük; 10 bağlanma bölgesi, güçlü aglütinasyon; komplemanı bağlar; ABO\'daki anti-A ve anti-B IgM\'dir; plasentayı geçemez</td></tr>' +
'<tr><td><strong>IgA</strong></td><td>Plazmada monomer; salgılarda dimer (sekretuar IgA)</td><td>Mukus, tükürük, gözyaşı, süt, bağırsak salgıları</td><td>Patojenin epitele yapışmasını ve dokuya girişini engeller; mukozal bağışıklığın ana antikoru</td></tr>' +
'<tr><td><strong>IgE</strong></td><td>Monomer</td><td>Tonsiller, deri, mukoza; mast hücresi ve bazofil yüzeyi</td><td>Mast hücresi ve bazofilden histamin salınımı → <strong>alerji</strong>; eozinofilleri parazit bölgesine çeker</td></tr>' +
'<tr><td><strong>IgD</strong></td><td>Monomer</td><td>B lenfosit zarı</td><td>Antijen reseptörü</td></tr>' +
'</tbody></table>' +
'<h3>Antikorlar nasıl koruma sağlar?</h3>' +
'<ol><li><strong>Opsonizasyon:</strong> Fc kısmı fagositlerin Fc reseptörüne bağlanır → fagositoz kolaylaşır.</li>' +
'<li><strong>Kompleman aktivasyonu (klasik yol):</strong> tetiği çeken antijen-antikor birleşmesidir; kompleman sistemi böylece kazanılmış bağışıklığa da bağlanır → membran atak kompleksi patojende delik açar, içeri su girer ve liziz olur; C3b ile opsonizasyon.</li>' +
'<li><strong>Antikora bağımlı hücresel sitotoksisite (ADCC):</strong> NK hücresinin Fc reseptörü antikora bağlanır, toksik kimyasallar salar.</li>' +
'<li><strong>Doğrudan etki (zayıf):</strong> aglütinasyon, presipitasyon, nötralizasyon, liziz.</li></ol>' +
hoca('<p>"B hücre reseptörü, B hücresinin plazma hücresine dönüştükten sonra salgıladığı antikorla aynı yapıda; immünglobulin yapısında. İki ağır, iki hafif zincirden oluşuyor. Antijeni bağlayan kısım değişken (variable) fragman; kuyruk dediğimiz kısım ise bütün reseptörlerde ya da antikorlarda aynı yapıda, sabit (constant) bölge."</p>', V8, '23:00–24:40') +
hoca('<p>"IgA mukus, tükürük, gözyaşı ya da bağırsak salgılarında bulunur. IgD B lenfositinin yüzeyindeki reseptördür. Alerjiden sorumlu olan IgE\'dir. Rh kan grubundaki antikorlar IgG\'dir. IgM \'mega\'dan gelir, daha büyük yapıdadır; anti-A ve anti-B antikorları IgM\'dir. Plasentadan geçebilen IgG\'dir, IgM geçemez; Rh uyuşmazlığının yenidoğanda sorun yaratmasının nedeni budur."</p>', V8, '25:58–27:28 (transkriptteki harf hataları slayta göre düzeltildi)') +
'<figure class="slide-img"><img src="img/bagisiklik-5.jpg" alt="B lenfosit reseptörü ve antikorun ağır zincir, hafif zincir, Fv ve Fc bölgeleri" loading="lazy"><figcaption>' + F8 + ', s. 23 — B lenfosit reseptörü / immünglobulin yapısı</figcaption></figure>' +
'<figure class="slide-img"><img src="img/bagisiklik-8.jpg" alt="Antikorun kompleman sistemini klasik yoldan aktive etmesi" loading="lazy"><figcaption>' + F8 + ', s. 33 — antikorlar kompleman sistemini aktive ederek koruma sağlar</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 22–25, 29, 31–37; Mikrobiyoloji (K5) 14 (sekretuar IgA ve mukozal bağışıklık); Mikrobiyoloji (K5) 17 "Kazanılmış immün yanıtın hümoral temeli" (dosya adı)</p>' +
'<p class="src">Video: ' + V8 + ' · 16:31–16:52 (nötralizasyon, opsonizasyon), 23:00–24:40 (reseptör/antikor yapısı), 24:48–25:21 (klonlar ve plazma hücresi), 25:58–27:28 (Ig sınıfları), 34:25–38:19 (antikorların koruma yolları)</p>'
      },
      {
        heading: "Hümoral ve hücresel yanıt; birincil ve ikincil yanıt",
        html:
'<table><caption>Hümoral ve hücresel bağışıklığın karşılaştırması</caption>' +
'<thead><tr><th>Özellik</th><th>Hümoral bağışıklık</th><th>Hücresel bağışıklık</th></tr></thead><tbody>' +
'<tr><td>Hücre</td><td>B lenfosit → plazma hücresi</td><td>T lenfosit (CD8 CTL; CD4 Th1 ile aktive makrofaj)</td></tr>' +
'<tr><td>Etki aracı</td><td>Sıvılara (plazma, salgılar) verilen <strong>antikorlar</strong>; adı da buradan gelir</td><td>Hücrenin <strong>kendisi</strong> (doğrudan öldürme) ve sitokinler</td></tr>' +
'<tr><td>Hedef</td><td>Hücre dışı mikroplar ve toksinler, serbest antijenler</td><td>Hücre içi mikroplar (virüsler, mikobakteriler), tümör ve nakil hücreleri</td></tr>' +
'<tr><td>Antijeni tanıma</td><td>Doğrudan</td><td>MHC ile sunulduktan sonra</td></tr>' +
'<tr><td>Bozukluğunda</td><td>Tekrarlayan piyojenik bakteri enfeksiyonları</td><td>Virüs ve hücre içi organizmalarla tekrarlayan enfeksiyon, kanser artışı</td></tr>' +
'<tr><td>Bağlantı</td><td colspan="2">İkisini de <strong>CD4+ yardımcı T hücresi</strong> yönetir</td></tr>' +
'</tbody></table>' +
'<h3>Özgül yanıtın evreleri</h3>' +
'<ol><li>Karşılaşma ve tanıma (antijen reseptöre bağlanır)</li><li>Lenfosit aktivasyonu ve klonal çoğalma</li><li>Saldırı: doğrudan (CTL) veya dolaylı (antikor)</li><li>Sonlanma: plazma hücreleri ve efektör T hücreleri <strong>apoptozla</strong> yok edilir; bir kısım B ve T hücresi <strong>bellek hücresi</strong> olarak kalır</li></ol>' +
'<ul><li><strong>Birincil (primer) yanıt:</strong> ilk karşılaşmada gecikmelidir; önce IgM çıkar. Hocanın anlatımında, aktive olan T lenfositler çoğalıp savaştıktan sonra yabancı ajanın ortadan kalkması yaklaşık 14 gün sürer; bellek hücrelerinin klona eklenmesiyle süreç tamamlanır.</li>' +
'<li><strong>İkincil (sekonder) yanıt:</strong> bellek hücreleri ana klona eklendiği için <strong>daha hızlı, daha güçlü ve daha uzun süreli</strong>; ağırlıkla IgG. <strong>Aşıların mantığı</strong> budur.</li></ul>' +
hoca('<p>"Antikorlar sıvı ortama verildiği için B lenfositlerin aracılık ettiği bağışıklığa hümoral bağışıklık diyoruz. T lenfositler yabancı hücreyi doğrudan kendileri öldürür, antikor gibi bir aracı kullanmaz; buna da hücresel bağışıklık diyoruz."</p>', V8, '10:04–12:04') +
hoca('<p>"Savaştan sonra B ve T lenfositlerin büyük kısmı yok ediliyor, ama bir kısmı bellek hücresi olarak klonun üzerine ekleniyor. Aynı mikropla bir daha karşılaşınca çok daha kısa sürede ve çok daha güçlü bir cevap geliyor. Aşının mantığı da bu: hasta etmeyecek kadar zayıflatılmış ya da öldürülmüş mikropla vücudun bellek hücresi oluşturmasını sağlıyoruz."</p>', V8, '19:55–21:13') +
'<figure class="slide-img"><img src="img/bagisiklik-3.jpg" alt="Antijenle karşılaşma, B ve T lenfosit aktivasyonu ve saldırı şeması" loading="lazy"><figcaption>' + F8 + ', s. 14 — B ve T lenfositlerin fonksiyonu: karşılaşma, aktivasyon, saldırı</figcaption></figure>' +
'<figure class="slide-img"><img src="img/bagisiklik-7.jpg" alt="Birinci ve ikinci antijen uyarısına karşı antikor yanıtı grafiği" loading="lazy"><figcaption>' + F8 + ', s. 30 — birincil ve ikincil antikor yanıtı; bellek hücreleri</figcaption></figure>' +
'<figure class="slide-img"><img src="img/bagisiklik-10.jpg" alt="Hümoral ve hücresel savunma mekanizmalarının zaman içindeki evreleri" loading="lazy"><figcaption>' + F8 + ', s. 52 — hümoral ve hücresel savunma ve zararlıyı yok etme süreci</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 11–14, 18, 22, 25, 30, 38, 52; Mikrobiyoloji (K5) 22 "İmmünyetmezlik" (hümoral ve hücresel defektin klinik sonuçları); Patoloji (K5) 10</p>' +
'<p class="src">Video: ' + V8 + ' · 10:04–12:04 (hümoral ve hücresel), 19:40–20:11 (yanıtın evreleri, apoptoz ve bellek), 20:14–21:13 (bellek hücreleri ve aşı), 33:45–34:17 (birincil-ikincil yanıt grafiği), 42:25–43:08 (yaklaşık 14 günlük süreç)</p>'
      },
      {
        heading: "Tolerans ve zararlı bağışıklık yanıtları",
        html:
'<h3>İmmün tolerans: "kendine" saldırmama</h3>' +
'<ul>' +
'<li><strong>Merkezi tolerans:</strong> kemik iliğinde vücudun kendi antijenine bağlanan B lenfositleri <strong>apoptoza</strong> uğrar (klonal delesyon = negatif seleksiyon). T hücreleri timusta benzer bir seçilimden geçer.</li>' +
'<li><strong>Periferik tolerans:</strong> sekonder lenfoid organlarda kendi antijenine bağlanan lenfositler <strong>inaktive edilir</strong> (klonal inaktivasyon/anerji); Treg hücreleri de baskılar.</li>' +
'</ul>' +
'<h3>Zararlı bağışıklık yanıtları</h3>' +
'<ol>' +
'<li><strong>Doku reddi:</strong> Th ve Tc hücreleri yabancı MHC (HLA) proteinlerine karşı reaksiyon verir.</li>' +
'<li><strong>Transfüzyon reaksiyonları:</strong> uygunsuz kanda eritrositler tahrip edilir.</li>' +
'<li><strong>Aşırı duyarlılık (alerji):</strong> çevresel antijenlere (alerjen) karşı inflamasyonla doku hasarı; IgE fazlalığı (anafilaksi, ürtiker, bahar nezlesi, astım).</li>' +
'<li><strong>Otoimmün hastalıklar:</strong> romatizmal ateş, bazı glomerülonefritler, myastenia gravis, SLE.</li>' +
'</ol>' +
'<table><caption>Aşırı duyarlılık tipleri (kısa)*</caption>' +
'<thead><tr><th>Tip</th><th>Mekanizma</th><th>Örnek</th></tr></thead><tbody>' +
'<tr><td>I (anında)</td><td>IgE + mast hücresi/bazofil degranülasyonu</td><td>Anafilaksi (ör. arı sokması), bahar nezlesi, astım, ürtiker</td></tr>' +
'<tr><td>II (antikor aracılı)</td><td>Hücre yüzeyine IgG/IgM bağlanır</td><td>Uygunsuz kan transfüzyonu, yenidoğanın hemolitik hastalığı</td></tr>' +
'<tr><td>III (immün kompleks)</td><td>Antijen-antikor kompleksleri damarlarda birikir, kompleman aktive olur</td><td>SLE, poststreptokokal glomerülonefrit</td></tr>' +
'<tr><td>IV (gecikmiş, T hücre aracılı)</td><td>Th1 ve makrofaj veya CTL aracılı</td><td>Tüberkülin testi, kontakt dermatit</td></tr>' +
'</tbody></table>' +
'<p>* Tip sınıflaması Fizyoloji slaytlarında yok; dış kaynak (Abbas; Robbins). Ayrıntı: Mikrobiyoloji (K5) 21 "Aşırı duyarlılık reaksiyonları".</p>' +
'<div class="note"><p><strong>Transplantasyon:</strong> otograft (kişinin kendinden) ve izograft (tek yumurta ikizleri) reddedilmez. Allograft (aynı türden başka birey) bağışıklık baskılanmazsa 1 gün–5 hafta içinde reddedilir. Ksenograft farklı türden yapılır. Ret önleme: ABO uyumu, cross-match, HLA tiplendirmesi ve ömür boyu immünsüpresyon (siklosporin A, kortikosteroid). Bedeli: enfeksiyon ve kanser riskinin artması.</p></div>' +
hoca('<p>"Olgunlaşma sırasında B ve T lenfositler adeta askeri talimden geçiriliyor. Kemik iliğinde vücudun kendi antijenleriyle karşılaştırılıyorlar; kendi antijenine cevap verebilecek bir B lenfosit üretildiyse orada apoptoza uğratılıp ortadan kaldırılıyor. Sekonder lenfoid organlarda da kendi antijenine cevap verirse inaktive ediliyor. Böylece vücudun kendine cevap vermesi engelleniyor."</p>', V8, '27:41–29:10') +
hoca('<p>"Bağışıklık sistemi olmazsa olmaz, ama dört yanıtı zararlı olarak ayrıca düşünmek gerekiyor: doku reddi, transfüzyon reaksiyonları, aşırı duyarlılık yani alerji (arı sokmasına alerjisi olan birinin anafilaksiyle ölebilmesi gibi) ve otoimmün hastalıklar."</p>', V9, '08:11–10:30') +
'<figure class="slide-img"><img src="img/bagisiklik-6.jpg" alt="B lenfosit olgunlaşması, klonal delesyon ve klonal inaktivasyon ile immün tolerans gelişimi" loading="lazy"><figcaption>' + F8 + ', s. 27 — B lenfosit olgunlaşması ve immün tolerans gelişimi</figcaption></figure>' +
'<p class="src">Kaynak: Drive – ' + F8 + ' s. 27; ' + F9 + ' s. 13, 18–24 (zararlı yanıtlar, HLA, transplantasyon tipleri, doku reddinin önlenmesi); Mikrobiyoloji (K5) 16 (Treg)</p>' +
'<p class="src">Video: ' + V8 + ' · 27:41–29:10 (tolerans) · ' + V9 + ' · 08:11–10:30 (zararlı yanıtlar), 13:52–15:05 (transplantasyon tipleri), 15:39–16:13 (immünsüpresyon, plazmaferez), 17:54–18:27 (immünsüpresyonun enfeksiyon ve kanser riski)</p>'
      },
      {
        heading: "Köprü: HIV bağışıklık sistemini nereden vurur?",
        html:
'<ul>' +
'<li>HIV bir <strong>retrovirüstür</strong>: ters transkriptaz ile RNA\'sını DNA\'ya çevirir, konak hücre genomuna entegre eder, çoğalır ve konak hücreyi öldürür.</li>' +
'<li>Hedefi <strong>CD4+ yardımcı T hücresidir</strong> (ayrıca CD4 taşıyan makrofaj ve dendritik hücreler). Bu bölümde gördüğümüz zincirin <strong>tam merkezi</strong> budur:</li>' +
'</ul>' +
'<table><caption>Yardımcı T hücresi kaybolunca bağışıklığın hangi parçası çöker?</caption>' +
'<thead><tr><th>Normalde CD4+ Th\'nin yaptığı</th><th>HIV\'de sonuç</th></tr></thead><tbody>' +
'<tr><td>B lenfositi aktive eder → antikor (hümoral yanıt)</td><td>Yeni antijenlere ve aşılara özgül antikor yanıtı zayıflar</td></tr>' +
'<tr><td>CD8+ CTL\'yi aktive eder (hücresel yanıt)</td><td>Virüslü hücreler ve onkojenik virüsler kontrol edilemez → Kaposi sarkomu, lenfoma</td></tr>' +
'<tr><td>NK hücrelerini aktive eder (doğal bağışıklık)</td><td>Tümör ve virüs gözetimi zayıflar</td></tr>' +
'<tr><td>Th1/IFN-γ ile makrofajı aktive eder</td><td>Hücre içi mikroplar: tüberküloz, Pneumocystis, toksoplazma, MAC</td></tr>' +
'<tr><td>Bellek yanıtı oluşturur</td><td>Daha önce kontrol altındaki enfeksiyonlar yeniden alevlenir</td></tr>' +
'</tbody></table>' +
'<ul><li>Seyir (Fizyoloji 9): HIV ile enfeksiyondan sonra genellikle <strong>10 yıl içinde AIDS</strong>; ilk 5 yıl belirti vermez; ikinci 5 yılda enfeksiyonlar, kilo kaybı, ateş, kanser ve ölüm.</li>' +
'<li>Bulaş: kan, cinsel temas, plasenta, anne sütü. Tedavi: virüse yönelik ve enfeksiyon/kansere yönelik.</li></ul>' +
hoca('<p>"Virüs yardımcı T lenfositleri etkiliyor. Yardımcı T lenfositler herkese yardımcı oluyordu demiştim: B lenfosit aktivasyonunu sağlıyordu, sitotoksik T lenfositleri ve doğal katil hücreleri aktive ediyordu. Neredeyse bütün kazanılmış bağışıklığı ve doğal bağışıklıktan da doğal katil hücreleri etkilediği için bağışıklık sistemi baskılanmış oluyor. İlk 5 yıl çok fazla belirti vermiyor, ikinci 5 yılda artık enfeksiyonlar başlıyor. Bağışıklık hücreleri vücutta sürekli arama-tarama yapıp kanser hücresini öldürür demiştim; bağışıklığı baskılanmış kişide kansere yakalanma ihtimali de tabii ki çok artıyor."</p>', V9, '05:55–06:54') +
'<div class="key"><p>Bu bölüm sonraki HIV/AIDS bölümlerinin temelidir: bulaş → virüsün CD4\'e girişi → CD4 kaybının hücresel mekanizmaları → CD4 sayısına göre fırsatçı enfeksiyonlar.</p></div>' +
'<p class="src">Kaynak: Drive – ' + F9 + ' s. 5–10 (AIDS); Mikrobiyoloji (K5) 22 "İmmünyetmezlik" (edinsel immün yetmezlik, HIV); Klinik (K5) "HIV enfeksiyonu ve Akut hepatitler"</p>' +
'<p class="src">Video: ' + V9 + ' · 05:40–05:48 (retrovirüs, konak hücre ölümü), 05:55–06:54 (yardımcı T hedefi, seyir, kanser riski), 07:06–07:24 (bulaş ve tedavi)</p>'
      }
    ],
    faq: [
      { q: "Doğal ve kazanılmış bağışıklığın temel farkı nedir?", a: "<p>Doğal bağışıklık doğuştan vardır, hızlıdır, mikrop gruplarında ortak karbonhidrat-lipit yapıları tanır ve belleği yoktur. Kazanılmış bağışıklık antijenle karşılaştıkça gelişir, yavaştır, her antijene özgüdür (B ve T lenfositler) ve bellek oluşturur. İki sistem birlikte çalışır: antikorlar fagositleri, komplemanı ve NK hücrelerini güçlendirir; APC'ler kazanılmış yanıtı başlatır.</p>" },
      { q: "Primer ve sekonder lenfoid organların görev farkı nedir?", a: "<p>Primer organlar (kemik iliği, timus) lenfositlerin olgunlaştığı, reseptörlerinin oluştuğu ve kendine tepkili olanların elendiği yerdir. Sekonder organlar (lenf düğümü, dalak, MALT) olgun lenfositlerin antijenle karşılaşıp aktive olduğu ve çoğaldığı yerdir.</p>" },
      { q: "T lenfosit neden antijeni doğrudan tanıyamaz? Hangi MHC'yi kim tanır?", a: "<p>TCR yalnızca MHC molekülüne yüklenmiş peptidi tanır; bu yüzden antijenin APC (makrofaj, dendritik hücre, B lenfosit) tarafından işlenip sunulması gerekir. CD4+ yardımcı T hücreleri MHC II, CD8+ sitotoksik T hücreleri MHC I ile sunulanı tanır (4 × 2 = 8 × 1 = 8).</p>" },
      { q: "Yardımcı T hücresinin aktivasyonu için hangi sinyaller gerekir?", a: "<p>Sinyal 1: MHC II + peptit ile TCR (ve CD4) etkileşimi. Sinyal 2: eş-uyarı, yani APC'deki B7 ile T hücresindeki CD28 gibi antijen olmayan yüzey proteinlerinin etkileşimi. Sinyal 3: APC'nin salgıladığı sitokinler (IL-1, TNF-α). Yalnızca birinci sinyal yetmez.</p>" },
      { q: "Hangi antikor plasentayı geçer, hangisi primer yanıtta ilk çıkar?", a: "<p>Plasentayı yalnızca IgG geçer; fetüse geçici bağışıklık sağlar ama Rh uyuşmazlığında anti-D IgG yenidoğanın hemolitik hastalığına yol açar. Primer yanıtta ilk çıkan IgM'dir (pentamer, güçlü aglütinasyon; anti-A/anti-B). Sekonder yanıtın ana antikoru IgG'dir.</p>" },
      { q: "İkincil bağışıklık yanıtı neden daha hızlı ve güçlüdür? Aşı bunu nasıl kullanır?", a: "<p>İlk yanıttan sonra o antijene özgül klonun bir kısmı bellek B ve T hücresi olarak kalır ve klon büyür. İkinci karşılaşmada çok sayıda hazır hücre olduğu için yanıt daha hızlı, daha güçlü ve daha uzun sürelidir, ağırlıkla IgG üretilir. Aşı zayıflatılmış veya öldürülmüş mikrop ya da onun antijeniyle hastalık yapmadan bu belleği oluşturur.</p>" },
      { q: "Vücut kendi hücrelerine neden saldırmaz?", a: "<p>Kemik iliği ve timusta kendi antijenine bağlanan lenfositler apoptozla elenir (klonal delesyon). Bundan kaçanlar sekonder organlarda inaktive edilir (klonal inaktivasyon) ve Treg hücreleri tarafından baskılanır. Bu mekanizmalar bozulursa otoimmün hastalıklar gelişir.</p>" },
      { q: "HIV'in yalnızca CD4+ hücreleri hedeflemesi neden tüm bağışıklığı çökertir?", a: "<p>CD4+ yardımcı T hücresi sitokinleriyle B lenfositleri (antikor), CD8+ CTL'leri, NK hücrelerini ve makrofajları aktive eder. Bu merkez kaybolunca hem hümoral hem hücresel yanıt, kısmen de doğal bağışıklık zayıflar; hücre içi mikroplarla fırsatçı enfeksiyonlar ve kanserler ortaya çıkar.</p>" }
    ]
  };

  var i = window.TOPICS.findIndex(function (t) { return t.id === "akut-faz"; });
  window.TOPICS.splice(i + 1, 0, topic);
})();
