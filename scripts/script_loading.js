$(document).ready(function(){  
      var delay = 0;
      
      $('.l_letter_o').each(function(){
            var $el = $(this);
            setTimeout(function() { 
                $el.addClass('animate');
            }, delay);
            delay += 200;
      });   
});

$( window ).on( "load", readyFn );

function readyFn(jQuery){
    //Mobile
 

    // Make sure the loading does at least one.
    var delay = 2000;
    $('.l_letter_o').each(function(){
        var $el = $(this);
        setTimeout(function() { 
            $el.animate({"opacity":"0"}, 1000);
            $el.removeClass('animate');
        }, delay);
        delay += 200;
    });

    // If it is the index page
    if($(".main").is("#index")){
        setTimeout(function() { 
            $(".m_image_side").animate({"opacity":"1"}, 2000);
            $(".icons").animate({"opacity":"1", "height" : "35%" }, 2000);
            $(".copy_right").animate({"opacity":"1"}, 2000);
        }, delay+500);
        
        setTimeout(function() { 
            $(".m_nav_side").animate({"opacity":"1"}, 2000);
            $(".nav_box").animate({"height":"600px"}, 2000);
        }, delay+2000);
        
    }else{
        $('.icons').css('opacity', '1');
        $('.icons').css('height', '35%');
        $('.copy_right').css('opacity', '1');

        setTimeout(function(){
            $(".main").animate({"opacity":"1"}, 1000);
        },5500);
        
        if($(".main").is("#exper")){
            setTimeout(function() { 
                $("#menu-button").animate({"opacity":"1"}, 2000);
                $("#try").show();
                experience();
            },5500);
        }

        if($(".main").is("#portfolio")){
            setTimeout(function() { 
                $("#menu-button").animate({"opacity":"1"}, 2000);
                portfolio();
            },5500);
        }

        if($(".main").is("#about")){
            setTimeout(function() { 
                $("#menu-button").animate({"opacity":"1"}, 2000);
                about();
            },5500);
        }

        if($(".main").is("#quali")){
            setTimeout(function() { 
                $("#menu-button").animate({"opacity":"1"}, 2000);
                quals();
            },5500);
        }

        if($(".main").is("#skills_p")){
            setTimeout(function() { 
                $("#menu-button").animate({"opacity":"1"}, 2000);
                skills();
            },5500);
        }

    }

    
    //--------------------------------
    // CLICKING ON MENU OPTIONS FRONT PAGE
    //--------------------------------
    $(".i_m_but").click(function(){
        
        $(".m_nav_side").animate({"opacity":"0"}, 2000);
        $(".nav_box").animate({"height":"0px"}, 2000);
        $(".m_image_side").animate({"opacity":"0"}, 2000);
        
        if($(this).is("#we_but")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'experience_moblie.php';
                }, 2000);
            }
            else{
                setTimeout(function() { 
                    window.location = 'experience.php';
                }, 2000);
            }
               
        }

        if($(this).is("#pr_but")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'portfolio_moblie.php';
                }, 2000);
            }
            else{
                setTimeout(function() { 
                    window.location = 'portfolio.php';
                }, 2000);
            }
              
        }

        if($(this).is("#sk_but")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'skills_moblie.php';
                }, 2000);
            }
            else{
                setTimeout(function() { 
                    window.location = 'skills.php';
                }, 2000);
            }
               
        }

        if($(this).is("#qu_but")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'qualifications_moblie.php';
                }, 2000);
            }
            else{
                setTimeout(function() { 
                    window.location = 'qualifications.php';
                }, 2000);
            }
             
        }

        if($(this).is("#am_but")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'about_moblie.php';
                }, 2000);
            }
            else{
                setTimeout(function() { 
                    window.location = 'about.php';
                }, 2000);
            }  
        }
    });
}


