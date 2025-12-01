# WordPress Integration Guide - Reval Creative Studio

Panduan lengkap mengintegrasikan landing page ke WordPress dengan berbagai metode.

## 🎯 Pilihan Integrasi

### 1. ✅ RECOMMENDED: Elementor Page Builder

**Keuntungan:**
- Drag & drop interface
- Visual editing
- Responsive preview real-time
- Mudah di-customize

**Langkah-langkah:**

1. **Install Elementor**
   - WordPress Dashboard > Plugins > Add New
   - Search "Elementor"
   - Install dan Activate

2. **Buat Page Baru**
   - Pages > Add New
   - Judul: "Reval Creative Studio"
   - Click "Edit with Elementor"

3. **Setup Global Styles**
   - Elementor > Settings > Colors
   - Primary: #00d9ff
   - Secondary: #ff006e
   - Accent: #8338ec
   - Dark: #0a0e27

4. **Tambah HTML Widget untuk Setiap Section**
   - Drag "HTML" widget
   - Paste HTML dari section yang sesuai
   - Repeat untuk semua sections

5. **Import CSS**
   - Elementor > Settings > Custom CSS
   - Paste seluruh isi styles.css

6. **Import JavaScript**
   - WordPress > Appearance > Customize > Additional CSS
   - Paste seluruh isi script.js di footer

---

### 2. Divi Builder

**Langkah-langkah:**

1. **Buat Page Baru**
   - Pages > Add New
   - Click "Use Divi Builder"

2. **Import dari Code**
   - Divi > Theme Options > Import & Export
   - Paste HTML sections

3. **Styling**
   - Gunakan Divi's design tools
   - Atau paste CSS di Divi > Theme Options > Custom CSS

4. **JavaScript**
   - Add ke footer via Code Snippets plugin

---

### 3. Bricks Builder

**Langkah-langkah:**

1. **Buat Page Baru**
   - Pages > Add New
   - Edit dengan Bricks

2. **Tambah HTML Elements**
   - Drag "HTML" element
   - Paste section HTML

3. **Styling**
   - Bricks > Settings > Custom CSS
   - Paste styles.css content

4. **JavaScript**
   - Bricks > Settings > Custom JS
   - Paste script.js content

---

### 4. Gutenberg (Block Editor)

**Langkah-langkah:**

1. **Buat Page Baru**
   - Pages > Add New
   - Gunakan Gutenberg editor

2. **Tambah Custom HTML Block**
   - Click "+" untuk add block
   - Search "Custom HTML"
   - Paste HTML sections

3. **Styling**
   - Appearance > Customize > Additional CSS
   - Paste styles.css

4. **JavaScript**
   - Plugins > Add New > Search "Code Snippets"
   - Install dan activate
   - Snippets > Add New
   - Paste script.js

---

### 5. Code Injection Method (Termudah)

**Langkah-langkah:**

1. **Install Plugin**
   - Plugins > Add New
   - Search "Insert Headers and Footers"
   - Install dan Activate

2. **Add CSS**
   - Settings > Insert Headers and Footers
   - Paste di "Scripts in Header":
   ```html
   <style>
   /* Paste seluruh isi styles.css di sini */
   </style>
   ```

3. **Add JavaScript**
   - Paste di "Scripts in Footer":
   ```html
   <script>
   /* Paste seluruh isi script.js di sini */
   </script>
   ```

4. **Buat Page Baru**
   - Pages > Add New
   - Paste seluruh isi index.html di content editor
   - Publish

---

### 6. Custom Theme Integration

**Untuk developer yang ingin full control:**

1. **Setup Child Theme**
   ```
   wp-content/themes/your-theme-child/
   ├── style.css
   ├── functions.php
   ├── page-reval.php
   └── assets/
       ├── css/reval.css
       └── js/reval.js
   ```

2. **Edit functions.php**
   ```php
   <?php
   // Enqueue Reval Assets
   function enqueue_reval_assets() {
       if (is_page_template('page-reval.php')) {
           wp_enqueue_style(
               'reval-style',
               get_stylesheet_directory_uri() . '/assets/css/reval.css',
               array(),
               '1.0'
           );
           
           wp_enqueue_script(
               'reval-script',
               get_stylesheet_directory_uri() . '/assets/js/reval.js',
               array(),
               '1.0',
               true
           );
       }
   }
   add_action('wp_enqueue_scripts', 'enqueue_reval_assets');
   ?>
   ```

3. **Buat page-reval.php**
   ```php
   <?php
   get_header();
   ?>
   <!-- Paste seluruh isi index.html di sini, tanpa <!DOCTYPE> dan <html> tags -->
   <?php
   get_footer();
   ?>
   ```

4. **Assign Template**
   - Pages > Add New
   - Page Attributes > Template > Reval
   - Publish

---

## 🔧 Customization untuk WordPress

### 1. Mengubah WhatsApp Number

