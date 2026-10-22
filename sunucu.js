const http = require("http");
const dayjs = require("dayjs");

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.method !== "GET") {
        res.writeHead(405, {
            "Content-Type": "text/plain; charset=utf-8",
            "Allow": "GET"
        });
        res.end("Sadece GET yöntemi desteklenmektedir.");
        return;
    }

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(`<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMH231 Web Programlama</title>
</head>
<body>
    <h1>BMH231 Web Programlama Ödevi</h1>
    <p>Web Programlama Ödev 1 sunucusuna hoş geldiniz. Ben Esra Yıldırım 2.Sınıf öğrencisiyim. Kitap okumayı seviyorum. Fenerbahçeliyim.</p>
    <a href="/hakkimda">Hakkımda</a>
</body>
</html>`);
        return;
    }

    if (req.url === "/hakkimda") {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(`<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hakkımda</title>
</head>
<body>
    <h1>Hakkımda</h1>
    <p>Ben Esra Yildirim.</p>
    <p>Bilgisayar Mühendisliği öğrencisiyim.</p>
    <p>Bu sayfa BMH231 Web Programlama Ödevi kapsamında hazırlanmıştır.</p>
    <a href="/">Ana Sayfa</a>
</body>
</html>`);
        return;
    }

    if (req.url === "/api/ders") {
        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });

        res.end(JSON.stringify({
            kod: "BMH231",
            ad: "Web Programlama",
            gun: "Cuma"
        }));
        return;
    }

    if (req.url === "/api/agep") {
        const bugun = dayjs().startOf("day");
        const teslimTarihi = dayjs("2026-11-01").startOf("day");
        const kalanGun = teslimTarihi.diff(bugun, "day");

        res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8"
        });

        res.end(JSON.stringify({
            sonTeslimTarihi: "01.11.2026",
            kalanGun: kalanGun
        }));
        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
    });

    res.end("Sayfa bulunamadı");
});

server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor.`);
});
