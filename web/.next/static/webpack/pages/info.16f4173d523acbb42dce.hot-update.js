webpackHotUpdate_N_E("pages/info",{

/***/ "./components/index-sections/info.js":
/*!*******************************************!*\
  !*** ./components/index-sections/info.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client.js */ "./client.js");
var _jsxFileName = "C:\\Users\\ajb02\\OneDrive\\Documents\\Work\\md-doodles\\web\\components\\index-sections\\info.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Info() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      allData = _useState[0],
      setAll = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _client_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetch("*[_type == \"info\"] {\n              title,\n              body{\n                en[0]{\n                  children[0]{\n                    text\n                  } \n                }\n              },\n              image{\n                asset->{\n                  _id,\n                  url\n                }\n              }\n          }").then(function (data) {
      return setAll(data);
    })["catch"](console.error);
  }, []);
  return __jsx("div", {
    className: "infoPage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "Additional Info"), allData && allData.map(function (data, index) {
    return __jsx("div", {
      className: "infoBlock",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "",
      src: data.image.asset.url,
      alt: "Image of:" + data.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 19
      }
    }), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, data.title), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, data.body.en.children.text));
  }));
}

_s(Info, "j4cxbyb9vUxQFB0tqHwlmKBxdI8=");

_c = Info;

var _c;

$RefreshReg$(_c, "Info");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbmRleC1zZWN0aW9ucy9pbmZvLmpzIl0sIm5hbWVzIjpbIkluZm8iLCJ1c2VTdGF0ZSIsImFsbERhdGEiLCJzZXRBbGwiLCJ1c2VFZmZlY3QiLCJzYW5pdHlDbGllbnQiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwibWFwIiwiaW5kZXgiLCJpbWFnZSIsImFzc2V0IiwidXJsIiwidGl0bGUiLCJib2R5IiwiZW4iLCJjaGlsZHJlbiIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdlLFNBQVNBLElBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxJQUFELENBRE47QUFBQSxNQUNyQkMsT0FEcUI7QUFBQSxNQUNaQyxNQURZOztBQUc1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNEQUFZLENBQ1RDLEtBREgsbVdBbUJHQyxJQW5CSCxDQW1CUSxVQUFDQyxJQUFEO0FBQUEsYUFBVUwsTUFBTSxDQUFDSyxJQUFELENBQWhCO0FBQUEsS0FuQlIsV0FvQlNDLE9BQU8sQ0FBQ0MsS0FwQmpCO0FBcUJELEdBdEJRLEVBc0JOLEVBdEJNLENBQVQ7QUF1QkEsU0FDSTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUtSLE9BQU8sSUFDVkEsT0FBTyxDQUFDUyxHQUFSLENBQVksVUFBQ0gsSUFBRCxFQUFPSSxLQUFQO0FBQUEsV0FDUjtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQWtCLFNBQUcsRUFBRUosSUFBSSxDQUFDSyxLQUFMLENBQVdDLEtBQVgsQ0FBaUJDLEdBQXhDO0FBQTZDLFNBQUcsRUFBRSxjQUFhUCxJQUFJLENBQUNRLEtBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS1IsSUFBSSxDQUFDUSxLQUFWLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlSLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxFQUFWLENBQWFDLFFBQWIsQ0FBc0JDLElBQTFCLENBSEosQ0FEUTtBQUFBLEdBQVosQ0FIRixDQURKO0FBYUg7O0dBdkN1QnBCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5mby4xNmY0MTczZDUyM2FjYmI0MmRjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50LmpzXCJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvICgpIHtcclxuICAgIGNvbnN0IFthbGxEYXRhLCBzZXRBbGxdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzYW5pdHlDbGllbnRcclxuICAgICAgICAuZmV0Y2goXHJcbiAgICAgICAgICBgKltfdHlwZSA9PSBcImluZm9cIl0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgIGJvZHl7XHJcbiAgICAgICAgICAgICAgICBlblswXXtcclxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bMF17XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxyXG4gICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICBhc3NldC0+e1xyXG4gICAgICAgICAgICAgICAgICBfaWQsXHJcbiAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1gXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRBbGwoZGF0YSkpXHJcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvUGFnZVwiPlxyXG4gICAgICAgICAgICA8aDE+QWRkaXRpb25hbCBJbmZvPC9oMT5cclxuICAgICAgICAgICAge2FsbERhdGEgJiZcclxuICAgICAgICAgIGFsbERhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb0Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiXCIgc3JjPXtkYXRhLmltYWdlLmFzc2V0LnVybH0gYWx0PXtcIkltYWdlIG9mOlwiKyBkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8aDM+e2RhdGEudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuYm9keS5lbi5jaGlsZHJlbi50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=