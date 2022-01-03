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

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ \"./src/contexts/SpeakerFilterContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\nfunction Session(param) {\n    var title = param.title, room = param.room;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n        className: \"session w-100\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            title,\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"strong\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 9,\n                    columnNumber: 15\n                },\n                __self: this,\n                children: [\n                    \"Room: \",\n                    room.name\n                ]\n            })\n        ]\n    }));\n}\n_c = Session;\nfunction Sessions(param) {\n    var sessions = param.sessions;\n    _s();\n    var eventYear = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext).eventYear;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"sessionBox card h-250\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 18,\n            columnNumber: 3\n        },\n        __self: this,\n        children: sessions.filter(function(session) {\n            return sessions.eventYear === eventYear;\n        }).map(function(session) {\n            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"session w-100\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 24,\n                    columnNumber: 15\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Session, _objectSpread({\n                }, session, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 25,\n                        columnNumber: 10\n                    },\n                    __self: this\n                }))\n            }, session.id));\n        })\n    }));\n}\n_s(Sessions, \"RA+HVAm2dNZ/ys9ifFFCpZo7nFg=\");\n_c1 = Sessions;\nfunction SpeakerImage(param) {\n    var id = param.id, first = param.first, last = param.last;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 35,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n            className: \"contain-fit\",\n            src: \"/images/speaker-\".concat(id, \".jpg\"),\n            width: \"300\",\n            alt: \"\".concat(first, \" \").concat(last),\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 36,\n                columnNumber: 5\n            },\n            __self: this\n        })\n    }));\n}\n_c2 = SpeakerImage;\nvar SpeakerFavourite = function(param) {\n    var favourite = param.favourite, onFavouriteToggle = param.onFavouriteToggle;\n    var doneCallback = function doneCallback() {\n        setInTransition(false);\n    };\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), inTransition = ref[0], setInTransition = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"action padB1\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 49,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n            onClick: function onClick() {\n                setInTransition(true);\n                return onFavouriteToggle(doneCallback);\n            },\n            __source: {\n                fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                    className: favourite === true ? \"fa fa-star orange\" : \"fa fa-star-o orange\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                }),\n                \" \",\n                \" \",\n                \" Favourite \",\n                \" \",\n                inTransition === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                    className: \"fas fa-circle-both-notch fa spin\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Loading...\"\n                }) : null\n            ]\n        })\n    }));\n};\n_s1(SpeakerFavourite, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c3 = SpeakerFavourite;\nvar SpeakerDemo = function(param) {\n    var first = param.first, last = param.last, bio = param.bio, company = param.company, twitterHandle = param.twitterHandle, favorite = param.favorite, onFavouriteToggle = param.onFavouriteToggle;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"speaker-info\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 66,\n            columnNumber: 11\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"d-flex justify-content-between mb-3\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 67,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                    className: \"text-truncate w-200\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 68,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        first,\n                        \" \",\n                        last\n                    ]\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerFavourite, {\n                favourite: favorite,\n                onFavouriteToggle: onFavouriteToggle,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 72,\n                    columnNumber: 3\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 73,\n                    columnNumber: 3\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                        lineNumber: 74,\n                        columnNumber: 5\n                    },\n                    __self: _this,\n                    children: [\n                        bio,\n                        \" \",\n                        company,\n                        \" \",\n                        twitterHandle,\n                        \" \",\n                        favorite\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_c4 = SpeakerDemo;\nfunction Speaker(param) {\n    var speaker = param.speaker, onFavouriteToggle = param.onFavouriteToggle;\n    _s2();\n    var id = speaker.id, first = speaker.first, last = speaker.last, sessions = speaker.sessions;\n    var showSessions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_2__.SpeakerFilterContext).showSessions;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-sm-12 col-xs-12\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n            lineNumber: 84,\n            columnNumber: 11\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"card card-height p-4 mt-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 85,\n                    columnNumber: 3\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerImage, {\n                        id: id,\n                        first: first,\n                        last: last,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 86,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SpeakerDemo, _objectSpread({\n                    }, speaker, {\n                        onFavouriteToggle: onFavouriteToggle,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                            lineNumber: 87,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }))\n                ]\n            }),\n            showSessions === true ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Sessions, {\n                sessions: sessions,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\AshveerR\\\\MyRepos\\\\NextJS\\\\src\\\\components\\\\Speaker.js\",\n                    lineNumber: 89,\n                    columnNumber: 31\n                },\n                __self: this\n            }) : null\n        ]\n    }));\n}\n_s2(Speaker, \"TltPt07ZHCSa0bZmdBKJaXz9l1w=\");\n_c5 = Speaker;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Speaker);\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Session\");\n$RefreshReg$(_c1, \"Sessions\");\n$RefreshReg$(_c2, \"SpeakerImage\");\n$RefreshReg$(_c3, \"SpeakerFavourite\");\n$RefreshReg$(_c4, \"SpeakerDemo\");\n$RefreshReg$(_c5, \"Speaker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBcUJzQixPQUFPLENBQWpDdEIsS0FBSyxFQUFFQyxJQUFJLEdBQWVxQixPQUFPLENBQTFCckIsSUFBSSxFQUFFVCxRQUFRLEdBQUs4QixPQUFPLENBQXBCOUIsUUFBUTtJQUNqQyxHQUFLLENBQUcrQixZQUFZLEdBQUt6QyxpREFBVSxDQUFDQyxnRkFBb0IsRUFBaER3QyxZQUFZO0lBRXBCLE1BQU0sdUVBQUc3QixDQUFHO1FBQUNOLFNBQVMsRUFBQyxDQUEyRDs7Ozs7Ozs7a0ZBQ2pGTSxDQUFHO2dCQUFDTixTQUFTLEVBQUMsQ0FBMkI7Ozs7Ozs7O3lGQUNyQ1csWUFBWTt3QkFBQ0QsRUFBRSxFQUFFQSxFQUFFO3dCQUFFRSxLQUFLLEVBQUVBLEtBQUs7d0JBQUVDLElBQUksRUFBRUEsSUFBSTs7Ozs7Ozs7eUZBQzdDYSxXQUFXO3VCQUFLUSxPQUFPO3dCQUFFZCxpQkFBaUIsRUFBRUEsaUJBQWlCOzs7Ozs7Ozs7O1lBRTlEZSxZQUFZLEtBQUssSUFBSSx3RUFBSWhDLFFBQVE7Z0JBQUNDLFFBQVEsRUFBRUEsUUFBUTs7Ozs7OztpQkFBTyxJQUFJOzs7QUFHckUsQ0FBQztJQWJRNkIsT0FBTztNQUFQQSxPQUFPO0FBZWhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcz8yOTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0JztcclxuXHJcblxyXG5mdW5jdGlvbiBTZXNzaW9uKHt0aXRsZSwgcm9vbSB9KVxyXG57XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlc3Npb24gdy0xMDBcIj5cclxuICAgICAge3RpdGxlfSA8c3Ryb25nPlJvb206IHtyb29tLm5hbWV9PC9zdHJvbmc+XHJcbiAgICA8L3NwYW4+XHJcbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlc3Npb25zKHtzZXNzaW9uc30pXHJcbntcclxuICBjb25zdCB7IGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcbnJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgIHtzZXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24oc2Vzc2lvbilcclxuICAgIHtcclxuICAgICAgcmV0dXJuIHNlc3Npb25zLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xyXG4gICAgfSkubWFwKGZ1bmN0aW9uKHNlc3Npb24pXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uIHctMTAwXCIga2V5PXtzZXNzaW9uLmlkfT5cclxuICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb259IC8+XHJcbiAgICAgICAgIDwvZGl2Pik7XHJcbiAgICB9KX1cclxuICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VySW1hZ2Uoe2lkLCBmaXJzdCwgbGFzdH0pXHJcbntcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgIDxpbWcgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIiBzcmM9e2AvaW1hZ2VzL3NwZWFrZXItJHtpZH0uanBnYH0gd2lkdGg9XCIzMDBcIiBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH0+PC9pbWc+XHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgU3BlYWtlckZhdm91cml0ZSA9ICh7ZmF2b3VyaXRlLCBvbkZhdm91cml0ZVRvZ2dsZX0pID0+XHJcbntcclxuICBjb25zdCBbaW5UcmFuc2l0aW9uLCBzZXRJblRyYW5zaXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIGRvbmVDYWxsYmFjaygpXHJcbiAge1xyXG4gICBzZXRJblRyYW5zaXRpb24oZmFsc2UpO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgPHNwYW4gb25DbGljaz17ZnVuY3Rpb24oKVxyXG4gICAgICB7XHJcbiAgICAgICAgc2V0SW5UcmFuc2l0aW9uKHRydWUpO1xyXG4gICAgICAgIHJldHVybiBvbkZhdm91cml0ZVRvZ2dsZShkb25lQ2FsbGJhY2spO1xyXG4gICAgICB9fT5cclxuICAgICAgICA8aSBjbGFzc05hbWU9e2Zhdm91cml0ZSA9PT0gdHJ1ZSA/IFwiZmEgZmEtc3RhciBvcmFuZ2VcIiA6IFwiZmEgZmEtc3Rhci1vIG9yYW5nZVwifT48L2k+IHtcIiBcIn0gRmF2b3VyaXRlIHtcIiBcIn1cclxuICAgICAgeyBpblRyYW5zaXRpb24gPT09IHRydWUgXHJcbiAgICAgID8gPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ib3RoLW5vdGNoIGZhIHNwaW5cIj5Mb2FkaW5nLi4uPC9zcGFuPiA6IFxyXG4gICAgICBudWxsIH1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgU3BlYWtlckRlbW8gPSAoe2ZpcnN0LCBsYXN0LCBiaW8sIGNvbXBhbnksIHR3aXR0ZXJIYW5kbGUsIGZhdm9yaXRlLCBvbkZhdm91cml0ZVRvZ2dsZX0pID0+XHJcbntcclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgPGgzIGNsYXNzTmFtZT1cInRleHQtdHJ1bmNhdGUgdy0yMDBcIj5cclxuICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgIDwvaDM+XHJcbiAgPC9kaXY+XHJcbiAgPFNwZWFrZXJGYXZvdXJpdGUgZmF2b3VyaXRlPXtmYXZvcml0ZX0gb25GYXZvdXJpdGVUb2dnbGU9e29uRmF2b3VyaXRlVG9nZ2xlfSAvPlxyXG4gIDxkaXY+XHJcbiAgICA8cD57YmlvfSB7Y29tcGFueX0ge3R3aXR0ZXJIYW5kbGV9IHtmYXZvcml0ZX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2Pik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyICh7c3BlYWtlciwgb25GYXZvdXJpdGVUb2dnbGV9KVxyXG57XHJcbiAgY29uc3QgeyBpZCwgZmlyc3QsIGxhc3QsIHNlc3Npb25zIH0gPSBzcGVha2VyO1xyXG4gIGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTYgY29sLWxnLTYgY29sLXNtLTEyIGNvbC14cy0xMlwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLWhlaWdodCBwLTQgbXQtNFwiPlxyXG4gICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICA8U3BlYWtlckRlbW8gey4uLnNwZWFrZXJ9IG9uRmF2b3VyaXRlVG9nZ2xlPXtvbkZhdm91cml0ZVRvZ2dsZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICAgeyBzaG93U2Vzc2lvbnMgPT09IHRydWUgPyA8U2Vzc2lvbnMgc2Vzc2lvbnM9e3Nlc3Npb25zfSAvPiA6IG51bGwgfVxyXG4gICAgXHJcbjwvZGl2Pik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNwZWFrZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJTZXNzaW9uIiwidGl0bGUiLCJyb29tIiwic3BhbiIsImNsYXNzTmFtZSIsInN0cm9uZyIsIm5hbWUiLCJTZXNzaW9ucyIsInNlc3Npb25zIiwiZXZlbnRZZWFyIiwiZGl2IiwiZmlsdGVyIiwic2Vzc2lvbiIsIm1hcCIsImlkIiwiU3BlYWtlckltYWdlIiwiZmlyc3QiLCJsYXN0IiwiaW1nIiwic3JjIiwid2lkdGgiLCJhbHQiLCJTcGVha2VyRmF2b3VyaXRlIiwiZmF2b3VyaXRlIiwib25GYXZvdXJpdGVUb2dnbGUiLCJkb25lQ2FsbGJhY2siLCJzZXRJblRyYW5zaXRpb24iLCJpblRyYW5zaXRpb24iLCJvbkNsaWNrIiwiaSIsIlNwZWFrZXJEZW1vIiwiYmlvIiwiY29tcGFueSIsInR3aXR0ZXJIYW5kbGUiLCJmYXZvcml0ZSIsImgzIiwicCIsIlNwZWFrZXIiLCJzcGVha2VyIiwic2hvd1Nlc3Npb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Speaker.js\n");

/***/ })

});