(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FEZm:function(t,e,r){"use strict";r.r(e);var n=r("dI71"),a=r("q1tI"),o=r.n(a),i=r("IP2g"),l=r("8tEE"),s={center:{display:"flex",justifyContent:"center",alignItems:"center"},socialButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:3,width:30,height:30,marginLeft:10,marginRight:10,borderRadius:100}},c=function(t){function e(){return t.apply(this,arguments)||this}return Object(n.a)(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:s.center},o.a.createElement("a",{className:"socialLink",variant:"primary",style:s.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/winton-nathan-roberts/",alt:"Linkedin"},o.a.createElement(i.a,{icon:l.l,size:"lg",style:{margin:0,padding:0}})),o.a.createElement("a",{className:"socialLink",variant:"primary",style:s.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/crypticdeluge/",alt:"Facebook"},o.a.createElement(i.a,{icon:l.f,size:"lg",style:{margin:0,padding:0}})),o.a.createElement("a",{className:"socialLink",variant:"primary",style:s.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/sydneyhandsanitiser/",alt:"Instagram"},o.a.createElement(i.a,{icon:l.i,size:"lg",style:{margin:0,padding:0}})))},e}(a.Component);e.default=c},IP2g:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r("7O5W"),a=r("17x9"),o=r.n(a),i=r("q1tI"),l=r.n(i);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function y(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}function m(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=b(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{})}var d=!1;try{d=!0}catch(v){}function g(t){return n.parse.icon?n.parse.icon(t):null===t?null:"object"===s(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function O(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?c({},t,e):{}}function h(t){var e=t.forwardedRef,r=p(t,["forwardedRef"]),a=r.icon,o=r.mask,i=r.symbol,l=r.className,s=r.title,f=r.titleId,b=g(a),m=O("classes",[].concat(y(function(t){var e,r=t.spin,n=t.pulse,a=t.fixedWidth,o=t.inverse,i=t.border,l=t.listItem,s=t.flip,f=t.size,u=t.rotation,p=t.pull,y=(c(e={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===s||"both"===s,"fa-flip-vertical":"vertical"===s||"both"===s},"fa-".concat(f),null!=f),c(e,"fa-rotate-".concat(u),null!=u&&0!==u),c(e,"fa-pull-".concat(p),null!=p),c(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map((function(t){return y[t]?t:null})).filter((function(t){return t}))}(r)),y(l.split(" ")))),v=O("transform","string"==typeof r.transform?n.parse.transform(r.transform):r.transform),j=O("mask",g(o)),x=Object(n.icon)(b,u({},m,{},v,{},j,{symbol:i,title:s,titleId:f}));if(!x)return function(){var t;!d&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",b),null;var k=x.abstract,E={ref:e};return Object.keys(r).forEach((function(t){h.defaultProps.hasOwnProperty(t)||(E[t]=r[t])})),w(k[0],E)}h.displayName="FontAwesomeIcon",h.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},h.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var w=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=m(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[b(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=p(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},l),e.apply(void 0,[r.tag,u({},o.attrs,{},s)].concat(y(a)))}.bind(null,l.a.createElement)}}]);
//# sourceMappingURL=component---src-pages-components-social-links-js-de9fe7f1a15ddb095d3a.js.map