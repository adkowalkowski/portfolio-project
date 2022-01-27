$(() => {
  //  I think the following function could just be done in CSS
    $(".project-content img").hover(function() {
        $(this).toggleClass("project-img-hover");
        }
      );

      /*! Fades in page on load */
      $(document).ready(function(){

        
        $('.name').css('display', 'none');
        $('.name').fadeIn(1500);
        $('.page').css('display', 'none');
        $('.page').fadeIn(1500);
        
        });

        // Could make img an a tag, but caused complications for me. found on mdn the location.assign method
        $(".anthony-headshot").on("click", function() {
            window.location.assign("/index.html");
        });

     
       
        
});