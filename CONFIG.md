# ⚙️ Configuration Guide - Reval Creative Studio

Panduan lengkap untuk mengkonfigurasi dan customize landing page sesuai kebutuhan Anda.

---

## 🎨 COLOR CONFIGURATION

### File: `styles.css` (Baris 1-20)

```css
:root {
    /* Colors */
    --primary: #00d9ff;          /* Warna utama (cyan) */
    --primary-dark: #00a8cc;     /* Warna utama gelap */
    --secondary: #ff006e;        /* Warna sekunder (pink) */
    --accent: #8338ec;           /* Warna accent (ungu) */
    --dark-bg: #0a0e27;          /* Background gelap */
    --dark-bg-light: #1a1f3a;    /* Background lebih terang */
    --dark-bg-lighter: #2d3561;  /* Background paling terang */
    --text-primary: #ffffff;     /* Teks utama */
    --text-secondary: #b0b8d4;   /* Teks sekunder */
    --text-tertiary: #7a8299;    /* Teks tersier */
}
```

### Preset Color Schemes

#### 🔵 Blue & Purple (Default)
```css
--primary: #00d9ff;
--secondary: #ff006e;
--accent: #8338ec;
```

#### 🟢 Green & Teal
```css
--primary: #00ff88;
--secondary: #00ffcc;
--accent: #00ff00;
```

#### 🔴 Red & Orange
```css
--primary: #ff6b6b;
--secondary: #ff8c42;
--accent: #ff4757;
```

#### 🟡 Yellow & Gold
```css
--primary: #ffd700;
--secondary: #ffed4e;
--accent: #ffa500;
```

#### 🟣 Purple & Magenta
```css
--primary: #9d4edd;
--secondary: #e0aaff;
--accent: #c77dff;
```

---

## 📝 TEXT CONFIGURATION

### Company Name

**File: `index.html`**

#### Navigation Logo (Baris ~35)
```html
<div class="logo">
    <span class="logo-text">Reval</span>
    <span class="logo-accent">Creative</span>
</div>
```

#### Footer (Baris ~550)
```html
<h3>Reval Creative Studio</h3>
```

**Ganti semua dengan nama perusahaan Anda.**

### Hero Title

**File: `index.html` (Baris ~60)**
```html
<h1 class="hero-title">
    <span class="word">Crafting</span>
    <span class="word">Modern</span>
    <span class="word">Digital</span>
    <span class="word">Experiences</span>
</h1>
```

**Catatan**: Setiap kata harus dalam `<span class="word">`. Contoh:
```html
<h1 class="hero-title">
    <span class="word">Kami</span>
    <span class="word">Ciptakan</span>
    <span class="word">Solusi</span>
    <span class="word">Digital</span>
</h1>
```

### Hero Subtitle

**File: `index.html` (Baris ~70)**
```html
<p class="hero-subtitle">
    Kami menghadirkan solusi desain dan development yang inovatif...
</p>
```

### About Section

**File: `index.html` (Baris ~100)**
```html
<h2>Tentang Reval Creative Studio</h2>
<p class="section-subtitle">Inovasi, Kreativitas, dan Performa Tinggi</p>
```

---

## 📞 CONTACT CONFIGURATION

### WhatsApp Number

**File: `index.html`**

Cari semua `https://wa.me/62` dan ganti dengan nomor Anda:

```html
<!-- Format: https://wa.me/[country_code][number] -->
<!-- Contoh: https://wa.me/62812345678 -->
<a href="https://wa.me/62812345678" class="btn btn-primary">Order Sekarang</a>
```

**Lokasi di file:**
- Baris ~75 (Hero CTA)
- Baris ~280 (Pricing cards)
- Baris ~530 (CTA section)

### Email Address

**File: `index.html` (Baris ~560)**
```html
<li><a href="mailto:hello@reval.studio">Email</a></li>
```

Ganti dengan:
```html
<li><a href="mailto:your-email@domain.com">Email</a></li>
```

### Social Media Links

**File: `index.html` (Baris ~560-565)**
```html
<li><a href="#">Instagram</a></li>
<li><a href="#">LinkedIn</a></li>
```

Ganti dengan:
```html
<li><a href="https://instagram.com/your-username">Instagram</a></li>
<li><a href="https://linkedin.com/company/your-company">LinkedIn</a></li>
```

