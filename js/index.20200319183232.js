(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="sjejohsfuspsbejpAqptu/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js2').attr('src', (dpi>1) ? 'images/img_6022copy-1920.jpg' : 'images/img_6022copy-960-1.jpg');
$('.js3').attr('src', 'images/trans_window_wide-610.png');
$('.js4').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-copy-1060.png' : 'images/ridingretroplainsquare_clipped_rev_2-copy-530.png');
$('.js5').attr('src', 'images/playbutton-179.png');
$('.js6').attr('src', 'images/shoutouts-355.png');
var a='data-src'; if($('.js8').hasAttr('src')) { a='src'; } $('.js8').attr(a, 'images/youtube-logo-transparent-back-117.png');
var a='data-src'; if($('.js9').hasAttr('src')) { a='src'; } $('.js9').attr(a, 'images/twitter-logo-transparent-back-100.png');
var a='data-src'; if($('.js10').hasAttr('src')) { a='src'; } $('.js10').attr(a, 'images/facebook-logo-transparent-back-110.png');}else{$('.js2').attr('src', (dpi>1) ? 'images/img_6022copy-960.jpg' : 'images/img_6022copy-480.jpg');
$('.js3').attr('src', 'images/trans_window_wide-454.png');
$('.js4').attr('src', (dpi>1) ? 'images/ridingretroplainsquare_clipped_rev_2-copy-746.png' : 'images/ridingretroplainsquare_clipped_rev_2-copy-373.png');
$('.js5').attr('src', (dpi>1) ? 'images/playbutton-254.png' : 'images/playbutton-127.png');
$('.js6').attr('src', 'images/shoutouts-348.png');
var a='data-src'; if($('.js8').hasAttr('src')) { a='src'; } $('.js8').attr(a, 'images/youtube-logo-transparent-back-93.png');
var a='data-src'; if($('.js9').hasAttr('src')) { a='src'; } $('.js9').attr(a, 'images/twitter-logo-transparent-back-90.png');
var a='data-src'; if($('.js10').hasAttr('src')) { a='src'; } $('.js10').attr(a, 'images/facebook-logo-transparent-back-94.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
$('.js8').unveil(50);
$('.js21 source').unveil(50);
$('.js9').unveil(50);
$('.js22 source').unveil(50);
$('.js10').unveil(50);
$('.js23 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js8')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js9')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js10')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});