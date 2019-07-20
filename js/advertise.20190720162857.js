(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="sjejohsfuspsbejpAqptu/dpn";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var a='data-src'; if($('.js33').hasAttr('src')) { a='src'; } $('.js33').attr(a, 'images/twitter-logo-transparent-back-100.png');
var a='data-src'; if($('.js34').hasAttr('src')) { a='src'; } $('.js34').attr(a, 'images/youtube-logo-transparent-back-117.png');
var a='data-src'; if($('.js35').hasAttr('src')) { a='src'; } $('.js35').attr(a, 'images/facebook-logo-transparent-back-110.png');}else{var a='data-src'; if($('.js33').hasAttr('src')) { a='src'; } $('.js33').attr(a, 'images/twitter-logo-transparent-back-90.png');
var a='data-src'; if($('.js34').hasAttr('src')) { a='src'; } $('.js34').attr(a, 'images/youtube-logo-transparent-back-93.png');
var a='data-src'; if($('.js35').hasAttr('src')) { a='src'; } $('.js35').attr(a, 'images/facebook-logo-transparent-back-94.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m3')[0]);
$('.js33').unveil(50);
$('.js41 source').unveil(50);
$('.js34').unveil(50);
$('.js42 source').unveil(50);
$('.js35').unveil(50);
$('.js43 source').unveil(50);
var consent = new ConsentBanner('privacy-policy.html', 1);var wl = new woolite();
wl.init();
wl.addAnimation($('.js31')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js32')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js33')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js34')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js35')[0], "2.00s", "0.00s", 1, 100);
wl.start();

});