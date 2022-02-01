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
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
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
            var F = function F() {
            };
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
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
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
        checkedAssets = {
        };
        acceptedAssets = {
        };
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
            } else window.location.reload();
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
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
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
    bundle.hotData = {
    };
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./modules/model.js");
var _recipeViewJs = require("./views/RecipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _searchViewJs = require("./views/SearchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _resultViewJs = require("./views/ResultView.js");
var _resultViewJsDefault = parcelHelpers.interopDefault(_resultViewJs);
var _paginationViewJs = require("./views/PaginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/BookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _addViewJs = require("./views/AddView.js");
var _addViewJsDefault = parcelHelpers.interopDefault(_addViewJs);
// Контролер Рецепта, получаем id из окна, пока ждем показываем спинер и обновляем отображение всех рецептов, для активного класса
const controllRecipe = async ()=>{
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewJsDefault.default.renderSpiner();
        _resultViewJsDefault.default.update(_modelJs.CreateSeparatedArr());
        await _modelJs.loadRecipe(id);
        // Как только все загрузилось рендерим
        console.log(_modelJs.state.recipe);
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        console.log(err);
        _recipeViewJsDefault.default.renderError();
    }
};
const controllPagination = ()=>{
    // Контроллер Пагиннации, создаем разделенный массив, передаем в ResultView и рендерим
    _resultViewJsDefault.default.setData(_modelJs.CreateSeparatedArr());
    _resultViewJsDefault.default.render();
};
const controllSearch = async (query)=>{
    // Контроллер поиска, пока результат грузится показываем спинер, после передаем в ResultView и рендерим
    try {
        _resultViewJsDefault.default.renderSpiner();
        await _modelJs.loadSearchRecipes(query);
        if (!_modelJs.state.search.length) throw new Error("No match result");
        _resultViewJsDefault.default.setData(_modelJs.state.search);
        _resultViewJsDefault.default.render();
        _modelJs.state.page = 0; // Ставим значение текущей страницы в 0
        _paginationViewJsDefault.default.render(_modelJs.state); // Рендерим пагинацию
        controllPagination();
    } catch (err) {
        console.log(err);
        _resultViewJsDefault.default.renderError();
    }
};
const controllSevings = (newServing)=>{
    // Контролер Персон, обнавляем через модель и делаем обновление через VirtualDOM
    _modelJs.updateServing(newServing);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
};
const controllBookmarks = ()=>{
    // Контролер Закладок, переключаем статус закладки рецепта, обновляем рецепт и делаем рендер всех закладок
    _modelJs.toggleBookmarks(_modelJs.state.recipe);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
    _bookmarkViewJsDefault.default.render(_modelJs.state.bookmarks);
    // Делаем запись в LocalStorage
    _bookmarkViewJsDefault.default.uploadBookmarsFromLocalStorage();
// console.log("New bookmark Added ", state.bookmarks);
};
// Контролер добавление нового рецепта, рендерим спинер, как только все загрузилось, перекидываем пользователя на его новый рецепт,
// добавляем в закладки и обновляем страницу для перезагрузки формы
const controllAddNewRecipe = async (formData)=>{
    try {
        _addViewJsDefault.default.renderSpiner();
        await _modelJs.uploadRecipe(formData);
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
        _bookmarkViewJsDefault.default.uploadBookmarsFromLocalStorage(_modelJs.state.bookmarks);
        _bookmarkViewJsDefault.default.render(_modelJs.state.bookmarks);
        _addViewJsDefault.default.renderSuccesses("Your recept successes was upload, GOOD ✨✨✨");
        window.location.hash = _modelJs.state.recipe.id;
        setTimeout(()=>location.reload()
        , 1000);
    } catch (err) {
        _addViewJsDefault.default.renderError("Opps, something get wrong try again");
        setTimeout(()=>location.reload()
        , 1000);
    }
};
const init = ()=>{
    // Первоначальная инициализация проекта, добавление всех обработчиков и передача функций из контролера в View
    _recipeViewJsDefault.default.addEventHandler(controllRecipe);
    _recipeViewJsDefault.default.addEventHandlerSevings(controllSevings);
    _recipeViewJsDefault.default.addBookmarkHandler(controllBookmarks);
    _searchViewJsDefault.default.addEventHandlers(controllSearch);
    _paginationViewJsDefault.default.addEventHandlers(controllPagination, _modelJs.state);
    _addViewJsDefault.default.addHanlderUpload(controllAddNewRecipe);
    _modelJs.state.bookmarks = _bookmarkViewJsDefault.default.loadBookmarsFromLocalStorage();
};
init();

},{"./modules/model.js":"aXwVq","./views/RecipeView.js":"aFEMw","./views/SearchView.js":"c7Rpf","./views/ResultView.js":"8cMC5","./views/PaginationView.js":"9Uw3J","./views/BookmarkView.js":"d9IvG","./views/AddView.js":"43sLl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aXwVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchRecipes", ()=>loadSearchRecipes
);
parcelHelpers.export(exports, "CreateSeparatedArr", ()=>CreateSeparatedArr
);
parcelHelpers.export(exports, "updateServing", ()=>updateServing
);
parcelHelpers.export(exports, "toggleBookmarks", ()=>toggleBookmarks
);
parcelHelpers.export(exports, "clearBookmarks", ()=>clearBookmarks
);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe
);
var _configJs = require("../config.js");
var _helperJs = require("../helper.js");
const state = {
    recipe: {
    },
    search: [],
    bookmarks: [],
    page: 0
};
// Загрузка рецепта из АПИ
const loadRecipe = async (id)=>{
    try {
        // Ловим ошибки с помощью try catch
        const url = `${_configJs.API_URL}/${id}?${_configJs.API_KEY}`; // Динамически составляем URL и делаем запрос на сервер
        const { recipe  } = (await _helperJs.getJSON(url)).data;
        state.recipe = recipe;
        if (state.bookmarks.some((el)=>el.id === recipe.id
        )) // Проверяем есть ли в закладках этот рецепт, если есть ставим ему свойство bookmarked
        state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        throw new Error(err);
    }
};
const loadSearchRecipes = async (query)=>{
    // Загружаем список рецептов по ключевому запросу
    try {
        const url = `${_configJs.API_URL_SEARCH}${query}&key=${_configJs.API_KEY}`;
        const { recipes  } = (await _helperJs.getJSON(url)).data;
        state.search = recipes;
    } catch (err) {
        throw new Error(err);
    }
};
const CreateSeparatedArr = ()=>// Создаем разделенный массив согласно текущей странице и количеству итемов на странице
    state.search.slice(state.page * _configJs.ITEM_PER_PAGE, (state.page + 1) * _configJs.ITEM_PER_PAGE)
