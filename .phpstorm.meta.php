<?php
/**
 * PHPStorm Meta File
 * Helps IDE recognize WordPress functions
 */

namespace PHPSTORM_META {
    // WordPress Functions
    override(\wp_enqueue_style(), map([
        '' => '@',
    ]));
    
    override(\wp_enqueue_script(), map([
        '' => '@',
    ]));
    
    override(\get_stylesheet_uri(), type('@string'));
    override(\get_template_directory_uri(), type('@string'));
    override(\bloginfo(), type('@void'));
    override(\wp_head(), type('@void'));
    override(\wp_body_open(), type('@void'));
    override(\wp_footer(), type('@void'));
    override(\body_class(), type('@array'));
    override(\language_attributes(), type('@string'));
    override(\is_front_page(), type('@bool'));
}
