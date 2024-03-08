(function($) {
    $(document).ready(function() {
        // Function to retrieve the script tag's custom attribute value
        function getScriptOption() {
            // Get all script tags
            var scripts = document.getElementsByTagName('script');
            var currentScript = scripts[scripts.length - 1]; // Current script is the last one

            // Read the 'data-option' attribute
            return currentScript.getAttribute('data-option');
        }

        const option = getScriptOption(); // 'div' or 'link'
        const hrefText = 'REToolkit - SEO for Real Estate Investing';
        const baseURL = window.location.hostname;
        const baseHref = 'https://retoolkit.io/?utm_source=' + encodeURIComponent(baseURL);

        // Function to create and append the responsive div with image and link
        function createResponsiveDiv() {
            var responsiveDiv = $('<div/>', {
                css: {
                    width: '100%',
                    maxWidth: '600px',
                    margin: '0 auto'
                }
            });

            var imageRow = $('<div/>', {
                css: {
                    width: '100%',
                    maxWidth: '200px',
                    marginTop: '20px',
                    marginBottom: '20px'
                }
            }).appendTo(responsiveDiv);
            
            // Create the <a> element with the baseHref as the href attribute
            var linkWrapper = $('<a/>', {
                href: baseHref,
                css: {
                    // Any CSS you want to apply to the link
                }
            });

            // Create the <img> element
            var imageElement = $('<img/>', {
                src: 'https://global.divhunt.com/b6840b489b614157d3f82de68e8da0d9_10914.webp',
                alt: hrefText,
                css: {
                    width: '100%',
                    height: 'auto'
                }
            });

            // Append the <img> to the <a>
            imageElement.appendTo(linkWrapper);

            // Append the <a> (now containing the <img>) to the imageRow
            linkWrapper.appendTo(imageRow);

            var linkRow = $('<div/>', {
                css: {
                    width: '100%'
                }
            }).appendTo(responsiveDiv);

            $('<a/>', {
                href: baseHref,
                text: hrefText,
                css: {
                    fontSize: '0.75em',
                }
            }).appendTo(linkRow);

            $('footer .disclaimer').append(responsiveDiv);
        }

        // Function to create and append just the attribution link
        function createAttributionLink() {
            var attributionText = $('<span>', {
                text: ' | '
            });

            var attributionLink = $('<a>', {
                href: baseHref,
                text: hrefText
            });

            $('footer .copy').append(attributionText).append(attributionLink);
        }

        // Decide which content to insert based on the 'data-option' attribute
        if (option === 'div') {
            createResponsiveDiv();
        } else if (option === 'link') {
            createAttributionLink();
        }
    });
})(jQuery);