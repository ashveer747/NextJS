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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ \"./src/components/Speaker.js\");\n/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ \"./node_modules/react-placeholder/lib/index.js\");\n/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ \"./src/hooks/useRequestDelay.js\");\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ \"./SpeakerData.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction SpeakersList() {\n    _s();\n    var ref = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data), speakersData = ref.data, requestStatus = ref.requestStatus, error = ref.error, updateRecord = ref.updateRecord;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext), searchQuery = ref1.searchQuery, eventYear = ref1.eventYear;\n    if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"text-danger\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            },\n            __self: this,\n            children: [\n                \"ERROR: \",\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"b\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n                        lineNumber: 25,\n                        columnNumber: 18\n                    },\n                    __self: this,\n                    children: [\n                        \"loading speaker data failed \",\n                        error\n                    ]\n                })\n            ]\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container speakers-list\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n            lineNumber: 31,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            type: \"media\",\n            row: 15,\n            className: \"speakerlist-placeholder\",\n            ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n                    lineNumber: 37,\n                    columnNumber: 5\n                },\n                __self: this,\n                children: speakersData.filter(function(speaker) {\n                    return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);\n                }).filter(function(speaker) {\n                    return speaker.sessions.find(function(session) {\n                        return session.eventYear === eventYear;\n                    });\n                }).map(function(speaker) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Speaker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        speaker: speaker,\n                        onFavouriteToggle: function(doneCallback) {\n                            updateRecord(_objectSpread({\n                            }, speaker, {\n                                favorite: !speaker.favorite\n                            }), doneCallback);\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\SpeakersList.js\",\n                            lineNumber: 51,\n                            columnNumber: 10\n                        },\n                        __self: this\n                    }, speaker.id));\n                })\n            })\n        })\n    }));\n}\n_s(SpeakersList, \"2l4apuXkOXJSpPDeBjhYTsu60pY=\", false, function() {\n    return [\n        _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = SpeakersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpeakersList);\nvar _c;\n$RefreshReg$(_c, \"SpeakersList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TcGVha2Vyc0xpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ0g7QUFDaUI7QUFDNEI7QUFDcEM7QUFDK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FHOURPLFlBQVksR0FDckIsQ0FBQzs7SUFDRyxHQUFLLENBTURKLEdBQTJCLEdBQTNCQSxrRUFBZSxDQUFDLElBQUksRUFBRUUsOENBQUksR0FKckJHLFlBQVksR0FJakJMLEdBQTJCLENBSjVCRSxJQUFJLEVBQ0pJLGFBQWEsR0FHWk4sR0FBMkIsQ0FINUJNLGFBQWEsRUFDYkMsS0FBSyxHQUVKUCxHQUEyQixDQUY1Qk8sS0FBSyxFQUNMQyxZQUFZLEdBQ1hSLEdBQTJCLENBRDVCUSxZQUFZO0lBR2YsR0FBSyxDQUE4QlgsSUFBZ0MsR0FBaENBLGlEQUFVLENBQUNNLGdGQUFvQixHQUEzRE0sV0FBVyxHQUFpQlosSUFBZ0MsQ0FBNURZLFdBQVcsRUFBR0MsU0FBUyxHQUFLYixJQUFnQyxDQUE5Q2EsU0FBUztJQUU5QixFQUFFLEVBQUNKLGFBQWEsS0FBS0wsMEVBQXNCLEVBQzNDLENBQUM7UUFDQyxNQUFNLHVFQUNIVyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFhOzs7Ozs7OztnQkFBQyxDQUNwQjtzRkFBQ0MsQ0FBQzs7Ozs7Ozs7d0JBQUMsQ0FBNEI7d0JBQUNQLEtBQUs7Ozs7O0lBR2xELENBQUM7SUFFRCxNQUFNLHNFQUNMSyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUF5Qjs7Ozs7Ozt1RkFDckNkLHlEQUFnQjtZQUNqQmdCLElBQUksRUFBQyxDQUFPO1lBQ1pDLEdBQUcsRUFBRSxFQUFFO1lBQ1BILFNBQVMsRUFBQyxDQUF5QjtZQUNuQ0ksS0FBSyxFQUFFWCxhQUFhLEtBQUtMLDBFQUFzQjs7Ozs7OzsyRkFDaERXLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFLOzs7Ozs7OzBCQUNqQlIsWUFBWSxDQUFDYyxNQUFNLENBQUMsUUFBUSxDQUFDQyxPQUFPLEVBQ3JDLENBQUM7b0JBQ0MsTUFBTSxDQUFDQSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFdBQVcsS0FDdkRXLE9BQU8sQ0FBQ0ksSUFBSSxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsV0FBVztnQkFDakQsQ0FBQyxFQUFFVSxNQUFNLENBQUMsUUFBUSxDQUFFQyxPQUFPLEVBQzNCLENBQUM7b0JBQ0MsTUFBTSxDQUFDQSxPQUFPLENBQUNLLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsQ0FBUEMsT0FBTyxFQUNyQyxDQUFDO3dCQUNDLE1BQU0sQ0FBQ0EsT0FBTyxDQUFDakIsU0FBUyxLQUFLQSxTQUFTO29CQUN4QyxDQUFDO2dCQUNILENBQUMsRUFBRWtCLEdBQUcsQ0FBQyxRQUFRLENBQUNSLE9BQU8sRUFDdkIsQ0FBQztvQkFDQyxNQUFNLHNFQUNKdEIsZ0RBQU87d0JBQ1JzQixPQUFPLEVBQUVBLE9BQU87d0JBQ2hCUyxpQkFBaUIsRUFBRSxRQUFRLENBQVBDLFlBQVksRUFDL0IsQ0FBQzs0QkFDQ3RCLFlBQVk7K0JBQUtZLE9BQU87Z0NBQUVXLFFBQVEsR0FBR1gsT0FBTyxDQUFDVyxRQUFRO2dDQUFHRCxZQUFZO3dCQUN0RSxDQUFDOzs7Ozs7O3VCQUxZVixPQUFPLENBQUNZLEVBQUU7Z0JBTzNCLENBQUM7Ozs7QUFLUCxDQUFDO0dBdERRNUIsWUFBWTs7UUFRYkosOERBQWU7OztLQVJkSSxZQUFZO0FBd0RyQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcz8yYTY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTcGVha2VyIGZyb20gJy4vU3BlYWtlcic7XHJcbmltcG9ydCBSZWFjdFBsYWNlaG9sZGVyIGZyb20gJ3JlYWN0LXBsYWNlaG9sZGVyJztcclxuaW1wb3J0IHVzZVJlcXVlc3REZWxheSwgIHsgUkVRVUVTVF9TVEFUVVMgIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vLi4vU3BlYWtlckRhdGEnO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuXHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoKVxyXG57XHJcbiAgICBjb25zdCBcclxuICAgIHtcclxuICAgICAgIGRhdGE6IHNwZWFrZXJzRGF0YSxcclxuICAgICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICAgICBlcnJvciwgXHJcbiAgICAgICB1cGRhdGVSZWNvcmRcclxuICAgIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gICAgY29uc3Qge3NlYXJjaFF1ZXJ5LCAgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgICBpZihyZXF1ZXN0U3RhdHVzID09PSBSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtZGFuZ2VyJz5cclxuICAgICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIHNwZWFrZXIgZGF0YSBmYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgIDxSZWFjdFBsYWNlaG9sZGVyXHJcbiAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgIHJvdz17MTV9XHJcbiAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJsaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAge3NwZWFrZXJzRGF0YS5maWx0ZXIoZnVuY3Rpb24oc3BlYWtlcilcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBzcGVha2VyLmZpcnN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpIHx8XHJcbiAgICAgICAgc3BlYWtlci5sYXN0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoUXVlcnkpXHJcbiAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcilcclxuICAgICAge1xyXG4gICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmV0dXJuIHNlc3Npb24uZXZlbnRZZWFyID09PSBldmVudFllYXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSkubWFwKGZ1bmN0aW9uKHNwZWFrZXIpXHJcbiAgICAgIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICA8U3BlYWtlciBrZXk9e3NwZWFrZXIuaWR9IFxyXG4gICAgICAgICBzcGVha2VyPXtzcGVha2VyfSBcclxuICAgICAgICAgb25GYXZvdXJpdGVUb2dnbGU9eyhkb25lQ2FsbGJhY2spID0+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVJlY29yZCh7Li4uc3BlYWtlciwgZmF2b3JpdGU6ICFzcGVha2VyLmZhdm9yaXRlfSwgZG9uZUNhbGxiYWNrKTtcclxuICAgICAgICAgIH19IC8+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3RQbGFjZWhvbGRlcj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTcGVha2VyIiwiUmVhY3RQbGFjZWhvbGRlciIsInVzZVJlcXVlc3REZWxheSIsIlJFUVVFU1RfU1RBVFVTIiwiZGF0YSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlcnNMaXN0Iiwic3BlYWtlcnNEYXRhIiwicmVxdWVzdFN0YXR1cyIsImVycm9yIiwidXBkYXRlUmVjb3JkIiwic2VhcmNoUXVlcnkiLCJldmVudFllYXIiLCJGQUlMVVJFIiwiZGl2IiwiY2xhc3NOYW1lIiwiYiIsInR5cGUiLCJyb3ciLCJyZWFkeSIsIlNVQ0NFU1MiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJvbkZhdm91cml0ZVRvZ2dsZSIsImRvbmVDYWxsYmFjayIsImZhdm9yaXRlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SpeakersList.js\n");

/***/ })

});