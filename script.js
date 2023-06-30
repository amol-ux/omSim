$(document).on("click",".continue-btn",function(){
    debugger;
    nextSection = $(this).closest(".continueWrapper ").next(".sections").find(".ui.grid");
    if(nextSection.length == 0){
    nextSection = $(this).closest(".continueWrapper ").next(".bggray");
    }
    $('html, body').animate({
        scrollTop: $(nextSection).offset().top
    }, 500);
});

