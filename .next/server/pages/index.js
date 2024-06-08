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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport default from dynamic */ _AppBar__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Avatar: () => (/* reexport default from dynamic */ _Avatar__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Button: () => (/* reexport default from dynamic */ _Button__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Drawer: () => (/* reexport default from dynamic */ _Drawer__WEBPACK_IMPORTED_MODULE_5___default.a),\n/* harmony export */   IconButton: () => (/* reexport default from dynamic */ _IconButton__WEBPACK_IMPORTED_MODULE_6___default.a),\n/* harmony export */   List: () => (/* reexport default from dynamic */ _List__WEBPACK_IMPORTED_MODULE_7___default.a),\n/* harmony export */   ListItem: () => (/* reexport default from dynamic */ _ListItem__WEBPACK_IMPORTED_MODULE_8___default.a),\n/* harmony export */   ListItemIcon: () => (/* reexport default from dynamic */ _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default.a),\n/* harmony export */   ListItemText: () => (/* reexport default from dynamic */ _ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a),\n/* harmony export */   Toolbar: () => (/* reexport default from dynamic */ _Toolbar__WEBPACK_IMPORTED_MODULE_11___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_12___default.a),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_13__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_14__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ \"./node_modules/@mui/material/node/Avatar/index.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CssBaseline */ \"./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drawer */ \"./node_modules/@mui/material/node/Drawer/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Drawer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconButton */ \"./node_modules/@mui/material/node/IconButton/index.js\");\n/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./List */ \"./node_modules/@mui/material/node/List/index.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItem */ \"./node_modules/@mui/material/node/ListItem/index.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ListItem__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemIcon */ \"./node_modules/@mui/material/node/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ListItemText */ \"./node_modules/@mui/material/node/ListItemText/index.js\");\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ListItemText__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Toolbar */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Toolbar__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n/* harmony import */ var _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQXZhdGFyLEJveCxCdXR0b24sQ3NzQmFzZWxpbmUsRHJhd2VyLEljb25CdXR0b24sTGlzdCxMaXN0SXRlbSxMaXN0SXRlbUljb24sTGlzdEl0ZW1UZXh0LFRvb2xiYXIsVHlwb2dyYXBoeSx1c2VNZWRpYVF1ZXJ5LHVzZVRoZW1lIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QztBQUNBO0FBQ047QUFDTTtBQUNVO0FBQ1Y7QUFDUTtBQUNaO0FBQ1E7QUFDUTtBQUNBO0FBQ1Y7QUFDTTtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/N2UxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtdWkvbWF0ZXJpYWwgdjUuMTUuMTlcbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovIC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi8gXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFwcEJhciB9IGZyb20gXCIuL0FwcEJhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhciB9IGZyb20gXCIuL0F2YXRhclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL0J1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIENzc0Jhc2VsaW5lIH0gZnJvbSBcIi4vQ3NzQmFzZWxpbmVcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmF3ZXIgfSBmcm9tIFwiLi9EcmF3ZXJcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJY29uQnV0dG9uIH0gZnJvbSBcIi4vSWNvbkJ1dHRvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tIFwiLi9MaXN0XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW0gfSBmcm9tIFwiLi9MaXN0SXRlbVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtSWNvbiB9IGZyb20gXCIuL0xpc3RJdGVtSWNvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtVGV4dCB9IGZyb20gXCIuL0xpc3RJdGVtVGV4dFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vdXNlTWVkaWFRdWVyeVwiXG5leHBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIvVXNlcnMvZGVuaXNldnNlZXYvRGVza3RvcC92aWN0b3J1bS1wb3J0YWwvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,Container,Grid,Paper,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js":
/*!******************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Container,Grid,Paper,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Grid: () => (/* reexport default from dynamic */ _Grid__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Paper: () => (/* reexport default from dynamic */ _Paper__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   Slider: () => (/* reexport default from dynamic */ _Slider__WEBPACK_IMPORTED_MODULE_4___default.a),\n/* harmony export */   TextField: () => (/* reexport default from dynamic */ _TextField__WEBPACK_IMPORTED_MODULE_5___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_6___default.a)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ \"./node_modules/@mui/material/node/Grid/index.js\");\n/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paper */ \"./node_modules/@mui/material/node/Paper/index.js\");\n/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Paper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Slider */ \"./node_modules/@mui/material/node/Slider/index.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Slider__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextField */ \"./node_modules/@mui/material/node/TextField/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsQ29udGFpbmVyLEdyaWQsUGFwZXIsU2xpZGVyLFRleHRGaWVsZCxUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNZO0FBQ1Y7QUFDRTtBQUNFO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz81MjUwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR3JpZCB9IGZyb20gXCIuL0dyaWRcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYXBlciB9IGZyb20gXCIuL1BhcGVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSBcIi4vVGV4dEZpZWxkXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Container,Grid,Paper,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js":
/*!*********************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Slider: () => (/* reexport default from dynamic */ _Slider__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   TextField: () => (/* reexport default from dynamic */ _TextField__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_3___default.a)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./node_modules/@mui/material/node/Slider/index.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./node_modules/@mui/material/node/TextField/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsU2xpZGVyLFRleHRGaWVsZCxUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNNO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz8yMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSBcIi4vVGV4dEZpZWxkXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n/* harmony import */ var _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsdXNlTWVkaWFRdWVyeSx1c2VUaGVtZSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NDO0FBQ29CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLy4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanM/ZTBkYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtdWkvbWF0ZXJpYWwgdjUuMTUuMTlcbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovIC8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHBvcnQgKi8gXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZU1lZGlhUXVlcnkgfSBmcm9tIFwiLi91c2VNZWRpYVF1ZXJ5XCJcbmV4cG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIi9Vc2Vycy9kZW5pc2V2c2Vldi9EZXNrdG9wL3ZpY3RvcnVtLXBvcnRhbC9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9zdHlsZXMvaW5kZXguanNcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Container,Typography!=!./node_modules/@mui/material/index.js":
/*!**********************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Typography!=!./node_modules/@mui/material/index.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_1___default.a)\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Db250YWluZXIsVHlwb2dyYXBoeSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz9lNGNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Container,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_index_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZpbmRleC5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ2hDO0FBQ0w7QUFDMUQ7QUFDb0Q7QUFDVjtBQUMxQztBQUM2QztBQUM3QztBQUNBLGlFQUFlLHdFQUFLLENBQUMsNENBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNENBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNENBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDRDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDRDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNENBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNENBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNENBQVE7QUFDekQ7QUFDTyx3QkFBd0IseUdBQWdCO0FBQy9DO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvPzE0M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSBhcHAgYW5kIGRvY3VtZW50IG1vZHVsZXMuXG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCBBcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlcy9pbmRleC5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwiZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IGhvaXN0KHVzZXJsYW5kLCBcInJlcG9ydFdlYlZpdGFsc1wiKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcInVuc3RhYmxlX2dldFN0YXRpY1Byb3BzXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGF0aHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zXCIpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVMsXG4gICAgICAgIHBhZ2U6IFwiL2luZGV4XCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./components/InvestmentCalculator.js":
/*!********************************************!*\
  !*** ./components/InvestmentCalculator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Container,Grid,Paper,Slider,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Container,Grid,Paper,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n\n\n\nconst InvestmentCalculator = ()=>{\n    const [investmentAmount, setInvestmentAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10000); // Default minimum investment\n    const [shareholdingPeriod, setShareholdingPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // Default minimum holding period in months\n    const [distributedDividend, setDistributedDividend] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(6.8); // Default dividend\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const calculateResult = ()=>{\n        if (investmentAmount && shareholdingPeriod) {\n            const totalDividend = investmentAmount * (distributedDividend / 100) * (shareholdingPeriod / 12);\n            const totalAmount = parseFloat(investmentAmount) + totalDividend;\n            setResult(totalAmount.toFixed(2));\n        }\n    };\n    const handleInvestmentChange = (e, newValue)=>{\n        setInvestmentAmount(newValue);\n        calculateResult();\n    };\n    const handlePeriodChange = (e, newValue)=>{\n        setShareholdingPeriod(newValue);\n        calculateResult();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        maxWidth: \"auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                variant: \"h5\",\n                align: \"center\",\n                gutterBottom: true,\n                children: \"Investment Calculator\"\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n                elevation: 3,\n                style: {\n                    padding: \"30px\",\n                    marginTop: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                        container: true,\n                        spacing: 2,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        id: \"investment-amount-slider\",\n                                        gutterBottom: true,\n                                        children: \"Investment Amount (USD/EUR)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                        value: investmentAmount,\n                                        onChange: handleInvestmentChange,\n                                        \"aria-labelledby\": \"investment-amount-slider\",\n                                        valueLabelDisplay: \"auto\",\n                                        step: 10000,\n                                        min: 10000,\n                                        max: 10000000\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                        value: investmentAmount,\n                                        onChange: (e)=>handleInvestmentChange(e, Number(e.target.value)),\n                                        fullWidth: true,\n                                        margin: \"normal\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                                        id: \"shareholding-period-slider\",\n                                        gutterBottom: true,\n                                        children: \"Anticipated shareholding period (months)\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Slider, {\n                                        value: shareholdingPeriod,\n                                        onChange: handlePeriodChange,\n                                        \"aria-labelledby\": \"shareholding-period-slider\",\n                                        valueLabelDisplay: \"auto\",\n                                        step: 1,\n                                        min: 1,\n                                        max: 48\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                        value: shareholdingPeriod,\n                                        onChange: (e)=>handlePeriodChange(e, Number(e.target.value)),\n                                        fullWidth: true,\n                                        margin: \"normal\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    label: \"Anticipated distributed dividend (%)\",\n                                    type: \"number\",\n                                    value: distributedDividend,\n                                    onChange: (e)=>setDistributedDividend(Number(e.target.value)),\n                                    fullWidth: true,\n                                    margin: \"normal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n                                item: true,\n                                xs: 12,\n                                sm: 6,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    label: \"Amount of Shares\",\n                                    type: \"number\",\n                                    value: investmentAmount / 1,\n                                    InputProps: {\n                                        readOnly: true\n                                    },\n                                    fullWidth: true,\n                                    margin: \"normal\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                                lineNumber: 85,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined),\n                    result && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        mt: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Container_Grid_Paper_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                            variant: \"h6\",\n                            align: \"center\",\n                            children: [\n                                \"Result: \",\n                                result,\n                                \" USD/EUR\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                        lineNumber: 99,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/InvestmentCalculator.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvestmentCalculator);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ludmVzdG1lbnRDYWxjdWxhdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDbUQ7QUFFM0YsTUFBTVMsdUJBQXVCO0lBQ3pCLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQUMsUUFBUSw2QkFBNkI7SUFDOUYsTUFBTSxDQUFDVyxvQkFBb0JDLHNCQUFzQixHQUFHWiwrQ0FBUUEsQ0FBQyxJQUFJLDJDQUEyQztJQUM1RyxNQUFNLENBQUNhLHFCQUFxQkMsdUJBQXVCLEdBQUdkLCtDQUFRQSxDQUFDLE1BQU0sbUJBQW1CO0lBQ3hGLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFckMsTUFBTWlCLGtCQUFrQjtRQUNwQixJQUFJUixvQkFBb0JFLG9CQUFvQjtZQUN4QyxNQUFNTyxnQkFBZ0IsbUJBQXFCTCxDQUFBQSxzQkFBc0IsR0FBRSxJQUFPRixDQUFBQSxxQkFBcUIsRUFBQztZQUNoRyxNQUFNUSxjQUFjQyxXQUFXWCxvQkFBb0JTO1lBQ25ERixVQUFVRyxZQUFZRSxPQUFPLENBQUM7UUFDbEM7SUFDSjtJQUVBLE1BQU1DLHlCQUF5QixDQUFDQyxHQUFHQztRQUMvQmQsb0JBQW9CYztRQUNwQlA7SUFDSjtJQUVBLE1BQU1RLHFCQUFxQixDQUFDRixHQUFHQztRQUMzQlosc0JBQXNCWTtRQUN0QlA7SUFDSjtJQUVBLHFCQUNJLDhEQUFDaEIsK0hBQVNBO1FBQUN5QixVQUFTOzswQkFDaEIsOERBQUN2QixnSUFBVUE7Z0JBQUN3QixTQUFRO2dCQUFLQyxPQUFNO2dCQUFTQyxZQUFZOzBCQUFDOzs7Ozs7MEJBR3JELDhEQUFDeEIsMkhBQUtBO2dCQUFDeUIsV0FBVztnQkFBR0MsT0FBTztvQkFBRUMsU0FBUztvQkFBUUMsV0FBVztnQkFBTzs7a0NBQzdELDhEQUFDM0IsMEhBQUlBO3dCQUFDNEIsU0FBUzt3QkFBQ0MsU0FBUzs7MENBQ3JCLDhEQUFDN0IsMEhBQUlBO2dDQUFDOEIsSUFBSTtnQ0FBQ0MsSUFBSTtnQ0FBSUMsSUFBSTs7a0RBQ25CLDhEQUFDbkMsZ0lBQVVBO3dDQUFDb0MsSUFBRzt3Q0FBMkJWLFlBQVk7a0RBQUM7Ozs7OztrREFHdkQsOERBQUN0Qiw0SEFBTUE7d0NBQ0hpQyxPQUFPL0I7d0NBQ1BnQyxVQUFVbkI7d0NBQ1ZvQixtQkFBZ0I7d0NBQ2hCQyxtQkFBa0I7d0NBQ2xCQyxNQUFNO3dDQUNOQyxLQUFLO3dDQUNMQyxLQUFLOzs7Ozs7a0RBRVQsOERBQUM1QywrSEFBU0E7d0NBQ05zQyxPQUFPL0I7d0NBQ1BnQyxVQUFVLENBQUNsQixJQUFNRCx1QkFBdUJDLEdBQUd3QixPQUFPeEIsRUFBRXlCLE1BQU0sQ0FBQ1IsS0FBSzt3Q0FDaEVTLFNBQVM7d0NBQ1RDLFFBQU87Ozs7Ozs7Ozs7OzswQ0FHZiw4REFBQzVDLDBIQUFJQTtnQ0FBQzhCLElBQUk7Z0NBQUNDLElBQUk7Z0NBQUlDLElBQUk7O2tEQUNuQiw4REFBQ25DLGdJQUFVQTt3Q0FBQ29DLElBQUc7d0NBQTZCVixZQUFZO2tEQUFDOzs7Ozs7a0RBR3pELDhEQUFDdEIsNEhBQU1BO3dDQUNIaUMsT0FBTzdCO3dDQUNQOEIsVUFBVWhCO3dDQUNWaUIsbUJBQWdCO3dDQUNoQkMsbUJBQWtCO3dDQUNsQkMsTUFBTTt3Q0FDTkMsS0FBSzt3Q0FDTEMsS0FBSzs7Ozs7O2tEQUVULDhEQUFDNUMsK0hBQVNBO3dDQUNOc0MsT0FBTzdCO3dDQUNQOEIsVUFBVSxDQUFDbEIsSUFBTUUsbUJBQW1CRixHQUFHd0IsT0FBT3hCLEVBQUV5QixNQUFNLENBQUNSLEtBQUs7d0NBQzVEUyxTQUFTO3dDQUNUQyxRQUFPOzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUM1QywwSEFBSUE7Z0NBQUM4QixJQUFJO2dDQUFDQyxJQUFJO2dDQUFJQyxJQUFJOzBDQUNuQiw0RUFBQ3BDLCtIQUFTQTtvQ0FDTmlELE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xaLE9BQU8zQjtvQ0FDUDRCLFVBQVUsQ0FBQ2xCLElBQU1ULHVCQUF1QmlDLE9BQU94QixFQUFFeUIsTUFBTSxDQUFDUixLQUFLO29DQUM3RFMsU0FBUztvQ0FDVEMsUUFBTzs7Ozs7Ozs7Ozs7MENBR2YsOERBQUM1QywwSEFBSUE7Z0NBQUM4QixJQUFJO2dDQUFDQyxJQUFJO2dDQUFJQyxJQUFJOzBDQUNuQiw0RUFBQ3BDLCtIQUFTQTtvQ0FDTmlELE9BQU07b0NBQ05DLE1BQUs7b0NBQ0xaLE9BQU8vQixtQkFBbUI7b0NBQzFCNEMsWUFBWTt3Q0FDUkMsVUFBVTtvQ0FDZDtvQ0FDQUwsU0FBUztvQ0FDVEMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBSWxCbkMsd0JBQ0csOERBQUNYLHlIQUFHQTt3QkFBQ21ELElBQUk7a0NBQ0wsNEVBQUNwRCxnSUFBVUE7NEJBQUN3QixTQUFROzRCQUFLQyxPQUFNOztnQ0FBUztnQ0FDM0JiO2dDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7QUFFQSxpRUFBZVAsb0JBQW9CQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLy4vY29tcG9uZW50cy9JbnZlc3RtZW50Q2FsY3VsYXRvci5qcz83Njc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dEZpZWxkLCBUeXBvZ3JhcGh5LCBCb3gsIFBhcGVyLCBHcmlkLCBTbGlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgSW52ZXN0bWVudENhbGN1bGF0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgW2ludmVzdG1lbnRBbW91bnQsIHNldEludmVzdG1lbnRBbW91bnRdID0gdXNlU3RhdGUoMTAwMDApOyAvLyBEZWZhdWx0IG1pbmltdW0gaW52ZXN0bWVudFxuICAgIGNvbnN0IFtzaGFyZWhvbGRpbmdQZXJpb2QsIHNldFNoYXJlaG9sZGluZ1BlcmlvZF0gPSB1c2VTdGF0ZSgxKTsgLy8gRGVmYXVsdCBtaW5pbXVtIGhvbGRpbmcgcGVyaW9kIGluIG1vbnRoc1xuICAgIGNvbnN0IFtkaXN0cmlidXRlZERpdmlkZW5kLCBzZXREaXN0cmlidXRlZERpdmlkZW5kXSA9IHVzZVN0YXRlKDYuOCk7IC8vIERlZmF1bHQgZGl2aWRlbmRcbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVSZXN1bHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpbnZlc3RtZW50QW1vdW50ICYmIHNoYXJlaG9sZGluZ1BlcmlvZCkge1xuICAgICAgICAgICAgY29uc3QgdG90YWxEaXZpZGVuZCA9IChpbnZlc3RtZW50QW1vdW50ICogKGRpc3RyaWJ1dGVkRGl2aWRlbmQgLyAxMDApKSAqIChzaGFyZWhvbGRpbmdQZXJpb2QgLyAxMik7XG4gICAgICAgICAgICBjb25zdCB0b3RhbEFtb3VudCA9IHBhcnNlRmxvYXQoaW52ZXN0bWVudEFtb3VudCkgKyB0b3RhbERpdmlkZW5kO1xuICAgICAgICAgICAgc2V0UmVzdWx0KHRvdGFsQW1vdW50LnRvRml4ZWQoMikpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUludmVzdG1lbnRDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0SW52ZXN0bWVudEFtb3VudChuZXdWYWx1ZSk7XG4gICAgICAgIGNhbGN1bGF0ZVJlc3VsdCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVQZXJpb2RDaGFuZ2UgPSAoZSwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0U2hhcmVob2xkaW5nUGVyaW9kKG5ld1ZhbHVlKTtcbiAgICAgICAgY2FsY3VsYXRlUmVzdWx0KCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJhdXRvXCI+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBJbnZlc3RtZW50IENhbGN1bGF0b3JcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezN9IHN0eWxlPXt7IHBhZGRpbmc6ICczMHB4JywgbWFyZ2luVG9wOiAnMjBweCcgfX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJpbnZlc3RtZW50LWFtb3VudC1zbGlkZXJcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSW52ZXN0bWVudCBBbW91bnQgKFVTRC9FVVIpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludmVzdG1lbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUludmVzdG1lbnRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiaW52ZXN0bWVudC1hbW91bnQtc2xpZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT1cImF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezEwMDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MTAwMDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxMDAwMDAwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludmVzdG1lbnRBbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVJbnZlc3RtZW50Q2hhbmdlKGUsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cInNoYXJlaG9sZGluZy1wZXJpb2Qtc2xpZGVyXCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFudGljaXBhdGVkIHNoYXJlaG9sZGluZyBwZXJpb2QgKG1vbnRocylcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hhcmVob2xkaW5nUGVyaW9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQZXJpb2RDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic2hhcmVob2xkaW5nLXBlcmlvZC1zbGlkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlTGFiZWxEaXNwbGF5PVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXs0OH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NoYXJlaG9sZGluZ1BlcmlvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVBlcmlvZENoYW5nZShlLCBOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW50aWNpcGF0ZWQgZGlzdHJpYnV0ZWQgZGl2aWRlbmQgKCUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzdHJpYnV0ZWREaXZpZGVuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERpc3RyaWJ1dGVkRGl2aWRlbmQoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBvZiBTaGFyZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZlc3RtZW50QW1vdW50IC8gMX0gLy8gQXNzdW1pbmcgMSBVU0QvRVVSID0gMSBzaGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICB7cmVzdWx0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJveCBtdD17NH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdDoge3Jlc3VsdH0gVVNEL0VVUlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEludmVzdG1lbnRDYWxjdWxhdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwiQm94IiwiUGFwZXIiLCJHcmlkIiwiU2xpZGVyIiwiSW52ZXN0bWVudENhbGN1bGF0b3IiLCJpbnZlc3RtZW50QW1vdW50Iiwic2V0SW52ZXN0bWVudEFtb3VudCIsInNoYXJlaG9sZGluZ1BlcmlvZCIsInNldFNoYXJlaG9sZGluZ1BlcmlvZCIsImRpc3RyaWJ1dGVkRGl2aWRlbmQiLCJzZXREaXN0cmlidXRlZERpdmlkZW5kIiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiY2FsY3VsYXRlUmVzdWx0IiwidG90YWxEaXZpZGVuZCIsInRvdGFsQW1vdW50IiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJoYW5kbGVJbnZlc3RtZW50Q2hhbmdlIiwiZSIsIm5ld1ZhbHVlIiwiaGFuZGxlUGVyaW9kQ2hhbmdlIiwibWF4V2lkdGgiLCJ2YXJpYW50IiwiYWxpZ24iLCJndXR0ZXJCb3R0b20iLCJlbGV2YXRpb24iLCJzdHlsZSIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb250YWluZXIiLCJzcGFjaW5nIiwiaXRlbSIsInhzIiwic20iLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJhcmlhLWxhYmVsbGVkYnkiLCJ2YWx1ZUxhYmVsRGlzcGxheSIsInN0ZXAiLCJtaW4iLCJtYXgiLCJOdW1iZXIiLCJ0YXJnZXQiLCJmdWxsV2lkdGgiLCJtYXJnaW4iLCJsYWJlbCIsInR5cGUiLCJJbnB1dFByb3BzIiwicmVhZE9ubHkiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InvestmentCalculator.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Inbox */ \"@mui/icons-material/Inbox\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"@mui/icons-material/Mail\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.js\");\n/* harmony import */ var _InvestmentCalculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./InvestmentCalculator */ \"./components/InvestmentCalculator.js\");\n\n\n\n\n\n\n\n\n\n // исправьте импорт\nconst drawerWidth = 240;\nconst Layout = ({ children })=>{\n    const theme = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.useTheme)();\n    const isMobile = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)(theme.breakpoints.down(\"sm\"));\n    const [mobileOpen, setMobileOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const links = [\n        {\n            text: \"Victorum Group\",\n            href: \"https://victorum-group.com\"\n        },\n        {\n            text: \"Victorum Trade\",\n            href: \"https://victorum-trade.com\"\n        },\n        {\n            text: \"FAQ\",\n            href: \"https://victorum-faq.com\"\n        }\n    ];\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const handleDrawerToggle = ()=>{\n        setMobileOpen(!mobileOpen);\n    };\n    const drawer = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        sx: {\n            overflow: \"auto\",\n            backgroundImage: \"url(/images/sidebar_background.png)\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            height: \"100%\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.List, {\n            children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItem, {\n                    button: true,\n                    component: \"a\",\n                    href: link.href,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemIcon, {\n                            children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 34,\n                                columnNumber: 48\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 34,\n                                columnNumber: 64\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.ListItemText, {\n                            primary: link.text\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, link.text, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n            lineNumber: 30,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.AppBar, {\n                position: \"fixed\",\n                sx: {\n                    zIndex: (theme)=>theme.zIndex.drawer + 1,\n                    width: \"100%\",\n                    backgroundImage: \"url(/images/img.png)\",\n                    backgroundSize: \"cover\",\n                    backgroundPosition: \"center\",\n                    height: isMobile ? \"60px\" : \"80px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Toolbar, {\n                    children: [\n                        isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {\n                            color: \"inherit\",\n                            \"aria-label\": \"open drawer\",\n                            edge: \"start\",\n                            onClick: handleDrawerToggle,\n                            sx: {\n                                mr: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 66,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                            sx: {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                height: \"100%\",\n                                flexGrow: 1\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Avatar, {\n                                    alt: \"User Avatar\",\n                                    src: session.user.image,\n                                    sx: {\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                    sx: {\n                                        color: \"white\",\n                                        textShadow: \"1px 1px 2px black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                    sx: {\n                                        color: \"white\",\n                                        textShadow: \"1px 1px 2px black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.signIn)(),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                    href: \"/signup\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                                        sx: {\n                                            color: \"white\",\n                                            textShadow: \"1px 1px 2px black\"\n                                        },\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Drawer, {\n                variant: isMobile ? \"temporary\" : \"permanent\",\n                open: isMobile ? mobileOpen : true,\n                onClose: handleDrawerToggle,\n                ModalProps: {\n                    keepMounted: true\n                },\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    [`& .MuiDrawer-paper`]: {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        mt: isMobile ? \"60px\" : \"80px\"\n                    }\n                },\n                children: drawer\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_IconButton_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    height: \"100vh\",\n                    bgcolor: \"background.default\",\n                    p: 4,\n                    ml: 5,\n                    mt: isMobile ? \"60px\" : \"80px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InvestmentCalculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQytJO0FBQ3JJO0FBQ0Y7QUFDQTtBQUNjO0FBQ2pDO0FBQ0g7QUFDZ0MsQ0FBQyxtQkFBbUI7QUFFOUUsTUFBTTBCLGNBQWM7QUFFcEIsTUFBTUMsU0FBUyxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUN4QixNQUFNQyxRQUFRZCxzTkFBUUE7SUFDdEIsTUFBTWUsV0FBV2hCLDJOQUFhQSxDQUFDZSxNQUFNRSxXQUFXLENBQUNDLElBQUksQ0FBQztJQUN0RCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2pDLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1rQyxRQUFRO1FBQ1Y7WUFBRUMsTUFBTTtZQUFrQkMsTUFBTTtRQUE2QjtRQUM3RDtZQUFFRCxNQUFNO1lBQWtCQyxNQUFNO1FBQTZCO1FBQzdEO1lBQUVELE1BQU07WUFBT0MsTUFBTTtRQUEyQjtLQUNuRDtJQUNELE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdqQiwyREFBVUE7SUFFcEMsTUFBTWtCLHFCQUFxQjtRQUN2Qk4sY0FBYyxDQUFDRDtJQUNuQjtJQUVBLE1BQU1RLHVCQUNGLDhEQUFDOUIsNk1BQUdBO1FBQUMrQixJQUFJO1lBQUVDLFVBQVU7WUFBUUMsaUJBQWlCO1lBQXVDQyxnQkFBZ0I7WUFBU0Msb0JBQW9CO1lBQVVDLFFBQVE7UUFBTztrQkFDdkosNEVBQUN4Qyw4TUFBSUE7c0JBQ0E0QixNQUFNYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUMxQyxrTkFBUUE7b0JBQUMyQyxNQUFNO29CQUFpQkMsV0FBVTtvQkFBSWYsTUFBTVksS0FBS1osSUFBSTs7c0NBQzFELDhEQUFDNUIsc05BQVlBO3NDQUNSeUMsUUFBUSxNQUFNLGtCQUFJLDhEQUFDakMsa0VBQVNBOzs7OzBEQUFNLDhEQUFDQyxpRUFBUUE7Ozs7Ozs7Ozs7c0NBRWhELDhEQUFDUixzTkFBWUE7NEJBQUMyQyxTQUFTSixLQUFLYixJQUFJOzs7Ozs7O21CQUpkYSxLQUFLYixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7SUFXL0MscUJBQ0ksOERBQUN6Qiw2TUFBR0E7UUFBQytCLElBQUk7WUFBRVksU0FBUztRQUFPOzswQkFDdkIsOERBQUMxQyxxTkFBV0E7Ozs7OzBCQUNaLDhEQUFDVixnTkFBTUE7Z0JBQ0hxRCxVQUFTO2dCQUNUYixJQUFJO29CQUNBYyxRQUFRLENBQUMzQixRQUFVQSxNQUFNMkIsTUFBTSxDQUFDZixNQUFNLEdBQUc7b0JBQ3pDZ0IsT0FBTztvQkFDUGIsaUJBQWlCO29CQUNqQkMsZ0JBQWdCO29CQUNoQkMsb0JBQW9CO29CQUNwQkMsUUFBUWpCLFdBQVcsU0FBUztnQkFDaEM7MEJBRUEsNEVBQUMzQixpTkFBT0E7O3dCQUNIMkIsMEJBQ0csOERBQUNkLG9OQUFVQTs0QkFDUDBDLE9BQU07NEJBQ05DLGNBQVc7NEJBQ1hDLE1BQUs7NEJBQ0xDLFNBQVNyQjs0QkFDVEUsSUFBSTtnQ0FBRW9CLElBQUk7NEJBQUU7c0NBRVosNEVBQUMzQyxpRUFBUUE7Ozs7Ozs7Ozs7c0NBR2pCLDhEQUFDUiw2TUFBR0E7NEJBQUMrQixJQUFJO2dDQUFFWSxTQUFTO2dDQUFRUyxZQUFZO2dDQUFVaEIsUUFBUTtnQ0FBUWlCLFVBQVU7NEJBQUU7c0NBQzFFLDRFQUFDeEMsNkNBQUlBOzs7Ozs7Ozs7O3dCQUVSZSx3QkFDRzs7OENBQ0ksOERBQUNsQyxnTkFBTUE7b0NBQUM0RCxLQUFJO29DQUFjQyxLQUFLM0IsUUFBUTRCLElBQUksQ0FBQ0MsS0FBSztvQ0FBRTFCLElBQUk7d0NBQUVvQixJQUFJO29DQUFFOzs7Ozs7OENBQy9ELDhEQUFDakQsZ05BQU1BO29DQUFDNkIsSUFBSTt3Q0FBRWdCLE9BQU87d0NBQVNXLFlBQVk7b0NBQW9CO29DQUFHUixTQUFTLElBQU14Qyx3REFBT0E7OENBQUk7Ozs7Ozs7eURBRy9GOzs4Q0FDSSw4REFBQ1IsZ05BQU1BO29DQUFDNkIsSUFBSTt3Q0FBRWdCLE9BQU87d0NBQVNXLFlBQVk7b0NBQW9CO29DQUFHUixTQUFTLElBQU16Qyx1REFBTUE7OENBQUk7Ozs7Ozs4Q0FDMUYsOERBQUNHLGtEQUFJQTtvQ0FBQ2MsTUFBSztvQ0FBVWlDLFFBQVE7OENBQ3pCLDRFQUFDekQsZ05BQU1BO3dDQUFDNkIsSUFBSTs0Q0FBRWdCLE9BQU87NENBQVNXLFlBQVk7d0NBQW9CO2tEQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJGLDhEQUFDL0QsZ05BQU1BO2dCQUNIaUUsU0FBU3pDLFdBQVcsY0FBYztnQkFDbEMwQyxNQUFNMUMsV0FBV0csYUFBYTtnQkFDOUJ3QyxTQUFTakM7Z0JBQ1RrQyxZQUFZO29CQUNSQyxhQUFhO2dCQUNqQjtnQkFDQWpDLElBQUk7b0JBQ0FlLE9BQU8vQjtvQkFDUGtELFlBQVk7b0JBQ1osQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRTt3QkFBRW5CLE9BQU8vQjt3QkFBYW1ELFdBQVc7d0JBQWNDLElBQUloRCxXQUFXLFNBQVM7b0JBQU87Z0JBQzFHOzBCQUVDVzs7Ozs7OzBCQUVMLDhEQUFDOUIsNk1BQUdBO2dCQUNBeUMsV0FBVTtnQkFDVlYsSUFBSTtvQkFBRXNCLFVBQVU7b0JBQUtqQixRQUFRO29CQUFTZ0MsU0FBUztvQkFBc0JDLEdBQUc7b0JBQUdDLElBQUk7b0JBQUdILElBQUloRCxXQUFXLFNBQVM7Z0JBQU87O2tDQUVqSCw4REFBQ0wsNkRBQW9CQTs7Ozs7b0JBQUc7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFFQSxpRUFBZUUsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBUeXBvZ3JhcGh5LCBBdmF0YXIsIERyYXdlciwgTGlzdCwgTGlzdEl0ZW0sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBCb3gsIENzc0Jhc2VsaW5lLCBCdXR0b24sIHVzZU1lZGlhUXVlcnksIHVzZVRoZW1lLCBJY29uQnV0dG9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5ib3gnO1xuaW1wb3J0IE1haWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWFpbCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xuaW1wb3J0IEludmVzdG1lbnRDYWxjdWxhdG9yIGZyb20gXCIuL0ludmVzdG1lbnRDYWxjdWxhdG9yXCI7IC8vINC40YHQv9GA0LDQstGM0YLQtSDQuNC80L/QvtGA0YJcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xuICAgIGNvbnN0IFttb2JpbGVPcGVuLCBzZXRNb2JpbGVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBsaW5rcyA9IFtcbiAgICAgICAgeyB0ZXh0OiAnVmljdG9ydW0gR3JvdXAnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1ncm91cC5jb20nIH0sXG4gICAgICAgIHsgdGV4dDogJ1ZpY3RvcnVtIFRyYWRlJywgaHJlZjogJ2h0dHBzOi8vdmljdG9ydW0tdHJhZGUuY29tJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1mYXEuY29tJyB9XG4gICAgXTtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9iaWxlT3BlbighbW9iaWxlT3Blbik7XG4gICAgfTtcblxuICAgIGNvbnN0IGRyYXdlciA9IChcbiAgICAgICAgPEJveCBzeD17eyBvdmVyZmxvdzogJ2F1dG8nLCBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoL2ltYWdlcy9zaWRlYmFyX2JhY2tncm91bmQucG5nKScsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJyB9fT5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtsaW5rLnRleHR9IGNvbXBvbmVudD1cImFcIiBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggJSAyID09PSAwID8gPEluYm94SWNvbiAvPiA6IDxNYWlsSWNvbiAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtsaW5rLnRleHR9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgICAgPEFwcEJhclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKC9pbWFnZXMvaW1nLnBuZyknLCAvLyDQv9GD0YLRjCDQuiDQstCw0YjQtdC80YMg0LjQt9C+0LHRgNCw0LbQtdC90LjRjlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpc01vYmlsZSA/ICc2MHB4JyA6ICc4MHB4JyxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgICAgICB7aXNNb2JpbGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbXI6IDIgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJywgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiVXNlciBBdmF0YXJcIiBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gc3g9e3sgbXI6IDIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0U2hhZG93OiAnMXB4IDFweCAycHggYmxhY2snIH19IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17eyBjb2xvcjogJ3doaXRlJywgdGV4dFNoYWRvdzogJzFweCAxcHggMnB4IGJsYWNrJyB9fSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0U2hhZG93OiAnMXB4IDFweCAycHggYmxhY2snIH19PlNpZ24gVXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXtpc01vYmlsZSA/IFwidGVtcG9yYXJ5XCIgOiBcInBlcm1hbmVudFwifVxuICAgICAgICAgICAgICAgIG9wZW49e2lzTW9iaWxlID8gbW9iaWxlT3BlbiA6IHRydWV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyVG9nZ2xlfVxuICAgICAgICAgICAgICAgIE1vZGFsUHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAga2VlcE1vdW50ZWQ6IHRydWUsIC8vIEJldHRlciBvcGVuIHBlcmZvcm1hbmNlIG9uIG1vYmlsZS5cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgICAgICAgICAgICAgW2AmIC5NdWlEcmF3ZXItcGFwZXJgXTogeyB3aWR0aDogZHJhd2VyV2lkdGgsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBtdDogaXNNb2JpbGUgPyAnNjBweCcgOiAnODBweCcgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkcmF3ZXJ9XG4gICAgICAgICAgICA8L0RyYXdlcj5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcbiAgICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSwgICBoZWlnaHQ6ICcxMDB2aCcsIGJnY29sb3I6ICdiYWNrZ3JvdW5kLmRlZmF1bHQnLCBwOiA0LCBtbDogNSwgbXQ6IGlzTW9iaWxlID8gJzYwcHgnIDogJzgwcHgnIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEludmVzdG1lbnRDYWxjdWxhdG9yIC8+IHsvKiDQmNGB0L/QvtC70YzQt9GD0LXQvCDQutC+0LzQv9C+0L3QtdC90YIgKi99XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJBdmF0YXIiLCJEcmF3ZXIiLCJMaXN0IiwiTGlzdEl0ZW0iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJCb3giLCJDc3NCYXNlbGluZSIsIkJ1dHRvbiIsInVzZU1lZGlhUXVlcnkiLCJ1c2VUaGVtZSIsIkljb25CdXR0b24iLCJJbmJveEljb24iLCJNYWlsSWNvbiIsIk1lbnVJY29uIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJMaW5rIiwiTG9nbyIsIkludmVzdG1lbnRDYWxjdWxhdG9yIiwiZHJhd2VyV2lkdGgiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJtb2JpbGVPcGVuIiwic2V0TW9iaWxlT3BlbiIsImxpbmtzIiwidGV4dCIsImhyZWYiLCJkYXRhIiwic2Vzc2lvbiIsImhhbmRsZURyYXdlclRvZ2dsZSIsImRyYXdlciIsInN4Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImhlaWdodCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImJ1dHRvbiIsImNvbXBvbmVudCIsInByaW1hcnkiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ6SW5kZXgiLCJ3aWR0aCIsImNvbG9yIiwiYXJpYS1sYWJlbCIsImVkZ2UiLCJvbkNsaWNrIiwibXIiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJhbHQiLCJzcmMiLCJ1c2VyIiwiaW1hZ2UiLCJ0ZXh0U2hhZG93IiwicGFzc0hyZWYiLCJ2YXJpYW50Iiwib3BlbiIsIm9uQ2xvc2UiLCJNb2RhbFByb3BzIiwia2VlcE1vdW50ZWQiLCJmbGV4U2hyaW5rIiwiYm94U2l6aW5nIiwibXQiLCJiZ2NvbG9yIiwicCIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,useMediaQuery,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Box,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nfunction Logo() {\n    const theme = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.useTheme)();\n    const isMobile = (0,_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)(theme.breakpoints.down(\"sm\"));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            height: isMobile ? \"40px\" : \"65px\",\n            display: \"flex\",\n            alignItems: \"center\",\n            marginTop: \"0.6rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/logo.png\",\n            alt: \"Logo\",\n            layout: \"intrinsic\",\n            width: isMobile ? 150 : 220,\n            height: isMobile ? 40 : 65\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Logo.js\",\n            lineNumber: 10,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Logo.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ28uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ0w7QUFDaUM7QUFFNUMsU0FBU0s7SUFDcEIsTUFBTUMsUUFBUUYsd0dBQVFBO0lBQ3RCLE1BQU1HLFdBQVdKLDZHQUFhQSxDQUFDRyxNQUFNRSxXQUFXLENBQUNDLElBQUksQ0FBQztJQUN0RCxxQkFDSSw4REFBQ1AsK0ZBQUdBO1FBQUNRLElBQUk7WUFBRUMsUUFBUUosV0FBVyxTQUFTO1lBQVFLLFNBQVM7WUFBUUMsWUFBWTtZQUFVQyxXQUFXO1FBQVM7a0JBQ3RHLDRFQUFDZCxtREFBS0E7WUFBQ2UsS0FBSTtZQUFZQyxLQUFJO1lBQU9DLFFBQU87WUFBWUMsT0FBT1gsV0FBVyxNQUFNO1lBQUtJLFFBQVFKLFdBQVcsS0FBSzs7Ozs7Ozs7Ozs7QUFHdEgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9jb21wb25lbnRzL0xvZ28uanM/NDRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Qm94LCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZX0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiBpc01vYmlsZSA/ICc0MHB4JyA6ICc2NXB4JywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luVG9wOiAnMC42cmVtJyB9fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiBhbHQ9XCJMb2dvXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgd2lkdGg9e2lzTW9iaWxlID8gMTUwIDogMjIwfSBoZWlnaHQ9e2lzTW9iaWxlID8gNDAgOiA2NX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwiQm94IiwidXNlTWVkaWFRdWVyeSIsInVzZVRoZW1lIiwiTG9nbyIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJzeCIsImhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Logo.js\n");

/***/ }),

