$(document).ready(function(){
    
    $(".menu_cover").click(function(){
        $(".menu_block").animate({"width":"0vw"}, 1000);
        setTimeout(
            function(){
                $(".menu_block").hide();
            },1200);
    });
    

    var clicked = false;

    $('#menu-button').on('click', function() {
        if(clicked){
            
            closeMenu();
            clicked = false;
        }
        else{
            $(document.body).addClass('menu-open');
            $(".menu_block").show();
            $(".menu_block").animate({"width":"100vw"}, 1000);
            setTimeout(
                function(){
                    $(".n_background").show();
                    $(".n_background").animate({"height":"600px", "opacity":"1"}, 1000);
                },1000);     
            
            
            clicked = true;
        }
      });

      $(".m_nav_o").click(function(){
        
        closeMenu();
        $(".main").animate({"opacity":"0"}, 1000);
        
        
        if($(this).is("#we_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'experience_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'experience.php';
                }, 2000);
            }
               
        }

        if($(this).is("#prF_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'portfolio_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'portfolio.php';
                }, 2000);
            }
               
        }

        if($(this).is("#prM_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'portfolio_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'portfolioGames.php';
                }, 2000);
            }
               
        }

        if($(this).is("#sk_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'skills_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'skills.php';
                }, 2000);
            }
               
        }

        if($(this).is("#ql_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'qualifications_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'qualifications.php';
                }, 2000);
            }
               
        }

        if($(this).is("#ab_menu")){
            if($(window).width() < 800){
                setTimeout(function() { 
                    window.location = 'about_moblie.php';
                }, 2000);
            }else{
                setTimeout(function() { 
                    window.location = 'about.php';
                }, 2000); 
            }
              
        }
    });

    $("#port_click").click(function(){
        $("#port_options").slideToggle();
    });
    
});

function closeMenu(){
    $(".n_background").animate({"height":"0", "opacity":"0"}, 1000);
    $(".n_background").hide();
    
    $(".menu_block").animate({"width":"0vw"}, 2000);           
    setTimeout(
        function(){   
            $(".menu_block").hide();
        },1200);
    $(document.body).removeClass('menu-open');
}