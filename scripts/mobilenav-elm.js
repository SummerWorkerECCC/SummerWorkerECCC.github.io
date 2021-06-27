!function(n){"use strict";function r(n,r,e){return e.a=n,e.f=r,e}function t(e){return r(2,e,function(r){return function(n){return e(r,n)}})}function e(t){return r(3,t,function(e){return function(r){return function(n){return t(e,r,n)}}})}function u(u){return r(4,u,function(t){return function(e){return function(r){return function(n){return u(t,e,r,n)}}}})}function a(a){return r(5,a,function(u){return function(t){return function(e){return function(r){return function(n){return a(u,t,e,r,n)}}}}})}function s(n,r,e){return 2===n.a?n.f(r,e):n(r)(e)}function v(n,r,e,t){return 3===n.a?n.f(r,e,t):n(r)(e)(t)}function l(n,r,e,t,u){return 4===n.a?n.f(r,e,t,u):n(r)(e)(t)(u)}function i(n,r,e,t,u,a){return 5===n.a?n.f(r,e,t,u,a):n(r)(e)(t)(u)(a)}var d={$:0};function o(n,r){return{$:1,a:n,b:r}}var f=t(o);function b(n){for(var r=d,e=n.length;e--;)r={$:1,a:n[e],b:r};return r}var c=e(function(n,r,e){for(var t=Array(n),u=0;u<n;u++)t[u]=e(r+u);return t}),h=t(function(n,r){for(var e=Array(n),t=0;t<n&&r.b;t++)e[t]=r.a,r=r.b;return e.length=t,{a:e,b:r}});function g(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function p(n,r,e){if("object"!=typeof n)return n===r?0:n<r?-1:1;if(void 0===n.$)return(e=p(n.a,r.a))||(e=p(n.b,r.b))?e:p(n.c,r.c);for(;n.b&&r.b&&!(e=p(n.a,r.a));n=n.b,r=r.b);return e||(n.b?1:r.b?-1:0)}var m=0;var $=Math.ceil,y=Math.floor,j=Math.log;var k=t(A);function A(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?Bn(n.c):N("null",r);case 3:return w(r)?_(n.b,r,b):N("a LIST",r);case 4:return w(r)?_(n.b,r,C):N("an ARRAY",r);case 6:var e=n.d;if("object"!=typeof r||null===r||!(e in r))return N("an OBJECT with a field named `"+e+"`",r);var t=A(n.b,r[e]);return Vn(t)?t:Cn(s(En,e,t.a));case 7:e=n.e;if(!w(r))return N("an ARRAY",r);if(r.length<=e)return N("a LONGER array. Need index "+e+" but only see "+r.length+" entries",r);t=A(n.b,r[e]);return Vn(t)?t:Cn(s(Ln,e,t.a));case 8:if("object"!=typeof r||null===r||w(r))return N("an OBJECT",r);var u,a=d;for(u in r)if(r.hasOwnProperty(u)){t=A(n.b,r[u]);if(!Vn(t))return Cn(s(En,u,t.a));a={$:1,a:{a:u,b:t.a},b:a}}return Bn(xn(a));case 9:for(var i=n.f,o=n.g,f=0;f<o.length;f++){t=A(o[f],r);if(!Vn(t))return t;i=i(t.a)}return Bn(i);case 10:t=A(n.b,r);return Vn(t)?A(n.h(t.a),r):t;case 11:for(var c=d,v=n.g;v.b;v=v.b){t=A(v.a,r);if(Vn(t))return t;c={$:1,a:t.a,b:c}}return Cn(Sn(xn(c)));case 1:return Cn(s(Nn,n.a,r));case 0:return Bn(n.a)}}function _(n,r,e){for(var t=r.length,u=Array(t),a=0;a<t;a++){var i=A(n,r[a]);if(!Vn(i))return Cn(s(Ln,a,i.a));u[a]=i.a}return Bn(e(u))}function w(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function C(r){return s(Hn,r.length,function(n){return r[n]})}function N(n,r){return Cn(s(Nn,"Expecting "+n,r))}function E(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return E(n.b,r.b);case 6:return n.d===r.d&&E(n.b,r.b);case 7:return n.e===r.e&&E(n.b,r.b);case 9:return n.f===r.f&&L(n.g,r.g);case 10:return n.h===r.h&&E(n.b,r.b);case 11:return L(n.g,r.g)}}function L(n,r){var e=n.length;if(e!==r.length)return!1;for(var t=0;t<e;t++)if(!E(n[t],r[t]))return!1;return!0}function B(n){return n}function S(n){return{$:0,a:n}}var z=t(function(n,r){return{$:3,b:n,d:r}});var x=0;function F(n){n={$:0,e:x++,f:n,g:null,h:[]};return M(n),n}function O(r){return{$:2,b:function(n){n({$:0,a:F(r)})},c:null}}function T(n,r){n.h.push(r),M(n)}var q=!1,R=[];function M(n){if(R.push(n),!q){for(q=!0;n=R.shift();)!function(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return r.f.c=r.f.b(function(n){r.f=n,M(r)});if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}(n);q=!1}}function D(n,r,e,t,u,a){r=s(k,n,r?r.flags:void 0);Vn(r)||g(2);var i={},r=e(r.a),o=r.a,f=a(c,o),a=function(n,r){var e,t;for(t in W){var u=W[t];u.a&&((e=e||{})[t]=u.a(t,r)),n[t]=function(n,r){var t={g:r,h:void 0},u=n.c,a=n.d,i=n.e,o=n.f;function f(e){return s(z,f,{$:5,b:function(n){var r=n.a;return 0===n.$?v(a,t,r,e):i&&o?l(u,t,r.i,r.j,e):v(u,t,i?r.i:r.j,e)}})}return t.h=F(s(z,f,n.b))}(u,r)}return e}(i,c);function c(n,r){n=s(t,n,o);f(o=n.a,r),K(i,n.b,u(o))}return K(i,r.b,u(o)),a?{ports:a}:{}}var W={};var G=t(function(r,e){return{$:2,b:function(n){r.g(e),n({$:0,a:m})},c:null}});function J(r){return function(n){return{$:1,k:r,l:n}}}function P(n){return{$:2,m:n}}var Y=[],I=!1;function K(n,r,e){if(Y.push({p:n,q:r,r:e}),!I){I=!0;for(var t;t=Y.shift();)!function(n,r,e){var t,u={};for(t in U(!0,r,u,null),U(!1,e,u,null),n)T(n[t],{$:"fx",a:u[t]||{i:d,j:d}})}(t.p,t.q,t.r);I=!1}}function U(n,r,e,t){switch(r.$){case 1:var u=r.k,a=function(n,r,e,t){function u(n){for(var r=e;r;r=r.t)n=r.s(n);return n}return s(n?W[r].e:W[r].f,u,t)}(n,u,t,r.l);return void(e[u]=function(n,r,e){return e=e||{i:d,j:d},n?e.i={$:1,a:r,b:e.i}:e.j={$:1,a:r,b:e.j},e}(n,a,e[u]));case 2:for(var i=r.m;i.b;i=i.b)U(n,i.a,e,t);return;case 3:return void U(n,r.o,e,{s:r.n,t:t})}}var H;var V="undefined"!=typeof document?document:{};function X(n){return{$:0,a:n}}var Z=t(function(a,i){return t(function(n,r){for(var e=[],t=0;r.b;r=r.b){var u=r.a;t+=u.b||0,e.push(u)}return t+=e.length,{$:1,c:i,d:en(n),e:e,f:a,b:t}})})(void 0);t(function(a,i){return t(function(n,r){for(var e=[],t=0;r.b;r=r.b){var u=r.a;t+=u.b.b||0,e.push(u)}return t+=e.length,{$:2,c:i,d:en(n),e:e,f:a,b:t}})})(void 0);var Q=t(function(n,r){return{$:"a2",n:n,o:r}}),nn=t(function(n,r){return{$:"a3",n:n,o:r}});var rn;function en(n){for(var r={};n.b;n=n.b){var e=n.a,t=e.$,u=e.n,a=e.o;"a2"!==t?(e=r[t]||(r[t]={}),"a3"===t&&"class"===u?tn(e,u,a):e[u]=a):"className"===u?tn(r,u,a):r[u]=a}return r}function tn(n,r,e){var t=n[r];n[r]=t?t+" "+e:e}function un(n,r){var e=n.$;if(5===e)return un(n.k||(n.k=n.m()),r);if(0===e)return V.createTextNode(n.a);if(4===e){for(var t=n.k,u=n.j;4===t.$;)"object"!=typeof u?u=[u,t.j]:u.push(t.j),t=t.k;var a={j:u,p:r};return(i=un(t,a)).elm_event_node_ref=a,i}if(3===e)return an(i=n.h(n.g),r,n.d),i;var i=n.f?V.createElementNS(n.f,n.c):V.createElement(n.c);H&&"a"==n.c&&i.addEventListener("click",H(i)),an(i,r,n.d);for(var o=n.e,f=0;f<o.length;f++)i.appendChild(un(1===e?o[f]:o[f].b,r));return i}function an(n,r,e){for(var t in e){var u=e[t];"a1"===t?function(n,r){var e,t=n.style;for(e in r)t[e]=r[e]}(n,u):"a0"===t?function(n,r,e){var t,u=n.elmFs||(n.elmFs={});for(t in e){var a=e[t],i=u[t];if(a){if(i){if(i.q.$===a.$){i.q=a;continue}n.removeEventListener(t,i)}i=function(f,n){function c(n){var r=c.q,e=A(r.a,n);if(Vn(e)){for(var t,u=Zn(r),r=e.a,a=u?u<3?r.a:r.o:r,e=1==u?r.b:3==u&&r.J,i=(e&&n.stopPropagation(),(2==u?r.b:3==u&&r.G)&&n.preventDefault(),f);t=i.j;){if("function"==typeof t)a=t(a);else for(var o=t.length;o--;)a=t[o](a);i=i.p}i(a,e)}}return c.q=n,c}(r,a),n.addEventListener(t,i,rn&&{passive:Zn(a)<2}),u[t]=i}else n.removeEventListener(t,i),u[t]=void 0}}(n,r,u):"a3"===t?function(n,r){for(var e in r){var t=r[e];void 0!==t?n.setAttribute(e,t):n.removeAttribute(e)}}(n,u):"a4"===t?function(n,r){for(var e in r){var t=r[e],u=t.f,t=t.o;void 0!==t?n.setAttributeNS(u,e,t):n.removeAttributeNS(u,e)}}(n,u):("value"!==t&&"checked"!==t||n[t]!==u)&&(n[t]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){rn=!0}}))}catch(n){}function on(n,r){var e=[];return cn(n,r,e,0),e}function fn(n,r,e,t){t={$:r,r:e,s:t,t:void 0,u:void 0};return n.push(t),t}function cn(n,r,e,t){if(n!==r){var u=n.$,a=r.$;if(u!==a){if(1!==u||2!==a)return void fn(e,0,t,r);r=function(n){for(var r=n.e,e=r.length,t=Array(e),u=0;u<e;u++)t[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}(r),a=1}switch(a){case 5:for(var i=n.l,o=r.l,f=i.length,c=f===o.length;c&&f--;)c=i[f]===o[f];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return cn(n.k,r.k,v,0),void(0<v.length&&fn(e,1,t,v));case 4:for(var s=n.j,l=r.j,d=!1,b=n.k;4===b.$;)d=!0,"object"!=typeof s?s=[s,b.j]:s.push(b.j),b=b.k;for(var h=r.k;4===h.$;)d=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return d&&s.length!==l.length?void fn(e,0,t,r):((d?function(n,r){for(var e=0;e<n.length;e++)if(n[e]!==r[e])return!1;return!0}(s,l):s===l)||fn(e,2,t,l),void cn(b,h,e,t+1));case 0:return void(n.a!==r.a&&fn(e,3,t,r.a));case 1:return void vn(n,r,e,t,ln);case 2:return void vn(n,r,e,t,dn);case 3:if(n.h!==r.h)return void fn(e,0,t,r);v=sn(n.d,r.d);v&&fn(e,4,t,v);v=r.i(n.g,r.g);return void(v&&fn(e,5,t,v))}}}function vn(n,r,e,t,u){var a;n.c===r.c&&n.f===r.f?((a=sn(n.d,r.d))&&fn(e,4,t,a),u(n,r,e,t)):fn(e,0,t,r)}function sn(n,r,e){var t,u,a,i,o;for(u in n)"a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u?u in r?(a=n[u])===(i=r[u])&&"value"!==u&&"checked"!==u||"a0"===e&&function(n,r){return n.$==r.$&&E(n.a,r.a)}(a,i)||((t=t||{})[u]=i):(t=t||{})[u]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null:(i=sn(n[u],r[u]||{},u))&&((t=t||{})[u]=i);for(o in r)o in n||((t=t||{})[o]=r[o]);return t}function ln(n,r,e,t){var u=n.e,a=r.e,n=u.length,r=a.length;r<n?fn(e,6,t,{v:r,i:n-r}):n<r&&fn(e,7,t,{v:n,e:a});for(var i=n<r?n:r,o=0;o<i;o++){var f=u[o];cn(f,a[o],e,++t),t+=f.b||0}}function dn(n,r,e,t){for(var u=[],a={},i=[],o=n.e,f=r.e,c=o.length,v=f.length,s=0,l=0,d=t;s<c&&l<v;){var b=o[s],h=f[l],g=b.a,p=h.a,m=b.b,$=h.b,y=void 0,j=void 0;if(g!==p){var k,A,_,w,C=o[s+1],N=f[l+1];if(C&&(A=C.b,j=p===(k=C.a)),N&&(w=N.b,y=g===(_=N.a)),y&&j)cn(m,w,u,++d),hn(a,u,g,$,l,i),d+=m.b||0,gn(a,u,g,A,++d),d+=A.b||0,s+=2,l+=2;else if(y)d++,hn(a,u,p,$,l,i),cn(m,w,u,d),d+=m.b||0,s+=1,l+=2;else if(j)gn(a,u,g,m,++d),d+=m.b||0,cn(A,$,u,++d),d+=A.b||0,s+=2,l+=1;else{if(!C||k!==_)break;gn(a,u,g,m,++d),hn(a,u,p,$,l,i),d+=m.b||0,cn(A,w,u,++d),d+=A.b||0,s+=2,l+=2}}else cn(m,$,u,++d),d+=m.b||0,s++,l++}for(;s<c;){m=(b=o[s]).b;gn(a,u,b.a,m,++d),d+=m.b||0,s++}for(;l<v;){var E=E||[];hn(a,u,(h=f[l]).a,h.b,void 0,E),l++}(0<u.length||0<i.length||E)&&fn(e,8,t,{w:u,x:i,y:E})}var bn="_elmW6BL";function hn(n,r,e,t,u,a){var i=n[e];if(!i)return a.push({r:u,A:i={c:0,z:t,r:u,s:void 0}}),void(n[e]=i);if(1===i.c){a.push({r:u,A:i}),i.c=2;var o=[];return cn(i.z,t,o,i.r),i.r=u,void(i.s.s={w:o,A:i})}hn(n,r,e+bn,t,u,a)}function gn(n,r,e,t,u){var a=n[e];if(a){if(0===a.c){a.c=2;var i=[];return cn(t,a.z,i,u),void fn(r,9,u,{w:i,A:a})}gn(n,r,e+bn,t,u)}else{r=fn(r,9,u,void 0);n[e]={c:1,z:t,r:u,s:r}}}function pn(n,r,e,t){!function n(r,e,t,u,a,i,o){var f=t[u];var c=f.r;for(;c===a;){var v,s=f.$;if(1===s?pn(r,e.k,f.s,o):8===s?(f.t=r,f.u=o,0<(v=f.s.w).length&&n(r,e,v,0,a,i,o)):9===s?(f.t=r,f.u=o,(s=f.s)&&(s.A.s=r,0<(v=s.w).length&&n(r,e,v,0,a,i,o))):(f.t=r,f.u=o),!(f=t[++u])||(c=f.r)>i)return u}var l=e.$;if(4===l){for(var d=e.k;4===d.$;)d=d.k;return n(r,d,t,u,a+1,i,r.elm_event_node_ref)}var b=e.e;var h=r.childNodes;for(var g=0;g<b.length;g++){var p=1===l?b[g]:b[g].b,m=++a+(p.b||0);if(a<=c&&c<=m&&(u=n(h[g],p,t,u,a,m,o),!(f=t[u])||(c=f.r)>i))return u;a=m}return u}(n,r,e,0,0,r.b,t)}function mn(n,r,e,t){return 0===e.length?n:(pn(n,r,e,t),$n(n,e))}function $n(n,r){for(var e=0;e<r.length;e++){var t=r[e],u=t.t,t=function(n,r){switch(r.$){case 0:return function(n,r,e){var t=n.parentNode,e=un(r,e);e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref);t&&e!==n&&t.replaceChild(e,n);return e}(n,r.s,r.u);case 4:return an(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return $n(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var e=r.s,t=0;t<e.i;t++)n.removeChild(n.childNodes[e.v]);return n;case 7:for(var u=(e=r.s).e,t=e.v,a=n.childNodes[t];t<u.length;t++)n.insertBefore(un(u[t],r.u),a);return n;case 9:if(!(e=r.s))return n.parentNode.removeChild(n),n;var i=e.A;return void 0!==i.r&&n.parentNode.removeChild(n),i.s=$n(n,e.w),n;case 8:return function(n,r){var e=r.s,t=function(n,r){if(n){for(var e=V.createDocumentFragment(),t=0;t<n.length;t++){var u=n[t].A;e.appendChild(2===u.c?u.s:un(u.z,r.u))}return e}}(e.y,r);n=$n(n,e.w);for(var u=e.x,a=0;a<u.length;a++){var i=u[a],o=i.A,o=2===o.c?o.s:un(o.z,r.u);n.insertBefore(o,n.childNodes[i.r])}t&&n.appendChild(t);return n}(n,r);case 5:return r.s(n);default:g(10)}}(u,t);u===n&&(n=t)}return n}function yn(n){if(3===n.nodeType)return{$:0,a:n.textContent};if(1!==n.nodeType)return{$:0,a:""};for(var r=d,e=n.attributes,t=e.length;t--;)var u=e[t],r={$:1,a:s(nn,u.name,u.value),b:r};for(var a=n.tagName.toLowerCase(),i=d,o=n.childNodes,t=o.length;t--;)i={$:1,a:yn(o[t]),b:i};return v(Z,a,r,i)}var jn=u(function(r,n,e,i){return D(n,i,r.at,r.aB,r.az,function(e,n){var t=r.aC,u=i.node,a=yn(u);return An(n,function(n){var r=t(n),n=on(a,r);u=mn(u,a,n,e),a=r})})}),kn="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function An(e,t){t(e);var u=0;function a(){u=1===u?0:(kn(a),t(e),1)}return function(n,r){e=n,r?(t(e),2===u&&(u=1)):(0===u&&kn(a),u=2)}}var _n={addEventListener:function(){},removeEventListener:function(){}};var wn=f,Cn=function(n){return{$:1,a:n}},Nn=t(function(n,r){return{$:3,a:n,b:r}}),En=t(function(n,r){return{$:0,a:n,b:r}}),Ln=t(function(n,r){return{$:1,a:n,b:r}}),Bn=function(n){return{$:0,a:n}},Sn=function(n){return{$:2,a:n}},zn=e(function(n,r,e){for(;;){if(!e.b)return r;var t=e.b,u=n,a=s(n,e.a,r);n=u,r=a,e=t}}),xn=function(n){return v(zn,wn,d,n)},Fn=u(function(n,r,e,t){return{$:0,a:n,b:r,c:e,d:t}}),On=[],Tn=$,qn=t(function(n,r){return j(r)/j(n)}),Rn=Tn(s(qn,2,32)),Mn=l(Fn,0,Rn,On,On),Dn=c,Wn=y,Gn=function(n){return n.length},Jn=t(function(n,r){return 0<p(n,r)?n:r}),Pn=h,Yn=t(function(n,r){for(;;){var e=s(Pn,32,n),t=e.b,e=s(wn,{$:0,a:e.a},r);if(!t.b)return xn(e);n=t,r=e}}),In=t(function(n,r){for(;;){var e=Tn(r/32);if(1===e)return s(Pn,32,n).a;n=s(Yn,n,d),r=e}}),Kn=t(function(n,r){if(r.a){var e=32*r.a,t=Wn(s(qn,32,e-1)),n=n?xn(r.d):r.d,n=s(In,n,r.a);return l(Fn,Gn(r.c)+e,s(Jn,5,t*Rn),n,r.c)}return l(Fn,Gn(r.c),Rn,On,r.c)}),Un=a(function(n,r,e,t,u){for(;;){if(r<0)return s(Kn,!1,{d:t,a:e/32|0,c:u});var a={$:1,a:v(Dn,32,r,n)};n=n,r=r-32,e=e,t=s(wn,a,t),u=u}}),Hn=t(function(n,r){if(0<n){var e=n%32;return i(Un,r,n-e-32,n,d,v(Dn,e,n-e,r))}return Mn}),Vn=function(n){return!n.$},Xn=function(n){return{$:0,a:n}},Zn=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Qn=S,nr=Qn(0),rr=u(function(n,r,e,t){if(t.b){var u=t.a,a=t.b;if(a.b){var i=a.a,o=a.b;if(o.b){t=o.a,a=o.b;if(a.b){o=a.b;return s(n,u,s(n,i,s(n,t,s(n,a.a,500<e?v(zn,n,r,xn(o)):l(rr,n,r,e+1,o)))))}return s(n,u,s(n,i,s(n,t,r)))}return s(n,u,s(n,i,r))}return s(n,u,r)}return r}),er=e(function(n,r,e){return l(rr,n,r,0,e)}),tr=t(function(e,n){return v(er,t(function(n,r){return s(wn,e(n),r)}),d,n)}),ur=z,ar=t(function(r,n){return s(ur,function(n){return Qn(r(n))},n)}),ir=e(function(e,n,t){return s(ur,function(r){return s(ur,function(n){return Qn(s(e,r,n))},t)},n)}),or=G,fr=t(function(n,r){return O(s(ur,or(n),r))}),G=e(function(n,r,e){return s(ar,function(n){return 0},(r=s(tr,fr(n),r),v(er,ir(wn),Qn(d),r)))});W.Task={b:nr,c:G,d:e(function(n,r,e){return Qn(0)}),e:t(function(n,r){return s(ar,n,r)}),f:void 0};J("Task");function cr(n){return s(pr,"href",/^javascript:/i.test((n=n).replace(/\s/g,""))?"":n)}var vr,sr,lr=P(d),dr=P(d),G=t(function(n,r){return r}),br=Z("a"),hr=t(function(n,r){return s(nn,function(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}(n),function(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}(r))}),gr=B,pr=t(function(n,r){return s(Q,n,gr(r))}),mr=pr("className"),$r=Z("div"),yr=pr("id"),jr=Z("nav"),kr=X,G=(vr={at:0,aB:G,aC:function(n){return s($r,b([mr("nav-wrapper"),s(hr,"data-content-field","navigation-mainNav"),yr("mainNavWrapper")]),b([s(jr,b([mr("sqs-frontend-overlay-editor-widget-host"),s(hr,"data-content-field","navigation-mainNav"),yr("mainNavigation")]),b([s($r,b([mr("collection")]),b([s(br,b([cr("/covid19")]),b([kr("COVID-19")]))])),s($r,b([mr("folder")]),b([s($r,b([mr("folder-toggle"),s(hr,"data-href","/meet-the-team-1")]),b([kr("About")])),s($r,b([mr("subnav")]),b([s($r,b([mr("collection")]),b([s(br,b([cr("/meet-the-team-1")]),b([kr("Meet Our Team")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/history")]),b([kr("History")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/what-we-believe")]),b([kr("What We Believe")]))]))]))])),s($r,b([mr("folder")]),b([s($r,b([mr("folder-toggle"),s(hr,"data-href","/englishservice")]),b([kr("Join Us")])),s($r,b([mr("subnav")]),b([s($r,b([mr("collection")]),b([s(br,b([cr("/englishservice")]),b([kr("Sunday Services")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/sunday-school")]),b([kr("Sunday School")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/english-calendar")]),b([kr("Calendar")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/englishupdates")]),b([kr("News and Updates")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("https://drive.google.com/drive/folders/1_cfpL4tmCzmzkm4oDtOhSXOF3uO7pBfK?usp=sharing")]),b([kr("E3C Connect")]))]))]))])),s($r,b([mr("folder")]),b([s($r,b([mr("folder-toggle"),s(hr,"data-href","/english-index")]),b([kr("Community")])),s($r,b([mr("subnav")]),b([s($r,b([mr("collection")]),b([s(br,b([cr("/adult-cell-groups")]),b([kr("Adult Cell Groups")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/iwg")]),b([kr("IWG")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/life-support")]),b([kr("Life Support")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/petros")]),b([kr("Petros")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/samuel")]),b([kr("Samuel")]))])),s($r,b([mr("collection")]),b([s(br,b([cr("/eccc-kids")]),b([kr("ECCC Kids")]))]))]))])),s($r,b([s(hr,"class","folder")]),b([s($r,b([mr("folder-toggle"),s(hr,"data-href","/Resources")]),b([kr("Resources")])),s($r,b([mr("subnav")]),b([s($r,b([mr("collection")]),b([s(br,b([cr("https://drive.google.com/drive/folders/13Yj9ck9_EMYKBtM-F6mx3aa-szyW0ZRS?usp=sharing")]),b([kr("Docs/Forms      ")]))]))]))])),s($r,b([s(hr,"className","collection")]),b([s(br,b([cr("/give-now")]),b([kr("Give")]))]))]))]))}},jn({at:function(n){return{a:vr.at,b:lr}},az:function(n){return dr},aB:t(function(n,r){return{a:s(vr.aB,n,r),b:lr}}),aC:vr.aC}));sr={MobileNav:{init:G(Xn(0))(0)}},n.Elm?function n(r,e){for(var t in e)t in r?"init"==t?g(6):n(r[t],e[t]):r[t]=e[t]}(n.Elm,sr):n.Elm=sr}(this);