---

## 💰 PRICING CONFIGURATION

### File: `index.html` (Baris ~240-310)

#### Basic Package
```html
<h3>Basic</h3>
<p class="price">Rp 100.000</p>
<p class="price-desc">Paket Dasar</p>
```

#### Standard Package
```html
<h3>Standard</h3>
<p class="price">Rp 300.000 - 600.000</p>
<p class="price-desc">Paket Standar</p>
```

#### Premium Package
```html
<h3>Premium</h3>
<p class="price">Rp 1.000.000+</p>
<p class="price-desc">Paket Premium</p>
```

### Mengubah Features

**Contoh:**
```html
<ul class="pricing-features">
    <li><span class="checkmark">✓</span> Feature 1</li>
    <li><span class="checkmark">✓</span> Feature 2</li>
    <li><span class="checkmark">✗</span> Feature 3</li>
</ul>
```

- `✓` = Included (Tersedia)
- `✗` = Not included (Tidak tersedia)

---

## 🎯 SERVICES CONFIGURATION

### File: `index.html` (Baris ~140-195)

Setiap service card memiliki struktur:
```html
<div class="service-card">
    <div class="card-icon">
        <!-- SVG Icon -->
    </div>
    <h3>Service Name</h3>
    <p>Service Description</p>
    <div class="card-benefits">
        <span class="benefit">✓ Benefit 1</span>
        <span class="benefit">✓ Benefit 2</span>
        <span class="benefit">✓ Benefit 3</span>
    </div>
</div>
```

### Mengubah Icon

Ganti SVG dengan icon lain atau emoji:
```html
<!-- Emoji -->
<div class="card-icon">🚀</div>

<!-- Atau gunakan Font Awesome -->
<div class="card-icon">
    <i class="fas fa-rocket"></i>
</div>
```

---

## 🖼️ PORTFOLIO CONFIGURATION

### File: `index.html` (Baris ~380-430)

Struktur portfolio item:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="image-url" alt="Project Name">
        <div class="portfolio-overlay">
            <h3>Project Name</h3>
            <p>Technology Used</p>
        </div>
    </div>
</div>
```

### Mengubah Gambar

Ganti `image-url` dengan URL gambar Anda:
```html
<!-- Dari Unsplash -->
<img src="https://images.unsplash.com/photo-xxx" alt="Project">

<!-- Dari server Anda -->
<img src="/images/project-1.jpg" alt="Project">

<!-- Dari URL eksternal -->
<img src="https://example.com/image.jpg" alt="Project">
```

### Menambah Project Baru

Copy-paste struktur dan ubah:
```html
<div class="portfolio-item">
    <div class="portfolio-image">
        <img src="your-image.jpg" alt="Your Project">
        <div class="portfolio-overlay">
            <h3>Your Project Name</h3>
            <p>Your Technology</p>
        </div>
    </div>
</div>
```

---

## 💬 TESTIMONIAL CONFIGURATION

### File: `index.html` (Baris ~450-510)

Struktur testimonial:
```html
<div class="testimonial-card">
    <div class="stars">★★★★★</div>
    <p class="testimonial-text">
        "Client review text here..."
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">👨‍💼</div>
        <div>
            <p class="author-name">Client Name</p>
            <p class="author-title">Client Title</p>
        </div>
    </div>
