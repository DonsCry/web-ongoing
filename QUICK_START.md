# 🚀 Quick Start Guide - Reval Creative Studio

Panduan cepat untuk langsung menggunakan landing page.

## ⚡ 5 Menit Setup

### Step 1: Buka File
```
1. Buka folder: webuntukworldpress/
2. Double-click: index.html (Versi Enhanced sudah aktif!)
3. Website terbuka di browser dengan animasi premium

### 📦 File Siap Pakai
- **ZIP File**: `reval-creative-studio-enhanced-v2.zip` (Gunakan ini untuk WordPress)
- **HTML**: `index.html` (Sudah fix & enhanced)
```

### Step 2: Customize Konten (Optional)
```
1. Buka index.html dengan text editor
2. Cari dan ganti:
   - "Reval Creative Studio" → nama Anda
   - "https://wa.me/62" → nomor WhatsApp Anda
   - Konten lainnya sesuai kebutuhan
3. Save file
4. Refresh browser
```

### Step 3: Upload ke Hosting
```
1. Buka file manager hosting
2. Upload 3 file:
   - index.html
   - styles.css
   - script.js
3. Akses via domain Anda
```

---

## 🎨 Customization Cepat

### Mengubah Warna Utama

**File: styles.css**

Cari bagian ini (baris ~20):
```css
:root {
    --primary: #00d9ff;      /* Warna biru cyan */
    --secondary: #ff006e;    /* Warna pink */
    --accent: #8338ec;       /* Warna ungu */
}
```

**Contoh warna lain:**
- Merah: #ff0000
- Hijau: #00ff00
- Oranye: #ff8800
- Ungu: #9933ff

### Mengubah Teks Hero

**File: index.html**

Cari (baris ~60):
```html
<h1 class="hero-title">
    <span class="word">Crafting</span>
    <span class="word">Modern</span>
    <span class="word">Digital</span>
    <span class="word">Experiences</span>
</h1>
```

Ganti dengan judul Anda (pisahkan per kata dengan `<span>`).

### Mengubah Subtitle Hero

**File: index.html**

Cari (baris ~70):
```html
<p class="hero-subtitle">
    Kami menghadirkan solusi desain dan development...
</p>
```

Ganti dengan subtitle Anda.

### Mengubah WhatsApp Number

**File: index.html**

Cari semua `https://wa.me/62` dan ganti dengan:
```
https://wa.me/62812345678
```

Ganti `62812345678` dengan nomor Anda (format: 62 + nomor tanpa 0).

### Mengubah Harga

**File: index.html**

Cari section pricing (baris ~240):
```html
<p class="price">Rp 100.000</p>
```

Ganti dengan harga Anda.

---

## 📱 Testing

### Desktop
- Buka di Chrome, Firefox, Safari
- Resize browser window
- Check semua animasi smooth

### Mobile
- Buka di smartphone
- Scroll dan check responsiveness
- Test semua buttons

### Tablet
- Buka di tablet
- Check layout di landscape & portrait

---

## 🔗 WordPress Integration (Cepat)

### Opsi 1: Copy-Paste (Termudah)

1. **Buka WordPress Dashboard**
2. **Pages > Add New**
3. **Buka index.html dengan text editor**
4. **Copy seluruh isi HTML**
5. **Paste ke WordPress post editor**
6. **Publish**

### Opsi 2: Elementor (Recommended)

1. **Install Elementor plugin**
2. **Pages > Add New > Edit with Elementor**
3. **Add HTML widget**
4. **Paste HTML sections**
5. **Publish**

### Opsi 3: Custom Code Plugin

1. **Install "Code Snippets" plugin**
2. **Snippets > Add New**
3. **Paste script.js content**
4. **Save & Activate**
5. **Appearance > Customize > Additional CSS**
6. **Paste styles.css content**
7. **Publish**

---

## 🎯 Common Changes

### Menambah Section Baru

1. **Copy section HTML yang sudah ada**
2. **Paste sebelum `</main>` tag**
3. **Ubah ID dan class**
4. **Add CSS styling di styles.css**

### Mengubah Font

**File: styles.css**

Cari (baris ~1):
```css
font-family: 'Poppins', sans-serif;
```

Ganti dengan font lain dari Google Fonts.

### Mengubah Background Color

**File: styles.css**

Cari:
```css
--dark-bg: #0a0e27;
```

Ganti dengan warna pilihan Anda.

### Menambah Social Media Link

**File: index.html**

Cari footer (baris ~550):
```html
<li><a href="#">Instagram</a></li>
```

Ganti dengan:
```html
<li><a href="https://instagram.com/username">Instagram</a></li>
```

---

## ⚠️ Troubleshooting

### Animasi tidak berjalan
- Pastikan script.js ter-load
- Check browser console (F12)
- Refresh page (Ctrl+Shift+R)

### Layout berantakan
- Clear browser cache
- Refresh page
- Test di browser lain

### Warna tidak berubah
- Pastikan CSS ter-load
- Refresh page (Ctrl+Shift+R)
- Check file path

### Responsive tidak bekerja
- Pastikan viewport meta tag ada
- Test di incognito mode
- Resize browser window

---

## 📊 File Sizes

- index.html: ~25 KB
- styles.css: ~30 KB
- script.js: ~15 KB
- **Total: ~70 KB** (sangat ringan!)

---

## 🔐 Security Tips

1. **Jangan share file dengan password**
2. **Update WordPress regularly**
3. **Use HTTPS**
4. **Backup regularly**
5. **Limit login attempts**

---

## 📈 Performance Tips

1. **Enable caching** (WP Super Cache)
2. **Compress images** (Smush)
3. **Minify CSS/JS** (Autoptimize)
4. **Use CDN** (Cloudflare)
5. **Lazy load images**

---

## 🎓 Next Steps

1. ✅ Customize konten
2. ✅ Test di semua device
3. ✅ Upload ke hosting
4. ✅ Setup analytics
5. ✅ Monitor performance

---

## 📞 Support

- **WhatsApp**: https://wa.me/62
- **Email**: hello@reval.studio
- **Documentation**: README.md
- **WordPress Guide**: WORDPRESS_INTEGRATION.md

---

## 💡 Pro Tips

1. **Backup files sebelum edit**
2. **Test changes di local dulu**
3. **Use version control (Git)**
4. **Monitor page speed**
5. **Keep plugins updated**

---

**Selamat! Website Anda siap digunakan! 🎉**

Untuk bantuan lebih lanjut, baca:
- README.md (dokumentasi lengkap)
- WORDPRESS_INTEGRATION.md (panduan WordPress)
