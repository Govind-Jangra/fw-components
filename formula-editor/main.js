/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../packages/formula-editor/dist/formula-editor/src/cursor.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/cursor.js ***!
  \***************************************************************************************************************/
/*! exports provided: Cursor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cursor", function() { return Cursor; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _Cursor;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Cursor = /*#__PURE__*/function () {
  function Cursor() {
    _classCallCheck(this, Cursor);
  }
  _createClass(Cursor, null, [{
    key: "getCurrentCursorPosition",
    value:
    /**
     * The functions `getCurrentCursorPosition`, `setCurrentCursorPosition` and their
     * helpers `_createRange` and `_isChildOf` are not used for caret manipulation,
     * but are still in the code for future reference, if the functionality breaks
     * somehow in some obsolete browser.
     */
    function getCurrentCursorPosition(parentElement) {
      var selection = window.getSelection(),
        charCount = -1,
        node;
      if (selection !== null && selection !== void 0 && selection.focusNode) {
        if (Cursor._isChildOf(selection.focusNode, parentElement)) {
          node = selection.focusNode;
          charCount = selection.focusOffset;
          while (node) {
            if (node === parentElement) {
              break;
            }
            if (node.previousSibling) {
              var _node$textContent$len, _node$textContent;
              node = node.previousSibling;
              charCount += (_node$textContent$len = (_node$textContent = node.textContent) === null || _node$textContent === void 0 ? void 0 : _node$textContent.length) !== null && _node$textContent$len !== void 0 ? _node$textContent$len : 0;
            } else {
              node = node.parentNode;
              if (node === null) {
                break;
              }
            }
          }
        }
      }
      return charCount;
    }
  }, {
    key: "setCurrentCursorPosition",
    value: function setCurrentCursorPosition(chars, element) {
      if (chars >= 0) {
        var selection = window.getSelection();
        var range = Cursor._createRange(element, {
          count: chars
        }, undefined);
        if (range) {
          range.collapse(false);
          selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
          selection === null || selection === void 0 ? void 0 : selection.addRange(range);
        }
      }
    }
  }, {
    key: "_createRange",
    value: function _createRange(node, chars, range) {
      if (!range) {
        range = document.createRange();
        range.selectNode(node);
        range.setStart(node, 0);
      }
      if (chars.count === 0) {
        range.setEnd(node, chars.count);
      } else if (node && chars.count > 0) {
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent.length < chars.count) {
            chars.count -= node.textContent.length;
          } else {
            range.setEnd(node, chars.count);
            chars.count = 0;
          }
        } else {
          for (var lp = 0; lp < node.childNodes.length; lp++) {
            range = Cursor._createRange(node.childNodes[lp], chars, range);
            if (chars.count === 0) {
              break;
            }
          }
        }
      }
      return range;
    }
  }, {
    key: "_isChildOf",
    value: function _isChildOf(node, parentElement) {
      while (node !== null) {
        if (node === parentElement) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  }, {
    key: "getCaretPosition",
    value: function getCaretPosition(shadowRoot, element) {
      // `getSelection` is not defined for the type ShadowRoot in TS,
      // but it does exist.
      var range = shadowRoot.getSelection().getRangeAt(0);
      var prefix = range.cloneRange();
      prefix.selectNodeContents(element);
      prefix.setEnd(range.endContainer, range.endOffset);
      return prefix.toString().length;
    }
  }, {
    key: "getCursorRect",
    value: function getCursorRect(shadowRoot) {
      var _shadowRoot$getSelect, _shadowRoot$getSelect2;
      return (_shadowRoot$getSelect = shadowRoot.getSelection()) === null || _shadowRoot$getSelect === void 0 ? void 0 : (_shadowRoot$getSelect2 = _shadowRoot$getSelect.getRangeAt(0)) === null || _shadowRoot$getSelect2 === void 0 ? void 0 : _shadowRoot$getSelect2.getClientRects()[0];
    }
  }]);
  return Cursor;
}();
_Cursor = Cursor;
_Cursor.setCaretPosition = function (pos, parent) {
  var _iterator = _createForOfIteratorHelper(parent.childNodes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var node = _step.value;
      if (node.nodeType == Node.TEXT_NODE) {
        if (node.length >= pos) {
          var range = document.createRange();
          var sel = window.getSelection();
          range.setStart(node, pos);
          range.collapse(true);
          sel.removeAllRanges();
          sel.addRange(range);
          return -1;
        } else {
          pos = pos - node.length;
        }
      } else {
        pos = _Cursor.setCaretPosition(pos, node);
        if (pos < 0) {
          return pos;
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return pos;
};

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/formula-builder.js":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/formula-builder.js ***!
  \************************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _helpers_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/types.js */ "../../packages/formula-editor/dist/formula-editor/src/helpers/types.js");
/* harmony import */ var _styles_src_button_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/src/button-styles.js */ "../../packages/formula-editor/dist/styles/src/button-styles.js");
/* harmony import */ var _formula_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formula-editor */ "../../packages/formula-editor/dist/formula-editor/src/formula-editor.js");
var _FormulaBuilder, _templateObject, _templateObject2;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FormulaBuilder = (_FormulaBuilder = /*#__PURE__*/function (_LitElement) {
  _inherits(FormulaBuilder, _LitElement);
  var _super = _createSuper(FormulaBuilder);
  function FormulaBuilder() {
    var _this;
    _classCallCheck(this, FormulaBuilder);
    _this = _super.apply(this, arguments);
    _this.variables = new Map([["sales_expense", 2], ["sales_in_quarter", 3], ["sales_cummulative", 3], ["cummulative_sum", 4], ["mayank", 10]]);
    _this.formula = new _helpers_types_js__WEBPACK_IMPORTED_MODULE_2__["Formula"]("", "");
    _this.handleCalculate = function () {
      var _this$formulaEditor;
      (_this$formulaEditor = _this.formulaEditor) === null || _this$formulaEditor === void 0 ? void 0 : _this$formulaEditor.requestCalculate();
    };
    _this.handleFormat = function () {
      var _this$formulaEditor2;
      (_this$formulaEditor2 = _this.formulaEditor) === null || _this$formulaEditor2 === void 0 ? void 0 : _this$formulaEditor2.requestFormat();
    };
    return _this;
  }
  _createClass(FormulaBuilder, [{
    key: "handleChange",
    value: function handleChange() {
      var _this$nameInput;
      this.dispatchEvent(new CustomEvent("fw-formula-changed", {
        detail: {
          name: (_this$nameInput = this.nameInput) === null || _this$nameInput === void 0 ? void 0 : _this$nameInput.value,
          rawFormula: this.formula.formulaString,
          error: this.formula.error,
          precision: this.formula.precision
        },
        bubbles: true
      }));
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
        _this$formula$error,
        _this$formula$error2;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      ", "\n\n      <div>\n        <label for=\"metric-name-input\">Metric Name</label>\n        <input\n          id=\"metric-name-input\"\n          .value=", "\n          @input=", "\n        />\n      </div>\n      <label>Formula</label>\n      <formula-editor\n        class=\"fe\"\n        minSuggestionLen=\"0\"\n        @fw-formula-content-changed=", "\n        .variables=", "\n        .content=", "\n        .errorString=", "\n      >\n      </formula-editor>\n      <div id=\"wysiwyg-err\" class=\"", "\">\n        ", "\n      </div>\n      <button class=\"primary-text-button\" @click=", ">\n        Calculate\n      </button>\n      <button class=\"primary-text-button\" @click=", ">\n        Format\n      </button>\n    "])), _styles_src_button_styles_js__WEBPACK_IMPORTED_MODULE_3__["TextButtonStyles"], this.formula.name, function (e) {
        _this2.handleChange();
      }, function (e) {
        _this2.formula.formulaString = e.detail.formulaString;
        _this2.formula.error = e.detail.error;
        _this2.handleChange();
      }, this.variables, this.formula.formulaString, this.formula.error, (_this$formula$error = this.formula.error) !== null && _this$formula$error !== void 0 ? _this$formula$error : "wysiwyg-no-err", (_this$formula$error2 = this.formula.error) !== null && _this$formula$error2 !== void 0 ? _this$formula$error2 : "".concat(this.formula.name, " = ").concat(this.formula.formulaString), this.handleCalculate, this.handleFormat);
    }
  }]);
  return FormulaBuilder;
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]), _FormulaBuilder.styles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    #wysiwyg-err {\n      width: 100%;\n      border-radius: 0px 0px var(--fe-err-border-radius, 4px)\n        var(--fe-err-border-radius, 4px);\n      color: var(--fe-err-text-color, #fc514f);\n      border: var(--fe-err-border-width, 2px) solid black;\n      /* border-top: 0px; */\n      background-color: var(--fe-background-color, #222222);\n      padding: 4px;\n      margin: 0px 0px 8px 0px;\n    }\n\n    .wysiwyg-no-err {\n      color: #098668 !important;\n    }\n  "]))), _FormulaBuilder);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Map,
  converter: {
    fromAttribute: function fromAttribute(value) {
      if (value) {
        return new Map(JSON.parse(value));
      }
    },
    toAttribute: function toAttribute(value) {
      return JSON.stringify(Array.from(value.entries()));
    }
  }
})], FormulaBuilder.prototype, "variables", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: _helpers_types_js__WEBPACK_IMPORTED_MODULE_2__["Formula"],
  converter: {
    fromAttribute: function fromAttribute(value) {
      if (value) {
        var formulaJSON = JSON.parse(value);
        return new _helpers_types_js__WEBPACK_IMPORTED_MODULE_2__["Formula"](formulaJSON.name, formulaJSON.formulaString, formulaJSON.precision);
      }
    },
    toAttribute: function toAttribute(value) {
      return JSON.stringify(value);
    }
  }
})], FormulaBuilder.prototype, "formula", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["query"])("#metric-name-input")], FormulaBuilder.prototype, "nameInput", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["query"])("formula-editor")], FormulaBuilder.prototype, "formulaEditor", void 0);
FormulaBuilder = __decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])("formula-builder")], FormulaBuilder);

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/formula-editor.js":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/formula-editor.js ***!
  \***********************************************************************************************************************/
