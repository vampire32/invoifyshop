"use strict";
exports.id = 18;
exports.ids = [18];
exports.modules = {

/***/ 5247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DefaultUser = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultUser);


/***/ }),

/***/ 5798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4178);
/* harmony import */ var _store_compareProduct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1839);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4994);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4339);
/* harmony import */ var _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5827);
/* harmony import */ var _icons_Compair__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8263);
/* harmony import */ var _icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1880);
/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(990);
/* harmony import */ var _icons_ThinLove__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2189);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9363);
/* harmony import */ var _Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_12__]);
([axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__, _SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






















const Redirect = ({ message , linkTxt  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-qgray",
                children: message && message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: linkTxt && linkTxt
                })
            })
        ]
    });
};
function ProductCardStyleOne({ datas  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.wishlistData);
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === datas.id);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.websiteSetup);
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (websiteSetup) {
            const getId = websiteSetup.payload.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(datas.id));
            if (getId) {
                setData(true);
            } else {
                setData(false);
            }
        }
    }, [
        websiteSetup
    ]);
    const { 0: quickViewModal , 1: setQuickView  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: quickViewData , 1: setQuickViewData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z)());
    }, []);
    const quickViewHandler = (slug)=>{
        setQuickView(!quickViewModal);
        if (!quickViewData) {
            axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${"https://backend.invofy.shop/"}api/product/${slug}`).then((res)=>{
                setQuickViewData(res.data ? res.data : null);
            }).catch((err)=>{
                console.log(err);
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (quickViewModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return ()=>{
            document.body.style.overflow = "unset";
        };
    }, [
        quickViewModal
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
    const available = datas.cam_product_sale / (datas.cam_product_available + datas.cam_product_sale) * 100;
    const addToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            setArWishlist(true);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__/* ["default"].addToWishlist */ .Z.addToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const removeToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            setArWishlist(false);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__/* ["default"].removeToWishlist */ .Z.removeToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            router.push("/login");
        }
    };
    // cart
    const varients = datas && datas.variants.length > 0 && datas.variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(varients && varients.map((v)=>v.active_variant_items[0]));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const addToCart = (id)=>{
        const data = {
            id: id,
            token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token,
            quantity: 1,
            variants: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? parseInt(v.product_variant_id) : null),
            variantItems: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? v.id : null)
        };
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            if (varients) {
                const variantQuery = data.variants.map((value, index)=>{
                    return value ? `variants[]=${value}` : `variants[]=-1`;
                });
                const variantString = variantQuery.map((value)=>value + "&").join("");
                const itemsQuery = data.variantItems.map((value, index)=>{
                    return value ? `items[]=${value}` : `items[]=-1`;
                });
                const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                        message: langCntnt && langCntnt.Item_added,
                        linkTxt: langCntnt && langCntnt.Go_To_Cart
                    }), {
                        autoClose: 5000
                    })).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                        message: langCntnt && langCntnt.Item_added,
                        linkTxt: langCntnt && langCntnt.Go_To_Cart
                    }), {
                        autoClose: 5000
                    })).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            }
        } else {
            localStorage.setItem("data-hold", JSON.stringify({
                type: "add-to-cart",
                ...data
            }));
            loginPopupBoard.handlerPopup(true);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (varients) {
            const prices = varients.map((v)=>v.active_variant_items.length > 0 && v.active_variant_items[0].price ? v.active_variant_items[0].price : 0);
            if (datas.offer_price) {
                const sumOfferPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.offer_price));
                setPrice(datas.price);
                setOffer(sumOfferPrice);
            } else {
                const sumPrice = parseFloat(prices.reduce((prev, curr)=>parseInt(prev) + parseInt(curr), 0) + parseFloat(datas.price));
                setPrice(sumPrice);
            }
        } else {
            setPrice(datas && datas.price ? parseFloat(datas.price) : null);
            setOffer(datas && datas.offer_price ? parseFloat(datas.offer_price) : null);
        }
    }, [
        datas,
        varients
    ]);
    const productCompare = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)()) {
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_7__/* ["default"].addProductForCompare */ .Z.addProductForCompare(id, (0,_utils_auth__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)().access_token).then((res)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(res.data && res.data.notification);
                dispatch((0,_store_compareProduct__WEBPACK_IMPORTED_MODULE_9__/* .fetchCompareProducts */ .rh)());
            }).catch((err)=>{
                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(err.response && err.response.data.notification);
                console.log(err);
            });
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z)();
    const { 0: imgSrc , 1: setImgSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const loadImg = (value)=>{
        setImgSrc(value);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "product-card-one w-full h-[445px] transition-all duration-300 ease-in-out bg-white relative group border border-transparent hover:border-qpurple overflow-hidden rounded-lg",
        style: {
            boxShadow: "0px 15px 64px 0px rgba(0, 0, 0, 0.05)"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col h-full justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-card-img w-full h-[313px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-full relative flex justify-center items-center transition-all duration-700 ease-in-out transform group-hover:-scale-x-[1] scale-x-100",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_17___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${imgSrc ? imgSrc : "/assets/images/spinner.gif"}`,
                                        alt: "",
                                        onLoadingComplete: ()=>loadImg(datas.image),
                                        className: "w-full h-full object-contain"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "product-card-details relative pt-5 pl-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-start mb-1.5",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "reviews flex space-x-[1px]",
                                            children: [
                                                Array.from(Array(datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {})
                                                    }, datas.review + Math.random())),
                                                datas.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Array.from(Array(5 - datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-qgray",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                defaultValue: false
                                                            })
                                                        }, datas.review + Math.random()))
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: {
                                            pathname: "/single-product",
                                            query: {
                                                slug: datas.slug
                                            }
                                        },
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "title mb-1.5 text-[18px] font-600 text-qblack leading-[30px] line-clamp-1 hover:text-qpurple cursor-pointer text-start",
                                                children: datas.title
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "price text-start",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                suppressHydrationWarning: true,
                                                className: `main-price  font-500 text-[16px] ${offerPrice ? "line-through text-qgray" : "text-qpurple"}`,
                                                children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        isProductInFlashSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: `line-through text-qgray font-500 text-[16px] mr-2`,
                                                            children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                            id: datas.id,
                                                            price: price
                                                        })
                                                    ]
                                                })
                                            }),
                                            offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                suppressHydrationWarning: true,
                                                className: "offer-price text-qpurple font-500 text-[16px] ml-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    id: datas.id,
                                                    price: offerPrice
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                borderRadius: "30px 0px 0"
                            },
                            onClick: ()=>addToCart(datas.id),
                            className: "w-[135px] h-[48px] pl-6 pt-3 cursor-pointer bg-qpurplelow/10 group-hover:bg-qpurple transition-all duration-300 absolute -bottom-1 -right-1 ease-in-out",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full space-x-3 text-qpurple group-hover:text-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-base font-semibold",
                                    children: "Add To Cart"
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "quick-access-btn",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " absolute left-[77px] top-[243px] transform scale-0 group-hover:scale-100 transition-all ease-in-out",
                        onClick: ()=>quickViewHandler(datas.slug),
                        type: "button",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-10 h-10 block overflow-hidden text-qblack hover:text-white transition-all duration-300 ease-in-out hover:bg-qpurple bg-white rounded-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: " w-full h-full bg-qpurplelow/10 flex justify-center items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_QuickViewIco__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    className: "fill-current"
                                })
                            })
                        })
                    }),
                    !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " absolute left-[134px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out",
                        type: "button",
                        onClick: ()=>addToWishlist(datas.id),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-10 h-10 block text-qblack overflow-hidden hover:text-white transition-all duration-300 ease-in-out bg-white rounded-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    className: "fill-current"
                                })
                            })
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " absolute left-[134px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out",
                        type: "button",
                        onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-10 block h-10 bg-white rounded-full overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "flex w-full h-full justify-center items-center bg-qpurplelow/10",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_ThinLove__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                    fill: true
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: " absolute left-[195px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out",
                        type: "button",
                        onClick: ()=>productCompare(datas.id),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-10 h-10 block text-qblack hover:text-white transition-all overflow-hidden duration-300 ease-in-out items-center bg-white rounded-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Compair__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {})
                            })
                        })
                    })
                ]
            }),
            quickViewModal && quickViewData && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: ()=>setQuickView(!quickViewModal),
                        className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        "data-aos": "fade-up",
                        className: "md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0",
                        style: {
                            zIndex: "999"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full overflow-y-scroll overflow-style-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SingleProductPage_ProductView__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    images: quickViewData.gellery.length > 0 ? quickViewData.gellery : [],
                                    product: quickViewData.product
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setQuickView(!quickViewModal),
                                type: "button",
                                className: "absolute right-3 top-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        className: "w-10 h-10",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DataIteration(props) {
    const { datas =[] , startLength , endLength , children  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: datas && datas.length >= endLength && datas.slice(startLength, endLength).map((value)=>children({
                datas: value
            }))
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataIteration);


/***/ }),

