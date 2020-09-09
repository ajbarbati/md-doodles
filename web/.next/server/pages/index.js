module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ "@sanity/client");
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'pvdjrmf0',
  // from sanity.json
  dataset: 'production',
  // production is default name for public dataset
  useCdn: true // 'false' if you want fresh data

}));

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => {
  return __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "* Footer");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/routes */ "./pages/routes.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => {
  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "navMenu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, __jsx(_pages_routes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/index-sections/about.js":
/*!********************************************!*\
  !*** ./components/index-sections/about.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "about"] {
            title,
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
            },
            title2,
            body2{
              en[0]{
                children[0]{
                  text
                } 
              }
			},
            image{
              asset->{
                _id,
                url
              }
            }
        }`).then(data => setAll(data)).catch(console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "About"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, data.title), __jsx("img", {
    width: "50px",
    src: data.image.asset.url,
    alt: "Image of Tracie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, data.body.en.children.text)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, data.title2), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, data.body2.en.children.text))))));
}

/***/ }),

/***/ "./components/index-sections/faq.js":
/*!******************************************!*\
  !*** ./components/index-sections/faq.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Testimonials() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "faq"] {
            title,
            description,
        }`).then(data => setAll(data)).catch(console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "Featured FAQ"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, data.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, data.description))))));
}

/***/ }),

/***/ "./components/index-sections/landingImage.js":
/*!***************************************************!*\
  !*** ./components/index-sections/landingImage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\landingImage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Landing = () => {
  return __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    width: "100%",
    height: "700px",
    src: "https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "My Divine Doodles"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, "My Divine Doodles takes care of their family raised dogs and they take care of you."));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/index-sections/litter.js":
/*!*********************************************!*\
  !*** ./components/index-sections/litter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Litter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
/* harmony import */ var _imageBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imageBuilder */ "./imageBuilder.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\litter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Litter() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "litter"] {
            title,
            "mom": mom->title,
            "momImage": mom->image,
            "dad": dad->title,
            "dadImage": dad->image,
            featured,
            image{
              asset->{
                _id,
                url
              }
            },
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
            },
        }`).then(data => setAll(data)).catch(console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "litters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Featured Litters"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("img", {
    width: "100px",
    src: data.image.asset.url,
    alt: "Family of Testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, data.title), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, data.featured == true ? "Featured" : null), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.momImage).width(300).url(),
    alt: "Mother of Litter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 22
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 96
    }
  }, "Mother: ", data.mom)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.dadImage).width(300).url(),
    alt: "Mother of Litter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 22
    }
  }), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 96
    }
  }, "Father: ", data.dad)), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, data.body.en.children.text))))));
}

/***/ }),

/***/ "./components/index-sections/proccessInfo.js":
/*!***************************************************!*\
  !*** ./components/index-sections/proccessInfo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\proccessInfo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Process = () => {
  return __jsx("div", {
    className: "process",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("img", {
    width: "100%",
    height: "200px",
    src: "https://via.placeholder.com/500x200?text=Info+graphic+about+process",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Process);

/***/ }),

/***/ "./components/index-sections/pups.js":
/*!*******************************************!*\
  !*** ./components/index-sections/pups.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pups; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\pups.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Pups() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "puppy"] {
            title,
            sex,
            breedSelect,
            breedType,
            "litter": litter->title,
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
			      },
            image{
              asset->{
                _id,
                url
              }
            }
        }`).then(data => setAll(data)).catch(console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "pups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Featured Pups"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image.asset._ref,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, data.title), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, data.sex), __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, data.breedSelect), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, data.breedType), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, data.body.en.children.text), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, data.litter))))));
}

/***/ }),

/***/ "./components/index-sections/testimonial.js":
/*!**************************************************!*\
  !*** ./components/index-sections/testimonial.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonials; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Testimonials() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "testimonial"] {
            title,
            featured,
            body{
              en[0]{
                children[0]{
                  text
                } 
              }
			      },
            image{
              asset->{
                _id,
                url
              }
            }
        }`).then(data => setAll(data)).catch(console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Featured Testimonials"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("span", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("img", {
    width: "50px",
    src: data.image.asset.url,
    alt: "Family of Testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, data.title), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, data.featured == true ? "Featured" : null), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, data.body.en.children.text))))));
}

/***/ }),

/***/ "./imageBuilder.js":
/*!*************************!*\
  !*** ./imageBuilder.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return urlFor; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./client.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ "@sanity/image-url");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(_client__WEBPACK_IMPORTED_MODULE_0__["default"]);
function urlFor(source) {
  return builder.image(source);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_index_sections_pups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index-sections/pups */ "./components/index-sections/pups.js");
