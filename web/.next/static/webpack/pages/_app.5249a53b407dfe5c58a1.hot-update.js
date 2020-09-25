webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./global.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    -webkit-align-items: center;\r\n       -moz-box-align: center;\r\n            align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        width: 100%;\r\n        -webkit-justify-content: space-around;\r\n                justify-content: space-around;\r\n        -webkit-align-items: center;\r\n           -moz-box-align: center;\r\n                align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            -webkit-align-items: center;\r\n               -moz-box-align: center;\r\n                    align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        .breedL div:nth-child(1) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .breedL div:nth-child(2) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .breedL div:nth-child(3) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n\r\n\r\n    .litterL {\r\n        display: grid;\r\n        place-items: center;\r\n    }\r\n\r\n        .litterLink {\r\n            cursor: pointer;\r\n        }\r\n\r\n        .allPLink {\r\n            cursor: pointer;\r\n            \r\n        }", "",{"version":3,"sources":["C:/Users/ajb02/OneDrive/Documents/Work/md-doodles/web/global.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,2BAAsB;SAAtB,sBAAsB;AAC1B;AACA;IACI,kCAAkC;AACtC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,WAAW;AACf;IACI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,WAAW;QACX,qCAA6B;gBAA7B,6BAA6B;QAC7B,2BAAmB;WAAnB,sBAAmB;gBAAnB,mBAAmB;IACvB;;IAEA;QACI,qBAAqB;QACrB,eAAe;QACf,YAAY;QACZ,qBAAqB;IACzB;;IAEA;QACI,sBAAsB;;IAE1B;;AAEJ,oBAAoB;;AAEpB;IACI,YAAY;IACZ,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;AAC1B;;IAEI;QACI,gBAAgB;;QAEhB,YAAY;QACZ,SAAS;IACb;IACA;QACI,gBAAgB;;QAEhB,kBAAkB;QAClB,SAAS;QACT,YAAY;QACZ,iBAAiB;IACrB;;AAEJ,iBAAiB;;AAEjB;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;IACI;MACE,gBAAgB;MAChB,YAAY;IACd;;IAEA;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B,eAAe;QACf,eAAe;QACf,gBAAgB;QAChB,eAAe;QACf,YAAY;IAChB;;QAEI;YACI,eAAe;YACf,kBAAkB;YAClB,WAAW;YACX,WAAW;YACX,iBAAiB;YACjB,mBAAmB;QACvB;QACA;YACI,SAAS;YACT,mBAAmB;YACnB,WAAW;QACf;QACA;YACI,SAAS;YACT,WAAW;YACX,oBAAoB;QACxB;;;;AAIR,kBAAkB;;AAElB;IACI,YAAY;AAChB;;IAEI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;IACnB;;QAEI;YACI,aAAa;YACb,2BAA2B;YAC3B,2BAAmB;eAAnB,sBAAmB;oBAAnB,mBAAmB;YACnB,WAAW;YACX,YAAY;QAChB;;YAEI;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,YAAY;gBACZ,iBAAiB;YACrB;;YAEA;gBACI,aAAa;gBACb,sCAAsC;gBACtC,uBAAuB;gBACvB,WAAW;YACf;;YAEA;gBACI,SAAS;YACb;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;gBACd,iBAAiB;YACrB;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;YAClB;;;AAGZ,UAAU;;;AAGV;IACI,aAAa;IACb,8BAA8B;AAClC;;IAEI;QACI,aAAa;QACb,kCAAkC;QAClC,+BAA+B;IACnC;;QAEI;YACI,aAAa;YACb,8BAA8B;QAClC;;QAEA;YACI,WAAW;YACX,cAAc;QAClB;QACA;YACI,WAAW;YACX,cAAc;QAClB;QACA;YACI,WAAW;YACX,cAAc;QAClB;;;IAGJ;QACI,aAAa;QACb,mBAAmB;IACvB;;QAEI;YACI,eAAe;QACnB;;QAEA;YACI,eAAe;;QAEnB","file":"global.css","sourcesContent":["html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        .breedL div:nth-child(1) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .breedL div:nth-child(2) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .breedL div:nth-child(3) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n\r\n\r\n    .litterL {\r\n        display: grid;\r\n        place-items: center;\r\n    }\r\n\r\n        .litterLink {\r\n            cursor: pointer;\r\n        }\r\n\r\n        .allPLink {\r\n            cursor: pointer;\r\n            \r\n        }"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9HQUErQztBQUN6RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsa0JBQWtCLG1CQUFtQixvQ0FBb0Msb0NBQW9DLEtBQUssNkJBQTZCLDJDQUEyQyxLQUFLLG9DQUFvQyxxQkFBcUIsc0JBQXNCLGdDQUFnQyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxnQ0FBZ0Msd0JBQXdCLGdCQUFnQixvQkFBb0IsS0FBSyxpQkFBaUIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGtEQUFrRCxrREFBa0Qsd0NBQXdDLHNDQUFzQyx3Q0FBd0MsU0FBUywyQkFBMkIsa0NBQWtDLDRCQUE0Qix5QkFBeUIsa0NBQWtDLFNBQVMsNkJBQTZCLG1DQUFtQyxxQkFBcUIsK0NBQStDLHFCQUFxQix3RkFBd0Ysc0JBQXNCLCtCQUErQixLQUFLLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQixTQUFTLG9CQUFvQiw2QkFBNkIsbUNBQW1DLHNCQUFzQix5QkFBeUIsOEJBQThCLFNBQVMsZ0RBQWdELHFCQUFxQixLQUFLLHlCQUF5QiwyQkFBMkIsNkJBQTZCLEtBQUssMkJBQTJCLDJCQUEyQix1QkFBdUIsU0FBUywyQkFBMkIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsa0RBQWtELDJDQUEyQyxrREFBa0Qsb0NBQW9DLG9DQUFvQyx5QkFBeUIsU0FBUyx1QkFBdUIsMEJBQTBCLDJDQUEyQyx3Q0FBd0MsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLHlCQUF5QixTQUFTLCtCQUErQixrQ0FBa0Msb0NBQW9DLDRCQUE0Qiw0QkFBNEIsa0NBQWtDLG9DQUFvQyxhQUFhLHlCQUF5Qiw0QkFBNEIsb0NBQW9DLDRCQUE0QixjQUFjLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLHNDQUFzQyxhQUFhLDBEQUEwRCxxQkFBcUIsS0FBSywrQkFB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QWdDLDZCQUE2QixHQUFHO0FBQzdtWTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNTI0OWE1M2I0MDdkZmU1YzU4YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5wdXBzLCAubGl0dGVycywgLmFib3V0IHtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyOCwgODcsIDg3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWQkFSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4gICAgLnJvdXRlcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnJvdXRlcyBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41ZW0gMCAgMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucm91dGVzIGE6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuLyogTEFORElORyBTRUNUSU9OICovXFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMD90ZXh0PVB1cHB5K0lNRyttYXliZVNsaWRlclxcXCIpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogZW5kIHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmcgaDF7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zdWJIZWFkZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLyogVEVTVElNT05JQUxzICovXFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xcclxcbn1cXHJcXG4gICAgLnRlc3RpbW9uaWFsc1dyYXAge1xcclxcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0aW1vbmlhbHMge1xcclxcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgICAgIC1tb3otYm94LXBhY2s6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0Q2FyZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMWZyO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxN2VtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNWVtO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMmVtIDJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLnRlc3RDYXJkIGltZyB7ICBcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDM7IFxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogIDVlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDVlbTtcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43NWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRlc3RDYXJkIGgzeyAgXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7IFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRlc3RDYXJkIHAgeyAgXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyOyBcXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBGZWF0dXJlZCBQVVBTICovXFxyXFxuXFxyXFxuLmZlYXR1cmVkUHVwcyB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5mZWF0dXJlZFB1cENhcmRzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLnB1cENhcmQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjUlO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDNlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAgMTdlbTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN2VtO1xcclxcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTdlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgaDQsIC5wdXBDYXJkIGg1IHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmF2YWlsYWJsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJyZWVkIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnJlZWRUeXBlIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcblxcclxcbi8qIExJTktTICovXFxyXFxuXFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmJyZWVkTCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuYnJlZWRMIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmJyZWVkTCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmxpdHRlckwge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5saXR0ZXJMaW5rIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWxsUExpbmsge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9hamIwMi9PbmVEcml2ZS9Eb2N1bWVudHMvV29yay9tZC1kb29kbGVzL3dlYi9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDViwyQkFBc0I7U0FBdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDJCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7QUFDZjtJQUNJO1FBQ0kscUJBQWE7UUFBYixpQkFBYTtRQUFiLGFBQWE7UUFDYixXQUFXO1FBQ1gscUNBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IsMkJBQW1CO1dBQW5CLHNCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixZQUFZO1FBQ1oscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksc0JBQXNCOztJQUUxQjs7QUFFSixvQkFBb0I7O0FBRXBCO0lBQ0ksWUFBWTtJQUNaLDZFQUE2RTtJQUM3RSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztJQUVJO1FBQ0ksZ0JBQWdCOztRQUVoQixZQUFZO1FBQ1osU0FBUztJQUNiO0lBQ0E7UUFDSSxnQkFBZ0I7O1FBRWhCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsWUFBWTtRQUNaLGlCQUFpQjtJQUNyQjs7QUFFSixpQkFBaUI7O0FBRWpCO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7SUFDSTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO0lBQ2Q7O0lBRUE7UUFDSSxxQkFBYTtRQUFiLGlCQUFhO1FBQWIsYUFBYTtRQUNiLHFDQUE2QjtXQUE3QiwyQkFBNkI7Z0JBQTdCLDZCQUE2QjtRQUM3Qix1QkFBZTtnQkFBZixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztRQUVJO1lBQ0ksZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1gsV0FBVztZQUNYLGlCQUFpQjtZQUNqQixtQkFBbUI7UUFDdkI7UUFDQTtZQUNJLFNBQVM7WUFDVCxtQkFBbUI7WUFDbkIsV0FBVztRQUNmO1FBQ0E7WUFDSSxTQUFTO1lBQ1QsV0FBVztZQUNYLG9CQUFvQjtRQUN4Qjs7OztBQUlSLGtCQUFrQjs7QUFFbEI7SUFDSSxZQUFZO0FBQ2hCOztJQUVJO1FBQ0kscUJBQWE7UUFBYixpQkFBYTtRQUFiLGFBQWE7UUFDYixxQ0FBNkI7V0FBN0IsMkJBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IsdUJBQWU7Z0JBQWYsZUFBZTtJQUNuQjs7UUFFSTtZQUNJLGFBQWE7WUFDYiwyQkFBMkI7WUFDM0IsMkJBQW1CO2VBQW5CLHNCQUFtQjtvQkFBbkIsbUJBQW1CO1lBQ25CLFdBQVc7WUFDWCxZQUFZO1FBQ2hCOztZQUVJO2dCQUNJLGlCQUFpQjtnQkFDakIsWUFBWTtnQkFDWixZQUFZO2dCQUNaLGlCQUFpQjtZQUNyQjs7WUFFQTtnQkFDSSxhQUFhO2dCQUNiLHNDQUFzQztnQkFDdEMsdUJBQXVCO2dCQUN2QixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksU0FBUztZQUNiOztZQUVBO2dCQUNJLGtCQUFrQjtZQUN0Qjs7WUFFQTtnQkFDSSxjQUFjO2dCQUNkLGlCQUFpQjtZQUNyQjs7WUFFQTtnQkFDSSxrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztZQUNsQjs7O0FBR1osVUFBVTs7O0FBR1Y7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGtDQUFrQztRQUNsQywrQkFBK0I7SUFDbkM7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1FBQ2xDOztRQUVBO1lBQ0ksV0FBVztZQUNYLGNBQWM7UUFDbEI7UUFDQTtZQUNJLFdBQVc7WUFDWCxjQUFjO1FBQ2xCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsY0FBYztRQUNsQjs7O0lBR0o7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOztRQUVJO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTtZQUNJLGVBQWU7O1FBRW5CXCIsXCJmaWxlXCI6XCJnbG9iYWwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5wdXBzLCAubGl0dGVycywgLmFib3V0IHtcXHJcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyOCwgODcsIDg3KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWQkFSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbiAgICAucm91dGVzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLnJvdXRlcyBhIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMS41ZW0gMCAgMDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucm91dGVzIGE6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuLyogTEFORElORyBTRUNUSU9OICovXFxyXFxuXFxyXFxuLmxhbmRpbmcge1xcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzUwMD90ZXh0PVB1cHB5K0lNRyttYXliZVNsaWRlclxcXCIpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBwbGFjZS1pdGVtczogZW5kIHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmxhbmRpbmcgaDF7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgcGFkZGluZzogMWVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5zdWJIZWFkZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJlbTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuLyogVEVTVElNT05JQUxzICovXFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGVzdGltb25pYWwgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNGVtO1xcclxcbn1cXHJcXG4gICAgLnRlc3RpbW9uaWFsc1dyYXAge1xcclxcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0aW1vbmlhbHMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50ZXN0Q2FyZCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMWZyO1xcclxcbiAgICAgICAgbWluLXdpZHRoOiAxN2VtO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyNWVtO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMmVtIDJlbTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLnRlc3RDYXJkIGltZyB7ICBcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMSAvIDM7IFxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogIDVlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDVlbTtcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43NWVtO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRlc3RDYXJkIGgzeyAgXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7IFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRlc3RDYXJkIHAgeyAgXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyOyBcXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBGZWF0dXJlZCBQVVBTICovXFxyXFxuXFxyXFxuLmZlYXR1cmVkUHVwcyB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5mZWF0dXJlZFB1cENhcmRzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAgICAgLnB1cENhcmQge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMjUlO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAzZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogIDE3ZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGRpdiB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3ZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGg0LCAucHVwQ2FyZCBoNSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5hdmFpbGFibGUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5icmVlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJyZWVkVHlwZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMSU5LUyAqL1xcclxcblxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5icmVlZEwge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYnJlZWRMIGRpdiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYnJlZWRMIGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmJyZWVkTCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5saXR0ZXJMIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGl0dGVyTGluayB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmFsbFBMaW5rIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==