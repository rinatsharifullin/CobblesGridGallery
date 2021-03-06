$(document).ready(function(){
    
    $(document).scroll(function(){              //On scroll action button beheaviour
        if($('html').scrollTop() > 500 ){      //Check if we 1000 px from the top
            $('p').css({             //On last child of paragraph action opacity and scale
                'transform': 'scale(1)',        //Prevent clicking on invisible element, make element very small
                'opacity':1
            });
        }else{                                  //If scrolling on top, hide button
            $('p').css({
                'opacity':0,
                'transform': 'scale(0)'
            });
        };
    });
    
    $('p').click(function(){         //On click of button scroll to the top
        $('html').animate({scrollTop:0},1000);  //Create smooth scroling to the top
    });

    $('img').hover(function(){              // Make picture bigger when hovering
        $(this).toggleClass('imgHover');
    });
    
    // Zoom image on click
    $('img').click(function(){
        console.log('clicked');
        $(".modal").css('display', 'block');
        $("#img01").attr('src', this.src);
    });
    
    // Close big image
    $('.close').click(function(){
        $(".modal").css('display', 'none');
    });


    $('#travel').click(function(){          // Show traveling images only
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('#wraper').addClass('travelWraper');
            $('.travel').removeClass('doNotDisplay');
        },1010);
        setTimeout(function(){
            travelsShow();
        },1100);
    });

    $('#pets').click(function(){          // Show pets images only
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('#wraper').addClass('petsWraper');
            $('.pets').removeClass('doNotDisplay');
        },1010);
        setTimeout(function(){
            petsShow();
        },1100);
    });

    $('#cycling').click(function(){          // Show cycling images only
        removeAll();                        // Scaling out and hiding all images
        $(this).addClass('selected');       // Selecting name of gallery
        setTimeout(function(){              // Whait when all images will be hidden
            $('#wraper').addClass('cyclingWraper');     // Restructure grid for our new images
            $('.cycling').removeClass('doNotDisplay');  // Make our images display
        },1010);
        setTimeout(function(){              // separate timeout to give time for remove display none class
            cyclingShow();                  // Run function that scale in back to visible state
        },1100);
    });

    $('#all').click(function(){             // Show all images
        removeAll();
        $(this).addClass('selected');
        setTimeout(function(){
            $('.travel').removeClass('doNotDisplay');
            $('.pets').removeClass('doNotDisplay');
            $('.cycling').removeClass('doNotDisplay');
            $('#wraper').addClass('all');
        },1010);
        setTimeout(function(){
            cyclingShow();
            travelsShow();
            petsShow();
        },1100);
    });
    
    
    
});

// Hide all images
function removeAll(){
    $('#travel').removeClass('selected');   // All h tags revers to default view
    $('#pets').removeClass('selected');
    $('#cycling').removeClass('selected');
    $('#all').removeClass('selected');

    $('.travel').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});   // Scale out all batches of images
    $('.pets').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});
    $('.cycling').each(function(){$(this).css({'transform':'scale(' + 0 + ')'})});

    setTimeout(function(){                              // Whait for scale out
        $('#wraper').removeClass("all petsWraper travelWraper cyclingWraper");  // Remove all grid structures classes
        $('.travel').addClass('doNotDisplay');          // Hide all image batches
        $('.pets').addClass('doNotDisplay');
        $('.cycling').addClass('doNotDisplay');
    },1000);

};

// Scale in travel images
function travelsShow(){
    $('.travel').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};

// Scale in pets images
function petsShow(){
    $('.pets').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};

// Scale in cycling images
function cyclingShow(){
    $('.cycling').each(function(){$(this).css({'transform':'scale(' + 1 + ')'})});
};