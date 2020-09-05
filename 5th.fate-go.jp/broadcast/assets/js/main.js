/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../html/broadcast/assets/es6/top.es6
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Top = /*#__PURE__*/function () {
  function Top() {
    _classCallCheck(this, Top);

    this.$window = $(window);
    this.$body = $('body'); // IE用

    this.ie(); // スクロールイベント

    this.scrollEvent(); // スライダー

    this.slider();
  } // IE用


  _createClass(Top, [{
    key: "ie",
    value: function ie() {
      var ua = window.navigator.userAgent.toLowerCase();

      if (ua.indexOf('msie') != -1 || ua.indexOf('trident') != -1) {
        document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.3/picturefill.min.js"></script>');
      }
    } // スクロールイベント

  }, {
    key: "scrollEvent",
    value: function scrollEvent() {
      var _this = this;

      var $header = $('.js-header'),
          $contents = $('.js-contents'),
          $display = $('[data-display]');
      this.$window.on('load resize scroll', function () {
        var scrollTop = _this.$window.scrollTop(),
            scrollBottom = scrollTop + window.innerHeight,
            scrollEvent = scrollTop + window.innerHeight * 0.8,
            headerBottom = $header.innerHeight(),
            contentsTop = $contents.offset().top;

        var delay = 0; // 配信会場

        if (scrollBottom > headerBottom) {
          _this.$body.addClass('-followFixed');
        } else {
          _this.$body.removeClass('-followFixed');
        } // 背景画像


        if (scrollTop > contentsTop) {
          _this.$body.addClass('-bgFixed');
        } else {
          _this.$body.removeClass('-bgFixed');
        }

        $display.each(function (i, e) {
          var $elem = $(e),
              elemTop = $elem.offset().top;

          if (scrollEvent > elemTop && !$elem.hasClass('-active')) {
            if (elemTop > scrollTop) {
              $elem.css('transition-delay', delay * 0.2 + 's');
              delay++;
            }

            $elem.addClass('-active');
          }
        });
      });
    } // スライダー

  }, {
    key: "slider",
    value: function slider() {
      var $slider = $('.js-slider');
      $slider.each(function (i, e) {
        var $elem = $(e);
        $elem.slick({
          autoplay: true,
          dots: true
        });
      });
    }
  }]);

  return Top;
}();


// CONCATENATED MODULE: ../html/broadcast/assets/es6/main.es6

