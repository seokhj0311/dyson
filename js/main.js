$(document).ready(function(){

    $(".ham_menu").click(function(){
        $(".sub_menu").addClass("active");
    });

    $(".close").click(function(){
        $(".sub_menu").removeClass("active");
    });
    
});