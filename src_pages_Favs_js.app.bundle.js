/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcurso_platzi_react_avanzado"] = self["webpackChunkcurso_platzi_react_avanzado"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ListOfFavs/styles.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {\n  var favs = _ref.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Grid, null, favs.map(function (fav) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Link, {\n      key: fav.id,\n      to: \"/detail/\".concat(fav.id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n      src: fav.src\n    }));\n  }));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfFavs/index.js?");

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Link\": () => (/* binding */ Link),\n/* harmony export */   \"Grid\": () => (/* binding */ Grid),\n/* harmony export */   \"Image\": () => (/* binding */ Image)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ \"./node_modules/@reach/router/es/index.js\");\nvar _templateObject, _templateObject2, _templateObject3;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\nvar Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n    border-radius: 8px;\\n    box-shadow: 0 0 8px rgba(0,0,0,.3);\\n    display: inline-block;\\n    margin: 1%;\\n    overflow: hidden;\\n    position: relative;\\n    width: 31.33%;\\n\\n    &:after {\\n        content: '';\\n        display: block;\\n        padding-bottom: 100%;\\n    }\\n\"])));\nvar Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n    padding-top: 32px;\\n\"])));\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n    object-fit: cover;\\n    height: 100%;\\n    width: 100%;\\n    position: absolute;\\n\"])));\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/components/ListOfFavs/styles.js?");

/***/ }),

/***/ "./src/container/GetFavorites.js":
/*!***************************************!*\
  !*** ./src/container/GetFavorites.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FavsWithQuery\": () => (/* binding */ FavsWithQuery)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ \"./node_modules/@apollo/react-components/lib/react-components.esm.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs */ \"./src/components/ListOfFavs/index.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\nvar GET_FAVS = apollo_boost__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\nquery getFavs {\\n    favs {\\n      id,\\n      categoryId,\\n      src,\\n      likes,\\n      userId\\n    }\\n  }\\n\"])));\n\nvar renderProp = function renderProp(_ref) {\n  var loading = _ref.loading,\n      error = _ref.error,\n      data = _ref.data;\n  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Loading...\");\n  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"Erro!...\");\n  var favs = data.favs;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.default, {\n    favs: favs\n  });\n};\n\nvar FavsWithQuery = function FavsWithQuery() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__.Query, {\n    query: GET_FAVS,\n    fetchPolicy: \"network-only\"\n  }, renderProp);\n};\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/container/GetFavorites.js?");

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ \"./src/pages/Layout.js\");\n/* harmony import */ var _container_GetFavorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/GetFavorites */ \"./src/container/GetFavorites.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    title: \"Tus Favoritos\",\n    subtitle: \"Aqui puedes ver tus favoritos\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_GetFavorites__WEBPACK_IMPORTED_MODULE_2__.FavsWithQuery, null));\n});\n\n//# sourceURL=webpack://curso-platzi-react-avanzado/./src/pages/Favs.js?");

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