function experience(){
    $(".top_heading").animate({"opacity":"1"}, 1500);

    $(".m_we_info_block").show();
    $(".time_line").animate({"opacity":"1"}, 1500);
    

     // The description
     $(".w_e_block").hide();
     $(".w_e_block_m").hide();
     
     $(".active_w_e").animate({"opacity":"0"}, 1000);
     $(".active_w_e").hide();
     $(".active_w_e").removeClass( "active_w_e" );

    //Timeline animation height: 70vh;
    $(".w_timeline").animate({"height":"70vh", "opacity":"1"}, 1500);
    setTimeout(function() { 
        // The active ball
        $(".active").removeClass( "active" );
        $("#td").addClass( "active" );

        $(".w_time_block").animate({"opacity":"1"}, 2000);
        $("#jump").animate({"opacity":"1"}, 1500);
        
        
        //The rest of description
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

    }, 1500); 


    // TECHNICAL DIRECTOR
    $("#td, #td2019").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#td").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 1000);
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
        $(".active_w_e").animate({"opacity":"0"}, 1000);
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

     // Arts Co_or
    $("#aco, #aco2017").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#aco").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 1000);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#arts_festival_desc").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

    

        // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#imp_images").show();

        var delay = 0;
        $('.im_image').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },400);
            delay += 400;
        });

        var delay2 = 200;
        $('.im_image2').each(function(){
            $(this).delay(delay2).animate({
                opacity:1
            },400);
            delay2 += 400;
        });
    });

     // Cherry Tree
     $("#wdct, #wdct2018").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#wdct").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 1000);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#cherry_tree").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

    

        // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#ctc_images").show();

        var delay = 0;
        $('.ctc_image').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },400);
            delay += 400;
        });

        var delay2 = 200;
        $('.ctc_image2').each(function(){
            $(this).delay(delay2).animate({
                opacity:1
            },400);
            delay2 += 400;
        });
    });

     // Clean Machine
     $("#wdcm, #wdcm2019").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#wdcm").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 1000);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#clean_desc").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

    

        // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#cm_images").show();

        var delay = 0;
        $('.cm_image').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },400);
            delay += 400;
        });

        var delay2 = 200;
        $('.cm_image2').each(function(){
            $(this).delay(delay2).animate({
                opacity:1
            },400);
            delay2 += 400;
        });
    });

     // Boake
     $("#boake, #boake2015").click(function(){
        // The active ball
        $(".active").removeClass( "active" );
        $("#boake").addClass( "active" );


        // The description
        $(".active_w_e").animate({"opacity":"0"}, 1000);
        $(".active_w_e").hide();
        $(".active_w_e").removeClass( "active_w_e" );
        $("#boake_desc").addClass( "active_w_e" );
        $(".active_w_e").show();
        $(".active_w_e").animate({"opacity":"1"}, 1000);

    

        // The Images
        $(".w_images_block").hide();
        $(".w_e_image").animate({"opacity":"0"}, 1000);
        $("#bk_images").show();

        var delay = 0;
        $('.bk_image').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },400);
            delay += 400;
        });

        var delay2 = 200;
        $('.bk_image2').each(function(){
            $(this).delay(delay2).animate({
                opacity:1
            },400);
            delay2 += 400;
        });
    });
}

function portfolio(){
    $(".filler").animate({"opacity":"1"}, 2000);
    $(".p_nav_content").animate({"opacity":"1"}, 2000);   
}

