"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 414:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4677);
/* harmony import */ var _src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_About__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_About__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function aboutPage({ data  }) {
    const { seoSetting  } = data;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Helpers_PageHead__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: `${seoSetting.seo_title}`,
                metaDes: seoSetting.seo_description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_About__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                aboutData: data
            })
        ]
    });
};
async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${"https://backend.invofy.shop/"}api/about-us`);
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

/***/ 4677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Helpers_Cards_BlogCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2058);
/* harmony import */ var _Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8650);
/* harmony import */ var _Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4527);
/* harmony import */ var _Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(990);
/* harmony import */ var _Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8146);
/* harmony import */ var _Helpers_SliderCom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5047);
/* harmony import */ var _Partials_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4790);
/* harmony import */ var _utils_languageModel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Partials_Layout__WEBPACK_IMPORTED_MODULE_10__]);
_Partials_Layout__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












function About({ aboutData  }) {
    const hww = [
        {
            id: Math.random(),
            title: aboutData.aboutUs.title_one,
            description: aboutData.aboutUs.description_one,
            icon: aboutData.aboutUs.icon_one
        },
        {
            id: Math.random(),
            title: aboutData.aboutUs.title_two,
            description: aboutData.aboutUs.description_two,
            icon: aboutData.aboutUs.icon_two
        },
        {
            id: Math.random(),
            title: aboutData.aboutUs.title_three,
            description: aboutData.aboutUs.description_three,
            icon: aboutData.aboutUs.icon_three
        }, 
    ];
    const { 0: videoPopup , 1: setPopup  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const settings = {
        slidesToShow: aboutData.testimonials.length < 3 ? aboutData.testimonials.length : 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        infinite: true,
        arrows: false,
        // centerPadding: "60px",
        dots: true,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: aboutData.testimonials.length < 2 ? aboutData.testimonials.length : 2,
                    slidesToScroll: 2,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }, 
        ]
    };
    const slider = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const prev = ()=>{
        slider.current.slickPrev();
    };
    const next = ()=>{
        slider.current.slickNext();
    };
    const rs = aboutData.blogs.slice(0, 3).map((item)=>{
        return {
            id: item.id,
            by: item.blog.admin_id,
            comments_length: item.blog.active_comments.length,
            title: item.blog.title,
            article: item.blog.description,
            picture: "https://backend.invofy.shop/" + item.blog.image,
            slug: item.blog.slug
        };
    });
    const { 0: langCntnt , 1: setLangCntnt  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setLangCntnt((0,_utils_languageModel__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)());
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Partials_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        childrenClasses: "pt-0 pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "about-page-wrapper w-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title-area w-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_PageTitle__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        title: langCntnt && langCntnt.About_us,
                        breadcrumb: [
                            {
                                name: `${langCntnt && langCntnt.home}`,
                                path: "/"
                            },
                            {
                                name: `${langCntnt && langCntnt.About_us}`,
                                path: "/about"
                            }, 
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "aboutus-wrapper w-full py-10 bg-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-x mx-auto",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "lg:w-1/2 w-full h-[560px] rounded overflow-hidden my-5 lg:my-0 relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute left-0 top-0 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                width: 375,
                                                height: 470,
                                                src: "https://backend.invofy.shop/" + aboutData.aboutUs.image_two,
                                                alt: "about",
                                                className: "w-full h-full"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute right-0 bottom-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                width: 333,
                                                height: 403,
                                                src: "https://backend.invofy.shop/" + aboutData.aboutUs.banner_image,
                                                alt: "about",
                                                className: "w-full h-full"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "content lg:w-1/2 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "about-content",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                dangerouslySetInnerHTML: {
                                                    __html: aboutData.aboutUs.about_us
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/contact",
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-[160px] h-[54px] transition-common bg-qpurple hover:bg-qpurplelow/10 border border-transparent hover:border-qpurple hover:text-qpurple text-white mt-10 cursor-pointer rounded-full flex justify-center items-center",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: langCntnt && langCntnt.Contact_Us
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "how-we-work-section w-full py-[60px] qpurplelow/10",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-x mx-auto",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-center w-full ",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "lg:flex-row flex flex-col space-y-[30px] lg:space-y-0 lg:justify-evenly w-full items-center",
                                children: hww.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-[286px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-[104px] h-[104px] rounded-full bg-qpurple flex justify-center items-center mb-7",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_FontAwesomeCom__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                        className: "w-10 h-10 text-white",
                                                                        icon: item.icon
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                className: "text-center text-[26px] font-bold text-qblack mb-3",
                                                                children: item.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "text-[15px] text-[#797979] text-center",
                                                                children: item.description
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "separator w-[1px] lg:block hidden h-[197px] bg-qpurplelow/10"
                                            })
                                        ]
                                    }))
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full h-[527px]",
                    style: {
                        backgroundImage: `url(${"https://backend.invofy.shop/" + aboutData.aboutUs.video_background})`,
                        backgroundSize: `cover`,
                        backgroundRepeat: `no-repeat`
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full h-full bg-black bg-opacity-60 flex justify-center items-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>setPopup(!videoPopup),
                            className: "flex justify-center items-center w-[140px] h-[140px] rounded-full bg-white cursor-pointer button is-play",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "relative z-10 text-qpurple",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        width: "34",
                                        height: "38",
                                        viewBox: "0 0 34 38",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M5.19263 0.628906C6.0417 0.925379 6.95562 1.10689 7.72971 1.53849C15.5882 5.91299 23.4345 10.3097 31.2625 14.7386C34.8452 16.7655 34.8594 21.3861 31.2828 23.413C23.4567 27.846 15.6125 32.2467 7.75605 36.6252C4.10039 38.6622 0.0779523 36.3267 0.061741 32.1478C0.0293183 23.4452 0.0394504 14.7426 0.0576882 6.04005C0.0657938 2.98657 2.26243 0.751933 5.19263 0.628906Z",
                                            fill: "currentColor"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "button-outer-circle has-scale-animation"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "button-outer-circle has-scale-animation has-delay-short"
                                })
                            ]
                        })
                    })
                }),
                videoPopup && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "fixed w-full left-0 top-0 h-screen flex justify-center px-2 lg:px-0 items-center z-50",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            onClick: ()=>setPopup(!videoPopup),
                            className: "fixed w-full h-full left-0 top-0 bg-black bg-opacity-50"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            "data-aos": "fade-up",
                            className: "lg:w-[900px] lg:h-[500px] w-full h-[300px] bg-white rounded relative z-50 overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                                className: "w-full h-full",
                                src: `https://www.youtube.com/embed/${aboutData.aboutUs.video_id}`,
                                title: "YouTube video player",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowFullScreen: true
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "customer-feedback w-full bg-qpurplelow/10 py-[60px]",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title flex justify-center mb-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-[36px] font-bold text-qblack",
                                children: langCntnt && langCntnt.Customers_Feedback
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container-x mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "feedback-slider-wrapper w-vw relative",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_SliderCom__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    selector: slider,
                                    settings: settings,
                                    children: aboutData.testimonials.length > 0 && aboutData.testimonials.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item h-[275px]",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "w-full h-full bg-qborder sm:px-10 sm:pt-5 p-5 rounded-md relative bg-white",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-1 h-[143px] styling-border rounded-full absolute left-0 top-[57px]"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "text-[18px] text-qgray leading-[30px] line-clamp-3 mb-4 relative z-20",
                                                        children: item.comment
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "absolute left-10 top-5 z-10 text-[#E5E5E5]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                            width: "38",
                                                            height: "30",
                                                            viewBox: "0 0 38 30",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "fill-current",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M7.82656 11.9446C8.29019 9.03034 11.933 5.91742 14.7809 5.85119C14.9796 5.85119 15.1783 5.78496 15.3108 5.65249C15.4433 5.58626 15.5757 5.52003 15.642 5.32133C16.6355 3.46683 16.1056 2.00972 14.4498 0.817536C12.5291 -0.573341 9.48237 0.817536 7.95903 2.07595C4.11756 5.2551 0.209852 10.7523 0.408549 15.9847C-0.253774 19.4951 -0.121309 23.2703 0.872175 26.3832C1.5345 28.3702 3.45523 29.3636 5.4422 29.4961C7.42917 29.6287 11.5356 30.2247 13.3238 29.0326C15.1121 27.8403 15.2446 25.5222 15.4433 23.5353C15.642 21.3496 16.2381 17.2431 14.3836 15.5211C12.5291 13.8653 7.23047 15.6536 7.82656 11.9446Z"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                    d: "M29.683 11.9446C30.1466 9.03034 33.7893 5.91742 36.6374 5.85119C36.8361 5.85119 37.0348 5.78496 37.1673 5.65249C37.2998 5.58626 37.4322 5.52003 37.4985 5.32133C38.492 3.46683 37.9622 2.00972 36.3064 0.817536C34.3856 -0.573341 31.3389 0.817536 29.8155 2.07595C25.974 5.2551 22.0663 10.7524 22.265 15.9847C21.6027 19.4951 21.7351 23.2703 22.7285 26.3832C23.3908 28.3702 25.3116 29.3636 27.2987 29.4961C29.2856 29.6287 33.392 30.2247 35.1803 29.0326C36.9685 27.8403 37.101 25.5222 37.2997 23.5353C37.4984 21.3496 38.0945 17.2431 36.24 15.5211C34.3855 13.8653 29.0207 15.6536 29.683 11.9446Z"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "rating flex space-x-1 items-center mb-4",
                                                        children: [
                                                            Array.from(Array(parseInt(item.rating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "text-qyellow",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                        w: "20",
                                                                        h: "20"
                                                                    })
                                                                }, Math.random())),
                                                            parseInt(item.rating) < 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                children: Array.from(Array(5 - parseInt(item.rating)), ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "text-qgray",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_icons_Star__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                            defaultValue: false,
                                                                            w: "20",
                                                                            h: "20"
                                                                        })
                                                                    }, parseInt(item.rating) + Math.random()))
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                    className: "text-[13px] text-qblack",
                                                                    children: [
                                                                        "(",
                                                                        parseInt(item.rating),
                                                                        ")"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-full h-[1px] bg-qpurplelow/10"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-center space-x-2.5 mt-6",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "w-[54px] h-[54px] rounded-full border border-qpurple relative",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-full h-full relative rounded-full overflow-hidden",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                        layout: "fill",
                                                                        src: `${"https://backend.invofy.shop/" + item.image}`,
                                                                        alt: "user"
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                        className: "text-[22px] text-qblack font-bold",
                                                                        children: item.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "text-qgray text-base",
                                                                        children: item.designation
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "blog-post-wrapper w-full pt-[60px] pb-[114px] bg-white",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container-x mx-auto",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "blog-post-title flex justify-center items-cente mb-[30px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-3xl font-semibold text-qblack",
                                    children: langCntnt && langCntnt.My_Latest_News
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "blogs-wrapper w-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_DataIteration__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        datas: rs,
                                        startLength: 0,
                                        endLength: 3,
                                        children: ({ datas  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                "data-aos": "fade-up",
                                                className: "item w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Helpers_Cards_BlogCard__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    datas: datas
                                                })
                                            }, datas.id)
                                    })
                                })
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
var __webpack_exports__ = __webpack_require__.X(0, [2952,3061,6031,4790,1546,8146,6727,1866], () => (__webpack_exec__(414)));
module.exports = __webpack_exports__;

})();