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

if (!function_exists('enqueue_parent_ftheme_files')):

	function enqueue_parent_ftheme_files()
	{
		wp_enqueue_style('chld_thm_cfg_parent', trailingslashit(get_template_directory_uri()) . 'style.css', array());
	}

endif;
add_action('wp_enqueue_scripts', 'enqueue_parent_ftheme_files', 10);

if (!function_exists('child_theme_configurator_css')):

	function child_theme_configurator_css()
	{
		wp_enqueue_style('chld_thm_cfg_separate', trailingslashit(get_stylesheet_directory_uri()) . 'ctc-style.css', array('chld_thm_cfg_parent', 'divi-style'));
	}

endif;
add_action('wp_enqueue_scripts', 'child_theme_configurator_css', 20);

/**
 * Proper way to enqueue scripts and styles.
 */
function enqueue_child_them_files()
{
	wp_enqueue_style('main.css', trailingslashit(get_stylesheet_directory_uri()) . "/assets/css/main.css");
	wp_enqueue_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', array(), null, true);
	wp_enqueue_style('magnific-popup-style', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

	wp_enqueue_script('magnific-popup-script', 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js', array('jquery'), null, true);
	wp_enqueue_script('magnific-popup-custom-script', trailingslashit(get_stylesheet_directory_uri()) . '/assets/js/magnific-popup.custom.js', array('jquery'), null, true);
	wp_enqueue_style('magnific-popup-style', 'https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css');
//	wp_enqueue_script('swiper-script', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js', array(), null, true);
//	wp_enqueue_script('swiper-custom-script', trailingslashit(get_stylesheet_directory_uri()) . '/assets/js/swiper.custom.js', array('jquery'), null, true);
//	wp_enqueue_style('swiper-style', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css');
	wp_enqueue_script('custom.js', trailingslashit(get_stylesheet_directory_uri()) . '/assets/js/custom.js', array(), '1.0.0', true);


}

add_action('wp_enqueue_scripts', 'enqueue_child_them_files');


// END ENQUEUE PARENT ACTION

//add_image_size('320x240_scale', '320', '240', false);
add_image_size('320x240_cropped_center_center', '320', '240', ["center", "center"]);
//add_image_size('320x240_cropped_center_top', '320', '240', ["center", "top"]);
//add_image_size('320x240_cropped_center_bottom', '320', '240', ["center", "bottom"]);

//add_image_size('640x480_scale', '640', '480', false);
add_image_size('640x480_cropped_center_center', '640', '480', ["center", "center"]);
//add_image_size('640x480_cropped_center_top', '640', '480', ["center", "top"]);
//add_image_size('640x480_cropped_center_bottom', '640', '480', ["center", "bottom"]);


//add_image_size('640x400_scale', '640', '400', false);
add_image_size('640x400_cropped_center_center', '640', '400', ["center", "center"]);
//add_image_size('640x400_cropped_center_top', '640', '400', ["center", "top"]);
//add_image_size('640x400_cropped_center_bottom', '640', '400', ["center", "bottom"]);

//add_image_size('980x720_scale', '980', '720', false);
add_image_size('980x720_cropped_center_center', '980', '720', ["center", "center"]);
//add_image_size('980x720_cropped_center_top', '980', '720', ["center", "top"]);
//add_image_size('980x720_cropped_center_bottom', '980', '720', ["center", "bottom"]);

add_image_size('980x480_cropped_center_center', '980', '480', ["center", "center"]);
//add_image_size('980x480_cropped_center_top', '980', '480', ["center", "top"]);
//add_image_size('980x480_cropped_center_bottom', '980', '480', ["center", "bottom"]);

add_image_size('1200x480_cropped_center_center', '1200', '480', ["center", "center"]);
//add_image_size('1200x480_cropped_center_top', '1200', '480', ["center", "top"]);
//add_image_size('1200x480_cropped_center_bottom', '1200', '480', ["center", "bottom"]);


add_image_size('1200x1200_cropped_center_center', '1200', '1200', ["center", "center"]);
//add_image_size('1200x1200_cropped_center_top', '1200', '1200', ["center", "top"]);
