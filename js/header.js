(function ($) {
  "use strict";

  $(document).ready(function () {
      /*-----------------------------------
      01. Mobile Menu  
      -----------------------------------*/
      $('#mobile-menu').meanmenu({
          meanMenuContainer: '.mobile-menu',
          meanScreenWidth: "1199",
          meanExpand: ['<i class="far fa-plus"></i>'],
      });

      /*-----------------------------------
      02. Sidebar Toggle  
      -----------------------------------*/
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
          $(".offcanvas__info").removeClass("info-open");
          $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
          $(".offcanvas__info").addClass("info-open");
          $(".offcanvas__overlay").addClass("overlay-open");
      });
  }); // End Document Ready Function

})(jQuery); // End jQuery

