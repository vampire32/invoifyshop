"use strict";
exports.id = 7932;
exports.ids = [7932];
exports.modules = {

/***/ 3113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9363);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8522);
/* harmony import */ var _data_CountryCodes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7022);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1311);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function SignupWidget({ redirect =true , signupActionPopup , changeContent  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: fname , 1: setFname  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: lname , 1: setLname  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: phone , 1: setPhone  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("+880");
    const { 0: getCountries , 1: setGetCountries  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: countryDropToggle , 1: setCountryDropToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: selectedCountry , 1: setSelectedCountry  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("BD");
    const selectCountryhandler = (value)=>{
        setSelectedCountry(value.code);
        setPhone(value.dial_code);
        setCountryDropToggle(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (!getCountries) {
            setGetCountries(_data_CountryCodes_json__WEBPACK_IMPORTED_MODULE_7__ && _data_CountryCodes_json__WEBPACK_IMPORTED_MODULE_7__.countries);
        }
    }, [
        getCountries
    ]);
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: confirmPassword , 1: setConfirmPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: checked , 1: setCheck  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)());
    }, []);
    const rememberMe = ()=>{
        setCheck(!checked);
    };
    const doSignup = async ()=>{
        setLoading(true);
        await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].signup */ .Z.signup({
            name: fname + " " + lname,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            agree: checked ? 1 : "",
            phone: phone ? phone : ""
        }).then((res)=>{
            console.log(res);
            setLoading(false);
            react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.success(res.data.notification);
            if (redirect) {
                router.push(`/login`);
            } else {
                changeContent();
            }
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setCheck(false);
        }).catch((err)=>{
            setLoading(false);
            console.log(err);
            setErrors(err.response && err.response.data.errors);
        });
    };
    const { phone_number_required , default_phone_code  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (default_phone_code) {
            let defaultCountry = getCountries && getCountries.length > 0 && getCountries.find((item)=>item.code === default_phone_code);
            if (defaultCountry) {
                setPhone(defaultCountry.dial_code);
                setSelectedCountry(defaultCountry.code);
            }
        }
    }, [
        default_phone_code,
        getCountries
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full lg:h-auto h-full overflow-y-scroll overflow-style-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title-area flex flex-col justify-center items-center relative text-center mb-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-[34px] font-bold text-qblack",
                    children: langCntnt && langCntnt.Create_Account
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "input-area",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        placeholder: langCntnt && langCntnt.First_Name,
                                        label: langCntnt && langCntnt.First_Name + "*",
                                        name: "fname",
                                        type: "text",
                                        inputClasses: "h-[50px]",
                                        value: fname,
                                        inputHandler: (e)=>setFname(e.target.value)
                                    }),
                                    errors && Object.hasOwn(errors, "name") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm mt-1 text-qred",
                                        children: errors.name[0]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        placeholder: langCntnt && langCntnt.Last_Name,
                                        label: langCntnt && langCntnt.Last_Name + "*",
                                        name: "lname",
                                        type: "text",
                                        inputClasses: "h-[50px]",
                                        value: lname,
                                        inputHandler: (e)=>setLname(e.target.value)
                                    }),
                                    errors && Object.hasOwn(errors, "name") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm mt-1 text-qred",
                                        children: errors.name[0]
                                    }) : ""
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-item mb-5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                placeholder: langCntnt && langCntnt.Email,
                                label: langCntnt && langCntnt.Email_Address + "*",
                                name: "email",
                                type: "email",
                                inputClasses: "h-[50px]",
                                value: email,
                                error: !!(errors && Object.hasOwn(errors, "email")),
                                inputHandler: (e)=>setEmail(e.target.value)
                            }),
                            errors && Object.hasOwn(errors, "email") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm mt-1 text-qred",
                                children: errors.email[0]
                            }) : ""
                        ]
                    }),
                    parseInt(phone_number_required) === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-item mb-5 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                placeholder: langCntnt && langCntnt.Phone_Number,
                                label: langCntnt && langCntnt.phone + "*",
                                name: "phone",
                                type: "text",
                                inputClasses: "h-[50px] placeholder:capitalize pl-20",
                                value: phone,
                                error: !!(errors && Object.hasOwn(errors, "phone")),
                                inputHandler: (e)=>setPhone(e.target.value)
                            }),
                            errors && Object.hasOwn(errors, "phone") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm mt-1 text-qred",
                                children: errors.phone[0]
                            }) : "",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setCountryDropToggle(!countryDropToggle),
                                type: "button",
                                className: "w-[70px] h-[50px] bg-qpurplelow/10 absolute left-0 top-[29px] flex justify-center items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                width: "30",
                                                height: "20",
                                                src: `/assets/images/countries/${selectedCountry}.svg`,
                                                alt: "country"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-qgray",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fill: "none",
                                                        d: "M0 0h24v24H0z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M12 14l-4-4h8z"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    boxShadow: "rgb(0 0 0 / 14%) 0px 15px 50px 0px",
                                    display: countryDropToggle ? "block" : "none"
                                },
                                className: "country-dropdown-list w-[250px] h-[250px] bg-white absolute left-0 top-[80px] z-20 overflow-y-scroll",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    children: getCountries && getCountries.length > 0 && getCountries.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                            onClick: ()=>selectCountryhandler(item),
                                            className: "flex space-x-1.5 items-center px-3 py-1 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-[25px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        width: "25",
                                                        height: "15",
                                                        src: `/assets/images/countries/${item.code}.svg`,
                                                        alt: "country"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm text-qgray capitalize flex-1",
                                                    children: item.name
                                                })
                                            ]
                                        }, i))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        placeholder: "******",
                                        label: langCntnt && langCntnt.Password + "*",
                                        name: "password",
                                        type: "password",
                                        inputClasses: "h-[50px]",
                                        value: password,
                                        inputHandler: (e)=>setPassword(e.target.value)
                                    }),
                                    errors && Object.hasOwn(errors, "password") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm mt-1 text-qred",
                                        children: errors.password[0]
                                    }) : ""
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "h-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        placeholder: "******",
                                        label: langCntnt && langCntnt.Confirm_Password + "*",
                                        name: "confirm_password",
                                        type: "password",
                                        inputClasses: "h-[50px]",
                                        value: confirmPassword,
                                        inputHandler: (e)=>setConfirmPassword(e.target.value)
                                    }),
                                    errors && Object.hasOwn(errors, "password") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm mt-1 text-qred",
                                        children: errors.password[0]
                                    }) : ""
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "forgot-password-area mb-7",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
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
                                redirect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/seller-terms-condition",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base text-qblack cursor-pointer",
                                        children: langCntnt && langCntnt.I_agree_all_terms_and_condition_in_ecoShop
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base text-black cursor-pointer",
                                        children: langCntnt && langCntnt.I_agree_all_terms_and_condition_in_ecoShop
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "signin-area mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: doSignup,
                                type: "button",
                                disabled: checked ? false : true,
                                className: "bg-qpurple rounded-full disabled:bg-opacity-60 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm text-white block",
                                        children: langCntnt && langCntnt.Create_Account
                                    }),
                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "w-5 ",
                                        style: {
                                            transform: "scale(0.3)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {})
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
                                langCntnt && langCntnt.Already_have_an_Account,
                                "?",
                                redirect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/login",
                                    passhref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "ml-2 text-qblack cursor-pointer",
                                            children: langCntnt && langCntnt.Log_In
                                        })
                                    })
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: signupActionPopup,
                                    type: "button",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "ml-2 text-qblack cursor-pointer ml-1",
                                        children: langCntnt && langCntnt.Log_In
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupWidget);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7528);
/* harmony import */ var _Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1311);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function VerifyWidget({ redirect =true , verifyActionPopup  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const location = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { 0: otp , 1: setOtp  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());
    }, []);
    const doVerify = async ()=>{
        setLoading(true);
        await _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__/* ["default"].verification */ .Z.verification({
            email: location.query.email
        }, otp).then((res)=>{
            setLoading(false);
            if (res) {
                react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(res.data.notification);
                if (redirect) {
                    router.push("/login");
                } else {
                    verifyActionPopup();
                }
            }
        }).catch((err)=>{
            setLoading(false);
            if (err.response) {
                if (err.response.data.notification) {
                    react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response.data.notification);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "title-area flex flex-col justify-center items-center relative text-center mb-7",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-[34px] font-bold leading-[74px] text-qblack",
                    children: langCntnt && langCntnt.Verify_You
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "input-area",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "input-item mb-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_InputCom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            placeholder: "******",
                            label: langCntnt && langCntnt.OTP + "*",
                            name: "otp",
                            type: "text",
                            inputClasses: "h-[50px]",
                            value: otp,
                            error: errors,
                            inputHandler: (e)=>setOtp(e.target.value.trim())
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "signin-area mb-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                disabled: otp ? false : true,
                                onClick: doVerify,
                                type: "button",
                                className: "bg-qpurple rounded-full disabled:bg-opacity-60 disabled:cursor-not-allowed w-full h-[50px] font-semibold flex justify-center bg-purple items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm text-white block",
                                        children: langCntnt && langCntnt.Verify
                                    }),
                                    loading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "w-5 ",
                                        style: {
                                            transform: "scale(0.3)"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Loaders_LoaderStyleOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VerifyWidget);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;