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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../img/bg_page.png */ \"./src/img/bg_page.png\"));\n\n// Module\nexports.push([module.i, \"html, body{\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n  background-position: center;\\r\\n  background-size: cover;\\r\\n  background-origin: content-box;\\r\\n  background-repeat: no-repeat;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.container{\\r\\n  position: relative;\\r\\n  border: 10px ridge #8BC34A;\\r\\n  height: 560px;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.container-wrap{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 980px;\\r\\n  margin: 0 auto;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.box-icons{\\r\\n  display: flex;\\r\\n  position: absolute;\\r\\n  left: 60px;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.box-icons__item{\\r\\n  justify-content: flex-start;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.canvasContainer{\\r\\n  text-align: center;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n\\r\\n.block-start{\\r\\n  position: absolute;\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.block-start_hidden{\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.block-start__button{\\r\\n  background: #3e9029;\\r\\n  padding: 15px 30px;\\r\\n  font-family: Arial, sans-serif;\\r\\n  font-size: 24px;\\r\\n  font-weight: 600;\\r\\n  color: #daffd1;\\r\\n  border: 8px ridge #5dbd45;\\r\\n  transition: .3s ease;\\r\\n}\\r\\n\\r\\n.block-start__button:hover{\\r\\n  background: green;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n[type=radio] { \\r\\n  position: absolute;\\r\\n  opacity: 0;\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\n[type=radio] + img {\\r\\n  height: 75px;\\r\\n  width: 75px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/Controls.js":
/*!*************************!*\
  !*** ./src/Controls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Controls(){\r\n  this.iconsContainer = document.getElementsByClassName(\"block-icons\");\r\n  this.imgButtons = [\r\n    document.getElementById('trapIcon'),\r\n    document.getElementById('rakeIcon')\r\n  ];\r\n\r\n  this.inputsButtons = [\r\n    document.getElementById('trapInpt'),\r\n    document.getElementById('rakeInpt')    \r\n  ];\r\n\r\n  this.isChecked = null;\r\n\r\n  this.inputsButtons.forEach((input)=>\r\n    input.addEventListener('click', this.checkTrap.bind(this), false)\r\n  );\r\n}\r\n\r\nControls.prototype.setImg = function(index, state){\r\n  switch(index){\r\n    case 0:\r\n      this.imgButtons[index].src = `./img/trap_icons/trap_${state}.png`;\r\n      break;\r\n    case 1:\r\n      this.imgButtons[index].src = `./img/rake_icons/rake_${state}.png`;\r\n      break;\r\n  }\r\n}\r\n\r\nControls.prototype.setIconState = function(index, state, status, setCheck){\r\n  this.inputsButtons[index].checked = state;\r\n  this.setImg(index, status);\r\n  this.isChecked = setCheck; \r\n}\r\n\r\nControls.prototype.setIconActive = function(index){\r\n  this.setIconState(index, true, 'active', index);\r\n}\r\n\r\nControls.prototype.setIconPassive = function(index){\r\n  this.setIconState(index, false, 'passive', null);\r\n}\r\n\r\nControls.prototype.setIconUnavailable = function(index){\r\n  this.setIconState(index, false, 'unavailable', null);\r\n}\r\n\r\nControls.prototype.checkTrap = function(e){\r\n  if(this.isChecked !== null){\r\n    if(this.inputsButtons[this.isChecked] !== e.target){\r\n      this.setIconPassive(this.isChecked);\r\n      this.setIconActive(parseInt(e.target.value));\r\n    }\r\n    else{\r\n      this.setIconPassive(this.isChecked);\r\n    }\r\n  }\r\n  else{\r\n    this.setIconActive(parseInt(e.target.value));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controls);\r\n\n\n//# sourceURL=webpack:///./src/Controls.js?");

/***/ }),

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ \"./src/Scene.js\");\n/* harmony import */ var _units_Units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units/Units.js */ \"./src/units/Units.js\");\n/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.js */ \"./src/Map.js\");\n/* harmony import */ var _units_Pig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./units/Pig.js */ \"./src/units/Pig.js\");\n/* harmony import */ var _units_House_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./units/House.js */ \"./src/units/House.js\");\n/* harmony import */ var _units_Trap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./units/Trap.js */ \"./src/units/Trap.js\");\n/* harmony import */ var _Controls_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Controls.js */ \"./src/Controls.js\");\n/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Line.js */ \"./src/Line.js\");\n/* harmony import */ var _Score_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Score.js */ \"./src/Score.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction Game(screen){\r\n  _Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.score = new _Score_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\r\n  this.controls = new _Controls_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n  this.map = new _Map_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  this.lines = [\r\n    new _Line_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\r\n      screen, 0, \r\n      new _units_Pig_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.imgs['pigRight'], 0, 0, -50, -55, 150, 175, 105, 120, 0, this.map, 2, 1, 0, this.imgs['pigLeft']), \r\n      new _units_House_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.imgs['houses'], 0, 0, -80, -85, 250, 250, 155, 155, 0, this.map, 1, 2), \r\n      this.controls, this.map, this.score\r\n    ),\r\n    new _Line_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\r\n      screen, 1, \r\n      new _units_Pig_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.imgs['pigTwoRight'], 0, 1, -50, -55, 150, 175, 105, 120, 0, this.map, 1.5, 1, 0, this.imgs['pigTwoLeft']), \r\n      new _units_House_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.imgs['houses'], 0, 1, -75, -85, 250, 250, 155, 155, 0, this.map, 1, 1), \r\n      this.controls, this.map, this.score\r\n    ),\r\n    new _Line_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\r\n      screen, 2, \r\n      new _units_Pig_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.imgs['pigTwoRight'], 0, 2, -50, -55, 150, 175, 105, 120, 0, this.map, 1, 1, 0, this.imgs['pigTwoLeft']), \r\n      new _units_House_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.imgs['houses'], 0, 2, -80, -70, 250, 250, 155, 155, 0, this.map, 1, 0), \r\n      this.controls, this.map, this.score\r\n    )\r\n  ];\r\n  this.canvas.addEventListener('mousedown', this.onClick.bind(this), false);\r\n}\r\n\r\nGame.prototype = Object.create(_Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nGame.prototype.constructor = Game;\r\n\r\nGame.prototype.onClick = function(event){\r\n  let rect = this.canvas.getBoundingClientRect();\r\n  let x = event.clientX - rect.left;\r\n  let y = event.clientY - rect.top;\r\n  let cell = this.map.find_cell(x, y);\r\n\r\n  if(cell && this.controls.isChecked === null)\r\n    this.lines[cell.pos_num_y].hitWolf(x, y);\r\n  else if(cell && this.lines[cell.pos_num_y].isPlaceEmpty(cell.pos_num_x, cell.pos_num_y))\r\n    this.lines[cell.pos_num_y].setTargetPosition(cell);\r\n}\r\n\r\nGame.prototype.render = function(){\r\n  this.render_background();\r\n\r\n  this.lines.forEach((line)=> {\r\n    this.render_house(line.getHouse());\r\n    this.render_traps(line.getTraps());\r\n    this.render_pig(line.getPigOrSmoke());\r\n    this.render_wolfs(line.getWolfs());\r\n    line.update();\r\n  });\r\n  this.render_score();\r\n  return \"game\";\r\n}\r\n\r\nGame.prototype.render_pig = function(pig){\r\n  if(!pig.pigInHouse)\r\n    this.render_sprites(pig);\r\n}\r\n\r\nGame.prototype.render_traps = function(traps){\r\n  traps.forEach((trap)=> {\r\n    this.render_sprites(trap);\r\n  });\r\n}\r\n\r\nGame.prototype.render_wolfs = function(wolfs){\r\n  wolfs.forEach((wolf)=> {\r\n    this.render_sprites(wolf);\r\n  });\r\n}\r\n\r\nGame.prototype.render_house = function (house) {\r\n  this.render_sprites(house);\r\n}\r\n\r\nGame.prototype.render_background = function(){\r\n  this.ctx.drawImage(this.imgs['background'], 0, 0, this.canvas.width, this.canvas.height);\r\n}\r\n\r\nGame.prototype.render_sprites = function (obj) {\r\n  this.ctx.drawImage(\r\n    obj.img, \r\n    obj.getFrame().frame_x * obj.sprite_w, \r\n    obj.getFrame().frame_y * obj.sprite_h, \r\n    obj.sprite_w, obj.sprite_h, \r\n    obj.getPos().x, \r\n    obj.getPos().y, \r\n    obj.scale_w, obj.scale_h\r\n  );    \r\n}\r\n\r\nGame.prototype.render_score = function () {\r\n  this.ctx.fillStyle = '#0E000E';\r\n  this.ctx.fillRect(755, 33, 160, 41 );  \r\n  this.ctx.fillStyle = '#FCEA84';\r\n  this.ctx.fillRect(760, 38, 150, 31 );\r\n  this.ctx.fillStyle = '#000104';\r\n  this.ctx.font=\"bold 24px Verdana\";\r\n  this.ctx.fillText(\"KILLS: \" + this.score.getScore(), 770, 62);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game.js?");

