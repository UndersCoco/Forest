/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_forest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/forest */ \"./model/forest.ts\");\n/* harmony import */ var _model_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/state */ \"./model/state.ts\");\n/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/config.json */ \"./config/config.json\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\nfunction main() {\n    return __awaiter(this, void 0, void 0, function () {\n        var forest, i;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    forest = new _model_forest__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_config_config_json__WEBPACK_IMPORTED_MODULE_2__.height, _config_config_json__WEBPACK_IMPORTED_MODULE_2__.width, _config_config_json__WEBPACK_IMPORTED_MODULE_2__.proba, _config_config_json__WEBPACK_IMPORTED_MODULE_2__.fires);\n                    i = 1;\n                    initGrid(forest.height, forest.width);\n                    _a.label = 1;\n                case 1:\n                    document.getElementById(\"title\").textContent = \"Étape \" + i;\n                    fillGrid(forest);\n                    return [4 /*yield*/, sleep(_config_config_json__WEBPACK_IMPORTED_MODULE_2__.sleep)];\n                case 2:\n                    _a.sent();\n                    i++;\n                    _a.label = 3;\n                case 3:\n                    if (forest.nextStep()) return [3 /*break*/, 1];\n                    _a.label = 4;\n                case 4: return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction fillGrid(forest) {\n    eraseGrid();\n    for (var i = 0; i < forest.height; i++) {\n        for (var j = 0; j < forest.width; j++) {\n            var newdiv = document.createElement(\"div\");\n            newdiv.setAttribute(\"class\", _model_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"][forest.grid[i][j]]);\n            document.getElementsByClassName(\"forest\")[0].appendChild(newdiv);\n        }\n    }\n}\nfunction initGrid(height, width) {\n    document.getElementsByClassName(\"forest\")[0].style.width = width * 20 + \"px\";\n    document.getElementsByClassName(\"forest\")[0].style.height = height * 20 + \"px\";\n}\nfunction eraseGrid() {\n    document.getElementsByClassName(\"forest\")[0].textContent = '';\n}\nfunction sleep(ms) {\n    return new Promise(function (resolve) { return setTimeout(resolve, ms); });\n}\nwindow.addEventListener(\"load\", main);\n\n\n//# sourceURL=webpack://projet/./index.ts?");

/***/ }),

/***/ "./model/forest.ts":
/*!*************************!*\
  !*** ./model/forest.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./model/state.ts\");\n\nvar Forest = /** @class */ (function () {\n    function Forest(height, width, proba, fireCells) {\n        if (fireCells === void 0) { fireCells = null; }\n        this._height = height;\n        this._width = width;\n        this._grid = new Array;\n        this._proba = proba;\n        var _loop_1 = function (i) {\n            this_1._grid[i] = [];\n            var _loop_2 = function (j) {\n                if ((fireCells != null) && (fireCells.find(function (cell) { return (cell[0] === i) && (cell[1] === j); }))) {\n                    this_1._grid[i][j] = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fire;\n                }\n                else {\n                    this_1._grid[i][j] = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].noFire;\n                }\n            };\n            for (var j = 0; j < width; j++) {\n                _loop_2(j);\n            }\n        };\n        var this_1 = this;\n        for (var i = 0; i < height; i++) {\n            _loop_1(i);\n        }\n    }\n    Forest.prototype.nextStep = function () {\n        var fireCells = [];\n        var oldGrid = structuredClone(this._grid);\n        for (var i = 0; i < this._height; i++) {\n            for (var j = 0; j < this._width; j++) {\n                if (this._grid[i][j] === _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fire) {\n                    fireCells.push([i, j]);\n                    this._grid[i][j] = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ashes;\n                }\n            }\n        }\n        for (var k = 0; k < fireCells.length; k++) {\n            var i = fireCells[k][0];\n            var j = fireCells[k][1];\n            this.updateCell(i, j - 1);\n            this.updateCell(i, j + 1);\n            this.updateCell(i - 1, j);\n            this.updateCell(i + 1, j);\n        }\n        return !this.compGrids(oldGrid, this._grid);\n    };\n    Forest.prototype.compGrids = function (grid1, grid2) {\n        if (grid1.length !== grid2.length) {\n            return false;\n        }\n        for (var i = 0; i < grid1.length; i++) {\n            if (grid1[i].length !== grid2[i].length) {\n                return false;\n            }\n            for (var j = 0; j < grid1[i].length; j++) {\n                if (grid1[i][j] !== grid2[i][j]) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    };\n    Forest.prototype.updateCell = function (i, j) {\n        if ((this._grid[i] != null) && (this._grid[i] != null) && (this._grid[i][j] === _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].noFire)) {\n            if (Math.random() < this._proba) {\n                this._grid[i][j] = _state__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fire;\n            }\n        }\n    };\n    Object.defineProperty(Forest.prototype, \"height\", {\n        get: function () {\n            return this._height;\n        },\n        set: function (height) {\n            this._height = height;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Forest.prototype, \"width\", {\n        get: function () {\n            return this._width;\n        },\n        set: function (width) {\n            this._width = width;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Forest.prototype, \"proba\", {\n        get: function () {\n            return this._proba;\n        },\n        set: function (proba) {\n            this._proba = proba;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    Object.defineProperty(Forest.prototype, \"grid\", {\n        get: function () {\n            return this._grid;\n        },\n        enumerable: false,\n        configurable: true\n    });\n    return Forest;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forest);\n\n\n//# sourceURL=webpack://projet/./model/forest.ts?");

/***/ }),

/***/ "./model/state.ts":
/*!************************!*\
  !*** ./model/state.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar State;\n(function (State) {\n    State[State[\"noFire\"] = 0] = \"noFire\";\n    State[State[\"fire\"] = 1] = \"fire\";\n    State[State[\"ashes\"] = 2] = \"ashes\";\n})(State || (State = {}));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);\n\n\n//# sourceURL=webpack://projet/./model/state.ts?");

/***/ }),

/***/ "./config/config.json":
/*!****************************!*\
  !*** ./config/config.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"height\":15,\"width\":10,\"proba\":0.6,\"fires\":[[2,8],[3,3]],\"sleep\":500}');\n\n//# sourceURL=webpack://projet/./config/config.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;