(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{242:function(t,e,n){var content=n(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("1930a9a0",content,!0,{sourceMap:!1})},243:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f}));n(56);var r=n(25),o=new(n(244).a)({url:"http://localhost:2368",key:"fa5b114e66254968b7a9086f95",version:"v3"});function c(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.browse({include:"tags, authors",limit:"all"}).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.posts.read({slug:e}).catch((function(t){throw console.log("slug",e,o),t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},246:function(t,e,n){"use strict";var r=n(242);n.n(r).a},247:function(t,e,n){(e=n(71)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},248:function(t,e,n){var content=n(253);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("1b7833da",content,!0,{sourceMap:!1})},249:function(t,e,n){"use strict";n.r(e);n(246);var r=n(62),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";var r=n(248);n.n(r).a},253:function(t,e,n){(e=n(71)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},258:function(t,e,n){"use strict";n.r(e);n(56);var r=n(25),o=n(243),c={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.a)();case 2:return e=t.sent,console.log("posts",e),t.abrupt("return",{posts:e});case 5:case"end":return t.stop()}}),t)})))()}},l=(n(252),n(62)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("Logo"),t._v(" "),n("h1",{staticClass:"title"},[t._v("\n      kooxBlog\n      (Let's Go Eat)\n    ")]),t._v(" "),n("ul",t._l(t.posts,(function(e){return n("li",{key:e.total},[n("nuxt-link",{attrs:{to:{path:"blog/"+e.slug}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(249).default})}}]);