/*! exports provided: FormulaEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaEditor", function() { return FormulaEditor; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _styles_formula_editor_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/formula-editor-styles.js */ "../../packages/formula-editor/dist/formula-editor/src/styles/formula-editor-styles.js");
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser.js */ "../../packages/formula-editor/dist/formula-editor/src/parser.js");
/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cursor.js */ "../../packages/formula-editor/dist/formula-editor/src/cursor.js");
/* harmony import */ var _suggestion_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./suggestion-menu.js */ "../../packages/formula-editor/dist/formula-editor/src/suggestion-menu.js");
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormulaEditor = /*#__PURE__*/function (_LitElement) {
  _inherits(FormulaEditor, _LitElement);
  var _super = _createSuper(FormulaEditor);
  function FormulaEditor() {
    var _this;
    _classCallCheck(this, FormulaEditor);
    _this = _super.call(this);
    /**
     * These `states` and `properties` can't be defined as `static get properties`,
     * because TS doesn't support that.
     * @see https://github.com/lit/lit-element/issues/414
     */
    _this._formattedContent = null;
    _this._recommendations = null;
    _this._calculatedResult = undefined;
    /**
     * If `parseInput` is called to add a recommendation, say by clicking,
     * browser removes focus from the input box. In that case, we have no way
     * of knowing where the cursor previously was, other than storing it somewhere.
     */
    _this.currentCursorPosition = null;
    _this.currentCursorRect = undefined;
    _this.lastInputType = "undef";
    _this.content = "";
    _this.variables = new Map();
    _this.minSuggestionLen = 2;
    _this.errorString = null;
    _this._parser = new _parser_js__WEBPACK_IMPORTED_MODULE_3__["Parser"](_this.variables, _this.minSuggestionLen);
    return _this;
  }
  _createClass(FormulaEditor, [{
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {
      this._parser = new _parser_js__WEBPACK_IMPORTED_MODULE_3__["Parser"](this.variables, this.minSuggestionLen);
      this.parseInput(null, false);
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.lastInputType = event.inputType;
      this.content = event.target.innerText;
      this.parseInput();
      event.target.focus();
    }
  }, {
    key: "navigateRecommendations",
    value: function navigateRecommendations(direction) {
      if (!this._recommendations) return;
      var currentIndex = this._recommendations.indexOf(this._selectedRecommendation);
      var newIndex = direction === "ArrowDown" ? (currentIndex + 1) % this._recommendations.length : direction === "ArrowUp" ? (currentIndex - 1 + this._recommendations.length) % this._recommendations.length : currentIndex;
      this._selectedRecommendation = this._recommendations[newIndex];
    }
  }, {
    key: "handleKeyboardEvents",
    value: function handleKeyboardEvents(event) {
      var _this$_recommendation;
      if (event.code == "Tab" && ((_this$_recommendation = this._recommendations) === null || _this$_recommendation === void 0 ? void 0 : _this$_recommendation.length) == 1) {
        this._selectedRecommendation = null;
        event.preventDefault();
        this.parseInput(this._recommendations[0]);
      } else if (event.code === "ArrowDown" || event.code === "ArrowUp") {
        event.preventDefault();
        this.navigateRecommendations(event.code);
        this.requestUpdate();
      } else if (event.code === "Enter" && this._selectedRecommendation) {
        event.preventDefault();
        this.parseInput(this._selectedRecommendation);
        this._selectedRecommendation = null;
      }
    }
  }, {
    key: "onClickRecommendation",
    value: function onClickRecommendation(recommendation) {
      var _this$shadowRoot;
      var editor = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.getElementById("wysiwyg-editor");
      if (!editor) return;
      this.parseInput(recommendation);
      this.currentCursorPosition = null;
    }
    /**
     *
     * @param recommendation The recommendation which needs to be inserted
     * at the current cursor position
     * @param manageCursor Whether or not cursor management is needed. Not
     * needed when manual insertion of text is required (eg: during initialization)
     * @returns void
     */
  }, {
    key: "parseInput",
    value: function parseInput() {
      var _this$shadowRoot2;
      var recommendation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var manageCursor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var editor = (_this$shadowRoot2 = this.shadowRoot) === null || _this$shadowRoot2 === void 0 ? void 0 : _this$shadowRoot2.getElementById("wysiwyg-editor");
      if (!editor) return;
      /**
       * @see https://github.com/WICG/webcomponents/issues/79
       */
      if (manageCursor) this.currentCursorPosition = recommendation ? this.currentCursorPosition : _cursor_js__WEBPACK_IMPORTED_MODULE_4__["Cursor"].getCaretPosition(this.shadowRoot, editor);
      var parseOutput = this._parser.parseInput(this.content, this.currentCursorPosition, recommendation);
      this._recommendations = parseOutput.recommendations;
      this._formattedContent = parseOutput.formattedContent;
      this.errorString = parseOutput.errorString;
      /**
       * Don't modify the text stream manually if the text is being composed,
       * unless the user manually chooses to do so by selecting a suggestion.
       * @see https://github.com/w3c/input-events/issues/86
       * @see https://github.com/w3c/input-events/pull/122
       * @see https://bugs.chromium.org/p/chromium/issues/detail?id=689541
       * */
      if (this.lastInputType != "insertCompositionText" || recommendation) {
        editor.innerHTML = parseOutput.formattedString;
      }
      this.content = editor.innerText;
      if (recommendation) {
        this._recommendations = null;
        this.currentCursorPosition = parseOutput.newCursorPosition;
      }
      if (manageCursor) _cursor_js__WEBPACK_IMPORTED_MODULE_4__["Cursor"].setCaretPosition(this.currentCursorPosition, editor);
      editor === null || editor === void 0 ? void 0 : editor.focus();
      if (manageCursor) this.currentCursorRect = _cursor_js__WEBPACK_IMPORTED_MODULE_4__["Cursor"].getCursorRect(this.shadowRoot);
      this.requestUpdate();
      this.dispatchEvent(new CustomEvent("fw-formula-content-changed", {
        detail: {
          formulaString: this.content,
          error: this.errorString
        },
        bubbles: true
      }));
    }
  }, {
    key: "requestCalculate",
    value: function requestCalculate() {
      var _this$_parser$addPare;
      if (this._parser.parseInput(this.content).errorString) {
        return;
      }
      var calculatedResult = this._parser.calculate(this.content);
      this.content = (_this$_parser$addPare = this._parser.addParentheses(this.content)) !== null && _this$_parser$addPare !== void 0 ? _this$_parser$addPare : this.content;
      this.parseInput();
      this._calculatedResult = calculatedResult.result;
      this.errorString = calculatedResult.errorString;
      this._recommendations = null;
      this.requestUpdate();
    }
  }, {
    key: "requestFormat",
    value: function requestFormat() {
      var _this$_parser$addPare2;
      this.content = (_this$_parser$addPare2 = this._parser.addParentheses(this.content)) !== null && _this$_parser$addPare2 !== void 0 ? _this$_parser$addPare2 : this.content;
      this.parseInput();
      this._recommendations = null;
      this.requestUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$currentCursorRe,
        _this$currentCursorRe2,
        _this$editor$getClien,
        _this$editor,
        _this$editor$getClien2,
        _this$currentCursorRe3,
        _this$currentCursorRe4,
        _this$editor$getClien3,
        _this$editor2,
        _this$editor2$getClie,
        _this2 = this;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <style>\n        ", "\n      </style>\n      <div\n        contenteditable\n        id=\"wysiwyg-editor\"\n        spellcheck=\"false\"\n        autocomplete=\"off\"\n        @input=", "\n        @keydown=", "\n      ></div>\n      ", "\n      <p>", "</p>\n    "])), _styles_formula_editor_styles_js__WEBPACK_IMPORTED_MODULE_2__["FormulaEditorStyles"], this.handleChange, this.handleKeyboardEvents, this._recommendations ? Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" <suggestion-menu\n            style=\"\n              position: absolute; \n              left: ", "; \n              top: ", ";\n            \"\n            .recommendations=", "\n            .currentSelection=", "\n            .onClickRecommendation=", "\n          ></suggestion-menu>"])), ((_this$currentCursorRe = (_this$currentCursorRe2 = this.currentCursorRect) === null || _this$currentCursorRe2 === void 0 ? void 0 : _this$currentCursorRe2.left) !== null && _this$currentCursorRe !== void 0 ? _this$currentCursorRe : 0) - ((_this$editor$getClien = (_this$editor = this.editor) === null || _this$editor === void 0 ? void 0 : (_this$editor$getClien2 = _this$editor.getClientRect()[0]) === null || _this$editor$getClien2 === void 0 ? void 0 : _this$editor$getClien2.left) !== null && _this$editor$getClien !== void 0 ? _this$editor$getClien : 0) + "px", ((_this$currentCursorRe3 = (_this$currentCursorRe4 = this.currentCursorRect) === null || _this$currentCursorRe4 === void 0 ? void 0 : _this$currentCursorRe4.top) !== null && _this$currentCursorRe3 !== void 0 ? _this$currentCursorRe3 : 0 - ((_this$editor$getClien3 = (_this$editor2 = this.editor) === null || _this$editor2 === void 0 ? void 0 : (_this$editor2$getClie = _this$editor2.getClientRect()[0]) === null || _this$editor2$getClie === void 0 ? void 0 : _this$editor2$getClie.top) !== null && _this$editor$getClien3 !== void 0 ? _this$editor$getClien3 : 0)) + window.scrollY + "px", this._recommendations, this._selectedRecommendation, function (e) {
        return _this2.onClickRecommendation(e);
      }) : Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""]))), this._calculatedResult);
    }
  }]);
  return FormulaEditor;
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "_formattedContent", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "_recommendations", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "_calculatedResult", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "currentCursorPosition", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "currentCursorRect", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "lastInputType", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["state"])()], FormulaEditor.prototype, "_selectedRecommendation", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], FormulaEditor.prototype, "content", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
  type: Map,
  converter: {
    fromAttribute: function fromAttribute(value) {
      if (value) {
        return new Map(JSON.parse(value));
      }
    },
    toAttribute: function toAttribute(value) {
      return JSON.stringify(Array.from(value.entries()));
    }
  }
})], FormulaEditor.prototype, "variables", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], FormulaEditor.prototype, "minSuggestionLen", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], FormulaEditor.prototype, "errorString", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["query"])("wysiwyg-editor")], FormulaEditor.prototype, "editor", void 0);
FormulaEditor = __decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])("formula-editor")], FormulaEditor);


/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/helpers.js":
/*!****************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/helpers.js ***!
  \****************************************************************************************************************/
