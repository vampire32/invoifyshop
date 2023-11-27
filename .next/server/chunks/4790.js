"use strict";
exports.id = 4790;
exports.ids = [4790];
exports.modules = {

/***/ 3896:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4178);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4339);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_5__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function Cart({ className  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart);
    const { 0: getCarts , 1: setGetCarts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: getAllPrice , 1: setGetAllPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const { 0: totalPrice , 1: setTotalPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTotalPrice(getAllPrice && getAllPrice.reduce((prev, curr)=>prev + curr));
    }, [
        getAllPrice
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        cart && setGetCarts(cart.cartProducts);
    }, [
        cart
    ]);
    const checkProductExistsInFlashSale = (id, price)=>{
        if (websiteSetup) {
            const flashSaleOffer = websiteSetup.payload.flashSale && websiteSetup.payload.flashSale.offer;
            const flashSaleIds = websiteSetup.payload.flashSaleProducts.length > 0 && websiteSetup.payload.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(id));
            if (flashSaleOffer && flashSaleIds) {
                const offer = parseInt(flashSaleOffer);
                const discountPrice = offer / 100 * price; //confusion
                const mainPrice = price - discountPrice;
                return mainPrice;
            } else {
                return price;
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (getCarts && getCarts.length > 0) {
            setGetAllPrice(getCarts.map((v)=>{
                if (v.product.offer_price) {
                    if (v.variants && v.variants.length > 0) {
                        const prices = v.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                        const sumCal = prices.reduce((p, c)=>p + c);
                        const v_price = sumCal + parseInt(v.product.offer_price);
                        return checkProductExistsInFlashSale(v.product_id, v_price);
                    } else {
                        const wo_v_price = parseInt(v.product.offer_price);
                        return checkProductExistsInFlashSale(v.product_id, wo_v_price);
                    }
                } else {
                    if (v.variants && v.variants.length > 0) {
                        const prices1 = v.variants.map((item)=>item.variant_item ? parseInt(item.variant_item.price) : 0);
                        const sumCal1 = prices1.reduce((p, c)=>p + c);
                        const v_price1 = sumCal1 + parseInt(v.product.price);
                        return checkProductExistsInFlashSale(v.product_id, v_price1);
                    } else {
                        const wo_v_price1 = parseInt(v.product.price);
                        return checkProductExistsInFlashSale(v.product_id, wo_v_price1);
                    }
                }
            }));
        } else {
            setGetAllPrice(null);
        }
    }, [
        getCarts
    ]);
    const deleteItem = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].deleteCartItem */ .Z.deleteCartItem({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)().access_token
            }).then(()=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_5__.toast.warn(langCntnt && langCntnt.Remove_from_Cart, {
                    autoClose: 1000
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_7__/* .fetchCart */ .x7)());
            }).catch((err)=>{
                console.log(err);
            });
        } else {
            return false;
        }
    };
    const price = (item)=>{
        if (item) {
            if (item.product.offer_price) {
                if (item.variants && item.variants.length > 0) {
                    const prices = item.variants.map((item)=>item.variant_item ? parseFloat(item.variant_item.price) : 0);
                    const sumVarient = prices.reduce((p, c)=>p + c);
                    return parseFloat(item.product.offer_price) + sumVarient;
                } else {
                    return parseFloat(item.product.offer_price);
                }
            } else {
                if (item.variants && item.variants.length > 0) {
                    const prices1 = item.variants.map((item)=>item.variant_item ? parseFloat(item.variant_item.price) : 0);
                    const sumVarient1 = prices1.reduce((p, c)=>p + c);
                    return parseFloat(item.product.price) + sumVarient1;
                } else {
                    return parseFloat(item.product.price);
                }
            }
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
            },
            className: `cart-wrappwer w-[300px] bg-white border-t-[3px] ${className || ""}`,
            children: getCarts && getCarts.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-items h-[310px] overflow-y-scroll",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            children: getCarts && getCarts.length > 0 && getCarts.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "w-full h-full flex justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-[6px] justify-center items-center px-4 my-[20px]",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-[65px] h-full relative",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        layout: "fill",
                                                        src: `${"https://backend.invofy.shop/" + item.product.thumb_image}`,
                                                        alt: "",
                                                        className: "w-full h-full object-contain"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex-1 h-full flex flex-col justify-center ",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            className: "title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-qpurple",
                                                            children: item.product.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "price",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                suppressHydrationWarning: true,
                                                                className: "offer-price text-qred font-600 text-[15px] ml-2",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                    id: item.product_id,
                                                                    price: price(item)
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>deleteItem(item.id),
                                            className: "mt-[20px] mr-[15px] inline-flex cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "8",
                                                height: "8",
                                                viewBox: "0 0 8 8",
                                                fill: "none",
                                                className: "inline fill-current text-[#AAAAAA] hover:text-qred",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"
                                                })
                                            })
                                        })
                                    ]
                                }, item.id))
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 mt-[20px] mb-[12px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[#F0F1F3]"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-actions px-4 mb-[30px]",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "total-equation flex justify-between items-center mb-[28px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-[15px] font-500 text-qblack capitalize",
                                        children: langCntnt && langCntnt.SUBTOTAL
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "text-[15px] font-500 text-qred ",
                                        children: currency_icon + (totalPrice ? totalPrice.toFixed(2) : 0)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-action-btn",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/cart",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gray-btn w-full h-[50px] mb-[10px] cursor-pointer rounded",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: langCntnt && langCntnt.View_Cart
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/checkout",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-[50px] cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "transition-common bg-qpurple hover:bg-qpurplelow/10 hover:text-qpurple text-white flex justify-center items-center w-full h-full rounded",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm",
                                                    children: langCntnt && langCntnt.Checkout_Now
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 mt-[20px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[#F0F1F3]"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center py-[15px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[13px] font-500 text-qgray",
                            children: langCntnt && langCntnt.Get_Return_within
                        })
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-items my-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-gray-400 mb-5 text-center",
                                children: langCntnt && langCntnt.No_items_found
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-sm text-gray-400 text-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: {
                                        pathname: "/products"
                                    },
                                    passHref: true,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-qpurple underline font-semibold",
                                            children: langCntnt && langCntnt.Shop_Now
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full px-4 mt-[20px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-[1px] bg-[#F0F1F3]"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center py-[15px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-[13px] font-500 text-qgray",
                            children: langCntnt && langCntnt.Get_Return_within
                        })
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SearchBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9363);

// import Link from "next/link";


// import axios from "axios";


function SearchBox({ className  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { 0: toggleCat , 1: setToggleCat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.websiteSetup);
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: selectedCat , 1: setSelectedCat  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: searchKey , 1: setSearchkey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const categoryHandler = (value)=>{
        setSelectedCat(value);
        setToggleCat(!toggleCat);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (websiteSetup) {
            setCategories(websiteSetup.payload && websiteSetup.payload.productCategories);
        }
    }, [
        websiteSetup
    ]);
    const searchHandler = ()=>{
        if (searchKey !== "") {
            if (selectedCat) {
                router.push({
                    pathname: "/search",
                    query: {
                        search: searchKey,
                        category: selectedCat.slug
                    }
                });
            } else {
                router.push({
                    pathname: "/search",
                    query: {
                        search: searchKey
                    }
                });
            }
        } else if (searchKey === "" && selectedCat) {
            router.push({
                pathname: "/products",
                query: {
                    category: selectedCat.slug
                }
            });
        } else {
            return false;
        }
    };
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative w-full h-full",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-full h-full flex items-center   border border-qborder rounded-full overflow-hidden  ${className || ""}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 bg-red-500 h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: searchKey,
                                    onKeyDown: (e)=>e.key === "Enter" && searchHandler(),
                                    onChange: (e)=>setSearchkey(e.target.value),
                                    type: "text",
                                    className: "search-input text-base h-full placeholder:text-base",
                                    placeholder: "Search Product..."
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[1px] h-[22px] bg-qborder"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 flex items-center px-4 relative",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>setToggleCat(!toggleCat),
                                type: "button",
                                className: "w-full text-base h-full font-500 text-qgray flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "line-clamp-1",
                                        children: selectedCat ? selectedCat.name : "All Categories"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "10",
                                            height: "5",
                                            viewBox: "0 0 10 5",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                    x: "9.18359",
                                                    y: "0.90918",
                                                    width: "5.78538",
                                                    height: "1.28564",
                                                    transform: "rotate(135 9.18359 0.90918)",
                                                    fill: "#8E8E8E"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                    x: "5.08984",
                                                    y: "5",
                                                    width: "5.78538",
                                                    height: "1.28564",
                                                    transform: "rotate(-135 5.08984 5)",
                                                    fill: "#8E8E8E"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: searchHandler,
                            className: "search-btn w-[100px] h-full text-base font-600 ",
                            type: "button",
                            children: langCntnt && langCntnt.Search
                        })
                    ]
                }),
                toggleCat && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full fixed left-0 top-0 z-50",
                            onClick: ()=>setToggleCat(!toggleCat)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[227px] h-auto absolute bg-white right-[110px] top-[58px] z-50 p-5",
                            style: {
                                boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "flex flex-col space-y-2",
                                children: categories && categories.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        onClick: ()=>categoryHandler(item),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                            children: item.name
                                        })
                                    }, i))
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 8263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Compair)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Compair() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "22",
        viewBox: "0 0 20 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "fill-current",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675 8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389 13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389 7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806 2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943 3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026 21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526 18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z"
            })
        ]
    });
};


/***/ }),

/***/ 4527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);



function FontAwesomeCom({ icon , size , className  }) {
    const text = icon.split(" ");
    const prefix = text[0];
    const iconName = text[1].replace("fa-", "");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        className: className && className,
        icon: [
            `${prefix}`,
            `${iconName}`
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontAwesomeCom);


/***/ }),

