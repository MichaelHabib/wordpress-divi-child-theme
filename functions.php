<?php

function fj_remove_version( $url ) {
    return remove_query_arg( 'ver', $url );
}

add_filter( 'style_loader_src', 'fj_remove_version' );