// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.1-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-int32array@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gcopy@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";var j=8;function c(e,t,r){var n,s;for(s=0;s<j;s++)if(n=e(),g(n))throw new Error(E("0oh0r"));for(s=r-1;s>=0;s--)t[s]=e();return t}var v=l-1;function u(){return 0|m(1+v*Math.random())}var b=l-1|0,w=l-1|0,y=32,T=1,M=3,N=2,x=y+3,L=y+6,R=y+7,_=x+1,O=x+2;function P(e,t){var r;return r=t?"option":"argument",e.length<R+1?new RangeError(E("0oh7F",r)):e[0]!==T?new RangeError(E("0oh7G",r,T,e[0])):e[1]!==M?new RangeError(E("0oh7H",r,M,e[1])):e[N]!==y?new RangeError(E("0oh7O",r,y,e[N])):2!==e[x]?new RangeError(E("0oh7I",r,2,e[x])):e[L]!==e.length-R?new RangeError(E("0oh7J",r,e.length-R,e[L])):null}function S(g){var j,v,S,B,Y,A;if(S={},arguments.length){if(!s(g))throw new TypeError(E("0oh2V",g));if(n(g,"copy")&&(S.copy=g.copy,!o(g.copy)))throw new TypeError(E("0oh2o","copy",g.copy));if(n(g,"state")){if(v=g.state,S.state=!0,!f(v))throw new TypeError(E("0oh7K","state",v));if(A=P(v,!0))throw A;!1===S.copy?j=v:(j=new a(v.length),h(v.length,v,1,j,1)),v=new a(j.buffer,j.byteOffset+(N+1)*j.BYTES_PER_ELEMENT,y),B=new a(j.buffer,j.byteOffset+(L+1)*j.BYTES_PER_ELEMENT,v[L])}if(void 0===B)if(n(g,"seed"))if(B=g.seed,S.seed=!0,d(B)){if(B>w)throw new RangeError(E("0oh7L","seed",B));B|=0}else{if(!(i(B)&&B.length>0))throw new TypeError(E("0oh7M","seed",B));Y=B.length,(j=new a(R+Y))[0]=T,j[1]=M,j[N]=y,j[x]=2,j[O]=B[0],j[L]=Y,h.ndarray(Y,B,1,0,j,1,L+1),v=new a(j.buffer,j.byteOffset+(N+1)*j.BYTES_PER_ELEMENT,y),B=new a(j.buffer,j.byteOffset+(L+1)*j.BYTES_PER_ELEMENT,Y),v=c(K,v,y),j[_]=v[0]}else B=0|u()}else B=0|u();return void 0===v&&((j=new a(R+1))[0]=T,j[1]=M,j[N]=y,j[x]=2,j[O]=B,j[L]=1,j[L+1]=B,v=new a(j.buffer,j.byteOffset+(N+1)*j.BYTES_PER_ELEMENT,y),B=new a(j.buffer,j.byteOffset+(L+1)*j.BYTES_PER_ELEMENT,1),v=c(K,v,y),j[_]=v[0]),e(V,"NAME","minstd-shuffle"),t(V,"seed",I),t(V,"seedLength",J),r(V,"state",z,F),t(V,"stateLength",X),t(V,"byteLength",G),e(V,"toJSON",H),e(V,"MIN",1),e(V,"MAX",l-1),e(V,"normalized",k),e(k,"NAME",V.NAME),t(k,"seed",I),t(k,"seedLength",J),r(k,"state",z,F),t(k,"stateLength",X),t(k,"byteLength",G),e(k,"toJSON",H),e(k,"MIN",(V.MIN-1)/b),e(k,"MAX",(V.MAX-1)/b),V;function I(){var e=j[L];return h(e,B,1,new a(e),1)}function J(){return j[L]}function X(){return j.length}function G(){return j.byteLength}function z(){var e=j.length;return h(e,j,1,new a(e),1)}function F(e){var t;if(!f(e))throw new TypeError(E("0oh7N",e));if(t=P(e,!1))throw t;!1===S.copy?S.state&&e.length===j.length?h(e.length,e,1,j,1):(j=e,S.state=!0):(e.length!==j.length&&(j=new a(e.length)),h(e.length,e,1,j,1)),v=new a(j.buffer,j.byteOffset+(N+1)*j.BYTES_PER_ELEMENT,y),B=new a(j.buffer,j.byteOffset+(L+1)*j.BYTES_PER_ELEMENT,j[L])}function H(){var e={type:"PRNG"};return e.name=V.NAME,e.state=p(j),e.params=[],e}function K(){var e=0|j[O];return e=16807*e%l|0,j[O]=e,0|e}function V(){var e,t;return e=j[_],t=m(y*(e/l)),e=v[t],j[_]=e,v[t]=K(),e}function k(){return(V()-1)/b}}var B=S({seed:u()});e(B,"factory",S);export{B as default,S as factory};
//# sourceMappingURL=index.mjs.map
