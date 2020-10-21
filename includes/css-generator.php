<?php

function mh_add_dynamic_css()
{

	?>
    <style>
        .featured_image_as_bg{
            background: url('<?php echo do_shortcode('[mh_get_current_page_featured_image_url]'); ?>') no-repeat center;
            background-size: cover;
            background-blend-mode:darken;
    </style>

	<?php
}

add_action('wp_head', 'mh_add_dynamic_css');
