<?php
/**
 * @author  AazzTech
 * @since   7.0
 * @version 7.0
 */
?>
<div id="directorist" class="directorist atbd_wrapper atbd_add_listing_wrapper">
    <div class="<?php echo apply_filters('atbdp_add_listing_container_fluid', $container_fluid) ?>">
        <form action="<?php echo esc_url($_SERVER['REQUEST_URI']); ?>" method="post" id="add-listing-form">
            <fieldset>
                <?php
                do_action('atbdb_before_add_listing_from_frontend');//for dev purpose
                ?>
                <div class="atbdp-form-fields">
                    <?php
                    /**
                     * @since 7.0
                     * @hooked Directorist_Template_Hooks::add_listing_title - 10
                     */
                    do_action( 'directorist_add_listing_title' );

                    /*
                     * if fires after
                     * @since 4.0.4
                     */
                    do_action('atbdp_listing_form_after_add_listing_title', $listing_info)
                    ?>
                    <!--add nonce field security -->
                    <?php ATBDP()->listing->add_listing->show_nonce_field(); ?>
                    <input type="hidden" name="add_listing_form" value="1">
                    <input type="hidden" name="listing_id" value="<?php echo !empty($p_id) ? esc_attr($p_id) : ''; ?>">
                    <div class="row">
                        <div class="col-md-12">
                            <?php
                            /**
                             * It fires before the listing title
                             * @param string $type Page type.
                             * @since 1.1.1
                             **/
                            do_action('atbdp_edit_before_title_fields', 'add_listing_page_frontend');
                            ?>

                            <div class="atbdb_content_module">
                                <?php
                                /**
                                 * @since 7.0
                                 * @hooked Directorist_Template_Hooks::add_listing_general - 10
                                 * @hooked Directorist_Template_Hooks::add_listing_contact - 15
                                 * @hooked Directorist_Template_Hooks::add_listing_map - 20
                                 * @hooked Directorist_Template_Hooks::add_listing_image - 25
                                 * @hooked Directorist_Template_Hooks::add_listing_submit - 30
                                 */
                                do_action( 'directorist_add_listing_contents');
                                ?>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</div>