/*! exports provided: Stack, Queue, Expectation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expectation", function() { return Expectation; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Stack = /*#__PURE__*/function () {
  function Stack() {
    _classCallCheck(this, Stack);
    this._elements = [];
  }
  _createClass(Stack, [{
    key: "push",
    value: function push(item) {
      this._elements.push(item);
    }
  }, {
    key: "pop",
    value: function pop() {
      return this._elements.pop();
    }
  }, {
    key: "top",
    value: function top() {
      return this._elements.at(-1);
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._elements.length == 0;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this._elements);
    }
  }]);
  return Stack;
}();
var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);
    this._elements = {};
    this._head = 0;
    this._tail = 0;
  }
  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(item) {
      this._elements[this._tail] = item;
      this._tail++;
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      if (this._tail === this._head) return undefined;
      var element = this._elements[this._head];
      delete this._elements[this._head];
      this._head++;
      return element;
    }
  }, {
    key: "peek",
    value: function peek() {
      return this._elements[this._head];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._head == this._tail;
    }
  }, {
    key: "print",
    value: function print() {
      console.log(this._elements);
    }
  }]);
  return Queue;
}();
var Expectation;
(function (Expectation) {
  Expectation[Expectation["VARIABLE"] = 0] = "VARIABLE";
  Expectation[Expectation["OPERATOR"] = 1] = "OPERATOR";
  Expectation[Expectation["UNDEFINED"] = 2] = "UNDEFINED";
})(Expectation || (Expectation = {}));

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/helpers/types.js":
/*!**********************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/helpers/types.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Operator, Formula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operator", function() { return Operator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formula", function() { return Formula; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Operator;
(function (Operator) {
  Operator["PLUS"] = "+";
  Operator["MINUS"] = "-";
  Operator["MUL"] = "*";
  Operator["DIV"] = "/";
  Operator["NONE"] = "";
})(Operator || (Operator = {}));
var Formula = /*#__PURE__*/_createClass(function Formula(name, formulaString) {
  var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
  _classCallCheck(this, Formula);
  this.error = null;
  this.name = name;
  this.formulaString = formulaString;
  this.precision = precision;
});

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/parser.js":
/*!***************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/parser.js ***!
  \***************************************************************************************************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ "./node_modules/big.js/big.js");
/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "../../packages/formula-editor/dist/formula-editor/src/helpers.js");
/* harmony import */ var _recommendor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recommendor.js */ "../../packages/formula-editor/dist/formula-editor/src/recommendor.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Parser = /*#__PURE__*/function () {
  function Parser(variables, minSuggestionLen) {
    _classCallCheck(this, Parser);
    this.mathematicalOperators = new Set(["^", "+", "-", "*", "/"]);
    this.operatorPrecedence = {
      "^": 3,
      "/": 2,
      "*": 2,
      "+": 1,
      "-": 1
    };
    this.variables = variables;
    this._recommender = new _recommendor_js__WEBPACK_IMPORTED_MODULE_2__["Recommender"](this.variables, minSuggestionLen);
  }
  _createClass(Parser, [{
    key: "parseInput",
    value: function parseInput(formula) {
      var _this = this;
      var prevCurPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var recommendation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var tokens = formula.split(/([-+(),*^/:?\s])/g);
      // Stores the positions of opening parentheses. This allows us to
      // show "Unclosed parenthesis error" for positions which are far behind
      // our current token
      var parentheses = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
      // The HTML formatted string which we eventually show on the view.
      var formattedString = "";
      // The expectation that we have for the current token.
      var expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].VARIABLE;
      // Position of the current token in the formula string.
      var currentPosition = 0;
      // Previous 'token' (not a space or a new line) that we just encountered.
      var previousToken = "";
      // The object that we return as the output of the parsing result.
      var parseOutput = {
        recommendations: null,
        formattedContent: null,
        formattedString: null,
        newCursorPosition: prevCurPos !== null && prevCurPos !== void 0 ? prevCurPos : -1,
        errorString: null
      };
      console.log(tokens);
      tokens.forEach(function (token) {
        // It is a number is either it's in the defined variables, or
        // it's a valid number literal.
        var isNumber = _this.variables.has(token) || !Number.isNaN(Number(token)),
          isOperator = _this.mathematicalOperators.has(token),
          isSpace = token.trim() == "",
          isBracket = token == "(" || token == ")";
        // We don't really want anything for the spaces, other than simply
        // adding them back to the view.
        if (isSpace) {
          formattedString = "".concat(formattedString).concat(token);
          currentPosition += token.length;
          return;
        }
        // If the cursor position is 'inside` the current token:
        //
        // 1. If we've got a recommendation to add, simply replace the
        //    word with the recommendation.
        // 2. Ask the recommendor to fetch recommendations for this specific
        //    token/word.
        if (currentPosition <= prevCurPos && currentPosition + token.length >= prevCurPos) {
          // If a recommendation was provided, replace the correspoding
          // word with it and move the cursor forward, accordingly.
          if (recommendation) {
            // Since we are sure that the recommendation will always correspond
            // to a variable.
            isNumber = true;
            // If the new cursor length somehow becomes larger than the
            // length of the formula string, setting the caret to that
            // length will move the caret to the start. Although this overflow
            // won't happen, but still, this check prevents that.
            parseOutput.newCursorPosition = Math.min(parseOutput.newCursorPosition + recommendation.length - token.length, formula.length + recommendation.length - token.length);
            token = recommendation;
            recommendation = null;
          }
          // Fetch recommendations nonetheless.
          parseOutput.recommendations = _this._recommender.getRecommendation(token);
          console.log(parseOutput.recommendations);
        }
        var tokenClassName = "";
        // Don't check for errors if an error has already been encountered.
        if (expectation != _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED) {
          // Unnecessary closing parenthesis
          if (parentheses.isEmpty() && token == ")") {
            parseOutput.errorString = "Unexpected ')' at pos: ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
          // Operator or ) after an operator. Eg: `23 / *` or `23 / )`
          // Unary `+` and `-` are not an error as they might represent
          // a positive or negative number respectively. But they will still
          // be an error if the formula ends with them.
          else if (expectation == _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].VARIABLE && !isNumber && token != "(" && !((token == "-" || token == "+") && _this.mathematicalOperators.has(previousToken))) {
            parseOutput.errorString = "Expected variable/number at pos: ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
          // Number/Variable after the same. Eg: `a a` or `420 420`.
          // Having a ) is fine. Eg: `23)` might be representing `(23 + 23)
          else if (expectation == _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].OPERATOR && !isOperator && token != ")") {
            parseOutput.errorString = "Expected mathematical operator at pos: ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
          // Unknown symbol/variable/word
          else if (!(isNumber || isOperator || isBracket)) {
            parseOutput.errorString = "Unknown word at pos: ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
          // The case of division by zero. Since we can't know if an expression evaluates
          // to zero or not, that case can only be handled during calculation.
          else if (isNumber && previousToken == "/" && (_this.variables.get(token) == 0 || Number(token) == 0)) {
            parseOutput.errorString = "Division by zero at pos: ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
          // Empty brackets. Default might be takn as 0, but that will only make sense
          // in addition and subtraction and not in other operators, so making this
          // case an error makes more sense.
          else if (previousToken == "(" && token == ")") {
            parseOutput.errorString = "Empty brackets at position ".concat(currentPosition);
            tokenClassName += " error";
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED;
          }
        }
        // Setting the expectation for the next token, if we have not encountered an
        // error already.
        if (expectation != _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED) {
          if (token == "(" || isOperator) {
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].VARIABLE;
          } else if (token == ")" || isNumber) {
            expectation = _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].OPERATOR;
          }
        }
        if (token == "(") {
          parentheses.push(currentPosition);
          tokenClassName += " bracket";
        } else if (token == ")") {
          parentheses.pop();
          tokenClassName += " bracket";
        } else if (isOperator) {
          tokenClassName += " operator";
        } else if (expectation == _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Expectation"].UNDEFINED) {
          tokenClassName += " error";
        }
        // Since not using ShadowDOM, having these specific class names will prevent
        // name collision.
        formattedString = "".concat(formattedString, "<span class=\"wysiwygInternals ").concat(tokenClassName, "\">").concat(token, "</span>");
        currentPosition += token.length;
        previousToken = token;
      });
      // If the formula ends with a mathematical operator, or has unclosed `(`
      if (this.mathematicalOperators.has(previousToken)) {
        parseOutput.errorString = "Unexpected ending of formula.";
      } else if (!parentheses.isEmpty()) {
        parseOutput.errorString = "Unclosed '(' at position: ".concat(parentheses.top());
      }
      var parser = new DOMParser();
      var doc = parser.parseFromString(formattedString, "text/html");
      parseOutput.formattedContent = doc.querySelector("body");
      parseOutput.formattedString = formattedString;
      return parseOutput;
    }
  }, {
    key: "buildRPN",
    value: function buildRPN(formula) {
      if (this.parseInput(formula).errorString) {
        return null;
      }
      var tokens = formula.split(/([-+(),*^/:?\s])/g).filter(function (el) {
        return !/\s+/.test(el) && el !== "";
      });
      // Handling the special case of unary `-` and `+`.
      var previousToken = "";
      var carriedToken = null;
      var parsedTokens = [];
      var _iterator = _createForOfIteratorHelper(tokens),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _token = _step.value;
          if ((_token == "+" || _token == "-") && this.mathematicalOperators.has(previousToken)) {
            carriedToken = _token;
          } else if (carriedToken) {
            parsedTokens.push(carriedToken + _token);
            carriedToken = null;
          } else {
            parsedTokens.push(_token);
          }
          previousToken = _token;
        }
        /**
         * Shunting Yard Algorithm (EW Dijkstra)
         */
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var operatorStack = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
      var outputQueue = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Queue"]();
      for (var _i = 0, _parsedTokens = parsedTokens; _i < _parsedTokens.length; _i++) {
        var token = _parsedTokens[_i];
        if (token == "(") {
          operatorStack.push("(");
        } else if (token == ")") {
          while (operatorStack.top() != "(") {
            outputQueue.enqueue(operatorStack.pop());
          }
          operatorStack.pop();
        } else if (this.mathematicalOperators.has(token)) {
          while (this.mathematicalOperators.has(operatorStack.top()) && this.operatorPrecedence[token] <= this.operatorPrecedence[operatorStack.top()]) {
            outputQueue.enqueue(operatorStack.pop());
          }
          operatorStack.push(token);
        } else if (!Number.isNaN(token) && token != "") {
          outputQueue.enqueue(token);
        }
      }
      while (operatorStack.top()) {
        outputQueue.enqueue(operatorStack.pop());
      }
      return outputQueue;
    }
  }, {
    key: "addParentheses",
    value: function addParentheses(formula) {
      var _this2 = this;
      var rpn = this.buildRPN(formula);
      if (!rpn) {
        return null;
      }
      var lexedRPN = [];
      while (!rpn.isEmpty()) {
        lexedRPN.push(rpn.dequeue());
      }
      // Stores the operators that we encounter in the RPN
      var operatorStack = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
      // Stores the `results`, which are essentially individual groups
      // of tokens showing a meaningful value.
      var resultStack = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
      lexedRPN.forEach(function (symbol) {
        var parsedLeftExpression, parsedRightExpression;
        // If we encounter a number or a variable in the RPN, it is itself
        // a calculated entity (say a result in itself), needs no modification
        // and can be directly put into the result stack.
        if (_this2.variables.has(symbol) || !isNaN(parseFloat(symbol)) && isFinite(parseFloat(symbol))) {
          resultStack.push(symbol);
          operatorStack.push(null);
        }
        // If it is not a number/variable then it is an operator. We will
        // take out previous operators from the `operatorStack`, compare
        // them with the current one, adds brackets accordingly to the `results`
        // around it, and then finally add it to the `operatorStack` for
        // future reference.
        else if (Object.keys(_this2.operatorPrecedence).includes(symbol)) {
          var _ref = [resultStack.pop(), resultStack.pop(), operatorStack.pop(), operatorStack.pop()],
            rightExpression = _ref[0],
            leftExpression = _ref[1],
            operatorA = _ref[2],
            operatorB = _ref[3];
          // The conditions that govern when to show a parenthesis.
          if (_this2.operatorPrecedence[operatorB] <= _this2.operatorPrecedence[symbol] || _this2.operatorPrecedence[operatorB] === _this2.operatorPrecedence[symbol] && ["/", "-"].includes(symbol)) {
            parsedLeftExpression = "(".concat(leftExpression, ")");
          } else {
            parsedLeftExpression = leftExpression;
          }
          if (_this2.operatorPrecedence[operatorA] <= _this2.operatorPrecedence[symbol] || _this2.operatorPrecedence[operatorA] === _this2.operatorPrecedence[symbol] && ["/", "-"].includes(symbol)) {
            parsedRightExpression = "(".concat(rightExpression, ")");
          } else {
            parsedRightExpression = rightExpression;
          }
          // The bracket included expression is now itself a `result`
          resultStack.push("".concat(parsedLeftExpression, " ").concat(symbol, " ").concat(parsedRightExpression));
          operatorStack.push(symbol);
        } else throw "".concat(symbol, " is not a recognized symbol");
      });
      if (!resultStack.isEmpty()) {
        return resultStack.pop();
      } else throw "".concat(lexedRPN, " is not a correct RPN");
    }
  }, {
    key: "calculate",
    value: function calculate(formula) {
      var rpn = this.buildRPN(formula);
      var calculationResult = {
        result: undefined,
        errorString: null
      };
      if (!rpn) {
        return calculationResult;
      }
      var calcStack = new _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
      while (!rpn.isEmpty()) {
        var frontItem = rpn.dequeue();
        if (!this.mathematicalOperators.has(frontItem)) {
          var _this$variables$get$t, _this$variables$get;
          calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(Number.parseFloat((_this$variables$get$t = (_this$variables$get = this.variables.get(frontItem)) === null || _this$variables$get === void 0 ? void 0 : _this$variables$get.toString()) !== null && _this$variables$get$t !== void 0 ? _this$variables$get$t : frontItem)));
        } else {
          var operator = frontItem;
          var numB = calcStack.pop();
          var numA = calcStack.pop();
          try {
            switch (operator) {
              case "+":
                calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numA).add(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB)));
                break;
              case "-":
                calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numA).sub(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB)));
                break;
              case "*":
                calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numA).mul(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB)));
                break;
              case "/":
                if (parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB).toString()) == 0) {
                  calculationResult.errorString = "Division by zero encountered";
                  return calculationResult;
                }
                calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numA).div(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB)));
                break;
              // Big.js doesn't support exponentiating a Big to a Big, which
              // is obvious due to performance overheads. Use this case with care.
              case "^":
                calcStack.push(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numA).pow(parseFloat(big_js__WEBPACK_IMPORTED_MODULE_0___default()(numB).toString())));
            }
          } catch (error) {
            calculationResult.errorString = error;
            return calculationResult;
          }
        }
      }
      calculationResult.result = parseFloat(calcStack.top().toString());
      return calculationResult;
    }
  }]);
  return Parser;
}();

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/recommendor.js":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/recommendor.js ***!
  \********************************************************************************************************************/
/*! exports provided: Recommender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recommender", function() { return Recommender; });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Recommender = /*#__PURE__*/function () {
  function Recommender(variables, minSuggestionLen) {
    _classCallCheck(this, Recommender);
    this._mininumSuggestionLength = minSuggestionLen > 0 ? minSuggestionLen : 1;
    this._trie = new TrieNode();
    var _iterator = _createForOfIteratorHelper(variables),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var variable = _step.value;
        this.insert(variable[0]);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  _createClass(Recommender, [{
    key: "insert",
    value: function insert(word) {
      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var node = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      if (position == -1) {
        this.insert(word, 0, this._trie);
        return;
      }
      if (position == word.length) {
        node === null || node === void 0 ? void 0 : node.addChild("\0");
        return;
      }
      if (!node.getChild(word[position])) {
        node === null || node === void 0 ? void 0 : node.addChild(word[position]);
      }
      this.insert(word, position + 1, node.getChild(word[position]));
    }
  }, {
    key: "getRecommendation",
    value: function getRecommendation(word) {
      if (word.length < this._mininumSuggestionLength) {
        return null;
      }
      var recommendations = [];
      var currentPosition = 0;
      var currentNode = this._trie;
      while (currentNode && currentPosition < word.length) {
        currentNode = currentNode.getChild(word[currentPosition]);
        currentPosition++;
      }
      if (!currentNode) {
        return null;
      }
      this._traverseAndGet(recommendations, currentNode, word);
      if (recommendations.length == 0 || recommendations.length == 1 && recommendations[0] == word) {
        return null;
      }
      return recommendations;
    }
  }, {
    key: "_traverseAndGet",
    value: function _traverseAndGet(recommendations, node, word) {
      var currentString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
      var _iterator2 = _createForOfIteratorHelper(node.children),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;
          if (child[0] == "\0") {
            recommendations.push(word + currentString);
            // return;
          }
          this._traverseAndGet(recommendations, child[1], word, currentString + child[0]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
  return Recommender;
}();
var TrieNode = /*#__PURE__*/function () {
  function TrieNode() {
    _classCallCheck(this, TrieNode);
    this._children = new Map();
  }
  _createClass(TrieNode, [{
    key: "children",
    get: function get() {
      return this._children;
    }
  }, {
    key: "getChild",
    value: function getChild(_char) {
      return this._children.get(_char);
    }
  }, {
    key: "addChild",
    value: function addChild(_char2) {
      this._children.set(_char2, new TrieNode());
    }
  }]);
  return TrieNode;
}();

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/styles/formula-editor-styles.js":
/*!*************************************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/styles/formula-editor-styles.js ***!
  \*************************************************************************************************************************************/
/*! exports provided: FormulaEditorStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormulaEditorStyles", function() { return FormulaEditorStyles; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormulaEditorStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  #wysiwyg-editor {\n    display: inline-block;\n    border: none;\n    padding: 4px;\n    caret-color: var(--fe-caret-color, #fff);\n    color: var(--fe-text-color, #f7f1ff);\n    line-height: 1.1;\n    width: 100%;\n    height: var(--fe-height, 60%);\n    border-radius: var(--fe-border-radius, 4px) var(--fe-border-radius, 4px) 0px\n      0px;\n    overflow: auto;\n    border: 2px solid black;\n    outline: 0px solid black;\n    white-space: pre-wrap;\n    background-color: var(--fe-background-color, #222222);\n    margin: 0px;\n    /* position: relative; */\n  }\n\n  .wysiwygInternals.error {\n    text-decoration: underline;\n    -webkit-text-decoration-color: var(--fe-err-underline-color, #fc514f);\n    text-decoration-color: var(--fe-err-underline-color, #fc514f);\n    -webkit-text-decoration-style: wavy;\n    text-decoration-style: wavy;\n    /* text-decoration-thickness: 1px; */\n    text-decoration-color: var(--fe-err-underline-color, red);\n  }\n\n  .wysiwygInternals.bracket {\n    color: var(--fe-bracket-color, #fc514f);\n  }\n\n  .wysiwygInternals.operator {\n    font-weight: bold;\n    color: var(--fe-operator-color, #fc618d);\n  }\n\n  .wysiwygInternals.variable {\n    color: var(--fe-variable-color, #fc618d);\n  }\n"])));

/***/ }),

/***/ "../../packages/formula-editor/dist/formula-editor/src/suggestion-menu.js":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/formula-editor/src/suggestion-menu.js ***!
  \************************************************************************************************************************/
/*! exports provided: SuggestionMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionMenu", function() { return SuggestionMenu; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
var _SuggestionMenu, _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SuggestionMenu = (_SuggestionMenu = /*#__PURE__*/function (_LitElement) {
  _inherits(SuggestionMenu, _LitElement);
  var _super = _createSuper(SuggestionMenu);
  function SuggestionMenu() {
    var _this;
    _classCallCheck(this, SuggestionMenu);
    _this = _super.apply(this, arguments);
    _this.recommendations = [];
    _this.onClickRecommendation = function (recommendation) {};
    _this.currentSelection = "";
    return _this;
  }
  _createClass(SuggestionMenu, [{
    key: "handleKeydown",
    value: function handleKeydown(event, recommendation) {
      if (event.code == "Enter") {
        event.preventDefault();
        event.stopPropagation();
        this.onClickRecommendation(recommendation);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <ul class=\"wysiwyg-suggestion-menu\">\n        ", "\n      </ul>\n    "])), this.recommendations.map(function (recommendation) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<li\n            class=\"", "\"\n            tabindex=\"0\"\n            @click=", "\n            @keydown=", "\n          >\n            ", "\n          </li>"])), _this2.currentSelection === recommendation ? 'selected' : '', function (e) {
          return _this2.onClickRecommendation(recommendation);
        }, function (e) {
          return _this2.handleKeydown(e, recommendation);
        }, recommendation);
      }));
    }
  }]);
  return SuggestionMenu;
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]), _SuggestionMenu.styles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    ul {\n      border: 1px solid var(--fe-suggestion-color, white);\n      color: var(--fe-suggestion-color, #bab6c0);\n      background-color: var(--fe-suggestion-background-color, #363537);\n      box-sizing: border-box;\n      width: fit-content;\n      list-style-type: none;\n      padding: 4px 0px;\n      margin: 2px;\n    }\n\n    li {\n      margin: 0px;\n      padding: 2px 6px;\n      cursor: pointer;\n    }\n\n    li.selected {\n      background-color: var(--fe-suggestion-selected-background-color, darkgrey);\n      color: var(--fe-suggestion-selected-color, yellow);\n    }\n\n    li:focus-visible {\n      /* outline: 1px solid red; */\n      outline: 0px;\n      color: var(--fe-suggestion-focus-color, #fce566);\n      background-color: var(--fe-suggestion-focus-background-color, #69676c);\n    }\n  "]))), _SuggestionMenu);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], SuggestionMenu.prototype, "recommendations", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], SuggestionMenu.prototype, "onClickRecommendation", void 0);
__decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])()], SuggestionMenu.prototype, "currentSelection", void 0);
SuggestionMenu = __decorate([Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["customElement"])("suggestion-menu")], SuggestionMenu);


