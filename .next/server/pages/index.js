"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4987);
/* harmony import */ var _src_components_Home_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7261);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Home_index__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_Home_index__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function HomePage({ data  }) {
    const { seoSetting  } = data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                title: `${seoSetting.seo_title}`,
                metaDes: seoSetting.seo_description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Home_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                homepageData: data
            })
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${"https://backend.invofy.shop/"}api/`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function CategoryCard({ background , title , categories =[] , changeIdHandler , productsInCategoryIds ,  }) {
    const filterCategory = categories && categories.length > 0 && categories.filter((category)=>{
        const id = parseInt(category.category_id);
        return productsInCategoryIds.includes(id);
    });
    return /*#__PURE__*/ _jsx("div", {
        className: "category-card-wrappwer w-full h-full p-[30px]",
        style: {
            background: `url(${background || `/assets/images/section-category-1.jpg`}) no-repeat`,
            backgroundSize: "cover"
        },
        children: /*#__PURE__*/ _jsxs("div", {
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    className: "text-base font-600 tracking-wide mb-2",
                    children: title
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: "brands-list mb-[7px]",
                    children: /*#__PURE__*/ _jsx("ul", {
                        children: filterCategory.map((category)=>/*#__PURE__*/ _jsx("li", {
                                children: /*#__PURE__*/ _jsx("span", {
                                    onClick: ()=>changeIdHandler(category.category_id),
                                    className: "text-sm text-qgray hober:text-qBlack border-b border-transparent hover:border-qblack hover:text-qblack capitalize cursor-pointer",
                                    children: category && category.category.name
                                })
                            }, category.id))
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "#",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "flex space-x-2 items-center",
                        children: [
                            /*#__PURE__*/ _jsx("span", {
                                className: "text-qblack font-600 text-sm",
                                children: "Shop Now"
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                children: /*#__PURE__*/ _jsxs("svg", {
                                    width: "7",
                                    height: "11",
                                    viewBox: "0 0 7 11",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ _jsx("rect", {
                                            x: "2.08984",
                                            y: "0.636719",
                                            width: "6.94219",
                                            height: "1.54271",
                                            transform: "rotate(45 2.08984 0.636719)",
                                            fill: "#1D1D1D"
                                        }),
                                        /*#__PURE__*/ _jsx("rect", {
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
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 7039:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ProductCardRowStyleTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8522);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5564);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9808);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3590);
/* harmony import */ var _store_Cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4178);
/* harmony import */ var _Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4339);
/* harmony import */ var _icons_Star__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__]);
([_utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__, react_toastify__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Redirect = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex space-x-2 items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-sm text-qgray",
                children: "Item added"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",
                    children: "Go To Cart"
                })
            })
        ]
    });
};
function ProductCardRowStyleTwo({ className , datas  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    //cart
    const varients = datas && datas.variants.length > 0 && datas.variants;
    const { 0: getFirstVarients , 1: setFirstVarients  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(varients && varients.map((v)=>v.active_variant_items[0]));
    const { 0: price , 1: setPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { 0: offerPrice , 1: setOffer  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.websiteSetup);
    const { 0: isProductInFlashSale , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
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
    const addToCart = (id)=>{
        if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)()) {
            const data = {
                id: id,
                token: (0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)() && (0,_utils_auth__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)().access_token,
                quantity: 1,
                variants: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? parseInt(v.product_variant_id) : null),
                variantItems: getFirstVarients && getFirstVarients.length > 0 && getFirstVarients.map((v)=>v ? v.id : null)
            };
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
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].addToCard */ .Z.addToCard(uri).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            } else {
                const uri1 = `token=${data.token}&product_id=${data.id}&quantity=${data.quantity}`;
                _utils_apiRequest__WEBPACK_IMPORTED_MODULE_6__/* ["default"].addToCard */ .Z.addToCard(uri1).then((res)=>react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Redirect, {}), {
                        autoClose: 5000
                    })).catch((err)=>{
                    react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error(err.response && err.response.data.message && err.response.data.message);
                });
                dispatch((0,_store_Cart__WEBPACK_IMPORTED_MODULE_8__/* .fetchCart */ .x7)());
            }
        } else {
            router.push("/login");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
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
    const { currency_icon  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: {
                pathname: "/single-product",
                query: {
                    slug: datas.slug
                }
            },
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        boxShadow: "0px 11px 73px rgba(0, 0, 0, 0.07)"
                    },
                    className: `product-card-row-two rounded-md w-full h-[315px] overflow-hidden bg-white border border-transparent hover:border-qpurple transition-all duration-300 ease-in-out ${className || ""}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-[105px] bg-white px-5 ",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full h-full ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-[205px] relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        layout: "fill",
                                        objectFit: "scale-down",
                                        src: `${datas.image}`,
                                        alt: "",
                                        className: "w-full h-full object-contain"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1 h-full flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex space-x-1 mb-2.5",
                                            children: [
                                                Array.from(Array(datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                                                    }, datas.review + Math.random())),
                                                datas.review < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: Array.from(Array(5 - datas.review), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-qgray",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_Star__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                                defaultValue: false
                                                            })
                                                        }, datas.review + Math.random()))
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "title mb-2 text-base font-600 text-qblack leading-[24px] line-clamp-1 hover:text-qpurple cursor-pointer",
                                            children: datas.title
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "price",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    suppressHydrationWarning: true,
                                                    className: `main-price  font-500 text-base ${offerPrice ? "line-through text-qgray" : "text-qpurple"}`,
                                                    children: offerPrice ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: currency_icon && currency_icon + price
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            isProductInFlashSale && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "line-through text-qgray font-500 text-base mr-2",
                                                                children: currency_icon && currency_icon + parseFloat(price).toFixed(2)
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                                id: datas.id,
                                                                price: price
                                                            })
                                                        ]
                                                    })
                                                }),
                                                offerPrice && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    suppressHydrationWarning: true,
                                                    className: "offer-price text-qpurple font-500 text-base ml-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_CheckProductIsExistsInFlashSale__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                        id: datas.id,
                                                        price: offerPrice
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleFour)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7039);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SectionStyleFour({ className , sectionTitle , seeMoreUrl , products =[] ,  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://backend.invofy.shop/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-style-one ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            categoryTitle: sectionTitle,
            seeMoreUrl: seeMoreUrl,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products-section w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        datas: rs,
                        startLength: 0,
                        endLength: rs.length > 12 ? 12 : rs.length,
                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleTwo__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                datas: datas
                            }, datas.id)
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2842:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cards_CategoryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4450);
/* harmony import */ var _Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5798);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8650);
/* harmony import */ var _Loaders_LoaderStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4259);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__]);
_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function SectionStyleOne({ className , categoryTitle , sectionTitle , seeMoreUrl , categories =[] , products =[] , categoryBackground ,  }) {
    const { 0: selectedId , 1: setId  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(categories.length > 0 && parseInt(categories[0].category_id));
    const { 0: load , 1: setLoad  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const cp = products.length > 0 && products.map((item)=>{
        return {
            id: item.id,
            category_id: item.category_id,
            title: item.name,
            slug: item.slug,
            image: "https://backend.invofy.shop/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants ? item.active_variants : []
        };
    });
    const { 0: filterProducts , 1: setProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(cp && cp.filter((item)=>item.category_id === selectedId));
    const categoryHandler = (id)=>{
        setLoad(true);
        setTimeout(()=>{
            setId(id);
            setLoad(false);
        }, 500);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (cp) {
            const products = cp.filter((item)=>parseInt(item.category_id) === selectedId);
            setProducts(products);
        }
    }, [
        selectedId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: categories.length > 0 && products.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            "data-aos": "fade-up",
            className: `section-style-one md:py-[60px] py-[30px] bg-qpurplelow/10 ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                categoryHandler: categoryHandler,
                categoryies: categories,
                categoryTitle: sectionTitle,
                seeMoreUrl: seeMoreUrl,
                productsInCategoryIds: cp.map((i)=>parseInt(i.category_id)),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "products-section w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                        children: load === false ? filterProducts.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            datas: filterProducts,
                            startLength: 0,
                            endLength: filterProducts.length > 4 ? 4 : filterProducts.length,
                            children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        datas: datas
                                    })
                                }, datas.id)
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "loading h-[445px] flex justify-center items-center col-span-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Loaders_LoaderStyleTwo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                        })
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleThree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5798);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
/* harmony import */ var _ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function SectionStyleThree({ className , sectionTitle , seeMoreUrl , products =[] ,  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://backend.invofy.shop/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-style-one ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            categoryTitle: sectionTitle,
            seeMoreUrl: seeMoreUrl,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "products-section w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        datas: rs,
                        startLength: 0,
                        endLength: rs.length,
                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "data-aos": "fade-up",
                                className: "item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                    datas: datas
                                })
                            }, datas.id)
                    })
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionStyleTwo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6763);
/* harmony import */ var _DataIteration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8650);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__]);
_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function SectionStyleTwo({ className , products  }) {
    const rs = products.map((item)=>{
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: "https://backend.invofy.shop/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-content w-full grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 xl:gap-[30px] gap-5 ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_DataIteration__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            datas: rs,
            startLength: 0,
            endLength: rs.length > 6 ? 6 : rs.length,
            children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "item w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Cards_ProductCardRowStyleOne__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        datas: datas
                    })
                }, datas.id)
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SimpleSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "react-slick"
const external_react_slick_namespaceObject = require("react-slick");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Helpers/SliderCom.jsx




function SimpleSlider(props) {
    const { className , settings , children , selector  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((external_react_slick_default()), {
        ref: selector,
        className: `${className || ""}`,
        ...settings,
        children: children
    });
};


/***/ }),

/***/ 5924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewMoreTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9363);




function ViewMoreTitle({ categoryTitle ="" , className , children , seeMoreUrl ="" , categoryies =[] , categoryHandler , productsInCategoryIds ,  }) {
    const filterCategory = categoryies && categoryies.length > 0 && categoryies.filter((category)=>{
        const id = parseInt(category.category_id);
        return productsInCategoryIds.includes(id);
    });
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `section-wrapper w-full ${className || ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " section-title flex justify-between items-center mb-5",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "sm:text-3xl text-xl font-600 text-qblack leading-none",
                                children: categoryTitle
                            })
                        }),
                        filterCategory && filterCategory.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row-categories lg:flex space-x-10 items-center hidden",
                            children: filterCategory.slice(0, filterCategory.length > 4 ? 4 : filterCategory.length).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>categoryHandler(item.category.id),
                                        title: "button",
                                        className: "cat-item text-tblack hover:text-qpurple hover:underline text-lg font-medium",
                                        children: item.category.name
                                    })
                                }, i))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "view-more-btn",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: seeMoreUrl,
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex space-x-2 items-center cursor-pointer group",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-base font-600 flex space-x-2 items-center text-qblack group-hover:text-qpurple capitalize transition duration-300 ease-in-out",
                                            children: [
                                                langCntnt && langCntnt.View_More,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "transform translate-x-0 group-hover:translate-x-0.5 transition duration-300 ease-in-out",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        viewBox: "0 0 24 24",
                                                        width: "24",
                                                        height: "24",
                                                        className: `fill-current`,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fill: "none",
                                                                d: "M0 0h24v24H0z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
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
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section-content",
                    children: children && children
                })
            ]
        })
    });
};


