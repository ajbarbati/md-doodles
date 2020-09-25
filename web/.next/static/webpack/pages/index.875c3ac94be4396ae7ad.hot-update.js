webpackHotUpdate_N_E("pages/index",{

/***/ "./components/index-sections/about.js":
/*!********************************************!*\
  !*** ./components/index-sections/about.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\about.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function About() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      allData = _useState[0],
      setAll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"about\"] {\n            title,\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n            },\n            title2,\n            body2{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n\t\t\t},\n            image{\n              asset->{\n                _id,\n                url\n              }\n            }\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
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
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      key: index,
      className: "aboutWrap",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx("div", {
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
    }, data.title), __jsx("img", {
      width: "50px",
      src: data.image.asset.url,
      alt: "Image of Tracie",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, data.body.en.children.text)), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 19
      }
    }, "Who we are!"))), __jsx("div", {
      className: "row2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 19
      }
    }, data.title2), __jsx("img", {
      width: "50px",
      src: data.image.asset.url,
      alt: "Image of Tracie",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 19
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    }, data.body2.en.children.text))));
  }));
}

_s(About, "j4cxbyb9vUxQFB0tqHwlmKBxdI8=");

_c = About;

var _c;

$RefreshReg$(_c, "About");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9hYm91dC5qcyJdLCJuYW1lcyI6WyJBYm91dCIsInVzZVN0YXRlIiwiYWxsRGF0YSIsInNldEFsbCIsInVzZUVmZmVjdCIsInNhbml0eUNsaWVudCIsImZldGNoIiwidGhlbiIsImRhdGEiLCJjb25zb2xlIiwiZXJyb3IiLCJsb2ciLCJtYXAiLCJpbmRleCIsInRpdGxlIiwiaW1hZ2UiLCJhc3NldCIsInVybCIsImJvZHkiLCJlbiIsImNoaWxkcmVuIiwidGV4dCIsInRpdGxlMiIsImJvZHkyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0pDLHNEQUFRLENBQUMsSUFBRCxDQURKO0FBQUEsTUFDdkJDLE9BRHVCO0FBQUEsTUFDZEMsTUFEYzs7QUFHOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxzREFBWSxDQUNUQyxLQURILDBlQTJCR0MsSUEzQkgsQ0EyQlEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFoQjtBQUFBLEtBM0JSLFdBNEJTQyxPQUFPLENBQUNDLEtBNUJqQjtBQTZCRCxHQTlCUSxFQThCTixFQTlCTSxDQUFUO0FBZ0NBRCxTQUFPLENBQUNFLEdBQVIsQ0FBWVIsTUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tELE9BQU8sSUFDTkEsT0FBTyxDQUFDVSxHQUFSLENBQVksVUFBQ0osSUFBRCxFQUFPSyxLQUFQO0FBQUEsV0FDVjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFpQixlQUFTLEVBQUMsV0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtMLElBQUksQ0FBQ00sS0FBVixDQURGLEVBRUU7QUFBSyxXQUFLLEVBQUMsTUFBWDtBQUFrQixTQUFHLEVBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUF4QztBQUE2QyxTQUFHLEVBQUMsaUJBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSVQsSUFBSSxDQUFDVSxJQUFMLENBQVVDLEVBQVYsQ0FBYUMsUUFBYixDQUFzQkMsSUFBMUIsQ0FIRixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FORixDQURGLEVBV0U7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS2IsSUFBSSxDQUFDYyxNQUFWLENBREYsRUFFRTtBQUFLLFdBQUssRUFBQyxNQUFYO0FBQWtCLFNBQUcsRUFBRWQsSUFBSSxDQUFDTyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQXhDO0FBQTZDLFNBQUcsRUFBQyxpQkFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJVCxJQUFJLENBQUNlLEtBQUwsQ0FBV0osRUFBWCxDQUFjQyxRQUFkLENBQXVCQyxJQUEzQixDQUhGLENBRkYsQ0FYRixDQURVO0FBQUEsR0FBWixDQUZOLENBREY7QUEyQkQ7O0dBL0R1QnJCLEs7O0tBQUFBLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODc1YzNhYzk0YmU0Mzk2YWU3YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBYm91dCgpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwiYWJvdXRcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGl0bGUyLFxyXG4gICAgICAgICAgICBib2R5MntcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJhYm91dFdyYXBcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdzFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBweFwiIHNyYz17ZGF0YS5pbWFnZS5hc3NldC51cmx9IGFsdD1cIkltYWdlIG9mIFRyYWNpZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj5XaG8gd2UgYXJlITwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdzJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlMn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiNTBweFwiIHNyYz17ZGF0YS5pbWFnZS5hc3NldC51cmx9IGFsdD1cIkltYWdlIG9mIFRyYWNpZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkyLmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==