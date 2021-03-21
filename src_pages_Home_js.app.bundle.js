/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcurso_platzi_react_avanzado"] = self["webpackChunkcurso_platzi_react_avanzado"] || []).push([["src_pages_Home_js"],{

/***/ "./src/components/Category/index.js":
/*!******************************************!*\
  !*** ./src/components/Category/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Category/styles.js\");\n\n\nvar DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var _ref$cover = _ref.cover,\n      cover = _ref$cover === void 0 ? DEFAULT_IMAGE : _ref$cover,\n      _ref$path = _ref.path,\n      path = _ref$path === void 0 ? '#' : _ref$path,\n      _ref$emoji = _ref.emoji,\n      emoji = _ref$emoji === void 0 ? '?' : _ref$emoji;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: path\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n    Image: true,\n    src: cover\n  }), emoji);\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/Category/index.js?");

/***/ }),

/***/ "./src/components/Category/styles.js":
/*!*******************************************!*\
  !*** ./src/components/Category/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => (/* binding */ Link),\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nvar _templateObject, _templateObject2;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    text-decoration: none;\\n    width: 75px;\\n\"])));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    border: 1px solid #ddd;\\n    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);\\n    border-radius: 50%;\\n    overflow: hidden;\\n    object-fit: cover;\\n    height: 75px;\\n    width: 75px;\\n\"])));\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/Category/styles.js?");

/***/ }),

/***/ "./src/components/ListOfCategories/index.js":
/*!**************************************************!*\
  !*** ./src/components/ListOfCategories/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfCategories/styles.js\");\n/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Category */ \"./src/components/Category/index.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction useCategoriesData() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      categories = _useState2[0],\n      setCategories = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState4 = _slicedToArray(_useState3, 2),\n      loading = _useState4[0],\n      setLoading = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    setLoading(true);\n    window.fetch('https://api-petgram-nu.vercel.app/categories').then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setCategories(data);\n      setLoading(false);\n    });\n  }, []);\n  return {\n    categories: categories,\n    loading: loading\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var _useCategoriesData = useCategoriesData(),\n      categories = _useCategoriesData.categories,\n      loading = _useCategoriesData.loading;\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      showFixed = _useState6[0],\n      setShowFixed = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var onScroll = function onScroll(e) {\n      var newShowFixed = window.scrollY > 200;\n      showFixed !== newShowFixed && setShowFixed(newShowFixed);\n    };\n\n    document.addEventListener('scroll', onScroll);\n    return function () {\n      return document.removeEventListener('scroll', onScroll);\n    };\n  }, [showFixed]);\n\n  var renderList = function renderList(fixed) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.List, {\n      fixed: fixed\n    }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Item, {\n      key: \"loading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Category__WEBPACK_IMPORTED_MODULE_2__.default, null)) : categories.map(function (category) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Item, {\n        key: category.id\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Category__WEBPACK_IMPORTED_MODULE_2__.default, _extends({}, category, {\n        path: \"/pets/\".concat(category.id)\n      })));\n    }));\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderList(), showFixed && renderList(true));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfCategories/index.js?");

/***/ }),

/***/ "./src/components/ListOfCategories/styles.js":
/*!***************************************************!*\
  !*** ./src/components/ListOfCategories/styles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List),\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/animations */ \"./src/styles/animations.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar List = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    display: flex;\\n    overflow-x: scroll;\\n    margin-bottom: 20px;\\n    width: 100%;\\n    &::-webkit-scrollbar {\\n        display: none\\n    }\\n    \", \"\\n\"])), function (props) {\n  return props.fixed && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n      \", \";\\n      position: fixed;\\n      background: #fff;\\n      border-radius: 60px;\\n      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);\\n      left: 0 ;\\n      margin: 0 auto;\\n      max-width: 400px;\\n      padding: 5px;\\n      right: 0;\\n      top: -20px;\\n      transform: scale(.5);\\n      z-index: 1;\\n    \"])), (0,_styles_animations__WEBPACK_IMPORTED_MODULE_0__.fadeIn)({\n    time: '.4s'\n  }));\n});\nvar Item = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.li(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n    padding: 0 8px;\\n\"])));\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfCategories/styles.js?");

/***/ }),

/***/ "./src/components/ListOfPhotoCard/index.js":
/*!*************************************************!*\
  !*** ./src/components/ListOfPhotoCard/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListOfPhotoCardsComponent\": () => (/* binding */ ListOfPhotoCardsComponent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _PhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PhotoCard */ \"./src/components/PhotoCard/index.js\");\nvar _templateObject;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\nvar Ul = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.ul(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  padding: 10px;\\n\"])));\n\nvar ListOfPhotoCardsComponentA = function ListOfPhotoCardsComponentA(_ref) {\n  var _ref$data = _ref.data;\n  _ref$data = _ref$data === void 0 ? {} : _ref$data;\n  var _ref$data$photos = _ref$data.photos,\n      photos = _ref$data$photos === void 0 ? [] : _ref$data$photos;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ul, null, photos.map(function (card) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PhotoCard__WEBPACK_IMPORTED_MODULE_1__.default, _extends({\n      key: card.id\n    }, card));\n  }));\n};\n\nvar ListOfPhotoCardsComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.memo(ListOfPhotoCardsComponentA);\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfPhotoCard/index.js?");

/***/ }),

/***/ "./src/container/ListOfPhotoCards.js":
/*!*******************************************!*\
  !*** ./src/container/ListOfPhotoCards.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _hoc_withPhotos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hoc/withPhotos */ \"./src/hoc/withPhotos.js\");\n/* harmony import */ var _components_ListOfPhotoCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfPhotoCard */ \"./src/components/ListOfPhotoCard/index.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_hoc_withPhotos__WEBPACK_IMPORTED_MODULE_0__.withPhotos)(_components_ListOfPhotoCard__WEBPACK_IMPORTED_MODULE_1__.ListOfPhotoCardsComponent));\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/container/ListOfPhotoCards.js?");

/***/ }),

/***/ "./src/hoc/withPhotos.js":
/*!*******************************!*\
  !*** ./src/hoc/withPhotos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withPhotos\": () => (/* binding */ withPhotos)\n/* harmony export */ });\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ \"./node_modules/@apollo/react-hoc/lib/react-hoc.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar GET_PHOTOS = apollo_boost__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  query getPhotos($categoryId: ID) {\\n    photos(categoryId: $categoryId) {\\n      id\\n      categoryId\\n      src\\n      likes\\n      userId\\n      liked\\n    }\\n  }\\n\"])));\nvar withPhotos = (0,react_apollo__WEBPACK_IMPORTED_MODULE_1__.graphql)(GET_PHOTOS);\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/hoc/withPhotos.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ \"./src/pages/Layout.js\");\n/* harmony import */ var _components_ListOfCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ListOfCategories */ \"./src/components/ListOfCategories/index.js\");\n/* harmony import */ var _container_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/ListOfPhotoCards */ \"./src/container/ListOfPhotoCards.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var id = _ref.id;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"Inicio\",\n    subtitle: \"Con Petgram puedes ver fotos de animales muy adorables y lindos.\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfCategories__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_ListOfPhotoCards__WEBPACK_IMPORTED_MODULE_3__.default, {\n    categoryId: id\n  }));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Layout.js":
/*!*****************************!*\
  !*** ./src/pages/Layout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var children = _ref.children,\n      title = _ref.title,\n      subtitle = _ref.subtitle;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.default, null, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", null, title, \" | Petgram \\uD83D\\uDC36\"), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"meta\", {\n    name: \"description\",\n    content: subtitle\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, children));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/pages/Layout.js?");

/***/ })

}]);