/***/ }),

/***/ 2693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Ads)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
/* harmony import */ var _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9808);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8522);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Ads({ handler  }) {
    const { websiteSetup  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.websiteSetup);
    const { 0: announcment , 1: setAnnouncmentData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: ads , 1: setAds  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const adsHandle = ()=>{
        if (announcment) {
            localStorage.setItem("ads", "false");
            let date = new Date();
            date.setDate(date.getDate() + parseInt(announcment.expired_date));
            let nextDate = date.toLocaleDateString().slice(0, 10);
            localStorage.setItem("upcoming_announcement", `${nextDate}`);
            setAds(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());
    }, []);
    const subscribehandler = ()=>{
        _utils_apiRequest__WEBPACK_IMPORTED_MODULE_4__/* ["default"].subscribeRequest */ .Z.subscribeRequest({
            email: email
        }).then((res)=>{
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(res.data.message);
        }).catch((err)=>{
            console.error(err);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(err.response && err.response.data.message);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!announcment) {
            setAnnouncmentData(websiteSetup && websiteSetup.payload.announcementModal);
        }
        let ads = JSON.parse(localStorage.getItem("ads"));
        let crrDate = new Date();
        let upcomingDate = new Date(localStorage.getItem("upcoming_announcement"));
        if (ads) {
            setAds(true);
        } else {
            if (upcomingDate) {
                if (crrDate > upcomingDate) {
                    setAds(true);
                } else {
                    setAds(false);
                }
            } else {
                setAds(true);
            }
        }
    });
    const { logo  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: ads && announcment && parseInt(announcment.status) === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-full flex fixed left-0 top-0 justify-center z-40 items-center ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handler,
                        className: "w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:w-[812px] md:w-[650px] w-[310px] md:h-[509px] relative z-50 bg-slate-700 md:pl-10 pl-3 pr-3 md:py-[108px] py-20 flex flex-col justify-end rounded overflow-hidden",
                        style: {
                            backgroundImage: `url(${"https://backend.invofy.shop/" + announcment.image})`,
                            backgroundRepeat: " no-repeat",
                            backgroundSize: "cover"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "logo mb-[20px]",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            href: "/",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    width: "152",
                                                    height: "36",
                                                    objectFit: "scale-down",
                                                    src: `${logo ? "https://backend.invofy.shop/" + logo : "/assets/images/logo.svg"}`,
                                                    alt: "logo"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "md:text-[30px] text-xl font-bold text-qblack mb-1",
                                        children: announcment.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-qgray md:w-[480px] w-full md:text-base text-sm",
                                        children: announcment.description
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:w-[415px] w-full h-[54px] sm:flex mt-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 bg-white pl-4 mb-2 md:mb-0 flex space-x-2 items-center h-full focus-within:text-qpurple text-qblack overflow-hidden rounded md:rounded-r-none",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                    width: "17",
                                                    height: "15",
                                                    viewBox: "0 0 17 15",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M15 14H2C1.4 14 1 13.6 1 13V2C1 1.4 1.4 1 2 1H15C15.6 1 16 1.4 16 2V13C16 13.6 15.6 14 15 14Z",
                                                            stroke: "currentColor",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M3 4L8.5 8.5L14 4",
                                                            stroke: "currentColor",
                                                            strokeMiterlimit: "10",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                name: "email",
                                                className: "w-full h-full focus:outline-none text-sm placeholder:uppercase placeholder:text-xs placeholder:text-qblack text-qblack font-400 tracking-wider",
                                                placeholder: langCntnt && langCntnt.Email_Address,
                                                onChange: (e)=>setEmail(e.target.value.trim()),
                                                value: email
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: subscribehandler,
                                        type: "button",
                                        className: "w-[120px] h-full bg-qpurple text-white text-sm font-600 rounded md:rounded-r md:rounded-l-none",
                                        children: langCntnt && langCntnt.Subscribe
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute right-5 top-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    onClick: adsHandle,
                                    viewBox: "0 0 54 54",
                                    fill: "none",
                                    className: "cursor-pointer md:w-[54px] md:h-[54px] w-[30px] h-[30px]",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M26.9399 53.9996C12.0678 53.9827 -0.0210736 41.8265 2.75822e-05 26.912C0.0211287 12.0502 12.1965 -0.0320829 27.115 -0.000426215C41.9703 0.0312305 54.0401 12.2148 54 27.1399C53.9599 41.9447 41.7972 54.0186 26.9399 53.9996ZM18.8476 16.4083C17.6765 16.44 16.9844 16.8705 16.6151 17.7189C16.1952 18.6876 16.3893 19.574 17.1363 20.3253C19.0966 22.2901 21.0252 24.2908 23.0425 26.1965C23.7599 26.874 23.6397 27.2201 23.0045 27.83C21.078 29.6788 19.2148 31.5951 17.3241 33.4797C16.9211 33.8807 16.5581 34.3007 16.4505 34.8853C16.269 35.8835 16.6953 36.8332 17.5456 37.3102C18.4382 37.8124 19.5038 37.6626 20.3394 36.8416C22.3673 34.843 24.3866 32.836 26.3723 30.7994C26.8513 30.3077 27.1298 30.2866 27.6193 30.791C29.529 32.7579 31.4851 34.6784 33.4201 36.6179C33.8463 37.0442 34.2831 37.4431 34.9098 37.5486C35.9184 37.7196 36.849 37.2891 37.3196 36.4259C37.7964 35.5543 37.6677 34.5075 36.8912 33.714C34.9731 31.7555 33.0677 29.7801 31.0631 27.9145C30.238 27.1462 30.3688 26.7474 31.1031 26.053C32.9896 24.2655 34.8022 22.3977 36.6338 20.5511C37.7922 19.384 37.8914 17.9827 36.9081 17.0288C35.9501 16.1002 34.5975 16.2141 33.4623 17.3411C31.5188 19.2743 29.5649 21.199 27.6594 23.1659C27.1446 23.6978 26.8492 23.6957 26.3343 23.1659C24.4267 21.1969 22.4664 19.2806 20.5336 17.3369C19.9997 16.7966 19.4258 16.3661 18.8476 16.4083Z",
                                        fill: "#F34336"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_SliderCom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Banner({ className , sliders =[]  }) {
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const settings = {
        infinite: true,
        autoplay: true,
        fade: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    dots: true
                }
            }, 
        ]
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `w-full xl:h-[733px] h-[500px] ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main-wrapper w-full h-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hero-slider-wrapper xl:h-full mb-20 xl:mb-0 w-full relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SliderCom__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        settings: settings,
                        selector: sliderRef,
                        children: sliders.length > 0 && sliders.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item w-full xl:h-[733px] h-[500px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full h-full relative md:bg-center",
                                    style: {
                                        backgroundImage: `url(${"https://backend.invofy.shop/" + item.image})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container-x mx-auto flex items-center h-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-full xl:flex items-center pt-20 xl:pt-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "md:w-[626px] w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "md:text-[34px] text-[20px] font-medium text-qpurple mb-[7px]",
                                                        children: item.title_one
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                        className: "md:text-[66px] text-[40px] font-bold text-qblack md:leading-[80px] leading-[40px] mb-[44px]",
                                                        children: item.title_two
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                        href: {
                                                            pathname: "/single-product",
                                                            query: {
                                                                slug: item.product_slug
                                                            }
                                                        },
                                                        passhref: true,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            rel: "noopener noreferrer",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                                className: "md:w-[160px] w-[145px] h-[52px] bg-qpurple",
                                                                textColor: "text-white group-hover:text-white"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            }, i))
                    })
                })
            })
        })
    });
};


