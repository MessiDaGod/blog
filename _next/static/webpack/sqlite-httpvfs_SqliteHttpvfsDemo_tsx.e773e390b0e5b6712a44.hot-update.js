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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": function() { return /* binding */ search; },\n/* harmony export */   \"FtsDemo\": function() { return /* binding */ FtsDemo; }\n/* harmony export */ });\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/async */ \"../node_modules/react-select/async/dist/react-select.esm.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debounce-promise */ \"../node_modules/debounce-promise/dist/index.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ \"../node_modules/recharts/es6/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/tehdog/data/dev/2019/blog/client/sqlite-httpvfs/FtsDemo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nfunction search(_x, _x2) {\n  return _search.apply(this, arguments);\n}\n\nfunction _search() {\n  _search = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(store, author) {\n    var _yield$store$ready2, db, query_inner, query, sql_query, ret;\n\n    return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!(author.length < 3)) {\n              _context2.next = 2;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", [{\n              error: \"Type more...\"\n            }]);\n\n          case 2:\n            _context2.prev = 2;\n            _context2.next = 5;\n            return store.ready;\n\n          case 5:\n            _yield$store$ready2 = _context2.sent;\n            db = _yield$store$ready2.db;\n            query_inner = author.split(\" \").map(function (n) {\n              return n.replace(/\"/g, \"\");\n            }).map(function (e) {\n              return \"\\\"\".concat(e, \"\\\"*\");\n            }).join(\" \");\n            query = \"\".concat(query_inner);\n            sql_query = \"select *, snippet(indicator_search, -1, '\\xA7', '\\xA7', ' ... ', 32) as snippet from indicator_search where indicator_search match ? order by rank limit 10\";\n            console.log(\"executing search query\", query, sql_query);\n            _context2.next = 13;\n            return db.query(sql_query, [query]);\n\n          case 13:\n            ret = _context2.sent;\n            return _context2.abrupt(\"return\", ret);\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](2);\n            console.error(\"authorsSearch\", _context2.t0);\n            throw _context2.t0;\n\n          case 21:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 17]]);\n  }));\n  return _search.apply(this, arguments);\n}\n\nvar searchDebounce = debounce_promise__WEBPACK_IMPORTED_MODULE_5___default()(search, 250);\n\nfunction Option(indicator, meta) {\n  if (indicator.error) return indicator.error;\n  if (meta.context === \"value\") return indicator.indicator_name;\n  var snippetReact = [];\n\n  var _iterator = _createForOfIteratorHelper(indicator.snippet.split(\"§\").entries()),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _step$value = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_step.value, 2),\n          i = _step$value[0],\n          part = _step$value[1];\n\n      snippetReact.push(i % 2 == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"b\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 47\n      }, this));\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: indicator.indicator_name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        color: \"gray\"\n      },\n      children: snippetReact\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_c = Option;\nvar FtsDemo = function FtsDemo(_ref) {\n  _s();\n\n  var store = _ref.store;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  function setSelected(_x3) {\n    return _setSelected.apply(this, arguments);\n  }\n\n  function _setSelected() {\n    _setSelected = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(a) {\n      var _yield$store$ready, db, res;\n\n      return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"plot\", a);\n              _context.next = 3;\n              return store.ready;\n\n            case 3:\n              _yield$store$ready = _context.sent;\n              db = _yield$store$ready.db;\n              _context.next = 7;\n              return db.query(\"select year, value from wdi_data where country_code = ? and indicator_code = ?\", [\"USA\", \"SE.ADT.1524.LT.ZS\"]);\n\n            case 7:\n              res = _context.sent;\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _setSelected.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_select_async__WEBPACK_IMPORTED_MODULE_4__.default, {\n      cacheOptions: true,\n      inputValue: search,\n      onInputChange: function onInputChange(e) {\n        return setSearch(e);\n      },\n      loadOptions: function loadOptions(e) {\n        console.log(\"store\", store);\n        return searchDebounce(store, e);\n      },\n      getOptionLabel: function getOptionLabel(e) {\n        return e.indicator_name;\n      },\n      formatOptionLabel: Option,\n      getOptionValue: function getOptionValue(e) {\n        return e.indicator_code;\n      },\n      onChange: function onChange(e) {\n        return e && setSelected(e);\n      },\n      isOptionDisabled: function isOptionDisabled(e) {\n        return !!e.error;\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 4\n    }, _this), data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.BarChart, {\n      data: data,\n      layout: \"vertical\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, {\n        type: \"number\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.YAxis, {\n        type: \"category\",\n        dataKey: \"name\",\n        width: 100\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Legend, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 6\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_7__.Bar, {\n        dataKey: \"value\",\n        name: \"Flonk\",\n        fill: \"#8884d8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 6\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(FtsDemo, \"52fyFvyPNq8fqWDhN8wef+WmX+c=\");\n\n_c2 = FtsDemo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Option\");\n$RefreshReg$(_c2, \"FtsDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3FsaXRlLWh0dHB2ZnMvRnRzRGVtby50c3g/ZWVmNyJdLCJuYW1lcyI6WyJzZWFyY2giLCJzdG9yZSIsImF1dGhvciIsImxlbmd0aCIsImVycm9yIiwicmVhZHkiLCJkYiIsInF1ZXJ5X2lubmVyIiwic3BsaXQiLCJtYXAiLCJuIiwicmVwbGFjZSIsImUiLCJqb2luIiwicXVlcnkiLCJzcWxfcXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmV0Iiwic2VhcmNoRGVib3VuY2UiLCJkZWJvdW5jZSIsIk9wdGlvbiIsImluZGljYXRvciIsIm1ldGEiLCJjb250ZXh0IiwiaW5kaWNhdG9yX25hbWUiLCJzbmlwcGV0UmVhY3QiLCJzbmlwcGV0IiwiZW50cmllcyIsImkiLCJwYXJ0IiwicHVzaCIsImNvbG9yIiwiRnRzRGVtbyIsInVzZVN0YXRlIiwic2V0U2VhcmNoIiwiZGF0YSIsInNldERhdGEiLCJzZXRTZWxlY3RlZCIsImEiLCJyZXMiLCJpbmRpY2F0b3JfY29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWU8sU0FBZUEsTUFBdEI7QUFBQTtBQUFBOzs7a1RBQU8sa0JBQ05DLEtBRE0sRUFFTkMsTUFGTTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSUZBLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUpkO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQUtFLENBQUU7QUFBRUMsbUJBQUssRUFBRTtBQUFULGFBQUYsQ0FMRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFRZ0JILEtBQUssQ0FBQ0ksS0FSdEI7O0FBQUE7QUFBQTtBQVFHQyxjQVJILHVCQVFHQSxFQVJIO0FBU0NDLHVCQVRELEdBU2VMLE1BQU0sQ0FDeEJNLEtBRGtCLENBQ1osR0FEWSxFQUVsQkMsR0FGa0IsQ0FFZCxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FB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QUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRCxlQUlDLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRCxlQUtDLDhEQUFDLHlDQUFEO0FBQUssZUFBTyxFQUFDLE9BQWI7QUFBcUIsWUFBSSxFQUFFLE9BQTNCO0FBQW9DLFlBQUksRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMkJBLENBdkNNOztHQUFNSCxPOztNQUFBQSxPIiwiZmlsZSI6Ii4vc3FsaXRlLWh0dHB2ZnMvRnRzRGVtby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1NxbGl0ZUh0dHB2ZnNEZW1vXCJcbmltcG9ydCBBc3luY1NlbGVjdCBmcm9tIFwicmVhY3Qtc2VsZWN0L2FzeW5jXCJcbmltcG9ydCBkZWJvdW5jZSBmcm9tIFwiZGVib3VuY2UtcHJvbWlzZVwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgRm9ybWF0T3B0aW9uTGFiZWxNZXRhIH0gZnJvbSBcInJlYWN0LXNlbGVjdFwiXG5pbXBvcnQgeyBCYXIsIEJhckNoYXJ0LCBMZWdlbmQsIFRvb2x0aXAsIFhBeGlzLCBZQXhpcyB9IGZyb20gXCJyZWNoYXJ0c1wiXG50eXBlIEluZGljYXRvckluZm8gPSB7XG5cdGluZGljYXRvcl9jb2RlOiBzdHJpbmdcblx0dG9waWM6IHN0cmluZ1xuXHRpbmRpY2F0b3JfbmFtZTogc3RyaW5nXG5cdHNob3J0X2RlZmluaXRpb246IHN0cmluZ1xuXHRsb25nX2RlZmluaXRpb246IHN0cmluZ1xuXHRzdGF0aXN0aWNhbF9jb25jZXB0X2FuZF9tZXRob2RvbG9neTogc3RyaW5nXG5cdGRldmVsb3BtZW50X3JlbGV2YW5jZTogc3RyaW5nXG5cdHNuaXBwZXQ6IHN0cmluZ1xuXHRlcnJvcj86IHRydWVcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2goXG5cdHN0b3JlOiBTdG9yZSxcblx0YXV0aG9yOiBzdHJpbmcsXG4pOiBQcm9taXNlPEluZGljYXRvckluZm9bXT4ge1xuXHRpZiAoYXV0aG9yLmxlbmd0aCA8IDMpIHtcblx0XHRyZXR1cm4gWyh7IGVycm9yOiBcIlR5cGUgbW9yZS4uLlwiIH0gYXMgdW5rbm93bikgYXMgSW5kaWNhdG9ySW5mb11cblx0fVxuXHR0cnkge1xuXHRcdGNvbnN0IHsgZGIgfSA9IGF3YWl0IHN0b3JlLnJlYWR5XG5cdFx0Y29uc3QgcXVlcnlfaW5uZXIgPSBhdXRob3Jcblx0XHRcdC5zcGxpdChcIiBcIilcblx0XHRcdC5tYXAoKG4pID0+IG4ucmVwbGFjZSgvXCIvZywgXCJcIikpXG5cdFx0XHQubWFwKChlKSA9PiBgXCIke2V9XCIqYClcblx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdGNvbnN0IHF1ZXJ5ID0gYCR7cXVlcnlfaW5uZXJ9YFxuXHRcdGNvbnN0IHNxbF9xdWVyeSA9IGBzZWxlY3QgKiwgc25pcHBldChpbmRpY2F0b3Jfc2VhcmNoLCAtMSwgJ8KnJywgJ8KnJywgJyAuLi4gJywgMzIpIGFzIHNuaXBwZXQgZnJvbSBpbmRpY2F0b3Jfc2VhcmNoIHdoZXJlIGluZGljYXRvcl9zZWFyY2ggbWF0Y2ggPyBvcmRlciBieSByYW5rIGxpbWl0IDEwYFxuXHRcdGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIHNlYXJjaCBxdWVyeVwiLCBxdWVyeSwgc3FsX3F1ZXJ5KVxuXHRcdGNvbnN0IHJldCA9IChhd2FpdCBkYi5xdWVyeShzcWxfcXVlcnksIFtxdWVyeV0pKSBhcyBJbmRpY2F0b3JJbmZvW11cblx0XHRyZXR1cm4gcmV0XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiYXV0aG9yc1NlYXJjaFwiLCBlKVxuXHRcdHRocm93IGVcblx0fVxufVxuXG5jb25zdCBzZWFyY2hEZWJvdW5jZSA9IGRlYm91bmNlKHNlYXJjaCwgMjUwKVxuZnVuY3Rpb24gT3B0aW9uKFxuXHRpbmRpY2F0b3I6IEluZGljYXRvckluZm8sXG5cdG1ldGE6IEZvcm1hdE9wdGlvbkxhYmVsTWV0YTxJbmRpY2F0b3JJbmZvLCBmYWxzZT4sXG4pIHtcblx0aWYgKGluZGljYXRvci5lcnJvcikgcmV0dXJuIGluZGljYXRvci5lcnJvclxuXHRpZiAobWV0YS5jb250ZXh0ID09PSBcInZhbHVlXCIpIHJldHVybiBpbmRpY2F0b3IuaW5kaWNhdG9yX25hbWVcblx0Y29uc3Qgc25pcHBldFJlYWN0ID0gW11cblx0Zm9yIChjb25zdCBbaSwgcGFydF0gb2YgaW5kaWNhdG9yLnNuaXBwZXQuc3BsaXQoXCLCp1wiKS5lbnRyaWVzKCkpIHtcblx0XHRzbmlwcGV0UmVhY3QucHVzaChcblx0XHRcdGkgJSAyID09IDAgPyA8c3BhbiBrZXk9e2l9PntwYXJ0fTwvc3Bhbj4gOiA8YiBrZXk9e2l9PntwYXJ0fTwvYj4sXG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxwPntpbmRpY2F0b3IuaW5kaWNhdG9yX25hbWV9PC9wPlxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiIH19PntzbmlwcGV0UmVhY3R9PC9zcGFuPlxuXHRcdDwvPlxuXHQpXG59XG5leHBvcnQgY29uc3QgRnRzRGVtbzogUmVhY3QuRkM8eyBzdG9yZTogU3RvcmUgfT4gPSAoeyBzdG9yZSB9KSA9PiB7XG5cdGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuXHRhc3luYyBmdW5jdGlvbiBzZXRTZWxlY3RlZChhOiBJbmRpY2F0b3JJbmZvKSB7XG5cdFx0Y29uc29sZS5sb2coXCJwbG90XCIsIGEpXG5cblx0XHRjb25zdCB7IGRiIH0gPSBhd2FpdCBzdG9yZS5yZWFkeVxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGRiLnF1ZXJ5PHsgeWVhcjogbnVtYmVyOyB2YWx1ZTogbnVtYmVyIH0+KFxuXHRcdFx0XCJzZWxlY3QgeWVhciwgdmFsdWUgZnJvbSB3ZGlfZGF0YSB3aGVyZSBjb3VudHJ5X2NvZGUgPSA/IGFuZCBpbmRpY2F0b3JfY29kZSA9ID9cIixcblx0XHRcdFtcIlVTQVwiLCBcIlNFLkFEVC4xNTI0LkxULlpTXCJdLFxuXHRcdClcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8QXN5bmNTZWxlY3Q8SW5kaWNhdG9ySW5mbz5cblx0XHRcdFx0Y2FjaGVPcHRpb25zXG5cdFx0XHRcdGlucHV0VmFsdWU9e3NlYXJjaH1cblx0XHRcdFx0b25JbnB1dENoYW5nZT17KGUpID0+IHNldFNlYXJjaChlKX1cblx0XHRcdFx0bG9hZE9wdGlvbnM9eyhlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJzdG9yZVwiLCBzdG9yZSlcblx0XHRcdFx0XHRyZXR1cm4gc2VhcmNoRGVib3VuY2Uoc3RvcmUsIGUpXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsoZSkgPT4gZS5pbmRpY2F0b3JfbmFtZX1cblx0XHRcdFx0Zm9ybWF0T3B0aW9uTGFiZWw9e09wdGlvbn1cblx0XHRcdFx0Z2V0T3B0aW9uVmFsdWU9eyhlKSA9PiBlLmluZGljYXRvcl9jb2RlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGUgJiYgc2V0U2VsZWN0ZWQoZSl9XG5cdFx0XHRcdGlzT3B0aW9uRGlzYWJsZWQ9eyhlKSA9PiAhIWUuZXJyb3J9XG5cdFx0XHQvPlxuXHRcdFx0e2RhdGEgJiYgKFxuXHRcdFx0XHQ8QmFyQ2hhcnQgZGF0YT17ZGF0YX0gbGF5b3V0PVwidmVydGljYWxcIj5cblx0XHRcdFx0XHQ8WEF4aXMgdHlwZT1cIm51bWJlclwiIC8+XG5cdFx0XHRcdFx0PFlBeGlzIHR5cGU9XCJjYXRlZ29yeVwiIGRhdGFLZXk9XCJuYW1lXCIgd2lkdGg9ezEwMH0gLz5cblx0XHRcdFx0XHQ8VG9vbHRpcCAvPlxuXHRcdFx0XHRcdDxMZWdlbmQgLz5cblx0XHRcdFx0XHQ8QmFyIGRhdGFLZXk9XCJ2YWx1ZVwiIG5hbWU9e1wiRmxvbmtcIn0gZmlsbD1cIiM4ODg0ZDhcIiAvPlxuXHRcdFx0XHQ8L0JhckNoYXJ0PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sqlite-httpvfs/FtsDemo.tsx\n");

/***/ })

});