/***/ }),

/***/ "./src/Lib.js":
/*!********************!*\
  !*** ./src/Lib.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ \"./src/Scene.js\");\n\r\n\r\nfunction Lib(screen){\r\n  _Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n  this.assets = [\r\n    {name: 'menu_bg', path: './img/960x540.png'},\r\n    {name: 'background', path: './img/background.png'},\r\n    {name: 'houses', path: './img/Houses.png'},\r\n    {name: 'wolf_1', path: './img/AnimWolf_1.png'},\r\n    {name: 'wolf_2', path: './img/AnimWolf_2.png'},\r\n    {name: 'pigLeft', path: './img/AnimPigLeft.png'},\r\n    {name: 'pigRight', path: './img/AnimPigRight.png'},\r\n    {name: 'pigTwoLeft', path: './img/AnimPigTwoLeft.png'},\r\n    {name: 'pigTwoRight', path: './img/AnimPigTwoRight.png'},\r\n    {name: 'trap', path: './img/Trap.png'},\r\n    {name: 'Rake', path: './img/RakeTrap.png'},\r\n    {name: 'smoke', path: './img/Smoke.png'}\r\n  ]\r\n\r\n  this.total = this.assets.length;\r\n  this.loaded = 0;\r\n  this.status = \"loading\";\r\n  this.loaded_at = 0;\r\n  let self = this;\r\n\r\n  for(let i = 0; i < this.total; i++){\r\n  \tlet img = new Image();\r\n  \timg.src = this.assets[i].path;\r\n    img.onload = function() {\r\n      self.loaded++;\r\n    };\r\n  \tscreen.imgs[this.assets[i].name] = img;\r\n  }  \r\n}\r\n\r\nLib.prototype.render = function () {\r\n  if(this.status == \"loading\") {\r\n    if(this.loaded == this.total) {\r\n      this.status = \"loaded\";\r\n    }\r\n    //this.ctx.fillStyle = '#000000';\r\n    //this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height );\r\n    this.ctx.drawImage(this.imgs['menu_bg'], 0, 0, this.canvas.width, this.canvas.height);\r\n    this.ctx.fillStyle = '#ffffff';\r\n    this.ctx.font=\"22px Georgia\";\r\n    this.ctx.fillText(\"Loading \" + this.loaded + '/' + this.total, 415,345);\r\n    return \"lib\";\r\n  }\r\n\r\n  if(this.status == \"loaded\") {\r\n      return \"menu\";\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Lib);\n\n//# sourceURL=webpack:///./src/Lib.js?");

/***/ }),

