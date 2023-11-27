"use strict";
exports.id = 7533;
exports.ids = [7533];
exports.modules = {

/***/ 9696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Signup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9363);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4790);
/* harmony import */ var _SignupWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3113);
/* harmony import */ var _VerifyWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(685);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Partials_Layout__WEBPACK_IMPORTED_MODULE_5__, _SignupWidget__WEBPACK_IMPORTED_MODULE_6__, _VerifyWidget__WEBPACK_IMPORTED_MODULE_7__]);
([_Partials_Layout__WEBPACK_IMPORTED_MODULE_5__, _SignupWidget__WEBPACK_IMPORTED_MODULE_6__, _VerifyWidget__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Signup() {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const { 0: verify , 1: setVerify  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: signupView , 1: setSignupView  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: imgThumb , 1: setImgThumb  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (websiteSetup) {
            setImgThumb(websiteSetup.payload.login_page_image);
        }
    }, [
        websiteSetup
    ]);
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (location.route === "/verify-you") {
            setVerify(true);
        } else {
            setSignupView(true);
        }
    }, [
        location
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        childrenClasses: "pt-0 pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "login-page-wrapper w-full h-[1055px] lg:h-[895px] sm:h-[896px] relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-full absolute left-0 top-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full h-full relative z-10",
                        children: [
                            imgThumb && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                layout: "fill",
                                src: `${"https://backend.invofy.shop/" + imgThumb.image}`,
                                alt: "login"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "bg-[#232532] bg-opacity-50 relative w-full h-full absolute left-0 top-0"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-x mx-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "lg:flex justify-center items-center relative w-full lg:min-h-[700px] py-[60px]",
                        children: verify ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-[572px] w-full lg:h-[700px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-qpurplelow/10 rounded-lg relative z-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_VerifyWidget__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                        }) : signupView ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "lg:w-[572px] w-full lg:h-auto bg-white flex flex-col justify-center sm:p-10 p-5 border border-qpurplelow/10 rounded-lg relative z-20",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SignupWidget__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                        }) : ""
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8522);




function PageHead(props) {
    const { title  } = props;
    const { favicon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: "Generated by create next app"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: `${favicon ? "https://backend.invofy.shop/" + favicon : "/favico.svg"}`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);


/***/ })

};
;