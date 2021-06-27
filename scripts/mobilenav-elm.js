!function(r){"use strict";function n(r,n,e){return e.a=r,e.f=n,e}function t(e){return n(2,e,function(n){return function(r){return e(n,r)}})}function e(t){return n(3,t,function(e){return function(n){return function(r){return t(e,n,r)}}})}function u(u){return n(4,u,function(t){return function(e){return function(n){return function(r){return u(t,e,n,r)}}}})}function o(o){return n(5,o,function(u){return function(t){return function(e){return function(n){return function(r){return o(u,t,e,n,r)}}}}})}function l(r,n,e){return 2===r.a?r.f(n,e):r(n)(e)}function v(r,n,e,t){return 3===r.a?r.f(n,e,t):r(n)(e)(t)}function s(r,n,e,t,u){return 4===r.a?r.f(n,e,t,u):r(n)(e)(t)(u)}function a(r,n,e,t,u,o){return 5===r.a?r.f(n,e,t,u,o):r(n)(e)(t)(u)(o)}var d={$:0};function i(r,n){return{$:1,a:r,b:n}}var f=t(i);function b(r){for(var n=d,e=r.length;e--;)n={$:1,a:r[e],b:n};return n}var c=e(function(r,n,e){for(var t=Array(r),u=0;u<r;u++)t[u]=e(n+u);return t}),h=t(function(r,n){for(var e=Array(r),t=0;t<r&&n.b;t++)e[t]=n.a,n=n.b;return e.length=t,{a:e,b:n}});function g(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}function p(r,n,e){if("object"!=typeof r)return r===n?0:r<n?-1:1;if(void 0===r.$)return(e=p(r.a,n.a))||(e=p(r.b,n.b))?e:p(r.c,n.c);for(;r.b&&n.b&&!(e=p(r.a,n.a));r=r.b,n=n.b);return e||(r.b?1:n.b?-1:0)}var $=0;var m=Math.ceil,y=Math.floor,j=Math.log;var k=t(A);function A(r,n){switch(r.$){case 2:return r.b(n);case 5:return null===n?Lr(r.c):N("null",n);case 3:return w(n)?_(r.b,n,b):N("a LIST",n);case 4:return w(n)?_(r.b,n,C):N("an ARRAY",n);case 6:var e=r.d;if("object"!=typeof n||null===n||!(e in n))return N("an OBJECT with a field named `"+e+"`",n);var t=A(r.b,n[e]);return Hr(t)?t:wr(l(Nr,e,t.a));case 7:e=r.e;if(!w(n))return N("an ARRAY",n);if(n.length<=e)return N("a LONGER array. Need index "+e+" but only see "+n.length+" entries",n);t=A(r.b,n[e]);return Hr(t)?t:wr(l(Er,e,t.a));case 8:if("object"!=typeof n||null===n||w(n))return N("an OBJECT",n);var u,o=d;for(u in n)if(n.hasOwnProperty(u)){t=A(r.b,n[u]);if(!Hr(t))return wr(l(Nr,u,t.a));o={$:1,a:{a:u,b:t.a},b:o}}return Lr(zr(o));case 9:for(var a=r.f,i=r.g,f=0;f<i.length;f++){t=A(i[f],n);if(!Hr(t))return t;a=a(t.a)}return Lr(a);case 10:t=A(r.b,n);return Hr(t)?A(r.h(t.a),n):t;case 11:for(var c=d,v=r.g;v.b;v=v.b){t=A(v.a,n);if(Hr(t))return t;c={$:1,a:t.a,b:c}}return wr(Br(zr(c)));case 1:return wr(l(Cr,r.a,n));case 0:return Lr(r.a)}}function _(r,n,e){for(var t=n.length,u=Array(t),o=0;o<t;o++){var a=A(r,n[o]);if(!Hr(a))return wr(l(Er,o,a.a));u[o]=a.a}return Lr(e(u))}function w(r){return Array.isArray(r)||"undefined"!=typeof FileList&&r instanceof FileList}function C(n){return l(Ur,n.length,function(r){return n[r]})}function N(r,n){return wr(l(Cr,"Expecting "+r,n))}function E(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 2:return r.b===n.b;case 5:return r.c===n.c;case 3:case 4:case 8:return E(r.b,n.b);case 6:return r.d===n.d&&E(r.b,n.b);case 7:return r.e===n.e&&E(r.b,n.b);case 9:return r.f===n.f&&L(r.g,n.g);case 10:return r.h===n.h&&E(r.b,n.b);case 11:return L(r.g,n.g)}}function L(r,n){var e=r.length;if(e!==n.length)return!1;for(var t=0;t<e;t++)if(!E(r[t],n[t]))return!1;return!0}function B(r){return r}function S(r){return{$:0,a:r}}var z=t(function(r,n){return{$:3,b:r,d:n}});var F=0;function O(r){r={$:0,e:F++,f:r,g:null,h:[]};return R(r),r}function T(n){return{$:2,b:function(r){r({$:0,a:O(n)})},c:null}}function q(r,n){r.h.push(n),R(r)}var x=!1,M=[];function R(r){if(M.push(r),!x){for(x=!0;r=M.shift();)!function(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return n.f.c=n.f.b(function(r){n.f=r,R(n)});if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}(r);x=!1}}function D(r,n,e,t,u,o){n=l(k,r,n?n.flags:void 0);Hr(n)||g(2);var a={},n=e(n.a),i=n.a,f=o(c,i),o=function(r,n){var e,t;for(t in W){var u=W[t];u.a&&((e=e||{})[t]=u.a(t,n)),r[t]=function(r,n){var t={g:n,h:void 0},u=r.c,o=r.d,a=r.e,i=r.f;function f(e){return l(z,f,{$:5,b:function(r){var n=r.a;return 0===r.$?v(o,t,n,e):a&&i?s(u,t,n.i,n.j,e):v(u,t,a?n.i:n.j,e)}})}return t.h=O(l(z,f,r.b))}(u,n)}return e}(a,c);function c(r,n){r=l(t,r,i);f(i=r.a,n),K(a,r.b,u(i))}return K(a,n.b,u(i)),o?{ports:o}:{}}var W={};var G=t(function(n,e){return{$:2,b:function(r){n.g(e),r({$:0,a:$})},c:null}});function J(n){return function(r){return{$:1,k:n,l:r}}}function P(r){return{$:2,m:r}}var Y=[],I=!1;function K(r,n,e){if(Y.push({p:r,q:n,r:e}),!I){I=!0;for(var t;t=Y.shift();)!function(r,n,e){var t,u={};for(t in U(!0,n,u,null),U(!1,e,u,null),r)q(r[t],{$:"fx",a:u[t]||{i:d,j:d}})}(t.p,t.q,t.r);I=!1}}function U(r,n,e,t){switch(n.$){case 1:var u=n.k,o=function(r,n,e,t){function u(r){for(var n=e;n;n=n.t)r=n.s(r);return r}return l(r?W[n].e:W[n].f,u,t)}(r,u,t,n.l);return void(e[u]=function(r,n,e){return e=e||{i:d,j:d},r?e.i={$:1,a:n,b:e.i}:e.j={$:1,a:n,b:e.j},e}(r,o,e[u]));case 2:for(var a=n.m;a.b;a=a.b)U(r,a.a,e,t);return;case 3:return void U(r,n.o,e,{s:n.n,t:t})}}var H;var V="undefined"!=typeof document?document:{};function X(r){return{$:0,a:r}}var Z=t(function(o,a){return t(function(r,n){for(var e=[],t=0;n.b;n=n.b){var u=n.a;t+=u.b||0,e.push(u)}return t+=e.length,{$:1,c:a,d:er(r),e:e,f:o,b:t}})})(void 0);t(function(o,a){return t(function(r,n){for(var e=[],t=0;n.b;n=n.b){var u=n.a;t+=u.b.b||0,e.push(u)}return t+=e.length,{$:2,c:a,d:er(r),e:e,f:o,b:t}})})(void 0);var Q=t(function(r,n){return{$:"a2",n:r,o:n}}),rr=t(function(r,n){return{$:"a3",n:r,o:n}});var nr;function er(r){for(var n={};r.b;r=r.b){var e=r.a,t=e.$,u=e.n,o=e.o;"a2"!==t?(e=n[t]||(n[t]={}),"a3"===t&&"class"===u?tr(e,u,o):e[u]=o):"className"===u?tr(n,u,o):n[u]=o}return n}function tr(r,n,e){var t=r[n];r[n]=t?t+" "+e:e}function ur(r,n){var e=r.$;if(5===e)return ur(r.k||(r.k=r.m()),n);if(0===e)return V.createTextNode(r.a);if(4===e){for(var t=r.k,u=r.j;4===t.$;)"object"!=typeof u?u=[u,t.j]:u.push(t.j),t=t.k;var o={j:u,p:n};return(a=ur(t,o)).elm_event_node_ref=o,a}if(3===e)return or(a=r.h(r.g),n,r.d),a;var a=r.f?V.createElementNS(r.f,r.c):V.createElement(r.c);H&&"a"==r.c&&a.addEventListener("click",H(a)),or(a,n,r.d);for(var i=r.e,f=0;f<i.length;f++)a.appendChild(ur(1===e?i[f]:i[f].b,n));return a}function or(r,n,e){for(var t in e){var u=e[t];"a1"===t?function(r,n){var e,t=r.style;for(e in n)t[e]=n[e]}(r,u):"a0"===t?function(r,n,e){var t,u=r.elmFs||(r.elmFs={});for(t in e){var o=e[t],a=u[t];if(o){if(a){if(a.q.$===o.$){a.q=o;continue}r.removeEventListener(t,a)}a=function(f,r){function c(r){var n=c.q,e=A(n.a,r);if(Hr(e)){for(var t,u=Xr(n),n=e.a,o=u?u<3?n.a:n.o:n,e=1==u?n.b:3==u&&n.J,a=(e&&r.stopPropagation(),(2==u?n.b:3==u&&n.G)&&r.preventDefault(),f);t=a.j;){if("function"==typeof t)o=t(o);else for(var i=t.length;i--;)o=t[i](o);a=a.p}a(o,e)}}return c.q=r,c}(n,o),r.addEventListener(t,a,nr&&{passive:Xr(o)<2}),u[t]=a}else r.removeEventListener(t,a),u[t]=void 0}}(r,n,u):"a3"===t?function(r,n){for(var e in n){var t=n[e];void 0!==t?r.setAttribute(e,t):r.removeAttribute(e)}}(r,u):"a4"===t?function(r,n){for(var e in n){var t=n[e],u=t.f,t=t.o;void 0!==t?r.setAttributeNS(u,e,t):r.removeAttributeNS(u,e)}}(r,u):("value"!==t&&"checked"!==t||r[t]!==u)&&(r[t]=u)}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){nr=!0}}))}catch(r){}function ar(r,n){var e=[];return fr(r,n,e,0),e}function ir(r,n,e,t){t={$:n,r:e,s:t,t:void 0,u:void 0};return r.push(t),t}function fr(r,n,e,t){if(r!==n){var u=r.$,o=n.$;if(u!==o){if(1!==u||2!==o)return void ir(e,0,t,n);n=function(r){for(var n=r.e,e=n.length,t=Array(e),u=0;u<e;u++)t[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:t,f:r.f,b:r.b}}(n),o=1}switch(o){case 5:for(var a=r.l,i=n.l,f=a.length,c=f===i.length;c&&f--;)c=a[f]===i[f];if(c)return void(n.k=r.k);n.k=n.m();var v=[];return fr(r.k,n.k,v,0),void(0<v.length&&ir(e,1,t,v));case 4:for(var l=r.j,s=n.j,d=!1,b=r.k;4===b.$;)d=!0,"object"!=typeof l?l=[l,b.j]:l.push(b.j),b=b.k;for(var h=n.k;4===h.$;)d=!0,"object"!=typeof s?s=[s,h.j]:s.push(h.j),h=h.k;return d&&l.length!==s.length?void ir(e,0,t,n):((d?function(r,n){for(var e=0;e<r.length;e++)if(r[e]!==n[e])return!1;return!0}(l,s):l===s)||ir(e,2,t,s),void fr(b,h,e,t+1));case 0:return void(r.a!==n.a&&ir(e,3,t,n.a));case 1:return void cr(r,n,e,t,lr);case 2:return void cr(r,n,e,t,sr);case 3:if(r.h!==n.h)return void ir(e,0,t,n);v=vr(r.d,n.d);v&&ir(e,4,t,v);v=n.i(r.g,n.g);return void(v&&ir(e,5,t,v))}}}function cr(r,n,e,t,u){var o;r.c===n.c&&r.f===n.f?((o=vr(r.d,n.d))&&ir(e,4,t,o),u(r,n,e,t)):ir(e,0,t,n)}function vr(r,n,e){var t,u,o,a,i;for(u in r)"a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u?u in n?(o=r[u])===(a=n[u])&&"value"!==u&&"checked"!==u||"a0"===e&&function(r,n){return r.$==n.$&&E(r.a,n.a)}(o,a)||((t=t||{})[u]=a):(t=t||{})[u]=e?"a1"===e?"":"a0"===e||"a3"===e?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null:(a=vr(r[u],n[u]||{},u))&&((t=t||{})[u]=a);for(i in n)i in r||((t=t||{})[i]=n[i]);return t}function lr(r,n,e,t){var u=r.e,o=n.e,r=u.length,n=o.length;n<r?ir(e,6,t,{v:n,i:r-n}):r<n&&ir(e,7,t,{v:r,e:o});for(var a=r<n?r:n,i=0;i<a;i++){var f=u[i];fr(f,o[i],e,++t),t+=f.b||0}}function sr(r,n,e,t){for(var u=[],o={},a=[],i=r.e,f=n.e,c=i.length,v=f.length,l=0,s=0,d=t;l<c&&s<v;){var b=i[l],h=f[s],g=b.a,p=h.a,$=b.b,m=h.b,y=void 0,j=void 0;if(g!==p){var k,A,_,w,C=i[l+1],N=f[s+1];if(C&&(A=C.b,j=p===(k=C.a)),N&&(w=N.b,y=g===(_=N.a)),y&&j)fr($,w,u,++d),br(o,u,g,m,s,a),d+=$.b||0,hr(o,u,g,A,++d),d+=A.b||0,l+=2,s+=2;else if(y)d++,br(o,u,p,m,s,a),fr($,w,u,d),d+=$.b||0,l+=1,s+=2;else if(j)hr(o,u,g,$,++d),d+=$.b||0,fr(A,m,u,++d),d+=A.b||0,l+=2,s+=1;else{if(!C||k!==_)break;hr(o,u,g,$,++d),br(o,u,p,m,s,a),d+=$.b||0,fr(A,w,u,++d),d+=A.b||0,l+=2,s+=2}}else fr($,m,u,++d),d+=$.b||0,l++,s++}for(;l<c;){$=(b=i[l]).b;hr(o,u,b.a,$,++d),d+=$.b||0,l++}for(;s<v;){var E=E||[];br(o,u,(h=f[s]).a,h.b,void 0,E),s++}(0<u.length||0<a.length||E)&&ir(e,8,t,{w:u,x:a,y:E})}var dr="_elmW6BL";function br(r,n,e,t,u,o){var a=r[e];if(!a)return o.push({r:u,A:a={c:0,z:t,r:u,s:void 0}}),void(r[e]=a);if(1===a.c){o.push({r:u,A:a}),a.c=2;var i=[];return fr(a.z,t,i,a.r),a.r=u,void(a.s.s={w:i,A:a})}br(r,n,e+dr,t,u,o)}function hr(r,n,e,t,u){var o=r[e];if(o){if(0===o.c){o.c=2;var a=[];return fr(t,o.z,a,u),void ir(n,9,u,{w:a,A:o})}hr(r,n,e+dr,t,u)}else{n=ir(n,9,u,void 0);r[e]={c:1,z:t,r:u,s:n}}}function gr(r,n,e,t){!function r(n,e,t,u,o,a,i){var f=t[u];var c=f.r;for(;c===o;){var v,l=f.$;if(1===l?gr(n,e.k,f.s,i):8===l?(f.t=n,f.u=i,0<(v=f.s.w).length&&r(n,e,v,0,o,a,i)):9===l?(f.t=n,f.u=i,(l=f.s)&&(l.A.s=n,0<(v=l.w).length&&r(n,e,v,0,o,a,i))):(f.t=n,f.u=i),!(f=t[++u])||(c=f.r)>a)return u}var s=e.$;if(4===s){for(var d=e.k;4===d.$;)d=d.k;return r(n,d,t,u,o+1,a,n.elm_event_node_ref)}var b=e.e;var h=n.childNodes;for(var g=0;g<b.length;g++){var p=1===s?b[g]:b[g].b,$=++o+(p.b||0);if(o<=c&&c<=$&&(u=r(h[g],p,t,u,o,$,i),!(f=t[u])||(c=f.r)>a))return u;o=$}return u}(r,n,e,0,0,n.b,t)}function pr(r,n,e,t){return 0===e.length?r:(gr(r,n,e,t),$r(r,e))}function $r(r,n){for(var e=0;e<n.length;e++){var t=n[e],u=t.t,t=function(r,n){switch(n.$){case 0:return function(r,n,e){var t=r.parentNode,e=ur(n,e);e.elm_event_node_ref||(e.elm_event_node_ref=r.elm_event_node_ref);t&&e!==r&&t.replaceChild(e,r);return e}(r,n.s,n.u);case 4:return or(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return $r(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var e=n.s,t=0;t<e.i;t++)r.removeChild(r.childNodes[e.v]);return r;case 7:for(var u=(e=n.s).e,t=e.v,o=r.childNodes[t];t<u.length;t++)r.insertBefore(ur(u[t],n.u),o);return r;case 9:if(!(e=n.s))return r.parentNode.removeChild(r),r;var a=e.A;return void 0!==a.r&&r.parentNode.removeChild(r),a.s=$r(r,e.w),r;case 8:return function(r,n){var e=n.s,t=function(r,n){if(r){for(var e=V.createDocumentFragment(),t=0;t<r.length;t++){var u=r[t].A;e.appendChild(2===u.c?u.s:ur(u.z,n.u))}return e}}(e.y,n);r=$r(r,e.w);for(var u=e.x,o=0;o<u.length;o++){var a=u[o],i=a.A,i=2===i.c?i.s:ur(i.z,n.u);r.insertBefore(i,r.childNodes[a.r])}t&&r.appendChild(t);return r}(r,n);case 5:return n.s(r);default:g(10)}}(u,t);u===r&&(r=t)}return r}function mr(r){if(3===r.nodeType)return{$:0,a:r.textContent};if(1!==r.nodeType)return{$:0,a:""};for(var n=d,e=r.attributes,t=e.length;t--;)var u=e[t],n={$:1,a:l(rr,u.name,u.value),b:n};for(var o=r.tagName.toLowerCase(),a=d,i=r.childNodes,t=i.length;t--;)a={$:1,a:mr(i[t]),b:a};return v(Z,o,n,a)}var yr=u(function(n,r,e,a){return D(r,a,n.at,n.aB,n.az,function(e,r){var t=n.aC,u=a.node,o=mr(u);return kr(r,function(r){var n=t(r),r=ar(o,n);u=pr(u,o,r,e),o=n})})}),jr="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)};function kr(e,t){t(e);var u=0;function o(){u=1===u?0:(jr(o),t(e),1)}return function(r,n){e=r,n?(t(e),2===u&&(u=1)):(0===u&&jr(o),u=2)}}var Ar={addEventListener:function(){},removeEventListener:function(){}};var _r=f,wr=function(r){return{$:1,a:r}},Cr=t(function(r,n){return{$:3,a:r,b:n}}),Nr=t(function(r,n){return{$:0,a:r,b:n}}),Er=t(function(r,n){return{$:1,a:r,b:n}}),Lr=function(r){return{$:0,a:r}},Br=function(r){return{$:2,a:r}},Sr=e(function(r,n,e){for(;;){if(!e.b)return n;var t=e.b,u=r,o=l(r,e.a,n);r=u,n=o,e=t}}),zr=function(r){return v(Sr,_r,d,r)},Fr=u(function(r,n,e,t){return{$:0,a:r,b:n,c:e,d:t}}),Or=[],Tr=m,qr=t(function(r,n){return j(n)/j(r)}),xr=Tr(l(qr,2,32)),Mr=s(Fr,0,xr,Or,Or),Rr=c,Dr=y,Wr=function(r){return r.length},Gr=t(function(r,n){return 0<p(r,n)?r:n}),Jr=h,Pr=t(function(r,n){for(;;){var e=l(Jr,32,r),t=e.b,e=l(_r,{$:0,a:e.a},n);if(!t.b)return zr(e);r=t,n=e}}),Yr=t(function(r,n){for(;;){var e=Tr(n/32);if(1===e)return l(Jr,32,r).a;r=l(Pr,r,d),n=e}}),Ir=t(function(r,n){if(n.a){var e=32*n.a,t=Dr(l(qr,32,e-1)),r=r?zr(n.d):n.d,r=l(Yr,r,n.a);return s(Fr,Wr(n.c)+e,l(Gr,5,t*xr),r,n.c)}return s(Fr,Wr(n.c),xr,Or,n.c)}),Kr=o(function(r,n,e,t,u){for(;;){if(n<0)return l(Ir,!1,{d:t,a:e/32|0,c:u});var o={$:1,a:v(Rr,32,n,r)};r=r,n=n-32,e=e,t=l(_r,o,t),u=u}}),Ur=t(function(r,n){if(0<r){var e=r%32;return a(Kr,n,r-e-32,r,d,v(Rr,e,r-e,n))}return Mr}),Hr=function(r){return!r.$},Vr=function(r){return{$:0,a:r}},Xr=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Zr=S,Qr=Zr(0),rn=u(function(r,n,e,t){if(t.b){var u=t.a,o=t.b;if(o.b){var a=o.a,i=o.b;if(i.b){t=i.a,o=i.b;if(o.b){i=o.b;return l(r,u,l(r,a,l(r,t,l(r,o.a,500<e?v(Sr,r,n,zr(i)):s(rn,r,n,e+1,i)))))}return l(r,u,l(r,a,l(r,t,n)))}return l(r,u,l(r,a,n))}return l(r,u,n)}return n}),nn=e(function(r,n,e){return s(rn,r,n,0,e)}),en=t(function(e,r){return v(nn,t(function(r,n){return l(_r,e(r),n)}),d,r)}),tn=z,un=t(function(n,r){return l(tn,function(r){return Zr(n(r))},r)}),on=e(function(e,r,t){return l(tn,function(n){return l(tn,function(r){return Zr(l(e,n,r))},t)},r)}),an=G,fn=t(function(r,n){return T(l(tn,an(r),n))}),G=e(function(r,n,e){return l(un,function(r){return 0},(n=l(en,fn(r),n),v(nn,on(_r),Zr(d),n)))});W.Task={b:Qr,c:G,d:e(function(r,n,e){return Zr(0)}),e:t(function(r,n){return l(un,r,n)}),f:void 0};J("Task");function cn(r){return l(pn,"href",/^javascript:/i.test((r=r).replace(/\s/g,""))?"":r)}var vn,ln,sn=P(d),dn=P(d),G=t(function(r,n){return n}),bn=Z("a"),hn=t(function(r,n){return l(rr,function(r){return/^(on|formAction$)/i.test(r)?"data-"+r:r}(r),function(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}(n))}),gn=B,pn=t(function(r,n){return l(Q,r,gn(n))}),$n=pn("className"),mn=Z("div"),yn=pn("id"),jn=Z("nav"),kn=X,G=(vn={at:0,aB:G,aC:function(r){return l(mn,b([yn("sidecarNav")]),b([l(mn,b([$n("nav-wrapper sqs-frontend-overlay-editor-widget-host"),l(hn,"data-content-field","navigation-mobileNav"),yn("mobileNavWrapper")]),b([l(jn,b([yn("mobileNavigation")]),b([l(mn,b([$n("collection")]),b([l(bn,b([cn("/covid19")]),b([kn("COVID-19")]))])),l(mn,b([$n("folder")]),b([l(mn,b([$n("folder-toggle"),l(hn,"data-href","/folder")]),b([kn("About")])),l(mn,b([$n("subnav")]),b([l(mn,b([$n("collection")]),b([l(bn,b([cn("/meet-the-team-1")]),b([kn("Meet Our Team")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/history")]),b([kn("History")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/what-we-believe")]),b([kn("What We Believe")]))]))]))])),l(mn,b([$n("folder")]),b([l(mn,b([$n("folder-toggle"),l(hn,"data-href","/folder")]),b([kn("Join Us")])),l(mn,b([$n("subnav")]),b([l(mn,b([$n("collection")]),b([l(bn,b([cn("/englishservice")]),b([kn("Sunday Services")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/sunday-school")]),b([kn("Sunday School")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/english-calendar")]),b([kn("Calendar")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/englishupdates")]),b([kn("News and Updates")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("https://drive.google.com/drive/folders/1_cfpL4tmCzmzkm4oDtOhSXOF3uO7pBfK?usp=sharing")]),b([kn("E3C Connect")]))]))]))])),l(mn,b([$n("folder")]),b([l(mn,b([$n("folder-toggle"),l(hn,"data-href","/folder")]),b([kn("Community")])),l(mn,b([$n("subnav")]),b([l(mn,b([$n("collection")]),b([l(bn,b([cn("/adult-cell-groups")]),b([kn("Adult Cell Groups")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/iwg")]),b([kn("IWG")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/life-support")]),b([kn("Life Support")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/petros")]),b([kn("Petros")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/samuel")]),b([kn("Samuel")]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/eccc-kids")]),b([kn("ECCC Kids")]))]))]))])),l(mn,b([$n("folder")]),b([l(mn,b([$n("folder-toggle"),l(hn,"data-href","/folder")]),b([kn("Resources")])),l(mn,b([$n("subnav")]),b([l(mn,b([$n("collection")]),b([l(bn,b([cn("https://drive.google.com/drive/folders/13Yj9ck9_EMYKBtM-F6mx3aa-szyW0ZRS?usp=sharing")]),b([kn("Docs/Forms")]))]))]))])),l(mn,b([$n("collection")]),b([l(bn,b([cn("/give-now")]),b([kn("Give")]))]))]))]))]))}},yr({at:function(r){return{a:vn.at,b:sn}},az:function(r){return dn},aB:t(function(r,n){return{a:l(vn.aB,r,n),b:sn}}),aC:vn.aC}));ln={MobileNav:{init:G(Vr(0))(0)}},r.Elm?function r(n,e){for(var t in e)t in n?"init"==t?g(6):r(n[t],e[t]):n[t]=e[t]}(r.Elm,ln):r.Elm=ln}(this);