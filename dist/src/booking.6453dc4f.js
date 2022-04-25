// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"avGq0":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5d4662ee6453dc4f";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ib7vD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _justValidate = require("just-validate");
var _justValidateDefault = parcelHelpers.interopDefault(_justValidate);
// date validation variables
const months30days = [
    '4',
    '6',
    '9',
    '11'
];
const monthInput = document.querySelector('#month');
const dayInput = document.querySelector('#day');
// customer total variables
const subtractBtn = document.querySelector('.btn--customer-subtract');
const addBtn = document.querySelector('.btn--customer-add');
const customerTotal = document.querySelector('.customer-total');
// Global variable for max days to be used with form validation and listeners 
let maxDays = 31;
/**********************************************
    EVENT LISTENERS
**********************************************/ monthInput.addEventListener('change', (e)=>{
    if (months30days.includes(monthInput.value)) {
        dayInput.setAttribute('max', '30');
        maxDays = 30;
    } else if (monthInput.value === "2") {
        dayInput.setAttribute('max', '28');
        maxDays = 28;
    } else {
        dayInput.setAttribute('max', '31');
        maxDays = 31;
    }
});
subtractBtn.addEventListener('click', (e)=>{
    let total = Number.parseInt(customerTotal.value, 10);
    if (total > 1) {
        total--;
        customerTotal.value = `${total} People`;
    }
    if (total === 1) customerTotal.value = `1 Person`;
});
addBtn.addEventListener('click', (e)=>{
    let total = Number.parseInt(customerTotal.value, 10);
    if (total < 30) {
        total++;
        customerTotal.value = `${total} People`;
    }
});
/**********************************************
    FORM VALIDATION
**********************************************/ const validation = new _justValidateDefault.default('#form', {
    errorFieldCssClass: 'invalid',
    errorLabelCssClass: 'invalid-label',
    focusInvalidField: true,
    errorsContainer: 'div.invalid-container'
});
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Name is required'
    },
    {
        rule: 'minLength',
        value: 3
    },
    {
        rule: 'maxLength',
        value: 30
    }, 
]).addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Email is required'
    },
    {
        rule: 'email',
        errorMessage: 'Please enter a valid email address (******@gmail.com)'
    }, 
]).addField('#month', [
    {
        rule: 'required',
        errorMessage: 'Please enter a month'
    },
    {
        rule: 'minNumber',
        value: 01
    },
    {
        rule: 'maxNumber',
        value: 12
    }
]).addField('#day', [
    {
        rule: 'required',
        errorMessage: 'Please enter a day'
    },
    {
        rule: 'minNumber',
        value: 01
    },
    {
        validator: ()=>maxDays >= dayInput.value
        ,
        errorMessage: 'Please enter a valid day for the corresponding month'
    }
]).addField('#year', [
    {
        rule: 'required',
        errorMessage: 'Please choose a year from 2022 to 2024'
    },
    {
        rule: 'minNumber',
        value: 2022
    },
    {
        rule: 'maxNumber',
        value: 2024
    }
]).addField('#hour', [
    {
        rule: 'required',
        errorMessage: 'Hour field is required'
    },
    {
        rule: 'minNumber',
        value: 01
    },
    {
        rule: 'maxNumber',
        value: 12
    }
]).addField('#minute', [
    {
        rule: 'required',
        errorMessage: 'Minute field is required'
    },
    {
        rule: 'minNumber',
        value: 00
    },
    {
        rule: 'maxNumber',
        value: 59
    }
]).onFail((e)=>{
    console.log('Invalid', e);
}).onSuccess((e)=>{
    console.log('Passed', e);
});

},{"just-validate":"gcCDD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcCDD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>JustValidate
);
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value
;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {}))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __publicField = (obj, key, value)=>{
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
};
const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const NUMBER_REGEXP = /^[0-9]+$/;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isEmpty = (value)=>{
    let newVal = value;
    if (typeof value === "string") newVal = value.trim();
    return !newVal;
};
const isEmail = (value)=>{
    return EMAIL_REGEXP.test(value);
};
const isLengthMoreThanMax = (value, len)=>{
    return value.length > len;
};
const isLengthLessThanMin = (value, len)=>{
    return value.length < len;
};
const isNumber = (value)=>{
    return NUMBER_REGEXP.test(value);
};
const isPassword = (value)=>{
    return PASSWORD_REGEXP.test(value);
};
const isStrongPassword = (value)=>{
    return STRONG_PASSWORD_REGEXP.test(value);
};
const isNumberMoreThanMax = (value, len)=>{
    return value > len;
};
const isNumberLessThanMin = (value, len)=>{
    return value < len;
};
var Rules = /* @__PURE__ */ ((Rules2)=>{
    Rules2["Required"] = "required";
    Rules2["Email"] = "email";
    Rules2["MinLength"] = "minLength";
    Rules2["MaxLength"] = "maxLength";
    Rules2["Password"] = "password";
    Rules2["Number"] = "number";
    Rules2["MaxNumber"] = "maxNumber";
    Rules2["MinNumber"] = "minNumber";
    Rules2["StrongPassword"] = "strongPassword";
    Rules2["CustomRegexp"] = "customRegexp";
    Rules2["MinFilesCount"] = "minFilesCount";
    Rules2["MaxFilesCount"] = "maxFilesCount";
    Rules2["Files"] = "files";
    return Rules2;
})(Rules || {});
var GroupRules = /* @__PURE__ */ ((GroupRules2)=>{
    GroupRules2["Required"] = "required";
    return GroupRules2;
})(GroupRules || {});
var CustomStyleTagIds = /* @__PURE__ */ ((CustomStyleTagIds2)=>{
    CustomStyleTagIds2["Label"] = "label";
    CustomStyleTagIds2["LabelArrow"] = "labelArrow";
    return CustomStyleTagIds2;
})(CustomStyleTagIds || {});
const getDefaultFieldMessage = (rule, ruleValue)=>{
    switch(rule){
        case Rules.Required:
            return "The field is required";
        case Rules.Email:
            return "Email has invalid format";
        case Rules.MaxLength:
            return "The field must contain a maximum of :value characters".replace(":value", String(ruleValue));
        case Rules.MinLength:
            return "The field must contain a minimum of :value characters".replace(":value", String(ruleValue));
        case Rules.Password:
            return "Password must contain minimum eight characters, at least one letter and one number";
        case Rules.Number:
            return "Value should be a number";
        case Rules.StrongPassword:
            return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        case Rules.MaxNumber:
            return "Number should be less or equal than :value".replace(":value", String(ruleValue));
        case Rules.MinNumber:
            return "Number should be more or equal than :value".replace(":value", String(ruleValue));
        case Rules.MinFilesCount:
            return "Files count should be more or equal than :value".replace(":value", String(ruleValue));
        case Rules.MaxFilesCount:
            return "Files count should be less or equal than :value".replace(":value", String(ruleValue));
        case Rules.Files:
            return "Uploaded files have one or several invalid properties (extension/size/type etc)";
        default:
            return "Value is incorrect";
    }
};
const getDefaultGroupMessage = (rule)=>{
    switch(rule){
        case GroupRules.Required:
            return "The field is required";
        default:
            return "Group is incorrect";
    }
};
const isPromise = (val)=>!!val && typeof val.then === "function"
;
const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
const TOOLTIP_ARROW_HEIGHT = 5;
const defaultGlobalConfig = {
    errorFieldStyle: {
        color: "#b81111",
        border: "1px solid #B81111"
    },
    errorFieldCssClass: "just-validate-error-field",
    successFieldCssClass: "just-validate-success-field",
    errorLabelStyle: {
        color: "#b81111"
    },
    errorLabelCssClass: "just-validate-error-label",
    successLabelCssClass: "just-validate-success-label",
    focusInvalidField: true,
    lockForm: true,
    testingMode: false
};
class JustValidate {
    constructor(form, globalConfig, dictLocale){
        __publicField(this, "form", null);
        __publicField(this, "fields", {});
        __publicField(this, "groupFields", {});
        __publicField(this, "errors", {});
        __publicField(this, "isValid", false);
        __publicField(this, "isSubmitted", false);
        __publicField(this, "globalConfig", defaultGlobalConfig);
        __publicField(this, "errorLabels", {});
        __publicField(this, "successLabels", {});
        __publicField(this, "eventListeners", []);
        __publicField(this, "dictLocale", []);
        __publicField(this, "currentLocale");
        __publicField(this, "customStyleTags", {});
        __publicField(this, "onSuccessCallback");
        __publicField(this, "onFailCallback");
        __publicField(this, "tooltips", []);
        __publicField(this, "lastScrollPosition");
        __publicField(this, "isScrollTick");
        __publicField(this, "refreshAllTooltips", ()=>{
            this.tooltips.forEach((item)=>{
                item.refresh();
            });
        });
        __publicField(this, "handleDocumentScroll", ()=>{
            this.lastScrollPosition = window.scrollY;
            if (!this.isScrollTick) {
                window.requestAnimationFrame(()=>{
                    this.refreshAllTooltips();
                    this.isScrollTick = false;
                });
                this.isScrollTick = true;
            }
        });
        __publicField(this, "formSubmitHandler", (ev)=>{
            ev.preventDefault();
            this.isSubmitted = true;
            this.validateHandler(ev);
        });
        __publicField(this, "handleFieldChange", (target)=>{
            let currentFieldName;
            for(const fieldName in this.fields){
                const field = this.fields[fieldName];
                if (field.elem === target) {
                    currentFieldName = fieldName;
                    break;
                }
            }
            if (!currentFieldName) return;
            this.validateField(currentFieldName, true);
        });
        __publicField(this, "handleGroupChange", (target)=>{
            let currentGroup;
            let currentGroupName;
            for(const groupName in this.groupFields){
                const group = this.groupFields[groupName];
                if (group.elems.find((elem)=>elem === target
                )) {
                    currentGroup = group;
                    currentGroupName = groupName;
                    break;
                }
            }
            if (!currentGroup || !currentGroupName) return;
            this.validateGroup(currentGroupName, currentGroup);
        });
        __publicField(this, "handlerChange", (ev)=>{
            if (!ev.target) return;
            this.handleFieldChange(ev.target);
            this.handleGroupChange(ev.target);
            this.renderErrors();
        });
        this.initialize(form, globalConfig, dictLocale);
    }
    initialize(form, globalConfig, dictLocale) {
        this.form = null;
        this.errors = {};
        this.isValid = false;
        this.isSubmitted = false;
        this.globalConfig = defaultGlobalConfig;
        this.errorLabels = {};
        this.successLabels = {};
        this.eventListeners = [];
        this.customStyleTags = {};
        this.tooltips = [];
        if (typeof form === "string") {
            const elem = document.querySelector(form);
            if (!elem) throw Error(`Form with ${form} selector not found! Please check the form selector`);
            this.setForm(elem);
        } else if (form instanceof HTMLFormElement) this.setForm(form);
        else throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
        this.globalConfig = __spreadValues(__spreadValues({}, defaultGlobalConfig), globalConfig);
        if (dictLocale) this.dictLocale = dictLocale;
        if (this.isTooltip()) {
            const styleTag = document.createElement("style");
            styleTag.textContent = errorLabelCss;
            this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
            this.addListener("scroll", document, this.handleDocumentScroll);
        }
    }
    getLocalisedString(str) {
        var _a;
        if (!this.currentLocale || !this.dictLocale.length) return str;
        const localisedStr = (_a = this.dictLocale.find((item)=>item.key === str
        )) == null ? void 0 : _a.dict[this.currentLocale];
        return localisedStr || str;
    }
    getFieldErrorMessage(fieldRule, elem) {
        const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
        return this.getLocalisedString(msg) || getDefaultFieldMessage(fieldRule.rule, fieldRule.value);
    }
    getFieldSuccessMessage(successMessage, elem) {
        const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
        return this.getLocalisedString(msg);
    }
    getGroupErrorMessage(groupRule) {
        return this.getLocalisedString(groupRule.errorMessage) || getDefaultGroupMessage(groupRule.rule);
    }
    getGroupSuccessMessage(groupRule) {
        return this.getLocalisedString(groupRule.successMessage);
    }
    setFieldInvalid(field, fieldRule) {
        this.fields[field].isValid = false;
        this.fields[field].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[field].elem);
    }
    setFieldValid(field, successMessage) {
        this.fields[field].isValid = true;
        if (successMessage !== void 0) this.fields[field].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[field].elem);
    }
    setGroupInvalid(groupName, groupRule) {
        this.groupFields[groupName].isValid = false;
        this.groupFields[groupName].errorMessage = this.getGroupErrorMessage(groupRule);
    }
    setGroupValid(groupName, groupRule) {
        this.groupFields[groupName].isValid = true;
        this.groupFields[groupName].successMessage = this.getGroupSuccessMessage(groupRule);
    }
    getElemValue(elem) {
        switch(elem.type){
            case "checkbox":
                return elem.checked;
            case "file":
                return elem.files;
            default:
                return elem.value;
        }
    }
    validateGroupRule(groupName, type, elems, groupRule) {
        switch(groupRule.rule){
            case GroupRules.Required:
                if (type === "radio" || type === "checkbox") {
                    if (elems.every((elem)=>!elem.checked
                    )) this.setGroupInvalid(groupName, groupRule);
                    else this.setGroupValid(groupName, groupRule);
                }
        }
    }
    validateFieldRule(field, elem, fieldRule, afterInputChanged = false) {
        const ruleValue = fieldRule.value;
        const elemValue = this.getElemValue(elem);
        if (fieldRule.plugin) {
            const result = fieldRule.plugin(elemValue, this.fields);
            if (!result) this.setFieldInvalid(field, fieldRule);
            return;
        }
        switch(fieldRule.rule){
            case Rules.Required:
                if (isEmpty(elemValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.Email:
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (!isEmail(elemValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.MaxLength:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (elemValue === "") break;
                if (isLengthMoreThanMax(elemValue, ruleValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.MinLength:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (elemValue === "") break;
                if (isLengthLessThanMin(elemValue, ruleValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.Password:
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (elemValue === "") break;
                if (!isPassword(elemValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.StrongPassword:
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (elemValue === "") break;
                if (!isStrongPassword(elemValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.Number:
                if (typeof elemValue !== "string") {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (elemValue === "") break;
                if (!isNumber(elemValue)) this.setFieldInvalid(field, fieldRule);
                break;
            case Rules.MaxNumber:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (typeof ruleValue !== "number") {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (typeof elemValue !== "string") {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (elemValue === "") break;
                    const num = +elemValue;
                    if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) this.setFieldInvalid(field, fieldRule);
                    break;
                }
            case Rules.MinNumber:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (typeof ruleValue !== "number") {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (typeof elemValue !== "string") {
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    if (elemValue === "") break;
                    const num = +elemValue;
                    if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) this.setFieldInvalid(field, fieldRule);
                    break;
                }
            case Rules.CustomRegexp:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        return;
                    }
                    let regexp;
                    try {
                        regexp = new RegExp(ruleValue);
                    } catch (e) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a valid regexp. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        break;
                    }
                    const str = String(elemValue);
                    if (str !== "" && !regexp.test(str)) this.setFieldInvalid(field, fieldRule);
                    break;
                }
            case Rules.MinFilesCount:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                break;
            case Rules.MaxFilesCount:
                if (ruleValue === void 0) {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (typeof ruleValue !== "number") {
                    console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
                    this.setFieldInvalid(field, fieldRule);
                    break;
                }
                break;
            case Rules.Files:
                {
                    if (ruleValue === void 0) {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        return;
                    }
                    if (typeof ruleValue !== "object") {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        return;
                    }
                    const filesConfig = ruleValue.files;
                    if (typeof filesConfig !== "object") {
                        console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object with files array. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        return;
                    }
                    const isFilePropsInvalid = (file, fileConfig)=>{
                        const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
                        const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
                        const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
                        const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
                        const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
                        return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
                    };
                    if (typeof elemValue === "object" && elemValue !== null) for(let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx){
                        const file = elemValue.item(fileIdx);
                        if (!file) {
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                        const filesInvalid = isFilePropsInvalid(file, filesConfig);
                        if (filesInvalid) {
                            this.setFieldInvalid(field, fieldRule);
                            break;
                        }
                    }
                    break;
                }
            default:
                {
                    if (typeof fieldRule.validator !== "function") {
                        console.error(`Validator for custom rule for [${field}] field should be a function. This field will be always invalid.`);
                        this.setFieldInvalid(field, fieldRule);
                        return;
                    }
                    const result = fieldRule.validator(elemValue, this.fields);
                    if (typeof result !== "boolean" && typeof result !== "function") console.error(`Validator return value for [${field}] field should be boolean or function. It will be cast to boolean.`);
                    if (typeof result === "function") {
                        if (afterInputChanged) this.fields[field].asyncCheckPending = true;
                        else {
                            this.fields[field].asyncCheckPending = false;
                            const promise = result();
                            if (!isPromise(promise)) {
                                console.error(`Validator function for custom rule for [${field}] field should return a Promise. This field will be always invalid.`);
                                this.setFieldInvalid(field, fieldRule);
                                return;
                            }
                            return promise.then((resp)=>{
                                if (!resp) this.setFieldInvalid(field, fieldRule);
                            }).catch(()=>{
                                this.setFieldInvalid(field, fieldRule);
                            });
                        }
                    }
                    if (!result) this.setFieldInvalid(field, fieldRule);
                }
        }
    }
    validateField(fieldName, afterInputChanged = false) {
        var _a;
        const field = this.fields[fieldName];
        field.isValid = true;
        const promises = [];
        [
            ...field.rules
        ].reverse().forEach((rule)=>{
            const res = this.validateFieldRule(fieldName, field.elem, rule, afterInputChanged);
            if (isPromise(res)) promises.push(res);
        });
        if (field.isValid) this.setFieldValid(fieldName, (_a = field.config) == null ? void 0 : _a.successMessage);
        return Promise.allSettled(promises);
    }
    revalidateField(field) {
        if (typeof field !== "string") throw Error(`Field selector is not valid. Please specify a string selector.`);
        if (!this.fields[field]) {
            console.error(`Field not found. Check the field selector.`);
            return Promise.reject();
        }
        return new Promise((resolve)=>{
            this.validateField(field, true).finally(()=>{
                this.clearFieldError(field);
                this.clearFieldLabel(field);
                this.renderFieldError(field);
                resolve(!!this.fields[field].isValid);
            });
        });
    }
    validateGroup(groupName, group) {
        const promises = [];
        [
            ...group.rules
        ].reverse().forEach((rule)=>{
            const res = this.validateGroupRule(groupName, group.type, group.elems, rule);
            if (isPromise(res)) promises.push(res);
        });
        return Promise.allSettled(promises);
    }
    focusInvalidField() {
        for(const fieldName in this.fields){
            const field = this.fields[fieldName];
            if (!field.isValid) {
                setTimeout(()=>field.elem.focus()
                , 0);
                break;
            }
        }
    }
    afterSubmitValidation(forceRevalidation = false) {
        this.renderErrors(forceRevalidation);
        if (this.globalConfig.focusInvalidField) this.focusInvalidField();
    }
    validate(forceRevalidation = false) {
        return new Promise((resolve)=>{
            const promises = [];
            Object.keys(this.fields).forEach((fieldName)=>{
                const promise = this.validateField(fieldName);
                if (isPromise(promise)) promises.push(promise);
            });
            Object.keys(this.groupFields).forEach((groupName)=>{
                const group = this.groupFields[groupName];
                const promise = this.validateGroup(groupName, group);
                if (isPromise(promise)) promises.push(promise);
            });
            if (promises.length) Promise.allSettled(promises).then(()=>{
                this.afterSubmitValidation(forceRevalidation);
                resolve(true);
            });
            else {
                this.afterSubmitValidation(forceRevalidation);
                resolve(false);
            }
        });
    }
    revalidate() {
        return new Promise((resolve)=>{
            this.validateHandler(void 0, true).finally(()=>{
                if (this.globalConfig.focusInvalidField) this.focusInvalidField();
                resolve(this.isValid);
            });
        });
    }
    validateHandler(ev, forceRevalidation = false) {
        if (this.globalConfig.lockForm) this.lockForm();
        return this.validate(forceRevalidation).finally(()=>{
            var _a, _b;
            if (this.globalConfig.lockForm) this.unlockForm();
            if (this.isValid) (_a = this.onSuccessCallback) == null || _a.call(this, ev);
            else (_b = this.onFailCallback) == null || _b.call(this, this.fields, this.groupFields);
        });
    }
    setForm(form) {
        this.form = form;
        this.form.setAttribute("novalidate", "novalidate");
        this.removeListener("submit", this.form, this.formSubmitHandler);
        this.addListener("submit", this.form, this.formSubmitHandler);
    }
    addListener(type, elem, handler) {
        elem.addEventListener(type, handler);
        this.eventListeners.push({
            type,
            elem,
            func: handler
        });
    }
    removeListener(type, elem, handler) {
        elem.removeEventListener(type, handler);
        this.eventListeners = this.eventListeners.filter((item)=>item.type !== type || item.elem !== elem
        );
    }
    addField(field, rules, config) {
        if (typeof field !== "string") throw Error(`Field selector is not valid. Please specify a string selector.`);
        const elem = this.form.querySelector(field);
        if (!elem) throw Error(`Field with ${field} selector not found! Please check the field selector.`);
        if (!Array.isArray(rules) || !rules.length) throw Error(`Rules argument for the field [${field}] should be an array and should contain at least 1 element.`);
        rules.forEach((item)=>{
            if (!("rule" in item || "validator" in item || "plugin" in item)) throw Error(`Rules argument for the field [${field}] must contain at least one rule or validator property.`);
            if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
        });
        this.fields[field] = {
            elem,
            rules,
            isValid: void 0,
            config
        };
        this.setListeners(elem);
        if (this.isSubmitted) this.validate();
        return this;
    }
    removeField(field) {
        if (typeof field !== "string") throw Error(`Field selector is not valid. Please specify a string selector.`);
        if (!this.fields[field]) {
            console.error(`Field not found. Check the field selector.`);
            return this;
        }
        const type = this.getListenerType(this.fields[field].elem.type);
        this.removeListener(type, this.fields[field].elem, this.handlerChange);
        this.clearErrors();
        delete this.fields[field];
        return this;
    }
    removeGroup(group) {
        if (typeof group !== "string") throw Error(`Group selector is not valid. Please specify a string selector.`);
        if (!this.groupFields[group]) {
            console.error(`Group not found. Check the group selector.`);
            return this;
        }
        this.groupFields[group].elems.forEach((elem)=>{
            const type = this.getListenerType(elem.type);
            this.removeListener(type, elem, this.handlerChange);
        });
        this.clearErrors();
        delete this.groupFields[group];
        return this;
    }
    addRequiredGroup(groupField, errorMessage, config, successMessage) {
        if (typeof groupField !== "string") throw Error(`Group selector is not valid. Please specify a string selector.`);
        const elem = this.form.querySelector(groupField);
        if (!elem) throw Error(`Group with ${groupField} selector not found! Please check the group selector.`);
        const inputs = elem.querySelectorAll("input");
        const isRadio = Array.from(inputs).every((input)=>input.type === "radio"
        );
        const isCheckbox = Array.from(inputs).every((input)=>input.type === "checkbox"
        );
        if (!isRadio && !isCheckbox) throw Error(`Group should contain either or checkboxes or radio buttons`);
        this.groupFields[groupField] = {
            rules: [
                {
                    rule: GroupRules.Required,
                    errorMessage,
                    successMessage
                }
            ],
            groupElem: elem,
            elems: Array.from(inputs),
            type: isRadio ? "radio" : "checkbox",
            isDirty: false,
            isValid: void 0,
            config
        };
        inputs.forEach((input)=>{
            this.setListeners(input);
        });
        return this;
    }
    getListenerType(type) {
        switch(type){
            case "checkbox":
            case "select-one":
            case "file":
            case "radio":
                return "change";
            default:
                return "input";
        }
    }
    setListeners(elem) {
        const type = this.getListenerType(elem.type);
        this.removeListener(type, elem, this.handlerChange);
        this.addListener(type, elem, this.handlerChange);
    }
    clearFieldLabel(fieldName) {
        var _a, _b;
        (_a = this.errorLabels[fieldName]) == null || _a.remove();
        (_b = this.successLabels[fieldName]) == null || _b.remove();
    }
    clearFieldError(fieldName) {
        var _a, _b, _c, _d;
        const field = this.fields[fieldName];
        const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(errorStyle).forEach((key)=>{
            field.elem.style[key] = "";
        });
        const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(successStyle).forEach((key)=>{
            field.elem.style[key] = "";
        });
        field.elem.classList.remove(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass, ((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass);
    }
    clearErrors() {
        var _a, _b;
        Object.keys(this.errorLabels).forEach((key)=>this.errorLabels[key].remove()
        );
        Object.keys(this.successLabels).forEach((key)=>this.successLabels[key].remove()
        );
        for(const fieldName in this.fields)this.clearFieldError(fieldName);
        for(const groupName in this.groupFields){
            const group = this.groupFields[groupName];
            const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
            Object.keys(errorStyle).forEach((key)=>{
                group.elems.forEach((elem)=>{
                    var _a2;
                    elem.style[key] = "";
                    elem.classList.remove(((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
                });
            });
            const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
            Object.keys(successStyle).forEach((key)=>{
                group.elems.forEach((elem)=>{
                    var _a2;
                    elem.style[key] = "";
                    elem.classList.remove(((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass);
                });
            });
        }
        this.tooltips = [];
    }
    isTooltip() {
        return !!this.globalConfig.tooltip;
    }
    lockForm() {
        const elems = this.form.querySelectorAll("input, textarea, button, select");
        for(let i = 0, len = elems.length; i < len; ++i){
            elems[i].setAttribute("disabled", "disabled");
            elems[i].style.pointerEvents = "none";
            elems[i].style.webkitFilter = "grayscale(100%)";
            elems[i].style.filter = "grayscale(100%)";
        }
    }
    unlockForm() {
        const elems = this.form.querySelectorAll("input, textarea, button, select");
        for(let i = 0, len = elems.length; i < len; ++i){
            elems[i].removeAttribute("disabled");
            elems[i].style.pointerEvents = "";
            elems[i].style.webkitFilter = "";
            elems[i].style.filter = "";
        }
    }
    renderTooltip(elem, errorLabel, position) {
        var _a;
        const { top , left , width , height  } = elem.getBoundingClientRect();
        const errorLabelRect = errorLabel.getBoundingClientRect();
        const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
        switch(pos){
            case "left":
                errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
                break;
            case "top":
                errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
                errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                break;
            case "right":
                errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
                errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
                break;
            case "bottom":
                errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
                errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
                break;
        }
        errorLabel.dataset.direction = pos;
        const refresh = ()=>{
            this.renderTooltip(elem, errorLabel, position);
        };
        return {
            refresh
        };
    }
    createErrorLabelElem(name, errorMessage, config) {
        const errorLabel = document.createElement("div");
        errorLabel.innerHTML = errorMessage;
        const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
        Object.assign(errorLabel.style, customErrorLabelStyle);
        errorLabel.classList.add((config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass, "just-validate-error-label");
        if (this.isTooltip()) errorLabel.dataset.tooltip = "true";
        if (this.globalConfig.testingMode) errorLabel.dataset.testId = `error-label-${name}`;
        this.errorLabels[name] = errorLabel;
        return errorLabel;
    }
    createSuccessLabelElem(name, successMessage, config) {
        if (successMessage === void 0) return null;
        const successLabel = document.createElement("div");
        successLabel.innerHTML = successMessage;
        const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
        Object.assign(successLabel.style, customSuccessLabelStyle);
        successLabel.classList.add((config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass, "just-validate-success-label");
        if (this.globalConfig.testingMode) successLabel.dataset.testId = `success-label-${name}`;
        this.successLabels[name] = successLabel;
        return successLabel;
    }
    renderErrorsContainer(label, errorsContainer) {
        const container = errorsContainer || this.globalConfig.errorsContainer;
        if (typeof container === "string") {
            const elem = this.form.querySelector(container);
            if (elem) {
                elem.appendChild(label);
                return true;
            } else console.error(`Error container with ${container} selector not found. Errors will be rendered as usual`);
        }
        if (container instanceof Element) {
            container.appendChild(label);
            return true;
        }
        if (container !== void 0) console.error(`Error container not found. It should be a string or existing Element. Errors will be rendered as usual`);
        return false;
    }
    renderGroupLabel(elem, label, errorsContainer, isSuccess) {
        if (!isSuccess) {
            const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
            if (renderedInErrorsContainer) return;
        }
        elem.appendChild(label);
    }
    renderFieldLabel(elem, label, errorsContainer, isSuccess) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (!isSuccess) {
            const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
            if (renderedInErrorsContainer) return;
        }
        if (elem.type === "checkbox" || elem.type === "radio") {
            const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
            if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null || _d.appendChild(label);
            else if (labelElem) (_e = labelElem.parentElement) == null || _e.appendChild(label);
            else (_f = elem.parentElement) == null || _f.appendChild(label);
        } else (_g = elem.parentElement) == null || _g.appendChild(label);
    }
    renderFieldError(fieldName) {
        var _a, _b, _c, _d, _e, _f;
        const field = this.fields[fieldName];
        if (field.isValid) {
            if (!field.asyncCheckPending) {
                const successLabel = this.createSuccessLabelElem(fieldName, field.successMessage, field.config);
                if (successLabel) this.renderFieldLabel(field.elem, successLabel, (_a = field.config) == null ? void 0 : _a.errorsContainer, true);
                field.elem.classList.add(((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass);
            }
            return;
        }
        this.isValid = false;
        field.elem.classList.add(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
        const errorLabel = this.createErrorLabelElem(fieldName, field.errorMessage, field.config);
        this.renderFieldLabel(field.elem, errorLabel, (_d = field.config) == null ? void 0 : _d.errorsContainer);
        if (this.isTooltip()) this.tooltips.push(this.renderTooltip(field.elem, errorLabel, (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position));
    }
    renderErrors(forceRevalidation = false) {
        var _a, _b, _c, _d;
        if (!this.isSubmitted && !forceRevalidation) return;
        this.clearErrors();
        this.isValid = true;
        for(const groupName in this.groupFields){
            const group = this.groupFields[groupName];
            if (group.isValid) {
                group.elems.forEach((elem)=>{
                    var _a2, _b2;
                    Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
                    elem.classList.add(((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass);
                });
                const successLabel = this.createSuccessLabelElem(groupName, group.successMessage, group.config);
                if (successLabel) this.renderGroupLabel(group.groupElem, successLabel, (_a = group.config) == null ? void 0 : _a.errorsContainer, true);
                continue;
            }
            this.isValid = false;
            group.elems.forEach((elem)=>{
                var _a2, _b2;
                Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
                elem.classList.add(((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass);
            });
            const errorLabel = this.createErrorLabelElem(groupName, group.errorMessage, group.config);
            this.renderGroupLabel(group.groupElem, errorLabel, (_b = group.config) == null ? void 0 : _b.errorsContainer);
            if (this.isTooltip()) this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position));
        }
        for(const fieldName in this.fields)this.renderFieldError(fieldName);
    }
    destroy() {
        this.eventListeners.forEach((event)=>{
            this.removeListener(event.type, event.elem, event.func);
        });
        Object.keys(this.customStyleTags).forEach((key)=>{
            this.customStyleTags[key].remove();
        });
        this.clearErrors();
        if (this.globalConfig.lockForm) this.unlockForm();
    }
    refresh() {
        this.destroy();
        if (!this.form) console.error("Cannot initialize the library! Form is not defined");
        else {
            this.initialize(this.form, this.globalConfig);
            Object.keys(this.fields).forEach((key)=>{
                this.addField(key, [
                    ...this.fields[key].rules
                ], this.fields[key].config);
            });
        }
    }
    setCurrentLocale(locale) {
        if (typeof locale !== "string" && locale !== void 0) {
            console.error("Current locale should be a string");
            return;
        }
        this.currentLocale = locale;
        if (this.isSubmitted) this.validate();
    }
    onSuccess(callback) {
        this.onSuccessCallback = callback;
        return this;
    }
    onFail(callback) {
        this.onFailCallback = callback;
        return this;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["avGq0","ib7vD"], "ib7vD", "parcelRequire1ee4")

//# sourceMappingURL=booking.6453dc4f.js.map
