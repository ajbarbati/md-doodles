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
exports.push([module.i, "html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    -webkit-align-items: center;\r\n       -moz-box-align: center;\r\n            align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        width: 100%;\r\n        -webkit-justify-content: space-around;\r\n                justify-content: space-around;\r\n        -webkit-align-items: center;\r\n           -moz-box-align: center;\r\n                align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: -webkit-flex;\r\n        display: -moz-box;\r\n        display: flex;\r\n        -webkit-justify-content: space-evenly;\r\n           -moz-box-pack: space-evenly;\r\n                justify-content: space-evenly;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            -webkit-align-items: center;\r\n               -moz-box-align: center;\r\n                    align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        \r\n\r\n\r\n   ", "",{"version":3,"sources":["C:/Users/ajb02/OneDrive/Documents/Work/md-doodles/web/global.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,2BAAsB;SAAtB,sBAAsB;AAC1B;AACA;IACI,kCAAkC;AACtC;;AAEA,WAAW;;AAEX;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,2BAAmB;OAAnB,sBAAmB;YAAnB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,MAAM;IACN,WAAW;AACf;IACI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,WAAW;QACX,qCAA6B;gBAA7B,6BAA6B;QAC7B,2BAAmB;WAAnB,sBAAmB;gBAAnB,mBAAmB;IACvB;;IAEA;QACI,qBAAqB;QACrB,eAAe;QACf,YAAY;QACZ,qBAAqB;IACzB;;IAEA;QACI,sBAAsB;;IAE1B;;AAEJ,oBAAoB;;AAEpB;IACI,YAAY;IACZ,6EAA6E;IAC7E,aAAa;IACb,sBAAsB;AAC1B;;IAEI;QACI,gBAAgB;;QAEhB,YAAY;QACZ,SAAS;IACb;IACA;QACI,gBAAgB;;QAEhB,kBAAkB;QAClB,SAAS;QACT,YAAY;QACZ,iBAAiB;IACrB;;AAEJ,iBAAiB;;AAEjB;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;IACI;MACE,gBAAgB;MAChB,YAAY;IACd;;IAEA;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,2BAA2B;QAC3B,eAAe;QACf,eAAe;QACf,gBAAgB;QAChB,eAAe;QACf,YAAY;IAChB;;QAEI;YACI,eAAe;YACf,kBAAkB;YAClB,WAAW;YACX,WAAW;YACX,iBAAiB;YACjB,mBAAmB;QACvB;QACA;YACI,SAAS;YACT,mBAAmB;YACnB,WAAW;QACf;QACA;YACI,SAAS;YACT,WAAW;YACX,oBAAoB;QACxB;;;;AAIR,kBAAkB;;AAElB;IACI,YAAY;AAChB;;IAEI;QACI,qBAAa;QAAb,iBAAa;QAAb,aAAa;QACb,qCAA6B;WAA7B,2BAA6B;gBAA7B,6BAA6B;QAC7B,uBAAe;gBAAf,eAAe;IACnB;;QAEI;YACI,aAAa;YACb,2BAA2B;YAC3B,2BAAmB;eAAnB,sBAAmB;oBAAnB,mBAAmB;YACnB,WAAW;YACX,YAAY;QAChB;;YAEI;gBACI,iBAAiB;gBACjB,YAAY;gBACZ,YAAY;gBACZ,iBAAiB;YACrB;;YAEA;gBACI,aAAa;gBACb,sCAAsC;gBACtC,uBAAuB;gBACvB,WAAW;YACf;;YAEA;gBACI,SAAS;YACb;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;gBACd,iBAAiB;YACrB;;YAEA;gBACI,kBAAkB;YACtB;;YAEA;gBACI,cAAc;YAClB;;;AAGZ,UAAU;;;AAGV;IACI,aAAa;IACb,8BAA8B;AAClC;;IAEI;QACI,kCAAkC;QAClC,+BAA+B;IACnC;;QAEI;YACI,aAAa;YACb,8BAA8B;QAClC","file":"global.css","sourcesContent":["html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n.pups, .litters, .about {\r\n    border: 5px solid rgb(228, 87, 87);\r\n}\r\n\r\n/* NAVBAR */\r\n\r\nheader {\r\n    padding: 1em;\r\n    display: grid;\r\n    justify-items: flex-end;\r\n    align-items: center;\r\n    background-color: black;\r\n    position: fixed; \r\n    top: 0;\r\n    width: 100%;\r\n}\r\n    .routes {\r\n        display: flex;\r\n        width: 100%;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n    }\r\n    \r\n    .routes a {\r\n        padding: 0 1.5em 0  0;\r\n        cursor: pointer;\r\n        color: white;\r\n        text-decoration: none;\r\n    }\r\n\r\n    .routes a:hover {\r\n        background-color: #333;\r\n        \r\n    }\r\n\r\n/* LANDING SECTION */\r\n\r\n.landing {\r\n    height: 85vh;\r\n    background: url(\"https://via.placeholder.com/500?text=Puppy+IMG+maybeSlider\");\r\n    display: grid;\r\n    place-items: end start;\r\n}\r\n\r\n    .landing h1{\r\n        background: #fff;\r\n\r\n        padding: 1em;\r\n        margin: 0;\r\n    }\r\n    .subHeader {\r\n        background: #fff;\r\n\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 2em;\r\n        font-size: 1.15em;\r\n    }\r\n\r\n/* TESTIMONIALs */\r\n\r\n.testimonial {\r\n    height: auto;\r\n}\r\n\r\n.testimonial h2 {\r\n    text-align: center;\r\n    margin-bottom: 1.4em;\r\n}\r\n    .testimonialsWrap {\r\n      overflow: scroll;\r\n      height: 100%;\r\n    }\r\n\r\n    .testimonials {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n        height: 100%;\r\n    }\r\n\r\n    .testCard {\r\n        display: grid;\r\n        grid-template-columns: 30% 1fr;\r\n        grid-template-rows: 20% 1fr;\r\n        min-width: 17em;\r\n        max-width: 25em;\r\n        overflow: hidden;\r\n        margin: 2em 2em;\r\n        height: 100%;\r\n    }\r\n\r\n        .testCard img {  \r\n            grid-row: 1 / 3; \r\n            border-radius: 50%;\r\n            width:  5em;\r\n            height: 5em;\r\n            object-fit: cover;\r\n            margin-right: .75em;\r\n        }\r\n        .testCard h3{  \r\n            margin: 0;\r\n            padding-bottom: 1em;\r\n            grid-row: 1; \r\n        }\r\n        .testCard p {  \r\n            margin: 0;\r\n            grid-row: 2; \r\n            align-self: baseline;\r\n        }\r\n\r\n\r\n\r\n/* Featured PUPS */\r\n\r\n.featuredPups {\r\n    height: auto;\r\n}\r\n\r\n    .featuredPupCards {\r\n        display: flex;\r\n        justify-content: space-evenly;\r\n        flex-wrap: wrap;\r\n    }\r\n\r\n        .pupCard {\r\n            display: grid;\r\n            grid-template-rows: 1fr 25%;\r\n            align-items: center;\r\n            margin: 3em;\r\n            height: 100%;\r\n        }\r\n\r\n            .pupCard img {\r\n                /* float: left; */\r\n                width:  17em;\r\n                height: 17em;\r\n                object-fit: cover;\r\n            }\r\n\r\n            .pupCard div {\r\n                display: grid;\r\n                grid-template-columns: 1fr 1fr 1fr 1fr;\r\n                grid-template-rows: 50%;\r\n                width: 17em;\r\n            }\r\n\r\n            .pupCard h4, .pupCard h5 {\r\n                margin: 0;\r\n            }\r\n\r\n            .name {\r\n                grid-column: 1 / 3;\r\n            }\r\n\r\n            .available {\r\n                grid-column: 4;\r\n                text-align: right;\r\n            }\r\n\r\n            .breed {\r\n                grid-column: 2 / 4;\r\n            }\r\n\r\n            .breedType {\r\n                grid-column: 4;\r\n            }\r\n\r\n\r\n/* LINKS */\r\n\r\n\r\n.links {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n    .breedL {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n        grid-template-rows: 1fr 1fr 1fr;\r\n    }\r\n\r\n        .breedL div {\r\n            display: grid;\r\n            grid-template-columns: 10% 1fr;\r\n        }\r\n\r\n        \r\n\r\n\r\n   "]}]);
// Exports
module.exports = exports;


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ2xvYmFsLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9HQUErQztBQUN6RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLGVBQWUsa0JBQWtCLG1CQUFtQixvQ0FBb0Msb0NBQW9DLEtBQUssNkJBQTZCLDJDQUEyQyxLQUFLLG9DQUFvQyxxQkFBcUIsc0JBQXNCLGdDQUFnQyxvQ0FBb0Msa0NBQWtDLG9DQUFvQyxnQ0FBZ0Msd0JBQXdCLGdCQUFnQixvQkFBb0IsS0FBSyxpQkFBaUIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsd0JBQXdCLGtEQUFrRCxrREFBa0Qsd0NBQXdDLHNDQUFzQyx3Q0FBd0MsU0FBUywyQkFBMkIsa0NBQWtDLDRCQUE0Qix5QkFBeUIsa0NBQWtDLFNBQVMsNkJBQTZCLG1DQUFtQyxxQkFBcUIsK0NBQStDLHFCQUFxQix3RkFBd0Ysc0JBQXNCLCtCQUErQixLQUFLLHdCQUF3Qiw2QkFBNkIsNkJBQTZCLHNCQUFzQixTQUFTLG9CQUFvQiw2QkFBNkIsbUNBQW1DLHNCQUFzQix5QkFBeUIsOEJBQThCLFNBQVMsZ0RBQWdELHFCQUFxQixLQUFLLHlCQUF5QiwyQkFBMkIsNkJBQTZCLEtBQUssMkJBQTJCLDJCQUEyQix1QkFBdUIsU0FBUywyQkFBMkIsa0NBQWtDLDhCQUE4QiwwQkFBMEIsa0RBQWtELDJDQUEyQyxrREFBa0Qsb0NBQW9DLG9DQUFvQyx5QkFBeUIsU0FBUyx1QkFBdUIsMEJBQTBCLDJDQUEyQyx3Q0FBd0MsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLHlCQUF5QixTQUFTLCtCQUErQixrQ0FBa0Msb0NBQW9DLDRCQUE0Qiw0QkFBNEIsa0NBQWtDLG9DQUFvQyxhQUFhLHlCQUF5Qiw0QkFBNEIsb0NBQW9DLDRCQUE0QixjQUFjLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLHNDQUFzQyxhQUFhLDBEQUEwRCxxQkFBcUIsS0FBSywrQkFB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QVMsK0JBQStCLGtDQUFrQyxvQ0FBb0MsNEJBQTRCLDRCQUE0QixrQ0FBa0Msb0NBQW9DLGFBQWEseUJBQXlCLDRCQUE0QixvQ0FBb0MsNEJBQTRCLGNBQWMseUJBQXlCLDRCQUE0Qiw0QkFBNEIsc0NBQXNDLGFBQWEsMERBQTBELHFCQUFxQixLQUFLLCtCQUErQiwwQkFBMEIsMENBQTBDLDRCQUE0QixTQUFTLDBCQUEwQiw4QkFBOEIsNENBQTRDLG9DQUFvQyw0QkFBNEIsNkJBQTZCLGFBQWEsa0NBQWtDLG1DQUFtQyxvQ0FBb0MsaUNBQWlDLHNDQUFzQyxpQkFBaUIsa0NBQWtDLGtDQUFrQywyREFBMkQsNENBQTRDLGdDQUFnQyxpQkFBaUIsOENBQThDLDhCQUE4QixpQkFBaUIsMkJBQTJCLHVDQUF1QyxpQkFBaUIsZ0NBQWdDLG1DQUFtQyxzQ0FBc0MsaUJBQWlCLDRCQUE0Qix1Q0FBdUMsaUJBQWlCLGdDQUFnQyxtQ0FBbUMsaUJBQWlCLDJDQUEyQyxzQkFBc0IsdUNBQXVDLEtBQUsscUJBQXFCLCtDQUErQyw0Q0FBNEMsU0FBUyw2QkFBNkIsOEJBQThCLCtDQUErQyxhQUFhLGtDQUFrQztBQUNyeVY7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNiZGQ0NDRiNTlkZDBmMGFlYTQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ucHVwcywgLmxpdHRlcnMsIC5hYm91dCB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMjgsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuICAgIC5yb3V0ZXMge1xcclxcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcclxcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5yb3V0ZXMgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDEuNWVtIDAgIDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJvdXRlcyBhOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIExBTkRJTkcgU0VDVElPTiAqL1xcclxcblxcclxcbi5sYW5kaW5nIHtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDA/dGV4dD1QdXBweStJTUcrbWF5YmVTbGlkZXJcXFwiKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGVuZCBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nIGgxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3ViSGVhZGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIFRFU1RJTU9OSUFMcyAqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbCB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuICAgIC50ZXN0aW1vbmlhbHNXcmFwIHtcXHJcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAtbW96LWJveC1wYWNrOiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdENhcmQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDFmcjtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTdlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjVlbTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBtYXJnaW46IDJlbSAyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBpbWcgeyAgXFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzOyBcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ICA1ZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBoM3sgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxOyBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBwIHsgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjsgXFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogRmVhdHVyZWQgUFVQUyAqL1xcclxcblxcclxcbi5mZWF0dXJlZFB1cHMge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiAgICAuZmVhdHVyZWRQdXBDYXJkcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxyXFxuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgICAgLW1vei1ib3gtcGFjazogc3BhY2UtZXZlbmx5O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wdXBDYXJkIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1JTtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAzZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGltZyB7XFxyXFxuICAgICAgICAgICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogIDE3ZW07XFxyXFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTdlbTtcXHJcXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGRpdiB7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJTtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE3ZW07XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5wdXBDYXJkIGg0LCAucHVwQ2FyZCBoNSB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLm5hbWUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5hdmFpbGFibGUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5icmVlZCB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmJyZWVkVHlwZSB7XFxyXFxuICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMSU5LUyAqL1xcclxcblxcclxcblxcclxcbi5saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5icmVlZEwge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5icmVlZEwgZGl2IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAlIDFmcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIFxcclxcblxcclxcblxcclxcbiAgIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkM6L1VzZXJzL2FqYjAyL09uZURyaXZlL0RvY3VtZW50cy9X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bnRlbnRcIjpbXCJodG1sLCBib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ucHVwcywgLmxpdHRlcnMsIC5hYm91dCB7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYigyMjgsIDg3LCA4Nyk7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZmxleC1lbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4gICAgLnJvdXRlcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5yb3V0ZXMgYSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDEuNWVtIDAgIDA7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJvdXRlcyBhOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxyXFxuICAgICAgICBcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIExBTkRJTkcgU0VDVElPTiAqL1xcclxcblxcclxcbi5sYW5kaW5nIHtcXHJcXG4gICAgaGVpZ2h0OiA4NXZoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS81MDA/dGV4dD1QdXBweStJTUcrbWF5YmVTbGlkZXJcXFwiKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcGxhY2UtaXRlbXM6IGVuZCBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuICAgIC5sYW5kaW5nIGgxe1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG5cXHJcXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuc3ViSGVhZGVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyZW07XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbi8qIFRFU1RJTU9OSUFMcyAqL1xcclxcblxcclxcbi50ZXN0aW1vbmlhbCB7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRlc3RpbW9uaWFsIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjRlbTtcXHJcXG59XFxyXFxuICAgIC50ZXN0aW1vbmlhbHNXcmFwIHtcXHJcXG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdGltb25pYWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGVzdENhcmQge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDFmcjtcXHJcXG4gICAgICAgIG1pbi13aWR0aDogMTdlbTtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjVlbTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICBtYXJnaW46IDJlbSAyZW07XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBpbWcgeyAgXFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEgLyAzOyBcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6ICA1ZW07XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1ZW07XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBoM3sgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcclxcbiAgICAgICAgICAgIGdyaWQtcm93OiAxOyBcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC50ZXN0Q2FyZCBwIHsgIFxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBncmlkLXJvdzogMjsgXFxyXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogRmVhdHVyZWQgUFVQUyAqL1xcclxcblxcclxcbi5mZWF0dXJlZFB1cHMge1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiAgICAuZmVhdHVyZWRQdXBDYXJkcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wdXBDYXJkIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDI1JTtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogM2VtO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAucHVwQ2FyZCBpbWcge1xcclxcbiAgICAgICAgICAgICAgICAvKiBmbG9hdDogbGVmdDsgKi9cXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6ICAxN2VtO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3ZW07XFxyXFxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAucHVwQ2FyZCBkaXYge1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MCU7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxN2VtO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAucHVwQ2FyZCBoNCwgLnB1cENhcmQgaDUge1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5uYW1lIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYXZhaWxhYmxlIHtcXHJcXG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDQ7XFxyXFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuYnJlZWQge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5icmVlZFR5cGUge1xcclxcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTElOS1MgKi9cXHJcXG5cXHJcXG5cXHJcXG4ubGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbiAgICAuYnJlZWRMIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuYnJlZWRMIGRpdiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwJSAxZnI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG5cXHJcXG5cXHJcXG4gICBcIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9