!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function l(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function u(e,n){if(o(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(e){return e.substring(2).toLowerCase()}function p(e,n){e.appendChild(n)}function v(e,n,t){i(t)?p(e,n):e.insertBefore(n,t)}function h(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function m(e,n,t){e.replaceChild(n,t)}function g(e,n){e.removeChild(n)}function y(e){for(var n=0;n<e.length;n++)e[n]()}function b(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function k(e,n){for(var t;e;){if(1521&(t=e.flags))return e.dom;e=b(e,n,t)}return null}function C(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&o(n)&&n()}))}function w(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var r=e[t];v(r.parent,r.dom,r.next)}e.splice(0,e.length)}function $(e,n,t){do{var r=e.flags;if(1521&r)return void(t&&e.dom.parentNode!==n||g(n,e.dom));var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)$(o[l],n,!1);return}e=o}}while(e)}function D(e,n){return function(){$(e,n,!0)}}function F(e,n,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,D(e,n)):$(e,n,!1)}function x(e,n,t,r,o,l,i,a){e.componentWillMove.push({dom:r,fn:function(){4&i?t.componentWillMove(n,o,r):8&i&&t.onComponentWillMove(n,o,r,a)},next:l,parent:o})}function A(e,n,r,l,i){var a,u,c=n.flags;do{var f=n.flags;if(1521&f)return void(t(a)||!o(a.componentWillMove)&&!o(a.onComponentWillMove)?v(r,n.dom,l):x(i,e,a,n.dom,r,l,c,u));var s=n.children;if(4&f)a=n.children,u=n.props,n=s.$LI;else if(8&f)a=n.ref,u=n.props,n=s;else if(8192&f){if(2!==n.childFlags){for(var d=0,p=s.length;d<p;++d)A(e,s[d],r,l,i);return}n=s}}while(n)}function P(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var S={componentComparator:null,createVNode:null,renderComplete:null};function W(e,n){e.textContent=n}function U(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function L(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function M(e,n){return!!o(e)&&(e(n),!0)}var V="$";function I(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function N(e,n,t,r,o,l,i,a){var u=void 0===o?1:o,c=new I(u,r,t,e,i,l,a,n);return 0===u&&q(c,c.children),c}function T(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return L(r,o)}function B(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return L(r,o)}function E(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function O(e,n,t,r,o){return new I(1,null,null,e=E(e,n),r,B(e,n,t),T(e,n,o),n)}function R(e,n){return new I(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function j(e,n,t){var r=N(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[R(e)],r.childFlags=4}return r}function H(e){var n=e.children,t=e.childFlags;return j(2===t?X(n):n.map(X),t,e.key)}function X(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new I(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return H(e)}function _(){return R("",null)}function K(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+V+a;if(e(f))K(f,o,0,s);else{if(n(f))f=R(f,s);else{var d=f.key,p=l(d)&&d[0]===V;(81920&f.flags||p)&&(f=X(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}o.push(f)}}}}function q(t,o){var a,u=1;if(r(o))a=o;else if(n(o))u=16,a=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){a=a||o.slice(0,f),K(o,a,f,"");break}if(n(s))(a=a||o.slice(0,f)).push(R(s,V+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=l(d)&&d[0]===V;p||v||h?(a=a||o.slice(0,f),(p||h)&&(s=X(s)),(v||h)&&(s.key=V+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=X(o)),u=2;return t.children=a,t.childFlags=u,t}function z(t){if(r(t)||n(t))return R(t,null);if(e(t))return j(t,0,null);return 16384&t.flags?X(t):t}var G="http://www.w3.org/1999/xlink",J="http://www.w3.org/XML/1998/namespace",Q={"xlink:actuate":G,"xlink:arcrole":G,"xlink:href":G,"xlink:role":G,"xlink:show":G,"xlink:title":G,"xlink:type":G,"xml:base":J,"xml:lang":J,"xml:space":J};function Y(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var Z=Y(0),ee=Y(null),ne=Y(!0);function te(e,n){var t=n.$EV;return t||(t=n.$EV=Y(null)),t[e]||1===++Z[e]&&(ee[e]=pe(e)),t}function re(e,n){var t=n.$EV;t&&t[e]&&(0===--Z[e]&&(document.removeEventListener(d(e),ee[e]),ee[e]=null),t[e]=null)}function oe(e,n,t,r){if(o(t))te(e,r)[e]=t;else if(c(t)){if(U(n,t))return;te(e,r)[e]=t}else re(e,r)}function le(e){return o(e.composedPath)?e.composedPath()[0]:e.target}function ie(e,n,t,r){var o=le(e);do{if(n&&o.disabled)return;var l=o.$EV;if(l){var a=l[t];if(a&&(r.dom=o,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function ae(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ue(){return this.defaultPrevented}function ce(){return this.cancelBubble}function fe(e){var n={dom:document};return e.isDefaultPrevented=ue,e.isPropagationStopped=ce,e.stopPropagation=ae,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function se(e){return function(n){if(0!==n.button)return void n.stopPropagation();ie(n,!0,e,fe(n))}}function de(e){return function(n){ie(n,!1,e,fe(n))}}function pe(e){var n="onClick"===e||"onDblClick"===e?se(e):de(e);return document.addEventListener(d(e),n),n}function ve(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function he(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function me(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(l(e))he(i,e,t);else for(var u=0;u<e.length;++u)he(i,e[u],t);if(o(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ge(e,n,t){var r="$"+n,l=e[r];if(l){if(l[1].wrapped)return;e.removeEventListener(l[0],l[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ye(e){return"checkbox"===e||"radio"===e}var be=me("onInput",$e),ke=me(["onClick","onChange"],$e);function Ce(e){e.stopPropagation()}function we(e,n){ye(n.type)?(ge(e,"change",ke),ge(e,"click",Ce)):ge(e,"input",be)}function $e(e,n){var r=e.type,o=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),ye(r)?(u&&(n.value=o),t(l)||(n.checked=l)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(l)||(n.checked=l)}function De(e,n){if("option"===e.type)Fe(e,n);else{var t=e.children,r=e.flags;if(4&r)De(t.$LI,n);else if(8&r)De(t,n);else if(2===e.childFlags)De(t,n);else if(12&e.childFlags)for(var o=0,l=t.length;o<l;++o)De(t[o],n)}}function Fe(n,r){var o=n.props||f,l=n.dom;l.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?l.selected=!0:t(r)&&t(o.selected)||(l.selected=o.selected||!1)}Ce.wrapped=!0;var xe=me("onChange",Pe);function Ae(e){ge(e,"change",xe)}function Pe(e,n,r,o){var l=Boolean(e.multiple);t(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==o.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),De(o,a)}}var Se,We,Ue=me("onInput",Ve),Le=me("onChange");function Me(e,n){ge(e,"input",Ue),n.onChange&&ge(e,"change",Le)}function Ve(e,n,r){var o=e.value,l=n.value;if(t(o)){if(r){var i=e.defaultValue;t(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==o&&(n.defaultValue=o,n.value=o)}function Ie(e,n,t,r,o,l){64&e?$e(r,t):256&e?Pe(r,t,o,n):128&e&&Ve(r,t,o),l&&(t.$V=n)}function Ne(e,n,t){64&e?we(n,t):256&e?Ae(n):128&e&&Me(n,t)}function Te(e){return e.type&&ye(e.type)?!t(e.checked):!t(e.value)}function Be(e){e&&!M(e,null)&&e.current&&(e.current=null)}function Ee(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){M(e,n)||void 0===e.current||(e.current=n)}))}function Oe(e,n,t){Re(e,t),F(e,n,t)}function Re(e,n){var r,l=e.flags,a=e.children;if(481&l){r=e.ref;var u=e.props;Be(r);var c=e.childFlags;if(!i(u))for(var d=Object.keys(u),p=0,v=d.length;p<v;p++){var h=d[p];ne[h]&&re(h,e.dom)}12&c?je(a,n):2===c&&Re(a,n)}else if(a)if(4&l){o(a.componentWillUnmount)&&a.componentWillUnmount();var m=n;o(a.componentWillDisappear)&&(m=new s,Ke(n,a,a.$LI.dom,l,void 0)),Be(e.ref),a.$UN=!0,Re(a.$LI,m)}else if(8&l){var g=n;if(!t(r=e.ref)){var y=null;o(r.onComponentWillUnmount)&&(y=k(e,!0),r.onComponentWillUnmount(y,e.props||f)),o(r.onComponentWillDisappear)&&(g=new s,Ke(n,r,y=y||k(e,!0),l,e.props))}Re(a,g)}else 1024&l?Oe(a,e.ref,n):8192&l&&12&e.childFlags&&je(a,n)}function je(e,n){for(var t=0,r=e.length;t<r;++t)Re(e[t],n)}function He(e,n){return function(){if(n)for(var t=0;t<e.length;t++)$(e[t],n,!1)}}function Xe(e,n,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,He(n,e)):e.textContent=""}function _e(e,n,t,r){je(t,r),8192&n.flags?F(n,e,r):Xe(e,t,r)}function Ke(e,n,t,r,o){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,o,e)}))}function qe(e){var n=e.event;return function(t){n(e.data,t)}}function ze(e,n,t,r){if(c(t)){if(U(n,t))return;t=qe(t)}ge(r,d(e),t)}function Ge(e,n,r){if(t(n))return void r.removeAttribute("style");var o,i,a=r.style;if(l(n))return void(a.cssText=n);if(t(e)||l(e))for(o in n)i=n[o],a.setProperty(o,i);else{for(o in n)(i=n[o])!==e[o]&&a.setProperty(o,i);for(o in e)t(n[o])&&a.removeProperty(o)}}function Je(e,n,r,o,l){var a=e&&e.__html||"",u=n&&n.__html||"";a!==u&&(t(u)||ve(o,u)||(i(r)||(12&r.childFlags?je(r.children,l):2===r.childFlags&&Re(r.children,l),r.children=null,r.childFlags=1),o.innerHTML=u))}function Qe(e,n,r,o,l,i,a,u){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===e)break;var c=t(r)?"":r;o[e]!==c&&(o[e]=c);break;case"style":Ge(n,r,o);break;case"dangerouslySetInnerHTML":Je(n,r,a,o,u);break;default:ne[e]?oe(e,n,r,o):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?ze(e,n,r,o):t(r)?o.removeAttribute(e):l&&Q[e]?o.setAttributeNS(Q[e],e,r):o.setAttribute(e,r)}}function Ye(e,n,t,r,o,l){var i=!1,a=(448&n)>0;for(var u in a&&(i=Te(t))&&Ne(n,r,t),t)Qe(u,null,t[u],r,o,i,null,l);a&&Ie(n,e,r,t,!0,i)}function Ze(e,n,t){var r=z(e.render(n,e.state,t)),l=t;return o(e.getChildContext)&&(l=a(t,e.getChildContext())),e.$CX=l,r}function en(e,n,t,r,l,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=l,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=P(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Ze(u,t,r),u}function nn(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function tn(e,n,t,r,o,l,i){var a=e.flags|=16384;481&a?an(e,n,t,r,o,l,i):4&a?cn(e,n,t,r,o,l,i):8&a?fn(e,n,t,r,o,l,i):16&a?ln(e,n,o):8192&a?on(e,t,n,r,o,l,i):1024&a&&rn(e,t,n,o,l,i)}function rn(e,n,t,r,o,l){tn(e.children,e.ref,n,!1,null,o,l);var i=_();ln(i,t,r),e.dom=i.dom}function on(e,n,t,r,o,l,i){var a=e.children,u=e.childFlags;12&u&&0===a.length&&(u=e.childFlags=2,a=e.children=_()),2===u?tn(a,t,n,r,o,l,i):un(a,t,n,r,o,l,i)}function ln(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||v(n,r,t)}function an(e,n,r,o,l,a,u){var c=e.flags,f=e.props,s=e.className,d=e.childFlags,p=e.dom=h(e.type,o=o||(32&c)>0),m=e.children;if(t(s)||""===s||(o?p.setAttribute("class",s):p.className=s),16===d)W(p,m);else if(1!==d){var g=o&&"foreignObject"!==e.type;2===d?(16384&m.flags&&(e.children=m=X(m)),tn(m,p,r,g,null,a,u)):8!==d&&4!==d||un(m,p,r,g,null,a,u)}i(n)||v(n,p,l),i(f)||Ye(e,c,f,p,o,u),Ee(e.ref,p,a)}function un(e,n,t,r,o,l,i){for(var a=0;a<e.length;++a){var u=e[a];16384&u.flags&&(e[a]=u=X(u)),tn(u,n,t,r,o,l,i)}}function cn(e,n,t,r,l,i,a){var u=en(e,e.type,e.props||f,t,r,i),c=a;o(u.componentDidAppear)&&(c=new s),tn(u.$LI,n,u.$CX,r,l,i,c),pn(e.ref,u,i,a)}function fn(e,n,r,l,i,a,u){var c=e.ref,f=u;!t(c)&&o(c.onComponentDidAppear)&&(f=new s),tn(e.children=z(nn(e,r)),n,r,l,i,a,f),hn(e,a,u)}function sn(e){return function(){e.componentDidMount()}}function dn(e,n,t,r,o){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,o)}))}function pn(e,n,t,r){Ee(e,n,t),o(n.componentDidMount)&&t.push(sn(n)),o(n.componentDidAppear)&&dn(r,n,n.$LI.dom,4,void 0)}function vn(e,n){return function(){e.onComponentDidMount(k(n,!0),n.props||f)}}function hn(e,n,r){var l=e.ref;t(l)||(M(l.onComponentWillMount,e.props||f),o(l.onComponentDidMount)&&n.push(vn(l,e)),o(l.onComponentDidAppear)&&dn(r,l,k(e,!0),8,e.props))}function mn(e,n,t,r,o,l,i){Re(e,i),0!==(n.flags&e.flags&1521)?(tn(n,null,r,o,null,l,i),m(t,n.dom,e.dom)):(tn(n,t,r,o,k(e,!0),l,i),F(e,t,i))}function gn(e,n,t,r,o,l,i,a){var u=n.flags|=16384;e.flags!==u||e.type!==n.type||e.key!==n.key||2048&u?16384&e.flags?mn(e,n,t,r,o,i,a):tn(n,t,r,o,l,i,a):481&u?wn(e,n,r,o,u,i,a):4&u?An(e,n,t,r,o,l,i,a):8&u?Pn(e,n,t,r,o,l,i,a):16&u?Sn(e,n):8192&u?kn(e,n,t,r,o,i,a):Cn(e,n,r,i,a)}function yn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:W(t,n))}function bn(e,n){e.textContent!==n&&(e.textContent=n)}function kn(e,n,t,r,o,l,i){var a=e.children,u=n.children,c=e.childFlags,f=n.childFlags,s=null;12&f&&0===u.length&&(f=n.childFlags=2,u=n.children=_());var d=0!==(2&f);if(12&c){var p=a.length;(8&c&&8&f||d||!d&&u.length>p)&&(s=k(a[p-1],!1).nextSibling)}Dn(c,f,a,u,t,r,o,s,e,l,i)}function Cn(e,n,t,o,l){var i=e.ref,a=n.ref,u=n.children;if(Dn(e.childFlags,n.childFlags,e.children,u,i,t,!1,null,e,o,l),n.dom=e.dom,i!==a&&!r(u)){var c=u.dom;g(i,c),p(a,c)}}function wn(e,n,r,o,l,i,a){var u,c=n.dom=e.dom,s=e.props,d=n.props,p=!1,v=!1;if(o=o||(32&l)>0,s!==d){var h=s||f;if((u=d||f)!==f)for(var m in(p=(448&l)>0)&&(v=Te(u)),u){var g=h[m],y=u[m];g!==y&&Qe(m,g,y,c,o,v,e,a)}if(h!==f)for(var b in h)t(u[b])&&!t(h[b])&&Qe(b,h[b],null,c,o,v,e,a)}var k=n.children,C=n.className;e.className!==C&&(t(C)?c.removeAttribute("class"):o?c.setAttribute("class",C):c.className=C),4096&l?bn(c,k):Dn(e.childFlags,n.childFlags,e.children,k,c,r,o&&"foreignObject"!==n.type,null,e,i,a),p&&Ie(l,n,c,u,!1,v);var w=n.ref,$=e.ref;$!==w&&(Be($),Ee(w,c,i))}function $n(e,n,t,r,o,l,i){Re(e,i),un(n,t,r,o,k(e,!0),l,i),F(e,t,i)}function Dn(e,n,t,r,o,l,i,a,u,c,f){switch(e){case 2:switch(n){case 2:gn(t,r,o,l,i,a,c,f);break;case 1:Oe(t,o,f);break;case 16:Re(t,f),W(o,r);break;default:$n(t,r,o,l,i,c,f)}break;case 1:switch(n){case 2:tn(r,o,l,i,a,c,f);break;case 1:break;case 16:W(o,r);break;default:un(r,o,l,i,a,c,f)}break;case 16:switch(n){case 16:yn(t,r,o);break;case 2:Xe(o,t,f),tn(r,o,l,i,a,c,f);break;case 1:Xe(o,t,f);break;default:Xe(o,t,f),un(r,o,l,i,a,c,f)}break;default:switch(n){case 16:je(t,f),W(o,r);break;case 2:_e(o,u,t,f),tn(r,o,l,i,a,c,f);break;case 1:_e(o,u,t,f);break;default:var s=0|t.length,d=0|r.length;0===s?d>0&&un(r,o,l,i,a,c,f):0===d?_e(o,u,t,f):8===n&&8===e?Un(t,r,o,l,i,s,d,a,u,c,f):Wn(t,r,o,l,i,s,d,a,c,f)}}}function Fn(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}function xn(e,n,t,r,l,i,u,c,f,s){var d=e.state,p=e.props,v=Boolean(e.$N),h=o(e.shouldComponentUpdate);if(v&&(n=P(e,t,n!==d?a(d,n):n)),u||!h||h&&e.shouldComponentUpdate(t,n,l)){!v&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,g=Ze(e,t,l);v&&o(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),gn(e.$LI,g,r,e.$CX,i,c,f,s),e.$LI=g,o(e.componentDidUpdate)&&Fn(e,p,d,m,f)}else e.props=t,e.state=n,e.context=l}function An(e,n,t,r,l,u,c,s){var d=n.children=e.children;if(i(d))return;d.$L=c;var p=n.props||f,v=n.ref,h=e.ref,m=d.state;if(!d.$N){if(o(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,r),d.$UN)return;d.$BR=!1}i(d.$PS)||(m=a(m,d.$PS),d.$PS=null)}xn(d,m,p,t,r,l,!1,u,c,s),h!==v&&(Be(h),Ee(v,d,c))}function Pn(e,n,r,l,i,a,u,c){var s=!0,d=n.props||f,p=n.ref,v=e.props,h=!t(p),m=e.children;if(h&&o(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),!1!==s){h&&o(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=z(nn(n,l));gn(m,g,r,l,i,a,u,c),n.children=g,h&&o(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else n.children=m}function Sn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function Wn(e,n,t,r,o,l,i,a,u,c){for(var f,s,d=l>i?i:l,p=0;p<d;++p)f=n[p],s=e[p],16384&f.flags&&(f=n[p]=X(f)),gn(s,f,t,r,o,a,u,c),e[p]=f;if(l<i)for(p=d;p<i;++p)16384&(f=n[p]).flags&&(f=n[p]=X(f)),tn(f,t,r,o,a,u,c);else if(l>i)for(p=d;p<l;++p)Oe(e[p],t,c)}function Un(e,n,t,r,o,l,i,a,u,c,f){var s,d,p=l-1,v=i-1,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=X(g)),gn(m,g,t,r,o,a,c,f),e[h]=g,++h>p||h>v)break e;m=e[h],g=n[h]}for(m=e[p],g=n[v];m.key===g.key;){if(16384&g.flags&&(n[v]=g=X(g)),gn(m,g,t,r,o,a,c,f),e[p]=g,v--,h>--p||h>v)break e;m=e[p],g=n[v]}}if(h>p){if(h<=v)for(d=(s=v+1)<i?k(n[s],!0):a;h<=v;)16384&(g=n[h]).flags&&(n[h]=g=X(g)),++h,tn(g,t,r,o,d,c,f)}else if(h>v)for(;h<=p;)Oe(e[h++],t,f);else Ln(e,n,r,l,i,p,v,h,t,o,a,u,c,f)}function Ln(e,n,t,r,o,l,i,a,u,c,f,s,d,p){var v,h,m=0,g=0,y=a,b=a,C=l-a+1,$=i-a+1,D=new Int32Array($+1),F=C===r,x=!1,P=0,S=0;if(o<4||(C|$)<32)for(g=y;g<=l;++g)if(v=e[g],S<$){for(a=b;a<=i;a++)if(h=n[a],v.key===h.key){if(D[a-b]=g+1,F)for(F=!1;y<g;)Oe(e[y++],u,p);P>a?x=!0:P=a,16384&h.flags&&(n[a]=h=X(h)),gn(v,h,u,t,c,f,d,p),++S;break}!F&&a>i&&Oe(v,u,p)}else F||Oe(v,u,p);else{var W={};for(g=b;g<=i;++g)W[n[g].key]=g;for(g=y;g<=l;++g)if(v=e[g],S<$)if(void 0!==(a=W[v.key])){if(F)for(F=!1;g>y;)Oe(e[y++],u,p);D[a-b]=g+1,P>a?x=!0:P=a,16384&(h=n[a]).flags&&(n[a]=h=X(h)),gn(v,h,u,t,c,f,d,p),++S}else F||Oe(v,u,p);else F||Oe(v,u,p)}if(F)_e(u,s,e,p),un(n,u,t,c,f,d,p);else if(x){var U=Vn(D);for(a=U.length-1,g=$-1;g>=0;g--)0===D[g]?(16384&(h=n[P=g+b]).flags&&(n[P]=h=X(h)),tn(h,u,t,c,(m=P+1)<o?k(n[m],!0):f,d,p)):a<0||g!==U[a]?A(s,h=n[P=g+b],u,(m=P+1)<o?k(n[m],!0):f,p):a--;p.componentWillMove.length>0&&w(p.componentWillMove)}else if(S!==$)for(g=$-1;g>=0;g--)0===D[g]&&(16384&(h=n[P=g+b]).flags&&(n[P]=h=X(h)),tn(h,u,t,c,(m=P+1)<o?k(n[m],!0):f,d,p))}var Mn=0;function Vn(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>Mn&&(Mn=u,Se=new Int32Array(u),We=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Se[o]]<n){We[t]=r,Se[++o]=t;continue}for(l=0,i=o;l<i;)e[Se[a=l+i>>1]]<n?l=a+1:i=a;n<e[Se[l]]&&(l>0&&(We[t]=Se[l-1]),Se[l]=t)}l=o+1;var c=new Int32Array(l);for(i=Se[l-1];l-- >0;)c[l]=i,i=We[i],Se[l]=0;return c}function In(e,n,r,l){var i=[],a=new s,u=n.$V;t(u)?t(e)||(16384&e.flags&&(e=X(e)),tn(e,n,l,!1,null,i,a),n.$V=e,u=e):t(e)?(Oe(u,n,a),n.$V=null):(16384&e.flags&&(e=X(e)),gn(u,e,n,l,!1,null,i,a),u=n.$V=e),y(i),C(a.componentDidAppear),o(r)&&r(),o(S.renderComplete)&&S.renderComplete(u,n)}function Nn(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),In(e,n,t,r)}function Tn(e){return N(1,"li","TreeLeaf",e.children,0,null,null,null)}function Bn(e,n){return e!==n}function En(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=O(2,En,{data:l},i,{onComponentShouldUpdate:Bn}):r[o]=O(2,Tn,{children:i},i,{onComponentShouldUpdate:Bn})}return N(1,"ul","TreeNode",r,0,null,null,null)}function On(e){return N(1,"div","Tree",O(2,En,{data:e.root},null,{onComponentShouldUpdate:Bn}),2,null,null,null)}function Rn(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return N(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function jn(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=O(2,Rn,{data:l},l.id,{onComponentShouldUpdate:Bn})}return N(1,"div","Anim",r,0,null,null,null)}function Hn(e,n){console.log("Clicked",e),n.stopPropagation()}function Xn(e){var n=e.children;return N(1,"td","TableCell",[null,!1,[n]],0,{onClick:u(n,Hn)},null,null)}function _n(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,o=r.length+1,l=new Array(o);l[0]=O(2,Xn,{children:"#"+n.id},null,{onComponentShouldUpdate:Bn});for(var i=1;i<o;i++)l[i]=O(2,Xn,{children:r[i-1]},null,{onComponentShouldUpdate:Bn});return N(1,"tr",t,[null,l,!1],0,{"data-id":n.id},null,null)}function Kn(e){for(var n=e.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=O(2,_n,{data:l,children:l},l.id,{onComponentShouldUpdate:Bn})}return N(1,"table","Table",[[],r,[[]]],0,null,null,null)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno (normalization test)","8.2.1"),document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,o;Nn(("table"===(o=(t=e).location)?r=Kn(t.table):"anim"===o?r=jn(t.anim):"tree"===o&&(r=On(t.tree)),N(1,"div","Main",r,0,null,null,null)),n)}),(function(e){Nn(N(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),n)}))}))}();
