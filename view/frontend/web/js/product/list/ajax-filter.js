/**
 * Copyright © Shopigo. All rights reserved.
 * See LICENSE.txt for license details (http://opensource.org/licenses/osl-3.0.php).
 */

define([
    'jquery',
    'Magento_Ui/js/modal/alert',
    'mage/apply/main',
    'mage/translate',
    'jquery/ui'
], function ($, alert, mage) {
    /**
     * ProductListCatalogAjaxFilter Widget
     *
     * This widget is submitting form in AJAX when a change is done from the
     * layered navigation block
     */
    $.widget('mage.productListCatalogAjaxFilter', {

        /**
         * Widget options
         */
        options:
        {
            links: 'a:not([data-ajax=false])[href]', // all links except those configured
                                               // with a 'data-ajax="false"' attribute
            contentContainer: '.column.main',
            sidebarMainContainer: '.sidebar-main',
            ajaxRequestTimeout: 10000, // in milliseconds
            scrollToTopEnabled: 1,
            scrollToTopEasing: 'swing',
            scrollToTopDuration: 1200, // in milliseconds
            scrollToTopOffset: 20 // in pixels
        },

        /**
         * Bind elements when the class is instantiated
         *
         * @return void
         */
        _create: function () {
            this._bind($(this.element));
        },

        /**
         * Bind an element
         *
         * @param object element
         * @return void
         */
        _bind: function (element) {
            element.on('click', $.proxy(this.processLink, this));
        },

        /**
         * Process event on link
         *
         * @param event event
         * @return void
         */
        processLink: function (event) {
            if ($(event.target).closest('a').is(this.options.links)) {
                event.preventDefault();
                this.ajaxSubmit($(event.target).closest('a').attr('href'));
            }
        },

        /**
         * Update content and init all components defined via the data-mage-init
         * attribute
         *
         * @param array html HTML content
         * @return void
         */
        updateContent: function (html) {
            if (html.content) {
                // Remove all products wrappers except the first one
                $(this.options.contentContainer).slice(1).remove();

                // Update content
                $(this.options.contentContainer)
                    .html(html.content)
                    .trigger('contentUpdated')
                    .children()
                    .applyBindings();
            }

            if (html.sidebar_main) {
                $(this.options.sidebarMainContainer)
                    .empty()
                    .html(html.sidebar_main)
                    .trigger('contentUpdated')
                    .children()
                    .applyBindings();
            }
        },

        /**
         * Replace the browser URL
         *
         * @param string url
         * @return void
         */
        replaceBrowserUrl: function (url) {
            if (!url) {
                return;
            }

            if (typeof history.replaceState === 'function') {
                history.replaceState(null, null, url);
            }
        },

        /**
         * Scroll to the top of the content container and update content
         *
         * @param array html HTML content
         * @return void
         */
        scrollAndUpdateContent: function (html) {
            if (this.options.scrollToTopEnabled) {
                $('html, body').animate(
                    {
                        scrollTop: $(this.options.contentContainer).offset().top - this.options.scrollToTopOffset
                    },
                    this.options.scrollToTopDuration,
                    this.options.scrollToTopEasing,
                    this.updateContent(html)
                );
            } else {
                this.updateContent(html);
            }
        },

        /**
         * Submit AJAX request
         *
         * @param string url
         * @return void
         */
        ajaxSubmit: function (url) {
            var self = this;

            $.ajax({
                url: url,
                data: 'ajax=1',
                type: 'get',
                dataType: 'json',
                cache: true,
                showLoader: true,
                timeout: this.options.ajaxRequestTimeout
            }).done(function (response) {
                if (response.success) {
                    self.replaceBrowserUrl(url);
                    self.scrollAndUpdateContent(response.html);
                } else {
                    var msg = response.error_message;
                    if (msg) {
                        alert({
                            content: $.mage.__(msg)
                        });
                    }
                }
            }).fail(function (error) {
                alert({
                    content: $.mage.__('Sorry, something went wrong. Please try again later.')
                });
                console.log(JSON.stringify(error));
            });
        }
    });

    return $.mage.productListCatalogAjaxFilter;
});
