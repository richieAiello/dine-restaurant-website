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
var _justValidatePluginDate = require("just-validate-plugin-date");
var _justValidatePluginDateDefault = parcelHelpers.interopDefault(_justValidatePluginDate);
// btn--day-night variables
const dayNightBtn = document.querySelector('.btn--day-night');
const dayNightText = document.querySelector('.day-night__text');
const dayNightArrow = document.querySelector('.day-night__arrow');
const dayNightContainer = document.querySelector('.day-night-container');
// btn--am variables
const amBtn = document.querySelector('.btn--am');
const amCheck = document.querySelector('.btn--am .check');
// btn--pm variables
const pmBtn = document.querySelector('.btn--pm');
const pmCheck = document.querySelector('.btn--pm .check');
// customer total variables
const subtractBtn = document.querySelector('.btn--subtract');
const addBtn = document.querySelector('.btn--add');
const customerTotal = document.querySelector('.customer__total');
const customerText = document.querySelector('.customer__text');
/**********************************************
    EVENT LISTENERS
**********************************************/ dayNightBtn.addEventListener('click', (e)=>{
    dayNightArrow.classList.toggle('flip');
    dayNightContainer.classList.toggle('hidden');
});
amBtn.addEventListener('click', (e)=>{
    dayNightText.textContent = 'AM';
    amCheck.classList.remove('hidden');
    pmCheck.classList.add('hidden');
});
pmBtn.addEventListener('click', (e)=>{
    dayNightText.textContent = 'PM';
    pmCheck.classList.remove('hidden');
    amCheck.classList.add('hidden');
});
subtractBtn.addEventListener('click', (e)=>{
    let total = Number.parseInt(customerTotal.textContent, 10);
    if (total > 1) {
        total--;
        customerTotal.textContent = total;
    }
    if (total === 1) customerText.textContent = 'Person';
});
addBtn.addEventListener('click', (e)=>{
    let total = Number.parseInt(customerTotal.textContent, 10);
    if (total < 30) {
        total++;
        customerTotal.textContent = total;
        customerText.textContent = 'People';
    }
});
/**********************************************
    FORM VALIDATION
**********************************************/ const validation = new _justValidateDefault.default('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
        fontSize: '12px',
        color: "#dc3545"
    },
    focusInvalidField: true
});
validation.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'This field is required'
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
        errorMessage: 'This field is required'
    },
    {
        rule: 'email',
        errorMessage: 'Please enter a valid email address e.g. (*********@gmail.com)'
    }, 
]).addField('#date', [
    {
        plugin: _justValidatePluginDateDefault.default(()=>({
                required: true,
                format: 'MM dd yyyy',
                isBefore: '01 01 2025',
                isAfter: '12 31 2021'
            })
        ),
        errorMessage: 'Date should be between 01 01 2022 and 12 31 2024'
    }, 
]) // .onSuccess(e => {
 //     console.log('Passed', e);
 // })
