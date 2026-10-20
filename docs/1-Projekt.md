# 1. Opseg projekta

**Cilj:** Objasniti odobreni projektni zadatak vlastitim riječima tima. Čitatelj treba razumjeti problem, ciljane korisnike, cilj projekta i njegove granice bez prethodnog čitanja detaljnih zahtjeva.

## 1.1 Problem i cilj projekta

**Cilj:** Jasno razgraničiti problem koji se rješava od predloženog rješenja i stvarne koristi za korisnika.

**Problem.** Slušatelji glazbe nove izvođače i koncerte otkrivaju na više odvojenih mjesta: na društvenim mrežama, plakatima, streaming servisima i od prijatelja. Zbog toga lako propuste koncert izvođača koje vole, a koji se održava u njihovoj blizini. Glazba se ocjenjuje na jednom mjestu, informacije o koncertima nalaze se na drugom, a evidencija prijava i dolazaka ne postoji ili se vodi odvojeno. S druge strane, manji izvođači često ne znaju gdje imaju publiku ni na kojem bi mjestu nastup bio dobro posjećen, a upravitelji klubova i dvorana teško planiraju program i prate odaziv. Prijedlozi koncerata, potvrde mjesta i evidencija dolazaka najčešće se dogovaraju neformalno, porukama i pozivima.

**Rješenje i cilj.** Sonar je web aplikacija koja na jednom mjestu povezuje slušatelje, izvođače i mjesta održavanja koncerata. Slušatelj ocjenjuje i recenzira glazbu, prati izvođače i druge korisnike, dobiva preporuke izvođača i koncerata u svojoj blizini te se prijavljuje na koncerte. Izvođač predlaže koncerte i vidi gdje ima publiku, a upravitelj mjesta potvrđuje koncerte, prati prijave i evidentira dolaske. Moderatori i administratori održavaju kvalitetu sadržaja i podešavaju pravila sustava.

**Očekivana korist.** Slušatelji lakše pronalaze koncerte izvođača koje vole. Izvođači dobivaju uvid u svoju publiku, a upravitelji mjesta pouzdanu evidenciju prijava i dolazaka umjesto neformalnih dogovora. Sustav preporuka ostvaren je jednostavnim metodama i samo je jedna od značajki koja olakšava otkrivanje izvođača i koncerata.

## 1.2 Ciljani korisnici i dionici

**Cilj:** Utvrditi osobe, uloge i organizacije čije potrebe i interesi određuju projektni zadatak.

| Skupina korisnika ili dionika | Potreba ili interes relevantan za ovaj projekt |
| --- | --- |
| Slušatelji glazbe | Otkrivati izvođače, ocjenjivati i recenzirati glazbu, pratiti izvođače i druge korisnike te saznati za koncerte u svojoj blizini bez praćenja više odvojenih izvora. Prijaviti se na koncert i dobiti ulaznicu. |
| Izvođači (osobito manji) | Predložiti koncert, saznati gdje imaju publiku (zbirno, bez podataka o pojedinim slušateljima) te pratiti prijave, dolaske i ocjene svojih izdanja. Odgovoriti na recenzije svojih izdanja. |
| Upravitelji mjesta održavanja | Odlučivati o prijedlozima koncerata na svom mjestu, planirati program unutar kapaciteta te pratiti prijave i evidentirati dolaske skeniranjem ulaznica. |
| Moderatori | Obrađivati prijave neprimjerenog sadržaja i provjeravati zahtjeve za uloge izvođača i upravitelja mjesta, uz sljedivost svojih odluka. |
| Administratori | Upravljati korisnicima i ulogama, podešavati pravila sustava (npr. suspenziju) i pratiti statistiku sustava. |
| Nastavnik i asistent kolegija | Funkcionalan, dokumentiran i provjerljiv sustav koji zadovoljava zahtjeve zadatka (dionici koji nisu akteri aplikacije). |

## 1.3 Granice projekta

