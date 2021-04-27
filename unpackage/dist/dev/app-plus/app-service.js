(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 8));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 9));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsdUU7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/pages.json ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!**********************************************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************************************************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/rengar.liu/MyCodes/frontend/snake/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _vm._l(_vm._$s(1, "f", { forItems: _vm.maps }), function(
        row,
        i,
        $20,
        $30
      ) {
        return _c(
          "view",
          {
            key: _vm._$s(1, "f", { forIndex: $20, key: "row-" + i }),
            staticClass: _vm._$s("1-" + $30, "sc", "row"),
            attrs: { _i: "1-" + $30 }
          },
          _vm._l(_vm._$s(2 + "-" + $30, "f", { forItems: row }), function(
            col,
            j,
            $21,
            $31
          ) {
            return _c(
              "view",
              {
                key: _vm._$s(2 + "-" + $30, "f", {
                  forIndex: $21,
                  key: "col-" + j
                })
              },
              [
                _c("view", {
                  class: _vm._$s("3-" + $30 + "-" + $31, "c", {
                    block: true,
                    black: _vm.maps[i][j],
                    white: !_vm.maps[i][j]
                  }),
                  attrs: { _i: "3-" + $30 + "-" + $31 }
                })
              ]
            )
          }),
          0
        )
      }),
      _c("view", { staticClass: _vm._$s(4, "sc", "row"), attrs: { _i: 4 } }, [
        _c("button", {
          attrs: { _i: 5 },
          on: {
            click: function($event) {
              return _vm.init()
            }
          }
        }),
        _c("button", {
          attrs: { _i: 6 },
          on: {
            click: function($event) {
              return _vm.turn("top")
            }
          }
        }),
        _c("button", {
          attrs: { _i: 7 },
          on: {
            click: function($event) {
              return _vm.stop()
            }
          }
        })
      ]),
      _c("view", { staticClass: _vm._$s(8, "sc", "row"), attrs: { _i: 8 } }, [
        _c("button", {
          attrs: { _i: 9 },
          on: {
            click: function($event) {
              return _vm.turn("left")
            }
          }
        }),
        _c("button", {
          attrs: { _i: 10 },
          on: {
            click: function($event) {
              return _vm.turn("bottom")
            }
          }
        }),
        _c("button", {
          attrs: { _i: 11 },
          on: {
            click: function($event) {
              return _vm.turn("right")
            }
          }
        })
      ])
    ],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/rengar.liu/MyCodes/frontend/snake/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i[\"return\"] != null) _i[\"return\"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      maps: [],\n      snake: [],\n      foods: [],\n      width: 10,\n      height: 10,\n      windowWidth: 0,\n      windowHeight: 0,\n      game_over: false,\n      top: [-1, 0],\n      right: [0, 1],\n      bottom: [1, 0],\n      left: [0, -1],\n      next: [-1, 0],\n      current: 'top',\n      timer: null,\n      interval: 500,\n      speed_quick: 200,\n      speed_common: 500 };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    uni.getSystemInfo({\n      success: function success(res) {\n        _this.windowWidth = res.windowWidth;\n        _this.windowHeight = res.windowHeight;\n      } });\n\n\n    this.init();\n  },\n  methods: {\n    init: function init() {\n      this.initMap();\n      this.initSnake();\n      this.initFoods();\n      this.play();\n    },\n\n    stop: function stop() {\n      if (this.timer) {\n        clearInterval(this.timer);\n        this.timer = null;\n      } else {\n        this.play();\n      }\n    },\n\n    initMap: function initMap() {\n      this.maps = [];\n      this.game_over = false;\n      this.width = Math.floor(this.windowWidth / 10);\n      this.height = Math.floor(this.windowHeight * 0.7 / 10);\n\n      var row,value = [[], 0];\n      for (var i = 0; i < this.height; i++) {\n        row = [];\n        for (var j = 0; j < this.width; j++) {\n          value = i == 0 || j == 0 || i == this.height - 1 || j == this.width - 1 ? 1 : 0;\n          row.push(value);\n          if (value == 0) {\n            this.foods.push([i, j]);\n          }\n        }\n        this.maps.push(row);\n      }\n    },\n\n    initSnake: function initSnake() {\n      this.snake = [];\n      var x = Math.floor(this.height / 2);\n      var y = Math.floor(this.width / 2);\n      this.maps[x][y] = 1;\n      this.snake.unshift([x, y]);var _this$next = _slicedToArray(\n\n      this.next, 2),i = _this$next[0],j = _this$next[1];\n      this.maps[x + i][y + j] = 1;\n      this.snake.unshift([x + i, y + j]);\n    },\n\n    goNext: function goNext() {var _this$next2 = _slicedToArray(\n      this.next, 2),i = _this$next2[0],j = _this$next2[1];var _this$snake$ = _slicedToArray(\n      this.snake[0], 2),x = _this$snake$[0],y = _this$snake$[1];var\n      row = x + i,col = y + j;\n      if (row == 0 ||\n      row == this.height - 1 ||\n      col == 0 ||\n      col == this.width - 1) {\n        this.game_over = true;\n        clearInterval(this.timer);\n        return;\n      } else {\n        this.snake.unshift([row, col]);\n        if (this.maps[row][col] == 0) {\n          this.maps[row][col] = 1;var _this$snake$pop =\n          this.snake.pop(),_this$snake$pop2 = _slicedToArray(_this$snake$pop, 2),lastX = _this$snake$pop2[0],lastY = _this$snake$pop2[1];\n          this.maps[lastX][lastY] = 0;\n        } else {\n          this.initFoods();\n        }\n      }\n      this.$forceUpdate();\n    },\n\n    initFoods: function initFoods() {\n      if (this.foods.length > 0) {\n        var index = parseInt(Math.random() * this.foods.length);var _this$foods$index = _slicedToArray(\n        this.foods[index], 2),x = _this$foods$index[0],y = _this$foods$index[1];\n        this.maps[x][y] = 1;\n        this.foods.splice(index, 1);\n      } else {\n        this.game_over = true;\n      }\n    },\n\n    play: function play() {var _this2 = this;\n      clearInterval(this.timer);\n      if (!this.game_over) {\n        this.timer = setInterval(function () {\n          _this2.goNext();\n        }, this.interval);\n      }\n    },\n\n    turn: function turn(type) {\n      switch (type) {\n        case 'top':\n        case 'bottom':\n          if (this.current == 'top' || this.current == 'bottom') {\n            return;\n          }\n          break;\n        case 'left':\n        case 'right':\n          if (this.current == 'left' || this.current == 'right') {\n            return;\n          }\n          break;}\n\n\n      this.current = type;\n      this.next = eval('this.' + type);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJtYXBzIiwic25ha2UiLCJmb29kcyIsIndpZHRoIiwiaGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJnYW1lX292ZXIiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJuZXh0IiwiY3VycmVudCIsInRpbWVyIiwiaW50ZXJ2YWwiLCJzcGVlZF9xdWljayIsInNwZWVkX2NvbW1vbiIsIm9uTG9hZCIsInVuaSIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaW5pdCIsIm1ldGhvZHMiLCJpbml0TWFwIiwiaW5pdFNuYWtlIiwiaW5pdEZvb2RzIiwicGxheSIsInN0b3AiLCJjbGVhckludGVydmFsIiwiTWF0aCIsImZsb29yIiwicm93IiwidmFsdWUiLCJpIiwiaiIsInB1c2giLCJ4IiwieSIsInVuc2hpZnQiLCJnb05leHQiLCJjb2wiLCJwb3AiLCJsYXN0WCIsImxhc3RZIiwiJGZvcmNlVXBkYXRlIiwibGVuZ3RoIiwiaW5kZXgiLCJwYXJzZUludCIsInJhbmRvbSIsInNwbGljZSIsInNldEludGVydmFsIiwidHVybiIsInR5cGUiLCJldmFsIl0sIm1hcHBpbmdzIjoibWhEQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsVUFBSSxFQUFFLEVBREE7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsV0FBSyxFQUFFLEVBSEQ7QUFJTkMsV0FBSyxFQUFFLEVBSkQ7QUFLTkMsWUFBTSxFQUFFLEVBTEY7QUFNTkMsaUJBQVcsRUFBRSxDQU5QO0FBT05DLGtCQUFZLEVBQUUsQ0FQUjtBQVFOQyxlQUFTLEVBQUUsS0FSTDtBQVNOQyxT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NkZHO0FBQ1YsY0FBT0EsSUFBUDtBQUNDLGFBQUssS0FBTDtBQUNBLGFBQUssUUFBTDtBQUNDLGNBQUksS0FBS3pDLE9BQUwsSUFBZ0IsS0FBaEIsSUFBeUIsS0FBS0EsT0FBTCxJQUFnQixRQUE3QyxFQUF1RDtBQUN0RDtBQUNBO0FBQ0Q7QUFDRCxhQUFLLE1BQUw7QUFDQSxhQUFLLE9BQUw7QUFDQyxjQUFJLEtBQUtBLE9BQUwsSUFBZ0IsTUFBaEIsSUFBMEIsS0FBS0EsT0FBTCxJQUFnQixPQUE5QyxFQUF1RDtBQUN0RDtBQUNBO0FBQ0QsZ0JBWkY7OztBQWVBLFdBQUtBLE9BQUwsR0FBZXlDLElBQWY7QUFDQSxXQUFLMUMsSUFBTCxHQUFZMkMsSUFBSSxDQUFDLFVBQVVELElBQVgsQ0FBaEI7QUFDQSxLQS9HTyxFQWpDSyxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRtYXBzOiBbXSxcblx0XHRcdHNuYWtlOiBbXSxcblx0XHRcdGZvb2RzOiBbXSxcblx0XHRcdHdpZHRoOiAxMCxcblx0XHRcdGhlaWdodDogMTAsXG5cdFx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHRcdGdhbWVfb3ZlcjogZmFsc2UsXG5cdFx0XHR0b3A6IFstMSwgMF0sXG5cdFx0XHRyaWdodDogWzAsIDFdLFxuXHRcdFx0Ym90dG9tOiBbMSwgMF0sXG5cdFx0XHRsZWZ0OiBbMCwgLTFdLFxuXHRcdFx0bmV4dDogWy0xLCAwXSxcblx0XHRcdGN1cnJlbnQ6ICd0b3AnLFxuXHRcdFx0dGltZXI6IG51bGwsXG5cdFx0XHRpbnRlcnZhbDogNTAwLFxuXHRcdFx0c3BlZWRfcXVpY2s6IDIwMCxcblx0XHRcdHNwZWVkX2NvbW1vbjogNTAwLFxuXHRcdH1cblx0fSxcblx0b25Mb2FkKCkge1xuXHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcblx0XHRcdHN1Y2Nlc3M6ICByZXMgPT4ge1xuXHRcdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xuXHRcdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmluaXQoKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGluaXQoKSB7XG5cdFx0XHR0aGlzLmluaXRNYXAoKTtcblx0XHRcdHRoaXMuaW5pdFNuYWtlKCk7XG5cdFx0XHR0aGlzLmluaXRGb29kcygpO1xuXHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0fSxcblx0XHRcblx0XHRzdG9wKCkge1xuXHRcdFx0aWYgKHRoaXMudGltZXIpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcblx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdGluaXRNYXAoKSB7XG5cdFx0XHR0aGlzLm1hcHMgPSBbXTtcblx0XHRcdHRoaXMuZ2FtZV9vdmVyID0gZmFsc2U7XG5cdFx0XHR0aGlzLndpZHRoID0gTWF0aC5mbG9vcih0aGlzLndpbmRvd1dpZHRoIC8gMTApO1xuXHRcdFx0dGhpcy5oZWlnaHQgPSBNYXRoLmZsb29yKHRoaXMud2luZG93SGVpZ2h0ICogMC43IC8gMTApO1xuXHRcdFx0XG5cdFx0XHRsZXQgcm93LCB2YWx1ZSA9IFtbXSwgMF07XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaGVpZ2h0OyBpKyspIHtcblx0XHRcdFx0cm93ID0gW107XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy53aWR0aDsgaisrKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAoaSA9PSAwIHx8IGogPT0gMCB8fCBpID09IHRoaXMuaGVpZ2h0IC0gMSB8fCBqID09IHRoaXMud2lkdGggLSAxKSA/IDEgOiAwO1xuXHRcdFx0XHRcdHJvdy5wdXNoKHZhbHVlKTtcblx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5mb29kcy5wdXNoKFtpLCBqXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMubWFwcy5wdXNoKHJvdyk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcblx0XHRpbml0U25ha2UoKSB7XG5cdFx0XHR0aGlzLnNuYWtlID0gW107XG5cdFx0XHRsZXQgeCA9IE1hdGguZmxvb3IodGhpcy5oZWlnaHQgLyAyKTtcblx0XHRcdGxldCB5ID0gTWF0aC5mbG9vcih0aGlzLndpZHRoIC8gMik7XG5cdFx0XHR0aGlzLm1hcHNbeF1beV0gPSAxO1xuXHRcdFx0dGhpcy5zbmFrZS51bnNoaWZ0KFt4LCB5XSk7XG5cdFx0XHRcblx0XHRcdGxldCBbaSwgal0gPSB0aGlzLm5leHQ7XG5cdFx0XHR0aGlzLm1hcHNbeCArIGldW3kgKyBqXSA9IDE7XG5cdFx0XHR0aGlzLnNuYWtlLnVuc2hpZnQoW3ggKyBpLCB5ICsgal0pO1xuXHRcdH0sXG5cdFx0XG5cdFx0Z29OZXh0KCkge1xuXHRcdFx0bGV0IFtpLCBqXSA9IHRoaXMubmV4dDtcblx0XHRcdGxldCBbeCwgeV0gPSB0aGlzLnNuYWtlWzBdO1xuXHRcdFx0bGV0IFtyb3csIGNvbF0gPSBbeCArIGksIHkgKyBqXTtcblx0XHRcdGlmXHQocm93ID09IDAgXG5cdFx0XHR8fCByb3cgPT0gdGhpcy5oZWlnaHQgLSAxIFxuXHRcdFx0fHwgY29sID09IDAgXG5cdFx0XHR8fCBjb2wgPT0gdGhpcy53aWR0aCAtMSkge1xuXHRcdFx0XHR0aGlzLmdhbWVfb3ZlciA9IHRydWU7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc25ha2UudW5zaGlmdChbcm93LCBjb2xdKTtcblx0XHRcdFx0aWZcdCh0aGlzLm1hcHNbcm93XVtjb2xdID09IDApIHtcblx0XHRcdFx0XHR0aGlzLm1hcHNbcm93XVtjb2xdID0gMTtcblx0XHRcdFx0XHRsZXQgW2xhc3RYLCBsYXN0WV0gPSB0aGlzLnNuYWtlLnBvcCgpO1xuXHRcdFx0XHRcdHRoaXMubWFwc1tsYXN0WF1bbGFzdFldID0gMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmluaXRGb29kcygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLiRmb3JjZVVwZGF0ZSgpO1xuXHRcdH0sXG5cdFx0XG5cdFx0aW5pdEZvb2RzKCkge1xuXHRcdFx0aWYgKHRoaXMuZm9vZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsZXQgaW5kZXggPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogdGhpcy5mb29kcy5sZW5ndGgpO1xuXHRcdFx0XHRsZXQgW3gsIHldID0gdGhpcy5mb29kc1tpbmRleF07XG5cdFx0XHRcdHRoaXMubWFwc1t4XVt5XSA9IDE7XG5cdFx0XHRcdHRoaXMuZm9vZHMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZ2FtZV9vdmVyID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdHBsYXkoKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuXHRcdFx0aWZcdCghdGhpcy5nYW1lX292ZXIpIHtcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmdvTmV4dCgpO1xuXHRcdFx0XHR9LCB0aGlzLmludGVydmFsKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFxuXHRcdHR1cm4odHlwZSkge1xuXHRcdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAndG9wJzpcblx0XHRcdFx0Y2FzZSAnYm90dG9tJzpcblx0XHRcdFx0XHRpZlx0KHRoaXMuY3VycmVudCA9PSAndG9wJyB8fCB0aGlzLmN1cnJlbnQgPT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2xlZnQnOlxuXHRcdFx0XHRjYXNlICdyaWdodCc6XG5cdFx0XHRcdFx0aWZcdCh0aGlzLmN1cnJlbnQgPT0gJ2xlZnQnIHx8IHRoaXMuY3VycmVudCA9PSAncmlnaHQnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHR0aGlzLmN1cnJlbnQgPSB0eXBlO1xuXHRcdFx0dGhpcy5uZXh0ID0gZXZhbCgndGhpcy4nICsgdHlwZSk7XG5cdFx0fSxcblx0XHRcblx0XHRcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 9 */
/*!********************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/App.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHNcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************************!*\
  !*** /Users/rengar.liu/MyCodes/frontend/snake/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/rengar.liu/MyCodes/frontend/snake/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n\n    plus.screen.lockOrientation('portrait-primary');\n\n\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:11\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:14\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 12)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsInBsdXMiLCJzY3JlZW4iLCJsb2NrT3JpZW50YXRpb24iLCJvblNob3ciLCJvbkhpZGUiXSwibWFwcGluZ3MiOiI7QUFDZTtBQUNkQSxVQUFRLEVBQUUsb0JBQVc7QUFDcEIsaUJBQVksWUFBWjs7QUFFQUMsUUFBSSxDQUFDQyxNQUFMLENBQVlDLGVBQVosQ0FBNEIsa0JBQTVCOzs7QUFHQSxHQVBhO0FBUWRDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FWYTtBQVdkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBYmEsRSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQge1xuXHRvbkxhdW5jaDogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXG5cdFx0cGx1cy5zY3JlZW4ubG9ja09yaWVudGF0aW9uKCdwb3J0cmFpdC1wcmltYXJ5Jyk7XG5cblxuXHR9LFxuXHRvblNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdH0sXG5cdG9uSGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);