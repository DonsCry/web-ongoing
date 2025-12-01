<?php
/**
 * WordPress Stubs for IDE
 * This file helps IDE recognize WordPress functions
 * It's not used in production
 */

// Core WordPress Functions
function wp_enqueue_style($handle, $src = '', $deps = array(), $ver = false, $media = 'all') {}
function wp_enqueue_script($handle, $src = '', $deps = array(), $ver = false, $in_footer = false) {}
function get_stylesheet_uri() {}
function get_template_directory_uri() {}
function add_action($hook, $function_to_add, $priority = 10, $accepted_args = 1) {}
function add_filter($hook, $function_to_add, $priority = 10, $accepted_args = 1) {}
function add_theme_support($feature, $args = array()) {}
function register_nav_menus($locations = array()) {}
function wp_head() {}
function wp_body_open() {}
function wp_footer() {}
function bloginfo($show = '') {}
function body_class($class = '') {}
function language_attributes($echo = true) {}
function is_front_page() {}
function date($format, $timestamp = null) {}
function __($text, $domain = 'default') {}
function get_header($name = null) {}
function get_footer($name = null) {}