/***/ "./components/SliderWithInput.js":
/*!***************************************!*\
  !*** ./components/SliderWithInput.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Slider,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst SliderWithInput = ()=>{\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleSliderChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    const handleInputChange = (event)=>{\n        setValue(event.target.value === \"\" ? \"\" : Number(event.target.value));\n    };\n    const handleBlur = ()=>{\n        if (value < 0) {\n            setValue(0);\n        } else if (value > 100000000) {\n            setValue(100000000);\n        }\n    };\n    if (!session) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            width: {\n                xs: \"100%\",\n                md: \"80%\"\n            },\n            mt: \"20vh\",\n            mx: \"auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                id: \"input-slider\",\n                gutterBottom: true,\n                children: \"Amount ($)\"\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Slider, {\n                value: typeof value === \"number\" ? value : 0,\n                onChange: handleSliderChange,\n                \"aria-labelledby\": \"input-slider\",\n                min: 0,\n                max: 100000000,\n                step: 1000000\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                sx: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    mt: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.TextField, {\n                        value: value,\n                        onChange: handleInputChange,\n                        onBlur: handleBlur,\n                        inputProps: {\n                            step: 1000000,\n                            min: 0,\n                            max: 100000000,\n                            type: \"number\",\n                            \"aria-labelledby\": \"input-slider\"\n                        },\n                        sx: {\n                            mr: 2\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Slider_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {\n                        children: \"$\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/SliderWithInput.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderWithInput);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlcldpdGhJbnB1dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDMkI7QUFDdEI7QUFFN0MsTUFBTU8sa0JBQWtCO0lBQ3BCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFLEdBQUdILDJEQUFVQTtJQUNwQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVcscUJBQXFCLENBQUNDLE9BQU9DO1FBQy9CSCxTQUFTRztJQUNiO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNGO1FBQ3ZCRixTQUFTRSxNQUFNRyxNQUFNLENBQUNOLEtBQUssS0FBSyxLQUFLLEtBQUtPLE9BQU9KLE1BQU1HLE1BQU0sQ0FBQ04sS0FBSztJQUN2RTtJQUVBLE1BQU1RLGFBQWE7UUFDZixJQUFJUixRQUFRLEdBQUc7WUFDWEMsU0FBUztRQUNiLE9BQU8sSUFBSUQsUUFBUSxXQUFXO1lBQzFCQyxTQUFTO1FBQ2I7SUFDSjtJQUVBLElBQUksQ0FBQ0YsU0FBUztRQUNWLE9BQU87SUFDWDtJQUVBLHFCQUNJLDhEQUFDUCxvR0FBR0E7UUFBQ2lCLElBQUk7WUFBRUMsT0FBTztnQkFBRUMsSUFBSTtnQkFBUUMsSUFBSTtZQUFNO1lBQUdDLElBQUk7WUFBUUMsSUFBSTtRQUFPOzswQkFDaEUsOERBQUNuQiwyR0FBVUE7Z0JBQUNvQixJQUFHO2dCQUFlQyxZQUFZOzBCQUFDOzs7Ozs7MEJBRzNDLDhEQUFDdkIsdUdBQU1BO2dCQUNITyxPQUFPLE9BQU9BLFVBQVUsV0FBV0EsUUFBUTtnQkFDM0NpQixVQUFVZjtnQkFDVmdCLG1CQUFnQjtnQkFDaEJDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLE1BQU07Ozs7OzswQkFFViw4REFBQzdCLG9HQUFHQTtnQkFBQ2lCLElBQUk7b0JBQUVhLFNBQVM7b0JBQVFDLFlBQVk7b0JBQVVWLElBQUk7Z0JBQUU7O2tDQUNwRCw4REFBQ25CLDBHQUFTQTt3QkFDTk0sT0FBT0E7d0JBQ1BpQixVQUFVWjt3QkFDVm1CLFFBQVFoQjt3QkFDUmlCLFlBQVk7NEJBQ1JKLE1BQU07NEJBQ05GLEtBQUs7NEJBQ0xDLEtBQUs7NEJBQ0xNLE1BQU07NEJBQ04sbUJBQW1CO3dCQUN2Qjt3QkFDQWpCLElBQUk7NEJBQUVrQixJQUFJO3dCQUFFOzs7Ozs7a0NBRWhCLDhEQUFDaEMsMkdBQVVBO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUI7QUFFQSxpRUFBZUUsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL2NvbXBvbmVudHMvU2xpZGVyV2l0aElucHV0LmpzP2JkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBTbGlkZXIsIFRleHRGaWVsZCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmNvbnN0IFNsaWRlcldpdGhJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xuXG4gICAgY29uc3QgaGFuZGxlU2xpZGVyQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJycgPyAnJyA6IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQmx1ciA9ICgpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xuICAgICAgICAgICAgc2V0VmFsdWUoMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAxMDAwMDAwMDApIHtcbiAgICAgICAgICAgIHNldFZhbHVlKDEwMDAwMDAwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IHsgeHM6ICcxMDAlJywgbWQ6ICc4MCUnIH0sIG10OiAnMjB2aCcsIG14OiAnYXV0bycgfX0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cImlucHV0LXNsaWRlclwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICBBbW91bnQgKCQpXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8U2xpZGVyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3R5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSA6IDB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNsaWRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJpbnB1dC1zbGlkZXJcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMDAwMDAwMH1cbiAgICAgICAgICAgICAgICBzdGVwPXsxMDAwMDAwfSAvLyDQk9GA0LDQtNCw0YbQuNGPINGI0LDQs9C+0LIg0L/QvtC70LfRg9C90LrQsCAo0L3QsNC/0YDQuNC80LXRgCwgMSDQvNC70L0pXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtdDogMiB9fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICAgIGlucHV0UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXg6IDEwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdpbnB1dC1zbGlkZXInLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBzeD17eyBtcjogMiB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+JDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyV2l0aElucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCb3giLCJTbGlkZXIiLCJUZXh0RmllbGQiLCJUeXBvZ3JhcGh5IiwidXNlU2Vzc2lvbiIsIlNsaWRlcldpdGhJbnB1dCIsImRhdGEiLCJzZXNzaW9uIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZVNsaWRlckNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsIk51bWJlciIsImhhbmRsZUJsdXIiLCJzeCIsIndpZHRoIiwieHMiLCJtZCIsIm10IiwibXgiLCJpZCIsImd1dHRlckJvdHRvbSIsIm9uQ2hhbmdlIiwiYXJpYS1sYWJlbGxlZGJ5IiwibWluIiwibWF4Iiwic3RlcCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwib25CbHVyIiwiaW5wdXRQcm9wcyIsInR5cGUiLCJtciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SliderWithInput.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    const isSignUpPage = Component.name === \"SignUp\";\n    let a = 0;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: isSignUpPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n            lineNumber: 12,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n            lineNumber: 14,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNSO0FBQzFDLE1BQU1HLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUVuQyxNQUFNQyxlQUFlRixVQUFVRyxJQUFJLEtBQUs7SUFDeEMsSUFBSUMsSUFBSTtJQUVSLHFCQUNJLDhEQUFDUCw0REFBZUE7UUFBQ1EsU0FBU0osVUFBVUksT0FBTztrQkFDdENILDZCQUNHLDhEQUFDRjtZQUFXLEdBQUdDLFNBQVM7Ozs7O3NDQUV4Qiw4REFBQ0gsMERBQU1BO3NCQUNILDRFQUFDRTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuXG4gICAgY29uc3QgaXNTaWduVXBQYWdlID0gQ29tcG9uZW50Lm5hbWUgPT09IFwiU2lnblVwXCJcbiAgICBsZXQgYSA9IDBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxTZXNzaW9uUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxuICAgICAgICAgICAge2lzU2lnblVwUGFnZSA/IChcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDsiXSwibmFtZXMiOlsiUmVhY3QiLCJTZXNzaW9uUHJvdmlkZXIiLCJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzU2lnblVwUGFnZSIsIm5hbWUiLCJhIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SliderWithInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SliderWithInput */ \"./components/SliderWithInput.js\");\n/* harmony import */ var _barrel_optimize_names_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Typography!=!@mui/material */ \"__barrel_optimize__?names=Container,Typography!=!./node_modules/@mui/material/index.js\");\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SliderWithInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/index.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNrQztBQUNOO0FBRXRELE1BQU1JLE9BQU87SUFDVCxxQkFDSSw4REFBQ0YsK0ZBQVNBO2tCQUNOLDRFQUFDRCxtRUFBZUE7Ozs7Ozs7Ozs7QUFHNUI7QUFFQSxpRUFBZUcsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTbGlkZXJXaXRoSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9TbGlkZXJXaXRoSW5wdXQnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxTbGlkZXJXaXRoSW5wdXQgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2xpZGVyV2l0aElucHV0IiwiQ29udGFpbmVyIiwiVHlwb2dyYXBoeSIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@mui/base":
/*!****************************!*\
  !*** external "@mui/base" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@mui/base");

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

/***/ "@mui/base/useSlider":
/*!**************************************!*\
  !*** external "@mui/base/useSlider" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/base/useSlider");

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

/***/ "@mui/utils/getScrollbarSize":
/*!**********************************************!*\
  !*** external "@mui/utils/getScrollbarSize" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/getScrollbarSize");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-is");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();