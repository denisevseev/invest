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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Inbox */ \"./node_modules/@mui/icons-material/Inbox.js\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"./node_modules/@mui/icons-material/Mail.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _SliderWithInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SliderWithInput */ \"./components/SliderWithInput.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n // Предполагаем, что компонент SliderWithInput находится в этой же директории\nconst drawerWidth = 240;\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const links = [\n        {\n            text: \"Victorum Group\",\n            href: \"https://victorum-group.com\"\n        },\n        {\n            text: \"Victorum Trade\",\n            href: \"https://victorum-trade.com\"\n        },\n        {\n            text: \"FAQ\",\n            href: \"https://victorum-faq.com\"\n        }\n    ];\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.AppBar, {\n                position: \"fixed\",\n                sx: {\n                    zIndex: (theme)=>theme.zIndex.drawer + 1,\n                    width: \"100%\",\n                    backgroundColor: \"#ADD8E6\",\n                    height: \"80px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            src: \"/logo.png\",\n                            alt: \"Logo\",\n                            width: 200\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                            variant: \"h6\",\n                            noWrap: true,\n                            component: \"div\",\n                            sx: {\n                                flexGrow: 1,\n                                ml: 2\n                            },\n                            children: \"Victorum Market1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                    alt: \"User Avatar\",\n                                    src: session.user.image,\n                                    sx: {\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"inherit\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    color: \"inherit\",\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/signup\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                        color: \"inherit\",\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Drawer, {\n                variant: \"permanent\",\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    [\"& .MuiDrawer-paper\"]: {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        mt: \"80px\"\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Toolbar, {}, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        sx: {\n                            overflow: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.List, {\n                            children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItem, {\n                                    button: true,\n                                    component: \"a\",\n                                    href: link.href,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemIcon, {\n                                            children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 56\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 72\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {\n                                            primary: link.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, link.text, true, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    bgcolor: \"background.default\",\n                    p: 3,\n                    ml: \"\".concat(drawerWidth, \"px\"),\n                    mt: \"80px\"\n                },\n                children: [\n                    session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SliderWithInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 70,\n                        columnNumber: 29\n                    }, undefined),\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksR0FBZSxPQUFadkIsYUFBWTtvQkFBS2dDLElBQUk7Z0JBQU87O29CQUUxRnpCLHlCQUFXLDhEQUFDUix3REFBZUE7Ozs7O29CQUMzQkc7Ozs7Ozs7Ozs7Ozs7QUFJakI7R0EvRE1EOztRQU13QkwsdURBQVVBOzs7S0FObENLO0FBaUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQXZhdGFyLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgQm94LCBDc3NCYXNlbGluZSwgQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbCc7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBTbGlkZXJXaXRoSW5wdXQgZnJvbSAnLi9TbGlkZXJXaXRoSW5wdXQnOyAvLyDQn9GA0LXQtNC/0L7Qu9Cw0LPQsNC10LwsINGH0YLQviDQutC+0LzQv9C+0L3QtdC90YIgU2xpZGVyV2l0aElucHV0INC90LDRhdC+0LTQuNGC0YHRjyDQsiDRjdGC0L7QuSDQttC1INC00LjRgNC10LrRgtC+0YDQuNC4XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBbXG4gICAgICAgIHsgdGV4dDogJ1ZpY3RvcnVtIEdyb3VwJywgaHJlZjogJ2h0dHBzOi8vdmljdG9ydW0tZ3JvdXAuY29tJyB9LFxuICAgICAgICB7IHRleHQ6ICdWaWN0b3J1bSBUcmFkZScsIGhyZWY6ICdodHRwczovL3ZpY3RvcnVtLXRyYWRlLmNvbScgfSxcbiAgICAgICAgeyB0ZXh0OiAnRkFRJywgaHJlZjogJ2h0dHBzOi8vdmljdG9ydW0tZmFxLmNvbScgfVxuICAgIF07XG4gICAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgc3g9e3sgekluZGV4OiAodGhlbWUpID0+IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLCB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjQUREOEU2JywgaGVpZ2h0OiAnODBweCcgfX0+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgd2lkdGg9ezIwMH0vPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEsIG1sOiAyIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgVmljdG9ydW0gTWFya2V0MVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlVzZXIgQXZhdGFyXCIgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9IHN4PXt7IG1yOiAyIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCkgPT4gc2lnbkluKCl9PkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgICAgICA8RHJhd2VyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxuICAgICAgICAgICAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgICAgICAgICAgICBbYCYgLk11aURyYXdlci1wYXBlcmBdOiB7IHdpZHRoOiBkcmF3ZXJXaWR0aCwgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIG10OiAnODBweCcgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyIC8+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBvdmVyZmxvdzogJ2F1dG8nIH19PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBrZXk9e2xpbmsudGV4dH0gY29tcG9uZW50PVwiYVwiIGhyZWY9e2xpbmsuaHJlZn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17bGluay50ZXh0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9EcmF3ZXI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXG4gICAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEsIGJnY29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLCBwOiAzLCBtbDogYCR7ZHJhd2VyV2lkdGh9cHhgLCBtdDogJzgwcHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3Nlc3Npb24gJiYgPFNsaWRlcldpdGhJbnB1dCAvPn1cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiQm94IiwiQ3NzQmFzZWxpbmUiLCJCdXR0b24iLCJJbmJveEljb24iLCJNYWlsSWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiTGluayIsIkltYWdlIiwiU2xpZGVyV2l0aElucHV0IiwiZHJhd2VyV2lkdGgiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImxpbmtzIiwidGV4dCIsImhyZWYiLCJkYXRhIiwic2Vzc2lvbiIsInN4IiwiZGlzcGxheSIsInBvc2l0aW9uIiwiekluZGV4IiwidGhlbWUiLCJkcmF3ZXIiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsInNyYyIsImFsdCIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJmbGV4R3JvdyIsIm1sIiwidXNlciIsImltYWdlIiwibXIiLCJjb2xvciIsIm9uQ2xpY2siLCJwYXNzSHJlZiIsImZsZXhTaHJpbmsiLCJib3hTaXppbmciLCJtdCIsIm92ZXJmbG93IiwibWFwIiwibGluayIsImluZGV4IiwiYnV0dG9uIiwicHJpbWFyeSIsImJnY29sb3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});