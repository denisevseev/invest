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
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppBar: () => (/* reexport default from dynamic */ _AppBar__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Avatar: () => (/* reexport default from dynamic */ _Avatar__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Button: () => (/* reexport default from dynamic */ _Button__WEBPACK_IMPORTED_MODULE_3___default.a),\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   Drawer: () => (/* reexport default from dynamic */ _Drawer__WEBPACK_IMPORTED_MODULE_5___default.a),\n/* harmony export */   List: () => (/* reexport default from dynamic */ _List__WEBPACK_IMPORTED_MODULE_6___default.a),\n/* harmony export */   ListItem: () => (/* reexport default from dynamic */ _ListItem__WEBPACK_IMPORTED_MODULE_7___default.a),\n/* harmony export */   ListItemIcon: () => (/* reexport default from dynamic */ _ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default.a),\n/* harmony export */   ListItemText: () => (/* reexport default from dynamic */ _ListItemText__WEBPACK_IMPORTED_MODULE_9___default.a),\n/* harmony export */   Toolbar: () => (/* reexport default from dynamic */ _Toolbar__WEBPACK_IMPORTED_MODULE_10___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_11___default.a),\n/* harmony export */   useMediaQuery: () => (/* reexport safe */ _useMediaQuery__WEBPACK_IMPORTED_MODULE_12__[\"default\"]),\n/* harmony export */   useTheme: () => (/* reexport safe */ _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_13__.useTheme)\n/* harmony export */ });\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBar */ \"./node_modules/@mui/material/node/AppBar/index.js\");\n/* harmony import */ var _AppBar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_AppBar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ \"./node_modules/@mui/material/node/Avatar/index.js\");\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Avatar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ \"./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CssBaseline */ \"./node_modules/@mui/material/node/CssBaseline/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Drawer */ \"./node_modules/@mui/material/node/Drawer/index.js\");\n/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Drawer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./List */ \"./node_modules/@mui/material/node/List/index.js\");\n/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_List__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ListItem */ \"./node_modules/@mui/material/node/ListItem/index.js\");\n/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ListItem__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ListItemIcon */ \"./node_modules/@mui/material/node/ListItemIcon/index.js\");\n/* harmony import */ var _ListItemIcon__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ListItemIcon__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ListItemText */ \"./node_modules/@mui/material/node/ListItemText/index.js\");\n/* harmony import */ var _ListItemText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ListItemText__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Toolbar */ \"./node_modules/@mui/material/node/Toolbar/index.js\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Toolbar__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useMediaQuery */ \"./node_modules/@mui/material/node/useMediaQuery/index.js\");\n/* harmony import */ var _Users_denisevseev_Desktop_victorum_portal_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ \"./node_modules/@mui/material/styles/index.js\");\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BcHBCYXIsQXZhdGFyLEJveCxCdXR0b24sQ3NzQmFzZWxpbmUsRHJhd2VyLExpc3QsTGlzdEl0ZW0sTGlzdEl0ZW1JY29uLExpc3RJdGVtVGV4dCxUb29sYmFyLFR5cG9ncmFwaHksdXNlTWVkaWFRdWVyeSx1c2VUaGVtZSE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDNEM7QUFDQTtBQUNOO0FBQ007QUFDVTtBQUNWO0FBQ0o7QUFDUTtBQUNRO0FBQ0E7QUFDVjtBQUNNO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz80NDA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXBwQmFyIH0gZnJvbSBcIi4vQXBwQmFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXZhdGFyIH0gZnJvbSBcIi4vQXZhdGFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiLi9Dc3NCYXNlbGluZVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIERyYXdlciB9IGZyb20gXCIuL0RyYXdlclwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3QgfSBmcm9tIFwiLi9MaXN0XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW0gfSBmcm9tIFwiLi9MaXN0SXRlbVwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtSWNvbiB9IGZyb20gXCIuL0xpc3RJdGVtSWNvblwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtVGV4dCB9IGZyb20gXCIuL0xpc3RJdGVtVGV4dFwiXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRvb2xiYXIgfSBmcm9tIFwiLi9Ub29sYmFyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vdXNlTWVkaWFRdWVyeVwiXG5leHBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCIvVXNlcnMvZGVuaXNldnNlZXYvRGVza3RvcC92aWN0b3J1bS1wb3J0YWwvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvc3R5bGVzL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js":
/*!*********************************************************************************************************!*\
  !*** __barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Box: () => (/* reexport default from dynamic */ _Box__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Slider: () => (/* reexport default from dynamic */ _Slider__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   TextField: () => (/* reexport default from dynamic */ _TextField__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_3___default.a)\n/* harmony export */ });\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box */ \"./node_modules/@mui/material/node/Box/index.js\");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Box__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider */ \"./node_modules/@mui/material/node/Slider/index.js\");\n/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./node_modules/@mui/material/node/TextField/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Cb3gsU2xpZGVyLFRleHRGaWVsZCxUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQztBQUNNO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz8yMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVyIH0gZnJvbSBcIi4vU2xpZGVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSBcIi4vVGV4dEZpZWxkXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Box,Slider,TextField,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "__barrel_optimize__?names=Button,Container,TextField,Typography!=!./node_modules/@mui/material/index.js":
/*!***************************************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Container,TextField,Typography!=!./node_modules/@mui/material/index.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: () => (/* reexport default from dynamic */ _Button__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   Container: () => (/* reexport default from dynamic */ _Container__WEBPACK_IMPORTED_MODULE_1___default.a),\n/* harmony export */   TextField: () => (/* reexport default from dynamic */ _TextField__WEBPACK_IMPORTED_MODULE_2___default.a),\n/* harmony export */   Typography: () => (/* reexport default from dynamic */ _Typography__WEBPACK_IMPORTED_MODULE_3___default.a)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./node_modules/@mui/material/node/Button/index.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Button__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./node_modules/@mui/material/node/Container/index.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextField */ \"./node_modules/@mui/material/node/TextField/index.js\");\n/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextField__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Typography */ \"./node_modules/@mui/material/node/Typography/index.js\");\n/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/**\n * @mui/material v5.15.19\n *\n * @license MIT\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ /* eslint-disable import/export */ \n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1CdXR0b24sQ29udGFpbmVyLFRleHRGaWVsZCxUeXBvZ3JhcGh5IT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUM0QztBQUNNO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWN0b3J1bS1wb3J0YWwvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz85NzZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG11aS9tYXRlcmlhbCB2NS4xNS4xOVxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi8gLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4cG9ydCAqLyBcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vQ29udGFpbmVyXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSBcIi4vVGV4dEZpZWxkXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVHlwb2dyYXBoeSB9IGZyb20gXCIuL1R5cG9ncmFwaHlcIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Button,Container,TextField,Typography!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fsignup.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fsignup.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/future/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony import */ var _pages_signup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup.js */ \"./pages/signup.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"default\"));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticProps\");\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"getStaticPaths\");\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"getServerSideProps\");\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"config\");\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"reportWebVitals\");\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticProps\");\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticPaths\");\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getStaticParams\");\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerProps\");\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_signup_js__WEBPACK_IMPORTED_MODULE_5__, \"unstable_getServerSideProps\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/signup\",\n        pathname: \"/signup\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    components: {\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_signup_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGc2lnbnVwJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZzaWdudXAuanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRjtBQUNoQztBQUNMO0FBQzFEO0FBQ29EO0FBQ1Y7QUFDMUM7QUFDOEM7QUFDOUM7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLDZDQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLHVCQUF1Qix3RUFBSyxDQUFDLDZDQUFRO0FBQ3JDLHVCQUF1Qix3RUFBSyxDQUFDLDZDQUFRO0FBQ3JDLDJCQUEyQix3RUFBSyxDQUFDLDZDQUFRO0FBQ3pDLGVBQWUsd0VBQUssQ0FBQyw2Q0FBUTtBQUM3Qix3QkFBd0Isd0VBQUssQ0FBQyw2Q0FBUTtBQUM3QztBQUNPLGdDQUFnQyx3RUFBSyxDQUFDLDZDQUFRO0FBQzlDLGdDQUFnQyx3RUFBSyxDQUFDLDZDQUFRO0FBQzlDLGlDQUFpQyx3RUFBSyxDQUFDLDZDQUFRO0FBQy9DLGdDQUFnQyx3RUFBSyxDQUFDLDZDQUFRO0FBQzlDLG9DQUFvQyx3RUFBSyxDQUFDLDZDQUFRO0FBQ3pEO0FBQ08sd0JBQXdCLHlHQUFnQjtBQUMvQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVc7QUFDWCxnQkFBZ0I7QUFDaEIsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmljdG9ydW0tcG9ydGFsLz82YTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0IERvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgQXBwIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvc2lnbnVwLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IG1ldGhvZHMuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJnZXRTdGF0aWNQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFN0YXRpY1BhdGhzXCIpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCBcImdldFNlcnZlclNpZGVQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsIFwicmVwb3J0V2ViVml0YWxzXCIpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsIFwidW5zdGFibGVfZ2V0U3RhdGljUHJvcHNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U3RhdGljUGF0aHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXRoc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXNcIik7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wc1wiKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgXCJ1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHNcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvc2lnbnVwXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9zaWdudXBcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBcHAsXG4gICAgICAgIERvY3VtZW50XG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fsignup.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!@mui/material */ \"__barrel_optimize__?names=AppBar,Avatar,Box,Button,CssBaseline,Drawer,List,ListItem,ListItemIcon,ListItemText,Toolbar,Typography,useMediaQuery,useTheme!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Inbox */ \"@mui/icons-material/Inbox\");\n/* harmony import */ var _mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"@mui/icons-material/Mail\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst drawerWidth = 240;\nconst Layout = ({ children })=>{\n    const theme = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    const isMobile = (0,_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.useMediaQuery)(theme.breakpoints.down(\"sm\"));\n    const links = [\n        {\n            text: \"Victorum Group\",\n            href: \"https://victorum-group.com\"\n        },\n        {\n            text: \"Victorum Trade\",\n            href: \"https://victorum-trade.com\"\n        },\n        {\n            text: \"FAQ\",\n            href: \"https://victorum-faq.com\"\n        }\n    ];\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n        sx: {\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.CssBaseline, {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.AppBar, {\n                position: \"fixed\",\n                sx: {\n                    zIndex: (theme)=>theme.zIndex.drawer + 1,\n                    width: \"100%\",\n                    backgroundColor: \"white\",\n                    height: isMobile ? \"60px\" : \"80px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                            sx: {\n                                display: \"flex\",\n                                alignItems: \"center\",\n                                height: \"100%\",\n                                flexGrow: 1\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                    sx: {\n                                        height: isMobile ? \"40px\" : \"65px\",\n                                        display: \"flex\",\n                                        alignItems: \"center\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: \"/logo.png\",\n                                        alt: \"Logo\",\n                                        layout: \"intrinsic\",\n                                        width: isMobile ? 150 : 220,\n                                        height: isMobile ? 40 : 65\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, undefined),\n                                !isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    variant: \"h6\",\n                                    noWrap: true,\n                                    component: \"div\",\n                                    sx: {\n                                        flexGrow: 1,\n                                        textAlign: \"center\",\n                                        color: \"black\"\n                                    },\n                                    children: \"welcome to the investor's personal cabinet\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined),\n                        session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                                    alt: \"User Avatar\",\n                                    src: session.user.image,\n                                    sx: {\n                                        mr: 2\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    sx: {\n                                        color: \"black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut)(),\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                    sx: {\n                                        color: \"black\"\n                                    },\n                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn)(),\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/signup\",\n                                    passHref: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                                        sx: {\n                                            color: \"black\"\n                                        },\n                                        children: \"Sign Up\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Drawer, {\n                variant: \"permanent\",\n                sx: {\n                    width: drawerWidth,\n                    flexShrink: 0,\n                    [`& .MuiDrawer-paper`]: {\n                        width: drawerWidth,\n                        boxSizing: \"border-box\",\n                        mt: isMobile ? \"60px\" : \"80px\"\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Toolbar, {}, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                        sx: {\n                            overflow: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.List, {\n                            children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItem, {\n                                    button: true,\n                                    component: \"a\",\n                                    href: link.href,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemIcon, {\n                                            children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Inbox__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 56\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                                                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                                lineNumber: 65,\n                                                columnNumber: 72\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.ListItemText, {\n                                            primary: link.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, link.text, true, {\n                                    fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AppBar_Avatar_Box_Button_CssBaseline_Drawer_List_ListItem_ListItemIcon_ListItemText_Toolbar_Typography_useMediaQuery_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                component: \"main\",\n                sx: {\n                    flexGrow: 1,\n                    bgcolor: \"background.default\",\n                    p: 3,\n                    ml: {\n                        sm: `${drawerWidth}px`\n                    },\n                    mt: isMobile ? \"60px\" : \"80px\"\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/Layout.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpSjtBQUN6SDtBQUNGO0FBQ2M7QUFDakM7QUFDRTtBQUUvQixNQUFNc0IsY0FBYztBQUVwQixNQUFNQyxTQUFTLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3hCLE1BQU1DLFFBQVFYLDJNQUFRQTtJQUN0QixNQUFNWSxXQUFXYixnTkFBYUEsQ0FBQ1ksTUFBTUUsV0FBVyxDQUFDQyxJQUFJLENBQUM7SUFDdEQsTUFBTUMsUUFBUTtRQUNWO1lBQUVDLE1BQU07WUFBa0JDLE1BQU07UUFBNkI7UUFDN0Q7WUFBRUQsTUFBTTtZQUFrQkMsTUFBTTtRQUE2QjtRQUM3RDtZQUFFRCxNQUFNO1lBQU9DLE1BQU07UUFBMkI7S0FDbkQ7SUFDRCxNQUFNLEVBQUVDLE1BQU1DLE9BQU8sRUFBRSxHQUFHZCwyREFBVUE7SUFFcEMscUJBQ0ksOERBQUNULGtNQUFHQTtRQUFDd0IsSUFBSTtZQUFFQyxTQUFTO1FBQU87OzBCQUN2Qiw4REFBQ3hCLDBNQUFXQTs7Ozs7MEJBQ1osOERBQUNWLHFNQUFNQTtnQkFBQ21DLFVBQVM7Z0JBQVFGLElBQUk7b0JBQUVHLFFBQVEsQ0FBQ1osUUFBVUEsTUFBTVksTUFBTSxDQUFDQyxNQUFNLEdBQUc7b0JBQUdDLE9BQU87b0JBQVFDLGlCQUFpQjtvQkFBU0MsUUFBUWYsV0FBVyxTQUFTO2dCQUFPOzBCQUNuSiw0RUFBQ3hCLHNNQUFPQTs7c0NBQ0osOERBQUNRLGtNQUFHQTs0QkFBQ3dCLElBQUk7Z0NBQUVDLFNBQVM7Z0NBQVFPLFlBQVk7Z0NBQVVELFFBQVE7Z0NBQVFFLFVBQVU7NEJBQUU7OzhDQUMxRSw4REFBQ2pDLGtNQUFHQTtvQ0FBQ3dCLElBQUk7d0NBQUVPLFFBQVFmLFdBQVcsU0FBUzt3Q0FBUVMsU0FBUzt3Q0FBUU8sWUFBWTtvQ0FBUzs4Q0FDakYsNEVBQUNyQixtREFBS0E7d0NBQUN1QixLQUFJO3dDQUFZQyxLQUFJO3dDQUFPQyxRQUFPO3dDQUFZUCxPQUFPYixXQUFXLE1BQU07d0NBQUtlLFFBQVFmLFdBQVcsS0FBSzs7Ozs7Ozs7Ozs7Z0NBRTdHLENBQUNBLDBCQUNFLDhEQUFDdkIseU1BQVVBO29DQUFDNEMsU0FBUTtvQ0FBS0MsTUFBTTtvQ0FBQ0MsV0FBVTtvQ0FBTWYsSUFBSTt3Q0FBRVMsVUFBVTt3Q0FBR08sV0FBVzt3Q0FBVUMsT0FBTztvQ0FBUTs4Q0FBRzs7Ozs7Ozs7Ozs7O3dCQUtqSGxCLHdCQUNHOzs4Q0FDSSw4REFBQzdCLHFNQUFNQTtvQ0FBQ3lDLEtBQUk7b0NBQWNELEtBQUtYLFFBQVFtQixJQUFJLENBQUNDLEtBQUs7b0NBQUVuQixJQUFJO3dDQUFFb0IsSUFBSTtvQ0FBRTs7Ozs7OzhDQUMvRCw4REFBQzFDLHFNQUFNQTtvQ0FBQ3NCLElBQUk7d0NBQUVpQixPQUFPO29DQUFRO29DQUFHSSxTQUFTLElBQU1yQyx3REFBT0E7OENBQUk7Ozs7Ozs7eURBRzlEOzs4Q0FDSSw4REFBQ04scU1BQU1BO29DQUFDc0IsSUFBSTt3Q0FBRWlCLE9BQU87b0NBQVE7b0NBQUdJLFNBQVMsSUFBTXRDLHVEQUFNQTs4Q0FBSTs7Ozs7OzhDQUN6RCw4REFBQ0csa0RBQUlBO29DQUFDVyxNQUFLO29DQUFVeUIsUUFBUTs4Q0FDekIsNEVBQUM1QyxxTUFBTUE7d0NBQUNzQixJQUFJOzRDQUFFaUIsT0FBTzt3Q0FBUTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1wRCw4REFBQzlDLHFNQUFNQTtnQkFDSDBDLFNBQVE7Z0JBQ1JiLElBQUk7b0JBQ0FLLE9BQU9qQjtvQkFDUG1DLFlBQVk7b0JBQ1osQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRTt3QkFBRWxCLE9BQU9qQjt3QkFBYW9DLFdBQVc7d0JBQWNDLElBQUlqQyxXQUFXLFNBQVM7b0JBQU87Z0JBQzFHOztrQ0FFQSw4REFBQ3hCLHNNQUFPQTs7Ozs7a0NBQ1IsOERBQUNRLGtNQUFHQTt3QkFBQ3dCLElBQUk7NEJBQUUwQixVQUFVO3dCQUFPO2tDQUN4Qiw0RUFBQ3RELG1NQUFJQTtzQ0FDQXVCLE1BQU1nQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ2QsOERBQUN4RCx1TUFBUUE7b0NBQUN5RCxNQUFNO29DQUFpQmYsV0FBVTtvQ0FBSWxCLE1BQU0rQixLQUFLL0IsSUFBSTs7c0RBQzFELDhEQUFDdkIsMk1BQVlBO3NEQUNSdUQsUUFBUSxNQUFNLGtCQUFJLDhEQUFDaEQsa0VBQVNBOzs7OzBFQUFNLDhEQUFDQyxpRUFBUUE7Ozs7Ozs7Ozs7c0RBRWhELDhEQUFDUCwyTUFBWUE7NENBQUN3RCxTQUFTSCxLQUFLaEMsSUFBSTs7Ozs7OzttQ0FKZGdDLEtBQUtoQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBVS9DLDhEQUFDcEIsa01BQUdBO2dCQUNBdUMsV0FBVTtnQkFDVmYsSUFBSTtvQkFBRVMsVUFBVTtvQkFBR3VCLFNBQVM7b0JBQXNCQyxHQUFHO29CQUFHQyxJQUFJO3dCQUFFQyxJQUFJLENBQUMsRUFBRS9DLFlBQVksRUFBRSxDQUFDO29CQUFDO29CQUFHcUMsSUFBSWpDLFdBQVcsU0FBUztnQkFBTzswQkFFdEhGOzs7Ozs7Ozs7Ozs7QUFJakI7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzUxNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcEJhciwgVG9vbGJhciwgVHlwb2dyYXBoeSwgQXZhdGFyLCBEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgQm94LCBDc3NCYXNlbGluZSwgQnV0dG9uLCB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEluYm94SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luYm94JztcbmltcG9ydCBNYWlsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01haWwnO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcbiAgICBjb25zdCBsaW5rcyA9IFtcbiAgICAgICAgeyB0ZXh0OiAnVmljdG9ydW0gR3JvdXAnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1ncm91cC5jb20nIH0sXG4gICAgICAgIHsgdGV4dDogJ1ZpY3RvcnVtIFRyYWRlJywgaHJlZjogJ2h0dHBzOi8vdmljdG9ydW0tdHJhZGUuY29tJyB9LFxuICAgICAgICB7IHRleHQ6ICdGQVEnLCBocmVmOiAnaHR0cHM6Ly92aWN0b3J1bS1mYXEuY29tJyB9XG4gICAgXTtcbiAgICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBzeD17eyB6SW5kZXg6ICh0aGVtZSkgPT4gdGhlbWUuekluZGV4LmRyYXdlciArIDEsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgaGVpZ2h0OiBpc01vYmlsZSA/ICc2MHB4JyA6ICc4MHB4JyB9fT5cbiAgICAgICAgICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBoZWlnaHQ6ICcxMDAlJywgZmxleEdyb3c6IDEgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGhlaWdodDogaXNNb2JpbGUgPyAnNDBweCcgOiAnNjVweCcsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiB3aWR0aD17aXNNb2JpbGUgPyAxNTAgOiAyMjB9IGhlaWdodD17aXNNb2JpbGUgPyA0MCA6IDY1fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzTW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBub1dyYXAgY29tcG9uZW50PVwiZGl2XCIgc3g9e3sgZmxleEdyb3c6IDEsIHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWxjb21lIHRvIHRoZSBpbnZlc3RvcidzIHBlcnNvbmFsIGNhYmluZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiVXNlciBBdmF0YXJcIiBzcmM9e3Nlc3Npb24udXNlci5pbWFnZX0gc3g9e3sgbXI6IDIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnYmxhY2snIH19IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+TG9nb3V0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17eyBjb2xvcjogJ2JsYWNrJyB9fSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7IGNvbG9yOiAnYmxhY2snIH19PlNpZ24gVXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICAgICAgICAgICAgICAgIFtgJiAuTXVpRHJhd2VyLXBhcGVyYF06IHsgd2lkdGg6IGRyYXdlcldpZHRoLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgbXQ6IGlzTW9iaWxlID8gJzYwcHgnIDogJzgwcHgnIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VG9vbGJhciAvPlxuICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgb3ZlcmZsb3c6ICdhdXRvJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24ga2V5PXtsaW5rLnRleHR9IGNvbXBvbmVudD1cImFcIiBocmVmPXtsaW5rLmhyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e2xpbmsudGV4dH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvRHJhd2VyPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxuICAgICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBiZ2NvbG9yOiAnYmFja2dyb3VuZC5kZWZhdWx0JywgcDogMywgbWw6IHsgc206IGAke2RyYXdlcldpZHRofXB4YCB9LCBtdDogaXNNb2JpbGUgPyAnNjBweCcgOiAnODBweCcgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcEJhciIsIlRvb2xiYXIiLCJUeXBvZ3JhcGh5IiwiQXZhdGFyIiwiRHJhd2VyIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwiQm94IiwiQ3NzQmFzZWxpbmUiLCJCdXR0b24iLCJ1c2VNZWRpYVF1ZXJ5IiwidXNlVGhlbWUiLCJJbmJveEljb24iLCJNYWlsSWNvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiTGluayIsIkltYWdlIiwiZHJhd2VyV2lkdGgiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInRoZW1lIiwiaXNNb2JpbGUiLCJicmVha3BvaW50cyIsImRvd24iLCJsaW5rcyIsInRleHQiLCJocmVmIiwiZGF0YSIsInNlc3Npb24iLCJzeCIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInpJbmRleCIsImRyYXdlciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImZsZXhHcm93Iiwic3JjIiwiYWx0IiwibGF5b3V0IiwidmFyaWFudCIsIm5vV3JhcCIsImNvbXBvbmVudCIsInRleHRBbGlnbiIsImNvbG9yIiwidXNlciIsImltYWdlIiwibXIiLCJvbkNsaWNrIiwicGFzc0hyZWYiLCJmbGV4U2hyaW5rIiwiYm94U2l6aW5nIiwibXQiLCJvdmVyZmxvdyIsIm1hcCIsImxpbmsiLCJpbmRleCIsImJ1dHRvbiIsInByaW1hcnkiLCJiZ2NvbG9yIiwicCIsIm1sIiwic20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUN3QjtBQUNSO0FBRTFDLE1BQU1HLFFBQVEsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDSSw4REFBQ0osNERBQWVBO1FBQUNLLFNBQVNELFVBQVVDLE9BQU87a0JBQ3ZDLDRFQUFDSiwwREFBTUE7c0JBQ0gsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNlc3Npb25Qcm92aWRlciIsIkxheW91dCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Container,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _components_SliderWithInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SliderWithInput */ \"./components/SliderWithInput.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst Signup = ({ isLoggedIn })=>{\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(password);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/auth/register\", {\n                email,\n                password\n            });\n            alert(1);\n            console.log(\"Received signup data:\", response);\n            setMessage(response.data.message);\n            if (response.status === 201) {\n                router.push(\"/\"); // Перенаправление на корневой домен\n            }\n        } catch (error) {\n            setMessage(error.response ? error.response.data.message : \"An error occurred\");\n        }\n    };\n    if (isLoggedIn) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SliderWithInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 33,\n                columnNumber: 10\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n            lineNumber: 32,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                variant: \"h4\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        label: \"Email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        fullWidth: true,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.TextField, {\n                        label: \"Password\",\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        fullWidth: true,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, undefined),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__.Typography, {\n                color: \"error\",\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 59,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n        lineNumber: 39,\n        columnNumber: 7\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.getSession)(context);\n    if (session) {\n        return {\n            props: {\n                isLoggedIn: true\n            }\n        };\n    }\n    return {\n        props: {\n            isLoggedIn: false\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUNjO0FBQ0s7QUFDNEI7QUFDaEI7QUFFekQsTUFBTVMsU0FBUyxDQUFDLEVBQUVDLFVBQVUsRUFBRTtJQUM1QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxVQUFVQyxZQUFZLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWlCLFNBQVNmLHNEQUFTQTtJQUV4QixNQUFNZ0IsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ1Q7WUFDWixNQUFNVSxXQUFXLE1BQU10QixrREFBVSxDQUFDLHNCQUFzQjtnQkFBRVU7Z0JBQU9FO1lBQVM7WUFDMUVZLE1BQU07WUFDTkosUUFBUUMsR0FBRyxDQUFDLHlCQUF5QkM7WUFDckNQLFdBQVdPLFNBQVNHLElBQUksQ0FBQ1gsT0FBTztZQUNoQyxJQUFJUSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JWLE9BQU9XLElBQUksQ0FBQyxNQUFNLG9DQUFvQztZQUN4RDtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkYixXQUFXYSxNQUFNTixRQUFRLEdBQUdNLE1BQU1OLFFBQVEsQ0FBQ0csSUFBSSxDQUFDWCxPQUFPLEdBQUc7UUFDNUQ7SUFDRjtJQUVBLElBQUlMLFlBQVk7UUFDZCxxQkFDSSw4REFBQ04sZ0hBQVNBO3NCQUNULDRFQUFDSSxtRUFBWUE7Ozs7Ozs7Ozs7SUFHcEI7SUFFQSxxQkFDSSw4REFBQ0osZ0hBQVNBOzswQkFDUiw4REFBQ0csaUhBQVVBO2dCQUFDdUIsU0FBUTswQkFBSzs7Ozs7OzBCQUN6Qiw4REFBQ0M7Z0JBQUtDLFVBQVVkOztrQ0FDZCw4REFBQ2IsZ0hBQVNBO3dCQUNONEIsT0FBTTt3QkFDTkMsT0FBT3ZCO3dCQUNQd0IsVUFBVSxDQUFDaEIsSUFBTVAsU0FBU08sRUFBRWlCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDeENHLFNBQVM7d0JBQ1RDLFFBQU87Ozs7OztrQ0FFWCw4REFBQ2pDLGdIQUFTQTt3QkFDTjRCLE9BQU07d0JBQ05NLE1BQUs7d0JBQ0xMLE9BQU9yQjt3QkFDUHNCLFVBQVUsQ0FBQ2hCLElBQU1MLFlBQVlLLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7d0JBQzNDRyxTQUFTO3dCQUNUQyxRQUFPOzs7Ozs7a0NBRVgsOERBQUNoQyw2R0FBTUE7d0JBQUNpQyxNQUFLO3dCQUFTVCxTQUFRO3dCQUFZVSxPQUFNO2tDQUFVOzs7Ozs7Ozs7Ozs7WUFFM0R6Qix5QkFBVyw4REFBQ1IsaUhBQVVBO2dCQUFDaUMsT0FBTTswQkFBU3pCOzs7Ozs7Ozs7Ozs7QUFHL0M7QUFFTyxlQUFlMEIsbUJBQW1CQyxPQUFPO0lBQzlDLE1BQU1DLFVBQVUsTUFBTXhDLDJEQUFVQSxDQUFDdUM7SUFDakMsSUFBSUMsU0FBUztRQUNYLE9BQU87WUFDTEMsT0FBTztnQkFBRWxDLFlBQVk7WUFBSztRQUM1QjtJQUNGO0lBQ0EsT0FBTztRQUNMa0MsT0FBTztZQUFFbEMsWUFBWTtRQUFNO0lBQzdCO0FBQ0Y7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpY3RvcnVtLXBvcnRhbC8uL3BhZ2VzL3NpZ251cC5qcz9jYThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBUZXh0RmllbGQsIEJ1dHRvbiwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IEFtb3VudFNsaWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9TbGlkZXJXaXRoSW5wdXRcIjtcblxuY29uc3QgU2lnbnVwID0gKHsgaXNMb2dnZWRJbiB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvcmVnaXN0ZXInLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgIGFsZXJ0KDEpO1xuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHNpZ251cCBkYXRhOicsIHJlc3BvbnNlKTtcbiAgICAgIHNldE1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyDQn9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QsCDQutC+0YDQvdC10LLQvtC5INC00L7QvNC10L1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TWVzc2FnZShlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNMb2dnZWRJbikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICA8QW1vdW50U2xpZGVyLz5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5TaWduIFVwPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlNpZ24gVXA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7bWVzc2FnZSAmJiA8VHlwb2dyYXBoeSBjb2xvcj1cImVycm9yXCI+e21lc3NhZ2V9PC9UeXBvZ3JhcGh5Pn1cbiAgICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGNvbnRleHQpO1xuICBpZiAoc2Vzc2lvbikge1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBpc0xvZ2dlZEluOiB0cnVlIH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGlzTG9nZ2VkSW46IGZhbHNlIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiZ2V0U2Vzc2lvbiIsIkNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJBbW91bnRTbGlkZXIiLCJTaWdudXAiLCJpc0xvZ2dlZEluIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJhbGVydCIsImRhdGEiLCJzdGF0dXMiLCJwdXNoIiwiZXJyb3IiLCJ2YXJpYW50IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZnVsbFdpZHRoIiwibWFyZ2luIiwidHlwZSIsImNvbG9yIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInNlc3Npb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/signup.js\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fsignup&preferredRegion=&absolutePagePath=.%2Fpages%2Fsignup.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();