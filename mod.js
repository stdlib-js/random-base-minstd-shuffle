/// <reference types="./mod.d.ts" />
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,y=function(t,r,n){var e,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||c.call(t,r)?(e=t.__proto__,t.__proto__=o,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,n.get),p&&u&&u.call(t,r,n.set),t},p=e,v=y,s=(l=n()?p:v,l);var b=function(t,r,n){s(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})},d=b,A=l;var h=function(t,r,n){A(t,r,{configurable:!1,enumerable:!1,get:n})},m=h,g=l;var w=function(t,r,n,e){g(t,r,{configurable:!1,enumerable:!1,get:n,set:e})},E=w,j=Object.prototype.hasOwnProperty;var _=function(t,r){return null!=t&&j.call(t,r)};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return O&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,U=T;var N=function(t){return U.call(t)},P="function"==typeof Symbol?Symbol.toStringTag:"",S=_,M=P,F=T;var R=N,L=function(t){var r,n,e;if(null==t)return F.call(t);n=t[M],r=S(t,M);try{t[M]=void 0}catch(r){return F.call(t)}return e=F.call(t),r?t[M]=n:delete t[M],e},B=I()?L:R,x=B;var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)},V=C;var Y=function(t){return"object"==typeof t&&null!==t&&!V(t)},G=/./;var X=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var J=B,z=function(t){try{return k.call(t),!0}catch(t){return!1}},q=I();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(q?z(t):"[object Boolean]"===J(t)))},H=X,K=D;var Q=d,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",X),Q(W,"isObject",Z);var $=W;var tt="object"==typeof self?self:null,rt="object"==typeof window?window:null,nt=$.isPrimitive,et=function(){return new Function("return this;")()},ot=tt,it=rt,at="object"==typeof t?t:null;var ut=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return et()}if(ot)return ot;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ft=ut(),ct=ft.document&&ft.document.childNodes,lt=Int8Array,yt=G,pt=ct,vt=lt;var st=function(){return"function"==typeof yt||"object"==typeof vt||"function"==typeof pt};var bt=function(){return/^\s*function\s*([^(]*)/i},dt=bt;d(dt,"REGEXP",bt());var At=dt,ht=C;var mt=function(t){return null!==t&&"object"==typeof t};d(mt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var n,e;if(!ht(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(mt));var gt=mt;var wt=B,Et=At.REGEXP,jt=function(t){return gt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var _t=function(t){var r,n,e;if(("Object"===(n=wt(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=Et.exec(e.toString()))return r[1]}return jt(t)?"Buffer":n},Ot=_t,It=Ot;var Tt=function(t){var r;return null===t?"null":"object"===(r=typeof t)?It(t).toLowerCase():r},Ut=Ot;var Nt=Tt,Pt=function(t){return Ut(t).toLowerCase()},St=st()?Pt:Nt;var Mt=function(t){return"function"===St(t)},Ft=Object.getPrototypeOf;var Rt=function(t){return t.__proto__},Lt=B,Bt=Rt;var xt=function(t){var r=Bt(t);return r||null===r?r:"[object Function]"===Lt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ct=Ft,Vt=xt,Yt=Mt(Object.getPrototypeOf)?Ct:Vt;var Gt=function(t){return null==t?null:(t=Object(t),Yt(t))},Xt=Y,kt=Mt,Jt=Gt,zt=_,qt=B,Dt=Object.prototype;var Ht=function(t){var r;return!!Xt(t)&&(!(r=Jt(t))||!zt(t,"constructor")&&zt(r,"constructor")&&kt(r.constructor)&&"[object Function]"===qt(r.constructor)&&zt(r,"isPrototypeOf")&&kt(r.isPrototypeOf)&&(r===Dt||function(t){var r;for(r in t)if(!zt(t,r))return!1;return!0}(t)))},Kt=Ht,Qt=Math.floor,Wt=Qt;var Zt=function(t){return Wt(t)===t},$t=Zt;var tr=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&$t(t.length)&&t.length>=0&&t.length<=9007199254740991};var rr=function(t){return"number"==typeof t},nr=Number,er=nr.prototype.toString;var or=B,ir=nr,ar=function(t){try{return er.call(t),!0}catch(t){return!1}},ur=I();var fr=function(t){return"object"==typeof t&&(t instanceof ir||(ur?ar(t):"[object Number]"===or(t)))},cr=rr,lr=fr;var yr=d,pr=function(t){return cr(t)||lr(t)},vr=fr;yr(pr,"isPrimitive",rr),yr(pr,"isObject",vr);var sr=pr,br=Number.POSITIVE_INFINITY,dr=nr.NEGATIVE_INFINITY,Ar=br,hr=dr,mr=Zt;var gr=function(t){return t<Ar&&t>hr&&mr(t)},wr=sr.isPrimitive,Er=gr;var jr=function(t){return wr(t)&&Er(t)},_r=sr.isObject,Or=gr;var Ir=function(t){return _r(t)&&Or(t.valueOf())},Tr=jr,Ur=Ir;var Nr=d,Pr=function(t){return Tr(t)||Ur(t)},Sr=Ir;Nr(Pr,"isPrimitive",jr),Nr(Pr,"isObject",Sr);var Mr=Pr.isPrimitive;var Fr=function(t){return Mr(t)&&t>0},Rr=Pr.isObject;var Lr=function(t){return Rr(t)&&t.valueOf()>0},Br=Fr,xr=Lr;var Cr=d,Vr=function(t){return Br(t)||xr(t)},Yr=Lr;Cr(Vr,"isPrimitive",Fr),Cr(Vr,"isObject",Yr);var Gr=Vr,Xr=B,kr="function"==typeof Int32Array;var Jr=function(t){return kr&&t instanceof Int32Array||"[object Int32Array]"===Xr(t)};var zr=function(t,r,n,e,o){var i,a,u,f;if(t<=0)return e;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)e[f]=r[f];if(t<8)return e;for(f=u;f<t;f+=8)e[f]=r[f],e[f+1]=r[f+1],e[f+2]=r[f+2],e[f+3]=r[f+3],e[f+4]=r[f+4],e[f+5]=r[f+5],e[f+6]=r[f+6],e[f+7]=r[f+7];return e}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)e[a]=r[i],i+=n,a+=o;return e};d(zr,"ndarray",(function(t,r,n,e,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=e,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=r[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=r[u],o[f+1]=r[u+1],o[f+2]=r[u+2],o[f+3]=r[u+3],o[f+4]=r[u+4],o[f+5]=r[u+5],o[f+6]=r[u+6],o[f+7]=r[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=r[u],u+=n,f+=i;return o}));var qr=zr,Dr="function"==typeof Int32Array?Int32Array:null,Hr=Jr,Kr=Dr;var Qr="function"==typeof Int32Array?Int32Array:void 0,Wr=function(){throw new Error("not implemented")},Zr=function(){var t,r;if("function"!=typeof Kr)return!1;try{r=new Kr([1,3.14,-3.14,2147483648]),t=Hr(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){t=!1}return t}()?Qr:Wr;var $r=function(){};var tn=Mt,rn=At.REGEXP,nn=function(){return"foo"===$r.name}();var en=function(t){if(!1===tn(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return nn?t.name:rn.exec(t.toString())[1]},on=B,an="function"==typeof Float64Array;var un="function"==typeof Float64Array?Float64Array:null,fn=function(t){return an&&t instanceof Float64Array||"[object Float64Array]"===on(t)},cn=un;var ln=function(){var t,r;if("function"!=typeof cn)return!1;try{r=new cn([1,3.14,-3.14,NaN]),t=fn(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var yn="function"==typeof Float64Array?Float64Array:void 0,pn=function(){throw new Error("not implemented")},vn=ln()?yn:pn,sn=B,bn="function"==typeof Int8Array;var dn="function"==typeof Int8Array?Int8Array:null,An=function(t){return bn&&t instanceof Int8Array||"[object Int8Array]"===sn(t)},hn=dn;var mn="function"==typeof Int8Array?Int8Array:void 0,gn=function(){throw new Error("not implemented")},wn=function(){var t,r;if("function"!=typeof hn)return!1;try{r=new hn([1,3.14,-3.14,128]),t=An(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){t=!1}return t}()?mn:gn,En=B,jn="function"==typeof Uint8Array;var _n="function"==typeof Uint8Array?Uint8Array:null,On=function(t){return jn&&t instanceof Uint8Array||"[object Uint8Array]"===En(t)},In=_n;var Tn="function"==typeof Uint8Array?Uint8Array:void 0,Un=function(){throw new Error("not implemented")},Nn=function(){var t,r;if("function"!=typeof In)return!1;try{r=new In(r=[1,3.14,-3.14,256,257]),t=On(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Tn:Un,Pn=B,Sn="function"==typeof Uint8ClampedArray;var Mn="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Fn=function(t){return Sn&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Pn(t)},Rn=Mn;var Ln="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Bn=function(){throw new Error("not implemented")},xn=function(){var t,r;if("function"!=typeof Rn)return!1;try{r=new Rn([-1,0,1,3.14,4.99,255,256]),t=Fn(r)&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){t=!1}return t}()?Ln:Bn,Cn=B,Vn="function"==typeof Int16Array;var Yn="function"==typeof Int16Array?Int16Array:null,Gn=function(t){return Vn&&t instanceof Int16Array||"[object Int16Array]"===Cn(t)},Xn=Yn;var kn="function"==typeof Int16Array?Int16Array:void 0,Jn=function(){throw new Error("not implemented")},zn=function(){var t,r;if("function"!=typeof Xn)return!1;try{r=new Xn([1,3.14,-3.14,32768]),t=Gn(r)&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){t=!1}return t}()?kn:Jn,qn=B,Dn="function"==typeof Uint16Array;var Hn="function"==typeof Uint16Array?Uint16Array:null,Kn=function(t){return Dn&&t instanceof Uint16Array||"[object Uint16Array]"===qn(t)},Qn=Hn;var Wn="function"==typeof Uint16Array?Uint16Array:void 0,Zn=function(){throw new Error("not implemented")},$n=function(){var t,r;if("function"!=typeof Qn)return!1;try{r=new Qn(r=[1,3.14,-3.14,65536,65537]),t=Kn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Wn:Zn,te=B,re="function"==typeof Uint32Array;var ne="function"==typeof Uint32Array?Uint32Array:null,ee=function(t){return re&&t instanceof Uint32Array||"[object Uint32Array]"===te(t)},oe=ne;var ie="function"==typeof Uint32Array?Uint32Array:void 0,ae=function(){throw new Error("not implemented")},ue=function(){var t,r;if("function"!=typeof oe)return!1;try{r=new oe(r=[1,3.14,-3.14,4294967296,4294967297]),t=ee(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ie:ae,fe=B,ce="function"==typeof Float32Array;var le="function"==typeof Float32Array?Float32Array:null,ye=function(t){return ce&&t instanceof Float32Array||"[object Float32Array]"===fe(t)},pe=br,ve=le;var se="function"==typeof Float32Array?Float32Array:void 0,be=function(){throw new Error("not implemented")},de=function(){var t,r;if("function"!=typeof ve)return!1;try{r=new ve([1,3.14,-3.14,5e40]),t=ye(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===pe}catch(r){t=!1}return t}()?se:be,Ae=Ot,he=en,me=Gt,ge=vn,we=[vn,de,Zr,ue,zn,$n,wn,Nn,xn],Ee=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],je=ln()?me(ge):_e;function _e(){}je="TypedArray"===he(je)?je:_e;var Oe=function(t,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return t instanceof r},Ie=Ot,Te=Gt,Ue=[[vn,"Float64Array"],[de,"Float32Array"],[Zr,"Int32Array"],[ue,"Uint32Array"],[zn,"Int16Array"],[$n,"Uint16Array"],[wn,"Int8Array"],[Nn,"Uint8Array"],[xn,"Uint8ClampedArray"]];var Ne=function(t){var r,n;if("object"!=typeof t||null===t)return!1;if(t instanceof je)return!0;for(n=0;n<we.length;n++)if(t instanceof we[n])return!0;for(;t;){for(r=Ae(t),n=0;n<Ee.length;n++)if(Ee[n]===r)return!0;t=me(t)}return!1},Pe=function(t){var r,n;for(n=0;n<Ue.length;n++)if(Oe(t,Ue[n][0]))return Ue[n][1];for(;t;){for(r=Ie(t),n=0;n<Ue.length;n++)if(r===Ue[n][1])return Ue[n][1];t=Te(t)}};var Se=function(t){return t!=t};var Me=Qt;var Fe=function(){return 0|Me(1+2147483646*Math.random())},Re=d,Le=m,Be=E,xe=_,Ce=Kt,Ve=$.isPrimitive,Ye=tr,Ge=Gr.isPrimitive,Xe=Jr,ke=qr,Je=Qt,ze=Zr,qe=function(t){var r,n;if(!Ne(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((r={}).type=Pe(t),r.data=[],n=0;n<t.length;n++)r.data.push(t[n]);return r},De=function(t,r,n){var e,o;for(o=0;o<8;o++)if(e=t(),Se(e))throw new Error("unexpected error. PRNG returned `NaN`.");for(o=n-1;o>=0;o--)r[o]=t();return r},He=Fe;function Ke(t,r){var n;return n=r?"option":"argument",t.length<40?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):32!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible table length. Expected: 32. Actual: "+t[2]+"."):2!==t[35]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+t[35]+"."):t[38]!==t.length-39?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-39)+". Actual: "+t[38]+"."):null}var Qe=function(t){var r,n,e,o,i,a;if(e={},arguments.length){if(!Ce(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(xe(t,"copy")&&(e.copy=t.copy,!Ve(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(xe(t,"state")){if(n=t.state,e.state=!0,!Xe(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=Ke(n,!0))throw a;!1===e.copy?r=n:(r=new ze(n.length),ke(n.length,n,1,r,1)),n=new ze(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,32),o=new ze(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,n[38])}if(void 0===o)if(xe(t,"seed"))if(o=t.seed,e.seed=!0,Ge(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Ye(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(r=new ze(39+i))[0]=1,r[1]=3,r[2]=32,r[35]=2,r[37]=o[0],r[38]=i,ke.ndarray(i,o,1,0,r,1,39),n=new ze(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,32),o=new ze(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,i),n=De(s,n,32),r[36]=n[0]}else o=0|He()}else o=0|He();return void 0===n&&((r=new ze(40))[0]=1,r[1]=3,r[2]=32,r[35]=2,r[37]=o,r[38]=1,r[39]=o,n=new ze(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,32),o=new ze(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,1),n=De(s,n,32),r[36]=n[0]),Re(b,"NAME","minstd-shuffle"),Le(b,"seed",u),Le(b,"seedLength",f),Be(b,"state",y,p),Le(b,"stateLength",c),Le(b,"byteLength",l),Re(b,"toJSON",v),Re(b,"MIN",1),Re(b,"MAX",2147483646),Re(b,"normalized",d),Re(d,"NAME",b.NAME),Le(d,"seed",u),Le(d,"seedLength",f),Be(d,"state",y,p),Le(d,"stateLength",c),Le(d,"byteLength",l),Re(d,"toJSON",v),Re(d,"MIN",(b.MIN-1)/2147483646),Re(d,"MAX",(b.MAX-1)/2147483646),b;function u(){var t=r[38];return ke(t,o,1,new ze(t),1)}function f(){return r[38]}function c(){return r.length}function l(){return r.byteLength}function y(){var t=r.length;return ke(t,r,1,new ze(t),1)}function p(t){var i;if(!Xe(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=Ke(t,!1))throw i;!1===e.copy?e.state&&t.length===r.length?ke(t.length,t,1,r,1):(r=t,e.state=!0):(t.length!==r.length&&(r=new ze(t.length)),ke(t.length,t,1,r,1)),n=new ze(r.buffer,r.byteOffset+3*r.BYTES_PER_ELEMENT,32),o=new ze(r.buffer,r.byteOffset+39*r.BYTES_PER_ELEMENT,r[38])}function v(){var t={type:"PRNG"};return t.name=b.NAME,t.state=qe(r),t.params=[],t}function s(){var t=0|r[37];return t=16807*t%2147483647|0,r[37]=t,0|t}function b(){var t,e;return t=r[36],e=Je(t/2147483647*32),t=n[e],r[36]=t,n[e]=s(),t}function d(){return(b()-1)/2147483646}},We=Qe({seed:Fe()});d(We,"factory",Qe);var Ze=We;export{Ze as default};
//# sourceMappingURL=mod.js.map