/***/ 6399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinBag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinBag({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "28",
        height: "23",
        viewBox: "0 0 28 23",
        className: className,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.4446 16.897C14.8446 16.897 13.2443 16.8999 11.6443 16.8963C9.79248 16.892 8.65101 16.0273 8.1261 14.2489C7.04309 10.5794 5.95772 6.91073 4.87181 3.24203C4.63635 2.4468 4.37798 2.25412 3.55256 2.25175C2.77876 2.24964 2.00522 2.25754 1.23142 2.24911C0.512399 2.24148 0.0159339 1.79109 0.000394646 1.15064C-0.0159347 0.482813 0.47579 0.0168886 1.23247 0.00872832C2.11136 -0.000484875 2.99104 -0.00785543 3.86966 0.0126768C5.36169 0.047687 6.52029 0.932154 6.96408 2.35415C7.14186 2.92378 7.34071 3.49026 7.46397 4.07201C7.54983 4.47713 7.77897 4.49661 8.10582 4.49582C11.8337 4.48897 15.5612 4.49134 19.2891 4.49134C21.0827 4.49134 22.8763 4.48108 24.6696 4.49503C26.085 4.50608 27.0908 5.49058 27.0157 6.7778C27.0007 7.03629 26.9251 7.29584 26.8475 7.54565C26.1319 9.84105 25.4126 12.1351 24.688 14.4279C24.1852 16.0186 23.0224 16.8826 21.3505 16.8944C19.7152 16.906 18.0799 16.897 16.4446 16.897Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12.4015 22.5159C11.1674 22.5224 10.1491 21.5237 10.1349 20.2926C10.1204 19.0417 11.1531 17.998 12.3971 18.0064C13.6212 18.0148 14.6426 19.0401 14.6439 20.2621C14.6455 21.4853 13.6265 22.5093 12.4015 22.5159Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M22.5092 20.2393C22.5195 21.4842 21.5394 22.4971 20.3066 22.5155C19.0482 22.5342 18.0273 21.525 18.0278 20.2622C18.0281 19.0208 19.0216 18.0161 20.2573 18.0074C21.4878 17.9984 22.4989 19.0006 22.5092 20.2393Z"
            })
        ]
    });
};


/***/ }),

/***/ 2189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinLove)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinLove({ className ="fill-current text-tblack" , fill ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: fill ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            width: "22",
            height: "20",
            viewBox: "0 0 22 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M5.58833 0.693647C4.25866 0.857708 3.14574 1.395 2.20372 2.33014C1.35756 3.16685 0.849037 4.05278 0.557261 5.2053C0.040399 7.20273 0.415541 9.17145 1.65768 11.0212C2.45381 12.2066 3.48336 13.2935 5.37158 14.9505C6.57203 16.0045 10.2359 19.0807 10.4151 19.1832C10.5819 19.2816 10.6444 19.2939 10.9987 19.2939C11.353 19.2939 11.4155 19.2816 11.5823 19.1832C11.7615 19.0807 15.4337 16.0004 16.6258 14.9505C18.5224 13.2852 19.5436 12.2025 20.3397 11.0212C21.5819 9.17145 21.957 7.20273 21.4401 5.2053C21.1484 4.05278 20.6398 3.16685 19.7937 2.33014C18.9517 1.49754 18.0514 1.01767 16.8717 0.771576C16.2799 0.648531 15.1878 0.636227 14.6709 0.751068C13.2287 1.05868 12.1241 1.76824 11.1154 3.0315L10.9987 3.17505L10.8862 3.0315C9.88995 1.79285 8.80204 1.08329 7.41401 0.771576C7.00136 0.677242 6.051 0.636227 5.58833 0.693647ZM6.98052 1.9446C8.1643 2.14968 9.18552 2.82232 9.99415 3.93383C10.1317 4.1266 10.3026 4.35629 10.3693 4.45062C10.6777 4.87718 11.3197 4.87718 11.6281 4.45062C11.6948 4.35629 11.8657 4.1266 12.0032 3.93383C13.1078 2.41628 14.6459 1.70262 16.3215 1.9282C18.1806 2.17839 19.6311 3.45806 20.1855 5.34065C20.6232 6.82949 20.4314 8.39216 19.6353 9.79897C18.9684 10.9761 17.8555 12.2107 15.9172 13.921C14.9794 14.7454 11.0362 18.084 10.9987 18.084C10.957 18.084 7.03054 14.7577 6.08018 13.921C3.09989 11.2919 1.92444 9.65132 1.641 7.72772C1.4576 6.48496 1.7202 5.14788 2.35794 4.09379C3.31664 2.50651 5.18401 1.63699 6.98052 1.9446Z",
                    fill: "#EF262C"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M4 2L2 4L1.5 5.5L1 7L1.5 9L3.5 12L8 16L11 18.5L11.5 18L12.5 17L14.5 15.5L18.5 12L21 8.5L20 4C19.3333 3.33333 18.5 2.4 18.5 2C18.5 1.6 17 1.5 16.5 1.5L14.5 2L13.5 2.5L12.5 3L11.5 4H11L9.5 3L8 2L7 1.5H5.5L4 2Z",
                    fill: "#EF272D"
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            width: "21",
            height: "18",
            viewBox: "0 0 21 18",
            fill: "none",
            className: className,
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z"
            })
        })
    });
};


/***/ }),

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThinPeople)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ThinPeople({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                d: "M0 0h24v24H0z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"
            })
        ]
    });
};


/***/ }),

/***/ 2773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Drawer)
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
/* harmony import */ var _Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8263);
/* harmony import */ var _Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2189);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9363);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);