/***/ "./src/Line.js":
/*!*********************!*\
  !*** ./src/Line.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ \"./src/Scene.js\");\n/* harmony import */ var _units_Units_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units/Units.js */ \"./src/units/Units.js\");\n/* harmony import */ var _units_Trap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./units/Trap.js */ \"./src/units/Trap.js\");\n/* harmony import */ var _Spawner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Spawner.js */ \"./src/Spawner.js\");\n\r\n\r\n\r\n\r\n\r\nfunction Line(screen, index, pig, house, controls, map, score){\r\n  _Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.controls = controls;\r\n  this.score = score;\r\n  this.spawner = new _Spawner_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](screen, map, 160);\r\n  this.map = map;\r\n  this.index = index;\r\n\r\n  this.wolfs = [];\r\n  this.traps = [];\r\n  this.pig = pig;\r\n  this.house = house; \r\n  this.smoke = null;\r\n}\r\n\r\nLine.prototype = Object.create(_Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nLine.prototype.constructor = Line;\r\n\r\nLine.prototype.getPig = function(){\r\n  return this.pig;\r\n}\r\n\r\nLine.prototype.getSmoke = function(){\r\n  return this.smoke;\r\n}\r\n\r\nLine.prototype.getPigOrSmoke = function(){\r\n  return this.smoke ? this.smoke : this.pig;\r\n}\r\n\r\nLine.prototype.getHouse = function(){\r\n  return this.house;\r\n}\r\n\r\nLine.prototype.getTraps = function(){\r\n  return this.traps;\r\n}\r\n\r\nLine.prototype.getWolfs = function(){\r\n  return this.wolfs;\r\n}\r\n\r\nLine.prototype.spawnWolf = function(wolf){\r\n  if(wolf !== null){\r\n    this.wolfs.push(wolf);\r\n  }\r\n}\r\n\r\nLine.prototype.update = function(){\r\n  this.update_houses();\r\n  this.update_traps();\r\n  this.update_pigs();\r\n  this.update_wolf();\r\n\r\n  if(this.wolfs.length < 10)\r\n    this.spawnWolf(this.spawner.getRandomWolf(6, this.index));\r\n}\r\n\r\nLine.prototype.setTargetPosition = function (cell) {\r\n  if(cell && this.pig.pigInHouse){\r\n    if(this.pig.hp){\r\n      this.pig.target_position = cell.pos_num_x;\r\n      this.pig.pigInHouse = false;\r\n      this.pig.trapIndex = this.controls.isChecked;\r\n    }\r\n  }\r\n}\r\n\r\nLine.prototype.update_traps = function () {\r\n  this.traps.forEach((trap)=> {\r\n    if(trap.state){\r\n      if(trap.getCountFrame() === trap.getCurrentNumFrame())\r\n        this.trapKillWolf(trap);\r\n      else\r\n        trap.animate(); \r\n    }\r\n  });\r\n}\r\n\r\nLine.prototype.update_wolf = function () {\r\n  this.wolfs.forEach((wolf)=> {\r\n  \tlet isTrap = this.isWolfTrapped(wolf);\r\n  \tif(isTrap >= 0){\r\n  \t  this.wolfTrapped(wolf, this.traps[isTrap]);\r\n  \t}\r\n    wolf.animate();\r\n  });\r\n}\r\n\r\nLine.prototype.update_houses = function () {\r\n  this.house.animate(this.pig);\r\n}\r\n\r\nLine.prototype.update_pigs = function () {\r\n  if(this.pig.hp && !this.pigTrapped()){\r\n    if(!this.pig.pigInHouse){\r\n\t  if(this.pig.isFinish())\r\n\t    this.pig.setDefaultState();\r\n\t  else if(this.pig.isTargetPosition() && !this.pig.isFinish())\r\n\t    this.update_smoke(this.pig.target_position);    \r\n\t  else\r\n\t    this.pig.animate();   \t\r\n    } \r\n  }\r\n}\r\n\r\nLine.prototype.update_smoke = function (pos_num_x) {\r\n  if(!this.smoke){\r\n    this.smoke = new _units_Units_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.imgs['smoke'], pos_num_x, this.index, -80, -80, 221, 208, 160, 160, 2, this.map);\r\n    setTimeout(() => {\r\n      this.setTrap(this.pig.trapIndex, pos_num_x);\r\n      this.smoke = null;      \r\n      this.pig.animate();\r\n     }, 1000);\r\n  }\r\n  this.smoke.animate(); \r\n}\r\n\r\nLine.prototype.hitWolf = function (x, y) {\r\n  for(let i = 0; i < this.wolfs.length; i++){\r\n    if(this.wolfs[i].isHit(x, y)){\r\n      this.wolfs[i].hit();\r\n      if(!this.wolfs[i].hp)\r\n        this.killWolf(i);\r\n      return;\r\n    }\r\n  }\r\n}\r\n\r\nLine.prototype.setTrap = function (type, pos_num_x, pos_num_y) {\r\n  switch(type){\r\n    case 0:   \r\n      this.traps.push(\r\n        new _units_Trap_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.imgs['trap'], pos_num_x, this.index, -35, -10, 99, 98, 79, 78, 1, this.map, 3));\r\n      break;\r\n    case 1:\r\n      this.traps.push(\r\n        new _units_Trap_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.imgs['Rake'], pos_num_x, this.index, -85, -90, 193, 200, 135, 145, 1, this.map, 3));\r\n      break;\r\n  }\r\n}\r\n\r\nLine.prototype.trapKillWolf = function (trap) {\r\n  this.killWolf(this.wolfs.indexOf(trap.wolf));\r\n  this.traps.splice(this.traps.indexOf(trap), 1);\r\n}\r\n\r\nLine.prototype.wolfTrapped = function (wolf, trap) {\r\n  wolf.isWolfInTrap = true;\r\n  trap.state = true;\r\n  trap.wolf = wolf; \r\n}\r\n\r\nLine.prototype.pigTrapped = function () {\r\n  for(let i = 0; i < this.wolfs.length; i++){\r\n    if(this.pig.isTrapped(this.wolfs[i])){\r\n      this.wolfKillPig(this.wolfs[i])\r\n      return true;\r\n    }\r\n  }\r\n  return false;  \r\n}\r\n\r\nLine.prototype.wolfKillPig = function (wolf) {\r\n  this.pig.killPig();\r\n  this.killWolf(this.wolfs.indexOf(wolf));   \r\n}\r\n\r\nLine.prototype.isWolfTrapped = function (wolf) {\r\n  if(!wolf.isWolfInTrap){\r\n  \tfor (let i = 0; i < this.traps.length; i++)\r\n  \t  if(wolf.isTrapped(this.traps[i]))\r\n  \t    return i; \r\n  } \r\n  return -1;\r\n}\r\n\r\nLine.prototype.killWolf = function (index) {\r\n  this.score.addScore(1);\r\n  this.wolfs.splice(index, 1);\r\n}\r\n\r\nLine.prototype.isPlaceEmpty = function(pos_num_x){\r\n  for(let i = 0; i < this.traps.length; i++){\r\n    if(this.traps[i].default_pos_num_x === pos_num_x)\r\n      return false;\r\n  }\r\n  return true;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Line);\n\n//# sourceURL=webpack:///./src/Line.js?");

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Map(){\r\n  this.borders_cells_x = [0, 135, 270, 405, 540, 675, 810, 945];\r\n  this.borders_cells_y = [135, 270, 405, 540];\r\n  this.positions_num_x = [68, 203, 338, 473, 608, 743, 878];\r\n  this.positions_num_y = [ 203, 338, 473 ]; \r\n}\r\n\r\nMap.prototype.find_cell = function(x, y){\r\n  for(let i = 1; i < this.borders_cells_y.length; i++){\r\n    if(y < this.borders_cells_y[i] && y > this.borders_cells_y[0]){\r\n      for(let j = 1; j < this.borders_cells_x.length; j++){\r\n        if(x < this.borders_cells_x[j] && x > this.borders_cells_x[0]){\r\n          return {pos_num_x: j-1, pos_num_y: i-1};\r\n        }\r\n      }\r\n    }\r\n  }\r\n  return null;\r\n}\r\n\r\nMap.prototype.distance_to_cell = function(num_cell, unit_pos_x){\r\n  return Math.abs(this.positions_num_x[num_cell] - unit_pos_x);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/Map.js?");

/***/ }),

