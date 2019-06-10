// Javascript
var customerMessage = [];

function showCustomerMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("textarea").value;

    if (name && email && message) {
        customerMessage.push(name, email, message);
        alert("Hi " + name + ", \nThank you for reaching out to us, we will respond as soon as possible.");
        return customerMessage;

    } else {
        alert("Please fill in all fields");
    }
}


// jQuery
$(document).ready(function() {

    //Preloader
    $(window).on("load", function() {
        preloaderFadeOutTime = 3000;

        function hidePreloader() {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    // Design: Hide image and show paragraph
    $(".design-initially-showing").click(function() {
        $(".design-initially-hidden").show();
        $(".design-initially-showing").hide();
    });

    // Design: Hide paragraph and show image
    $(".design-initially-hidden").click(function() {
        $(".design-initially-hidden").hide();
        $(".design-initially-showing").show();
    });

    // Development: Hide image and show paragraph
    $(".dev-initially-showing").click(function() {
        $(".dev-initially-hidden").show();
        $(".dev-initially-showing").hide();
    });

    // Development: Hide paragraph and show image
    $(".dev-initially-hidden").click(function() {
        $(".dev-initially-hidden").hide();
        $(".dev-initially-showing").show();
    });

    // Product Management: Hide image and show paragraph
    $(".p-mgt-initially-showing").click(function() {
        $(".p-mgt-initially-hidden").show();
        $(".p-mgt-initially-showing").hide();
    });

    // Product Management: Hide paragraph and show image
    $(".p-mgt-initially-hidden").click(function() {
        $(".p-mgt-initially-hidden").hide();
        $(".p-mgt-initially-showing").show();
    });

    // Hover effect on portfolio images
    $(".portfolio img").hover(function() {
        $(".col-md-3 img").addClass("image");
        $(".project-name").show();
    });

});