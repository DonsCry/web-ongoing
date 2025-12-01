# Reval Creative Studio - Landing Page

Modern, responsive landing page untuk jasa desain dan development dengan animasi smooth, micro-interactions, dan full responsiveness.

## 📋 Fitur Utama

✅ **Hero Section** dengan particle animation dan gradient mesh  
✅ **About Section** dengan deskripsi layanan  
✅ **Services Section** dengan 4 kartu layanan interaktif  
✅ **Pricing Section** dengan 3 paket harga  
✅ **Why Choose Us** dengan 6 keunggulan  
✅ **Portfolio Section** dengan 8 project showcase  
✅ **Testimonial Section** dengan 4 client reviews  
✅ **CTA Section** dengan WhatsApp integration  
✅ **Responsive Design** - Desktop, Tablet, Mobile  
✅ **Smooth Animations** - No lag, optimized performance  
✅ **SEO Friendly** - Semantic HTML, proper structure  

## 🎨 Desain & Styling

- **Color Scheme**: Soft neon + dark elegant
  - Primary: #00d9ff (Cyan)
  - Secondary: #ff006e (Pink)
  - Accent: #8338ec (Purple)
  - Dark Background: #0a0e27

- **Typography**: Poppins (headings) + Inter (body)
- **Animations**: GSAP-like smooth transitions
- **Effects**: Parallax, particle system, hover interactions

## 📁 File Structure

```
webuntukworldpress/
├── index.html          # HTML structure (SEO-friendly)
├── styles.css          # Full responsive CSS
├── script.js           # Animations & interactions
└── README.md           # Documentation
```

## 🚀 Cara Menggunakan

### 1. Standalone (Direct HTML)
```bash
# Buka index.html di browser
# Atau upload ke hosting dan akses via URL
```

### 2. WordPress Integration

#### Opsi A: Menggunakan Code Injection (Recommended)
1. Install plugin "Code Snippets" atau "Insert Headers and Footers"
2. Copy seluruh isi `index.html` ke custom page/post
3. Gunakan plugin "Custom HTML" block di Gutenberg
4. Paste CSS di `Appearance > Customize > Additional CSS`
5. Paste JS di `Code Snippets` atau theme's functions.php

#### Opsi B: Menggunakan Page Builder (Elementor/Divi)
1. Buat custom HTML widget
2. Paste HTML sections satu per satu
3. Style menggunakan builder's styling tools
4. Tambahkan CSS custom di builder settings
5. Tambahkan JS di page settings

#### Opsi C: Menggunakan Custom Theme
1. Buat child theme WordPress
2. Copy `index.html` ke `page-reval.php`
3. Copy `styles.css` ke `assets/css/reval.css`
4. Copy `script.js` ke `assets/js/reval.js`
5. Enqueue di `functions.php`:

```php
function enqueue_reval_assets() {
    wp_enqueue_style('reval-style', get_stylesheet_directory_uri() . '/assets/css/reval.css');
    wp_enqueue_script('reval-script', get_stylesheet_directory_uri() . '/assets/js/reval.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'enqueue_reval_assets');
```

#### Opsi D: Menggunakan Bricks Builder
1. Buat page baru
2. Edit dengan Bricks
3. Gunakan "HTML" element untuk sections
4. Paste HTML content
5. Add CSS di Bricks > Settings > Custom CSS
6. Add JS di Bricks > Settings > Custom JS

### 3. Customization

#### Mengubah Warna
Edit CSS variables di `styles.css`:
```css
:root {
    --primary: #00d9ff;      /* Ubah warna utama */
    --secondary: #ff006e;    /* Ubah warna sekunder */
    --accent: #8338ec;       /* Ubah warna accent */
    --dark-bg: #0a0e27;      /* Ubah background gelap */
}
```

#### Mengubah Konten
Edit text langsung di `index.html`:
- Hero title: Baris 60-64
- Services: Baris 140-195
- Pricing: Baris 240-310
- Portfolio: Baris 380-430
- Testimonial: Baris 450-510

#### Mengubah WhatsApp Link
Ganti `https://wa.me/62` dengan nomor Anda:
```html
<a href="https://wa.me/62812345678" class="btn btn-primary">Order Sekarang</a>
```

#### Mengubah Jumlah Particles
Edit di `script.js` baris 15:
```javascript
this.particleCount = 50;  // Ubah angka sesuai kebutuhan
```

## 📱 Responsiveness

- **Desktop**: Full layout dengan sidebar
- **Tablet (768px)**: Optimized grid layout
- **Mobile (480px)**: Single column, touch-friendly

Semua breakpoint sudah dioptimasi di CSS.

## ⚡ Performance

- **Particle Animation**: Optimized dengan requestAnimationFrame
- **Lazy Loading**: Images load on demand
- **CSS Animations**: Hardware-accelerated
- **No External Dependencies**: Pure HTML/CSS/JS
- **Minified Ready**: Siap untuk production

## 🔍 SEO Optimization

✅ Semantic HTML5 structure  
✅ Proper heading hierarchy (H1 > H2 > H3)  
✅ Meta tags dan descriptions  
✅ Mobile-friendly responsive design  
✅ Fast loading performance  
✅ Structured data ready  

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Tips

### 1. Menambah Section Baru
```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header">
            <h2>Judul Section</h2>
            <p class="section-subtitle">Subtitle</p>
        </div>
        <!-- Content -->
    </div>
</section>
```

### 2. Menambah Navigation Link
```html
<li><a href="#new-section" class="nav-link">New Section</a></li>
```

### 3. Styling Custom Section
```css
.new-section {
    background: linear-gradient(180deg, rgba(0, 217, 255, 0.05) 0%, transparent 100%);
    padding: var(--spacing-2xl) 0;
}
```

## 🛠️ Troubleshooting

### Particles tidak muncul
- Pastikan canvas element ada di HTML
- Check browser console untuk error
- Verifikasi JavaScript tidak di-block

### Animasi terasa lag
- Kurangi `particleCount` di script.js
- Disable parallax effect jika perlu
- Check browser performance di DevTools

### Responsive tidak bekerja
- Pastikan viewport meta tag ada
- Clear browser cache
- Test di incognito mode

### WhatsApp link tidak bekerja
- Verifikasi format nomor: `https://wa.me/62812345678`
- Gunakan kode negara yang benar
- Test di device yang berbeda

## 📞 Support

Untuk pertanyaan atau issue, silakan hubungi:
- WhatsApp: https://wa.me/62
- Email: hello@reval.studio
- Instagram: @reval.creative

## 📄 License

Free to use for commercial projects. Credit appreciated but not required.

---

**Dibuat dengan ❤️ oleh Reval Creative Studio**

Terakhir diupdate: 2024
