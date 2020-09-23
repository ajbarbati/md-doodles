webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index-sections/featuredPups.js":
/*!***************************************************!*\
  !*** ./components/index-sections/featuredPups.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FeaturedPups; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\featuredPups.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function FeaturedPups() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      allData = _useState[0],
      setAll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"puppy\" && featured == true] {\n            title,\n            sex,\n            breedSelect,\n            available,\n            breedType,\n            \"litter\": litter->title,\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n\t\t\t      },\n            image{\n              asset->{\n                _id,\n                url\n              }\n            }\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
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
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      className: "pupCard",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: data.image.asset.url,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx("h3", {
      className: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, data.title), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, data.available == !true ? "AVAILABLE" : "SOLD"), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, data.sex), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, data.breedSelect), __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, data.breedType)));
  })));
}

_s(FeaturedPups, "j4cxbyb9vUxQFB0tqHwlmKBxdI8=");

_c = FeaturedPups;

var _c;

$RefreshReg$(_c, "FeaturedPups");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9mZWF0dXJlZFB1cHMuanMiXSwibmFtZXMiOlsiRmVhdHVyZWRQdXBzIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJhc3NldCIsInVybCIsInRpdGxlIiwiYXZhaWxhYmxlIiwic2V4IiwiYnJlZWRTZWxlY3QiLCJicmVlZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWEMsc0RBQVEsQ0FBQyxJQUFELENBREc7QUFBQSxNQUM5QkMsT0FEOEI7QUFBQSxNQUNyQkMsTUFEcUI7O0FBR3JDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0RBQVksQ0FDVEMsS0FESCw4ZEF3QkdDLElBeEJILENBd0JRLFVBQUNDLElBQUQ7QUFBQSxhQUFVTCxNQUFNLENBQUNLLElBQUQsQ0FBaEI7QUFBQSxLQXhCUixXQXlCU0MsT0FBTyxDQUFDQyxLQXpCakI7QUEwQkQsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDtBQTZCQUQsU0FBTyxDQUFDRSxHQUFSLENBQVlSLE1BQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELE9BQU8sSUFDTkEsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0osSUFBRCxFQUFPSyxLQUFQO0FBQUEsV0FDVjtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQXlCLFNBQUcsRUFBRUEsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFTCxJQUFJLENBQUNNLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBM0I7QUFBZ0MsU0FBRyxFQUFDLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0JSLElBQUksQ0FBQ1MsS0FBdkIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1QsSUFBSSxDQUFDVSxTQUFMLElBQWtCLENBQUMsSUFBbkIsR0FBMEIsV0FBMUIsR0FBd0MsTUFBN0MsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1YsSUFBSSxDQUFDVyxHQUFWLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtYLElBQUksQ0FBQ1ksV0FBVixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLWixJQUFJLENBQUNhLFNBQVYsQ0FMRixDQUZGLENBRFU7QUFBQSxHQUFaLENBRkosQ0FGRixDQURGO0FBb0JEOztHQXJEdUJyQixZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc0MzQ4MjVkZjU0N2QyZTZlNWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVhdHVyZWRQdXBzKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJwdXBweVwiICYmIGZlYXR1cmVkID09IHRydWVdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIHNleCxcclxuICAgICAgICAgICAgYnJlZWRTZWxlY3QsXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZSxcclxuICAgICAgICAgICAgYnJlZWRUeXBlLFxyXG4gICAgICAgICAgICBcImxpdHRlclwiOiBsaXR0ZXItPnRpdGxlLFxyXG4gICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgIGVuWzBde1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG5cdFx0XHQgICAgICB9LFxyXG4gICAgICAgICAgICBpbWFnZXtcclxuICAgICAgICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0QWxsKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc2V0QWxsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZlYXR1cmVkUHVwc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgUHVwczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVhdHVyZWRQdXBDYXJkc1wiPlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXBDYXJkXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e2RhdGEuaW1hZ2UuYXNzZXQudXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiXCI+e2RhdGEudGl0bGV9PC9oMz4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEuYXZhaWxhYmxlID09ICF0cnVlID8gXCJBVkFJTEFCTEVcIiA6IFwiU09MRFwifTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEuc2V4fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e2RhdGEuYnJlZWRTZWxlY3R9PC9oND5cclxuICAgICAgICAgICAgICAgIDxoNT57ZGF0YS5icmVlZFR5cGV9PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9