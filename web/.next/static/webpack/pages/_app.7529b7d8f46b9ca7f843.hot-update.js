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
exports.push([module.i, "html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    -webkit-align-items: center;\r\n       -moz-box-align: center;\r\n            align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        width: 100%;\r\n        -webkit-justify-content: space-around;\r\n                justify-content: space-around;\r\n        -webkit-align-items: center;\r\n           -moz-box-align: center;\r\n                align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            -webkit-align-items: center;\r\n               -moz-box-align: center;\r\n                    align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        .breedL div:nth-child(1) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .breedL div:nth-child(2) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .breedL div:nth-child(3) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n\r\n\r\n    .litterL {\r\n        display: grid;\r\n        place-items: start center;\r\n    }\r\n\r\n        .litterLink {\r\n            cursor: pointer;\r\n            -webkit-align-self: center !important;\r\n                    align-self: center !important;\r\n        }\r\n\r\n        .allPLink {\r\n            -webkit-align-items: flex-start;\r\n               -moz-box-align: start;\r\n                    align-items: flex-start;\r\n            cursor: pointer;\r\n            \r\n        }\r\n\r\n\r\n@media(max-width: 900px) {\r\n    .links {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n    }\r\n}\r\n\r\n/* ABOUT */\r\n\r\n.about {\r\n\r\n}\r\n\r\n    .aboutWrap {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n    }", "",{"version":3,"sources":["C:/Users/ajb02/OneDrive/Documents/Work/md-doodles/web/global.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,2BAAsB;SAAtB,sBAAsB;AAC1B;AACA;IACI,kCAAkC;AACtC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,WAAW;AACf;IACI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,WAAW;QACX,qCAA6B;gBAA7B,6BAA6B;QAC7B,2BAAmB;WAAnB,sBAAmB;gBAAnB,mBAAmB;IACvB;;IAEA;QACI,qBAAqB;QACrB,eAAe;QACf,YAAY;QACZ,qBAAqB;IACzB;;IAEA;QACI,sBAAsB;;IAE1B;;AAEJ,oBAAoB;;AAEpB;IACI,YAAY;IACZ,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;AAC1B;;IAEI;QACI,gBAAgB;;QAEhB,YAAY;QACZ,SAAS;IACb;IACA;QACI,gBAAgB;;QAEhB,kBAAkB;QAClB,SAAS;QACT,YAAY;QACZ,iBAAiB;IACrB;;AAEJ,iBAAiB;;AAEjB;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;IACI;MACE,gBAAgB;MAChB,YAAY;IACd;;IAEA;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B,eAAe;QACf,eAAe;QACf,gBAAgB;QAChB,eAAe;QACf,YAAY;IAChB;;QAEI;YACI,eAAe;YACf,kBAAkB;YAClB,WAAW;YACX,WAAW;YACX,iBAAiB;YACjB,mBAAmB;QACvB;QACA;YACI,SAAS;YACT,mBAAmB;YACnB,WAAW;QACf;QACA;YACI,SAAS;YACT,WAAW;YACX,oBAAoB;QACxB;;;;AAIR,kBAAkB;;AAElB;IACI,YAAY;AAChB;;IAEI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;IACnB;;QAEI;YACI,aAAa;YACb,2BAA2B;YAC3B,2BAAmB;eAAnB,sBAAmB;oBAAnB,mBAAmB;YACnB,WAAW;YACX,YAAY;QAChB;;YAEI;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,YAAY;gBACZ,iBAAiB;YACrB;;YAEA;gBACI,aAAa;gBACb,sCAAsC;gBACtC,uBAAuB;gBACvB,WAAW;YACf;;YAEA;gBACI,SAAS;YACb;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;gBACd,iBAAiB;YACrB;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;YAClB;;;AAGZ,UAAU;;;AAGV;IACI,aAAa;IACb,8BAA8B;AAClC;;IAEI;QACI,aAAa;QACb,kCAAkC;QAClC,+BAA+B;IACnC;;QAEI;YACI,aAAa;YACb,8BAA8B;QAClC;;QAEA;YACI,WAAW;YACX,cAAc;QAClB;QACA;YACI,WAAW;YACX,cAAc;QAClB;QACA;YACI,WAAW;YACX,cAAc;QAClB;;;IAGJ;QACI,aAAa;QACb,yBAAyB;IAC7B;;QAEI;YACI,eAAe;YACf,qCAA6B;oBAA7B,6BAA6B;QACjC;;QAEA;YACI,+BAAuB;eAAvB,qBAAuB;oBAAvB,uBAAuB;YACvB,eAAe;;QAEnB;;;AAGR;IACI;QACI,0BAA0B;QAC1B,2BAA2B;IAC/B;AACJ;;AAEA,UAAU;;AAEV;;AAEA;;IAEI;QACI,aAAa;QACb,0BAA0B;QAC1B,2BAA2B;IAC/B","file":"global.css","sourcesContent":["html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        .breedL div:nth-child(1) {\r\n            grid-row: 1;\r\n            grid-column: 1;\r\n        }\r\n        .breedL div:nth-child(2) {\r\n            grid-row: 2;\r\n            grid-column: 2;\r\n        }\r\n        .breedL div:nth-child(3) {\r\n            grid-row: 3;\r\n            grid-column: 3;\r\n        }\r\n\r\n\r\n    .litterL {\r\n        display: grid;\r\n        place-items: start center;\r\n    }\r\n\r\n        .litterLink {\r\n            cursor: pointer;\r\n            align-self: center !important;\r\n        }\r\n\r\n        .allPLink {\r\n            align-items: flex-start;\r\n            cursor: pointer;\r\n            \r\n        }\r\n\r\n\r\n@media(max-width: 900px) {\r\n    .links {\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n    }\r\n}\r\n\r\n/* ABOUT */\r\n\r\n.about {\r\n\r\n}\r\n\r\n    .aboutWrap {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: 1fr 1fr;\r\n    }"]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9HQUErQztBQUN6RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsa0JBQWtCLG1CQUFtQixvQ0FBb0Msb0NBQW9DLEtBQUssNkJBQTZCLDJDQUEyQyxLQUFLLG9DQUFvQyxxQkFBcUIsc0JBQXNCLGdDQUFnQyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxnQ0FBZ0Msd0JBQXdCLGdCQUFnQixvQkFBb0IsS0FBSyxpQkFBaUIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGtEQUFrRCxrREFBa0Qsd0NBQXdDLHNDQUFzQyx3Q0FBd0MsU0FBUywyQkFBMkIsa0NBQWtDLDRCQUE0Qix5QkFBeUIsa0NBQWtDLFNBQVMsNkJBQTZCLG1DQUFtQyxxQkFBcUIsK0NBQStDLHFCQUFxQix3RkFBd0Ysc0JBQXNCLCtCQUErQixLQUFLLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQixTQUFTLG9CQUFvQiw2QkFBNkIsbUNBQW1DLHNCQUFzQix5QkFBeUIsOEJBQThCLFNBQVMsZ0RBQWdELHFCQUFxQixLQUFLLHlCQUF5QiwyQkFBMkIsNkJBQTZCLEtBQUssMkJBQTJCLDJCQUEyQix1QkFBdUIsU0FBUywyQkFBMkIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsa0RBQWtELDJDQUEyQyxrREFBa0Qsb0NBQW9DLG9DQUFvQyx5QkFBeUIsU0FBUyx1QkFBdUIsMEJBQTBCLDJDQUEyQyx3Q0FBd0MsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLHlCQUF5QixTQUFTLCtCQUErQixrQ0FBa0Msb0NBQW9DLDRCQUE0Qiw0QkFBNEIsa0NBQWtDLG9DQUFvQyxhQUFhLHlCQUF5Qiw0QkFBNEIsb0NBQW9DLDRCQUE0QixjQUFjLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLHNDQUFzQyxhQUFhLDBEQUEwRCxxQkFBcUIsS0FBSywrQkFB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QyxzQkFBc0IsdUNBQXVDLEtBQUsscUJBQXFCLDBCQUEwQiwrQ0FBK0MsNENBQTRDLFNBQVMsNkJBQTZCLDhCQUE4QiwrQ0FBK0MsYUFBYSwwQ0FBMEMsNEJBQTRCLCtCQUErQixhQUFhLHNDQUFzQyw0QkFBNEIsK0JBQStCLGFBQWEsc0NBQXNDLDRCQUE0QiwrQkFBK0IsYUFBYSwwQkFBMEIsMEJBQTBCLHNDQUFzQyxTQUFTLDZCQUE2QixnQ0FBZ0MsOENBQThDLGFBQWEsMkJBQTJCLHdDQUF3QyxnQ0FBZ0MsNkJBQTZCLHNDQUFzQyxnQkFBZ0IsdUNBQXVDLHdDQUF3QyxTQUFTLEtBQUssbUNBQW1DLFNBQVMsd0JBQXdCLDBCQUEwQix1Q0FBdUMsd0NBQXdDLFNBQVMsR0FBRztBQUM5d2E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc1MjliN2Q4ZjQ2YjljYTdmODQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ucHVwcywgLmxpdHRlcnMsIC5hYm91dCB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMjgsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuICAgIC5yb3V0ZXMge1xcclxcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5yb3V0ZXMgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDEuNWVtIDAgIDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJvdXRlcyBhOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIExBTkRJTkcgU0VDVElPTiAqL1xcclxcblxcclxcbi5sYW5kaW5nIHtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDA/dGV4dD1QdXBweStJTUcrbWF5YmVTbGlkZXJcXFwiKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGVuZCBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nIGgxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3ViSGVhZGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIFRFU1RJTU9OSUFMcyAqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbCB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuICAgIC50ZXN0aW1vbmlhbHNXcmFwIHtcXHJcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdENhcmQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDFmcjtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTdlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjVlbTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBtYXJnaW46IDJlbSAyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBpbWcgeyAgXFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzOyBcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ICA1ZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBoM3sgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxOyBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBwIHsgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjsgXFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogRmVhdHVyZWQgUFVQUyAqL1xcclxcblxcclxcbi5mZWF0dXJlZFB1cHMge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiAgICAuZmVhdHVyZWRQdXBDYXJkcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgICAgLW1vei1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wdXBDYXJkIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1JTtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAzZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogIDE3ZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGRpdiB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3ZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGg0LCAucHVwQ2FyZCBoNSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5hdmFpbGFibGUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5icmVlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJyZWVkVHlwZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMSU5LUyAqL1xcclxcblxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5icmVlZEwge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYnJlZWRMIGRpdiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYnJlZWRMIGRpdjpudGgtY2hpbGQoMSkge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmJyZWVkTCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2Om50aC1jaGlsZCgzKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5saXR0ZXJMIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBwbGFjZS1pdGVtczogc3RhcnQgY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGl0dGVyTGluayB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5hbGxQTGluayB7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICAgICAtbW96LWJveC1hbGlnbjogc3RhcnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgLmxpbmtzIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIEFCT1VUICovXFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuICAgIC5hYm91dFdyYXAge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzovVXNlcnMvYWpiMDIvT25lRHJpdmUvRG9jdW1lbnRzL1dvcmsvbWQtZG9vZGxlcy93ZWIvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsMkJBQXNCO1NBQXRCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwyQkFBbUI7T0FBbkIsc0JBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0FBQ2Y7SUFDSTtRQUNJLHFCQUFhO1FBQWIsaUJBQWE7UUFBYixhQUFhO1FBQ2IsV0FBVztRQUNYLHFDQUE2QjtnQkFBN0IsNkJBQTZCO1FBQzdCLDJCQUFtQjtXQUFuQixzQkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsWUFBWTtRQUNaLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHNCQUFzQjs7SUFFMUI7O0FBRUosb0JBQW9COztBQUVwQjtJQUNJLFlBQVk7SUFDWiw2RUFBNkU7SUFDN0UsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7SUFFSTtRQUNJLGdCQUFnQjs7UUFFaEIsWUFBWTtRQUNaLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZ0JBQWdCOztRQUVoQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0FBRUosaUJBQWlCOztBQUVqQjtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkOztJQUVBO1FBQ0kscUJBQWE7UUFBYixpQkFBYTtRQUFiLGFBQWE7UUFDYixxQ0FBNkI7V0FBN0IsMkJBQTZCO2dCQUE3Qiw2QkFBNkI7UUFDN0IsdUJBQWU7Z0JBQWYsZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7UUFFSTtZQUNJLGVBQWU7WUFDZixrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxpQkFBaUI7WUFDakIsbUJBQW1CO1FBQ3ZCO1FBQ0E7WUFDSSxTQUFTO1lBQ1QsbUJBQW1CO1lBQ25CLFdBQVc7UUFDZjtRQUNBO1lBQ0ksU0FBUztZQUNULFdBQVc7WUFDWCxvQkFBb0I7UUFDeEI7Ozs7QUFJUixrQkFBa0I7O0FBRWxCO0lBQ0ksWUFBWTtBQUNoQjs7SUFFSTtRQUNJLHFCQUFhO1FBQWIsaUJBQWE7UUFBYixhQUFhO1FBQ2IscUNBQTZCO1dBQTdCLDJCQUE2QjtnQkFBN0IsNkJBQTZCO1FBQzdCLHVCQUFlO2dCQUFmLGVBQWU7SUFDbkI7O1FBRUk7WUFDSSxhQUFhO1lBQ2IsMkJBQTJCO1lBQzNCLDJCQUFtQjtlQUFuQixzQkFBbUI7b0JBQW5CLG1CQUFtQjtZQUNuQixXQUFXO1lBQ1gsWUFBWTtRQUNoQjs7WUFFSTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixpQkFBaUI7WUFDckI7O1lBRUE7Z0JBQ0ksYUFBYTtnQkFDYixzQ0FBc0M7Z0JBQ3RDLHVCQUF1QjtnQkFDdkIsV0FBVztZQUNmOztZQUVBO2dCQUNJLFNBQVM7WUFDYjs7WUFFQTtnQkFDSSxrQkFBa0I7WUFDdEI7O1lBRUE7Z0JBQ0ksY0FBYztnQkFDZCxpQkFBaUI7WUFDckI7O1lBRUE7Z0JBQ0ksa0JBQWtCO1lBQ3RCOztZQUVBO2dCQUNJLGNBQWM7WUFDbEI7OztBQUdaLFVBQVU7OztBQUdWO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7SUFFSTtRQUNJLGFBQWE7UUFDYixrQ0FBa0M7UUFDbEMsK0JBQStCO0lBQ25DOztRQUVJO1lBQ0ksYUFBYTtZQUNiLDhCQUE4QjtRQUNsQzs7UUFFQTtZQUNJLFdBQVc7WUFDWCxjQUFjO1FBQ2xCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsY0FBYztRQUNsQjtRQUNBO1lBQ0ksV0FBVztZQUNYLGNBQWM7UUFDbEI7OztJQUdKO1FBQ0ksYUFBYTtRQUNiLHlCQUF5QjtJQUM3Qjs7UUFFSTtZQUNJLGVBQWU7WUFDZixxQ0FBNkI7b0JBQTdCLDZCQUE2QjtRQUNqQzs7UUFFQTtZQUNJLCtCQUF1QjtlQUF2QixxQkFBdUI7b0JBQXZCLHVCQUF1QjtZQUN2QixlQUFlOztRQUVuQjs7O0FBR1I7SUFDSTtRQUNJLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQSxVQUFVOztBQUVWOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLDBCQUEwQjtRQUMxQiwyQkFBMkI7SUFDL0JcIixcImZpbGVcIjpcImdsb2JhbC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLnB1cHMsIC5saXR0ZXJzLCAuYWJvdXQge1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjI4LCA4NywgODcpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVZCQVIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuICAgIC5yb3V0ZXMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAucm91dGVzIGEge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxLjVlbSAwICAwO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5yb3V0ZXMgYTpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICAgICAgXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4vKiBMQU5ESU5HIFNFQ1RJT04gKi9cXHJcXG5cXHJcXG4ubGFuZGluZyB7XFxyXFxuICAgIGhlaWdodDogODV2aDtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTAwP3RleHQ9UHVwcHkrSU1HK21heWJlU2xpZGVyXFxcIik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHBsYWNlLWl0ZW1zOiBlbmQgc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbiAgICAubGFuZGluZyBoMXtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLnN1YkhlYWRlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcblxcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMmVtO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4vKiBURVNUSU1PTklBTHMgKi9cXHJcXG5cXHJcXG4udGVzdGltb25pYWwge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50ZXN0aW1vbmlhbCBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS40ZW07XFxyXFxufVxcclxcbiAgICAudGVzdGltb25pYWxzV3JhcCB7XFxyXFxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlc3RpbW9uaWFscyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRlc3RDYXJkIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAxZnI7XFxyXFxuICAgICAgICBtaW4td2lkdGg6IDE3ZW07XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDI1ZW07XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgbWFyZ2luOiAyZW0gMmVtO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAudGVzdENhcmQgaW1nIHsgIFxcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxIC8gMzsgXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAgNWVtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNWVtO1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjc1ZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudGVzdENhcmQgaDN7ICBcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMTsgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudGVzdENhcmQgcCB7ICBcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7IFxcclxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcbi8qIEZlYXR1cmVkIFBVUFMgKi9cXHJcXG5cXHJcXG4uZmVhdHVyZWRQdXBzIHtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmZlYXR1cmVkUHVwQ2FyZHMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHVwQ2FyZCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyNSU7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDNlbTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgaW1nIHtcXHJcXG4gICAgICAgICAgICAgICAgLyogZmxvYXQ6IGxlZnQ7ICovXFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAgMTdlbTtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN2VtO1xcclxcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgZGl2IHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlO1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTdlbTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnB1cENhcmQgaDQsIC5wdXBDYXJkIGg1IHtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAubmFtZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmF2YWlsYWJsZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJyZWVkIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnJlZWRUeXBlIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcblxcclxcbi8qIExJTktTICovXFxyXFxuXFxyXFxuXFxyXFxuLmxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4gICAgLmJyZWVkTCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxyXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuYnJlZWRMIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLmJyZWVkTCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMztcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmxpdHRlckwge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIHBsYWNlLWl0ZW1zOiBzdGFydCBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5saXR0ZXJMaW5rIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYWxsUExpbmsge1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAubGlua3Mge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQUJPVVQgKi9cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4gICAgLmFib3V0V3JhcCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIH1cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9