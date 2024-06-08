"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport default from dynamic */ _AppBar__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Avatar: () => (/* reexport default from dynamic */ _Avatar__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Button: () => (/* reexport default from dynamic */ _Button__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Drawer: () => (/* reexport default from dynamic */ _Drawer__WEBPACK_IMPORTED_MODULE_5___default.a),\n/* harmony export */   IconButton: () => (/* reexport default from dynamic */ _IconButton__WEBPACK_IMPORTED_MODULE_6___default.a),\n/* harmony export */   List: () => (/* reexport default from dynamic */ _List__WEBPACK_IMPORTED_MODULE_7___default.a),\n/* harmony export */   ListItem: () => (/* reexport default from dynamic */ _ListItem__WEBPACK_IMPORTED_MODULE_8___default.a),\n/* harmony export */   ListItemIcon: () => (/* reexport default from dynamic */ _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a),\n/* harmony export */   ListItemText: () => (/* reexport default from dynamic */ _ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a),\n/* harmony export */   Toolbar: () => (/* reexport default from dynamic */ _Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_12___default.a),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_14__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ \"./node_modules/@mui/material/node/Avatar/index.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CssBaseline */ \"./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drawer */ \"./node_modules/@mui/material/node/Drawer/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Drawer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconButton */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ \"./node_modules/@mui/material/node/List/index.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItem */ \"./node_modules/@mui/material/node/ListItem/index.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ListItem__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemIcon */ \"./node_modules/@mui/material/node/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListItemText */ \"./node_modules/@mui/material/node/ListItemText/index.js\");\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ListItemText__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Toolbar */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Toolbar__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n/* harmony import */ var _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQXZhdGFyLEJveCxCdXR0b24sQ3NzQmFzZWxpbmUsRHJhd2VyLEljb25CdXR0b24sTGlzdCxMaXN0SXRlbSxMaXN0SXRlbUljb24sTGlzdEl0ZW1UZXh0LFRvb2xiYXIsVHlwb2dyYXBoeSx1c2VNZWRpYVF1ZXJ5LHVzZVRoZW1lIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QztBQUNBO0FBQ047QUFDTTtBQUNVO0FBQ1Y7QUFDUTtBQUNaO0FBQ1E7QUFDUTtBQUNBO0FBQ1Y7QUFDTTtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/N2UxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtdWkvbWF0ZXJpYWwgdjUuMTUuMTlcbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovIC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi8gXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhciB9IGZyb20gXCIuL0F2YXRhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmVcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmF3ZXIgfSBmcm9tIFwiLi9EcmF3ZXJcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQnV0dG9uIH0gZnJvbSBcIi4vSWNvbkJ1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tIFwiLi9MaXN0XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW0gfSBmcm9tIFwiLi9MaXN0SXRlbVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtSWNvbiB9IGZyb20gXCIuL0xpc3RJdGVtSWNvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtVGV4dCB9IGZyb20gXCIuL0xpc3RJdGVtVGV4dFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vdXNlTWVkaWFRdWVyeVwiXG5leHBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIvVXNlcnMvZGVuaXNldnNlZXYvRGVza3RvcC92aWN0b3J1bS1wb3J0YWwvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n/* harmony import */ var _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsdXNlTWVkaWFRdWVyeSx1c2VUaGVtZSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/ZTBkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtdWkvbWF0ZXJpYWwgdjUuMTUuMTlcbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovIC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi8gXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiLi91c2VNZWRpYVF1ZXJ5XCJcbmV4cG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi9Vc2Vycy9kZW5pc2V2c2Vldi9EZXNrdG9wL3ZpY3RvcnVtLXBvcnRhbC9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Inbox */ \"@mui/icons-material/Inbox\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"@mui/icons-material/Mail\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.js\");\n\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Layout = ({ children })=>{\n    const theme = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.useTheme)();\n    const isMobile = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(theme.breakpoints.down(\"sm\"));\n    const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const links = [\n        {\n            text: \"Victorum Group\",\n            href: \"https://victorum-group.com\"\n        },\n        {\n            text: \"Victorum Trade\",\n            href: \"https://victorum-trade.com\"\n        },\n        {\n            text: \"FAQ\",\n            href: \"https://victorum-faq.com\"\n        }\n    ];\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const handleDrawerToggle = ()=>{\n        setMobileOpen(!mobileOpen);\n    };\n    const drawer = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        sx: {\n            overflow: \"auto\",\n            backgroundImage: \"url(/images/sidebar_background.png)\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {\n            children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItem, {\n                    button: true,\n                    component: \"a\",\n                    href: link.href,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemIcon, {\n                            children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 33,\n                                columnNumber: 48\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 33,\n                                columnNumber: 64\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.ListItemText, {\n                            primary: link.text\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, link.text, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 31,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.AppBar, {\n                position: \"fixed\",\n                sx: {\n                    zIndex: (theme)=>theme.zIndex.drawer + 1,\n                    width: \"100%\",\n                    backgroundImage: \"url(/images/img.png)\",\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"center\",\n                    height: isMobile ? \"60px\" : \"80px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Toolbar, {\n                    children: [\n                        isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.IconButton, {\n                            color: \"inherit\",\n                            \"aria-label\": \"open drawer\",\n                            edge: \"start\",\n                            onClick: handleDrawerToggle,\n                            sx: {\n                                mr: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                            sx: {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                height: \"100%\",\n                                flexGrow: 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                    alt: \"User Avatar\",\n                                    src: session.user.image,\n                                    sx: {\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    sx: {\n                                        color: \"white\",\n                                        textShadow: \"1px 1px 2px black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                    sx: {\n                                        color: \"white\",\n                                        textShadow: \"1px 1px 2px black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/signup\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                                        sx: {\n                                            color: \"white\",\n                                            textShadow: \"1px 1px 2px black\"\n                                        },\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Drawer, {\n                variant: isMobile ? \"temporary\" : \"permanent\",\n                open: isMobile ? mobileOpen : true,\n                onClose: handleDrawerToggle,\n                ModalProps: {\n                    keepMounted: true\n                },\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    [`& .MuiDrawer-paper`]: {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        mt: isMobile ? \"60px\" : \"80px\"\n                    }\n                },\n                children: drawer\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    bgcolor: \"background.default\",\n                    p: 3,\n                    ml: {\n                        sm: `${drawerWidth}px`\n                    },\n                    mt: isMobile ? \"60px\" : \"80px\"\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDK0k7QUFDckk7QUFDRjtBQUNBO0FBQ2M7QUFDakM7QUFDSDtBQUUxQixNQUFNeUIsY0FBYztBQUVwQixNQUFNQyxTQUFTLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3hCLE1BQU1DLFFBQVFiLHNOQUFRQTtJQUN0QixNQUFNYyxXQUFXZiwyTkFBYUEsQ0FBQ2MsTUFBTUUsV0FBVyxDQUFDQyxJQUFJLENBQUM7SUFDdEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdoQywrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNaUMsUUFBUTtRQUNWO1lBQUVDLE1BQU07WUFBa0JDLE1BQU07UUFBNkI7UUFDN0Q7WUFBRUQsTUFBTTtZQUFrQkMsTUFBTTtRQUE2QjtRQUM3RDtZQUFFRCxNQUFNO1lBQU9DLE1BQU07UUFBMkI7S0FDbkQ7SUFDRCxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHaEIsMkRBQVVBO0lBRXBDLE1BQU1pQixxQkFBcUI7UUFDdkJOLGNBQWMsQ0FBQ0Q7SUFDbkI7SUFFQSxNQUFNUSx1QkFDRiw4REFBQzdCLDZNQUFHQTtRQUFDOEIsSUFBSTtZQUFFQyxVQUFVO1lBQVFDLGlCQUFpQjtZQUF1Q0MsZ0JBQWdCO1lBQVNDLG9CQUFvQjtZQUFVQyxRQUFRO1FBQU87a0JBQ3ZKLDRFQUFDdkMsOE1BQUlBO3NCQUNBMkIsTUFBTWEsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDekMsa05BQVFBO29CQUFDMEMsTUFBTTtvQkFBaUJDLFdBQVU7b0JBQUlmLE1BQU1ZLEtBQUtaLElBQUk7O3NDQUMxRCw4REFBQzNCLHNOQUFZQTtzQ0FDUndDLFFBQVEsTUFBTSxrQkFBSSw4REFBQ2hDLGtFQUFTQTs7OzswREFBTSw4REFBQ0MsaUVBQVFBOzs7Ozs7Ozs7O3NDQUVoRCw4REFBQ1Isc05BQVlBOzRCQUFDMEMsU0FBU0osS0FBS2IsSUFBSTs7Ozs7OzttQkFKZGEsS0FBS2IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0lBVy9DLHFCQUNJLDhEQUFDeEIsNk1BQUdBO1FBQUM4QixJQUFJO1lBQUVZLFNBQVM7UUFBTzs7MEJBQ3ZCLDhEQUFDekMscU5BQVdBOzs7OzswQkFDWiw4REFBQ1YsZ05BQU1BO2dCQUNIb0QsVUFBUztnQkFDVGIsSUFBSTtvQkFDQWMsUUFBUSxDQUFDM0IsUUFBVUEsTUFBTTJCLE1BQU0sQ0FBQ2YsTUFBTSxHQUFHO29CQUN6Q2dCLE9BQU87b0JBQ1BiLGlCQUFpQjtvQkFDakJDLGdCQUFnQjtvQkFDaEJDLG9CQUFvQjtvQkFDcEJDLFFBQVFqQixXQUFXLFNBQVM7Z0JBQ2hDOzBCQUVBLDRFQUFDMUIsaU5BQU9BOzt3QkFDSDBCLDBCQUNHLDhEQUFDYixvTkFBVUE7NEJBQ1B5QyxPQUFNOzRCQUNOQyxjQUFXOzRCQUNYQyxNQUFLOzRCQUNMQyxTQUFTckI7NEJBQ1RFLElBQUk7Z0NBQUVvQixJQUFJOzRCQUFFO3NDQUVaLDRFQUFDMUMsaUVBQVFBOzs7Ozs7Ozs7O3NDQUdqQiw4REFBQ1IsNk1BQUdBOzRCQUFDOEIsSUFBSTtnQ0FBRVksU0FBUztnQ0FBUVMsWUFBWTtnQ0FBVWhCLFFBQVE7Z0NBQVFpQixVQUFVOzRCQUFFO3NDQUMxRSw0RUFBQ3ZDLDZDQUFJQTs7Ozs7Ozs7Ozt3QkFFUmMsd0JBQ0c7OzhDQUNJLDhEQUFDakMsZ05BQU1BO29DQUFDMkQsS0FBSTtvQ0FBY0MsS0FBSzNCLFFBQVE0QixJQUFJLENBQUNDLEtBQUs7b0NBQUUxQixJQUFJO3dDQUFFb0IsSUFBSTtvQ0FBRTs7Ozs7OzhDQUMvRCw4REFBQ2hELGdOQUFNQTtvQ0FBQzRCLElBQUk7d0NBQUVnQixPQUFPO3dDQUFTVyxZQUFZO29DQUFvQjtvQ0FBR1IsU0FBUyxJQUFNdkMsd0RBQU9BOzhDQUFJOzs7Ozs7O3lEQUcvRjs7OENBQ0ksOERBQUNSLGdOQUFNQTtvQ0FBQzRCLElBQUk7d0NBQUVnQixPQUFPO3dDQUFTVyxZQUFZO29DQUFvQjtvQ0FBR1IsU0FBUyxJQUFNeEMsdURBQU1BOzhDQUFJOzs7Ozs7OENBQzFGLDhEQUFDRyxrREFBSUE7b0NBQUNhLE1BQUs7b0NBQVVpQyxRQUFROzhDQUN6Qiw0RUFBQ3hELGdOQUFNQTt3Q0FBQzRCLElBQUk7NENBQUVnQixPQUFPOzRDQUFTVyxZQUFZO3dDQUFvQjtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1yRiw4REFBQzlELGdOQUFNQTtnQkFDSGdFLFNBQVN6QyxXQUFXLGNBQWM7Z0JBQ2xDMEMsTUFBTTFDLFdBQVdHLGFBQWE7Z0JBQzlCd0MsU0FBU2pDO2dCQUNUa0MsWUFBWTtvQkFDUkMsYUFBYTtnQkFDakI7Z0JBQ0FqQyxJQUFJO29CQUNBZSxPQUFPL0I7b0JBQ1BrRCxZQUFZO29CQUNaLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7d0JBQUVuQixPQUFPL0I7d0JBQWFtRCxXQUFXO3dCQUFjQyxJQUFJaEQsV0FBVyxTQUFTO29CQUFPO2dCQUMxRzswQkFFQ1c7Ozs7OzswQkFFTCw4REFBQzdCLDZNQUFHQTtnQkFDQXdDLFdBQVU7Z0JBQ1ZWLElBQUk7b0JBQUVzQixVQUFVO29CQUFHZSxTQUFTO29CQUFzQkMsR0FBRztvQkFBR0MsSUFBSTt3QkFBRUMsSUFBSSxDQUFDLEVBQUV4RCxZQUFZLEVBQUUsQ0FBQztvQkFBQztvQkFBR29ELElBQUloRCxXQUFXLFNBQVM7Z0JBQU87MEJBRXRIRjs7Ozs7Ozs7Ozs7O0FBSWpCO0FBRUEsaUVBQWVELE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQXZhdGFyLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgQm94LCBDc3NCYXNlbGluZSwgQnV0dG9uLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luYm94JztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01haWwnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xuICAgIGNvbnN0IFttb2JpbGVPcGVuLCBzZXRNb2JpbGVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBsaW5rcyA9IFtcbiAgICAgICAgeyB0ZXh0OiAnVmljdG9ydW0gR3JvdXAnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1ncm91cC5jb20nIH0sXG4gICAgICAgIHsgdGV4dDogJ1ZpY3RvcnVtIFRyYWRlJywgaHJlZjogJ2h0dHBzOi8vdmljdG9ydW0tdHJhZGUuY29tJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1mYXEuY29tJyB9XG4gICAgXTtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRyYXdlciA9IChcbiAgICAgICAgPEJveCBzeD17eyBvdmVyZmxvdzogJ2F1dG8nLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2ltYWdlcy9zaWRlYmFyX2JhY2tncm91bmQucG5nKScsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtsaW5rLnRleHR9IGNvbXBvbmVudD1cImFcIiBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9pbWFnZXMvaW1nLnBuZyknLCAvLyDQv9GD0YLRjCDQuiDQstCw0YjQtdC80YMg0LjQt9C+0LHRgNCw0LbQtdC90LjRjlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpc01vYmlsZSA/ICc2MHB4JyA6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJywgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiVXNlciBBdmF0YXJcIiBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gc3g9e3sgbXI6IDIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0U2hhZG93OiAnMXB4IDFweCAycHggYmxhY2snIH19IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17eyBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJzFweCAxcHggMnB4IGJsYWNrJyB9fSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0U2hhZG93OiAnMXB4IDFweCAycHggYmxhY2snIH19PlNpZ24gVXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtpc01vYmlsZSA/IFwidGVtcG9yYXJ5XCIgOiBcInBlcm1hbmVudFwifVxuICAgICAgICAgICAgICAgIG9wZW49e2lzTW9iaWxlID8gbW9iaWxlT3BlbiA6IHRydWV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgICAgW2AmIC5NdWlEcmF3ZXItcGFwZXJgXTogeyB3aWR0aDogZHJhd2VyV2lkdGgsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtdDogaXNNb2JpbGUgPyAnNjBweCcgOiAnODBweCcgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkcmF3ZXJ9XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgYmdjb2xvcjogJ2JhY2tncm91bmQuZGVmYXVsdCcsIHA6IDMsIG1sOiB7IHNtOiBgJHtkcmF3ZXJXaWR0aH1weGAgfSwgbXQ6IGlzTW9iaWxlID8gJzYwcHgnIDogJzgwcHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiQm94IiwiQ3NzQmFzZWxpbmUiLCJCdXR0b24iLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJJY29uQnV0dG9uIiwiSW5ib3hJY29uIiwiTWFpbEljb24iLCJNZW51SWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiTGluayIsIkxvZ28iLCJkcmF3ZXJXaWR0aCIsIkxheW91dCIsImNoaWxkcmVuIiwidGhlbWUiLCJpc01vYmlsZSIsImJyZWFrcG9pbnRzIiwiZG93biIsIm1vYmlsZU9wZW4iLCJzZXRNb2JpbGVPcGVuIiwibGlua3MiLCJ0ZXh0IiwiaHJlZiIsImRhdGEiLCJzZXNzaW9uIiwiaGFuZGxlRHJhd2VyVG9nZ2xlIiwiZHJhd2VyIiwic3giLCJvdmVyZmxvdyIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVpZ2h0IiwibWFwIiwibGluayIsImluZGV4IiwiYnV0dG9uIiwiY29tcG9uZW50IiwicHJpbWFyeSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInpJbmRleCIsIndpZHRoIiwiY29sb3IiLCJhcmlhLWxhYmVsIiwiZWRnZSIsIm9uQ2xpY2siLCJtciIsImFsaWduSXRlbXMiLCJmbGV4R3JvdyIsImFsdCIsInNyYyIsInVzZXIiLCJpbWFnZSIsInRleHRTaGFkb3ciLCJwYXNzSHJlZiIsInZhcmlhbnQiLCJvcGVuIiwib25DbG9zZSIsIk1vZGFsUHJvcHMiLCJrZWVwTW91bnRlZCIsImZsZXhTaHJpbmsiLCJib3hTaXppbmciLCJtdCIsImJnY29sb3IiLCJwIiwibWwiLCJzbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nfunction Logo() {\n    const theme = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    const isMobile = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down(\"sm\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            height: isMobile ? \"40px\" : \"65px\",\n            display: \"flex\",\n            alignItems: \"center\",\n            marginTop: \"0.6rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/logo.png\",\n            alt: \"Logo\",\n            layout: \"intrinsic\",\n            width: isMobile ? 150 : 220,\n            height: isMobile ? 40 : 65\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Logo.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Logo.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ28uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFDaUM7QUFFNUMsU0FBU0s7SUFDcEIsTUFBTUMsUUFBUUYsd0dBQVFBO0lBQ3RCLE1BQU1HLFdBQVdKLDZHQUFhQSxDQUFDRyxNQUFNRSxXQUFXLENBQUNDLElBQUksQ0FBQztJQUN0RCxxQkFDSSw4REFBQ1AsK0ZBQUdBO1FBQUNRLElBQUk7WUFBRUMsUUFBUUosV0FBVyxTQUFTO1lBQVFLLFNBQVM7WUFBUUMsWUFBWTtZQUFVQyxXQUFXO1FBQVM7a0JBQ3RHLDRFQUFDZCxtREFBS0E7WUFBQ2UsS0FBSTtZQUFZQyxLQUFJO1lBQU9DLFFBQU87WUFBWUMsT0FBT1gsV0FBVyxNQUFNO1lBQUtJLFFBQVFKLFdBQVcsS0FBSzs7Ozs7Ozs7Ozs7QUFHdEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9jb21wb25lbnRzL0xvZ28uanM/NDRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Qm94LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiBpc01vYmlsZSA/ICc0MHB4JyA6ICc2NXB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMC42cmVtJyB9fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgd2lkdGg9e2lzTW9iaWxlID8gMTUwIDogMjIwfSBoZWlnaHQ9e2lzTW9iaWxlID8gNDAgOiA2NX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiQm94IiwidXNlTWVkaWFRdWVyeSIsInVzZVRoZW1lIiwiTG9nbyIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJzeCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Logo.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    const isSignUpPage = Component.name === \"SignUp\";\n    let a = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: isSignUpPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n            lineNumber: 13,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n            lineNumber: 15,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNSO0FBRTFDLE1BQU1HLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUVuQyxNQUFNQyxlQUFlRixVQUFVRyxJQUFJLEtBQUs7SUFDeEMsSUFBSUMsSUFBSTtJQUVSLHFCQUNJLDhEQUFDUCw0REFBZUE7UUFBQ1EsU0FBU0osVUFBVUksT0FBTztrQkFDdENILDZCQUNHLDhEQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7O3NDQUV4Qiw4REFBQ0gsMERBQU1BO3NCQUNILDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cbiAgICBjb25zdCBpc1NpZ25VcFBhZ2UgPSBDb21wb25lbnQubmFtZSA9PT0gXCJTaWduVXBcIlxuICAgIGxldCBhID0gMFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICAgICAgICB7aXNTaWduVXBQYWdlID8gKFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlc3Npb25Qcm92aWRlciIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNTaWduVXBQYWdlIiwibmFtZSIsImEiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@mui/base/ClassNameGenerator":
/*!***********************************************!*\
  !*** external "@mui/base/ClassNameGenerator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/base/ClassNameGenerator");

/***/ }),

