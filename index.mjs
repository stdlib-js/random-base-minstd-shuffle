// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int32array@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";var g=c;var b=function(e,t,n){var s,r;for(r=0;r<8;r++)if(s=e(),g(s))throw new Error("unexpected error. PRNG returned `NaN`.");for(r=n-1;r>=0;r--)t[r]=e();return t},E=m,j=h-1;var v=function(){return 0|E(1+j*Math.random())},y=e,w=t,x=n,N=s,T=r,M=i.isPrimitive,R=a,_=o.isPrimitive,L=d,O=l,A=m,P=f,S=h,B=p,Y=u,I=b,X=v,G=S-1|0,J=S-1|0;function V(e,t){var n;return n=t?"option":"argument",e.length<40?new RangeError(Y("invalid %s. `state` array has insufficient length.",n)):1!==e[0]?new RangeError(Y("invalid %s. `state` array has an incompatible schema version. Expected: %s. Actual: %s.",n,1,e[0])):3!==e[1]?new RangeError(Y("invalid %s. `state` array has an incompatible number of sections. Expected: %s. Actual: %s.",n,3,e[1])):32!==e[2]?new RangeError(Y("invalid %s. `state` array has an incompatible table length. Expected: %s. Actual: %s.",n,32,e[2])):2!==e[35]?new RangeError(Y("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",n,2,e[35])):e[38]!==e.length-39?new RangeError(Y("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",n,e.length-39,e[38])):null}var k=function(e){var t,n,s,r,i,a;if(s={},arguments.length){if(!T(e))throw new TypeError(Y("invalid argument. Options argument must be an object. Value: `%s`.",e));if(N(e,"copy")&&(s.copy=e.copy,!M(e.copy)))throw new TypeError(Y("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",e.copy));if(N(e,"state")){if(n=e.state,s.state=!0,!L(n))throw new TypeError(Y("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",n));if(a=V(n,!0))throw a;!1===s.copy?t=n:(t=new P(n.length),O(n.length,n,1,t,1)),n=new P(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,32),r=new P(t.buffer,t.byteOffset+39*t.BYTES_PER_ELEMENT,n[38])}if(void 0===r)if(N(e,"seed"))if(r=e.seed,s.seed=!0,_(r)){if(r>J)throw new RangeError(Y("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",r));r|=0}else{if(!(R(r)&&r.length>0))throw new TypeError(Y("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",r));i=r.length,(t=new P(39+i))[0]=1,t[1]=3,t[2]=32,t[35]=2,t[37]=r[0],t[38]=i,O.ndarray(i,r,1,0,t,1,39),n=new P(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,32),r=new P(t.buffer,t.byteOffset+39*t.BYTES_PER_ELEMENT,i),n=I(u,n,32),t[36]=n[0]}else r=0|X()}else r=0|X();return void 0===n&&((t=new P(40))[0]=1,t[1]=3,t[2]=32,t[35]=2,t[37]=r,t[38]=1,t[39]=r,n=new P(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,32),r=new P(t.buffer,t.byteOffset+39*t.BYTES_PER_ELEMENT,1),n=I(u,n,32),t[36]=n[0]),y(c,"NAME","minstd-shuffle"),w(c,"seed",o),w(c,"seedLength",d),x(c,"state",f,h),w(c,"stateLength",l),w(c,"byteLength",m),y(c,"toJSON",p),y(c,"MIN",1),y(c,"MAX",S-1),y(c,"normalized",g),y(g,"NAME",c.NAME),w(g,"seed",o),w(g,"seedLength",d),x(g,"state",f,h),w(g,"stateLength",l),w(g,"byteLength",m),y(g,"toJSON",p),y(g,"MIN",(c.MIN-1)/G),y(g,"MAX",(c.MAX-1)/G),c;function o(){var e=t[38];return O(e,r,1,new P(e),1)}function d(){return t[38]}function l(){return t.length}function m(){return t.byteLength}function f(){var e=t.length;return O(e,t,1,new P(e),1)}function h(e){var i;if(!L(e))throw new TypeError(Y("invalid argument. Must provide an Int32Array. Value: `%s`.",e));if(i=V(e,!1))throw i;!1===s.copy?s.state&&e.length===t.length?O(e.length,e,1,t,1):(t=e,s.state=!0):(e.length!==t.length&&(t=new P(e.length)),O(e.length,e,1,t,1)),n=new P(t.buffer,t.byteOffset+3*t.BYTES_PER_ELEMENT,32),r=new P(t.buffer,t.byteOffset+39*t.BYTES_PER_ELEMENT,t[38])}function p(){var e={type:"PRNG"};return e.name=c.NAME,e.state=B(t),e.params=[],e}function u(){var e=0|t[37];return e=16807*e%S|0,t[37]=e,0|e}function c(){var e,s;return e=t[36],s=A(e/S*32),e=n[s],t[36]=e,n[s]=u(),e}function g(){return(c()-1)/G}},z=k({seed:v()}),q=k;e(z,"factory",q);var C=z;export{C as default,q as factory};
//# sourceMappingURL=index.mjs.map
