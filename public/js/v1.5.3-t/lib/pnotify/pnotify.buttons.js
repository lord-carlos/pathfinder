!function(o,s){"function"==typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],s):"object"==typeof exports&&"undefined"!=typeof module?module.exports=s(require("jquery"),require("./pnotify")):s(o.jQuery,o.PNotify)}("undefined"!=typeof window?window:this,function(o,s){return s.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,show_on_nonblock:!1,labels:{close:"Close",stick:"Stick",unstick:"Unstick"},classes:{closer:null,pin_up:null,pin_down:null}},s.prototype.modules.buttons={init:function(s,i){var n=this;s.elem.on({mouseenter:function(o){!n.options.sticker||s.options.nonblock&&s.options.nonblock.nonblock&&!n.options.show_on_nonblock||n.sticker.trigger("pnotify:buttons:toggleStick").css("visibility","visible"),!n.options.closer||s.options.nonblock&&s.options.nonblock.nonblock&&!n.options.show_on_nonblock||n.closer.css("visibility","visible")},mouseleave:function(o){n.options.sticker_hover&&n.sticker.css("visibility","hidden"),n.options.closer_hover&&n.closer.css("visibility","hidden")}}),this.sticker=o("<div />",{class:"ui-pnotify-sticker","aria-role":"button","aria-pressed":s.options.hide?"false":"true",tabindex:"0",title:s.options.hide?i.labels.stick:i.labels.unstick,css:{cursor:"pointer",visibility:i.sticker_hover?"hidden":"visible"},click:function(){s.options.hide=!s.options.hide,s.options.hide?s.queueRemove():s.cancelRemove(),o(this).trigger("pnotify:buttons:toggleStick")}}).bind("pnotify:buttons:toggleStick",function(){var i=null===n.options.classes.pin_up?s.styles.pin_up:n.options.classes.pin_up,e=null===n.options.classes.pin_down?s.styles.pin_down:n.options.classes.pin_down;o(this).attr("title",s.options.hide?n.options.labels.stick:n.options.labels.unstick).children().attr("class","").addClass(s.options.hide?i:e).attr("aria-pressed",s.options.hide?"false":"true")}).append("<span />").trigger("pnotify:buttons:toggleStick").prependTo(s.container),(!i.sticker||s.options.nonblock&&s.options.nonblock.nonblock&&!i.show_on_nonblock)&&this.sticker.css("display","none"),this.closer=o("<div />",{class:"ui-pnotify-closer","aria-role":"button",tabindex:"0",title:i.labels.close,css:{cursor:"pointer",visibility:i.closer_hover?"hidden":"visible"},click:function(){s.remove(!1),n.sticker.css("visibility","hidden"),n.closer.css("visibility","hidden")}}).append(o("<span />",{class:null===i.classes.closer?s.styles.closer:i.classes.closer})).prependTo(s.container),(!i.closer||s.options.nonblock&&s.options.nonblock.nonblock&&!i.show_on_nonblock)&&this.closer.css("display","none")},update:function(o,s){!s.closer||o.options.nonblock&&o.options.nonblock.nonblock&&!s.show_on_nonblock?this.closer.css("display","none"):s.closer&&this.closer.css("display","block"),!s.sticker||o.options.nonblock&&o.options.nonblock.nonblock&&!s.show_on_nonblock?this.sticker.css("display","none"):s.sticker&&this.sticker.css("display","block"),this.sticker.trigger("pnotify:buttons:toggleStick"),this.closer.find("span").attr("class","").addClass(null===s.classes.closer?o.styles.closer:s.classes.closer),s.sticker_hover?this.sticker.css("visibility","hidden"):o.options.nonblock&&o.options.nonblock.nonblock&&!s.show_on_nonblock||this.sticker.css("visibility","visible"),s.closer_hover?this.closer.css("visibility","hidden"):o.options.nonblock&&o.options.nonblock.nonblock&&!s.show_on_nonblock||this.closer.css("visibility","visible")}},o.extend(s.styling.brighttheme,{closer:"brighttheme-icon-closer",pin_up:"brighttheme-icon-sticker",pin_down:"brighttheme-icon-sticker brighttheme-icon-stuck"}),o.extend(s.styling.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),o.extend(s.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"}),s});
//# sourceMappingURL=pnotify.buttons.js.map