/***/ "@mui/base/FocusTrap":
/*!**************************************!*\
  !*** external "@mui/base/FocusTrap" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/base/FocusTrap");

/***/ }),

/***/ "@mui/base/Portal":
/*!***********************************!*\
  !*** external "@mui/base/Portal" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/base/Portal");

/***/ }),

/***/ "@mui/base/unstable_useModal":
/*!**********************************************!*\
  !*** external "@mui/base/unstable_useModal" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/base/unstable_useModal");

/***/ }),

/***/ "@mui/base/utils":
/*!**********************************!*\
  !*** external "@mui/base/utils" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@mui/base/utils");

/***/ }),

/***/ "@mui/icons-material/Inbox":
/*!********************************************!*\
  !*** external "@mui/icons-material/Inbox" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Inbox");

/***/ }),

/***/ "@mui/icons-material/Mail":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Mail" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/RtlProvider":
/*!******************************************!*\
  !*** external "@mui/system/RtlProvider" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/RtlProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useMediaQuery":
/*!********************************************!*\
  !*** external "@mui/system/useMediaQuery" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useMediaQuery");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/HTMLElementType":
/*!*********************************************!*\
  !*** external "@mui/utils/HTMLElementType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/HTMLElementType");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/chainPropTypes":
/*!********************************************!*\
  !*** external "@mui/utils/chainPropTypes" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/chainPropTypes");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementAcceptingRef":
/*!*************************************************!*\
  !*** external "@mui/utils/elementAcceptingRef" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementAcceptingRef");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/integerPropType":
/*!*********************************************!*\
  !*** external "@mui/utils/integerPropType" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/integerPropType");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useIsFocusVisible":
/*!***********************************************!*\
  !*** external "@mui/utils/useIsFocusVisible" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useIsFocusVisible");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();