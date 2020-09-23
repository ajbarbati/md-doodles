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
  const {
    0: pos,
    1: setPos
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("top");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 5) {
        setPos("moved");
      } else {
        setPos("top");
      }
    });
  }, []);
  return __jsx("header", {
    id: "header",
    style: {
      backgroundColor: pos === "top" ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, .7)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_pages_routes__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
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
    className: "faq",
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
    className: "faqs",
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

/***/ "./components/index-sections/featuredPups.js":
/*!***************************************************!*\
  !*** ./components/index-sections/featuredPups.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedPups; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\featuredPups.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FeaturedPups() {
  const {
    0: allData,
    1: setAll
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "puppy" && featured == true] {
            title,
            sex,
            breedSelect,
            available,
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
    className: "featuredPups",
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
  }, "Featured Pups"), __jsx("div", {
    className: "featuredPupCards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, allData && allData.map((data, index) => __jsx("div", {
    className: "pupCard",
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image.asset.url,
    alt: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("h3", {
    className: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, data.title), __jsx("h3", {
    className: "available",
    style: {
      color: data.available == !true ? 'green' : "red"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, data.available == !true ? "AVAILABLE" : "SOLD"), __jsx("h4", {
    className: "sex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, data.sex), __jsx("h4", {
    className: "breed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, data.breedSelect), __jsx("h5", {
    className: "breedType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, data.breedType))))));
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
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "landing",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, "My Divine Doodles")), __jsx("h2", {
    className: "subHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, "My Divine Doodles takes care of their family raised dogs and they take care of you."));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/index-sections/links.js":
/*!********************************************!*\
  !*** ./components/index-sections/links.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\links.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Links = () => {
  return __jsx("div", {
    className: "links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "breedL",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://via.placeholder.com/50?text=G",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "Golden Doodles")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://via.placeholder.com/50?text=S",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Sheepa Doodles")), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "https://via.placeholder.com/50?text=B",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "Berne Doodles"))), __jsx("div", {
    className: "litterL",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Links);

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
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch(`*[_type == "testimonial" && featured == true] {
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
    className: "testimonial",
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
  }, "What our customers are saying!"), __jsx("div", {
    className: "testimonialsWrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "testimonials",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, allData && allData.map((data, index) => __jsx("div", {
    key: index,
    className: "testCard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: data.image.asset.url,
    alt: "Family of Testimonial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, data.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, data.body.en.children.text))))));
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
/* harmony import */ var _components_index_sections_featuredPups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index-sections/featuredPups */ "./components/index-sections/featuredPups.js");
/* harmony import */ var _components_index_sections_testimonial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/index-sections/testimonial */ "./components/index-sections/testimonial.js");
/* harmony import */ var _components_index_sections_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/index-sections/links */ "./components/index-sections/links.js");
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
  }), __jsx(_components_index_sections_featuredPups__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_links__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    className: "routes",
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
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "https://via.placeholder.com/50?text=LOGO",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 43
    }
  })), __jsx("a", {
    onClick: () => router.push('/puppies'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, " All Puppies"), __jsx("a", {
    onClick: () => router.push('/litters'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, " Litters"), __jsx("a", {
    onClick: () => router.push('/info'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, " Info"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9mZWF0dXJlZFB1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9sYW5kaW5nSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LXNlY3Rpb25zL3Byb2NjZXNzSW5mby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LXNlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzYW5pdHkvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iLCJGb290ZXIiLCJIZWFkZXIiLCJwb3MiLCJzZXRQb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzY3JvbGxlZCIsInNjcm9sbGluZ0VsZW1lbnQiLCJzY3JvbGxUb3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJBYm91dCIsImFsbERhdGEiLCJzZXRBbGwiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaW1hZ2UiLCJhc3NldCIsInVybCIsImJvZHkiLCJlbiIsImNoaWxkcmVuIiwidGV4dCIsInRpdGxlMiIsImJvZHkyIiwiVGVzdGltb25pYWxzIiwiZGVzY3JpcHRpb24iLCJGZWF0dXJlZFB1cHMiLCJjb2xvciIsImF2YWlsYWJsZSIsInNleCIsImJyZWVkU2VsZWN0IiwiYnJlZWRUeXBlIiwiTGFuZGluZyIsIkxpbmtzIiwiUHJvY2VzcyIsIkluZGV4Iiwic3R5bGVzIiwibWFpbiIsIlJvdXRlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsb0hBQVksQ0FBQztBQUN4QkMsV0FBUyxFQUFFLFVBRGE7QUFDRDtBQUN2QkMsU0FBTyxFQUFFLFlBRmU7QUFFRDtBQUN2QkMsUUFBTSxFQUFFLElBSGdCLENBR1g7O0FBSFcsQ0FBRCxDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakIsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKO0FBS0gsQ0FORDs7QUFRZUEscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFFbkIsUUFBTTtBQUFBLE9BQUNDLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCQyxzREFBUSxDQUFDLEtBQUQsQ0FBOUI7QUFFQUMseURBQVMsQ0FBRSxNQUFJO0FBQ2JDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0NDLENBQUMsSUFBSTtBQUNyQyxVQUFJQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEJDLFNBQXpDOztBQUNBLFVBQUlGLFFBQVEsSUFBSSxDQUFoQixFQUFrQjtBQUNmTixjQUFNLENBQUMsT0FBRCxDQUFOO0FBQ0YsT0FGRCxNQUVPO0FBQ0pBLGNBQU0sQ0FBQyxLQUFELENBQU47QUFDRjtBQUNKLEtBUEQ7QUFRSCxHQVRVLEVBU1QsRUFUUyxDQUFUO0FBVUEsU0FDRTtBQUFRLE1BQUUsRUFBQyxRQUFYO0FBQW9CLFNBQUssRUFBRTtBQUFDUyxxQkFBZSxFQUFFVixHQUFHLEtBQUssS0FBUixHQUFnQixrQkFBaEIsR0FBcUM7QUFBdkQsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQW5CRDs7QUFxQmVELHFFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFZSxTQUFTWSxLQUFULEdBQWlCO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUFvQlgsc0RBQVEsQ0FBQyxJQUFELENBQWxDO0FBRUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkVCxzREFBWSxDQUNUb0IsS0FESCxDQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUZMLEVBMkJHQyxJQTNCSCxDQTJCU0MsSUFBRCxJQUFVSCxNQUFNLENBQUNHLElBQUQsQ0EzQnhCLEVBNEJHQyxLQTVCSCxDQTRCU0MsT0FBTyxDQUFDQyxLQTVCakI7QUE2QkQsR0E5QlEsRUE4Qk4sRUE5Qk0sQ0FBVDtBQWdDQUQsU0FBTyxDQUFDRSxHQUFSLENBQVlQLE1BQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxJQUNOQSxPQUFPLENBQUNTLEdBQVIsQ0FBWSxDQUFDTCxJQUFELEVBQU9NLEtBQVAsS0FDVjtBQUFNLE9BQUcsRUFBRUEsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS04sSUFBSSxDQUFDTyxLQUFWLENBREYsRUFFRTtBQUFLLFNBQUssRUFBQyxNQUFYO0FBQWtCLE9BQUcsRUFBRVAsSUFBSSxDQUFDUSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQXhDO0FBQTZDLE9BQUcsRUFBQyxpQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJVixJQUFJLENBQUNXLElBQUwsQ0FBVUMsRUFBVixDQUFhQyxRQUFiLENBQXNCQyxJQUExQixDQUhGLENBRkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZCxJQUFJLENBQUNlLE1BQVYsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWYsSUFBSSxDQUFDZ0IsS0FBTCxDQUFXSixFQUFYLENBQWNDLFFBQWQsQ0FBdUJDLElBQTNCLENBRkYsQ0FQRixDQURGLENBRkosQ0FGRixDQURGO0FBc0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0REO0FBQ0E7QUFFZSxTQUFTRyxZQUFULEdBQXdCO0FBQ3JDLFFBQU07QUFBQSxPQUFDckIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBb0JYLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFQsc0RBQVksQ0FDVG9CLEtBREgsQ0FFSzs7O1VBRkwsRUFPR0MsSUFQSCxDQU9TQyxJQUFELElBQVVILE1BQU0sQ0FBQ0csSUFBRCxDQVB4QixFQVFHQyxLQVJILENBUVNDLE9BQU8sQ0FBQ0MsS0FSakI7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUFELFNBQU8sQ0FBQ0UsR0FBUixDQUFZUCxNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELE9BQU8sSUFDTkEsT0FBTyxDQUFDUyxHQUFSLENBQVksQ0FBQ0wsSUFBRCxFQUFPTSxLQUFQLEtBQ1Y7QUFBTSxPQUFHLEVBQUVBLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtOLElBQUksQ0FBQ08sS0FBVixDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUCxJQUFJLENBQUNrQixXQUFULENBRkYsQ0FERixDQURGLENBRkosQ0FGRixDQURGO0FBZ0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFFZSxTQUFTQyxZQUFULEdBQXdCO0FBQ3JDLFFBQU07QUFBQSxPQUFDdkIsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBb0JYLHNEQUFRLENBQUMsSUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZFQsc0RBQVksQ0FDVG9CLEtBREgsQ0FFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFGTCxFQXdCR0MsSUF4QkgsQ0F3QlNDLElBQUQsSUFBVUgsTUFBTSxDQUFDRyxJQUFELENBeEJ4QixFQXlCR0MsS0F6QkgsQ0F5QlNDLE9BQU8sQ0FBQ0MsS0F6QmpCO0FBMEJELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkFELFNBQU8sQ0FBQ0UsR0FBUixDQUFZUCxNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLElBQ05BLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLENBQUNMLElBQUQsRUFBT00sS0FBUCxLQUNWO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsT0FBRyxFQUFFQSxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVOLElBQUksQ0FBQ1EsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUEzQjtBQUFnQyxPQUFHLEVBQUMsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQlYsSUFBSSxDQUFDTyxLQUEzQixDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUEwQixTQUFLLEVBQUU7QUFBQ2EsV0FBSyxFQUFFcEIsSUFBSSxDQUFDcUIsU0FBTCxJQUFrQixDQUFDLElBQW5CLEdBQTBCLE9BQTFCLEdBQW9DO0FBQTVDLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0ZyQixJQUFJLENBQUNxQixTQUFMLElBQWtCLENBQUMsSUFBbkIsR0FBMEIsV0FBMUIsR0FBd0MsTUFBOUgsQ0FGRixFQUdFO0FBQUksYUFBUyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQnJCLElBQUksQ0FBQ3NCLEdBQTFCLENBSEYsRUFJRTtBQUFJLGFBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUJ0QixJQUFJLENBQUN1QixXQUE1QixDQUpGLEVBS0U7QUFBSSxhQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCdkIsSUFBSSxDQUFDd0IsU0FBaEMsQ0FMRixDQUZGLENBREYsQ0FGSixDQUZGLENBREY7QUFvQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hERCxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLENBREEsRUFLQTtBQUFJLGFBQVMsRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkZBTEEsQ0FERjtBQVlELENBYkQ7O0FBZWVBLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNoQixTQUNFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyx1Q0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLENBRE4sRUFLTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMsdUNBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixDQUxOLEVBU007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLHVDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosQ0FUTixDQURKLEVBZUk7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0FERjtBQW1CRCxDQXBCSDs7QUFzQmlCQSxvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJGLE1BQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3BCLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUMsTUFEUjtBQUVFLFVBQU0sRUFBQyxPQUZUO0FBR0UsT0FBRyxFQUFDLHFFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBU0QsQ0FWRDs7QUFZZUEsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBRWUsU0FBU1YsWUFBVCxHQUF3QjtBQUNyQyxRQUFNO0FBQUEsT0FBQ3JCLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQW9CWCxzREFBUSxDQUFDLElBQUQsQ0FBbEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RULHNEQUFZLENBQ1RvQixLQURILENBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFGTCxFQW9CR0MsSUFwQkgsQ0FvQlNDLElBQUQsSUFBVUgsTUFBTSxDQUFDRyxJQUFELENBcEJ4QixFQXFCR0MsS0FyQkgsQ0FxQlNDLE9BQU8sQ0FBQ0MsS0FyQmpCO0FBc0JELEdBdkJRLEVBdUJOLEVBdkJNLENBQVQ7QUF5QkFELFNBQU8sQ0FBQ0UsR0FBUixDQUFZUCxNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDRCxPQUFPLElBQ05BLE9BQU8sQ0FBQ1MsR0FBUixDQUFZLENBQUNMLElBQUQsRUFBT00sS0FBUCxLQUNWO0FBQUssT0FBRyxFQUFFQSxLQUFWO0FBQWlCLGFBQVMsRUFBQyxVQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxPQUFHLEVBQUVOLElBQUksQ0FBQ1EsS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUE1QjtBQUFpQyxPQUFHLEVBQUMsdUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS1YsSUFBSSxDQUFDTyxLQUFWLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlQLElBQUksQ0FBQ1csSUFBTCxDQUFVQyxFQUFWLENBQWFDLFFBQWIsQ0FBc0JDLElBQTFCLENBSkYsQ0FERixDQUZGLENBREYsQ0FGRixDQURGO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVBLE1BQU1jLEtBQUssR0FBRyxNQUFNO0FBQ2hCLFNBQ0k7QUFBSyxhQUFTLEVBQUVDLHlEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSSxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLE1BQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBTUksTUFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0ksTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESjtBQWFILENBZEQ7O0FBZ0JlRixvRUFBZixFOzs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBRWUsU0FBU0csTUFBVCxHQUFrQjtBQUMvQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFHLFdBQU8sRUFBRSxNQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBWSxHQUFaLENBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0M7QUFBSyxPQUFHLEVBQUMsMENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQyxDQUZGLEVBR0U7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGLEVBSUU7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksVUFBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLEVBS0U7QUFBRyxXQUFPLEVBQUUsTUFBTUYsTUFBTSxDQUFDRSxJQUFQLENBQVksT0FBWixDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEYsQ0FERjtBQVNELEM7Ozs7Ozs7Ozs7O0FDZEQsMkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6ICdwdmRqcm1mMCcsIC8vIGZyb20gc2FuaXR5Lmpzb25cclxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gcHJvZHVjdGlvbiBpcyBkZWZhdWx0IG5hbWUgZm9yIHB1YmxpYyBkYXRhc2V0XHJcbiAgICB1c2VDZG46IHRydWUgLy8gJ2ZhbHNlJyBpZiB5b3Ugd2FudCBmcmVzaCBkYXRhXHJcbn0pIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAqIEZvb3RlclxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vcGFnZXMvcm91dGVzXCJcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKFwidG9wXCIpXHJcblxyXG4gIHVzZUVmZmVjdCAoKCk9PntcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkID49IDUpe1xyXG4gICAgICAgICAgIHNldFBvcyhcIm1vdmVkXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBzZXRQb3MoXCJ0b3BcIilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBvcyA9PT0gXCJ0b3BcIiA/IFwicmdiYSgwLCAwLCAwLCAwKVwiIDogXCJyZ2JhKDAsIDAsIDAsIC43KVwiIH19PlxyXG4gICAgICA8Um91dGVzLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJhYm91dFwiXSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgIGVuWzBde1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0aXRsZTIsXHJcbiAgICAgICAgICAgIGJvZHkye1xyXG4gICAgICAgICAgICAgIGVuWzBde1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICBpbWFnZXtcclxuICAgICAgICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0QWxsKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc2V0QWxsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XHJcbiAgICAgIDxoMj5BYm91dDwvaDI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjUwcHhcIiBzcmM9e2RhdGEuaW1hZ2UuYXNzZXQudXJsfSBhbHQ9XCJJbWFnZSBvZiBUcmFjaWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keS5lbi5jaGlsZHJlbi50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZTJ9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkyLmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwiZmFxXCJdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmYXFcIj5cclxuICAgICAgPGgyPkZlYXR1cmVkIEZBUTwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFxc1wiPlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWF0dXJlZFB1cHMoKSB7XHJcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2FuaXR5Q2xpZW50XHJcbiAgICAgIC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZSA9PSBcInB1cHB5XCIgJiYgZmVhdHVyZWQgPT0gdHJ1ZV0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgc2V4LFxyXG4gICAgICAgICAgICBicmVlZFNlbGVjdCxcclxuICAgICAgICAgICAgYXZhaWxhYmxlLFxyXG4gICAgICAgICAgICBicmVlZFR5cGUsXHJcbiAgICAgICAgICAgIFwibGl0dGVyXCI6IGxpdHRlci0+dGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRQdXBzXCI+XHJcbiAgICAgIDxoMj5GZWF0dXJlZCBQdXBzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWF0dXJlZFB1cENhcmRzXCI+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cENhcmRcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZS5hc3NldC51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJuYW1lXCI+e2RhdGEudGl0bGV9PC9oMz4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiYXZhaWxhYmxlXCIgc3R5bGU9e3tjb2xvcjogZGF0YS5hdmFpbGFibGUgPT0gIXRydWUgPyAnZ3JlZW4nIDogXCJyZWRcIn19PntkYXRhLmF2YWlsYWJsZSA9PSAhdHJ1ZSA/IFwiQVZBSUxBQkxFXCIgOiBcIlNPTERcIn08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInNleFwiPntkYXRhLnNleH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJyZWVkXCI+e2RhdGEuYnJlZWRTZWxlY3R9PC9oND5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJicmVlZFR5cGVcIj57ZGF0YS5icmVlZFR5cGV9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJjb25zdCBMYW5kaW5nID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYW5kaW5nXCI+XHJcbiAgICAgICAgPGgxPk15IERpdmluZSBEb29kbGVzPC9oMT5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cInN1YkhlYWRlclwiPlxyXG4gICAgICAgICAgTXkgRGl2aW5lIERvb2RsZXMgdGFrZXMgY2FyZSBvZiB0aGVpciBmYW1pbHkgcmFpc2VkIGRvZ3MgYW5kIHRoZXkgdGFrZVxyXG4gICAgICAgICAgY2FyZSBvZiB5b3UuXHJcbiAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nIiwiY29uc3QgTGlua3MgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWVkTFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MD90ZXh0PUdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+R29sZGVuIERvb2RsZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwP3RleHQ9U1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5TaGVlcGEgRG9vZGxlczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTA/dGV4dD1CXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkJlcm5lIERvb2RsZXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyTFwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgTGlua3MiLCJjb25zdCBQcm9jZXNzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2Nlc3NcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMjAwcHhcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDB4MjAwP3RleHQ9SW5mbytncmFwaGljK2Fib3V0K3Byb2Nlc3NcIlxyXG4gICAgICA+PC9pbWc+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2Nlc3NcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFscygpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwidGVzdGltb25pYWxcIiAmJiBmZWF0dXJlZCA9PSB0cnVlXSB7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBmZWF0dXJlZCxcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbFwiPlxyXG4gICAgICA8aDI+V2hhdCBvdXIgY3VzdG9tZXJzIGFyZSBzYXlpbmchPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbHNXcmFwXCIgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWxzXCI+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRlc3RDYXJkXCI+XHJcbiAgICAgICAgICAgICAgPGltZyAgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PVwiRmFtaWx5IG9mIFRlc3RpbW9uaWFsXCIgLz5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57ZGF0YS5ib2R5LmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xyXG5pbXBvcnQgRmVhdHVyZWRQdXBzIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvZmVhdHVyZWRQdXBzJ1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvdGVzdGltb25pYWwnXHJcbmltcG9ydCBMaW5rcyBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4LXNlY3Rpb25zL2xpbmtzJ1xyXG5pbXBvcnQgRmFxIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvZmFxJ1xyXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9hYm91dCdcclxuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9wcm9jY2Vzc0luZm8nXHJcbmltcG9ydCBMYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvbGFuZGluZ0ltYWdlJ1xyXG5cclxuXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5kZXgubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPExhbmRpbmcvPlxyXG4gICAgICAgICAgICA8VGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgICAgIDxGZWF0dXJlZFB1cHMgLz5cclxuICAgICAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgICAgICAgIDxQcm9jZXNzIC8+XHJcbiAgICAgICAgICAgIDxBYm91dCAvPlxyXG4gICAgICAgICAgICA8RmFxLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fX19BamNhXCJcbn07XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdXRlcygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3V0ZXNcIj5cclxuICAgICAgXHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9PjxpbWcgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwP3RleHQ9TE9HT1wiPjwvaW1nPjwvYT5cclxuICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wdXBwaWVzJyl9PiBBbGwgUHVwcGllczwvYT5cclxuICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9saXR0ZXJzJyl9PiBMaXR0ZXJzPC9hPlxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL2luZm8nKX0+IEluZm88L2E+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2FuaXR5L2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9