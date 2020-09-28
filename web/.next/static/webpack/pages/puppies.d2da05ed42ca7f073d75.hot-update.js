webpackHotUpdate_N_E("pages/puppies",{

/***/ "./components/index-sections/pups.js":
/*!*******************************************!*\
  !*** ./components/index-sections/pups.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pups; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\pups.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Pups() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      allData = _useState[0],
      setAll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"puppy\"] {\n            title,\n            sex,\n            breedSelect,\n            breedTypev\n            available,\n            \"litter\": litter->title,\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n\t\t\t      },\n            image{\n              asset->{\n                _id,\n                url\n              }\n            }\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "pups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "pupsWrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Featured Pups"), __jsx("div", {
    className: "pupCards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      key: index,
      className: "pupCard",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: data.image.asset.url,
      alt: "",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 19
      }
    }, data.title), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, data.sex), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, data.breedSelect), __jsx("h5", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, data.breedType), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 19
      }
    }, data.litter)));
  }))));
}

_s(Pups, "j4cxbyb9vUxQFB0tqHwlmKBxdI8=");

_c = Pups;

var _c;

$RefreshReg$(_c, "Pups");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9wdXBzLmpzIl0sIm5hbWVzIjpbIlB1cHMiLCJ1c2VTdGF0ZSIsImFsbERhdGEiLCJzZXRBbGwiLCJ1c2VFZmZlY3QiLCJzYW5pdHlDbGllbnQiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsImFzc2V0IiwidXJsIiwidGl0bGUiLCJzZXgiLCJicmVlZFNlbGVjdCIsImJyZWVkVHlwZSIsImxpdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLElBQUQsQ0FETDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLE1BRGE7O0FBRzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0RBQVksQ0FDVEMsS0FESCwwY0F3QkdDLElBeEJILENBd0JRLFVBQUNDLElBQUQ7QUFBQSxhQUFVTCxNQUFNLENBQUNLLElBQUQsQ0FBaEI7QUFBQSxLQXhCUixXQXlCU0MsT0FBTyxDQUFDQyxLQXpCakI7QUEwQkQsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDtBQTZCQUQsU0FBTyxDQUFDRSxHQUFSLENBQVlSLE1BQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxJQUNOQSxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDSixJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNWO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQWlCLGVBQVMsRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxTQUFHLEVBQUVMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUEzQjtBQUFnQyxTQUFHLEVBQUMsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURBLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1IsSUFBSSxDQUFDUyxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtULElBQUksQ0FBQ1UsR0FBVixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLVixJQUFJLENBQUNXLFdBQVYsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1gsSUFBSSxDQUFDWSxTQUFWLENBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlaLElBQUksQ0FBQ2EsTUFBVCxDQUxGLENBRkYsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQUZGLENBREYsQ0FERjtBQXNCRDs7R0F2RHVCckIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wdXBwaWVzLmQyZGEwNWVkNDJjYTdmMDczZDc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnQuanNcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVwcygpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwicHVwcHlcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgc2V4LFxyXG4gICAgICAgICAgICBicmVlZFNlbGVjdCxcclxuICAgICAgICAgICAgYnJlZWRUeXBldlxyXG4gICAgICAgICAgICBhdmFpbGFibGUsXHJcbiAgICAgICAgICAgIFwibGl0dGVyXCI6IGxpdHRlci0+dGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgIH0sXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHVwc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cHNXcmFwXCI+XHJcbiAgICAgICAgPGgyPkZlYXR1cmVkIFB1cHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVwQ2FyZHNcIj5cclxuICAgICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicHVwQ2FyZFwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEuc2V4fTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxoND57ZGF0YS5icmVlZFNlbGVjdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8aDU+e2RhdGEuYnJlZWRUeXBlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmxpdHRlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==