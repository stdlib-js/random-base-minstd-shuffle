// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).minstd=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,y,s;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,e,t.get),s&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function s(r,e,t,n){l(r,e,{configurable:!1,enumerable:!1,get:t,set:n})}var h=Object.prototype.hasOwnProperty;function p(r,e){return null!=r&&h.call(r,e)}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return m&&"symbol"==typeof Symbol.toStringTag}var w=Object.prototype.toString;var b="function"==typeof Symbol?Symbol.toStringTag:"";var v=g()?function(r){var e,t,n;if(null==r)return w.call(r);t=r[b],e=p(r,b);try{r[b]=void 0}catch(e){return w.call(r)}return n=w.call(r),e?r[b]=t:delete r[b],n}:function(r){return w.call(r)};var E=Array.isArray?Array.isArray:function(r){return"[object Array]"===v(r)};function d(r){return"object"==typeof r&&null!==r&&!E(r)}var A=/./;function _(r){return"boolean"==typeof r}var T=Boolean.prototype.toString;var j=g();function x(r){return"object"==typeof r&&(r instanceof Boolean||(j?function(r){try{return T.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===v(r)))}function L(r){return _(r)||x(r)}function R(){return new Function("return this;")()}c(L,"isPrimitive",_),c(L,"isObject",x);var N="object"==typeof self?self:null,O="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},M="object"==typeof B?B:null;var S=function(r){if(arguments.length){if(!_(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return R()}if(N)return N;if(O)return O;if(M)return M;throw new Error("unexpected error. Unable to resolve global object.")}(),V=S.document&&S.document.childNodes,I=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var P=/^\s*function\s*([^(]*)/i;function C(r){return null!==r&&"object"==typeof r}function U(r){var e,t,n,o;if(("Object"===(t=v(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=P.exec(n.toString()))return e[1]}return C(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}c(k,"REGEXP",P),c(C,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!E(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(C));var F="function"==typeof A||"object"==typeof I||"function"==typeof V?function(r){return U(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?U(r).toLowerCase():e};function Y(r){return"function"===F(r)}var G,W=Object.getPrototypeOf;G=Y(Object.getPrototypeOf)?W:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===v(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var J=G;function X(r){return null==r?null:(r=Object(r),J(r))}var z=Object.prototype;function D(r){var e;return!!d(r)&&(!(e=X(r))||!p(r,"constructor")&&p(e,"constructor")&&Y(e.constructor)&&"[object Function]"===v(e.constructor)&&p(e,"isPrototypeOf")&&Y(e.isPrototypeOf)&&(e===z||function(r){var e;for(e in r)if(!p(r,e))return!1;return!0}(r)))}var H=Math.floor;function K(r){return H(r)===r}function Q(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&K(r.length)&&r.length>=0&&r.length<=9007199254740991}function q(r){return"number"==typeof r}var Z=Number,$=Z.prototype.toString;var rr=g();function er(r){return"object"==typeof r&&(r instanceof Z||(rr?function(r){try{return $.call(r),!0}catch(r){return!1}}(r):"[object Number]"===v(r)))}function tr(r){return q(r)||er(r)}c(tr,"isPrimitive",q),c(tr,"isObject",er);var nr=Number.POSITIVE_INFINITY,or=Z.NEGATIVE_INFINITY;function ir(r){return r<nr&&r>or&&K(r)}function ar(r){return q(r)&&ir(r)}function ur(r){return er(r)&&ir(r.valueOf())}function fr(r){return ar(r)||ur(r)}function lr(r){return ar(r)&&r>0}function cr(r){return ur(r)&&r.valueOf()>0}function yr(r){return lr(r)||cr(r)}c(fr,"isPrimitive",ar),c(fr,"isObject",ur),c(yr,"isPrimitive",lr),c(yr,"isObject",cr);var sr="function"==typeof Int32Array;function hr(r){return sr&&r instanceof Int32Array||"[object Int32Array]"===v(r)}function pr(r,e){return r[e]}function mr(r,e){return r.get(e)}function gr(r,e,t){r[e]=t}function wr(r,e,t){r.set(t,e)}function br(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?mr:pr,setter:e?wr:gr}}function vr(r,e,t,n,o,i,a){var u,f,l,c,y,s,h;for(u=e.data,f=o.data,c=e.getter,l=o.setter,y=n,s=a,h=0;h<r;h++)l(f,s,c(u,y)),y+=t,s+=i;return e}function Er(r,e,t,n,o){var i,a,u,f,l,c;if(r<=0)return n;if(u=br(e),f=br(n),u.accessors||f.accessors)return vr(r,u,t,i=t<0?(1-r)*t:0,f,o,a=o<0?(1-r)*o:0),f.data;if(1===t&&1===o){if((l=r%8)>0)for(c=0;c<l;c++)n[c]=e[c];if(r<8)return n;for(c=l;c<r;c+=8)n[c]=e[c],n[c+1]=e[c+1],n[c+2]=e[c+2],n[c+3]=e[c+3],n[c+4]=e[c+4],n[c+5]=e[c+5],n[c+6]=e[c+6],n[c+7]=e[c+7];return n}for(i=t<0?(1-r)*t:0,a=o<0?(1-r)*o:0,c=0;c<r;c++)n[a]=e[i],i+=t,a+=o;return n}c(Er,"ndarray",(function(r,e,t,n,o,i,a){var u,f,l,c,y,s;if(r<=0)return o;if(l=br(e),c=br(o),l.accessors||c.accessors)return vr(r,l,t,n,c,i,a),c.data;if(u=n,f=a,1===t&&1===i){if((y=r%8)>0)for(s=0;s<y;s++)o[f]=e[u],u+=t,f+=i;if(r<8)return o;for(s=y;s<r;s+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(s=0;s<r;s++)o[f]=e[u],u+=t,f+=i;return o}));var dr=2147483647,Ar="function"==typeof Int32Array?Int32Array:null;var _r="function"==typeof Int32Array?Int32Array:void 0;var Tr=function(){var r,e;if("function"!=typeof Ar)return!1;try{r=hr(e=new Ar([1,3.14,-3.14,2147483648]))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};function jr(){}var xr="foo"===jr.name;var Lr="function"==typeof Float64Array;var Rr="function"==typeof Float64Array?Float64Array:null;function Nr(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}var Or="function"==typeof Float64Array?Float64Array:void 0;var Br=Nr()?Or:function(){throw new Error("not implemented")},Mr="function"==typeof Int8Array;var Sr="function"==typeof Int8Array?Int8Array:null;var Vr="function"==typeof Int8Array?Int8Array:void 0;var Ir=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,128]),t=e,r=(Mr&&t instanceof Int8Array||"[object Int8Array]"===v(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")},kr="function"==typeof Uint8Array;var Pr="function"==typeof Uint8Array?Uint8Array:null;var Cr="function"==typeof Uint8Array?Uint8Array:void 0;var Ur=function(){var r,e,t;if("function"!=typeof Pr)return!1;try{e=new Pr(e=[1,3.14,-3.14,256,257]),t=e,r=(kr&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")},Fr="function"==typeof Uint8ClampedArray;var Yr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Gr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Wr=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Fr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===v(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")},Jr="function"==typeof Int16Array;var Xr="function"==typeof Int16Array?Int16Array:null;var zr="function"==typeof Int16Array?Int16Array:void 0;var Dr=function(){var r,e,t;if("function"!=typeof Xr)return!1;try{e=new Xr([1,3.14,-3.14,32768]),t=e,r=(Jr&&t instanceof Int16Array||"[object Int16Array]"===v(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?zr:function(){throw new Error("not implemented")},Hr="function"==typeof Uint16Array;var Kr="function"==typeof Uint16Array?Uint16Array:null;var Qr="function"==typeof Uint16Array?Uint16Array:void 0;var qr=function(){var r,e,t;if("function"!=typeof Kr)return!1;try{e=new Kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Hr&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Qr:function(){throw new Error("not implemented")},Zr="function"==typeof Uint32Array;var $r="function"==typeof Uint32Array?Uint32Array:null;var re="function"==typeof Uint32Array?Uint32Array:void 0;var ee=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Zr&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?re:function(){throw new Error("not implemented")},te="function"==typeof Float32Array;var ne="function"==typeof Float32Array?Float32Array:null;var oe="function"==typeof Float32Array?Float32Array:void 0;var ie=function(){var r,e,t;if("function"!=typeof ne)return!1;try{e=new ne([1,3.14,-3.14,5e40]),t=e,r=(te&&t instanceof Float32Array||"[object Float32Array]"===v(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===nr}catch(e){r=!1}return r}()?oe:function(){throw new Error("not implemented")},ae=[Br,ie,Tr,ee,Dr,qr,Ir,Ur,Wr],ue=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],fe=Nr()?X(Br):le;function le(){}function ce(r){return ar(r)&&r>=0}function ye(r){return ur(r)&&r.valueOf()>=0}function se(r){return ce(r)||ye(r)}fe="TypedArray"===function(r){if(!1===Y(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return xr?r.name:P.exec(r.toString())[1]}(fe)?fe:le,c(se,"isPrimitive",ce),c(se,"isObject",ye);function he(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&K(r.length)&&r.length>=0&&r.length<=4294967295}var pe="function"==typeof ArrayBuffer;function me(r){return pe&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===v(r)}function ge(r,e){if(!(this instanceof ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!q(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!q(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}c(ge,"BYTES_PER_ELEMENT",8),c(ge.prototype,"BYTES_PER_ELEMENT",8),c(ge.prototype,"byteLength",16),c(ge.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(ge.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var we="function"==typeof Math.fround?Math.fround:null,be=new ie(1);var ve="function"==typeof we?we:function(r){return be[0]=r,be[0]};function Ee(r,e){if(!(this instanceof Ee))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!q(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!q(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ve(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ve(e)}),this}function de(r){return r instanceof ge||r instanceof Ee||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ae(r){return K(r/2)}function _e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(Ee,"BYTES_PER_ELEMENT",4),c(Ee.prototype,"BYTES_PER_ELEMENT",4),c(Ee.prototype,"byteLength",8),c(Ee.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),c(Ee.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Te=_e()?Symbol.iterator:null;function je(r){return r.re}function xe(r){return r.im}function Le(r,e){return new ie(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Re(r,e){return new Br(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ne(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(he(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!de(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(je(n),xe(n))}return e}function Oe(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,he(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!de(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(je(i),xe(i))}return n}function Be(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!de(n=e[o]))return null;r[i]=je(n),r[i+1]=xe(n),i+=2}return r}var Me=2*ie.BYTES_PER_ELEMENT,Se=_e();function Ve(r){return r instanceof Ce||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ie(r){return r===Ce||"Complex128Array"===r.name}function ke(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Me}function Pe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Me}function Ce(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ce))return 0===e?new Ce:1===e?new Ce(arguments[0]):2===e?new Ce(arguments[0],arguments[1]):new Ce(arguments[0],arguments[1],arguments[2]);if(0===e)t=new ie(0);else if(1===e)if(ce(arguments[0]))t=new ie(2*arguments[0]);else if(Q(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&de(t[0])){if(null===(t=Be(new ie(2*n),t))){if(!Ae(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ie(arguments[0])}}else{if(ke(t))t=Le(t,0);else if(Pe(t))t=Re(t,0);else if(!Ae(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ie(t)}else if(me(arguments[0])){if(!K((t=arguments[0]).byteLength/Me))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Me+". Byte length: `"+t.byteLength+"`.");t=new ie(t)}else{if(!d(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Se)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Y(t[Te]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Y((t=t[Te]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ne(t))instanceof Error)throw t;t=new ie(t)}else{if(!me(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ce(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!K(r/Me))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Me+". Value: `"+r+"`.");if(2===e){if(!K((n=t.byteLength-r)/Me))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Me+". View byte length: `"+n+"`.");t=new ie(t,r)}else{if(!ce(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Me>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Me+"`.");t=new ie(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Ue(r){return r.re}function Fe(r){return r.im}function Ye(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(he(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!de(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Ue(n),Fe(n))}return e}function Ge(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,he(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!de(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Ue(i),Fe(i))}return n}function We(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!de(n=e[o]))return null;r[i]=Ue(n),r[i+1]=Fe(n),i+=2}return r}c(Ce,"BYTES_PER_ELEMENT",Me),c(Ce,"name","Complex64Array"),c(Ce,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Y(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Y(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Ve(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(de(l=n.call(e,r.get(c),c)))i[y]=je(l),i[y+1]=xe(l);else{if(!(he(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Q(r)){if(n){for(u=r.length,a=br(r),c=0;c<u;c++)if(!de(a.getter(r,c))){f=!0;break}if(f){if(!Ae(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(de(l=n.call(e,a.getter(r,c),c)))i[y]=je(l),i[y+1]=xe(l);else{if(!(he(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(d(r)&&Se&&Y(r[Te])){if(!Y((i=r[Te]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Oe(i,n,e):Ne(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Ce,"of",(function(){var r,e;if(!Y(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),y(Ce.prototype,"buffer",(function(){return this._buffer.buffer})),y(Ce.prototype,"byteLength",(function(){return this._buffer.byteLength})),y(Ce.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Ce.prototype,"BYTES_PER_ELEMENT",Ce.BYTES_PER_ELEMENT),c(Ce.prototype,"copyWithin",(function(r,e){if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Ce.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new Ee(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Te&&c(t,Te,(function(){return e.entries()})),t})),c(Ce.prototype,"get",(function(r){var e;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Ee((e=this._buffer)[r*=2],e[r+1])})),y(Ce.prototype,"length",(function(){return this._length})),c(Ce.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Ve(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(de(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=je(r),void(n[t+1]=xe(r))}if(Ve(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Me,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new ie(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Q(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!de(r[f])){i=!0;break}if(i){if(!Ae(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Me,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new ie(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=je(u),n[t+1]=xe(u),t+=2}}));var Je=2*Br.BYTES_PER_ELEMENT,Xe=_e();function ze(r){return r instanceof Qe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function De(r){return r===Qe||"Complex64Array"===r.name}function He(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Je/2}function Ke(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Je}function Qe(){var r,e,t,n;if(e=arguments.length,!(this instanceof Qe))return 0===e?new Qe:1===e?new Qe(arguments[0]):2===e?new Qe(arguments[0],arguments[1]):new Qe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Br(0);else if(1===e)if(ce(arguments[0]))t=new Br(2*arguments[0]);else if(Q(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&de(t[0])){if(null===(t=We(new Br(2*n),t))){if(!Ae(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Br(arguments[0])}}else{if(He(t))t=Le(t,0);else if(Ke(t))t=Re(t,0);else if(!Ae(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Br(t)}else if(me(arguments[0])){if(!K((t=arguments[0]).byteLength/Je))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Je+". Byte length: `"+t.byteLength+"`.");t=new Br(t)}else{if(!d(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Xe)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Y(t[Te]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!Y((t=t[Te]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Ye(t))instanceof Error)throw t;t=new Br(t)}else{if(!me(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!ce(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!K(r/Je))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Je+". Value: `"+r+"`.");if(2===e){if(!K((n=t.byteLength-r)/Je))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Je+". View byte length: `"+n+"`.");t=new Br(t,r)}else{if(!ce(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Je>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Je+"`.");t=new Br(t,r,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Qe,"BYTES_PER_ELEMENT",Je),c(Qe,"name","Complex128Array"),c(Qe,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!Y(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Y(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(ze(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(de(l=n.call(e,r.get(c),c)))i[y]=Ue(l),i[y+1]=Fe(l);else{if(!(he(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Q(r)){if(n){for(u=r.length,a=br(r),c=0;c<u;c++)if(!de(a.getter(r,c))){f=!0;break}if(f){if(!Ae(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(de(l=n.call(e,a.getter(r,c),c)))i[y]=Ue(l),i[y+1]=Fe(l);else{if(!(he(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(d(r)&&Xe&&Y(r[Te])){if(!Y((i=r[Te]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ge(i,n,e):Ye(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),c(Qe,"of",(function(){var r,e;if(!Y(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),y(Qe.prototype,"buffer",(function(){return this._buffer.buffer})),y(Qe.prototype,"byteLength",(function(){return this._buffer.byteLength})),y(Qe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Qe.prototype,"BYTES_PER_ELEMENT",Qe.BYTES_PER_ELEMENT),c(Qe.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),c(Qe.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new ge(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),c(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Te&&c(t,Te,(function(){return e.entries()})),t})),c(Qe.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ce(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new ge((e=this._buffer)[r*=2],e[r+1])})),y(Qe.prototype,"length",(function(){return this._length})),c(Qe.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ce(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(de(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ue(r),void(n[t+1]=Fe(r))}if(ze(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Br(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Q(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!de(r[f])){i=!0;break}if(i){if(!Ae(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Br(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ue(u),n[t+1]=Fe(u),t+=2}}));var qe=[Qe,Ce],Ze=["Complex64Array","Complex128Array"];function $e(r,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}var rt=[[Br,"Float64Array"],[ie,"Float32Array"],[Tr,"Int32Array"],[ee,"Uint32Array"],[Dr,"Int16Array"],[qr,"Uint16Array"],[Ir,"Int8Array"],[Ur,"Uint8Array"],[Wr,"Uint8ClampedArray"],[Ce,"Complex64Array"],[Qe,"Complex128Array"]];function et(r){var e,t;for(t=0;t<rt.length;t++)if($e(r,rt[t][0]))return rt[t][1];for(;r;){for(e=U(r),t=0;t<rt.length;t++)if(e===rt[t][1])return rt[t][1];r=X(r)}}function tt(r){var e,t,n;if(function(r){var e,t;if("object"!=typeof r||null===r)return!1;if(r instanceof fe)return!0;for(t=0;t<ae.length;t++)if(r instanceof ae[t])return!0;for(;r;){for(e=U(r),t=0;t<ue.length;t++)if(ue[t]===e)return!0;r=X(r)}return!1}(r))e=r;else{if(!function(r){var e,t;if("object"!=typeof r||null===r)return!1;for(t=0;t<qe.length;t++)if(r instanceof qe[t])return!0;for(;r;){for(e=U(r),t=0;t<Ze.length;t++)if(Ze[t]===e)return!0;r=X(r)}return!1}(r))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");e=8===r.BYTES_PER_ELEMENT?Le(r,0):Re(r,0)}for(t={type:et(r),data:[]},n=0;n<e.length;n++)t.data.push(e[n]);return t}function nt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function ot(r,e,t){var n,o,i;for(o=0;o<8;o++)if(n=r(),(i=n)!=i)throw new Error(nt("0oh0r,EQ"));for(o=t-1;o>=0;o--)e[o]=r();return e}function it(){return 0|H(1+2147483646*Math.random())}var at=2147483646,ut=2147483646,ft=32,lt=39;function ct(r,e){var t;return t=e?"option":"argument",r.length<40?new RangeError(nt("0oh7F,Ng",t)):1!==r[0]?new RangeError(nt("0oh7G,Nh",t,1,r[0])):3!==r[1]?new RangeError(nt("0oh7H,Ni",t,3,r[1])):r[2]!==ft?new RangeError(nt("0oh7O,Nj",t,ft,r[2])):2!==r[35]?new RangeError(nt("0oh7I,Nk",t,2,r[35])):r[38]!==r.length-lt?new RangeError(nt("0oh7J,Nl",t,r.length-lt,r[38])):null}function yt(r){var e,t,n,o,i,a;if(n={},arguments.length){if(!D(r))throw new TypeError(nt("0oh2V,FD",r));if(p(r,"copy")&&(n.copy=r.copy,!_(r.copy)))throw new TypeError(nt("0oh2o,GE","copy",r.copy));if(p(r,"state")){if(t=r.state,n.state=!0,!hr(t))throw new TypeError(nt("0oh7K,Nm","state",t));if(a=ct(t,!0))throw a;!1===n.copy?e=t:(e=new Tr(t.length),Er(t.length,t,1,e,1)),t=new Tr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,ft),o=new Tr(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,t[38])}if(void 0===o)if(p(r,"seed"))if(o=r.seed,n.seed=!0,lr(o)){if(o>ut)throw new RangeError(nt("0oh7L,Nn","seed",o));o|=0}else{if(!(Q(o)&&o.length>0))throw new TypeError(nt("0oh7M,No","seed",o));i=o.length,(e=new Tr(lt+i))[0]=1,e[1]=3,e[2]=ft,e[35]=2,e[37]=o[0],e[38]=i,Er.ndarray(i,o,1,0,e,1,39),t=new Tr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,ft),o=new Tr(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,i),t=ot(b,t,ft),e[36]=t[0]}else o=0|it()}else o=0|it();return void 0===t&&((e=new Tr(40))[0]=1,e[1]=3,e[2]=ft,e[35]=2,e[37]=o,e[38]=1,e[39]=o,t=new Tr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,ft),o=new Tr(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,1),t=ot(b,t,ft),e[36]=t[0]),c(v,"NAME","minstd-shuffle"),y(v,"seed",u),y(v,"seedLength",f),s(v,"state",m,g),y(v,"stateLength",l),y(v,"byteLength",h),c(v,"toJSON",w),c(v,"MIN",1),c(v,"MAX",2147483646),c(v,"normalized",E),c(E,"NAME",v.NAME),y(E,"seed",u),y(E,"seedLength",f),s(E,"state",m,g),y(E,"stateLength",l),y(E,"byteLength",h),c(E,"toJSON",w),c(E,"MIN",(v.MIN-1)/at),c(E,"MAX",(v.MAX-1)/at),v;function u(){var r=e[38];return Er(r,o,1,new Tr(r),1)}function f(){return e[38]}function l(){return e.length}function h(){return e.byteLength}function m(){var r=e.length;return Er(r,e,1,new Tr(r),1)}function g(r){var i;if(!hr(r))throw new TypeError(nt("0oh7N,Np",r));if(i=ct(r,!1))throw i;!1===n.copy?n.state&&r.length===e.length?Er(r.length,r,1,e,1):(e=r,n.state=!0):(r.length!==e.length&&(e=new Tr(r.length)),Er(r.length,r,1,e,1)),t=new Tr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,ft),o=new Tr(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,e[38])}function w(){var r={type:"PRNG"};return r.name=v.NAME,r.state=tt(e),r.params=[],r}function b(){var r=0|e[37];return r=16807*r%dr|0,e[37]=r,0|r}function v(){var r,n;return r=e[36],n=H(ft*(r/dr)),r=t[n],e[36]=r,t[n]=b(),r}function E(){return(v()-1)/at}}var st=yt({seed:it()});return c(st,"factory",yt),st}));
//# sourceMappingURL=browser.js.map
