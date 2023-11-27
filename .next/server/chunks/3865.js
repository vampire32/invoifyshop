"use strict";
exports.id = 3865;
exports.ids = [3865];
exports.modules = {

/***/ 3865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9363);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
/* harmony import */ var _Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5247);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SEND = ({ action , des , btn  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-xs text-qblack",
                children: des
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                onClick: action,
                className: "text-sm text-blue-500 font-bold mt-2",
                children: btn
            })
        ]
    });
};
function LoginWidget({ redirect =true , loginActionPopup , notVerifyHandler  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: checked , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: defaultProfileImg , 1: setDefault  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!defaultProfileImg) {
            if (websiteSetup) {
                setDefault(websiteSetup.payload.defaultProfile);
            }
        }
    }, [
        defaultProfileImg
    ]);
    const rememberMe = ()=>{
        setValue(!checked);
    };
    const sendOtpHandler = ()=>{
        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].resend */ .Z.resend({
            email: email
        }).then(()=>{
            router.push(`/verify-you?email=${email}`);
        }).catch((err)=>{
            console.log(err);
        });
    };
    const doLogin = async ()=>{
        setLoading(true);
        await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].login */ .Z.login({
            email: email,
            password: password
        }).then((res)=>{
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(langCntnt && langCntnt.Login_Successfully);
            setEmail("");
            setPassword("");
            localStorage.removeItem("auth");
            localStorage.setItem("auth", JSON.stringify(res.data));
            const activeUser = res.data && {
                name: res.data.user.name,
                phone: res.data.user.phone,
                image: res.data.user.image ? res.data.user.image : defaultProfileImg && defaultProfileImg.image
            };
            if (activeUser) {
                localStorage.setItem("active-user", JSON.stringify(activeUser));
            }
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_7__/* .fetchWishlist */ .BW)());
            if (redirect) {
                router.push("/");
            } else {
                if (res.data) {
                    loginPopupBoard.handlerPopup(false);
                }
            }
        }).catch((err)=>{
            setLoading(false);
            if (err.response) {
                if (err.response.data.notification === "Please verify your acount. If you didn't get OTP, please resend your OTP and verify") {
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SEND, {
                        des: langCntnt && langCntnt.Please_verify_your_account__If_you_didnt_get_OTP__please_resend_your_OTP_and_verify,
                        action: sendOtpHandler,
                        btn: langCntnt && langCntnt.Send_OTP
                    }), {
                        autoClose: 5000,
                        icon: false,
                        theme: "colored"
                    });
                } else {
                    react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.error(langCntnt && langCntnt.Invalid_Credentials);
                }
            } else {
                return false;
            }
            console.log(err);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title-area flex flex-col justify-center items-center relative text-center mb-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-[34px] font-bold leading-0 text-qblack",
                    children: langCntnt && langCntnt.Log_In
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "input-area",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "input-item mb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            placeholder: langCntnt && langCntnt.Email,
                            label: langCntnt && langCntnt.Email_Address + "*",
                            name: "email",
                            type: "email",
                            inputClasses: "h-[50px]",
                            inputHandler: (e)=>setEmail(e.target.value),
                            value: email
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "input-item mb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            placeholder: "******",
                            label: langCntnt && langCntnt.Password + "*",
                            name: "password",
                            type: "password",
                            inputClasses: "h-[50px]",
                            inputHandler: (e)=>setPassword(e.target.value),
                            value: password
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "forgot-password-area flex justify-between items-center mb-7",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "remember-checkbox flex items-center space-x-2.5",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: rememberMe,
                                        type: "button",
                                        className: "w-5 h-5 text-qblack flex justify-center items-center border border-light-gray",
                                        children: checked && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        onClick: rememberMe,
                                        className: "text-base text-qblack",
                                        children: langCntnt && langCntnt.Remember_Me
                                    })
                                ]
                            }),
                            redirect && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/forgot-password",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "text-base text-qpurple cursor-pointer",
                                    children: [
                                        langCntnt && langCntnt.Forgot_password,
                                        "?"
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "signin-area mb-3.5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: doLogin,
                                type: "button",
                                className: "bg-qpurple rounded-full text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: langCntnt && langCntnt.Log_In
                                    }),
                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "w-5 ",
                                        style: {
                                            transform: "scale(0.3)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "signup-area flex justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "text-base text-qgray font-normal",
                            children: [
                                langCntnt && langCntnt.Dontt_have_an_account,
                                " ?",
                                redirect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/signup",
                                    passhref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-2 text-qblack cursor-pointer capitalize",
                                            children: langCntnt && langCntnt.sign_up_free
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: loginActionPopup,
                                    type: "button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-2 text-qblack cursor-pointer capitalize",
                                        children: langCntnt && langCntnt.sign_up_free
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginWidget);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DefaultUser = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultUser);


/***/ })

};
;