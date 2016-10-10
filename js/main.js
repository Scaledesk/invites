/**
 * Created by neerajsingh on 27/07/16.
 */

//For Section smooth scrolling//

$(document).ready(function(){
    // Add smooth scrolling to all links


    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 40
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
            });
        } // End if
    });

});


//Ends here//







//Floating labels//

    $("input[type ='text']").click(function(){
        var $this = $(this);
        $this.attr("placeholder", "");
        $this.parent().find(".float-label").addClass("label-top");

    });

//Ends here//








//Header Change color On scroll//

$(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 550;
    if (yOffset > breakpoint){
        $(".custom-nav").addClass('active ');
    }else{
        $(".custom-nav").removeClass('active ');
    }

});


//Ends here//



//Back to top button//


var offset = 300,

    offset_opacity = 1200,

    scroll_top_duration = 700,

    $back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('cd-fade-out');
    }
});


//smooth scroll to top

$back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
            scrollTop: 0 ,
        }, scroll_top_duration
    );
});





// you want to enable the pointer events only on click;

        $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
        $('#map-section').on('click', function () {
            $('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
        });

        // you want to disable pointer events when the mouse leave the canvas area;

        $("#map_canvas1").mouseleave(function () {
            $('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        });


//Ends here//





$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
});






//Sort random function
function random(owlSelector){
    owlSelector.children().sort(function(){
        return Math.round(Math.random()) - 0.5;
    }).each(function(){
        $(this).appendTo(owlSelector);
    });
}

$("#owl-demo").owlCarousel({
    navigation: true,
    navigationText: [
        "<i class='fa fa-angle-left fa-2x' ></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
    ],
    beforeInit : function(elem){
        //Parameter elem pointing to $("#owl-demo")
        random(elem);
    }

});



$("#owl-demo1").owlCarousel({
    navigation: true,
    pagination: false,
    navigationText: [
        "<i class='fa fa-angle-left fa-2x' ></i>",
        "<i class='fa fa-angle-right fa-2x'></i>"
    ],
    beforeInit : function(elem){
        //Parameter elem pointing to $("#owl-demo")
        random(elem);
    }

});










$('.navbar-nav').find('a').on('click', function(e){
    $('.navbar-toggle').trigger('click');
});