</div>
```

### Mengubah Rating

- 5 bintang: `★★★★★`
- 4 bintang: `★★★★☆`
- 3 bintang: `★★★☆☆`

### Mengubah Avatar

Ganti emoji dengan yang lain:
```html
<div class="author-avatar">👨‍💼</div>  <!-- Male professional -->
<div class="author-avatar">👩‍💼</div>  <!-- Female professional -->
<div class="author-avatar">👨‍🎨</div>  <!-- Male artist -->
<div class="author-avatar">👩‍🔬</div>  <!-- Female scientist -->
```

---

## ⚙️ ANIMATION CONFIGURATION

### File: `script.js`

#### Particle Count

**Baris ~15**
```javascript
this.particleCount = 50;  // Ubah angka untuk lebih/kurang particles
```

- 30 = Sedikit particles
- 50 = Default (recommended)
- 100 = Banyak particles (lebih heavy)

#### Parallax Speed

**Baris ~180**
```javascript
const parallaxAmount = scrolled * 0.5;  // 0.5 = speed
```

- 0.3 = Lambat
- 0.5 = Normal (recommended)
- 0.8 = Cepat

#### Scroll Animation Delay

**Baris ~120-140**
```javascript
card.style.transition = 'all 0.6s ease-out';  // 0.6s = duration
```

- 0.3s = Cepat
- 0.6s = Normal (recommended)
- 1s = Lambat

---

## 🔤 FONT CONFIGURATION

### File: `styles.css` (Baris ~1)

#### Mengubah Font Heading

```css
h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;  /* Ubah di sini */
}
```

#### Mengubah Font Body

```css
body {
    font-family: 'Poppins', sans-serif;  /* Ubah di sini */
}
```

#### Font Recommendations

- **Modern**: Poppins, Inter, Roboto
- **Elegant**: Playfair Display, Cormorant
- **Geometric**: Montserrat, Raleway
- **Friendly**: Nunito, Quicksand

### Import Font Baru

**File: `index.html` (Baris ~10)**
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 📏 SPACING CONFIGURATION

### File: `styles.css` (Baris ~20-30)

```css
:root {
    --spacing-xs: 0.5rem;    /* Extra small */
    --spacing-sm: 1rem;      /* Small */
    --spacing-md: 1.5rem;    /* Medium */
    --spacing-lg: 2rem;      /* Large */
    --spacing-xl: 3rem;      /* Extra large */
    --spacing-2xl: 4rem;     /* 2x Large */
}
```

Ubah nilai untuk mengubah spacing di seluruh website.

---

## 🎬 TRANSITION CONFIGURATION

### File: `styles.css` (Baris ~30-35)

```css
:root {
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-fast: all 0.15s ease-out;
    --transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

- Ubah `0.3s` untuk mengubah kecepatan transition
- Ubah `cubic-bezier` untuk mengubah easing

---

## 📱 RESPONSIVE BREAKPOINT

### File: `styles.css` (Baris ~400+)

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

Ubah breakpoint sesuai kebutuhan.

---

## 🔍 SEO CONFIGURATION

### File: `index.html` (Baris ~1-10)

```html
<meta name="description" content="Reval Creative Studio - Jasa Desain & Development Modern">
<title>Reval Creative Studio | Desain & Development Modern</title>
```

Ganti dengan:
```html
<meta name="description" content="Your company description">
<title>Your Company | Your Tagline</title>
```

---

## 📊 ANALYTICS CONFIGURATION

### Google Analytics

Tambahkan di `index.html` sebelum `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

Ganti `GA_ID` dengan ID Google Analytics Anda.

---

## 🔐 SECURITY CONFIGURATION

### Remove Sensitive Data

Pastikan tidak ada:
- ❌ Password
- ❌ API keys
- ❌ Private email
- ❌ Personal info

### Add Security Headers

Tambahkan di `.htaccess` atau server config:
```
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
```

---

## ✅ Configuration Checklist

- [ ] Ubah warna sesuai brand
- [ ] Ubah company name
- [ ] Ubah hero title & subtitle
- [ ] Ubah services & descriptions
- [ ] Ubah pricing
- [ ] Ubah portfolio items
- [ ] Ubah testimonials
- [ ] Ubah WhatsApp number
- [ ] Ubah email
- [ ] Ubah social media links
- [ ] Ubah SEO meta tags
- [ ] Test di semua device
- [ ] Setup analytics
- [ ] Deploy ke hosting

---

## 🚀 Quick Configuration Script

Untuk mengubah banyak hal sekaligus, gunakan Find & Replace:

**Ctrl+H** di text editor Anda:

| Find | Replace |
|------|---------|
| `Reval Creative Studio` | `Your Company` |
| `https://wa.me/62` | `https://wa.me/62812345678` |
| `hello@reval.studio` | `your-email@domain.com` |
| `#00d9ff` | `#your-color` |

---

## 📞 Need Help?

Refer to:
- README.md - Full documentation
- QUICK_START.md - Quick setup
- WORDPRESS_INTEGRATION.md - WordPress guide

---

**Happy customizing! 🎨**