function Drawer({ className , open , action  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: tab , 1: setTab  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("category");
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const categoryList = websiteSetup && websiteSetup.payload.productCategories;
    const customPages = websiteSetup && websiteSetup.payload.customPages;
    const { compareProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.compareProducts);
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart);
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.wishlistData);
    const wishlists = wishlistData && wishlistData.wishlists;
    const { 0: searchKey , 1: setSearchkey  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const searchHandler = ()=>{
        if (searchKey !== "") {
            router.push({
                pathname: "/search",
                query: {
                    search: searchKey
                }
            });
        } else {
            return false;
        }
    };
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `drawer-wrapper w-full lg:hidden block  h-full relative  ${className || ""}`,
            children: [
                open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: action,
                    className: "w-full h-screen bg-black bg-opacity-40 z-40 left-0 top-0 fixed"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `w-[280px] transition-all duration-300 ease-in-out h-screen overflow-y-auto overflow-x-hidden overflow-style-none bg-white fixed top-0 z-50 ${open ? "left-0" : "-left-[280px]"}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full px-5 mt-5 mb-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-5 items-center",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "compaire relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/products-compaire",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Compair__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-[18px] h-[18px] rounded-full bg-qpurple text-white absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                        children: compareProducts ? compareProducts.products.length : 0
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "favorite relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: "/wishlist",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "w-[18px] h-[18px] rounded-full bg-qpurple text-white absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                                        children: wishlists ? wishlists.data.length : 0
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: action,
                                        type: "button",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                            width: "34",
                                            height: "34",
                                            viewBox: "0 0 34 34",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M17.0363 33.9994C7.66923 34.031 0.0436412 26.4423 0.000545718 17.0452C-0.0425497 7.68436 7.54917 0.0479251 16.9447 0.00021656C26.3072 -0.0467224 33.9505 7.54277 33.9998 16.9352C34.0483 26.3153 26.4411 33.9679 17.0363 33.9994Z",
                                                    fill: "#232532"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M17.0363 33.9994C26.4411 33.9679 34.0483 26.3153 33.9998 16.9352C33.9505 7.54277 26.3072 -0.0467224 16.9447 0.00021656C7.54917 0.0479251 -0.0425497 7.68436 0.000545718 17.0452C0.0436412 26.4423 7.66846 34.031 17.0363 33.9994ZM23.4629 21.5945C23.4514 21.8445 23.3321 22.0908 23.1305 22.3039C22.7865 22.6671 22.4479 23.0342 22.1039 23.3966C21.5236 24.0084 21.1458 24.0068 20.5648 23.3889C19.4581 22.2124 18.3492 21.0389 17.2533 19.8523C17.0633 19.6461 16.9686 19.6169 16.7608 19.8431C15.6511 21.0512 14.5222 22.2424 13.3978 23.4366C12.8753 23.9914 12.4697 23.9891 11.9388 23.4312C11.6032 23.0788 11.2715 22.7218 10.9399 22.3647C10.4089 21.7938 10.4081 21.3575 10.9376 20.7927C12.0503 19.6046 13.1593 18.4126 14.2836 17.2361C14.4822 17.0283 14.5037 16.9152 14.2921 16.6943C13.1654 15.5193 12.058 14.3266 10.9452 13.1385C10.4004 12.556 10.4042 12.1259 10.9545 11.5387C11.2785 11.1925 11.6009 10.8447 11.9272 10.5007C12.4821 9.91666 12.8822 9.92358 13.4417 10.5192C14.5468 11.6965 15.6588 12.8677 16.7516 14.0573C16.9671 14.2912 17.071 14.2651 17.271 14.0473C18.3831 12.8415 19.5082 11.6472 20.6363 10.4561C21.1273 9.93743 21.5521 9.94359 22.0469 10.4576C22.3848 10.8085 22.7157 11.1655 23.0474 11.5226C23.6115 12.1289 23.6122 12.5552 23.052 13.1539C21.9477 14.3328 20.8503 15.517 19.7321 16.6828C19.5058 16.9183 19.5382 17.0391 19.7475 17.2584C20.8641 18.4249 21.9623 19.6092 23.0681 20.7865C23.2721 21.002 23.456 21.229 23.4629 21.5945Z",
                                                    fill: "#FE4949"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M23.4614 21.5947C23.4545 21.2292 23.2706 21.0022 23.0659 20.7844C21.9608 19.6071 20.8619 18.4228 19.7452 17.2563C19.5359 17.0377 19.5036 16.9169 19.7298 16.6807C20.848 15.5157 21.9454 14.3307 23.0497 13.1518C23.61 12.5539 23.6084 12.1276 23.0451 11.5205C22.7134 11.1635 22.3825 10.8064 22.0447 10.4555C21.5498 9.9415 21.125 9.93611 20.6341 10.454C19.5059 11.6452 18.3808 12.8394 17.2688 14.0452C17.0679 14.263 16.964 14.2891 16.7493 14.0552C15.6565 12.8663 14.5445 11.6952 13.4394 10.5171C12.88 9.92149 12.4798 9.91456 11.9249 10.4986C11.5979 10.8426 11.2762 11.1904 10.9522 11.5367C10.402 12.1238 10.3981 12.5547 10.943 13.1364C12.0558 14.3245 13.1632 15.5172 14.2898 16.6922C14.5014 16.9131 14.4799 17.0254 14.2813 17.234C13.157 18.4113 12.0481 19.6025 10.9353 20.7906C10.4058 21.3561 10.4074 21.7917 10.9376 22.3626C11.2693 22.7197 11.601 23.076 11.9365 23.4291C12.4675 23.987 12.873 23.9893 13.3956 23.4345C14.5207 22.2403 15.6488 21.0491 16.7586 19.841C16.9671 19.614 17.061 19.644 17.2511 19.8502C18.3469 21.0368 19.4559 22.2103 20.5625 23.3868C21.1435 24.0047 21.5214 24.0063 22.1016 23.3945C22.4456 23.0321 22.7842 22.6643 23.1282 22.3018C23.3306 22.091 23.4507 21.8448 23.4614 21.5947Z",
                                                    fill: "white"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full mt-5 px-5",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "search-bar w-full h-[34px] flex ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 bg-white h-full border border-r-0 border-[#E9E9E9]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: searchKey,
                                            onChange: (e)=>setSearchkey(e.target.value),
                                            type: "text",
                                            className: "w-full text-xs h-full focus:outline-none foucus:ring-0 placeholder:text-qgray pl-2.5 ",
                                            placeholder: "Search Product..."
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: searchHandler,
                                        className: "cursor-pointer w-[40px] h-full bg-qpurple flex justify-center items-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                width: "23",
                                                height: "23",
                                                viewBox: "0 0 23 23",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "fill-current",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M0 8.83158C0.0484783 8.43809 0.0969566 8.04461 0.169674 7.67571C0.484783 5.92962 1.2362 4.42946 2.39968 3.12604C3.75707 1.60128 5.45381 0.592971 7.44142 0.199486C9.76838 -0.267779 11.9741 0.0765214 14.0345 1.33076C16.3614 2.75714 17.84 4.82294 18.3975 7.50356C18.8823 9.7907 18.5187 11.9795 17.4037 14.0453C17.1856 14.4388 17.1856 14.4388 17.5007 14.7585C19.1247 16.4062 20.7487 18.0539 22.3727 19.7016C22.906 20.2427 23.1242 20.8575 22.9302 21.5953C22.5667 22.9971 20.8457 23.5135 19.7549 22.3822C18.8338 21.4231 17.9127 20.5132 16.9674 19.5541C16.216 18.7917 15.4888 18.0539 14.7374 17.2915C14.6889 17.2423 14.6404 17.1932 14.6162 17.1686C14.0345 17.4637 13.5012 17.808 12.9195 18.0539C10.4228 19.1114 7.90196 19.0868 5.42957 17.9555C3.56316 17.0948 2.15728 15.7422 1.16348 13.9469C0.533261 12.791 0.145435 11.5614 0.0484783 10.2334C0.0484783 10.1596 0.0242392 10.0858 0 10.012C0 9.64314 0 9.22507 0 8.83158ZM3.00566 9.4464C3.00566 12.9632 5.84164 15.816 9.30784 15.816C12.774 15.7914 15.5615 12.9632 15.5858 9.4464C15.5858 5.95422 12.7498 3.07685 9.30784 3.07685C5.8174 3.07685 3.00566 5.92962 3.00566 9.4464Z"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full mt-5 px-5 flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>setTab("category"),
                                    className: `text-base font-semibold  ${tab === "category" ? "text-qblack" : "text-qgray"}`,
                                    children: langCntnt && langCntnt.Categories
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-[1px] h-[14px] bg-qgray"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    onClick: ()=>setTab("menu"),
                                    className: `text-base font-semibold ${tab === "menu" ? "text-qblack" : "text-qgray "}`,
                                    children: langCntnt && langCntnt.Main_Menu
                                })
                            ]
                        }),
                        tab === "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "category-item mt-5 w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "categories-list",
                                children: categoryList && categoryList.slice(0, 10).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: item.slug
                                                }
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                        width: "20px",
                                                                        height: "20px",
                                                                        objectFit: "scale-down",
                                                                        src: "https://backend.invofy.shop/" + item.image,
                                                                        alt: ""
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm font-400 capitalize ",
                                                                children: item.name
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }, i))
                            })
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "menu-item mt-5 w-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "categories-list",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "category-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "flex items-center space-x-6",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sm font-400 capitalize ",
                                                                children: langCntnt && langCntnt.Pages
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                    width: "6",
                                                                    height: "9",
                                                                    viewBox: "0 0 6 9",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "1.49805",
                                                                            y: "0.818359",
                                                                            width: "5.78538",
                                                                            height: "1.28564",
                                                                            transform: "rotate(45 1.49805 0.818359)",
                                                                            fill: "#1D1D1D"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                            x: "5.58984",
                                                                            y: "4.90918",
                                                                            width: "5.78538",
                                                                            height: "1.28564",
                                                                            transform: "rotate(135 5.58984 4.90918)",
                                                                            fill: "#1D1D1D"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                className: "submenu-list ml-5",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/privacy-policy",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize ",
                                                                            children: langCntnt && langCntnt.Privacy_Policy
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/faq",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize ",
                                                                            children: langCntnt && langCntnt.FAQ
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/terms-condition",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize ",
                                                                            children: langCntnt && langCntnt.Term_and_Conditions
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                        className: "category-item",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: "/seller-terms-condition",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "flex items-center space-x-6",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-sm font-400 capitalize ",
                                                                            children: "Seller Terms and Conditions"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                width: "6",
                                                                                height: "9",
                                                                                viewBox: "0 0 6 9",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "1.49805",
                                                                                        y: "0.818359",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                                        fill: "#1D1D1D"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                        x: "5.58984",
                                                                                        y: "4.90918",
                                                                                        width: "5.78538",
                                                                                        height: "1.28564",
                                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                                        fill: "#1D1D1D"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    }),
                                                    customPages && customPages.length > 0 && customPages.map((item, i)=>// eslint-disable-next-line react/jsx-key
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "category-item",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: `/pages?custom=${item.slug}`,
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: " flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "flex items-center space-x-6",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-sm font-400 capitalize ",
                                                                                    children: item.page_name
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                        width: "6",
                                                                                        height: "9",
                                                                                        viewBox: "0 0 6 9",
                                                                                        fill: "none",
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "1.49805",
                                                                                                y: "0.818359",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(45 1.49805 0.818359)",
                                                                                                fill: "#1D1D1D"
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                x: "5.58984",
                                                                                                y: "4.90918",
                                                                                                width: "5.78538",
                                                                                                height: "1.28564",
                                                                                                transform: "rotate(135 5.58984 4.90918)",
                                                                                                fill: "#1D1D1D"
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        }, i))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/about",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize ",
                                                            children: langCntnt && langCntnt.About
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/blogs",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize ",
                                                            children: langCntnt && langCntnt.blogs
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "category-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/contact",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between items-center px-5 h-12 bg-white hover:bg-qpurple transition-all duration-300 ease-in-out cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex items-center space-x-6",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-sm font-400 capitalize ",
                                                            children: langCntnt && langCntnt.Contact
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                width: "6",
                                                                height: "9",
                                                                viewBox: "0 0 6 9",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "1.49805",
                                                                        y: "0.818359",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(45 1.49805 0.818359)",
                                                                        fill: "#1D1D1D"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                        x: "5.58984",
                                                                        y: "4.90918",
                                                                        width: "5.78538",
                                                                        height: "1.28564",
                                                                        transform: "rotate(135 5.58984 4.90918)",
                                                                        fill: "#1D1D1D"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 9231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/components/Helpers/icons/FontAwesomeCom.jsx
var FontAwesomeCom = __webpack_require__(4527);
// EXTERNAL MODULE: ./utils/languageModel.js
var languageModel = __webpack_require__(9363);
;// CONCATENATED MODULE: ./src/components/Home/Services.jsx



function Services({ services =[]  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container-x mx-auto",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "best-services rounded w-full bg-qpurple flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] h-full px-10 lg:py-0 py-10",
                children: services.map((service, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex space-x-5 items-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-10 h-10 text-white",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FontAwesomeCom/* default */.Z, {
                                                    className: "w-8 h-8",
                                                    icon: service.icon
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                    className: "text-white text-[15px] font-700 tracking-wide mb-1",
                                                    children: service.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm text-white line-clamp-1",
                                                    children: service.description
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, service.id),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "service-sparator w-[1px] h-[64px] bg-[#BE49AE]"
                            })
                        ]
                    }, i))
            })
        })
    });
}
/* harmony default export */ const Home_Services = (Services);

;// CONCATENATED MODULE: ./src/components/Partials/Footers/Footer/index.jsx








function Footer({ settings , contact  }) {
    const { websiteSetup  } = (0,external_react_redux_.useSelector)((state)=>state.websiteSetup);
    const { 0: firstCol , 1: setFirstCol  } = (0,external_react_.useState)(null);
    const { 0: secondCol , 1: setSecondCol  } = (0,external_react_.useState)(null);
    const { 0: thirdCol , 1: setThirdCol  } = (0,external_react_.useState)(null);
    const { 0: footerContent , 1: setFooterContent  } = (0,external_react_.useState)(null);
    const { 0: socialLink , 1: setSocialLink  } = (0,external_react_.useState)(null);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,external_react_.useState)(null);
    const { 0: services , 1: setServices  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setLangCntnt((0,languageModel/* default */.Z)());
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (!services) {
            setServices(websiteSetup && websiteSetup.payload && websiteSetup.payload.services);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!footerContent) {
            setFooterContent(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!socialLink) {
            setSocialLink(websiteSetup && websiteSetup.payload && websiteSetup.payload.social_links);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!firstCol) {
            setFirstCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_first_col);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!secondCol) {
            setSecondCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_second_col);
        }
    });
    (0,external_react_.useEffect)(()=>{
        if (!thirdCol) {
            setThirdCol(websiteSetup && websiteSetup.payload && websiteSetup.payload.footer_third_col);
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        style: {
            backgroundImage: `url(${footerContent && "https://backend.invofy.shop/" + footerContent.background_image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        },
        className: "footer-section-wrapper bg-white print:hidden pl-3.5 sm:pl-0 relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#232532] bg-opacity-[0.96] w-full h-full absolute left-0 top-0 z-10"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-x block mx-auto pt-[370px] lg:pt-[96px] relative z-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute left-0 -top-[55px] w-full",
                        children: services && /*#__PURE__*/ jsx_runtime_.jsx(Home_Services, {
                            services: services
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "lg:flex justify-between lg:mb-[80px] mb-[40px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex-1 lg:flex ml-0 w-full mb-10 lg:mb-0",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-[350px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: settings && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                            width: "153",
                                                            height: "44",
                                                            objectFit: "scale-down",
                                                            src: `${"https://backend.invofy.shop/" + settings.logo}`,
                                                            alt: "logo"
                                                        })
                                                    })
                                                })
                                            }),
                                            thirdCol && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                    className: "flex flex-col space-y-5 ",
                                                    children: thirdCol.col_links.length > 0 && thirdCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: item.link,
                                                                passHref: true,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    rel: "noopener noreferrer",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "text-[#C8C8C8] text-[15px] hover:text-qpurple hover:underline cursor-pointer",
                                                                        children: item.title
                                                                    })
                                                                })
                                                            })
                                                        }, i))
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "lg:w-[260px] w-full mb-10 lg:mb-0 mt-16 lg:mt-0",
                                        children: firstCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "mb-5",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "text-[18] font-500 text-white",
                                                        children: firstCol.columnTitle
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                        className: "flex flex-col space-y-5 ",
                                                        children: firstCol.col_links.length > 0 && firstCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: item.link,
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        rel: "noopener noreferrer",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "text-[#C8C8C8] text-[15px] hover:text-qpurple hover:underline cursor-pointer",
                                                                            children: item.title
                                                                        })
                                                                    })
                                                                })
                                                            }, i))
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "lg:w-[260px] hidden xl:flex xl:flex-col w-full mb-10 lg:mb-0 relative",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: secondCol && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "mb-5",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "text-[18] font-500 text-white",
                                                                children: secondCol.columnTitle
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                className: "flex flex-col space-y-5 ",
                                                                children: secondCol.col_links.length > 0 && secondCol.col_links.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: item.link,
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    className: "text-[#C8C8C8] text-[15px] hover:text-qpurple hover:underline cursor-pointer",
                                                                                    children: item.title
                                                                                })
                                                                            })
                                                                        })
                                                                    }, i))
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-[1px] xl:block hidden h-[250px] absolute left-[213px] bg-[#6B6B72]"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lg:w-[490px] lg:flex mt-16 lg:mt-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "text-[18] font-500 text-white",
                                                children: langCntnt && langCntnt.Contact_Info
                                            })
                                        }),
                                        contact && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full flex space-x-5 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                width: "44",
                                                                height: "45",
                                                                viewBox: "0 0 44 45",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                        cx: "21.9995",
                                                                        cy: "22.9961",
                                                                        r: "21.5",
                                                                        stroke: "#424242"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                                        clipPath: "url(#clip0_2343_13859)",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M22.0218 13.9961C26.4153 14.0049 29.7134 17.7202 28.8665 21.6964C28.4484 23.66 27.5123 25.4261 26.3138 27.0614C25.1774 28.6116 23.9185 30.0879 22.6867 31.5779C22.2178 32.1454 21.804 32.1262 21.3001 31.5795C19.1664 29.2642 17.2295 26.8278 15.9102 24.0253C15.3696 22.8757 14.9978 21.6836 14.9995 20.4176C15.003 16.8701 18.1568 13.9881 22.0218 13.9961ZM22.0297 30.36C22.9045 29.2763 23.7479 28.3049 24.5037 27.2782C25.8116 25.5008 26.9568 23.6407 27.4616 21.5142C28.0739 18.934 26.466 16.3499 23.7566 15.5367C21.0149 14.713 18.0326 15.9324 16.8743 18.344C16.1858 19.777 16.3188 21.2091 16.8647 22.6413C17.6756 24.7695 18.9512 26.6632 20.399 28.4655C20.8889 29.0764 21.4226 29.6576 22.0297 30.36Z",
                                                                                fill: "white"
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                d: "M24.7977 20.4357C24.7916 21.8486 23.5204 22.9982 21.9728 22.9886C20.4567 22.9797 19.2005 21.8197 19.1987 20.4253C19.1961 19.0148 20.4664 17.85 22.0043 17.8516C23.5432 17.8532 24.8029 19.0188 24.7977 20.4357ZM23.3953 20.4213C23.3953 19.7156 22.7873 19.1481 22.021 19.1384C21.2371 19.128 20.6011 19.702 20.6011 20.4213C20.6011 21.1253 21.2109 21.6937 21.9772 21.7033C22.7663 21.7121 23.3953 21.143 23.3953 20.4213Z",
                                                                                fill: "white"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                                            id: "clip0_2343_13859",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                width: "14",
                                                                                height: "18",
                                                                                fill: "white",
                                                                                transform: "translate(14.9995 13.9961)"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: "text-[15px] font-semibold text-white",
                                                                    children: [
                                                                        langCntnt && langCntnt.Address,
                                                                        ":"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]",
                                                                    children: contact.address
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full flex space-x-5 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                width: "44",
                                                                height: "45",
                                                                viewBox: "0 0 44 45",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                        cx: "21.9995",
                                                                        cy: "22.9961",
                                                                        r: "21.5",
                                                                        stroke: "#424242"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                                        clipPath: "url(#clip0_56_7)",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                            d: "M26.9779 30.9959C25.7937 30.9581 24.6221 30.5625 23.5005 30.0096C19.5679 28.0716 16.6582 25.1275 14.8109 21.1599C14.2944 20.0502 13.9265 18.8947 14.0112 17.6423C14.0558 16.9879 14.2937 16.4177 14.7489 15.9459C15.1954 15.4839 15.6439 15.0233 16.1124 14.5833C16.9448 13.8008 17.8545 13.7981 18.6795 14.5866C19.3846 15.2596 20.075 15.9492 20.7514 16.6514C21.5858 17.5175 21.5732 18.3743 20.7348 19.2431C20.3969 19.5935 20.051 19.9387 19.6925 20.2685C19.5419 20.4072 19.5299 20.5161 19.6205 20.692C20.257 21.9198 21.1526 22.9459 22.1916 23.8359C22.8434 24.3941 23.5884 24.8434 24.2909 25.3425C24.4555 25.46 24.5754 25.4295 24.7174 25.2814C25.1092 24.8753 25.5058 24.4704 25.9276 24.0954C26.6407 23.4616 27.5164 23.4689 28.2035 24.1259C28.9725 24.8607 29.7269 25.6113 30.4647 26.3772C31.1558 27.0953 31.1784 27.9907 30.5187 28.7333C30.0415 29.2709 29.5317 29.782 29.0105 30.2784C28.4727 30.7915 27.8003 30.9952 26.9779 30.9959ZM27.0239 30.1377C27.6637 30.1616 28.1902 29.9307 28.6247 29.4647C28.9645 29.1004 29.3198 28.7499 29.6703 28.3962C30.2688 27.7922 30.2734 27.4119 29.6796 26.8199C29.0365 26.1781 28.3921 25.5376 27.7463 24.8985C27.2265 24.3841 26.8546 24.3848 26.3241 24.9045C25.9203 25.3 25.5244 25.7036 25.1206 26.0985C24.7974 26.415 24.5148 26.4774 24.1316 26.2418C23.4165 25.8011 22.6768 25.3823 22.0303 24.8534C20.6835 23.7523 19.5132 22.4853 18.7561 20.8917C18.5062 20.3661 18.5576 20.1597 18.9861 19.7502C19.3706 19.3825 19.7545 19.0141 20.1243 18.6325C20.6122 18.1301 20.6115 17.7518 20.1237 17.2586C19.4472 16.5724 18.7641 15.8921 18.0764 15.2171C17.5952 14.7446 17.1827 14.7512 16.6922 15.2284C16.311 15.5994 15.9478 15.989 15.5586 16.3507C15.0221 16.8491 14.8255 17.4597 14.8695 18.1739C14.9275 19.117 15.2221 19.9964 15.6179 20.838C17.3853 24.5985 20.1457 27.402 23.8823 29.2424C24.8707 29.7302 25.9036 30.0959 27.0239 30.1377Z",
                                                                            fill: "white"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                                                            id: "clip0_56_7",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                                                width: "17",
                                                                                height: "17",
                                                                                fill: "white",
                                                                                transform: "translate(13.9995 13.9961)"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: "text-[15px] font-semibold text-white capitalize",
                                                                    children: [
                                                                        langCntnt && langCntnt.phone,
                                                                        ":"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]",
                                                                    children: contact.phone
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "w-full flex space-x-5 ",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                                width: "44",
                                                                height: "44",
                                                                viewBox: "0 0 44 44",
                                                                fill: "none",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                                        cx: "22",
                                                                        cy: "22",
                                                                        r: "21.5",
                                                                        stroke: "#424242"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                        d: "M22.2477 27.9994C19.9168 27.9994 17.5858 28.0001 15.2542 27.9987C14.1169 27.9981 13.5043 27.3807 13.5036 26.2358C13.5036 23.2881 13.5029 20.3398 13.5043 17.3915C13.505 16.2734 14.1258 15.6512 15.2432 15.6512C19.9394 15.6505 24.6363 15.6498 29.3325 15.6512C30.4472 15.6512 31.0652 16.2747 31.0659 17.397C31.0673 20.3453 31.0666 23.293 31.0659 26.2413C31.0652 27.3841 30.4513 27.9987 29.3098 27.9987C26.9556 28.0001 24.602 27.9994 22.2477 27.9994ZM15.307 16.7C15.4099 16.8119 15.4806 16.8955 15.5574 16.9724C17.3807 18.7861 19.2047 20.5998 21.0294 22.4128C21.8656 23.2436 22.7032 23.2449 23.538 22.4156C25.3627 20.6032 27.1861 18.7895 29.0101 16.9751C29.0876 16.8983 29.1589 16.8153 29.2659 16.7C24.5958 16.7 19.9765 16.7 15.307 16.7ZM24.8544 22.5404C24.1307 23.3417 23.4187 24.0654 22.2765 24.064C21.1337 24.0619 20.4326 23.319 19.7425 22.5795C18.2876 24.066 16.8511 25.534 15.4751 26.9403C19.9874 26.9403 24.6061 26.9403 29.1617 26.9403C27.7472 25.4956 26.3169 24.0345 24.8544 22.5404ZM18.8357 21.8716C17.413 20.4304 15.9765 18.9747 14.5627 17.5424C14.5627 20.3899 14.5627 23.2779 14.5627 26.2186C16.0342 24.7212 17.4658 23.2655 18.8357 21.8716ZM25.7338 21.7982C27.1408 23.2298 28.5752 24.6889 30.0123 26.1507C30.0123 23.2655 30.0123 20.3782 30.0123 17.4663C28.5539 18.9425 27.1209 20.394 25.7338 21.7982Z",
                                                                        fill: "white"
                                                                    })
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                                                    className: "text-[15px] font-semibold text-white capitalize",
                                                                    children: [
                                                                        langCntnt && langCntnt.Email,
                                                                        ":"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "text-[15px] text-[#C8C8C8] leading-[30px] w-[248px]",
                                                                    children: contact.email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "bottom-bar border-t border-[#6B6B72] lg:h-[82px] flex lg:flex-row flex-col-reverse justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex lg:space-x-5 space-x-2.5 justify-between items-center my-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-5 items-center",
                                        children: socialLink && socialLink.length > 0 && socialLink.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: item.link,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(FontAwesomeCom/* default */.Z, {
                                                    className: "w-4 h-4 text-[#C8C8C8]",
                                                    icon: item.icon
                                                })
                                            }, i))
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sm:text-base text-[10px] text-[#C8C8C8] font-300",
                                        children: footerContent && footerContent.copyright ? footerContent.copyright : ""
                                    })
                                ]
                            }),
                            footerContent && footerContent.payment_image ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-2 lg:mt-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "#",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            width: "318",
                                            height: "28",
                                            src: `${"https://backend.invofy.shop/" + footerContent.payment_image}`,
                                            alt: "payment-getways"
                                        })
                                    })
                                })
                            }) : ""
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 3956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Middlebar)
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4994);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3896);
/* harmony import */ var _Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6399);
/* harmony import */ var _Helpers_icons_ThinPeople__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(661);
/* harmony import */ var _Helpers_SearchBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8905);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9363);
/* harmony import */ var _contexts_DefaultUser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__, _Cart__WEBPACK_IMPORTED_MODULE_8__]);
([_utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__, _Cart__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Middlebar({ className , settings  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.websiteSetup);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.wishlistData);
    const wishlists = wishlistData && wishlistData.wishlists;
    const { 0: profile , 1: setProfile  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { compareProducts  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.compareProducts);
    const { 0: searchToogle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const value = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_contexts_DefaultUser__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z);
    const { 0: defaultImage , 1: setDefaultImage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setUser(value.user);
    }, [
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (websiteSetup) {
            if (!defaultImage) {
                setDefaultImage(websiteSetup.payload?.defaultProfile.image);
            }
        }
    }, [
        websiteSetup,
        defaultImage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setAuth(JSON.parse(localStorage.getItem("auth")));
    }, []);
    const profilehandler = ()=>{
        setProfile(!profile);
    };
    const logout = ()=>{
        if (auth) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].logout */ .Z.logout(auth.access_token);
            localStorage.removeItem("auth");
            localStorage.removeItem("active-user");
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_7__/* .fetchWishlist */ .BW)());
            router.push("/login");
        }
    };
    //cart
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.cart);
    const { 0: cartItems , 1: setCartItem  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        cart && setCartItem(cart.cartProducts);
    }, [
        cart
    ]);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full h-[86px] bg-white ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        width: "153",
                                        height: "44",
                                        objectFit: "scale-down",
                                        src: `${"https://backend.invofy.shop/" + settings.logo}`,
                                        alt: "logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `w-full h-[240px] bg-white delay-300 shadow transition-all duration-300 ease-in-out fixed -left-0 top-0 transform ${searchToogle ? `translate-y-0` : "-translate-y-[100vh]"}`,
                            style: {
                                zIndex: 99
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full h-full flex justify-center items-center relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[620px] h-[60px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SearchBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setToggle(!searchToogle),
                                        type: "button",
                                        className: "text-qred absolute right-5 top-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            strokeWidth: "1.5",
                                            stroke: "currentColor",
                                            className: "w-6 h-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M6 18L18 6M6 6l12 12"
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setToggle(!searchToogle),
                            className: `w-full delay-50 h-screen transition-all duration-300 ease-in-out bg-black bg-opacity-50 fixed -left-0 top-0 z-40 transform ${searchToogle ? `translate-y-0` : "-translate-y-[100vh]"}`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex space-x-6 items-center relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>setToggle(!searchToogle),
                                    className: "w-[52px] h-[52px] bg-qyellow flex justify-center items-center rounded-full cursor-pointer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 22 22",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M13.9708 16.4151C12.5227 17.4021 10.9758 17.9723 9.27353 18.0062C5.58462 18.0802 2.75802 16.483 1.05056 13.1945C-1.76315 7.77253 1.33485 1.37571 7.25086 0.167548C12.2281 -0.848249 17.2053 2.87895 17.7198 7.98579C17.9182 9.95558 17.5566 11.7939 16.5852 13.5061C16.4512 13.742 16.483 13.8725 16.6651 14.0553C18.2412 15.6386 19.8112 17.2272 21.3735 18.8244C22.1826 19.6513 22.2058 20.7559 21.456 21.4932C20.7697 22.1678 19.7047 22.1747 18.9764 21.4793C18.3623 20.8917 17.7774 20.2737 17.1796 19.6688C16.118 18.5929 15.0564 17.5153 13.9708 16.4151ZM2.89545 9.0364C2.91692 12.4172 5.59664 15.1164 8.91967 15.1042C12.2384 15.092 14.9138 12.3493 14.8889 8.98505C14.864 5.63213 12.1826 2.92508 8.89047 2.92857C5.58204 2.93118 2.87397 5.68958 2.89545 9.0364Z",
                                                fill: "#232532"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "compaire relative",
                                    children: [
                                        auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/products-compaire",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                rel: "noopener noreferrer",
                                                className: "flex space-x-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "cursor-pointer text-[#6E6D79]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 22 22",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M22 11.0094C21.997 17.0881 17.0653 22.007 10.9802 22C4.90444 21.9931 -0.00941233 17.0569 1.3538e-05 10.9688C0.00943941 4.89602 4.95157 -0.0133673 11.0422 2.73441e-05C17.0961 0.013422 22.003 4.94315 22 11.0094ZM6.16553 10.7812C6.40365 7.62357 8.72192 6.28609 10.5868 6.19927C12.3305 6.11791 14.4529 7.33534 14.7465 8.61428C14.2425 8.61428 13.7459 8.61428 13.2429 8.61428C13.2429 9.02406 13.2429 9.39861 13.2429 9.79748C14.308 9.79748 15.3374 9.80641 16.3668 9.79301C16.7805 9.78755 17.0102 9.52909 17.0147 9.10046C17.0221 8.34143 17.0172 7.5824 17.0172 6.82337C17.0172 6.55795 17.0172 6.29254 17.0172 6.0311C16.5836 6.0311 16.2165 6.0311 15.7908 6.0311C15.7908 6.60459 15.7908 7.15724 15.7908 7.79374C13.9379 5.04436 10.8447 4.4545 8.48578 5.48241C6.21811 6.47064 4.90792 8.84695 5.04682 10.7817C5.40997 10.7812 5.77609 10.7812 6.16553 10.7812ZM15.8191 11.2178C15.7581 12.4576 15.3498 13.547 14.4742 14.4286C13.5976 15.3111 12.5265 15.772 11.2858 15.8008C9.57472 15.8405 7.568 14.6424 7.2495 13.3892C7.75403 13.3892 8.25013 13.3892 8.76012 13.3892C8.76012 12.9809 8.76012 12.6064 8.76012 12.2041C7.68458 12.2041 6.64178 12.1921 5.59997 12.21C5.19962 12.2169 5.00069 12.4839 4.99771 12.9442C4.99176 13.803 4.99573 14.6612 4.99573 15.52C4.99573 15.6698 4.99573 15.8196 4.99573 15.964C5.4318 15.964 5.79692 15.964 6.20224 15.964C6.20224 15.3895 6.20224 14.8418 6.20224 14.1686C7.07984 15.4912 8.16976 16.3465 9.58216 16.7617C11.0184 17.1839 12.4114 17.0494 13.7548 16.4035C15.8191 15.4113 17.0946 13.1466 16.9507 11.2178C16.5861 11.2178 16.2209 11.2178 15.8191 11.2178Z",
                                                                    fill: "#6E6D79"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M6.16586 10.7814C5.77642 10.7814 5.4108 10.7814 5.04666 10.7814C4.90775 8.84707 6.21795 6.47026 8.48562 5.48203C10.8446 4.45411 13.9377 5.04397 15.7907 7.79335C15.7907 7.15686 15.7907 6.6042 15.7907 6.03071C16.2163 6.03071 16.5834 6.03071 17.017 6.03071C17.017 6.29166 17.017 6.55707 17.017 6.82298C17.017 7.58201 17.022 8.34104 17.0145 9.10007C17.0106 9.5287 16.7804 9.78767 16.3666 9.79263C15.3372 9.80553 14.3078 9.79709 13.2427 9.79709C13.2427 9.39823 13.2427 9.02368 13.2427 8.6139C13.7453 8.6139 14.2418 8.6139 14.7464 8.6139C14.4527 7.33545 12.3304 6.11803 10.5866 6.19889C8.72226 6.2862 6.40399 7.62369 6.16586 10.7814Z",
                                                                    fill: "white"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M15.8188 11.2178C16.2207 11.2178 16.5863 11.2178 16.9499 11.2178C17.0938 13.1466 15.8183 15.4108 13.7541 16.4035C12.4106 17.0494 11.0176 17.1834 9.58138 16.7617C8.16948 16.3469 7.07955 15.4912 6.20146 14.1686C6.20146 14.8418 6.20146 15.3895 6.20146 15.9639C5.79664 15.9639 5.43102 15.9639 4.99495 15.9639C4.99495 15.8201 4.99495 15.6703 4.99495 15.5199C4.99495 14.6612 4.99098 13.8029 4.99693 12.9442C4.99991 12.4838 5.19884 12.2169 5.5992 12.21C6.6415 12.1916 7.6838 12.204 8.75934 12.204C8.75934 12.6064 8.75934 12.9809 8.75934 13.3892C8.24985 13.3892 7.75326 13.3892 7.24872 13.3892C7.56772 14.6428 9.57443 15.8404 11.285 15.8007C12.5257 15.772 13.5968 15.3111 14.4734 14.4285C15.349 13.547 15.7578 12.457 15.8188 11.2178Z",
                                                                    fill: "white"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-base text-qgray font-medium",
                                                        children: "Compare"
                                                    })
                                                ]
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/login",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                rel: "noopener noreferrer",
                                                className: "flex space-x-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "cursor-pointer text-[#6E6D79]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 22 22",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M22 11.0094C21.997 17.0881 17.0653 22.007 10.9802 22C4.90444 21.9931 -0.00941233 17.0569 1.3538e-05 10.9688C0.00943941 4.89602 4.95157 -0.0133673 11.0422 2.73441e-05C17.0961 0.013422 22.003 4.94315 22 11.0094ZM6.16553 10.7812C6.40365 7.62357 8.72192 6.28609 10.5868 6.19927C12.3305 6.11791 14.4529 7.33534 14.7465 8.61428C14.2425 8.61428 13.7459 8.61428 13.2429 8.61428C13.2429 9.02406 13.2429 9.39861 13.2429 9.79748C14.308 9.79748 15.3374 9.80641 16.3668 9.79301C16.7805 9.78755 17.0102 9.52909 17.0147 9.10046C17.0221 8.34143 17.0172 7.5824 17.0172 6.82337C17.0172 6.55795 17.0172 6.29254 17.0172 6.0311C16.5836 6.0311 16.2165 6.0311 15.7908 6.0311C15.7908 6.60459 15.7908 7.15724 15.7908 7.79374C13.9379 5.04436 10.8447 4.4545 8.48578 5.48241C6.21811 6.47064 4.90792 8.84695 5.04682 10.7817C5.40997 10.7812 5.77609 10.7812 6.16553 10.7812ZM15.8191 11.2178C15.7581 12.4576 15.3498 13.547 14.4742 14.4286C13.5976 15.3111 12.5265 15.772 11.2858 15.8008C9.57472 15.8405 7.568 14.6424 7.2495 13.3892C7.75403 13.3892 8.25013 13.3892 8.76012 13.3892C8.76012 12.9809 8.76012 12.6064 8.76012 12.2041C7.68458 12.2041 6.64178 12.1921 5.59997 12.21C5.19962 12.2169 5.00069 12.4839 4.99771 12.9442C4.99176 13.803 4.99573 14.6612 4.99573 15.52C4.99573 15.6698 4.99573 15.8196 4.99573 15.964C5.4318 15.964 5.79692 15.964 6.20224 15.964C6.20224 15.3895 6.20224 14.8418 6.20224 14.1686C7.07984 15.4912 8.16976 16.3465 9.58216 16.7617C11.0184 17.1839 12.4114 17.0494 13.7548 16.4035C15.8191 15.4113 17.0946 13.1466 16.9507 11.2178C16.5861 11.2178 16.2209 11.2178 15.8191 11.2178Z",
                                                                    fill: "#6E6D79"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M6.16586 10.7814C5.77642 10.7814 5.4108 10.7814 5.04666 10.7814C4.90775 8.84707 6.21795 6.47026 8.48562 5.48203C10.8446 4.45411 13.9377 5.04397 15.7907 7.79335C15.7907 7.15686 15.7907 6.6042 15.7907 6.03071C16.2163 6.03071 16.5834 6.03071 17.017 6.03071C17.017 6.29166 17.017 6.55707 17.017 6.82298C17.017 7.58201 17.022 8.34104 17.0145 9.10007C17.0106 9.5287 16.7804 9.78767 16.3666 9.79263C15.3372 9.80553 14.3078 9.79709 13.2427 9.79709C13.2427 9.39823 13.2427 9.02368 13.2427 8.6139C13.7453 8.6139 14.2418 8.6139 14.7464 8.6139C14.4527 7.33545 12.3304 6.11803 10.5866 6.19889C8.72226 6.2862 6.40399 7.62369 6.16586 10.7814Z",
                                                                    fill: "white"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M15.8188 11.2178C16.2207 11.2178 16.5863 11.2178 16.9499 11.2178C17.0938 13.1466 15.8183 15.4108 13.7541 16.4035C12.4106 17.0494 11.0176 17.1834 9.58138 16.7617C8.16948 16.3469 7.07955 15.4912 6.20146 14.1686C6.20146 14.8418 6.20146 15.3895 6.20146 15.9639C5.79664 15.9639 5.43102 15.9639 4.99495 15.9639C4.99495 15.8201 4.99495 15.6703 4.99495 15.5199C4.99495 14.6612 4.99098 13.8029 4.99693 12.9442C4.99991 12.4838 5.19884 12.2169 5.5992 12.21C6.6415 12.1916 7.6838 12.204 8.75934 12.204C8.75934 12.6064 8.75934 12.9809 8.75934 13.3892C8.24985 13.3892 7.75326 13.3892 7.24872 13.3892C7.56772 14.6428 9.57443 15.8404 11.285 15.8007C12.5257 15.772 13.5968 15.3111 14.4734 14.4285C15.349 13.547 15.7578 12.457 15.8188 11.2178Z",
                                                                    fill: "white"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-base text-qgray font-medium capitalize",
                                                        children: langCntnt && langCntnt.compare
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "w-[18px] h-[18px] rounded-full absolute -top-1.5 left-4 flex justify-center items-center text-[9px]",
                                            children: compareProducts ? compareProducts.products.length : 0
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "favorite relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/wishlist",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                rel: "noopener noreferrer",
                                                className: "flex space-x-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "cursor-pointer text-[#6E6D79]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "23",
                                                            height: "22",
                                                            viewBox: "0 0 23 22",
                                                            className: "fill-current",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M11.4048 3.54989C11.6188 3.30247 11.807 3.07783 12.0028 2.86001C15.0698 -0.54838 20.3879 0.51717 22.1581 4.60443C23.4189 7.5161 22.8486 10.213 20.9966 12.6962C19.6524 14.498 17.95 15.9437 16.2722 17.4108C15.0308 18.4964 13.7741 19.5642 12.5247 20.6408C11.6987 21.3523 11.1109 21.3607 10.2924 20.6397C8.05184 18.6657 5.79232 16.7125 3.59037 14.6964C2.35873 13.5686 1.33274 12.2553 0.638899 10.7086C-0.626827 7.88722 0.0325472 4.41204 2.22314 2.41034C4.84019 0.0185469 8.81764 0.369176 11.1059 3.19281C11.1968 3.30475 11.2908 3.41404 11.4048 3.54989Z"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-base text-qgray font-medium capitalize",
                                                        children: langCntnt && langCntnt.Wishlist
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "w-[18px] h-[18px] rounded-full absolute -top-1.5 left-4 flex justify-center items-center text-[9px]",
                                            children: wishlists ? wishlists.data.length : 0
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "cart-wrapper group relative py-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "cart relative cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    href: "/cart",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        rel: "noopener noreferrer",
                                                        className: "flex space-x-4 items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "cursor-pointer text-[#6E6D79]",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                    className: "fill-current"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-base text-qgray font-medium",
                                                                children: langCntnt && langCntnt.Cart
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-[18px] h-[18px] rounded-full absolute -top-1.5 left-4 flex justify-center items-center text-[9px]",
                                                    children: cartItems ? cartItems.length : 0
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                            className: "absolute -right-[45px] top-14 z-50 hidden group-hover:block rounded"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: profilehandler,
                                            type: "button",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex space-x-4 items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[52px] h-[52px] rounded-full bg-qyellow relative overflow-hidden",
                                                        children: user && user.image ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            layout: "fill",
                                                            objectFit: "cover",
                                                            src: "https://backend.invofy.shop/" + user.image,
                                                            alt: "user"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            layout: "fill",
                                                            objectFit: "cover",
                                                            src: "https://backend.invofy.shop/" + defaultImage,
                                                            alt: "user"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-md text-qblack font-semibold text-start leading-none",
                                                                children: user.name
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-sm text-start text-qgray leading-none",
                                                                children: user.phone
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: "/login",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "cursor-pointer text-[#6E6D79]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinPeople__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    className: "fill-current"
                                                })
                                            })
                                        })
                                    })
                                }),
                                profile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setProfile(false),
                                            className: "w-full h-full fixed top-0 left-0 z-30",
                                            style: {
                                                zIndex: "35",
                                                margin: "0"
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "w-[208px] h-[267px] bg-white absolute right-0 top-14 z-40 border-t-[3px] border-qpurple flex flex-col justify-between rounded",
                                            style: {
                                                boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "menu-item-area w-full p-5",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                        className: "w-full flex flex-col space-y-7",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "text-base text-qgray",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "line-clamp-1",
                                                                    children: [
                                                                        langCntnt && langCntnt.Hi,
                                                                        ",",
                                                                        " ",
                                                                        auth && auth.user.name,
                                                                        " "
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "text-base text-qgray cursor-pointer hover:text-qblack hover:font-semibold",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: "/profile#dashboard",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        rel: "noopener noreferrer",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "capitalize",
                                                                            children: langCntnt && langCntnt.profile
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "text-base text-qgray cursor-pointer hover:text-qblack hover:font-semibold",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: "/contact",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        rel: "noopener noreferrer",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "capitalize",
                                                                            children: langCntnt && langCntnt.Support
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                className: "text-base text-qgray cursor-pointer hover:text-qblack hover:font-semibold",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                    href: "/faq",
                                                                    passHref: true,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        rel: "noopener noreferrer",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "capitalize",
                                                                            children: langCntnt && langCntnt.FAQ
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full h-10 flex justify-center items-center border-t border-qborder",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        onClick: logout,
                                                        type: "button",
                                                        className: "text-qblack text-base font-semibold",
                                                        children: langCntnt && langCntnt.Sign_Out
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 697:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_Multivendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9732);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9363);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);