/***/ "./src/Scene.js":
/*!**********************!*\
  !*** ./src/Scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Scene(screen){\r\n  this.canvas = screen.canvas;\r\n  this.ctx = this.canvas.getContext('2d');\r\n  this.imgs = screen.imgs;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scene);\n\n//# sourceURL=webpack:///./src/Scene.js?");

/***/ }),

/***/ "./src/Score.js":
/*!**********************!*\
  !*** ./src/Score.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Score(){\r\n  this.score = 0;\r\n}\r\n\r\nScore.prototype.getScore = function() {\r\n  return this.score;\r\n}\r\n\r\nScore.prototype.clearScore = function() {\r\n  this.score = 0;\r\n}\r\n\r\nScore.prototype.addScore = function(score) {\r\n  this.score += score;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Score);\n\n//# sourceURL=webpack:///./src/Score.js?");

/***/ }),

/***/ "./src/Spawner.js":
/*!************************!*\
  !*** ./src/Spawner.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scene.js */ \"./src/Scene.js\");\n/* harmony import */ var _units_Wolf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./units/Wolf.js */ \"./src/units/Wolf.js\");\n\r\n\r\n\r\nfunction Spawner(screen, map, interval){\r\n  _Scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.map = map;\r\n  this.interval = interval;\r\n  this.intervalCount = interval;\r\n}\r\n\r\nSpawner.prototype.getRandomInt = function(min, max) {\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\n\r\nSpawner.prototype.getWolf = function (type, pos_num_x, pos_num_y) {\r\n  switch(type){\r\n    case 0:\r\n        return new _units_Wolf_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.imgs['wolf_1'], pos_num_x , pos_num_y, -75, -80, 150, 180, 130, 150, 1, this.map, -1.0, 3);\r\n      break;\r\n    case 1:\r\n        return new _units_Wolf_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.imgs['wolf_2'], pos_num_x , pos_num_y, -75, -80, 150, 180, 130, 150, 1, this.map, -1.2, 3);\r\n      break;\r\n  }\r\n}\r\n\r\nSpawner.prototype.getRandomWolf = function(pos_num_x, pos_num_y) {\r\n  if(this.intervalCount === 0){\r\n    this.intervalCount = this.interval + this.getRandomInt(0, 25);\r\n    if(this.getRandomInt(0, 2)){\r\n      return this.getWolf(this.getRandomInt(0, 2), pos_num_x, pos_num_y);\r\n    }\r\n  }\r\n  this.intervalCount--;\r\n  return null;\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spawner);\n\n//# sourceURL=webpack:///./src/Spawner.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/img/bg_page.png":
