(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="sjejohsfuspsbejpAqptu/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var a='data-src'; if($('.js20').hasAttr('src')) { a='src'; } $('.js20').attr(a, 'images/twitter-logo-transparent-back-100.png');
var a='data-src'; if($('.js21').hasAttr('src')) { a='src'; } $('.js21').attr(a, 'images/youtube-logo-transparent-back-117.png');
var a='data-src'; if($('.js22').hasAttr('src')) { a='src'; } $('.js22').attr(a, 'images/facebook-logo-transparent-back-110.png');}else{var a='data-src'; if($('.js20').hasAttr('src')) { a='src'; } $('.js20').attr(a, 'images/twitter-logo-transparent-back-90.png');
var a='data-src'; if($('.js21').hasAttr('src')) { a='src'; } $('.js21').attr(a, 'images/youtube-logo-transparent-back-93.png');
var a='data-src'; if($('.js22').hasAttr('src')) { a='src'; } $('.js22').attr(a, 'images/facebook-logo-transparent-back-94.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m2')[0]);
$('.js20').unveil(50);
$('.js28 source').unveil(50);
$('.js21').unveil(50);
$('.js29 source').unveil(50);
$('.js22').unveil(50);
$('.js30 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js18')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js19')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js20')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js21')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js22')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});