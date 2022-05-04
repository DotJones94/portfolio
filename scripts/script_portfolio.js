$(document).ready(function(){
    $clicked = 0;
    $(".p_nav").click(function(){
        $(".active_indicator").animate({"opacity":"0"}, 1000); 
        $clicked++;

        if($clicked == 1){
            // Heading
            $(".filler").animate({"opacity":"0"}, 1000);

            setTimeout(function() { 
                //Heading
                $("#port_header").removeClass("filler_header");
                $("#port_header").addClass("heading_page");
                $("#port_sub_header").addClass("subHeading_page");
                $(".p_video_side").removeClass("justify_center");
                $(".p_video_side").removeClass("align_center"); 
                $(".p_video_side_pm").removeClass("justify_center");
                $(".p_video_side_pm").removeClass("align_center"); 
                $(".filler").animate({"opacity":"1"}, 1000);  
            },800); 
        }

     
        //Description Previous Slide
        $(".p_description").slideUp(1000);
        $(".p_description").animate({"opacity":"0"}, 1000); 
        $(".p_vid_side").fadeOut(1000);
        $(".active_port").removeClass( "active_port" );
        $(this).addClass("active_port");
        $(this).find(".active_indicator").animate({"opacity":"1"}, 1000); 

        setTimeout(function() {  
            //Jelly Beans Side    
            if($(".active_port").is("#j_beans")){
                // Description 
                $("#j_beans_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#jelly_beans_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side,.p_video_side_pm").scroll(function(){
		
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	
                    
                });
            }
    
            if($(".active_port").is("#poly_s")){
                 // Description 
                 $("#p_series_description").show();
                 $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  
 
                 // Video Side
                 $("#poly_series_vid").fadeIn(1000);
                 $(".first_vid").animate({"opacity":"1"}, 2000);  
                 $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                 $(".p_video_side").scroll(function(){
         
                     $(".see_me").each(function(i){
                         var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                         var bottom_win = $(window).scrollTop() + $(window).height();
                         
                         if(bottom_win > bottom_obj){
                             $(this).animate({"opacity": "1"}, 2000);
                             $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                         }
                     });	  
                 });
            }  
            
            if($(".active_port").is("#mrj_i")){
                // Description 
                $("#mj_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#mrjones_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
           } 

           if($(".active_port").is("#fc_t")){
                // Description 
                $("#fc_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#care_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            } 

            if($(".active_port").is("#rob_s")){
                // Description 
                $("#rob_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#robot_series_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }          

            if($(".active_port").is("#vio_p")){
                // Description 
                $("#vio_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#vio_p_vid").fadeIn(1000); 
                $(".first_vid").animate({"opacity":"1"}, 2000);   
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            } 

            if($(".active_port").is("#inno_p")){
                // Description 
                $("#inno_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#inno_vid").fadeIn(1000);  
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            } 

            if($(".active_port").is("#fp_t")){
                // Description 
                $("#fp_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#flash_prod_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            } 

            if($(".active_port").is("#jal_j")){
                // Description 
                $("#jj_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#jj_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }

            if($(".active_port").is("#ca_m")){
                // Description 
                $("#cbm_series_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#cbm_vid").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }

            if($(".active_port").is("#robo_c")){
                // Description 
                $("#robo_c_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#robo_c_video").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }

            if($(".active_port").is("#space_s")){
                // Description 
                $("#space_s_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#space_s_video").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }

            if($(".active_port").is("#scfi_d")){
                // Description 
                $("#scfi_d_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#scifi_d_video").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }

            if($(".active_port").is("#min_c")){
                // Description 
                $("#min_c_description").show();
                $(".p_description").animate({"opacity":"1", "height":"100px"}, 2000);  

                // Video Side
                $("#minion_video").fadeIn(1000);
                $(".first_vid").animate({"opacity":"1"}, 2000);  
                $(".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                $(".p_video_side").scroll(function(){
        
                    $(".see_me").each(function(i){
                        var bottom_obj = $(this).offset().top + ($(this).outerHeight() / 3);
                        var bottom_win = $(window).scrollTop() + $(window).height();
                        
                        if(bottom_win > bottom_obj){
                            $(this).animate({"opacity": "1"}, 2000);
                            $(this).next( ".p_header_block").animate({"opacity":"1", "height":"100px"}, 2000);
                        }
                    });	  
                });
            }
        },1500); 
               
    });
});
