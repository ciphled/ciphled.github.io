(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IP2g:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("7O5W"),r=a("17x9"),o=a.n(r),i=a("q1tI"),l=a.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function d(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,n=t.indexOf(":"),r=m(t.slice(0,n)),o=t.slice(n+1).trim();return r.startsWith("webkit")?e[(a=r,a.charAt(0).toUpperCase()+a.slice(1))]=o:e[r]=o,e}),{})}var y=!1;try{y=!0}catch(x){}function v(e){return n.parse.icon?n.parse.icon(e):null===e?null:"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function g(e){var t=e.forwardedRef,a=p(e,["forwardedRef"]),r=a.icon,o=a.mask,i=a.symbol,l=a.className,c=a.title,u=a.titleId,m=v(r),d=O("classes",[].concat(b(function(e){var t,a=e.spin,n=e.pulse,r=e.fixedWidth,o=e.inverse,i=e.border,l=e.listItem,c=e.flip,u=e.size,f=e.rotation,p=e.pull,b=(s(t={"fa-spin":a,"fa-pulse":n,"fa-fw":r,"fa-inverse":o,"fa-border":i,"fa-li":l,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(u),null!=u),s(t,"fa-rotate-".concat(f),null!=f&&0!==f),s(t,"fa-pull-".concat(p),null!=p),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(b).map((function(e){return b[e]?e:null})).filter((function(e){return e}))}(a)),b(l.split(" ")))),x=O("transform","string"==typeof a.transform?n.parse.transform(a.transform):a.transform),h=O("mask",v(o)),E=Object(n.icon)(m,f({},d,{},x,{},h,{symbol:i,title:c,titleId:u}));if(!E)return function(){var e;!y&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var w=E.abstract,N={ref:t};return Object.keys(a).forEach((function(e){g.defaultProps.hasOwnProperty(e)||(N[e]=a[e])})),j(w[0],N)}g.displayName="FontAwesomeIcon",g.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([0,90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object]),swapOpacity:o.a.bool},g.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function e(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var r=(a.children||[]).map((function(a){return e(t,a)})),o=Object.keys(a.attributes||{}).reduce((function(e,t){var n=a.attributes[t];switch(t){case"class":e.attrs.className=n,delete a.attributes.class;break;case"style":e.attrs.style=d(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[m(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=p(n,["style"]);return o.attrs.style=f({},o.attrs.style,{},l),t.apply(void 0,[a.tag,f({},o.attrs,{},c)].concat(b(r)))}.bind(null,l.a.createElement)},Xsvt:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));var n=a("q1tI"),r=a.n(n),o=a("ziOx"),i=a("wx14"),l=a("zLVn"),c=a("TSYQ"),s=a.n(c),u=a("y8DL"),f=a("YdCC"),p=a("vUet"),b=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,c=Object(l.a)(e,["bsPrefix","className","as"]);a=Object(p.a)(a,"navbar-brand");var u=o||(c.href?"a":"span");return r.a.createElement(u,Object(i.a)({},c,{ref:t,className:s()(n,a)}))}));b.displayName="NavbarBrand";var m,d=b,y=a("7j6X"),v=a("dRu9"),O=a("wsUu"),g=a("Qg85"),j=a("z+q/"),x={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=x[e];return a+parseInt(Object(y.a)(t,n[0]),10)+parseInt(Object(y.a)(t,n[1]),10)}var E=((m={})[v.c]="collapse",m[v.d]="collapsing",m[v.b]="collapsing",m[v.a]="collapse show",m),w={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},N=r.a.forwardRef((function(e,t){var a=e.onEnter,o=e.onEntering,c=e.onEntered,u=e.onExit,f=e.onExiting,p=e.className,b=e.children,m=e.dimension,d=void 0===m?"height":m,y=e.getDimensionValue,x=void 0===y?h:y,w=Object(l.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),N="function"==typeof d?d():d,P=Object(n.useMemo)((function(){return Object(g.a)((function(e){e.style[N]="0"}),a)}),[N,a]),C=Object(n.useMemo)((function(){return Object(g.a)((function(e){var t="scroll"+N[0].toUpperCase()+N.slice(1);e.style[N]=e[t]+"px"}),o)}),[N,o]),k=Object(n.useMemo)((function(){return Object(g.a)((function(e){e.style[N]=null}),c)}),[N,c]),S=Object(n.useMemo)((function(){return Object(g.a)((function(e){e.style[N]=x(N,e)+"px",Object(j.a)(e)}),u)}),[u,x,N]),T=Object(n.useMemo)((function(){return Object(g.a)((function(e){e.style[N]=null}),f)}),[N,f]);return r.a.createElement(v.e,Object(i.a)({ref:t,addEndListener:O.a},w,{"aria-expanded":w.role?w.in:null,onEnter:P,onEntering:C,onEntered:k,onExit:S,onExiting:T}),(function(e,t){return r.a.cloneElement(b,Object(i.a)({},t,{className:s()(p,b.props.className,E[e],"width"===N&&"width")}))}))}));N.defaultProps=w;var P=N,C=a("qUpC"),k=r.a.forwardRef((function(e,t){var a=e.children,n=e.bsPrefix,o=Object(l.a)(e,["children","bsPrefix"]);return n=Object(p.a)(n,"navbar-collapse"),r.a.createElement(C.a.Consumer,null,(function(e){return r.a.createElement(P,Object(i.a)({in:!(!e||!e.expanded)},o),r.a.createElement("div",{ref:t,className:n},a))}))}));k.displayName="NavbarCollapse";var S=k,T=a("ZCiN"),I=r.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,c=e.children,u=e.label,f=e.as,b=void 0===f?"button":f,m=e.onClick,d=Object(l.a)(e,["bsPrefix","className","children","label","as","onClick"]);a=Object(p.a)(a,"navbar-toggler");var y=Object(n.useContext)(C.a)||{},v=y.onToggle,O=y.expanded,g=Object(T.a)((function(e){m&&m(e),v&&v()}));return"button"===b&&(d.type="button"),r.a.createElement(b,Object(i.a)({},d,{ref:t,onClick:g,"aria-label":u,className:s()(o,a,!O&&"collapsed")}),c||r.a.createElement("span",{className:a+"-icon"}))}));I.displayName="NavbarToggle",I.defaultProps={label:"Toggle navigation"};var A=I,z=a("ILyh"),R=Object(f.a)("navbar-text",{Component:"span"}),D=r.a.forwardRef((function(e,t){var a=Object(u.a)(e,{expanded:"onToggle"}),o=a.bsPrefix,c=a.expand,f=a.variant,b=a.bg,m=a.fixed,d=a.sticky,y=a.className,v=a.children,O=a.as,g=void 0===O?"nav":O,j=a.expanded,x=a.onToggle,h=a.onSelect,E=a.collapseOnSelect,w=Object(l.a)(a,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=Object(p.a)(o,"navbar"),P=Object(n.useCallback)((function(){h&&h.apply(void 0,arguments),E&&j&&x&&x(!1)}),[h,E,j,x]);void 0===w.role&&"nav"!==g&&(w.role="navigation");var k=N+"-expand";"string"==typeof c&&(k=k+"-"+c);var S=Object(n.useMemo)((function(){return{onToggle:function(){return x&&x(!j)},bsPrefix:N,expanded:!!j}}),[N,j,x]);return r.a.createElement(C.a.Provider,{value:S},r.a.createElement(z.a.Provider,{value:P},r.a.createElement(g,Object(i.a)({ref:t},w,{className:s()(y,N,c&&k,f&&N+"-"+f,b&&"bg-"+b,d&&"sticky-"+d,m&&"fixed-"+m)}),v)))}));D.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},D.displayName="Navbar",D.Brand=d,D.Toggle=A,D.Collapse=S,D.Text=R;var L=D,U=a("+YzT"),W=a("IP2g"),M=a("wHSu"),B=function(e){var t=e.children;return r.a.createElement("div",{style:{display:"flex",alignItems:"center",alignContent:"center",margin:0,padding:0}},r.a.createElement("h6",{style:{margin:"0px 10px",padding:0}},t))},q=function(){return r.a.createElement("div",{style:{margin:4}})};function V(e){var t=Object(n.useState)(!1),a=t[0],i=t[1],l=Object(n.useState)(!1),c=l[0],s=l[1],u=Object(n.useState)(!1),f=u[0],p=u[1],b=e.atBottom,m=e.atTop,d=Object(n.useState)(55),y=d[0],v=d[1];Object(n.useEffect)((function(){i(b)}),[b]),Object(n.useEffect)((function(){s(m)}),[m]);return Object(n.useEffect)((function(){v(f?185:55)}),[f]),r.a.createElement(L,{className:"richNavbar",variant:"dark",expand:"md",sticky:"top"},r.a.createElement(L.Brand,{href:"/"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",alignContent:"center",margin:0,padding:0}},r.a.createElement("h4",{className:"textTitle",style:{margin:0,padding:0,maxWidth:"100%"}},"Winton Nathan-Roberts"))),r.a.createElement(L.Toggle,{"aria-controls":"basic-navbar-nav",onClick:function(){p(!f)},style:{border:0}},r.a.createElement("div",{className:"menu",style:{display:"flex",justifyContent:"center",alignItems:"center"}},f&&r.a.createElement(W.a,{icon:M.o,size:"2x"}),!f&&r.a.createElement(W.a,{icon:M.a,size:"2x"}))),r.a.createElement(L.Collapse,{id:"basic-navbar-nav"},r.a.createElement(U.a,{className:"ml-auto",variant:"pills"},r.a.createElement(o.default,{className:c&&"active",activeClass:a?"inactive":"active",to:"aboutme",spy:!0,smooth:!0,offset:-y-30,duration:500},r.a.createElement(B,null,"About")),r.a.createElement(q,null),r.a.createElement(o.default,{activeClass:a?"inactive":"active",to:"portfolio",spy:!0,smooth:!0,offset:-y,duration:500},r.a.createElement(B,null,"Portfolio")),r.a.createElement(q,null),r.a.createElement(o.default,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-y,active:a,duration:500},r.a.createElement(B,null,"Contact")))))}}}]);
//# sourceMappingURL=component---src-pages-components-navbar-js-04ea36638e55e664f5b9.js.map