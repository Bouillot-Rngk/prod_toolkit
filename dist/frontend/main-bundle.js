/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidTokenError: () => (/* binding */ n),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function e(e){this.message=e}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n(e){this.message=e}function o(e,r){if("string"!=typeof e)throw new n("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n("Invalid token specified: "+e.message)}}n.prototype=new Error,n.prototype.name="InvalidTokenError";/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=jwt-decode.esm.js.map


/***/ }),

/***/ "./core/eventbus/LPTE.ts":
/*!*******************************!*\
  !*** ./core/eventbus/LPTE.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Registration = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["BROADCAST"] = "BROADCAST";
    EventType["REQUEST"] = "REQUEST";
    EventType["REPLY"] = "REPLY";
})(EventType || (exports.EventType = EventType = {}));
class Registration {
    constructor(namespace, type, handler) {
        this.namespace = namespace;
        this.type = type;
        this.handle = handler;
    }
}
exports.Registration = Registration;


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.mjs":
/*!******************************************!*\
  !*** ./node_modules/tslib/tslib.es6.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./frontend/frontend-lib.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.mjs");
const LPTE_1 = __webpack_require__(/*! ../core/eventbus/LPTE */ "./core/eventbus/LPTE.ts");
const jwt_decode_1 = tslib_1.__importDefault(__webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/build/jwt-decode.esm.js"));
// Setup toasts
if (window.toastr !== undefined) {
    ;
    window.toastr.options = {
        timeOut: '0',
        extendedTimeOut: '0',
        showDuration: '0',
        hideDuration: '0',
        positionClass: 'toast-top-right'
    };
}
class FrontendRegistration extends LPTE_1.Registration {
    constructor() {
        super(...arguments);
        this.isOnce = false;
    }
    getSubscribeEvent() {
        return {
            meta: {
                namespace: 'lpte',
                type: this.isOnce ? 'subscribe-once' : 'subscribe',
                version: 1
            },
            to: {
                namespace: this.namespace,
                type: this.type
            }
        };
    }
}
function randomId() {
    const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
    return uint32.toString(16);
}
/**
 * This is the frontend library that is compatible with the backend syntax. It connects via websocket.
 */
class LPTEService {
    constructor(backend) {
        this.registrations = [];
        this.backend = backend;
        this.websocket = new WebSocket(backend);
        this._log = this._log.bind(this);
        this._onSocketOpen = this._onSocketOpen.bind(this);
        this._onSocketClose = this._onSocketClose.bind(this);
        this._onSocketError = this._onSocketError.bind(this);
        this._onSocketMessage = this._onSocketMessage.bind(this);
        this._reconnect = this._reconnect.bind(this);
        this._connect = this._connect.bind(this);
        this._connect();
    }
    _log(msg) {
        console.log(`[LPTE] ${msg}`);
    }
    _onSocketOpen() {
        this._log('Websocket connected');
        // redo any registrations, in case this is a reconnect
        this.registrations.forEach((reg) => { this.websocket.send(JSON.stringify(reg.getSubscribeEvent())); });
        if (this.readyHandler !== undefined) {
            this.readyHandler();
        }
    }
    _onSocketClose() {
        this._log('Websocket closed, attempting reconnect in 500ms');
        setTimeout(this._reconnect, 500);
    }
    _onSocketError(e) {
        this._log(`Websocket error: ${JSON.stringify(e)}`);
    }
    _onSocketMessage(e) {
        const event = JSON.parse(e.data);
        this.registrations
            .filter((reg) => reg.namespace === event.meta.namespace && reg.type === event.meta.type)
            .forEach((reg) => {
            reg.handle(event);
        });
    }
    _reconnect() {
        this.websocket = new WebSocket(this.backend);
        this._connect();
    }
    _connect() {
        this.websocket.onopen = this._onSocketOpen;
        this.websocket.onclose = this._onSocketClose;
        this.websocket.onerror = this._onSocketError;
        this.websocket.onmessage = this._onSocketMessage;
    }
    onready(handler) {
        if (this.websocket.readyState === this.websocket.OPEN) {
            handler();
        }
        else {
            this.readyHandler = handler;
        }
    }
    unregisterHandler(handler) {
        setTimeout(() => {
            this.registrations = this.registrations.filter((registration) => registration.handle !== handler);
        }, 1000);
    }
    on(namespace, type, handler, isOnce = false) {
        const registration = new FrontendRegistration(namespace, type, handler);
        registration.isOnce = isOnce;
        this.registrations.push(registration);
        this.websocket.send(JSON.stringify(registration.getSubscribeEvent()));
    }
    unregister(namespace, type) {
        this._log('Unregister is currently not supported');
    }
    emit(event) {
        this.websocket.send(JSON.stringify(event));
    }
    async request(event, timeout = 5000) {
        const reply = `${event.meta.type}-${randomId()}`;
        event.meta.reply = reply;
        event.meta.channelType = LPTE_1.EventType.REQUEST;
        setTimeout(() => {
            this.emit(event);
        }, 0);
        try {
            return await this.await('reply', reply, timeout);
        }
        catch {
            throw new Error('request timed out');
        }
    }
    async await(namespace, type, timeout = 5000) {
        return await new Promise((resolve, reject) => {
            let wasHandled = false;
            const handler = (e) => {
                if (wasHandled) {
                    return;
                }
                wasHandled = true;
                this.unregisterHandler(handler);
                resolve(e);
            };
            // Register handler
            this.on(namespace, type, handler, true);
            setTimeout(() => {
                if (wasHandled) {
                    return;
                }
                wasHandled = true;
                this.unregisterHandler(handler);
                reject(new Error('request timed out'));
            }, timeout);
        });
    }
}
const apiKey = getApiKey();
const wsUrl = `ws${location.origin.startsWith('https://') ? 's' : ''}://${location.host}/eventbus`;
const backend = apiKey !== null ? `${wsUrl}?apikey=${apiKey}` : wsUrl;
function getApiKey() {
    if (getCookie('auth_disabled') === 'true') {
        return null;
    }
    const queryKey = new URLSearchParams(window.location.search).get('apikey');
    if (queryKey !== null)
        return queryKey;
    const cookieKey = getCookie('access_token');
    if (cookieKey !== '') {
        const decoded = (0, jwt_decode_1.default)(cookieKey);
        return decoded.apiKey;
    }
    return null;
}
function getWebServerPort() {
    return `${location.host}`;
}
async function getActionLink(namespace, type, params) {
    const protocol = location.protocol;
    const host = location.host;
    const urlParams = new URLSearchParams();
    for (const param in params) {
        urlParams.set(param, params[param]);
    }
    if (apiKey !== null) {
        urlParams.set('apikey', apiKey);
    }
    const url = `${protocol}//${host}/api/events/shortcut/ingest/${namespace}/${type}?${urlParams.toString()}`;
    await navigator.clipboard.writeText(url);
}
function getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
;
window.LPTE = new LPTEService(backend);
window.apiKey = apiKey;
window.constants = {
    getApiKey,
    getWebServerPort,
};
window.getActionLink = getActionLink;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYyxlQUFlLCtEQUErRCxxRkFBcUYsa0NBQWtDLGtHQUFrRyx5QkFBeUIsZ0JBQWdCLHNKQUFzSixVQUFVLGNBQWMsNENBQTRDLG1CQUFtQixhQUFhLGVBQWUsTUFBTSxjQUFjLE1BQU0seUNBQXlDLElBQUksbUJBQW1CLDZEQUE2RCxpREFBaUQsbUNBQW1DLElBQUksSUFBSSxTQUFTLGFBQWEsY0FBYyxlQUFlLGdCQUFnQiw2REFBNkQsbUJBQW1CLGFBQWEsSUFBSSxzQ0FBc0MsU0FBUyxvREFBb0QsMkRBQTJELGlFQUFlLENBQUMsRUFBZ0M7QUFDNXNDOzs7Ozs7Ozs7Ozs7OztBQ0NBLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQixvQ0FBdUI7SUFDdkIsZ0NBQW1CO0lBQ25CLDRCQUFlO0FBQ2pCLENBQUMsRUFKVyxTQUFTLHlCQUFULFNBQVMsUUFJcEI7QUFrRUQsTUFBYSxZQUFZO0lBS3ZCLFlBQ0UsU0FBaUIsRUFDakIsSUFBWSxFQUNaLE9BQWtDO1FBRWxDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPO0lBQ3ZCLENBQUM7Q0FDRjtBQWRELG9DQWNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCLHNDQUFzQyxrQkFBa0I7QUFDakYsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFTztBQUNQO0FBQ0EsK0NBQStDLE9BQU87QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTs7QUFFTztBQUNQLGtDQUFrQztBQUNsQzs7QUFFTztBQUNQLHVCQUF1Qix1RkFBdUY7QUFDOUc7QUFDQTtBQUNBLHlHQUF5RztBQUN6RztBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsOENBQThDLHlGQUF5RjtBQUN2SSw4REFBOEQsMkNBQTJDO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLDRDQUE0Qyx5RUFBeUU7QUFDckg7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsMEJBQTBCLCtEQUErRCxpQkFBaUI7QUFDMUc7QUFDQSxrQ0FBa0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNuRixpQ0FBaUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN0Riw4QkFBOEI7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxZQUFZLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDdEcsZUFBZSxvREFBb0QscUVBQXFFLGNBQWM7QUFDdEoscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsaUNBQWlDLFNBQVM7QUFDMUMsaUNBQWlDLFdBQVcsVUFBVTtBQUN0RCx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBLDRHQUE0RyxPQUFPO0FBQ25ILCtFQUErRSxpQkFBaUI7QUFDaEcsdURBQXVELGdCQUFnQixRQUFRO0FBQy9FLDZDQUE2QyxnQkFBZ0IsZ0JBQWdCO0FBQzdFO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxRQUFRLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDcEQsa0NBQWtDLFNBQVM7QUFDM0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0NBQW9DO0FBQ25EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1AsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLGdEQUFnRCxRQUFRO0FBQ3hELHVDQUF1QyxRQUFRO0FBQy9DLHVEQUF1RCxRQUFRO0FBQy9EO0FBQ0E7QUFDQTs7QUFFTztBQUNQLDJFQUEyRSxPQUFPO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxlQUFlLHVGQUF1RixjQUFjO0FBQ3BILHFCQUFxQixnQ0FBZ0MscUNBQXFDLDJDQUEyQztBQUNySSwwQkFBMEIsTUFBTSxpQkFBaUIsWUFBWTtBQUM3RCxxQkFBcUI7QUFDckIsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQiwwQkFBMEI7QUFDMUI7O0FBRU87QUFDUDtBQUNBLGVBQWUsNkNBQTZDLFVBQVUsc0RBQXNELGNBQWM7QUFDMUksd0JBQXdCLDZCQUE2QixvQkFBb0IsdUNBQXVDLGtCQUFrQjtBQUNsSTs7QUFFTztBQUNQO0FBQ0E7QUFDQSx5R0FBeUcsdUZBQXVGLGNBQWM7QUFDOU0scUJBQXFCLDhCQUE4QixnREFBZ0Qsd0RBQXdEO0FBQzNKLDJDQUEyQyxzQ0FBc0MsVUFBVSxtQkFBbUIsSUFBSTtBQUNsSDs7QUFFTztBQUNQLCtCQUErQix1Q0FBdUMsWUFBWSxLQUFLLE9BQU87QUFDOUY7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qyw0QkFBNEI7QUFDcEUsQ0FBQztBQUNEO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCwyQ0FBMkM7QUFDM0M7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOENBQThDO0FBQ25FO0FBQ0E7QUFDQSxxQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsU0FBUyxnQkFBZ0I7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDalhGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BLDJGQUF5RjtBQUN6Rix5SUFBK0I7QUFFL0IsZUFBZTtBQUNmLElBQUssTUFBYyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBQUUsTUFBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUc7UUFDakMsT0FBTyxFQUFFLEdBQUc7UUFDWixlQUFlLEVBQUUsR0FBRztRQUNwQixZQUFZLEVBQUUsR0FBRztRQUNqQixZQUFZLEVBQUUsR0FBRztRQUNqQixhQUFhLEVBQUUsaUJBQWlCO0tBQ2pDO0FBQ0gsQ0FBQztBQUVELE1BQU0sb0JBQXFCLFNBQVEsbUJBQVk7SUFBL0M7O1FBQ0UsV0FBTSxHQUFZLEtBQUs7SUFlekIsQ0FBQztJQWJDLGlCQUFpQjtRQUNmLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsV0FBVztnQkFDbEQsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELEVBQUUsRUFBRTtnQkFDRixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTthQUNoQjtTQUNGO0lBQ0gsQ0FBQztDQUNGO0FBRUQsU0FBUyxRQUFRO0lBQ2YsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztBQUM1QixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFdBQVc7SUFNZixZQUFZLE9BQWU7UUFIM0Isa0JBQWEsR0FBMkIsRUFBRTtRQUl4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhDLElBQUksQ0FBQyxRQUFRLEVBQUU7SUFDakIsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUVoQyxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FDbkc7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksRUFBRTtRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDO1FBQzVELFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYyxDQUFDLENBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxDQUFNO1FBQ3JCLE1BQU0sS0FBSyxHQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUUxQyxJQUFJLENBQUMsYUFBYTthQUNmLE1BQU0sQ0FDTCxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sR0FBRyxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN6RTthQUNBLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDbkIsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUNqQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjO1FBQzVDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7SUFDbEQsQ0FBQztJQUVELE9BQU8sQ0FBQyxPQUFtQjtRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdEQsT0FBTyxFQUFFO1FBQ1gsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU87UUFDN0IsQ0FBQztJQUNILENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUFrQztRQUNsRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FDNUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUNsRDtRQUNILENBQUMsRUFBRSxJQUFJLENBQUM7SUFDVixDQUFDO0lBRUQsRUFBRSxDQUNBLFNBQWlCLEVBQ2pCLElBQVksRUFDWixPQUFrQyxFQUNsQyxNQUFNLEdBQUcsS0FBSztRQUVkLE1BQU0sWUFBWSxHQUFHLElBQUksb0JBQW9CLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7UUFDdkUsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNO1FBRTVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUVyQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFpQixFQUFFLElBQVk7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQWU7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFlLEVBQUUsVUFBa0IsSUFBSTtRQUNuRCxNQUFNLEtBQUssR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRSxFQUFFO1FBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDeEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQVMsQ0FBQyxPQUFPO1FBRTFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDO1lBQ0gsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDbEQsQ0FBQztRQUFDLE1BQU0sQ0FBQztZQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDdEMsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSyxDQUNULFNBQWlCLEVBQ2pCLElBQVksRUFDWixVQUFrQixJQUFJO1FBRXRCLE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFVBQVUsR0FBRyxLQUFLO1lBRXRCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBVyxFQUFRLEVBQUU7Z0JBQ3BDLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2YsT0FBTTtnQkFDUixDQUFDO2dCQUNELFVBQVUsR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUUvQixPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQztZQUNELG1CQUFtQjtZQUNuQixJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztZQUV2QyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2YsT0FBTTtnQkFDUixDQUFDO2dCQUNELFVBQVUsR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUMvQixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUUsT0FBTyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsTUFBTSxNQUFNLEdBQUcsU0FBUyxFQUFFO0FBQzFCLE1BQU0sS0FBSyxHQUFHLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLFFBQVEsQ0FBQyxJQUNqRixXQUFXO0FBQ2IsTUFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLFdBQVcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUs7QUFFckUsU0FBUyxTQUFTO0lBQ2hCLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxLQUFLLE1BQU0sRUFBRSxDQUFDO1FBQzFDLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFFMUUsSUFBSSxRQUFRLEtBQUssSUFBSTtRQUFFLE9BQU8sUUFBUTtJQUV0QyxNQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0lBRTNDLElBQUksU0FBUyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ3JCLE1BQU0sT0FBTyxHQUFHLHdCQUFNLEVBQU0sU0FBUyxDQUFDO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLE1BQU07SUFDdkIsQ0FBQztJQUVELE9BQU8sSUFBSTtBQUNiLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUN2QixPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRTtBQUMzQixDQUFDO0FBRUQsS0FBSyxVQUFVLGFBQWEsQ0FBQyxTQUFpQixFQUFFLElBQVksRUFBRSxNQUErQjtJQUMzRixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUTtJQUNsQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSTtJQUMxQixNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsRUFBRTtJQUV2QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzNCLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDcEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsS0FBSyxJQUFJLCtCQUErQixTQUFTLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtJQUMxRyxNQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUMxQyxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsS0FBYTtJQUM5QixNQUFNLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRztJQUN4QixNQUFNLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3pELE1BQU0sRUFBRSxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBRW5DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNiLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzNDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVELENBQUM7QUFBRSxNQUFjLENBQUMsSUFBSSxHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUNoRDtBQUFFLE1BQWMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUNoQztBQUFFLE1BQWMsQ0FBQyxTQUFTLEdBQUc7SUFDNUIsU0FBUztJQUNULGdCQUFnQjtDQUNqQixDQUNBO0FBQUUsTUFBYyxDQUFDLGFBQWEsR0FBRyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZ3VlLXByb2QtdG9vbGtpdC1jb3JlLy4vbm9kZV9tb2R1bGVzL2p3dC1kZWNvZGUvYnVpbGQvand0LWRlY29kZS5lc20uanMiLCJ3ZWJwYWNrOi8vbGVhZ3VlLXByb2QtdG9vbGtpdC1jb3JlLy4vY29yZS9ldmVudGJ1cy9MUFRFLnRzIiwid2VicGFjazovL2xlYWd1ZS1wcm9kLXRvb2xraXQtY29yZS8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYubWpzIiwid2VicGFjazovL2xlYWd1ZS1wcm9kLXRvb2xraXQtY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFndWUtcHJvZC10b29sa2l0LWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWd1ZS1wcm9kLXRvb2xraXQtY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xlYWd1ZS1wcm9kLXRvb2xraXQtY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWd1ZS1wcm9kLXRvb2xraXQtY29yZS8uL2Zyb250ZW5kL2Zyb250ZW5kLWxpYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBlKGUpe3RoaXMubWVzc2FnZT1lfWUucHJvdG90eXBlPW5ldyBFcnJvcixlLnByb3RvdHlwZS5uYW1lPVwiSW52YWxpZENoYXJhY3RlckVycm9yXCI7dmFyIHI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LmF0b2ImJndpbmRvdy5hdG9iLmJpbmQod2luZG93KXx8ZnVuY3Rpb24ocil7dmFyIHQ9U3RyaW5nKHIpLnJlcGxhY2UoLz0rJC8sXCJcIik7aWYodC5sZW5ndGglND09MSl0aHJvdyBuZXcgZShcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO2Zvcih2YXIgbixvLGE9MCxpPTAsYz1cIlwiO289dC5jaGFyQXQoaSsrKTt+byYmKG49YSU0PzY0Km4rbzpvLGErKyU0KT9jKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDI1NSZuPj4oLTIqYSY2KSk6MClvPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIi5pbmRleE9mKG8pO3JldHVybiBjfTtmdW5jdGlvbiB0KGUpe3ZhciB0PWUucmVwbGFjZSgvLS9nLFwiK1wiKS5yZXBsYWNlKC9fL2csXCIvXCIpO3N3aXRjaCh0Lmxlbmd0aCU0KXtjYXNlIDA6YnJlYWs7Y2FzZSAyOnQrPVwiPT1cIjticmVhaztjYXNlIDM6dCs9XCI9XCI7YnJlYWs7ZGVmYXVsdDp0aHJvd1wiSWxsZWdhbCBiYXNlNjR1cmwgc3RyaW5nIVwifXRyeXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyKGUpLnJlcGxhY2UoLyguKS9nLChmdW5jdGlvbihlLHIpe3ZhciB0PXIuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gdC5sZW5ndGg8MiYmKHQ9XCIwXCIrdCksXCIlXCIrdH0pKSl9KHQpfWNhdGNoKGUpe3JldHVybiByKHQpfX1mdW5jdGlvbiBuKGUpe3RoaXMubWVzc2FnZT1lfWZ1bmN0aW9uIG8oZSxyKXtpZihcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkXCIpO3ZhciBvPSEwPT09KHI9cnx8e30pLmhlYWRlcj8wOjE7dHJ5e3JldHVybiBKU09OLnBhcnNlKHQoZS5zcGxpdChcIi5cIilbb10pKX1jYXRjaChlKXt0aHJvdyBuZXcgbihcIkludmFsaWQgdG9rZW4gc3BlY2lmaWVkOiBcIitlLm1lc3NhZ2UpfX1uLnByb3RvdHlwZT1uZXcgRXJyb3Isbi5wcm90b3R5cGUubmFtZT1cIkludmFsaWRUb2tlbkVycm9yXCI7ZXhwb3J0IGRlZmF1bHQgbztleHBvcnR7biBhcyBJbnZhbGlkVG9rZW5FcnJvcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qd3QtZGVjb2RlLmVzbS5qcy5tYXBcbiIsImltcG9ydCB0eXBlIE1vZHVsZVR5cGUgZnJvbSAnLi4vbW9kdWxlcy9Nb2R1bGVUeXBlJ1xuXG5leHBvcnQgZW51bSBFdmVudFR5cGUge1xuICBCUk9BRENBU1QgPSAnQlJPQURDQVNUJyxcbiAgUkVRVUVTVCA9ICdSRVFVRVNUJyxcbiAgUkVQTFkgPSAnUkVQTFknXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTFBURXZlbnRNZXRhIHtcbiAgdHlwZTogc3RyaW5nXG4gIG5hbWVzcGFjZTogc3RyaW5nXG4gIHZlcnNpb246IG51bWJlclxuXG4gIHNlbmRlcj86IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB2ZXJzaW9uOiBzdHJpbmdcbiAgICBtb2RlOiBNb2R1bGVUeXBlXG4gICAgcGF0aD86IHN0cmluZ1xuICB9XG4gIGNoYW5uZWxUeXBlPzogRXZlbnRUeXBlXG4gIHJlcGx5Pzogc3RyaW5nXG5cbiAgW25hbWU6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExQVEV2ZW50IHtcbiAgbWV0YTogTFBURXZlbnRNZXRhXG5cbiAgW25hbWU6IHN0cmluZ106IGFueVxuICByZXBsYXk/OiAoZGF0YTogUmVjb3JkPHN0cmluZywgYW55PikgPT4gdm9pZFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExQVEUge1xuICAvKipcbiAgICogU3Vic2NyaWJlIGZvciBldmVudHMgYW5kIHJlZ2lzdGVyIGEgY2FsbGJhY2sgaGFuZGxlclxuICAgKiBAcGFyYW0gbmFtZXNwYWNlXG4gICAqIEBwYXJhbSB0eXBlIHRoZSBldmVudCB0eXBlLiBZb3UgbWF5IHVzZSAqIHRvIGxpc3RlbiB0byBhbGwgZXZlbnRzIGluIHRoZSBuYW1lc3BhY2VcbiAgICogQHBhcmFtIGhhbmRsZXIgdGhlIGV2ZW50IGhhbmRsZXIgbWV0aG9kXG4gICAqL1xuICBvbjogKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IChlOiBMUFRFdmVudCkgPT4gdm9pZCkgPT4gdm9pZFxuXG4gIC8qKlxuICAgKiBDbGVhcnMgb3V0IGFsbCBldmVudCBoYW5kbGVyIHJlZ2lzdHJhdGlvbnMgZm9yIHRoZSBzeW1ib2xpemVkIG5hbWVzcGFjZSBhbmQgdHlwZS4gUGxlYXNlIG5vdGUgdGhhdCBpZiB5b3UgcGFzcyAqIGFzIHR5cGUsIGl0IGRvZXMgbm90IHVucmVnaXN0ZXIgYWxsXG4gICAqIHR5cGVzLCBidXQgc2ltcGx5IHRoZSBsaXN0ZW5lciB0aGF0IGxpc3RlbnMgdG8gYWxsIGV2ZW50cy5cbiAgICogQHBhcmFtIG5hbWVzcGFjZVxuICAgKiBAcGFyYW0gdHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKi9cbiAgdW5yZWdpc3RlcjogKG5hbWVzcGFjZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcpID0+IHZvaWRcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgdG8gdGhlIGV2ZW50IGhhbmRsZXJcbiAgICogQHBhcmFtIGV2ZW50IHRoZSBldmVudCB0byBlbWl0XG4gICAqL1xuICBlbWl0OiAoZXZlbnQ6IExQVEV2ZW50KSA9PiB2b2lkXG5cbiAgLyoqXG4gICAqIEVtaXRzIGEgcmVxdWVzdCBldmVudCwgYW5kIHdhaXRzIGZvciBhIHJlc3BvbnNlIChvciB1bnRpbCB0aW1lb3V0KVxuICAgKiBAcGFyYW0gZXZlbnQgdGhlIHJlcXVlc3QgZXZlbnQgdG8gc2VuZFxuICAgKiBAcGFyYW0gdGltZW91dCB0aGUgYW1vdW50IG9mIG1zIHRvIHdhaXQgdW50aWwgcmVqZWN0aW5nIHRoZSBwcm9taXNlIGJlY2F1c2Ugb2YgdGltZW91dFxuICAgKi9cbiAgcmVxdWVzdDogKGV2ZW50OiBMUFRFdmVudCwgdGltZW91dD86IG51bWJlcikgPT4gUHJvbWlzZTxMUFRFdmVudCB8IHVuZGVmaW5lZD5cblxuICAvKipcbiAgICogQXdhaXRzIHVudGlsIGFuIGV2ZW50IGlzIGVtaXR0ZWQgdG8gdGhlIGdpdmVuIG5hbWVzcGFjZSBhbmQgdHlwZSwgb3IgdW50aWwgdGltZW91dFxuICAgKi9cbiAgYXdhaXQ6IChcbiAgICBuYW1lc3BhY2U6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdGltZW91dD86IG51bWJlclxuICApID0+IFByb21pc2U8TFBURXZlbnQ+XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RyYXRpb24ge1xuICB0eXBlOiBzdHJpbmdcbiAgbmFtZXNwYWNlOiBzdHJpbmdcbiAgaGFuZGxlOiAoZXZlbnQ6IExQVEV2ZW50KSA9PiB2b2lkXG5cbiAgY29uc3RydWN0b3IgKFxuICAgIG5hbWVzcGFjZTogc3RyaW5nLFxuICAgIHR5cGU6IHN0cmluZyxcbiAgICBoYW5kbGVyOiAoZXZlbnQ6IExQVEV2ZW50KSA9PiB2b2lkXG4gICkge1xuICAgIHRoaXMubmFtZXNwYWNlID0gbmFtZXNwYWNlXG4gICAgdGhpcy50eXBlID0gdHlwZVxuICAgIHRoaXMuaGFuZGxlID0gaGFuZGxlclxuICB9XG59XG4iLCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cblxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wgKi9cblxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XG4gIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XG4gIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XG4gIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XG4gIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59XG5cbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcbiAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcbiAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0O1xuICB9XG4gIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcbiAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICB0W3BdID0gc1twXTtcbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICB9XG4gIHJldHVybiB0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcbiAgZnVuY3Rpb24gYWNjZXB0KGYpIHsgaWYgKGYgIT09IHZvaWQgMCAmJiB0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24gZXhwZWN0ZWRcIik7IHJldHVybiBmOyB9XG4gIHZhciBraW5kID0gY29udGV4dEluLmtpbmQsIGtleSA9IGtpbmQgPT09IFwiZ2V0dGVyXCIgPyBcImdldFwiIDoga2luZCA9PT0gXCJzZXR0ZXJcIiA/IFwic2V0XCIgOiBcInZhbHVlXCI7XG4gIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xuICB2YXIgZGVzY3JpcHRvciA9IGRlc2NyaXB0b3JJbiB8fCAodGFyZ2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGNvbnRleHRJbi5uYW1lKSA6IHt9KTtcbiAgdmFyIF8sIGRvbmUgPSBmYWxzZTtcbiAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0ge307XG4gICAgICBmb3IgKHZhciBwIGluIGNvbnRleHRJbikgY29udGV4dFtwXSA9IHAgPT09IFwiYWNjZXNzXCIgPyB7fSA6IGNvbnRleHRJbltwXTtcbiAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xuICAgICAgY29udGV4dC5hZGRJbml0aWFsaXplciA9IGZ1bmN0aW9uIChmKSB7IGlmIChkb25lKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGFkZCBpbml0aWFsaXplcnMgYWZ0ZXIgZGVjb3JhdGlvbiBoYXMgY29tcGxldGVkXCIpOyBleHRyYUluaXRpYWxpemVycy5wdXNoKGFjY2VwdChmIHx8IG51bGwpKTsgfTtcbiAgICAgIHZhciByZXN1bHQgPSAoMCwgZGVjb3JhdG9yc1tpXSkoa2luZCA9PT0gXCJhY2Nlc3NvclwiID8geyBnZXQ6IGRlc2NyaXB0b3IuZ2V0LCBzZXQ6IGRlc2NyaXB0b3Iuc2V0IH0gOiBkZXNjcmlwdG9yW2tleV0sIGNvbnRleHQpO1xuICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHZvaWQgMCkgY29udGludWU7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCB0eXBlb2YgcmVzdWx0ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGV4cGVjdGVkXCIpO1xuICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XG4gICAgICAgICAgaWYgKF8gPSBhY2NlcHQocmVzdWx0LnNldCkpIGRlc2NyaXB0b3Iuc2V0ID0gXztcbiAgICAgICAgICBpZiAoXyA9IGFjY2VwdChyZXN1bHQuaW5pdCkpIGluaXRpYWxpemVycy51bnNoaWZ0KF8pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXyA9IGFjY2VwdChyZXN1bHQpKSB7XG4gICAgICAgICAgaWYgKGtpbmQgPT09IFwiZmllbGRcIikgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XG4gICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xuICAgICAgfVxuICB9XG4gIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcbiAgZG9uZSA9IHRydWU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19ydW5Jbml0aWFsaXplcnModGhpc0FyZywgaW5pdGlhbGl6ZXJzLCB2YWx1ZSkge1xuICB2YXIgdXNlVmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlID0gdXNlVmFsdWUgPyBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnLCB2YWx1ZSkgOiBpbml0aWFsaXplcnNbaV0uY2FsbCh0aGlzQXJnKTtcbiAgfVxuICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCIgPyB4IDogXCJcIi5jb25jYXQoeCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19zZXRGdW5jdGlvbk5hbWUoZiwgbmFtZSwgcHJlZml4KSB7XG4gIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzeW1ib2xcIikgbmFtZSA9IG5hbWUuZGVzY3JpcHRpb24gPyBcIltcIi5jb25jYXQobmFtZS5kZXNjcmlwdGlvbiwgXCJdXCIpIDogXCJcIjtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xuICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgfVxufVxuXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xuICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xuICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgb1trMl0gPSBtW2tdO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xuICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XG4gIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICB9XG4gIH07XG4gIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XG4gIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgaWYgKCFtKSByZXR1cm4gbztcbiAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gIHRyeSB7XG4gICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgfVxuICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgfVxuICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gIH1cbiAgcmV0dXJuIGFyO1xufVxuXG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcbiAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gIHJldHVybiBhcjtcbn1cblxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XG4gIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xuICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICByW2tdID0gYVtqXTtcbiAgcmV0dXJuIHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tLCBwYWNrKSB7XG4gIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcbiAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xuICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xuICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XG4gIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XG4gIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxuICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XG4gIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cbiAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XG4gIHZhciBpLCBwO1xuICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xuICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XG4gIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG4gIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XG4gIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcbiAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxuICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xuICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxuICByZXR1cm4gY29va2VkO1xufTtcblxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcbiAgb1tcImRlZmF1bHRcIl0gPSB2O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcbiAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XG4gIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XG4gIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XG4gIHJldHVybiB0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyID09PSBzdGF0ZSA6IHN0YXRlLmhhcyhyZWNlaXZlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZShlbnYsIHZhbHVlLCBhc3luYykge1xuICBpZiAodmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWQuXCIpO1xuICAgIHZhciBkaXNwb3NlO1xuICAgIGlmIChhc3luYykge1xuICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcbiAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xuICAgIH1cbiAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XG4gICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGlzcG9zZSAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IG5vdCBkaXNwb3NhYmxlLlwiKTtcbiAgICBlbnYuc3RhY2sucHVzaCh7IHZhbHVlOiB2YWx1ZSwgZGlzcG9zZTogZGlzcG9zZSwgYXN5bmM6IGFzeW5jIH0pO1xuICB9XG4gIGVsc2UgaWYgKGFzeW5jKSB7XG4gICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZS5uYW1lID0gXCJTdXBwcmVzc2VkRXJyb3JcIiwgZS5lcnJvciA9IGVycm9yLCBlLnN1cHByZXNzZWQgPSBzdXBwcmVzc2VkLCBlO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fZGlzcG9zZVJlc291cmNlcyhlbnYpIHtcbiAgZnVuY3Rpb24gZmFpbChlKSB7XG4gICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xuICAgIGVudi5oYXNFcnJvciA9IHRydWU7XG4gIH1cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICB3aGlsZSAoZW52LnN0YWNrLmxlbmd0aCkge1xuICAgICAgdmFyIHJlYyA9IGVudi5zdGFjay5wb3AoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWMuZGlzcG9zZSAmJiByZWMuZGlzcG9zZS5jYWxsKHJlYy52YWx1ZSk7XG4gICAgICAgIGlmIChyZWMuYXN5bmMpIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KS50aGVuKG5leHQsIGZ1bmN0aW9uKGUpIHsgZmFpbChlKTsgcmV0dXJuIG5leHQoKTsgfSk7XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgIGZhaWwoZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcbiAgfVxuICByZXR1cm4gbmV4dCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIF9fZXh0ZW5kcyxcbiAgX19hc3NpZ24sXG4gIF9fcmVzdCxcbiAgX19kZWNvcmF0ZSxcbiAgX19wYXJhbSxcbiAgX19tZXRhZGF0YSxcbiAgX19hd2FpdGVyLFxuICBfX2dlbmVyYXRvcixcbiAgX19jcmVhdGVCaW5kaW5nLFxuICBfX2V4cG9ydFN0YXIsXG4gIF9fdmFsdWVzLFxuICBfX3JlYWQsXG4gIF9fc3ByZWFkLFxuICBfX3NwcmVhZEFycmF5cyxcbiAgX19zcHJlYWRBcnJheSxcbiAgX19hd2FpdCxcbiAgX19hc3luY0dlbmVyYXRvcixcbiAgX19hc3luY0RlbGVnYXRvcixcbiAgX19hc3luY1ZhbHVlcyxcbiAgX19tYWtlVGVtcGxhdGVPYmplY3QsXG4gIF9faW1wb3J0U3RhcixcbiAgX19pbXBvcnREZWZhdWx0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxuICBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXG4gIF9fYWRkRGlzcG9zYWJsZVJlc291cmNlLFxuICBfX2Rpc3Bvc2VSZXNvdXJjZXMsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBFdmVudFR5cGUsIHR5cGUgTFBURSwgdHlwZSBMUFRFdmVudCwgUmVnaXN0cmF0aW9uIH0gZnJvbSAnLi4vY29yZS9ldmVudGJ1cy9MUFRFJ1xuaW1wb3J0IGRlY29kZSBmcm9tICdqd3QtZGVjb2RlJ1xuXG4vLyBTZXR1cCB0b2FzdHNcbmlmICgod2luZG93IGFzIGFueSkudG9hc3RyICE9PSB1bmRlZmluZWQpIHtcbiAgOyAod2luZG93IGFzIGFueSkudG9hc3RyLm9wdGlvbnMgPSB7XG4gICAgdGltZU91dDogJzAnLFxuICAgIGV4dGVuZGVkVGltZU91dDogJzAnLFxuICAgIHNob3dEdXJhdGlvbjogJzAnLFxuICAgIGhpZGVEdXJhdGlvbjogJzAnLFxuICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC10b3AtcmlnaHQnXG4gIH1cbn1cblxuY2xhc3MgRnJvbnRlbmRSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWdpc3RyYXRpb24ge1xuICBpc09uY2U6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIGdldFN1YnNjcmliZUV2ZW50KCk6IExQVEV2ZW50IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWV0YToge1xuICAgICAgICBuYW1lc3BhY2U6ICdscHRlJyxcbiAgICAgICAgdHlwZTogdGhpcy5pc09uY2UgPyAnc3Vic2NyaWJlLW9uY2UnIDogJ3N1YnNjcmliZScsXG4gICAgICAgIHZlcnNpb246IDFcbiAgICAgIH0sXG4gICAgICB0bzoge1xuICAgICAgICBuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGVcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tSWQoKTogc3RyaW5nIHtcbiAgY29uc3QgdWludDMyID0gd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXVxuICByZXR1cm4gdWludDMyLnRvU3RyaW5nKDE2KVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGZyb250ZW5kIGxpYnJhcnkgdGhhdCBpcyBjb21wYXRpYmxlIHdpdGggdGhlIGJhY2tlbmQgc3ludGF4LiBJdCBjb25uZWN0cyB2aWEgd2Vic29ja2V0LlxuICovXG5jbGFzcyBMUFRFU2VydmljZSBpbXBsZW1lbnRzIExQVEUge1xuICBiYWNrZW5kOiBzdHJpbmdcbiAgd2Vic29ja2V0OiBXZWJTb2NrZXRcbiAgcmVnaXN0cmF0aW9uczogRnJvbnRlbmRSZWdpc3RyYXRpb25bXSA9IFtdXG4gIHJlYWR5SGFuZGxlcj86ICgpID0+IHZvaWRcblxuICBjb25zdHJ1Y3RvcihiYWNrZW5kOiBzdHJpbmcpIHtcbiAgICB0aGlzLmJhY2tlbmQgPSBiYWNrZW5kXG4gICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KGJhY2tlbmQpXG5cbiAgICB0aGlzLl9sb2cgPSB0aGlzLl9sb2cuYmluZCh0aGlzKVxuICAgIHRoaXMuX29uU29ja2V0T3BlbiA9IHRoaXMuX29uU29ja2V0T3Blbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5fb25Tb2NrZXRDbG9zZSA9IHRoaXMuX29uU29ja2V0Q2xvc2UuYmluZCh0aGlzKVxuICAgIHRoaXMuX29uU29ja2V0RXJyb3IgPSB0aGlzLl9vblNvY2tldEVycm9yLmJpbmQodGhpcylcbiAgICB0aGlzLl9vblNvY2tldE1lc3NhZ2UgPSB0aGlzLl9vblNvY2tldE1lc3NhZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuX3JlY29ubmVjdCA9IHRoaXMuX3JlY29ubmVjdC5iaW5kKHRoaXMpXG4gICAgdGhpcy5fY29ubmVjdCA9IHRoaXMuX2Nvbm5lY3QuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5fY29ubmVjdCgpXG4gIH1cblxuICBfbG9nKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYFtMUFRFXSAke21zZ31gKVxuICB9XG5cbiAgX29uU29ja2V0T3BlbigpOiB2b2lkIHtcbiAgICB0aGlzLl9sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKVxuXG4gICAgLy8gcmVkbyBhbnkgcmVnaXN0cmF0aW9ucywgaW4gY2FzZSB0aGlzIGlzIGEgcmVjb25uZWN0XG4gICAgdGhpcy5yZWdpc3RyYXRpb25zLmZvckVhY2goKHJlZykgPT4geyB0aGlzLndlYnNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHJlZy5nZXRTdWJzY3JpYmVFdmVudCgpKSkgfVxuICAgIClcblxuICAgIGlmICh0aGlzLnJlYWR5SGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnJlYWR5SGFuZGxlcigpXG4gICAgfVxuICB9XG5cbiAgX29uU29ja2V0Q2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKCdXZWJzb2NrZXQgY2xvc2VkLCBhdHRlbXB0aW5nIHJlY29ubmVjdCBpbiA1MDBtcycpXG4gICAgc2V0VGltZW91dCh0aGlzLl9yZWNvbm5lY3QsIDUwMClcbiAgfVxuXG4gIF9vblNvY2tldEVycm9yKGU6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKGBXZWJzb2NrZXQgZXJyb3I6ICR7SlNPTi5zdHJpbmdpZnkoZSl9YClcbiAgfVxuXG4gIF9vblNvY2tldE1lc3NhZ2UoZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQ6IExQVEV2ZW50ID0gSlNPTi5wYXJzZShlLmRhdGEpXG5cbiAgICB0aGlzLnJlZ2lzdHJhdGlvbnNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChyZWcpID0+XG4gICAgICAgICAgcmVnLm5hbWVzcGFjZSA9PT0gZXZlbnQubWV0YS5uYW1lc3BhY2UgJiYgcmVnLnR5cGUgPT09IGV2ZW50Lm1ldGEudHlwZVxuICAgICAgKVxuICAgICAgLmZvckVhY2goKHJlZykgPT4ge1xuICAgICAgICByZWcuaGFuZGxlKGV2ZW50KVxuICAgICAgfSlcbiAgfVxuXG4gIF9yZWNvbm5lY3QoKTogdm9pZCB7XG4gICAgdGhpcy53ZWJzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuYmFja2VuZClcbiAgICB0aGlzLl9jb25uZWN0KClcbiAgfVxuXG4gIF9jb25uZWN0KCk6IHZvaWQge1xuICAgIHRoaXMud2Vic29ja2V0Lm9ub3BlbiA9IHRoaXMuX29uU29ja2V0T3BlblxuICAgIHRoaXMud2Vic29ja2V0Lm9uY2xvc2UgPSB0aGlzLl9vblNvY2tldENsb3NlXG4gICAgdGhpcy53ZWJzb2NrZXQub25lcnJvciA9IHRoaXMuX29uU29ja2V0RXJyb3JcbiAgICB0aGlzLndlYnNvY2tldC5vbm1lc3NhZ2UgPSB0aGlzLl9vblNvY2tldE1lc3NhZ2VcbiAgfVxuXG4gIG9ucmVhZHkoaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmICh0aGlzLndlYnNvY2tldC5yZWFkeVN0YXRlID09PSB0aGlzLndlYnNvY2tldC5PUEVOKSB7XG4gICAgICBoYW5kbGVyKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZWFkeUhhbmRsZXIgPSBoYW5kbGVyXG4gICAgfVxuICB9XG5cbiAgdW5yZWdpc3RlckhhbmRsZXIoaGFuZGxlcjogKGV2ZW50OiBMUFRFdmVudCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZWdpc3RyYXRpb25zID0gdGhpcy5yZWdpc3RyYXRpb25zLmZpbHRlcihcbiAgICAgICAgKHJlZ2lzdHJhdGlvbikgPT4gcmVnaXN0cmF0aW9uLmhhbmRsZSAhPT0gaGFuZGxlclxuICAgICAgKVxuICAgIH0sIDEwMDApXG4gIH1cblxuICBvbihcbiAgICBuYW1lc3BhY2U6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgaGFuZGxlcjogKGV2ZW50OiBMUFRFdmVudCkgPT4gdm9pZCxcbiAgICBpc09uY2UgPSBmYWxzZVxuICApOiB2b2lkIHtcbiAgICBjb25zdCByZWdpc3RyYXRpb24gPSBuZXcgRnJvbnRlbmRSZWdpc3RyYXRpb24obmFtZXNwYWNlLCB0eXBlLCBoYW5kbGVyKVxuICAgIHJlZ2lzdHJhdGlvbi5pc09uY2UgPSBpc09uY2VcblxuICAgIHRoaXMucmVnaXN0cmF0aW9ucy5wdXNoKHJlZ2lzdHJhdGlvbilcblxuICAgIHRoaXMud2Vic29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocmVnaXN0cmF0aW9uLmdldFN1YnNjcmliZUV2ZW50KCkpKVxuICB9XG5cbiAgdW5yZWdpc3RlcihuYW1lc3BhY2U6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fbG9nKCdVbnJlZ2lzdGVyIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkJylcbiAgfVxuXG4gIGVtaXQoZXZlbnQ6IExQVEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy53ZWJzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShldmVudCkpXG4gIH1cblxuICBhc3luYyByZXF1ZXN0KGV2ZW50OiBMUFRFdmVudCwgdGltZW91dDogbnVtYmVyID0gNTAwMCk6IFByb21pc2U8TFBURXZlbnQ+IHtcbiAgICBjb25zdCByZXBseSA9IGAke2V2ZW50Lm1ldGEudHlwZX0tJHtyYW5kb21JZCgpfWBcbiAgICBldmVudC5tZXRhLnJlcGx5ID0gcmVwbHlcbiAgICBldmVudC5tZXRhLmNoYW5uZWxUeXBlID0gRXZlbnRUeXBlLlJFUVVFU1RcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5lbWl0KGV2ZW50KVxuICAgIH0sIDApXG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXdhaXQoJ3JlcGx5JywgcmVwbHksIHRpbWVvdXQpXG4gICAgfSBjYXRjaCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcXVlc3QgdGltZWQgb3V0JylcbiAgICB9XG4gIH1cblxuICBhc3luYyBhd2FpdChcbiAgICBuYW1lc3BhY2U6IHN0cmluZyxcbiAgICB0eXBlOiBzdHJpbmcsXG4gICAgdGltZW91dDogbnVtYmVyID0gNTAwMFxuICApOiBQcm9taXNlPExQVEV2ZW50PiB7XG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGxldCB3YXNIYW5kbGVkID0gZmFsc2VcblxuICAgICAgY29uc3QgaGFuZGxlciA9IChlOiBMUFRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBpZiAod2FzSGFuZGxlZCkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHdhc0hhbmRsZWQgPSB0cnVlXG4gICAgICAgIHRoaXMudW5yZWdpc3RlckhhbmRsZXIoaGFuZGxlcilcblxuICAgICAgICByZXNvbHZlKGUpXG4gICAgICB9XG4gICAgICAvLyBSZWdpc3RlciBoYW5kbGVyXG4gICAgICB0aGlzLm9uKG5hbWVzcGFjZSwgdHlwZSwgaGFuZGxlciwgdHJ1ZSlcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh3YXNIYW5kbGVkKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgd2FzSGFuZGxlZCA9IHRydWVcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVySGFuZGxlcihoYW5kbGVyKVxuICAgICAgICByZWplY3QobmV3IEVycm9yKCdyZXF1ZXN0IHRpbWVkIG91dCcpKVxuICAgICAgfSwgdGltZW91dClcbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IGFwaUtleSA9IGdldEFwaUtleSgpXG5jb25zdCB3c1VybCA9IGB3cyR7bG9jYXRpb24ub3JpZ2luLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykgPyAncycgOiAnJ306Ly8ke2xvY2F0aW9uLmhvc3RcbiAgfS9ldmVudGJ1c2BcbmNvbnN0IGJhY2tlbmQgPSBhcGlLZXkgIT09IG51bGwgPyBgJHt3c1VybH0/YXBpa2V5PSR7YXBpS2V5fWAgOiB3c1VybFxuXG5mdW5jdGlvbiBnZXRBcGlLZXkoKTogc3RyaW5nIHwgbnVsbCB7XG4gIGlmIChnZXRDb29raWUoJ2F1dGhfZGlzYWJsZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5S2V5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoJ2FwaWtleScpXG5cbiAgaWYgKHF1ZXJ5S2V5ICE9PSBudWxsKSByZXR1cm4gcXVlcnlLZXlcblxuICBjb25zdCBjb29raWVLZXkgPSBnZXRDb29raWUoJ2FjY2Vzc190b2tlbicpXG5cbiAgaWYgKGNvb2tpZUtleSAhPT0gJycpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlPGFueT4oY29va2llS2V5KVxuICAgIHJldHVybiBkZWNvZGVkLmFwaUtleVxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn1cblxuZnVuY3Rpb24gZ2V0V2ViU2VydmVyUG9ydCgpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7bG9jYXRpb24uaG9zdH1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEFjdGlvbkxpbmsobmFtZXNwYWNlOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcGFyYW1zPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBwcm90b2NvbCA9IGxvY2F0aW9uLnByb3RvY29sXG4gIGNvbnN0IGhvc3QgPSBsb2NhdGlvbi5ob3N0XG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuXG4gIGZvciAoY29uc3QgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgdXJsUGFyYW1zLnNldChwYXJhbSwgcGFyYW1zW3BhcmFtXSlcbiAgfVxuXG4gIGlmIChhcGlLZXkgIT09IG51bGwpIHtcbiAgICB1cmxQYXJhbXMuc2V0KCdhcGlrZXknLCBhcGlLZXkpXG4gIH1cblxuICBjb25zdCB1cmwgPSBgJHtwcm90b2NvbH0vLyR7aG9zdH0vYXBpL2V2ZW50cy9zaG9ydGN1dC9pbmdlc3QvJHtuYW1lc3BhY2V9LyR7dHlwZX0/JHt1cmxQYXJhbXMudG9TdHJpbmcoKX1gXG4gIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybClcbn1cblxuZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBuYW1lID0gYCR7Y25hbWV9PWBcbiAgY29uc3QgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpXG4gIGNvbnN0IGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gY2FbaV1cbiAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT09ICcgJykge1xuICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpXG4gICAgfVxuICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG5cbjsgKHdpbmRvdyBhcyBhbnkpLkxQVEUgPSBuZXcgTFBURVNlcnZpY2UoYmFja2VuZClcbjsgKHdpbmRvdyBhcyBhbnkpLmFwaUtleSA9IGFwaUtleVxuOyAod2luZG93IGFzIGFueSkuY29uc3RhbnRzID0ge1xuICBnZXRBcGlLZXksXG4gIGdldFdlYlNlcnZlclBvcnQsXG59XG47ICh3aW5kb3cgYXMgYW55KS5nZXRBY3Rpb25MaW5rID0gZ2V0QWN0aW9uTGlua1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9