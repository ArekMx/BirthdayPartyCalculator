(this["webpackJsonpbirthday_party_calculator"] = this["webpackJsonpbirthday_party_calculator"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.i, "/* --- Imports from app --- */\n:root {\n  font-size: 10px;\n  font-family: 'Lobster', cursive;\n  letter-spacing: .25rem; }\n\n.App {\n  text-align: center; }\n  .App .logos {\n    display: flex;\n    margin-bottom: 15px; }\n    .App .logos .logo {\n      width: 40%; }\n      @media (min-width: 1500px) {\n        .App .logos .logo {\n          width: 15%;\n          position: absolute;\n          left: 2%;\n          top: 5%; } }\n    .App .logos .calculator {\n      width: 50%;\n      margin-left: 30px; }\n      @media (min-width: 1500px) {\n        .App .logos .calculator {\n          width: 15%;\n          position: absolute;\n          left: 2%;\n          top: 20%; } }\n  .App .App-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    color: #ac1717ce;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: #00de00; }\n    .App .App-header .title-header {\n      display: inline-block;\n      margin: 20px;\n      font-size: 3rem;\n      font-weight: bold;\n      color: #007bff;\n      text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n  .App .info-promotion {\n    position: relative;\n    font-size: 2rem;\n    color: purple;\n    margin: 10px; }\n  .App .count {\n    width: 90%;\n    font-size: 2rem;\n    margin: 1rem 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: rgba(162, 0, 255, 0.7);\n    margin: 1rem; }\n    .App .count .slider-title {\n      color: yellow;\n      font-size: 3rem;\n      margin: 1rem; }\n    .App .count .slider {\n      width: 85%;\n      margin: 0 1rem; }\n  .App .total {\n    margin: auto;\n    padding: .5rem;\n    font-size: 1.5rem;\n    max-width: 600px;\n    color: #e2d300;\n    flex-wrap: no-wrap;\n    position: sticky;\n    bottom: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: #285ae4; }\n    .App .total .total__price {\n      width: 100px; }\n\n.center {\n  position: relative;\n  top: -px; }\n\n.label__checkbox {\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: 5px solid rgba(0, 0, 0, 0.1);\n  background: white;\n  transition: border .3s ease; }\n  .label__checkbox i.icon {\n    opacity: 0.2;\n    transition: opacity .3s .1s ease;\n    -webkit-text-stroke: 3px rgba(0, 0, 0, 0.5); }\n  .label__checkbox:hover {\n    border: 5px solid rgba(0, 0, 0, 0.2); }\n\n.label__checkbox__checked {\n  width: 1em;\n  height: 1em;\n  background: #00d478;\n  border: 4px solid #00d478;\n  opacity: 1;\n  border-radius: 50%; }\n\n.button {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #670067;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .button:hover {\n    color: yellow;\n    background-color: purple; }\n\n.atractions {\n  margin-top: 1rem;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  box-shadow: 0 3px 8px 4px #58a9ff;\n  border-radius: 20px;\n  background-color: #006300; }\n  .atractions .sliders-title {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #007bff;\n    text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n  .atractions .sliders {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    text-align: center;\n    padding-bottom: 15px; }\n    .atractions .sliders .atractions-slider {\n      width: 250px;\n      letter-spacing: 1;\n      align-items: center;\n      margin: 5px;\n      box-shadow: 0 3px 8px 4px #58a9ff;\n      border-radius: 20px;\n      background-color: rgba(162, 0, 255, 0.7);\n      border-radius: 2rem; }\n      .atractions .sliders .atractions-slider .pigtails {\n        color: #38e2ee; }\n      .atractions .sliders .atractions-slider .face-painting {\n        color: #ff00ff; }\n      .atractions .sliders .atractions-slider .tatoos {\n        color: #fd3500; }\n      .atractions .sliders .atractions-slider .baloons {\n        color: #00de00; }\n      .atractions .sliders .atractions-slider .atractions-title {\n        display: inline-block;\n        margin: .25rem;\n        font-size: 2rem; }\n  .atractions .total-atractions {\n    display: inline-block;\n    margin: 5rem 0;\n    color: #fff901; }\n\n.extras {\n  margin: 1rem 0;\n  box-shadow: 0 3px 8px 4px #58a9ff;\n  border-radius: 20px;\n  background-color: #e7aa25;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat; }\n  .extras .extras-title {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: #007bff;\n    text-shadow: #ffffff 0.1em 0.1em 0.2em;\n    width: 90%; }\n  .extras .assistant,\n  .extras .numberBaloon,\n  .extras .piniata,\n  .extras .ekoTableware {\n    display: inline-block;\n    margin: 1rem; }\n  .extras .bouquet {\n    position: relative;\n    width: 80%;\n    display: inline-block;\n    margin: 20px;\n    text-align: center;\n    box-shadow: 0 3px 8px 4px #58a9ff;\n    border-radius: 20px;\n    background-color: rgba(162, 0, 255, 0.7); }\n    .extras .bouquet .bouquet-title {\n      display: inline-block;\n      margin: 20px;\n      font-size: 3rem;\n      font-weight: bold;\n      color: #007bff;\n      text-shadow: #ffffff 0.1em 0.1em 0.2em; }\n    .extras .bouquet .bouquet-btns {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      flex-wrap: wrap; }\n      .extras .bouquet .bouquet-btns .btn-bouquet {\n        margin: 1rem; }\n\n.btn-assistant {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-assistant:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n.btn-baloons {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #285ae4;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-baloons:hover {\n    color: yellow;\n    background-color: #285ae4; }\n\n.btn-number {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-number:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n.btn-pinata {\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  margin: .5rem;\n  text-align: center;\n  display: inline-block;\n  font-size: 1.3rem;\n  font-weight: 700;\n  position: relative;\n  will-change: transform;\n  letter-spacing: .05rem;\n  position: relative;\n  background: #ffffff;\n  color: #6b8e23;\n  overflow: hidden;\n  transition: .3s ease-in-out;\n  border-radius: .5rem;\n  font-family: 'Lobster', cursive;\n  font-size: 2rem;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n  .btn-pinata:hover {\n    color: yellow;\n    background-color: #6b8e23; }\n\n/* --- Imports from partials here --- */\n:root {\n  font-size: 10px;\n  font-family: 'Lobster', cursive;\n  letter-spacing: .25rem; }\n\nbody {\n  padding: 0;\n  box-sizing: border-box;\n  background-color: #007bff; }\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto; }\n", "",{"version":3,"sources":["webpack://src/main.scss","webpack://src/scss/partials/_root.scss","webpack://src/scss/App.scss","webpack://src/scss/partials/_mixins.scss","webpack://src/scss/partials/_colors.scss","webpack://src/scss/SelectedPrice/SelectedPrice.scss","webpack://src/scss/Component-atractions/Component-atractions.scss","webpack://src/scss/Component-extras/Component-extras.scss"],"names":[],"mappings":"AAAA,6BAAA;ACEA;EACI,eAAe;EACf,+BAA+B;EAC/B,sBAAsB,EAAA;;ACD1B;EACE,kBAAkB,EAAA;EADpB;IAKI,aAAa;IACb,mBAAmB,EAAA;IANvB;MAQI,UAAU,EAAA;MCRV;QDAJ;UAUM,UAAU;UACV,kBAAkB;UAClB,QAAQ;UACR,OAAO,EAAA,EAER;IAfL;MAiBM,UAAU;MACV,iBAAiB,EAAA;MClBnB;QDAJ;UAoBQ,UAAU;UACV,kBAAkB;UAClB,QAAQ;UACR,QAAQ,EAAA,EAEV;EAzBN;ICwBI,aAAa;IACb,mBAAmB;IACnB,uBDI2B;IAC3B,eAAe;IACf,gBEtBgB;IFuBhB,yDAAqD;IACrD,sBAAsB;IACtB,4BAA4B;IC7B5B,iCCHc;IDId,mBAAmB;IACnB,yBCTW,EAAA;IFCf;MCgBI,qBAAqB;MACrB,YAAY;MACZ,eAAe;MACf,iBAAiB;MACjB,cClBU;MDmBV,sCAAqC,EAAA;EDrBzC;IA4CK,kBAAkB;IAClB,eAAe;IACf,aEnCoB;IFoCpB,YAAY,EAAA;EA/CjB;IAmDI,UAAU;IACV,eAAe;IACf,cAAc;IC7Bd,aAAa;IACb,mBAAmB;IACnB,uBDqC2B;ICzD3B,iCCHc;IDId,mBAAmB;IACnB,wCDwD2C;ICpD3C,YAAY,EAAA;IDZhB;MAuDQ,aExCiB;MFyCjB,eAAe;MACf,YAAY,EAAA;IAzDpB;MA4DM,UAAU;MACV,cAAc,EAAA;EA7DpB;IAqEI,YAAY;IACZ,cAAc;IACd,iBAAiB;IACjB,gBAAgB;IAChB,cEpDe;IFqDf,kBAAkB;IAClB,gBAAgB;IAChB,SAAS;ICpDT,aAAa;IACb,mBAAmB;IACnB,8BDmDkC;ICvElC,iCCHc;IDId,mBAAmB;IACnB,yBCWO,EAAA;IFnBX;MAgFM,YAAY,EAAA;;AAMlB;EACE,kBAAkB;EAClB,QAAQ,EAAA;;AAGV;EACE,eAAe;EACf,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,oCAAiC;EACjC,iBAAiB;EACjB,2BAA2B,EAAA;EAP7B;IASI,YAAY;IACZ,gCAAgC;IAChC,2CAAuC,EAAA;EAX3C;IAeI,oCAAiC,EAAA;;AAIrC;EACE,UAAU;EACV,WAAW;EACX,mBAAmB;EACnB,yBAAyB;EACzB,UAAU;EACV,kBAAkB,EAAA;;AGrHlB;EFqDE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EAEb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,mBC5DW;ED6DX,cC5CwB;ED6CxB,gBAAgB;EAChB,2BAA2B;EAC3B,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EAzBX,2EAA2E,EAAA;EA4B/E;IACE,aC7DmB;ID8DnB,wBClEmB,EAAA;;AEXzB;EACI,gBAAgB;EAChB,yDAAwD;EACxD,sBAAsB;EACtB,4BAA4B;EHE5B,iCCHc;EDId,mBAAmB;EACnB,yBCRgB,EAAA;EEApB;IHgBI,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,cClBU;IDmBV,sCAAqC,EAAA;EGrBzC;IHwBI,aAAa;IACb,mBAAmB;IACnB,uBGhB+B;IAC3B,eAAe;IACf,kBAAkB;IAClB,oBAAoB,EAAA;IAb5B;MAeY,YAAY;MACZ,iBAAiB;MACjB,mBAAmB;MACnB,WAAW;MHZnB,iCCHc;MDId,mBAAmB;MACnB,wCGWmD;MAC3C,mBAAmB,EAAA;MApB/B;QAuBgB,cFtBK,EAAA;MEDrB;QA0BgB,cFVC,EAAA;MEhBjB;QA6BgB,cFhCA,EAAA;MEGhB;QAgCgB,cFjCD,EAAA;MECf;QAmCgB,qBAAqB;QACrB,cAAc;QACd,eAAe,EAAA;EArC/B;IA2CQ,qBAAqB;IACrB,cAAc;IACd,cFxCM,EAAA;;AGNd;EACE,cAAc;EJMZ,iCCHc;EDId,mBAAmB;EACnB,yBCVmB;EGIrB,yDAAwD;EACxD,sBAAsB;EACtB,4BAA4B,EAAA;EAL9B;IJiBI,qBAAqB;IACrB,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,cClBU;IDmBV,sCAAqC;IIbrC,UAAU,EAAA;EATd;;;;IAiBI,qBAAqB;IACrB,YACF,EAAA;EAnBF;IAsBI,kBAAkB;IAClB,UAAU;IACV,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IJnBlB,iCCHc;IDId,mBAAmB;IACnB,wCIkB2C,EAAA;IA3B/C;MJiBI,qBAAqB;MACrB,YAAY;MACZ,eAAe;MACf,iBAAiB;MACjB,cClBU;MDmBV,sCAAqC,EAAA;IItBzC;MJyBI,aAAa;MACb,mBAAmB;MACnB,uBIK+B;MAC3B,kBAAkB;MAClB,eAAe,EAAA;MAlCvB;QAqCU,YACF,EAAA;;AAMR;EJSI,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EAEb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,mBC5DW;ED6DX,cCjDe;EDkDf,gBAAgB;EAChB,2BAA2B;EAC3B,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EAzBX,2EAA2E,EAAA;EA4B/E;IACE,aC7DmB;ID8DnB,yBC3Da,EAAA;;AG6BnB;EJKI,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EAEb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,mBC5DW;ED6DX,cChDO;EDiDP,gBAAgB;EAChB,2BAA2B;EAC3B,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EAzBX,2EAA2E,EAAA;EA4B/E;IACE,aC7DmB;ID8DnB,yBC1DK,EAAA;;AGgCX;EJCI,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EAEb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,mBC5DW;ED6DX,cCjDe;EDkDf,gBAAgB;EAChB,2BAA2B;EAC3B,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EAzBX,2EAA2E,EAAA;EA4B/E;IACE,aC7DmB;ID8DnB,yBC3Da,EAAA;;AGqCnB;EJHI,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,aAAa;EAEb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;EAClB,mBC5DW;ED6DX,cCjDe;EDkDf,gBAAgB;EAChB,2BAA2B;EAC3B,oBAAoB;EACpB,+BAA+B;EAC/B,eAAe;EAzBX,2EAA2E,EAAA;EA4B/E;IACE,aC7DmB;ID8DnB,yBC3Da,EAAA;;AJhBnB,uCAAA;ACJA;EACI,eAAe;EACf,+BAA+B;EAC/B,sBAAsB,EAAA;;ADO1B;EACE,UAAU;EACV,sBAAsB;EACtB,yBITY,EAAA;;AJYd;EACE,iBAAiB;EACjB,cAAc,EAAA","sourcesContent":["/* --- Imports from app --- */\n@import './scss/App.scss';\n@import './scss/SelectedPrice/SelectedPrice.scss';\n@import './scss/Component-atractions/Component-atractions.scss';\n@import './scss/Component-extras/Component-extras.scss';\n\n/* --- Imports from partials here --- */\n@import './scss/partials/root';\n@import './scss/partials/colors';\n\n\n\nbody {\n  padding: 0;\n  box-sizing: border-box;\n  background-color: $blue;\n}\n\n.container {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n","@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\n:root {\n    font-size: 10px;\n    font-family: 'Lobster', cursive;\n    letter-spacing: .25rem;\n}","@import './partials/mixins';\n@import './partials/colors';\n@import './partials/root';\n\n.App {\n  text-align: center;\n\n  .logos {\n\n    display: flex;\n    margin-bottom: 15px;\n    .logo {\n    width: 40%;\n    @include desktop-main {\n      width: 15%;\n      position: absolute;\n      left: 2%;\n      top: 5%;\n      }\n    }\n    .calculator {\n      width: 50%;\n      margin-left: 30px;\n      @include desktop-main {\n        width: 15%;\n        position: absolute;\n        left: 2%;\n        top: 20%;\n        }\n     }\n  }\n\n\n  .App-header {\n    @include displayFlex(center);\n    flex-wrap: wrap;\n    color: $dark-red;\n    background-image: url(\"../images/wallpaper_gold.svg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    // @include wallPaperBoxes((url(\"../images/wallpaper_gold.svg\")));\n    @include shadowBoxes ($green);\n    .title-header {\n      @include titleBoxes;\n    }\n  }\n\n  .info-promotion {\n     position: relative;\n     font-size: 2rem;\n     color: $purple; \n     margin: 10px;\n  }\n\n  .count {\n    width: 90%;\n    font-size: 2rem;\n    margin: 1rem 0;\n    .slider-title {\n        color: $yellow;\n        font-size: 3rem;\n        margin: 1rem;\n      }\n    .slider {\n      width: 85%;\n      margin: 0 1rem;\n    }\n    @include displayFlex(center);\n    @include shadowBoxes(rgba(162, 0, 255, 0.7));\n    @include marginBoxes;\n  }\n\n  .total {\n    margin: auto;\n    padding: .5rem;\n    font-size: 1.5rem;\n    max-width: 600px;\n    color: $gold-dark;\n    flex-wrap: no-wrap;\n    position: sticky;\n    bottom: 0;\n    @include displayFlex(space-between);\n    @include shadowBoxes($D);\n    .total__price {\n      width: 100px;\n    }\n  }\n}\n\n\n.center {\n  position: relative;\n  top: -px;\n}\n\n.label__checkbox {\n  cursor: pointer;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  border: 5px solid rgba(0,0,0,0.1);\n  background: white;\n  transition: border .3s ease;\n  i.icon {\n    opacity: 0.2;\n    transition: opacity .3s .1s ease;\n    -webkit-text-stroke: 3px rgba(0,0,0,.5);\n  }\n  \n  &:hover {\n    border: 5px solid rgba(0,0,0,0.2);\n  }\n}\n\n.label__checkbox__checked {\n  width: 1em;\n  height: 1em;\n  background: #00d478;\n  border: 4px solid #00d478;\n  opacity: 1;\n  border-radius: 50%;\n}\n","@import './colors';\n\n\n@mixin desktop-main {\n    @media (min-width: 1500px) {\n      @content\n    }\n  }\n\n@mixin shadowBoxes($background) {\n    box-shadow: 0 3px 8px 4px $blue_sky;\n    border-radius: 20px;\n    background-color: $background;\n}\n\n@mixin marginBoxes {\n    margin: 1rem;\n}\n\n@mixin titleBoxes {\n    display: inline-block;\n    margin: 20px;\n    font-size: 3rem;\n    font-weight: bold;\n    color: $blue;\n    text-shadow: $white 0.1em 0.1em 0.2em;\n}\n@mixin displayFlex($justify-content) {\n    display: flex;\n    align-items: center;\n    justify-content: $justify-content;\n}\n\n@mixin wallPaperBoxes ($path) {\n    background-image: $path;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n@mixin box_shadow ($level) {\n    @if $level == 0 {\n        box-shadow: none;\n    } @else if $level == 1 {\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)\n    } @else if $level == 2 {\n        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)\n    } @else if $level == 3 {\n        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)\n    } @else if $level == 4 {\n        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)\n    } @else if $level == 5 {\n        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)\n    }\n}\n  \n@mixin btn ($color, $backGroundColorHover) {\n    cursor: pointer;\n    background: none;\n    border: none;\n    outline: none;\n    // padding: .5rem 1.7rem;\n    margin: .5rem;\n    text-align: center;\n    display: inline-block;\n    font-size: 1.3rem;\n    font-weight: 700;\n    position: relative;\n    will-change: transform;\n    letter-spacing: .05rem;\n    position: relative;\n    background: $white;\n    color: $color;\n    overflow: hidden;\n    transition: .3s ease-in-out;\n    border-radius: .5rem;\n    font-family: 'Lobster', cursive;\n    font-size: 2rem;\n    \n    @include box_shadow(5);\n    &:hover {\n      color: $yellow;\n      background-color: $backGroundColorHover;\n    }\n}","\n$orange: #fd3500;\n$orange-pastel: #e7aa25;\n$green: #00de00;\n$dark-green: #006300;\n$light-green: #38e2ee;\n$blue: #007bff;\n$blue_sky: #58a9ff;\n$pink: #cc00ff;\n$gold: #fff901;\n$white: #ffffff;\n$black: #000000;\n$blue_background: #0073c1;\n$red: #ff0000;\n$dark-red: #ac1717ce;\n$purple: rgb(128, 0, 128);\n$gray: #5f5876;\n$valid-alert: #ff7f7f;\n$indigo: #4b0082;\n$yellow: rgb(255, 255, 0);\n$fuchsia: #ff00ff;\n$coral: #ff7f50;\n$olivedrab: #6b8e23;\n$D: #285ae4;\n$green-pastel: #008664;\n$gold-dark: #e2d300;\n\n$deeper: darken($purple, 5%);\n$lighter: lighten($light-green, 10%);","@import '../partials/mixins';\n@import '../partials/colors';\n\n  .button {\n    @include btn($deeper, $purple)\n  }\n\n  \n\n  \n","@import '../partials/mixins';\n@import '../partials/colors';\n\n\n.atractions {\n    margin-top: 1rem;\n    background-image: url('../../images/wallpaper_gold.svg');\n    background-size: cover;\n    background-repeat: no-repeat;\n    @include shadowBoxes($dark-green);\n    .sliders-title {\n        @include titleBoxes;\n    }\n    .sliders {\n        @include displayFlex(center);\n        flex-wrap: wrap;\n        text-align: center;\n        padding-bottom: 15px;\n        .atractions-slider {\n            width: 250px;\n            letter-spacing: 1;\n            align-items: center;\n            margin: 5px;\n            @include shadowBoxes(rgba(162, 0, 255, 0.7));\n            border-radius: 2rem;\n            // color: $orange;\n            .pigtails {\n                color: $light-green;\n            }\n            .face-painting {\n                color: $fuchsia;\n            }\n            .tatoos {\n                color: $orange;\n            }\n            .baloons {\n                color: $green;\n            }\n            .atractions-title {\n                display: inline-block;\n                margin: .25rem;\n                font-size: 2rem;\n            }\n        }\n        \n    }\n    .total-atractions {\n        display: inline-block;\n        margin: 5rem 0;\n        color: $gold;\n    }\n\n}","@import '../partials/colors';\n@import '../partials/mixins';\n\n.extras {\n  margin: 1rem 0;\n  @include shadowBoxes ($orange-pastel);\n  background-image: url('../../images/wallpaper_gold.svg');\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  .extras-title {\n    @include titleBoxes;\n    width: 90%;\n    \n  }\n\n  .assistant,\n  .numberBaloon,\n  .piniata,\n  .ekoTableware {\n    display: inline-block;\n    margin: 1rem\n  }\n\n  .bouquet {\n    position: relative;\n    width: 80%;\n    display: inline-block;\n    margin: 20px;\n    text-align: center;\n    @include shadowBoxes(rgba(162, 0, 255, 0.7));\n      .bouquet-title {\n        @include titleBoxes;\n      }\n      .bouquet-btns {\n        @include displayFlex(center);\n        text-align: center;\n        flex-wrap: wrap;\n        // margin: 20px;\n        .btn-bouquet {\n          margin: 1rem\n        }\n      }\n  }\n  \n}\n\n.btn-assistant {\n    @include btn($olivedrab, $olivedrab);\n}\n\n.btn-baloons {\n    @include btn($D, $D);\n}\n\n.btn-number {\n    @include btn($olivedrab, $olivedrab);\n}\n\n.btn-pinata {\n  @include btn($olivedrab, $olivedrab);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/calculator.svg":
/*!***********************************!*\
  !*** ./src/images/calculator.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/calculator.55313006.svg");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.41ac3f49.svg");

/***/ }),

/***/ "./src/images/wallpaper_gold.svg":
/*!***************************************!*\
  !*** ./src/images/wallpaper_gold.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/wallpaper_gold.306075e3.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/App.js */ "./src/js/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_js_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 5
}, undefined), document.getElementById('root'));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_Component_atractions_ComponentAtractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Component-atractions/ComponentAtractions */ "./src/js/Component-atractions/ComponentAtractions.js");
/* harmony import */ var _Component_table_select_TableSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component-table-select/TableSelect */ "./src/js/Component-table-select/TableSelect.js");
/* harmony import */ var _Component_extras_ComponentExtras__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component-extras/ComponentExtras */ "./src/js/Component-extras/ComponentExtras.js");
/* harmony import */ var _src_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _src_images_calculator_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/images/calculator.svg */ "./src/images/calculator.svg");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/App.js",
    _s = __webpack_require__.$Refresh$.signature();

