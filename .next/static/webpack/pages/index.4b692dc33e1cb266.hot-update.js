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

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpeakerFilterContext\": function() { return /* binding */ SpeakerFilterContext; },\n/* harmony export */   \"SpeakerFilterProvider\": function() { return /* binding */ SpeakerFilterProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ \"./src/hooks/useSpeakerFilter.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar SpeakerFilterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SpeakerFilterProvider(param) {\n    var children = param.children, _startingShowSessions = param.startingShowSessions, startingShowSessions = _startingShowSessions === void 0 ? false : _startingShowSessions;\n    _s();\n    var ref = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(startingShowSessions), showSessions = ref.showSessions, setShowSessions = ref.setShowSessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerFilterContext.Provider, {\n        value: (showSessions, setShowSessions),\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\contexts\\\\SpeakerFilterContext.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(SpeakerFilterProvider, \"EfsUFRZxROfa7SPrTONdVMPEl1M=\", false, function() {\n    return [\n        _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = SpeakerFilterProvider;\n\nvar _c;\n$RefreshReg$(_c, \"SpeakerFilterProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1k7O0FBR3hELEdBQUssQ0FBQ0csb0JBQW9CLGlCQUFHRixvREFBYTtTQUdqQ0cscUJBQXFCLENBQUMsS0FBMEMsRUFDekUsQ0FBQztRQURnQ0MsUUFBUSxHQUFWLEtBQTBDLENBQXhDQSxRQUFRLDBCQUFWLEtBQTBDLENBQTlCQyxvQkFBb0IsRUFBcEJBLG9CQUFvQixzQ0FBRyxLQUFLOztJQUVuRSxHQUFLLENBQXFDSixHQUFzQyxHQUF0Q0EsbUVBQWdCLENBQUNJLG9CQUFvQixHQUF2RUMsWUFBWSxHQUFzQkwsR0FBc0MsQ0FBeEVLLFlBQVksRUFBRUMsZUFBZSxHQUFLTixHQUFzQyxDQUExRE0sZUFBZTtJQUVyQyxNQUFNLHNFQUNMTCxvQkFBb0IsQ0FBQ00sUUFBUTtRQUFDQyxLQUFLLEdBQUVILFlBQVksRUFBRUMsZUFBZTs7Ozs7OztrQkFDOURILFFBQVE7O0FBSWpCLENBQUM7R0FWUUQscUJBQXFCOztRQUVnQkYsK0RBQWdCOzs7S0FGckRFLHFCQUFxQjtBQVl5QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuanM/ZjBlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSAnLi4vaG9va3MvdXNlU3BlYWtlckZpbHRlcic7XHJcblxyXG5cclxuY29uc3QgU3BlYWtlckZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZpbHRlclByb3ZpZGVyKHsgY2hpbGRyZW4sIHN0YXJ0aW5nU2hvd1Nlc3Npb25zID0gZmFsc2UgfSlcclxue1xyXG4gICAgY29uc3QgeyBzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9ucyB9ID0gdXNlU3BlYWtlckZpbHRlcihzdGFydGluZ1Nob3dTZXNzaW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxTcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnN9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvU3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgU3BlYWtlckZpbHRlckNvbnRleHQsIFNwZWFrZXJGaWx0ZXJQcm92aWRlciB9OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTcGVha2VyRmlsdGVyIiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTcGVha2VyRmlsdGVyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXJ0aW5nU2hvd1Nlc3Npb25zIiwic2hvd1Nlc3Npb25zIiwic2V0U2hvd1Nlc3Npb25zIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SpeakerFilterContext.js\n");

/***/ }),

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _s = $RefreshSig$();\nfunction useSpeakerFilter(startingShowSessions) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(startingShowSessions), showSessions = ref[0], setShowSessions = ref[1];\n    return {\n        showSessions: showSessions,\n        setShowSessions: setShowSessions\n    };\n}\n_s(useSpeakerFilter, \"7eL5hdDP8DfBF9fayVy/9MwIvAY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSpeakerFilter);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlU3BlYWtlckZpbHRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWdDOztTQUd2QkMsZ0JBQWdCLENBQUNDLG9CQUFvQixFQUM5QyxDQUFDOztJQUNHLEdBQUssQ0FBbUNGLEdBQThCLEdBQTlCQSwrQ0FBUSxDQUFDRSxvQkFBb0IsR0FBOURDLFlBQVksR0FBcUJILEdBQThCLEtBQWpESSxlQUFlLEdBQUlKLEdBQThCO0lBRXRFLE1BQU0sQ0FBQyxDQUFDRztRQUFBQSxZQUFZLEVBQVpBLFlBQVk7UUFBRUMsZUFBZSxFQUFmQSxlQUFlO0lBQUEsQ0FBQztBQUMxQyxDQUFDO0dBTFFILGdCQUFnQjtBQU96QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXIuanM/NzQ3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMpXHJcbntcclxuICAgIGNvbnN0IFtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc10gPSB1c2VTdGF0ZShzdGFydGluZ1Nob3dTZXNzaW9ucyk7XHJcblxyXG4gICAgcmV0dXJuIHtzaG93U2Vzc2lvbnMsIHNldFNob3dTZXNzaW9uc31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlU3BlYWtlckZpbHRlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VTcGVha2VyRmlsdGVyIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useSpeakerFilter.js\n");

/***/ })

});