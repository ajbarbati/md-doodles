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
    }, "Date of Birth: ", data.dateA), __jsx("p", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9saXR0ZXIuanMiXSwibmFtZXMiOlsiTGl0dGVyIiwidXNlU3RhdGUiLCJhbGxEYXRhIiwic2V0QWxsIiwidXNlRWZmZWN0Iiwic2FuaXR5Q2xpZW50IiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsIm1hcCIsImluZGV4IiwidXJsRm9yIiwibW9tSW1hZ2UiLCJ3aWR0aCIsInVybCIsIm1vbSIsIm1vbUJyZWVkIiwiaW1hZ2UiLCJhc3NldCIsInRpdGxlIiwiZG9iIiwiZGF0ZUEiLCJib2R5IiwiZW4iLCJjaGlsZHJlbiIsInRleHQiLCJkYWRJbWFnZSIsImRhZCIsImRhZEJyZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsSUFBRCxDQURIO0FBQUEsTUFDeEJDLE9BRHdCO0FBQUEsTUFDZkMsTUFEZTs7QUFHL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxzREFBWSxDQUNUQyxLQURILGluQkE0QkdDLElBNUJILENBNEJRLFVBQUNDLElBQUQ7QUFBQSxhQUFVTCxNQUFNLENBQUNLLElBQUQsQ0FBaEI7QUFBQSxLQTVCUixXQTZCU0MsT0FBTyxDQUFDQyxLQTdCakI7QUE4QkQsR0EvQlEsRUErQk4sRUEvQk0sQ0FBVDtBQWlDQUQsU0FBTyxDQUFDRSxHQUFSLENBQVlSLE1BQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsT0FBTyxJQUNOQSxPQUFPLENBQUNVLEdBQVIsQ0FBWSxVQUFDSixJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNWO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFFQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVDLDZEQUFNLENBQUNOLElBQUksQ0FBQ08sUUFBTixDQUFOLENBQXNCQyxLQUF0QixDQUE0QixHQUE1QixFQUFpQ0MsR0FBakMsRUFBVjtBQUFrRCxTQUFHLEVBQUMsa0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQVlULElBQUksQ0FBQ1UsR0FBakIsQ0FGRixFQUdFO0FBQUksZUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF1QlYsSUFBSSxDQUFDVyxRQUE1QixDQUhGLENBREYsRUFNRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFdBQUssRUFBQyxPQUFYO0FBQW1CLFNBQUcsRUFBRVgsSUFBSSxDQUFDWSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJKLEdBQXpDO0FBQThDLFNBQUcsRUFBQyxxQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLVCxJQUFJLENBQUNjLEtBQVYsQ0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQW9CZCxJQUFJLENBQUNlLEdBQXpCLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUFvQmYsSUFBSSxDQUFDZ0IsS0FBekIsQ0FKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSWhCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsRUFBVixDQUFhQyxRQUFiLENBQXNCQyxJQUExQixDQUxGLENBTkYsRUFhRTtBQUFNLGVBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVkLDZEQUFNLENBQUNOLElBQUksQ0FBQ3FCLFFBQU4sQ0FBTixDQUFzQmIsS0FBdEIsQ0FBNEIsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQVY7QUFBa0QsU0FBRyxFQUFDLGtCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFZVCxJQUFJLENBQUNzQixHQUFqQixDQUZGLEVBR0U7QUFBSSxlQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXVCdEIsSUFBSSxDQUFDdUIsUUFBNUIsQ0FIRixDQWJGLENBRFU7QUFBQSxHQUFaLENBRkosQ0FGRixDQURGO0FBNkJEOztHQWxFdUIvQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xpdHRlcnMuNzI2Y2VkYTFjNzcwN2M0YWQ5ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzYW5pdHlDbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudC5qc1wiXHJcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlQnVpbGRlclwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpdHRlcigpIHtcclxuICBjb25zdCBbYWxsRGF0YSwgc2V0QWxsXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzYW5pdHlDbGllbnRcclxuICAgICAgLmZldGNoKFxyXG4gICAgICAgIGAqW190eXBlID09IFwibGl0dGVyXCJdIHtcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIFwibW9tXCI6IG1vbS0+dGl0bGUsXHJcbiAgICAgICAgICAgIFwibW9tSW1hZ2VcIjogbW9tLT5pbWFnZSxcclxuICAgICAgICAgICAgXCJtb21CcmVlZFwiOiBtb20tPmJyZWVkU2VsZWN0LFxyXG4gICAgICAgICAgICBcImRhZFwiOiBkYWQtPnRpdGxlLFxyXG4gICAgICAgICAgICBcImRhZEltYWdlXCI6IGRhZC0+aW1hZ2UsXHJcbiAgICAgICAgICAgIFwiZGFkQnJlZWRcIjogZGFkLT5icmVlZFNlbGVjdCxcclxuICAgICAgICAgICAgZmVhdHVyZWQsXHJcbiAgICAgICAgICAgIGRvYixcclxuICAgICAgICAgICAgZGF0ZUEsXHJcbiAgICAgICAgICAgIGltYWdle1xyXG4gICAgICAgICAgICAgIGFzc2V0LT57XHJcbiAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgZW5bMF17XHJcbiAgICAgICAgICAgICAgICBjaGlsZHJlblswXXtcclxuICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0QWxsKGRhdGEpKVxyXG4gICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc29sZS5sb2coc2V0QWxsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlcnNcIj5cclxuICAgICAgPGgyPkZlYXR1cmVkIExpdHRlcnM8L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpdHRlckdyaWRcIj5cclxuICAgICAgICB7YWxsRGF0YSAmJlxyXG4gICAgICAgICAgYWxsRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVyV3JhcFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTW90aGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGRhdGEubW9tSW1hZ2UpLndpZHRoKDMwMCkudXJsKCl9IGFsdD1cIk1vdGhlciBvZiBMaXR0ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD5Nb3RoZXI6IHtkYXRhLm1vbX08L3A+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiYnJlZWRcIj57ZGF0YS5tb21CcmVlZH08L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGl0dGVySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyB3aWR0aD1cIjEwMHB4XCIgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PVwiQSBsaXR0ZXIgb2YgcHVwcGllc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+e2RhdGEudGl0bGV9PC9oMj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxoND5EYXRlIG9mIEJpcnRoOiB7ZGF0YS5kb2J9PC9oND4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGg0PkRhdGUgb2YgQmlydGg6IHtkYXRhLmRhdGVBfTwvaDQ+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5ib2R5LmVuLmNoaWxkcmVuLnRleHR9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIkZhdGhlclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihkYXRhLmRhZEltYWdlKS53aWR0aCgzMDApLnVybCgpfSBhbHQ9XCJNb3RoZXIgb2YgTGl0dGVyXCIvPlxyXG4gICAgICAgICAgICAgICAgPHA+RmF0aGVyOiB7ZGF0YS5kYWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImJyZWVkXCI+e2RhdGEuZGFkQnJlZWR9PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=