(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{243:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return f}));n(56);var r=n(25),c=new(n(244).a)({url:"http://localhost:2368",key:"fa5b114e66254968b7a9086f95",version:"v3"});function o(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.browse({include:"tags, authors",limit:"all"}).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.read({slug:e}).catch((function(t){throw console.log("slug",e,c),t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},254:function(t,e,n){"use strict";n.r(e);n(56);var r=n(25),c=n(243),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,Object(c.b)(n.slug);case 3:return r=e.sent,e.abrupt("return",{post:r});case 5:case"end":return e.stop()}}),e)})))()}},l=n(62),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt-child")],1)}),[],!1,null,null,null);e.default=component.exports}}]);