function about(){
    //heading
    $(".filler").animate({"opacity":"1"}, 2000);

    //Navigation
    $(".ab_nav").animate({"opacity":"1", "height":"50vh"}, 2000);
    $(".ab_nav_other").animate({"opacity":"1", "height":"20px"}, 2000);
    

    //First - Hobbies
    $(".ab_head_block").animate({"opacity":"1", "height":"100px"}, 2000);

    //Each Hobbie
    setTimeout(function() { 
        var delay = 0;
        $('.a_inner_block').each(function(){
            $(this).delay(delay).animate({
                opacity:1
            },700);
            delay += 700;
        });
    }, 2100);   



    //If Clicked Awards
    $("#a_n_awa,#a_n_awa2").click(function(){
        //Remove Active Nav
        $(".ab_n_active").removeClass("ab_n_active");
        $(this).addClass("ab_n_active");

        //Remove Active Block  
        $(".a_active_b").animate({"opacity":"0"}, 1200);
        $(".ab_head_block").animate({"opacity":"0", "height":"1px"}, 2000);
        setTimeout(function() { 
            $(".a_active_b").removeClass("a_active_b");
            $("#awards_block").addClass("a_active_b");
            $("#hobbies").hide();
            $("#a_more").hide();
             //First - Hobbies
            $(".a_active_b").animate({"opacity":"1"}, 1000);     
            $(".ab_head_block").animate({"opacity":"1", "height":"100px"}, 2000);
            $("#awards_block").show();
        }, 1500);     

         //Each Hobbie
        setTimeout(function() { 
            var delay = 0;
            $('.a_inner_block2').each(function(){
                $(this).delay(delay).animate({
                    opacity:1
                },700);
                delay += 700;
            });
        }, 3000); 
    });

    //If Clicked More
    $("#a_n_more,#a_n_more2").click(function(){
        //Remove Active Nav
        $(".ab_n_active").removeClass("ab_n_active");
        $(this).addClass("ab_n_active");

        //Remove Active Block  
        $(".a_active_b").animate({"opacity":"0"}, 1200);
        $(".ab_head_block").animate({"opacity":"0", "height":"1px"}, 2000);
        setTimeout(function() { 
            $(".a_active_b").removeClass("a_active_b");
            $("#a_more").addClass("a_active_b");
            $("#hobbies").hide();
            $("#awards_block").hide();
            $(".a_active_b").animate({"opacity":"1"}, 1000);     
            $(".ab_head_block").animate({"opacity":"1", "height":"100px"}, 2000);
            $("#a_more").show();
        }, 2000);   
        
         //Each Hobbie
         setTimeout(function() { 
            var delay = 0;
            $('.a_inner_block3').each(function(){
                $(this).delay(delay).animate({
                    opacity:1
                },700);
                delay += 700;
            });
        }, 3000); 
    });

    //If Clicked Hobbies
    $("#a_n_hob,#a_n_hob2").click(function(){
        //Remove Active Nav
        $(".ab_n_active").removeClass("ab_n_active");
        $(this).addClass("ab_n_active");

        //Remove Active Block  
        $(".a_active_b").animate({"opacity":"0"}, 1200);
        $(".ab_head_block").animate({"opacity":"0", "height":"1px"}, 2000);
        setTimeout(function() { 
            $(".a_active_b").removeClass("a_active_b");
            $("#hobbies").addClass("a_active_b");
            $("#a_more").hide();
            $("#awards_block").hide();
            $(".a_active_b").animate({"opacity":"1"}, 1000);     
            $(".ab_head_block").animate({"opacity":"1", "height":"100px"}, 2000);
            $("#hobbies").show();
        }, 2000);  
        
         //Each Hobbie
         setTimeout(function() { 
            var delay = 0;
            $('.a_inner_block').each(function(){
                $(this).delay(delay).animate({
                    opacity:1
                },700);
                delay += 700;
            });
        }, 3000); 
    });

    
}

function quals(){
    $(".top_heading").animate({"opacity":"1"}, 1500);

    var delay = 0;
        $('.qual_block').each(function(){
            $(this).delay(delay).animate({
                opacity:1,
                "height": "500px"
            },2000);
            delay += 800;
        });
}

function skills(){
    $(".s_heading").animate({"opacity":"1"}, 1500);
    $(".a_m_block").animate({"opacity":"1"}, 1500);
    $(".filler_skills").animate({"opacity":"1", "height":"120px"}, 2000);
    $(".filler").animate({"opacity":"1", "height":"120px"}, 2000);
    $(".beanie").animate({"opacity":"1"}, 2000);
    setTimeout(function() {
        $(".s_circle").animate({"opacity":"1"}, 1500);
        rollSkills();
    },1000);
    
    
}

function rollSkills(){
    circleGo($(("#count")), "#circle_animate", "#progress", "0,200", 193);
    circleGo($(("#count2")), "#circle_animate2", "#progress2", "0,215", 193);
    circleGo($(("#count3")), "#circle_animate3", "#progress3", "0,195", 210);
    circleGo($(("#count4")), "#circle_animate4", "#progress4", "0,195", 193);
    circleGo($(("#count5")), "#circle_animate5", "#progress5", "0,195", 193);
    circleGo($(("#count6")), "#circle_animate6", "#progress6", "0,200", 235);
    circleGo($(("#count7")), "#circle_animate7", "#progress7", "0,165", 220);
    circleGo($(("#count8")), "#circle_animate8", "#progress8", "0,230", 220);
    circleGo($(("#count9")), "#circle_animate9", "#progress9", "0,200", 210);
    circleGo($(("#count10")), "#circle_animate10", "#progress10", "0,215", 160);
    circleGo($(("#count11")), "#circle_animate11", "#progress11", "0,175", 210);
    circleGo($(("#count12")), "#circle_animate12", "#progress12", "0,175", 175);
        
}

function circleGo(count, c_animate, prog, num, numOther){

$({Counter: 0 }).animate({ Counter:count.text() }, {
duration: 3000,
easing: 'linear',
step: function(){
    count.text(Math.ceil(this.Counter)+"%");
}
});

var s = Snap(c_animate);
var progress = s.select(prog);

progress.attr({strokeDasharray: num});

Snap.animate(0, numOther, function(value){
progress.attr({ 'stroke-dasharray':value+',251.2'});
}, 3000);
}