<?php
/**
 * Template Name: Reval Landing Page
 * Description: Landing page template untuk Reval Creative Studio
 */

get_header();
?>

<!-- Navigation -->
<nav class="navbar">
    <div class="container">
        <div class="nav-wrapper">
            <div class="logo">
                <span class="logo-text">Reval</span>
                <span class="logo-accent">Creative</span>
            </div>
            <ul class="nav-menu">
                <li><a href="#home" class="nav-link">Home</a></li>
                <li><a href="#about" class="nav-link">Tentang</a></li>
                <li><a href="#services" class="nav-link">Layanan</a></li>
                <li><a href="#pricing" class="nav-link">Harga</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li><a href="#testimonial" class="nav-link">Testimoni</a></li>
            </ul>
            <button class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
</nav>

<!-- Hero Section -->
<section id="home" class="hero">
    <div class="hero-background">
        <div class="gradient-mesh"></div>
        <canvas id="particleCanvas"></canvas>
    </div>
    <div class="container">
        <div class="hero-content">
            <h1 class="hero-title">
                <span class="word">Web</span>
                <span class="word">&</span>
                <span class="word">Mobile</span>
                <span class="word">Development</span>
            </h1>
            <p class="hero-subtitle">
                Spesialis dalam Web Development dan Mobile App Development dengan Flutter. Kami menciptakan solusi digital yang inovatif, elegan, dan performa tinggi untuk membawa bisnis Anda ke level berikutnya.
            </p>
            <div class="hero-cta">
                <a href="https://wa.me/081936514430" class="btn btn-primary" target="_blank">Order Sekarang</a>
                <a href="#portfolio" class="btn btn-secondary">Lihat Portfolio</a>
            </div>
        </div>
    </div>
</section>

<?php
get_footer();
?>