**Cari di HTML:**
```html
<a href="https://wa.me/62" class="btn btn-primary">
```

**Ganti dengan:**
```html
<a href="https://wa.me/62812345678" class="btn btn-primary">
```

### 2. Mengubah Email

**Cari di HTML:**
```html
<a href="mailto:hello@reval.studio">Email</a>
```

**Ganti dengan:**
```html
<a href="mailto:your-email@domain.com">Email</a>
```

### 3. Mengubah Social Media Links

**Cari di footer:**
```html
<li><a href="#">Instagram</a></li>
<li><a href="#">LinkedIn</a></li>
```

**Ganti dengan:**
```html
<li><a href="https://instagram.com/your-handle">Instagram</a></li>
<li><a href="https://linkedin.com/company/your-company">LinkedIn</a></li>
```

### 4. Menambah Google Analytics

**Tambahkan di functions.php:**
```php
function add_google_analytics() {
    ?>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_ID');
    </script>
    <?php
}
add_action('wp_head', 'add_google_analytics');
```

### 5. Menambah Meta Tags

**Tambahkan di functions.php:**
```php
function add_meta_tags() {
    ?>
    <meta name="description" content="Reval Creative Studio - Jasa Desain & Development Modern">
    <meta name="keywords" content="desain, development, website, mobile app, ui/ux">
    <meta property="og:title" content="Reval Creative Studio">
    <meta property="og:description" content="Solusi desain dan development digital yang inovatif">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/og-image.jpg">
    <?php
}
add_action('wp_head', 'add_meta_tags');
```

---

## 📱 Mobile Optimization untuk WordPress

### 1. Ensure Mobile Friendly
- Test di Google Mobile-Friendly Test
- Verify viewport meta tag ada
- Check touch targets are 48px minimum

### 2. Optimize Images
- Install "Smush" plugin untuk compress images
- Use WebP format
- Lazy load images

### 3. Minify Assets
- Install "Autoptimize" plugin
- Enable CSS/JS minification
- Enable file aggregation

---

## 🚀 Performance Tips

### 1. Caching
```php
// Tambahkan di functions.php
define('WP_CACHE', true);
```

### 2. Lazy Load
```html
<!-- Ubah img tags menjadi -->
<img src="placeholder.jpg" data-src="actual.jpg" loading="lazy" alt="Description">
```

### 3. Defer JavaScript
```php
wp_enqueue_script('reval-script', ..., array(), '1.0', true); // true = footer
```

---

## 🔒 Security

### 1. Sanitize Inputs
```php
$whatsapp = sanitize_text_field($_POST['whatsapp']);
```

### 2. Escape Outputs
```php
echo esc_html($title);
echo esc_url($link);
```

### 3. Verify Nonces
```php
wp_verify_nonce($_POST['nonce'], 'action_name');
```

---

## 🐛 Troubleshooting

### Issue: CSS tidak loaded
**Solution:**
- Check file path
- Verify file permissions
- Clear cache
- Check browser console

### Issue: JavaScript tidak bekerja
**Solution:**
- Verify script enqueued properly
- Check for jQuery conflicts
- Disable conflicting plugins
- Check browser console for errors

### Issue: Particles tidak muncul
**Solution:**
- Verify canvas element exists
- Check JavaScript console
- Ensure script.js loaded
- Test di different browser

### Issue: Responsive tidak bekerja
**Solution:**
- Clear cache
- Check viewport meta tag
- Verify CSS media queries
- Test di incognito mode

### Issue: WhatsApp link tidak bekerja
**Solution:**
- Verify format: `https://wa.me/62812345678`
- Test di mobile device
- Check country code
- Ensure number is valid

---

## 📊 SEO Optimization

### 1. Add Yoast SEO
- Install "Yoast SEO" plugin
- Configure focus keyword
- Optimize readability
- Add meta description

### 2. Structured Data
```php
function add_structured_data() {
    $schema = array(
        '@context' => 'https://schema.org',
        '@type' => 'LocalBusiness',
        'name' => 'Reval Creative Studio',
        'description' => 'Jasa Desain & Development',
        'url' => get_site_url(),
        'telephone' => '+62812345678'
    );
    echo '<script type="application/ld+json">' . json_encode($schema) . '</script>';
}
add_action('wp_head', 'add_structured_data');
```

### 3. Sitemap
- Install "Google XML Sitemaps"
- Submit to Google Search Console

---

## 📝 Maintenance

### Regular Updates
- Update WordPress core
- Update plugins
- Update themes
- Backup database

### Monitoring
- Monitor page speed
- Check for broken links
- Monitor 404 errors
- Check analytics

---

## 🎓 Resources

- [Elementor Documentation](https://elementor.com/help/)
- [WordPress Developer Handbook](https://developer.wordpress.org/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WordPress Security](https://wordpress.org/support/article/hardening-wordpress/)

---

**Butuh bantuan? Hubungi support kami via WhatsApp!**