// import FontAwesomeCom from "../../../Helpers/icons/FontAwesomeCom";

function Navbar({ className  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.websiteSetup);
    const categoryList = websiteSetup && websiteSetup.payload.productCategories;
    const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
    const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
    const customPages = websiteSetup && websiteSetup.payload.customPages;
    const { 0: categoryToggle , 1: setToggle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: subCatHeight , 1: setHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const handler = ()=>{
        setToggle(!categoryToggle);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        let categorySelector = document.querySelector(".category-dropdown");
        setHeight(categorySelector.offsetHeight);
    }, [
        categoryToggle
    ]);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `nav-widget-wrapper w-full  h-[70px] relative z-30  ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-x mx-auto h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full h-full relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "category-and-nav flex xl:space-x-7 space-x-3 items-center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "category rounded-t-md relative",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: handler,
                                        type: "button",
                                        className: "w-full h-full flex justify-between items-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-3 items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-white flex justify-center items-center w-[48px] h-[48px] bg-qpurple shadow-2xl rounded-full",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "14",
                                                        height: "9",
                                                        viewBox: "0 0 14 9",
                                                        fill: "none",
                                                        className: "fill-current",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                width: "14",
                                                                height: "1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                y: "8",
                                                                width: "14",
                                                                height: "1"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                y: "4",
                                                                width: "10",
                                                                height: "1"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm font-600 text-white",
                                                    children: langCntnt && langCntnt.All_Categories
                                                })
                                            ]
                                        })
                                    }),
                                    categoryToggle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "fixed top-0 left-0 w-full h-full -z-10",
                                            onClick: handler
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                        },
                                        className: `category-dropdown  w-[270px] absolute left-0 top-[60px]  ${categoryToggle ? "block" : "hidden"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "categories-list relative",
                                            children: categoryList && categoryList.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                    className: "category-item transition-all duration-300 ease-in-out",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            href: {
                                                                pathname: "/products",
                                                                query: {
                                                                    category: item.slug
                                                                }
                                                            },
                                                            passHref: true,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                rel: "noopener noreferrer",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: " flex justify-between items-center px-5 h-10 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "flex items-center space-x-6",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "icon",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                                                        width: "20px",
                                                                                        height: "20px",
                                                                                        objectFit: "scale-down",
                                                                                        src: "https://backend.invofy.shop/" + item.image,
                                                                                        alt: ""
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "name text-sm font-400",
                                                                                    children: item.name
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "icon-arrow",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                    width: "6",
                                                                                    height: "9",
                                                                                    viewBox: "0 0 6 9",
                                                                                    fill: "none",
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "fill-current",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                            x: "1.49805",
                                                                                            y: "0.818359",
                                                                                            width: "5.78538",
                                                                                            height: "1.28564",
                                                                                            transform: "rotate(45 1.49805 0.818359)"
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                            x: "5.58984",
                                                                                            y: "4.90918",
                                                                                            width: "5.78538",
                                                                                            height: "1.28564",
                                                                                            transform: "rotate(135 5.58984 4.90918)"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: `sub-category-lvl-two absolute left-[270px] top-0 z-10 w-[270px] ${item.active_sub_categories.length > 0 ? "bg-white" : ""}`,
                                                            style: {
                                                                height: `${subCatHeight}px`
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                className: "",
                                                                children: item.active_sub_categories.length > 0 && item.active_sub_categories.map((subItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                        className: "category-item",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: {
                                                                                    pathname: "/products",
                                                                                    query: {
                                                                                        sub_category: subItem.slug
                                                                                    }
                                                                                },
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                        children: [
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "text-sm font-400",
                                                                                                    children: subItem.name
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                                        width: "6",
                                                                                                        height: "9",
                                                                                                        viewBox: "0 0 6 9",
                                                                                                        fill: "none",
                                                                                                        className: "fill-current",
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                x: "1.49805",
                                                                                                                y: "0.818359",
                                                                                                                width: "5.78538",
                                                                                                                height: "1.28564",
                                                                                                                transform: "rotate(45 1.49805 0.818359)"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                x: "5.58984",
                                                                                                                y: "4.90918",
                                                                                                                width: "5.78538",
                                                                                                                height: "1.28564",
                                                                                                                transform: "rotate(135 5.58984 4.90918)"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: `sub-category-lvl-three absolute left-[270px] top-0 z-10 w-[270px] ${subItem.active_child_categories.length > 0 ? "bg-white" : ""}`,
                                                                                style: {
                                                                                    height: `${subCatHeight}px`
                                                                                },
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                    className: "",
                                                                                    children: subItem.active_child_categories.length > 0 && subItem.active_child_categories.map((subsubitem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "category-item",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                                href: {
                                                                                                    pathname: "/products",
                                                                                                    query: {
                                                                                                        child_category: subsubitem.slug
                                                                                                    }
                                                                                                },
                                                                                                passHref: true,
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                    rel: "noopener noreferrer",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        className: " flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "text-sm font-400",
                                                                                                                children: subsubitem.name
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }, subsubitem.id))
                                                                                })
                                                                            })
                                                                        ]
                                                                    }, subItem.id))
                                                            })
                                                        })
                                                    ]
                                                }, item.id))
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "nav",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "nav-wrapper flex xl:space-x-10 space-x-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center text-sm font-600 cursor-pointer ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.Shop
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-1.5 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "10",
                                                            height: "10",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M2.37789 5.89467C1.88334 5.89467 1.3884 5.90326 0.893852 5.89193C0.443053 5.88178 0.107884 5.59427 0.0176461 5.17003C-0.0643884 4.78486 0.137573 4.3618 0.508681 4.20281C0.659077 4.13835 0.835647 4.10983 1.0005 4.10827C1.93764 4.09968 2.87518 4.10436 3.81233 4.10397C4.07054 4.10397 4.10335 4.07038 4.10374 3.80865C4.10452 2.85822 4.10179 1.90818 4.10491 0.957757C4.10648 0.512817 4.33578 0.176867 4.71197 0.0499086C5.30731 -0.151271 5.88545 0.278043 5.89366 0.937443C5.90147 1.56208 5.89561 2.1871 5.89561 2.81213C5.89561 3.14417 5.89483 3.47621 5.896 3.80787C5.89678 4.06999 5.9292 4.10397 6.18664 4.10397C7.13706 4.10475 8.0871 4.10241 9.03753 4.10514C9.48481 4.10632 9.8192 4.33211 9.9485 4.70751C10.1532 5.30168 9.72584 5.88412 9.06761 5.89389C8.50782 5.90209 7.94803 5.89584 7.38825 5.89584C6.97807 5.89584 6.56829 5.89467 6.15812 5.89662C5.93897 5.89779 5.89678 5.93998 5.89639 6.16226C5.89522 7.11893 5.89756 8.076 5.89522 9.03268C5.89405 9.48192 5.67216 9.81552 5.29715 9.94717C4.70416 10.155 4.1182 9.72958 4.10648 9.07292C4.09749 8.57837 4.10452 8.08343 4.10452 7.58888C4.10452 7.12011 4.10531 6.65173 4.10413 6.18296C4.10374 5.93373 4.06819 5.89701 3.82365 5.89662C3.34199 5.89545 2.86034 5.89623 2.37868 5.89623C2.37789 5.89506 2.37789 5.89506 2.37789 5.89467Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "sub-menu w-full absolute left-0 top-[70px]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "mega-menu-wrapper w-full bg-white rounded p-[30px] flex justify-between items-center ",
                                                    style: {
                                                        minHeight: "295px",
                                                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "categories-wrapper flex-1 h-full flex justify-around -ml-[70px]",
                                                            children: mageMenuList && mageMenuList.slice(0, 3).map((megaItem)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "category",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: {
                                                                                    pathname: "/products",
                                                                                    query: {
                                                                                        category: megaItem.category.slug
                                                                                    }
                                                                                },
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                    className: "text-sm font-700 text-qblack uppercase mb-[13px] cursor-pointer",
                                                                                    children: megaItem.category.name
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "category-items",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                                className: "flex flex-col space-y-3",
                                                                                children: megaItem.sub_categories.length > 0 && megaItem.sub_categories.map((subItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                            href: {
                                                                                                pathname: "/products",
                                                                                                query: {
                                                                                                    sub_category: subItem.sub_category && subItem.sub_category.slug
                                                                                                }
                                                                                            },
                                                                                            passHref: true,
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                rel: "noopener noreferrer",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer cursor-pointer",
                                                                                                    children: subItem.sub_category && subItem.sub_category.name
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    }, subItem.id))
                                                                            })
                                                                        })
                                                                    ]
                                                                }, megaItem.id))
                                                        }),
                                                        megaMenuBanner && parseInt(megaMenuBanner.status) === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                backgroundImage: `url(${"https://backend.invofy.shop/" + megaMenuBanner.image})`,
                                                                backgroundSize: "contain",
                                                                backgroundRepeat: "no-repeat"
                                                            },
                                                            className: "thumbnil w-[348px] h-[235px] relative flex items-center pl-[40px] group rounded",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex flex-col justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: " mb-[10px]",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "text-qblack uppercase text-xs font-semibold",
                                                                                    children: megaMenuBanner.title_one
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: "mb-[30px]",
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                                    className: "w-[160px] text-[24px] leading-[32px] text-qblack font-semibold",
                                                                                    children: megaMenuBanner.title_two
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "w-[90px]",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                            href: {
                                                                                pathname: "/products",
                                                                                query: {
                                                                                    category: megaMenuBanner.product_slug
                                                                                }
                                                                            },
                                                                            passHref: true,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                rel: "noopener noreferrer",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                    className: "cursor-pointer w-full relative",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                            className: "inline-flex space-x-1.5 items-center relative z-20",
                                                                                            children: [
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "text-sm text-qblack font-medium leading-[30px]",
                                                                                                    children: langCntnt && langCntnt.Shop_Now
                                                                                                }),
                                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "leading-[30px]",
                                                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                                                        width: "7",
                                                                                                        height: "11",
                                                                                                        viewBox: "0 0 7 11",
                                                                                                        fill: "none",
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                x: "2.08984",
                                                                                                                y: "0.636719",
                                                                                                                width: "6.94219",
                                                                                                                height: "1.54271",
                                                                                                                transform: "rotate(45 2.08984 0.636719)",
                                                                                                                fill: "#1D1D1D"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                                                                                x: "7",
                                                                                                                y: "5.54492",
                                                                                                                width: "6.94219",
                                                                                                                height: "1.54271",
                                                                                                                transform: "rotate(135 7 5.54492)",
                                                                                                                fill: "#1D1D1D"
                                                                                                            })
                                                                                                        ]
                                                                                                    })
                                                                                                })
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                            className: "w-[82px] transition-all duration-300 ease-in-out group-hover:h-4 h-[0px] bg-qyellow absolute left-0 bottom-0 z-10"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/sellers",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center text-sm font-600 cursor-pointer ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.Sellers
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/blogs",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center text-sm font-600 cursor-pointer capitalize",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.blogs
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/about",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "flex items-center text-sm font-600 cursor-pointer ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.About
                                                    })
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "flex items-center text-sm font-600 cursor-pointer ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.Pages
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-1.5 ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            width: "10",
                                                            height: "10",
                                                            viewBox: "0 0 10 10",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M2.37789 5.89467C1.88334 5.89467 1.3884 5.90326 0.893852 5.89193C0.443053 5.88178 0.107884 5.59427 0.0176461 5.17003C-0.0643884 4.78486 0.137573 4.3618 0.508681 4.20281C0.659077 4.13835 0.835647 4.10983 1.0005 4.10827C1.93764 4.09968 2.87518 4.10436 3.81233 4.10397C4.07054 4.10397 4.10335 4.07038 4.10374 3.80865C4.10452 2.85822 4.10179 1.90818 4.10491 0.957757C4.10648 0.512817 4.33578 0.176867 4.71197 0.0499086C5.30731 -0.151271 5.88545 0.278043 5.89366 0.937443C5.90147 1.56208 5.89561 2.1871 5.89561 2.81213C5.89561 3.14417 5.89483 3.47621 5.896 3.80787C5.89678 4.06999 5.9292 4.10397 6.18664 4.10397C7.13706 4.10475 8.0871 4.10241 9.03753 4.10514C9.48481 4.10632 9.8192 4.33211 9.9485 4.70751C10.1532 5.30168 9.72584 5.88412 9.06761 5.89389C8.50782 5.90209 7.94803 5.89584 7.38825 5.89584C6.97807 5.89584 6.56829 5.89467 6.15812 5.89662C5.93897 5.89779 5.89678 5.93998 5.89639 6.16226C5.89522 7.11893 5.89756 8.076 5.89522 9.03268C5.89405 9.48192 5.67216 9.81552 5.29715 9.94717C4.70416 10.155 4.1182 9.72958 4.10648 9.07292C4.09749 8.57837 4.10452 8.08343 4.10452 7.58888C4.10452 7.12011 4.10531 6.65173 4.10413 6.18296C4.10374 5.93373 4.06819 5.89701 3.82365 5.89662C3.34199 5.89545 2.86034 5.89623 2.37868 5.89623C2.37789 5.89506 2.37789 5.89506 2.37789 5.89467Z",
                                                                fill: "white"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "sub-menu w-[280px] absolute left-0 top-[70px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-full bg-white rounded flex justify-between items-center ",
                                                    style: {
                                                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "categories-wrapper w-full h-full p-5",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "category-items",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    className: "flex flex-col space-y-3",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: "/faq",
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                                                                        children: langCntnt && langCntnt.FAQ
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: "/privacy-policy",
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                                                                        children: langCntnt && langCntnt.Privacy_Policy
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: "/terms-condition",
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                                                                        children: langCntnt && langCntnt.Term_and_Conditions
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        (0,_Shared_Multivendor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)() === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                href: "seller-terms-condition",
                                                                                passHref: true,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    rel: "noopener noreferrer",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                        className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                                                                        children: langCntnt && langCntnt.Seller_terms_and_conditions
                                                                                    })
                                                                                })
                                                                            })
                                                                        }),
                                                                        customPages && customPages.length > 0 && customPages.map((item, i)=>// eslint-disable-next-line react/jsx-key
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                                        href: `/pages?custom=${item.slug}`,
                                                                                        passHref: true,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            rel: "noopener noreferrer",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                className: "text-qgray text-sm font-400 border-b border-transparent hover:border-qpurple hover:text-qpurple cursor-pointer",
                                                                                                children: item.page_name
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }, i))
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        (0,_Shared_Multivendor__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)() === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "become-seller-btn rounded-full overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/become-seller",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " w-[224px] h-[52px] flex justify-center items-center cursor-pointer ",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-2 items-center",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-[15px] font-600",
                                                    children: "Become Vendor"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "24",
                                                        height: "16",
                                                        viewBox: "0 0 24 16",
                                                        fill: "none",
                                                        className: "fill-current",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M20.257 7.07205C20.038 7.07205 19.8474 7.07205 19.6563 7.07205C17.4825 7.07205 15.3086 7.07205 13.1352 7.07205C10.1545 7.07205 7.17336 7.0725 4.19265 7.0725C3.30392 7.0725 2.41519 7.07024 1.52646 7.07295C1.12124 7.07431 0.809811 7.25265 0.625785 7.62651C0.43866 8.00623 0.488204 8.37556 0.737704 8.70426C0.932347 8.96027 1.20529 9.08173 1.52867 9.08037C2.20948 9.07766 2.8903 9.07902 3.57111 9.07902C5.95285 9.07902 8.33415 9.07902 10.7159 9.07902C13.782 9.07902 16.8485 9.07902 19.9146 9.07902C20.0274 9.07902 20.1398 9.07902 20.2822 9.07902C20.1871 9.18332 20.1141 9.26865 20.0358 9.34857C19.5656 9.82672 19.0922 10.3022 18.6229 10.7812C18.1363 11.2779 17.6541 11.7791 17.1675 12.2757C16.4942 12.9634 15.8116 13.6415 15.1476 14.3391C14.9096 14.5893 14.8455 14.9157 14.9406 15.2575C15.156 16.0305 16.0567 16.2499 16.6119 15.6769C17.4342 14.8286 18.2655 13.9892 19.0927 13.1458C19.6948 12.5317 20.2968 11.9172 20.8985 11.3023C21.5952 10.5902 22.2911 9.87729 22.9878 9.1648C23.1059 9.04425 23.2249 8.9246 23.3435 8.8045C23.6903 8.45367 23.7239 7.84278 23.3943 7.4766C22.998 7.03683 22.5852 6.61241 22.1756 6.18573C21.7965 5.79066 21.4134 5.39965 21.0303 5.00909C20.6733 4.64473 20.3132 4.28306 19.9553 3.91915C19.6147 3.57284 19.2754 3.22563 18.9356 2.87887C18.5154 2.44948 18.0951 2.01964 17.6744 1.5907C17.2511 1.15861 16.8198 0.734188 16.4057 0.29261C16.0363 -0.101559 15.3697 -0.0816927 15.0344 0.257392C14.6238 0.672782 14.5999 1.26381 14.995 1.68552C15.3378 2.0517 15.6957 2.40342 16.0465 2.76192C16.929 3.66449 17.8111 4.56797 18.6937 5.47054C19.1829 5.97081 19.6735 6.47018 20.1632 6.97046C20.1885 6.99574 20.2123 7.02329 20.257 7.07205Z"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9363);