// import logo from './logo.svg';








function App() {
  _s();

  const [total, setTotal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');
  const [totalAtractions, setTotalAtractions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [totalExtras, setTotalExtras] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [extraPriceEkoTableware, setExtraPriceEkoTableware] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''); // console.log(numOfKids);
  // console.log(extraPriceEkoTableware);

  const totalAll = (numOfKids, moneyPerKid) => {
    let costPerKid = Number(moneyPerKid) + Number(extraPriceEkoTableware);
    let productOfNumPrice = numOfKids * costPerKid;
    let sumOfTotalAtractExtras = totalAtractions + totalExtras;

    if (numOfKids > 10 && moneyPerKid === "38") {
      setTotal(productOfNumPrice - costPerKid + sumOfTotalAtractExtras);

      if (numOfKids > 21) {
        setTotal(productOfNumPrice - costPerKid * 2 + sumOfTotalAtractExtras);
      }
    } else if (numOfKids > 10 && moneyPerKid === "42") {
      setTotal(productOfNumPrice - costPerKid + sumOfTotalAtractExtras);

      if (numOfKids > 21) {
        setTotal(productOfNumPrice - costPerKid * 2 + sumOfTotalAtractExtras);
      }
    } else {
      setTotal(productOfNumPrice + sumOfTotalAtractExtras);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "App container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "logos",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        className: "logo",
        src: _src_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
        alt: "Sala_Zabaw_Piotruś"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
        className: "calculator",
        src: _src_images_calculator_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
        alt: "Kalkulator_urodzin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("header", {
      className: "App-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Component_table_select_TableSelect__WEBPACK_IMPORTED_MODULE_2__["ComponentTableSelect"], {
        numOfkids: totalAll
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_js_Component_atractions_ComponentAtractions__WEBPACK_IMPORTED_MODULE_1__["ComponentAtractions"], {
        onUp: x => setTotalAtractions(x)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      className: "extras",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Component_extras_ComponentExtras__WEBPACK_IMPORTED_MODULE_3__["ComponentExtras"], {
        onAddTotalExtras: x => setTotalExtras(x),
        onAddTableware: x => setExtraPriceEkoTableware(x)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("section", {
      className: "total",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "total__text",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
          children: "\u0141\u0105czna kwota imprezy urodzinowej:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "total__price",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h1", {
          children: [total, " z\u0142"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(App, "DHzjoSO5z5UryOobgNY0+wgYCvw=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-atractions/ComponentAtractions.js":
/*!************************************************************!*\
  !*** ./src/js/Component-atractions/ComponentAtractions.js ***!
  \************************************************************/
/*! exports provided: ComponentAtractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentAtractions", function() { return ComponentAtractions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_smooth_range_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-smooth-range-input */ "./node_modules/react-smooth-range-input/dist/index.es.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-atractions/ComponentAtractions.js",
    _s = __webpack_require__.$Refresh$.signature();





const ComponentAtractions = _ref => {
  _s();

  let {
    onUp
  } = _ref;
  // const [{pigtails, setPigtails},
  //        {facePainting, setFacePainting},
  //        {tatoos, setTatoos},
  //        {baloons, setBaloons}
  //       ] = useState('');
  const [pigtails, setPigtails] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [facePainting, setFacePainting] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [tatoos, setTatoos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [baloons, setBaloons] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [totalAtractions, setTotalAtractions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTotalAtractions(pigtails * 12 + facePainting * 10 + tatoos * 8 + baloons * 4);
  }, [pigtails, facePainting, tatoos, baloons]);
  onUp(totalAtractions); // /// Slider min number
  // const [pigtailsMin, setPigtailsMin] = useState(0);
  //   const check =()=> {
  //       if (pigtails === 0) {
  //           setPigtailsMin(0)
  //       }
  //   }
  // useEffect (()=> {
  //     check();
  // }, [pigtails]);  

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "atractions",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        className: "sliders-title",
        children: ["Ustaw ilo\u015B\u0107 dzieci, kt\xF3re skorzystaj\u0105 z poni\u017Cszych atrakcji ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 102
        }, undefined), "(p\u0142atne od dziecka):"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "sliders",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "atractions-slider",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "atractions-title pigtails",
            children: ["Warkoczyki ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 70
            }, undefined), "12 z\u0142 "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_smooth_range_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: 0,
            min: 0,
            max: 30,
            onChange: x => setPigtails(x)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "atractions-slider",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "atractions-title face-painting ",
            children: ["Malowanie twarzy", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 81
            }, undefined), "10 z\u0142"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_smooth_range_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: 0,
            min: 0,
            max: 30,
            onChange: x => setFacePainting(x)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "atractions-slider",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "atractions-title tatoos",
            children: ["Tatua\u017Ce ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 65
            }, undefined), "8 z\u0142"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_smooth_range_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: 0,
            min: 0,
            max: 30,
            onChange: x => setTatoos(x)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "atractions-slider",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "atractions-title baloons",
            children: ["Balonik modelowany ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 77
            }, undefined), "4 z\u0142"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_smooth_range_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
            value: 0,
            min: 0,
            max: 30,
            onChange: x => setBaloons(x)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

_s(ComponentAtractions, "jrYAE2Smfqh1JqvdSNnH9x+/JOI=");

_c = ComponentAtractions;

var _c;

__webpack_require__.$Refresh$.register(_c, "ComponentAtractions");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-extras/ComponentExtras.js":
/*!****************************************************!*\
  !*** ./src/js/Component-extras/ComponentExtras.js ***!
  \****************************************************/
/*! exports provided: ComponentExtras */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentExtras", function() { return ComponentExtras; });
/* harmony import */ var _Extra_Extra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Extra/Extra */ "./src/js/Component-extras/Extra/Extra.js");
/* harmony import */ var _Extra_baloons_ExtraBaloons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extra-baloons/ExtraBaloons */ "./src/js/Component-extras/Extra-baloons/ExtraBaloons.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-extras/ComponentExtras.js",
    _s = __webpack_require__.$Refresh$.signature();






const ComponentExtras = _ref => {
  _s();

  let {
    onAddTotalExtras,
    onAddTableware
  } = _ref;
  const extra = {
    assistant: {
      price: 100,
      title: "Asystent urodzin"
    },
    bouquet: {
      1: {
        price: 30,
        balloon: "1 bukiety"
      },
      2: {
        price: 50,
        balloon: "2 bukiety"
      },
      3: {
        price: 70,
        balloon: "3 bukiety"
      }
    },
    numberBaloon: {
      price: 30,
      title: "Balon cyfra na powietrze"
    },
    piñata: {
      price: 100,
      title: "Piniata"
    },
    ekoTableware: {
      price: 2,
      title: "Zastawa eko - 2 zł/szt"
    }
  };
  const [extraPriceAssistant, setExtraPriceAssistant] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [extraNumBaloon, setExtraNumBaloon] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [extraPriceBaloons, setExtraPriceBaloons] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [extraPricePinata, setExtraPricePinata] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [extraPriceEkoTableware, setExtraPriceEkoTableware] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const [totalExtras, setTotalExtras] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setTotalExtras(Number(extraPriceAssistant) + Number(extraNumBaloon) + Number(extraPriceBaloons) + Number(extraPricePinata));
  }, [extraPriceAssistant, extraNumBaloon, extraPriceBaloons, extraPricePinata, extraPriceEkoTableware]);
  onAddTotalExtras(totalExtras);
  onAddTableware(extraPriceEkoTableware);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "extras-title",
        children: "Dodatki do urodzin:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "assistant",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_Extra__WEBPACK_IMPORTED_MODULE_0__["Extra"], {
        price: extra.assistant.price,
        name: extra.assistant.title,
        className: "btn-assistant",
        onAdd: x => setExtraPriceAssistant(x),
        currentExtra: extraPriceAssistant
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "numberBaloon",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_Extra__WEBPACK_IMPORTED_MODULE_0__["Extra"], {
        price: extra.numberBaloon.price,
        name: extra.numberBaloon.title,
        className: "btn-number",
        onAdd: x => setExtraNumBaloon(x),
        currentExtra: extraNumBaloon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "piniata",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_Extra__WEBPACK_IMPORTED_MODULE_0__["Extra"], {
        price: extra.piñata.price,
        name: extra.piñata.title,
        className: "btn-number",
        onAdd: x => setExtraPricePinata(x),
        currentExtra: extraPricePinata
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "ekoTableware",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_Extra__WEBPACK_IMPORTED_MODULE_0__["Extra"], {
        price: extra.ekoTableware.price,
        name: extra.ekoTableware.title,
        className: "btn-number",
        onAdd: x => setExtraPriceEkoTableware(x),
        currentExtra: extraPriceEkoTableware
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "bouquet",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
        className: "bouquet-title",
        children: "BUKIETY BALONOWE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "bouquet-btns",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "btn-bouquet",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_baloons_ExtraBaloons__WEBPACK_IMPORTED_MODULE_1__["ExtraBaloons"], {
            price: extra.bouquet[1].price,
            name: extra.bouquet[1].balloon,
            className: "btn-baloons",
            onAdd: x => setExtraPriceBaloons(x),
            currentExtra: extraPriceBaloons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "btn-bouquet",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_baloons_ExtraBaloons__WEBPACK_IMPORTED_MODULE_1__["ExtraBaloons"], {
            price: extra.bouquet[2].price,
            name: extra.bouquet[2].balloon,
            className: "btn-baloons",
            onAdd: x => setExtraPriceBaloons(x),
            currentExtra: extraPriceBaloons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "btn-bouquet",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_Extra_baloons_ExtraBaloons__WEBPACK_IMPORTED_MODULE_1__["ExtraBaloons"], {
            price: extra.bouquet[3].price,
            name: extra.bouquet[3].balloon,
            className: "btn-baloons",
            onAdd: x => setExtraPriceBaloons(x),
            currentExtra: extraPriceBaloons
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }, undefined)]
  }, void 0, true);
};

_s(ComponentExtras, "9rvTxVgJx2nyXCGrZotLFWfsX0o=");

_c = ComponentExtras;

var _c;

__webpack_require__.$Refresh$.register(_c, "ComponentExtras");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-extras/Extra-baloons/ExtraBaloons.js":
/*!***************************************************************!*\
  !*** ./src/js/Component-extras/Extra-baloons/ExtraBaloons.js ***!
  \***************************************************************/
/*! exports provided: ExtraBaloons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraBaloons", function() { return ExtraBaloons; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-extras/Extra-baloons/ExtraBaloons.js";


const ExtraBaloons = _ref => {
  let {
    price,
    name,
    className,
    onAdd,
    currentExtra
  } = _ref;

  const styleOnClick = x => {
    return parseFloat(currentExtra) === price ? x : null;
  };

  const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"; // const [style, setStyle] = useState(false)

  const handleAddAddition = event => {
    if (typeof onAdd !== "function") {
      return;
    }

    if (currentExtra === event.target.value) {
      onAdd(0);
    } else {
      onAdd(event.target.value);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      value: price,
      onClick: handleAddAddition,
      style: {
        backgroundColor: styleOnClick("#002486"),
        color: styleOnClick("yellow"),
        transform: styleOnClick("none"),
        boxShadow: styleOnClick(boxShadowStyle)
      },
      className: className,
      children: [name, " - ", price, "z\u0142"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
      className: "center label__checkbox",
      style: {
        backgroundColor: parseFloat(currentExtra) === price ? "#8600d4" : "white",
        border: parseFloat(currentExtra) === price ? "4px solid #8600d4" : "5px solid rgba(0,0,0,0.1)",
        color: styleOnClick('white') // opacity: (parseFloat(currentExtra) === price ? "1" : "5px solid rgba(0,0,0,0.1)")

      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
        className: "fa fa-check icon",
        style: {
          backgroundColor: styleOnClick('white')
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 13
  }, undefined);
};
_c = ExtraBaloons;

var _c;

__webpack_require__.$Refresh$.register(_c, "ExtraBaloons");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-extras/Extra/Extra.js":
/*!************************************************!*\
  !*** ./src/js/Component-extras/Extra/Extra.js ***!
  \************************************************/
/*! exports provided: Extra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extra", function() { return Extra; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-extras/Extra/Extra.js",
    _s = __webpack_require__.$Refresh$.signature();




const Extra = _ref => {
  _s();

  let {
    price,
    name,
    className,
    onAdd,
    currentExtra
  } = _ref;
  // const styleOnClick =(x) =>{
  //     return parseFloat(currentPrice) === price ? x : null
  // }
  // const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
  const [styleBtn, setStyleBtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleAddAddition = event => {
    if (typeof onAdd !== "function") {
      return;
    }

    if (currentExtra === event.target.value) {
      onAdd(0);
      setStyleBtn(false);
    } else {
      setStyleBtn(true);
      onAdd(event.target.value);
    }
  };

  const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        value: price,
        onClick: handleAddAddition,
        style: {
          color: styleBtn ? "#fff901" : null,
          background: styleBtn ? "olivedrab" : null,
          boxShadow: styleBtn ? boxShadowStyle : null
        },
        className: className,
        children: [name, " - ", price, " z\u0142"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        className: styleBtn ? "center label__checkbox__checked" : "center label__checkbox",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: "fa fa-check icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

_s(Extra, "fHToZazwh6kZKPoulGUhCL1NUyI=");

_c = Extra;

var _c;

__webpack_require__.$Refresh$.register(_c, "Extra");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-table-select/SelectedPrice/SelectedPrice.js":
/*!**********************************************************************!*\
  !*** ./src/js/Component-table-select/SelectedPrice/SelectedPrice.js ***!
  \**********************************************************************/
/*! exports provided: SelectedPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedPrice", function() { return SelectedPrice; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-table-select/SelectedPrice/SelectedPrice.js";

const SelectedPrice = _ref => {
  let {
    price,
    title,
    min,
    onAdd,
    currentPrice
  } = _ref;

  const styleOnClick = x => {
    return parseFloat(currentPrice) === price ? x : null;
  };

  const boxShadowStyle = "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      value: price,
      onClick: event => onAdd(event.target.value),
      style: {
        backgroundColor: styleOnClick("purple"),
        color: styleOnClick("yellow"),
        transform: styleOnClick("none"),
        boxShadow: styleOnClick(boxShadowStyle)
      },
      className: "button",
      children: [" ", title, " - ", price, "z\u0142", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 39
      }, undefined), min]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }, undefined);
};
_c = SelectedPrice;

var _c;

__webpack_require__.$Refresh$.register(_c, "SelectedPrice");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-table-select/TableSelect.js":
/*!******************************************************!*\
  !*** ./src/js/Component-table-select/TableSelect.js ***!
  \******************************************************/
/*! exports provided: ComponentTableSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentTableSelect", function() { return ComponentTableSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SelectedPrice_SelectedPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectedPrice/SelectedPrice */ "./src/js/Component-table-select/SelectedPrice/SelectedPrice.js");
/* harmony import */ var react_smooth_range_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-smooth-range-input */ "./node_modules/react-smooth-range-input/dist/index.es.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions */ "./src/js/Component-table-select/functions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/js/Component-table-select/TableSelect.js",
    _s = __webpack_require__.$Refresh$.signature();







const ComponentTableSelect = _ref => {
  _s();

  let {
    numOfkids
  } = _ref;
  const [pricePerKid, setPricePerKid] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [numberOfKids, setNumberOfKids] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('7');
  const [minNumSlider, setMinNumSlider] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('7');
  const [total, setTotal] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0');

  const showSlider = price => {
    if (price === "44") {
      setMinNumSlider(8);
    } else {
      setMinNumSlider(7);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    showSlider(pricePerKid); // console.log(pricePerKid, numberOfKids);
  }, [pricePerKid]);
  const prices = {
    week: {
      price: 38,
      title: "Od poniedziałku do czwartku",
      min: '( 7 - min. liczba dzieci )'
    },
    friday: {
      price: 42,
      title: "Piątek",
      min: '( 7 - min. liczba dzieci )'
    },
    weekend: {
      price: 45,
      title: "Sobota, niedziela i święta",
      min: '( 8 - min. liczba dzieci )'
    }
  };

  const setBtn = currentPrice => {
    setPricePerKid(currentPrice);
  };

  const handleNumberOfKids = selectedNumber => {
    setNumberOfKids(selectedNumber);
  };

  numOfkids(numberOfKids, pricePerKid);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Object(_functions__WEBPACK_IMPORTED_MODULE_3__["countTotalTableSelect"])(numberOfKids, pricePerKid, setTotal, setInfo, setText);
  }, [numberOfKids, pricePerKid]);
  const [info, setInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
        className: "title-header",
        children: "Wybierz dzie\u0144 tygodnia:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_SelectedPrice_SelectedPrice__WEBPACK_IMPORTED_MODULE_1__["SelectedPrice"], {
          price: prices.week.price,
          title: prices.week.title,
          min: prices.week.min,
          onAdd: setBtn,
          currentPrice: pricePerKid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_SelectedPrice_SelectedPrice__WEBPACK_IMPORTED_MODULE_1__["SelectedPrice"], {
          price: prices.friday.price,
          title: prices.friday.title,
          min: prices.friday.min,
          onAdd: setBtn,
          currentPrice: pricePerKid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_SelectedPrice_SelectedPrice__WEBPACK_IMPORTED_MODULE_1__["SelectedPrice"], {
          price: prices.weekend.price,
          title: prices.weekend.title,
          min: prices.weekend.min,
          onAdd: setBtn,
          currentPrice: pricePerKid
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "info-promotion",
      children: info ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
        className: "info-promotion-text",
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }, undefined) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "count",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
          className: "slider-title",
          children: "Wybierz liczb\u0119 dzieci:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 15
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "slider",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_smooth_range_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: numberOfKids,
          min: minNumSlider,
          max: 30,
          onChange: handleNumberOfKids
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

_s(ComponentTableSelect, "9Aiejuw1Hq57s0gcAWhbMAI+bKc=");

_c = ComponentTableSelect;

var _c;

__webpack_require__.$Refresh$.register(_c, "ComponentTableSelect");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/js/Component-table-select/functions.js":
/*!****************************************************!*\
  !*** ./src/js/Component-table-select/functions.js ***!
  \****************************************************/
/*! exports provided: countTotalTableSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countTotalTableSelect", function() { return countTotalTableSelect; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const countTotalTableSelect = (numberOfKids, pricePerKid, setTotal, setInfo, setText) => {
  if (numberOfKids > 10 && pricePerKid === "38") {
    setTotal(numberOfKids * pricePerKid - pricePerKid);
    setInfo(true);
    setText("Jubilat gratis! Nie płacisz za 1 dziecko!");

    if (numberOfKids > 21) {
      setTotal(numberOfKids * pricePerKid - pricePerKid * 2);
      setText("Jubilat i Gość gratis! Nie płacisz za 2 dzieci!");
    }
  } else if (numberOfKids > 10 && pricePerKid === "42") {
    setTotal(numberOfKids * pricePerKid - pricePerKid);
    setInfo(true);
    setText("Jubilat gratis! Nie płacisz za 1 dziecko!");

    if (numberOfKids > 21) {
      setTotal(numberOfKids * pricePerKid - pricePerKid * 2);
      setText("Jubilat i Gość gratis! Nie płacisz za 2 dzieci!");
    }
  } else {
    setTotal(numberOfKids * pricePerKid);
    setInfo(false);
  }
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/main.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/main.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/arekmx/Pulpit/Kalkulator urodzin/BirthdayPartyCalculator/birthday_party_calculator/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map