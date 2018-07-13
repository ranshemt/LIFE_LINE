$(document).ready(function(){
    //screen width
    var width = $(window).width();
    //show/hide elements
    $( window ).resize(function() {
        if(width <= 590){ //Mobile
            
        }

        if(width >= 591 && width <= 850){//Tablet
            
        }

        if(width >= 851){//Desktop
            
        }
    }); 
    //menu icon
    
    $('#menu-icon').click(function(){
        $("#mySidenav").addClass("tablet");
    });
    $('#close-button').click(function(){
        $("#mySidenav").removeClass("tablet");
    });

    
});