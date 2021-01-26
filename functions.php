<?php
// require_once('inc/custom-post-types.php');
// require_once('inc/media-libary.php');
require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

function theme_files()
{
  wp_deregister_script('jquery');
  wp_enqueue_script('runtime-Scripts', get_theme_file_uri('dist/runtime.js'), array(), '2.0.0');
  wp_enqueue_style('Main-Styles', get_theme_file_uri('dist/styles.css'));
  wp_enqueue_script('Main-Scripts', get_theme_file_uri('dist/scripts.js'), array(), '1.0.0', true);
  // wp_enqueue_style('Default-Stylesheet', get_stylesheet_uri());
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

  add_action('admin_head', 'remove_content_editor');
  /**
   * Remove the content editor from ALL pages 
   */
  function remove_content_editor()
  { 
      remove_post_type_support('page', 'editor');        
  }

  add_action('acf/init', 'my_acf_op_init');
  function my_acf_op_init() {
    if (function_exists('acf_add_options_page')) {
      if (is_admin()) {
          acf_add_options_page(array('page_title' => "Theme settings"));
      }
    }
  }

  function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
  }
  add_filter('upload_mimes', 'cc_mime_types');

  add_action('wp_head', 'additional_head');
  function additional_head(){
    wp_register_script("jquery", site_url('wp-includes/js/jquery/jquery.min.js'), array(), false ,true);
  }

  // Force Gravity Forms to init scripts in the footer and ensure that the DOM is loaded before scripts are executed
  add_filter( 'gform_init_scripts_footer', '__return_true' );
  add_filter( 'gform_cdata_open', 'wrap_gform_cdata_open', 1 );
  function wrap_gform_cdata_open( $content = ” ) {
      if ( ( defined('DOING_AJAX') && DOING_AJAX ) || isset( $_POST['gform_ajax'] ) ) {
          return $content;
      }
      $content = 'document.addEventListener( "DOMContentLoaded", function() { ';
      return $content;
  }
  add_filter( 'gform_cdata_close', 'wrap_gform_cdata_close', 99 );
  function wrap_gform_cdata_close( $content = '' ) {
      if ( ( defined('DOING_AJAX') && DOING_AJAX ) || isset( $_POST['gform_ajax'] ) ) {
          return $content;
      }
      $content = ' }, false );';
      return $content;
  }

  add_filter( 'show_admin_bar', '__return_false' );

  add_action('wp_footer', 'additional_foot');
  function additional_foot(){ 
    if (current_user_can('administrator') || is_admin()) {
    ?>
    <div class="fixed left-4 bottom-2 flex z-100">
      <a href="<?php echo esc_url(site_url('wp-admin/')) ?>" class="text-20 rounded-lg font-mont w-full max-w-btn py-3 bg-indigo-600  text-white font-bold text-center px-3 mr-2">Dashboard</a>
      <a href="<?php echo esc_url(get_edit_post_link()) ?>" class="text-20 rounded-lg font-mont w-full max-w-btn py-3 bg-indigo-600  text-white font-bold text-center px-3">Edit Page</a>
    </div>
  <?php
    }
  }