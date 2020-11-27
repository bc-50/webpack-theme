<?php
// require_once('inc/custom-post-types.php');
// require_once('inc/media-libary.php');
require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

function theme_files()
{
  wp_deregister_script('jquery');
  wp_register_script('jquery', "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js", false, null);
  wp_enqueue_script('jquery');
  wp_enqueue_script('Main-Styles', get_theme_file_uri('dist/style.js'));
  wp_enqueue_script('Main-Scripts', get_theme_file_uri('dist/index.js'), array(), '1.0.0', true);
  // wp_enqueue_style('Default-Stylesheet', get_stylesheet_uri());
  wp_enqueue_style('FontAwes', 'https://use.fontawesome.com/releases/v5.7.2/css/all.css');
  /* fonts */
  
}

add_action('wp_enqueue_scripts', 'theme_files');

/* Extra theme support */
function extra_theme_support()
{
  register_nav_menus(array(
    'primary' => __('Primary Menu')
  ));
  add_theme_support( 'title-tag' );
  add_theme_support( 'post-thumbnails' );
}

add_action('after_setup_theme', 'extra_theme_support');

add_action('init', 'brace_autoload_shortcodes', 1);
function brace_autoload_shortcodes(){
    $dir = get_stylesheet_directory() . '/shortcodes/visual-composer';
    $pattern = $dir . '/*.php';
    
    $files = glob($pattern);
    foreach($files as $file){
        require_once($file);        
    }
  }


