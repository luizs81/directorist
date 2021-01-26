;(function ($) {
    // Cleare seen Announcements
    var cleared_seen_announcements = false;
    $( '.atbd_tn_link' ).on( 'click', function() {
        if ( cleared_seen_announcements ) { return; }
        var terget = $( this ).attr( 'target' );

        if ( 'announcement' === terget ) {
            // console.log( terget, 'clear seen announcements' );

            $.ajax({
                type: "post",
                url: atbdp_public_data.ajaxurl,
                data: { action: 'atbdp_clear_seen_announcements' },
                success: function( response ) {
                    // console.log( response );

                    if ( response.success ) {
                        cleared_seen_announcements = true;
                        $( '.new-announcement-count' ).removeClass( 'show' );
                        $( '.new-announcement-count' ).html( '' );
                    }
                },
                error: function( error ) {
                    console.log( { error } );
                },
            })
        }
    });

    // Closing the Announcement
    var closing_announcement = false;
    $('.close-announcement').on('click', function ( e ) {
        e.preventDefault;

        if ( closing_announcement ) { console.log( 'Please wait...' ); return; }

        var post_id = $( this ).data( 'post-id' );
        var form_data = {
            action: 'atbdp_close_announcement',
            post_id: post_id,
        }

        var button_default_html = $( self ).html();
        closing_announcement = true;
        var self = this;

        $.ajax({
            type: "post",
            url: atbdp_public_data.ajaxurl,
            data: form_data,
            beforeSend() {
                $( self ).html( '<span class="fas fa-spinner fa-spin"></span> ' );
                $( self ).addClass( 'disable' );
                $( self ).attr( 'disable', true );
            },
            success: function( response ) {
                // console.log( { response } );
                closing_announcement = false;

                $( self ).removeClass( 'disable' );
                $( self ).attr( 'disable', false );

                if ( response.success ) {
                    $( '.announcement-id-' + post_id ).remove();

                    if ( ! $( '.announcement-item' ).length ) {
                        location.reload();
                    }
                } else {
                    $( self ).html( 'Close' );
                }
            },
            error: function( error ) {
                console.log( { error } );

                $( self ).html( button_default_html );
                $( self ).removeClass( 'disable' );
                $( self ).attr( 'disable', false );

                closing_announcement = false;
            },
        })
    });
})(jQuery);