/*!*****************************!*\
  !*** ./src/img/bg_page.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"e2557e4439a917a2ed426c92be9aa712.png\";\n\n//# sourceURL=webpack:///./src/img/bg_page.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.js */ \"./src/Game.js\");\n/* harmony import */ var _Lib_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lib.js */ \"./src/Lib.js\");\n\r\n\r\n\r\n\r\nlet lib;\r\nlet game;\r\nlet startPanel, startButton;\r\nlet scenes = {};\r\nlet current_scene = 'lib';\r\n\r\nwindow.onload = function() {\r\n  startButton = document.getElementsByClassName('block-start__button');\r\n  startPanel = document.getElementsByClassName('block-start');\r\n  screen.canvas = document.getElementById('gameCanvas');\r\n  screen.imgs = {};\r\n\r\n  scenes['lib'] = new _Lib_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](screen);\r\n  scenes['game'] = new _Game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](screen);\r\n\r\n  startButton[0].addEventListener('click', ()=> {\r\n    startPanel[0].classList.add(\"block-start_hidden\");\r\n    current_scene = 'game';\r\n    draw();\r\n  }, false);\r\n\r\n  draw();\r\n}\r\n\r\n\r\nfunction draw() {\r\n  if(current_scene === \"menu\")\r\n    startPanel[0].classList.remove(\"block-start_hidden\");\r\n  else{\r\n    current_scene = scenes[current_scene].render();\r\n    requestAnimationFrame(draw);\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/units/House.js":
