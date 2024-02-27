<?php

namespace BookPlugin;

class BookCategoryTaxonomy extends Singleton
{
    protected static $instance;

    protected function __construct()
    {
        add_action('init', array($this, 'registerBookCategoryTaxonomy'));
    }

    public function registerBookCategoryTaxonomy()
    {


        $labels = array(
            'name' => _x('Book Genres', 'Taxonomy General Name', TEXT_DOMAIN),
            'singular_name' => _x('Book Category', 'Taxonomy Singular Name', TEXT_DOMAIN),
            'menu_name' => __('Genres', TEXT_DOMAIN),
            'all_items' => __('All Genres', TEXT_DOMAIN),
            'parent_item' => __('Parent Genre', TEXT_DOMAIN),
            'parent_item_colon' => __('Parent Genre', TEXT_DOMAIN),
            'new_item_name' => __('New Genre', TEXT_DOMAIN),
            'add_new_item' => __('Add New Genre', TEXT_DOMAIN),
            'edit_item' => __('Edit Genre', TEXT_DOMAIN),
            'update_item' => __('Update Genre', TEXT_DOMAIN),
            'view_item' => __('View Genre', TEXT_DOMAIN),
            'separate_items_with_commas' => __('Separate items with commas', TEXT_DOMAIN),
            'add_or_remove_items' => __('Add or remove Genres', TEXT_DOMAIN),
            'choose_from_most_used' => __('Choose from the most used', TEXT_DOMAIN),
            'popular_items' => __('Popular Genres', TEXT_DOMAIN),
            'search_items' => __('Search Genres', TEXT_DOMAIN),
            'not_found' => __('Not Found', TEXT_DOMAIN),
            'no_terms' => __('No Genres', TEXT_DOMAIN),
            'items_list' => __('Items Genres', TEXT_DOMAIN),
            'items_list_navigation' => __('Genre list navigation', TEXT_DOMAIN),
        );
        $args = array(
            'labels' => $labels,
            'hierarchical' => true,
            'public' => true,
            'show_ui' => true,
            'show_admin_column' => true,
            'show_in_nav_menus' => true,
            'show_tagcloud' => true,
            'show_in_rest' => true,
        );
        register_taxonomy('book-genre', array('book'), $args);

    }
}





