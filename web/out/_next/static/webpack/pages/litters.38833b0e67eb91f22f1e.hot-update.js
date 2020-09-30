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
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"litter\"] {\n            title,\n            \"mom\": mom->title,\n            \"momImage\": mom->image,\n            \"dad\": dad->title,\n            \"dadImage\": dad->image,\n            \"dadImage\": dad->image,\n            featured,\n            breedSelect,\n            image{\n              asset->{\n                _id,\n                url\n              }\n            },\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n            },\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "litters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "Featured Litters"), __jsx("div", {
    className: "litterGrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      className: "litterWrap",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "Mother",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.momImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, "Mother: ", data.mom), __jsx("h4", {
      className: "breed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, data.breedSelect)), __jsx("div", {
      className: "litterInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, __jsx("img", {
      width: "100px",
      src: data.image.asset.url,
      alt: "A litter of puppies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, data.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, data.body.en.children.text)), __jsx("div", {
      className: "Father",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.dadImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, "Father: ", data.dad), __jsx("h4", {
      className: "breed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, data.breedSelect)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiXSwibmFtZXMiOlsiTGl0dGVyIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwidXJsRm9yIiwibW9tSW1hZ2UiLCJ3aWR0aCIsInVybCIsIm1vbSIsImJyZWVkU2VsZWN0IiwiaW1hZ2UiLCJhc3NldCIsInRpdGxlIiwiYm9keSIsImVuIiwiY2hpbGRyZW4iLCJ0ZXh0IiwiZGFkSW1hZ2UiLCJkYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxJQUFELENBREg7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxNQURlOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNEQUFZLENBQ1RDLEtBREgsa2pCQTBCR0MsSUExQkgsQ0EwQlEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFoQjtBQUFBLEtBMUJSLFdBMkJTQyxPQUFPLENBQUNDLEtBM0JqQjtBQTRCRCxHQTdCUSxFQTZCTixFQTdCTSxDQUFUO0FBK0JBRCxTQUFPLENBQUNFLEdBQVIsQ0FBWVIsTUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLElBQ05BLE9BQU8sQ0FBQ1UsR0FBUixDQUFZLFVBQUNKLElBQUQsRUFBT0ssS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUVBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUMsNkRBQU0sQ0FBQ04sSUFBSSxDQUFDTyxRQUFOLENBQU4sQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFWO0FBQWtELFNBQUcsRUFBQyxrQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWVQsSUFBSSxDQUFDVSxHQUFqQixDQUZGLEVBR0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCVixJQUFJLENBQUNXLFdBQTVCLENBSEYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFDLE9BQVg7QUFBbUIsU0FBRyxFQUFFWCxJQUFJLENBQUNZLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkosR0FBekM7QUFBOEMsU0FBRyxFQUFDLHFCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtULElBQUksQ0FBQ2MsS0FBVixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJZCxJQUFJLENBQUNlLElBQUwsQ0FBVUMsRUFBVixDQUFhQyxRQUFiLENBQXNCQyxJQUExQixDQUhGLENBTkYsRUFXRTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVaLDZEQUFNLENBQUNOLElBQUksQ0FBQ21CLFFBQU4sQ0FBTixDQUFzQlgsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQVY7QUFBa0QsU0FBRyxFQUFDLGtCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZVCxJQUFJLENBQUNvQixHQUFqQixDQUZGLEVBR0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCcEIsSUFBSSxDQUFDVyxXQUE1QixDQUhGLENBWEYsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQUZGLENBREY7QUEyQkQ7O0dBOUR1Qm5CLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGl0dGVycy4zODgzM2IwZTY3ZWI5MWYyMmYxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vLi4vaW1hZ2VCdWlsZGVyXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGl0dGVyKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJsaXR0ZXJcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgXCJtb21cIjogbW9tLT50aXRsZSxcclxuICAgICAgICAgICAgXCJtb21JbWFnZVwiOiBtb20tPmltYWdlLFxyXG4gICAgICAgICAgICBcImRhZFwiOiBkYWQtPnRpdGxlLFxyXG4gICAgICAgICAgICBcImRhZEltYWdlXCI6IGRhZC0+aW1hZ2UsXHJcbiAgICAgICAgICAgIFwiZGFkSW1hZ2VcIjogZGFkLT5pbWFnZSxcclxuICAgICAgICAgICAgZmVhdHVyZWQsXHJcbiAgICAgICAgICAgIGJyZWVkU2VsZWN0LFxyXG4gICAgICAgICAgICBpbWFnZXtcclxuICAgICAgICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgICAgICAgX2lkLFxyXG4gICAgICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgIGVuWzBde1xyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgIHRleHRcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHNldEFsbChkYXRhKSlcclxuICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnNvbGUubG9nKHNldEFsbClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0ZXJzXCI+XHJcbiAgICAgIDxoMj5GZWF0dXJlZCBMaXR0ZXJzPC9oMj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0ZXJHcmlkXCI+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlcldyYXBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihkYXRhLm1vbUltYWdlKS53aWR0aCgzMDApLnVybCgpfSBhbHQ9XCJNb3RoZXIgb2YgTGl0dGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+TW90aGVyOiB7ZGF0YS5tb219PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJyZWVkXCI+e2RhdGEuYnJlZWRTZWxlY3R9PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlckluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDBweFwiIHNyYz17ZGF0YS5pbWFnZS5hc3NldC51cmx9IGFsdD1cIkEgbGl0dGVyIG9mIHB1cHBpZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPntkYXRhLnRpdGxlfTwvaDI+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5ib2R5LmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIkZhdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihkYXRhLmRhZEltYWdlKS53aWR0aCgzMDApLnVybCgpfSBhbHQ9XCJNb3RoZXIgb2YgTGl0dGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+RmF0aGVyOiB7ZGF0YS5kYWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJyZWVkXCI+e2RhdGEuYnJlZWRTZWxlY3R9PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=