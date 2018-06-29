var myWebsiteApp = angular.module("myWebsiteApp", ['ngMaterial']) //ngTable, ui.calendar

// Angular Material Theme
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('docs-dark')
    .dark()
    .primaryPalette('light-green')
    .accentPalette('green');
})

// Angular Controller for Claim Page
.controller('ClaimPageController', function($scope) {
    
    
    
    
    
    //=================================================== Old
    //Smooth Scolling
    $('a[href*=\\#]').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });

    //Slide Animation
    $(document).ready(function(){
      $(window).scroll(function() {
        $(".slideanim").each(function(){
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
              $(this).addClass("slide");
            }
        });
      });
    });
});




/**/