/***/ }),

/***/ 4181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BestSellers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function BestSellers({ className , sallers =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": "fade-left",
        "data-aos-duration": "500",
        className: `w-full ${className || ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-[30px] sm:gap-5 gap-2",
            children: sallers.length > 0 && sallers.slice(0, sallers.length > 6 ? 6 : sallers.length).map((saller, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `item`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: {
                            pathname: "/seller-products",
                            query: {
                                seller: saller.slug
                            }
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " w-full flex flex-col items-center group ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " w-[100px] h-[100px] flex justify-center items-center overflow-hidden mb-2 relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-full h-full relative ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                layout: "fill",
                                                objectFit: "scale-down",
                                                src: `${"https://backend.invofy.shop/" + saller.logo}`,
                                                alt: saller.slug
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-base text-qblack font-500 text-center cursor-pointer",
                                        children: saller.shop_name
                                    })
                                ]
                            }, saller.id)
                        })
                    })
                }, i))
        })
    });
};


/***/ }),

/***/ 9577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BrandSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8650);




function BrandSection({ className , sectionTitle , brands =[]  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        "data-aos": "fade-up",
        className: `w-full ${className || ""}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " section-title flex justify-between items-center mb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "sm:text-3xl text-xl font-600 text-qblack",
                            children: sectionTitle
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 rounded border-qpurplelow/10 border overflow-hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        datas: brands,
                        startLength: 0,
                        endLength: brands.length,
                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "item",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: {
                                        pathname: "/products",
                                        query: {
                                            brand: datas.slug
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: " border border-qpurplelow/10 w-full h-[130px] group transition duration-300 ease-in-out bg-white flex justify-center items-center relative cursor-pointer",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "grayscale group-hover:grayscale-0 relative w-full h-full",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                layout: "fill",
                                                objectFit: "scale-down",
                                                src: `${"https://backend.invofy.shop/" + datas.logo}`,
                                                alt: datas.name
                                            })
                                        })
                                    })
                                })
                            }, datas.id)
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CampaignCountDown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helpers_CountDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3402);
/* harmony import */ var _Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9363);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5798);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__]);
_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function CampaignCountDown({ className , datas , products =[]  }) {
    const { showDate , showHour , showMinute , showSecound  } = (0,_Helpers_CountDown__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(datas.end_time);
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)());
    }, []);
    const cp = products && products.length > 0 && products.map((item)=>{
        return {
            id: item.id,
            category_id: item.category_id,
            title: item.name,
            slug: item.slug,
            image: "https://backend.invofy.shop/" + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants ? item.active_variants : []
        };
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `w-full ${className || ""}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "data-aos": "fade-right",
                className: "campaign-countdown w-full h-full rounded relative bg-red-500 md:py-[60px] py-[30px]",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container-x mx-auto h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "countdown-wrapper lg:hidden flex space-x-[20px] mb-5",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "countdown-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "countdown-number flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-700 sm:text-[30px] text-[20px] text-[#EB5757]",
                                                    children: showDate
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                children: langCntnt && langCntnt.Days
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "countdown-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "countdown-number flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-700 sm:text-[30px] text-[20px] text-[#2F80ED]",
                                                    children: showHour
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                children: langCntnt && langCntnt.Hours
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "countdown-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "countdown-number flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-700 sm:text-[30px] text-[20px] text-[#219653]",
                                                    children: showMinute
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                children: langCntnt && langCntnt.Minutes
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "countdown-item",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "countdown-number flex justify-center",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "font-700 sm:text-[30px] text-[20px] text-[#EF5DA8]",
                                                    children: showSecound
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                children: langCntnt && langCntnt.Seconds
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: " section-title flex justify-between items-center mb-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "sm:text-3xl text-xl font-600 text-qblack leading-none",
                                        children: "Flash Sale"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "countdown-wrapper hidden lg:flex space-x-[50px]",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "countdown-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "countdown-number flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-700 sm:text-[30px] text-[20px] text-[#EB5757]",
                                                        children: showDate
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                    children: langCntnt && langCntnt.Days
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "countdown-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "countdown-number flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-700 sm:text-[30px] text-[20px] text-[#2F80ED]",
                                                        children: showHour
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                    children: langCntnt && langCntnt.Hours
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "countdown-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "countdown-number flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-700 sm:text-[30px] text-[20px] text-[#219653]",
                                                        children: showMinute
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                    children: langCntnt && langCntnt.Minutes
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "countdown-item",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "countdown-number flex justify-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "font-700 sm:text-[30px] text-[20px] text-[#EF5DA8]",
                                                        children: showSecound
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "sm:text-[18px] text-[12px] font-500 text-center leading-8",
                                                    children: langCntnt && langCntnt.Seconds
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "view-more-btn",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/flash-sale",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex space-x-2 items-center cursor-pointer group",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-base flex space-x-2 items-center font-600 group-hover:text-qpurple text-qblack capitalize transition duration-300 ease-in-out",
                                                    children: [
                                                        langCntnt && langCntnt.View_More,
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "transform translate-x-0 group-hover:translate-x-0.5 transition duration-300 ease-in-out",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                viewBox: "0 0 24 24",
                                                                width: "24",
                                                                height: "24",
                                                                className: `fill-current`,
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        fill: "none",
                                                                        d: "M0 0h24v24H0z"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
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
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "products-section w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5",
                                children: cp.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    datas: cp,
                                    startLength: 0,
                                    endLength: cp.length > 4 ? 4 : cp.length,
                                    children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_ProductCardStyleOne__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                datas: datas
                                            })
                                        }, datas.id)
                                })
                            })
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

/***/ 8909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6418);





function CategorySection({ sectionTitle , categories , adsOne , adsTwo  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "category-section-wrapper w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container-x mx-auto md:py-[60px] py-[30px]",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid lg:grid-cols-2 grid-cols-1 gap-[30px] lg:mb-[60px] mb-[30px]",
                    children: [
                        adsOne && parseInt(adsOne.status) === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-aos": "fade-right",
                            className: "item w-full rounded-2xl overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-[453px] rounded bg-center",
                                style: {
                                    backgroundImage: `url(${"https://backend.invofy.shop/" + adsOne.image})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: "cover"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-[40px] pt-[40px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-qblack mb-2 inline-block uppercase font-medium",
                                            children: adsOne.title_one
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]",
                                            children: adsOne.title_two
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: adsOne.product_slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "w-[128px] h-[40px] bg-qyellow",
                                                    textColor: "text-qblack group-hover:text-white"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        adsTwo && parseInt(adsTwo.status) === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-aos": "fade-up",
                            className: "item w-full rounded-2xl overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-[453px] rounded bg-center",
                                style: {
                                    backgroundImage: `url(${"https://backend.invofy.shop/" + adsTwo.image})`,
                                    backgroundRepeat: `no-repeat`,
                                    backgroundSize: "cover"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "px-[40px] pt-[40px]",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-sm text-qblack mb-2 inline-block uppercase font-medium",
                                            children: adsTwo.title_one
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]",
                                            children: adsTwo.title_two
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: adsTwo.product_slug
                                                }
                                            },
                                            passhref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "w-[128px] h-[40px] bg-qpurple",
                                                    textColor: "text-white group-hover:text-white"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "section-title flex justify-between items-center mb-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "sm:text-3xl text-xl font-600 text-qblack",
                                    children: sectionTitle
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px]",
                            children: categories.length > 0 && categories.slice(0, categories.length > 6 ? 6 : categories.length).map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    "data-aos": "fade-left",
                                    "data-aos-delay": i + "00",
                                    className: "item w-full cursor-pointer group",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: {
                                            pathname: "/products",
                                            query: {
                                                category: item.slug
                                            }
                                        },
                                        passhref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            rel: "noopener noreferrer",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full h-[180px] relative rounded-[6px] bg-qpurplelow/10 border border-transparent group-hover:border-qpurple transition duration-300 ease-in-out flex flex-col justify-center items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[80px] h-[80px] mb-5 relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                            layout: "fill",
                                                            objectFit: "scale-down",
                                                            src: "https://backend.invofy.shop/" + item.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-base text-qblack font-500 text-center group-hover:text-qpurple transition duration-300 ease-in-out",
                                                        children: item.name
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }, i))
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategorySection);