function TopBar({ className , contact  }) {
    const { 0: auth , 1: setAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setAuth(JSON.parse(localStorage.getItem("auth")));
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `w-full bg-qpurplelow/10 h-10 border-b border-qpurple ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-x mx-auto h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-center h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "topbar-nav",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex space-x-6",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: auth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/profile#dashboard",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm leading-6 text-qblack font-500 cursor-pointer",
                                                    children: langCntnt && langCntnt.Account
                                                })
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/login",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm leading-6 text-qblack font-500 cursor-pointer",
                                                    children: langCntnt && langCntnt.Account
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/tracking-order",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm leading-6 text-qblack font-500 cursor-pointer",
                                                    children: langCntnt && langCntnt.Track_Order
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            href: "/faq",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sm leading-6 text-qblack font-500 cursor-pointer",
                                                    children: langCntnt && langCntnt.Support
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "topbar-dropdowns sm:block hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: `tel:${contact && contact.phone}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex space-x-2 items-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-qblack text-sm font-medium",
                                            children: langCntnt && langCntnt.Need_help
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-xs text-qpurple font-bold leading-none",
                                            children: contact && contact.phone
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};


/***/ }),

/***/ 1708:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6399);
/* harmony import */ var _Middlebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3956);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(697);
/* harmony import */ var _TopBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Middlebar__WEBPACK_IMPORTED_MODULE_6__]);
_Middlebar__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function Header({ drawerAction , settings , contact  }) {
    const { cart  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.cart);
    const { 0: cartItems , 1: setCartItem  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        cart && setCartItem(cart.cartProducts);
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header-section-wrapper relative print:hidden",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TopBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                contact: contact && contact,
                className: "quomodo-shop-top-bar"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Middlebar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                settings: settings && settings,
                className: "quomodo-shop-middle-bar lg:block hidden"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-full flex justify-between items-center px-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: drawerAction,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M4 6h16M4 12h16M4 18h7"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[200px] h-full relative",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: settings && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${"https://backend.invofy.shop/" + settings.logo}`,
                                        alt: "logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cart relative cursor-pointer text-qblack",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/cart",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinBag__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: `fill-current`
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "w-[18px] h-[18px] rounded-full text-white bg-qpurple absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]",
                                    children: cartItems ? cartItems.length : 0
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                className: "quomodo-shop-nav-bar lg:block hidden"
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4790:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Mobile_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2773);
/* harmony import */ var _Footers_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9231);
/* harmony import */ var _Headers_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1708);
/* harmony import */ var _contexts_DefaultUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6018);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _Headers_Header__WEBPACK_IMPORTED_MODULE_6__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, _Headers_Header__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Layout({ children , childrenClasses  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.websiteSetup);
    const { 0: settings , 1: setSettings  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: subscribeData , 1: setSubScribeDAta  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: contact , 1: setContact  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const { 0: defaultUser , 1: setDefaultUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const defaultUser = JSON.parse(localStorage.getItem("active-user"));
        setDefaultUser(defaultUser);
    }, []);
    const updateDefaultUserDate = ()=>{
        const defaultUser = JSON.parse(localStorage.getItem("active-user"));
        setDefaultUser(defaultUser);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!subscribeData) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://backend.invofy.shop/"}api/`).then((res)=>{
                if (res.data) {
                    setSubScribeDAta(res.data.subscriptionBanner);
                }
            }).catch((err)=>{
                console.log(err);
            });
        }
    }, [
        subscribeData
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (websiteSetup) {
            setSettings(websiteSetup.payload.setting);
        }
    }, [
        websiteSetup
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!contact) {
            if (websiteSetup) {
                setContact(websiteSetup.payload.footer);
            }
        }
    });
    const { 0: drawer , 1: setDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Mobile_Drawer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                open: drawer,
                action: ()=>setDrawer(!drawer)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contexts_DefaultUser__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Provider */ .Z.Provider, {
                value: {
                    user: defaultUser,
                    handler: updateDefaultUserDate
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full overflow-x-hidden",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Headers_Header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            contact: contact && contact,
                            settings: settings,
                            drawerAction: ()=>setDrawer(!drawer)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: `w-full ${childrenClasses || "pt-[30px] pb-[60px]"}`,
                            children: children && children
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footers_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            contact: contact && contact,
                            settings: settings
                        })
                    ]
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8522);



