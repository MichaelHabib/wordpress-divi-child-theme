<?php

// Exit if accessed directly
if (!defined('ABSPATH')) {
	exit;
}

/*
 * Define Variables
 * --------------------------------------------
 */
$parent_theme_dir_uri = trailingslashit(get_template_directory_uri());
$child_theme_dir_uri = trailingslashit(get_stylesheet_directory_uri());


// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if (!function_exists('enqueue_parent_ftheme_files')) {

	function enqueue_parent_ftheme_files()
	{
		wp_enqueue_style('chld_thm_cfg_parent', trailingslashit(get_template_directory_uri()) . 'style.css', array());
	}

}
add_action('wp_enqueue_scripts', 'enqueue_parent_ftheme_files', 10);

//if (!function_exists('child_theme_configurator_css')) {
//
//	function child_theme_configurator_css()
//	{
//		wp_enqueue_style('chld_thm_cfg_separate', trailingslashit(get_stylesheet_directory_uri()) . 'ctc-style.css', array('chld_thm_cfg_parent', 'divi-style'));
//	}
//
//}
//add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 20);


/*
 * ************************************************************
 * Enqueue Assets
 * */
function enqueue_child_theme_files()
{
	wp_enqueue_style('app.css', trailingslashit(get_stylesheet_directory_uri()) . "/dist/app.css");
//	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);

	wp_enqueue_style('font-awesome-4', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

//	wp_enqueue_script('magnific-popup-script', 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js', array('jquery'), null, true);
//	wp_enqueue_script('magnific-popup-custom-script', trailingslashit(get_stylesheet_directory_uri()) . '/assets/js/magnific-popup.custom.js', array('jquery'), null, true);
//	wp_enqueue_style('magnific-popup-style', 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css');

//	wp_enqueue_script('swiper-script', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js', array(), null, true);
//	wp_enqueue_script('swiper-custom-script', trailingslashit(get_stylesheet_directory_uri()) . '/assets/js/swiper.custom.js', array('jquery'), null, true);
//	wp_enqueue_style('swiper-style', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css');

	wp_enqueue_script('app.js', trailingslashit(get_stylesheet_directory_uri()) . '/dist/app.js', array(), '1.0.0', true);


}

add_action('wp_enqueue_scripts', 'enqueue_child_theme_files');



include_once "includes/shortcodes.php";
include_once "includes/image-sizes.php";
include_once "includes/css-generator.php";