/***/ }),

/***/ 5949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);




function TwoColumnAds({ bannerOne , bannerTwo  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: bannerOne && bannerTwo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full h-[460px]",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container-x mx-auto h-full",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `lg:flex xl:space-x-[30px] md:space-x-5 items-center w-full h-full  overflow-hidden`,
                    children: [
                        bannerOne && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full rounded h-full px-[40px] py-[30px] flex justify-end",
                            style: {
                                backgroundImage: `url(${"https://backend.invofy.shop/" + bannerOne.image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "md:w-[266px] w-full h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-qblack text-sm uppercase mb-2",
                                                children: bannerOne.title_one
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "md:text-[34px] text-[26px] font-semibold md:leading-[42px] mb-[40px]",
                                                children: bannerOne.title_two
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: bannerOne.product_slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    className: "w-[128px] h-[40px] bg-qyellow",
                                                    textColor: "text-qblack group-hover:text-white"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        bannerTwo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full rounded h-full px-[40px] py-[30px]",
                            style: {
                                backgroundImage: `url(${"https://backend.invofy.shop/" + bannerTwo.image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-[266px] h-full",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-qblack text-sm uppercase mb-2",
                                                children: bannerTwo.title_one
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "text-[34px] font-semibold leading-[42px] mb-[40px]",
                                                children: bannerTwo.title_two
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: {
                                                pathname: "/products",
                                                query: {
                                                    category: bannerTwo.product_slug
                                                }
                                            },
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Buttons_ShopNowBtn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    className: "w-[128px] h-[40px] bg-qpurple",
                                                    textColor: "text-white group-hover:text-white"
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
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TwoColumnAds);


/***/ }),

/***/ 7261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8522);
/* harmony import */ var _Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6140);
/* harmony import */ var _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2842);
/* harmony import */ var _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3603);
/* harmony import */ var _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1543);
/* harmony import */ var _Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5924);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4790);
/* harmony import */ var _Ads__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2693);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(337);
/* harmony import */ var _BestSellers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4181);
/* harmony import */ var _BrandSection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9577);
/* harmony import */ var _CampaignCountDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4863);
/* harmony import */ var _CategorySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8909);
/* harmony import */ var _ProductAds_TwoColumnAds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__, _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__, _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__, _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__, _Ads__WEBPACK_IMPORTED_MODULE_8__, _CampaignCountDown__WEBPACK_IMPORTED_MODULE_12__]);
([_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__, _Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__, _Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__, _Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__, _Partials_Layout__WEBPACK_IMPORTED_MODULE_7__, _Ads__WEBPACK_IMPORTED_MODULE_8__, _CampaignCountDown__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function Home({ homepageData  }) {
    const { 0: homepage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(homepageData);
    const getsectionTitles = homepageData.section_title;
    const { 0: sectionTitles , 1: setSectionTitles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(homepageData);
        if (!sectionTitles) {
            let tem = getsectionTitles && getsectionTitles.map((item, i)=>{
                return {
                    [item.key]: item.custom ? item.custom : item.default
                };
            });
            setSectionTitles(Object.assign.apply(Object, tem));
        }
    }, [
        sectionTitles
    ]);
    const { enable_multivendor  } = (0,_utils_settings__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)();
    const { 0: isMultivendor , 1: setIsMultivendor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isMultivendor) {
            setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
        }
    }, [
        isMultivendor
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Partials_Layout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
            childrenClasses: "pt-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Ads__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                homepage && homepage.sliders.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Banner__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    sliders: homepage.sliders,
                    className: "banner-wrapper"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CategorySection__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    categories: homepage.homepage_categories,
                    adsOne: homepage.banner_one,
                    adsTwo: homepage.banner_two,
                    sectionTitle: sectionTitles && sectionTitles.My_Market_Category
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BrandSection__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    brands: homepage.brands.length > 0 ? homepage.brands : [],
                    sectionTitle: "Shop by Brand",
                    className: "brand-section-wrapper md:mb-[60px] mb-[30px]"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "md:py-[60px] py-[30px] bg-qpurplelow/10",
                    children: homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleThree__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        products: homepage.newArrivalProducts.length > 0 ? homepage.newArrivalProducts.slice(0, homepage.newArrivalProducts.length > 16 ? 16 : homepage.newArrivalProducts.length) : [],
                        sectionTitle: sectionTitles && sectionTitles.New_Arrivals,
                        seeMoreUrl: `/products?highlight=new_arrival`,
                        className: "new-products"
                    })
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CampaignCountDown__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    className: "md:mb-[60px] mb-[30px]",
                    datas: homepage.flashSale,
                    products: homepage.flashsale_products.slice(0, 4)
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    className: "top-selling-product md:mb-[60px] mb-[30px]",
                    seeMoreUrl: `/products?highlight=top_product`,
                    categoryTitle: sectionTitles && sectionTitles.Top_Rated_Products,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleTwo__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        products: homepage.topRatedProducts.length > 0 ? homepage.topRatedProducts : []
                    })
                }),
                homepage && isMultivendor === 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-x mx-auto ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            background: "linear-gradient(92.02deg, #EECAFF 1.23%, #C9DDFA 97.37%)"
                        },
                        className: `md:py-[60px] py-[30px]  w-full rounded-xl overflow-hidden md:mb-[60px] mb-[30px]`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full h-full flex justify-center items-center md:px-[30px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_ViewMoreTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                className: "best-sallers-section",
                                seeMoreUrl: "/sellers",
                                categoryTitle: sectionTitles && sectionTitles.Best_Seller,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BestSellers__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    sallers: homepage.sellers.length > 0 ? homepage.sellers : []
                                })
                            })
                        })
                    })
                }),
                homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleOne__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    products: homepage.popularCategoryProducts,
                    categories: homepage.popularCategories,
                    categoryBackground: "https://backend.invofy.shop/" + homepage.popularCategorySidebarBanner,
                    sectionTitle: sectionTitles && sectionTitles.Popular_Category,
                    seeMoreUrl: `/products?highlight=popular_category`,
                    className: "category-products"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-qpurplelow/10",
                    children: [
                        homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProductAds_TwoColumnAds__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                            bannerOne: homepage.banner_three && parseInt(homepage.banner_three.status) === 1 ? homepage.banner_three : null,
                            bannerTwo: homepage.banner_four && parseInt(homepage.banner_four.status) === 1 ? homepage.banner_four : null
                        }),
                        homepage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SectionStyleFour__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            products: homepage.bestProducts.length > 0 ? homepage.bestProducts : [],
                            sectionTitle: sectionTitles && sectionTitles.Best_Products,
                            seeMoreUrl: `/products?highlight=best_product`,
                            className: "category-products md:pt-[60px] pt-[30px] pb-[114px]"
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6158:
/***/ ((module) => {

module.exports = require("react-share");

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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,6031,4790,6727,16,1839,18,6418,6763,4259,3402], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();