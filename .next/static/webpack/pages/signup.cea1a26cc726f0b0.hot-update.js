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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Container,TextField,Typography!=!@mui/material */ \"__barrel_optimize__?names=Button,Container,TextField,Typography!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Signup = (param)=>{\n    let { isLoggedIn } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(password);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/auth/register\", {\n                email,\n                password\n            });\n            alert(1);\n            console.log(\"Received signup data:\", response);\n            setMessage(response.data.message);\n            if (response.status === 201) {\n                router.push(\"/\"); // Перенаправление на корневой домен\n            }\n        } catch (error) {\n            setMessage(error.response ? error.response.data.message : \"An error occurred\");\n        }\n    };\n    if (isLoggedIn) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {}, void 0, false, {\n            fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                variant: \"h4\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        label: \"Email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value),\n                        fullWidth: true,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.TextField, {\n                        label: \"Password\",\n                        type: \"password\",\n                        value: password,\n                        onChange: (e)=>setPassword(e.target.value),\n                        fullWidth: true,\n                        margin: \"normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        type: \"submit\",\n                        variant: \"contained\",\n                        color: \"primary\",\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Container_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {\n                color: \"error\",\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n                lineNumber: 58,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisevseev/Desktop/victorum-portal/pages/signup.js\",\n        lineNumber: 38,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Signup, \"+iw4j2APsIZIAzNMWEKwwXtEBpY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Signup;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Signup);\nvar _c;\n$RefreshReg$(_c, \"Signup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWdudXAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUNjO0FBRWlDO0FBRXpFLE1BQU1PLFNBQVM7UUFBQyxFQUFFQyxVQUFVLEVBQUU7O0lBQzVCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDYSxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU1lLFNBQVNiLHNEQUFTQTtJQUV4QixNQUFNYyxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRkMsUUFBUUMsR0FBRyxDQUFDVDtZQUNaLE1BQU1VLFdBQVcsTUFBTXBCLGtEQUFVLENBQUMsc0JBQXNCO2dCQUFFUTtnQkFBT0U7WUFBUztZQUMxRVksTUFBTTtZQUNOSixRQUFRQyxHQUFHLENBQUMseUJBQXlCQztZQUNyQ1AsV0FBV08sU0FBU0csSUFBSSxDQUFDWCxPQUFPO1lBQ2hDLElBQUlRLFNBQVNJLE1BQU0sS0FBSyxLQUFLO2dCQUMzQlYsT0FBT1csSUFBSSxDQUFDLE1BQU0sb0NBQW9DO1lBQ3hEO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RiLFdBQVdhLE1BQU1OLFFBQVEsR0FBR00sTUFBTU4sUUFBUSxDQUFDRyxJQUFJLENBQUNYLE9BQU8sR0FBRztRQUM1RDtJQUNGO0lBRUEsSUFBSUwsWUFBWTtRQUNkLHFCQUNJLDhEQUFDTCxnSEFBU0E7Ozs7O0lBSWhCO0lBRUEscUJBQ0ksOERBQUNBLGdIQUFTQTs7MEJBQ1IsOERBQUNHLGlIQUFVQTtnQkFBQ3NCLFNBQVE7MEJBQUs7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFLQyxVQUFVZDs7a0NBQ2QsOERBQUNaLGdIQUFTQTt3QkFDTjJCLE9BQU07d0JBQ05DLE9BQU92Qjt3QkFDUHdCLFVBQVUsQ0FBQ2hCLElBQU1QLFNBQVNPLEVBQUVpQixNQUFNLENBQUNGLEtBQUs7d0JBQ3hDRyxTQUFTO3dCQUNUQyxRQUFPOzs7Ozs7a0NBRVgsOERBQUNoQyxnSEFBU0E7d0JBQ04yQixPQUFNO3dCQUNOTSxNQUFLO3dCQUNMTCxPQUFPckI7d0JBQ1BzQixVQUFVLENBQUNoQixJQUFNTCxZQUFZSyxFQUFFaUIsTUFBTSxDQUFDRixLQUFLO3dCQUMzQ0csU0FBUzt3QkFDVEMsUUFBTzs7Ozs7O2tDQUVYLDhEQUFDL0IsNkdBQU1BO3dCQUFDZ0MsTUFBSzt3QkFBU1QsU0FBUTt3QkFBWVUsT0FBTTtrQ0FBVTs7Ozs7Ozs7Ozs7O1lBRTNEekIseUJBQVcsOERBQUNQLGlIQUFVQTtnQkFBQ2dDLE9BQU07MEJBQVN6Qjs7Ozs7Ozs7Ozs7O0FBRy9DO0dBdERNTjs7UUFJV0wsa0RBQVNBOzs7S0FKcEJLOztBQW9FTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanM/Y2E4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgVGV4dEZpZWxkLCBCdXR0b24sIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcblxuY29uc3QgU2lnbnVwID0gKHsgaXNMb2dnZWRJbiB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2F1dGgvcmVnaXN0ZXInLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcbiAgICAgIGFsZXJ0KDEpO1xuICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIHNpZ251cCBkYXRhOicsIHJlc3BvbnNlKTtcbiAgICAgIHNldE1lc3NhZ2UocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyDQn9C10YDQtdC90LDQv9GA0LDQstC70LXQvdC40LUg0L3QsCDQutC+0YDQvdC10LLQvtC5INC00L7QvNC10L1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0TWVzc2FnZShlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSA6ICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoaXNMb2dnZWRJbikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgey8qPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+WW91IGFyZSBhbHJlYWR5IHJlZ2lzdGVyZWQ8L1R5cG9ncmFwaHk+Ki99XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+U2lnbiBVcDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5TaWduIFVwPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAge21lc3NhZ2UgJiYgPFR5cG9ncmFwaHkgY29sb3I9XCJlcnJvclwiPnttZXNzYWdlfTwvVHlwb2dyYXBoeT59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjb250ZXh0KTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgaXNMb2dnZWRJbjogdHJ1ZSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBpc0xvZ2dlZEluOiBmYWxzZSB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJTaWdudXAiLCJpc0xvZ2dlZEluIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJhbGVydCIsImRhdGEiLCJzdGF0dXMiLCJwdXNoIiwiZXJyb3IiLCJ2YXJpYW50IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiZnVsbFdpZHRoIiwibWFyZ2luIiwidHlwZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signup.js\n"));

/***/ })

});