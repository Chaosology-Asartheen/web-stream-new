(this["webpackJsonpweb-streamer"]=this["webpackJsonpweb-streamer"]||[]).push([[0],{104:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(21),a=c.n(n),s=c(6),r=(c(57),c(13)),o=c(3),l=c(14),d=c.n(l),j=c(18),u=c(19),b=c(5),h=c(16),m=c.n(h),O=c(20),f=(c(86),c(46)),p=c.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),x=(c(104),c(105),c(0));var v=function(e){var t=Object(s.b)();return Object(x.jsx)("header",{className:"main-navigation",children:Object(x.jsxs)("nav",{children:[Object(x.jsx)("ul",{className:"home_icon",children:Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/",title:"Home",children:Object(x.jsx)(b.f,{})})})}),Object(x.jsx)("ul",{className:"header_title",children:Object(x.jsxs)("li",{className:"web-streamer",children:["Web-Streamer ",Object(x.jsx)(b.i,{})]})}),Object(x.jsxs)("ul",{className:"my_content",children:[Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/cart",title:"Cart",children:[Object(x.jsx)(b.b,{})," (",e.cartItemNumber.cartSum||0,")"]})}),Object(x.jsx)("li",{children:Object(x.jsxs)(r.b,{to:"/liked",title:"Liked",children:[Object(x.jsx)(b.d,{})," (",e.cartItemNumber.likedSum||0,")"]})}),Object(x.jsx)("li",{children:Object(x.jsx)(r.b,{to:"/profile",title:"Profile",children:Object(x.jsx)(b.k,{})})})]}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{type:"checkbox",title:"Mode Toggler",onChange:function(){return t({type:"MODE_TOGGLE"})}}),Object(x.jsx)("span",{className:"slider round"})]})]})})};function g(e){return Object(x.jsx)("footer",{className:"footer-navigation",children:Object(x.jsxs)("ul",{className:"fixed_footer",children:[Object(x.jsxs)("li",{className:"cost_info",children:["Your Cart has ",e.cartCount," item(s) with total cost of ","[#] $"]}),Object(x.jsx)("li",{className:"check_out",onClick:function(){alert("We appreciate your interest, we still working on this. Keep tuned..!")},children:Object(x.jsxs)("p",{children:["Checkout to buy",Object(x.jsx)(b.a,{})]})})]})})}var _=function(e){var t=Object(i.useState)(""),c=Object(u.a)(t,2),n=c[0],a=c[1],o=Object(s.b)(),l=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}a(""),e.next=8;break;case 4:return e.next=6,p.get("/movie/".concat(t.id,"/videos?api_key=fb34530271b349314af0de263d16ab5a"));case 6:i=e.sent,a(null===(c=i.data.results[0])||void 0===c?void 0:c.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(s.c)((function(e){return e})),f={backgroundImage:h.landings.isLightTheme?"url('http://localhost:3000/statics/black_home_background.jpg')":"url('http://localhost:3000/statics/white_home_background.jpg')"};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{cartItemNumber:h.landings}),Object(x.jsx)(m.a,{}),Object(x.jsxs)("div",{className:"container",style:f,children:[h.landings.cartList.length<=0&&Object(x.jsxs)("p",{children:["No items in the Cart. Add some from   ",Object(x.jsx)(r.b,{to:"/",title:"Home",children:"Home"})]}),Object(x.jsx)("ul",{className:"liked_list",children:h.landings.cartList.map((function(e){return Object(x.jsxs)("li",{className:"liked_list_item",children:[Object(x.jsx)("img",{className:"liked_img",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path),alt:e.overview,onClick:function(){return l(e)}}),Object(x.jsxs)("div",{className:"listing_card_info",children:[Object(x.jsxs)("div",{className:"listing_card_header",children:[Object(x.jsxs)("div",{className:"listing_header_text",children:[Object(x.jsx)("strong",{children:e.name})," - ",e.vote_average,"/10 (",e.vote_count," votes)"]}),Object(x.jsxs)("ul",{className:"listing_header_options",children:[Object(x.jsx)("li",{className:"check_out",title:"Checkout to buy",onClick:function(){alert("Thanks for your interest, we still working on this. Keep tuned..!")},children:Object(x.jsx)(b.h,{})}),Object(x.jsxs)("li",{className:"remove_from_cart",title:"Remove from Cart",onClick:function(){var t;t=e,window.confirm("Do you really want to delete item from the Cart..?")&&o({type:"REMOVE_FROM_CART",payload:t.id})},children:[Object(x.jsx)(b.j,{})," "]}),Object(x.jsxs)("li",{className:"more_info",title:"More Info",onClick:function(){!function(e){if(e&&e.name){var t="".concat(e.name," Movie");window.open("http://google.com/search?q="+t)}}(e)},children:[Object(x.jsx)(b.g,{})," "]})]})]}),Object(x.jsx)("p",{className:"listing_overview",children:e.overview})]})]},e.id)}))}),h.landings.cartList.length>0&&Object(x.jsx)(g,{cartCount:h.landings.cartList.length}),n&&Object(x.jsxs)("div",{className:"youtube_embed",children:[Object(x.jsx)("span",{className:"youtube_close_button",onClick:function(){a("")},children:"\xd7"}),Object(x.jsx)(O.a,{videoId:n})]})]})]})},k=(c(108),"fb34530271b349314af0de263d16ab5a"),y={fetchTrending:"/trending/all/week?api_key=".concat(k,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(k,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(k,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(k,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(k,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(k,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(k,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(k,"&with_genres=99")},N=(c(109),c(47));var w=function(e){var t=e.alt,c=e.src,i=e.title,n=e.key,a=e.className;return Object(x.jsx)(N.LazyLoadImage,{className:a,alt:t,src:c,title:i},n)};var L=function(e){var t=e.title,c=e.fetchUrl,n=e.isLargeRow,a=Object(i.useState)([]),r=Object(u.a)(a,2),o=r[0],l=r[1],h=Object(i.useState)(""),m=Object(u.a)(h,2),f=m[0],v=m[1],g=Object(s.b)();Object(i.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(c);case 2:return t=e.sent,l(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]);var _=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=4;break}v(""),e.next=9;break;case 4:return e.next=6,p.get("/movie/".concat(t.id,"/videos?api_key=fb34530271b349314af0de263d16ab5a"));case 6:i=e.sent,console.log("trailer URL",i),v(null===(c=i.data.results[0])||void 0===c?void 0:c.key);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("h2",{className:"category_title",children:t}),Object(x.jsx)("div",{className:"row_posters",children:o.map((function(e){return null!==e.backdrop_path&&Object(x.jsxs)("li",{className:"row_poster".concat(n?" row_posterLarge":""),children:[Object(x.jsxs)("div",{className:"save_options",children:[Object(x.jsx)("button",{className:"options_switch".concat(n?" large":""),children:Object(x.jsx)(b.i,{})}),Object(x.jsxs)("ul",{className:"poster_options".concat(n?" large":""),children:[Object(x.jsxs)("li",{title:"Add to Cart",onClick:function(){!function(e){window.confirm("Do you really want to add this item to your Cart..?")&&g({type:"ADD_TO_CART",payload:e})}(e)},children:[Object(x.jsx)(b.c,{})," "]}),Object(x.jsxs)("li",{title:"Add to Liked List",onClick:function(){!function(e){window.confirm("Do you really want to add this item to your List...? ")&&g({type:"ADD_TO_LIKED_LIST",payload:e})}(e)},children:[Object(x.jsx)(b.e,{})," "]}),Object(x.jsxs)("li",{title:"More Info",onClick:function(){!function(e){if(console.log("Movie is",e),e&&e.name){var t="".concat(e.name," Movie");window.open("http://google.com/search?q="+t)}}(e)},children:[Object(x.jsx)(b.g,{})," "]})]})]}),Object(x.jsx)("div",{onClick:function(){return _(e)},children:Object(x.jsx)(w,{className:"row_poster_image".concat(n?" row_posterLarge_image":""),src:"".concat("https://image.tmdb.org/t/p/original").concat(n?e.poster_path:e.backdrop_path),alt:e.name,title:e.name},e.id)})]})}))}),f&&Object(x.jsxs)("div",{className:"youtube_embed",children:[Object(x.jsx)("span",{className:"youtube_close_button",onClick:function(){v("")},children:"\xd7"}),Object(x.jsx)(O.a,{videoId:f})]})]})};var C=function(e){var t=Object(s.c)((function(e){return e})),c={backgroundImage:t.landings.isLightTheme?"url('http://localhost:3000/statics/black_home_background.jpg')":"url('http://localhost:3000/statics/white_home_background.jpg')"};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{cartItemNumber:t.landings}),Object(x.jsx)(m.a,{}),Object(x.jsxs)("div",{className:"container",style:c,children:[Object(x.jsx)(L,{title:"WEIRDO ORIGINALS",fetchUrl:y.fetchNetflixOriginals,isLargeRow:!0}),Object(x.jsx)(L,{title:"Trending Now",fetchUrl:y.fetchTrending}),Object(x.jsx)(L,{title:"Top Rated",fetchUrl:y.fetchTopRated}),Object(x.jsx)(L,{title:"Action Movies",fetchUrl:y.fetchActionMovies}),Object(x.jsx)(L,{title:"Comedy Movies",fetchUrl:y.fetchComedyMovies}),Object(x.jsx)(L,{title:"Horror Movies",fetchUrl:y.fetchHorrorMovies}),Object(x.jsx)(L,{title:"Romance Movies",fetchUrl:y.fetchRomanceMovies}),Object(x.jsx)(L,{title:"Documentaries",fetchUrl:y.fetchDocumentaries})]})]})};c(110);var I=function(e){var t=Object(i.useState)(""),c=Object(u.a)(t,2),n=c[0],a=c[1],o=Object(s.b)(),l=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=4;break}a(""),e.next=8;break;case 4:return e.next=6,p.get("/movie/".concat(t.id,"/videos?api_key=fb34530271b349314af0de263d16ab5a"));case 6:i=e.sent,a(null===(c=i.data.results[0])||void 0===c?void 0:c.key);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(s.c)((function(e){return e})),f={backgroundImage:h.landings.isLightTheme?"url('http://localhost:3000/statics/black_home_background.jpg')":"url('http://localhost:3000/statics/white_home_background.jpg')"};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{cartItemNumber:h.landings}),Object(x.jsx)(m.a,{}),Object(x.jsxs)("div",{className:"container",style:f,children:[h.landings.likedList.length<=0&&Object(x.jsxs)("p",{children:["No items in the liked list. Add some from   ",Object(x.jsx)(r.b,{to:"/",title:"Home",children:"Home"})]}),Object(x.jsx)("ul",{className:"liked_list",children:h.landings.likedList.map((function(e){return Object(x.jsxs)("li",{className:"liked_list_item",children:[Object(x.jsx)("img",{className:"liked_img",src:"".concat("https://image.tmdb.org/t/p/original").concat(e.backdrop_path),alt:e.overview,onClick:function(){return l(e)}}),Object(x.jsxs)("div",{className:"listing_card_info",children:[Object(x.jsxs)("div",{className:"listing_card_header",children:[Object(x.jsxs)("div",{className:"listing_header_text",children:[Object(x.jsx)("strong",{children:e.name})," - ",e.vote_average,"/10 (",e.vote_count," votes)"]}),Object(x.jsxs)("ul",{className:"listing_header_options",children:[Object(x.jsxs)("li",{className:"add_to_cart",title:"Add to Cart",onClick:function(){var t;t=e,window.confirm("Do you really want to add Item to your List...?")&&o({type:"ADD_TO_CART",payload:t})},children:[Object(x.jsx)(b.c,{})," "]}),Object(x.jsxs)("li",{className:"remove_from_cart",title:"Remove from Liked List",onClick:function(){var t;t=e,window.confirm("Do you really want to delete Item from the your List")&&o({type:"REMOVE_FROM_LIKED_LIST",payload:t.id})},children:[Object(x.jsx)(b.j,{})," "]}),Object(x.jsxs)("li",{className:"more_info",title:"More Info",onClick:function(){!function(e){if(e&&e.name){var t="".concat(e.name," Movie");window.open("http://google.com/search?q="+t)}}(e)},children:[Object(x.jsx)(b.g,{})," "]})]})]}),Object(x.jsx)("p",{className:"listing_overview",children:e.overview})]})]},e.id)}))}),n&&Object(x.jsxs)("div",{className:"youtube_embed",children:[Object(x.jsx)("span",{className:"youtube_close_button",onClick:function(){a("")},children:"\xd7"}),Object(x.jsx)(O.a,{videoId:n})]})]})]})};c(111);var S=[{path:"/",exact:!0,content:C},{path:"/cart",exact:!0,content:_},{path:"/liked",exact:!0,content:I},{path:"/profile",exact:!0,content:function(e){var t=Object(s.c)((function(e){return e})),c={backgroundImage:t.landings.isLightTheme?"url('http://localhost:3000/statics/black_home_background.jpg')":"url('http://localhost:3000/statics/white_home_background.jpg')"};return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{cartItemNumber:t.landings}),Object(x.jsx)("div",{className:"container",style:c,children:Object(x.jsx)("h3",{children:"Coming soon..."})})]})}}];c(112);var T=function(){return Object(x.jsx)(r.a,{children:Object(x.jsx)(o.c,{children:S.map((function(e){return Object(x.jsx)(o.a,{path:e.path,component:e.content,exact:e.exact})}))})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),i(e),n(e),a(e),s(e)}))},R=c(17),D=c(48),A=c(15),E=c(24),U=c(7);function F(e,t){h.store.addNotification({title:e||"Successful!!",message:t||"Item Successfully added..",type:"Successful!!"===e?"success":"danger",insert:"top",container:"top-right",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:2e3,onScreen:!1}})}var H,G={likedList:[],cartList:[],loading:!1,cartSum:0,likedSum:0,isLightTheme:!0},K=(H={},Object(A.a)(H,"LOADING",(function(e,t){return Object(U.a)(Object(U.a)({},e),{},{loading:!0})})),Object(A.a)(H,"MODE_TOGGLE",(function(e,t){return Object(U.a)(Object(U.a)({},e),{},{isLightTheme:!e.isLightTheme})})),Object(A.a)(H,"ADD_TO_CART",(function(e,t){return e.cartList.some((function(e){return e.id===t.payload.id}))?(F("Failed!!","Item already exists in the Cart..."),Object(U.a)({},e)):(F("Successful!!","Saved to the Cart..."),Object(U.a)(Object(U.a)({},e),{},{cartSum:e.cartSum+1,cartList:[].concat(Object(E.a)(e.cartList),[t.payload])}))})),Object(A.a)(H,"ADD_TO_LIKED_LIST",(function(e,t){return e.likedList.some((function(e){return e.id===t.payload.id}))?(F("Failed!!","Item already exists in the Liked list..."),Object(U.a)({},e)):(F("Successful!!","Saved to the Liked list..."),Object(U.a)(Object(U.a)({},e),{},{likedSum:e.likedSum+1,likedList:[].concat(Object(E.a)(e.likedList),[t.payload])}))})),Object(A.a)(H,"REMOVE_FROM_LIKED_LIST",(function(e,t){var c=e.likedList.filter((function(e,c,i){return!(e.id===t.payload)}));return F("Successful!!","Removed from the Liked List..."),Object(U.a)(Object(U.a)({},e),{},{likedSum:e.likedSum-1,likedList:Object(E.a)(c)})})),Object(A.a)(H,"REMOVE_FROM_CART",(function(e,t){var c=e.cartList.filter((function(e,c,i){return!(e.id===t.payload)}));return F("Successful!!","Removed from the Cart..."),Object(U.a)(Object(U.a)({},e),{},{cartSum:e.cartSum-1,cartList:Object(E.a)(c)})})),H);function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0,c=K[t.type];return c?c(e,t):e}var q=function(){return Object(R.c)({landings:V})},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[D.a],c=Object(R.e)(q(),e,Object(R.d)(R.a.apply(void 0,t)));return c}();a.a.render(Object(x.jsx)(s.a,{store:P,children:Object(x.jsx)(T,{})}),document.getElementById("root")),M()},57:function(e,t,c){},86:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.52f7e661.chunk.js.map