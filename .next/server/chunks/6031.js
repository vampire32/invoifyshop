"use strict";
exports.id = 6031;
exports.ids = [6031];
exports.modules = {

/***/ 4178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "x7": () => (/* binding */ fetchCart)
/* harmony export */ });
/* unused harmony export cart */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


//constant
const CART = "CART";
//intialState
const initialState = {
    cart: null,
    status: null
};
//fetch data from api
const fetchCart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("CART/fetchCart", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://backend.invofy.shop/"}api/cart?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;
    }
    return false;
});
//create action and reducer
const cart = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: CART,
    initialState,
    extraReducers: {
        [fetchCart.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchCart.fulfilled]: (state, { payload  })=>{
            state.cart = payload;
            state.status = "success";
        },
        [fetchCart.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart.reducer);


/***/ }),

/***/ 4994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BW": () => (/* binding */ fetchWishlist),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export wishlistAction */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5564);


const initialState = {
    wishlistData: null,
    status: null
};
const fetchWishlist = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("WISHLIST/fetchWishlist", async ()=>{
    if ((0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) {
        const res = await fetch(`${"https://backend.invofy.shop/"}api/user/wishlist?token=${(0,_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)().access_token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        return data;
    }
    return false;
});
const wishlistAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "WISHLIST",
    initialState,
    extraReducers: {
        [fetchWishlist.pending]: (state, action)=>{
            state.status = "loading";
        },
        [fetchWishlist.fulfilled]: (state, { payload  })=>{
            state.wishlistData = payload, state.status = "success";
        },
        [fetchWishlist.rejected]: (state, action)=>{
            state.status = "failed";
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wishlistAction.reducer);


/***/ }),

/***/ 9808:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable import/no-anonymous-default-export */ 
const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://backend.invofy.shop/" + "api/",
    headers: {
        "content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    //authentication
    signup: (data)=>instance({
            method: "POST",
            url: "store-register",
            data
        }),
    login: (data)=>instance({
            method: "POST",
            url: "store-login",
            data
        }),
    logout: (token)=>instance({
            method: "get",
            url: `user/logout?token=${token}`
        }),
    verification: (data, otp)=>instance({
            method: "GET",
            url: `user-verification/${otp}`,
            data
        }),
    resend: (data)=>instance({
            method: "POST",
            url: `resend-register-code`,
            data
        }),
    forgotPass: (data)=>instance({
            method: "POST",
            url: `send-forget-password`,
            data
        }),
    updatePass: (data, token)=>instance({
            method: "POST",
            url: `user/update-password?token=${token}`,
            data
        }),
    resetPass: (data, otp)=>instance({
            method: "POST",
            url: `store-reset-password/${otp}`,
            data
        }),
    dashboard: (token)=>instance({
            method: "GET",
            url: `user/dashboard?token=${token}`
        }),
    profileInfo: (token)=>instance({
            method: "GET",
            url: `user/my-profile?token=${token}`
        }),
    subscribeRequest: (data)=>instance({
            method: "POST",
            url: `subscribe-request`,
            data
        }),
    addToWishlist: (data)=>instance({
            method: "GET",
            url: `user/add-to-wishlist/${data.id}?token=${data.token}`
        }),
    removeToWishlist: (data)=>instance({
            method: "DELETE",
            url: `user/delete-wishlist/${data.id}?token=${data.token}`
        }),
    clearWishlist: (data)=>instance({
            method: "GET",
            url: `user/clear-wishlist?token=${data.token}`
        }),
    contact: (data)=>instance({
            method: "post",
            url: `send-contact-message`,
            data
        }),
    contactUs: ()=>instance({
            method: "GET",
            url: "contact-us"
        }),
    addToCard: (query)=>instance({
            method: "GET",
            url: `add-to-cart?${query}`
        }),
    deleteCartItem: (data)=>instance({
            method: "GET",
            url: `cart-item-remove/${data.id}?token=${data.token}`
        }),
    clearCart: (data)=>instance({
            method: "GET",
            url: `cart-clear?token=${data.token}`
        }),
    saveAddress: (token, data)=>instance({
            method: "POST",
            url: `user/address?token=${token}`,
            data
        }),
    incrementQyt: (id, token)=>instance({
            method: "GET",
            url: `cart-item-increment/${id}?token=${token}`
        }),
    decrementQyt: (id, token)=>instance({
            method: "GET",
            url: `cart-item-decrement/${id}?token=${token}`
        }),
    deleteAddress: (id, token)=>instance({
            method: "DELETE",
            url: `user/address/${id}?token=${token}`
        }),
    editAddress: (id, token)=>instance({
            method: "GET",
            url: `user/address/${id}?token=${token}`
        }),
    updateAddress: (id, token, data)=>instance({
            method: "PUT",
            url: `user/address/${id}?token=${token}`,
            data
        }),
    cashOnDelivery: (data, token)=>instance({
            method: "POST",
            url: `user/checkout/cash-on-delivery?token=${token}`,
            data
        }),
    stipePay: (data, token)=>instance({
            method: "POST",
            url: `user/checkout/pay-with-stripe?token=${token}`,
            data
        }),
    bankPayment: (data, token)=>instance({
            method: "POST",
            url: `user/checkout/pay-with-bank?token=${token}`,
            data
        }),
    orders: (token)=>instance({
            method: "GET",
            url: `user/order?token=${token}`
        }),
    compare: (token)=>instance({
            method: "GET",
            url: `user/compare-product?token=${token}`
        }),
    addProductForCompare: (id, token)=>instance({
            method: "GET",
            url: `user/add-compare-product/${id}?token=${token}`
        }),
    removeCompareItem: (id, token)=>instance({
            method: "DELETE",
            url: `user/delete-compare-product/${id}?token=${token}`
        }),
    reportProduct: (data, token)=>instance({
            method: "POST",
            url: `user/product-report?token=${token}`,
            data
        }),
    applyCoupon: (token, data)=>instance({
            method: "GET",
            url: `apply-coupon?token=${token}&coupon=${data}`
        }),
    orderTrack: (number)=>instance({
            method: "GET",
            url: `track-order-response/${number}`
        }),
    productReview: (data, token)=>instance({
            method: "POST",
            url: `user/store-product-review?token=${token}`,
            data
        }),
    getReview: (token)=>instance({
            method: "GET",
            url: `user/review?token=${token}`
        }),
    blogComment: (data)=>instance({
            method: "POST",
            url: `blog-comment`,
            data
        }),
    blogDetails: (slug)=>instance({
            method: "GET",
            url: `blog/${slug}`
        })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ auth)
/* harmony export */ });
function auth() {
    if (false) {}
    return false;
};


/***/ }),

/***/ 9363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ languageModel)
/* harmony export */ });
function languageModel() {
    if (false) {}
    return false;
};


/***/ }),

/***/ 8522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ settings)
/* harmony export */ });
function settings() {
    if (false) {}
    return false;
};


/***/ })

};
;