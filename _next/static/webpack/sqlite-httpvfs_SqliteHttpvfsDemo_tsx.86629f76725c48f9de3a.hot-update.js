/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("sqlite-httpvfs_SqliteHttpvfsDemo_tsx",{

/***/ "./sqlite-httpvfs/FtsDemo.tsx":
/*!************************************!*\
  !*** ./sqlite-httpvfs/FtsDemo.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": function() { return /* binding */ search; },\n/* harmony export */   \"FtsDemo\": function() { return /* binding */ FtsDemo; }\n/* harmony export */ });\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select/async */ \"../node_modules/react-select/async/dist/react-select.esm.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debounce-promise */ \"../node_modules/debounce-promise/dist/index.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/tehdog/data/dev/2019/blog/client/sqlite-httpvfs/FtsDemo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nfunction search(_x, _x2) {\n  return _search.apply(this, arguments);\n}\n\nfunction _search() {\n  _search = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(db, author) {\n    var query_inner, query, sql_query, ret;\n    return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            query_inner = author.split(\" \").map(function (n) {\n              return n.replace(/\"/g, \"\");\n            }).map(function (e) {\n              return \"\\\"\".concat(e, \"\\\"*\");\n            }).join(\" \");\n            query = \"\".concat(query_inner);\n            sql_query = \"select *, snippet(indicator_search, -1, '[[', ']]', ' ... ', 32) as snippet from indicator_search where indicator_search match ? limit 100\";\n            console.log(\"executing search query\", query, sql_query);\n            _context.next = 7;\n            return db.query(sql_query, [query]);\n\n          case 7:\n            ret = _context.sent;\n            return _context.abrupt(\"return\", ret);\n\n          case 11:\n            _context.prev = 11;\n            _context.t0 = _context[\"catch\"](0);\n            console.error(\"authorsSearch\", _context.t0);\n            throw _context.t0;\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 11]]);\n  }));\n  return _search.apply(this, arguments);\n}\n\nvar searchDebounce = debounce_promise__WEBPACK_IMPORTED_MODULE_4___default()(search, 250, {\n  leading: true\n});\n\nfunction Option(indicator, meta) {\n  if (meta.context === \"value\") return indicator.indicator_name;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"b\", {\n      children: indicator.indicator_name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this), indicator.snippet]\n  }, void 0, true);\n}\n\n_c = Option;\nvar FtsDemo = function FtsDemo(_ref) {\n  _s();\n\n  var store = _ref.store;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  function setSelected(a) {\n    console.log(\"plot\", a);\n  }\n\n  console.log(\"store\", store);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_select_async__WEBPACK_IMPORTED_MODULE_3__.default, {\n      cacheOptions: true,\n      inputValue: search,\n      onInputChange: function onInputChange(e) {\n        return setSearch(e);\n      },\n      loadOptions: function loadOptions(e) {\n        return searchDebounce(store.worker.db, e);\n      },\n      getOptionLabel: function getOptionLabel(e) {\n        return e.indicator_name;\n      },\n      formatOptionLabel: Option,\n      getOptionValue: function getOptionValue(e) {\n        return e.indicator_code;\n      },\n      onChange: function onChange(e) {\n        return e && setSelected;\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(FtsDemo, \"42GASUL8pX2/N6Oh5HTh0GvQEF0=\");\n\n_c2 = FtsDemo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Option\");\n$RefreshReg$(_c2, \"FtsDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3FsaXRlLWh0dHB2ZnMvRnRzRGVtby50c3g/ZWVmNyJdLCJuYW1lcyI6WyJzZWFyY2giLCJkYiIsImF1dGhvciIsInF1ZXJ5X2lubmVyIiwic3BsaXQiLCJtYXAiLCJuIiwicmVwbGFjZSIsImUiLCJqb2luIiwicXVlcnkiLCJzcWxfcXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmV0IiwiZXJyb3IiLCJzZWFyY2hEZWJvdW5jZSIsImRlYm91bmNlIiwibGVhZGluZyIsIk9wdGlvbiIsImluZGljYXRvciIsIm1ldGEiLCJjb250ZXh0IiwiaW5kaWNhdG9yX25hbWUiLCJzbmlwcGV0IiwiRnRzRGVtbyIsInN0b3JlIiwidXNlU3RhdGUiLCJzZXRTZWFyY2giLCJzZXRTZWxlY3RlZCIsImEiLCJ3b3JrZXIiLCJpbmRpY2F0b3JfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQWFPLFNBQWVBLE1BQXRCO0FBQUE7QUFBQTs7O2tUQUFPLGlCQUNOQyxFQURNLEVBRU5DLE1BRk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQ0MsdUJBTEQsR0FLZUQsTUFBTSxDQUN4QkUsS0FEa0IsQ0FDWixHQURZLEVBRWxCQyxHQUZrQixDQUVkLFVBQUNDLENBQUQ7QUFBQSxxQkFBT0EsQ0FBQyxDQUFDQyxPQUFGLENBQVUsSUFBVixFQUFnQixFQUFoQixDQUFQO0FBQUEsYUFGYyxFQUdsQkYsR0FIa0IsQ0FHZCxVQUFDRyxDQUFEO0FBQUEsaUNBQVdBLENBQVg7QUFBQSxhQUhjLEVBSWxCQyxJQUprQixDQUliLEdBSmEsQ0FMZjtBQVVDQyxpQkFWRCxhQVVZUCxXQVZaO0FBV0NRLHFCQVhEO0FBWUxDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ0gsS0FBdEMsRUFBNkNDLFNBQTdDO0FBWks7QUFBQSxtQkFhY1YsRUFBRSxDQUFDUyxLQUFILENBQVNDLFNBQVQsRUFBb0IsQ0FBQ0QsS0FBRCxDQUFwQixDQWJkOztBQUFBO0FBYUNJLGVBYkQ7QUFBQSw2Q0FjRUEsR0FkRjs7QUFBQTtBQUFBO0FBQUE7QUFnQkxGLG1CQUFPLENBQUNHLEtBQVIsQ0FBYyxlQUFkO0FBaEJLOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFxQlAsSUFBTUMsY0FBYyxHQUFHQyx1REFBUSxDQUFDakIsTUFBRCxFQUFTLEdBQVQsRUFBYztBQUFFa0IsU0FBTyxFQUFFO0FBQVgsQ0FBZCxDQUEvQjs7QUFDQSxTQUFTQyxNQUFULENBQ0NDLFNBREQsRUFFQ0MsSUFGRCxFQUdFO0FBQ0QsTUFBSUEsSUFBSSxDQUFDQyxPQUFMLEtBQWlCLE9BQXJCLEVBQThCLE9BQU9GLFNBQVMsQ0FBQ0csY0FBakI7QUFDOUIsc0JBQ0M7QUFBQSw0QkFDQztBQUFBLGdCQUFJSCxTQUFTLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEVBRUVILFNBQVMsQ0FBQ0ksT0FGWjtBQUFBLGtCQUREO0FBTUE7O0tBWFFMLE07QUFZRixJQUFNTSxPQUFtQyxHQUFHLFNBQXRDQSxPQUFzQyxPQUFlO0FBQUE7O0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUFBLGtCQUNyQ0MsK0NBQVEsQ0FBQyxFQUFELENBRDZCO0FBQUEsTUFDMUQzQixNQUQwRDtBQUFBLE1BQ2xENEIsU0FEa0Q7O0FBRWpFLFdBQVNDLFdBQVQsQ0FBcUJDLENBQXJCLEVBQTZCO0FBQzVCbEIsV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQmlCLENBQXBCO0FBQ0E7O0FBQ0RsQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCYSxLQUFyQjtBQUNBLHNCQUNDO0FBQUEsMkJBQ0MsOERBQUMsdURBQUQ7QUFDQyxrQkFBWSxNQURiO0FBRUMsZ0JBQVUsRUFBRTFCLE1BRmI7QUFHQyxtQkFBYSxFQUFFLHVCQUFDUSxDQUFEO0FBQUEsZUFBT29CLFNBQVMsQ0FBQ3BCLENBQUQsQ0FBaEI7QUFBQSxPQUhoQjtBQUlDLGlCQUFXLEVBQUUscUJBQUNBLENBQUQ7QUFBQSxlQUFPUSxjQUFjLENBQUNVLEtBQUssQ0FBQ0ssTUFBTixDQUFjOUIsRUFBZixFQUFtQk8sQ0FBbkIsQ0FBckI7QUFBQSxPQUpkO0FBS0Msb0JBQWMsRUFBRSx3QkFBQ0EsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ2UsY0FBVDtBQUFBLE9BTGpCO0FBTUMsdUJBQWlCLEVBQUVKLE1BTnBCO0FBT0Msb0JBQWMsRUFBRSx3QkFBQ1gsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ3dCLGNBQVQ7QUFBQSxPQVBqQjtBQVFDLGNBQVEsRUFBRSxrQkFBQ3hCLENBQUQ7QUFBQSxlQUFPQSxDQUFDLElBQUlxQixXQUFaO0FBQUE7QUFSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBY0EsQ0FwQk07O0dBQU1KLE87O01BQUFBLE8iLCJmaWxlIjoiLi9zcWxpdGUtaHR0cHZmcy9GdHNEZW1vLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3FsaXRlSHR0cHZmc0RlbW9cIlxuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvYXN5bmNcIlxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJkZWJvdW5jZS1wcm9taXNlXCJcbmltcG9ydCB7IFdvcmtlckh0dHB2ZnMgfSBmcm9tIFwic3FsLmpzLWh0dHB2ZnNcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZmFFamVjdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIlxuaW1wb3J0IHsgRm9ybWF0T3B0aW9uTGFiZWxNZXRhLCBHcm91cFR5cGVCYXNlLCBPcHRpb25Qcm9wcyB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxudHlwZSBJbmRpY2F0b3JJbmZvID0ge1xuXHRpbmRpY2F0b3JfY29kZTogc3RyaW5nXG5cdHRvcGljOiBzdHJpbmdcblx0aW5kaWNhdG9yX25hbWU6IHN0cmluZ1xuXHRzaG9ydF9kZWZpbml0aW9uOiBzdHJpbmdcblx0bG9uZ19kZWZpbml0aW9uOiBzdHJpbmdcblx0c3RhdGlzdGljYWxfY29uY2VwdF9hbmRfbWV0aG9kb2xvZ3k6IHN0cmluZ1xuXHRkZXZlbG9wbWVudF9yZWxldmFuY2U6IHN0cmluZ1xuXHRzbmlwcGV0OiBzdHJpbmdcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2goXG5cdGRiOiBXb3JrZXJIdHRwdmZzW1wiZGJcIl0sXG5cdGF1dGhvcjogc3RyaW5nLFxuKTogUHJvbWlzZTxJbmRpY2F0b3JJbmZvW10+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBxdWVyeV9pbm5lciA9IGF1dGhvclxuXHRcdFx0LnNwbGl0KFwiIFwiKVxuXHRcdFx0Lm1hcCgobikgPT4gbi5yZXBsYWNlKC9cIi9nLCBcIlwiKSlcblx0XHRcdC5tYXAoKGUpID0+IGBcIiR7ZX1cIipgKVxuXHRcdFx0LmpvaW4oXCIgXCIpXG5cdFx0Y29uc3QgcXVlcnkgPSBgJHtxdWVyeV9pbm5lcn1gXG5cdFx0Y29uc3Qgc3FsX3F1ZXJ5ID0gYHNlbGVjdCAqLCBzbmlwcGV0KGluZGljYXRvcl9zZWFyY2gsIC0xLCAnW1snLCAnXV0nLCAnIC4uLiAnLCAzMikgYXMgc25pcHBldCBmcm9tIGluZGljYXRvcl9zZWFyY2ggd2hlcmUgaW5kaWNhdG9yX3NlYXJjaCBtYXRjaCA/IGxpbWl0IDEwMGBcblx0XHRjb25zb2xlLmxvZyhcImV4ZWN1dGluZyBzZWFyY2ggcXVlcnlcIiwgcXVlcnksIHNxbF9xdWVyeSlcblx0XHRjb25zdCByZXQgPSAoYXdhaXQgZGIucXVlcnkoc3FsX3F1ZXJ5LCBbcXVlcnldKSkgYXMgSW5kaWNhdG9ySW5mb1tdXG5cdFx0cmV0dXJuIHJldFxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcImF1dGhvcnNTZWFyY2hcIiwgZSlcblx0XHR0aHJvdyBlXG5cdH1cbn1cblxuY29uc3Qgc2VhcmNoRGVib3VuY2UgPSBkZWJvdW5jZShzZWFyY2gsIDI1MCwgeyBsZWFkaW5nOiB0cnVlIH0pXG5mdW5jdGlvbiBPcHRpb24oXG5cdGluZGljYXRvcjogSW5kaWNhdG9ySW5mbyxcblx0bWV0YTogRm9ybWF0T3B0aW9uTGFiZWxNZXRhPEluZGljYXRvckluZm8sIGZhbHNlPixcbikge1xuXHRpZiAobWV0YS5jb250ZXh0ID09PSBcInZhbHVlXCIpIHJldHVybiBpbmRpY2F0b3IuaW5kaWNhdG9yX25hbWVcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGI+e2luZGljYXRvci5pbmRpY2F0b3JfbmFtZX08L2I+XG5cdFx0XHR7aW5kaWNhdG9yLnNuaXBwZXR9XG5cdFx0PC8+XG5cdClcbn1cbmV4cG9ydCBjb25zdCBGdHNEZW1vOiBSZWFjdC5GQzx7IHN0b3JlOiBTdG9yZSB9PiA9ICh7IHN0b3JlIH0pID0+IHtcblx0Y29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXG5cdGZ1bmN0aW9uIHNldFNlbGVjdGVkKGE6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKFwicGxvdFwiLCBhKVxuXHR9XG5cdGNvbnNvbGUubG9nKFwic3RvcmVcIiwgc3RvcmUpXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxBc3luY1NlbGVjdDxJbmRpY2F0b3JJbmZvPlxuXHRcdFx0XHRjYWNoZU9wdGlvbnNcblx0XHRcdFx0aW5wdXRWYWx1ZT17c2VhcmNofVxuXHRcdFx0XHRvbklucHV0Q2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUpfVxuXHRcdFx0XHRsb2FkT3B0aW9ucz17KGUpID0+IHNlYXJjaERlYm91bmNlKHN0b3JlLndvcmtlciEuZGIsIGUpfVxuXHRcdFx0XHRnZXRPcHRpb25MYWJlbD17KGUpID0+IGUuaW5kaWNhdG9yX25hbWV9XG5cdFx0XHRcdGZvcm1hdE9wdGlvbkxhYmVsPXtPcHRpb259XG5cdFx0XHRcdGdldE9wdGlvblZhbHVlPXsoZSkgPT4gZS5pbmRpY2F0b3JfY29kZX1cblx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBlICYmIHNldFNlbGVjdGVkfVxuXHRcdFx0Lz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sqlite-httpvfs/FtsDemo.tsx\n");

/***/ })

});