function ConsentBanner(e,n,t){this.policyPage=e,this.scrollAmount=t,this.consentIsSet="unknown",this.cookieConsent="cookieConsent=";for(var o=document.cookie.split(";"),s=0;s<o.length;s++){var i=o[s].trim();if(0==i.indexOf(this.cookieConsent)){this.consentIsSet=i.substring(this.cookieConsent.length,i.length);break}}var c=this;if("true"==this.consentIsSet)this.doConsent();else{if(this.setPlaceholders("block"),"unknown"==this.consentIsSet)$("#consentBanner").css("display","block"),location.pathname.substr(location.pathname.lastIndexOf("/")+1)!=this.policyPage&&null!=this.scrollAmount&&this.activateScrollCheck(),n||$("a:not(.noConsent,.denyConsent,.removeConsent)").click(function(e){c.grantConsent()});$(".allowConsent").click(function(e){e.preventDefault(),c.grantConsent()})}"false"!=this.consentIsSet&&$(".denyConsent").click(function(e){e.preventDefault(),c.denyConsent()}),$(".removeConsent").click(function(e){e.preventDefault(),c.removeConsent()})}ConsentBanner.prototype.setCookie=function(e,n){window.console&&console.log(e),$("#consentBanner").fadeOut(500);var t=new Date;t.setTime(t.getTime()+31536e6);var o="expires="+t.toGMTString();document.cookie=this.cookieConsent+n+"; "+o+";path=/",this.consentIsSet=n},ConsentBanner.prototype.removeCookie=function(e){window.console&&console.log(e),document.cookie=this.cookieConsent+"; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/",this.consentIsSet="false"},ConsentBanner.prototype.removeConsent=function(){"unknown"!=this.consentIsSet&&(this.removeCookie("Consent removed"),window.location.reload(!1))},ConsentBanner.prototype.denyConsent=function(){if("false"!=this.consentIsSet){var e="true"==this.consentIsSet;this.setCookie("Consent denied","false"),$(window).unbind("scroll"),$("a:not(.noConsent, .denyConsent, .removeConsent)").unbind("click"),e&&window.location.reload(!1)}},ConsentBanner.prototype.grantConsent=function(){"true"!=this.consentIsSet&&(this.setCookie("Consent granted","true"),window.gaf&&window.gaf(),this.doConsent())},ConsentBanner.prototype.activateScrollCheck=function(){var e=this;$(window).scroll(function(){$(window).scrollTop()>e.scrollAmount&&e.grantConsent()})},ConsentBanner.prototype.doConsent=function(){window.console&&console.log("Consent was granted"),this.setPlaceholders("none"),this.activateScripts(),this.activateSources(),this.activateEmbeds()},ConsentBanner.prototype.activateScripts=function(){$(".activateAfterConsent").each(function(){$(this).replaceWith(eval($(this).text()))})},ConsentBanner.prototype.activateSources=function(){$(".activateSrcAfterConsent").each(function(){var e=$(this).attr("disabledsrc");$(this).removeAttr("disabledsrc"),$(this).attr("src",e)})},ConsentBanner.prototype.require=function(e,n,t,o){if(null!==n||null!==t){for(var s=document.createElement("script"),i=null!==n?n.length:0,c=0;c<i;c++)s.setAttribute(n[c][0],n[c][1]);if(null===t){var r=document.getElementsByTagName("head")[0];s.onload=function(){return o(o)},s.onreadystatechange=function(){"complete"==this.readyState&&o(o)},r.appendChild(s)}else{try{s.appendChild(document.createTextNode(t))}catch(e){s.text=t}$(e).before(s),o(o)}}else o(o)},ConsentBanner.prototype.activateEmbeds=function(){var consentBanner=this;$(".activateEmbedAfterConsent").each(function(){var html=JSON.parse(eval($(this).text())),els=jQuery.parseHTML(html,document,!1);$(this).before(els);var scriptRe=/<script\b([^>]*?)>([\s\S]*?)<\/script>/gi,attrsRe=/([^\s=]+)(=[\"|\']([^'"]+)[\'|\"])?/gi,processScript=function(e,n,t,o){return function(s){var i=n.exec(e);if(null!=i){for(var c,r=null,a=null,l=new Array;null!=(c=t.exec(i[1]));)"src"==c[1]&&(r=c[3]),l.push([c[1],void 0!==c[3]?c[3]:""]);void 0!==i[2]&&i[2].length?a=i[2]:null!=r&&(void 0===consentBanner.scripts&&(consentBanner.scripts=new Array),0==consentBanner.scripts.includes(r)?consentBanner.scripts.push(r):l=null),consentBanner.require(o,l,a,s)}else $(o).remove()}}(html,scriptRe,attrsRe,this);processScript(processScript)})},ConsentBanner.prototype.setPlaceholders=function(e){$(".mapPlaceholder").each(function(){$(this).css("display",e)}),$(".videoPlaceholder").each(function(){$(this).css("display",e)}),$(".twitterPlaceholder").each(function(){$(this).css("display",e)}),$(".facebookPlaceholder").each(function(){$(this).css("display",e)}),$(".instagramPlaceholder").each(function(){$(this).css("display",e)})};
