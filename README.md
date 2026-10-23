# BMH231 - Ödev 1

Bu proje BMH231 Web Programlama dersi kapsamında hazırlanmıştır.

## Kurulum

```bash
git clone https://github.com/esra-yldrm-svg/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Sunucu `http://localhost:3000` adresinde çalışır.

## Desteklenen yollar

* `GET /` — Ana sayfa
* `GET /hakkimda` — Hakkımda sayfası
* `GET /api/ders` — Ders bilgilerini JSON olarak döndürür
* `GET /api/agep` — 01.11.2026 AGEP son teslim tarihini ve kalan gün sayısını döndürür
* Diğer yollar — `404` / `Sayfa bulunamadı`
* GET dışındaki yöntemler — `405` ve `Allow: GET`

## Test

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/hakkimda
curl -i http://localhost:3000/api/ders
curl -i http://localhost:3000/api/agep
curl -i http://localhost:3000/olmayan-sayfa
curl -i -X POST http://localhost:3000/api/ders
```