/*!****************************!*\
  !*** ./src/units/House.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.js */ \"./src/units/Units.js\");\n\r\n\r\nfunction House(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, \r\n               sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, hp , houseTypeNum){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n  this.houseTypeNum = houseTypeNum;\r\n  this.houseState = 0;\r\n  this.hp = hp;\r\n}\r\n\r\nHouse.prototype = Object.create(_Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nHouse.prototype.constructor = House;\r\n\r\nHouse.prototype.animate = function(pig){\r\n  if(pig.hp){\r\n    if(pig.pigInHouse)\r\n      this.houseState = 0;\r\n    else\r\n      this.houseState = 1;\r\n  }\r\n  else\r\n    this.houseState = 2;\r\n}\r\n\r\nHouse.prototype.getFrame = function (){\r\n  return { frame_x: this.houseState, frame_y: this.houseTypeNum };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (House);\n\n//# sourceURL=webpack:///./src/units/House.js?");

/***/ }),

/***/ "./src/units/Pig.js":
/*!**************************!*\
  !*** ./src/units/Pig.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.js */ \"./src/units/Units.js\");\n\r\n\r\nfunction Pig(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, \r\n              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, speed, hp, target_position, imgRight){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.imgRight = imgRight;\r\n  this.imgLeft = img;\r\n  this.pigInHouse = true;\r\n  this.speed = speed;\r\n  this.hp = hp;\r\n  this.distance_moved = 0; \r\n  this.target_position = target_position;\r\n  this.trapIndex = null;\r\n}\r\n\r\nPig.prototype = Object.create(_Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nPig.prototype.constructor = Pig;\r\n\r\nPig.prototype.move = function () {\r\n\r\n  if(this.target_position !== 0 && this.isTargetPosition()){\r\n    console.log(\"rotate\");\r\n    this.img = this.imgRight\r\n    this.target_position = 0;\r\n    this.speed *= -1;\r\n  }\r\n\r\n  this.distance_moved += this.speed;\r\n};\r\n\r\nPig.prototype.getTargetPos = function () {\r\n  return this.map.positions_num_x[this.target_position] + this.fix_axis_x;\r\n};\r\n\r\nPig.prototype.getMainPos = function () {\r\n  return _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getPos.apply(this, arguments);\r\n};\r\n\r\nPig.prototype.getPos = function () {\r\n  return {\r\n    x: this.getMainPos().x + this.distance_moved, \r\n    y: this.getMainPos().y\r\n  };\r\n};\r\n\r\nPig.prototype.setDefaultState = function (){\r\n  this.speed = Math.abs(this.speed);\r\n  this.pigInHouse = true;\r\n  this.img = this.imgLeft;\r\n  this.distance_moved = 0;\r\n}\r\n\r\nPig.prototype.killPig = function () {\r\n  this.hp = 0;\r\n  this.setDefaultState();   \r\n}\r\n\r\nPig.prototype.isTargetPosition = function (){\r\n  if(Math.abs(this.getPos().x - this.getTargetPos()) <= Math.abs(this.speed))\r\n    return true;\r\n  else\r\n    return false;\r\n}\r\n\r\nPig.prototype.isFinish = function (){\r\n  if(this.target_position === 0 && this.isTargetPosition())\r\n    return true;\r\n  else\r\n    return false;\r\n}\r\n\r\nPig.prototype.isTrapped = function(wolf){\r\n  if(this.getPos().x + this.fix_axis_x >= wolf.getPos().x - (wolf.scale_w/2))\r\n    return true;\r\n  else\r\n    return false;    \r\n}\r\n\r\nPig.prototype.animate = function(){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.animate.apply(this, arguments);\r\n  this.move();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pig);\n\n//# sourceURL=webpack:///./src/units/Pig.js?");

