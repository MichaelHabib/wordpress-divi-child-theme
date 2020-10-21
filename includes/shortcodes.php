<?php


/*
 * Get Current Page Featured Image URL
 * Source: https://wordpress.stackexchange.com/questions/213768/featured-image-shortcode
 * */
add_shortcode('mh_get_current_page_featured_image_url', 'mh_get_current_page_featured_image_url');

function mh_get_current_page_featured_image_url($atts)
{
	global $post;

	// Image to display
	$thumbnail = get_the_post_thumbnail($post->ID);

	// ID of featured image
	$thumbnail_id = get_post_thumbnail_id();

	// Caption from featured image's WP_Post
//	$caption = get_post($thumbnail_id)->post_excerpt;

	// Link to attachment page

	$link = get_permalink($thumbnail_id);

	return get_the_post_thumbnail_url($post->ID);
//	return $thumbnail;
}