/* harmony import */ var _components_index_sections_testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/index-sections/testimonial */ "./components/index-sections/testimonial.js");
/* harmony import */ var _components_index_sections_litter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index-sections/litter */ "./components/index-sections/litter.js");
/* harmony import */ var _components_index_sections_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/index-sections/faq */ "./components/index-sections/faq.js");
/* harmony import */ var _components_index_sections_about__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/index-sections/about */ "./components/index-sections/about.js");
/* harmony import */ var _components_index_sections_proccessInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/index-sections/proccessInfo */ "./components/index-sections/proccessInfo.js");
/* harmony import */ var _components_index_sections_landingImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/index-sections/landingImage */ "./components/index-sections/landingImage.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = () => {
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.main,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_landingImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_testimonial__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_pups__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_litter__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_proccessInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_about__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_faq__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"main": "index_main___Ajca"
};


/***/ }),

/***/ "./pages/routes.js":
/*!*************************!*\
  !*** ./pages/routes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\pages\\routes.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Routes() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("a", {
    onClick: () => router.push('/'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Home |"), __jsx("a", {
    onClick: () => router.push('/puppies'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, " All Puppies |"), __jsx("a", {
    onClick: () => router.push('/litters'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, " Litters |"), __jsx("a", {
    onClick: () => router.push('/info'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, " Info |"));
}

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9sYW5kaW5nSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9wcm9jY2Vzc0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9wdXBzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvdGVzdGltb25pYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaW1hZ2VCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNhbml0eS9pbWFnZS11cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsic2FuaXR5Q2xpZW50IiwicHJvamVjdElkIiwiZGF0YXNldCIsInVzZUNkbiIsIkZvb3RlciIsIkhlYWRlciIsIkFib3V0IiwiYWxsRGF0YSIsInNldEFsbCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJib2R5IiwiZW4iLCJjaGlsZHJlbiIsInRleHQiLCJ0aXRsZTIiLCJib2R5MiIsIlRlc3RpbW9uaWFscyIsImRlc2NyaXB0aW9uIiwiTGFuZGluZyIsIkxpdHRlciIsImZlYXR1cmVkIiwidXJsRm9yIiwibW9tSW1hZ2UiLCJ3aWR0aCIsIm1vbSIsImRhZEltYWdlIiwiZGFkIiwiUHJvY2VzcyIsIlB1cHMiLCJfcmVmIiwic2V4IiwiYnJlZWRTZWxlY3QiLCJicmVlZFR5cGUiLCJsaXR0ZXIiLCJidWlsZGVyIiwiaW1hZ2VVcmxCdWlsZGVyIiwic291cmNlIiwiSW5kZXgiLCJzdHlsZXMiLCJtYWluIiwiUm91dGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBREo7QUFhSCxDQWREOztBQWdCZUYsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUVlLFNBQVNHLE1BQVQsR0FBa0I7QUFDL0IsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsV0FBTyxFQUFFLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBUCxDQUFZLEdBQVosQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUU7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLEVBR0U7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhGLEVBSUU7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksT0FBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsQ0FERjtBQVFELEM7Ozs7Ozs7Ozs7O0FDYkQsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6ICdwdmRqcm1mMCcsIC8vIGZyb20gc2FuaXR5Lmpzb25cclxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gcHJvZHVjdGlvbiBpcyBkZWZhdWx0IG5hbWUgZm9yIHB1YmxpYyBkYXRhc2V0XHJcbiAgICB1c2VDZG46IHRydWUgLy8gJ2ZhbHNlJyBpZiB5b3Ugd2FudCBmcmVzaCBkYXRhXHJcbn0pIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAqIEZvb3RlclxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgUm91dGVzIGZyb20gXCIuLi9wYWdlcy9yb3V0ZXNcIlxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2TWVudVwiPlxyXG4gICAgICAgICAgPFJvdXRlcy8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2FuaXR5Q2xpZW50XHJcbiAgICAgIC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZSA9PSBcImFib3V0XCJdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlMixcclxuICAgICAgICAgICAgYm9keTJ7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcblx0XHRcdH0sXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cclxuICAgICAgPGgyPkFib3V0PC9oMj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxsRGF0YSAmJlxyXG4gICAgICAgICAgYWxsRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBweFwiIHNyYz17ZGF0YS5pbWFnZS5hc3NldC51cmx9IGFsdD1cIkltYWdlIG9mIFRyYWNpZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5ib2R5LmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlMn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keTIuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdGltb25pYWxzKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJmYXFcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0QWxsKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc2V0QWxsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgRkFRPC9oMj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxsRGF0YSAmJlxyXG4gICAgICAgICAgYWxsRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJjb25zdCBMYW5kaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICBoZWlnaHQ9XCI3MDBweFwiXHJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMD90ZXh0PVB1cHB5K0lNRyttYXliZVNsaWRlclwiXHJcbiAgICAgID48L2ltZz5cclxuICAgICAgPGgxPk15IERpdmluZSBEb29kbGVzPC9oMT5cclxuICAgICAgPHA+XHJcbiAgICAgICAgTXkgRGl2aW5lIERvb2RsZXMgdGFrZXMgY2FyZSBvZiB0aGVpciBmYW1pbHkgcmFpc2VkIGRvZ3MgYW5kIHRoZXkgdGFrZVxyXG4gICAgICAgIGNhcmUgb2YgeW91LlxyXG4gICAgICA8L3A+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmciLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIlxyXG5pbXBvcnQgdXJsRm9yIGZyb20gXCIuLi8uLi9pbWFnZUJ1aWxkZXJcIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXR0ZXIoKSB7XHJcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2FuaXR5Q2xpZW50XHJcbiAgICAgIC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZSA9PSBcImxpdHRlclwiXSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBcIm1vbVwiOiBtb20tPnRpdGxlLFxyXG4gICAgICAgICAgICBcIm1vbUltYWdlXCI6IG1vbS0+aW1hZ2UsXHJcbiAgICAgICAgICAgIFwiZGFkXCI6IGRhZC0+dGl0bGUsXHJcbiAgICAgICAgICAgIFwiZGFkSW1hZ2VcIjogZGFkLT5pbWFnZSxcclxuICAgICAgICAgICAgZmVhdHVyZWQsXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0QWxsKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc2V0QWxsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlcnNcIj5cclxuICAgICAgPGgyPkZlYXR1cmVkIExpdHRlcnM8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMHB4XCIgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PVwiRmFtaWx5IG9mIFRlc3RpbW9uaWFsXCIgLz5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntkYXRhLmZlYXR1cmVkID09IHRydWUgPyBcIkZlYXR1cmVkXCIgOiBudWxsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9e3VybEZvcihkYXRhLm1vbUltYWdlKS53aWR0aCgzMDApLnVybCgpfSBhbHQ9XCJNb3RoZXIgb2YgTGl0dGVyXCIvPjxwPk1vdGhlcjoge2RhdGEubW9tfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9e3VybEZvcihkYXRhLmRhZEltYWdlKS53aWR0aCgzMDApLnVybCgpfSBhbHQ9XCJNb3RoZXIgb2YgTGl0dGVyXCIvPjxwPkZhdGhlcjoge2RhdGEuZGFkfTwvcD48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiY29uc3QgUHJvY2VzcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9jZXNzXCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgIGhlaWdodD1cIjIwMHB4XCJcclxuICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAweDIwMD90ZXh0PUluZm8rZ3JhcGhpYythYm91dCtwcm9jZXNzXCJcclxuICAgICAgPjwvaW1nPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9jZXNzXHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQdXBzKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJwdXBweVwiXSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBzZXgsXHJcbiAgICAgICAgICAgIGJyZWVkU2VsZWN0LFxyXG4gICAgICAgICAgICBicmVlZFR5cGUsXHJcbiAgICAgICAgICAgIFwibGl0dGVyXCI6IGxpdHRlci0+dGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVwc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgUHVwczwvaDI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZS5hc3NldC5fcmVmfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2RhdGEuc2V4fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEuYnJlZWRTZWxlY3R9PC9oND5cclxuICAgICAgICAgICAgICAgIDxoNT57ZGF0YS5icmVlZFR5cGV9PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5saXR0ZXJ9PC9wPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwidGVzdGltb25pYWxcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgZmVhdHVyZWQsXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgIDxoMj5GZWF0dXJlZCBUZXN0aW1vbmlhbHM8L2gyPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjUwcHhcIiBzcmM9e2RhdGEuaW1hZ2UuYXNzZXQudXJsfSBhbHQ9XCJGYW1pbHkgb2YgVGVzdGltb25pYWxcIiAvPlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2RhdGEuZmVhdHVyZWQgPT0gdHJ1ZSA/IFwiRmVhdHVyZWRcIiA6IG51bGx9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICcuL2NsaWVudCdcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcclxuXHJcbmNvbnN0IGJ1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoc2FuaXR5Q2xpZW50KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBidWlsZGVyLmltYWdlKHNvdXJjZSlcclxufSIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcbmltcG9ydCBQdXBzIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvcHVwcydcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4LXNlY3Rpb25zL3Rlc3RpbW9uaWFsJ1xyXG5pbXBvcnQgTGl0dGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvbGl0dGVyJ1xyXG5pbXBvcnQgRmFxIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvZmFxJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9hYm91dCdcclxuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9wcm9jY2Vzc0luZm8nXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvbGFuZGluZ0ltYWdlJ1xyXG5cclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPExhbmRpbmcvPlxyXG4gICAgICAgICAgICA8VGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgICAgIDxQdXBzIC8+XHJcbiAgICAgICAgICAgIDxMaXR0ZXIgLz5cclxuICAgICAgICAgICAgPFByb2Nlc3MgLz5cclxuICAgICAgICAgICAgPEFib3V0IC8+XHJcbiAgICAgICAgICAgIDxGYXEvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiaW5kZXhfbWFpbl9fX0FqY2FcIlxufTtcbiIsImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVzKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT5Ib21lIHw8L2E+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHVwcGllcycpfT4gQWxsIFB1cHBpZXMgfDwvYT5cclxuICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9saXR0ZXJzJyl9PiBMaXR0ZXJzIHw8L2E+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvaW5mbycpfT4gSW5mbyB8PC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9pbWFnZS11cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==