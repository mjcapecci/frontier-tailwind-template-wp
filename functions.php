<?php

function template_files() {

  // AOS
  wp_enqueue_style('AOS_animate', 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css', false, null);
  wp_enqueue_script('AOS', 'https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js', false, null, true);

  // Bundled scripts
  wp_enqueue_script('scripts', get_theme_file_uri('/assets/bundled/scripts-bundle.js'), NULL, 1.0, true);
  wp_enqueue_script('config', get_theme_file_uri('/assets/bundled/config-bundle.js'), NULL, 1.0, true);

  // Styles
  wp_enqueue_style('main_styles', get_stylesheet_uri());
}

add_action('wp_enqueue_scripts', 'template_files');
add_filter('show_admin_bar', '__return_false');

?>