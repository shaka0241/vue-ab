!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Vue"),require("VueAb")):"function"==typeof define&&define.amd?define(["Vue","VueAb"],t):"object"==typeof exports?exports.VubAb=t(require("Vue"),require("VueAb")):e.VubAb=t(e.Vue,e.VueAb)}(this,function(e,t){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),r=n.n(a),i=n(6),o=n(5)(r.a,i.a,null,null,null);t["default"]=o.exports},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=a(n(1)),i=(a(n(2)),a(n(0)));new r["default"]({el:"#app",render:function(e){return e(i["default"])}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={data:function(){return{example1:'<Ab>\n    <div slot="candidate1">\n        Candidate 1, Div :-)\n    </div>\n    <p slot="candidate2">\n        Candidate 2, p :-)\n    </p>\n    <template slot="candidate3">\n        Candidate 3, String :-)\n    </template>\n    <template slot="candidate4">\n        <div>Candidate 4</div>\n        <p>Has Many Children :-)</p>\n    </template>\n    \x3c!-- nothing :-) --\x3e\n    <template slot="candidate5"></template>\n</Ab>\n'}},mounted:function(){this.$refs.example1.textContent=this.example1,hljs.highlightBlock(this.$refs.example1)},methods:{sample:function(e){console.log("sample!",e)},resample:function(){this.$refs.ab.resample()}}}},function(e,t){e.exports=function(e,t,n,a,r){var i,o=e=e||{},s=typeof e["default"];"object"!==s&&"function"!==s||(i=e,o=e["default"]);var d="function"==typeof o?o.options:o;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns),a&&(d._scopeId=a);var l;if(r?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=l):n&&(l=n),l){var u=d.functional,c=u?d.render:d.beforeCreate;u?d.render=function(e,t){return l.call(t),c(e,t)}:d.beforeCreate=c?[].concat(c,l):[l]}return{esModule:i,exports:o,options:d}}},function(e,t,n){"use strict";var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container pt-4",attrs:{id:"app"}},[n("h4",[e._v("Simple Example")]),e._v(" "),n("h5",[e._v("Demo.")]),e._v(" "),n("div",[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.resample}},[e._v("ReSample")])]),e._v(" "),n("Ab",{ref:"ab",on:{sample:e.sample}},[n("div",{attrs:{slot:"candidate1"},slot:"candidate1"},[e._v("\n            Candidate 1, Div :-)\n        ")]),e._v(" "),n("p",{attrs:{slot:"candidate2"},slot:"candidate2"},[e._v("\n            Candidate 2, p :-)\n        ")]),e._v(" "),n("template",{attrs:{slot:"candidate3"},slot:"candidate3"},[e._v("\n            Candidate 3, String :-)\n        ")]),e._v(" "),n("template",{attrs:{slot:"candidate4"},slot:"candidate4"},[n("div",[e._v("Candidate 4")]),e._v(" "),n("p",[e._v("Has Many Children :-)")])]),e._v(" "),n("template",{attrs:{slot:"candidate5"},slot:"candidate5"})],2),e._v(" "),n("h5",[e._v("Example.")]),e._v(" "),n("div",[n("pre",[n("code",{ref:"example1",staticClass:"html"})])])],1)},staticRenderFns:[]};t.a=a}])});