/***/ }),

/***/ "./src/units/Trap.js":
/*!***************************!*\
  !*** ./src/units/Trap.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.js */ \"./src/units/Units.js\");\n\r\n\r\nfunction Trap(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, \r\n              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, hp){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.hp = hp;\r\n  this.state = false;\r\n  this.wolf = null;\r\n}\r\n\r\nTrap.prototype = Object.create(_Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nTrap.prototype.constructor = Trap;\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trap);\n\n//# sourceURL=webpack:///./src/units/Trap.js?");

/***/ }),

/***/ "./src/units/Units.js":
/*!****************************!*\
  !*** ./src/units/Units.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Units(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, \r\n              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map){\r\n  this.img = img;\r\n  this.sprite_w = sprite_w;\r\n  this.sprite_h = sprite_h;\r\n  this.map = map;\r\n  this.default_pos_num_y = default_pos_num_y;\r\n  this.default_pos_num_x = default_pos_num_x;\r\n  this.fix_axis_x = fix_axis_x;\r\n  this.fix_axis_y = fix_axis_y;\r\n  this.scale_w = scale_w;\r\n  this.scale_h = scale_h;\r\n  this.skipFrame = skipFrame;\r\n  this.skippedFrameCount = 0;\r\n  this.anim_frame = {\r\n  \tframe_x: 0, \r\n  \tframe_y: 0\r\n  };\r\n}\r\n\r\nUnits.prototype.getPos = function () {\r\n  return {\r\n    x: this.map.positions_num_x[this.default_pos_num_x] + this.fix_axis_x, \r\n    y: this.map.positions_num_y[this.default_pos_num_y] + this.fix_axis_y \r\n  };\r\n};\r\n\r\nUnits.prototype.getFrame = function (){\r\n  return this.anim_frame;\r\n}\r\n\r\nUnits.prototype.getCurrentNumFrame = function (){\r\n  return ((this.img.width / this.sprite_w) * this.getFrame().frame_y) + this.getFrame().frame_x + 1;\r\n}\r\n\r\nUnits.prototype.getCountFrame = function (){\r\n  return (this.img.width / this.sprite_w) * (this.img.height / this.sprite_h);\r\n}\r\n\r\nUnits.prototype.animate = function(){\r\n  if(this.skipFrame <= this.skippedFrameCount){\r\n    if(this.anim_frame.frame_x >= (this.img.width / this.sprite_w)-1){\r\n    \tthis.anim_frame.frame_x = 0;\r\n\r\n    \tif(this.anim_frame.frame_y >= (this.img.height / this.sprite_h)-1){\r\n    \t  this.anim_frame.frame_y = 0;\r\n      }\r\n      else{\r\n        this.anim_frame.frame_y++;\t\r\n      }\r\n    }\r\n    else{\r\n    \tthis.anim_frame.frame_x++;\r\n    }\r\n    this.skippedFrameCount = 0;\r\n  }\r\n  else{\r\n    this.skippedFrameCount++;\r\n  } \r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Units);\n\n//# sourceURL=webpack:///./src/units/Units.js?");

/***/ }),

