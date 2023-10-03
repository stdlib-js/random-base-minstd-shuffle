// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int32array@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.0-esm/index.mjs";function j(e,t,r){var n,s;for(s=0;s<8;s++)if(n=e(),g(n))throw new Error(E("0oh0r,EQ"));for(s=r-1;s>=0;s--)t[s]=e();return t}var c=l-1;function v(){return 0|m(1+c*Math.random())}var u=l-1|0,b=l-1|0;function w(e,t){var r;return r=t?"option":"argument",e.length<40?new RangeError(E("0oh7F,Ng",r)):1!==e[0]?new RangeError(E("0oh7G,Nh",r,1,e[0])):3!==e[1]?new RangeError(E("0oh7H,Ni",r,3,e[1])):32!==e[2]?new RangeError(E("0oh7O,Nj",r,32,e[2])):2!==e[35]?new RangeError(E("0oh7I,Nk",r,2,e[35])):e[38]!==e.length-39?new RangeError(E("0oh7J,Nl",r,e.length-39,e[38])):null}function y(g){var c,y,N,T,M,x;if(N={},arguments.length){if(!s(g))throw new TypeError(E("0oh2V,FD",g));if(n(g,"copy")&&(N.copy=g.copy,!o(g.copy)))throw new TypeError(E("0oh2o,GE","copy",g.copy));if(n(g,"state")){if(y=g.state,N.state=!0,!f(y))throw new TypeError(E("0oh7K,Nm","state",y));if(x=w(y,!0))throw x;!1===N.copy?c=y:(c=new a(y.length),h(y.length,y,1,c,1)),y=new a(c.buffer,c.byteOffset+3*c.BYTES_PER_ELEMENT,32),T=new a(c.buffer,c.byteOffset+39*c.BYTES_PER_ELEMENT,y[38])}if(void 0===T)if(n(g,"seed"))if(T=g.seed,N.seed=!0,d(T)){if(T>b)throw new RangeError(E("0oh7L,Nn","seed",T));T|=0}else{if(!(i(T)&&T.length>0))throw new TypeError(E("0oh7M,No","seed",T));M=T.length,(c=new a(39+M))[0]=1,c[1]=3,c[2]=32,c[35]=2,c[37]=T[0],c[38]=M,h.ndarray(M,T,1,0,c,1,39),y=new a(c.buffer,c.byteOffset+3*c.BYTES_PER_ELEMENT,32),T=new a(c.buffer,c.byteOffset+39*c.BYTES_PER_ELEMENT,M),y=j(Y,y,32),c[36]=y[0]}else T=0|v()}else T=0|v();return void 0===y&&((c=new a(40))[0]=1,c[1]=3,c[2]=32,c[35]=2,c[37]=T,c[38]=1,c[39]=T,y=new a(c.buffer,c.byteOffset+3*c.BYTES_PER_ELEMENT,32),T=new a(c.buffer,c.byteOffset+39*c.BYTES_PER_ELEMENT,1),y=j(Y,y,32),c[36]=y[0]),e(A,"NAME","minstd-shuffle"),t(A,"seed",L),t(A,"seedLength",R),r(A,"state",P,S),t(A,"stateLength",_),t(A,"byteLength",O),e(A,"toJSON",B),e(A,"MIN",1),e(A,"MAX",l-1),e(A,"normalized",I),e(I,"NAME",A.NAME),t(I,"seed",L),t(I,"seedLength",R),r(I,"state",P,S),t(I,"stateLength",_),t(I,"byteLength",O),e(I,"toJSON",B),e(I,"MIN",(A.MIN-1)/u),e(I,"MAX",(A.MAX-1)/u),A;function L(){var e=c[38];return h(e,T,1,new a(e),1)}function R(){return c[38]}function _(){return c.length}function O(){return c.byteLength}function P(){var e=c.length;return h(e,c,1,new a(e),1)}function S(e){var t;if(!f(e))throw new TypeError(E("0oh7N,Np",e));if(t=w(e,!1))throw t;!1===N.copy?N.state&&e.length===c.length?h(e.length,e,1,c,1):(c=e,N.state=!0):(e.length!==c.length&&(c=new a(e.length)),h(e.length,e,1,c,1)),y=new a(c.buffer,c.byteOffset+3*c.BYTES_PER_ELEMENT,32),T=new a(c.buffer,c.byteOffset+39*c.BYTES_PER_ELEMENT,c[38])}function B(){var e={type:"PRNG"};return e.name=A.NAME,e.state=p(c),e.params=[],e}function Y(){var e=0|c[37];return e=16807*e%l|0,c[37]=e,0|e}function A(){var e,t;return e=c[36],t=m(e/l*32),e=y[t],c[36]=e,y[t]=Y(),e}function I(){return(A()-1)/u}}var N=y({seed:v()});e(N,"factory",y);export{N as default,y as factory};
//# sourceMappingURL=index.mjs.map
