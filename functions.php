<?php
// require_once('inc/custom-post-types.php');
// require_once('inc/media-libary.php');
require_once('acf/index.php');
require_once get_template_directory() . '/inc/class-wp-bootstrap-navwalker.php';

function theme_files()
{
  wp_deregister_script('jquery');
  wp_enqueue_script('runtime-Scripts', get_theme_file_uri('dist/runtime.js'), array(), '2.0.0');
  if (file_exists(get_template_directory() . '/dist/vendors.js')) {
    wp_enqueue_script( 'vendors-scripts', get_template_directory_uri() . '/dist/vendors.js', array(), '1.0.0', true );
  }
  wp_enqueue_style('Main-Styles', get_theme_file_uri('dist/styles.min.css'));
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

  function remove_content_editor()
  { 
      remove_post_type_support('page', 'editor');        
  }

  add_action('acf/init', 'my_acf_op_init');
  function my_acf_op_init() {
    if (function_exists('acf_add_options_page')) {
      if (is_admin()) {
          acf_add_options_page(array('page_title' => "Theme Options"));
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

  function format_content($content){
    $li = empty($li) ? 'list-disc' : $li;
    $the_content = wpautop($content, false);
    //$the_content = str_replace("<p", "<p class=\"text-16 tracking-slight-tight leading-6 mb-8 last:mb-0\"", $the_content);
    // $the_content = str_replace("<strong", "<strong class=\"font-bold\"", $the_content);
    // $the_content = str_replace("<a", "<a class=\"font-bold transition-all duration-300 ease-linear hover:opacity-60\"", $the_content);
    // $the_content = str_replace("<em", "<em class=\"italic\"", $the_content);
    // $the_content = str_replace("<h3", "<h3 class=\"uppercase text-green-default font-bold tracking-2xl leading-6\"", $the_content);
    // $the_content = str_replace("<blockquote", "<blockquote class=\"uppercase tracking-2xl font-bold\"", $the_content);
    // $the_content = preg_replace("(<h(1|2|4|5|6))","<h2 class=\"text-28 leading-4 mt-4 mb-2 font-fave-script text-green-default\"", $the_content);
    // $the_content = preg_replace("(</h(1|2|4|5|6)>)","</h2>", $the_content);
    //$the_content = str_replace("<li","<li class=\"text-16 leading-4 ". $li ." mb-4 last:mb-0\"", $the_content);
    //$the_content = str_replace("<ul", "<ul class=\"pl-[10px]\"", $the_content);
    // $the_content = str_replace("<p class=\"text-16 mb-7 last:mb-0\">&nbsp;</p>", "<p class=\"text-16 mb-0\">&nbsp;</p>", $the_content);
  
    return $the_content;
}

function update_safelist($block_classes = ""){
  if ($_SERVER["HTTP_HOST"] == "localhost" && !empty($block_classes)) {
    $path = get_stylesheet_directory_uri();
    $path = str_replace(site_url(), "", $path);
    $path = str_replace("/", "\\", $path);
    $filename = getcwd() . $path . '\safelist.php';
    $myfile = fopen($filename, "a+");
    $size = filesize($filename);
    $should_writeto = false;
    $writeto = "";
    if ($size > 0) {
      $contents = fread($myfile, $size);
      $block_split = explode(" ", $block_classes);
      $list_split = explode(" ", $contents);
      foreach ($block_split as $s_block) {
        $in = true;
        foreach ($list_split as $s_list) {
          if ($s_block == $s_list) {
            $in = false;
            break;
          }
        }
        if ($in) {
          $writeto .= ' ' . $s_block;
          $should_writeto = true;
        }
      }
      if ($should_writeto) {
        fwrite($myfile, $writeto);
      }
    }
    fclose($myfile);
  }
}