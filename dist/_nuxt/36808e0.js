(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return h}));n(56);var r=n(25),c=new(n(244).a)({url:"http://localhost:2368",key:"9c0d067a7e24e53c088580a407",version:"v3"});function o(){return l.apply(this,arguments)}function l(){return(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.browse({limit:"all"}).catch((function(t){throw t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.posts.read({slug:e}).catch((function(t){throw console.log("slug",e,c),t}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},256:function(t,e,n){"use strict";n.r(e);n(56);var r=n(25),c=n(243),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,console.log("params",n.slug,n),e.next=4,Object(c.b)(n.slug);case 4:return r=e.sent,e.abrupt("return",{post:r});case 6:case"end":return e.stop()}}),e)})))()}},l=n(62),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.post.title))]),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.post.html)}})])}),[],!1,null,null,null);e.default=component.exports}}]);