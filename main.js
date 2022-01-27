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

        // Could make img an a tag, but caused complications for me. found on mdn the location.assign method
        $(".anthony-headshot").on("click", function() {
            window.location.assign("/index.html");
        });

     
       
        
});