;
const updateServing = (num)=>{
    // Обновляем количество людей на котоых может готовится блюдо
    state.recipe.ingredients.forEach((ing)=>{
        if (!ing.quantity) return; // Если количества ингридиента нет, то возвращем пустой результат
        ing.quantity = Math.round(ing.quantity / state.recipe.servings * num * 100) / 100; // Расчитываем по формуле и округляем до 2 знаков после ,
    });
    state.recipe.servings = num;
};
const removeNewBookmark = (recipe)=>{
    // Убираем закладку из общего списка
    const index = state.bookmarks.findIndex((el)=>el.id === recipe.id
    );
    state.bookmarks = [
        // Создаем новый масив в котором исключаем удаляеммый элемент
        ...state.bookmarks.slice(0, index),
        ...state.bookmarks.slice(index + 1), 
    ];
    state.recipe.bookmarked = false; // Значение bookmarked текущего рецепта становится false
};
const addNewBookmark = (recipe)=>{
    // Добавить новую закладку в общий список
    state.bookmarks.push(recipe);
    state.recipe.bookmarked = true;
};
const toggleBookmarks = (recipe)=>{
    // Проверяем, если свойство bookmarked === true , тогда убираем, если нет, то добавляем
    recipe.bookmarked ? removeNewBookmark(recipe) : addNewBookmark(recipe);
};
const clearBookmarks = ()=>{
    // Служебная функция, удаляет все закладки и очищает localStorage
    state.bookmarks = [];
    window.localStorage.removeItem("bookmarks");
};
const uploadRecipe = async (recipeData)=>{
    // Загрузка рецепта в API, получаем Formatdata в виде обьекта
    try {
        const { cookingTime , image , publisher , servings , sourceUrl , title: title1  } = recipeData; // С помощью деструктуризации вытаскиваем почти все значения
        const ingredients = Object.entries(recipeData) // Создаем свой список рецептов из ing-$ в обьект с списком всех ингридиентов
        .filter(([title, value])=>title.includes("ingredient") && value !== ""
        ) // избавляемся от всего в чем нет ingridient
        .map(([, value])=>{
            // После получаем значение в виде строки, разделяем , и чистим пробелы
            const ingArr = value.split(",").map((el)=>el.trim()
            );
            if (ingArr.length !== 3) // Если строка не соответсвует формату данных, возвращаем ошибку
            throw new Error("Wrong Ingridient format! Please use the correct Format :)");
            const [quantity, unit, description] = ingArr; // Деструктуризируем полученные данные
            return {
                quantity: Number.isFinite(+quantity) && quantity !== "" ? +quantity : null,
                unit,
                description
            };
        });
        const newRecipe = {
            // Формируем новый рецепт правильном формате
            title: title1,
            source_url: sourceUrl,
            image_url: image,
            cooking_time: cookingTime,
            publisher,
            servings,
            ingredients
        };
        // Отправляем рецепт на АПИ, добавляем в закладки и стейт
        const { recipe  } = (await _helperJs.sendJSON(_configJs.API_URL, newRecipe)).data;
        addNewBookmark(recipe);
        recipe.bookmarked = true;
        state.recipe = recipe;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

},{"../config.js":"k5Hzs","../helper.js":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
parcelHelpers.export(exports, "API_URL", ()=>API_URL
);
parcelHelpers.export(exports, "API_URL_SEARCH", ()=>API_URL_SEARCH
);
parcelHelpers.export(exports, "TIMEOUTSEC", ()=>TIMEOUTSEC
);
parcelHelpers.export(exports, "imageURL", ()=>imageURL
);
parcelHelpers.export(exports, "ITEM_PER_PAGE", ()=>ITEM_PER_PAGE
);
const API_URL = "https://forkify-api.herokuapp.com/api/v2/recipes/";
const API_URL_SEARCH = "https://forkify-api.herokuapp.com/api/v2/recipes?search=";
const API_KEY = "daed302b-f036-411b-9618-d5e212f17989";
const TIMEOUTSEC = 10;
const ITEM_PER_PAGE = 15;
const imageURL = new URL(require("fd592ef65e68e517")); // Путь до icons.svg, нужно для Parcel

},{"fd592ef65e68e517":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.21bad73c.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"gkKU3":[function(require,module,exports) {
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

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
parcelHelpers.export(exports, "getJSON", ()=>getJSON
);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON
);
var _configJs = require("./config.js");
const timeout = function(s) {
    // Если в течении n секунд ничего не произойдет, этот промис выдаст Reject с ошибкой
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const getJSON = async (url)=>{
    const res = await Promise.race([
        fetch(url),
        timeout(_configJs.TIMEOUTSEC)
    ]); // Если в течении n секунд данные не успеют загрузится, то промис выдаст reject
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
};
const sendJSON = async (url, data)=>{
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    const res = await Promise.race([
        fetch(`${url}?key=${_configJs.API_KEY}`, options),
        timeout(_configJs.TIMEOUTSEC), 
    ]); // Если в течении n секунд данные не успеют загрузится, то промис выдаст reject
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
};

},{"./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFEMw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fracty = require("fracty");
var _fractyDefault = parcelHelpers.interopDefault(_fracty);
var _config = require("../config");
var _appView = require("./AppView");
var _appViewDefault = parcelHelpers.interopDefault(_appView);
class RecipeView extends _appViewDefault.default {
    constructor(){
        super(document.querySelector(".recipe"), "No recipes found for your query. Please try again!", "Congrat you cool cheaf");
    }
    _generateIngMarkup() {
        return this.data.ingredients.reduce((acc, { quantity , unit , description  })=>acc += `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${_config.imageURL.pathname}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${quantity ? _fractyDefault.default(+quantity, 2).toString() : ""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${unit}</span>
        ${description}
      </div>
    </li>`
        , "");
    }
    generateMarkup() {
        return `
    <figure class="recipe__fig">
    <img src="${this.data.image_url}" alt="${this.data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this.data.title}</span>
    </h1>
    </figure>

    <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_config.imageURL.pathname}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this.data.cooking_time}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${_config.imageURL.pathname}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this.data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-update-to = ${this.data.servings - 1}>
          <svg>
            <use href="${_config.imageURL.pathname}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-update-to = ${this.data.servings + 1}>
          <svg>
            <use href="${_config.imageURL.pathname}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    ${this.data.key === _config.API_KEY ? `
      <div class="recipe__user-generated">
        <svg>
          <use href="${_config.imageURL.pathname}#icon-user"></use>
        </svg>
      </div>
      ` : ""}
    
    <button class="btn--round">
      <svg class="">
        <use href="${_config.imageURL.pathname}#icon-bookmark${this.data.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
    </div>

    <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._generateIngMarkup()}

    </ul>
    </div>

    <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this.data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="${this.data.source_url}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="img/icons.svg#icon-arrow-right"></use>
      </svg>
    </a>
    </div>`;
    }
    render(data) {
        this.data = data;
        this.parentEl.innerHTML = ``;
        this.parentEl.insertAdjacentHTML("beforeend", this.generateMarkup());
    }
    addEventHandlerSevings(controlFunc) {
        this.parentEl.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn--update-servings");
            if (!btn) return;
            console.log(btn);
            const { updateTo  } = btn.dataset;
            // state.recipe.servings = this.data.servings++;
            if (+updateTo === 0) return;
            controlFunc(+updateTo);
        });
    }
    addBookmarkHandler(controlFunc) {
        this.parentEl.addEventListener("click", (e)=>{
            const btn = e.target.closest(".btn--round");
            if (!btn) return;
            controlFunc();
        });
    }
    addEventHandler(controlFunc) {
        window.addEventListener("hashchange", controlFunc);
        window.addEventListener("load", controlFunc);
    }
    renderSuccsses(success = this.succsessMsg) {
        this.parentEl.innerHTML = ``;
        this.parentEl.innerHTML = `
    <div class="error">
      <div>
        <svg>
          <use href="${_config.imageURL}}#icon-smile"></use>
        </svg>
      </div>
      <p>${success}</p>
    </div>
          `;
    }
}
exports.default = new RecipeView();

},{"fracty":"hJO4d","../config":"k5Hzs","./AppView":"81elz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hJO4d":[function(require,module,exports) {
// FRACTY CONVERTS DECIMAL NUMBERS TO FRACTIONS BY ASSUMING THAT TRAILING PATTERNS FROM 10^-2 CONTINUE TO REPEAT
// The assumption is based on the most standard numbering conventions
// e.g. 3.51 will convert to 3 51/100 while 3.511 will convert to 3 23/45
// Throw any number up to 16 digits long at fracty and let fracy do the work.
// If number is beyond 16 digits fracty will truncate at 15 digits to compensate for roundoff errors created in IEEE 754 Floating Point conversion.
module.exports = function(number) {
    let type;
    if (number < 0) {
        number = Math.abs(number);
        type = '-';
    } else type = '';
    if (number === undefined) return `Your input was undefined.`;
    if (isNaN(number)) return `"${number}" is not a number.`;
    if (number == 10000000000000000) return `${type}9999999999999999`;
    if (number > 10000000000000000) return `Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.`;
    if (Number.isInteger(number)) return `${type}${number}`;
    if (number < 0.000001) return '0';
    const numberString = number.toString();
    const entry = numberString.split('.');
    let integer = entry[0];
    let decimal;
    if (decimal == '0' && integer !== '0') return integer;
    else if (decimal == '0' && integer == '0') return '0';
    else if (numberString.length >= 17) decimal = entry[1].slice(0, entry[1].length - 1);
    else decimal = entry[1];
    if (decimal == '99' && integer !== '0') return `${integer} 99/100`;
    else if (decimal == '99' && integer == '0') return `99/100`;
    else if (1 - parseFloat(`.${decimal}`) < 0.0011) decimal = '999';
    if (decimal == undefined) return integer;
    const decimalRev = decimal.split('').reverse().join(''); //Reverse the string to look for patterns.
    const patternSearch = /^(\d+)\1{1,2}/; //This greedy regex matches the biggest pattern that starts at the beginning of the string (at the end, in the case of the reversed string). A lazy regex doesn't work because it only identifies subpatterns in cases where subpatterns exist (e.g. '88' in '388388388388'), thus pattern capture must be greedy.
    let pattern = decimalRev.match(patternSearch); //If there's a pattern, it's full sequence is in [0] of this array and the single unit is in [1] but it may still need to be reduced further.
    if (pattern && decimal.length > 2) {
        patternSequence = pattern[0].split('').reverse().join('');
        endPattern = pattern[1].split('').reverse().join('');
        if (endPattern.length > 1) {
            let endPatternArray = endPattern.split('');
            let testSingleUnit = 1;
            for(i = 0; i < endPatternArray.length; i++)testSingleUnit /= endPatternArray[0] / endPatternArray[i];
            if (testSingleUnit === 1) endPattern = endPatternArray[0];
        }
        if (endPattern.length > 1 && endPattern.length % 2 === 0) endPattern = parseInt(endPattern.slice(0, endPattern.length / 2), 10) - parseInt(endPattern.slice(endPattern.length / 2, endPattern.length), 10) === 0 ? endPattern.slice(0, endPattern.length / 2) : endPattern;
        return yesRepeat(decimal, endPattern, patternSequence, integer, type); //Begin calculating the numerator and denominator for decimals that have a pattern.
    } else return noRepeat(decimal, integer, type); //Begin calculating the numerator and denominator for decimals that don't have a pattern.
};
//IF THERE'S A TRAILING PATTERN FRACTY DIVIDES THE INPUT BY ONE SUBTRACTED FROM THE NEAREST BASE 10 NUMBER WITH NUMBER OF ZEROS EQUAL TO THE LENGTH OF THE REPEATED PATTERN (I.E. A SERIES OF 9'S) MULTIPLIED BY THE BASE 10 NUMBER GREATER THAN AND CLOSEST TO THE INPUT.
function yesRepeat(decimal, endPattern, patternSequence, integer, type) {
    const rep = true; //The numerator repeats.
    const nonPatternLength = decimal.length - patternSequence.length >= 1 ? decimal.length - patternSequence.length : 1; //Does the length of the non pattern segment of the input = 0? If it does, that's incorrect since we know it must equal at least 1, otherwise it's the length of the decimal input minus the length of the full pattern.
    const decimalMultiplier2 = Math.pow(10, nonPatternLength); //Second multiplier to use.
    const float = parseFloat(`0.${decimal}`); //Convert the decimal input to a floating point number.
    const decimalMultiplier1 = Math.pow(10, endPattern.length); //Find the right multiplier to use for both numerator and denominator, which will later have 1 subtracted from it in the case of the denominator.
    const numerator = Math.round((float * decimalMultiplier1 - float) * Math.pow(10, nonPatternLength)); //Find the numerator to be used in calculating the fraction that contains a repeating trailing sequence.
    const denominator = (decimalMultiplier1 - 1) * decimalMultiplier2; //Caluculate the denominator using the equation for repeating trailing sequences.
    return reduce(numerator, denominator, integer, type, rep); //Further reduce the numerator and denominator.
}
//IF THERE'S NO TRAILING PATTERN FRACTY DIVIDES THE INPUT BY THE NEAREST BASE 10 INTEGER GREATER THAN THE NUMERATOR.
function noRepeat(decimal, integer, type) {
    const rep = false; //The numerator doesn't repeat.
    const numerator = parseInt(decimal, 10); //Numerator begins as decimal input converted into an integer.
    const denominator = Math.pow(10, decimal.length); //Denominator begins as 10 to the power of the length of the numerator.
    return reduce(numerator, denominator, integer, type, rep); //Reduce the numerator and denominator.
}
//FRACTY REDUCES THE FRACTION.
function reduce(numerator, denominator, integer, type, rep) {
    const primeNumberArray = [
        2,
        3,
        5
    ]; //If the numerator isn't from a repeating decimal case, the initialized array of prime numbers will suffice to find the common denominators.
    if (rep === true) {
        for(i = 3; i * i <= numerator; i += 2)if (numerator % i === 0) primeNumberArray.push(i);
    }
    let j = 0; //Initialize counter over the prime number array for the while loop.
    let comDenom = 1; //Initialize the common denominator.
    let num = numerator; //Initialize the numerator.
    let den = denominator; //Initialize the denominator.
    while(j <= primeNumberArray.length)if (num % primeNumberArray[j] === 0 && den % primeNumberArray[j] === 0) {
        comDenom = comDenom * primeNumberArray[j];
        num = num / primeNumberArray[j];
        den = den / primeNumberArray[j];
    } else j++;
    return returnStrings(den, num, integer, type);
}
//FRACTY RETURNS THE REDUCED FRACTION AS A STRING.
function returnStrings(den, num, integer, type) {
    if (den === 1 && num === 1) {
        integer = `${type}${(parseInt(integer) + 1).toString()}`; //Add 1 to the integer and return a string without a fraction.
        return `${integer}`;
    } else if (num === 0) return `${type}${integer}`;
    else if (integer == '0') return `${type}${num}/${den}`;
    else return `${type}${integer} ${num}/${den}`; //If there's an integer and a fraction return both.
}

},{}],"81elz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
class App {
    constructor(parentEl, errorMsg, successesMsg){
        this.parentEl = parentEl;
        this.errorMsg = errorMsg;
        this.successesMsg = successesMsg;
    }
    // Virtual DOM , создаем DOM на основе верстки, берем текущий дом Элемента, сравниваем на отличия и изменяем класс и текст
    update(data) {
        this.data = data;
        const markup = this.generateMarkup();
        const newDOM = document.createRange().createContextualFragment(markup); // DOM на основе сгенерированой верстки
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const currElements = Array.from(this.parentEl.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curElem = currElements[i];
            if (!newEl.isEqualNode(curElem) && newEl.firstChild?.nodeValue.trim() !== "") curElem.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curElem)) Array.from(newEl.attributes).forEach((attribute)=>{
                curElem.setAttribute(attribute.name, attribute.value);
            });
        });
    }
    renderSpiner() {
        const markup = `
        <div class="spinner">
        <svg>
          <use href="${_configJs.imageURL.pathname}#icon-loader"></use>
        </svg>
      </div>`;
        this.parentEl.innerHTML = ``;
        this.parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(error = this.errorMsg) {
        this.parentEl.innerHTML = ``;
        this.parentEl.innerHTML = `
        <div class="error">
          <div>
            <svg>
              <use href="${_configJs.imageURL}}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${error}</p>
        </div>
              `;
    }
    renderSuccesses() {
        this.parentEl.innerHTML = ``;
        this.parentEl.innerHTML = `
      <div class="error">
          <div>
            <svg>
              <use href="${_configJs.imageURL}}#icon-smile"></use>
            </svg>
          </div>
          <p>${this.successesMsg}</p>
        </div>
`;
    }
}
exports.default = App;

},{"../config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7Rpf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class SearchView {
    constructor(){
        this.searchForm = document.querySelector(".search");
        this.searchInput = document.querySelector(".search__field");
    }
    addEventHandlers(controllerFunc) {
        this.searchForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            controllerFunc(this.searchInput.value);
            this.searchInput.value = "";
        });
    }
}
exports.default = new SearchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cMC5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _appViewJs = require("./AppView.js");
var _appViewJsDefault = parcelHelpers.interopDefault(_appViewJs);
class Search extends _appViewJsDefault.default {
    constructor(){
        super(document.querySelector(".results"), "No recipes found for your query. Please try again!", "Congrat you cool cheaf");
    }
    setData(data) {
        this.data = data;
    }
    render() {
        this.parentEl.innerHTML = "";
        this.parentEl.innerHTML = this.generateMarkup();
    }
    createSearchItemMarkup(item) {
        const id = window.location.hash.slice(1);
        return `
    <li class="preview">
            <a class="preview__link ${item.id === id ? "preview__link--active" : ""}" href="#${item.id}">
              <figure class="preview__fig">
                <img src="${item.image_url}" alt="${item.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                ${item.key === _configJs.API_KEY ? `
                  <div class="recipe__user-generated">
                    <svg>
                      <use href="${_configJs.imageURL.pathname}#icon-user"></use>
                    </svg>
                  </div>
                  ` : ""}
              </div>
            </a>
          </li>
      `;
    }
    generateMarkup() {
        return this.data.reduce((acc, item)=>acc += this.createSearchItemMarkup(item)
        , "");
    }
}
exports.default = new Search();

},{"../config.js":"k5Hzs","./AppView.js":"81elz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Uw3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
class Pagination {
    constructor(){
        this.parentEl = document.querySelector(".pagination");
    }
    nextPage(state) {
        state.page++;
        this.render(state);
    }
    prevPage(state) {
        state.page--;
        this.render(state);
    }
    addEventHandlers(controllerFunc, state) {
        this.parentEl.addEventListener("click", (e)=>{
            if (e.target.closest(".pagination__btn--prev")) {
                this.prevPage(state);
                controllerFunc();
            }
            if (e.target.closest(".pagination__btn--next")) {
                this.nextPage(state);
                controllerFunc();
            }
        });
    }
    render(state) {
        this.parentEl.innerHTML = "";
        this.parentEl.insertAdjacentHTML("beforeend", this.generateMarkup(state));
    }
    generateMarkup(state) {
        return `
        ${state.page === 0 ? "" : `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page ${state.page}</span>
           </button>`}
            
        ${state.search.length <= (state.page + 1) * _config.ITEM_PER_PAGE ? "" : `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${state.page + 2}</span>
            <svg class="search__icon">
              <use href="img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        `}
          
        </div>`;
    }
}
exports.default = new Pagination();

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9IvG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _config = require("../config");
class BookmarkView {
    constructor(){
        this.parentEl = document.querySelector(".bookmarks__list");
        this.errorMsg = `<div class="message">
    <div>
      <svg>
        <use href="${_config.imageURL}#icon-smile"></use>
      </svg>
    </div>
    <p>
      No bookmarks yet. Find a nice recipe and bookmark it :)
    </p>
  </div>
  `;
    }
    render(data) {
        this.data = data;
        this.parentEl.innerHTML = "";
        this.parentEl.insertAdjacentHTML("beforeend", this.generateMarkup());
        if (this.data.length === 0) this.parentEl.innerHTML = this.errorMsg;
    }
    createSearchItemMarkup(item) {
        return `
    <li class="preview">
            <a class="preview__link" href="#${item.id}">
              <figure class="preview__fig">
                <img src="${item.image_url}" alt="${item.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${item.title}</h4>
                <p class="preview__publisher">${item.publisher}</p>
                ${item.key === _config.API_KEY ? `
                  <div class="recipe__user-generated">
                    <svg>
                      <use href="${_config.imageURL.pathname}#icon-user"></use>
                    </svg>
                  </div>
                  ` : ""}
              </div>
            </a>
          </li>
      `;
    }
    generateMarkup() {
        return this.data.reduce((acc, item)=>acc += this.createSearchItemMarkup(item)
        , "");
    }
    uploadBookmarsFromLocalStorage() {
        console.log(this.data);
        window.localStorage.setItem("bookmarks", JSON.stringify(this.data));
    }
    loadBookmarsFromLocalStorage() {
        const data = window.localStorage.getItem("bookmarks");
        if (!data || data === "undefined") return;
        this.data = JSON.parse(data);
        this.render(this.data);
        return this.data;
    }
}
exports.default = new BookmarkView();

},{"../config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43sLl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appViewJs = require("./AppView.js");
var _appViewJsDefault = parcelHelpers.interopDefault(_appViewJs);
class AddView extends _appViewJsDefault.default {
    constructor(){
        super(document.querySelector(".upload"), "Something get wrong", "Successes Your recipy was uploaded");
        this.overlay = document.querySelector(".overlay");
        this.window = document.querySelector(".add-recipe-window");
        this.addBtn = document.querySelector(".nav__btn--add-recipe");
        this.closeBtn = document.querySelector(".btn--close-modal");
        this.addHanlderToggleWindow();
    }
    render() {
    }
    addHanlderToggleWindow() {
        this.overlay.addEventListener("click", this.toggleForm.bind(this));
        this.addBtn.addEventListener("click", this.toggleForm.bind(this));
        this.closeBtn.addEventListener("click", this.toggleForm.bind(this));
    }
    addHanlderUpload(controlFunc) {
        this.parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            const dataArr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataArr);
            controlFunc(data);
        });
    }
    toggleForm() {
        this.overlay.classList.toggle("hidden");
        this.window.classList.toggle("hidden");
    }
}
exports.default = new AddView();

},{"./AppView.js":"81elz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
