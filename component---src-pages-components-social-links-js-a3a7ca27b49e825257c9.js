/*! For license information please see component---src-pages-components-social-links-js-a3a7ca27b49e825257c9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FEZm:function(t,e,r){"use strict";r.r(e);var n=r("dI71"),a=r("q1tI"),o=r.n(a),i=r("cWnB"),l=r("IP2g"),s=r("8tEE"),c={center:{display:"flex",justifyContent:"center",alignItems:"center"},socialButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:3,width:30,height:30,marginLeft:10,marginRight:10,borderRadius:100}},u=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:c.center},o.a.createElement(i.a,{variant:"primary",style:c.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/winton-nathan-roberts/"},o.a.createElement(l.a,{color:"white",icon:s.i,size:"lg",style:{margin:0,padding:0}})),o.a.createElement(i.a,{variant:"primary",style:c.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/crypticdeluge/"},o.a.createElement(l.a,{color:"white",icon:s.c,size:"lg",style:{margin:0,padding:0}})),o.a.createElement(i.a,{variant:"primary",style:c.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/sydneyhandsanitiser/"},o.a.createElement(l.a,{color:"white",icon:s.f,size:"lg",style:{margin:0,padding:0}})))},e}(a.Component);e.default=u},IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));r("E9XD");var n=r("7O5W"),a=r("17x9"),o=r.n(a),i=r("q1tI"),l=r.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function y(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function d(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=b(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{})}var m=!1;try{m=!0}catch(w){}function v(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function h(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function g(t){var e=t.forwardedRef,r=p(t,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,l=r.className,s=r.title,u=r.titleId,b=v(a),d=h("classes",[].concat(y(function(t){var e,r=t.spin,n=t.pulse,a=t.fixedWidth,o=t.inverse,i=t.border,l=t.listItem,s=t.flip,u=t.size,f=t.rotation,p=t.pull,y=(c(e={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(u),null!=u),c(e,"fa-rotate-".concat(f),null!=f&&0!==f),c(e,"fa-pull-".concat(p),null!=p),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(r)),y(l.split(" ")))),w=h("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),j=h("mask",v(o)),x=Object(n.icon)(b,f({},d,{},w,{},j,{symbol:i,title:s,titleId:u}));if(!x)return function(){var t;!m&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",b),null;var k=x.abstract,P={ref:e};return Object.keys(r).forEach((function(t){g.defaultProps.hasOwnProperty(t)||(P[t]=r[t])})),O(k[0],P)}g.displayName="FontAwesomeIcon",g.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var O=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=d(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[b(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=p(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},l),e.apply(void 0,[r.tag,f({},o.attrs,{},s)].concat(y(a)))}.bind(null,l.a.createElement)},Qg85:function(t,e,r){"use strict";r("E9XD");e.a=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter((function(t){return null!=t})).reduce((function(t,e){if("function"!=typeof e)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===t?e:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];t.apply(this,n),e.apply(this,n)}}),null)}},TSYQ:function(t,e,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&t.push(i)}else if("object"===o)for(var l in n)r.call(n,l)&&n[l]&&t.push(l)}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(e,[]))||(t.exports=n)}()},cWnB:function(t,e,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("TSYQ"),i=r.n(o),l=r("q1tI"),s=r.n(l),c=r("vUet"),u=r("dbZe"),f=s.a.forwardRef((function(t,e){var r=t.bsPrefix,o=t.variant,l=t.size,f=t.active,p=t.className,y=t.block,b=t.type,d=t.as,m=Object(a.a)(t,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(c.a)(r,"btn"),h=i()(p,v,f&&"active",o&&v+"-"+o,y&&v+"-block",l&&v+"-"+l);if(m.href)return s.a.createElement(u.a,Object(n.a)({},m,{as:d,ref:e,className:i()(h,m.disabled&&"disabled")}));e&&(m.ref=e),b?m.type=b:d||(m.type="button");var g=d||"button";return s.a.createElement(g,Object(n.a)({},m,{className:h}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},e.a=f},dbZe:function(t,e,r){"use strict";var n=r("wx14"),a=r("zLVn"),o=r("q1tI"),i=r.n(o),l=r("Qg85");function s(t){return!t||"#"===t.trim()}var c=i.a.forwardRef((function(t,e){var r=t.as,o=void 0===r?"a":r,c=t.disabled,u=t.onKeyDown,f=Object(a.a)(t,["as","disabled","onKeyDown"]),p=function(t){var e=f.href,r=f.onClick;(c||s(e))&&t.preventDefault(),c?t.stopPropagation():r&&r(t)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),c&&(f.tabIndex=-1,f["aria-disabled"]=!0),i.a.createElement(o,Object(n.a)({ref:e},f,{onClick:p,onKeyDown:Object(l.a)((function(t){" "===t.key&&(t.preventDefault(),p(t))}),u)}))}));c.displayName="SafeAnchor",e.a=c},vUet:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));r("wx14");var n=r("q1tI"),a=r.n(n),o=a.a.createContext({});o.Consumer,o.Provider;function i(t,e){var r=Object(n.useContext)(o);return t||r[e]||e}},wx14:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"a",(function(){return n}))},zLVn:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}r.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-components-social-links-js-a3a7ca27b49e825257c9.js.map