/***/ "./src/units/Wolf.js":
/*!***************************!*\
  !*** ./src/units/Wolf.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.js */ \"./src/units/Units.js\");\n\r\n\r\nfunction Wolf(img, default_pos_num_x, default_pos_num_y, fix_axis_x, fix_axis_y, \r\n              sprite_w, sprite_h, scale_w, scale_h, skipFrame, map, speed, hp){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].apply(this, arguments);\r\n\r\n  this.speed = speed;\r\n  this.hp = hp;\r\n  this.distance_moved = 120;\r\n  this.isWolfInTrap = false; \r\n}\r\n\r\nWolf.prototype = Object.create(_Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype);\r\nWolf.prototype.constructor = Wolf;\r\n\r\nWolf.prototype.getMainPos = function () {\r\n  return _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.getPos.apply(this, arguments);\r\n};\r\n\r\nWolf.prototype.getPos = function () {\r\n  return {\r\n    x: this.getMainPos().x + this.distance_moved, \r\n    y: this.getMainPos().y\r\n  };\r\n};\r\n\r\nWolf.prototype.isHit = function (x, y) {\r\n  if(this.getPos().x < x && this.getPos().y < y && \r\n     this.getPos().x + this.scale_w > x && \r\n     this.getPos().y + this.scale_h > y){\r\n    return 1;\r\n  }\r\n  return 0;\r\n}\r\n\r\nWolf.prototype.move = function () {\r\n  this.distance_moved += this.speed;\r\n};\r\n\r\n\r\nWolf.prototype.hit = function () {\r\n  this.hp--;\r\n}\r\n\r\nWolf.prototype.animate = function(){\r\n  _Units_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype.animate.apply(this, arguments);\r\n  this.move();\r\n}\r\n\r\nWolf.prototype.isTrapped = function (trap){\r\n  if(!trap.state && this.map.positions_num_x[trap.default_pos_num_x] >= \r\n      this.getPos().x - (this.fix_axis_x / 2))\r\n    return true;\r\n  else\r\n    return false;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wolf);\n\n//# sourceURL=webpack:///./src/units/Wolf.js?");

/***/ })

/******/ });