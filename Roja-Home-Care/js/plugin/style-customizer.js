/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */

! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function c(a) {
        return h.raw ? a : encodeURIComponent(a)
    }

    function d(a) {
        return h.raw ? a : decodeURIComponent(a)
    }

    function e(a) {
        return c(h.json ? JSON.stringify(a) : String(a))
    }

    function f(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
        } catch (c) {}
    }

    function g(b, c) {
        var d = h.raw ? b : f(b);
        return a.isFunction(c) ? c(d) : d
    }
    var b = /\+/g,
        h = a.cookie = function(b, f, i) {
            if (arguments.length > 1 && !a.isFunction(f)) {
                if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                    var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j)
                }
                return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
            }
            for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                var p = m[n].split("="),
                    q = d(p.shift()),
                    r = p.join("=");
                if (b && b === q) {
                    l = g(r, f);
                    break
                }
                b || void 0 === (r = g(r)) || (l[q] = r)
            }
            return l
        };
    h.defaults = {}, a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, {
            expires: -1
        })), !a.cookie(b))
    }
});


/*

Template Name: 
Template URI: 
Description: 
Author URI: 
Version: 1.0

NOTE: This is js of style customizer, This file Change the styling of color, 
backgrond patterns, Background images and box layout of the actual Template. 
so you can change as your requirement.

*/

/* style-customizer */


jQuery(document).ready(function($) {

    /*************************
       		Left sidebar
		*************************/
    style_switcher = $('.style-customizer'),
        panelWidth = style_switcher.outerWidth(true);
    $('.style-customizer .opener').on("click", function() {
        var $this = $(this);
        if ($(".style-customizer.closed").length > 0) {
            style_switcher.animate({
                "left": "0px"
            });
            $(".style-customizer.closed").removeClass("closed");
            $(".style-customizer").addClass("opened");
        } else {
            $(".style-customizer.opened").removeClass("opened");
            $(".style-customizer").addClass("closed");
            style_switcher.animate({
                "left": '-' + panelWidth
            });
        }
        return false;
    });

    /*************************
       		style change 
		*************************/
    var link = $('link[data-style="styles"]'),
        link_no_cookie = $('link[data-style="styles-no-cookie"]');

    /**************************************** 
         Resume from last selected style
		****************************************/
    var tp_stylesheet = $.cookie('tp_stylesheet'),
        footer_bg = $.cookie('footer_bg'),
        customizer_mode = $.cookie('customizer_mode'),
        pattern = $.cookie('pattern');

    $(".style-customizer .selected").removeClass("selected");
    if (!($.cookie('tp_stylesheet'))) {
        $.cookie('tp_stylesheet', 'skin-default', 30);
        tp_stylesheet = $.cookie('tp_stylesheet');
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
    } else {
        if (link.length > 0) {
            link.attr('href', 'css/color/' + tp_stylesheet + '.css');
            $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
            };
        };
    };

    if (!($.cookie('customizer_mode'))) {
        $.cookie('customizer_mode', 'wide-layout', 30);
        customizer_mode = $.cookie('customizer_mode');
        $("body").addClass(customizer_mode);
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
    } else {
        if (customizer_mode == "boxed-layout") {
            $("body").addClass(customizer_mode);
            $("body").removeClass("wide-layout");
            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
            $(".owl-carousel .container").css("marginLeft", "0");
        } else {
            $("body").addClass(customizer_mode);
            $("body").removeClass("boxed-layout pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
            $(".owl-carousel .container").css("marginLeft", "auto");
        };
    };

    if ((customizer_mode == "boxed-layout") && $.cookie('pattern')) {
        $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

        $("body").addClass(pattern);
    } else if (customizer_mode == "boxed-layout") {
        $("body").removeClass("pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

        $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
    } else {
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

    };

    /*************************
       		 Color Changer
		*************************/
    $('.style-customizer .styleChange li').on('click', function() {
        if (link.length > 0) {
            var $this = $(this),
                tp_stylesheet = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link.attr('href', 'css/color/' + tp_stylesheet + '.css');
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
                };
            };
            $.cookie('tp_stylesheet', tp_stylesheet, 30);
        } else {
            var $this = $(this),
                tp_stylesheet_no_cookie = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link_no_cookie.attr('href', 'css/color/' + tp_stylesheet_no_cookie + '.css');
            if ($(".swicher-title-page-dark").length > 0) {
                document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet_no_cookie + ".png";
            } else {
                if ($("#logo_img").length > 0) {
                    document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png";
                };
                if ($("#logo_dark_img").length > 0) {
                    document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet_no_cookie + ".png";
                };
                if ($("#logo-footer").length > 0) {
                    document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png";
                };
            };
        };
    });


    /*************************
       		Patterns Changer
 		*************************/
    $('.style-customizer .patternChange li').on('click', function() {
        var $this = $(this),
            pattern = $this.data('style');
        $(".style-customizer .patternChange .selected").removeClass("selected");
        $this.addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

        $("body").addClass(pattern);
        $("body").addClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $(".style-customizer select").val("boxed-layout");
        $.cookie('pattern', pattern, 30);
        $.cookie('customizer_mode', 'boxed-layout', 30);
        $(window).trigger('resize');
    });


    /*********************************************
       		 layout Changer	(boxed Layout)
		**********************************************/
    $('.style-customizer .layoutstyle li.boxed-layout').on('click', function() {
        $("body").addClass("boxed-layout");
        $("body").removeClass("wide-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $.cookie('customizer_mode', 'boxed-layout', 30);
        if ($.cookie('pattern')) {
            var pattern = $.cookie('pattern');
            $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
            $("body").removeClass("pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");

            $("body").addClass(pattern);
        } else {
            $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected");
        }
        $(window).trigger('resize');

    });

    /*********************************************
       		 layout Changer	(Wide Layout)
		**********************************************/
    $('.style-customizer .layoutstyle li.wide-layout').on('click', function() {
        $("body").addClass("wide-layout");
        $("body").removeClass("boxed-layout pattern-0 pattern-1 main-bg-1 main-bg-2");
        $("body").removeClass("");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $.cookie('customizer_mode', 'wide-layout', 30);
        $(window).trigger('resize');
    });


    /**************************************
       		Reset all customize styles
		**************************************/
    $('.style-customizer .resetAll li a.button-reset').on('click', function() {
        $.cookie('customizer_mode', 'wide-layout', 30);
        $("body").addClass("wide-layout");
        $("body").removeClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");

        //patterns and backgrond change
        $.cookie('pattern', 'pattern-0', 30);
        $("body").removeClass("reset pattern-0 pattern-1 pattern-2 main-bg-1 main-bg-2");
        $(".style-customizer .patternChange .selected").removeClass("selected");

        //Logo change
        $.cookie('tp_stylesheet', 'skin-default', 30);
        var tp_stylesheet = 'skin-default';
        $('.style-customizer .styleChange li.selected').removeClass("selected");
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
        link.attr('href', 'css/color/' + tp_stylesheet + '.css');
        if ($("#logo_img").length > 0) {
            document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
        };
        if ($("#logo_dark_img").length > 0) {
            document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png";
        };
        if ($("#logo-footer").length > 0) {
            document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png";
        };
        $(window).trigger('resize');
        $('.desktopTopFixed').removeClass('desktopTopFixed');
    });

});