var main_top = new Top();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL2h0bWwvYnJvYWRjYXN0L2Fzc2V0cy9lczYvdG9wLmVzNiIsIndlYnBhY2s6Ly8vLi4vaHRtbC9icm9hZGNhc3QvYXNzZXRzL2VzNi9tYWluLmVzNiJdLCJuYW1lcyI6WyJUb3AiLCIkd2luZG93IiwiJCIsIndpbmRvdyIsIiRib2R5IiwiaWUiLCJzY3JvbGxFdmVudCIsInNsaWRlciIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiZG9jdW1lbnQiLCJ3cml0ZSIsIiRoZWFkZXIiLCIkY29udGVudHMiLCIkZGlzcGxheSIsIm9uIiwic2Nyb2xsVG9wIiwic2Nyb2xsQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJoZWFkZXJCb3R0b20iLCJjb250ZW50c1RvcCIsIm9mZnNldCIsInRvcCIsImRlbGF5IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJpIiwiZSIsIiRlbGVtIiwiZWxlbVRvcCIsImhhc0NsYXNzIiwiY3NzIiwiJHNsaWRlciIsInNsaWNrIiwiYXV0b3BsYXkiLCJkb3RzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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QUFDSDtBQUNKLFNBVkQ7QUFXSCxPQWpDRDtBQW1DSCxLLENBRUQ7Ozs7NkJBQ1M7QUFFTCxVQUFNUyxPQUFPLEdBQUdsQyxDQUFDLENBQUMsWUFBRCxDQUFqQjtBQUVBa0MsYUFBTyxDQUFDUCxJQUFSLENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFDbkIsWUFBTUMsS0FBSyxHQUFHOUIsQ0FBQyxDQUFDNkIsQ0FBRCxDQUFmO0FBQ0FDLGFBQUssQ0FBQ0ssS0FBTixDQUFZO0FBQ1JDLGtCQUFRLEVBQUUsSUFERjtBQUVSQyxjQUFJLEVBQUU7QUFGRSxTQUFaO0FBSUgsT0FORDtBQVFIOzs7Ozs7OztBQ3RGTDtBQUVBLElBQU1kLFFBQUcsR0FBRyxJQUFJekIsR0FBSixFQUFaLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgLy8gSUXnlKhcbiAgICAgICAgdGhpcy5pZSgpO1xuXG4gICAgICAgIC8vIOOCueOCr+ODreODvOODq+OCpOODmeODs+ODiFxuICAgICAgICB0aGlzLnNjcm9sbEV2ZW50KCk7XG5cbiAgICAgICAgLy8g44K544Op44Kk44OA44O8XG4gICAgICAgIHRoaXMuc2xpZGVyKCk7XG5cbiAgICB9XG5cbiAgICAvLyBJReeUqFxuICAgIGllKCkge1xuXG4gICAgICAgIGNvbnN0IHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodWEuaW5kZXhPZignbXNpZScpICE9IC0xIHx8IHVhLmluZGV4T2YoJ3RyaWRlbnQnKSAhPSAtMSkge1xuICAgICAgICAgICAgZG9jdW1lbnQud3JpdGUoJzxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcGljdHVyZWZpbGwvMy4wLjMvcGljdHVyZWZpbGwubWluLmpzXCI+PC9zY3JpcHQ+Jyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIOOCueOCr+ODreODvOODq+OCpOODmeODs+ODiFxuICAgIHNjcm9sbEV2ZW50KCkge1xuXG4gICAgICAgIGNvbnN0ICRoZWFkZXIgPSAkKCcuanMtaGVhZGVyJyksXG4gICAgICAgICAgICAkY29udGVudHMgPSAkKCcuanMtY29udGVudHMnKSxcbiAgICAgICAgICAgICRkaXNwbGF5ID0gJCgnW2RhdGEtZGlzcGxheV0nKTtcblxuICAgICAgICB0aGlzLiR3aW5kb3cub24oJ2xvYWQgcmVzaXplIHNjcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuJHdpbmRvdy5zY3JvbGxUb3AoKSxcbiAgICAgICAgICAgICAgICBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsRXZlbnQgPSBzY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjgsXG4gICAgICAgICAgICAgICAgaGVhZGVyQm90dG9tID0gJGhlYWRlci5pbm5lckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzVG9wID0gJGNvbnRlbnRzLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGxldCBkZWxheSA9IDA7XG5cbiAgICAgICAgICAgIC8vIOmFjeS/oeS8muWgtFxuICAgICAgICAgICAgaWYgKHNjcm9sbEJvdHRvbSA+IGhlYWRlckJvdHRvbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYWRkQ2xhc3MoJy1mb2xsb3dGaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCctZm9sbG93Rml4ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8g6IOM5pmv55S75YOPXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gY29udGVudHNUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmFkZENsYXNzKCctYmdGaXhlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LnJlbW92ZUNsYXNzKCctYmdGaXhlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkZGlzcGxheS5lYWNoKChpLCBlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGVsZW0gPSAkKGUpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtVG9wID0gJGVsZW0ub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxFdmVudCA+IGVsZW1Ub3AgJiYgISRlbGVtLmhhc0NsYXNzKCctYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1Ub3AgPiBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbGVtLmNzcygndHJhbnNpdGlvbi1kZWxheScsIGRlbGF5ICogMC4yICsgJ3MnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGVsZW0uYWRkQ2xhc3MoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyDjgrnjg6njgqTjg4Djg7xcbiAgICBzbGlkZXIoKSB7XG5cbiAgICAgICAgY29uc3QgJHNsaWRlciA9ICQoJy5qcy1zbGlkZXInKTtcblxuICAgICAgICAkc2xpZGVyLmVhY2goKGksIGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtID0gJChlKTtcbiAgICAgICAgICAgICRlbGVtLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCBUb3AgZnJvbSBcIi4vdG9wLmVzNlwiO1xuXG5jb25zdCB0b3AgPSBuZXcgVG9wKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==