/***/ }),

/***/ "../../packages/formula-editor/dist/styles/src/button-styles.js":
/*!**************************************************************************************************************!*\
  !*** /home/runner/work/fw-components/fw-components/packages/formula-editor/dist/styles/src/button-styles.js ***!
  \**************************************************************************************************************/
/*! exports provided: UnderlinedButtonStyles, TextButtonStyles, PrimaryButtonStyles, SecondaryButtonStyles, AlertButtonStyles, ToggleButtonStyles, FabStyles, ButtonSpinnerStyles, SmallButtonStyles, PaperToggleButtonStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderlinedButtonStyles", function() { return UnderlinedButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextButtonStyles", function() { return TextButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButtonStyles", function() { return PrimaryButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButtonStyles", function() { return SecondaryButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertButtonStyles", function() { return AlertButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonStyles", function() { return ToggleButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabStyles", function() { return FabStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSpinnerStyles", function() { return ButtonSpinnerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallButtonStyles", function() { return SmallButtonStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperToggleButtonStyles", function() { return PaperToggleButtonStyles; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UnderlinedButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  <style>\n    .primary-text-underlined {\n      font-family: var(--theme-font);\n      border: none;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--primary-color, #205081);\n      padding: 0;\n      margin: 0;\n      border-radius: 0;\n      min-width: max-content;\n      text-transform: none;\n      border-bottom: 1px solid rgba(var(--secondary-color-rgb), 0.3);\n    }\n\n    .secondary-text-underlined {\n      font-family: var(--theme-font);\n      border: none;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--secondary-color, #515151);\n      margin: 0;\n      padding: 0;\n      border-radius: 0;\n      min-width: max-content;\n      text-transform: none;\n      border-bottom: 1px solid rgba(var(--secondary-color-rgb), 0.3);\n    }\n  </style>\n"])));
var TextButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  <style>\n    .primary-text-button {\n      font-family: var(--theme-font);\n      border: none;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--primary-color, #205081);\n      padding: 0 8px;\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      margin: 0;\n      text-transform: none;\n    }\n\n    .secondary-text-button {\n      font-family: var(--theme-font);\n      border: none;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--secondary-color, #515151);\n      padding: 0 8px;\n      min-width: 64px;\n      margin: 0;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n\n    .primary-text-button:hover {\n      font-weight: bold;\n    }\n\n    .secondary-text-button:hover {\n      font-weight: bold;\n    }\n\n    .primary-text-button[disabled], .secondary-text-button[disabled] {\n        opacity: 0.5;\n    }\n  </style>\n"])));
var PrimaryButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  <style>\n    .primary-outlined {\n      font-family: var(--theme-font);\n      border: 1px solid var(--primary-color, #205081);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--secondary-color, #515151);\n      padding: 0 var(--button-padding, 16px);\n      min-width: 64px;\n      margin: 0;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n    .primary-outlined:hover {\n      background-color: var(--primary-color, #205081);\n      color: var(--light-color, #fff);\n    }\n    .primary-colored {\n      font-family: var(--theme-font);\n      background-color: var(--primary-color, #205081);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--light-color, #fff);\n      margin: 0;\n      padding: 0 var(--button-padding, 16px);\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n    .primary-colored:hover {\n      box-shadow: 0 1px 2px 1px var(--primary-color, #205081);\n    }\n    .primary-outlined[disabled], .primary-colored[disabled] {\n        opacity: 0.5;\n    }\n  </style>\n"])));
var SecondaryButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  <style>\n    .secondary-outlined {\n      font-family: var(--theme-font);\n      border: 1px solid rgba(var(--secondary-color-rgb), 0.3);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--secondary-color, #515151);\n      padding: 0 var(--button-padding, 16px);\n      margin: 0;\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n\n    .secondary-outlined:hover {\n      background-color: var(--secondary-color, #515151);\n      color: var(--light-color, #fff);\n    }\n\n    .secondary-colored {\n      font-family: var(--theme-font);\n      background-color: var(--secondary-color, #515151);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--light-color, #fff);\n      padding: 0 var(--button-padding, 16px);\n      margin: 0;\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n\n    .secondary-colored:hover {\n      box-shadow: 0 1px 2px 1px var(--secondary-color, #515151);\n    }\n\n    .secondary-outlined[disabled], .secondary-colored[disabled] {\n        opacity: 0.5;\n    }\n  </style>\n"])));
var AlertButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  <style>\n    .alert-outlined {\n      font-family: var(--theme-font);\n      border: 1px solid var(--error-color);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--error-color, #d50000);\n      padding: 0 var(--button-padding, 16px);\n      margin: 0;\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n\n    .alert-outlined:hover {\n      background-color: var(--error-color-l1, #db4437);\n      color: var(--light-color, #fff);\n    }\n\n    .alert-colored {\n      font-family: var(--theme-font);\n      background-color: var(--error-color, #d50000);\n      border-radius: 5px;\n      font-size: var(--secondary-font-size, 16px);\n      color: var(--light-color, #fff);\n      padding: 0 var(--button-padding, 16px);\n      margin: 0;\n      min-width: 64px;\n      height: var(--button-height, 36px);\n      text-transform: none;\n    }\n\n    .alert-colored:hover {\n      box-shadow: 0 1px 2px 1px var(--error-color, #d50000);\n    }\n\n    .alert-outlined[disabled], .alert-colored[disabled] {\n        opacity: 0.5;\n    }\n  </style>\n"])));
var ToggleButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  <style>\n    .toggle-group {\n      display: flex; justify-content: flex-end; align-items: center; flex-wrap: wrap;\n    }\n\n    .toggle-group .toggle:first-child{\n      border-top-left-radius: 5px; border-bottom-left-radius: 5px;\n    }\n    .toggle-group .toggle:last-child{\n      border-top-right-radius: 5px; border-bottom-right-radius: 5px;\n    }\n\n    .toggle {\n      text-transform: none;\n      margin: 0px;\n      border-radius: 0px;\n      background-color: transparent;\n      border: 1px solid var(--secondary-color-l3);\n      color: var(--secondary-color);\n      font-size: var(--secondary-font-size, 16px);\n      font-family: var(--theme-font);\n      display: flex;\n      justify-content: space-around;\n      min-width: 64px;\n      align-items: center;\n    }\n\n    .toggle.small {\n      height: 30px;\n      font-size: var(--tertiary-font-size, 14px);\n    }\n\n    .toggle:hover {\n      box-shadow: 0 1px 2px 1px rgba(var(--secondary-color-rgb), 0.1);\n    }\n\n    .selected-toggle {\n      background-color: var(--secondary-color);\n      color: var(--light-color, #fff);\n    }\n\n    .toggle iron-icon{\n      --iron-icon-height: var(--body-font-size, 16px);\n      margin-right: 5px;\n    }\n\n    .toggle mwc-icon{\n      --mdc-icon-size: var(--body-font-size, 16px);\n      margin-right: 5px;\n    }\n  </style>\n"])));
var FabStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  <style>\n    paper-fab {\n      position: fixed;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      bottom: 3%;\n      right: 2%;\n    }\n\n    paper-fab[disabled], .fab[disabled] {\n        opacity: 0.5;\n    }\n\n    .fab {\n      font-size: var(--secondary-font-size, 16px);\n      position: fixed;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      bottom: 3%;\n      right: 2%;\n      box-shadow: var(--paper-material-elevation-2_-_box-shadow);\n      font-family: var(--theme-font);\n    }\n\n    .colored-fab {\n      background-color: var(--secondary-color, #515151);\n      --iron-icon-height: var(--h2-font-size, 26px);\n      --iron-icon-width: var(--h2-font-size, 26px);\n      color: var(--light-color, #fff);\n    }\n\n    .light-colored-fab {\n      background-color: var(--light-color, #fff);\n      --iron-icon-height: var(--h2-font-size, 20px);\n      --iron-icon-width: var(--h2-font-size, 20px);\n      color: var(--secondary-color);\n      /* --iron-icon-stroke-color: var(--secondary-color); */\n    }\n\n    .light-colored-fab:hover,\n    .colored-fab:hover {\n      box-shadow: var(--paper-material-elevation-3_-_box-shadow);\n      font-weight: bold;\n    }\n\n    .rectangular-fab {\n      height:  var(--rectangular-fab-height, 50px);\n      width: var(--rectangular-fab-width, 120px);\n      border-radius:  var(--rectangular-fab-height, 50px);\n      padding: var(--rectangular-fab-padding, 0px);\n      max-height: var(--rectangular-fab-max-height, 50px);\n      z-index:  var(--rectangular-fab-z-index, 1);\n    }\n    .small-fab {\n      height: 50px;\n      width: 50px;\n      padding: 5px;\n    }\n    @media all and (max-width: 767px) {\n      .rectangular-fab {\n        height: var(--rectangular-fab-height, 40px);\n        width: var(--rectangular-fab-width, 120px);\n        border-radius: 50px;\n        padding: 0;\n        --fab-icon-height: 40px;\n      }\n    }\n  </style>\n"])));
var ButtonSpinnerStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  <style>\n    .colored-bt-spinner {\n      width: 18px;\n      height: 18px;\n      --paper-spinner-color: var(--light-color, #fff);\n      --paper-spinner-stroke-width: 3px;\n      margin-right: 8px;\n    }\n\n    .secondary-outlined-bt-spinner {\n      width: 18px;\n      height: 18px;\n      --paper-spinner-color: var(--secondary-color, #fff);\n      --paper-spinner-stroke-width: 3px;\n      margin-right: 8px;\n    }\n\n    .primary-outlined-bt-spinner {\n      width: 18px;\n      height: 18px;\n      --paper-spinner-color: var(--primary-color, #fff);\n      --paper-spinner-stroke-width: 3px;\n      margin-right: 8px;\n    }\n\n    .button-prefix-icon {\n      --iron-icon-height: var(--body-font-size, 16px);\n      --mdc-icon-size: var(--body-font-size, 16px);\n      margin-right: 5px;\n    }\n  </style>\n"])));
var SmallButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  <style>\n    .small-button {\n      height: 25px !important;\n      width: auto !important;\n      padding: 0px !important;\n      font-size: var(--tertiary-font-size) !important;\n    }\n    @media all and (max-width: 767px) {\n      .small-button{\n        height: 20px !important;\n      }\n    }\n  </style>\n"])));
var PaperToggleButtonStyles = Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  <custom-style>\n    <style>\n      paper-toggle-button {\n        font-family: var(--theme-font);\n        cursor: pointer;\n        --paper-toggle-button-checked-button: {\n          height: 15px;\n          width: 50%;\n          border-radius: 0;\n          bottom: 2px;\n          box-shadow: none;\n          border-bottom-right-radius : 8px;\n          border-top-right-radius: 8px;\n        }\n        --paper-toggle-button-unchecked-button: {\n          height: 15px;\n          width: 50%;\n          border-radius: 0;\n          bottom: 2px;\n          box-shadow: none;\n          border-bottom-left-radius : 8px;\n          border-top-left-radius: 8px;\n        }\n        --paper-toggle-button-unchecked-bar: {\n          height: 15px;\n          bottom: 2px;\n          box-shadow: none;\n        }\n        --paper-toggle-button-checked-bar: {\n          height: 15px;\n          bottom: 2px;\n          box-shadow: none;\n        }\n        --paper-toggle-button-label-color: var(--secondary-color);\n        align-items: flex-start;\n      }\n\n      paper-toggle-button.primary-colored {\n        --paper-toggle-button-unchecked-bar-color: var(--secondary-color-l1);\n        --paper-toggle-button-unchecked-button-color:  var(--secondary-color-l1);\n        --paper-toggle-button-checked-bar-color:  var(--primary-color-l1);\n        --paper-toggle-button-checked-button-color:  var(--primary-color);\n      }\n\n      paper-toggle-button.secondary-colored {\n        --paper-toggle-button-unchecked-bar-color: var(--secondary-color-l2);\n        --paper-toggle-button-unchecked-button-color:  var(--secondary-color-l2);\n        --paper-toggle-button-checked-bar-color:  var(--secondary-color-l1);\n        --paper-toggle-button-checked-button-color:  var(--secondary-color);\n      }\n    </style>\n  </custom-style>\n"])));

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: FWFormulaEditorShowcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FWFormulaEditorShowcase", function() { return FWFormulaEditorShowcase; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _fw_components_formula_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fw-components/formula-editor */ "../../packages/formula-editor/dist/formula-editor/src/formula-builder.js");
var _templateObject, _templateObject2, _templateObject3;
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
function _hasDecorators(element) { return element.decorators && element.decorators.length; }
function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Formula = /*#__PURE__*/function () {
  function Formula(name, formulaString) {
    var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
    _classCallCheck(this, Formula);
    this.name = name;
    this.formulaString = formulaString;
    this.precision = precision;
    this.error = null;
  }
  _createClass(Formula, [{
    key: "formulaString",
    get: function get() {
      return this._formulaString;
    },
    set: function set(value) {
      this._formulaString = value;
      this.error = null;
    }
  }]);
  return Formula;
}();
var FWFormulaEditorShowcase = _decorate(null, function (_initialize, _LitElement) {
  var FWFormulaEditorShowcase = /*#__PURE__*/function (_LitElement2) {
    _inherits(FWFormulaEditorShowcase, _LitElement2);
    var _super = _createSuper(FWFormulaEditorShowcase);
    function FWFormulaEditorShowcase() {
      var _this;
      _classCallCheck(this, FWFormulaEditorShowcase);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(FWFormulaEditorShowcase);
  }(_LitElement);
  return {
    F: FWFormulaEditorShowcase,
    d: [{
      kind: "field",
      decorators: [Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Object
      })],
      key: "currentFormula",
      value: function value() {
        return new Formula("Total Sales", "sales_in_quarter + additional_cost", 2);
      }
    }, {
      kind: "field",
      decorators: [Object(lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__["property"])({
        type: Object
      })],
      key: "variables",
      value: function value() {
        return new Map([["sales_expense", 5000], ["sales_in_quarter", 30000], ["sales_cummulative", 70000], ["cummulative_sum", 80000], ["additional_cost", 2000]]);
      }
    }, {
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .container {\n      width: 95%;\n      margin: auto;\n      font-family: Arial, sans-serif;\n    }\n    .variables {\n      margin: 20px 0;\n      padding: 15px;\n      border-radius: 8px;\n      background-color: #f3f3f3;\n      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);\n    }\n    .variable-list {\n      margin-top: 10px;\n    }\n    .variable-item {\n      display: flex;\n      justify-content: space-between;\n      padding: 5px 0;\n    }\n    .formula-builder-container {\n      width: 99%;\n      margin-top: 20px;\n    }\n  "])));
      }
    }, {
      kind: "method",
      key: "handleFormulaChange",
      value: function handleFormulaChange(event) {
        var _event$detail = event.detail,
          name = _event$detail.name,
          rawFormula = _event$detail.rawFormula,
          precision = _event$detail.precision;
        this.currentFormula = new Formula(name, rawFormula, precision);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"formula-editor-showcase\">\n        <div class=\"variables\">\n          <!-- Current Variables -->\n          <div class=\"variable-list\">\n            <h4>Current Variables</h4>\n            ", "\n          </div>\n        </div>\n\n        <div class=\"formula-builder-container\">\n          <formula-builder\n            id=\"formula-builder-showcase\"\n            .variables=", "\n            .formula=", "\n            @fw-formula-changed=", "\n          ></formula-builder>\n        </div>\n      </div>\n    "])), Array.from(this.variables.entries()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n                <div class=\"variable-item\">\n                  <span>", "</span>\n                  <span>", "</span>\n                </div>\n              "])), key, value);
        }), this.variables, this.currentFormula, this.handleFormulaChange);
      }
    }]
  };
}, lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
window.customElements.define("fw-formula-editor-showcase", FWFormulaEditorShowcase);

