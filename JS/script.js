// document.addEventListener("DOMContentLoaded", function() {
//     const links = document.querySelectorAll('a[href^="#"]');
    
//     links.forEach(link => {
//         link.addEventListener("click", function(e) {
//             e.preventDefault();

//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop,
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });



(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#section1').offset().top
         }, 2000);
    });
})(jQuery);

(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#section2').offset().top
         }, 4000);
    });
})(jQuery);

(function($) {
    $(document).ready(function() {
         $('html, body').animate({
           'scrollTop':   $('#section3').offset().top
         }, 2000);
    });
})(jQuery);