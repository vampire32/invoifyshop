"use strict";
exports.id = 6418;
exports.ids = [6418];
exports.modules = {

/***/ 6418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9363);



function ShopNowBtn({ className , textColor , label  }) {
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex justify-center items-center group rounded-full relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ${className || ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10 ${textColor || ""}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm font-600 tracking-wide leading-7 mr-2",
                        children: label ? label : langCntnt && langCntnt.Shop_Now
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "7",
                            height: "11",
                            viewBox: "0 0 7 11",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "fill-current",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "2.08984",
                                    y: "0.636719",
                                    width: "6.94219",
                                    height: "1.54271",
                                    transform: "rotate(45 2.08984 0.636719)"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "7",
                                    y: "5.54492",
                                    width: "6.94219",
                                    height: "1.54271",
                                    transform: "rotate(135 7 5.54492)"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    transition: `transform 0.25s ease-in-out`
                },
                className: "w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopNowBtn);


/***/ })

};
;