/***/ }),

/***/ "./node_modules/@lit/reactive-element/css-tag.js":
/*!*******************************************************!*\
  !*** ./node_modules/@lit/reactive-element/css-tag.js ***!
  \*******************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return r; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t = window,
  e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
  s = Symbol(),
  n = new WeakMap();
var o = /*#__PURE__*/function () {
  function o(t, e, n) {
    _classCallCheck(this, o);
    if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  _createClass(o, [{
    key: "styleSheet",
    get: function get() {
      var t = this.o;
      var s = this.t;
      if (e && void 0 === t) {
        var _e = void 0 !== s && 1 === s.length;
        _e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), _e && n.set(s, t));
      }
      return t;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.cssText;
    }
  }]);
  return o;
}();
var r = function r(t) {
    return new o("string" == typeof t ? t : t + "", void 0, s);
  },
  i = function i(t) {
    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }
    var n = 1 === t.length ? t[0] : e.reduce(function (e, s, n) {
      return e + function (t) {
        if (!0 === t._$cssResult$) return t.cssText;
        if ("number" == typeof t) return t;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      }(s) + t[n + 1];
    }, t[0]);
    return new o(n, t, s);
  },
  S = function S(s, n) {
    e ? s.adoptedStyleSheets = n.map(function (t) {
      return t instanceof CSSStyleSheet ? t : t.styleSheet;
    }) : n.forEach(function (e) {
      var n = document.createElement("style"),
        o = t.litNonce;
      void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
  },
  c = e ? function (t) {
    return t;
  } : function (t) {
    return t instanceof CSSStyleSheet ? function (t) {
      var e = "";
      var _iterator = _createForOfIteratorHelper(t.cssRules),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _s = _step.value;
          e += _s.cssText;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return r(e);
    }(t) : t;
  };


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/base.js":
/*!***************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/base.js ***!
  \***************************************************************/
/*! exports provided: decorateProperty, legacyPrototypeMethod, standardPrototypeMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorateProperty", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyPrototypeMethod", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardPrototypeMethod", function() { return t; });
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e = function e(_e, t, o) {
    Object.defineProperty(t, o, _e);
  },
  t = function t(e, _t) {
    return {
      kind: "method",
      placement: "prototype",
      key: _t.key,
      descriptor: e
    };
  },
  o = function o(_ref) {
    var e = _ref.finisher,
      t = _ref.descriptor;
    return function (o, n) {
      var r;
      if (void 0 === n) {
        var _n = null !== (r = o.originalKey) && void 0 !== r ? r : o.key,
          i = null != t ? {
            kind: "method",
            placement: "prototype",
            key: _n,
            descriptor: t(o.key)
          } : _extends({}, o, {
            key: _n
          });
        return null != e && (i.finisher = function (t) {
          e(t, _n);
        }), i;
      }
      {
        var _r = o.constructor;
        void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(_r, n);
      }
    };
  };


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/custom-element.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/custom-element.js ***!
  \*************************************************************************/
/*! exports provided: customElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return e; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e = function e(_e) {
  return function (n) {
    return "function" == typeof n ? function (e, n) {
      return customElements.define(e, n), n;
    }(_e, n) : function (e, n) {
      var t = n.kind,
        s = n.elements;
      return {
        kind: t,
        elements: s,
        finisher: function finisher(n) {
          customElements.define(e, n);
        }
      };
    }(_e, n);
  };
};


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/event-options.js":
/*!************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/event-options.js ***!
  \************************************************************************/
/*! exports provided: eventOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    finisher: function finisher(r, t) {
      Object.assign(r.prototype[t], e);
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/property.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/property.js ***!
  \*******************************************************************/
/*! exports provided: property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "property", function() { return n; });
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var i = function i(_i, e) {
    return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _extends({}, e, {
      finisher: function finisher(n) {
        n.createProperty(e.key, _i);
      }
    }) : {
      kind: "field",
      key: Symbol(),
      placement: "own",
      descriptor: {},
      originalKey: e.key,
      initializer: function initializer() {
        "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
      },
      finisher: function finisher(n) {
        n.createProperty(e.key, _i);
      }
    };
  },
  e = function e(i, _e, n) {
    _e.constructor.createProperty(n, i);
  };
function n(n) {
  return function (t, o) {
    return void 0 !== o ? e(n, t, o) : i(n, t);
  };
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-all.js":
/*!********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-all.js ***!
  \********************************************************************/
/*! exports provided: queryAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(r) {
      return {
        get: function get() {
          var r, o;
          return null !== (o = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelectorAll(e)) && void 0 !== o ? o : [];
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js ***!
  \**********************************************************************************/
/*! exports provided: queryAssignedElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return l; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var n;
var e = null != (null === (n = window.HTMLSlotElement) || void 0 === n ? void 0 : n.prototype.assignedElements) ? function (o, n) {
  return o.assignedElements(n);
} : function (o, n) {
  return o.assignedNodes(n).filter(function (o) {
    return o.nodeType === Node.ELEMENT_NODE;
  });
};
function l(n) {
  var _ref = null != n ? n : {},
    l = _ref.slot,
    t = _ref.selector;
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(o) {
      return {
        get: function get() {
          var o;
          var r = "slot" + (l ? "[name=".concat(l, "]") : ":not([name])"),
            i = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(r),
            s = null != i ? e(i, n) : [];
          return t ? s.filter(function (o) {
            return o.matches(t);
          }) : s;
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************/
/*! exports provided: queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return o; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");
/* harmony import */ var _query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-assigned-elements.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function o(o, n, r) {
  var l,
    s = o;
  return "object" == _typeof(o) ? (s = o.slot, l = o) : l = {
    flatten: n
  }, r ? Object(_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_1__["queryAssignedElements"])({
    slot: s,
    flatten: n,
    selector: r
  }) : Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(e) {
      return {
        get: function get() {
          var e, t;
          var o = "slot" + (s ? "[name=".concat(s, "]") : ":not([name])"),
            n = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
          return null !== (t = null == n ? void 0 : n.assignedNodes(l)) && void 0 !== t ? t : [];
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query-async.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query-async.js ***!
  \**********************************************************************/
/*! exports provided: queryAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return e; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function e(e) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(r) {
      return {
        get: function get() {
          var _this = this;
          return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var r;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.updateComplete;
                case 2:
                  return _context.abrupt("return", null === (r = _this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e));
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }))();
        },
        enumerable: !0,
        configurable: !0
      };
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/query.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/query.js ***!
  \****************************************************************/
/*! exports provided: query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return i; });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/decorators/base.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function i(i, n) {
  return Object(_base_js__WEBPACK_IMPORTED_MODULE_0__["decorateProperty"])({
    descriptor: function descriptor(o) {
      var t = {
        get: function get() {
          var o, n;
          return null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== n ? n : null;
        },
        enumerable: !0,
        configurable: !0
      };
      if (n) {
        var _n = "symbol" == _typeof(o) ? Symbol() : "__" + o;
        t.get = function () {
          var o, t;
          return void 0 === this[_n] && (this[_n] = null !== (t = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(i)) && void 0 !== t ? t : null), this[_n];
        };
      }
      return t;
    }
  });
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/decorators/state.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/decorators/state.js ***!
  \****************************************************************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return t; });
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/decorators/property.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function t(t) {
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_0__["property"])(_extends({}, t, {
    state: !0
  }));
}


/***/ }),

/***/ "./node_modules/@lit/reactive-element/reactive-element.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/reactive-element.js ***!
  \****************************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return a; });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var s;
var e = window,
  r = e.trustedTypes,
  h = r ? r.emptyScript : "",
  o = e.reactiveElementPolyfillSupport,
  n = {
    toAttribute: function toAttribute(t, i) {
      switch (i) {
        case Boolean:
          t = t ? h : null;
          break;
        case Object:
        case Array:
          t = null == t ? t : JSON.stringify(t);
      }
      return t;
    },
    fromAttribute: function fromAttribute(t, i) {
      var s = t;
      switch (i) {
        case Boolean:
          s = null !== t;
          break;
        case Number:
          s = null === t ? null : Number(t);
          break;
        case Object:
        case Array:
          try {
            s = JSON.parse(t);
          } catch (t) {
            s = null;
          }
      }
      return s;
    }
  },
  a = function a(t, i) {
    return i !== t && (i == i || t == t);
  },
  l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
  },
  d = "finalized";
var u = /*#__PURE__*/function (_HTMLElement) {
  _inherits(u, _HTMLElement);
  var _super = _createSuper(u);
  function u() {
    var _this;
    _classCallCheck(this, u);
    _this = _super.call(this), _this._$Ei = new Map(), _this.isUpdatePending = !1, _this.hasUpdated = !1, _this._$El = null, _this.u();
    return _this;
  }
  _createClass(u, [{
    key: "u",
    value: function u() {
      var _this2 = this;
      var t;
      this._$E_ = new Promise(function (t) {
        return _this2.enableUpdating = t;
      }), this._$AL = new Map(), this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach(function (t) {
        return t(_this2);
      });
    }
  }, {
    key: "addController",
    value: function addController(t) {
      var i, s;
      (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
  }, {
    key: "removeController",
    value: function removeController(t) {
      var i;
      null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
  }, {
    key: "_$Eg",
    value: function _$Eg() {
      var _this3 = this;
      this.constructor.elementProperties.forEach(function (t, i) {
        _this3.hasOwnProperty(i) && (_this3._$Ei.set(i, _this3[i]), delete _this3[i]);
      });
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t;
      var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
      return Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"])(s, this.constructor.elementStyles), s;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "enableUpdating",
    value: function enableUpdating(t) {}
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
        var i;
        return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
      });
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(t, i, s) {
      this._$AK(t, s);
    }
  }, {
    key: "_$EO",
    value: function _$EO(t, i) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l;
      var e;
      var r = this.constructor._$Ep(t, s);
      if (void 0 !== r && !0 === s.reflect) {
        var _h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
        this._$El = t, null == _h ? this.removeAttribute(r) : this.setAttribute(r, _h), this._$El = null;
      }
    }
  }, {
    key: "_$AK",
    value: function _$AK(t, i) {
      var s;
      var e = this.constructor,
        r = e._$Ev.get(t);
      if (void 0 !== r && this._$El !== r) {
        var _t = e.getPropertyOptions(r),
          _h2 = "function" == typeof _t.converter ? {
            fromAttribute: _t.converter
          } : void 0 !== (null === (s = _t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? _t.converter : n;
        this._$El = r, this[r] = _h2.fromAttribute(i, _t.type), this._$El = null;
      }
    }
  }, {
    key: "requestUpdate",
    value: function requestUpdate(t, i, s) {
      var e = !0;
      void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map()), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
  }, {
    key: "_$Ej",
    value: function () {
      var _$Ej2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var t;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.isUpdatePending = !0;
              _context.prev = 1;
              _context.next = 4;
              return this._$E_;
            case 4:
              _context.next = 9;
              break;
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              Promise.reject(_context.t0);
            case 9:
              t = this.scheduleUpdate();
              _context.t1 = null != t;
              if (!_context.t1) {
                _context.next = 14;
                break;
              }
              _context.next = 14;
              return t;
            case 14:
              return _context.abrupt("return", !this.isUpdatePending);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 6]]);
      }));
      function _$Ej() {
        return _$Ej2.apply(this, arguments);
      }
      return _$Ej;
    }()
  }, {
    key: "scheduleUpdate",
    value: function scheduleUpdate() {
      return this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this4 = this;
      var t;
      if (!this.isUpdatePending) return;
      this.hasUpdated, this._$Ei && (this._$Ei.forEach(function (t, i) {
        return _this4[i] = t;
      }), this._$Ei = void 0);
      var i = !1;
      var s = this._$AL;
      try {
        i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach(function (t) {
          var i;
          return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
        }), this.update(s)) : this._$Ek();
      } catch (t) {
        throw i = !1, this._$Ek(), t;
      }
      i && this._$AE(s);
    }
  }, {
    key: "willUpdate",
    value: function willUpdate(t) {}
  }, {
    key: "_$AE",
    value: function _$AE(t) {
      var i;
      null === (i = this._$ES) || void 0 === i || i.forEach(function (t) {
        var i;
        return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
      }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
  }, {
    key: "_$Ek",
    value: function _$Ek() {
      this._$AL = new Map(), this.isUpdatePending = !1;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }, {
    key: "getUpdateComplete",
    value: function getUpdateComplete() {
      return this._$E_;
    }
  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(t) {
      return !0;
    }
  }, {
    key: "update",
    value: function update(t) {
      var _this5 = this;
      void 0 !== this._$EC && (this._$EC.forEach(function (t, i) {
        return _this5._$EO(i, _this5[i], t);
      }), this._$EC = void 0), this._$Ek();
    }
  }, {
    key: "updated",
    value: function updated(t) {}
  }, {
    key: "firstUpdated",
    value: function firstUpdated(t) {}
  }], [{
    key: "addInitializer",
    value: function addInitializer(t) {
      var i;
      this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this6 = this;
      this.finalize();
      var t = [];
      return this.elementProperties.forEach(function (i, s) {
        var e = _this6._$Ep(s, i);
        void 0 !== e && (_this6._$Ev.set(e, s), t.push(e));
      }), t;
    }
  }, {
    key: "createProperty",
    value: function createProperty(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l;
      if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
        var _s = "symbol" == _typeof(t) ? Symbol() : "__" + t,
          _e = this.getPropertyDescriptor(t, _s, i);
        void 0 !== _e && Object.defineProperty(this.prototype, t, _e);
      }
    }
  }, {
    key: "getPropertyDescriptor",
    value: function getPropertyDescriptor(t, i, s) {
      return {
        get: function get() {
          return this[i];
        },
        set: function set(e) {
          var r = this[t];
          this[i] = e, this.requestUpdate(t, r, s);
        },
        configurable: !0,
        enumerable: !0
      };
    }
  }, {
    key: "getPropertyOptions",
    value: function getPropertyOptions(t) {
      return this.elementProperties.get(t) || l;
    }
  }, {
    key: "finalize",
    value: function finalize() {
      if (this.hasOwnProperty(d)) return !1;
      this[d] = !0;
      var t = Object.getPrototypeOf(this);
      if (t.finalize(), void 0 !== t.h && (this.h = _toConsumableArray(t.h)), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map(), this.hasOwnProperty("properties")) {
        var _t2 = this.properties,
          _i = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t2)), _toConsumableArray(Object.getOwnPropertySymbols(_t2)));
        var _iterator = _createForOfIteratorHelper(_i),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;
            this.createProperty(_s2, _t2[_s2]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
  }, {
    key: "finalizeStyles",
    value: function finalizeStyles(i) {
      var s = [];
      if (Array.isArray(i)) {
        var _e2 = new Set(i.flat(1 / 0).reverse());
        var _iterator2 = _createForOfIteratorHelper(_e2),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _i2 = _step2.value;
            s.unshift(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(_i2));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      } else void 0 !== i && s.push(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i));
      return s;
    }
  }, {
    key: "_$Ep",
    value: function _$Ep(t, i) {
      var s = i.attribute;
      return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
  }]);
  return u;
}(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
u[d] = !0, u.elementProperties = new Map(), u.elementStyles = [], u.shadowRootOptions = {
  mode: "open"
}, null == o || o({
  ReactiveElement: u
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.2");


/***/ }),

/***/ "./node_modules/big.js/big.js":
/*!************************************!*\
  !*** ./node_modules/big.js/big.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
;
(function (GLOBAL) {
  'use strict';

  var Big,
    /************************************** EDITABLE DEFAULTS *****************************************/

    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places (DP) of the results of operations involving division:
     * div and sqrt, and pow with negative exponents.
     */
    DP = 20,
    // 0 to MAX_DP

    /*
     * The rounding mode (RM) used when rounding to the above decimal places.
     *
     *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
     *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
     *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
     *  3  Away from zero.                                  (ROUND_UP)
     */
    RM = 1,
    // 0, 1, 2 or 3

    // The maximum value of DP and Big.DP.
    MAX_DP = 1E6,
    // 0 to 1000000

    // The maximum magnitude of the exponent argument to the pow method.
    MAX_POWER = 1E6,
    // 1 to 1000000

    /*
     * The negative exponent (NE) at and beneath which toString returns exponential notation.
     * (JavaScript numbers: -7)
     * -1000000 is the minimum recommended exponent value of a Big.
     */
    NE = -7,
    // 0 to -1000000

    /*
     * The positive exponent (PE) at and above which toString returns exponential notation.
     * (JavaScript numbers: 21)
     * 1000000 is the maximum recommended exponent value of a Big.
     * (This limit is not enforced or checked.)
     */
    PE = 21,
    // 0 to 1000000

    /**************************************************************************************************/

    // Error messages.
    NAME = '[big.js] ',
    INVALID = NAME + 'Invalid ',
    INVALID_DP = INVALID + 'decimal places',
    INVALID_RM = INVALID + 'rounding mode',
    DIV_BY_ZERO = NAME + 'Division by zero',
    // The shared prototype object.
    P = {},
    UNDEFINED = void 0,
    NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

  /*
   * Create and return a Big constructor.
   *
   */
  function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
      var x = this;

      // Enable constructor usage without new.
      if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

      // Duplicate.
      if (n instanceof Big) {
        x.s = n.s;
        x.e = n.e;
        x.c = n.c.slice();
      } else {
        parse(x, n);
      }

      /*
       * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
       * points to Object.
       */
      x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';
    return Big;
  }

  /*
   * Parse the number or string value passed to a Big constructor.
   *
   * x {Big} A Big number instance.
   * n {number|string} A numeric value.
   */
  function parse(x, n) {
    var e, i, nl;

    // Minus zero?
    if (n === 0 && 1 / n < 0) n = '-0';else if (!NUMERIC.test(n += '')) throw Error(INVALID + 'number');

    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
      // Determine exponent.
      if (e < 0) e = i;
      e += +n.slice(i + 1);
      n = n.substring(0, i);
    } else if (e < 0) {
      // Integer.
      e = n.length;
    }
    nl = n.length;

    // Determine leading zeros.
    for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) {
      // Zero.
      x.c = [x.e = 0];
    } else {
      // Determine trailing zeros.
      for (; nl > 0 && n.charAt(--nl) == '0';);
      x.e = e - i - 1;
      x.c = [];

      // Convert string to array of digits without leading/trailing zeros.
      for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    return x;
  }

  /*
   * Round Big x to a maximum of dp decimal places using rounding mode rm.
   * Called by stringify, P.div, P.round and P.sqrt.
   *
   * x {Big} The Big to round.
   * dp {number} Integer, 0 to MAX_DP inclusive.
   * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
   * [more] {boolean} Whether the result of division was truncated.
   */
  function round(x, dp, rm, more) {
    var xc = x.c,
      i = x.e + dp + 1;
    if (i < xc.length) {
      if (rm === 1) {
        // xc[i] is the digit after the digit that may be rounded up.
        more = xc[i] >= 5;
      } else if (rm === 2) {
        more = xc[i] > 5 || xc[i] == 5 && (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
      } else if (rm === 3) {
        more = more || !!xc[0];
      } else {
        more = false;
        if (rm !== 0) throw Error(INVALID_RM);
      }
      if (i < 1) {
        xc.length = 1;
        if (more) {
          // 1, 0.1, 0.01, 0.001, 0.0001 etc.
          x.e = -dp;
          xc[0] = 1;
        } else {
          // Zero.
          xc[0] = x.e = 0;
        }
      } else {
        // Remove any digits after the required decimal places.
        xc.length = i--;

        // Round up?
        if (more) {
          // Rounding up may mean the previous digit has to be rounded up.
          for (; ++xc[i] > 9;) {
            xc[i] = 0;
            if (!i--) {
              ++x.e;
              xc.unshift(1);
            }
          }
        }

        // Remove trailing zeros.
        for (i = xc.length; !xc[--i];) xc.pop();
      }
    } else if (rm < 0 || rm > 3 || rm !== ~~rm) {
      throw Error(INVALID_RM);
    }
    return x;
  }

  /*
   * Return a string representing the value of Big x in normal or exponential notation.
   * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
   *
   * x {Big}
   * id? {number} Caller id.
   *         1 toExponential
   *         2 toFixed
   *         3 toPrecision
   *         4 valueOf
   * n? {number|undefined} Caller's argument.
   * k? {number|undefined}
   */
  function stringify(x, id, n, k) {
    var e,
      s,
      Big = x.constructor,
      z = !x.c[0];
    if (n !== UNDEFINED) {
      if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
        throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
      }
      x = new Big(x);

      // The index of the digit that may be rounded up.
      n = k - x.e;

      // Round?
      if (x.c.length > ++k) round(x, n, Big.RM);

      // toFixed: recalculate k as x.e may have changed if value rounded up.
      if (id == 2) k = x.e + n + 1;

      // Append zeros?
      for (; x.c.length < k;) x.c.push(0);
    }
    e = x.e;
    s = x.c.join('');
    n = s.length;

    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
      s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

      // Normal notation.
    } else if (e < 0) {
      for (; ++e;) s = '0' + s;
      s = '0.' + s;
    } else if (e > 0) {
      if (++e > n) for (e -= n; e--;) s += '0';else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) {
      s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
  }

  // Prototype/instance methods

  /*
   * Return a new Big whose value is the absolute value of this Big.
   */
  P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
  };

  /*
   * Return 1 if the value of this Big is greater than the value of Big y,
   *       -1 if the value of this Big is less than the value of Big y, or
   *        0 if they have the same value.
  */
  P.cmp = function (y) {
    var isneg,
      x = this,
      xc = x.c,
      yc = (y = new x.constructor(y)).c,
      i = x.s,
      j = y.s,
      k = x.e,
      l = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

    // Signs differ?
    if (i != j) return i;
    isneg = i < 0;

    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;
    j = (k = xc.length) < (l = yc.length) ? k : l;

    // Compare digit by digit.
    for (i = -1; ++i < j;) {
      if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    }

    // Compare lengths.
    return k == l ? 0 : k > l ^ isneg ? 1 : -1;
  };

  /*
   * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
   * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.div = function (y) {
    var x = this,
      Big = x.constructor,
      a = x.c,
      // dividend
      b = (y = new Big(y)).c,
      // divisor
      k = x.s == y.s ? 1 : -1,
      dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) throw Error(INVALID_DP);

    // Divisor is zero?
    if (!b[0]) throw Error(DIV_BY_ZERO);

    // Dividend is 0? Return +-0.
    if (!a[0]) return new Big(k * 0);
    var bl,
      bt,
      n,
      cmp,
      ri,
      bz = b.slice(),
      ai = bl = b.length,
      al = a.length,
      r = a.slice(0, bl),
      // remainder
      rl = r.length,
      q = y,
      // quotient
      qc = q.c = [],
      qi = 0,
      d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result

    q.s = k;
    k = d < 0 ? 0 : d;

    // Create version of divisor with leading zero.
    bz.unshift(0);

    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;) r.push(0);
    do {
      // n is how many times the divisor goes into current remainder.
      for (n = 0; n < 10; n++) {
        // Compare divisor and remainder.
        if (bl != (rl = r.length)) {
          cmp = bl > rl ? 1 : -1;
        } else {
          for (ri = -1, cmp = 0; ++ri < bl;) {
            if (b[ri] != r[ri]) {
              cmp = b[ri] > r[ri] ? 1 : -1;
              break;
            }
          }
        }

        // If divisor < remainder, subtract divisor from remainder.
        if (cmp < 0) {
          // Remainder can't be more than 1 digit longer than divisor.
          // Equalise lengths using divisor with extra leading zero?
          for (bt = rl == bl ? b : bz; rl;) {
            if (r[--rl] < bt[rl]) {
              ri = rl;
              for (; ri && !r[--ri];) r[ri] = 9;
              --r[ri];
              r[rl] += 10;
            }
            r[rl] -= bt[rl];
          }
          for (; !r[0];) r.shift();
        } else {
          break;
        }
      }

      // Add the digit n to the result array.
      qc[qi++] = cmp ? n : ++n;

      // Update the remainder.
      if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
      // There can't be more than one zero.
      qc.shift();
      q.e--;
    }

    // Round?
    if (qi > d) round(q, dp, Big.RM, r[0] !== UNDEFINED);
    return q;
  };

  /*
   * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
   */
  P.eq = function (y) {
    return !this.cmp(y);
  };

  /*
   * Return true if the value of this Big is greater than the value of Big y, otherwise return
   * false.
   */
  P.gt = function (y) {
    return this.cmp(y) > 0;
  };

  /*
   * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
   * return false.
   */
  P.gte = function (y) {
    return this.cmp(y) > -1;
  };

  /*
   * Return true if the value of this Big is less than the value of Big y, otherwise return false.
   */
  P.lt = function (y) {
    return this.cmp(y) < 0;
  };

  /*
   * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
   * return false.
   */
  P.lte = function (y) {
    return this.cmp(y) < 1;
  };

  /*
   * Return a new Big whose value is the value of this Big minus the value of Big y.
   */
  P.minus = P.sub = function (y) {
    var i,
      j,
      t,
      xlty,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.plus(y);
    }
    var xc = x.c.slice(),
      xe = x.e,
      yc = y.c,
      ye = y.e;

    // Either zero?
    if (!xc[0] || !yc[0]) {
      // y is non-zero? x is non-zero? Or both are zero.
      return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }

    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
      if (xlty = a < 0) {
        a = -a;
        t = xc;
      } else {
        ye = xe;
        t = yc;
      }
      t.reverse();
      for (b = a; b--;) t.push(0);
      t.reverse();
    } else {
      // Exponents equal. Check digit by digit.
      j = ((xlty = xc.length < yc.length) ? xc : yc).length;
      for (a = b = 0; b < j; b++) {
        if (xc[b] != yc[b]) {
          xlty = xc[b] < yc[b];
          break;
        }
      }
    }

    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
      t = xc;
      xc = yc;
      yc = t;
      y.s = -y.s;
    }

    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

    // Subtract yc from xc.
    for (b = i; j > a;) {
      if (xc[--j] < yc[j]) {
        for (i = j; i && !xc[--i];) xc[i] = 9;
        --xc[i];
        xc[j] += 10;
      }
      xc[j] -= yc[j];
    }

    // Remove trailing zeros.
    for (; xc[--b] === 0;) xc.pop();

    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
      xc.shift();
      --ye;
    }
    if (!xc[0]) {
      // n - n = +0
      y.s = 1;

      // Result must be zero.
      xc = [ye = 0];
    }
    y.c = xc;
    y.e = ye;
    return y;
  };

  /*
   * Return a new Big whose value is the value of this Big modulo the value of Big y.
   */
  P.mod = function (y) {
    var ygtx,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;
    if (!y.c[0]) throw Error(DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
  };

  /*
   * Return a new Big whose value is the value of this Big plus the value of Big y.
   */
  P.plus = P.add = function (y) {
    var t,
      x = this,
      Big = x.constructor,
      a = x.s,
      b = (y = new Big(y)).s;

    // Signs differ?
    if (a != b) {
      y.s = -b;
      return x.minus(y);
    }
    var xe = x.e,
      xc = x.c,
      ye = y.e,
      yc = y.c;

    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0]) return yc[0] ? y : new Big(xc[0] ? x : a * 0);
    xc = xc.slice();

    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
      if (a > 0) {
        ye = xe;
        t = yc;
      } else {
        a = -a;
        t = xc;
      }
      t.reverse();
      for (; a--;) t.push(0);
      t.reverse();
    }

    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
      t = yc;
      yc = xc;
      xc = t;
    }
    a = yc.length;

    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10) b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;

    // No need to check for zero, as +x + +y != 0 && -x + -y != 0

    if (b) {
      xc.unshift(b);
      ++ye;
    }

    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;) xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
  };

  /*
   * Return a Big whose value is the value of this Big raised to the power n.
   * If n is negative, round to a maximum of Big.DP decimal places using rounding
   * mode Big.RM.
   *
   * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
   */
  P.pow = function (n) {
    var x = this,
      one = new x.constructor(1),
      y = one,
      isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) throw Error(INVALID + 'exponent');
    if (isneg) n = -n;
    for (;;) {
      if (n & 1) y = y.times(x);
      n >>= 1;
      if (!n) break;
      x = x.times(x);
    }
    return isneg ? one.div(y) : y;
  };

  /*
   * Return a new Big whose value is the value of this Big rounded using rounding mode rm
   * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
   * multiple of 10**-dp.
   * If dp is not specified, round to 0 decimal places.
   * If rm is not specified, use Big.RM.
   *
   * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
   * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
   */
  P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
  };

  /*
   * Return a new Big whose value is the square root of the value of this Big, rounded, if
   * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
   */
  P.sqrt = function () {
    var r,
      c,
      t,
      x = this,
      Big = x.constructor,
      s = x.s,
      e = x.e,
      half = new Big(0.5);

    // Zero?
    if (!x.c[0]) return new Big(x);

    // Negative?
    if (s < 0) throw Error(NAME + 'No square root');

    // Estimate.
    s = Math.sqrt(x + '');

    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
      c = x.c.join('');
      if (!(c.length + e & 1)) c += '0';
      s = Math.sqrt(c);
      e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
      r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else {
      r = new Big(s);
    }
    e = r.e + (Big.DP += 4);

    // Newton-Raphson iteration.
    do {
      t = r;
      r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
    return round(r, Big.DP -= 4, Big.RM);
  };

  /*
   * Return a new Big whose value is the value of this Big times the value of Big y.
   */
  P.times = P.mul = function (y) {
    var c,
      x = this,
      Big = x.constructor,
      xc = x.c,
      yc = (y = new Big(y)).c,
      a = xc.length,
      b = yc.length,
      i = x.e,
      j = y.e;

    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;

    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) return new Big(y.s * 0);

    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;

    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
      c = xc;
      xc = yc;
      yc = c;
      j = a;
      a = b;
      b = j;
    }

    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;) c[j] = 0;

    // Multiply.

    // i is initially xc.length.
    for (i = b; i--;) {
      b = 0;

      // a is yc.length.
      for (j = a + i; j > i;) {
        // Current sum of products at this digit position, plus carry.
        b = c[j] + yc[i] * xc[j - i - 1] + b;
        c[j--] = b % 10;

        // carry
        b = b / 10 | 0;
      }
      c[j] = (c[j] + b) % 10;
    }

    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;else c.shift();

    // Remove trailing zeros.
    for (i = c.length; !c[--i];) c.pop();
    y.c = c;
    return y;
  };

  /*
   * Return a string representing the value of this Big in exponential notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   */
  P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
  };

  /*
   * Return a string representing the value of this Big in normal notation to dp fixed decimal
   * places and rounded using Big.RM.
   *
   * dp? {number} Integer, 0 to MAX_DP inclusive.
   *
   * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
   * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
   */
  P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
  };

  /*
   * Return a string representing the value of this Big rounded to sd significant digits using
   * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
   * the integer part of the value in normal notation.
   *
   * sd {number} Integer, 1 to MAX_DP inclusive.
   */
  P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
  };

  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Omit the sign for negative zero.
   */
  P.toString = function () {
    return stringify(this);
  };

  /*
   * Return a string representing the value of this Big.
   * Return exponential notation if this Big has a positive exponent equal to or greater than
   * Big.PE, or a negative exponent equal to or less than Big.NE.
   * Include the sign for negative zero.
   */
  P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
  };

  // Export

  Big = _Big_();
  Big['default'] = Big.Big = Big;

  //AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Big;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // Node and other CommonJS-like environments that support module.exports.
  } else {}
})(this);

