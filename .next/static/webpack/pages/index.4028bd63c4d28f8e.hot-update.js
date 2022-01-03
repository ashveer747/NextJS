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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n        className: \"session w-100\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 9,\n                    columnNumber: 15\n                },\n                __self: this,\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            })\n        ]\n    }));\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"sessionBox card h-250\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 17,\n            columnNumber: 3\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Session, _objectSpread({\n        }, sessions[0], {\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            },\n            __self: this\n        }))\n    }));\n}\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last),\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            },\n            __self: this\n        })\n    }));\n}\n_c2 = SpeakerImage;\nvar SpeakerFavourite = function(param) {\n    var favourite = param.favourite, onFavouriteToggle = param.onFavouriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"action padB1\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n            onClick: function onClick() {\n                setInTransition(true);\n                return onFavouriteToggle(doneCallback);\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                    className: favourite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                \" \",\n                \" \",\n                \" Favourite \",\n                \" \",\n                inTransition === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    className: \"fas fa-circle-both-notch fa spin\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Loading...\"\n                }) : null\n            ]\n        })\n    }));\n};\n_s(SpeakerFavourite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavourite;\nvar SpeakerDemo = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavouriteToggle = param.onFavouriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"speaker-info\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 57,\n            columnNumber: 11\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 58,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 59,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerFavourite, {\n                favourite: favorite,\n                onFavouriteToggle: onFavouriteToggle,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 63,\n                    columnNumber: 3\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 64,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 65,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        bio,\n                        \" \",\n                        company,\n                        \" \",\n                        twitterHandle,\n                        \" \",\n                        favorite\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_c4 = SpeakerDemo;\nfunction Speaker(param) {\n    var speaker = param.speaker, onFavouriteToggle = param.onFavouriteToggle;\n    _s1();\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    var showSessions = useContext(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext).showSessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-sm-12 col-xs-12\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 75,\n            columnNumber: 11\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 76,\n                    columnNumber: 3\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 77,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerDemo, _objectSpread({\n                    }, speaker, {\n                        onFavouriteToggle: onFavouriteToggle,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 78,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }))\n                ]\n            }),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Sessions, {\n                sessions: sessions,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 80,\n                    columnNumber: 31\n                },\n                __self: this\n            }) : null\n        ]\n    }));\n}\n_s1(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavourite\");\n$RefreshReg$(_c4, \"SpeakerDemo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7eUZBQzdDYSxXQUFXO3VCQUFLUSxPQUFPO3dCQUFFZCxpQkFBaUIsRUFBRUEsaUJBQWlCOzs7Ozs7Ozs7O1lBRTlEZSxZQUFZLEtBQUssSUFBSSx3RUFBSTVCLFFBQVE7Z0JBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7OztpQkFBTyxJQUFJOzs7QUFHckUsQ0FBQztJQWJReUIsT0FBTztNQUFQQSxPQUFPO0FBZWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuXHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHt0aXRsZSwgcm9vbSB9KVxyXG57XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pXHJcbntcclxucmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNlc3Npb25Cb3ggY2FyZCBoLTI1MFwiPlxyXG4gICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJJbWFnZSh7aWQsIGZpcnN0LCBsYXN0fSlcclxue1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgPGltZyBjbGFzc05hbWU9XCJjb250YWluLWZpdFwiIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfSB3aWR0aD1cIjMwMFwiIGFsdD17YCR7Zmlyc3R9ICR7bGFzdH1gfT48L2ltZz5cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyRmF2b3VyaXRlID0gKHtmYXZvdXJpdGUsIG9uRmF2b3VyaXRlVG9nZ2xlfSkgPT5cclxue1xyXG4gIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgZnVuY3Rpb24gZG9uZUNhbGxiYWNrKClcclxuICB7XHJcbiAgIHNldEluVHJhbnNpdGlvbihmYWxzZSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbiBwYWRCMVwiPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtmdW5jdGlvbigpXHJcbiAgICAgIHtcclxuICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG9uRmF2b3VyaXRlVG9nZ2xlKGRvbmVDYWxsYmFjayk7XHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT17ZmF2b3VyaXRlID09PSB0cnVlID8gXCJmYSBmYS1zdGFyIG9yYW5nZVwiIDogXCJmYSBmYS1zdGFyLW8gb3JhbmdlXCJ9PjwvaT4ge1wiIFwifSBGYXZvdXJpdGUge1wiIFwifVxyXG4gICAgICB7IGluVHJhbnNpdGlvbiA9PT0gdHJ1ZSBcclxuICAgICAgPyA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlLWJvdGgtbm90Y2ggZmEgc3BpblwiPkxvYWRpbmcuLi48L3NwYW4+IDogXHJcbiAgICAgIG51bGwgfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTcGVha2VyRGVtbyA9ICh7Zmlyc3QsIGxhc3QsIGJpbywgY29tcGFueSwgdHdpdHRlckhhbmRsZSwgZmF2b3JpdGUsIG9uRmF2b3VyaXRlVG9nZ2xlfSkgPT5cclxue1xyXG4gIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC10cnVuY2F0ZSB3LTIwMFwiPlxyXG4gICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgPC9oMz5cclxuICA8L2Rpdj5cclxuICA8U3BlYWtlckZhdm91cml0ZSBmYXZvdXJpdGU9e2Zhdm9yaXRlfSBvbkZhdm91cml0ZVRvZ2dsZT17b25GYXZvdXJpdGVUb2dnbGV9IC8+XHJcbiAgPGRpdj5cclxuICAgIDxwPntiaW99IHtjb21wYW55fSB7dHdpdHRlckhhbmRsZX0ge2Zhdm9yaXRlfTwvcD5cclxuICA8L2Rpdj5cclxuPC9kaXY+KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIgKHtzcGVha2VyLCBvbkZhdm91cml0ZVRvZ2dsZX0pXHJcbntcclxuICBjb25zdCB7IGlkLCBmaXJzdCwgbGFzdCwgc2Vzc2lvbnMgfSA9IHNwZWFrZXI7XHJcbiAgY29uc3QgeyBzaG93U2Vzc2lvbnMgfSA9IHVzZUNvbnRleHQoU3BlYWtlckZpbHRlckNvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNiBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgIDxTcGVha2VySW1hZ2UgaWQ9e2lkfSBmaXJzdD17Zmlyc3R9IGxhc3Q9e2xhc3R9IC8+XHJcbiAgICAgIDxTcGVha2VyRGVtbyB7Li4uc3BlYWtlcn0gb25GYXZvdXJpdGVUb2dnbGU9e29uRmF2b3VyaXRlVG9nZ2xlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7IHNob3dTZXNzaW9ucyA9PT0gdHJ1ZSA/IDxTZXNzaW9ucyBzZXNzaW9ucz17c2Vzc2lvbnN9IC8+IDogbnVsbCB9XHJcbiAgICBcclxuPC9kaXY+KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsInNwYW4iLCJjbGFzc05hbWUiLCJzdHJvbmciLCJuYW1lIiwiU2Vzc2lvbnMiLCJzZXNzaW9ucyIsImRpdiIsIlNwZWFrZXJJbWFnZSIsImlkIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3VyaXRlIiwiZmF2b3VyaXRlIiwib25GYXZvdXJpdGVUb2dnbGUiLCJkb25lQ2FsbGJhY2siLCJzZXRJblRyYW5zaXRpb24iLCJpblRyYW5zaXRpb24iLCJvbkNsaWNrIiwiaSIsIlNwZWFrZXJEZW1vIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsImgzIiwicCIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIiwidXNlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ }),

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SpeakerFilterContext\": function() { return /* binding */ SpeakerFilterContext; },\n/* harmony export */   \"SpeakerFilterProvider\": function() { return /* binding */ SpeakerFilterProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ \"./src/hooks/useSpeakerFilter.js\");\n/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar SpeakerFilterContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction SpeakerFilterProvider(param) {\n    var children = param.children, _startingShowSessions = param.startingShowSessions, startingShowSessions = _startingShowSessions === void 0 ? false : _startingShowSessions;\n    _s();\n    var ref = _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2___default()(startingShowSessions), showSessions = ref.showSessions, setShowSessions = ref.setShowSessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerFilterContext.Provider, {\n        value: (showSessions, setShowSessions),\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\contexts\\\\SpeakerFilterContext.js\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\n_s(SpeakerFilterProvider, \"EfsUFRZxROfa7SPrTONdVMPEl1M=\", false, function() {\n    return [\n        (_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = SpeakerFilterProvider;\n\nvar _c;\n$RefreshReg$(_c, \"SpeakerFilterProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU3BlYWtlckZpbHRlckNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNZOztBQUd4RCxHQUFLLENBQUNHLG9CQUFvQixpQkFBR0Ysb0RBQWE7U0FHakNHLHFCQUFxQixDQUFDLEtBQTBDLEVBQ3pFLENBQUM7UUFEZ0NDLFFBQVEsR0FBVixLQUEwQyxDQUF4Q0EsUUFBUSwwQkFBVixLQUEwQyxDQUE5QkMsb0JBQW9CLEVBQXBCQSxvQkFBb0Isc0NBQUcsS0FBSzs7SUFFbkUsR0FBSyxDQUFxQ0osR0FBc0MsR0FBdENBLDhEQUFnQixDQUFDSSxvQkFBb0IsR0FBdkVDLFlBQVksR0FBc0JMLEdBQXNDLENBQXhFSyxZQUFZLEVBQUVDLGVBQWUsR0FBS04sR0FBc0MsQ0FBMURNLGVBQWU7SUFFckMsTUFBTSxzRUFDTEwsb0JBQW9CLENBQUNNLFFBQVE7UUFBQ0MsS0FBSyxHQUFFSCxZQUFZLEVBQUVDLGVBQWU7Ozs7Ozs7a0JBQzlESCxRQUFROztBQUlqQixDQUFDO0dBVlFELHFCQUFxQjs7UUFFZ0JGLGdFQUFnQjs7O0tBRnJERSxxQkFBcUI7QUFZeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzP2YwZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VTcGVha2VyRmlsdGVyIGZyb20gJy4uL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXInO1xyXG5cclxuXHJcbmNvbnN0IFNwZWFrZXJGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJGaWx0ZXJQcm92aWRlcih7IGNoaWxkcmVuLCBzdGFydGluZ1Nob3dTZXNzaW9ucyA9IGZhbHNlIH0pXHJcbntcclxuICAgIGNvbnN0IHsgc2hvd1Nlc3Npb25zLCBzZXRTaG93U2Vzc2lvbnMgfSA9IHVzZVNwZWFrZXJGaWx0ZXIoc3RhcnRpbmdTaG93U2Vzc2lvbnMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8U3BlYWtlckZpbHRlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Nob3dTZXNzaW9ucywgc2V0U2hvd1Nlc3Npb25zfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NwZWFrZXJGaWx0ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0LCBTcGVha2VyRmlsdGVyUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlU3BlYWtlckZpbHRlciIsIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiU3BlYWtlckZpbHRlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzdGFydGluZ1Nob3dTZXNzaW9ucyIsInNob3dTZXNzaW9ucyIsInNldFNob3dTZXNzaW9ucyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/SpeakerFilterContext.js\n");

/***/ }),

/***/ "./src/hooks/useSpeakerFilter.js":
/*!***************************************!*\
  !*** ./src/hooks/useSpeakerFilter.js ***!
  \***************************************/
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