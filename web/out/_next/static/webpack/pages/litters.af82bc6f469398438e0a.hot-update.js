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
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"litter\"] {\n            title,\n            \"mom\": mom->title,\n            \"momImage\": mom->image,\n            \"momBreed\": mom->breedSelect,\n            \"dad\": dad->title,\n            \"dadImage\": dad->image,\n            \"dadBreed\": dad->breedSelect,\n            featured,\n            dob,\n            dateA,\n            image{\n              asset->{\n                _id,\n                url\n              }\n            },\n            body{\n              en[0]{\n                children[0]{\n                  text\n                } \n              }\n            },\n        }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
  }, []);
  console.log(setAll);
  return __jsx("div", {
    className: "litters",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "Featured Litters"), __jsx("div", {
    className: "litterGrid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, allData && allData.map(function (data, index) {
    return __jsx("div", {
      className: "litterWrap",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "Mother",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.momImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }, "Mother: ", data.mom), __jsx("h4", {
      className: "breed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, data.momBreed)), __jsx("div", {
      className: "litterInfo",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, __jsx("img", {
      width: "100px",
      src: data.image.asset.url,
      alt: "A litter of puppies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }), __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, data.title), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, "Date of Birth: ", data.dob), __jsx("h4", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }, "Date of Birth: ", data.date), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, data.body.en.children.text)), __jsx("div", {
      className: "Father",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.dadImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "Father: ", data.dad), __jsx("h4", {
      className: "breed",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, data.dadBreed)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiXSwibmFtZXMiOlsiTGl0dGVyIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwidXJsRm9yIiwibW9tSW1hZ2UiLCJ3aWR0aCIsInVybCIsIm1vbSIsIm1vbUJyZWVkIiwiaW1hZ2UiLCJhc3NldCIsInRpdGxlIiwiZG9iIiwiZGF0ZSIsImJvZHkiLCJlbiIsImNoaWxkcmVuIiwidGV4dCIsImRhZEltYWdlIiwiZGFkIiwiZGFkQnJlZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxJQUFELENBREg7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxNQURlOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNEQUFZLENBQ1RDLEtBREgsaW5CQTRCR0MsSUE1QkgsQ0E0QlEsVUFBQ0MsSUFBRDtBQUFBLGFBQVVMLE1BQU0sQ0FBQ0ssSUFBRCxDQUFoQjtBQUFBLEtBNUJSLFdBNkJTQyxPQUFPLENBQUNDLEtBN0JqQjtBQThCRCxHQS9CUSxFQStCTixFQS9CTSxDQUFUO0FBaUNBRCxTQUFPLENBQUNFLEdBQVIsQ0FBWVIsTUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLElBQ05BLE9BQU8sQ0FBQ1UsR0FBUixDQUFZLFVBQUNKLElBQUQsRUFBT0ssS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUVBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUMsNkRBQU0sQ0FBQ04sSUFBSSxDQUFDTyxRQUFOLENBQU4sQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFWO0FBQWtELFNBQUcsRUFBQyxrQkFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBWVQsSUFBSSxDQUFDVSxHQUFqQixDQUZGLEVBR0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCVixJQUFJLENBQUNXLFFBQTVCLENBSEYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssV0FBSyxFQUFDLE9BQVg7QUFBbUIsU0FBRyxFQUFFWCxJQUFJLENBQUNZLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkosR0FBekM7QUFBOEMsU0FBRyxFQUFDLHFCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtULElBQUksQ0FBQ2MsS0FBVixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBb0JkLElBQUksQ0FBQ2UsR0FBekIsQ0FIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQW9CZixJQUFJLENBQUNnQixJQUF6QixDQUpGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQyxFQUFWLENBQWFDLFFBQWIsQ0FBc0JDLElBQTFCLENBTEYsQ0FORixFQWFFO0FBQU0sZUFBUyxFQUFDLFFBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRWQsNkRBQU0sQ0FBQ04sSUFBSSxDQUFDcUIsUUFBTixDQUFOLENBQXNCYixLQUF0QixDQUE0QixHQUE1QixFQUFpQ0MsR0FBakMsRUFBVjtBQUFrRCxTQUFHLEVBQUMsa0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlULElBQUksQ0FBQ3NCLEdBQWpCLENBRkYsRUFHRTtBQUFJLGVBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdUJ0QixJQUFJLENBQUN1QixRQUE1QixDQUhGLENBYkYsQ0FEVTtBQUFBLEdBQVosQ0FGSixDQUZGLENBREY7QUE2QkQ7O0dBbEV1Qi9CLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGl0dGVycy5hZjgyYmM2ZjQ2OTM5ODQzOGUwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuaW1wb3J0IHVybEZvciBmcm9tIFwiLi4vLi4vaW1hZ2VCdWlsZGVyXCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGl0dGVyKCkge1xyXG4gIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNhbml0eUNsaWVudFxyXG4gICAgICAuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGUgPT0gXCJsaXR0ZXJcIl0ge1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgXCJtb21cIjogbW9tLT50aXRsZSxcclxuICAgICAgICAgICAgXCJtb21JbWFnZVwiOiBtb20tPmltYWdlLFxyXG4gICAgICAgICAgICBcIm1vbUJyZWVkXCI6IG1vbS0+YnJlZWRTZWxlY3QsXHJcbiAgICAgICAgICAgIFwiZGFkXCI6IGRhZC0+dGl0bGUsXHJcbiAgICAgICAgICAgIFwiZGFkSW1hZ2VcIjogZGFkLT5pbWFnZSxcclxuICAgICAgICAgICAgXCJkYWRCcmVlZFwiOiBkYWQtPmJyZWVkU2VsZWN0LFxyXG4gICAgICAgICAgICBmZWF0dXJlZCxcclxuICAgICAgICAgICAgZG9iLFxyXG4gICAgICAgICAgICBkYXRlQSxcclxuICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgTGl0dGVyczwvaDI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyR3JpZFwiPlxyXG4gICAgICAgIHthbGxEYXRhICYmXHJcbiAgICAgICAgICBhbGxEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0ZXJXcmFwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNb3RoZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoZGF0YS5tb21JbWFnZSkud2lkdGgoMzAwKS51cmwoKX0gYWx0PVwiTW90aGVyIG9mIExpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPk1vdGhlcjoge2RhdGEubW9tfTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJicmVlZFwiPntkYXRhLm1vbUJyZWVkfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXR0ZXJJbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwcHhcIiBzcmM9e2RhdGEuaW1hZ2UuYXNzZXQudXJsfSBhbHQ9XCJBIGxpdHRlciBvZiBwdXBwaWVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0PkRhdGUgb2YgQmlydGg6IHtkYXRhLmRvYn08L2g0PiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aDQ+RGF0ZSBvZiBCaXJ0aDoge2RhdGEuZGF0ZX08L2g0PiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keS5lbi5jaGlsZHJlbi50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJGYXRoZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoZGF0YS5kYWRJbWFnZSkud2lkdGgoMzAwKS51cmwoKX0gYWx0PVwiTW90aGVyIG9mIExpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDxwPkZhdGhlcjoge2RhdGEuZGFkfTwvcD5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJicmVlZFwiPntkYXRhLmRhZEJyZWVkfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9