/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return h; });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["svg"]; });

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var l, o;
var r = _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"];
var s = /*#__PURE__*/function (_t) {
  _inherits(s, _t);
  var _super = _createSuper(s);
  function s() {
    var _this;
    _classCallCheck(this, s);
    _this = _super.apply(this, arguments), _this.renderOptions = {
      host: _assertThisInitialized(_this)
    }, _this._$Do = void 0;
    return _this;
  }
  _createClass(s, [{
    key: "createRenderRoot",
    value: function createRenderRoot() {
      var t, e;
      var i = _get(_getPrototypeOf(s.prototype), "createRenderRoot", this).call(this);
      return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
  }, {
    key: "update",
    value: function update(t) {
      var i = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), _get(_getPrototypeOf(s.prototype), "update", this).call(this, t), this._$Do = Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(i, this.renderRoot, this.renderOptions);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "connectedCallback", this).call(this), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var t;
      _get(_getPrototypeOf(s.prototype), "disconnectedCallback", this).call(this), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
  }, {
    key: "render",
    value: function render() {
      return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"];
    }
  }]);
  return s;
}(_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]);
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
  LitElement: s
});
var n = globalThis.litElementPolyfillSupport;
null == n || n({
  LitElement: s
});
var h = {
  _$AK: function _$AK(t, e, i) {
    t._$AK(e, i);
  },
  _$AL: function _$AL(t) {
    return t._$AL;
  }
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.2");


/***/ }),

