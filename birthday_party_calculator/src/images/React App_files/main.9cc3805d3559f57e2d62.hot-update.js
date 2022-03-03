webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/main.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/main.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_wallpaper_gold_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/wallpaper_gold.svg */ "./src/images/wallpaper_gold.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_wallpaper_gold_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* --- Imports from app --- */\n:root {\n  font-size: 10px;\n  font-family: 'Lobster', cursive;\n  letter-spacing: .25rem; }\n\n.App {\n  text-align: center; }\n  .App .logos {\n    display: flex;\n    margin-bottom: 15px; }\n    .App .logos .logo {\n      width: 40%; }\n      @media (min-width: 1500px) {\n        .App .logos .logo {\n          width: 15%;\n          position: absolute;\n          left: 2%;\n          top: 5%; } }\n    .App .logos .calculator {\n      width: 50%;\n      margin-left: 30px; }\n      @media (min-width: 1500px) {\n        .App .logos .calculator {\n          width: 15%;\n          position: absolute;\n          left: 2%;\n          top: 20%; } }\n  .App .App-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #ac1717ce;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: #00de00; }\n    .App .App-header .title-header {\n      display: inline-block;\n      margin: 20px;\n      font-size: 3rem;\n      font-weight: bold;\n      color: #007bff;\n      text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n  .App .info-promotion {\n    position: relative; }\n    .App .info-promotion .info-promotion-text {\n      font-size: 2rem;\n      color: purple;\n      margin: 10px; }\n  .App .count {\n    width: 90%;\n    font-size: 2rem;\n    margin: 1rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: rgba(162, 0, 255, 0.7);\n    margin: 1rem; }\n    .App .count .slider-title {\n      color: yellow;\n      font-size: 3rem;\n      margin: 1rem; }\n    .App .count .slider {\n      width: 85%;\n      margin: 0 1rem; }\n  .App .total {\n    margin: auto;\n    padding: .5rem;\n    font-size: 1.5rem;\n    max-width: 600px;\n    color: #e2d300;\n    flex-wrap: no-wrap;\n    position: sticky;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: #285ae4; }\n    .App .total .total__price {\n      width: 100px; }\n\n.center {\n  position: relative;\n  top: -px; }\n\n.label__checkbox {\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: 5px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  transition: border .3s ease; }\n  .label__checkbox i.icon {\n    opacity: 0.2;\n    transition: opacity .3s .1s ease;\n    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5); }\n  .label__checkbox:hover {\n    border: 5px solid rgba(0, 0, 0, 0.2); }\n\n.label__checkbox__checked {\n  width: 1em;\n  height: 1em;\n  background: #00d478;\n  border: 4px solid #00d478;\n  opacity: 1;\n  border-radius: 50%; }\n\n.button {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #670067;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .button:hover {\n    color: yellow;\n    background-color: purple; }\n\n.atractions {\n  margin-top: 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 8px 4px #58a9ff;\n  border-radius: 20px;\n  background-color: #006300; }\n  .atractions .sliders-title {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #007bff;\n    text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n  .atractions .sliders {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    text-align: center;\n    padding-bottom: 15px; }\n    .atractions .sliders .atractions-slider {\n      width: 250px;\n      letter-spacing: 1;\n      align-items: center;\n      margin: 5px;\n      box-shadow: 0 3px 8px 4px #58a9ff;\n      border-radius: 20px;\n      background-color: rgba(162, 0, 255, 0.7);\n      border-radius: 2rem; }\n      .atractions .sliders .atractions-slider .pigtails {\n        color: #38e2ee; }\n      .atractions .sliders .atractions-slider .face-painting {\n        color: #ff00ff; }\n      .atractions .sliders .atractions-slider .tatoos {\n        color: #fd3500; }\n      .atractions .sliders .atractions-slider .baloons {\n        color: #00de00; }\n      .atractions .sliders .atractions-slider .atractions-title {\n        display: inline-block;\n        margin: .25rem;\n        font-size: 2rem; }\n  .atractions .total-atractions {\n    display: inline-block;\n    margin: 5rem 0;\n    color: #fff901; }\n\n.extras {\n  margin: 1rem 0;\n  box-shadow: 0 3px 8px 4px #58a9ff;\n  border-radius: 20px;\n  background-color: #e7aa25;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .extras .extras-title {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #007bff;\n    text-shadow: #ffffff 0.1em 0.1em 0.2em;\n    width: 90%; }\n  .extras .assistant,\n  .extras .numberBaloon,\n  .extras .piniata,\n  .extras .ekoTableware {\n    display: inline-block;\n    margin: 1rem; }\n  .extras .bouquet {\n    position: relative;\n    width: 80%;\n    display: inline-block;\n    margin: 20px;\n    text-align: center;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: rgba(162, 0, 255, 0.7); }\n    .extras .bouquet .bouquet-title {\n      display: inline-block;\n      margin: 20px;\n      font-size: 3rem;\n      font-weight: bold;\n      color: #007bff;\n      text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n    .extras .bouquet .bouquet-btns {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      flex-wrap: wrap; }\n      .extras .bouquet .bouquet-btns .btn-bouquet {\n        margin: 1rem; }\n\n.btn-assistant {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-assistant:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n.btn-baloons {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #285ae4;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-baloons:hover {\n    color: yellow;\n    background-color: #285ae4; }\n\n.btn-number {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-number:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n.btn-pinata {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-pinata:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n/* --- Imports from partials here --- */\n:root {\n  font-size: 10px;\n  font-family: 'Lobster', cursive;\n  letter-spacing: .25rem; }\n\nbody {\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #007bff; }\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto; }\n", "",{"version":3,"sources":["webpack://src/main.scss","webpack://src/scss/partials/_root.scss","webpack://src/scss/App.scss","webpack://src/scss/partials/_mixins.scss","webpack://src/scss/partials/_colors.scss","webpack://src/scss/SelectedPrice/SelectedPrice.scss","webpack://src/scss/Component-atractions/Component-atractions.scss","webpack://src/scss/Component-extras/Component-extras.scss"],"names":[],"mappings":"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","sourcesContent":["/* --- Imports from app --- */\n@import './scss/App.scss';\n@import './scss/SelectedPrice/SelectedPrice.scss';\n@import './scss/Component-atractions/Component-atractions.scss';\n@import './scss/Component-extras/Component-extras.scss';\n\n/* --- Imports from partials here --- */\n@import './scss/partials/root';\n@import './scss/partials/colors';\n\n\n\nbody {\n  padding: 0;\n  box-sizing: border-box;\n  background-color: $blue;\n}\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n","@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\n:root {\n    font-size: 10px;\n    font-family: 'Lobster', cursive;\n    letter-spacing: .25rem;\n}","@import './partials/mixins';\n@import './partials/colors';\n@import './partials/root';\n\n.App {\n  text-align: center;\n\n  .logos {\n\n    display: flex;\n    margin-bottom: 15px;\n    .logo {\n    width: 40%;\n    @include desktop-main {\n      width: 15%;\n      position: absolute;\n      left: 2%;\n      top: 5%;\n      }\n    }\n    .calculator {\n      width: 50%;\n      margin-left: 30px;\n      @include desktop-main {\n        width: 15%;\n        position: absolute;\n        left: 2%;\n        top: 20%;\n        }\n     }\n  }\n\n\n  .App-header {\n    @include displayFlex(center);\n    flex-wrap: wrap;\n    color: $dark-red;\n    background-image: url(\"../images/wallpaper_gold.svg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    // @include wallPaperBoxes((url(\"../images/wallpaper_gold.svg\")));\n    @include shadowBoxes ($green);\n    .title-header {\n      @include titleBoxes;\n    }\n  }\n\n  .info-promotion {\n     position: relative;\n     .info-promotion-text {\n      font-size: 2rem;\n      color: $purple; \n      margin: 10px;\n     }\n     \n  }\n\n  .count {\n    width: 90%;\n    font-size: 2rem;\n    margin: 1rem 0;\n    .slider-title {\n        color: $yellow;\n        font-size: 3rem;\n        margin: 1rem;\n      }\n    .slider {\n      width: 85%;\n      margin: 0 1rem;\n    }\n    @include displayFlex(center);\n    @include shadowBoxes(rgba(162, 0, 255, 0.7));\n    @include marginBoxes;\n  }\n\n  .total {\n    margin: auto;\n    padding: .5rem;\n    font-size: 1.5rem;\n    max-width: 600px;\n    color: $gold-dark;\n    flex-wrap: no-wrap;\n    position: sticky;\n    bottom: 0;\n    @include displayFlex(space-between);\n    @include shadowBoxes($D);\n    .total__price {\n      width: 100px;\n    }\n  }\n}\n\n\n.center {\n  position: relative;\n  top: -px;\n}\n\n.label__checkbox {\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: 5px solid rgba(0,0,0,0.1);\n  background: white;\n  transition: border .3s ease;\n  i.icon {\n    opacity: 0.2;\n    transition: opacity .3s .1s ease;\n    -webkit-text-stroke: 3px rgba(0,0,0,.5);\n  }\n  \n  &:hover {\n    border: 5px solid rgba(0,0,0,0.2);\n  }\n}\n\n.label__checkbox__checked {\n  width: 1em;\n  height: 1em;\n  background: #00d478;\n  border: 4px solid #00d478;\n  opacity: 1;\n  border-radius: 50%;\n}\n","@import './colors';\n\n\n@mixin desktop-main {\n    @media (min-width: 1500px) {\n      @content\n    }\n  }\n\n@mixin shadowBoxes($background) {\n    box-shadow: 0 3px 8px 4px $blue_sky;\n    border-radius: 20px;\n    background-color: $background;\n}\n\n@mixin marginBoxes {\n    margin: 1rem;\n}\n\n@mixin titleBoxes {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: $blue;\n    text-shadow: $white 0.1em 0.1em 0.2em;\n}\n@mixin displayFlex($justify-content) {\n    display: flex;\n    align-items: center;\n    justify-content: $justify-content;\n}\n\n@mixin wallPaperBoxes ($path) {\n    background-image: $path;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n@mixin box_shadow ($level) {\n    @if $level == 0 {\n        box-shadow: none;\n    } @else if $level == 1 {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)\n    } @else if $level == 2 {\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)\n    } @else if $level == 3 {\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)\n    } @else if $level == 4 {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)\n    } @else if $level == 5 {\n        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)\n    }\n}\n  \n@mixin btn ($color, $backGroundColorHover) {\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    // padding: .5rem 1.7rem;\n    margin: .5rem;\n    text-align: center;\n    display: inline-block;\n    font-size: 1.3rem;\n    font-weight: 700;\n    position: relative;\n    will-change: transform;\n    letter-spacing: .05rem;\n    position: relative;\n    background: $white;\n    color: $color;\n    overflow: hidden;\n    transition: .3s ease-in-out;\n    border-radius: .5rem;\n    font-family: 'Lobster', cursive;\n    font-size: 2rem;\n    \n    @include box_shadow(5);\n    &:hover {\n      color: $yellow;\n      background-color: $backGroundColorHover;\n    }\n}","\n$orange: #fd3500;\n$orange-pastel: #e7aa25;\n$green: #00de00;\n$dark-green: #006300;\n$light-green: #38e2ee;\n$blue: #007bff;\n$blue_sky: #58a9ff;\n$pink: #cc00ff;\n$gold: #fff901;\n$white: #ffffff;\n$black: #000000;\n$blue_background: #0073c1;\n$red: #ff0000;\n$dark-red: #ac1717ce;\n$purple: rgb(128, 0, 128);\n$gray: #5f5876;\n$valid-alert: #ff7f7f;\n$indigo: #4b0082;\n$yellow: rgb(255, 255, 0);\n$fuchsia: #ff00ff;\n$coral: #ff7f50;\n$olivedrab: #6b8e23;\n$D: #285ae4;\n$green-pastel: #008664;\n$gold-dark: #e2d300;\n\n$deeper: darken($purple, 5%);\n$lighter: lighten($light-green, 10%);","@import '../partials/mixins';\n@import '../partials/colors';\n\n  .button {\n    @include btn($deeper, $purple)\n  }\n\n  \n\n  \n","@import '../partials/mixins';\n@import '../partials/colors';\n\n\n.atractions {\n    margin-top: 1rem;\n    background-image: url('../../images/wallpaper_gold.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    @include shadowBoxes($dark-green);\n    .sliders-title {\n        @include titleBoxes;\n    }\n    .sliders {\n        @include displayFlex(center);\n        flex-wrap: wrap;\n        text-align: center;\n        padding-bottom: 15px;\n        .atractions-slider {\n            width: 250px;\n            letter-spacing: 1;\n            align-items: center;\n            margin: 5px;\n            @include shadowBoxes(rgba(162, 0, 255, 0.7));\n            border-radius: 2rem;\n            // color: $orange;\n            .pigtails {\n                color: $light-green;\n            }\n            .face-painting {\n                color: $fuchsia;\n            }\n            .tatoos {\n                color: $orange;\n            }\n            .baloons {\n                color: $green;\n            }\n            .atractions-title {\n                display: inline-block;\n                margin: .25rem;\n                font-size: 2rem;\n            }\n        }\n        \n    }\n    .total-atractions {\n        display: inline-block;\n        margin: 5rem 0;\n        color: $gold;\n    }\n\n}","@import '../partials/colors';\n@import '../partials/mixins';\n\n.extras {\n  margin: 1rem 0;\n  @include shadowBoxes ($orange-pastel);\n  background-image: url('../../images/wallpaper_gold.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  .extras-title {\n    @include titleBoxes;\n    width: 90%;\n    \n  }\n\n  .assistant,\n  .numberBaloon,\n  .piniata,\n  .ekoTableware {\n    display: inline-block;\n    margin: 1rem\n  }\n\n  .bouquet {\n    position: relative;\n    width: 80%;\n    display: inline-block;\n    margin: 20px;\n    text-align: center;\n    @include shadowBoxes(rgba(162, 0, 255, 0.7));\n      .bouquet-title {\n        @include titleBoxes;\n      }\n      .bouquet-btns {\n        @include displayFlex(center);\n        text-align: center;\n        flex-wrap: wrap;\n        // margin: 20px;\n        .btn-bouquet {\n          margin: 1rem\n        }\n      }\n  }\n  \n}\n\n.btn-assistant {\n    @include btn($olivedrab, $olivedrab);\n}\n\n.btn-baloons {\n    @include btn($D, $D);\n}\n\n.btn-number {\n    @include btn($olivedrab, $olivedrab);\n}\n\n.btn-pinata {\n  @include btn($olivedrab, $olivedrab);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=main.9cc3805d3559f57e2d62.hot-update.js.map