"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/AmountSlider.js":
/*!************************************!*\
  !*** ./components/AmountSlider.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Slider */ \"./node_modules/@mui/material/Slider/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AmountSlider = ()=>{\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // Начальное значение ползунка\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    const formattedValue = value.toLocaleString(\"en-US\"); // Форматирование для удобства чтения\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Slider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                value: value,\n                onChange: handleChange,\n                \"aria-labelledby\": \"amount-slider\",\n                min: 0,\n                max: 100000,\n                step: 10000,\n                valueLabelDisplay: \"auto\" // Отображать текущее значение\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/AmountSlider.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"amount-slider\",\n                variant: \"body1\",\n                children: [\n                    \"$\",\n                    formattedValue\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/AmountSlider.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/components/AmountSlider.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AmountSlider, \"qPBOvRc2Co1iWTsdTL0g7j/rpjU=\");\n_c = AmountSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AmountSlider);\nvar _c;\n$RefreshReg$(_c, \"AmountSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Ftb3VudFNsaWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDRTtBQUNRO0FBRWxELE1BQU1JLGVBQWU7O0lBQ2pCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJLDhCQUE4QjtJQUVyRSxNQUFNTSxlQUFlLENBQUNDLE9BQU9DO1FBQ3pCSCxTQUFTRztJQUNiO0lBRUEsTUFBTUMsaUJBQWlCTCxNQUFNTSxjQUFjLENBQUMsVUFBVSxxQ0FBcUM7SUFFM0YscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ1YsNERBQU1BO2dCQUNIRyxPQUFPQTtnQkFDUFEsVUFBVU47Z0JBQ1ZPLG1CQUFnQjtnQkFDaEJDLEtBQUs7Z0JBQ0xDLEtBQUs7Z0JBQ0xDLE1BQU07Z0JBQ05DLG1CQUFrQixPQUFPLDhCQUE4Qjs7Ozs7OzBCQUUzRCw4REFBQ2YsZ0VBQVVBO2dCQUFDZ0IsSUFBRztnQkFBZ0JDLFNBQVE7O29CQUFRO29CQUN6Q1Y7Ozs7Ozs7Ozs7Ozs7QUFJbEI7R0F6Qk1OO0tBQUFBO0FBMkJOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQW1vdW50U2xpZGVyLmpzPzBkOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICdAbXVpL21hdGVyaWFsL1NsaWRlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xuXG5jb25zdCBBbW91bnRTbGlkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKTsgLy8g0J3QsNGH0LDQu9GM0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0L/QvtC70LfRg9C90LrQsFxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZvcm1hdHRlZFZhbHVlID0gdmFsdWUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyk7IC8vINCk0L7RgNC80LDRgtC40YDQvtCy0LDQvdC40LUg0LTQu9GPINGD0LTQvtCx0YHRgtCy0LAg0YfRgtC10L3QuNGPXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFNsaWRlclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImFtb3VudC1zbGlkZXJcIlxuICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICBtYXg9ezEwMDAwMH0gLy8gMTAwINC80LjQu9C70LjQvtC90L7QslxuICAgICAgICAgICAgICAgIHN0ZXA9ezEwMDAwfSAvLyDQqNCw0LMg0L/QvtC70LfRg9C90LrQsCAtIDEg0LzQuNC70LvQuNC+0L1cbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsRGlzcGxheT1cImF1dG9cIiAvLyDQntGC0L7QsdGA0LDQttCw0YLRjCDRgtC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJhbW91bnQtc2xpZGVyXCIgdmFyaWFudD1cImJvZHkxXCI+XG4gICAgICAgICAgICAgICAgJHtmb3JtYXR0ZWRWYWx1ZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtb3VudFNsaWRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNsaWRlciIsIlR5cG9ncmFwaHkiLCJBbW91bnRTbGlkZXIiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJuZXdWYWx1ZSIsImZvcm1hdHRlZFZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJkaXYiLCJvbkNoYW5nZSIsImFyaWEtbGFiZWxsZWRieSIsIm1pbiIsIm1heCIsInN0ZXAiLCJ2YWx1ZUxhYmVsRGlzcGxheSIsImlkIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AmountSlider.js\n"));

/***/ })

});