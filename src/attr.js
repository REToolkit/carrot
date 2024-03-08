(function($) {
    $(document).ready(function() {
        // On some themes there is an incorrect filter set that breaks contrast for images. This functions fixes it - ex: https://www.cashofferinfo.com/
        function removeSpecificContrastFilter() {
            // Select all elements with the class 'disclaimer'
            $('.disclaimer').each(function() {
                // Get the current 'filter' style property for the element
                var currentFilter = $(this).css('filter');
        
                // Check if the current filter is exactly 'contrast(100)' the correct value here should be in percent.
                if (currentFilter === 'contrast(100)') {
                    // Remove the 'filter' style property by setting it to 'none'
                    $(this).css('filter', 'none');
                }
            });
        }
        removeSpecificContrastFilter();        

        // Function to retrieve the script tag's custom attribute value
        function getScriptOptions() {
            var currentScript = document.getElementById('io.retoolkit.attr');
            var options = {
                type: 'link', // Default type
                alignment: 'center', // Default alignment
                hrefText: 'REToolkit - SEO for Real Estate Investing',
                utm_source: "client",
                utm_medium: "footer",
                utm_campaign: "brand",
            };
        
            try {
                var parsedOptions = JSON.parse(currentScript.getAttribute('data-option'));
                options = { ...options, ...parsedOptions };
                options.utm_content = window.location.hostname;
        
                var utmParams = Object.keys(options).reduce((acc, key) => {
                    if (key.startsWith('utm_')) {
                        acc.push(`${key}=${encodeURIComponent(options[key])}`);
                    }
                    return acc;
                }, []).join('&');
        
                options.baseUrl = `https://retoolkit.io/?${utmParams}`;
        
            } catch(e) {
                console.error('Error parsing JSON from data-option attribute', e);
                options.utm_content = window.location.hostname;
            }
        
            return options;
        }
        
        const options = getScriptOptions(); // 'logo' or 'link'

        // Function to create and append the responsive div with image and link
        function createResponsiveDiv() {
            var alignmentCss = options.alignment === 'left' ? { textAlign: 'left' } : { margin: '0 auto' }; // Align left or center
        
            var responsiveDiv = $('<div/>', {
                css: {
                    width: '100%',
                    maxWidth: '600px',
                    ...alignmentCss // Apply alignment CSS
                }
            });
        
            var imageRow = $('<div/>', {
                css: {
                    width: '100%',
                    maxWidth: '200px',
                    marginTop: '20px',
                    ...alignmentCss // Apply alignment CSS
                }
            }).appendTo(responsiveDiv);
        
            var linkWrapper = $('<a/>', {
                href: options.baseUrl,
            }).css(alignmentCss); // Apply alignment CSS to the link wrapper as well
        
            var imageElement = $('<img/>', {
                src: 'https://global.divhunt.com/b6840b489b614157d3f82de68e8da0d9_10914.webp',
                alt: options.hrefText,
                css: {
                    width: '100%',
                    height: 'auto'
                }
            }).appendTo(linkWrapper);
        
            linkWrapper.appendTo(imageRow);
        
            var linkRow = $('<div/>', {
                css: {
                    width: '100%',
                    ...alignmentCss // Apply alignment CSS
                }
            }).appendTo(responsiveDiv);
        
            $('<a/>', {
                href: options.baseUrl,
                text: options.hrefText,
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
                href: options.baseUrl,
                text: options.hrefText
            });

            $('footer .copy').append(attributionText).append(attributionLink);
        }

        function logScriptOptions() {
            const options = getScriptOptions(); // Assuming this function returns your options object
        
            console.log('Script Options:');
            Object.keys(options).forEach(key => {
                console.log(`${key}: ${options[key]}`);
            });
        }
        
        // Call the function to log the options to the console
        logScriptOptions();
        
        // Decide which content to insert based on the 'data-option' attribute
        if (options.type === 'logo') {
            createResponsiveDiv();
        } else if (options.type === 'link') {
            createAttributionLink();
        }
    });
})(jQuery);