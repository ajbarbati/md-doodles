webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pups.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pups.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".featuredPups {\r\n    width: 100%;\r\n    height: 100% ;\r\n    \r\n    padding-top: 5em;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        place-items: center;\r\n    }\r\n\r\n@media(max-width: 900px) {\r\n    \r\n    .featuredPupCards {\r\n        grid-template-columns: 1fr 1fr ;\r\n    }\r\n\r\n}\r\n\r\n@media(max-width: 675px) {\r\n    \r\n    .pupCard img {\r\n        width:  12em;\r\n        height: 12em;\r\n    }\r\n    .pupCard div {\r\n        width: 12em;\r\n    }\r\n\r\n    .name {\r\n        grid-column: 1 / 3;\r\n    }\r\n\r\n    .available {\r\n        grid-column: 4;\r\n        text-align: right;\r\n    }\r\n\r\n    .breed {\r\n        grid-row: 3;\r\n        grid-column: 1 / 5;\r\n        text-align: center;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media(max-width: 475px) {\r\n    \r\n    .featuredPupCards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .pupCard img {\r\n        width:  17em;\r\n        height: 17em;\r\n    }\r\n    .pupCard div {\r\n        width: 17em;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* PUP Pages */\r\n\r\n.pup-routes {\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -webkit-flex-wrap: wrap;\r\n            flex-wrap: wrap;\r\n    -webkit-align-content: space-between;\r\n            align-content: space-between;\r\n}\r\n\r\n    .pup-routes a {\r\n        border: 1.5px solid #333;\r\n    }", "",{"version":3,"sources":["C:/Users/ajb02/OneDrive/Documents/Work/md-doodles/web/pups.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,aAAa;;IAEb,gBAAgB;AACpB;;IAEI;QACI,aAAa;QACb,kCAAkC;QAClC,mBAAmB;IACvB;;AAEJ;;IAEI;QACI,+BAA+B;IACnC;;AAEJ;;AAEA;;IAEI;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,WAAW;IACf;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,cAAc;QACd,iBAAiB;IACrB;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,kBAAkB;IACtB;;;AAGJ;;AAEA;;IAEI;QACI,0BAA0B;IAC9B;IACA;QACI,YAAY;QACZ,YAAY;IAChB;IACA;QACI,WAAW;IACf;;;AAGJ;;AAEA,cAAc;;AAEd;IACI,qBAAa;IAAb,iBAAa;IAAb,aAAa;IACb,uBAAe;YAAf,eAAe;IACf,oCAA4B;YAA5B,4BAA4B;AAChC;;IAEI;QACI,wBAAwB;IAC5B","file":"pups.css","sourcesContent":[".featuredPups {\r\n    width: 100%;\r\n    height: 100% ;\r\n    \r\n    padding-top: 5em;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        place-items: center;\r\n    }\r\n\r\n@media(max-width: 900px) {\r\n    \r\n    .featuredPupCards {\r\n        grid-template-columns: 1fr 1fr ;\r\n    }\r\n\r\n}\r\n\r\n@media(max-width: 675px) {\r\n    \r\n    .pupCard img {\r\n        width:  12em;\r\n        height: 12em;\r\n    }\r\n    .pupCard div {\r\n        width: 12em;\r\n    }\r\n\r\n    .name {\r\n        grid-column: 1 / 3;\r\n    }\r\n\r\n    .available {\r\n        grid-column: 4;\r\n        text-align: right;\r\n    }\r\n\r\n    .breed {\r\n        grid-row: 3;\r\n        grid-column: 1 / 5;\r\n        text-align: center;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media(max-width: 475px) {\r\n    \r\n    .featuredPupCards {\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .pupCard img {\r\n        width:  17em;\r\n        height: 17em;\r\n    }\r\n    .pupCard div {\r\n        width: 17em;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* PUP Pages */\r\n\r\n.pup-routes {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: space-between;\r\n}\r\n\r\n    .pup-routes a {\r\n        border: 1.5px solid #333;\r\n    }"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHVwcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvR0FBK0M7QUFDekY7QUFDQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0Isb0JBQW9CLHNCQUFzQixpQ0FBaUMsS0FBSywrQkFBK0IsMEJBQTBCLCtDQUErQyxnQ0FBZ0MsU0FBUyxrQ0FBa0MsbUNBQW1DLDRDQUE0QyxTQUFTLFNBQVMsa0NBQWtDLDhCQUE4Qix5QkFBeUIseUJBQXlCLFNBQVMsc0JBQXNCLHdCQUF3QixTQUFTLG1CQUFtQiwrQkFBK0IsU0FBUyx3QkFBd0IsMkJBQTJCLDhCQUE4QixTQUFTLG9CQUFvQix3QkFBd0IsK0JBQStCLCtCQUErQixTQUFTLGFBQWEsa0NBQWtDLG1DQUFtQyx1Q0FBdUMsU0FBUyxzQkFBc0IseUJBQXlCLHlCQUF5QixTQUFTLHNCQUFzQix3QkFBd0IsU0FBUyxhQUFhLDRDQUE0Qyw4QkFBOEIsMEJBQTBCLHNCQUFzQixnQ0FBZ0MsZ0NBQWdDLDZDQUE2Qyw2Q0FBNkMsS0FBSywyQkFBMkIscUNBQXFDLFNBQVMsT0FBTyxxSEFBcUgsVUFBVSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxNQUFNLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFdBQVcsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLDJEQUEyRCxvQkFBb0Isc0JBQXNCLGlDQUFpQyxLQUFLLCtCQUErQiwwQkFBMEIsK0NBQStDLGdDQUFnQyxTQUFTLGtDQUFrQyxtQ0FBbUMsNENBQTRDLFNBQVMsU0FBUyxrQ0FBa0MsOEJBQThCLHlCQUF5Qix5QkFBeUIsU0FBUyxzQkFBc0Isd0JBQXdCLFNBQVMsbUJBQW1CLCtCQUErQixTQUFTLHdCQUF3QiwyQkFBMkIsOEJBQThCLFNBQVMsb0JBQW9CLHdCQUF3QiwrQkFBK0IsK0JBQStCLFNBQVMsYUFBYSxrQ0FBa0MsbUNBQW1DLHVDQUF1QyxTQUFTLHNCQUFzQix5QkFBeUIseUJBQXlCLFNBQVMsc0JBQXNCLHdCQUF3QixTQUFTLGFBQWEsNENBQTRDLHNCQUFzQix3QkFBd0IscUNBQXFDLEtBQUssMkJBQTJCLHFDQUFxQyxTQUFTLEdBQUc7QUFDLzJHO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MzZiYjdmOTdmYTFhNDM2MzNhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmVhdHVyZWRQdXBzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJSA7XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmZlYXR1cmVkUHVwQ2FyZHMge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIC5mZWF0dXJlZFB1cENhcmRzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNjc1cHgpIHtcXHJcXG4gICAgXFxyXFxuICAgIC5wdXBDYXJkIGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogIDEyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLnB1cENhcmQgZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uYW1lIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXZhaWxhYmxlIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJyZWVkIHtcXHJcXG4gICAgICAgIGdyaWQtcm93OiAzO1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyA1O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDQ3NXB4KSB7XFxyXFxuICAgIFxcclxcbiAgICAuZmVhdHVyZWRQdXBDYXJkcyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcbiAgICAucHVwQ2FyZCBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6ICAxN2VtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxN2VtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wdXBDYXJkIGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMTdlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBQVVAgUGFnZXMgKi9cXHJcXG5cXHJcXG4ucHVwLXJvdXRlcyB7XFxyXFxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiAgICAucHVwLXJvdXRlcyBhIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzMzMztcXHJcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL2FqYjAyL09uZURyaXZlL0RvY3VtZW50cy9Xb3JrL21kLWRvb2RsZXMvd2ViL3B1cHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7O0lBRWIsZ0JBQWdCO0FBQ3BCOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztRQUNsQyxtQkFBbUI7SUFDdkI7O0FBRUo7O0lBRUk7UUFDSSwrQkFBK0I7SUFDbkM7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtJQUNBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOzs7QUFHSjs7QUFFQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjs7O0FBR0o7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLHFCQUFhO0lBQWIsaUJBQWE7SUFBYixhQUFhO0lBQ2IsdUJBQWU7WUFBZixlQUFlO0lBQ2Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQzs7SUFFSTtRQUNJLHdCQUF3QjtJQUM1QlwiLFwiZmlsZVwiOlwicHVwcy5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZlYXR1cmVkUHVwcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCUgO1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5mZWF0dXJlZFB1cENhcmRzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgIFxcclxcbiAgICAuZmVhdHVyZWRQdXBDYXJkcyB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDY3NXB4KSB7XFxyXFxuICAgIFxcclxcbiAgICAucHVwQ2FyZCBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6ICAxMmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5wdXBDYXJkIGRpdiB7XFxyXFxuICAgICAgICB3aWR0aDogMTJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmFtZSB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmF2YWlsYWJsZSB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5icmVlZCB7XFxyXFxuICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA0NzVweCkge1xcclxcbiAgICBcXHJcXG4gICAgLmZlYXR1cmVkUHVwQ2FyZHMge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnB1cENhcmQgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAgMTdlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgfVxcclxcbiAgICAucHVwQ2FyZCBkaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDE3ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogUFVQIFBhZ2VzICovXFxyXFxuXFxyXFxuLnB1cC1yb3V0ZXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbiAgICAucHVwLXJvdXRlcyBhIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzMzMztcXHJcXG4gICAgfVwiXX1dKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiJdLCJzb3VyY2VSb290IjoiIn0=