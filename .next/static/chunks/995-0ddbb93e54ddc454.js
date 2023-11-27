"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{5798:function(e,b,a){a.d(b,{Z:function(){return D}});var f=a(6042),g=a(5893),h=a(5121),c=a(1664),i=a.n(c),j=a(1163),k=a(7294),l=a(9473),m=a(5678),n=a(9808),o=a(5564),p=a(8522),q=a(4178),r=a(1839),s=a(4994),t=a(4339),u=a(5827),v=a(8263),w=a(1880),x=a(990),y=a(2189),d=a(5675),z=a.n(d),A=a(9363),B=a(5247),C=function(a){var b=a.message,c=a.linkTxt;return(0,g.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,g.jsx)("span",{className:"text-sm text-qgray",children:b&&b}),(0,g.jsx)(i(),{href:"/cart",children:(0,g.jsx)("span",{className:"text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",children:c&&c})})]})};function D(Q){var a=Q.datas,W=(0,j.useRouter)(),X=(0,l.I0)(),E=(0,l.v9)(function(a){return a.wishlistData}).wishlistData,F=E&&E.wishlists,R=F&&F.data.find(function(b){return b.product.id===a.id}),G=(0,k.useState)(null),S=G[0],Y=G[1],T=(0,l.v9)(function(a){return a.websiteSetup}).websiteSetup,H=(0,k.useState)(null),U=H[0],Z=H[1],$=(0,k.useContext)(B.Z);(0,k.useEffect)(function(){T&&(T.payload.flashSaleProducts.find(function(b){return parseInt(b.product_id)===parseInt(a.id)})?Z(!0):Z(!1))},[T]);var I=(0,k.useState)(!1),J=I[0],_=I[1],K=(0,k.useState)(null),b=K[0],aa=K[1],L=(0,k.useState)(null),ab=L[0],ac=L[1];(0,k.useEffect)(function(){ac((0,A.Z)())},[]);var ad=function(a){_(!J),b||h.Z.get("".concat("https://backend.invofy.shop/","api/product/").concat(a)).then(function(a){aa(a.data?a.data:null)}).catch(function(a){console.log(a)})};(0,k.useEffect)(function(){return J?document.body.style.overflow="hidden":document.body.style.overflow="unset",function(){document.body.style.overflow="unset"}},[J]),(0,k.useEffect)(function(){R?Y(!0):Y(!1)},[R]),a.cam_product_sale,a.cam_product_available,a.cam_product_sale;var ae=function(a){(0,o.Z)()?(Y(!0),n.Z.addToWishlist({id:a,token:(0,o.Z)().access_token}),X((0,s.BW)())):$.handlerPopup(!0)},af=function(a){(0,o.Z)()?(Y(!1),n.Z.removeToWishlist({id:a,token:(0,o.Z)().access_token}),X((0,s.BW)())):W.push("/login")},e=a&&a.variants.length>0&&a.variants,M=(0,k.useState)(e&&e.map(function(a){return a.active_variant_items[0]})),ag=M[0];M[1];var N=(0,k.useState)(null),D=N[0],ah=N[1],O=(0,k.useState)(null),c=O[0],ai=O[1],aj=function(b){var a={id:b,token:(0,o.Z)()&&(0,o.Z)().access_token,quantity:1,variants:ag&&ag.length>0&&ag.map(function(a){return a?parseInt(a.product_variant_id):null}),variantItems:ag&&ag.length>0&&ag.map(function(a){return a?a.id:null})};if((0,o.Z)()){if(e){var c=a.variants.map(function(a,b){return a?"variants[]=".concat(a):"variants[]=-1"}).map(function(a){return a+"&"}).join(""),d=a.variantItems.map(function(a,b){return a?"items[]=".concat(a):"items[]=-1"}),h=d.map(function(a){return a+"&"}).join(""),i="token=".concat(a.token,"&product_id=").concat(a.id,"&").concat(c).concat(h,"quantity=").concat(a.quantity);n.Z.addToCard(i).then(function(a){return m.Am.success((0,g.jsx)(C,{message:ab&&ab.Item_added,linkTxt:ab&&ab.Go_To_Cart}),{autoClose:5e3})}).catch(function(a){console.log(a),m.Am.error(a.response&&a.response.data.message&&a.response.data.message)}),X((0,q.x7)())}else{var j="token=".concat(a.token,"&product_id=").concat(a.id,"&quantity=").concat(a.quantity);n.Z.addToCard(j).then(function(a){return m.Am.success((0,g.jsx)(C,{message:ab&&ab.Item_added,linkTxt:ab&&ab.Go_To_Cart}),{autoClose:5e3})}).catch(function(a){console.log(a),m.Am.error(a.response&&a.response.data.message&&a.response.data.message)}),X((0,q.x7)())}}else localStorage.setItem("data-hold",JSON.stringify((0,f.Z)({type:"add-to-cart"},a))),$.handlerPopup(!0)};(0,k.useEffect)(function(){if(e){var b=e.map(function(a){return a.active_variant_items.length>0&&a.active_variant_items[0].price?a.active_variant_items[0].price:0});if(a.offer_price){var c=parseFloat(b.reduce(function(a,b){return parseInt(a)+parseInt(b)},0)+parseFloat(a.offer_price));ah(a.price),ai(c)}else{var d=parseFloat(b.reduce(function(a,b){return parseInt(a)+parseInt(b)},0)+parseFloat(a.price));ah(d)}}else ah(a&&a.price?parseFloat(a.price):null),ai(a&&a.offer_price?parseFloat(a.offer_price):null)},[a,e]);var ak=function(a){(0,o.Z)()?n.Z.addProductForCompare(a,(0,o.Z)().access_token).then(function(a){m.Am.success(a.data&&a.data.notification),X((0,r.rh)())}).catch(function(a){m.Am.error(a.response&&a.response.data.notification),console.log(a)}):$.handlerPopup(!0)},d=(0,p.Z)().currency_icon,P=(0,k.useState)(null),V=P[0],al=P[1],am=function(a){al(a)};return(0,g.jsxs)("div",{className:"product-card-one w-full h-[445px] transition-all duration-300 ease-in-out bg-white relative group border border-transparent hover:border-qpurple overflow-hidden rounded-lg",style:{boxShadow:"0px 15px 64px 0px rgba(0, 0, 0, 0.05)"},children:[(0,g.jsxs)("div",{className:"flex flex-col h-full justify-between",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"product-card-img w-full h-[313px]",children:(0,g.jsx)("div",{className:"w-full h-full relative flex justify-center items-center transition-all duration-700 ease-in-out transform group-hover:-scale-x-[1] scale-x-100",children:(0,g.jsx)(z(),{layout:"fill",objectFit:"scale-down",src:"".concat(V||"/assets/images/spinner.gif"),alt:"",onLoadingComplete:function(){return am(a.image)},className:"w-full h-full object-contain"})})}),(0,g.jsxs)("div",{className:"product-card-details relative pt-5 pl-[30px]",children:[(0,g.jsx)("div",{className:"flex justify-start mb-1.5",children:(0,g.jsxs)("div",{className:"reviews flex space-x-[1px]",children:[Array.from(Array(a.review),function(){return(0,g.jsx)("span",{children:(0,g.jsx)(x.Z,{})},a.review+Math.random())}),a.review<5&&(0,g.jsx)(g.Fragment,{children:Array.from(Array(5-a.review),function(){return(0,g.jsx)("span",{className:"text-qgray",children:(0,g.jsx)(x.Z,{defaultValue:!1})},a.review+Math.random())})})]})}),(0,g.jsx)(i(),{href:{pathname:"/single-product",query:{slug:a.slug}},passHref:!0,children:(0,g.jsx)("a",{rel:"noopener noreferrer",children:(0,g.jsx)("h1",{className:"title mb-1.5 text-[18px] font-600 text-qblack leading-[30px] line-clamp-1 hover:text-qpurple cursor-pointer text-start",children:a.title})})}),(0,g.jsxs)("p",{className:"price text-start",children:[(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"main-price  font-500 text-[16px] ".concat(c?"line-through text-qgray":"text-qpurple"),children:c?(0,g.jsx)("span",{children:d&&d+parseFloat(D).toFixed(2)}):(0,g.jsxs)(g.Fragment,{children:[U&&(0,g.jsx)("span",{className:"line-through text-qgray font-500 text-[16px] mr-2",children:d&&d+parseFloat(D).toFixed(2)}),(0,g.jsx)(t.Z,{id:a.id,price:D})]})}),c&&(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"offer-price text-qpurple font-500 text-[16px] ml-2",children:(0,g.jsx)(t.Z,{id:a.id,price:c})})]})]})]}),(0,g.jsx)("div",{className:"",children:(0,g.jsx)("div",{style:{borderRadius:"30px 0px 0"},onClick:function(){return aj(a.id)},className:"w-[135px] h-[48px] pl-6 pt-3 cursor-pointer bg-qpurplelow/10 group-hover:bg-qpurple transition-all duration-300 absolute -bottom-1 -right-1 ease-in-out",children:(0,g.jsx)("div",{className:"w-full h-full space-x-3 text-qpurple group-hover:text-white",children:(0,g.jsx)("span",{className:"text-base font-semibold",children:"Add To Cart"})})})})]}),(0,g.jsxs)("div",{className:"quick-access-btn",children:[(0,g.jsx)("button",{className:" absolute left-[77px] top-[243px] transform scale-0 group-hover:scale-100 transition-all ease-in-out",onClick:function(){return ad(a.slug)},type:"button",children:(0,g.jsx)("span",{className:"w-10 h-10 block overflow-hidden text-qblack hover:text-white transition-all duration-300 ease-in-out hover:bg-qpurple bg-white rounded-full",children:(0,g.jsx)("span",{className:" w-full h-full bg-qpurplelow/10 flex justify-center items-center",children:(0,g.jsx)(w.Z,{className:"fill-current"})})})}),S?(0,g.jsx)("button",{className:" absolute left-[134px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out",type:"button",onClick:function(){return af(R&&R.id)},children:(0,g.jsx)("span",{className:"w-10 block h-10 bg-white rounded-full overflow-hidden",children:(0,g.jsx)("span",{className:"flex w-full h-full justify-center items-center bg-qpurplelow/10",children:(0,g.jsx)(y.Z,{fill:!0})})})}):(0,g.jsx)("button",{className:" absolute left-[134px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-300 ease-in-out",type:"button",onClick:function(){return ae(a.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 block text-qblack overflow-hidden hover:text-white transition-all duration-300 ease-in-out bg-white rounded-full",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",children:(0,g.jsx)(y.Z,{className:"fill-current"})})})}),(0,g.jsx)("button",{className:" absolute left-[195px] top-[243px] transform scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out",type:"button",onClick:function(){return ak(a.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 block text-qblack hover:text-white transition-all overflow-hidden duration-300 ease-in-out items-center bg-white rounded-full",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10 ",children:(0,g.jsx)(v.Z,{})})})})]}),J&&b&&(0,g.jsxs)("div",{className:"quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",children:[(0,g.jsx)("div",{onClick:function(){return _(!J)},className:"w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"md:mx-10 xl:mt-[100px] rounded w-full bg-white relative lg:py-[40px] pt-[80px] pb-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:mt-0",style:{zIndex:"999"},children:[(0,g.jsx)("div",{className:"w-full h-full overflow-y-scroll overflow-style-none",children:(0,g.jsx)(u.Z,{images:b.gellery.length>0?b.gellery:[],product:b.product})}),(0,g.jsx)("button",{onClick:function(){return _(!J)},type:"button",className:"absolute right-3 top-3",children:(0,g.jsx)("span",{className:"text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})})]})]})]})}},8650:function(c,a,b){var d=b(5893);a.Z=function(a){var c=a.datas,b=void 0===c?[]:c,f=a.startLength,e=a.endLength,g=a.children;return(0,d.jsx)(d.Fragment,{children:b&&b.length>=e&&b.slice(f,e).map(function(a){return g({datas:a})})})}},4987:function(d,b,a){var e=a(5893),c=a(9008),f=a.n(c);a(7294);var g=a(8522);b.Z=function(b){var c=b.title,a=(0,g.Z)().favicon;return(0,e.jsxs)(f(),{children:[(0,e.jsx)("title",{children:c}),(0,e.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,e.jsx)("link",{rel:"icon",href:"".concat(a?"https://backend.invofy.shop/"+a:"/favico.svg")})]})}},16:function(c,b,a){a.d(b,{Z:function(){return f}});var d=a(5893),e=a(7294);function f(a){var f=a.datas,b=void 0===f?[]:f,g=a.defaultValue,h=void 0===g?"":g,m=a.className,n=a.action,i=a.children,j=(0,e.useState)({name:h}),c=j[0],o=j[1],k=(0,e.useState)(!1),l=k[0],p=k[1],q=function(b,a){n&&n(a),o(a),p(!l)};return(0,e.useEffect)(function(){h?o({name:h}):o({name:"Select"})},[b,h]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"my-select-box ".concat(m||""),children:[(0,d.jsx)("button",{onClick:function(){return p(!l)},type:"button",className:"my-select-box-btn ",children:i?i({item:c&&c.name}):(0,d.jsx)("span",{children:c&&c.name})}),l&&(0,d.jsx)("div",{className:"click-away",onClick:function(){return p(!l)}}),(0,d.jsx)("div",{className:"my-select-box-section max-h-[300px] overflow-y-scroll ".concat(l?"open":""),children:(0,d.jsxs)("ul",{className:"list",children:[(0,d.jsx)("li",{className:"cursor-not-allowed selected pointer-events-none",children:"Select One"}),b&&b.length>0&&b.map(function(a){return(0,d.jsx)("li",{className:c&&c.name===a.name?"selected":"",onClick:function(b){return q(b,a)},children:a.name},Math.random())})]})})]})})}},1880:function(c,b,a){a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){var b=a.className;return(0,d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",className:b,xmlns:"http://www.w3.org/2000/svg",children:[(0,d.jsx)("path",{d:"M0.339844 3.18947V5.71272H0.991007H1.64217V4.31815V2.91815L4.6538 5.92978L7.66543 8.94141L8.13752 8.46389L8.61504 7.99179L5.60341 4.98017L2.59178 1.96854H3.99178H5.38636V1.31737V0.66621H2.8631H0.339844V3.18947Z"}),(0,d.jsx)("path",{d:"M13.9592 1.31737V1.96854H15.3537H16.7537L13.7421 4.98017L10.7305 7.99179L11.208 8.46389L11.6801 8.94141L14.6917 5.92978L17.7033 2.91815V4.31815V5.71272H18.3545H19.0057V3.18947V0.66621H16.4824H13.9592V1.31737Z"}),(0,d.jsx)("path",{d:"M4.63752 14.0803L1.64217 17.0811V15.6811V14.2865H0.991007H0.339844V16.8098V19.333H2.8631H5.38636V18.6818V18.0307H3.99178H2.59178L5.60341 15.0191L8.61504 12.0074L8.1538 11.5462C7.90419 11.2911 7.68171 11.0849 7.66543 11.0849C7.64915 11.0849 6.28713 12.4361 4.63752 14.0803Z"}),(0,d.jsx)("path",{d:"M11.1917 11.5462L10.7305 12.0074L13.7421 15.0191L16.7537 18.0307H15.3537H13.9592V18.6818V19.333H16.4824H19.0057V16.8098V14.2865H18.3545H17.7033V15.6811V17.0811L14.7026 14.0803C13.0584 12.4361 11.6964 11.0849 11.6801 11.0849C11.6638 11.0849 11.4413 11.2911 11.1917 11.5462Z"})]})}},990:function(c,b,a){a.d(b,{Z:function(){return e}});var d=a(5893);function e(a){var b=a.w,c=void 0===b?"15":b,e=a.h,f=void 0===e?"15":e,g=a.defaultValue,h=a.className;return(0,d.jsx)(d.Fragment,{children:void 0===g||g?(0,d.jsx)("svg",{width:c,height:f,className:"fill-current",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M17.9391 6.92157C17.8772 6.731 17.7125 6.59212 17.5142 6.56334L11.9448 5.754L9.45393 0.707201C9.3653 0.527543 9.1823 0.413818 8.98198 0.413818C8.78162 0.413818 8.59866 0.527543 8.50999 0.707201L6.01906 5.754L0.449672 6.56334C0.251452 6.59212 0.0867072 6.731 0.0248095 6.92154C-0.0371233 7.11211 0.0145283 7.32127 0.158009 7.4611L4.18796 11.3895L3.23675 16.9365C3.20286 17.134 3.28405 17.3335 3.44613 17.4513C3.53782 17.5179 3.64642 17.5518 3.75555 17.5518C3.83934 17.5518 3.92342 17.5319 4.0004 17.4914L8.98194 14.8724L13.9633 17.4913C14.1406 17.5846 14.3555 17.5691 14.5176 17.4513C14.6797 17.3335 14.7609 17.134 14.727 16.9365L13.7755 11.3895L17.8059 7.46107C17.9494 7.32127 18.001 7.1121 17.9391 6.92157Z",fill:"#F2C94C"})}):(0,d.jsx)("svg",{width:c,height:f,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current ".concat((void 0===h?"text-[#DFDFDF]":h)||""),children:(0,d.jsx)("path",{d:"M17.9742 6.92157C17.9123 6.731 17.7477 6.59212 17.5494 6.56334L11.9799 5.754L9.48909 0.707201C9.40045 0.527543 9.21746 0.413818 9.01714 0.413818C8.81677 0.413818 8.63382 0.527543 8.54515 0.707201L6.05422 5.754L0.484828 6.56334C0.286608 6.59212 0.121863 6.731 0.0599658 6.92154C-0.00196704 7.11211 0.0496846 7.32127 0.193165 7.4611L4.22311 11.3895L3.27191 16.9365C3.23801 17.134 3.31921 17.3335 3.48129 17.4513C3.57298 17.5179 3.68158 17.5518 3.79071 17.5518C3.8745 17.5518 3.95857 17.5319 4.03556 17.4914L9.0171 14.8724L13.9984 17.4913C14.1758 17.5846 14.3907 17.5691 14.5527 17.4513C14.7148 17.3335 14.796 17.134 14.7622 16.9365L13.8107 11.3895L17.8411 7.46107C17.9845 7.32127 18.0362 7.1121 17.9742 6.92157Z"})})})}},5827:function(e,b,a){a.d(b,{Z:function(){return B}});var f=a(6042),g=a(5893),c=a(5675),h=a.n(c),d=a(1664),i=a.n(d),j=a(1163),k=a(7294),l=a(9473),m=a(6573),n=a(6616),o=a(5678),p=a(9808),q=a(5564),r=a(8522),s=a(4178),t=a(4994),u=a(990),v=a(2189),w=a(16),x=a(4339),y=a(9363),z=a(5247),A=function(a){var b=a.message,c=a.linkTxt;return(0,g.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,g.jsx)("span",{className:"text-sm text-qgray",children:b&&b}),(0,g.jsx)(i(),{href:"/cart",children:(0,g.jsx)("span",{className:"text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",children:c&&c})})]})};function B(d){var U=d.className,V=d.reportHandler,F=d.images,i=void 0===F?[]:F,a=d.product,ab=(0,j.useRouter)(),ac=(0,l.I0)(),ad=(0,k.useContext)(z.Z),B=a.tags&&JSON.parse(a.tags),G=(0,k.useState)(!1),H=G[0],ae=G[1],C=i&&i.length>0&&i,c=a&&a.active_variants.length>0&&a.active_variants,I=(0,k.useState)(c&&c.map(function(a){return a.active_variant_items.length>0?a.active_variant_items[0]:{}})),W=I[0],af=I[1],J=(0,k.useState)(null),b=J[0],ag=J[1];(0,k.useEffect)(function(){ag((0,y.Z)())},[]);var K=(0,k.useState)(null),D=K[0],ah=K[1],L=(0,k.useState)(null),e=L[0],ai=L[1],M=(0,k.useState)(a.thumb_image),N=M[0],aj=M[1];(0,k.useEffect)(function(){aj(a.thumb_image)},[a]);var ak=function(a){aj(a)},O=(0,k.useState)(1),X=O[0],al=O[1],am=function(b){if(c.length>0){var a=W.map(function(a){return parseInt(a.product_variant_id)===parseInt(b.product_variant_id)?b:a});af(a)}};(0,k.useEffect)(function(){if(c){var b=W&&W.map(function(a){return a.price?a.price:0}),d=parseFloat(b.reduce(function(a,b){return parseFloat(a)+parseFloat(b)},0)+parseFloat(a.price));if(ah(parseFloat(d)),a.offer_price){var e=parseFloat(b.reduce(function(a,b){return parseFloat(a)+parseFloat(b)},0)+parseFloat(a.offer_price));ai(parseFloat(e))}}},[W,c]),(0,k.useEffect)(function(){if(c){var b=c.map(function(a){return a.active_variant_items.length>0&&a.active_variant_items[0].price?parseInt(a.active_variant_items[0].price):0});if(a.offer_price){var d=b.reduce(function(a,b){return parseFloat(a)+parseFloat(b)}),e=parseFloat(d)+parseFloat(a.price),f=parseFloat(d)+parseFloat(a.offer_price);ah(parseFloat(e)),ai(parseFloat(f))}else{var g=b.reduce(function(a,b){return parseFloat(a)+parseFloat(b)}),h=parseFloat(g)+parseFloat(a.price);ah(parseFloat(h))}}else ah(a&&parseFloat(a.price)?parseFloat(a.price):null),ai(a&&a.offer_price?parseFloat(a.offer_price):null)},[a,c]);var P=(0,l.v9)(function(a){return a.wishlistData}).wishlistData,Q=P&&P.wishlists,Y=Q&&Q.data.find(function(b){return b.product.id===a.id}),R=(0,k.useState)(null),Z=R[0],an=R[1];(0,k.useEffect)(function(){Y?an(!0):an(!1)},[Y]);var ao=function(a){(0,q.Z)()?(an(!0),p.Z.addToWishlist({id:a,token:(0,q.Z)().access_token}),ac((0,t.BW)())):ad.handlerPopup(!0)},ap=function(a){(0,q.Z)()?(an(!1),p.Z.removeToWishlist({id:a,token:(0,q.Z)().access_token}),ac((0,t.BW)())):ab.push("/login")},E=(0,r.Z)().currency_icon,$=(0,l.v9)(function(a){return a.websiteSetup}).websiteSetup,S=(0,k.useState)(""),_=S[0],aq=S[1],T=(0,k.useState)(null),aa=T[0],ar=T[1];return(0,k.useEffect)(function(){if($){var c=$.payload.flashSale,d=$.payload.flashSaleProducts,e=d.find(function(b){return parseInt(b.product_id)===a.id});if(e){var f=parseInt(c.offer),b=a.offer_price?parseInt(a.offer_price):parseInt(a.price),g=f/100*b,h=b-g;aq(Math.trunc((h-a.price)/a.price*100))}else aq(Math.trunc((a.offer_price-a.price)/a.price*100));$.payload.flashSaleProducts.find(function(b){return parseInt(b.product_id)===parseInt(a.id)})?ar(!0):ar(!1)}},[$]),(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"product-view w-full lg:flex justify-between h-full ".concat(U||""),children:[(0,g.jsx)("div",{"data-aos":"fade-right",className:"lg:w-1/2 xl:mr-[70px] lg:mr-[50px]",children:(0,g.jsxs)("div",{className:"w-full",children:[(0,g.jsxs)("div",{className:"w-full md:h-[600px] h-[350px] border border-qpurplelow/10 flex justify-center items-center overflow-hidden relative mb-3 relative rounded",children:[(0,g.jsx)(h(),{layout:"fill",objectFit:"scale-down",src:"".concat("https://backend.invofy.shop/"+N),alt:"",className:"object-contain transform scale-110"}),a.offer_price&&(0,g.jsx)("div",{className:"w-[80px] h-[80px] rounded-full bg-qpurple text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]",children:(0,g.jsxs)("span",{className:"text-white",children:[_,"%"]})})]}),(0,g.jsxs)("div",{className:"flex gap-2 flex-wrap",children:[(0,g.jsx)("div",{onClick:function(){return ak(a.thumb_image)},className:"w-[110px] h-[110px] p-[15px] border border-qpurplelow/10 cursor-pointer relative rounded",children:(0,g.jsx)(h(),{layout:"fill",objectFit:"scale-down",src:"".concat("https://backend.invofy.shop/"+a.thumb_image),alt:"",className:"w-full h-full object-contain transform scale-110 ".concat(N!==a.thumb_image?"opacity-50":""," ")})}),C&&C.length>0&&C.map(function(a,b){return(0,g.jsx)("div",{onClick:function(){return ak(a.image)},className:"w-[110px] h-[110px] p-[15px] border border-qborder cursor-pointer relative",children:(0,g.jsx)(h(),{layout:"fill",objectFit:"scale-down",src:"".concat("https://backend.invofy.shop/"+a.image),alt:"",className:"w-full h-full object-contain ".concat(N!==a.image?"opacity-50":""," ")})},b)})]})]})}),(0,g.jsx)("div",{className:"flex-1",children:(0,g.jsxs)("div",{className:"product-details w-full mt-10 lg:mt-0",children:[a.brand&&(0,g.jsx)("span",{"data-aos":"fade-up",className:"text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block",children:a.brand.name}),(0,g.jsx)("h1",{"data-aos":"fade-up",className:"text-xl font-medium text-qblack mb-4",children:a.name}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-[10px] items-center mb-6",children:[(0,g.jsxs)("div",{className:"flex space-x-1",children:[Array.from(Array(parseInt(a.averageRating)),function(){return(0,g.jsx)("span",{children:(0,g.jsx)(u.Z,{})},parseInt(a.averageRating)+Math.random())}),5>parseInt(a.averageRating)&&(0,g.jsx)(g.Fragment,{children:Array.from(Array(5-parseInt(a.averageRating)),function(){return(0,g.jsx)("span",{className:"text-qgray",children:(0,g.jsx)(u.Z,{defaultValue:!1})},parseInt(a.averageRating)+Math.random())})})]}),(0,g.jsxs)("span",{className:"text-base font-normal text-qblack",children:[parseInt(a.averageRating)," Reviews"]})]}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-2 items-baseline mb-7",children:[(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"main-price  font-600  ".concat(e?"line-through text-qgray text-[15px]":"text-qred text-[24px]"),children:e?(0,g.jsx)("span",{children:E+D}):(0,g.jsxs)(g.Fragment,{children:[aa&&(0,g.jsx)("span",{className:"main-price font-600 line-through text-qgray text-[15px] mr-2",children:E&&E+parseFloat(D).toFixed(2)}),(0,g.jsx)(x.Z,{id:a.id,price:D})]})}),e&&(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"offer-price text-qred font-600 text-[24px] ml-2",children:(0,g.jsx)(x.Z,{id:a.id,price:e})})]}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"mb-[30px]",children:[(0,g.jsx)("div",{className:"text-qgray text-sm text-normal leading-7 ".concat(H?"":"line-clamp-2"),children:a.short_description}),(0,g.jsx)("button",{onClick:function(){return ae(!H)},type:"button",className:"text-[#03a84e] text-xs font-bold",children:H?"See Less":"See More"})]}),(0,g.jsx)("div",{className:"w-full h-[1px] bg-qpurplelow/10 mb-[30px]"}),(0,g.jsxs)("div",{className:"p-3 bg-qpurplelow/10 flex items-center space-x-2 mb-[30px] rounded-lg w-fit",children:[(0,g.jsxs)("span",{className:"text-base font-bold text-qblack",children:[b&&b.Availability," :"]}),(0,g.jsx)("span",{className:"text-base font-bold text-qpurple",children:0!==parseInt(a.qty)&&parseInt(a.qty)>0?"".concat(a.qty," ").concat(b&&b.Products_Available," "):"".concat(b&&b.Products_not_Available)})]}),c.length>0&&c.map(function(a){return(0,g.jsxs)("div",{"data-aos":"fade-up",className:"product-size mb-[30px]",children:[(0,g.jsx)("span",{className:"text-sm font-normal uppercase text-qgray mb-[14px] inline-block",children:a.name}),(0,g.jsx)("div",{className:"w-full",children:(0,g.jsx)("div",{className:" border border-qborder h-[50px] flex justify-between items-center px-6 cursor-pointer",children:(0,g.jsx)(w.Z,{action:am,className:"w-full",datas:a.active_variant_items&&a.active_variant_items.length>0&&a.active_variant_items,children:function(a){var b=a.item;return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,g.jsx)("div",{children:(0,g.jsx)("span",{className:"text-base text-qblack",children:b})}),(0,g.jsx)("span",{children:(0,g.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z",fill:"#222222"})})})]})})}})})})]},a.id)}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]",children:[(0,g.jsx)("div",{className:"w-[120px] h-full px-[26px] flex items-center border border-qpurplelow/10 rounded-md",children:(0,g.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,g.jsx)("button",{onClick:function(){X>1&&al(function(a){return a-1})},type:"button",className:"text-lg font-medium text-qgray",children:"-"}),(0,g.jsx)("span",{className:"text-qblack",children:X}),(0,g.jsx)("button",{onClick:function(){al(function(a){return a+1})},type:"button",className:"text-lg font-medium text-qgray",children:"+"})]})}),(0,g.jsx)("div",{className:"w-[60px] h-full flex justify-center items-center border border-qpurplelow/10 rounded-md",children:Z?(0,g.jsx)("button",{type:"button",onClick:function(){return ap(Y&&Y.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 flex justify-center items-center",children:(0,g.jsx)(v.Z,{fill:!0})})}):(0,g.jsx)("button",{type:"button",onClick:function(){return ao(a.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 flex justify-center items-center",children:(0,g.jsx)(v.Z,{})})})}),(0,g.jsx)("div",{className:"flex-1 h-full",children:(0,g.jsx)("button",{onClick:function(){var d={id:a.id,token:(0,q.Z)()&&(0,q.Z)().access_token,quantity:X,variants:W&&W.map(function(a){return parseInt(a.product_variant_id)}),variantItems:W&&W.map(function(a){return a.id})};if((0,q.Z)()){if(c){var e=d.variants.map(function(a,b){return"variants[]=".concat(a)}).map(function(a){return a+"&"}).join(""),h=d.variantItems.map(function(a,b){return"items[]=".concat(a)}),i=h.map(function(a){return a+"&"}).join(""),j="token=".concat(d.token,"&product_id=").concat(d.id,"&").concat(e).concat(i,"quantity=").concat(d.quantity);p.Z.addToCard(j).then(function(a){return o.Am.success((0,g.jsx)(A,{message:b&&b.Item_added,linkTxt:b&&b.Go_To_Cart}),{autoClose:5e3})}).catch(function(a){return console.log(a)}),ac((0,s.x7)())}else{var k="token=".concat(d.token,"&product_id=").concat(d.id,"&quantity=").concat(d.quantity);p.Z.addToCard(k).then(function(a){o.Am.success((0,g.jsx)(A,{message:b&&b.Item_added,linkTxt:b&&b.Go_To_Cart}),{autoClose:5e3}),o.Am.error(a.response&&a.response.data.message&&a.response.data.message)}).catch(function(a){console.log(a),o.Am.error(a.response&&a.response.data.message&&a.response.data.message)}),ac((0,s.x7)())}}else localStorage.setItem("data-hold",JSON.stringify((0,f.Z)({type:"add-to-cart"},d))),ad.handlerPopup(!0)},type:"button",className:"bg-qpurple hover:bg-qpurplelow/10 hover:text-qpurple border border-transparent hover:border-qpurple transition-common text-white rounded-full text-sm font-semibold w-full h-full",children:b&&b.Add_To_Cart})})]}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"mb-[20px]",children:[(0,g.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[(0,g.jsxs)("span",{className:"text-qblack",children:[b&&b.category," :"]})," ",a.category.name]}),(0,g.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[(0,g.jsxs)("span",{className:"text-qblack uppercase",children:[b&&b.SKU,":"]})," ",a.sku]}),B&&(0,g.jsxs)("p",{className:"text-base text-qpurple leading-7",children:[(0,g.jsx)("span",{className:"text-qblack",children:"Tags:"})," ",B.length>0&&B.map(function(a,b){return(0,g.jsx)("span",{children:a.value+", "},b)})]})]}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"flex space-x-2 items-center mb-[20px] report-btn ",children:[(0,g.jsx)("span",{children:(0,g.jsx)("svg",{width:"12",height:"13",viewBox:"0 0 12 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z",fill:"#EB5757"})})}),(0,g.jsx)("button",{type:"button",onClick:V,className:"text-qred font-semibold text-base",children:b&&b.Report_This_Item})]}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"social-share flex items-center w-full",children:[(0,g.jsxs)("span",{className:"text-qblack text-base mr-[17px] inline-block",children:[b&&b.Share_This,":"]}),(0,g.jsxs)("div",{className:"flex space-x-5 items-center",children:[(0,g.jsx)(m.Z,{url:"".concat(window.location.origin&&window.location.origin+"/single-product?slug="+a.slug),quotes:a.name,children:(0,g.jsx)("span",{className:"cursor-pointer",children:(0,g.jsx)("svg",{width:"10",height:"16",viewBox:"0 0 10 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z",fill:"#3E75B2"})})})}),(0,g.jsx)(n.Z,{url:"".concat(window.location.origin&&window.location.origin+"/single-product?slug="+a.slug),title:a.name,children:(0,g.jsx)("span",{className:"cursor-pointer",children:(0,g.jsx)("svg",{width:"18",height:"14",viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z",fill:"#3FD1FF"})})})})]})]})]})})]})})}}}])