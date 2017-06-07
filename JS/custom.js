/*//Moonwalk Animation
$("#moonwalk").animate({"margin-right": "+=2000px"}, 10000);
do
{
    var lm = parseInt($('#moonwalk').css('margin-left'), 10);
    lm = lm + 10;
    $("#moonwalk").css("margin-left",lm+"px");
} while (lm < 100);*/

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
})
