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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_magnific_popup_custom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/magnific-popup.custom.js */ "./src/js/magnific-popup.custom.js");
/* harmony import */ var _js_magnific_popup_custom_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_magnific_popup_custom_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_custom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/custom.js */ "./src/js/custom.js");
/* harmony import */ var _js_custom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_custom_js__WEBPACK_IMPORTED_MODULE_1__);

 //import './css/plain.css';
// import './scss/main.scss';

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/custom.js":
/*!**************************!*\
  !*** ./src/js/custom.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

//require(`../scss/custom.scss`);
var $ = jQuery.noConflict();
$(document).ready(function () {
  function goBack() {
    window.history.back();
  }
});
/**
Custom Tabs module
*/

$(document).ready(function () {
  var config = {
    menuItemsWrapper: {
      selector: '#businessLocationsMenuWrapper'
    },
    menuItem: {
      selector: 'a.showOnSelect.menuItem,.showOnSelect.menu a',
      contentIDAttr: 'href'
    },
    contentWrapper: {
      selector: '#businessLocationsContentWrapper'
    },
    content: {
      id: '',
      selector: '.showOnSelect.content',
      activeClass: 'active'
    }
  };
  var menuItemsWrapper = $(config.menuItemsWrapper.selector);
  var menuItems = $("".concat(config.menuItemsWrapper.selector, " ").concat(config.menuItem.selector));
  var contentWrapper = $(config.contentWrapper.selector);
  var contents = $("".concat(config.contentWrapper.selector, " ").concat(config.content.selector)); //activate the 1st content element & menu item

  contents.first().addClass(config.content.activeClass);
  menuItems.first().addClass(config.content.activeClass);
  menuItems.on('click', function (e) {
    var log = [];
    var el = e.currentTarget;
    var targetID = el.getAttribute(config.menuItem.contentIDAttr);
    var targetEl;

    if (targetID.startsWith('#')) {
      targetEl = $(targetID);
      targetEl.siblings(".".concat(config.content.activeClass)).removeClass(config.content.activeClass);
      targetEl.addClass(config.content.activeClass);
      $(this).addClass(config.content.activeClass);
    } else {
      log.push("- targetContentID is not an ID. The link must point to .showOnSelect.content element.");
      log.push("|- current value of targetContentID is ".concat(targetID));
    }

    console.log(log.join('\n'));
  });
});

/***/ }),

/***/ "./src/js/magnific-popup.custom.js":
/*!*****************************************!*\
  !*** ./src/js/magnific-popup.custom.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery.noConflict();
$(document).ready(function () {
  $('a.popup-iframe, .popup-iframe a, a.popup-youtube, a.popup-vimeo, a.popup-gmaps').each(function () {
    $(this).magnificPopup({
      //        disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      //        fixedContentPos: false
      fixedContentPos: 'top'
    });
    $(document).on('click', '.mfp-close', function (e) {
      //        e.preventDefault();
      $.magnificPopup.close();
    });
  });
  $('.popup-inline, .popup-inline a').each(function () {
    //$('.popup-inline-wrapper').each(function() {
    $(this).magnificPopup({
      type: 'inline',
      //mainClass: 'popup-inline-wrapper',
      //delegate: "a", //selector for the click event.
      removalDelay: 160,
      fixedContentPos: true,
      alignTop: true,
      overflowY: 'scroll',
      showCloseBtn: true,
      closeBtnInside: true,
      closeOnBgClick: true,
      enableEscapeKey: true,
      closeOnContentClick: false,
      //closeMarkup: `<button title="%title%" type="button" class="mfp-close">&#215;</button>`,
      //prependTo: "",
      //autoFocusLast: true
      //focus: "className"
      preloader: true,
      modal: false
    });
  });
  /* = attempt to create inline popup gallery
  == Result: FAILED
  == Solutions:
  - Generate an array of gallery items then pass them into magnificPopup({items:itemsArray})
   */

  $('.popup-inline-wrapper').each(function () {
    $(this).magnificPopup({
      type: 'inline',
      //mainClass: 'popup-inline-wrapper',
      //delegate: "a", //selector for the click event.
      removalDelay: 160,
      fixedContentPos: true,
      alignTop: true,
      overflowY: 'scroll',
      showCloseBtn: true,
      closeBtnInside: true,
      closeOnBgClick: true,
      enableEscapeKey: true,
      closeOnContentClick: false,
      //closeMarkup: `<button title="%title%" type="button" class="mfp-close">&#215;</button>`,
      //prependTo: "",
      //autoFocusLast: true
      //focus: "className"
      preloader: true,
      //items: []
      //gallery: {
      //  enabled: true
      //}
      modal: false
    });
  });
  /*
   * ********************************************
   * unused code
   */
  //  $(function() {

  $('.popup-modal').each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      type: 'inline',
      preloader: false,
      focus: '#username',
      modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
      e.preventDefault();
      $.magnificPopup.close();
    });
  }); //  });
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /mnt/divi-child-theme-nodejs/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /mnt/divi-child-theme-nodejs/src/app.scss */"./src/app.scss");


/***/ })

/******/ });