;

},{"just-validate":"gcCDD","just-validate-plugin-date":"hAAwj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gcCDD":[function(require,module,exports) {
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

},{}],"hAAwj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pluginDate
);
var formatDistanceLocale = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
};
var formatDistance = function(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") result = tokenValue;
    else if (count === 1) result = tokenValue.one;
    else result = tokenValue.other.replace("{{count}}", count.toString());
    if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) return "in " + result;
        else return result + " ago";
    }
    return result;
};
var formatDistance$1 = formatDistance;
function buildFormatLongFn(args) {
    return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
var dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
};
var timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
};
var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
var formatLong = {
    date: buildFormatLongFn({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: buildFormatLongFn({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
var formatLong$1 = formatLong;
var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
};
var formatRelative = function(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
};
var formatRelative$1 = formatRelative;
function buildLocalizeFn(args) {
    return function(dirtyIndex, dirtyOptions) {
        var options = dirtyOptions || {};
        var context = options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
            var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
            var width = options.width ? String(options.width) : defaultWidth;
            valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
            var _defaultWidth = args.defaultWidth;
            var _width = options.width ? String(options.width) : args.defaultWidth;
            valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
    };
}
var eraValues = {
    narrow: [
        "B",
        "A"
    ],
    abbreviated: [
        "BC",
        "AD"
    ],
    wide: [
        "Before Christ",
        "Anno Domini"
    ]
};
var quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1st quarter",
        "2nd quarter",
        "3rd quarter",
        "4th quarter"
    ]
};
var monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "A",
        "M",
        "J",
        "J",
        "A",
        "S",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
};
var dayValues = {
    narrow: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],
    short: [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ],
    abbreviated: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]
};
var dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
};
var formattingDayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
};
var ordinalNumber = function(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) switch(rem100 % 10){
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
    }
    return number + "th";
};
var localize = {
    ordinalNumber,
    era: buildLocalizeFn({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function(quarter) {
            return quarter - 1;
        }
    }),
    month: buildLocalizeFn({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
var localize$1 = localize;
function buildMatchFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
            return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
function findKey(object, predicate) {
    for(var key in object){
        if (object.hasOwnProperty(key) && predicate(object[key])) return key;
    }
    return void 0;
}
function findIndex(array, predicate) {
    for(var key = 0; key < array.length; key++){
        if (predicate(array[key])) return key;
    }
    return void 0;
}
function buildMatchPatternFn(args) {
    return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult) return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult) return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
            value,
            rest
        };
    };
}
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
    any: [
        /^b/i,
        /^(a|c)/i
    ]
};
var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
};
var match = {
    ordinalNumber: buildMatchPatternFn({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function(value) {
            return parseInt(value, 10);
        }
    }),
    era: buildMatchFn({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function(index) {
            return index + 1;
        }
    }),
    month: buildMatchFn({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: buildMatchFn({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
var match$1 = match;
var locale = {
    code: "en-US",
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$1,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
var defaultLocale = locale;
function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) return NaN;
    var number = Number(dirtyNumber);
    if (isNaN(number)) return number;
    return number < 0 ? Math.ceil(number) : Math.floor(number);
}
function requiredArgs(required, args) {
    if (args.length < required) throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
}
function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") return new Date(argument.getTime());
    else if (typeof argument === "number" || argStr === "[object Number]") return new Date(argument);
    else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
            console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule");
            console.warn(new Error().stack);
        }
        return new Date(NaN);
    }
}
function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
}
function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
}
function assign(target, dirtyObject) {
    if (target == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    dirtyObject = dirtyObject || {};
    for(var property in dirtyObject)if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) target[property] = dirtyObject[property];
    return target;
}
function dateLongFormatter(pattern, formatLong2) {
    switch(pattern){
        case "P":
            return formatLong2.date({
                width: "short"
            });
        case "PP":
            return formatLong2.date({
                width: "medium"
            });
        case "PPP":
            return formatLong2.date({
                width: "long"
            });
        case "PPPP":
        default:
            return formatLong2.date({
                width: "full"
            });
    }
}
function timeLongFormatter(pattern, formatLong2) {
    switch(pattern){
        case "p":
            return formatLong2.time({
                width: "short"
            });
        case "pp":
            return formatLong2.time({
                width: "medium"
            });
        case "ppp":
            return formatLong2.time({
                width: "long"
            });
        case "pppp":
        default:
            return formatLong2.time({
                width: "full"
            });
    }
}
function dateTimeLongFormatter(pattern, formatLong2) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) return dateLongFormatter(pattern, formatLong2);
    var dateTimeFormat;
    switch(datePattern){
        case "P":
            dateTimeFormat = formatLong2.dateTime({
                width: "short"
            });
            break;
        case "PP":
            dateTimeFormat = formatLong2.dateTime({
                width: "medium"
            });
            break;
        case "PPP":
            dateTimeFormat = formatLong2.dateTime({
                width: "long"
            });
            break;
        case "PPPP":
        default:
            dateTimeFormat = formatLong2.dateTime({
                width: "full"
            });
            break;
    }
    return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
}
var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
};
var longFormatters$1 = longFormatters;
function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
}
var protectedDayOfYearTokens = [
    "D",
    "DD"
];
var protectedWeekYearTokens = [
    "YY",
    "YYYY"
];
function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
    if (token === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    else if (token === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
}
function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    requiredArgs(2, arguments);
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeWeekStartsOn = locale2 && locale2.options && locale2.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var date = toDate(dirtyDate);
    var day = toInteger(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
function setUTCISODay(dirtyDate, dirtyDay) {
    requiredArgs(2, arguments);
    var day = toInteger(dirtyDay);
    if (day % 7 === 0) day = day - 7;
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
}
function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
}
function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) return year + 1;
    else if (date.getTime() >= startOfThisYear.getTime()) return year;
    else return year - 1;
}
function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
}
var MILLISECONDS_IN_WEEK$1 = 6048e5;
function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
}
function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeek = toInteger(dirtyISOWeek);
    var diff = getUTCISOWeek(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale2 = options.locale;
    var localeFirstWeekContainsDate = locale2 && locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
}
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}
function setUTCWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var week = toInteger(dirtyWeek);
    var diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
}
var MILLISECONDS_IN_HOUR = 36e5;
var MILLISECONDS_IN_MINUTE = 6e4;
var MILLISECONDS_IN_SECOND = 1e3;
var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
};
var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function parseNumericPattern(pattern, string, valueCallback) {
    var matchResult = string.match(pattern);
    if (!matchResult) return null;
    var value = parseInt(matchResult[0], 10);
    return {
        value: valueCallback ? valueCallback(value) : value,
        rest: string.slice(matchResult[0].length)
    };
}
function parseTimezonePattern(pattern, string) {
    var matchResult = string.match(pattern);
    if (!matchResult) return null;
    if (matchResult[0] === "Z") return {
        value: 0,
        rest: string.slice(1)
    };
    var sign = matchResult[1] === "+" ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
        rest: string.slice(matchResult[0].length)
    };
}
function parseAnyDigitsSigned(string, valueCallback) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}
function parseNDigits(n, string, valueCallback) {
    switch(n){
        case 1:
            return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), string, valueCallback);
    }
}
function parseNDigitsSigned(n, string, valueCallback) {
    switch(n){
        case 1:
            return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);
        case 2:
            return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);
        case 3:
            return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);
        case 4:
            return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);
        default:
            return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), string, valueCallback);
    }
}
function dayPeriodEnumToHours(enumValue) {
    switch(enumValue){
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0;
    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;
    if (absCurrentYear <= 50) result = twoDigitYear || 100;
    else {
        var rangeEnd = absCurrentYear + 50;
        var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
        var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
var DAYS_IN_MONTH = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
var DAYS_IN_MONTH_LEAP_YEAR = [
    31,
    29,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];
function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
var parsers = {
    G: {
        priority: 140,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "G":
                case "GG":
                case "GGG":
                    return match2.era(string, {
                        width: "abbreviated"
                    }) || match2.era(string, {
                        width: "narrow"
                    });
                case "GGGGG":
                    return match2.era(string, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return match2.era(string, {
                        width: "wide"
                    }) || match2.era(string, {
                        width: "abbreviated"
                    }) || match2.era(string, {
                        width: "narrow"
                    });
            }
        },
        set: function(date, flags, value, _options) {
            flags.era = value;
            date.setUTCFullYear(value, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "R",
            "u",
            "t",
            "T"
        ]
    },
    y: {
        priority: 130,
        parse: function(string, token, match2, _options) {
            var valueCallback = function(year) {
                return {
                    year,
                    isTwoDigitYear: token === "yy"
                };
            };
            switch(token){
                case "y":
                    return parseNDigits(4, string, valueCallback);
                case "yo":
                    return match2.ordinalNumber(string, {
                        unit: "year",
                        valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function(_date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function(date, flags, value, _options) {
            var currentYear = date.getUTCFullYear();
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
                date.setUTCHours(0, 0, 0, 0);
                return date;
            }
            var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "u",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    Y: {
        priority: 130,
        parse: function(string, token, match2, _options) {
            var valueCallback = function(year) {
                return {
                    year,
                    isTwoDigitYear: token === "YY"
                };
            };
            switch(token){
                case "Y":
                    return parseNDigits(4, string, valueCallback);
                case "Yo":
                    return match2.ordinalNumber(string, {
                        unit: "year",
                        valueCallback
                    });
                default:
                    return parseNDigits(token.length, string, valueCallback);
            }
        },
        validate: function(_date, value, _options) {
            return value.isTwoDigitYear || value.year > 0;
        },
        set: function(date, flags, value, options) {
            var currentYear = getUTCWeekYear(date, options);
            if (value.isTwoDigitYear) {
                var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
                date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
                date.setUTCHours(0, 0, 0, 0);
                return startOfUTCWeek(date, options);
            }
            var year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
            date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
            date.setUTCHours(0, 0, 0, 0);
            return startOfUTCWeek(date, options);
        },
        incompatibleTokens: [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]
    },
    R: {
        priority: 130,
        parse: function(string, token, _match, _options) {
            if (token === "R") return parseNDigitsSigned(4, string);
            return parseNDigitsSigned(token.length, string);
        },
        set: function(_date, _flags, value, _options) {
            var firstWeekOfYear = new Date(0);
            firstWeekOfYear.setUTCFullYear(value, 0, 4);
            firstWeekOfYear.setUTCHours(0, 0, 0, 0);
            return startOfUTCISOWeek(firstWeekOfYear);
        },
        incompatibleTokens: [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    u: {
        priority: 130,
        parse: function(string, token, _match, _options) {
            if (token === "u") return parseNDigitsSigned(4, string);
            return parseNDigitsSigned(token.length, string);
        },
        set: function(date, _flags, value, _options) {
            date.setUTCFullYear(value, 0, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "G",
            "y",
            "Y",
            "R",
            "w",
            "I",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    Q: {
        priority: 120,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "Q":
                case "QQ":
                    return parseNDigits(token.length, string);
                case "Qo":
                    return match2.ordinalNumber(string, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return match2.quarter(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.quarter(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return match2.quarter(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return match2.quarter(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.quarter(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.quarter(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    q: {
        priority: 120,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "q":
                case "qq":
                    return parseNDigits(token.length, string);
                case "qo":
                    return match2.ordinalNumber(string, {
                        unit: "quarter"
                    });
                case "qqq":
                    return match2.quarter(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.quarter(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqqq":
                    return match2.quarter(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return match2.quarter(string, {
                        width: "wide",
                        context: "standalone"
                    }) || match2.quarter(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.quarter(string, {
                        width: "narrow",
                        context: "standalone"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 4;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth((value - 1) * 3, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    M: {
        priority: 110,
        parse: function(string, token, match2, _options) {
            var valueCallback = function(value) {
                return value - 1;
            };
            switch(token){
                case "M":
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                case "MM":
                    return parseNDigits(2, string, valueCallback);
                case "Mo":
                    return match2.ordinalNumber(string, {
                        unit: "month",
                        valueCallback
                    });
                case "MMM":
                    return match2.month(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.month(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMMM":
                    return match2.month(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return match2.month(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.month(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.month(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    L: {
        priority: 110,
        parse: function(string, token, match2, _options) {
            var valueCallback = function(value) {
                return value - 1;
            };
            switch(token){
                case "L":
                    return parseNumericPattern(numericPatterns.month, string, valueCallback);
                case "LL":
                    return parseNDigits(2, string, valueCallback);
                case "Lo":
                    return match2.ordinalNumber(string, {
                        unit: "month",
                        valueCallback
                    });
                case "LLL":
                    return match2.month(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.month(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLLL":
                    return match2.month(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return match2.month(string, {
                        width: "wide",
                        context: "standalone"
                    }) || match2.month(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.month(string, {
                        width: "narrow",
                        context: "standalone"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(value, 1);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    w: {
        priority: 100,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "w":
                    return parseNumericPattern(numericPatterns.week, string);
                case "wo":
                    return match2.ordinalNumber(string, {
                        unit: "week"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function(date, _flags, value, options) {
            return startOfUTCWeek(setUTCWeek(date, value, options), options);
        },
        incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T"
        ]
    },
    I: {
        priority: 100,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "I":
                    return parseNumericPattern(numericPatterns.week, string);
                case "Io":
                    return match2.ordinalNumber(string, {
                        unit: "week"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 53;
        },
        set: function(date, _flags, value, options) {
            return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
        },
        incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    d: {
        priority: 90,
        subPriority: 1,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "d":
                    return parseNumericPattern(numericPatterns.date, string);
                case "do":
                    return match2.ordinalNumber(string, {
                        unit: "date"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            var month = date.getUTCMonth();
            if (isLeapYear) return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
            else return value >= 1 && value <= DAYS_IN_MONTH[month];
        },
        set: function(date, _flags, value, _options) {
            date.setUTCDate(value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    D: {
        priority: 90,
        subPriority: 1,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "D":
                case "DD":
                    return parseNumericPattern(numericPatterns.dayOfYear, string);
                case "Do":
                    return match2.ordinalNumber(string, {
                        unit: "date"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(date, value, _options) {
            var year = date.getUTCFullYear();
            var isLeapYear = isLeapYearIndex(year);
            if (isLeapYear) return value >= 1 && value <= 366;
            else return value >= 1 && value <= 365;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMonth(0, value);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    E: {
        priority: 90,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "E":
                case "EE":
                case "EEE":
                    return match2.day(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEE":
                    return match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return match2.day(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "D",
            "i",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    e: {
        priority: 90,
        parse: function(string, token, match2, options) {
            var valueCallback = function(value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch(token){
                case "e":
                case "ee":
                    return parseNDigits(token.length, string, valueCallback);
                case "eo":
                    return match2.ordinalNumber(string, {
                        unit: "day",
                        valueCallback
                    });
                case "eee":
                    return match2.day(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeee":
                    return match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return match2.day(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T"
        ]
    },
    c: {
        priority: 90,
        parse: function(string, token, match2, options) {
            var valueCallback = function(value) {
                var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
                return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
            };
            switch(token){
                case "c":
                case "cc":
                    return parseNDigits(token.length, string, valueCallback);
                case "co":
                    return match2.ordinalNumber(string, {
                        unit: "day",
                        valueCallback
                    });
                case "ccc":
                    return match2.day(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "short",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "ccccc":
                    return match2.day(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return match2.day(string, {
                        width: "short",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return match2.day(string, {
                        width: "wide",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "abbreviated",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "short",
                        context: "standalone"
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "standalone"
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 6;
        },
        set: function(date, _flags, value, options) {
            date = setUTCDay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "e",
            "t",
            "T"
        ]
    },
    i: {
        priority: 90,
        parse: function(string, token, match2, _options) {
            var valueCallback = function(value) {
                if (value === 0) return 7;
                return value;
            };
            switch(token){
                case "i":
                case "ii":
                    return parseNDigits(token.length, string);
                case "io":
                    return match2.ordinalNumber(string, {
                        unit: "day"
                    });
                case "iii":
                    return match2.day(string, {
                        width: "abbreviated",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting",
                        valueCallback
                    });
                case "iiiii":
                    return match2.day(string, {
                        width: "narrow",
                        context: "formatting",
                        valueCallback
                    });
                case "iiiiii":
                    return match2.day(string, {
                        width: "short",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting",
                        valueCallback
                    });
                case "iiii":
                default:
                    return match2.day(string, {
                        width: "wide",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "abbreviated",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "short",
                        context: "formatting",
                        valueCallback
                    }) || match2.day(string, {
                        width: "narrow",
                        context: "formatting",
                        valueCallback
                    });
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 7;
        },
        set: function(date, _flags, value, options) {
            date = setUTCISODay(date, value, options);
            date.setUTCHours(0, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T"
        ]
    },
    a: {
        priority: 80,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "a":
                case "aa":
                case "aaa":
                    return match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaaa":
                    return match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return match2.dayPeriod(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "b",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]
    },
    b: {
        priority: 80,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "b":
                case "bb":
                case "bbb":
                    return match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbbb":
                    return match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return match2.dayPeriod(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "a",
            "B",
            "H",
            "k",
            "t",
            "T"
        ]
    },
    B: {
        priority: 80,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "B":
                case "BB":
                case "BBB":
                    return match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBBB":
                    return match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return match2.dayPeriod(string, {
                        width: "wide",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "abbreviated",
                        context: "formatting"
                    }) || match2.dayPeriod(string, {
                        width: "narrow",
                        context: "formatting"
                    });
            }
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "a",
            "b",
            "t",
            "T"
        ]
    },
    h: {
        priority: 70,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "h":
                    return parseNumericPattern(numericPatterns.hour12h, string);
                case "ho":
                    return match2.ordinalNumber(string, {
                        unit: "hour"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 12;
        },
        set: function(date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
            else if (!isPM && value === 12) date.setUTCHours(0, 0, 0, 0);
            else date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "H",
            "K",
            "k",
            "t",
            "T"
        ]
    },
    H: {
        priority: 70,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "H":
                    return parseNumericPattern(numericPatterns.hour23h, string);
                case "Ho":
                    return match2.ordinalNumber(string, {
                        unit: "hour"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 23;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "a",
            "b",
            "h",
            "K",
            "k",
            "t",
            "T"
        ]
    },
    K: {
        priority: 70,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "K":
                    return parseNumericPattern(numericPatterns.hour11h, string);
                case "Ko":
                    return match2.ordinalNumber(string, {
                        unit: "hour"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 11;
        },
        set: function(date, _flags, value, _options) {
            var isPM = date.getUTCHours() >= 12;
            if (isPM && value < 12) date.setUTCHours(value + 12, 0, 0, 0);
            else date.setUTCHours(value, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "h",
            "H",
            "k",
            "t",
            "T"
        ]
    },
    k: {
        priority: 70,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "k":
                    return parseNumericPattern(numericPatterns.hour24h, string);
                case "ko":
                    return match2.ordinalNumber(string, {
                        unit: "hour"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 1 && value <= 24;
        },
        set: function(date, _flags, value, _options) {
            var hours = value <= 24 ? value % 24 : value;
            date.setUTCHours(hours, 0, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "a",
            "b",
            "h",
            "H",
            "K",
            "t",
            "T"
        ]
    },
    m: {
        priority: 60,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "m":
                    return parseNumericPattern(numericPatterns.minute, string);
                case "mo":
                    return match2.ordinalNumber(string, {
                        unit: "minute"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMinutes(value, 0, 0);
            return date;
        },
        incompatibleTokens: [
            "t",
            "T"
        ]
    },
    s: {
        priority: 50,
        parse: function(string, token, match2, _options) {
            switch(token){
                case "s":
                    return parseNumericPattern(numericPatterns.second, string);
                case "so":
                    return match2.ordinalNumber(string, {
                        unit: "second"
                    });
                default:
                    return parseNDigits(token.length, string);
            }
        },
        validate: function(_date, value, _options) {
            return value >= 0 && value <= 59;
        },
        set: function(date, _flags, value, _options) {
            date.setUTCSeconds(value, 0);
            return date;
        },
        incompatibleTokens: [
            "t",
            "T"
        ]
    },
    S: {
        priority: 30,
        parse: function(string, token, _match, _options) {
            var valueCallback = function(value) {
                return Math.floor(value * Math.pow(10, -token.length + 3));
            };
            return parseNDigits(token.length, string, valueCallback);
        },
        set: function(date, _flags, value, _options) {
            date.setUTCMilliseconds(value);
            return date;
        },
        incompatibleTokens: [
            "t",
            "T"
        ]
    },
    X: {
        priority: 10,
        parse: function(string, token, _match, _options) {
            switch(token){
                case "X":
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case "XX":
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case "XXXX":
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case "XXXXX":
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case "XXX":
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function(date, flags, value, _options) {
            if (flags.timestampIsSet) return date;
            return new Date(date.getTime() - value);
        },
        incompatibleTokens: [
            "t",
            "T",
            "x"
        ]
    },
    x: {
        priority: 10,
        parse: function(string, token, _match, _options) {
            switch(token){
                case "x":
                    return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);
                case "xx":
                    return parseTimezonePattern(timezonePatterns.basic, string);
                case "xxxx":
                    return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);
                case "xxxxx":
                    return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);
                case "xxx":
                default:
                    return parseTimezonePattern(timezonePatterns.extended, string);
            }
        },
        set: function(date, flags, value, _options) {
            if (flags.timestampIsSet) return date;
            return new Date(date.getTime() - value);
        },
        incompatibleTokens: [
            "t",
            "T",
            "X"
        ]
    },
    t: {
        priority: 40,
        parse: function(string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function(_date, _flags, value, _options) {
            return [
                new Date(value * 1e3),
                {
                    timestampIsSet: true
                }
            ];
        },
        incompatibleTokens: "*"
    },
    T: {
        priority: 20,
        parse: function(string, _token, _match, _options) {
            return parseAnyDigitsSigned(string);
        },
        set: function(_date, _flags, value, _options) {
            return [
                new Date(value),
                {
                    timestampIsSet: true
                }
            ];
        },
        incompatibleTokens: "*"
    }
};
var parsers$1 = parsers;
var TIMEZONE_UNIT_PRIORITY = 10;
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
    requiredArgs(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var options = dirtyOptions || {};
    var locale2 = options.locale || defaultLocale;
    if (!locale2.match) throw new RangeError("locale must contain match property");
    var localeFirstWeekContainsDate = locale2.options && locale2.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger(options.firstWeekContainsDate);
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var localeWeekStartsOn = locale2.options && locale2.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger(options.weekStartsOn);
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (formatString === "") {
        if (dateString === "") return toDate(dirtyReferenceDate);
        else return new Date(NaN);
    }
    var subFnOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale: locale2
    };
    var setters = [
        {
            priority: TIMEZONE_UNIT_PRIORITY,
            subPriority: -1,
            set: dateToSystemTimezone,
            index: 0
        }
    ];
    var i;
    var tokens = formatString.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter2 = substring[0];
        if (firstCharacter2 === "p" || firstCharacter2 === "P") {
            var longFormatter = longFormatters$1[firstCharacter2];
            return longFormatter(substring, locale2.formatLong, subFnOptions);
        }
        return substring;
    }).join("").match(formattingTokensRegExp);
    var usedTokens = [];
    for(i = 0; i < tokens.length; i++){
        var token = tokens[i];
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) throwProtectedError(token, formatString, dirtyDateString);
        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) throwProtectedError(token, formatString, dirtyDateString);
        var firstCharacter = token[0];
        var parser = parsers$1[firstCharacter];
        if (parser) {
            var incompatibleTokens = parser.incompatibleTokens;
            if (Array.isArray(incompatibleTokens)) {
                var incompatibleToken = void 0;
                for(var _i = 0; _i < usedTokens.length; _i++){
                    var usedToken = usedTokens[_i].token;
                    if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
                        incompatibleToken = usedTokens[_i];
                        break;
                    }
                }
                if (incompatibleToken) throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
            } else if (parser.incompatibleTokens === "*" && usedTokens.length) throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
            usedTokens.push({
                token: firstCharacter,
                fullToken: token
            });
            var parseResult = parser.parse(dateString, token, locale2.match, subFnOptions);
            if (!parseResult) return new Date(NaN);
            setters.push({
                priority: parser.priority,
                subPriority: parser.subPriority || 0,
                set: parser.set,
                validate: parser.validate,
                value: parseResult.value,
                index: setters.length
            });
            dateString = parseResult.rest;
        } else {
            if (firstCharacter.match(unescapedLatinCharacterRegExp)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
            if (token === "''") token = "'";
            else if (firstCharacter === "'") token = cleanEscapedString(token);
            if (dateString.indexOf(token) === 0) dateString = dateString.slice(token.length);
            else return new Date(NaN);
        }
    }
    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) return new Date(NaN);
    var uniquePrioritySetters = setters.map(function(setter2) {
        return setter2.priority;
    }).sort(function(a, b) {
        return b - a;
    }).filter(function(priority, index, array) {
        return array.indexOf(priority) === index;
    }).map(function(priority) {
        return setters.filter(function(setter2) {
            return setter2.priority === priority;
        }).sort(function(a, b) {
            return b.subPriority - a.subPriority;
        });
    }).map(function(setterArray) {
        return setterArray[0];
    });
    var date = toDate(dirtyReferenceDate);
    if (isNaN(date)) return new Date(NaN);
    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var flags = {};
    for(i = 0; i < uniquePrioritySetters.length; i++){
        var setter = uniquePrioritySetters[i];
        if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) return new Date(NaN);
        var result = setter.set(utcDate, flags, setter.value, subFnOptions);
        if (result[0]) {
            utcDate = result[0];
            assign(flags, result[1]);
        } else utcDate = result;
    }
    return utcDate;
}
function dateToSystemTimezone(date, flags) {
    if (flags.timestampIsSet) return date;
    var convertedDate = new Date(0);
    convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return convertedDate;
}
function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}
function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}
function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== "number") return false;
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
}
function isMatch(dateString, formatString, options) {
    requiredArgs(2, arguments);
    return isValid(parse(dateString, formatString, new Date(), options));
}
function isAfter(dirtyDate, dirtyDateToCompare) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dateToCompare = toDate(dirtyDateToCompare);
    return date.getTime() > dateToCompare.getTime();
}
const getParsedDate = (value, format)=>{
    return format ? parse(value, format, new Date()) : new Date(value);
};
const getComparedDate = (sourceDate, configValue, format)=>{
    let comparedDate;
    if (isDate(configValue)) comparedDate = configValue;
    else if (typeof configValue === "string") comparedDate = getParsedDate(configValue, format);
    if (!isValid(comparedDate)) return null;
    if (!isValid(sourceDate)) return null;
    return comparedDate;
};
const checkIsBefore = (configValue, sourceDate, format)=>{
    const comparedDate = getComparedDate(sourceDate, configValue, format);
    if (comparedDate === null) return false;
    return isAfter(comparedDate, sourceDate);
};
const checkIsAfter = (configValue, sourceDate, format)=>{
    const comparedDate = getComparedDate(sourceDate, configValue, format);
    if (comparedDate === null) return false;
    return isAfter(sourceDate, comparedDate);
};
const pluginDate = (func)=>(value, fields)=>{
        const config = func(fields);
        const valid = {
            format: true,
            isAfter: true,
            isBefore: true,
            required: true
        };
        if (typeof value !== "string") {
            console.error("Value should be a string! The result will be always invalid");
            return false;
        }
        if (!config.required && value === "") return true;
        if (config.format !== void 0) {
            if (typeof config.format !== "string") {
                console.error("Format field should be a string! The result will be always invalid");
                valid.format = false;
            } else valid.format = isMatch(value, config.format);
        }
        const sourceDate = getParsedDate(value, config.format);
        if (config.isBefore !== void 0) valid.isBefore = checkIsBefore(config.isBefore, sourceDate, config.format);
        if (config.isAfter !== void 0) valid.isAfter = checkIsAfter(config.isAfter, sourceDate, config.format);
        return Object.values(valid).every((item)=>item
        );
    }
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["avGq0","ib7vD"], "ib7vD", "parcelRequire1ee4")

//# sourceMappingURL=booking.6453dc4f.js.map