/***/ "./node_modules/lit-html/is-server.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/is-server.js ***!
  \********************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return o; });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var o = !1;


/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: _$LH, html, noChange, nothing, render, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return b; });
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e3) { throw _e3; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e4) { didErr = true; err = _e4; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;
var i = window,
  s = i.trustedTypes,
  e = s ? s.createPolicy("lit-html", {
    createHTML: function createHTML(t) {
      return t;
    }
  }) : void 0,
  o = "$lit$",
  n = "lit$".concat((Math.random() + "").slice(9), "$"),
  l = "?" + n,
  h = "<".concat(l, ">"),
  r = document,
  d = function d() {
    return r.createComment("");
  },
  u = function u(t) {
    return null === t || "object" != _typeof(t) && "function" != typeof t;
  },
  c = Array.isArray,
  v = function v(t) {
    return c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]);
  },
  a = "[ \t\n\f\r]",
  f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  _ = /-->/g,
  m = />/g,
  p = RegExp(">|".concat(a, "(?:([^\\s\"'>=/]+)(").concat(a, "*=").concat(a, "*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"), "g"),
  g = /'/g,
  $ = /"/g,
  y = /^(?:script|style|textarea|title)$/i,
  w = function w(t) {
    return function (i) {
      for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        s[_key - 1] = arguments[_key];
      }
      return {
        _$litType$: t,
        strings: i,
        values: s
      };
    };
  },
  x = w(1),
  b = w(2),
  T = Symbol["for"]("lit-noChange"),
  A = Symbol["for"]("lit-nothing"),
  E = new WeakMap(),
  C = r.createTreeWalker(r, 129, null, !1),
  P = function P(t, i) {
    var s = t.length - 1,
      l = [];
    var r,
      d = 2 === i ? "<svg>" : "",
      u = f;
    for (var _i = 0; _i < s; _i++) {
      var _s = t[_i];
      var _e = void 0,
        _c = void 0,
        _v = -1,
        _a = 0;
      for (; _a < _s.length && (u.lastIndex = _a, _c = u.exec(_s), null !== _c);) _a = u.lastIndex, u === f ? "!--" === _c[1] ? u = _ : void 0 !== _c[1] ? u = m : void 0 !== _c[2] ? (y.test(_c[2]) && (r = RegExp("</" + _c[2], "g")), u = p) : void 0 !== _c[3] && (u = p) : u === p ? ">" === _c[0] ? (u = null != r ? r : f, _v = -1) : void 0 === _c[1] ? _v = -2 : (_v = u.lastIndex - _c[2].length, _e = _c[1], u = void 0 === _c[3] ? p : '"' === _c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, r = void 0);
      var _w = u === p && t[_i + 1].startsWith("/>") ? " " : "";
      d += u === f ? _s + h : _v >= 0 ? (l.push(_e), _s.slice(0, _v) + o + _s.slice(_v) + n + _w) : _s + n + (-2 === _v ? (l.push(void 0), _i) : _w);
    }
    var c = d + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [void 0 !== e ? e.createHTML(c) : c, l];
  };
