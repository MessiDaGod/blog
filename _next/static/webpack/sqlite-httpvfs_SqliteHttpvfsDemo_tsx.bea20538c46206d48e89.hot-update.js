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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"search\": function() { return /* binding */ search; },\n/* harmony export */   \"FtsDemo\": function() { return /* binding */ FtsDemo; }\n/* harmony export */ });\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select/async */ \"../node_modules/react-select/async/dist/react-select.esm.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debounce-promise */ \"../node_modules/debounce-promise/dist/index.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/tehdog/data/dev/2019/blog/client/sqlite-httpvfs/FtsDemo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\nfunction search(_x, _x2) {\n  return _search.apply(this, arguments);\n}\n\nfunction _search() {\n  _search = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(store, author) {\n    var _yield$store$ready, db, query_inner, query, sql_query, ret;\n\n    return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(author === \"\")) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", [{\n              error: \"Type more...\"\n            }]);\n\n          case 2:\n            _context.prev = 2;\n            _context.next = 5;\n            return store.ready;\n\n          case 5:\n            _yield$store$ready = _context.sent;\n            db = _yield$store$ready.db;\n            query_inner = author.split(\" \").map(function (n) {\n              return n.replace(/\"/g, \"\");\n            }).map(function (e) {\n              return \"\\\"\".concat(e, \"\\\"*\");\n            }).join(\" \");\n            query = \"\".concat(query_inner);\n            sql_query = \"select *, snippet(indicator_search, -1, '\\xA7', '\\xA7', ' ... ', 32) as snippet from indicator_search where indicator_search match ? order by rank limit 100\";\n            console.log(\"executing search query\", query, sql_query);\n            _context.next = 13;\n            return db.query(sql_query, [query]);\n\n          case 13:\n            ret = _context.sent;\n            return _context.abrupt(\"return\", ret);\n\n          case 17:\n            _context.prev = 17;\n            _context.t0 = _context[\"catch\"](2);\n            console.error(\"authorsSearch\", _context.t0);\n            throw _context.t0;\n\n          case 21:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 17]]);\n  }));\n  return _search.apply(this, arguments);\n}\n\nvar searchDebounce = debounce_promise__WEBPACK_IMPORTED_MODULE_5___default()(search, 250);\n\nfunction Option(indicator, meta) {\n  if (meta.context === \"value\") return indicator.indicator_name;\n  var snippetReact = [];\n\n  var _iterator = _createForOfIteratorHelper(indicator.snippet.split(\"§\").entries()),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _step$value = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_step.value, 2),\n          i = _step$value[0],\n          part = _step$value[1];\n\n      snippetReact.push(i % 2 == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"b\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 47\n      }, this));\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n      children: indicator.indicator_name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n      style: {\n        color: \"gray\"\n      },\n      children: snippetReact\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_c = Option;\nvar FtsDemo = function FtsDemo(_ref) {\n  _s();\n\n  var store = _ref.store;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  function setSelected(a) {\n    console.log(\"plot\", a);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_select_async__WEBPACK_IMPORTED_MODULE_4__.default, {\n      cacheOptions: true,\n      inputValue: search,\n      onInputChange: function onInputChange(e) {\n        return setSearch(e);\n      },\n      loadOptions: function loadOptions(e) {\n        console.log(\"store\", store);\n        return searchDebounce(store, e);\n      },\n      getOptionLabel: function getOptionLabel(e) {\n        return e.indicator_name;\n      },\n      formatOptionLabel: Option,\n      getOptionValue: function getOptionValue(e) {\n        return e.indicator_code;\n      },\n      onChange: function onChange(e) {\n        return e && setSelected;\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 70,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(FtsDemo, \"42GASUL8pX2/N6Oh5HTh0GvQEF0=\");\n\n_c2 = FtsDemo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Option\");\n$RefreshReg$(_c2, \"FtsDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3FsaXRlLWh0dHB2ZnMvRnRzRGVtby50c3g/ZWVmNyJdLCJuYW1lcyI6WyJzZWFyY2giLCJzdG9yZSIsImF1dGhvciIsImVycm9yIiwicmVhZHkiLCJkYiIsInF1ZXJ5X2lubmVyIiwic3BsaXQiLCJtYXAiLCJuIiwicmVwbGFjZSIsImUiLCJqb2luIiwicXVlcnkiLCJzcWxfcXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmV0Iiwic2VhcmNoRGVib3VuY2UiLCJkZWJvdW5jZSIsIk9wdGlvbiIsImluZGljYXRvciIsIm1ldGEiLCJjb250ZXh0IiwiaW5kaWNhdG9yX25hbWUiLCJzbmlwcGV0UmVhY3QiLCJzbmlwcGV0IiwiZW50cmllcyIsImkiLCJwYXJ0IiwicHVzaCIsImNvbG9yIiwiRnRzRGVtbyIsInVzZVN0YXRlIiwic2V0U2VhcmNoIiwic2V0U2VsZWN0ZWQiLCJhIiwiaW5kaWNhdG9yX2NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQWVPLFNBQWVBLE1BQXRCO0FBQUE7QUFBQTs7O2tUQUFPLGlCQUNOQyxLQURNLEVBRU5DLE1BRk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUlGQSxNQUFNLEtBQUssRUFKVDtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FLRSxDQUFDO0FBQUVDLG1CQUFLLEVBQUU7QUFBVCxhQUFELENBTEY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUWdCRixLQUFLLENBQUNHLEtBUnRCOztBQUFBO0FBQUE7QUFRR0MsY0FSSCxzQkFRR0EsRUFSSDtBQVNDQyx1QkFURCxHQVNlSixNQUFNLENBQ3hCSyxLQURrQixDQUNaLEdBRFksRUFFbEJDLEdBRmtCLENBRWQsVUFBQ0MsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLEVBQWhCLENBQVA7QUFBQSxhQUZjLEVBR2xC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O0FBV0MsY0FBUSxFQUFFLGtCQUFDMUIsQ0FBRDtBQUFBLGVBQU9BLENBQUMsSUFBSXdCLFdBQVo7QUFBQTtBQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpQkEsQ0F0Qk07O0dBQU1ILE87O01BQUFBLE8iLCJmaWxlIjoiLi9zcWxpdGUtaHR0cHZmcy9GdHNEZW1vLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3FsaXRlSHR0cHZmc0RlbW9cIlxuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvYXN5bmNcIlxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJkZWJvdW5jZS1wcm9taXNlXCJcbmltcG9ydCB7IFdvcmtlckh0dHB2ZnMgfSBmcm9tIFwic3FsLmpzLWh0dHB2ZnNcIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgZmFFamVjdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIlxuaW1wb3J0IHsgRm9ybWF0T3B0aW9uTGFiZWxNZXRhLCBHcm91cFR5cGVCYXNlLCBPcHRpb25Qcm9wcyB9IGZyb20gXCJyZWFjdC1zZWxlY3RcIlxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdFwiXG50eXBlIEluZGljYXRvckluZm8gPSB7XG5cdGluZGljYXRvcl9jb2RlOiBzdHJpbmdcblx0dG9waWM6IHN0cmluZ1xuXHRpbmRpY2F0b3JfbmFtZTogc3RyaW5nXG5cdHNob3J0X2RlZmluaXRpb246IHN0cmluZ1xuXHRsb25nX2RlZmluaXRpb246IHN0cmluZ1xuXHRzdGF0aXN0aWNhbF9jb25jZXB0X2FuZF9tZXRob2RvbG9neTogc3RyaW5nXG5cdGRldmVsb3BtZW50X3JlbGV2YW5jZTogc3RyaW5nXG5cdHNuaXBwZXQ6IHN0cmluZ1xuXHRlcnJvcj86IHN0cmluZ1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaChcblx0c3RvcmU6IFN0b3JlLFxuXHRhdXRob3I6IHN0cmluZyxcbik6IFByb21pc2U8SW5kaWNhdG9ySW5mb1tdPiB7XG5cdGlmIChhdXRob3IgPT09IFwiXCIpIHtcblx0XHRyZXR1cm4gW3sgZXJyb3I6IFwiVHlwZSBtb3JlLi4uXCIgfV1cblx0fVxuXHR0cnkge1xuXHRcdGNvbnN0IHsgZGIgfSA9IGF3YWl0IHN0b3JlLnJlYWR5XG5cdFx0Y29uc3QgcXVlcnlfaW5uZXIgPSBhdXRob3Jcblx0XHRcdC5zcGxpdChcIiBcIilcblx0XHRcdC5tYXAoKG4pID0+IG4ucmVwbGFjZSgvXCIvZywgXCJcIikpXG5cdFx0XHQubWFwKChlKSA9PiBgXCIke2V9XCIqYClcblx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdGNvbnN0IHF1ZXJ5ID0gYCR7cXVlcnlfaW5uZXJ9YFxuXHRcdGNvbnN0IHNxbF9xdWVyeSA9IGBzZWxlY3QgKiwgc25pcHBldChpbmRpY2F0b3Jfc2VhcmNoLCAtMSwgJ8KnJywgJ8KnJywgJyAuLi4gJywgMzIpIGFzIHNuaXBwZXQgZnJvbSBpbmRpY2F0b3Jfc2VhcmNoIHdoZXJlIGluZGljYXRvcl9zZWFyY2ggbWF0Y2ggPyBvcmRlciBieSByYW5rIGxpbWl0IDEwMGBcblx0XHRjb25zb2xlLmxvZyhcImV4ZWN1dGluZyBzZWFyY2ggcXVlcnlcIiwgcXVlcnksIHNxbF9xdWVyeSlcblx0XHRjb25zdCByZXQgPSAoYXdhaXQgZGIucXVlcnkoc3FsX3F1ZXJ5LCBbcXVlcnldKSkgYXMgSW5kaWNhdG9ySW5mb1tdXG5cdFx0cmV0dXJuIHJldFxuXHR9IGNhdGNoIChlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcImF1dGhvcnNTZWFyY2hcIiwgZSlcblx0XHR0aHJvdyBlXG5cdH1cbn1cblxuY29uc3Qgc2VhcmNoRGVib3VuY2UgPSBkZWJvdW5jZShzZWFyY2gsIDI1MClcbmZ1bmN0aW9uIE9wdGlvbihcblx0aW5kaWNhdG9yOiBJbmRpY2F0b3JJbmZvLFxuXHRtZXRhOiBGb3JtYXRPcHRpb25MYWJlbE1ldGE8SW5kaWNhdG9ySW5mbywgZmFsc2U+LFxuKSB7XG5cdGlmIChtZXRhLmNvbnRleHQgPT09IFwidmFsdWVcIikgcmV0dXJuIGluZGljYXRvci5pbmRpY2F0b3JfbmFtZVxuXHRjb25zdCBzbmlwcGV0UmVhY3QgPSBbXVxuXHRmb3IgKGNvbnN0IFtpLCBwYXJ0XSBvZiBpbmRpY2F0b3Iuc25pcHBldC5zcGxpdChcIsKnXCIpLmVudHJpZXMoKSkge1xuXHRcdHNuaXBwZXRSZWFjdC5wdXNoKFxuXHRcdFx0aSAlIDIgPT0gMCA/IDxzcGFuIGtleT17aX0+e3BhcnR9PC9zcGFuPiA6IDxiIGtleT17aX0+e3BhcnR9PC9iPixcblx0XHQpXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHA+e2luZGljYXRvci5pbmRpY2F0b3JfbmFtZX08L3A+XG5cdFx0XHQ8c3BhbiBzdHlsZT17eyBjb2xvcjogXCJncmF5XCIgfX0+e3NuaXBwZXRSZWFjdH08L3NwYW4+XG5cdFx0PC8+XG5cdClcbn1cbmV4cG9ydCBjb25zdCBGdHNEZW1vOiBSZWFjdC5GQzx7IHN0b3JlOiBTdG9yZSB9PiA9ICh7IHN0b3JlIH0pID0+IHtcblx0Y29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXG5cdGZ1bmN0aW9uIHNldFNlbGVjdGVkKGE6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKFwicGxvdFwiLCBhKVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxBc3luY1NlbGVjdDxJbmRpY2F0b3JJbmZvPlxuXHRcdFx0XHRjYWNoZU9wdGlvbnNcblx0XHRcdFx0aW5wdXRWYWx1ZT17c2VhcmNofVxuXHRcdFx0XHRvbklucHV0Q2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUpfVxuXHRcdFx0XHRsb2FkT3B0aW9ucz17KGUpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInN0b3JlXCIsIHN0b3JlKVxuXHRcdFx0XHRcdHJldHVybiBzZWFyY2hEZWJvdW5jZShzdG9yZSwgZSlcblx0XHRcdFx0fX1cblx0XHRcdFx0Z2V0T3B0aW9uTGFiZWw9eyhlKSA9PiBlLmluZGljYXRvcl9uYW1lfVxuXHRcdFx0XHRmb3JtYXRPcHRpb25MYWJlbD17T3B0aW9ufVxuXHRcdFx0XHRnZXRPcHRpb25WYWx1ZT17KGUpID0+IGUuaW5kaWNhdG9yX2NvZGV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gZSAmJiBzZXRTZWxlY3RlZH1cblx0XHRcdC8+XG5cdFx0PC9kaXY+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sqlite-httpvfs/FtsDemo.tsx\n");

/***/ })

});