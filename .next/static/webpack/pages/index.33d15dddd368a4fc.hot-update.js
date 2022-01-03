/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n        className: \"session w-100\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 9,\n                    columnNumber: 15\n                },\n                __self: this,\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            })\n        ]\n    }));\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"sessionBox card h-250\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 17,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Session, _objectSpread({\n        }, sessions[0], {\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            },\n            __self: this\n        }))\n    }));\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last),\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            },\n            __self: this\n        })\n    }));\n}\n_c2 = SpeakerImage;\nvar SpeakerFavourite = function(param) {\n    var favourite = param.favourite, onFavouriteToggle = param.onFavouriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"action padB1\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n            onClick: function onClick() {\n                setInTransition(true);\n                return onFavouriteToggle(doneCallback);\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                    className: favourite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                \" \",\n                \" \",\n                \" Favourite \",\n                \" \",\n                inTransition === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    className: \"fas fa-circle-both-notch fa spin\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Loading...\"\n                }) : null\n            ]\n        })\n    }));\n};\n_s(SpeakerFavourite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavourite;\nvar SpeakerDemo = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavouriteToggle = param.onFavouriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"speaker-info\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 57,\n            columnNumber: 11\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 58,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerFavourite, {\n                favourite: favorite,\n                onFavouriteToggle: onFavouriteToggle,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 63,\n                    columnNumber: 3\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 64,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        bio,\n                        \" \",\n                        company,\n                        \" \",\n                        twitterHandle,\n                        \" \",\n                        favorite\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_c4 = SpeakerDemo;\nfunction Speaker(param) {\n    var speaker = param.speaker, onFavouriteToggle = param.onFavouriteToggle;\n    _s1();\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    var showSessions = useContext(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext).showSessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-sm-12 col-xs-12\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 75,\n            columnNumber: 11\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 76,\n                    columnNumber: 3\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 77,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerDemo, _objectSpread({\n                    }, speaker, {\n                        onFavouriteToggle: onFavouriteToggle,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }))\n                ]\n            }),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Sessions, {\n                sessions: sessions,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 80,\n                    columnNumber: 31\n                },\n                __self: this\n            }) : null\n        ]\n    }));\n}\n_s1(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavourite\");\n$RefreshReg$(_c4, \"SpeakerDemo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUMsS0FBSyxFQUFFQSxLQUFLO3dCQUFFQyxJQUFJLEVBQUVBLElBQUk7Ozs7Ozs7O3lGQUM3Q2EsV0FBVzt1QkFBS1EsT0FBTzt3QkFBRWQsaUJBQWlCLEVBQUVBLGlCQUFpQjs7Ozs7Ozs7OztZQUU5RGUsWUFBWSxLQUFLLElBQUksd0VBQUk1QixRQUFRO2dCQUFDQyxRQUFRLEVBQUVBLFFBQVE7Ozs7Ozs7aUJBQU8sSUFBSTs7O0FBR3JFLENBQUM7SUFiUXlCLE9BQU87TUFBUEEsT0FBTztBQWVoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXIuanM/MjkyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuXHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHt0aXRsZSwgcm9vbSB9KVxyXG57XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pXHJcbntcclxucmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSlcclxue1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfSB3aWR0aD1cIjMwMFwiIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfT48L2ltZz5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyRmF2b3VyaXRlID0gKHtmYXZvdXJpdGUsIG9uRmF2b3VyaXRlVG9nZ2xlfSkgPT5cclxue1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKClcclxuICB7XHJcbiAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtmdW5jdGlvbigpXHJcbiAgICAgIHtcclxuICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG9uRmF2b3VyaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3VyaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9PjwvaT4ge1wiIFwifSBGYXZvdXJpdGUge1wiIFwifVxyXG4gICAgICB7IGluVHJhbnNpdGlvbiA9PT0gdHJ1ZSBcclxuICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLWJvdGgtbm90Y2ggZmEgc3BpblwiPkxvYWRpbmcuLi48L3NwYW4+IDogXHJcbiAgICAgIG51bGwgfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyRGVtbyA9ICh7Zmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUsIG9uRmF2b3VyaXRlVG9nZ2xlfSkgPT5cclxue1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgPC9oMz5cclxuICA8L2Rpdj5cclxuICA8U3BlYWtlckZhdm91cml0ZSBmYXZvdXJpdGU9e2Zhdm9yaXRlfSBvbkZhdm91cml0ZVRvZ2dsZT17b25GYXZvdXJpdGVUb2dnbGV9IC8+XHJcbiAgPGRpdj5cclxuICAgIDxwPntiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfTwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIgKHtzcGVha2VyLCBvbkZhdm91cml0ZVRvZ2dsZX0pXHJcbntcclxuICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgIDxTcGVha2VyRGVtbyB7Li4uc3BlYWtlcn0gb25GYXZvdXJpdGVUb2dnbGU9e29uRmF2b3VyaXRlVG9nZ2xlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7IHNob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbCB9XHJcbiAgICBcclxuPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsIlNlc3Npb24iLCJ0aXRsZSIsInJvb20iLCJzcGFuIiwiY2xhc3NOYW1lIiwic3Ryb25nIiwibmFtZSIsIlNlc3Npb25zIiwic2Vzc2lvbnMiLCJkaXYiLCJTcGVha2VySW1hZ2UiLCJpZCIsImZpcnN0IiwibGFzdCIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiU3BlYWtlckZhdm91cml0ZSIsImZhdm91cml0ZSIsIm9uRmF2b3VyaXRlVG9nZ2xlIiwiZG9uZUNhbGxiYWNrIiwic2V0SW5UcmFuc2l0aW9uIiwiaW5UcmFuc2l0aW9uIiwib25DbGljayIsImkiLCJTcGVha2VyRGVtbyIsImJpbyIsImNvbXBhbnkiLCJ0d2l0dGVySGFuZGxlIiwiZmF2b3JpdGUiLCJoMyIsInAiLCJTcGVha2VyIiwic3BlYWtlciIsInNob3dTZXNzaW9ucyIsInVzZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ }),

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});