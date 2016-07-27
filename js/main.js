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
                scrollTop: $(hash).offset().top - 170
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




//Service Count numbers//

$('.count + i').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//Ends here//



//Header Change color On scroll//

$(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 550;
    if (yOffset > breakpoint){
        $(".custom-nav").addClass('active');
    }else{
        $(".custom-nav").removeClass('active');
    }

});


//Ends here//






//Isotopes js start here///


// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
    }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
    });
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


//Ends here//