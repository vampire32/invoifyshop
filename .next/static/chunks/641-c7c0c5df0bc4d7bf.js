"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{6418:function(c,b,a){var d=a(5893),e=a(7294),f=a(9363);b.Z=function(a){var g=a.className,h=a.textColor,i=a.label,b=(0,e.useState)(null),c=b[0],j=b[1];return(0,e.useEffect)(function(){j((0,f.Z)())},[]),(0,d.jsxs)("div",{className:"flex justify-center items-center group rounded-full relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ".concat(g||""),children:[(0,d.jsxs)("div",{className:"flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10 ".concat(h||""),children:[(0,d.jsx)("span",{className:"text-sm font-600 tracking-wide leading-7 mr-2",children:i||c&&c.Shop_Now}),(0,d.jsx)("span",{children:(0,d.jsxs)("svg",{width:"7",height:"11",viewBox:"0 0 7 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"fill-current",children:[(0,d.jsx)("rect",{x:"2.08984",y:"0.636719",width:"6.94219",height:"1.54271",transform:"rotate(45 2.08984 0.636719)"}),(0,d.jsx)("rect",{x:"7",y:"5.54492",width:"6.94219",height:"1.54271",transform:"rotate(135 7 5.54492)"})]})})]}),(0,d.jsx)("div",{style:{transition:"transform 0.25s ease-in-out"},className:"w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"})]})}},6763:function(e,b,a){a.d(b,{Z:function(){return D}});var f=a(6042),g=a(5893),h=a(5121),c=a(5675),i=a.n(c),d=a(1664),j=a.n(d),k=a(1163),l=a(7294),m=a(9473),n=a(5678),o=a(9808),p=a(5564),q=a(8522),r=a(4178),s=a(1839),t=a(4994),u=a(4339),v=a(5827),w=a(8263),x=a(1880),y=a(990),z=a(2189),A=a(9363),B=a(5247),C=function(a){var b=a.message,c=a.linkTxt;return(0,g.jsxs)("div",{className:"flex space-x-2 items-center",children:[(0,g.jsx)("span",{className:"text-sm text-qgray",children:b&&b}),(0,g.jsx)(j(),{href:"/cart",children:(0,g.jsx)("span",{className:"text-xs border-b border-blue-600 text-blue-600 mr-2 cursor-pointer",children:c&&c})})]})};function D(E){var Q=E.className,a=E.datas,V=(0,k.useRouter)(),W=(0,m.I0)(),F=(0,m.v9)(function(a){return a.wishlistData}).wishlistData,G=F&&F.wishlists,R=G&&G.data.find(function(b){return b.product.id===a.id}),H=(0,l.useState)(null),S=H[0],X=H[1],I=(0,l.useState)(null),Y=I[0],Z=I[1],T=(0,m.v9)(function(a){return a.websiteSetup}).websiteSetup,J=(0,l.useState)(null),U=J[0],$=J[1],_=(0,l.useContext)(B.Z);(0,l.useEffect)(function(){T&&(T.payload.flashSaleProducts.find(function(b){return parseInt(b.product_id)===parseInt(a.id)})?$(!0):$(!1))},[T]),(0,l.useEffect)(function(){Z((0,A.Z)())},[]),(0,l.useEffect)(function(){R?X(!0):X(!1)},[R]);var aa=function(a){(0,p.Z)()?(X(!0),o.Z.addToWishlist({id:a,token:(0,p.Z)().access_token}),W((0,t.BW)())):_.handlerPopup(!0)},ab=function(a){(0,p.Z)()?(X(!1),o.Z.removeToWishlist({id:a,token:(0,p.Z)().access_token}),W((0,t.BW)())):V.push("/login")},e=a&&a.variants.length>0&&a.variants,K=(0,l.useState)(e&&e.map(function(a){return a.active_variant_items[0]})),ac=K[0];K[1];var L=(0,l.useState)(null),D=L[0],ad=L[1],M=(0,l.useState)(null),b=M[0],ae=M[1],af=function(b){var a={id:b,token:(0,p.Z)()&&(0,p.Z)().access_token,quantity:1,variants:ac&&ac.length>0&&ac.map(function(a){return a?parseInt(a.product_variant_id):null}),variantItems:ac&&ac.length>0&&ac.map(function(a){return a?a.id:null})};if((0,p.Z)()){if(e){var c=a.variants.map(function(a,b){return a?"variants[]=".concat(a):"variants[]=-1"}).map(function(a){return a+"&"}).join(""),d=a.variantItems.map(function(a,b){return a?"items[]=".concat(a):"items[]=-1"}),h=d.map(function(a){return a+"&"}).join(""),i="token=".concat(a.token,"&product_id=").concat(a.id,"&").concat(c).concat(h,"quantity=").concat(a.quantity);o.Z.addToCard(i).then(function(a){return n.Am.success((0,g.jsx)(C,{message:Y&&Y.Item_added,linkTxt:Y&&Y.Go_To_Cart}),{autoClose:5e3})}).catch(function(a){n.Am.error(a.response&&a.response.data.message&&a.response.data.message)}),W((0,r.x7)())}else{var j="token=".concat(a.token,"&product_id=").concat(a.id,"&quantity=").concat(a.quantity);o.Z.addToCard(j).then(function(a){return n.Am.success((0,g.jsx)(C,{message:Y&&Y.Item_added,linkTxt:Y&&Y.Go_To_Cart}),{autoClose:5e3})}).catch(function(a){n.Am.error(a.response&&a.response.data.message&&a.response.data.message)}),W((0,r.x7)())}}else localStorage.setItem("data-hold",JSON.stringify((0,f.Z)({type:"add-to-cart"},a))),_.handlerPopup(!0)};(0,l.useEffect)(function(){if(e){var b=e.map(function(a){return a.active_variant_items.length>0&&a.active_variant_items[0].price?a.active_variant_items[0].price:0});if(a.offer_price){var c=parseFloat(b.reduce(function(a,b){return parseInt(a)+parseInt(b)},0)+parseFloat(a.offer_price));ad(a.price),ae(c)}else{var d=parseFloat(b.reduce(function(a,b){return parseInt(a)+parseInt(b)},0)+parseFloat(a.price));ad(d)}}else ad(a&&a.price?parseFloat(a.price):null),ae(a&&a.offer_price?parseFloat(a.offer_price):null)},[a,e]);var c=(0,q.Z)().currency_icon,ag=function(a){(0,p.Z)()?o.Z.addProductForCompare(a,(0,p.Z)().access_token).then(function(a){n.Am.success(a.data&&a.data.notification),W((0,s.rh)())}).catch(function(a){n.Am.error(a.response&&a.response.data.notification),console.log(a)}):_.handlerPopup(!0)},N=(0,l.useState)(!1),O=N[0],ah=N[1],P=(0,l.useState)(null),d=P[0],ai=P[1],aj=function(a){ah(!O),d||h.Z.get("".concat("https://backend.invofy.shop/","api/product/").concat(a)).then(function(a){ai(a.data?a.data:null)}).catch(function(a){console.log(a)})};return(0,l.useEffect)(function(){return O?document.body.style.overflow="hidden":document.body.style.overflow="unset",function(){document.body.style.overflow="unset"}},[O]),(0,g.jsxs)("div",{style:{boxShadow:"0px 15px 64px rgba(0, 0, 0, 0.05)"},"data-aos":"fade-left",className:"product-row-card-style-one w-full h-[214px] bg-white group p-5 relative overflow-hidden rounded-md border border-transparent hover:border-qpurple transition-all duration-300 ease-in-out ".concat(Q||""),children:[(0,g.jsxs)("div",{className:"flex space-x-5 items-center w-full h-full",children:[(0,g.jsx)("div",{className:"sm:w-[174px] bg-qpurplelow/10 rounded-md w-[150px] h-full overflow-hidden ",children:(0,g.jsx)("div",{className:"w-full h-full relative transition-all duration-300 ease-in-out transform group-hover:scale-110 scale-100",children:(0,g.jsx)(i(),{layout:"fill",objectFit:"scale-down",src:"".concat(a.image),alt:"",className:"w-full h-full object-contain"})})}),(0,g.jsxs)("div",{className:"flex-1",children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:"flex space-x-1 mb-2.5",children:[Array.from(Array(a.review),function(){return(0,g.jsx)("span",{children:(0,g.jsx)(y.Z,{})},a.review+Math.random())}),a.review<5&&(0,g.jsx)(g.Fragment,{children:Array.from(Array(5-a.review),function(){return(0,g.jsx)("span",{className:"text-qgray",children:(0,g.jsx)(y.Z,{defaultValue:!1})},a.review+Math.random())})})]}),(0,g.jsx)(j(),{href:{pathname:"/single-product",query:{slug:a.slug}},passHref:!0,children:(0,g.jsx)("a",{rel:"noopener noreferrer",children:(0,g.jsx)("h1",{className:"title mb-2.5 sm:text-[18px] text-[13px] font-700 text-qblack leading-[24px] line-clamp-1 hover:text-qpurple cursor-pointer",children:a.title})})}),(0,g.jsxs)("p",{className:"price",children:[(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"main-price  font-500 text-base ".concat(b?"line-through text-qgray":"text-qpurple"),children:b?(0,g.jsx)("span",{children:c&&c+parseFloat(D).toFixed(2)}):(0,g.jsxs)(g.Fragment,{children:[U&&(0,g.jsx)("span",{className:"line-through text-qgray font-500 text-base mr-2",children:c&&c+parseFloat(D).toFixed(2)}),(0,g.jsx)(u.Z,{id:a.id,price:D})]})}),b&&(0,g.jsx)("span",{suppressHydrationWarning:!0,className:"offer-price text-qpurple font-500 text-base ml-2",children:(0,g.jsx)(u.Z,{id:a.id,price:b})})]})]}),(0,g.jsx)("div",{className:"w-full h-[48px]",children:(0,g.jsx)("div",{style:{borderRadius:"30px 0px 0"},onClick:function(){return af(a.id)},className:"w-[135px] h-[48px] pl-6 pt-3 cursor-pointer bg-qpurplelow/10 group-hover:bg-qpurple absolute -bottom-1 -right-1 rounded transition-all duration-300 ease-in-out",children:(0,g.jsx)("div",{className:"w-full h-full text-qpurple group-hover:text-white",children:(0,g.jsx)("span",{className:"text-base font-semibold",children:"Add To Cart"})})})})]})]}),(0,g.jsxs)("div",{className:"quick-access-btns flex flex-col space-y-2",children:[(0,g.jsx)("button",{className:" absolute group-hover:right-4 -right-10 top-5 transition-all ease-in-out",type:"button",onClick:function(){return aj(a.slug)},children:(0,g.jsx)("span",{className:"w-10 h-10 block justify-center overflow-hidden text-qblack hover:text-white items-center transition-all duration-300 ease-in-out bg-white rounded",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10",children:(0,g.jsx)(x.Z,{className:"fill-current"})})})}),S?(0,g.jsx)("button",{className:" absolute group-hover:right-4 -right-10 top-[60px] duration-300 transition-all ease-in-out",type:"button",onClick:function(){return ab(R&&R.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 block bg-white overflow-hidden rounded",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10",children:(0,g.jsx)(z.Z,{fill:!0})})})}):(0,g.jsx)("button",{className:" absolute group-hover:right-4 -right-10 top-[60px] duration-300 transition-all ease-in-out",type:"button",onClick:function(){return aa(a.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 block overflow-hidden text-qblack hover:text-white justify-center items-center transition-all duration-300 ease-in-out bg-white rounded",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10",children:(0,g.jsx)(z.Z,{className:"fill-current"})})})}),(0,g.jsx)("button",{className:" absolute group-hover:right-4 -right-10 top-[107px] transition-all duration-500 ease-in-out",type:"button",onClick:function(){return ag(a.id)},children:(0,g.jsx)("span",{className:"w-10 h-10 block overflow-hidden justify-center text-qblack hover:text-white transition-all duration-300 ease-in-out items-center bg-white rounded",children:(0,g.jsx)("span",{className:"w-full h-full flex justify-center items-center hover:bg-qpurple bg-qpurplelow/10",children:(0,g.jsx)(w.Z,{})})})})]}),O&&d&&(0,g.jsxs)("div",{className:"quicke-view-wrapper w-full h-full flex fixed left-0 top-0 justify-center z-50 items-center ",children:[(0,g.jsx)("div",{onClick:function(){return ah(!O)},className:"w-full h-full fixed left-0 right-0 bg-black bg-opacity-25"}),(0,g.jsxs)("div",{"data-aos":"fade-up",className:"md:mx-10 w-full bg-white relative py-[40px] sm:px-[38px] px-3 relative md:mt-12 h-full overflow-y-scroll xl:overflow-hidden xl:h-auto xl:mt-0",style:{zIndex:"999"},children:[(0,g.jsx)(v.Z,{images:d.gellery.length>0?d.gellery:[],product:d.product}),(0,g.jsx)("button",{onClick:function(){return ah(!O)},type:"button",className:"absolute right-3 top-3",children:(0,g.jsx)("span",{className:"text-red-500 w-12 h-12 flex justify-center items-center rounded border border-qred",children:(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-10 h-10",children:(0,g.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})})]})]})]})}}}])