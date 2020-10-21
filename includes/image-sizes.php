<?php

/*
 * ************************************************************
 * Image Sizes
 * */

//add_image_size('320x240_scale', '320', '240', false);
add_image_size('320x240_cropped_center_center', '320', '240', ["center", "center"]);
//add_image_size('320x240_cropped_center_top', '320', '240', ["center", "top"]);
//add_image_size('320x240_cropped_center_bottom', '320', '240', ["center", "bottom"]);

//add_image_size('640x480_scale', '640', '480', false);
add_image_size('640x480_cropped_center_center', '640', '480', ["center", "center"]);
//add_image_size('640x480_cropped_center_top', '640', '480', ["center", "top"]);
//add_image_size('640x480_cropped_center_bottom', '640', '480', ["center", "bottom"]);


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


add_image_size('1920x1920_cropped_center_center', '1920', '1920', ["center", "center"]);
//add_image_size('1200x1200_cropped_center_top', '1200', '1200', ["center", "top"]);

add_filter( 'image_size_names_choose', 'mh_custom_image_sizes' );
function mh_custom_image_sizes( $sizes ) {
	return array_merge( $sizes, array(
		'320x240_cropped_center_center' => __( '320x240_cropped_center_center' ),
		'640x480_cropped_center_center' => __( '640x480_cropped_center_center' ),
		'980x480_cropped_center_center' => __( '980x480_cropped_center_center' ),
		'980x720_cropped_center_center' => __( '980x720_cropped_center_center' ),
		'1200x480_cropped_center_center' => __( '1200x480_cropped_center_center' ),
		'1200x1200_cropped_center_center' => __( '1200x1200_cropped_center_center' ),
		'1920x1920_cropped_center_center' => __( '1920x1920_cropped_center_center' ),
	) );
}