var V = /*#__PURE__*/function () {
  function V(_ref, e) {
    var t = _ref.strings,
      i = _ref._$litType$;
    _classCallCheck(this, V);
    var h;
    this.parts = [];
    var r = 0,
      u = 0;
    var c = t.length - 1,
      v = this.parts,
      _P = P(t, i),
      _P2 = _slicedToArray(_P, 2),
      a = _P2[0],
      f = _P2[1];
    if (this.el = V.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
      var _t = this.el.content,
        _i2 = _t.firstChild;
      _i2.remove(), _t.append.apply(_t, _toConsumableArray(_i2.childNodes));
    }
    for (; null !== (h = C.nextNode()) && v.length < c;) {
      if (1 === h.nodeType) {
        if (h.hasAttributes()) {
          var _t2 = [];
          var _iterator = _createForOfIteratorHelper(h.getAttributeNames()),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _i5 = _step.value;
              if (_i5.endsWith(o) || _i5.startsWith(n)) {
                var _s2 = f[u++];
                if (_t2.push(_i5), void 0 !== _s2) {
                  var _t4 = h.getAttribute(_s2.toLowerCase() + o).split(n),
                    _i6 = /([.?@])?(.*)/.exec(_s2);
                  v.push({
                    type: 1,
                    index: r,
                    name: _i6[2],
                    strings: _t4,
                    ctor: "." === _i6[1] ? k : "?" === _i6[1] ? I : "@" === _i6[1] ? L : R
                  });
                } else v.push({
                  type: 6,
                  index: r
                });
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          for (var _i3 = 0, _t3 = _t2; _i3 < _t3.length; _i3++) {
            var _i4 = _t3[_i3];
            h.removeAttribute(_i4);
          }
        }
        if (y.test(h.tagName)) {
          var _t5 = h.textContent.split(n),
            _i7 = _t5.length - 1;
          if (_i7 > 0) {
            h.textContent = s ? s.emptyScript : "";
            for (var _s3 = 0; _s3 < _i7; _s3++) h.append(_t5[_s3], d()), C.nextNode(), v.push({
              type: 2,
              index: ++r
            });
            h.append(_t5[_i7], d());
          }
        }
      } else if (8 === h.nodeType) if (h.data === l) v.push({
        type: 2,
        index: r
      });else {
        var _t6 = -1;
        for (; -1 !== (_t6 = h.data.indexOf(n, _t6 + 1));) v.push({
          type: 7,
          index: r
        }), _t6 += n.length - 1;
      }
      r++;
    }
  }
  _createClass(V, null, [{
    key: "createElement",
    value: function createElement(t, i) {
      var s = r.createElement("template");
      return s.innerHTML = t, s;
    }
  }]);
  return V;
}();
function N(t, i) {
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
  var e = arguments.length > 3 ? arguments[3] : undefined;
  var o, n, l, h;
  if (i === T) return i;
  var r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
  var d = u(i) ? void 0 : i._$litDirective$;
  return (null == r ? void 0 : r.constructor) !== d && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === d ? r = void 0 : (r = new d(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = N(t, r._$AS(t, i.values), r, e)), i;
}
var S = /*#__PURE__*/function () {
  function S(t, i) {
    _classCallCheck(this, S);
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
  }
  _createClass(S, [{
    key: "parentNode",
    get: function get() {
      return this._$AM.parentNode;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "u",
    value: function u(t) {
      var i;
      var _this$_$AD = this._$AD,
        s = _this$_$AD.el.content,
        e = _this$_$AD.parts,
        o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
      C.currentNode = o;
      var n = C.nextNode(),
        l = 0,
        h = 0,
        d = e[0];
      for (; void 0 !== d;) {
        if (l === d.index) {
          var _i8 = void 0;
          2 === d.type ? _i8 = new M(n, n.nextSibling, this, t) : 1 === d.type ? _i8 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (_i8 = new z(n, this, t)), this._$AV.push(_i8), d = e[++h];
        }
        l !== (null == d ? void 0 : d.index) && (n = C.nextNode(), l++);
      }
      return C.currentNode = r, o;
    }
  }, {
    key: "v",
    value: function v(t) {
      var i = 0;
      var _iterator2 = _createForOfIteratorHelper(this._$AV),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _s4 = _step2.value;
          void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4._$AI(t, _s4, i), i += _s4.strings.length - 2) : _s4._$AI(t[i])), i++;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);
  return S;
}();
var M = /*#__PURE__*/function () {
  function M(t, i, s, e) {
    _classCallCheck(this, M);
    var o;
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
  }
  _createClass(M, [{
    key: "_$AU",
    get: function get() {
      var t, i;
      return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var t = this._$AA.parentNode;
      var i = this._$AM;
      return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
  }, {
    key: "startNode",
    get: function get() {
      return this._$AA;
    }
  }, {
    key: "endNode",
    get: function get() {
      return this._$AB;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      t = N(this, t, i), u(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
  }, {
    key: "k",
    value: function k(t) {
      return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
  }, {
    key: "$",
    value: function $(t) {
      this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
  }, {
    key: "_",
    value: function _(t) {
      this._$AH !== A && u(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
  }, {
    key: "g",
    value: function g(t) {
      var i;
      var s = t.values,
        e = t._$litType$,
        o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = V.createElement(e.h, this.options)), e);
      if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);else {
        var _t7 = new S(o, this),
          _i9 = _t7.u(this.options);
        _t7.v(s), this.$(_i9), this._$AH = _t7;
      }
    }
  }, {
    key: "_$AC",
    value: function _$AC(t) {
      var i = E.get(t.strings);
      return void 0 === i && E.set(t.strings, i = new V(t)), i;
    }
  }, {
    key: "T",
    value: function T(t) {
      c(this._$AH) || (this._$AH = [], this._$AR());
      var i = this._$AH;
      var s,
        e = 0;
      var _iterator3 = _createForOfIteratorHelper(t),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _o = _step3.value;
          e === i.length ? i.push(s = new M(this.k(d()), this.k(d()), this, this.options)) : s = i[e], s._$AI(_o), e++;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
  }, {
    key: "_$AR",
    value: function _$AR() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._$AA.nextSibling;
      var i = arguments.length > 1 ? arguments[1] : undefined;
      var s;
      for (null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;) {
        var _i10 = t.nextSibling;
        t.remove(), t = _i10;
      }
    }
  }, {
    key: "setConnected",
    value: function setConnected(t) {
      var i;
      void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
  }]);
  return M;
}();
var R = /*#__PURE__*/function () {
  function R(t, i, s, e, o) {
    _classCallCheck(this, R);
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = A;
  }
  _createClass(R, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
  }, {
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var o = this.strings;
      var n = !1;
      if (void 0 === o) t = N(this, t, i, 0), n = !u(t) || t !== this._$AH && t !== T, n && (this._$AH = t);else {
        var _e2 = t;
        var _l, _h;
        for (t = o[0], _l = 0; _l < o.length - 1; _l++) _h = N(this, _e2[s + _l], i, _l), _h === T && (_h = this._$AH[_l]), n || (n = !u(_h) || _h !== this._$AH[_l]), _h === A ? t = A : t !== A && (t += (null != _h ? _h : "") + o[_l + 1]), this._$AH[_l] = _h;
      }
      n && !e && this.j(t);
    }
  }, {
    key: "j",
    value: function j(t) {
      t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
  }]);
  return R;
}();
var k = /*#__PURE__*/function (_R) {
  _inherits(k, _R);
  var _super = _createSuper(k);
  function k() {
    var _this;
    _classCallCheck(this, k);
    _this = _super.apply(this, arguments), _this.type = 3;
    return _this;
  }
  _createClass(k, [{
    key: "j",
    value: function j(t) {
      this.element[this.name] = t === A ? void 0 : t;
    }
  }]);
  return k;
}(R);
var H = s ? s.emptyScript : "";
var I = /*#__PURE__*/function (_R2) {
  _inherits(I, _R2);
  var _super2 = _createSuper(I);
  function I() {
    var _this2;
    _classCallCheck(this, I);
    _this2 = _super2.apply(this, arguments), _this2.type = 4;
    return _this2;
  }
  _createClass(I, [{
    key: "j",
    value: function j(t) {
      t && t !== A ? this.element.setAttribute(this.name, H) : this.element.removeAttribute(this.name);
    }
  }]);
  return I;
}(R);
var L = /*#__PURE__*/function (_R3) {
  _inherits(L, _R3);
  var _super3 = _createSuper(L);
  function L(t, i, s, e, o) {
    var _this3;
    _classCallCheck(this, L);
    _this3 = _super3.call(this, t, i, s, e, o), _this3.type = 5;
    return _this3;
  }
  _createClass(L, [{
    key: "_$AI",
    value: function _$AI(t) {
      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
      var s;
      if ((t = null !== (s = N(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
      var e = this._$AH,
        o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
        n = t !== A && (e === A || o);
      o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(t) {
      var i, s;
      "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
  }]);
  return L;
}(R);
var z = /*#__PURE__*/function () {
  function z(t, i, s) {
    _classCallCheck(this, z);
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
  }
  _createClass(z, [{
    key: "_$AU",
    get: function get() {
      return this._$AM._$AU;
    }
  }, {
    key: "_$AI",
    value: function _$AI(t) {
      N(this, t);
    }
  }]);
  return z;
}();
var Z = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: P,
    L: S,
    D: v,
    R: N,
    I: M,
    V: R,
    H: I,
    N: L,
    U: k,
    F: z
  },
  j = i.litHtmlPolyfillSupport;
null == j || j(V, M), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.7.4");
var B = function B(t, i, s) {
  var e, o;
  var n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
  var l = n._$litPart$;
  if (void 0 === l) {
    var _t8 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
    n._$litPart$ = l = new M(i.insertBefore(d(), _t8), _t8, void 0, null != s ? s : {});
  }
  return l._$AI(t), l;
};


/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/*! exports provided: customElement, property, state, eventOptions, query, queryAll, queryAsync, queryAssignedElements, queryAssignedNodes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/decorators/custom-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customElement", function() { return _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__["customElement"]; });

/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/decorators/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"]; });

/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/decorators/state.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "state", function() { return _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__["state"]; });

/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/decorators/event-options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eventOptions", function() { return _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__["eventOptions"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/decorators/query.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "query", function() { return _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__["query"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/decorators/query-all.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__["queryAll"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/decorators/query-async.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAsync", function() { return _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__["queryAsync"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedElements", function() { return _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__["queryAssignedElements"]; });

/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryAssignedNodes", function() { return _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__["queryAssignedNodes"]; });











/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/lit-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LE"]; });

/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/is-server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__["isServer"]; });






/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map