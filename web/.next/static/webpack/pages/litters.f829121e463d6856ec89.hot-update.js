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
    }, __jsx("img", {
      width: "100px",
      src: data.image.asset.url,
      alt: "A litter of puppies",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 15
      }
    }, __jsx("h2", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, data.title), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, data.featured == true ? "Featured" : null), __jsx("div", {
      className: "Mother",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.momImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 19
      }
    }, "Mother: ", data.mom)), __jsx("div", {
      className: "Father",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: Object(_imageBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])(data.dadImage).width(300).url(),
      alt: "Mother of Litter",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "Father: ", data.dad)), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, data.body.en.children.text)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiXSwibmFtZXMiOlsiTGl0dGVyIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwiaW1hZ2UiLCJhc3NldCIsInVybCIsInRpdGxlIiwiZmVhdHVyZWQiLCJ1cmxGb3IiLCJtb21JbWFnZSIsIndpZHRoIiwibW9tIiwiZGFkSW1hZ2UiLCJkYWQiLCJib2R5IiwiZW4iLCJjaGlsZHJlbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDTEMsc0RBQVEsQ0FBQyxJQUFELENBREg7QUFBQSxNQUN4QkMsT0FEd0I7QUFBQSxNQUNmQyxNQURlOztBQUcvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNEQUFZLENBQ1RDLEtBREgsaWZBd0JHQyxJQXhCSCxDQXdCUSxVQUFDQyxJQUFEO0FBQUEsYUFBVUwsTUFBTSxDQUFDSyxJQUFELENBQWhCO0FBQUEsS0F4QlIsV0F5QlNDLE9BQU8sQ0FBQ0MsS0F6QmpCO0FBMEJELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkFELFNBQU8sQ0FBQ0UsR0FBUixDQUFZUixNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxPQUFPLElBQ05BLE9BQU8sQ0FBQ1UsR0FBUixDQUFZLFVBQUNKLElBQUQsRUFBT0ssS0FBUDtBQUFBLFdBQ1Y7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUVBLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBQyxPQUFYO0FBQW1CLFNBQUcsRUFBRUwsSUFBSSxDQUFDTSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQXpDO0FBQThDLFNBQUcsRUFBQyxxQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxlQUFTLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1IsSUFBSSxDQUFDUyxLQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtULElBQUksQ0FBQ1UsUUFBTCxJQUFpQixJQUFqQixHQUF3QixVQUF4QixHQUFxQyxJQUExQyxDQUZGLEVBR0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVDLDZEQUFNLENBQUNYLElBQUksQ0FBQ1ksUUFBTixDQUFOLENBQXNCQyxLQUF0QixDQUE0QixHQUE1QixFQUFpQ0wsR0FBakMsRUFBVjtBQUFrRCxTQUFHLEVBQUMsa0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlSLElBQUksQ0FBQ2MsR0FBakIsQ0FGRixDQUhGLEVBT0U7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFSCw2REFBTSxDQUFDWCxJQUFJLENBQUNlLFFBQU4sQ0FBTixDQUFzQkYsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNMLEdBQWpDLEVBQVY7QUFBa0QsU0FBRyxFQUFDLGtCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZUixJQUFJLENBQUNnQixHQUFqQixDQUZGLENBUEYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUloQixJQUFJLENBQUNpQixJQUFMLENBQVVDLEVBQVYsQ0FBYUMsUUFBYixDQUFzQkMsSUFBMUIsQ0FYRixDQUZGLENBRFU7QUFBQSxHQUFaLENBRkosQ0FGRixDQURGO0FBMEJEOztHQTNEdUI1QixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpdHRlcnMuZjgyOTEyMWU0NjNkNjg1NmVjODkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiXHJcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlQnVpbGRlclwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpdHRlcigpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwibGl0dGVyXCJdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIFwibW9tXCI6IG1vbS0+dGl0bGUsXHJcbiAgICAgICAgICAgIFwibW9tSW1hZ2VcIjogbW9tLT5pbWFnZSxcclxuICAgICAgICAgICAgXCJkYWRcIjogZGFkLT50aXRsZSxcclxuICAgICAgICAgICAgXCJkYWRJbWFnZVwiOiBkYWQtPmltYWdlLFxyXG4gICAgICAgICAgICBmZWF0dXJlZCxcclxuICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgYXNzZXQtPntcclxuICAgICAgICAgICAgICAgIF9pZCxcclxuICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuWzBde1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zb2xlLmxvZyhzZXRBbGwpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyc1wiPlxyXG4gICAgICA8aDI+RmVhdHVyZWQgTGl0dGVyczwvaDI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlcldyYXBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwcHhcIiBzcmM9e2RhdGEuaW1hZ2UuYXNzZXQudXJsfSBhbHQ9XCJBIGxpdHRlciBvZiBwdXBwaWVzXCIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT5cclxuICAgICAgICAgICAgICAgIDxoMj57ZGF0YS50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzPntkYXRhLmZlYXR1cmVkID09IHRydWUgPyBcIkZlYXR1cmVkXCIgOiBudWxsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1vdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGRhdGEubW9tSW1hZ2UpLndpZHRoKDMwMCkudXJsKCl9IGFsdD1cIk1vdGhlciBvZiBMaXR0ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICAgIDxwPk1vdGhlcjoge2RhdGEubW9tfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiRmF0aGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoZGF0YS5kYWRJbWFnZSkud2lkdGgoMzAwKS51cmwoKX0gYWx0PVwiTW90aGVyIG9mIExpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgPHA+RmF0aGVyOiB7ZGF0YS5kYWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keS5lbi5jaGlsZHJlbi50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==