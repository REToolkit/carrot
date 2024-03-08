// Adds attribution for REToolkit in the form of a back link to the home page.
$(document).ready(function() {
    // Add Attribution Text
    var attributionText = $('<span>', { 
        text: ' | ', 
        css: { 
            // Style the link as needed 
        }
    }); 

    // Dynamically get the base URL from the DOM
    var baseURL = window.location.hostname;

    // Add attribution link with UTM parameters, using the dynamically obtained base URL
    var attributionLink = $('<a>', { 
        href: 'https://retoolkit.io/?utm_source=' + encodeURIComponent(baseURL), 
        text: 'REToolkit - SEO for Real Estate Investing ', 
        css: { 
            // Style the link as needed 
        }
    }); 

    // Append the text and link to the element in the footer with the class "copy"
    $('footer .copy').append(attributionText).append(attributionLink);
});