function CheckProductIsExistsInFlashSale({ id , price , sign =true , className ,  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.websiteSetup);
    const { 0: flashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: calPrice , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (websiteSetup) {
            setData({
                flashSale: websiteSetup.payload.flashSale,
                flashSaleActive: websiteSetup.payload.flashSaleActive,
                flashSaleProducts: websiteSetup.payload.flashSaleProducts
            });
        }
    }, [
        websiteSetup
    ]);
    const calcProductPrice = (id, price)=>{
        // console.log(id, price);
        // console.log(flashSale);
        if (flashSale && flashSale.flashSaleActive) {
            const getId = flashSale.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(id));
            if (getId) {
                const offer = parseInt(flashSale.flashSale.offer);
                const discountPrice = offer / 100 * parseFloat(price);
                const mainPrice = parseFloat(price) - discountPrice;
                setPrice(mainPrice);
            } else {
                setPrice(price);
            }
        } else {
            setPrice(price);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (id && price) {
            calcProductPrice(id, price);
        }
    });
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    if (sign) {
        return currency_icon ? currency_icon + parseFloat(calPrice).toFixed(2) : "$" + parseFloat(calPrice).toFixed(2);
    } else {
        return parseFloat(calPrice).toFixed(2);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckProductIsExistsInFlashSale); //(27 * 20 /100)-27
 //offer =(20/100*price)
 //total=price-offer


/***/ }),

/***/ 9732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8522);



function Multivendor() {
    const { enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { 0: isMultivendor , 1: setIsMultivendor  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isMultivendor) {
            setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
        }
    }, [
        isMultivendor
    ]);
    return isMultivendor;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Multivendor);


/***/ }),

/***/ 6018:
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