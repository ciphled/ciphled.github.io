/*! For license information please see component---src-pages-components-social-links-js-52a6ceaf24409dc9024a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{FEZm:function(e,t,n){"use strict";n.r(t);var r=n("dI71"),a=n("q1tI"),i=n.n(a),o=n("cWnB"),c=n("IP2g"),s=n("8tEE"),l={center:{display:"flex",justifyContent:"center",alignItems:"center"},socialButton:{display:"flex",justifyContent:"center",alignItems:"center",padding:3,width:30,height:30,marginLeft:10,marginRight:10,borderRadius:100}},u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:l.center},i.a.createElement(o.a,{variant:"primary",style:l.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/winton-nathan-roberts/"},i.a.createElement(c.a,{color:"white",icon:s.i,size:"lg",style:{margin:0,padding:0}})),i.a.createElement(o.a,{variant:"primary",style:l.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/crypticdeluge/"},i.a.createElement(c.a,{color:"white",icon:s.c,size:"lg",style:{margin:0,padding:0}})),i.a.createElement(o.a,{variant:"primary",style:l.socialButton,target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/sydneyhandsanitiser/"},i.a.createElement(c.a,{color:"white",icon:s.f,size:"lg",style:{margin:0,padding:0}})))},t}(a.Component);t.default=u},Qg85:function(e,t,n){"use strict";n("E9XD");t.a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},cWnB:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=n("q1tI"),s=n.n(c),l=n("vUet"),u=n("dbZe"),f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,i=e.variant,c=e.size,f=e.active,p=e.className,d=e.block,y=e.type,v=e.as,b=Object(a.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(l.a)(n,"btn"),m=o()(p,h,f&&"active",i&&h+"-"+i,d&&h+"-block",c&&h+"-"+c);if(b.href)return s.a.createElement(u.a,Object(r.a)({},b,{as:v,ref:t,className:o()(m,b.disabled&&"disabled")}));t&&(b.ref=t),y?b.type=y:v||(b.type="button");var w=v||"button";return s.a.createElement(w,Object(r.a)({},b,{className:m}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),i=n("q1tI"),o=n.n(i),c=n("Qg85");function s(e){return!e||"#"===e.trim()}var l=o.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),p=function(e){var t=f.href,n=f.onClick;(l||s(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return s(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),l&&(f.tabIndex=-1,f["aria-disabled"]=!0),o.a.createElement(i,Object(r.a)({ref:t},f,{onClick:p,onKeyDown:Object(c.a)((function(e){" "===e.key&&(e.preventDefault(),p(e))}),u)}))}));l.displayName="SafeAnchor",t.a=l},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-components-social-links-js-52a6ceaf24409dc9024a.js.map