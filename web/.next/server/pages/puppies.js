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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/puppies.js");
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

/***/ "./pages/puppies.js":
/*!**************************!*\
  !*** ./pages/puppies.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_index_sections_pups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/index-sections/pups */ "./components/index-sections/pups.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\pages\\puppies.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Puppies = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx(_components_index_sections_pups__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Puppies);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5kZXgtc2VjdGlvbnMvcHVwcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wdXBwaWVzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2FuaXR5L2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwidXNlQ2RuIiwiRm9vdGVyIiwiSGVhZGVyIiwicG9zIiwic2V0UG9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2Nyb2xsZWQiLCJzY3JvbGxpbmdFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYmFja2dyb3VuZENvbG9yIiwiUHVwcyIsImFsbERhdGEiLCJzZXRBbGwiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJtYXAiLCJpbmRleCIsImltYWdlIiwiYXNzZXQiLCJfcmVmIiwidGl0bGUiLCJzZXgiLCJicmVlZFNlbGVjdCIsImJyZWVkVHlwZSIsImJvZHkiLCJlbiIsImNoaWxkcmVuIiwidGV4dCIsImxpdHRlciIsIlB1cHBpZXMiLCJSb3V0ZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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OiJwYWdlcy9wdXBwaWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wdXBwaWVzLmpzXCIpO1xuIiwiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNhbml0eUNsaWVudCh7XHJcbiAgICBwcm9qZWN0SWQ6ICdwdmRqcm1mMCcsIC8vIGZyb20gc2FuaXR5Lmpzb25cclxuICAgIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJywgLy8gcHJvZHVjdGlvbiBpcyBkZWZhdWx0IG5hbWUgZm9yIHB1YmxpYyBkYXRhc2V0XHJcbiAgICB1c2VDZG46IHRydWUgLy8gJ2ZhbHNlJyBpZiB5b3Ugd2FudCBmcmVzaCBkYXRhXHJcbn0pIiwiY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAqIEZvb3RlclxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXIiLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vcGFnZXMvcm91dGVzXCJcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKFwidG9wXCIpXHJcblxyXG4gIHVzZUVmZmVjdCAoKCk9PntcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZSA9PiB7XHJcbiAgICAgICAgbGV0IHNjcm9sbGVkID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICAgICAgaWYgKHNjcm9sbGVkID49IDUpe1xyXG4gICAgICAgICAgIHNldFBvcyhcIm1vdmVkXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBzZXRQb3MoXCJ0b3BcIilcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZGVyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHBvcyA9PT0gXCJ0b3BcIiA/IFwicmdiYSgwLCAwLCAwLCAwKVwiIDogXCJyZ2JhKDAsIDAsIDAsIC43KVwiIH19PlxyXG4gICAgICA8Um91dGVzLz5cclxuICAgIDwvaGVhZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1cHMoKSB7XHJcbiAgY29uc3QgW2FsbERhdGEsIHNldEFsbF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2FuaXR5Q2xpZW50XHJcbiAgICAgIC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZSA9PSBcInB1cHB5XCJdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIHNleCxcclxuICAgICAgICAgICAgYnJlZWRTZWxlY3QsXHJcbiAgICAgICAgICAgIGJyZWVkVHlwZSxcclxuICAgICAgICAgICAgXCJsaXR0ZXJcIjogbGl0dGVyLT50aXRsZSxcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuXHRcdFx0ICAgICAgfSxcclxuICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdXBzXCI+XHJcbiAgICAgIDxoMj5GZWF0dXJlZCBQdXBzPC9oMj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxsRGF0YSAmJlxyXG4gICAgICAgICAgYWxsRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlLmFzc2V0Ll9yZWZ9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMz57ZGF0YS5zZXh9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxoND57ZGF0YS5icmVlZFNlbGVjdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg1PntkYXRhLmJyZWVkVHlwZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keS5lbi5jaGlsZHJlbi50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmxpdHRlcn08L3A+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xyXG5pbXBvcnQgUHVwcyBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4LXNlY3Rpb25zL3B1cHMnXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXHJcblxyXG5jb25zdCBQdXBwaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgPFB1cHMgLz5cclxuICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB1cHBpZXNcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb3V0ZXMoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm91dGVzXCI+XHJcbiAgICAgIFxyXG4gICAgICA8YSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfT48aW1nIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MD90ZXh0PUxPR09cIj48L2ltZz48L2E+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHVwcGllcycpfT4gQWxsIFB1cHBpZXM8L2E+XHJcbiAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvbGl0dGVycycpfT4gTGl0dGVyczwvYT5cclxuICAgICAgPGEgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9pbmZvJyl9PiBJbmZvPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNhbml0eS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==