/***/ 1880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ QuickViewIco)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function QuickViewIco({ className  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        className: className,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341 15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537 18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z"
            })
        ]
    });
};


/***/ }),

/***/ 5827:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductView)
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
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6158);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9808);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5564);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8522);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4178);
/* harmony import */ var _store_wishlistData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4994);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(990);
/* harmony import */ var _Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2189);
/* harmony import */ var _Helpers_Selectbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4339);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9363);
/* harmony import */ var _Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5247);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_7__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















const Redirect = ({ message , linkTxt  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-qgray",
                children: message && message
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: linkTxt && linkTxt
                })
            })
        ]
    });
};
function ProductView({ className , reportHandler , images =[] , product ,  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const loginPopupBoard = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_Contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z);
    const tags = product.tags && JSON.parse(product.tags);
    const { 0: more , 1: setMore  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const productsImg = images && images.length > 0 && images;
    const varients = product && product.active_variants.length > 0 && product.active_variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(varients && varients.map((v)=>v.active_variant_items.length > 0 ? v.active_variant_items[0] : {}));
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z)());
    }, []);
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    const { 0: src , 1: setSrc  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(product.thumb_image);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setSrc(product.thumb_image);
    }, [
        product
    ]);
    const changeImgHandler = (current)=>{
        setSrc(current);
    };
    const { 0: quantity , 1: setQuantity  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const increment = ()=>{
        setQuantity((prev)=>prev + 1);
    };
    const decrement = ()=>{
        if (quantity > 1) {
            setQuantity((prev)=>prev - 1);
        }
    };
    //varient selector handler
    const selectVarient = (value)=>{
        if (varients.length > 0) {
            const replacePrice = getFirstVarients.map((v)=>{
                if (parseInt(v.product_variant_id) === parseInt(value.product_variant_id)) {
                    return value;
                }
                return v;
            });
            setFirstVarients(replacePrice);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (varients) {
            const prices = getFirstVarients && getFirstVarients.map((v)=>v.price ? v.price : 0);
            const sumPrice = parseFloat(prices.reduce((prev, curr)=>parseFloat(prev) + parseFloat(curr), 0) + parseFloat(product.price));
            setPrice(parseFloat(sumPrice));
            if (product.offer_price) {
                const sumOfferPrice = parseFloat(prices.reduce((prev, curr)=>parseFloat(prev) + parseFloat(curr), 0) + parseFloat(product.offer_price));
                setOffer(parseFloat(sumOfferPrice));
            }
        }
    }, [
        getFirstVarients,
        varients
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (varients) {
            const prices = varients.map((v)=>v.active_variant_items.length > 0 && v.active_variant_items[0].price ? parseInt(v.active_variant_items[0].price) : 0);
            if (product.offer_price) {
                const sumCalc = prices.reduce((prev, curr)=>parseFloat(prev) + parseFloat(curr));
                const sumPrice = parseFloat(sumCalc) + parseFloat(product.price);
                const sumOfferPrice = parseFloat(sumCalc) + parseFloat(product.offer_price);
                setPrice(parseFloat(sumPrice));
                setOffer(parseFloat(sumOfferPrice));
            } else {
                const sumCalc1 = prices.reduce((prev, curr)=>parseFloat(prev) + parseFloat(curr));
                const sumPrice1 = parseFloat(sumCalc1) + parseFloat(product.price);
                setPrice(parseFloat(sumPrice1));
            }
        } else {
            setPrice(product && parseFloat(product.price) ? parseFloat(product.price) : null);
            setOffer(product && product.offer_price ? parseFloat(product.offer_price) : null);
        }
    }, [
        product,
        varients
    ]);
    const addToCard = ()=>{
        const data = {
            id: product.id,
            token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)().access_token,
            quantity: quantity,
            variants: getFirstVarients && getFirstVarients.map((v)=>parseInt(v.product_variant_id)),
            variantItems: getFirstVarients && getFirstVarients.map((v)=>v.id)
        };
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()) {
            if (varients) {
                const variantQuery = data.variants.map((value, index)=>{
                    return `variants[]=${value}`;
                });
                const variantString = variantQuery.map((value)=>value + "&").join("");
                const itemsQuery = data.variantItems.map((value, index)=>{
                    return `items[]=${value}`;
                });
                const itemQueryStr = itemsQuery.map((value)=>value + "&").join("");
                const uri = `token=${data.token}&product_id=${data.id}&${variantString}${itemQueryStr}quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                        message: langCntnt && langCntnt.Item_added,
                        linkTxt: langCntnt && langCntnt.Go_To_Cart
                    }), {
                        autoClose: 5000
                    })).catch((err)=>console.log(err));
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {
                        message: langCntnt && langCntnt.Item_added,
                        linkTxt: langCntnt && langCntnt.Go_To_Cart
                    }), {
                        autoClose: 5000
                    });
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(res.response && res.response.data.message && res.response.data.message);
                }).catch((err)=>{
                    console.log(err);
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_9__/* .fetchCart */ .x7)());
            }
        } else {
            localStorage.setItem("data-hold", JSON.stringify({
                type: "add-to-cart",
                ...data
            }));
            loginPopupBoard.handlerPopup(true);
        }
    };
    //wishlist
    const { wishlistData  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.wishlistData);
    const wishlist = wishlistData && wishlistData.wishlists;
    const wishlisted = wishlist && wishlist.data.find((id)=>id.product.id === product.id);
    const { 0: arWishlist , 1: setArWishlist  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (wishlisted) {
            setArWishlist(true);
        } else {
            setArWishlist(false);
        }
    }, [
        wishlisted
    ]);
    const addToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()) {
            setArWishlist(true);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].addToWishlist */ .Z.addToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            loginPopupBoard.handlerPopup(true);
        }
    };
    const removeToWishlist = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)()) {
            setArWishlist(false);
            _utils_apiRequest__WEBPACK_IMPORTED_MODULE_8__/* ["default"].removeToWishlist */ .Z.removeToWishlist({
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)().access_token
            });
            dispatch((0,_store_wishlistData__WEBPACK_IMPORTED_MODULE_10__/* .fetchWishlist */ .BW)());
        } else {
            router.push("/login");
        }
    };
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.websiteSetup);
    const { 0: pricePercent , 1: setPricePercent  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (websiteSetup) {
            const offerFlashSale = websiteSetup.payload.flashSale;
            const flashSaleProducts = websiteSetup.payload.flashSaleProducts;
            const isFlashSaleProduct = flashSaleProducts.find((item)=>parseInt(item.product_id) === product.id);
            if (isFlashSaleProduct) {
                const offer = parseInt(offerFlashSale.offer);
                const price = product.offer_price ? parseInt(product.offer_price) : parseInt(product.price);
                const discountPrice = offer / 100 * price;
                const mainPrice = price - discountPrice;
                setPricePercent(Math.trunc((mainPrice - product.price) / product.price * 100));
            } else {
                setPricePercent(Math.trunc((product.offer_price - product.price) / product.price * 100));
            }
            const getId = websiteSetup.payload.flashSaleProducts.find((item)=>parseInt(item.product_id) === parseInt(product.id));
            if (getId) {
                setData(true);
            } else {
                setData(false);
            }
        }
    }, [
        websiteSetup
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `product-view w-full lg:flex justify-between h-full ${className || ""}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    "data-aos": "fade-right",
                    className: "lg:w-1/2 xl:mr-[70px] lg:mr-[50px]",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:h-[600px] h-[350px] border border-qpurplelow/10 flex justify-center items-center overflow-hidden relative mb-3 relative rounded",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${"https://backend.invofy.shop/" + src}`,
                                        alt: "",
                                        className: "object-contain transform scale-110"
                                    }),
                                    product.offer_price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[80px] h-[80px] rounded-full bg-qpurple text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-white",
                                            children: [
                                                pricePercent,
                                                "%"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        onClick: ()=>changeImgHandler(product.thumb_image),
                                        className: "w-[110px] h-[110px] p-[15px] border border-qpurplelow/10 cursor-pointer relative rounded",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            layout: "fill",
                                            objectFit: "scale-down",
                                            src: `${"https://backend.invofy.shop/" + product.thumb_image}`,
                                            alt: "",
                                            className: `w-full h-full object-contain transform scale-110 ${src !== product.thumb_image ? "opacity-50" : ""} `
                                        })
                                    }),
                                    productsImg && productsImg.length > 0 && productsImg.map((img, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>changeImgHandler(img.image),
                                            className: "w-[110px] h-[110px] p-[15px] border border-qborder cursor-pointer relative",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                layout: "fill",
                                                objectFit: "scale-down",
                                                src: `${"https://backend.invofy.shop/" + img.image}`,
                                                alt: "",
                                                className: `w-full h-full object-contain ${src !== img.image ? "opacity-50" : ""} `
                                            })
                                        }, i))
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "product-details w-full mt-10 lg:mt-0",
                        children: [
                            product.brand && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                "data-aos": "fade-up",
                                className: "text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block",
                                children: product.brand.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                "data-aos": "fade-up",
                                className: "text-xl font-medium text-qblack mb-4",
                                children: product.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-[10px] items-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-1",
                                        children: [
                                            Array.from(Array(parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                                                }, parseInt(product.averageRating) + Math.random())),
                                            parseInt(product.averageRating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: Array.from(Array(5 - parseInt(product.averageRating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-qgray",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                            defaultValue: false
                                                        })
                                                    }, parseInt(product.averageRating) + Math.random()))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-base font-normal text-qblack",
                                        children: [
                                            parseInt(product.averageRating),
                                            " Reviews"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-2 items-baseline mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: `main-price  font-600  ${offerPrice ? "line-through text-qgray text-[15px]" : "text-qred text-[24px]"}`,
                                        children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: currency_icon + price
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                isProductInFlashSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "main-price font-600 line-through text-qgray text-[15px] mr-2",
                                                    children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                    id: product.id,
                                                    price: price
                                                })
                                            ]
                                        })
                                    }),
                                    offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        suppressHydrationWarning: true,
                                        className: "offer-price text-qred font-600 text-[24px] ml-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                            id: product.id,
                                            price: offerPrice
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "mb-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `text-qgray text-sm text-normal leading-7 ${more ? "" : "line-clamp-2"}`,
                                        children: product.short_description
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>setMore(!more),
                                        type: "button",
                                        className: "text-[#03a84e] text-xs font-bold",
                                        children: more ? "See Less" : "See More"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-[1px] bg-qpurplelow/10 mb-[30px]"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "p-3 bg-qpurplelow/10 flex items-center space-x-2 mb-[30px] rounded-lg w-fit",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-base font-bold text-qblack",
                                        children: [
                                            langCntnt && langCntnt.Availability,
                                            " :"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base font-bold text-qpurple",
                                        children: parseInt(product.qty) !== 0 && parseInt(product.qty) > 0 ? `${product.qty} ${langCntnt && langCntnt.Products_Available} ` : `${langCntnt && langCntnt.Products_not_Available}`
                                    })
                                ]
                            }),
                            varients.length > 0 && varients.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    "data-aos": "fade-up",
                                    className: "product-size mb-[30px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm font-normal uppercase text-qgray mb-[14px] inline-block",
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: " border border-qborder h-[50px] flex justify-between items-center px-6 cursor-pointer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Selectbox__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    action: selectVarient,
                                                    className: "w-full",
                                                    datas: item.active_variant_items && item.active_variant_items.length > 0 && item.active_variant_items,
                                                    children: ({ item  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between items-center w-full",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "text-base text-qblack",
                                                                            children: item
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                            width: "11",
                                                                            height: "7",
                                                                            viewBox: "0 0 11 7",
                                                                            fill: "none",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                d: "M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z",
                                                                                fill: "#222222"
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
                                }, item.id)),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[120px] h-full px-[26px] flex items-center border border-qpurplelow/10 rounded-md",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between items-center w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: decrement,
                                                    type: "button",
                                                    className: "text-lg font-medium text-qgray",
                                                    children: "-"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-qblack",
                                                    children: quantity
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    onClick: increment,
                                                    type: "button",
                                                    className: "text-lg font-medium text-qgray",
                                                    children: "+"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[60px] h-full flex justify-center items-center border border-qpurplelow/10 rounded-md",
                                        children: !arWishlist ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>addToWishlist(product.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-10 h-10 flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                                            })
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            type: "button",
                                            onClick: ()=>removeToWishlist(wishlisted && wishlisted.id),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "w-10 h-10 flex justify-center items-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_ThinLove__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    fill: true
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-1 h-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: addToCard,
                                            type: "button",
                                            className: "bg-qpurple hover:bg-qpurplelow/10 hover:text-qpurple border border-transparent hover:border-qpurple transition-common text-white rounded-full text-sm font-semibold w-full h-full",
                                            children: langCntnt && langCntnt.Add_To_Cart
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "mb-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-base text-qpurple leading-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-qblack",
                                                children: [
                                                    langCntnt && langCntnt.category,
                                                    " :"
                                                ]
                                            }),
                                            " ",
                                            product.category.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-base text-qpurple leading-7",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-qblack uppercase",
                                                children: [
                                                    langCntnt && langCntnt.SKU,
                                                    ":"
                                                ]
                                            }),
                                            " ",
                                            product.sku
                                        ]
                                    }),
                                    tags && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-base text-qpurple leading-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-qblack",
                                                children: "Tags:"
                                            }),
                                            " ",
                                            tags.length > 0 && tags.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: item.value + ", "
                                                }, i))
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "flex space-x-2 items-center mb-[20px] report-btn ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "12",
                                            height: "13",
                                            viewBox: "0 0 12 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z",
                                                fill: "#EB5757"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: reportHandler,
                                        className: "text-qred font-semibold text-base",
                                        children: langCntnt && langCntnt.Report_This_Item
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                "data-aos": "fade-up",
                                className: "social-share flex items-center w-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "text-qblack text-base mr-[17px] inline-block",
                                        children: [
                                            langCntnt && langCntnt.Share_This,
                                            ":"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-5 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookShareButton, {
                                                url: `${ false && 0}`,
                                                quotes: product.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "10",
                                                        height: "16",
                                                        viewBox: "0 0 10 16",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z",
                                                            fill: "#3E75B2"
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterShareButton, {
                                                url: `${ false && 0}`,
                                                title: product.name,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "cursor-pointer",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "18",
                                                        height: "14",
                                                        viewBox: "0 0 18 14",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z",
                                                            fill: "#3FD1FF"
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;