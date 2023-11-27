"use strict";
(() => {
var exports = {};
exports.id = 6015;
exports.ids = [6015];
exports.modules = {

/***/ 8390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SallersPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4987);
/* harmony import */ var _src_components_Partials_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4790);
/* harmony import */ var _src_components_Sellers_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Partials_Layout__WEBPACK_IMPORTED_MODULE_3__]);
_src_components_Partials_Layout__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function SallersPage(data) {
    const { seoSetting  } = data.data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: `${seoSetting.seo_title}`,
                metaDes: seoSetting.seo_description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partials_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                childrenClasses: "pt-0 pb-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Sellers_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    sellersData: data.data
                })
            })
        ]
    });
};
const getServerSideProps = async (context)=>{
    const res = await fetch(`${"https://backend.invofy.shop/"}api/sellers`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Middleware_isMultivendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7024);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(990);
/* harmony import */ var _Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8146);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9363);








function Sallers({ sellersData  }) {
    const { sellers  } = sellersData;
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full bg-white",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sallers-page-wrapper w-full pb-[60px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        title: "All Seller ",
                        breadcrumb: [
                            {
                                name: langCntnt && langCntnt.home,
                                path: "/"
                            },
                            {
                                name: langCntnt && langCntnt.Sellers,
                                path: "/sellers"
                            }, 
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "content-wrapper w-full pb-[120px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-x mx-auto w-full",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid lg:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5",
                            children: sellers && sellers.data.length > 0 && sellers.data.map((seller, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    "data-aos": "fade-up",
                                    className: "item w-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full sm:h-[328px] sm:p-[30px] p-5 rounded",
                                        style: {
                                            backgroundImage: `url(/assets/images/sallers-cover-2.png)`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col justify-between h-full",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                    className: "text-[30px] font-semibold text-qblack",
                                                                    children: seller.shop_name
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex space-x-2 items-center mb-[30px]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex space-x-1",
                                                                            children: [
                                                                                Array.from(Array(parseInt(seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                                                                    }, parseInt(seller.averageRating) + Math.random())),
                                                                                parseInt(seller.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                                    children: Array.from(Array(5 - parseInt(seller.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "text-gray-400",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                                                className: "fill-current",
                                                                                                defaultValue: false
                                                                                            })
                                                                                        }, parseInt(seller.averageRating) + Math.random()))
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "text-[15px] font-bold text-qblack ",
                                                                            children: [
                                                                                "(",
                                                                                parseInt(seller.averageRating),
                                                                                ")"
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "saller-text-details",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "text-qblack flex space-x-5 items-center leading-9 text-base font-normal",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                            width: "16",
                                                                                            height: "12",
                                                                                            viewBox: "0 0 16 12",
                                                                                            fill: "none",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    d: "M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z",
                                                                                                    fill: "#232532"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                    d: "M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z",
                                                                                                    fill: "#232532"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: seller.email
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "text-qblack flex space-x-5 items-center leading-9 text-base font-normal",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            width: "15",
                                                                                            height: "14",
                                                                                            viewBox: "0 0 15 14",
                                                                                            fill: "none",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z",
                                                                                                fill: "#232532"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: seller.phone
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "text-qblack flex space-x-5 items-center leading-9 text-base font-normal",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                            width: "14",
                                                                                            height: "19",
                                                                                            viewBox: "0 0 14 19",
                                                                                            fill: "none",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                d: "M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z",
                                                                                                fill: "#232532"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: seller.address
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                href: {
                                                                    pathname: "/seller-products",
                                                                    query: {
                                                                        seller: seller.slug
                                                                    }
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "w-[116px] h-[40px] cursor-pointer ",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "transition-common bg-qpurple hover:bg-qpurplelow/10 hover:text-qpurple border border-transparent hover:border-qpurple text-white w-full h-full flex justify-center rounded",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                className: "flex space-x-2 items-center",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        children: langCntnt && langCntnt.Shop_Now
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
                                                                                                    x: "1.0918",
                                                                                                    y: "0.636719",
                                                                                                    width: "6.94219",
                                                                                                    height: "1.54271",
                                                                                                    transform: "rotate(45 1.0918 0.636719)"
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                    x: "6.00195",
                                                                                                    y: "5.54492",
                                                                                                    width: "6.94219",
                                                                                                    height: "1.54271",
                                                                                                    transform: "rotate(135 6.00195 5.54492)"
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex sm:justify-center justify-start",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center relative overflow-hidden",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    layout: "fill",
                                                                    objectFit: "scale-down",
                                                                    src: `${"https://backend.invofy.shop/" + seller.logo}`,
                                                                    alt: ""
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "sm:block hidden text-[30px] font-semibold text-qblack text-center leading-none",
                                                            children: seller.shop_name
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }, i))
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_Middleware_isMultivendor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Sallers));


/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,6031,4790,1546,8146,6727,7024], () => (__webpack_exec__(8390)));
module.exports = __webpack_exports__;

})();