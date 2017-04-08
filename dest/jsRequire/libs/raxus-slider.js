/*! grunt-0.0.1.js 压缩于：2017-04-08 11:11 */

///////////////////////////////
// Author: Bora DAN
// Version: 2.0.4
// 13 March 2015
// http://dribbble.com/bqra
// http://themeforest.com/bqra
// http://twitter.com/bqra
// http://pikselmatik.com
///////////////////////////////
function move(a,b){a.css({"-webkit-transform":"translate3d("+b+", 0)","-moz-transform":"translate3d("+b+", 0)","-o-transform":"translate3d("+b+", 0)","-ms-transform":"translate3d("+b+", 0)",transform:"translate("+b+")"})}function raxusSliderGlobal(a,b){var c,d=jQuery(a).parents(".raxus-slider"),e=d.find(".slider-relative"),f=parseInt(d.attr("data-show")),g="vertical"==d.attr("data-direction")?d.find(".slide").eq(f).outerHeight(!0):d.find(".slide").eq(f).outerWidth(!0),h=d.find(".slide").size()-1,i=h*g,j=g*f,k="false"==d.attr("data-loop");if(d.removeAttr("data-playing"),d.find("iframe").remove(),d.find(".play-button, img, .slide .text, .fullscreen").show(0),jQuery(a).parents(".raxus-slider[data-dots]").find("ul.dots").show(0),i==j&&"-"==b){if(k)return!1;f=0,d.attr("data-show","0")}else if(0==f&&"+"==b){if(k)return!1;f=h,d.attr("data-show",h)}else"dot"==b?(f=jQuery(a).index(),d.attr("data-show",jQuery(a).index())):(f="-"==b?f+1:f-1,d.attr("data-show",f));if(j=g*f,c="vertical"==d.attr("data-direction")?"0, -"+j+"px":"-"+j+"px, 0",move(e,c),f==h?jQuery(a).parents(".raxus-slider[data-loop]").find(".arrow-r").css("opacity","0.5"):0==f?jQuery(a).parents(".raxus-slider[data-loop]").find(".arrow-l").css("opacity","0.5"):jQuery(a).parents(".raxus-slider[data-loop]").find(".arrow-r, .arrow-l").css("opacity","1"),d.find(".mini-images").length){var l=d.find(".mini-images"),m=d.find(".mini-images li");m.removeClass("selected"),m.eq(d.attr("data-show")).addClass("selected");var n,o="left"==d.attr("data-thumbnail")||"right"==d.attr("data-thumbnail"),p=o?m.outerHeight(!0):m.outerWidth(!0),q=m.size()-1,r=o?d.height():d.width(),s=r/p,t=d.find(".mini-images li.selected").index(),u=o?30:20,v=parseInt(m.eq(0+number).index());s=parseInt(s-1),q-1>=s&&(t==m.slice(-1).index()||t==m.slice(-2).index()?(n=-(q-s)*p+u,number=m.last().index()-s):t==q&&s<=q?(n=-t*p+p*s,number=t-s+1):0==t?(n=0,number=t):t>=v+s?(n=-t*p+p*(s-1),number=t-s+1):t<=v?(n=-(t-1)*p,number=t-1):n=l.attr("data-thumbwidth"),l.attr("data-thumbwidth",n),n=o?"0, "+n+"px":n+"px, 0",move(l,n))}dataEqSel(),d.find(".dots li").removeClass("selected"),d.find(".dots li").eq(d.attr("data-show")).addClass("selected"),d.find(".close-video").click(),e.find(".slide .text").removeClass("left-animated"),e.find(".slide:eq("+f+") .text").addClass("left-animated")}function thumbNoSlide(){jQuery(rS+"[data-thumbnail]").each(function(){jQuery(this).find(".mini-images li").size()*jQuery(this).find(".mini-images li").outerWidth(!0)<jQuery(this).outerWidth()&&jQuery(this).find(".mini-images").addClass("no-slide")})}function rePositioning(){jQuery(".raxus-slider[data-thumbnail]").each(function(){var a=jQuery(this).attr("data-thumbnail"),b="left"==a||"right"==a?jQuery(this).find(".mini-images-relative").outerWidth():jQuery(this).find(".mini-images-relative").outerHeight();jQuery(this).find(".slider-area").animate({left:0,right:0,top:0,bottom:0},0),jQuery(this).find(".slider-area").css(a,b)}),thumbNoSlide(),jQuery(".raxus-slider").map(function(a,b){return raxusSliderGlobal(".dots:eq("+a+") li.selected","dot"),this})}function videoId(a){return a.match(/http:\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be))\/(video\/|embed\/|watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/),{url:RegExp.$2,id:RegExp.$5,site:"youtube.com"==RegExp.$2||"youtu.be"==RegExp.$2?"http://www.youtube-nocookie.com/embed/":"http://player.vimeo.com/video/"}}function dataEqSel(){jQuery(rS).each(function(){var a=jQuery(this);a.find(".slide").removeClass("selected");var b=0==a.attr("data-show")?null:a.attr("data-show")-1;a.find(".slide:eq("+b+"), .slide:eq("+a.attr("data-show")+"), .slide:eq("+(parseInt(a.attr("data-show"))+1)+")").addClass("selected")})}var rS=".raxus-slider",number=0;jQuery(function(){function a(a,b){function c(){clearInterval(e),b.find(".arrow-r").removeClass("autoPlayButton")}function d(){b.find(".close-video").length||b.find(".arrow-r").addClass("autoPlayButton"),e=setInterval(function(){raxusSliderGlobal(b.find(".arrow-r"),"-")},a)}var e=setInterval(function(){raxusSliderGlobal(b.find(".arrow-r.autoPlayButton"),"-")},a);b.on("touchstart",function(){c()}),b.on("touchstart",function(){d()}),b.hover(function(){c()},function(){"true"!=b.attr("data-playing")&&d()}),jQuery(document).on("click touchstart",rS+" .play-button",function(){b.attr("data-playing","true"),c()})}function b(a){var b=jQuery(a).parents(".raxus-slider").attr("data-thumbnail"),c=jQuery(a).parents(".raxus-slider").attr("data-direction");f="left"==b||"right"==b,g="vertical"==c}function c(a){b(a),"slider-relative"==a.className?h=g?parseInt(jQuery(a).position().top):parseInt(jQuery(a).position().left):"mini-images"==a.className&&(h=f?parseInt(jQuery(a).position().top)-10:parseInt(jQuery(a).position().left)-10),e=0,i=-jQuery(a).find("li").outerWidth(!0)*(jQuery(a).find("li").size()-1)+(jQuery(a).parents(".mini-images-relative").outerWidth(!0)-jQuery(a).find("li").outerWidth(!0))-10,j=-jQuery(a).find("li").outerHeight(!0)*(jQuery(a).find("li").size()-1)+(jQuery(a).parents(".mini-images-relative").outerHeight(!0)-jQuery(a).find("li").outerHeight(!0))-10,k=f?j:i}function d(a,b,c,d){var h=parseInt(d.pageY)-parseInt(c.pageY),i=parseInt(d.pageX)-parseInt(c.pageX);if(jQuery(a).addClass("no-transition"),"slider-relative no-transition"==a.className){var j=g?jQuery(".slide").outerHeight(!0):jQuery(".slide").outerWidth(!0);(-(e-b)<-j*(jQuery(".slide").size()-1)||-(e-b)>0)&&(h/=12,i/=12),e=g?h:i;var l=g?"0, "+(b+-e)+"px":b+-e+"px, 0"}else if("mini-images no-transition"==a.className){var j=g?$(".mini-images li").outerWidth(!0):$(".mini-images li").outerHeight(!0);if(-(e-b)>0)var l="0, 0";else if(-(e-b)<k)var l=f?"0,"+k+"px":k+"px, 0";else{e=f?h:i;var l=f?"0, "+(b+-e)+"px":b+-e+"px, 0"}}move(jQuery(a),l)}jQuery(rS).attr("data-show","0"),jQuery(rS+" .slider-relative").wrap('<div class="slider-area"></div>'),jQuery(rS+" .slider-relative .slide img").wrap('<span class="image"></span>'),jQuery(document).ready(function(){jQuery(rS+" .slider-relative").find(".slide:eq(0) .text").addClass("left-animated")}),jQuery(rS+" .slider-relative").find(".slide:eq(0)").addClass("selected"),jQuery(rS+" .slider-area").append('<ul class="dots"></ul>'),jQuery(rS+" .slider-area").each(function(){for(var a=jQuery(this).find(".slide").size()-1;a>=0;a--)jQuery(this).find(".dots").append("<li><span></span></li>");jQuery(this).find(".dots").css("margin-top",-jQuery(this).find(".dots").height()/2)}),jQuery(rS+" .slider-area").find(".dots li:eq(0)").addClass("selected"),jQuery(rS+" .slider-area").append('<div class="arrow-l"></div><div class="arrow-r"></div>'),jQuery(rS+"[data-arrows=outer]").find(".arrow-l, .arrow-r").addClass("outer"),jQuery(rS+"[data-thumbnail]").append('<div class="mini-images-relative"><ul data-thumbwidth="0" class="mini-images"></ul></div>'),jQuery(rS+"[data-thumbnail]").each(function(){for(var a=jQuery(this).attr("data-thumbnail"),b=0;b<=jQuery(this).find(".slide").size()-1;b++){var c=jQuery(this).find(".slider-relative li").eq(b).find(".image img");c=null==c.attr("data-thumbnailurl")?c.attr("src"):c.attr("data-thumbnailurl"),jQuery(this).find(".mini-images").append('<li><span class="img-selected"></span><div class="image"><img src="'+c+'" alt="" /></div></li>')}var d="bottom"==a||"top"==a?jQuery(this).find(".mini-images-relative").outerHeight():jQuery(this).find(".mini-images-relative").outerWidth();jQuery(this).find(".slider-area").css(a,d+"px")}),thumbNoSlide(),jQuery(rS+"[data-thumbnail]").find(".mini-images li:eq(0)").addClass("selected"),jQuery(rS+"[data-fullscreen=show]").append('<span class="fullscreen"></span>'),jQuery(rS).each(function(a){jQuery(this).attr("tabindex",a)}),dataEqSel(),jQuery(".raxus-slider[data-autoplay]").each(function(){jQuery(this).find(".arrow-r").addClass("autoPlayButton"),a(jQuery(this).attr("data-autoplay"),jQuery(this))}),jQuery("[data-videoUrl]").after('<div class="play-button"></div>'),jQuery(document).on("click touchstart touch",rS+" .play-button",function(){var a=jQuery(this);a.hide(0),a.prev("img").hide(0),a.parents(".slide").find(".text").hide(0),a.parents(".slide").append('<div class="close-video"></div>'),a.parents(".raxus-slider").find(".fullscreen, ul.dots").hide(0),a.parent().append('<iframe width="'+a.parents(".slide").outerWidth(!0)+'" height="'+a.parents(".slide").outerHeight(!0)+'" src="'+videoId(a.prev("img").attr("data-videoUrl")).site+videoId(a.prev("img").attr("data-videoUrl")).id+'?rel=0&autoplay=1&fullscreen=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')}),jQuery(rS).on("mousedown",".close-video",function(){var a=jQuery(this);a.parents(".raxus-slider").find(".play-button, img, .slide .text, .fullscreen").show(0),a.parents(".raxus-slider[data-dots]").find("ul.dots").show(0),a.parent().find("iframe").remove(),a.remove(),a.parents(".raxus-slider").removeAttr("data-playing")}),jQuery(rS+" .text strong").after('<div class="clear"></div>'),jQuery(rS+" .slide .image").prepend('<div class="vertical-helper"></div>'),jQuery(rS+"[data-bgcolor]").each(function(){jQuery(this).find(".slider-area .slider-relative .slide").css("background-color",jQuery(this).attr("data-bgcolor"))}),jQuery(rS+"[data-thumbbgcolor]").each(function(){jQuery(this).find(".mini-images").css("background-color",jQuery(this).attr("data-thumbbgcolor"))}),jQuery(document).on("click",".arrow-r",function(){raxusSliderGlobal(this,"-")}),jQuery(document).on("click",".arrow-l",function(){raxusSliderGlobal(this,"+")}),jQuery(document).on("mouseup touchend",".dots li, .mini-images:not(.no-transition) li",function(){raxusSliderGlobal(this,"dot")});var e,f,g,h,i,j,k=0;jQuery(document).on("mousedown",rS+" .slider-relative, "+rS+" .mini-images:not(.no-slide)",function(a){a.preventDefault(),c(this),jQuery(this).on("mousemove",function(b){d(this,h,b,a)})}),jQuery(rS+" .slider-relative, "+rS+" .mini-images:not(.no-slide)").map(function(){this.addEventListener("touchstart",function(a){"vertical"==jQuery(rS+" .slider-relative, "+rS).attr("data-direction")&&a.preventDefault(),c(this),this.addEventListener("touchmove",function(b){d(this,h,b.touches[0],a)},!1)},!1)}),jQuery(document).on("mouseup touchend",rS+" .slider-relative",function(){jQuery(this).off("mousemove touchmove").removeClass("no-transition");var a=jQuery(this).parents(".raxus-slider").find(".arrow-r"),b=jQuery(this).parents(".raxus-slider").find(".arrow-l");-e<-100?raxusSliderGlobal(a,"-"):-e>100&&raxusSliderGlobal(b,"+"),rePositioning()}),jQuery(document).on("mouseup touchend",rS+" .mini-images",function(a){jQuery(this).off("mousemove touchmove").removeClass("no-transition");var b=f?jQuery(this).position().top:jQuery(this).position().left;b>-10?move(jQuery(this),"0, 0"):b<=k&&(k=f?"0, "+k+"px":k+"px, 0",move(jQuery(this),k))});var l=!0;jQuery(rS+" .slide a").on({mousedown:function(){l=!0,jQuery(window).mousemove(function(){l=!1})},click:function(a){0==l&&a.preventDefault()}}),jQuery(".raxus-slider").keydown(function(a){39==a.which?raxusSliderGlobal("[data-keypress=true]:focus .arrow-r","-"):37==a.which&&raxusSliderGlobal("[data-keypress=true]:focus .arrow-l","+")}),jQuery(document).on("click touchstart",".fullscreen",function(){jQuery(this).parents(".raxus-slider").focus();var a=jQuery(this).parents(".raxus-slider").attr("id"),b=document.getElementById(a);document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():b.requestFullscreen?b.requestFullscreen():b.msRequestFullscreen?b.msRequestFullscreen():b.mozRequestFullScreen?b.mozRequestFullScreen():b.webkitRequestFullscreen&&b.webkitRequestFullscreen()}),document.addEventListener("fullscreenchange",function(){document.fullscreenElement,rePositioning()},!1),document.addEventListener("msfullscreenchange",function(){document.msFullscreenElement,rePositioning()},!1),document.addEventListener("mozfullscreenchange",function(){document.mozFullScreen,rePositioning()},!1),document.addEventListener("webkitfullscreenchange",function(){document.webkitIsFullScreen,rePositioning()},!1),jQuery(window).resize(function(){rePositioning()})});
/*! grunt 最后修改于： 2017-04-08 */