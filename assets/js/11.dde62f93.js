(window.webpackJsonp=window.webpackJsonp||[]).push([[11,14,17,20],{457:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return s})),e.d(n,"i",(function(){return a})),e.d(n,"f",(function(){return u})),e.d(n,"g",(function(){return l})),e.d(n,"h",(function(){return c})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return p})),e.d(n,"k",(function(){return h})),e.d(n,"l",(function(){return d})),e.d(n,"c",(function(){return v})),e.d(n,"j",(function(){return g}));e(15),e(34),e(179),e(47),e(20),e(180),e(133),e(60),e(53),e(5),e(54),e(52),e(76),e(100);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var n=t.match(i),e=n?n[0]:"",r=o(t);return s.test(r)?t:r+".html"+e}function p(t,n){var e=decodeURIComponent(t.hash),r=function(t){var n=t.match(i);if(n)return n[0]}(n);return(!r||e===r)&&o(t.path)===o(n)}function h(t,n,e){if(u(n))return{type:"external",path:n};e&&(n=function(t,n,e){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return n+t;var r=n.split("/");e&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(n,e));for(var i=o(n),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function d(t,n,e,i){var r=e.pages,s=e.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return m(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(e)))return{base:e,config:n[e]};var i;return{}}(n,o),l=u.base,c=u.config;return"auto"===c?m(t):c?c.map((function(t){return function t(n,e,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof n)return h(e,n,i);if(Array.isArray(n))return Object.assign(h(e,n[0],i),{title:n[1]});var s=n.children||[];return 0===s.length&&n.path?Object.assign(h(e,n.path,i),{title:n.title}):{type:"group",path:n.path,title:n.title,sidebarDepth:n.sidebarDepth,initialOpenGroupIndex:n.initialOpenGroupIndex,children:s.map((function(n){return t(n,e,i,r+1)})),collapsable:!1!==n.collapsable}}(t,r,l)})):[]}return[]}function m(t){var n=v(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}function v(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},459:function(t,n,e){"use strict";var i=e(0),r=e(462);i({target:"String",proto:!0,forced:e(463)("link")},{link:function(t){return r(this,"a","href",t)}})},460:function(t,n,e){},461:function(t,n,e){"use strict";e.r(n);e(459),e(99),e(5),e(77);var i=e(457),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=e(98),a=Object(s.a)(r,(function(){var t=this,n=t._self._c;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(n){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);n.default=a.exports},462:function(t,n,e){"use strict";var i=e(2),r=e(22),s=e(11),a=/"/g,o=i("".replace);t.exports=function(t,n,e,i){var u=s(r(t)),l="<"+n;return""!==e&&(l+=" "+e+'="'+o(s(i),a,"&quot;")+'"'),l+">"+u+"</"+n+">"}},463:function(t,n,e){"use strict";var i=e(1);t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},464:function(t,n,e){"use strict";e.r(n);var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(e(465),e(98)),s=Object(r.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);n.default=s.exports},465:function(t,n,e){"use strict";e(460)},466:function(t,n,e){},470:function(t,n,e){},474:function(t,n,e){"use strict";e(466)},477:function(t,n,e){"use strict";e.r(n);e(459);var i=e(461),r=e(464),s=e(269),a=e.n(s),o={name:"DropdownLink",components:{NavLink:i.default,DropdownTransition:r.default},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,n){return a()(n)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},u=(e(474),e(98)),l=Object(u.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(n){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);n.default=l.exports},480:function(t,n,e){"use strict";e(470)},488:function(t,n,e){"use strict";e.r(n);e(459);var i=e(96),r=(e(77),e(60),e(15),e(34),e(99),e(5),e(102),e(47),e(179),e(134),e(135),e(136),e(40),e(477)),s=e(457),a={name:"NavLinks",components:{NavLink:e(461).default,DropdownLink:r.default},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,n=this.$site.locales;if(n&&Object.keys(n).length>1){var e=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(n).map((function(i){var a,o=n[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=e:(a=e.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===a}))||(a=i)),{text:u,link:a}}))};return[].concat(Object(i.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],n=["GitHub","GitLab","Bitbucket"],e=0;e<n.length;e++){var i=n[e];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},o=(e(480),e(98)),u=Object(o.a)(a,(function(){var t=this,n=t._self._c;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);n.default=u.exports}}]);