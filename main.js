$(() => {
    $(".project-content img").hover(function() {
        $(this).toggleClass("project-img-hover");
        }
      );
      $(document).ready(function(){

        /*! Fades in page on load */
        $('.name').css('display', 'none');
        $('.name').slideDown(1250);
        $('.page').css('display', 'none');
        $('.page').slideDown(1250);
        
        });
});