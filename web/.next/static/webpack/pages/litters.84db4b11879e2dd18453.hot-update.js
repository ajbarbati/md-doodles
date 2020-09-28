webpackHotUpdate_N_E("pages/litters",{

/***/ "./components/index-sections/litter.js":
/*!*********************************************!*\
  !*** ./components/index-sections/litter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Litter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
/* harmony import */ var _imageBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../imageBuilder */ "./imageBuilder.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\litter.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Litter() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      allData = _useState[0],
      setAll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"litter\"] {\n            title,\n            \"mom\": mom->title,\n            \"momImage\": mom->image,\n            \"dad\": dad->title,\n            \"dadImage\": dad->image,\n            featured,\n            image{\n              asset->{\n                _id,\n                url\n              }\n            },\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n            },\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
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
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      className: "litterWrap",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "litterInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, __jsx("img", {
      width: "100px",
      src: data.image.asset.url,
      alt: "A litter of puppies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, data.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, data.body.en.children.text)), __jsx("div", {
      className: "Mother",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.momImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, "Mother: ", data.mom)), __jsx("div", {
      className: "Father",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.dadImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "Father: ", data.dad)));
  })));
}

_s(Litter, "j4cxbyb9vUxQFB0tqHwlmKBxdI8=");

_c = Litter;

var _c;

$RefreshReg$(_c, "Litter");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiXSwibmFtZXMiOlsiTGl0dGVyIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJhc3NldCIsInVybCIsInRpdGxlIiwiYm9keSIsImVuIiwiY2hpbGRyZW4iLCJ0ZXh0IiwidXJsRm9yIiwibW9tSW1hZ2UiLCJ3aWR0aCIsIm1vbSIsImRhZEltYWdlIiwiZGFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsSUFBRCxDQURIO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsTUFEZTs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxzREFBWSxDQUNUQyxLQURILGlmQXdCR0MsSUF4QkgsQ0F3QlEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFoQjtBQUFBLEtBeEJSLFdBeUJTQyxPQUFPLENBQUNDLEtBekJqQjtBQTBCRCxHQTNCUSxFQTJCTixFQTNCTSxDQUFUO0FBNkJBRCxTQUFPLENBQUNFLEdBQVIsQ0FBWVIsTUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxJQUNOQSxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDSixJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNWO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFFQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxXQUFLLEVBQUMsT0FBWDtBQUFtQixTQUFHLEVBQUVMLElBQUksQ0FBQ00sS0FBTCxDQUFXQyxLQUFYLENBQWlCQyxHQUF6QztBQUE4QyxTQUFHLEVBQUMscUJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1IsSUFBSSxDQUFDUyxLQUFWLENBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlULElBQUksQ0FBQ1UsSUFBTCxDQUFVQyxFQUFWLENBQWFDLFFBQWIsQ0FBc0JDLElBQTFCLENBSEYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQyw2REFBTSxDQUFDZCxJQUFJLENBQUNlLFFBQU4sQ0FBTixDQUFzQkMsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNSLEdBQWpDLEVBQVY7QUFBa0QsU0FBRyxFQUFDLGtCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZUixJQUFJLENBQUNpQixHQUFqQixDQUZGLENBTkYsRUFVRTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVILDZEQUFNLENBQUNkLElBQUksQ0FBQ2tCLFFBQU4sQ0FBTixDQUFzQkYsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNSLEdBQWpDLEVBQVY7QUFBa0QsU0FBRyxFQUFDLGtCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZUixJQUFJLENBQUNtQixHQUFqQixDQUZGLENBVkYsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQUZGLENBREY7QUF5QkQ7O0dBMUR1QjNCLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGl0dGVycy44NGRiNGIxMTg3OWUyZGQxODQ1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vLi4vaW1hZ2VCdWlsZGVyXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGl0dGVyKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJsaXR0ZXJcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgXCJtb21cIjogbW9tLT50aXRsZSxcclxuICAgICAgICAgICAgXCJtb21JbWFnZVwiOiBtb20tPmltYWdlLFxyXG4gICAgICAgICAgICBcImRhZFwiOiBkYWQtPnRpdGxlLFxyXG4gICAgICAgICAgICBcImRhZEltYWdlXCI6IGRhZC0+aW1hZ2UsXHJcbiAgICAgICAgICAgIGZlYXR1cmVkLFxyXG4gICAgICAgICAgICBpbWFnZXtcclxuICAgICAgICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgIGVuWzBde1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0ZXJzXCI+XHJcbiAgICAgIDxoMj5GZWF0dXJlZCBMaXR0ZXJzPC9oMj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7YWxsRGF0YSAmJlxyXG4gICAgICAgICAgYWxsRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyV3JhcFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMHB4XCIgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PVwiQSBsaXR0ZXIgb2YgcHVwcGllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmJvZHkuZW4uY2hpbGRyZW4udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3RoZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoZGF0YS5tb21JbWFnZSkud2lkdGgoMzAwKS51cmwoKX0gYWx0PVwiTW90aGVyIG9mIExpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPk1vdGhlcjoge2RhdGEubW9tfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJGYXRoZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoZGF0YS5kYWRJbWFnZSkud2lkdGgoMzAwKS51cmwoKX0gYWx0PVwiTW90aGVyIG9mIExpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZhdGhlcjoge2RhdGEuZGFkfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=