**Cilj:** Jasno definirati granice sustava — što je obuhvaćeno odobrenim zadatkom, što je svjesno izostavljeno ili odgođeno te o kojim vanjskim uslugama sustav izravno ovisi.

**Uključeno:** vlastiti katalog izvođača, albuma, pjesama i mjesta održavanja; društveni dio (praćenje, ocjene, recenzije, „sviđa mi se“, feed); preporuke izvođača i koncerata jednostavnim metodama; prijedlozi, potvrda i otkazivanje koncerata; prijave na koncert s QR ulaznicom i evidencijom dolazaka; obavijesti e-poštom i unutar aplikacije uz osvježavanje u stvarnom vremenu; prijava neprimjerenog sadržaja i moderacija; verifikacija uloga izvođača i upravitelja mjesta; statistika za izvođače, upravitelje mjesta i administratore; privatnost (preuzimanje podataka i brisanje računa). Aplikacija je web aplikacija prilagođena mobilnim uređajima.

**Izvan opsega ili odgođeno:**
- Streaming i prijenos glazbe: aplikacija vodi metapodatke i ocjene, a ne reproducira glazbu.
- Privatne poruke među korisnicima: nisu potrebne za ciljeve zadatka.
- Izvorna mobilna aplikacija: dovoljna je web aplikacija prilagođena mobilnim uređajima.
- Složenije metode strojnog učenja: preporuke ostaju jednostavne jer težište projekta nije na strojnom učenju. Napredniji pristup moguć je kao nadogradnja ako ostane vremena.
- Plaćanje i prodaja ulaznica: zadatak ih ne traži.
- Poželjno, ovisno o preostalom vremenu: dodavanje izvođača na zahtjev, službeni odgovor izvođača na recenzije, liste pjesama, dodavanje u kalendar (.ics), izvoz statistike u CSV i skeniranje QR kodova kamerom.

**Vanjske ovisnosti:** Google kao pružatelj identiteta (OpenID Connect / OAuth 2.0); MusicBrainz (izvođači, albumi, pjesme i mjesta s koordinatama) i Last.fm (oznake i popularnost izvođača) kao izvori podataka za katalog; usluga za prikaz karte (npr. Google Maps); e-pošta za obavijesti i podsjetnike; Google Kalendar kao neobavezna mogućnost. Aplikacija pri radu čita samo iz vlastite baze, pa nedostupnost MusicBrainza ili Last.fma sprječava samo dodavanje novih izvođača.

## 1.4 Postojeći pristupi i opravdanost projekta

**Cilj:** Objasniti kako korisnici trenutačno rješavaju problem i koja preostala potreba opravdava odobreni projekt.

Slušatelji koncerte danas često prate preko aplikacija za otkrivanje koncerata, primjerice Bandsintowna. Prema opisu servisa, korisnik prati izvođače (pojedinačno ili usklađivanjem s glazbenim servisima) i dobiva obavijest kada izvođač najavi nastup u njegovoj blizini [1][2]. To rješava jedan dio problema, otkrivanje koncerata. U opisima koje smo pregledali ne navodi se potvrda prijedloga koncerta od strane upravitelja mjesta ni evidencija prijava i dolazaka na ulazu. Upravo tu potrebu Sonar nastoji pokriti na istom mjestu na kojem se glazba otkriva i ocjenjuje.

**Izvori**

1. Bandsintown Help Center, „What are followers and how do fans become followers?“, https://help.artists.bandsintown.com/en/articles/2580590-what-are-followers-and-how-do-fans-become-followers (pristupljeno 20. 10. 2026.).
2. Bandsintown Concerts, opis aplikacije u App Storeu, https://apps.apple.com/app/id471394851 (pristupljeno 20. 10. 2026.).

---

>**Završna provjera:** Opis problema, cilj projekta, korisnici i dionici, granice opsega te postojeći pristupi međusobno su usklađeni. Navedene koristi ne predstavljaju neprovjerene tvrdnje, a uključene i izostavljene funkcionalnosti odgovaraju odobrenom projektnom zadatku.
