$(document).ready(function(){

    $(".ham_menu").click(function(){
        $(".sub_menu").addClass("active");
    });

    $(".sub_menu").click(function(){
        $(".sub_menu").removeClass("active");
    });


});