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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"indicatorSearch\": function() { return /* binding */ indicatorSearch; },\n/* harmony export */   \"countrySearch\": function() { return /* binding */ countrySearch; },\n/* harmony export */   \"FtsDemo\": function() { return /* binding */ FtsDemo; }\n/* harmony export */ });\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/regenerator */ \"../node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"../node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-select/async */ \"../node_modules/react-select/async/dist/react-select.esm.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debounce-promise */ \"../node_modules/debounce-promise/dist/index.js\");\n/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! recharts */ \"../node_modules/recharts/es6/index.js\");\n/* harmony import */ var _components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ResponsiveContainer */ \"./components/ResponsiveContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/tehdog/data/dev/2019/blog/client/sqlite-httpvfs/FtsDemo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\nfunction indicatorSearch(_x, _x2) {\n  return _indicatorSearch.apply(this, arguments);\n}\n\nfunction _indicatorSearch() {\n  _indicatorSearch = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(store, author) {\n    var _yield$store$ready2, db, query_inner, query, sql_query, ret;\n\n    return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            if (!(author.length < 3)) {\n              _context2.next = 2;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", [{\n              error: \"Type more...\"\n            }]);\n\n          case 2:\n            _context2.prev = 2;\n            _context2.next = 5;\n            return store.ready;\n\n          case 5:\n            _yield$store$ready2 = _context2.sent;\n            db = _yield$store$ready2.db;\n            query_inner = author.split(\" \").map(function (n) {\n              return n.replace(/\"/g, \"\");\n            }).map(function (e) {\n              return \"\\\"\".concat(e, \"\\\"*\");\n            }).join(\" \");\n            query = \"\".concat(query_inner);\n            sql_query = \"select *, snippet(indicator_search, -1, '\\xA7', '\\xA7', ' ... ', 32) as snippet from indicator_search where indicator_search match ? order by rank limit 10\";\n            console.log(\"executing search query\", query, sql_query);\n            _context2.next = 13;\n            return db.query(sql_query, [query]);\n\n          case 13:\n            ret = _context2.sent;\n            return _context2.abrupt(\"return\", ret);\n\n          case 17:\n            _context2.prev = 17;\n            _context2.t0 = _context2[\"catch\"](2);\n            console.error(\"authorsSearch\", _context2.t0);\n            throw _context2.t0;\n\n          case 21:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[2, 17]]);\n  }));\n  return _indicatorSearch.apply(this, arguments);\n}\n\nvar indicatorSearchDebounce = debounce_promise__WEBPACK_IMPORTED_MODULE_6___default()(indicatorSearch, 250);\nfunction countrySearch(_x3, _x4) {\n  return _countrySearch.apply(this, arguments);\n}\n\nfunction _countrySearch() {\n  _countrySearch = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(store, name) {\n    var _yield$store$ready3, db, sql_query, q, ret;\n\n    return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return store.ready;\n\n          case 3:\n            _yield$store$ready3 = _context3.sent;\n            db = _yield$store$ready3.db;\n            sql_query = \"select short_name, country_code from wdi_country where long_name like ? or country_code like ?\";\n            console.log(\"executing search query\", sql_query);\n            q = \"%\".concat(name, \"%\");\n            _context3.next = 10;\n            return db.query(sql_query, [q, q]);\n\n          case 10:\n            ret = _context3.sent;\n            return _context3.abrupt(\"return\", ret);\n\n          case 14:\n            _context3.prev = 14;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.error(\"authorsSearch\", _context3.t0);\n            throw _context3.t0;\n\n          case 18:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 14]]);\n  }));\n  return _countrySearch.apply(this, arguments);\n}\n\nvar countrySearchDebounce = debounce_promise__WEBPACK_IMPORTED_MODULE_6___default()(countrySearch, 250);\n\nfunction IndicatorOption(indicator, meta) {\n  if (indicator.error) return indicator.error;\n  if (meta.context === \"value\") return indicator.indicator_name;\n  var snippetReact = [];\n\n  var _iterator = _createForOfIteratorHelper(indicator.snippet.split(\"§\").entries()),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var _step$value = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_step.value, 2),\n          i = _step$value[0],\n          part = _step$value[1];\n\n      snippetReact.push(i % 2 == 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 17\n      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"b\", {\n        children: part\n      }, i, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 47\n      }, this));\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: indicator.indicator_name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"span\", {\n      style: {\n        color: \"gray\"\n      },\n      children: snippetReact\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_c = IndicatorOption;\nvar FtsDemo = function FtsDemo(_ref) {\n  _s();\n\n  var store = _ref.store;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\"),\n      search = _useState[0],\n      setSearch = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),\n      countries = _useState2[0],\n      setCountries = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),\n      data = _useState3[0],\n      setData = _useState3[1];\n\n  function setSelected(_x5) {\n    return _setSelected.apply(this, arguments);\n  }\n\n  function _setSelected() {\n    _setSelected = (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__.default)( /*#__PURE__*/_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(a) {\n      var _yield$store$ready, db, res, series, entries, _iterator2, _step2, ele, y;\n\n      return _home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              console.log(\"plot\", a);\n              _context.next = 3;\n              return store.ready;\n\n            case 3:\n              _yield$store$ready = _context.sent;\n              db = _yield$store$ready.db;\n              _context.next = 7;\n              return db.query(\"select short_name, year, value from wdi_data join wdi_country using (country_code) where country_code in (select country_code from wdi_country limit 20) and indicator_code = ? order by year asc\", [a.indicator_code]);\n\n            case 7:\n              res = _context.sent;\n              series = new Set();\n              entries = new Map();\n              _iterator2 = _createForOfIteratorHelper(res);\n\n              try {\n                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n                  ele = _step2.value;\n                  y = entries.get(ele.year);\n\n                  if (!y) {\n                    y = {\n                      year: ele.year\n                    };\n                    entries.set(ele.year, y);\n                  }\n\n                  series.add(ele.short_name);\n                  y[ele.short_name] = ele.value;\n                }\n              } catch (err) {\n                _iterator2.e(err);\n              } finally {\n                _iterator2.f();\n              }\n\n              console.log(\"plotres\", res);\n              setData({\n                series: (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(series),\n                data: (0,_home_tehdog_data_dev_2019_blog_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(entries.values())\n              });\n\n            case 14:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _setSelected.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_select_async__WEBPACK_IMPORTED_MODULE_5__.default, {\n      cacheOptions: true,\n      isMulti: true,\n      inputValue: search,\n      onInputChange: function onInputChange(e) {\n        return setSearch(e);\n      },\n      loadOptions: function loadOptions(e) {\n        console.log(\"store\", store);\n        return countrySearchDebounce(store, e);\n      },\n      getOptionLabel: function getOptionLabel(e) {\n        return e.short_name;\n      } // formatOptionLabel={IndicatorOption}\n      ,\n      getOptionValue: function getOptionValue(e) {\n        return e.country_code;\n      },\n      onChange: function onChange(e) {\n        return e && setCountries(e);\n      } // isOptionDisabled={(e) => !!e.error}\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 4\n    }, _this), \"Indicator:\", \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_select_async__WEBPACK_IMPORTED_MODULE_5__.default, {\n      cacheOptions: true,\n      inputValue: search,\n      onInputChange: function onInputChange(e) {\n        return setSearch(e);\n      },\n      loadOptions: function loadOptions(e) {\n        console.log(\"store\", store);\n        return indicatorSearchDebounce(store, e);\n      },\n      getOptionLabel: function getOptionLabel(e) {\n        return e.indicator_name;\n      },\n      formatOptionLabel: IndicatorOption,\n      getOptionValue: function getOptionValue(e) {\n        return e.indicator_code;\n      },\n      onChange: function onChange(e) {\n        return e && setSelected(e);\n      },\n      isOptionDisabled: function isOptionDisabled(e) {\n        return !!e.error;\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 4\n    }, _this), data && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_8__.default, {\n      width: \"100%\",\n      height: 300,\n      initialWidth: 600,\n      initialHeight: 300,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.LineChart, {\n        data: data.data,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.XAxis, {\n          dataKey: \"year\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 167,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.YAxis, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 168,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Legend, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 7\n        }, _this), data.series.map(function (s) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_9__.Line, {\n            type: \"monotone\",\n            dataKey: s,\n            name: s\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 172,\n            columnNumber: 8\n          }, _this);\n        })]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 166,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 128,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(FtsDemo, \"I18jrrvcJMoc3hCNmgknBg2/2XY=\");\n\n_c2 = FtsDemo;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"IndicatorOption\");\n$RefreshReg$(_c2, \"FtsDemo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3FsaXRlLWh0dHB2ZnMvRnRzRGVtby50c3g/ZWVmNyJdLCJuYW1lcyI6WyJpbmRpY2F0b3JTZWFyY2giLCJzdG9yZSIsImF1dGhvciIsImxlbmd0aCIsImVycm9yIiwicmVhZHkiLCJkYiIsInF1ZXJ5X2lubmVyIiwic3BsaXQiLCJtYXAiLCJuIiwicmVwbGFjZSIsImUiLCJqb2luIiwicXVlcnkiLCJzcWxfcXVlcnkiLCJjb25zb2xlIiwibG9nIiwicmV0IiwiaW5kaWNhdG9yU2VhcmNoRGVib3VuY2UiLCJkZWJvdW5jZSIsImNvdW50cnlTZWFyY2giLCJuYW1lIiwicSIsImNvdW50cnlTZWFyY2hEZWJvdW5jZSIsIkluZGljYXRvck9wdGlvbiIsImluZGljYXRvciIsIm1ldGEiLCJjb250ZXh0IiwiaW5kaWNhdG9yX25hbWUiLCJzbmlwcGV0UmVhY3QiLCJzbmlwcGV0IiwiZW50cmllcyIsImkiLCJwYXJ0IiwicHVzaCIsImNvbG9yIiwiRnRzRGVtbyIsInVzZVN0YXRlIiwic2VhcmNoIiwic2V0U2VhcmNoIiwiY291bnRyaWVzIiwic2V0Q291bnRyaWVzIiwiZGF0YSIsInNldERhdGEiLCJzZXRTZWxlY3RlZCIsImEiLCJpbmRpY2F0b3JfY29kZSIsInJlcyIsInNlcmllcyIsIlNldCIsIk1hcCIsImVsZSIsInkiLCJnZXQiLCJ5ZWFyIiwic2V0IiwiYWRkIiwic2hvcnRfbmFtZSIsInZhbHVlIiwidmFsdWVzIiwiY291bnRyeV9jb2RlIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBaUJPLFNBQWVBLGVBQXRCO0FBQUE7QUFBQTs7OzJUQUFPLGtCQUNOQyxLQURNLEVBRU5DLE1BRk07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUlGQSxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FKZDtBQUFBO0FBQUE7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REFBQyxvRUFBRDtBQUNDLFdBQUssRUFBQyxNQURQO0FBRUMsWUFBTSxFQUFFLEdBRlQ7QUFHQyxrQkFBWSxFQUFFLEdBSGY7QUFJQyxtQkFBYSxFQUFFLEdBSmhCO0FBQUEsNkJBTUMsOERBQUMsK0NBQUQ7QUFBVyxZQUFJLEVBQUVBLElBQUksQ0FBQ0EsSUFBdEI7QUFBQSxnQ0FDQyw4REFBQywyQ0FBRDtBQUFPLGlCQUFPLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUMsOERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxlQUdDLDhEQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEQsZUFJQyw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpELEVBS0VBLElBQUksQ0FBQ00sTUFBTCxDQUFZeEMsR0FBWixDQUFnQixVQUFDcUQsQ0FBRDtBQUFBLDhCQUNoQiw4REFBQywwQ0FBRDtBQUFNLGdCQUFJLEVBQUMsVUFBWDtBQUFzQixtQkFBTyxFQUFFQSxDQUEvQjtBQUFrQyxnQkFBSSxFQUFFQTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURnQjtBQUFBLFNBQWhCLENBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW9EQSxDQXBGTTs7R0FBTXpCLE87O01BQUFBLE8iLCJmaWxlIjoiLi9zcWxpdGUtaHR0cHZmcy9GdHNEZW1vLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3FsaXRlSHR0cHZmc0RlbW9cIlxuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gXCJyZWFjdC1zZWxlY3QvYXN5bmNcIlxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJkZWJvdW5jZS1wcm9taXNlXCJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBGb3JtYXRPcHRpb25MYWJlbE1ldGEgfSBmcm9tIFwicmVhY3Qtc2VsZWN0XCJcbmltcG9ydCB7XG5cdEJhcixcblx0QmFyQ2hhcnQsXG5cdExlZ2VuZCxcblx0TGluZSxcblx0TGluZUNoYXJ0LFxuXHRUb29sdGlwLFxuXHRYQXhpcyxcblx0WUF4aXMsXG59IGZyb20gXCJyZWNoYXJ0c1wiXG5pbXBvcnQgUmVzcG9uc2l2ZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZXNwb25zaXZlQ29udGFpbmVyXCJcblxudHlwZSBDb3VudHJ5SW5mbyA9IHtcblx0Y291bnRyeV9jb2RlOiBzdHJpbmdcblx0c2hvcnRfbmFtZTogc3RyaW5nXG59XG50eXBlIEluZGljYXRvckluZm8gPSB7XG5cdGluZGljYXRvcl9jb2RlOiBzdHJpbmdcblx0dG9waWM6IHN0cmluZ1xuXHRpbmRpY2F0b3JfbmFtZTogc3RyaW5nXG5cdHNob3J0X2RlZmluaXRpb246IHN0cmluZ1xuXHRsb25nX2RlZmluaXRpb246IHN0cmluZ1xuXHRzdGF0aXN0aWNhbF9jb25jZXB0X2FuZF9tZXRob2RvbG9neTogc3RyaW5nXG5cdGRldmVsb3BtZW50X3JlbGV2YW5jZTogc3RyaW5nXG5cdHNuaXBwZXQ6IHN0cmluZ1xuXHRlcnJvcj86IHRydWVcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbmRpY2F0b3JTZWFyY2goXG5cdHN0b3JlOiBTdG9yZSxcblx0YXV0aG9yOiBzdHJpbmcsXG4pOiBQcm9taXNlPEluZGljYXRvckluZm9bXT4ge1xuXHRpZiAoYXV0aG9yLmxlbmd0aCA8IDMpIHtcblx0XHRyZXR1cm4gWyh7IGVycm9yOiBcIlR5cGUgbW9yZS4uLlwiIH0gYXMgdW5rbm93bikgYXMgSW5kaWNhdG9ySW5mb11cblx0fVxuXHR0cnkge1xuXHRcdGNvbnN0IHsgZGIgfSA9IGF3YWl0IHN0b3JlLnJlYWR5XG5cdFx0Y29uc3QgcXVlcnlfaW5uZXIgPSBhdXRob3Jcblx0XHRcdC5zcGxpdChcIiBcIilcblx0XHRcdC5tYXAoKG4pID0+IG4ucmVwbGFjZSgvXCIvZywgXCJcIikpXG5cdFx0XHQubWFwKChlKSA9PiBgXCIke2V9XCIqYClcblx0XHRcdC5qb2luKFwiIFwiKVxuXHRcdGNvbnN0IHF1ZXJ5ID0gYCR7cXVlcnlfaW5uZXJ9YFxuXHRcdGNvbnN0IHNxbF9xdWVyeSA9IGBzZWxlY3QgKiwgc25pcHBldChpbmRpY2F0b3Jfc2VhcmNoLCAtMSwgJ8KnJywgJ8KnJywgJyAuLi4gJywgMzIpIGFzIHNuaXBwZXQgZnJvbSBpbmRpY2F0b3Jfc2VhcmNoIHdoZXJlIGluZGljYXRvcl9zZWFyY2ggbWF0Y2ggPyBvcmRlciBieSByYW5rIGxpbWl0IDEwYFxuXHRcdGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIHNlYXJjaCBxdWVyeVwiLCBxdWVyeSwgc3FsX3F1ZXJ5KVxuXHRcdGNvbnN0IHJldCA9IChhd2FpdCBkYi5xdWVyeShzcWxfcXVlcnksIFtxdWVyeV0pKSBhcyBJbmRpY2F0b3JJbmZvW11cblx0XHRyZXR1cm4gcmV0XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiYXV0aG9yc1NlYXJjaFwiLCBlKVxuXHRcdHRocm93IGVcblx0fVxufVxuY29uc3QgaW5kaWNhdG9yU2VhcmNoRGVib3VuY2UgPSBkZWJvdW5jZShpbmRpY2F0b3JTZWFyY2gsIDI1MClcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvdW50cnlTZWFyY2goXG5cdHN0b3JlOiBTdG9yZSxcblx0bmFtZTogc3RyaW5nLFxuKTogUHJvbWlzZTxDb3VudHJ5SW5mb1tdPiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgeyBkYiB9ID0gYXdhaXQgc3RvcmUucmVhZHlcblx0XHRjb25zdCBzcWxfcXVlcnkgPSBgc2VsZWN0IHNob3J0X25hbWUsIGNvdW50cnlfY29kZSBmcm9tIHdkaV9jb3VudHJ5IHdoZXJlIGxvbmdfbmFtZSBsaWtlID8gb3IgY291bnRyeV9jb2RlIGxpa2UgP2Bcblx0XHRjb25zb2xlLmxvZyhcImV4ZWN1dGluZyBzZWFyY2ggcXVlcnlcIiwgc3FsX3F1ZXJ5KVxuXHRcdGNvbnN0IHEgPSBgJSR7bmFtZX0lYFxuXHRcdGNvbnN0IHJldCA9IChhd2FpdCBkYi5xdWVyeShzcWxfcXVlcnksIFtxLCBxXSkpIGFzIENvdW50cnlJbmZvW11cblx0XHRyZXR1cm4gcmV0XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRjb25zb2xlLmVycm9yKFwiYXV0aG9yc1NlYXJjaFwiLCBlKVxuXHRcdHRocm93IGVcblx0fVxufVxuY29uc3QgY291bnRyeVNlYXJjaERlYm91bmNlID0gZGVib3VuY2UoY291bnRyeVNlYXJjaCwgMjUwKVxuZnVuY3Rpb24gSW5kaWNhdG9yT3B0aW9uKFxuXHRpbmRpY2F0b3I6IEluZGljYXRvckluZm8sXG5cdG1ldGE6IEZvcm1hdE9wdGlvbkxhYmVsTWV0YTxJbmRpY2F0b3JJbmZvLCBmYWxzZT4sXG4pIHtcblx0aWYgKGluZGljYXRvci5lcnJvcikgcmV0dXJuIGluZGljYXRvci5lcnJvclxuXHRpZiAobWV0YS5jb250ZXh0ID09PSBcInZhbHVlXCIpIHJldHVybiBpbmRpY2F0b3IuaW5kaWNhdG9yX25hbWVcblx0Y29uc3Qgc25pcHBldFJlYWN0ID0gW11cblx0Zm9yIChjb25zdCBbaSwgcGFydF0gb2YgaW5kaWNhdG9yLnNuaXBwZXQuc3BsaXQoXCLCp1wiKS5lbnRyaWVzKCkpIHtcblx0XHRzbmlwcGV0UmVhY3QucHVzaChcblx0XHRcdGkgJSAyID09IDAgPyA8c3BhbiBrZXk9e2l9PntwYXJ0fTwvc3Bhbj4gOiA8YiBrZXk9e2l9PntwYXJ0fTwvYj4sXG5cdFx0KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxwPntpbmRpY2F0b3IuaW5kaWNhdG9yX25hbWV9PC9wPlxuXHRcdFx0PHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiZ3JheVwiIH19PntzbmlwcGV0UmVhY3R9PC9zcGFuPlxuXHRcdDwvPlxuXHQpXG59XG5leHBvcnQgY29uc3QgRnRzRGVtbzogUmVhY3QuRkM8eyBzdG9yZTogU3RvcmUgfT4gPSAoeyBzdG9yZSB9KSA9PiB7XG5cdGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKVxuXHRjb25zdCBbY291bnRyaWVzLCBzZXRDb3VudHJpZXNdID0gdXNlU3RhdGUoW10gYXMgcmVhZG9ubHkgQ291bnRyeUluZm9bXSlcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoXG5cdFx0bnVsbCBhcyBudWxsIHwgeyBzZXJpZXM6IHN0cmluZ1tdOyBkYXRhOiBhbnlbXSB9LFxuXHQpXG5cdGFzeW5jIGZ1bmN0aW9uIHNldFNlbGVjdGVkKGE6IEluZGljYXRvckluZm8pIHtcblx0XHRjb25zb2xlLmxvZyhcInBsb3RcIiwgYSlcblxuXHRcdGNvbnN0IHsgZGIgfSA9IGF3YWl0IHN0b3JlLnJlYWR5XG5cdFx0Y29uc3QgcmVzID0gKGF3YWl0IGRiLnF1ZXJ5KFxuXHRcdFx0XCJzZWxlY3Qgc2hvcnRfbmFtZSwgeWVhciwgdmFsdWUgZnJvbSB3ZGlfZGF0YSBqb2luIHdkaV9jb3VudHJ5IHVzaW5nIChjb3VudHJ5X2NvZGUpIHdoZXJlIGNvdW50cnlfY29kZSBpbiAoc2VsZWN0IGNvdW50cnlfY29kZSBmcm9tIHdkaV9jb3VudHJ5IGxpbWl0IDIwKSBhbmQgaW5kaWNhdG9yX2NvZGUgPSA/IG9yZGVyIGJ5IHllYXIgYXNjXCIsXG5cdFx0XHRbYS5pbmRpY2F0b3JfY29kZV0sXG5cdFx0KSkgYXMge1xuXHRcdFx0c2hvcnRfbmFtZTogc3RyaW5nXG5cdFx0XHR5ZWFyOiBudW1iZXJcblx0XHRcdHZhbHVlOiBudW1iZXJcblx0XHR9W11cblx0XHRjb25zdCBzZXJpZXMgPSBuZXcgU2V0PHN0cmluZz4oKVxuXHRcdGNvbnN0IGVudHJpZXMgPSBuZXcgTWFwPG51bWJlciwgUmVjb3JkPHN0cmluZywgbnVtYmVyPj4oKVxuXHRcdGZvciAoY29uc3QgZWxlIG9mIHJlcykge1xuXHRcdFx0bGV0IHkgPSBlbnRyaWVzLmdldChlbGUueWVhcilcblx0XHRcdGlmICgheSkge1xuXHRcdFx0XHR5ID0geyB5ZWFyOiBlbGUueWVhciB9XG5cdFx0XHRcdGVudHJpZXMuc2V0KGVsZS55ZWFyLCB5KVxuXHRcdFx0fVxuXHRcdFx0c2VyaWVzLmFkZChlbGUuc2hvcnRfbmFtZSlcblx0XHRcdHlbZWxlLnNob3J0X25hbWVdID0gZWxlLnZhbHVlXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwicGxvdHJlc1wiLCByZXMpXG5cdFx0c2V0RGF0YSh7IHNlcmllczogWy4uLnNlcmllc10sIGRhdGE6IFsuLi5lbnRyaWVzLnZhbHVlcygpXSB9KVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxBc3luY1NlbGVjdDxDb3VudHJ5SW5mbywgdHJ1ZT5cblx0XHRcdFx0Y2FjaGVPcHRpb25zXG5cdFx0XHRcdGlzTXVsdGlcblx0XHRcdFx0aW5wdXRWYWx1ZT17c2VhcmNofVxuXHRcdFx0XHRvbklucHV0Q2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoKGUpfVxuXHRcdFx0XHRsb2FkT3B0aW9ucz17KGUpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcInN0b3JlXCIsIHN0b3JlKVxuXHRcdFx0XHRcdHJldHVybiBjb3VudHJ5U2VhcmNoRGVib3VuY2Uoc3RvcmUsIGUpXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsoZSkgPT4gZS5zaG9ydF9uYW1lfVxuXHRcdFx0XHQvLyBmb3JtYXRPcHRpb25MYWJlbD17SW5kaWNhdG9yT3B0aW9ufVxuXHRcdFx0XHRnZXRPcHRpb25WYWx1ZT17KGUpID0+IGUuY291bnRyeV9jb2RlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGUgJiYgc2V0Q291bnRyaWVzKGUpfVxuXHRcdFx0XHQvLyBpc09wdGlvbkRpc2FibGVkPXsoZSkgPT4gISFlLmVycm9yfVxuXHRcdFx0Lz5cblx0XHRcdEluZGljYXRvcjp7XCIgXCJ9XG5cdFx0XHQ8QXN5bmNTZWxlY3Q8SW5kaWNhdG9ySW5mbz5cblx0XHRcdFx0Y2FjaGVPcHRpb25zXG5cdFx0XHRcdGlucHV0VmFsdWU9e3NlYXJjaH1cblx0XHRcdFx0b25JbnB1dENoYW5nZT17KGUpID0+IHNldFNlYXJjaChlKX1cblx0XHRcdFx0bG9hZE9wdGlvbnM9eyhlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJzdG9yZVwiLCBzdG9yZSlcblx0XHRcdFx0XHRyZXR1cm4gaW5kaWNhdG9yU2VhcmNoRGVib3VuY2Uoc3RvcmUsIGUpXG5cdFx0XHRcdH19XG5cdFx0XHRcdGdldE9wdGlvbkxhYmVsPXsoZSkgPT4gZS5pbmRpY2F0b3JfbmFtZX1cblx0XHRcdFx0Zm9ybWF0T3B0aW9uTGFiZWw9e0luZGljYXRvck9wdGlvbn1cblx0XHRcdFx0Z2V0T3B0aW9uVmFsdWU9eyhlKSA9PiBlLmluZGljYXRvcl9jb2RlfVxuXHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGUgJiYgc2V0U2VsZWN0ZWQoZSl9XG5cdFx0XHRcdGlzT3B0aW9uRGlzYWJsZWQ9eyhlKSA9PiAhIWUuZXJyb3J9XG5cdFx0XHQvPlxuXHRcdFx0e2RhdGEgJiYgKFxuXHRcdFx0XHQ8UmVzcG9uc2l2ZUNvbnRhaW5lclxuXHRcdFx0XHRcdHdpZHRoPVwiMTAwJVwiXG5cdFx0XHRcdFx0aGVpZ2h0PXszMDB9XG5cdFx0XHRcdFx0aW5pdGlhbFdpZHRoPXs2MDB9XG5cdFx0XHRcdFx0aW5pdGlhbEhlaWdodD17MzAwfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PExpbmVDaGFydCBkYXRhPXtkYXRhLmRhdGF9PlxuXHRcdFx0XHRcdFx0PFhBeGlzIGRhdGFLZXk9XCJ5ZWFyXCIgLz5cblx0XHRcdFx0XHRcdDxZQXhpcyAvPlxuXHRcdFx0XHRcdFx0PFRvb2x0aXAgLz5cblx0XHRcdFx0XHRcdDxMZWdlbmQgLz5cblx0XHRcdFx0XHRcdHtkYXRhLnNlcmllcy5tYXAoKHMpID0+IChcblx0XHRcdFx0XHRcdFx0PExpbmUgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT17c30gbmFtZT17c30gLz5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvTGluZUNoYXJ0PlxuXHRcdFx0XHQ8L1Jlc3BvbnNpdmVDb250YWluZXI+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sqlite-httpvfs/FtsDemo.tsx\n");

/***/ })

});