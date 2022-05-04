function experience(){
    $(".w_info").show();
    $(".image_side").show();

    $(".top_heading").animate({"opacity":"1"}, 500);
    // The active ball
    $(".active").removeClass( "active" );
    $("#td").addClass( "active" );


    // The description
    $(".w_e_block").hide();
    $(".active_w_e").animate({"opacity":"0"}, 500);
    $(".active_w_e").hide();
    $(".active_w_e").removeClass( "active_w_e" );
    $("#tech_dir_desc").addClass( "active_w_e" );
    $(".active_w_e").show();
    $(".active_w_e").animate({"opacity":"1"}, 1000);

    
     // The Images
     $(".w_images_block").hide();
     $(".w_e_image").animate({"opacity":"0"}, 1000);
     $("#techd_images").show();

     var delay = 0;
     $('.td_image').each(function(){
         $(this).delay(delay).animate({
             opacity:1
         },400);
         delay += 400;
     });

     var delay2 = 200;
     $('.td_image2').each(function(){
         $(this).delay(delay2).animate({
             opacity:1
         },400);
         delay2 += 400;
     });




    // TECHNICAL DIRECTOR
    $("#td, #td2019").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#td").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 500);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#tech_dir_desc").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

        
         // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#techd_images").show();
         

         var delay = 0;
         $('.td_image').each(function(){
             $(this).delay(delay).animate({
                 opacity:1
             },400);
             delay += 400;
         });
 
         var delay2 = 200;
         $('.td_image2').each(function(){
             $(this).delay(delay2).animate({
                 opacity:1
             },400);
             delay2 += 400;
         });
    });
    



    // TECHNICAL LEAD
     $("#tl, #tl2018").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#tl").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 500);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#tech_lead_desc").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

    

        // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#techl_images").show();

        var delay = 0;
        $('.tl_image').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },400);
            delay += 400;
        });

        var delay2 = 200;
        $('.tl_image2').each(function(){
            $(this).delay(delay2).animate({
                opacity:1
            },400);
            delay2 += 400;
        });
    });
}
