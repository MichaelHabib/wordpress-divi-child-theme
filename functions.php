<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array(  ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );
         
if ( !function_exists( 'child_theme_configurator_css' ) ):
    function child_theme_configurator_css() {
        wp_enqueue_style( 'chld_thm_cfg_separate', trailingslashit( get_stylesheet_directory_uri() ) . 'ctc-style.css', array( 'chld_thm_cfg_parent','divi-style' ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'child_theme_configurator_css', 20 );

// END ENQUEUE PARENT ACTION

add_image_size( '320x240_scale', '320', '240', false);
add_image_size( '320x240_cropped_center_center', '320', '240', [ "center", "center"] );
add_image_size( '320x240_cropped_center_top', '320', '240', [ "center", "top"] );
add_image_size( '320x240_cropped_center_bottom', '320', '240', [ "center", "bottom"] );

add_image_size( '640x480_scale', '640', '480', false);														
add_image_size( '640x480_cropped_center_center', '640', '480', [ "center", "center"] );
add_image_size( '640x480_cropped_center_top', '640', '480', [ "center", "top"] );
add_image_size( '640x480_cropped_center_bottom', '640', '480', [ "center", "bottom"] );
															
add_image_size( '980x720_scale', '980', '720', false);																
add_image_size( '980x720_cropped_center_center', '980', '720', [ "center", "center"] );
add_image_size( '980x720_cropped_center_top', '980', '720', [ "center", "top"] );
add_image_size( '980x720_cropped_center_bottom', '980', '720', [ "center", "bottom"] );
																
add_image_size( '980x480_cropped_center_center', '980', '480', [ "center", "center"] );
add_image_size( '980x480_cropped_center_top', '980', '480', [ "center", "top"] );
add_image_size( '980x480_cropped_center_bottom', '980', '480', [ "center", "bottom"] );
																
add_image_size( '1200x480_cropped_center_center', '1200', '480', [ "center", "center"] );
add_image_size( '1200x480_cropped_center_top', '1200', '480', [ "center", "top"] );
add_image_size( '1200x480_cropped_center_bottom', '1200', '480', [ "center", "bottom"] );

																
add_image_size( '1200x1200_cropped_center_center', '1200', '1200', [ "center", "center"] );
add_image_size( '1200x1200_cropped_center_top', '1200', '1200', [ "center", "top"] );
