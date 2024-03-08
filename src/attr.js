$(document).ready(function() {
    const hrefText = 'REToolkit - SEO for Real Estate Investing';
    // Create the responsive div container
    var responsiveDiv = $('<div/>', {
        css: {
            width: '100%', // Ensure the div takes the full width of its parent
            maxWidth: '200px', // Maximum width of the div
            margin: '0 auto' // Center the div
        }
    });

    // Create the first row for the responsive image
    var imageRow = $('<div/>', {
        css: {
            width: '100%', // Ensure the row takes the full width of its container
            marginBottom: '20px' // Space between the image row and the attribution link
        }
    }).appendTo(responsiveDiv);

    // Create the responsive image
    $('<img/>', {
        src: 'https://global.divhunt.com/b6840b489b614157d3f82de68e8da0d9_10914.webp',
        alt: hrefText,
        css: {
            width: '100%', // Make the image responsive
            height: 'auto' // Maintain the aspect ratio of the image
        }
    }).appendTo(imageRow);

    // Create the second row for the attribution link
    var linkRow = $('<div/>', {
        css: {
            width: '100%' // Ensure the row takes the full width of its container
        }
    }).appendTo(responsiveDiv);

    // Add the attribution link from the previous code
    var baseURL = window.location.hostname;
    $('<a/>', {
        href: 'https://retoolkit.io/?utm_source=' + encodeURIComponent(baseURL),
        text: hrefText,
        css: {
            // textDecoration: 'none', // Optional: Remove the underline from the link
            // color: '#000', // Optional: Set the link color
            // fontSize: '16px' // Optional: Set the font size
        }
    }).appendTo(linkRow);

    // Append the responsive div to the body or a specific container
    $('footer .disclaimer').append(responsiveDiv);
});
