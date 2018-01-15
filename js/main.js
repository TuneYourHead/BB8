$(document).on("mousemove", function(evt) {
  $('.bb8-wrapper').css({left: evt.pageX});
  if(evt.pageX >= 600){
    $('.bb8-wrapper').addClass('bb8-dark');
  }else{
    $('.bb8-wrapper').removeClass('bb8-dark');
    $('.bb8-body').css('background-color', 'white');
  }
});
// jQuery Mouse Left-Stop-Right Direction Plugin
// Based on Hasin Hayder's original [hasin@leevio.com | http://hasin.me]
//var options = {};
var oldx = 0;//het nulpunt van de x-as is 0
var movementCounter = 0;
var direction = "";
var stop_timeout = false;
var stop_check_time = 150;
var mousedirection = function (opts) {
    //var defaults = {};
    //options = $.extend(defaults, opts); //Voeg de inhoud van twee of meer objecten samen
    $(document).bind("mousemove", function (e) {
        var activeElement = e.target || e.srcElement;
        if (e.pageX > oldx) {
            direction = "right";
        } else if (e.pageX < oldx) {
            direction = "left";
        }
        clearTimeout(stop_timeout);
        stop_timeout = setTimeout(function () {
            direction = "stop";
            $(activeElement).trigger(direction);
            $(activeElement).trigger({
                type: "mousedirection", //uitvoeren van functie mousedirection / $().blind("MOUSEDIRECTION"...
                direction: direction    //met variabele direction (richting)
            });
        }, stop_check_time);
        $(activeElement).trigger(direction);
        $(activeElement).trigger({
            type: "mousedirection",
            direction: direction
        });
        oldx = e.pageX;//zet stop positie als nulpunt x-as

    });
}
mousedirection();
$(".main-section").bind("mousedirection", function (e) {
    if(e.direction == 'left'){
      $('.bb8-body').removeClass('rotationStop');
      $('.bb8-wrapper').addClass('toTheLeft');
    }else if (e.direction == 'stop') {
      $('.bb8-body').addClass('rotationStop');
      $('.bb8-wrapper').removeClass('toTheLeft');
    }else if(e.direction == 'right') {
      $('.bb8-wrapper').removeClass('toTheLeft');
      $('.bb8-body').removeClass('rotationStop');
    }
});
