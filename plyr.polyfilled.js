"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e="undefined"!=typeof globalThis?globalThis:e||self).Plyr=t()}(this,(function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var i,s;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(i=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s=i.preventDefault,i.preventDefault=function(){s.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},i};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function i(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}!function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),i=function(e){var i={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(i[Symbol.iterator]=function(){return i}),i},s=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},n=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set&&"function"==typeof t.prototype.entries}catch(e){return!1}})()||function(){var n=function(e){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var t=typeof e;if("undefined"===t);else if("string"===t)""!==e&&this._fromString(e);else if(e instanceof n){var i=this;e.forEach((function(e,t){i.append(t,e)}))}else{if(null===e||"object"!==t)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(e))for(var s=0;s<e.length;s++){var a=e[s];if("[object Array]"!==Object.prototype.toString.call(a)&&2===a.length)throw new TypeError("Expected [string, any] as entry at index "+s+" of URLSearchParams's input");this.append(a[0],a[1])}else for(var r in e)e.hasOwnProperty(r)&&this.append(r,e[r])}},a=n.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[String(t)]},a.forEach=function(e,t){var i;for(var s in this._entries)if(this._entries.hasOwnProperty(s)){i=this._entries[s];for(var n=0;n<i.length;n++)e.call(t,i[n],s,this)}},a.keys=function(){var e=[];return this.forEach((function(t,i){e.push(i)})),i(e)},a.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),i(e)},a.entries=function(){var e=[];return this.forEach((function(t,i){e.push([i,t])})),i(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach((function(t,i){e.push(s(i)+"="+s(t))})),e.join("&")},e.URLSearchParams=n}();var a=e.URLSearchParams.prototype;"function"!=typeof a.sort&&(a.sort=function(){var e=this,t=[];this.forEach((function(i,s){t.push([s,i]),e._entries||e.delete(s)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var i=0;i<t.length;i++)this.append(t[i][0],t[i][1])}),"function"!=typeof a._fromString&&Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,i){t.push(i)}));for(var i=0;i<t.length;i++)this.delete(t[i])}var s,a=(e=e.replace(/^\?/,"")).split("&");for(i=0;i<a.length;i++)s=a[i].split("="),this.append(n(s[0]),s.length>1?n(s[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,i=function(t,i){"string"!=typeof t&&(t=String(t)),i&&"string"!=typeof i&&(i=String(i));var s,n=document;if(i&&(void 0===e.location||i!==e.location.href)){i=i.toLowerCase(),(s=(n=document.implementation.createHTMLDocument("")).createElement("base")).href=i,n.head.appendChild(s);try{if(0!==s.href.indexOf(i))throw new Error(s.href)}catch(e){throw new Error("URL unable to set base "+i+" due to "+e)}}var a=n.createElement("a");a.href=t,s&&(n.body.appendChild(a),a.href=a.href);var r=n.createElement("input");if(r.type="url",r.value=t,":"===a.protocol||!/:/.test(a.href)||!r.checkValidity()&&!i)throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a});var o=new e.URLSearchParams(this.search),l=!0,c=!0,h=this;["append","delete","set"].forEach((function(e){var t=o[e];o[e]=function(){t.apply(o,arguments),l&&(c=!1,h.search=o.toString(),c=!0)}})),Object.defineProperty(this,"searchParams",{value:o,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,c&&(l=!1,this.searchParams._fromString(this.search),l=!0))}})},s=i.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(s,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(s,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(s,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),i.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},i.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=i}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(i){setInterval((function(){e.location.origin=t()}),100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);var r={addCSS:!0,thumbWidth:15,watch:!0};function o(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}var l=function(e){return null!=e?e.constructor:null},c=function(e,t){return!!(e&&t&&e instanceof t)},h=function(e){return null==e},u=function(e){return l(e)===Object},d=function(e){return l(e)===String},p=function(e){return Array.isArray(e)},m=function(e){return c(e,NodeList)},g=d,f=p,b=m,y=function(e){return c(e,Element)},v=function(e){return c(e,Event)},w=function(e){return h(e)||(d(e)||p(e)||m(e))&&!e.length||u(e)&&!Object.keys(e).length};function T(e,t){if(1>t){var i=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(i))}return Math.round(e/t)*t}var k=function(){function e(t,i){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),y(t)?this.element=t:g(t)&&(this.element=document.querySelector(t)),y(this.element)&&w(this.element.rangeTouch)&&(this.config=a({},r,{},i),this.init())}return function(e,t,s){t&&i(e.prototype,t),s&&i(e,s)}(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="",this.element.style.webKitUserSelect="",this.element.style.touchAction=""),this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,i=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[i](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!v(t))return null;var i,s=t.target,n=t.changedTouches[0],a=parseFloat(s.getAttribute("min"))||0,r=parseFloat(s.getAttribute("max"))||100,o=parseFloat(s.getAttribute("step"))||1,l=s.getBoundingClientRect(),c=100/l.width*(this.config.thumbWidth/2)/100;return 0>(i=100/l.width*(n.clientX-l.left))?i=0:100<i&&(i=100),50>i?i-=(100-2*i)*c:50<i&&(i+=2*(i-50)*c),a+T(i/100*(r-a),o)}},{key:"set",value:function(t){e.enabled&&v(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var i=new Event(t,{bubbles:!0});e.dispatchEvent(i)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},s=null;if(w(t)||g(t)?s=Array.from(document.querySelectorAll(g(t)?t:'input[type="range"]')):y(t)?s=[t]:b(t)?s=Array.from(t):f(t)&&(s=t.filter(y)),w(s))return null;var n=a({},r,{},i);if(g(t)&&n.watch){var l=new MutationObserver((function(i){Array.from(i).forEach((function(i){Array.from(i.addedNodes).forEach((function(i){y(i)&&o(i,t)&&new e(i,n)}))}))}));l.observe(document.body,{childList:!0,subtree:!0})}return s.map((function(t){return new e(t,i)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}();const C=e=>null!=e?e.constructor:null,E=(e,t)=>Boolean(e&&t&&e instanceof t),S=e=>null==e,P=e=>C(e)===Object,A=e=>C(e)===String,x=e=>C(e)===Function,N=e=>Array.isArray(e),M=e=>E(e,NodeList),_=e=>S(e)||(A(e)||N(e)||M(e))&&!e.length||P(e)&&!Object.keys(e).length;var L=S,I=P,$=e=>C(e)===Number&&!Number.isNaN(e),O=A,j=e=>C(e)===Boolean,R=x,q=N,D=M,H=e=>null!==e&&"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument,F=e=>E(e,Event),V=e=>E(e,KeyboardEvent),U=e=>E(e,TextTrack)||!S(e)&&A(e.kind),B=e=>E(e,Promise)&&x(e.then),W=e=>{if(E(e,window.URL))return!0;if(!A(e))return!1;let t=e;e.startsWith("http://")&&e.startsWith("https://")||(t=`http: