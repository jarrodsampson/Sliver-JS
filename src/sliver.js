  
/**
 * sliver v1.1
 *
 * Copyright (c) 2015 Planlodge (http://www.planlodge.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


(function($) {

  'use strict';


  var methods = {

    init: function(options) {

        var defaults = {
    			delay: 0,
    			fadeSpeed: 900,
          closeText:  "Close Box",
          effect: "fade"
        };

        // default settings
        if (options) {
            $.extend(defaults, options);
        }
        
        return this.each(function(){

		      var el = "." + $(this).attr('class');

          $(el).click(function(ev){

            
            var data = "#" + $(this).attr('data-modale');

            ev.preventDefault();

            $('body').append("<div id='sliver-overlay'></div>");
            $('#sliver-overlay').fadeIn(500);

            $(data).addClass("sliver-pop");
            $(data).append("<div class='close-button' title='"+ defaults.closeText +"'></div>");

            $(data).css({
              "position":"fixed",
              "top": "50%",
              "left": "50%",
              "transform": "translate(-50%, -50%)",
              "z-index": 99999
            });


            if (defaults.effect == "fade")
            {
              $(data).delay(defaults.delay).fadeIn(defaults.fadeSpeed);
            }
            else if(defaults.effect == "spin")
            {
              $(data).delay(defaults.delay).addClass("spin").show();
            }

            $('.close-button').click(function(ev){

              $('#sliver-overlay').fadeOut(500);
              $(data).fadeOut(900);

            });

          });

		   });
    }

  }

    // function method
    $.fn.sliver = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };


  }(jQuery));