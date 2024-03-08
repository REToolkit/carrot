(function($) {
    $(document).ready(function() {
        // Function to retrieve the script tag's custom attribute value
        function getScriptOptions() {
            // Get the script tag using its unique ID
            var currentScript = document.getElementById('io.retoolkit.attr');
        
            // Initialize an object to hold the options with some defaults
            var options = { 
                type: 'link',
                hrefText: 'REToolkit - SEO for Real Estate Investing',
                utm_source: "client",
                utm_medium: "footer",
                utm_campaign: "brand",
            };
        
            try {
                // Attempt to parse the 'data-option' attribute as JSON
                var parsedOptions = JSON.parse(currentScript.getAttribute('data-option'));
        
                // Merge parsed options with defaults, prioritizing parsed values
                options = { ...options, ...parsedOptions };
        
                // Append utm_content derived from window.location.hostname
                options.utm_content = window.location.hostname;
        
                // Build the UTM parameters string
                var utmParams = Object.keys(options).reduce((acc, key) => {
                    if (key.startsWith('utm_')) {
                        acc.push(`${key}=${encodeURIComponent(options[key])}`);
                    }
                    return acc;
                }, []).join('&');
        
                // Append UTM parameters to the base URL
                options.baseUrl = `https://retoolkit.io/?${utmParams}`;
        
            } catch(e) {
                console.error('Error parsing JSON from data-option attribute', e);
                // Even in case of error, utm_content is appended
                options.utm_content = window.location.hostname;
            }
        
            return options;
        }
        

        const options = getScriptOptions(); // 'logo' or 'link'
        console.log('REToolkit Attribution Option:', options.type);
        

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
                    marginTop: '20px'
                }
            }).appendTo(responsiveDiv);
            
            // Create the <a> element with the options.hrefText as the href attribute
            var linkWrapper = $('<a/>', {
                href: options.baseUrl,
                css: {
                    // Any CSS you want to apply to the link
                }
            });

            // Create the <img> element
            var imageElement = $('<img/>', {
                src: 'https://global.divhunt.com/b6840b489b614157d3f82de68e8da0d9_10914.webp',
                alt: options.hrefText,
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

        // Decide which content to insert based on the 'data-option' attribute
        if (options.type === 'logo') {
            createResponsiveDiv();
        } else if (options.type === 'link') {
            createAttributionLink();
        }
    });
})(jQuery);