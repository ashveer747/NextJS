"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _s = $RefreshSig$();\nfunction useSpeakerFilter(startingShowSessions, startingEventYear) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions), showSessions = ref[0], setShowSessions = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingEventYear), eventYear = ref1[0], setEventYear = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"), searchQuery = ref2[0], setSearchQuery = ref2[1];\n    var EVENT_YEARS = [\n        \"2008\",\n        \"2009\",\n        \"2010\",\n        \"2011\",\n        \"2012\",\n        \"2013\",\n        \"2014\",\n        \"2015\",\n        \"2016\",\n        \"2017\",\n        \"2018\",\n        \"2019\", \n    ];\n    return {\n        showSessions: showSessions,\n        setShowSessions: setShowSessions,\n        eventYear: eventYear,\n        setEventYear: setEventYear,\n        searchQuery: searchQuery,\n        setSearchQuery: setSearchQuery,\n        EVENT_YEARS: EVENT_YEARS\n    };\n}\n_s(useSpeakerFilter, \"KwT/i1RTYhDc6nnqfPRg2wXTFGk=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSpeakerFilter);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWdDOztTQUd2QkMsZ0JBQWdCLENBQUNDLG9CQUFvQixFQUFFQyxpQkFBaUIsRUFDakUsQ0FBQzs7SUFDRyxHQUFLLENBQW1DSCxHQUE4QixHQUE5QkEsK0NBQVEsQ0FBQ0Usb0JBQW9CLEdBQTlERSxZQUFZLEdBQXFCSixHQUE4QixLQUFqREssZUFBZSxHQUFJTCxHQUE4QjtJQUN0RSxHQUFLLENBQTZCQSxJQUEyQixHQUEzQkEsK0NBQVEsQ0FBQ0csaUJBQWlCLEdBQXJERyxTQUFTLEdBQWtCTixJQUEyQixLQUEzQ08sWUFBWSxHQUFJUCxJQUEyQjtJQUM3RCxHQUFLLENBQWlDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUExQ1EsV0FBVyxHQUFvQlIsSUFBWSxLQUE5QlMsY0FBYyxHQUFJVCxJQUFZO0lBRWxELEdBQUssQ0FBQ1UsV0FBVyxHQUFHLENBQUM7UUFFakIsQ0FBTTtRQUNOLENBQU07UUFDTixDQUFNO1FBQ04sQ0FBTTtRQUNOLENBQU07UUFDTixDQUFNO1FBQ04sQ0FBTTtRQUNOLENBQU07UUFDTixDQUFNO1FBQ04sQ0FBTTtRQUNOLENBQU07UUFDTixDQUFNO0lBRVYsQ0FBQztJQUdELE1BQU0sQ0FBQyxDQUFDO1FBQ0pOLFlBQVksRUFBWkEsWUFBWTtRQUNaQyxlQUFlLEVBQWZBLGVBQWU7UUFDZkMsU0FBUyxFQUFUQSxTQUFTO1FBQ1RDLFlBQVksRUFBWkEsWUFBWTtRQUNaQyxXQUFXLEVBQVhBLFdBQVc7UUFDWEMsY0FBYyxFQUFkQSxjQUFjO1FBQ2RDLFdBQVcsRUFBWEEsV0FBVztJQUNmLENBQUM7QUFDTCxDQUFDO0dBakNRVCxnQkFBZ0I7QUFtQ3pCLCtEQUFlQSxnQkFBZ0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcz83NDcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdXNlU3BlYWtlckZpbHRlcihzdGFydGluZ1Nob3dTZXNzaW9ucywgc3RhcnRpbmdFdmVudFllYXIpXHJcbntcclxuICAgIGNvbnN0IFtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc10gPSB1c2VTdGF0ZShzdGFydGluZ1Nob3dTZXNzaW9ucyk7XHJcbiAgICBjb25zdCBbZXZlbnRZZWFyLCBzZXRFdmVudFllYXJdID0gdXNlU3RhdGUoc3RhcnRpbmdFdmVudFllYXIpO1xyXG4gICAgY29uc3QgW3NlYXJjaFF1ZXJ5LCBzZXRTZWFyY2hRdWVyeV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBFVkVOVF9ZRUFSUyA9IFtcclxuXHJcbiAgICAgICAgXCIyMDA4XCIsXHJcbiAgICAgICAgXCIyMDA5XCIsXHJcbiAgICAgICAgXCIyMDEwXCIsXHJcbiAgICAgICAgXCIyMDExXCIsXHJcbiAgICAgICAgXCIyMDEyXCIsXHJcbiAgICAgICAgXCIyMDEzXCIsXHJcbiAgICAgICAgXCIyMDE0XCIsXHJcbiAgICAgICAgXCIyMDE1XCIsXHJcbiAgICAgICAgXCIyMDE2XCIsXHJcbiAgICAgICAgXCIyMDE3XCIsXHJcbiAgICAgICAgXCIyMDE4XCIsXHJcbiAgICAgICAgXCIyMDE5XCIsXHJcblxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93U2Vzc2lvbnMsIFxyXG4gICAgICAgIHNldFNob3dTZXNzaW9ucyxcclxuICAgICAgICBldmVudFllYXIsXHJcbiAgICAgICAgc2V0RXZlbnRZZWFyLFxyXG4gICAgICAgIHNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIHNldFNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgIEVWRU5UX1lFQVJTXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNwZWFrZXJGaWx0ZXI7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU3BlYWtlckZpbHRlciIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic3RhcnRpbmdFdmVudFllYXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJldmVudFllYXIiLCJzZXRFdmVudFllYXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useSpeakerFilter.js\n");

/***/ })

});