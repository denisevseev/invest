"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Inbox */ \"./node_modules/@mui/icons-material/Inbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.AppBar, {\n                position: \"fixed\",\n                sx: {\n                    zIndex: (theme)=>theme.zIndex.drawer + 1,\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/logo.png\",\n                            alt: \"Logo\",\n                            width: 200,\n                            height: 40\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n                            variant: \"h6\",\n                            noWrap: true,\n                            component: \"div\",\n                            sx: {\n                                flexGrow: 1,\n                                ml: 2\n                            },\n                            children: \"Victorum Market1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                                    alt: \"User Avatar\",\n                                    src: session.user.image,\n                                    sx: {\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    color: \"inherit\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    color: \"inherit\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/signup\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        color: \"inherit\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Drawer, {\n                variant: \"permanent\",\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    [\"& .MuiDrawer-paper\"]: {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        mt: \"64px\"\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Toolbar, {}, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        sx: {\n                            overflow: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.List, {\n                            children: [\n                                \"Inbox\",\n                                \"Starred\",\n                                \"Send email\",\n                                \"FAQ\"\n                            ].map((text, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                    button: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemIcon, {\n                                            children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 56\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 72\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.ListItemText, {\n                                            primary: text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, text, true, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    bgcolor: \"background.default\",\n                    p: 3,\n                    ml: \"\".concat(drawerWidth, \"px\"),\n                    mt: \"64px\"\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3dIO0FBQ2hHO0FBQ0Y7QUFDYztBQUNqQztBQUNFO0FBRS9CLE1BQU1vQixjQUFjO0FBRXBCLE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3hCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdQLDJEQUFVQTtJQUVwQyxxQkFDSSw4REFBQ1AsMktBQUdBO1FBQUNlLElBQUk7WUFBRUMsU0FBUztRQUFPOzswQkFDdkIsOERBQUNmLG1MQUFXQTs7Ozs7MEJBQ1osOERBQUNWLDhLQUFNQTtnQkFBQzBCLFVBQVM7Z0JBQVFGLElBQUk7b0JBQUVHLFFBQVEsQ0FBQ0MsUUFBVUEsTUFBTUQsTUFBTSxDQUFDRSxNQUFNLEdBQUc7b0JBQUdDLE9BQU87Z0JBQU87MEJBQ3JGLDRFQUFDN0IsK0tBQU9BOztzQ0FDSiw4REFBQ2lCLG1EQUFLQTs0QkFBQ2EsS0FBSTs0QkFBWUMsS0FBSTs0QkFBT0YsT0FBTzs0QkFBS0csUUFBUTs7Ozs7O3NDQUN0RCw4REFBQy9CLGtMQUFVQTs0QkFBQ2dDLFNBQVE7NEJBQUtDLE1BQU07NEJBQUNDLFdBQVU7NEJBQU1aLElBQUk7Z0NBQUVhLFVBQVU7Z0NBQUdDLElBQUk7NEJBQUU7c0NBQUc7Ozs7Ozt3QkFHM0VmLHdCQUNHOzs4Q0FDSSw4REFBQ3BCLDhLQUFNQTtvQ0FBQzZCLEtBQUk7b0NBQWNELEtBQUtSLFFBQVFnQixJQUFJLENBQUNDLEtBQUs7b0NBQUVoQixJQUFJO3dDQUFFaUIsSUFBSTtvQ0FBRTs7Ozs7OzhDQUMvRCw4REFBQzlCLDhLQUFNQTtvQ0FBQytCLE9BQU07b0NBQVVDLFNBQVMsSUFBTTVCLHdEQUFPQTs4Q0FBSTs7Ozs7Ozt5REFHdEQ7OzhDQUNJLDhEQUFDSiw4S0FBTUE7b0NBQUMrQixPQUFNO29DQUFVQyxTQUFTLElBQU03Qix1REFBTUE7OENBQUk7Ozs7Ozs4Q0FDakQsOERBQUNHLGtEQUFJQTtvQ0FBQzJCLE1BQUs7b0NBQVVDLFFBQVE7OENBQ3pCLDRFQUFDbEMsOEtBQU1BO3dDQUFDK0IsT0FBTTtrREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU01Qyw4REFBQ3RDLDhLQUFNQTtnQkFDSDhCLFNBQVE7Z0JBQ1JWLElBQUk7b0JBQ0FNLE9BQU9YO29CQUNQMkIsWUFBWTtvQkFDWixDQUFFLHFCQUFvQixFQUFFO3dCQUFFaEIsT0FBT1g7d0JBQWE0QixXQUFXO3dCQUFjQyxJQUFJO29CQUFPO2dCQUN0Rjs7a0NBRUEsOERBQUMvQywrS0FBT0E7Ozs7O2tDQUNSLDhEQUFDUSwyS0FBR0E7d0JBQUNlLElBQUk7NEJBQUV5QixVQUFVO3dCQUFPO2tDQUN4Qiw0RUFBQzVDLDRLQUFJQTtzQ0FDQTtnQ0FBQztnQ0FBUztnQ0FBVztnQ0FBYzs2QkFBTSxDQUFDNkMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNsRCw4REFBQzlDLGdMQUFRQTtvQ0FBQytDLE1BQU07O3NEQUNaLDhEQUFDOUMsb0xBQVlBO3NEQUNSNkMsUUFBUSxNQUFNLGtCQUFJLDhEQUFDeEMsaUVBQVNBOzs7OzBFQUFNLDhEQUFDQyxnRUFBUUE7Ozs7Ozs7Ozs7c0RBRWhELDhEQUFDTCxvTEFBWUE7NENBQUM4QyxTQUFTSDs7Ozs7OzttQ0FKTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFVdEMsOERBQUMxQywyS0FBR0E7Z0JBQ0EyQixXQUFVO2dCQUNWWixJQUFJO29CQUFFYSxVQUFVO29CQUFHa0IsU0FBUztvQkFBc0JDLEdBQUc7b0JBQUdsQixJQUFJLEdBQWUsT0FBWm5CLGFBQVk7b0JBQUs2QixJQUFJO2dCQUFPOzBCQUUxRjNCOzs7Ozs7Ozs7Ozs7QUFJakI7R0F6RE1EOztRQUN3QkosdURBQVVBOzs7S0FEbENJO0FBMkROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQXZhdGFyLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgQm94LCBDc3NCYXNlbGluZSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbCc7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17eyB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0gaGVpZ2h0PXs0MH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgbm9XcmFwIGNvbXBvbmVudD1cImRpdlwiIHN4PXt7IGZsZXhHcm93OiAxLCBtbDogMiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFZpY3RvcnVtIE1hcmtldDFcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJVc2VyIEF2YXRhclwiIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSBzeD17eyBtcjogMiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+U2lnbiBVcDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgPERyYXdlclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgICAgW2AmIC5NdWlEcmF3ZXItcGFwZXJgXTogeyB3aWR0aDogZHJhd2VyV2lkdGgsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtdDogJzY0cHgnIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7WydJbmJveCcsICdTdGFycmVkJywgJ1NlbmQgZW1haWwnLCAnRkFRJ10ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXt0ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCAlIDIgPT09IDAgPyA8SW5ib3hJY29uIC8+IDogPE1haWxJY29uIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEsIGJnY29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLCBwOiAzLCBtbDogYCR7ZHJhd2VyV2lkdGh9cHhgLCBtdDogJzY0cHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkF2YXRhciIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIkJveCIsIkNzc0Jhc2VsaW5lIiwiQnV0dG9uIiwiSW5ib3hJY29uIiwiTWFpbEljb24iLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxpbmsiLCJJbWFnZSIsImRyYXdlcldpZHRoIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJkYXRhIiwic2Vzc2lvbiIsInN4IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiekluZGV4IiwidGhlbWUiLCJkcmF3ZXIiLCJ3aWR0aCIsInNyYyIsImFsdCIsImhlaWdodCIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJmbGV4R3JvdyIsIm1sIiwidXNlciIsImltYWdlIiwibXIiLCJjb2xvciIsIm9uQ2xpY2siLCJocmVmIiwicGFzc0hyZWYiLCJmbGV4U2hyaW5rIiwiYm94U2l6aW5nIiwibXQiLCJvdmVyZmxvdyIsIm1hcCIsInRleHQiLCJpbmRleCIsImJ1dHRvbiIsInByaW1hcnkiLCJiZ2NvbG9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});